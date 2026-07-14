(function(global){
  'use strict';

  const frame = global.requestAnimationFrame
    ? callback=>global.requestAnimationFrame(callback)
    : callback=>global.setTimeout(()=>callback(performance.now()),16);

  class PerformanceManager {
    constructor(){
      this.domCache = new Map();
      this.assetCache = new Map();
      this.assetQueue = [];
      this.assetQueueActive = 0;
      this.assetQueueConcurrency = 3;
      this.memoCache = new Map();
      this.windowCache = new Map();
      this.htmlCache = new WeakMap();
      this.renderQueue = new Map();
      this.updateQueue = new Map();
      this.animationQueue = new Map();
      this.eventScopes = new Map();
      this.framePending = false;
      this.metrics = new Map();
      this.sessionRevision = 0;
      this.visibilityHandler = ()=>{
        if(document.visibilityState==='hidden') this.flushMemory(false);
      };
      document.addEventListener('visibilitychange',this.visibilityHandler,{passive:true});
    }

    getDOM(key,resolver){
      const cached = this.domCache.get(key);
      if(cached && cached.isConnected) return cached;
      const value = typeof resolver==='function' ? resolver() : document.querySelector(resolver||key);
      if(value) this.domCache.set(key,value);
      return value || null;
    }

    invalidateDOM(key){
      if(key) this.domCache.delete(key);
      else this.domCache.clear();
    }

    setHTML(element,html){
      if(!element) return false;
      if(this.htmlCache.get(element)===html && element.childNodes.length) return false;
      element.innerHTML = html;
      this.htmlCache.set(element,html);
      return true;
    }

    forgetHTML(element){
      if(element) this.htmlCache.delete(element);
    }

    queueRender(key,task){
      if(typeof task==='function') this.renderQueue.set(key,task);
      this.requestFrame();
    }

    queueUpdate(key,task){
      if(typeof task==='function') this.updateQueue.set(key,task);
      this.requestFrame();
    }

    queueAnimation(key,task){
      if(typeof task==='function') this.animationQueue.set(key,task);
      this.requestFrame();
    }

    requestFrame(){
      if(this.framePending) return;
      this.framePending = true;
      frame(timestamp=>this.flushFrame(timestamp));
    }

    flushFrame(timestamp){
      this.framePending = false;
      const run = queue=>{
        const tasks = [...queue.values()];
        queue.clear();
        tasks.forEach(task=>{
          try{ task(timestamp); }
          catch(error){ console.error('[PerformanceManager] Frame task failed:',error); }
        });
      };
      run(this.updateQueue);
      run(this.renderQueue);
      run(this.animationQueue);
      if(this.updateQueue.size || this.renderQueue.size || this.animationQueue.size) this.requestFrame();
    }

    cacheAsset(url,priority=1){
      if(!url) return Promise.resolve(null);
      if(this.assetCache.has(url)) return this.assetCache.get(url);
      const promise = new Promise(resolve=>{
        this.assetQueue.push({url,priority:Number(priority)||0,resolve});
        this.assetQueue.sort((a,b)=>a.priority-b.priority);
        this.processAssetQueue();
      });
      this.assetCache.set(url,promise);
      return promise;
    }

    processAssetQueue(){
      while(this.assetQueueActive<this.assetQueueConcurrency && this.assetQueue.length){
        const entry = this.assetQueue.shift();
        this.assetQueueActive++;
        const image = new Image();
        image.decoding = 'async';
        const finish = value=>{
          entry.resolve(value);
          this.assetQueueActive--;
          this.processAssetQueue();
        };
        image.onload = async ()=>{
          try{ if(image.decode) await image.decode(); }catch(_){ }
          finish(image);
        };
        image.onerror = ()=>finish(null);
        image.src = entry.url;
      }
    }

    rememberAsset(url,priority=1){
      if(url && !this.assetCache.has(url)) this.cacheAsset(url,priority);
      return url;
    }

    memo(key,token,factory){
      const cached = this.memoCache.get(key);
      if(cached && Object.is(cached.token,token)) return cached.value;
      const value = factory();
      this.memoCache.set(key,{token,value});
      return value;
    }

    invalidateMemo(key){
      if(key) this.memoCache.delete(key);
      else this.memoCache.clear();
    }

    suspendWindow(id,host){
      if(!id || !host || !host.childNodes.length) return;
      const scrollTop = host.scrollTop;
      const fragment = document.createDocumentFragment();
      while(host.firstChild) fragment.appendChild(host.firstChild);
      const previous = this.windowCache.get(id);
      this.windowCache.set(id,{
        fragment,
        scrollTop,
        dirty:previous?.dirty || false,
        revision:this.sessionRevision,
      });
      this.forgetHTML(host);
    }

    restoreWindow(id,host){
      const cached = this.windowCache.get(id);
      if(!cached || cached.dirty || !cached.fragment?.childNodes.length || !host) return false;
      host.replaceChildren(cached.fragment);
      host.scrollTop = cached.scrollTop || 0;
      this.windowCache.delete(id);
      this.forgetHTML(host);
      return true;
    }

    commitWindow(id){
      const cached = this.windowCache.get(id);
      if(cached) cached.dirty = false;
    }

    markWindowsDirty(exceptId){
      this.sessionRevision++;
      this.windowCache.forEach((entry,id)=>{ if(id!==exceptId) entry.dirty = true; });
    }

    discardWindow(id){
      this.windowCache.delete(id);
    }

    clearWindows(){
      this.windowCache.clear();
    }

    delegate(scope,type,root,selector,handler,options){
      if(!scope || !type || !root || !selector || typeof handler!=='function') return;
      const key = `${scope}:${type}:${selector}`;
      if(this.eventScopes.has(key)) return;
      const listener = event=>{
        const target = event.target?.closest?.(selector);
        if(target && root.contains(target)) handler(event,target);
      };
      root.addEventListener(type,listener,options);
      this.eventScopes.set(key,()=>root.removeEventListener(type,listener,options));
    }

    cleanupScope(scope){
      const prefix = `${scope}:`;
      [...this.eventScopes.entries()].forEach(([key,dispose])=>{
        if(!key.startsWith(prefix)) return;
        dispose();
        this.eventScopes.delete(key);
      });
    }

    startMeasure(name){
      const previous = this.metrics.get(name);
      this.metrics.set(name,{start:performance.now(),duration:previous?.duration||0,count:previous?.count||0});
    }

    endMeasure(name){
      const metric = this.metrics.get(name);
      if(!metric) return 0;
      metric.duration = performance.now()-metric.start;
      metric.count++;
      return metric.duration;
    }

    measureFrames(name='frames',sampleCount=120){
      const count = Math.max(2,Math.round(sampleCount));
      return new Promise(resolve=>{
        const samples = [];
        let previous = performance.now();
        const sample = timestamp=>{
          samples.push(timestamp-previous);
          previous = timestamp;
          if(samples.length<count){ frame(sample); return; }
          const sorted = [...samples].sort((a,b)=>a-b);
          const average = samples.reduce((sum,value)=>sum+value,0)/samples.length;
          const result = {
            count:1,
            duration:average,
            fps:average>0 ? 1000/average : 0,
            p95:sorted[Math.floor(sorted.length*.95)] || average,
            max:sorted[sorted.length-1] || average,
            samples:samples.length,
          };
          this.metrics.set(name,result);
          resolve(result);
        };
        frame(sample);
      });
    }

    snapshot(){
      return {
        domEntries:this.domCache.size,
        assetEntries:this.assetCache.size,
        memoEntries:this.memoCache.size,
        cachedWindows:this.windowCache.size,
        delegatedListeners:this.eventScopes.size,
        queuedTasks:this.renderQueue.size+this.updateQueue.size+this.animationQueue.size,
        metrics:Object.fromEntries([...this.metrics].map(([key,value])=>[key,Object.fromEntries(Object.entries(value).filter(([field])=>field!=='start'))])),
        memory:performance.memory ? {
          usedJSHeapSize:performance.memory.usedJSHeapSize,
          totalJSHeapSize:performance.memory.totalJSHeapSize,
        } : null,
      };
    }

    flushMemory(full){
      [...this.domCache.entries()].forEach(([key,node])=>{ if(!node?.isConnected) this.domCache.delete(key); });
      if(full){
        this.clearWindows();
        this.assetQueue.length = 0;
        this.assetCache.clear();
        this.memoCache.clear();
        this.htmlCache = new WeakMap();
      }
    }

    resetSession(){
      this.renderQueue.clear();
      this.updateQueue.clear();
      this.animationQueue.clear();
      this.clearWindows();
      this.invalidateDOM();
      this.htmlCache = new WeakMap();
      this.memoCache.clear();
      this.sessionRevision++;
    }
  }

  global.performanceManager = global.performanceManager || new PerformanceManager();
})(window);
