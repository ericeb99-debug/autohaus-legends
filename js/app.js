/* =============================== CONSTANTS =============================== */
const APPS = [
  {id:'dashboard', name:'Dashboard', icon:'DA'},
  {id:'market', name:'Fahrzeugbörse', icon:'MK'},
  {id:'acquisition', name:'Fahrzeugankauf', icon:'AK'},
  {id:'inventory', name:'Fahrzeugbestand', icon:'FB'},
  {id:'listings', name:'Inserate', icon:'IN'},
  {id:'wishlist', name:'Wunschliste', icon:'WL'},
  {id:'mailbox', name:'Postfach', icon:'CH'},
  {id:'customers', name:'Kunden', icon:'KD'},
  {id:'reviews', name:'Bewertungen', icon:'BW'},
  {id:'contracts', name:'Verträge', icon:'VT'},
  {id:'deliveries', name:'Fahrzeuglieferung', icon:'LF'},
  {id:'workshop', name:'Werkstatt', icon:'WS'},
  {id:'ecu', name:'ECU-Tuning', icon:'EC'},
  {id:'bank', name:'Bank', icon:'BK'},
  {id:'finance', name:'Finanzen', icon:'FI'},
  {id:'marketstats', name:'Marktstatistik', icon:'MS'},
  {id:'insights', name:'Business Insights', icon:'BI'},
  {id:'calculator', name:'Kalkulator', icon:'KA'},
  {id:'employees', name:'Mitarbeiter', icon:'MA'},
  {id:'upgrades', name:'Upgrades', icon:'UP'},
  {id:'legacy', name:'Legacy-Historie', icon:'L'},
  {id:'design', name:'Design', icon:'DS'},
  {id:'updates', name:'Updates & News', icon:'UN'},
  {id:'settings', name:'Einstellungen', icon:'SE'},
];

/* ============================================================
   VERSIONS- & CHANGELOG-SYSTEM  —  ANLEITUNG FÜR KI-ASSISTENTEN
   ============================================================
   Wenn du (eine KI) Änderungen an diesem Spiel vornimmst, pflege
   den Changelog IMMER automatisch mit — der Spieler soll ihn nie
   doppelt schreiben müssen:
   1. GAME_VERSION und package.json NICHT automatisch ändern.
   2. Prüfe zuerst, ob die Änderung zu einem bestehenden großen Thema
      gehört. Wenn ja, erweitere diesen Eintrag und erstelle KEINE
      zusätzliche Karte. Nur komplett neue Systeme erhalten einen neuen
      Eintrag.
   3. Neue Einträge können bei Bedarf mit pinned:true als Highlight
      oben gehalten werden:
      {
        version:'x.x.x',
        date:'JJJJ-MM-TT',
        pinned:true,
        type:'major' | 'content' | 'feature' | 'balance' | 'bugfix' | 'hotfix' | 'normal',
        title:'Kurzer prägnanter Titel',
        headline:'Optional: 1 Satz Zusammenfassung',
        sections:{ new:['...'], improved:['...'], fixed:['...'] }
      }
      Leere Abschnitte einfach weglassen. Einträge auf Deutsch,
      aus Spielersicht formuliert, keine technischen Interna.
   3. Fertig — Anzeige in "Updates & News" erfolgt ohne sichtbare
      Versionsnummern im Spiel.
   ============================================================ */
const GAME_VERSION = '1.1.1';
const UPDATE_TYPES = {
  major:   {icon:'rocket', label:'Großes Inhaltsupdate', badge:'Major Update',   ribbon:'Großes Update',  accent:'var(--brass)'},
  content: {icon:'box',    label:'Content Update',       badge:'Content Update', ribbon:'Content Update', accent:'var(--blue)'},
  feature: {icon:'spark',  label:'Feature Update',       badge:'Feature Update', ribbon:'Feature Update', accent:'var(--emerald)'},
  balance: {icon:'scales', label:'Balance Update',       badge:'Balance Update', ribbon:'Balance Update', accent:'var(--emerald)'},
  bugfix:  {icon:'wrench', label:'Bugfix Update',        badge:'Bugfix Update',  ribbon:'Bugfix',         accent:'var(--blue)'},
  hotfix:  {icon:'bolt',   label:'Hotfix',               badge:'Hotfix',         ribbon:'Hotfix',         accent:'var(--violet)'},
  normal:  {icon:'gear',   label:'Update',               badge:'Update',         ribbon:'Update',         accent:'var(--blue)'},
};
const UPD_SVG = {
  rocket:'<svg viewBox="0 0 24 24"><path d="M9.5 14.5 5 13c.6-2.2 1.8-3.6 4-4l1.6.4"/><path d="M9.5 14.5 11 19c2.2-.6 3.6-1.8 4-4l-.4-1.6"/><path d="M9.5 14.5c1.5-4.5 4.5-8 9.5-9.5.4 5-1.5 8.5-5.5 11z"/><circle cx="15" cy="9" r="1.3"/><path d="M4.5 19.5c.8-.2 1.6-.7 2-1.5"/></svg>',
  box:'<svg viewBox="0 0 24 24"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7.3 12 12l8.7-4.7"/><path d="M12 22V12"/></svg>',
  spark:'<svg viewBox="0 0 24 24"><path d="M12 3l1.9 5.4L19.5 10l-5.6 1.6L12 17l-1.9-5.4L4.5 10l5.6-1.6z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>',
  scales:'<svg viewBox="0 0 24 24"><path d="M12 4v16"/><path d="M8 20h8"/><path d="M4 7h16"/><path d="M6.5 7l-2.5 5.5a3 3 0 0 0 5 0z"/><path d="M17.5 7 15 12.5a3 3 0 0 0 5 0z"/></svg>',
  wrench:'<svg viewBox="0 0 24 24"><path d="M14.7 6.3 17.5 3.5l3 3-2.8 2.8"/><path d="M13.8 7.2 5 16v3h3l8.8-8.8"/></svg>',
  bolt:'<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
  gear:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.3 3.1a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.3 3.1h5l.3-3.1a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1z"/></svg>',
  plus:'<svg viewBox="0 0 24 24"><path d="M12 6v12"/><path d="M6 12h12"/></svg>',
  arrowUp:'<svg viewBox="0 0 24 24"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"/></svg>',
  refresh:'<svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M20.5 15a9 9 0 1 1-2.1-9.4L23 10"/></svg>',
  chevron:'<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
};
let appRuntimeInfo = {name:'Automotive Empire', isDev:false, updaterEnabled:true};
const PROFILE_INDEX_KEY = 'autodealer-profiles-v1';
const LEGACY_SAVE_KEY = 'autodealer-state-v2';

function uid(p){return p+'_'+Math.random().toString(36).slice(2,9);}
function randInt(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function randFloat(a,b){return Math.random()*(b-a)+a;}
function choice(arr){return arr[randInt(0,arr.length-1)];}
function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function escapeHtml(value){
  return String(value ?? '').replace(/[&<>"']/g, ch=>({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[ch]);
}
function escapeAttr(value){
  return escapeHtml(value).replace(/`/g, '&#96;');
}
const BUILTIN_APP_BACKGROUNDS = [
  {id:'standard', name:'Standard', desc:'Ruhiger Automotive Empire-Verlauf ohne Bild.', url:'', overlay:.36},
];
const DEFAULT_APP_BACKGROUND_ID = '1';
// Wird zur Laufzeit aus assets/backgrounds/ befuellt. Bilddateien muessen nicht im Code eingetragen werden.
let APP_BACKGROUNDS = [...BUILTIN_APP_BACKGROUNDS];
let appBackgroundsDiscovered = false;
const APP_BG_DIR = 'assets/backgrounds/';
const APP_BG_IMAGE_RE = /\.(avif|gif|jpe?g|png|webp)$/i;
function backgroundNameFromId(id){
  return id.split(/[-_\s]+/).filter(Boolean)
    .map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}
function backgroundIdFromName(name){
  return name.replace(APP_BG_IMAGE_RE,'').toLowerCase()
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
}
function backgroundNameFromPath(path){
  const filename = String(path).split('/').pop() || '';
  const base = filename.replace(APP_BG_IMAGE_RE, '');
  return backgroundNameFromId(base);
}
function uniqueBackgroundId(baseId, used){
  let id = baseId || 'background';
  let n = 2;
  while(used.has(id)){
    id = `${baseId}-${n}`;
    n++;
  }
  used.add(id);
  return id;
}
// Liest ein Verzeichnis-Listing des Static-Servers und liefert die Eintragsnamen (Dateien und Ordner).
async function fetchDirEntries(url){
  const res = await fetch(url, {cache:'no-store'});
  if(!res.ok) throw new Error('HTTP '+res.status);
  const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
  const entries = [];
  doc.querySelectorAll('a[href]').forEach(a=>{
    let href = a.getAttribute('href')||'';
    href = href.replace(/[?#].*$/,'');
    const isDir = href.endsWith('/');
    let seg = href.replace(/\/+$/,'').split('/').pop()||'';
    try{ seg = decodeURIComponent(seg); }catch(e){}
    if(!seg || seg==='.' || seg==='..') return;
    entries.push({name:seg, isDir});
  });
  return entries;
}
// Baut aus einem relativen Pfad innerhalb von assets/backgrounds/ eine URL mit kodierten Segmenten.
function backgroundUrlFromPath(path){
  return APP_BG_DIR + String(path).split('/').filter(s=>s && s!=='.' && s!=='..').map(encodeURIComponent).join('/');
}
async function listBackgroundsFromNativeBridge(){
  if(!window.backgrounds || typeof window.backgrounds.list !== 'function') return [];
  const list = await window.backgrounds.list();
  return Array.isArray(list) ? list : [];
}
// Browser-Fallback: Directory Listing des Static-Servers, falls verfuegbar.
async function scanBackgroundListing(){
  const entries = await fetchDirEntries(APP_BG_DIR);
  const files = [];
  // Flache Bilddateien direkt in assets/backgrounds/
  entries.filter(e=>!e.isDir && APP_BG_IMAGE_RE.test(e.name))
    .forEach(e=>files.push(e.name));
  // Unterordner optional rekursiv eine Ebene tief.
  for(const dir of entries.filter(e=>e.isDir)){
    try{
      const sub = await fetchDirEntries(APP_BG_DIR+encodeURIComponent(dir.name)+'/');
      sub.filter(s=>!s.isDir && APP_BG_IMAGE_RE.test(s.name))
        .forEach(img=>files.push(`${dir.name}/${img.name}`));
    }catch(e){}
  }
  return files;
}
async function discoverAppBackgrounds(){
  let files = [];
  try{ files = await listBackgroundsFromNativeBridge(); }catch(e){ files = []; }
  if(!files.length){
    try{ files = await scanBackgroundListing(); }catch(e){ files = []; }
  }
  const used = new Set(['standard']);
  const merged = [
    BUILTIN_APP_BACKGROUNDS[0],
    ...files
      .filter(file=>typeof file === 'string' && APP_BG_IMAGE_RE.test(file))
      .map(file=>String(file).replace(/\\/g, '/').split('/').filter(s=>s && s!=='.' && s!=='..').join('/'))
      .filter(Boolean)
      .sort((a,b)=>a.localeCompare(b, undefined, {numeric:true, sensitivity:'base'}))
      .map(file=>{
        const id = uniqueBackgroundId(backgroundIdFromName(file), used);
        return {
          id,
          name: backgroundNameFromPath(file),
          desc: 'Automatisch aus assets/backgrounds erkannt.',
          url: backgroundUrlFromPath(file),
          overlay: .35,
        };
      })
  ];
  APP_BACKGROUNDS.forEach(old=>{
    const now = merged.find(m=>m.id===old.id);
    if(now && now.url !== old.url) delete appBackgroundLoadState[old.id];
  });
  APP_BACKGROUNDS = merged;
  appBackgroundsDiscovered = true;
  if(state){
    applyAppBackground(state.backgroundId, true);
    if(currentPage==='design') renderApp('design');
  }
}
const DEFAULT_DESIGN_SETTINGS = {
  uiTransparency: 70,
  glassStrength: 72,
  backgroundOverlay: 35,
  backgroundBlur: 0,
};
const LEGACY_BACKGROUND_IDS = {
  'showroom-day':'1',
  'premium-dark':'2',
  'luxury-night':'2',
  'blueprint':'3',
};
const appBackgroundLoadState = {};
function normalizeAppBackgroundId(id){
  return LEGACY_BACKGROUND_IDS[id] || id;
}
function defaultAppBackground(){
  return APP_BACKGROUNDS.find(bg=>bg.id===DEFAULT_APP_BACKGROUND_ID)
    || APP_BACKGROUNDS.find(bg=>bg.url)
    || APP_BACKGROUNDS[0];
}
function getAppBackground(id){
  const cleanId = normalizeAppBackgroundId(id);
  return APP_BACKGROUNDS.find(bg=>bg.id===cleanId) || defaultAppBackground();
}
function designSettings(){
  state.designSettings = {...DEFAULT_DESIGN_SETTINGS, ...(state.designSettings || {})};
  return state.designSettings;
}
function pct(v){
  return clamp(Math.round(Number(v)||0), 0, 100);
}
function setCssVar(name, value){
  document.documentElement.style.setProperty(name, value);
}
function uiAlpha(base, transparency){
  return clamp(base - (transparency - DEFAULT_DESIGN_SETTINGS.uiTransparency) * 0.0038, 0.28, 0.90).toFixed(3);
}
function applyDesignSettings(){
  const ds = state ? designSettings() : DEFAULT_DESIGN_SETTINGS;
  const t = pct(ds.uiTransparency);
  const g = pct(ds.glassStrength);
  const blur = Math.round((8 + g * 0.34) * 10) / 10;
  const strongBlur = Math.round((12 + g * 0.36) * 10) / 10;
  setCssVar('--ui-chrome-alpha-a', uiAlpha(.58, t));
  setCssVar('--ui-chrome-alpha-b', uiAlpha(.50, t));
  setCssVar('--ui-sidebar-alpha-a', uiAlpha(.62, t));
  setCssVar('--ui-sidebar-alpha-b', uiAlpha(.55, t));
  setCssVar('--ui-topbar-alpha-a', uiAlpha(.56, t));
  setCssVar('--ui-topbar-alpha-b', uiAlpha(.48, t));
  setCssVar('--ui-bottom-alpha-a', uiAlpha(.60, t));
  setCssVar('--ui-bottom-alpha-b', uiAlpha(.52, t));
  setCssVar('--ui-panel-alpha-a', uiAlpha(.60, t));
  setCssVar('--ui-panel-alpha-b', uiAlpha(.54, t));
  setCssVar('--ui-modal-alpha-a', uiAlpha(.66, t));
  setCssVar('--ui-modal-alpha-b', uiAlpha(.60, t));
  setCssVar('--ui-highlight-alpha', (0.055 + g * 0.00055).toFixed(3));
  setCssVar('--ui-highlight-strong-alpha', (0.065 + g * 0.00065).toFixed(3));
  setCssVar('--ui-reflect-alpha', (0.080 + g * 0.00070).toFixed(3));
  setCssVar('--ui-reflect-soft-alpha', (0.032 + g * 0.00038).toFixed(3));
  setCssVar('--ui-reflect-strong-alpha', (0.040 + g * 0.00042).toFixed(3));
  setCssVar('--ui-glass-blur', blur+'px');
  setCssVar('--ui-glass-strong-blur', strongBlur+'px');
  setCssVar('--ui-glass-saturate', (1 + g * 0.0048).toFixed(2));
  setCssVar('--ui-glass-brightness', (1 + g * 0.00145).toFixed(2));
  setCssVar('--app-bg-blur', Math.round(pct(ds.backgroundBlur) * 0.18 * 10) / 10 + 'px');
  const overlayAlpha = clamp(0.04 + pct(ds.backgroundOverlay) * 0.0066, 0.04, 0.70);
  setCssVar('--app-bg-overlay', `rgba(0,0,0,${overlayAlpha.toFixed(3)})`);
}
function setDesignSetting(key, value){
  const ds = designSettings();
  ds[key] = pct(value);
  applyDesignSettings();
  const lbl = document.getElementById('design_'+key+'_value');
  if(lbl) lbl.textContent = ds[key] + '%';
  scheduleSave();
}
function resetDesignSettings(){
  state.designSettings = {...DEFAULT_DESIGN_SETTINGS};
  applyDesignSettings();
  renderApp('design');
  scheduleSave();
}
function ensureAppBackground(){
  const app = document.getElementById('app');
  if(!app) return null;
  let bg = document.getElementById('appBackground');
  if(!bg){
    bg = document.createElement('div');
    bg.id = 'appBackground';
    bg.innerHTML = '<div class="app-bg-layer is-visible" data-layer="a"></div><div class="app-bg-layer" data-layer="b"></div>';
    app.insertBefore(bg, app.firstChild);
  }
  return bg;
}
function applyAppBackground(id, instant=false){
  const bg = getAppBackground(id || (state && state.backgroundId));
  if(bg.url && appBackgroundLoadState[bg.id] !== 'ok'){
    if(appBackgroundLoadState[bg.id] === 'fail'){
      applyAppBackground('standard', instant);
      return;
    }
    appBackgroundLoadState[bg.id] = 'loading';
    const img = new Image();
    img.onload = ()=>{
      appBackgroundLoadState[bg.id] = 'ok';
      if((state && state.backgroundId) === bg.id) applyAppBackground(bg.id, instant);
    };
    img.onerror = ()=>{
      appBackgroundLoadState[bg.id] = 'fail';
      if((state && state.backgroundId) === bg.id){
        state.backgroundId = 'standard';
        applyAppBackground('standard', true);
        renderApp(currentPage);
        scheduleSave();
      }
    };
    img.src = bg.url;
    return;
  }
  document.body.classList.toggle('has-app-bg', !!bg.url);
  applyDesignSettings();
  const wrap = ensureAppBackground();
  if(!wrap) return;
  const layers = Array.from(wrap.querySelectorAll('.app-bg-layer'));
  if(layers.length<2) return;
  const current = layers.find(l=>l.classList.contains('is-visible')) || layers[0];
  const next = layers.find(l=>l!==current) || layers[1];
  const image = bg.url ? `url("${bg.url}")` : 'none';
  if(current.dataset.bgId === bg.id && current.style.backgroundImage === image) return;
  next.dataset.bgId = bg.id;
  next.style.backgroundImage = image;
  if(instant){
    current.classList.remove('is-visible');
    next.classList.add('is-visible');
    current.style.backgroundImage = image;
    current.dataset.bgId = bg.id;
    return;
  }
  requestAnimationFrame(()=>{
    next.classList.add('is-visible');
    current.classList.remove('is-visible');
  });
}
function setAppBackground(id){
  state.backgroundId = getAppBackground(id).id;
  applyAppBackground(state.backgroundId);
  renderApp(currentPage);
  scheduleSave();
}
function money(n){
  const neg = n<0; n=Math.abs(Math.round(n));
  const s = n.toLocaleString('de-DE');
  return (neg?'-':'')+s+' €';
}
function negativeMoney(n){
  n = Math.max(0, Math.round(n||0));
  return n>0 ? '-'+money(n) : money(0);
}
// Hält Schieberegler, Zahlenfeld und Anzeige-Label für Preis-Eingaben synchron.
// Regler bewegt -> Zahlenfeld & Label aktualisieren (sofort geklemmt).
function syncFromRange(prefix, val, min, max, varName){
  val = clamp(Math.round(+val||min), min, max);
  const n = document.getElementById(prefix+'Number');
  const l = document.getElementById(prefix+'lbl');
  if(n) n.value = val;
  if(l) l.textContent = money(val);
  window[varName] = val;
}
// Zahlenfeld getippt -> Regler & Label live mitziehen, OHNE das Zahlenfeld selbst
// während des Tippens zu überschreiben (sonst kann man keine mehrstelligen Zahlen eingeben).
function syncFromNumber(prefix, val, min, max, varName){
  let raw = (val===''||val===null) ? min : +val;
  if(isNaN(raw)) raw = min;
  const clamped = clamp(Math.round(raw), min, max);
  const r = document.getElementById(prefix+'Range');
  const l = document.getElementById(prefix+'lbl');
  if(r) r.value = clamped;
  if(l) l.textContent = money(clamped);
  window[varName] = clamped;
}
// Beim Verlassen des Zahlenfelds sichtbar auf einen gültigen Wert einrasten.
function snapNumberField(prefix, min, max, varName){
  const n = document.getElementById(prefix+'Number');
  if(!n) return;
  const clamped = clamp(Math.round(+n.value||min), min, max);
  n.value = clamped;
  window[varName] = clamped;
}

function applyTheme(){
  const mode = state && state.themeMode === 'light' ? 'light' : 'dark';
  document.body.classList.toggle('theme-light', mode === 'light');
}
function setThemeMode(mode){
  state.themeMode = mode === 'light' ? 'light' : 'dark';
  applyTheme();
  renderAllOpen();
  scheduleSave();
}
function toggleThemeMode(){
  setThemeMode(state.themeMode === 'light' ? 'dark' : 'light');
}

function defaultState(){
  return {
    themeMode: 'dark',
    backgroundId: DEFAULT_APP_BACKGROUND_ID,
    designSettings: {...DEFAULT_DESIGN_SETTINGS},
    day: 1,
    cash: 45000,
    loanPrincipal: 0,
    loanRate: 0.00025, // per day
    reputation: 55,
    marketTrend: 1.0,
    evDemand: 1.0,
    suvDemand: 1.0,
    nextIds: 1,
    inventory: [],      // owned cars
    market: [],         // cars available to buy
    listings: {},        // carId -> {price, views, createdDay}
    offers: [],          // active customer offers
    workshopJobs: [],    // {carId, jobId, daysLeft}
    ecuRequests: [],
    ecuIntroRequestCreated: false,
    ecuSelectedRequestId: null,
    ecuHistory: [],
    ecuStats: {completed:0, failed:0, revenue:0, byTune:{}},
    ecuVehicleHistories: {},
    deliveries: [],
    deliveryHistory: [],
    employees: [],
    candidates: [],
    lastEmployeePayrollDay: 1,
    salaryBalanceVersion: 2,
    upgrades: {},
    upgradeStats: {totalInvestment:0, purchases:0},
    transactions: [],
    cashHistory: [],
    salesHistory: [],
    purchaseHistory: [],
    marketHistory: [],
    marketStatsFilters: {},
    calcInputs: {},
    notifications: [],
    unreadNotif: 0,
    xp: 0,
    level: 1,
    passiveXpEarned: 0,
    legacy: {
      current: 0,
      completed: [],
      explained: false,
      foundingCapital: 45000,
      startedAtDay: 1,
      masterUnlocked: false,
    },
    salesCount: 0,
    purchaseCount: 0,
    cashSales: 0,
    financingSales: 0,
    leasingSales: 0,
    totalProfit: 0,
    bestProfit: 0,
    fastSales: 0,
    workshopCompleted: 0,
    dunningsSent: 0,
    claimsRecovered: 0,
    legacyDunningFeeExtraIncome: 0,
    lastProfit: 0,
    lastTierLuxury: false,
    achievements: [],
    searchOrders: [],
    purchaseRequests: [],
    purchaseRequestArchive: [],
    reviews: [],
    customers: {},
    extendedFinancingMode: true,
    chatDebug: false,
    receivables: [],
    leaseContracts: [],
    dayDurationMs: 6000,
    maxNewOffersPerDay: 1,
    dunningFees: {reminder:0, level1:10, level2:35, level3:100, collection:180, legal:350},
    greedyDunningMode: false,
    paymentDelayPercent: 18,
    carPhotoCache: {},
    lastOfferDay: 0,
    lastPurchaseRequestDay: 0,
    seenReviewIds: [],
    reviewsAnswered: 0,
    dockItems: null,
    bottomItems: null,
  };
}

const DUNNING_STEPS = [
  {level:0, key:'overdue', label:'Überfällig', feeKey:null, nextDays:0},
  {level:1, key:'reminder', label:'Zahlungserinnerung', feeKey:'reminder', nextDays:3},
  {level:2, key:'level1', label:'Mahnstufe 1', feeKey:'level1', nextDays:4},
  {level:3, key:'level2', label:'Mahnstufe 2', feeKey:'level2', nextDays:5},
  {level:4, key:'level3', label:'Mahnstufe 3', feeKey:'level3', nextDays:6},
  {level:5, key:'collection', label:'Inkasso', feeKey:'collection', nextDays:7},
  {level:6, key:'repossession', label:'Fahrzeugrücknahme', feeKey:'collection', nextDays:8},
  {level:7, key:'legal', label:'Gerichtsverfahren', feeKey:'legal', nextDays:10},
];
function dunningStep(level){ return DUNNING_STEPS[Math.min(level, DUNNING_STEPS.length-1)]; }
function dunningFee(level){
  const step = dunningStep(level);
  if(!step.feeKey) return 0;
  return +(state.dunningFees && state.dunningFees[step.feeKey] !== undefined ? state.dunningFees[step.feeKey] : defaultState().dunningFees[step.feeKey]) || 0;
}
function standardDunningFee(level){
  const step = dunningStep(level);
  if(!step.feeKey) return 0;
  return +(defaultState().dunningFees[step.feeKey] || 0);
}
function recordLegacyDunningFeeAdjustment(actualFee, level){
  const extra = Math.max(0, Math.round((actualFee||0) - standardDunningFee(level||0)));
  if(extra>0) state.legacyDunningFeeExtraIncome = (state.legacyDunningFeeExtraIncome||0) + extra;
  return extra;
}
function claimFeeBucket(level){
  if(level>=7) return 'court';
  if(level>=5) return 'collection';
  if(level>=2) return 'dunning';
  return 'reminder';
}
function claimChargeKey(level){
  const step = dunningStep(level);
  if(step.feeKey==='collection') return 'collection';
  if(step.feeKey==='legal') return 'legal';
  return step.feeKey || `level-${level}`;
}
function normalizeClaimFees(claim){
  if(!claim) return claim;
  claim.feeItems = Array.isArray(claim.feeItems) ? claim.feeItems : [];
  if(!claim.feeItems.length && (claim.fee||0)>0){
    const maxLevel = Math.min(claim.dunningLevel||0, DUNNING_STEPS.length-1);
    let remaining = claim.fee||0;
    for(let level=1; level<=maxLevel; level++){
      const fee = dunningFee(level);
      if(fee<=0) continue;
      const key = claimChargeKey(level);
      if(claim.feeItems.some(item=>item.chargeKey===key)) continue;
      claim.feeItems.push({
        day: claim.dueDay || state.day,
        level,
        key: dunningStep(level).key,
        label: dunningStep(level).label,
        fee,
        chargeKey: key,
        bucket: claimFeeBucket(level),
      });
      remaining -= fee;
    }
    if(remaining>0 && !claim.feeItems.length){
      const level = maxLevel || 1;
      claim.feeItems.push({
        day: claim.dueDay || state.day,
        level,
        key: dunningStep(level).key,
        label: dunningStep(level).label,
        fee: remaining,
        chargeKey: claimChargeKey(level),
        bucket: claimFeeBucket(level),
      });
    }
  }
  claim.fee = (claim.feeItems||[]).reduce((sum,item)=>sum+(item.fee||0),0);
  return claim;
}
function addClaimFeeForLevel(claim, level){
  normalizeClaimFees(claim);
  const fee = dunningFee(level);
  if(fee<=0) return 0;
  const key = claimChargeKey(level);
  if(claim.feeItems.some(item=>item.chargeKey===key)) return 0;
  const step = dunningStep(level);
  claim.feeItems.push({
    day: state.day,
    level,
    key: step.key,
    label: step.label,
    fee,
    chargeKey: key,
    bucket: claimFeeBucket(level),
  });
  claim.fee = claimFeeTotal(claim);
  return fee;
}
function claimFeesByBucket(claim){
  normalizeClaimFees(claim);
  const sums = {reminder:0, dunning:0, collection:0, court:0, total:0};
  (claim.feeItems||[]).forEach(item=>{
    const bucket = item.bucket || claimFeeBucket(item.level||0);
    sums[bucket] = (sums[bucket]||0) + (item.fee||0);
    sums.total += item.fee||0;
  });
  return sums;
}
function claimFeeTotal(claim){ return claimFeesByBucket(claim).total; }
function recordLegacyClaimFeeAdjustment(claim){
  normalizeClaimFees(claim);
  let extra = 0;
  (claim.feeItems||[]).forEach(item=>{
    extra += Math.max(0, Math.round((item.fee||0) - standardDunningFee(item.level||0)));
  });
  if(extra>0) state.legacyDunningFeeExtraIncome = (state.legacyDunningFeeExtraIncome||0) + extra;
  return extra;
}
function greedyDunningPressure(claim){
  if(!state.greedyDunningMode || !claim) return 0;
  return clamp(claimFeeTotal(claim)/Math.max(1, claim.baseAmount||1), 0, 3);
}
function contractDesc(contract){
  return contract.type==='leasing' ? contract.carSnapshot.brand+' '+contract.carSnapshot.model : contract.carDesc;
}
function activeClaims(){
  const fin = (state.receivables||[]).filter(r=>!r.archived && !r.closed && r.openClaim).map(r=>({kind:'fin', contract:r, claim:r.openClaim}));
  const lea = (state.leaseContracts||[]).filter(l=>!l.archived && !l.closed && l.openClaim).map(l=>({kind:'lea', contract:l, claim:l.openClaim}));
  return fin.concat(lea);
}
function claimTotal(claim){ return (claim.baseAmount||0) + claimFeeTotal(claim); }
function claimStatusLabel(claim){ return dunningStep(claim.dunningLevel||0).label; }
function claimActionLabel(claim){
  if(claim.legalResolved && claim.status==='Ratenvereinbarung nach Gericht') return `Ratenvereinbarung bis Tag ${claim.nextActionDay}`;
  if((claim.dunningLevel||0)>=7 && claim.legalResolved) return 'Gericht entschieden';
  if((claim.dunningLevel||0)>=7) return `Gerichtsergebnis ab Tag ${claim.nextActionDay}`;
  const next = dunningStep((claim.dunningLevel||0)+1);
  if((claim.dunningLevel||0)>0 && state.day < (claim.nextActionDay||0)) return `${next.label} ab Tag ${claim.nextActionDay}`;
  return claim.actionRequired ? `${next.label} jetzt fällig` : `${next.label} ab Tag ${claim.nextActionDay}`;
}
function claimNeedsAction(claim){
  if(!claim) return false;
  if(claim.legalResolved && claim.status==='Ratenvereinbarung nach Gericht') return (claim.nextActionDay||0)<=state.day;
  if((claim.dunningLevel||0)>=7 && !claim.legalResolved) return !!claim.actionRequired || (claim.nextActionDay||0)<=state.day;
  return !!claim.actionRequired || ((claim.nextActionDay||0)<=state.day && !claim.legalResolved);
}
function activeClaimActionCount(){
  return activeClaims().filter(x=>claimNeedsAction(x.claim)).length;
}
function claimVisualState(claim){
  if(!claim) return {tone:'good', label:'Bezahlt / abgeschlossen', color:'var(--teal)', border:'rgba(62,207,127,.28)', background:'rgba(62,207,127,.055)'};
  if(claimNeedsAction(claim)) return {tone:'action', label:'Aktion erforderlich', color:'var(--crimson)', border:'rgba(224,85,92,.42)', background:'rgba(224,85,92,.12)'};
  if((claim.dunningLevel||0)>=7 || String(claim.status||'').toLowerCase().includes('gericht')) return {tone:'running', label:'Verfahren läuft', color:'var(--blue)', border:'rgba(92,134,255,.34)', background:'rgba(92,134,255,.08)'};
  return {tone:'waiting', label:'Wartet auf Zahlung', color:'var(--amber)', border:'rgba(245,158,11,.36)', background:'rgba(245,158,11,.09)'};
}
function paymentDelayChance(contract){
  const base = clamp((state.paymentDelayPercent ?? 18)/100, 0, 1);
  const creditAdjustment = clamp((60-(contract.creditScore||60))/220, -0.14, 0.22);
  const financingAdjustment = contract.financingRiskAdjustment || 0;
  const dunningBonus = employeeBonus('Mahnwesen-Spezialist');
  return clamp(base + creditAdjustment + financingAdjustment - dunningBonus*0.04 - upgradeLevel('dunning_management')*0.03, 0, 0.98);
}
function createOpenClaim(contract, kind, amount){
  if(contract.openClaim) return addMissedRateToClaim(contract, amount);
  const desc = contractDesc(contract);
  contract.openClaim = {
    id: uid('claim'), kind, dueDay: state.day, baseAmount: amount, fee: 0, feeItems: [],
    dunningLevel: 0, openRates: 1, rateItems: [{day:state.day, amount}],
    status: 'überfällig', actionRequired: true, nextActionDay: state.day,
    history: [{day:state.day, type:'missed', text:`Rate ${money(amount)} nicht eingegangen.`}],
  };
  contract.status = 'überfällig';
  notify(`${contract.customerName} hat die Rate für ${desc} nicht gezahlt. Mahnwesen prüfen.`,'warn');
  showToast('⚠', `<b>Rate überfällig</b><br>${contract.customerName}<br>${desc}<br>Fällige Rate: <b style="color:var(--crimson);">${money(amount)}</b>`, 'Verträge öffnen', ()=>navigateTo('contracts'));
  return contract.openClaim;
}
function addMissedRateToClaim(contract, amount){
  const claim = contract.openClaim;
  if(!claim) return createOpenClaim(contract, contract.type==='leasing'?'lea':'fin', amount);
  claim.baseAmount = (claim.baseAmount||0) + amount;
  claim.openRates = (claim.openRates||1) + 1;
  claim.rateItems = claim.rateItems || [];
  claim.rateItems.push({day:state.day, amount});
  claim.history = claim.history || [];
  claim.history.unshift({day:state.day, type:'missed', text:`Weitere Rate ${money(amount)} nicht eingegangen. Offene Raten: ${claim.openRates}.`});
  claim.actionRequired = (claim.dunningLevel||0)===0 || state.day >= (claim.nextActionDay||state.day);
  contract.status = 'überfällig';
  notify(`${contract.customerName}: weitere Rate für ${contractDesc(contract)} ist fällig und wurde zum Rückstand addiert.`,'warn');
  return claim;
}
function recordContractPayment(contract, amount, fee, label){
  contract.totalPaid = (contract.totalPaid||0)+amount+fee;
  contract.paymentHistory = contract.paymentHistory || [];
  contract.paymentHistory.unshift({day:state.day, amount, fee:fee||0, label:label||'Zahlung'});
  contract.paymentHistory = contract.paymentHistory.slice(0,20);
  addTx('income', `${label||'Rate'} ${contract.customerName} (${contractDesc(contract)})`, amount+fee);
}
function closeOpenClaim(contract, paidByDunning){
  const claim = contract.openClaim;
  if(!claim) return;
  normalizeClaimFees(claim);
  const fees = claimFeesByBucket(claim);
  const fee = fees.total;
  const legacyFeeAdjustment = recordLegacyClaimFeeAdjustment(claim);
  if(contract.type==='finanzierung'){
    const monthlyRate = contract.nominalRate/12;
    const rates = Math.max(1, claim.openRates||1);
    for(let i=0;i<rates;i++){
      const interestPortion = Math.round(contract.remainingPrincipal*monthlyRate);
      let principalPortion = (contract.monthlyPayment||0) - interestPortion;
      if(principalPortion > contract.remainingPrincipal) principalPortion = contract.remainingPrincipal;
      if(principalPortion < 0) principalPortion = 0;
      contract.remainingPrincipal = Math.max(0, Math.round(contract.remainingPrincipal-principalPortion));
      contract.monthsElapsed = (contract.monthsElapsed||0)+1;
      contract.monthsRemaining = Math.max(0, contract.monthsRemaining-1);
      if(contract.remainingPrincipal<=0) break;
    }
  }
  recordContractPayment(contract, claim.baseAmount||0, fee, paidByDunning ? claimStatusLabel(claim)+' beglichen' : 'Monatsrate');
  if(legacyFeeAdjustment>0){
    claim.history = claim.history || [];
    claim.history.unshift({day:state.day, type:'legacy', text:`Legacy-Bewertung: ${money(legacyFeeAdjustment)} über Standard-Mahngebühr wird später nicht bewertet.`});
  }
  if(paidByDunning){
    state.claimsRecovered = (state.claimsRecovered||0)+1;
    addXp(28);
    trainEmployees('Mahnwesen-Spezialist', 35, 'offene Forderung eingezogen');
  }
  contract.openClaim = null;
  contract.dunningLevel = 0;
  contract.status = 'aktuell';
  if(contract.type==='finanzierung' && (contract.monthsRemaining<=0 || contract.remainingPrincipal<=0)){
    contract.status = 'Abgeschlossen';
    contract.closed = true;
    addXp(45);
    notify(`Finanzierung von ${contract.customerName} für ${contractDesc(contract)} ist vollständig abbezahlt.`,'good');
    completeFinancingContract(contract);
  }
  showToast('💳', `<b>Zahlung eingegangen</b><br>Kunde: ${contract.customerName}<br>${contractDesc(contract)}<br>${paidByDunning?claimStatusLabel(claim)+' erfolgreich beglichen':'Rate bezahlt'}<br>Offene Raten: ${claim.openRates||1} · Ratenbetrag: ${money(claim.baseAmount||0)}<br>Mahngebühren: ${money(fees.dunning)} · Inkasso: ${money(fees.collection)} · Gericht: ${money(fees.court)}<br><b style="color:var(--emerald);">Gesamt erhalten: +${money((claim.baseAmount||0)+fee)}</b>`, 'Verträge ansehen', ()=>navigateTo('contracts'));
  showAchievementUnlocks(checkAchievements());
}
function findContractByKind(kind, id){
  return kind==='fin'
    ? (state.receivables||[]).find(r=>r.id===id)
    : (state.leaseContracts||[]).find(l=>l.id===id);
}

// Grober Neuwagenpreis -> Modell-Tier (1.0 = ca. Kompaktklasse-Niveau ~28.000€)
function carTierOf(brand, model){
  const range = BRANDS[brand].models[model];
  return ((range[0]+range[1])/2)/28000;
}
function tierInfo(brand, model){
  const t = carTierOf(brand, model);
  if(t < 0.85) return {label:'Budget', color:'#2fb87c'};
  if(t < 1.3) return {label:'Mittelklasse', color:'#d4af6a'};
  if(t < 2.0) return {label:'Premium', color:'#8b7ff0'};
  if(t < 3.5) return {label:'Luxus', color:'#ff8a5c'};
  return {label:'Exotisch', color:'#ef5da8'};
}
function stableHash(str){
  let h = 0;
  for(let i=0;i<str.length;i++) h = ((h<<5)-h) + str.charCodeAt(i) | 0;
  return Math.abs(h);
}
function vehiclePhotoCategory(c){
  const tier = tierInfo(c.brand, c.model).label;
  if(c.engine==='Elektro') return 'electric';
  if(SUV_MODELS.includes(c.model)) return 'suv';
  if(tier==='Luxus' || tier==='Exotisch') return 'luxury';
  if(tier==='Premium') return 'premium';
  return 'budget';
}
function vehicleBodyShape(c){
  const m = c.model;
  const tier = tierInfo(c.brand, c.model).label;
  const wagon = ['Passat','Arteon','Octavia','Superb','A4','A6','V40','V60','XF','Tipo','308','Corolla','Megane','Insignia','Ceed','Astra','Focus','V90','E-Klasse','C-Klasse'];
  const hatch = ['up!','Polo','Golf','Corsa','Fabia','Scala','Fiesta','Yaris','Aygo X','1er','A1','A3','i10','i20','i30','Picanto','Rio','Clio','Twingo','108','208','C1','C3','Panda','500','Ibiza','Leon','Swift','Jazz'];
  const coupe = ['Mustang','911','718 Boxster','Roma','Portofino','296 GTB','Huracán','Continental GT','F-Type','MX-5','GranTurismo','4er','CLA','A5','TT','A7','CLS'];
  const cabrio = ['718 Boxster','Portofino','MX-5','500','F-Type'];
  const van = ['Berlingo','B-Klasse','Espace','Jogger','5008','Kodiaq','Sorento','Touran'];
  const transporter = ['Transit','Sprinter','Vito','Crafter','Transporter','Proace','Ducato'];
  if(transporter.includes(m)) return 'transporter';
  if(cabrio.includes(m)) return 'cabrio';
  if((c.power||0) >= 360 || tier==='Exotisch') return 'sport';
  if(SUV_MODELS.includes(m)) return 'suv';
  if(van.includes(m)) return 'van';
  if(coupe.includes(m)) return 'coupe';
  if(wagon.includes(m)) return 'wagon';
  if(hatch.includes(m)) return 'hatch';
  return tier==='Luxus' || tier==='Premium' ? 'sedan' : 'hatch';
}
function bodyShapeLabel(shape){
  return ({suv:'SUV', wagon:'Kombi', sedan:'Limousine', hatch:'Kleinwagen', coupe:'Coupé', cabrio:'Cabrio', sport:'Sportwagen', van:'Van', transporter:'Transporter'})[shape] || 'Karosserie';
}
function vehiclePaintColor(color){
  return ({
    'Schwarz':'#111827','Weiß':'#e8eef6','Silber':'#aeb8c7','Grau':'#647084',
    'Blau':'#2f64f6','Rot':'#c9434f','Anthrazit':'#27303d','Braun':'#755039'
  })[color] || '#6f7d91';
}
function mixHexColor(hex, target, amount){
  const clean = String(hex||'#6f7d91').replace('#','');
  const other = String(target||'#ffffff').replace('#','');
  const expand = v => v.length===3 ? v.split('').map(ch=>ch+ch).join('') : v.padEnd(6,'0').slice(0,6);
  const a = expand(clean), b = expand(other);
  const channel = i => {
    const from = parseInt(a.slice(i,i+2),16);
    const to = parseInt(b.slice(i,i+2),16);
    return clamp(Math.round(from + (to-from)*amount),0,255).toString(16).padStart(2,'0');
  };
  return `#${channel(0)}${channel(2)}${channel(4)}`;
}
function carRendererProfile(shape){
  const profiles = {
    hatch:{body:'M42 83 C49 61 73 49 113 48 L154 51 C181 55 202 69 218 93 L222 102 L35 102 Z',glass:'M80 56 L117 55 L140 78 L62 78 C66 68 72 60 80 56 Z M126 56 L157 58 C174 61 187 70 196 80 L149 79 Z',wheels:[76,188,16],belt:80,ride:0},
    sedan:{body:'M33 84 C54 63 81 55 121 55 L164 56 C189 58 213 73 229 96 L234 103 L28 103 Z',glass:'M82 62 L122 60 L145 80 L63 80 C68 72 75 66 82 62 Z M130 60 L163 61 C181 64 195 73 207 82 L153 81 Z',wheels:[75,195,16],belt:82,ride:0},
    wagon:{body:'M31 82 C51 58 77 51 122 51 L188 54 C210 60 224 76 234 102 L27 102 Z',glass:'M76 59 L122 57 L143 81 L58 81 C63 70 69 63 76 59 Z M130 58 L183 60 C199 64 210 72 219 83 L151 81 Z',wheels:[75,197,16],belt:82,ride:0},
    suv:{body:'M32 80 C45 55 72 45 118 43 L186 47 C210 55 226 73 237 103 L27 105 Z',glass:'M76 52 L123 51 L149 79 L57 80 C62 66 68 57 76 52 Z M132 52 L183 55 C201 60 213 70 222 82 L157 80 Z',wheels:[78,199,18],belt:81,ride:-4},
    coupe:{body:'M34 87 C59 70 91 62 134 62 L165 64 C193 67 217 80 234 99 L237 104 L27 104 Z',glass:'M91 67 L131 66 L149 82 L68 82 C75 75 83 70 91 67 Z M137 66 L164 67 C183 70 197 77 208 86 L156 83 Z',wheels:[78,196,17],belt:84,ride:1},
    cabrio:{body:'M34 88 C58 73 88 66 129 66 L165 67 C193 69 218 82 234 99 L237 104 L28 104 Z',glass:'M94 69 L129 68 L145 83 L72 83 C78 76 86 72 94 69 Z M151 70 C170 70 190 77 206 87 L155 84 Z',wheels:[78,196,17],belt:84,ride:1},
    sport:{body:'M26 91 C55 75 91 67 139 68 L170 70 C202 73 226 84 241 100 L245 105 L22 105 Z',glass:'M93 71 L135 70 L153 85 L65 85 C74 78 83 73 93 71 Z M142 70 L168 72 C187 74 202 80 215 89 L160 86 Z',wheels:[82,202,18],belt:86,ride:3},
    van:{body:'M29 78 C41 53 68 43 113 43 L198 47 C217 55 229 72 237 103 L27 104 Z',glass:'M69 53 L119 52 L141 80 L51 81 C56 66 62 58 69 53 Z M129 53 L192 57 C209 62 219 72 225 84 L149 81 Z',wheels:[76,201,17],belt:81,ride:-2},
    transporter:{body:'M27 75 C35 52 58 42 97 42 L210 45 C226 51 235 69 239 104 L27 104 Z',glass:'M62 53 L108 52 L128 81 L45 81 C49 67 55 58 62 53 Z M137 54 L198 56 C214 62 222 73 226 84 L146 82 Z',wheels:[76,203,17],belt:82,ride:-3}
  };
  return profiles[shape] || profiles.hatch;
}
function rendererSlug(seed){
  return Math.abs(seed || 1).toString(36);
}
function wheelSvg(x, y, r, premium, sport, rimId){
  const spokes = sport ? `
    <path class="spoke" d="M${x} ${y-r+5} L${x} ${y+r-5} M${x-r+5} ${y} L${x+r-5} ${y} M${x-r*.62} ${y-r*.62} L${x+r*.62} ${y+r*.62} M${x+r*.62} ${y-r*.62} L${x-r*.62} ${y+r*.62}"></path>` :
    `<path class="spoke" d="M${x} ${y-r+6} L${x} ${y+r-6} M${x-r+6} ${y} L${x+r-6} ${y} M${x-r*.52} ${y-r*.52} L${x+r*.52} ${y+r*.52}"></path>`;
  return `<g>
    <circle class="tire" cx="${x}" cy="${y}" r="${r}"></circle>
    <circle class="rim" fill="url(#${rimId})" cx="${x}" cy="${y}" r="${premium ? r*.58 : r*.48}"></circle>
    ${spokes}
    <circle class="hub" cx="${x}" cy="${y}" r="${Math.max(3,r*.18)}"></circle>
  </g>`;
}
function renderBodyShape(c){
  ensureVehiclePhoto(c);
  const shape = vehicleBodyShape(c);
  const label = bodyShapeLabel(shape);
  const profile = carRendererProfile(shape);
  const tier = tierInfo(c.brand, c.model);
  const tierLabel = tier.label;
  const premium = ['Premium','Luxus','Exotisch'].includes(tierLabel);
  const sport = shape==='sport' || (c.power||0) >= 300 || tierLabel==='Exotisch';
  const ev = c.engine==='Elektro';
  const seed = c.photoLock || stableHash([c.id,c.brand,c.model,c.year,c.color].join('|'));
  const id = 'carSvg'+rendererSlug(seed);
  const base = vehiclePaintColor(c.color);
  const paintLight = mixHexColor(base, '#ffffff', premium ? .42 : .32);
  const paintDark = mixHexColor(base, '#000000', sport ? .42 : .32);
  const roofRail = ['suv','wagon','van','transporter'].includes(shape) ? `<path class="rail" d="M74 45 C103 39 158 40 193 45"></path>` : '';
  const spoiler = sport ? `<path class="accent" d="M208 82 L239 79"></path><path class="detail" d="M31 104 L63 100"></path>` : '';
  const cabrioLine = shape==='cabrio' ? `<path class="detail" d="M129 68 C143 61 158 61 174 67"></path>` : '';
  const premiumLine = premium ? `<path class="accent" d="M58 ${profile.belt+9} C103 ${profile.belt+14} 160 ${profile.belt+14} 217 ${profile.belt+8}"></path><circle class="badge-dot" cx="128" cy="${profile.belt+14}" r="2.6"></circle>` : '';
  const evSignature = ev ? `<path class="signature" d="M206 86 L229 88 M207 91 L228 93"></path><path class="accent" d="M116 106 L126 91 L119 91 L133 73"></path>` : '';
  const doors = shape==='transporter'
    ? `<path class="cut" d="M130 55 L130 102 M185 57 L185 102"></path>`
    : `<path class="cut" d="M122 60 L118 100 M154 82 L150 101"></path>`;
  const trimY = profile.belt + (sport ? 10 : 13);
  const wheelY = 104 + profile.ride;
  const [frontWheel, rearWheel, wheelR] = profile.wheels;
  return `<div class="car-media" style="--car-paint:${base};--tier-color:${tier.color}">
    <svg class="body-shape" viewBox="0 0 260 128" role="img" aria-label="${escapeAttr(c.brand)} ${escapeAttr(c.model)} ${label}">
      <defs>
        <linearGradient id="paintGradient${id}" x1="38" y1="45" x2="226" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="${paintLight}"></stop>
          <stop offset=".48" stop-color="var(--car-paint)"></stop>
          <stop offset="1" stop-color="${paintDark}"></stop>
        </linearGradient>
        <linearGradient id="glassGradient${id}" x1="62" y1="49" x2="204" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="rgba(231,244,255,.86)"></stop>
          <stop offset=".55" stop-color="rgba(93,132,166,.54)"></stop>
          <stop offset="1" stop-color="rgba(18,34,52,.68)"></stop>
        </linearGradient>
        <radialGradient id="rimGradient${id}" cx="42%" cy="35%" r="70%">
          <stop offset="0" stop-color="#f4f7fb"></stop>
          <stop offset=".55" stop-color="${premium ? '#c7d4e4' : '#9aa8b8'}"></stop>
          <stop offset="1" stop-color="#4e5b6b"></stop>
        </radialGradient>
      </defs>
      <ellipse class="ground" cx="132" cy="110" rx="${shape==='transporter'?112:104}" ry="${shape==='sport'?9:12}"></ellipse>
      ${roofRail}
      <path class="paint" fill="url(#paintGradient${id})" d="${profile.body}"></path>
      <path class="glass" fill="url(#glassGradient${id})" d="${profile.glass}"></path>
      <path class="lower" d="M39 ${trimY} C86 ${trimY+7} 175 ${trimY+7} 229 ${trimY} L235 104 L31 104 Z"></path>
      <path class="trim" d="M48 ${profile.belt} C89 ${profile.belt+7} 177 ${profile.belt+7} 224 ${profile.belt}"></path>
      <path class="shine" d="M62 ${profile.belt-16} C96 ${profile.belt-24} 151 ${profile.belt-22} 195 ${profile.belt-10}"></path>
      ${doors}
      ${premiumLine}
      ${spoiler}
      ${cabrioLine}
      <path class="lamp" d="M213 87 C224 87 232 91 236 97 C225 98 217 96 210 92 Z"></path>
      <path class="tail" d="M35 88 C43 86 49 88 54 94 C47 96 39 97 33 95 Z"></path>
      ${evSignature}
      ${wheelSvg(frontWheel, wheelY, wheelR, premium, sport, `rimGradient${id}`)}
      ${wheelSvg(rearWheel, wheelY, wheelR, premium, sport, `rimGradient${id}`)}
      <path class="detail" d="M70 103 L55 112 M191 103 L210 112"></path>
    </svg>
    <span class="photo-source">${label}</span>
  </div>`;
}
function ensureVehiclePhoto(c){
  if(c && c.photoLock===undefined) c.photoLock = stableHash([c.id,c.brand,c.model,c.year,c.color].join('|'));
  return c;
}
function renderCarPhoto(c){
  return renderBodyShape(c);
}

function generateCar(opts){
  opts = opts || {};
  const brandNames = Object.keys(BRANDS);
  const premiumBrands = ['BMW','Mercedes-Benz','Audi','Porsche','Tesla','Volvo','Land Rover','Jaguar'];
  const luxuryLevel = state ? upgradeLevel('luxury_access') : 0;
  const marketTools = state ? upgradeLevel('market_tools') : 0;
  const equity = state ? Math.max(0, companyEquity()) : 0;
  const scale = state ? companyProgressScale() : .36;
  const premiumChance = clamp(0.04 + scale*0.16 + luxuryLevel*0.055 + Math.min(.16, equity/9000000), 0.04, 0.42);
  const branchBrandPool = premiumBrands;
  const pair = opts.segment && MARKET_SEGMENT_POOLS[opts.segment] ? choice(MARKET_SEGMENT_POOLS[opts.segment]) : null;
  const brand = opts.brand || (pair ? pair[0] : (Math.random()<premiumChance ? choice(branchBrandPool) : choice(brandNames)));
  const b = BRANDS[brand];
  let modelNames = Object.keys(b.models);
  if(Math.random()<0.08 + scale*0.12){
    const suvModels = modelNames.filter(m=>SUV_MODELS.includes(m) || /touring|variant|avant|kombi|outback|wagon/i.test(m));
    if(suvModels.length) modelNames = suvModels;
  }
  const model = opts.model || (pair ? pair[1] : choice(modelNames));
  const priceRange = b.models[model];
  const newPrice = randInt(priceRange[0], priceRange[1]);
  const tier = carTierOf(brand, model);

  const year = opts.year || randInt(opts.yearMin||2009, opts.yearMax||2026);
  const age = Math.max(0, 2026-year);
  const expectedMileage = Math.max(1, age*14500);
  const mileage = clamp(Math.round(expectedMileage + randInt(-25000,35000)),0,320000);
  const engine = opts.engine ? (ENGINES.find(e=>e.label===opts.engine)||choice(ENGINES)) : (Math.random()<0.08 + scale*0.14 ? ENGINES.find(e=>e.label==='Elektro') : choice(ENGINES));
  const power = Math.round(randInt(opts.powerMin||75, opts.powerMax||230) * (tier>1.6?1.35:(tier>1.1?1.1:1)));
  const transmission = choice(TRANS);
  const color = choice(COLORS);
  let condition = clamp(Math.round((opts.conditionBase||100) - age*randInt(1,3) - (mileage/13000) + randInt(-6,8)),20,99);
  const tuvMonths = randInt(-2,24);

  // Realistische Wertminderung: erstes Jahr starker Sprung, danach abgeschwächter jährlicher Verlust, mit Sockelwert.
  let decay = age<=0 ? 0.92 : 0.80*Math.pow(0.905, Math.max(0,age-1));
  decay = Math.max(decay, 0.09);

  const mileageDelta = (mileage-expectedMileage)/expectedMileage;
  const mileageFactor = clamp(1-mileageDelta*0.18, 0.55, 1.25);
  const conditionMult = 0.62+0.38*(condition/100);

  let value = newPrice*decay*mileageFactor*conditionMult*engine.mult;
  const trend = (state?state.marketTrend:1) * (engine.label==='Elektro'?(state?state.evDemand:1):1) * (SUV_MODELS.includes(model)?(state?state.suvDemand:1):1);
  value = Math.max(600, value*trend);

  const marketValue = Math.round(value/10)*10;
  const askDelta = randFloat(0.88 - marketTools*0.012,1.06 - marketTools*0.006) * (opts.askMultiplier||1);
  const price = Math.round(marketValue*askDelta/10)*10;

  const id = 'car_'+(state?state.nextIds++:randInt(1,99999));
  const car = {
    id,
    photoLock: stableHash([id,brand,model,year,color].join('|')),
    brand, model, year, mileage, engine:engine.label, power:Math.round(power),
    transmission, color, condition, hiddenIssues: [], tuvMonths, newPrice,
    inspected:false, price, marketValue,
    purchasePrice:null, standDays:0, dayAdded: state?state.day:1,
    location:'market', repairStatus:null,
  };
  const wear = createVehicleWearProfile(car);
  car.wearProfile = {wearScore:wear.wearScore, owners:wear.owners, maintenanceScore:wear.maintenanceScore, individuality:wear.individuality};
  car.issues = wear.issues;
  car.vehicleFile = createVehicleFile(car, car.issues);
  updateVehicleFileState(car);
  const issuePenalty = clamp(car.issues.reduce((s,i)=>s+(i.severity||1),0)*0.018, 0, .22);
  car.marketValue = Math.round(car.marketValue*(1-issuePenalty)/10)*10;
  car.price = Math.round(car.price*(1-issuePenalty*.8)/10)*10;
  return car;
}

function marketVehicleSegment(c){
  const value = c.price || c.marketValue || c.newPrice || 0;
  const tier = tierInfo(c.brand, c.model).label;
  const shape = vehicleBodyShape(c);
  if(value >= 2800000) return 'hypercar';
  if(value >= 900000 || ['Bugatti','Koenigsegg','Pagani','Rimac'].includes(c.brand)) return 'supersport';
  if(shape==='suv') return 'suv';
  if(shape==='wagon') return 'kombi';
  if(tier==='Luxus' || value>=150000) return 'luxus';
  if(tier==='Exotisch' || shape==='sport' || (c.power||0)>=430) return 'sportwagen';
  if(shape==='sedan') return 'mittelklasse';
  if(['Golf','Astra','Scala','Focus','Corolla','A3','1er','i30','Ceed','Leon','Mazda 3','Civic'].includes(c.model) && value>=12000) return 'kompakt';
  if(value < 18000) return 'kleinwagen';
  if(value < 42000) return 'kompakt';
  return 'mittelklasse';
}
function marketPriceBand(c){
  const value = c.price || c.marketValue || c.newPrice || 0;
  return MARKET_PRICE_BANDS.find(b=>value>=b.min && value<b.max) || MARKET_PRICE_BANDS[MARKET_PRICE_BANDS.length-1];
}
function marketSegmentTargets(){
  ensureBranches();
  const level = state.level||1;
  const scale = companyProgressScale();
  return {
    kleinwagen:MARKET_SEGMENT_MIN.kleinwagen,
    kompakt:MARKET_SEGMENT_MIN.kompakt,
    mittelklasse:MARKET_SEGMENT_MIN.mittelklasse,
    suv:MARKET_SEGMENT_MIN.suv,
    kombi:MARKET_SEGMENT_MIN.kombi,
    sportwagen:Math.max(8, Math.round(MARKET_SEGMENT_MIN.sportwagen * Math.max(scale, level>=12 ? .5 : .4))),
    luxus:Math.max(5, Math.round(MARKET_SEGMENT_MIN.luxus * Math.max(scale, level>=18 ? .55 : .34))),
    supersport:Math.max(2, Math.round(MARKET_SEGMENT_MIN.supersport * Math.max(scale, level>=25 ? .48 : .22))),
    hypercar:Math.max(1, Math.round(MARKET_SEGMENT_MIN.hypercar * Math.max(scale, level>=30 ? .45 : .2))),
  };
}
function generateMarketCarForSegment(segment){
  const opts = {segment};
  if(segment==='kleinwagen'){ opts.yearMin=2010; opts.yearMax=2021; opts.conditionBase=92; opts.askMultiplier=0.82; }
  if(segment==='kompakt'){ opts.yearMin=2018; opts.yearMax=2026; opts.conditionBase=99; opts.askMultiplier=1.04; }
  if(segment==='mittelklasse'){ opts.yearMin=2014; opts.yearMax=2026; opts.conditionBase=98; }
  if(segment==='suv' || segment==='kombi'){ opts.yearMin=2014; opts.yearMax=2026; opts.conditionBase=98; }
  if(segment==='sportwagen'){ opts.yearMin=2016; opts.yearMax=2026; opts.conditionBase=101; opts.powerMin=220; opts.powerMax=420; opts.askMultiplier=1.04; }
  if(segment==='luxus'){ opts.yearMin=2021; opts.yearMax=2026; opts.conditionBase=104; opts.powerMin=250; opts.powerMax=520; opts.askMultiplier=1.16; }
  if(segment==='supersport'){ opts.yearMin=2020; opts.yearMax=2026; opts.conditionBase=104; opts.powerMin=480; opts.powerMax=820; opts.askMultiplier=1.14; }
  if(segment==='hypercar'){ opts.yearMin=2021; opts.yearMax=2026; opts.conditionBase=105; opts.powerMin=700; opts.powerMax=1200; opts.askMultiplier=1.22; }
  const c = generateCar(opts);
  c.marketSource = segment==='hypercar' ? 'Exklusive Händlerauktion' : (segment==='supersport' ? 'Sammlerfahrzeug' : choice(['Privatverkäufer','Händlerangebot','Leasingrückläufer','Firmenfahrzeug','Importfahrzeug','Jahreswagen','Gebrauchtwagen']));
  return c;
}
function generateMarketCarForBand(band){
  if(band.id==='5m') return generateMarketCarForSegment('hypercar');
  if(band.id==='2m') return generateMarketCarForSegment(Math.random()<0.65?'hypercar':'supersport');
  if(band.id==='500k') return generateCar({brand:choice(['Rolls-Royce','Bentley','McLaren','Ferrari']), yearMin:2022, yearMax:2026, conditionBase:105, powerMin:360, powerMax:720, askMultiplier:1.22});
  if(band.id==='150k') return generateMarketCarForSegment(Math.random()<0.55?'luxus':'sportwagen');
  if(band.id==='60k') return generateMarketCarForSegment(choice(['mittelklasse','suv','kombi','sportwagen']));
  if(band.id==='20k') return generateMarketCarForSegment(choice(['kompakt','mittelklasse','suv','kombi']));
  return generateMarketCarForSegment('kleinwagen');
}
function rebalanceMarketPool(targetCount, burst){
  targetCount = targetCount||MARKET_POOL_SIZE;
  let branchMarket = activeMarket();
  const targets = marketSegmentTargets();
  Object.entries(targets).forEach(([segment,min])=>{
    let count = branchMarket.filter(c=>marketVehicleSegment(c)===segment).length;
    let guard = 0;
    while(count < min && guard++ < min*3){
      const car = generateMarketCarForSegment(segment);
      state.market.push(car);
      branchMarket.push(car);
      if(marketVehicleSegment(car)===segment) count++;
    }
  });
  MARKET_PRICE_BANDS.forEach(band=>{
    let count = branchMarket.filter(c=>marketPriceBand(c).id===band.id).length;
    let guard = 0;
    const dynamicTarget = band.id==='5m' ? Math.max(1, band.target) : band.target;
    while(count < dynamicTarget && guard++ < dynamicTarget*4){
      const car = generateMarketCarForBand(band);
      state.market.push(car);
      branchMarket.push(car);
      if(marketPriceBand(car).id===band.id) count++;
    }
  });
  const refill = Math.max(targetCount, Object.values(targets).reduce((a,b)=>a+b,0));
  let added = 0;
  while(branchMarket.length < refill && added < (burst||40)){
    const car = generateCar();
    state.market.push(car);
    branchMarket.push(car);
    added++;
  }
}
function refreshMarketPool(targetCount){
  rebalanceMarketPool(targetCount||MARKET_POOL_SIZE, 80);
}

/* =============================== REPUTATION / BEWERTUNGEN =============================== */
function reviewMetrics(){
  const reviews = state.reviews || [];
  if(!reviews.length) return {avg:0, count:0, recommend:0, satisfaction:0, response:0, complaint:0, influence:0};
  const avg = reviews.reduce((s,r)=>s+(r.stars||0),0)/reviews.length;
  const recommend = reviews.filter(r=>r.recommend).length/reviews.length*100;
  const response = reviews.filter(r=>r.reply).length/reviews.length*100;
  const complaint = reviews.filter(r=>r.complaint).length/reviews.length*100;
  const satisfaction = clamp(Math.round((avg/5)*82 + recommend*0.18),0,100);
  const influence = clamp((avg-3)*0.07 + (response/100)*0.03 - (complaint/100)*0.08, -0.16, 0.18);
  return {avg, count:reviews.length, recommend, satisfaction, response, complaint, influence};
}
function reviewInfluence(){
  return reviewMetrics().influence;
}
function starsText(n){
  return '★★★★★'.slice(0,n) + '☆☆☆☆☆'.slice(0,5-n);
}
function publishReview(review){
  state.reviews = state.reviews || [];
  state.reviews.unshift(review);
  const stars = review.stars || 3;
  const delta = stars>=5?3:(stars>=4?2:(stars===3?0:-2));
  state.reputation = clamp(state.reputation + delta, 0, 100);
  addXp(stars>=5 ? 35 : stars>=4 ? 24 : stars===3 ? 10 : 4);
  trainEmployees('Kundenservice', stars>=4 ? 28 : 18, stars<=2 ? 'Beschwerde bearbeitet' : 'positive Bewertung');
  showToast('⭐', `<b>Neue Bewertung</b><br>${review.customerName}: ${starsText(stars)}<br>${escapeHtml(review.text)}`, 'Bewertungen', ()=>navigateTo('reviews'));
  return true;
}
function reviewChanceForStars(stars, base){
  const emotionBoost = stars>=5 ? .18 : (stars<=2 ? .24 : (stars===3 ? -.12 : 0));
  return clamp(base + emotionBoost + reviewInfluence()*0.25, .12, .82);
}
function createReviewFromSale(offer, car, amount, profit, financing, reaction, delivery){
  state.reviews = state.reviews || [];
  const priceRatio = amount/Math.max(1, offer.amount||amount);
  let stars = 4;
  if(reaction.emoji==='😄') stars = 5;
  else if(reaction.emoji==='🙂') stars = 4;
  else if(reaction.emoji==='😐') stars = 3;
  else stars = 2;
  if(priceRatio>1.18) stars--;
  if(financing && offer.bankDecision) stars--;
  normalizeVehicleIssues(car);
  const unresolvedIssueWeight = (car.issues||[]).filter(i=>!i.repaired && (i.customerMentioned || (i.severity||1)>=3)).reduce((s,i)=>s+(i.severity||1),0);
  if(unresolvedIssueWeight>=3) stars--;
  if(unresolvedIssueWeight>=7) stars--;
  if(employeeBonus('Kundenservice')>0.35) stars++;
  if(Math.random()<upgradeLevel('premium_presence')*0.07 + upgradeLevel('reputation_campaign')*0.05) stars++;
  if(delivery){
    stars += delivery.reviewStarsDelta || 0;
    if(delivery.problem) stars--;
  }
  stars = clamp(stars, 1, 5);
  const deliveryChanceBoost = delivery ? (delivery.dealerSharePct>=1 ? .18 : (delivery.dealerSharePct>=.5 ? .09 : 0)) + (delivery.onTime ? .06 : -.08) : 0;
  const upgradeReviewBoost = upgradeLevel('premium_presence')*.025 + upgradeLevel('reputation_campaign')*.035;
  if(Math.random() > reviewChanceForStars(stars, .42 + deliveryChanceBoost + upgradeReviewBoost)) return false;
  const method = financing ? (financing.type==='leasing'?'Leasing':'Finanzierung') : 'Barzahlung';
  const comments = {
    5:[
      `Von der ersten Nachricht bis zur Übergabe des ${car.brand} ${car.model} lief alles angenehm klar. Fragen wurden ernst genommen und die ${method} wurde sauber erklärt.`,
      `Ich hatte selten so wenig Stress beim Autokauf. Kommunikation schnell, Preis fair und das Fahrzeug war genau wie beschrieben.`,
      `Sehr professionell und trotzdem menschlich. Besonders gut fand ich, dass nichts schöngeredet wurde. Würde wieder dort kaufen.`
    ],
    4:[
      `Der ${car.brand} ${car.model} war wie beschrieben und die Abwicklung war freundlich. Ein paar Details haben etwas gedauert, insgesamt aber sehr ordentlich.`,
      `Gute Beratung, nachvollziehbarer Preis und saubere Übergabe. Die Antwortzeiten hätten stellenweise etwas kürzer sein können.`,
      `Ich bin zufrieden. Nicht alles war perfekt, aber man hatte das Gefühl, dass sich gekümmert wird.`
    ],
    3:[
      `Das Fahrzeug passt, aber die Abstimmung rund um Preis und Übergabe hätte runder laufen können. Am Ende wurde alles gelöst.`,
      `Solide Erfahrung. Freundlich war es, nur bei den Details musste ich öfter nachfragen als erwartet.`,
      `Der Kauf war okay. Beim nächsten Mal wünsche ich mir mehr Tempo und klarere Kommunikation.`
    ],
    2:[
      `Nach der Probefahrt gab es mehrere Verzögerungen. Der Wagen ist in Ordnung, aber der Ablauf war für mich anstrengender als nötig.`,
      `Ich hatte mir mehr Transparenz gewünscht. Einige Punkte wurden erst spät angesprochen, deshalb nur zwei Sterne.`,
      `Freundlich, aber die Preisverhandlung war für mich nicht wirklich nachvollziehbar.`
    ],
    1:[
      `Ich habe mich mit dem Ablauf nicht wohlgefühlt. Zu viele offene Punkte und zu wenig klare Kommunikation.`,
      `Leider keine gute Erfahrung. Preis und Zustand haben für mich am Ende nicht zusammengepasst.`,
      `Ich würde hier eher vorsichtig sein. Es wirkte auf mich zu hektisch und nicht ausreichend transparent.`
    ]
  };
  const review = {
    id: uid('rev'), day: state.day, customerId: offer.customerId, customerName: offer.name,
    car: `${car.brand} ${car.model}`, method, stars, recommend: stars>=4, complaint: stars<=2,
    categories: {
      Freundlichkeit: clamp(stars + randInt(-1,1),1,5),
      Kommunikation: clamp(stars + randInt(-1,1),1,5),
      Preis: clamp(stars + (profit>2000?-1:1),1,5),
      Fahrzeugzustand: clamp(stars + (car.condition>=70?1:0),1,5),
      Service: clamp(stars + randInt(-1,1) + (delivery ? (delivery.onTime?1:-1) : 0),1,5),
    },
    text: choice(comments[stars]) + (delivery ? ` Lieferung: ${delivery.summary}` : ''),
    reply: '',
  };
  if(delivery){
    delivery.reviewStars = stars;
    delivery.reviewRecommend = stars>=4;
    delivery.reviewComplaint = stars<=2;
  }
  return publishReview(review);
}

/* =============================== FAHRZEUGANKAUF =============================== */
const SELLER_PERSONAS = [
  {key:'quick', label:'braucht schnell Geld', patience:2, flex:.22},
  {key:'emotional', label:'emotional am Fahrzeug', patience:4, flex:.08},
  {key:'market', label:'kennt den Marktwert genau', patience:3, flex:.12},
  {key:'profit', label:'will maximalen Preis', patience:3, flex:.06},
  {key:'flex', label:'sehr verhandlungsbereit', patience:4, flex:.25},
  {key:'stubborn', label:'bleibt stur', patience:5, flex:.04},
];
let selectedPurchaseRequestId = null;
function generatePurchaseRequest(){
  const metrics = reviewMetrics();
  const premiumBoost = clamp((state.reputation-55)/120 + metrics.influence, -0.15, 0.28);
  const car = generateCar();
  car.location = 'private_offer';
  car.inspected = false;
  if(Math.random()<premiumBoost){
    car.condition = clamp(car.condition + randInt(4,12), 20, 99);
    car.marketValue = Math.round(car.marketValue*randFloat(1.04,1.16)/10)*10;
  }
  const persona = choice(SELLER_PERSONAS);
  const wishFactor = randFloat(0.88,1.18) - persona.flex*0.25;
  const request = {
    id: uid('buyreq'), day: state.day, status:'open', sellerName: choice(FIRSTNAMES)+' '+choice(LASTNAMES),
    sellerType: Math.random()<0.22?'Firma':'Privatperson', persona: persona.key, personaLabel: persona.label,
    patience: persona.patience, flex: persona.flex,
    car, wishPrice: Math.max(300, Math.round(car.marketValue*wishFactor/10)*10),
    lastOffer: 0, inspected:false, historyRequested:false, obdRequested:false, photosRequested:false,
    photoQuality: choice(['unscharfe Handyfotos','ordentliche Außenbilder','Detailbilder vorhanden','nur zwei dunkle Fotos']),
    knownDamage: car.hiddenIssues.length && Math.random()<0.45 ? choice(car.hiddenIssues) : choice(['keine bekannt','kleine Gebrauchsspuren','Parkrempler hinten','Steinschläge vorne']),
    messages: [],
  };
  const lines = [
    `Hallo, ich möchte meinen ${car.brand} ${car.model} verkaufen. Haben Sie Interesse?`,
    `Mein neues Auto kommt nächste Woche, deshalb soll der ${car.brand} ${car.model} weg.`,
    `Wir möchten unseren ${car.brand} ${car.model} abgeben und suchen ein faires Autohaus.`,
    `Ich benötige kurzfristig Geld und würde meinen ${car.brand} ${car.model} verkaufen.`
  ];
  ensurePurchaseChat(request);
  sellerReply(request, choice(lines));
  return request;
}
function maybeGeneratePurchaseRequest(){
  state.purchaseRequests = state.purchaseRequests || [];
  const open = state.purchaseRequests.filter(r=>r.status==='open').length;
  const daysSinceLast = state.day - (state.lastPurchaseRequestDay||0);
  const cooldown = open>=2 ? 8 : (open===1 ? 5 : 3);
  if(open>=3 || daysSinceLast<cooldown) return;
  const chance = clamp(0.045 + state.reputation/1800 + reviewInfluence()*0.35 + upgradeLevel('market_tools')*0.012 + upgradeLevel('reputation_campaign')*0.008 - open*0.04, 0.025, 0.22);
  if(Math.random()<chance){
    const req = generatePurchaseRequest();
    state.purchaseRequests.unshift(req);
    state.lastPurchaseRequestDay = state.day;
    notify(`Neue Ankaufsanfrage: ${req.car.brand} ${req.car.model} von ${req.sellerName}.`, 'info');
  }
}
function sellerReply(req, text){
  if(!req.messages) req.messages = [];
  req.messages.push({from:'seller', day:state.day, text});
  updatePurchaseChatMemory(req, 'seller', text);
}
function dealerMsg(req, text){
  if(!req.messages) req.messages = [];
  req.messages.push({from:'player', day:state.day, text});
  updatePurchaseChatMemory(req, 'player', text);
}
function defaultPurchaseChatMemory(req){
  return {
    conversationState:'erste Anfrage',
    openQuestion:null,
    expectations:[],
    prices:[],
    rejectedPrices:[],
    photosDiscussed:false,
    historyDiscussed:false,
    obdDiscussed:false,
    inspectionDiscussed:false,
    paymentDiscussed:false,
    toneScore:0,
    ignoredQuestions:0,
    answeredQuestions:0,
    lastPlayerQuestionResult:null,
    lastIntent:'',
    trustDelta:0,
  };
}
function ensurePurchaseChat(req){
  if(!req) return null;
  req.purchaseChatMemory = {...defaultPurchaseChatMemory(req), ...(req.purchaseChatMemory||{})};
  if(!Array.isArray(req.purchaseChatMemory.expectations)) req.purchaseChatMemory.expectations = [];
  if(req.purchaseChatStatus===undefined) req.purchaseChatStatus = '';
  return req.purchaseChatMemory;
}
function analyzePurchaseIntent(text){
  const base = analyzeCustomerIntent(text||'');
  const lower = String(text||'').toLowerCase();
  const add = key => { if(!base.intents.includes(key)) base.intents.unshift(key); base.primary = key; };
  if(textHasAny(lower, ['ankaufen','kaufen','übernehmen','kaufe ich','nehmen wir'])) add('purchaseIntent');
  if(textHasAny(lower, ['besichtigung','besichtigen','anschauen','termin','vorbeikommen','prüfen'])) add('inspection');
  if(textHasAny(lower, ['bilder','fotos','detailbilder','innenraum'])) add('photos');
  if(textHasAny(lower, ['historie','serviceheft','scheckheft','wartung','unfallfrei','tüv','unterlagen'])) add('history');
  if(textHasAny(lower, ['obd','fehlerspeicher','diagnose'])) add('obd');
  if(textHasAny(lower, ['bar','überweisung','zahlung','sofort zahlen','abholen'])) add('payment');
  if(textHasAny(lower, ['zu niedrig','zu teuer','nicht mehr','anderer käufer','anderes autohaus'])) add('sellerConcern');
  if(base.amount && textHasAny(lower, ['biete','angebot','zahlen','geben','preis'])) add('purchaseOfferText');
  return base;
}
function detectSellerQuestion(text){
  const lower = String(text||'').toLowerCase();
  const has = words => words.some(w=>lower.includes(w));
  if(has(['angebot','preis','was zahlen','was bieten'])) return {key:'price', text:'Welches konkrete Angebot machen Sie?'};
  if(has(['wann','termin','vorbeikommen','besichtigung'])) return {key:'inspection', text:'Wann möchten Sie das Fahrzeug besichtigen?'};
  if(has(['zahlung','bar','überweisung','bezahlen'])) return {key:'payment', text:'Wie würden Sie bezahlen?'};
  if(has(['noch fragen','was brauchen','unterlagen'])) return {key:'info', text:'Welche Informationen benötigen Sie noch?'};
  return lower.includes('?') ? {key:'generic', text} : null;
}
function playerAnsweredSellerQuestion(question, text, analysis){
  if(!question) return true;
  if(analysis.primary==='evasive') return false;
  if(question.key==='price') return !!analysis.amount || ['purchaseOfferText','price','priceLowered','counterOffer'].includes(analysis.primary);
  if(question.key==='inspection') return ['inspection','appointment'].includes(analysis.primary) || analysis.yes || analysis.no;
  if(question.key==='payment') return analysis.primary==='payment' || /bar|überweisung|zahlung|sofort/i.test(text) || analysis.yes || analysis.no;
  if(question.key==='info') return ['photos','history','obd','inspection'].includes(analysis.primary) || analysis.yes || analysis.no;
  return analysis.primary!=='generic' || analysis.yes || analysis.no;
}
function updatePurchaseChatMemory(req, from, text){
  if(!req) return;
  const m = ensurePurchaseChat(req);
  const a = analyzePurchaseIntent(text||'');
  if(a.amount && a.amount>100) (from==='player' ? m.prices : m.rejectedPrices).push({day:state.day, amount:a.amount});
  if(['photos','images','imagesPromised'].includes(a.primary)) m.photosDiscussed = true;
  if(['history','service','tuv','accident','documents'].includes(a.primary)) m.historyDiscussed = true;
  if(a.primary==='obd') m.obdDiscussed = true;
  if(['inspection','appointment'].includes(a.primary)) m.inspectionDiscussed = true;
  if(a.primary==='payment') m.paymentDiscussed = true;
  if(from==='seller'){
    const question = detectSellerQuestion(text);
    if(question) m.openQuestion = {...question, askedDay:state.day, ignoredCount:m.openQuestion?.ignoredCount||0};
  }
  if(from==='player'){
    const open = m.openQuestion;
    const answered = playerAnsweredSellerQuestion(open, text, a);
    m.lastPlayerQuestionResult = open ? {key:open.key, answered, day:state.day} : null;
    if(open && answered){ m.openQuestion = null; m.answeredQuestions = (m.answeredQuestions||0)+1; }
    else if(open && !answered){ open.ignoredCount = (open.ignoredCount||0)+1; m.ignoredQuestions = (m.ignoredQuestions||0)+1; }
    if(a.tone==='polite') m.toneScore = clamp((m.toneScore||0)+1, -8, 8);
    if(a.tone==='rude') m.toneScore = clamp((m.toneScore||0)-2, -8, 8);
  }
  m.lastIntent = a.primary;
}
function derivePurchaseConversationState(req, analysis){
  const m = ensurePurchaseChat(req);
  let next = m.conversationState || 'erste Anfrage';
  if(analysis.primary==='purchaseOfferText' || analysis.primary==='price' || analysis.primary==='priceLowered') next = 'Preisverhandlung';
  else if(analysis.primary==='inspection') next = 'Besichtigung geplant';
  else if(analysis.primary==='photos') next = 'wartet auf Bilder';
  else if(analysis.primary==='history') next = 'wartet auf Historie';
  else if(analysis.primary==='obd') next = 'wartet auf OBD-Prüfung';
  else if(analysis.primary==='payment') next = 'Zahlung klären';
  else if(analysis.primary==='sellerConcern') next = 'Verkäufer zweifelt';
  else if(m.openQuestion) next = 'wartet auf Antwort';
  m.conversationState = next;
  return next;
}
function purchaseChatStatusForIntent(intent){
  if(intent==='photos') return 'Verkäufer sucht Bilder heraus ...';
  if(intent==='history') return 'Verkäufer prüft Unterlagen ...';
  if(intent==='obd') return 'Verkäufer reagiert auf OBD-Anfrage ...';
  if(intent==='inspection') return 'Verkäufer prüft Termin ...';
  if(intent==='purchaseOfferText' || intent==='price') return 'Verkäufer prüft Angebot ...';
  return 'Verkäufer tippt ...';
}
function purchaseNextRecommendedReaction(req, analysis){
  const m = ensurePurchaseChat(req);
  if(m.openQuestion) return `Frage beantworten: ${m.openQuestion.text}`;
  if(analysis.primary==='purchaseOfferText' || analysis.primary==='price') return 'Angebot über den Angebot-Button verbindlich senden';
  if(analysis.primary==='photos') return 'Bilder prüfen und danach Preis/Termin klären';
  if(analysis.primary==='history') return 'Historie bewerten oder OBD/Besichtigung anfordern';
  if(analysis.primary==='obd') return 'OBD-Ergebnis in Preisentscheidung einbeziehen';
  return 'konkreten nächsten Schritt nennen';
}
function sellerQuestionFollowUp(req, question){
  if(question.key==='price') return 'Ich bräuchte bitte ein konkretes Angebot. Ohne Zahl weiß ich nicht, ob wir zusammenkommen.';
  if(question.key==='inspection') return 'Wann möchten Sie zur Besichtigung kommen? Ich möchte den Verkauf zeitnah klären.';
  if(question.key==='payment') return 'Wie wäre die Zahlung gedacht, bar oder Überweisung bei Abholung?';
  if(question.key==='info') return 'Welche Unterlagen oder Details brauchen Sie noch genau?';
  return 'Könnten Sie mir meine Frage bitte noch beantworten?';
}
function buildPurchaseSellerReply(req, pipeline){
  const c = req.car;
  const m = ensurePurchaseChat(req);
  const a = pipeline.analysis;
  const openResult = m.lastPlayerQuestionResult;
  const polite = (m.toneScore||0)>=1 ? 'Danke für die Rückmeldung. ' : '';
  if(openResult && !openResult.answered && m.openQuestion) return sellerQuestionFollowUp(req, m.openQuestion);
  if(openResult?.answered){
    if(openResult.key==='price') return `${polite}Okay, dann weiß ich preislich Bescheid. Wenn das Angebot passt, können wir über Abholung und Zahlung sprechen.`;
    if(openResult.key==='inspection') return `${polite}Ein Termin ist möglich. Mir wäre eine schnelle, klare Abwicklung wichtig.`;
    if(openResult.key==='payment') return `${polite}Gut, wenn die Zahlung sicher ist, habe ich damit kein Problem.`;
  }
  if(a.primary==='photos') return `Ich kann Ihnen weitere Bilder schicken. Die aktuelle Fotoqualität ist: ${req.photoQuality}.`;
  if(a.primary==='history') return req.historyRequested
    ? 'Die Historie hatte ich ja schon geschickt. Mehr Unterlagen habe ich aktuell nicht.'
    : (Math.random()<0.72 ? 'Die Servicehistorie ist weitgehend nachvollziehbar. TÜV und Wartung kann ich beim Termin mitbringen.' : 'Das Serviceheft ist leider nicht vollständig, ich möchte da ehrlich sein.');
  if(a.primary==='obd') return c.hiddenIssues.length
    ? `Wenn Sie prüfen, werden vermutlich folgende Punkte sichtbar: ${c.hiddenIssues.join(', ')}.`
    : 'OBD sollte unauffällig sein. Mir sind keine Fehlermeldungen bekannt.';
  if(a.primary==='inspection') return req.persona==='quick'
    ? 'Besichtigung ist möglich, aber bitte zeitnah. Ich möchte den Wagen schnell verkaufen.'
    : 'Eine Besichtigung ist in Ordnung. Sagen Sie mir bitte, wann Sie vorbeikommen möchten.';
  if(a.primary==='purchaseOfferText' || a.primary==='price' || a.primary==='priceLowered'){
    if(a.amount){
      if(a.amount >= req.wishPrice*(1-req.flex*.55)) return `${money(a.amount)} klingt für mich grundsätzlich machbar. Wenn Zahlung und Abholung passen, können wir uns einigen.`;
      if((req.patience||1)<=1) return `${money(a.amount)} ist mir zu niedrig. Da würde ich eher einen anderen Käufer suchen.`;
      return `${money(a.amount)} ist mir noch zu wenig. Ich hatte eher an ${money(Math.max(Math.round(req.wishPrice*(1-req.flex*.25)/10)*10, a.amount+300))} gedacht.`;
    }
    return req.flex>.18 ? 'Machen Sie mir gerne ein konkretes Angebot, ich bin verhandlungsbereit.' : 'Ich bin beim Preis nicht besonders flexibel, aber ich höre mir ein konkretes Angebot an.';
  }
  if(a.primary==='payment') return 'Sichere Zahlung bei Abholung wäre mir am liebsten. Dann kann die Übergabe sauber laufen.';
  if(a.primary==='defect') return req.knownDamage==='keine bekannt' ? 'Mir sind keine größeren Schäden bekannt.' : `Bekannt ist: ${req.knownDamage}.`;
  if(a.primary==='evasive') return 'Ich verstehe, aber ich brauche eine klare Aussage, ob Sie ernsthaft kaufen möchten.';
  if((m.toneScore||0)<-2) return 'Der Ton ist gerade etwas schwierig. Ich möchte fair verkaufen, aber auch vernünftig behandelt werden.';
  return `${polite}Was schlagen Sie als nächsten konkreten Schritt vor?`;
}
function runPurchaseResponsePipeline(req, text){
  const analysis = analyzePurchaseIntent(text);
  const stateBefore = ensurePurchaseChat(req).conversationState;
  const nextState = derivePurchaseConversationState(req, analysis);
  const reply = buildPurchaseSellerReply(req, {analysis, stateBefore, nextState});
  const debug = {
    intent: analysis.primary,
    intents: analysis.intents,
    conversationState: nextState,
    openQuestion: req.purchaseChatMemory?.openQuestion || null,
    patience: req.patience,
    nextRecommendedReaction: purchaseNextRecommendedReaction(req, analysis),
  };
  req.lastPurchaseChatDebug = debug;
  if(state.chatDebug) console.debug('[PurchaseChatPipeline]', debug);
  return {analysis, reply, debug};
}
function extractMoneyAmounts(text){
  const out = [];
  String(text||'').replace(/(\d{1,3}(?:[.\s]\d{3})+|\d{4,6})(?:\s*€)?/g, (match, raw, index)=>{
    const amount = parseInt(raw.replace(/[.\s]/g,''), 10);
    if(amount>=300 && amount<=1000000) out.push({amount, index, match});
    return match;
  });
  return out;
}
function detectPurchaseCounterOffer(text){
  const s = String(text||'');
  const lower = s.toLowerCase();
  const amounts = extractMoneyAmounts(s);
  if(!amounts.length) return null;
  const scored = amounts.map((a, idx)=>{
    const before = lower.slice(Math.max(0,a.index-46), a.index);
    const nextAmountIndex = amounts[idx+1] ? amounts[idx+1].index : lower.length;
    const after = lower.slice(a.index, Math.min(nextAmountIndex, a.index+90));
    const around = before + after;
    let score = idx * 0.05;
    if(/unter\s*$/.test(before) && /gebe ich|verkaufe ich|geht nichts|nicht/i.test(after)) score += 7;
    if(/wäre für mich machbar|waere fuer mich machbar|w.re f.r mich machbar|machbar|können wir es machen|koennen wir es machen|k.nnen wir es machen|könnten wir es machen|koennten wir es machen|k.nnten wir es machen|würde ich zusagen|wuerde ich zusagen|w.rde ich zusagen|würde ich machen|wuerde ich machen|w.rde ich machen|gehört er ihnen|gehoert er ihnen|geh.rt er ihnen|letzter preis|mein letzter preis|wären|waeren|w.ren|wäre|waere|w.re/i.test(after)) score += 8;
    if(/letzter preis|mein letzter preis|bei|für|fuer|wenn sie/i.test(before)) score += 4;
    if(/bei\s*$|für\s*$|fuer\s*$|wenn sie\s*$/.test(before)) score += 3;
    if(/nicht ab|zu niedrig|nicht machbar|geht nicht|leider nicht/i.test(around)) score -= 5;
    if(!/unter\s*$/.test(before) && /(gebe ich|verkaufe ich).{0,36}nicht ab|nicht ab/i.test(after)) score -= 9;
    if(/nicht ab\.\s*\d/.test(lower.slice(a.index, Math.min(lower.length,a.index+30)))) score -= 8;
    return {...a, score};
  }).filter(x=>x.score>0);
  if(!scored.length) return null;
  scored.sort((a,b)=>b.score-a.score || b.index-a.index);
  return scored[0].amount;
}
function latestPurchaseCounterOffer(req){
  if(!req || req.status!=='open' || req.purchasedPrice) return null;
  const messages = req.messages || [];
  for(let i=messages.length-1;i>=0;i--){
    const m = messages[i];
    if(m.from!=='seller') continue;
    const amount = detectPurchaseCounterOffer(m.text);
    if(amount) return {index:i, amount};
  }
  return null;
}
function maybeCreateReviewFromPurchase(req, price){
  state.reviews = state.reviews || [];
  const c = req.car;
  const wishRatio = price / Math.max(1, req.wishPrice||price);
  const marketRatio = price / Math.max(1, c.marketValue||price);
  let stars = 4;
  if(wishRatio>=1.02) stars = 5;
  else if(wishRatio>=0.94) stars = 4;
  else if(wishRatio>=0.86) stars = 3;
  else stars = 2;
  if(req.inspected || req.historyRequested || req.obdRequested) stars++;
  if(req.patience<=1) stars--;
  if(marketRatio<0.72) stars--;
  stars = clamp(stars, 1, 5);
  if(Math.random() > reviewChanceForStars(stars, .32)) return false;
  const comments = {
    5:[
      `Ich habe meinen ${c.brand} ${c.model} verkauft und die Abwicklung war sehr fair. Angebot, Termin und Zahlung waren klar und schnell.`,
      `Sehr angenehmer Fahrzeugankauf. Es wurde ordentlich geprüft, aber nicht gedrückt. Ich würde dort wieder verkaufen.`,
      `Vom ersten Kontakt bis zur Zahlung lief alles professionell. Der Preis war fair und die Kommunikation transparent.`
    ],
    4:[
      `Der Verkauf meines ${c.brand} ${c.model} lief gut. Ein paar Rückfragen gab es, aber am Ende war alles nachvollziehbar.`,
      `Solider Ankauf, freundlicher Kontakt und schnelle Einigung. Beim Preis hätte ich mir etwas mehr gewünscht, insgesamt aber fair.`,
      `Ordentliche Abwicklung. Besichtigung und Zahlung waren verlässlich, die Kommunikation war insgesamt gut.`
    ],
    3:[
      `Der Ankauf war okay. Die Verhandlung war etwas zäh, am Ende wurde der ${c.brand} ${c.model} aber sauber übernommen.`,
      `Nicht schlecht, aber auch nicht perfekt. Preis und Prüfung waren nachvollziehbar, nur etwas mehr Tempo wäre gut gewesen.`,
      `Neutraler Eindruck. Es wurde korrekt gearbeitet, aber die Einigung hat sich für mich etwas gezogen.`
    ],
    2:[
      `Ich fand die Preisverhandlung beim Verkauf meines ${c.brand} ${c.model} ziemlich hart. Abwicklung war korrekt, aber wenig angenehm.`,
      `Der Ankauf kam zustande, aber ich hätte mir mehr Wertschätzung und weniger Druck beim Preis gewünscht.`,
      `Zahlung und Übernahme haben funktioniert, trotzdem fühlte sich die Verhandlung für mich nicht besonders fair an.`
    ],
    1:[
      `Ich würde mein Auto dort eher nicht noch einmal verkaufen. Der Preis wurde stark gedrückt und die Kommunikation war angespannt.`,
      `Der Ankauf war für mich enttäuschend. Zu viel Druck, zu wenig Transparenz beim Angebot.`,
      `Es wurde gekauft, aber der Ablauf hat kein gutes Gefühl hinterlassen. Beim nächsten Mal suche ich mir eine andere Stelle.`
    ]
  };
  return publishReview({
    id: uid('rev'), day: state.day, customerId: null, customerName: req.sellerName,
    car: `${c.brand} ${c.model}`, method: 'Fahrzeugankauf', stars, recommend: stars>=4, complaint: stars<=2,
    categories: {
      Freundlichkeit: clamp(stars + randInt(-1,1),1,5),
      Kommunikation: clamp(stars + randInt(-1,1),1,5),
      Preis: clamp(stars + (wishRatio>=.95?1:-1),1,5),
      Fahrzeugzustand: clamp(stars + (req.inspected?1:0),1,5),
      Service: clamp(stars + randInt(-1,1),1,5),
    },
    text: choice(comments[stars]),
    reply: '',
  });
}
function completePrivatePurchase(req, price){
  const c = req.car;
  if(state.cash<price){ notify('Nicht genug Kapital für diesen Ankauf.', 'warn'); return; }
  c.acquisitionSource = `Fahrzeugankauf: ${req.sellerName}`;
  c.acquisitionHistory = (req.messages||[]).map(m=>({...m}));
  state.inventory.push(c);
  req.status = 'purchased';
  req.purchasedDay = state.day;
  req.purchasedPrice = price;
  req.inventoryCarId = c.id;
  req.draftText = '';
  addTx('expense', 'Privater Fahrzeugankauf '+c.brand+' '+c.model, -price);
  state.purchaseHistory = state.purchaseHistory || [];
  state.purchaseHistory.unshift({
    id: uid('pur'), day: state.day, source:'Fahrzeugankauf', brand:c.brand, model:c.model, year:c.year,
    mileage:c.mileage, engine:c.engine, transmission:c.transmission, tier:tierInfo(c.brand,c.model).label,
    price, marketValue:c.marketValue, condition:c.condition, sellerName:req.sellerName,
  });
  state.purchaseHistory = state.purchaseHistory.slice(0,300);
  state.purchaseCount = (state.purchaseCount||0)+1;
  addXp(24);
  trainEmployees('Einkäufer', 32, 'privater Fahrzeugankauf');
  maybeCreateReviewFromPurchase(req, price);
  showToast('🤝', `<b>Ankauf abgeschlossen</b><br>${c.brand} ${c.model} für ${money(price)} im Bestand.`, 'Bestand', ()=>navigateTo('inventory'));
  showAchievementUnlocks(checkAchievements());
  closeModal(); renderAllOpen(); scheduleSave();
}

/* =============================== PERSISTENCE =============================== */
async function storageGet(key){
  console.log('[Renderer] storageGet called for key:', key, '| window.storage available:', !!(window.storage && window.storage.get));
  if(window.storage && typeof window.storage.get==='function'){
    console.log('[Renderer] Using window.storage to read', key);
    return await window.storage.get(key);
  }
  throw new Error('window.storage ist nicht verfuegbar. Spielstaende werden nicht im Browser-Speicher gelesen.');
}
async function storageSet(key, value){
  console.log('[Renderer] storageSet called for key:', key, '| window.storage available:', !!(window.storage && window.storage.set));
  if(window.storage && typeof window.storage.set==='function'){
    console.log('[Renderer] Using window.storage to save', key);
    return await window.storage.set(key, value);
  }
  throw new Error('window.storage ist nicht verfuegbar. Spielstaende werden nicht im Browser-Speicher gespeichert.');
}
function profileStateKey(profileId){ return 'autodealer-state-v3-'+profileId; }
function cp1252ByteForChar(ch){
  const code = ch.codePointAt(0);
  if(code <= 0xff) return code;
  const map = {
    0x20ac:0x80, 0x201a:0x82, 0x0192:0x83, 0x201e:0x84, 0x2026:0x85, 0x2020:0x86, 0x2021:0x87,
    0x02c6:0x88, 0x2030:0x89, 0x0160:0x8a, 0x2039:0x8b, 0x0152:0x8c, 0x017d:0x8e,
    0x2018:0x91, 0x2019:0x92, 0x201c:0x93, 0x201d:0x94, 0x2022:0x95, 0x2013:0x96, 0x2014:0x97,
    0x02dc:0x98, 0x2122:0x99, 0x0161:0x9a, 0x203a:0x9b, 0x0153:0x9c, 0x017e:0x9e, 0x0178:0x9f
  };
  return map[code];
}
function looksLikeMojibakeText(text){
  return Array.from(text||'').some(ch=>{
    const code = ch.codePointAt(0);
    return code===0x00c3 || code===0x00c2 || code===0x00e2 || code===0x00f0 || code===0x00ef;
  });
}
function repairMojibakeText(text){
  if(!looksLikeMojibakeText(text)) return text;
  const suspiciousSpan = /[\u0080-\u00ff\u0152\u0153\u0160\u0161\u0178\u017d\u017e\u0192\u02c6\u02dc\u2013\u2014\u2018\u2019\u201a\u201c\u201d\u201e\u2020\u2021\u2022\u2026\u2030\u2039\u203a\u20ac\u2122]+/g;
  return text.replace(suspiciousSpan, repairMojibakeSpan);
}
function repairMojibakeSpan(text){
  if(!looksLikeMojibakeText(text)) return text;
  const bytes = [];
  for(const ch of text){
    const b = cp1252ByteForChar(ch);
    if(b===undefined) return text;
    bytes.push(b);
  }
  try{
    const decoded = new TextDecoder('utf-8', {fatal:true}).decode(new Uint8Array(bytes));
    return decoded.includes('\ufffd') ? text : decoded;
  }catch(e){
    return text;
  }
}
function repairMojibakeDeep(value, seen){
  if(typeof value === 'string') return repairMojibakeText(value);
  if(!value || typeof value !== 'object') return value;
  seen = seen || new WeakSet();
  if(seen.has(value)) return value;
  seen.add(value);
  if(Array.isArray(value)){
    value.forEach((item,i)=>{ value[i] = repairMojibakeDeep(item, seen); });
    return value;
  }
  Object.keys(value).forEach(key=>{ value[key] = repairMojibakeDeep(value[key], seen); });
  return value;
}
function profileIdFromName(name){
  return (name||'autohaus').trim().toLowerCase()
    .replace(/[ä]/g,'ae').replace(/[ö]/g,'oe').replace(/[ü]/g,'ue').replace(/[ß]/g,'ss')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,38) || uid('profil');
}
async function loadProfiles(){
  let profiles = [];
  try{
    const res = await storageGet(PROFILE_INDEX_KEY);
    if(res && res.value) profiles = JSON.parse(res.value) || [];
  }catch(e){ profiles = []; }
  profiles = profiles.map(p=>repairMojibakeDeep({password:'', ...p}));
  if(!profiles.length){
    try{
      const legacy = await storageGet(LEGACY_SAVE_KEY);
      if(legacy && legacy.value){
        const id = 'autohaus-1';
        await storageSet(profileStateKey(id), legacy.value);
        profiles = [{id, name:'Autohaus 1', password:'', createdAt:Date.now(), lastPlayed:Date.now(), migratedLegacy:true}];
        await saveProfiles(profiles);
      }
    }catch(e){ /* kein alter Spielstand */ }
  }
  return profiles;
}
async function saveProfiles(profiles){
  await storageSet(PROFILE_INDEX_KEY, JSON.stringify(profiles));
}
async function upsertProfileMeta(profileId, patch){
  const profiles = await loadProfiles();
  const idx = profiles.findIndex(p=>p.id===profileId);
  if(idx>=0) profiles[idx] = {...profiles[idx], ...patch};
  else profiles.push({id:profileId, name:patch.name||profileId, createdAt:Date.now(), lastPlayed:Date.now(), ...patch});
  await saveProfiles(profiles);
}
function renderGameShell(){
  applyTheme();
  document.getElementById('app').innerHTML = `
    <div id="topbar"></div>
    <div id="shell">
      <nav id="sidebar"></nav>
      <div id="mainpane">
        <div id="pagecontent"></div>
      </div>
    </div>
    <div id="toaststack"></div>
  `;
  applyAppBackground(state?.backgroundId || 'standard', true);
  enhancePremiumUi();
}
async function renderProfileLogin(){
  document.body.classList.remove('theme-light');
  document.body.classList.remove('has-app-bg');
  const profiles = await loadProfiles();
  const lastPlayed = profiles.length ? profiles.reduce((latest,p)=>Math.max(latest, p.lastPlayed||0),0) : 0;
  document.getElementById('app').innerHTML = `
    <div class="profile-screen">
      <div class="login-bg-cars" id="loginBgCars" aria-hidden="true"></div>
      <div class="profile-login-shell">
        <section class="login-hero">
          <div>
            <div class="login-brand">
              <div class="login-mark"><img src="assets/logos/app-logo.png" alt=""></div>
              <div>
                <h1>Automotive Empire</h1>
                <small>Premium Autohaus Management</small>
              </div>
            </div>
            <div class="login-copy">
              <p>Steuere Bestand, Kunden, Finanzierung, Werkstatt, Verträge und Reputation in einer Oberfläche, die wie echte Autohaus-Software wirkt.</p>
            </div>
          </div>
          <div>
            <div class="login-feature-grid">
              <div class="login-feature"><b>Bestand & Inserate</b><span>Fahrzeuge bewerten, vorbereiten und verkaufen.</span></div>
              <div class="login-feature"><b>Finanzierung & Leasing</b><span>Bankprüfung, Raten, Verträge und Forderungen.</span></div>
              <div class="login-feature"><b>Reputation & Legacy</b><span>Wachse vom kleinen Händler zur Premium-Adresse.</span></div>
            </div>
            <div class="login-version-row" style="margin-top:14px;">
              <span class="chip">Automotive Empire</span>
              <span class="chip">${profiles.length} Profil${profiles.length===1?'':'e'}</span>
              <span class="chip">${lastPlayed?'Letzter Speicherstand '+new Date(lastPlayed).toLocaleDateString('de-DE'):'Noch kein Speicherstand'}</span>
            </div>
          </div>
        </section>
        <section class="profile-panel">
          <div class="profile-panel-head">
            <div>
              <h2>Willkommen zurück</h2>
              <p>Profil auswählen, Spielstand laden oder ein neues Autohaus starten.</p>
            </div>
            <div class="profile-panel-badge">Secure Save</div>
          </div>
          <div id="loginError" class="notice login-error" role="alert"></div>
          <div class="profile-grid">
            ${profiles.map(p=>`<div class="profile-card">
              <div class="name">${escapeHtml(p.name)}</div>
              <div class="meta">Zuletzt gespielt: ${p.lastPlayed?new Date(p.lastPlayed).toLocaleString('de-DE'):'noch nie'}${p.migratedLegacy?'<br>Alter Spielstand: kein Passwort gesetzt':''}</div>
              <div class="unlock">
                <input type="password" id="pw_${p.id}" data-profile-login-control="1" placeholder="${p.password?'Passwort':'Kein Passwort'}" onkeydown="if(event.key==='Enter'){selectProfile('${p.id}');}">
                <button class="btn btn-primary btn-sm" id="loginBtn_${p.id}" data-profile-login-control="1" onclick="selectProfile('${p.id}')">Fortsetzen</button>
              </div>
              <button class="btn btn-danger btn-sm" data-profile-login-control="1" style="margin-top:10px;" onclick="event.stopPropagation(); deleteProfileFromLogin('${p.id}')">Löschen</button>
            </div>`).join('') || '<div class="notice">Noch kein Profil vorhanden.</div>'}
          </div>
          <div class="login-new-game">
            <h3>Neues Spiel starten</h3>
            <div class="field">
              <label>Spielstand-Name</label>
              <input type="text" id="newProfileName" placeholder="z.B. Eric Autohaus">
            </div>
            <div class="field">
              <label>Passwort</label>
              <input type="password" id="newProfilePassword" placeholder="Passwort für diesen Spielstand" onkeydown="if(event.key==='Enter'){createProfileFromLogin();}">
            </div>
            <div class="row-actions">
              <button class="btn btn-primary" onclick="createProfileFromLogin()">Neues Spiel starten</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
  enhancePremiumUi();
  initLoginBackground();
  // Am Login-Bildschirm darf ein bereits heruntergeladenes Update angeboten werden.
  maybeOfferPendingUpdateAtLogin();
}
// Schwebende Fahrzeuge im Login-Hintergrund (Helium-Ballon-Optik).
// Nutzt die ECHTEN Fahrzeug-Illustrationen des Spiels (renderCarPhoto/.body-shape)
// mit realen Marken/Modellen aus BRANDS. Keine Emojis/Icons/Platzhalter.
// Bewegung: requestAnimationFrame-Physik (translate3d/rotate, GPU-beschleunigt),
// individuelle Werte pro Fahrzeug, weicher (feder-basierter) Abprall an den
// Bildschirmraendern und am freigehaltenen Mittelbereich (Login-Karte/Logo).
function initLoginBackground(){
  const layer = document.getElementById('loginBgCars');
  if(!layer || typeof renderCarPhoto !== 'function' || typeof BRANDS === 'undefined') return;
  if(window._loginBgRAF){ cancelAnimationFrame(window._loginBgRAF); window._loginBgRAF = null; }
  layer.innerHTML = '';
  const rnd  = (a,b)=>a+Math.random()*(b-a);
  const pick = a=>a[Math.floor(Math.random()*a.length)];
  const modelOf = brand=>{
    const m = (BRANDS[brand] && BRANDS[brand].models) ? Object.keys(BRANDS[brand].models) : [];
    return m.length ? pick(m) : '';
  };
  const hyper  = ['Bugatti','Koenigsegg','Pagani','Ferrari','Lamborghini','McLaren'];
  const luxus  = ['Rolls-Royce','Bentley','Mercedes-Benz','BMW','Audi','Porsche'];
  const normal = ['Volkswagen','Opel','Ford','Skoda','Toyota','Hyundai'];
  const COLORS_L = (typeof COLORS !== 'undefined') ? COLORS : ['Schwarz','Weiß','Silber','Grau','Blau','Rot'];

  // Minimales Fahrzeug-Objekt fuer den Spiel-Renderer (state-unabhaengig).
  const makeCar = (brand,tier)=>{
    const model = modelOf(brand) || 'Modell';
    const power = tier==='hyper' ? Math.round(rnd(560,1200))
                : tier==='luxus' ? Math.round(rnd(280,520))
                : Math.round(rnd(90,190));
    return {
      id:'loginCar_'+Math.random().toString(36).slice(2,9),
      brand, model, year:Math.round(rnd(2018,2026)),
      color:pick(COLORS_L), engine:'Benzin', power
    };
  };

  // Unregelmaessige Blueprint-Aura, pro Fahrzeug einzigartig generiert.
  // Kein Kreis/Rechteck/starres Raster: eckiger Silhouetten-Blob mit weicher
  // Maske, fragmentierte Grid-Segmente, auslaufende Datenlinien, Konturfragmente,
  // Markerpunkte und Scanline - alles in der Kategorie-Farbe (tierInfo).
  const auraSvg = (color)=>{
    const uid = Math.random().toString(36).slice(2,8);
    const cx = 130, cy = 84, rx = rnd(88,108), ry = rnd(40,54), n = 12;
    const pts = [];
    for(let i=0;i<n;i++){
      const a = i/n*Math.PI*2, j = rnd(.68,1.28);
      pts.push((cx+Math.cos(a)*rx*j).toFixed(1)+' '+(cy+Math.sin(a)*ry*j).toFixed(1));
    }
    const blob = 'M'+pts.join(' L ')+' Z';
    let data = '';
    const nd = 3+((Math.random()*3)|0);
    for(let k=0;k<nd;k++){
      const y = rnd(38,132)|0, x1 = (Math.random()<.5 ? rnd(-34,26) : rnd(150,206))|0;
      data += `<path d="M${x1} ${y} H${x1+(rnd(52,96)|0)}" stroke="url(#dl${uid})" opacity="${rnd(.4,.7).toFixed(2)}"/>`;
    }
    const fragPool = [
      'M62 56 C96 42 154 40 196 54',
      'M44 96 C60 86 78 82 98 80',
      'M168 80 C192 82 210 90 222 100',
      'M82 120 C120 128 168 128 206 118',
      'M36 76 C48 66 62 60 80 56'
    ];
    let frags = '';
    fragPool.forEach(d=>{
      if(Math.random()<.68) frags += `<path class="lca-frag" d="${d}" stroke-dasharray="${rnd(9,24)|0} ${rnd(6,16)|0}" style="--aflick:${rnd(3.5,7).toFixed(1)}s" opacity="${rnd(.45,.7).toFixed(2)}"/>`;
    });
    let dots = '';
    const ndots = 6+((Math.random()*4)|0);
    for(let k=0;k<ndots;k++){
      const x = rnd(2,254)|0, y = rnd(8,152)|0;
      dots += Math.random()<.62
        ? `<circle cx="${x}" cy="${y}" r="${rnd(1,1.9).toFixed(1)}" fill="${color}" stroke="none" opacity="${rnd(.45,.8).toFixed(2)}"/>`
        : `<path d="M${x-3} ${y} h6 M${x} ${y-3} v6" opacity="${rnd(.4,.7).toFixed(2)}"/>`;
    }
    return `<svg viewBox="0 0 260 164" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${color}" stroke-width="1">
      <defs>
        <radialGradient id="gl${uid}" cx="50%" cy="52%" r="60%">
          <stop offset="0" stop-color="${color}" stop-opacity=".52"/>
          <stop offset=".55" stop-color="${color}" stop-opacity=".2"/>
          <stop offset="1" stop-color="${color}" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="dl${uid}" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="${color}" stop-opacity="0"/>
          <stop offset=".5" stop-color="${color}" stop-opacity=".85"/>
          <stop offset="1" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
        <filter id="bl${uid}" x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur stdDeviation="9"/>
        </filter>
      </defs>
      <path d="${blob}" fill="url(#gl${uid})" stroke="none" opacity=".6" filter="url(#bl${uid})"/>
      ${data}${frags}${dots}
    </svg>`;
  };

  // Blueprint-Grid als eigenes, NICHT mitrotierendes Layer: fragmentierte
  // Linien in Kategorie-Farbe, weich auslaufend durch unregelmaessige
  // Blob-Maske (keine harte Box), plus Scanline. Parallax via --grid-x/y.
  const gridSvg = (color)=>{
    const uid = Math.random().toString(36).slice(2,8);
    const cx = 130, cy = 84, rx = rnd(96,116), ry = rnd(46,58), n = 12;
    const pts = [];
    for(let i=0;i<n;i++){
      const a = i/n*Math.PI*2, j = rnd(.7,1.26);
      pts.push((cx+Math.cos(a)*rx*j).toFixed(1)+' '+(cy+Math.sin(a)*ry*j).toFixed(1));
    }
    const blob = 'M'+pts.join(' L ')+' Z';
    let grid = '';
    for(let x=16; x<248; x+=rnd(14,24)){
      if(Math.random()<.22) continue;                       // Luecken im Raster
      const y1 = rnd(10,84)|0, y2 = Math.min(158, y1+rnd(24,92))|0;
      grid += `<path d="M${x|0} ${y1} V${y2}"${Math.random()<.45?` stroke-dasharray="${rnd(3,8)|0} ${rnd(4,11)|0}"`:''} opacity="${rnd(.4,.75).toFixed(2)}"/>`;
    }
    for(let y=16; y<156; y+=rnd(12,20)){
      if(Math.random()<.25) continue;
      const x1 = rnd(2,130)|0, x2 = Math.min(258, x1+rnd(36,150))|0;
      grid += `<path d="M${x1} ${y|0} H${x2}"${Math.random()<.45?` stroke-dasharray="${rnd(4,10)|0} ${rnd(5,12)|0}"`:''} opacity="${rnd(.4,.75).toFixed(2)}"/>`;
    }
    return `<svg viewBox="0 0 260 164" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${color}" stroke-width="1">
      <defs>
        <linearGradient id="gsc${uid}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${color}" stop-opacity="0"/>
          <stop offset=".5" stop-color="${color}" stop-opacity=".4"/>
          <stop offset="1" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
        <filter id="gbl${uid}" x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur stdDeviation="9"/>
        </filter>
        <mask id="gmk${uid}" maskUnits="userSpaceOnUse" x="-40" y="-40" width="340" height="244">
          <path d="${blob}" fill="#fff" filter="url(#gbl${uid})"/>
        </mask>
      </defs>
      <g mask="url(#gmk${uid})">
        <g class="lca-grid">${grid}</g>
        <rect class="lca-scan" x="-8" y="56" width="276" height="30" fill="url(#gsc${uid})" stroke="none" style="--ascan:${rnd(4.5,8).toFixed(1)}s"/>
      </g>
    </svg>`;
  };

  // Multi-Layer-Hologramm-Filter pro Kategorie-Farbe (einmal definiert, von allen
  // Fahrzeugen derselben Kategorie referenziert). Layer in einer Filterkette:
  //  E1 Grundkoerper (entsaettigt, aufgehellt, halbtransparent)
  //  E2 Farbueberlagerung nach Luminanz (additiv/Screen-artig, keine Farbflaeche)
  //  E3 Kantenbetonung (feConvolveMatrix-Laplace -> feine leuchtende Konturen)
  //  E5 volumetrischer Glow (Bloom der Farbschicht, innen wie aussen)
  // Ein Filter auf einem Element -> alle Layer exakt synchron, keine Doppelbilder.
  layer.insertAdjacentHTML('afterbegin',
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs id="lcHoloDefs"></defs></svg>');
  const holoIds = {};
  const holoFilterFor = (hex)=>{
    if(holoIds[hex]) return holoIds[hex];
    const id = 'lcHolo'+Object.keys(holoIds).length;
    holoIds[hex] = id;
    const n = parseInt(hex.slice(1),16);
    const cr = ((n>>16)&255)/255, cg = ((n>>8)&255)/255, cb = (n&255)/255;
    const L = [0.2126,0.7152,0.0722];
    const row = (c,k)=>L.map(l=>(l*c*k).toFixed(4)).join(' ');
    // Luminanz -> Kategorie-Farbe: helle Bereiche leuchten staerker (Dodge-artig)
    const tintM = `${row(cr,1.55)} 0 0 ${row(cg,1.55)} 0 0 ${row(cb,1.55)} 0 0 0 0 0 0.9 0`;
    // Kanten: Farbe aus Kantenintensitaet, Alpha aus Kanten-Luminanz (feine Linien)
    const edgeM = `${row(cr,1.35)} 0 0 ${row(cg,1.35)} 0 0 ${row(cb,1.35)} 0 0 ${L.map(l=>l.toFixed(4)).join(' ')} 0 0`;
    document.getElementById('lcHoloDefs').insertAdjacentHTML('beforeend',
      `<filter id="${id}" x="-40%" y="-40%" width="180%" height="180%" color-interpolation-filters="sRGB">
        <feColorMatrix in="SourceGraphic" type="saturate" values="0.35" result="ds"/>
        <feComponentTransfer in="ds" result="base">
          <feFuncR type="linear" slope="1.16" intercept="0.03"/>
          <feFuncG type="linear" slope="1.16" intercept="0.03"/>
          <feFuncB type="linear" slope="1.16" intercept="0.03"/>
          <feFuncA type="linear" slope="0.45"/>
        </feComponentTransfer>
        <feColorMatrix in="SourceGraphic" type="matrix" values="${tintM}" result="tint"/>
        <feConvolveMatrix in="SourceGraphic" order="3" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" preserveAlpha="true" result="edr"/>
        <feColorMatrix in="edr" type="matrix" values="${edgeM}" result="edc"/>
        <feGaussianBlur in="edc" stdDeviation="0.7" result="edglow"/>
        <feGaussianBlur in="tint" stdDeviation="4.5" result="blm"/>
        <feComponentTransfer in="blm" result="bloom"><feFuncA type="linear" slope="0.5"/></feComponentTransfer>
        <feComposite in="tint" in2="base" operator="arithmetic" k1="0" k2="0.9" k3="1" k4="0" result="s1"/>
        <feComposite in="edglow" in2="s1" operator="arithmetic" k1="0" k2="0.9" k3="1" k4="0" result="s2"/>
        <feComposite in="edc" in2="s2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="s3"/>
        <feComposite in="bloom" in2="s3" operator="arithmetic" k1="0" k2="0.65" k3="1" k4="0" result="s4"/>
        <feComponentTransfer in="s4"><feFuncA type="linear" slope="0.85"/></feComponentTransfer>
      </filter>`);
    return id;
  };

  // E4: vereinzelte CAD-Konstruktionslinien im Fahrzeug (Motorhaube/Dach/Tuer/
  // Kotfluegel), fein und gestrichelt; laufen mit durch den Hologramm-Filter.
  const cadPool = [
    'M52 62 C70 56 92 52 116 50',    // Motorhaube
    'M98 46 C122 42 150 42 172 46',  // Dachlinie
    'M132 58 L127 96',               // Tuerkontur
    'M58 88 C66 78 78 72 92 70',     // vorderer Kotfluegel
    'M176 54 C192 58 204 64 212 72'  // hinterer Kotfluegel
  ];
  const cadLines = (color)=>{
    let s = '';
    cadPool.forEach(d=>{
      if(Math.random()<.55) s += `<path d="${d}" stroke-dasharray="${rnd(4,9)|0} ${rnd(4,8)|0}" opacity="${rnd(.2,.34).toFixed(2)}"/>`;
    });
    return s ? `<g fill="none" stroke="${color}" stroke-width="0.8" stroke-linecap="round">${s}</g>` : '';
  };

  // --- Geometrie / Startverteilung ---
  const W = window.innerWidth, H = window.innerHeight;
  const cw = 150, ch = 76;                          // ungefaehre Fahrzeuggroesse
  const margin = 16;                                // Randabstand

  const TARGET = 16;                                // lieber weniger als ueberladen
  const placed = [];
  let attempts = 0;
  while(placed.length < TARGET && attempts < 900){
    attempts++;
    const cx = rnd(margin+cw/2, W-margin-cw/2);
    const cy = rnd(margin+ch/2, H-margin-ch/2);
    placed.push({cx,cy});
  }

  const span = Math.min(W,H) * 0.9;                 // Referenzstrecke fuer Tempo
  const parts = [];
  const frag = document.createDocumentFragment();
  placed.forEach((pos)=>{
    const r = Math.random();
    const tier  = r<0.70 ? 'hyper' : (r<0.90 ? 'luxus' : 'normal'); // 70/20/10
    const brand = tier==='hyper' ? pick(hyper) : tier==='luxus' ? pick(luxus) : pick(normal);
    const car = makeCar(brand, tier);

    const depth = Math.random();                    // 0 = fern, 1 = nah
    const scale = 0.55 + depth*0.55;                // Tiefe: Groesse
    const blur  = (1.8 - depth*1.7).toFixed(2);     // Tiefe: Unschaerfe
    // Sichtbarkeit 75-90%: die holografische Transparenz steckt in der
    // Filterkette selbst (E1 45%, Gesamt-Alpha 85%), nicht in einer
    // pauschalen Element-Opacity.
    const maxOp = (0.75 + depth*0.15).toFixed(3);
    const info = (typeof tierInfo === 'function') ? tierInfo(car.brand, car.model) : {label:'Premium', color:'#8b7ff0'};
    const blueprintOp = (0.62 + depth*0.18).toFixed(3);

    // Individuelles Tempo: ruhiges Gleiten mit eigener X/Y-Velocity.
    const crossT = rnd(13,26);
    const speed  = span / crossT;                   // px/s
    const ang    = rnd(0, Math.PI*2);

    // Startorientierung: teils kopfueber / seitlich, teils leicht gekippt
    const flip = Math.random();
    let rot = flip>0.88 ? 180+rnd(-8,8)
            : flip>0.78 ? 90*(Math.random()<0.5?1:-1)+rnd(-8,8)
            : rnd(-10,10);

    const el = document.createElement('div');
    el.className = 'login-car';
    el.style.setProperty('--inDelay', rnd(0,1.3).toFixed(2)+'s');
    el.style.setProperty('--maxOp', maxOp);
    el.style.setProperty('--bp-color', info.color);
    el.style.setProperty('--bp-op', blueprintOp);
    el.dataset.tier = info.label;

    const gridEl = document.createElement('div');
    gridEl.className = 'lc-holo-grid';
    gridEl.style.setProperty('--blur', blur+'px');
    gridEl.style.setProperty('--apulse', rnd(6,10).toFixed(1)+'s');
    gridEl.innerHTML = gridSvg(info.color);
    el.appendChild(gridEl);

    const field = document.createElement('div');
    field.className = 'lc-holo-field';
    field.style.setProperty('--scale', scale.toFixed(3));
    field.style.setProperty('--blur', blur+'px');
    field.style.setProperty('--apulse', rnd(5.5,9.5).toFixed(1)+'s');
    field.innerHTML = auraSvg(info.color);
    el.appendChild(field);

    const inner = document.createElement('div');
    inner.className = 'lc-inner';
    inner.style.setProperty('--scale', scale.toFixed(3));
    inner.style.setProperty('--blur', blur+'px');
    inner.innerHTML = renderCarPhoto(car);
    // Hologramm-Filterkette in Kategorie-Farbe + dezenter Farb-Schatten statt
    // des schwarzen PNG-artigen Drop-Shadows
    el.style.setProperty('--holo-f',
      `url(#${holoFilterFor(info.color)}) drop-shadow(0 10px 22px color-mix(in srgb,${info.color} 22%, transparent))`);
    // E4: vereinzelte CAD-Konstruktionslinien in die Fahrzeuggrafik einsetzen
    const carSvg = inner.querySelector('svg.body-shape');
    if(carSvg) carSvg.insertAdjacentHTML('beforeend', cadLines(info.color));
    el.appendChild(inner);
    frag.appendChild(el);

    parts.push({
      el, inner, field, gridEl,
      x: pos.cx - cw/2, y: pos.cy - ch/2,           // linke obere Ecke (px)
      vx: Math.cos(ang)*speed, vy: Math.sin(ang)*speed,
      speed, scale,
      hw: cw*scale*0.64, hh: ch*scale*0.68,         // inkl. Blueprint-Hologramm
      rot, vrot: rnd(-7,7),                         // leichte Eigenrotation (deg/s)
      driftPhase: rnd(0, Math.PI*2),
      driftSpeed: rnd(0.45,0.9),
      driftAmp: rnd(1.5,4.2),
      gridX: 0,
      gridY: 0,
      svx: Math.sign(Math.cos(ang)), svy: Math.sign(Math.sin(ang))
    });
  });
  layer.appendChild(frag);

  // Erst-Frame direkt setzen (kein Sprung vom CSS-Default)
  parts.forEach(p=>{
    p.el.style.transform = `translate3d(${p.x.toFixed(2)}px,${p.y.toFixed(2)}px,0)`;
    p.gridEl.style.transform = `scale(${p.scale.toFixed(3)})`;
    p.field.style.transform = `scale(${p.scale.toFixed(3)}) rotate(${(p.rot*0.85).toFixed(2)}deg)`;
    p.inner.style.transform = `scale(${p.scale.toFixed(3)}) rotate(${p.rot.toFixed(2)}deg)`;
  });

  // Reduced-Motion: Fahrzeuge bleiben ruhig stehen (nur Einblenden via CSS)
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  // --- Physik-Loop: echte Velocity, Randspiegelung, keine Fahrzeug-Kollisionen ---
  const step = (dt)=>{
    for(const p of parts){
      p.x += p.vx*dt; p.y += p.vy*dt;
      const cx = p.x + cw/2;
      const cy = p.y + ch/2;
      let bounced = false;
      if(cx - p.hw < margin){ p.x = margin - cw/2 + p.hw; p.vx = Math.abs(p.vx); bounced = true; }
      else if(cx + p.hw > W-margin){ p.x = W-margin - cw/2 - p.hw; p.vx = -Math.abs(p.vx); bounced = true; }
      if(cy - p.hh < margin){ p.y = margin - ch/2 + p.hh; p.vy = Math.abs(p.vy); bounced = true; }
      else if(cy + p.hh > H-margin){ p.y = H-margin - ch/2 - p.hh; p.vy = -Math.abs(p.vy); bounced = true; }

      if(bounced){
        p.vrot += rnd(-1.2, 1.2);
        p.vrot = clamp(p.vrot, -8, 8);
      }
      const nsx = Math.sign(p.vx), nsy = Math.sign(p.vy);
      if(nsx) p.svx = nsx; if(nsy) p.svy = nsy;
      p.rot += p.vrot*dt;
      p.driftPhase += p.driftSpeed*dt;
      // Grid-Parallax: begrenztes Ziel (Oszillation + leichtes Nachlaufen entgegen
      // der Fahrtrichtung), weich per Lerp -> kein Wrap-Sprung des SVG-Grids
      const gtx = Math.cos(p.driftPhase*.7)*7 - p.vx*.07;
      const gty = Math.sin(p.driftPhase*.6)*6 - p.vy*.07;
      const gk = Math.min(1, dt*2.5);
      p.gridX += (gtx - p.gridX)*gk;
      p.gridY += (gty - p.gridY)*gk;
      const driftX = Math.cos(p.driftPhase)*p.driftAmp;
      const driftY = Math.sin(p.driftPhase*.82)*p.driftAmp*.7;
      p.el.style.transform = `translate3d(${p.x.toFixed(2)}px,${p.y.toFixed(2)}px,0)`;
      // Grid-Layer: nur Position/Parallax, rotate(0) - bleibt logisch gerade
      p.gridEl.style.setProperty('--grid-x', `${p.gridX.toFixed(2)}px`);
      p.gridEl.style.setProperty('--grid-y', `${p.gridY.toFixed(2)}px`);
      p.gridEl.style.transform = `translate3d(${(driftX*.35).toFixed(2)}px,${(driftY*.35).toFixed(2)}px,0) scale(${p.scale.toFixed(3)})`;
      // Aura-Layer: dreht organisch mit dem Fahrzeug mit (85% der Rotation)
      p.field.style.transform = `translate3d(${(driftX*.55).toFixed(2)}px,${(driftY*.55).toFixed(2)}px,0) scale(${p.scale.toFixed(3)}) rotate(${(p.rot*0.85).toFixed(2)}deg)`;
      p.inner.style.transform = `translate3d(${driftX.toFixed(2)}px,${driftY.toFixed(2)}px,0) scale(${p.scale.toFixed(3)}) rotate(${p.rot.toFixed(2)}deg)`;
    }
  };

  let last = performance.now();
  const tick = (now)=>{
    if(!document.body.contains(layer)){ window._loginBgRAF = null; return; } // Cleanup
    let dt = (now - last)/1000; last = now;
    if(dt > 0.05) dt = 0.05;   // nach Tab-Drosselung keine Spruenge
    step(dt);
    window._loginBgRAF = requestAnimationFrame(tick);
  };
  window._loginBgRAF = requestAnimationFrame(tick);
}
async function deleteProfileFromLogin(profileId){
  let rendered = false;
  try{
    setProfileLoginBusy(profileId, true);
    const errorEl = document.getElementById('loginError');
    if(errorEl){ errorEl.textContent = ''; errorEl.style.display = 'none'; }
    const profiles = await loadProfiles();
    const profile = profiles.find(p=>p.id===profileId);
    if(!profile){
      await renderProfileLogin();
      rendered = true;
      return;
    }
    const pw = document.getElementById('pw_'+profileId)?.value || '';
    if((profile.password||'') !== pw){
      showLoginError(profile.password ? 'Falsches Passwort.' : 'Dieser alte Spielstand hat kein Passwort. Feld leer lassen.', profileId);
      return;
    }
    setProfileLoginBusy(profileId, false);
    if(!confirm(`Spielstand "${profile.name}" löschen? Der gespeicherte Spielstand wird entfernt.`)) return;
    setProfileLoginBusy(profileId, true);
    await storageSet(profileStateKey(profileId), '');
    await saveProfiles(profiles.filter(p=>p.id!==profileId));
    if(activeProfileId === profileId){
      activeProfileId = null;
      activeProfileName = '';
      state = null;
    }
    closeModal();
    await renderProfileLogin();
    rendered = true;
  }catch(e){
    console.error('[ProfileLogin] Profil löschen fehlgeschlagen:', e);
    showLoginError('Profil konnte nicht gelöscht werden. Bitte erneut versuchen.', profileId);
  }finally{
    if(!rendered && document.getElementById('loginError')) setProfileLoginBusy(profileId, false);
  }
}
function setProfileLoginBusy(profileId, busy){
  document.querySelectorAll('[data-profile-login-control="1"]').forEach(el=>{
    el.disabled = !!busy;
  });
  const btn = document.getElementById('loginBtn_'+profileId);
  if(btn) btn.textContent = busy ? 'Lädt...' : 'Fortsetzen';
}
function showLoginError(message, profileId){
  const el = document.getElementById('loginError');
  if(el){
    el.textContent = message;
    el.style.display = 'block';
  } else {
    alert(message);
  }
  setProfileLoginBusy(profileId, false);
  const input = document.getElementById('pw_'+profileId);
  if(input){
    input.disabled = false;
    input.focus();
    input.select();
  }
}
async function createProfileFromLogin(){
  // Temporaeres Debug-Log fuer den Erstellungsablauf; bei Bedarf spaeter entfernen.
  const dbg = (...a)=>console.info('[NeueSitzung]', ...a);
  const input = document.getElementById('newProfileName');
  const pwInput = document.getElementById('newProfilePassword');
  const name = (input && input.value.trim()) || 'Neues Autohaus';
  const password = (pwInput && pwInput.value.trim()) || '';
  if(!name.trim()){ alert('Bitte einen Namen für den Spielstand eingeben.'); return; }
  if(!password){ alert('Bitte ein Passwort für diesen Spielstand eingeben.'); return; }
  let stateKey = '';
  let profileListed = false;
  try{
    const profiles = await loadProfiles();
    dbg('Profilliste vor Erstellung:', profiles.map(p=>p.id));
    let id = profileIdFromName(name);
    if(profiles.some(p=>p.id===id)) id = id+'-'+Date.now().toString(36).slice(-4);
    stateKey = profileStateKey(id);
    dbg('Neuer Session-Key:', stateKey);

    // Schritt 1: Default-State vollstaendig im Speicher aufbauen (noch nichts persistiert)
    state = defaultState();
    activeProfileId = id;
    activeProfileName = name;
    refreshMarketPool();
    seedInitialInventory();
    state.cashHistory.push({day:1, cash:state.cash, net:0});
    notify('Willkommen bei Automotive Empire! Bauen Sie Ihr Autohaus-Imperium auf.', 'good');

    // Schritt 2: State speichern und Erfolg per Read-back verifizieren
    const payload = JSON.stringify(state);
    await storageSet(stateKey, payload);
    const check = await storageGet(stateKey);
    const stateSaved = !!(check && check.value && check.value.length === payload.length);
    dbg('State speichern erfolgreich:', stateSaved);
    if(!stateSaved) throw new Error('Der Spielstand konnte nicht in den Speicher geschrieben werden (Speicher voll?).');

    // Schritt 3: Erst nach erfolgreichem Speichern in die Sitzungsliste eintragen
    try{
      await saveProfiles([...profiles, {id, name, password, createdAt:Date.now(), lastPlayed:Date.now()}]);
      profileListed = true;
    }catch(listErr){
      await storageSet(stateKey, ''); // keine halben Daten zuruecklassen
      throw listErr;
    }
    dbg('Profilliste nach Erstellung:', (await loadProfiles()).map(p=>p.id));
    dbg('Runtime-State aktualisiert:', !!(state && activeProfileId===id));
  }catch(e){
    console.error('[NeueSitzung] Erstellung fehlgeschlagen:', e);
    // Aufraeumen: keine halbe Sitzung zuruecklassen, UI sofort wieder konsistent machen
    if(!profileListed && stateKey){ try{ await storageSet(stateKey, ''); }catch(_){} }
    state = null;
    activeProfileId = null;
    activeProfileName = '';
    try{ await renderProfileLogin(); }catch(_){}
    dbg('UI neu gerendert: ja (Login-Liste nach Fehler)');
    dbg('Fehler-Toast ausgeloest: ja');
    alert('Neue Spielsitzung konnte nicht erstellt werden: '+(e && e.message ? e.message : e)+'\nEs wurde nichts gespeichert.');
    return;
  }
  // Schritt 4: UI sofort aktualisieren und direkt ins Spiel wechseln.
  // Fehler ab hier sind reine Anzeige-Fehler - die Sitzung ist bereits korrekt gespeichert und gelistet.
  try{
    startProfileGame();
    dbg('UI neu gerendert: ja (direkter Einstieg ins Spiel)');
    dbg('Fehler-Toast ausgeloest: nein');
  }catch(uiErr){
    console.error('[NeueSitzung] Anzeige-Fehler nach erfolgreichem Speichern:', uiErr);
    state = null;
    activeProfileId = null;
    activeProfileName = '';
    try{ await renderProfileLogin(); }catch(_){}
    dbg('UI neu gerendert: ja (Login-Liste, Sitzung gespeichert)');
    dbg('Fehler-Toast ausgeloest: ja (Anzeige-Fehler, kein Speicherfehler)');
    alert('Die Sitzung wurde gespeichert, aber die Anzeige konnte nicht geladen werden. Die neue Sitzung ist in der Liste auswählbar.');
  }
}
async function selectProfile(profileId){
  let started = false;
  try{
    setProfileLoginBusy(profileId, true);
    const errorEl = document.getElementById('loginError');
    if(errorEl){ errorEl.textContent = ''; errorEl.style.display = 'none'; }
    const profiles = await loadProfiles();
    const profile = profiles.find(p=>p.id===profileId);
    if(!profile){
      showLoginError('Profil wurde nicht gefunden. Bitte erneut auswählen.', profileId);
      return;
    }
    const pw = document.getElementById('pw_'+profileId)?.value || '';
    if((profile.password||'') !== pw){
      showLoginError(profile.password ? 'Falsches Passwort.' : 'Dieser alte Spielstand hat kein Passwort. Feld leer lassen.', profileId);
      return;
    }
    activeProfileId = profile.id;
    activeProfileName = profile.name;
    const loaded = await loadGame(profile.id);
    if(!loaded){
      state = defaultState();
      refreshMarketPool();
      seedInitialInventory();
      state.cashHistory.push({day:1, cash:state.cash, net:0});
    } else {
      migrateState();
    }
    await upsertProfileMeta(profile.id, {lastPlayed:Date.now()});
    started = true;
    startProfileGame();
  }catch(e){
    console.error('[ProfileLogin] Login fehlgeschlagen:', e);
    activeProfileId = null;
    activeProfileName = '';
    state = null;
    try{ await renderProfileLogin(); }catch(_){}
    showLoginError('Login fehlgeschlagen. Bitte erneut versuchen.', profileId);
  }finally{
    if(!started && document.getElementById('loginError')) setProfileLoginBusy(profileId, false);
  }
}
function startProfileGame(){
  applyTheme();
  renderGameShell();
  ensureCandidates();
  recordMarketSnapshot();
  renderTopbar();
  navigateTo('dashboard');
  scheduleSave();
  if(!gameClockStarted){
    startGameClock();
    gameClockStarted = true;
  }
  // Nach dem Login einmalig die Neuerungen der frisch installierten Ausgabe zeigen.
  maybeShowVersionWelcome();
}
async function switchProfile(){
  if(state && activeProfileId) await saveNow();
  activeProfileId = null;
  activeProfileName = '';
  state = null;
  dayElapsedMs = 0;
  priceElapsedMs = 0;
  renderProfileLogin();
}
async function loadGame(profileId){
  try{
    const res = await storageGet(profileStateKey(profileId));
    if(res && res.value){
      state = repairMojibakeDeep(JSON.parse(res.value));
      return true;
    }
  }catch(e){ /* not found */ }
  return false;
}
async function saveNow(){
  if(!state || !activeProfileId) return;
  captureActiveDrafts();
  await storageSet(profileStateKey(activeProfileId), JSON.stringify(state));
  await upsertProfileMeta(activeProfileId, {name:activeProfileName||activeProfileId, lastPlayed:Date.now()});
}
function scheduleSave(){
  if(!activeProfileId) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    try{
      await saveNow();
      const el = document.getElementById('savebadge');
      if(el){
        el.innerHTML = '<span class="sdot"></span><span><b>Gespeichert</b><small>Letzte Speicherung: vor wenigen Sekunden</small></span>';
        el.classList.remove('saved-pulse');
        void el.offsetWidth;
        el.classList.add('saved-pulse');
      }
    }catch(e){ console.error('Save fehlgeschlagen', e); }
  }, 500);
}

/* =============================== NOTIFICATIONS / TRANSACTIONS =============================== */
function notify(msg, kind){
  state.notifications.unshift({id:uid('n'), msg, day:state.day, kind:kind||'info', ts:Date.now()});
  state.notifications = state.notifications.slice(0,40);
  state.unreadNotif = (state.unreadNotif||0)+1;
}
function showToast(icon, text, actionLabel, actionFn){
  const stack = document.getElementById('toaststack');
  if(!stack) return;
  const existing = [...stack.querySelectorAll('.toast')];
  const overflow = existing.length ? (Number(stack.dataset.overflow||0) + existing.length) : 0;
  existing.forEach(t=>dismissToast(t, true));
  stack.dataset.overflow = String(overflow);
  const el = document.createElement('div');
  el.className = `toast ${toastTone(icon, text)} ${actionFn?'clickable':''}`;
  const btnId = uid('toastbtn');
  el.innerHTML = `<span class="ic">${icon}</span><span class="txt">${text}</span>`;
  if(overflow>0){
    const more = document.createElement('span');
    more.className = 'toast-more';
    more.textContent = `+${overflow} weitere`;
    el.appendChild(more);
  }
  if(actionLabel && actionFn){
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary btn-sm';
    btn.textContent = actionLabel;
    btn.onclick = (ev)=>{ ev.stopPropagation(); actionFn(); dismissToast(el); stack.dataset.overflow = '0'; };
    el.appendChild(btn);
    el.onclick = (ev)=>{ if(ev.target.closest('button')) return; actionFn(); dismissToast(el); stack.dataset.overflow = '0'; };
  }
  stack.appendChild(el);
  setTimeout(()=>{
    dismissToast(el);
    if(!stack.querySelector('.toast')) stack.dataset.overflow = '0';
  }, 7000);
}
function toastTone(icon, text){
  const hay = `${icon||''} ${text||''}`.toLowerCase();
  if(hay.includes('⚠') || hay.includes('mahnung') || hay.includes('überfällig') || hay.includes('warn')) return 'warn';
  if(hay.includes('zahlung') || hay.includes('gekauft') || hay.includes('abgeschlossen') || hay.includes('erfolgreich') || hay.includes('+')) return 'good';
  if(hay.includes('📧') || hay.includes('🏦') || hay.includes('🔍') || hay.includes('⭐')) return 'info';
  return '';
}
function dismissToast(el, instant){
  if(!el || !el.parentNode) return;
  if(instant || window.matchMedia('(prefers-reduced-motion: reduce)').matches){ el.remove(); return; }
  if(el.classList.contains('leaving')) return;
  el.classList.add('leaving');
  setTimeout(()=>{ if(el.parentNode) el.remove(); }, 240);
}
function setUpdateUi(status, label, progress){
  updateUiState = {status, label, progress: progress ?? null};
  const el = document.getElementById('updateStatusText');
  if(el) el.textContent = label;
}
// Update-Regeln: Niemals mitten in einer Spielsitzung installieren oder unterbrechen.
// Automatische Prüfungen laufen still; nur eine bewusste, manuelle Prüfung darf Dialoge zeigen.
let updateManualCheck = false;        // Spieler hat gerade bewusst "Nach Updates suchen" geklickt
let pendingUpdateVersion = null;      // Version eines fertig heruntergeladenen Updates
let updateHintShownVersion = null;    // dezenter Hinweis pro Version nur einmal pro Sitzung
let updateInstallOfferShown = false;  // Installations-Dialog am Login nur einmal anbieten
function inGameSession(){
  return !!(state && activeProfileId);
}
function showUpdateHint(version){
  if(updateHintShownVersion === (version||'?')) return;
  updateHintShownVersion = version || '?';
  dismissUpdateHint(true);
  const el = document.createElement('div');
  el.id = 'updateHint';
  el.innerHTML = `
    <div class="uh-icon">⬇</div>
    <div class="uh-text"><b>Neues Update verfügbar.</b>Bitte prüfe Updates nach deiner Spielsitzung — dein Spiel läuft ungestört weiter.</div>
    <button class="uh-close" onclick="dismissUpdateHint()" title="Ausblenden">×</button>
  `;
  document.body.appendChild(el);
  setTimeout(()=>dismissUpdateHint(), 12000);
}
function dismissUpdateHint(instant){
  const el = document.getElementById('updateHint');
  if(!el) return;
  if(instant || window.matchMedia('(prefers-reduced-motion: reduce)').matches){ el.remove(); return; }
  if(el.classList.contains('leaving')) return;
  el.classList.add('leaving');
  setTimeout(()=>{ if(el.parentNode) el.remove(); }, 320);
}
function offerUpdateInstall(version){
  const label = 'Ein Update ist bereit.';
  showModal(`
    <h2 class="section-title">Update bereit</h2>
    <p class="subtle">${escapeHtml(label)} Jetzt neu starten und installieren?</p>
    <div class="row-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Später</button>
      <button class="btn btn-primary" onclick="installDownloadedUpdate()">Jetzt neu starten</button>
    </div>
  `);
}
function maybeOfferPendingUpdateAtLogin(){
  // Wird am Login-Bildschirm aufgerufen: Hier darf ein fertiges Update angeboten werden.
  if(inGameSession() || updateInstallOfferShown) return;
  if(updateUiState.status !== 'ready' || !pendingUpdateVersion) return;
  updateInstallOfferShown = true;
  offerUpdateInstall(pendingUpdateVersion);
}
function handleUpdaterStatus(payload){
  if(!payload || !payload.type) return;
  const manual = updateManualCheck || !!payload.manual;
  if(payload.type === 'update-disabled'){
    const label = payload.reason === 'dev-build'
      ? 'Updates sind in der DEV-Version deaktiviert.'
      : payload.reason === 'not-configured'
      ? 'Update-Quelle ist noch nicht konfiguriert.'
      : 'Updates sind im Entwicklungsmodus deaktiviert.';
    setUpdateUi('disabled', label);
    if(manual) showToast('ℹ️', label);
    updateManualCheck = false;
    return;
  }
  if(payload.type === 'update-checking'){
    setUpdateUi('checking', 'Suche nach Updates...');
    return;
  }
  if(payload.type === 'update-available'){
    const label = 'Ein Update ist verfügbar.';
    setUpdateUi('available', label);
    if(manual) showToast('⬇️', `${label} Download startet...`);
    else if(inGameSession()) showUpdateHint(payload.version);
    return;
  }
  if(payload.type === 'update-not-available'){
    setUpdateUi('current', 'Automotive Empire ist auf dem neuesten Stand.');
    if(manual) showToast('✅', '<b>Automotive Empire ist auf dem neuesten Stand.</b>');
    updateManualCheck = false;
    return;
  }
  if(payload.type === 'update-download-progress'){
    const pct = Math.max(0, Math.min(100, Math.round(payload.percent || 0)));
    setUpdateUi('downloading', `Update wird heruntergeladen... ${pct}%`, pct);
    return;
  }
  if(payload.type === 'update-downloaded'){
    pendingUpdateVersion = payload.version || pendingUpdateVersion || null;
    const label = 'Ein Update ist bereit.';
    setUpdateUi('ready', label);
    if(manual || !inGameSession()){
      // Bewusste Prüfung oder Login-Bildschirm: Installation darf angeboten werden.
      offerUpdateInstall(payload.version);
    } else {
      // Laufende Spielsitzung: nur dezenter Hinweis oben rechts, keine Unterbrechung.
      showUpdateHint(payload.version);
    }
    updateManualCheck = false;
    return;
  }
  if(payload.type === 'update-error'){
    setUpdateUi('error', 'Update-Prüfung fehlgeschlagen.');
    if(manual) showToast('⚠️', `Update-Prüfung fehlgeschlagen${payload.message?': '+payload.message:''}`);
    updateManualCheck = false;
  }
}
function initUpdaterBridge(){
  if(!window.updater || typeof window.updater.onStatus !== 'function') return;
  window.updater.onStatus(handleUpdaterStatus);
}
async function loadAppRuntimeInfo(){
  try{
    if(window.appInfo && typeof window.appInfo.get === 'function'){
      appRuntimeInfo = {...appRuntimeInfo, ...(await window.appInfo.get())};
    }
  }catch(e){
    appRuntimeInfo = {name:'Automotive Empire', isDev:false, updaterEnabled:true};
  }
  applyAppRuntimeInfo();
}
function applyAppRuntimeInfo(){
  document.title = appRuntimeInfo.isDev ? 'Automotive Empire DEV' : 'Automotive Empire';
  document.body.classList.toggle('dev-build', !!appRuntimeInfo.isDev);
  let badge = document.getElementById('devBuildBadge');
  if(appRuntimeInfo.isDev){
    if(!badge){
      badge = document.createElement('div');
      badge.id = 'devBuildBadge';
      badge.textContent = 'DEV Build';
      document.body.appendChild(badge);
    }
    setUpdateUi('disabled', 'Updates sind in der DEV-Version deaktiviert.');
  } else if(badge){
    badge.remove();
  }
}
async function checkForUpdatesManual(){
  if(!window.updater || typeof window.updater.checkManual !== 'function'){
    setUpdateUi('unavailable', 'Update-System ist nicht verfügbar.');
    showToast('ℹ️', 'Update-System ist nicht verfügbar.');
    return;
  }
  if(pendingUpdateVersion){
    // Update wurde bereits heruntergeladen: direkt anbieten statt erneut zu prüfen.
    setUpdateUi('ready', 'Ein Update ist bereit.');
    offerUpdateInstall(pendingUpdateVersion);
    return;
  }
  updateManualCheck = true;
  setUpdateUi('checking', 'Suche nach Updates...');
  showToast('🔍', 'Suche nach Updates...');
  try{
    const res = await window.updater.checkManual();
    if(res && res.dev) handleUpdaterStatus({type:'update-disabled', manual:true});
    else if(res && res.busy) showToast('ℹ️', 'Update-Prüfung läuft bereits.');
  }catch(e){
    handleUpdaterStatus({type:'update-error', message:e && e.message ? e.message : String(e)});
  }
}
async function installDownloadedUpdate(){
  if(!window.updater || typeof window.updater.installNow !== 'function') return;
  await window.updater.installNow();
}
/* --------- lastSeenVersion: Willkommensfenster nach Update (einmalig) --------- */
const LAST_SEEN_VERSION_KEY = 'autodealer-last-seen-version';
async function getLastSeenVersion(){
  try{
    if(window.storage && typeof window.storage.get === 'function'){
      const res = await window.storage.get(LAST_SEEN_VERSION_KEY);
      if(res && res.value) return String(res.value).trim();
    }
  }catch(e){ /* Fallback unten */ }
  try{ return localStorage.getItem(LAST_SEEN_VERSION_KEY); }catch(e){ return null; }
}
async function setLastSeenVersion(version){
  try{
    if(window.storage && typeof window.storage.set === 'function'){
      await window.storage.set(LAST_SEEN_VERSION_KEY, version);
      return;
    }
  }catch(e){ /* Fallback unten */ }
  try{ localStorage.setItem(LAST_SEEN_VERSION_KEY, version); }catch(e){}
}
async function maybeShowVersionWelcome(){
  try{
    const seen = await getLastSeenVersion();
    if(seen === GAME_VERSION) return;
    // Sofort merken, damit das Fenster garantiert nur einmal automatisch erscheint.
    setLastSeenVersion(GAME_VERSION);
    const entry = CHANGELOG.find(e=>cmpVersion(e.version, GAME_VERSION)===0);
    const meta = updateTypeMeta(entry ? entry.type : 'normal');
    showModal(`
      <div class="welcome-version-head">
        <div class="wv-icon">${UPD_SVG[meta.icon] || UPD_SVG.gear}</div>
        <h2>Willkommen zurück</h2>
        <p>${entry && entry.title ? escapeHtml(entry.title) + ' — ' : ''}Das ist neu in Automotive Empire:</p>
      </div>
      <div class="welcome-changelog">${entry ? renderChangelogSections(entry) : '<div class="upd-empty">Details findest du unter „Updates &amp; News“.</div>'}</div>
      <div class="row-actions">
        <button class="btn btn-ghost" onclick="closeModal();navigateTo('updates')">Alle Updates ansehen</button>
        <button class="btn btn-primary" onclick="closeModal()">Verstanden</button>
      </div>
    `, 'modal-welcome');
  }catch(e){ console.error('[Updates] Willkommensfenster fehlgeschlagen:', e); }
}
function addTx(type, desc, amount){
  state.cash += amount;
  state.transactions.unshift({id:uid('t'), day:state.day, type, desc, amount});
  state.transactions = state.transactions.slice(0,200);
}
function avg(arr, pick){
  const vals = arr.map(pick||((x)=>x)).filter(v=>Number.isFinite(v));
  return vals.length ? vals.reduce((s,v)=>s+v,0)/vals.length : 0;
}
function sumBy(arr, pick){ return arr.reduce((s,x)=>s+(Number(pick(x))||0),0); }
function groupCount(arr, pick){
  return arr.reduce((m,x)=>{ const k = pick(x) || 'Unbekannt'; m[k]=(m[k]||0)+1; return m; }, {});
}
function topEntries(map, limit){
  return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0, limit||6);
}
function legacyState(){
  state.legacy = state.legacy || {};
  if(!Array.isArray(state.legacy.completed)) state.legacy.completed = [];
  if(state.legacy.current===undefined || state.legacy.current===null) state.legacy.current = state.legacy.completed.length ? state.legacy.completed.length : 0;
  if(state.legacy.completed.length===0 && state.legacy.current===1) state.legacy.current = 0;
  if(state.legacy.foundingCapital===undefined) state.legacy.foundingCapital = 45000;
  if(state.legacy.startedAtDay===undefined) state.legacy.startedAtDay = 1;
  if(state.legacy.explained===undefined) state.legacy.explained = false;
  if(state.legacy.masterUnlocked===undefined) state.legacy.masterUnlocked = false;
  return state.legacy;
}
function roman(n){
  if(n>10) return String(n);
  return ['','I','II','III','IV','V','VI','VII','VIII','IX','X'][n] || String(n);
}
function legacyLabel(){
  const l = legacyState();
  return l.masterUnlocked ? 'Master' : ((l.current||0)>0 ? 'Legacy '+roman(l.current) : 'Erste Gründung');
}
function hasLegacyRun(){
  const l = legacyState();
  return (l.current||0)>0 || (l.completed||[]).length>0 || !!l.masterUnlocked;
}
function isLegacySaleAvailable(){
  return (state.level||1) >= 30 && !legacyState().masterUnlocked;
}
function ensureUpgrades(){
  state.upgrades = state.upgrades || {};
  state.upgradeStats = state.upgradeStats || {totalInvestment:0, purchases:0};
  if(state.upgradeStats.totalInvestment===undefined) state.upgradeStats.totalInvestment = 0;
  if(state.upgradeStats.purchases===undefined) state.upgradeStats.purchases = 0;
}
function upgradeDef(id){ return UPGRADE_DEFS.find(u=>u.id===id); }
function upgradeLevel(id){
  ensureUpgrades();
  return clamp(Number(state.upgrades[id]||0), 0, 3);
}
function upgradeUnlocked(def){
  const legacyCurrent = legacyState().current || 0;
  return (state.level||1) >= (def.reqLevel||1) && legacyCurrent >= (def.legacyReq||0);
}
function upgradeRequirementText(def){
  const parts = [];
  if((state.level||1) < (def.reqLevel||1)) parts.push(`Level ${def.reqLevel}`);
  if((legacyState().current||0) < (def.legacyReq||0)) parts.push(`Legacy ${roman(def.legacyReq)}`);
  return parts.length ? parts.join(' · ') : 'Freigeschaltet';
}
function upgradeCost(def){
  const level = upgradeLevel(def.id);
  return level >= 3 ? null : def.costs[level];
}
function upgradeEffectText(def){
  const level = upgradeLevel(def.id);
  return level >= 3 ? 'Maximal ausgebaut' : def.effects[level];
}
function buyUpgrade(id){
  ensureUpgrades();
  const def = upgradeDef(id);
  if(!def) return;
  const level = upgradeLevel(id);
  if(level >= 3){ notify('Dieses Upgrade ist bereits vollständig ausgebaut.', 'info'); return; }
  if(!upgradeUnlocked(def)){ notify(`Voraussetzung fehlt: ${upgradeRequirementText(def)}.`, 'warn'); return; }
  const cost = upgradeCost(def);
  if((state.cash||0) < cost){ notify(`Nicht genug Liquidität für ${def.name}.`, 'warn'); return; }
  state.upgrades[id] = level + 1;
  state.upgradeStats.totalInvestment += cost;
  state.upgradeStats.purchases += 1;
  addTx('expense', 'Upgrade: '+def.name+' Stufe '+(level+1), -cost);
  addXp(18 + (level+1)*9, 'upgrade');
  notify(`${def.name} auf Stufe ${level+1} ausgebaut.`, 'good');
  renderAllOpen();
  scheduleSave();
}
function ensureBranches(){
  if(!state) return;
  delete state.branches;
  delete state.currentBranchId;
  delete state.branchTransfers;
}
function activeBranch(){
  ensureBranches();
  return {id:'main_dealership', city:'Autohaus', openedDay:1, specialization:'Ein Autohaus', color:'blue'};
}
function activeBranchId(){ return activeBranch().id; }
function itemBranchId(item){ return 'main_dealership'; }
function inActiveBranch(item){ return true; }
function activeInventory(){ return state.inventory||[]; }
function activeMarket(){ return state.market||[]; }
function activeOffers(){ return state.offers||[]; }
function activeReviews(){ return state.reviews||[]; }
function activeSearchOrders(){ return state.searchOrders||[]; }
function activePurchaseRequests(){ return state.purchaseRequests||[]; }
function activeWorkshopJobs(){ return state.workshopJobs||[]; }
function activeDeliveries(){ return state.deliveries||[]; }
function activeListingIds(){ return Object.keys(state.listings||{}).filter(id=>findCar(id)); }
function branchBuyCost(){
  return 0;
}
function companyProgressScale(){
  const equity = Math.max(0, companyEquity ? companyEquity() : 0);
  const level = state.level || 1;
  const equityScale = equity>=2500000 ? 1 : (equity>=1400000 ? .82 : (equity>=750000 ? .66 : (equity>=350000 ? .52 : (equity>=120000 ? .42 : .36))));
  const levelScale = level>=30 ? 1 : (level>=24 ? .82 : (level>=18 ? .66 : (level>=12 ? .52 : (level>=6 ? .42 : .36))));
  return Math.max(equityScale, levelScale);
}
function switchBranch(id){
  notify('Das Spiel arbeitet jetzt mit einem einzigen Autohaus.', 'info');
}
function buyBranch(city){
  notify('Das bestehende Autohaus waechst ueber Unternehmenswert und Fortschritt.', 'info');
}
function branchStats(branch){
  const cars = state.inventory||[];
  const sales = state.salesHistory||[];
  const reviews = state.reviews||[];
  const monthSales = sales.filter(s=>(s.day||0)>=(state.day||1)-30);
  const workshop = state.workshopJobs||[];
  return {cars, monthProfit: sumBy(monthSales, s=>s.profit||0), reviews, avgStars: avg(reviews, r=>r.stars||0), avgStand: avg(sales, s=>s.standDays||0), monthSales: monthSales.length, workload: clamp(Math.round((cars.length + workshop.length*2)/12*100),0,100)};
}
function companyScaleLabel(){
  const equity = Math.max(0, companyEquity ? companyEquity() : 0);
  const level = state.level || 1;
  if(equity>=2500000 || level>=30) return 'Supersportwagen · Hypercars · Sammlerfahrzeuge';
  if(equity>=1400000 || level>=24) return 'Firmenkunden · Großaufträge · Flotten';
  if(equity>=750000 || level>=18) return 'Luxusfahrzeuge · exklusive Kunden';
  if(equity>=350000 || level>=12) return 'Sportwagen · Oberklasse';
  if(equity>=120000 || level>=6) return 'Premiumfahrzeuge · Jahreswagen';
  return 'Normale Gebrauchtwagen';
}
function activeContractCount(){
  return (state.receivables||[]).filter(r=>!r.archived && !r.closed).length + (state.leaseContracts||[]).filter(l=>!l.archived && l.status==='active').length;
}
function recurringMonthlyValue(){
  return (state.receivables||[]).filter(r=>!r.archived && !r.closed).reduce((s,r)=>s+(r.monthlyPayment||0),0) + (state.leaseContracts||[]).filter(l=>!l.archived && l.status==='active').reduce((s,l)=>s+(l.monthlyPayment||0),0);
}
function avgReviewStars(){
  return avg(state.reviews||[], r=>r.stars||0) || 0;
}
function customerRetentionCount(){
  return Object.values(state.customers||{}).filter(c=>(c.purchases||[]).length>1 || (c.satisfaction||0)>=82).length;
}
function companyAssetsValue(){
  const stock = (state.inventory||[]).reduce((s,c)=>s+(c.marketValue||c.price||0),0);
  const receivables = (state.receivables||[]).filter(r=>!r.archived && !r.closed).reduce((s,r)=>s+(r.remainingPrincipal||0),0);
  const leases = (state.leaseContracts||[]).filter(l=>!l.archived && l.status==='active').reduce((s,l)=>s+(l.residual||0)*0.55,0);
  return Math.round(stock + receivables + leases);
}
function companyEquity(){
  return Math.round((state.cash||0) + companyAssetsValue() - (state.loanPrincipal||0));
}
function legacyDunningFeeAdjustment(){
  return Math.max(0, Math.round(state.legacyDunningFeeExtraIncome||0));
}
function legacyIndex(){
  const sales = state.salesHistory || [];
  const reviews = state.reviews || [];
  const sold = state.salesCount || sales.length || 0;
  const grossProfit = Math.max(0, state.totalProfit||0);
  const feeAdjustment = legacyDunningFeeAdjustment();
  const equity = Math.max(0, companyEquity() - feeAdjustment);
  const fairCash = Math.max(0, (state.cash||0) - feeAdjustment);
  const avgMargin = avg(sales, s=>s.marginPct||0);
  const avgStand = avg(sales, s=>s.standDays||0);
  const listed = Object.keys(state.listings||{}).length;
  const closeRate = sold / Math.max(1, sold + (state.offers||[]).length);
  const reviewStars = avgReviewStars();
  const complaints = reviews.filter(r=>r.complaint).length;
  const recommendations = reviews.filter(r=>r.recommend).length;
  const openClaims = activeClaims().length;
  const activeContracts = activeContractCount();
  const recovered = state.claimsRecovered||0;
  const dunnings = state.dunningsSent||0;
  const lossSales = sales.filter(s=>(s.profit||0)<0).length;
  const badStock = (state.inventory||[]).filter(c=>(c.condition||100)<45 || (c.hiddenIssues||[]).length>1).length;
  const economy = clamp(grossProfit/120000*13,0,13) + clamp(Math.max(0,equity)/300000*10,0,10) + clamp((avgMargin||0)/32*8,0,8) + clamp(fairCash/90000*5,0,5) + clamp(companyAssetsValue()/450000*4,0,4);
  const salesPerf = clamp(sold/55*8,0,8) + clamp(closeRate*5,0,5) + clamp((30-Math.min(30,avgStand||30))/30*4,0,4) + clamp((state.fastSales||0)/10*3,0,3);
  const satisfaction = clamp((state.reputation||0)/100*5,0,5) + clamp(reviewStars/5*4,0,4) + clamp(recommendations/Math.max(1,reviews.length)*3,0,3) + clamp(customerRetentionCount()/8*2,0,2) - clamp(complaints*1.4,0,4);
  const management = clamp(Math.min(1,activeContracts/8)*3,0,3) + clamp(recurringMonthlyValue()/9000*3,0,3) + clamp(recovered/Math.max(1,dunnings)*3,0,3) + clamp((state.workshopCompleted||0)/18*3,0,3) + clamp((state.purchaseCount||0)/Math.max(1,sold+listed)*3,0,3) - clamp(openClaims*0.8,0,3);
  const risk = clamp(Math.max(0,equity)/180000*3,0,3) + clamp((1-(state.loanPrincipal||0)/Math.max(1,companyAssetsValue()+state.cash||1))*3,0,3) + clamp((1-lossSales/Math.max(1,sold))*2,0,2) + clamp((1-badStock/Math.max(1,(state.inventory||[]).length))*2,0,2);
  const categories = [
    {key:'economy', label:'Wirtschaftlichkeit', max:40, points:clamp(economy,0,40)},
    {key:'sales', label:'Verkaufsleistung', max:20, points:clamp(salesPerf,0,20)},
    {key:'satisfaction', label:'Kundenzufriedenheit', max:15, points:clamp(satisfaction,0,15)},
    {key:'management', label:'Unternehmensfuehrung', max:15, points:clamp(management,0,15)},
    {key:'risk', label:'Risiko-Management', max:10, points:clamp(risk,0,10)},
  ];
  const total = clamp(categories.reduce((s,c)=>s+c.points,0),0,100);
  return {categories, total, successRate:Math.round(total)};
}
function companyValuation(){
  const idx = legacyIndex();
  const sales = state.salesHistory || [];
  const feeAdjustment = legacyDunningFeeAdjustment();
  const fairEquity = Math.max(0, companyEquity() - feeAdjustment);
  const goodwill = Math.max(0,state.totalProfit||0) * (1.8 + idx.total/100);
  const stockPremium = companyAssetsValue() * 0.18;
  const customerValue = (state.reputation||0) * 850 + customerRetentionCount()*4200 + avgReviewStars()*12000;
  const contractValue = recurringMonthlyValue()*18 + activeContractCount()*1700;
  const efficiency = Math.max(0, 28 - (avg(sales, s=>s.standDays||0)||28)) * Math.max(1,state.salesCount||1) * 260;
  const debtDrag = Math.max(0,state.loanPrincipal||0) * 1.12;
  const rawValue = Math.max(0, Math.round(Math.max(45000, companyEquity()) + goodwill + stockPremium + customerValue + contractValue + efficiency - debtDrag));
  const value = Math.max(0, Math.round(rawValue - feeAdjustment));
  return {
    index: idx,
    rawValue,
    dunningFeeAdjustment: feeAdjustment,
    value,
    nextCapital: Math.round(value * 0.10),
    equity: fairEquity,
    rawEquity: companyEquity(),
    assets: companyAssetsValue(),
    recurring: recurringMonthlyValue(),
    avgMargin: avg(sales, s=>s.marginPct||0),
    avgStand: avg(sales, s=>s.standDays||0),
    avgStars: avgReviewStars(),
  };
}
function legacyScoreAfter(rate){
  const done = legacyState().completed || [];
  const all = done.map(x=>x.successRate).concat(rate);
  return Math.round(avg(all, x=>x));
}
function currentLegacyScore(){
  const done = legacyState().completed || [];
  return done.length ? Math.round(avg(done, x=>x.successRate||0)) : 0;
}
function currentDemandItems(){
  const offerItems = (state.offers||[]).map(o=>{
    const c = findCar(o.carId);
    return c ? {brand:c.brand, model:c.model, day:state.day, source:'Kaufanfrage'} : null;
  }).filter(Boolean);
  const searchItems = (state.searchOrders||[]).filter(o=>o.status==='open').map(o=>({brand:o.brand, model:o.model, day:o.createdDay||state.day, source:'Suchauftrag'}));
  return offerItems.concat(searchItems);
}
function marketSnapshot(){
  const market = state.market || [];
  const stock = state.inventory || [];
  const listings = Object.keys(state.listings||{}).map(id=>({car:findCar(id), listing:state.listings[id]})).filter(x=>x.car);
  const sales = state.salesHistory || [];
  const purchases = state.purchaseHistory || [];
  const demand = currentDemandItems();
  return {
    day: state.day,
    avgMarketPrice: Math.round(avg(market, c=>c.price||c.marketValue||0)),
    avgListingPrice: Math.round(avg(listings, x=>x.listing.price||x.car.price||0)),
    avgSalePrice: Math.round(avg(sales, s=>s.salePrice||0)),
    avgPurchasePrice: Math.round(avg(purchases.concat(stock.map(c=>({price:c.purchasePrice||0}))), p=>p.price||0)),
    avgProfit: Math.round(avg(sales, s=>s.profit||0)),
    avgMarginPct: avg(sales, s=>s.marginPct||0),
    avgStandDays: avg(sales, s=>s.standDays||0),
    activeListings: listings.length,
    sold: sales.length,
    demand: demand.length,
    marketCount: market.length,
  };
}
function recordMarketSnapshot(){
  state.marketHistory = state.marketHistory || [];
  const snap = marketSnapshot();
  const last = state.marketHistory[0];
  if(last && last.day===snap.day) state.marketHistory[0] = snap;
  else state.marketHistory.unshift(snap);
  state.marketHistory = state.marketHistory.slice(0,120);
}
// Chat-Verlauf pro Kundenangebot (Postfach-System).
function addMsg(offer, from, text){
  if(!offer.messages) offer.messages = [];
  offer.messages.push({from, text, day: state.day});
  updateChatMemory(offer, from, text);
  if(from==='customer') offer.unread = true;
  syncOfferChatDom(offer.id);
}
function replyDelayFor(persona){
  const profile = typeof persona === 'object' ? persona : null;
  const speed = profile ? profile.replySpeed : ({'Sammler':38,'Rentner':34,'Luxuskäufer':54,'Schnäppchenjäger':72,'Exporthändler':76,'Pendler':70}[persona]||62);
  if(speed>=78) return Math.random()<0.78 ? 0 : 1;
  if(speed>=56) return Math.random()<0.55 ? 0 : randInt(1,2);
  return Math.random()<0.28 ? 0 : randInt(1,3);
}

/* =============================== CRM: KUNDENVERWALTUNG =============================== */
function emailFor(name){
  const map = {'ä':'ae','ö':'oe','ü':'ue','ß':'ss'};
  const clean = name.toLowerCase().replace(/[äöüß]/g, c=>map[c]||c).replace(/[^a-z\s]/g,'');
  const parts = clean.split(' ').filter(Boolean);
  return (parts.join('.')||'kunde') + '@' + choice(['web.de','gmx.de','t-online.de','outlook.de','mail.de']);
}
function phoneFor(){
  return '0'+randInt(150,179)+' '+randInt(1000000,9999999);
}
function customerAiTypeFor(persona, retained){
  if(retained) return 'Stammkunde';
  return PERSONA_AI_MAP[persona] || choice(Object.keys(CUSTOMER_AI_TYPES));
}
function customerAiValue(type, key){
  const range = (CUSTOMER_AI_TYPES[type]||CUSTOMER_AI_TYPES['Direkter Kunde'])[key] || [45,65];
  return randInt(range[0], range[1]);
}
function buildCustomerProfile(base){
  const type = CUSTOMER_AI_TYPES[base.aiType] ? base.aiType : customerAiTypeFor(base.persona, (base.purchases||[]).length>0);
  const typeDef = CUSTOMER_AI_TYPES[type] || CUSTOMER_AI_TYPES['Direkter Kunde'];
  const budget = base.budgetEstimate || randInt(6500, 85000);
  const payment = base.preferredPayment || (base.creditScore>=70 ? choice(['bar','finanzierung','leasing']) : choice(['bar','finanzierung']));
  return {
    aiType: type,
    age: base.age || randInt(21,72),
    profession: base.job || base.profession || 'Unbekannt',
    budget,
    creditScore: base.creditScore || randInt(40,85),
    preferredPayment: payment,
    desiredVehicle: base.desiredVehicle || '',
    patienceScore: base.patienceScore || customerAiValue(type,'patience'),
    negotiation: base.negotiation || customerAiValue(type,'negotiation'),
    trust: base.trust || customerAiValue(type,'trust'),
    riskAwareness: base.riskAwareness || customerAiValue(type,'risk'),
    replySpeed: base.replySpeed || customerAiValue(type,'speed'),
    writingStyle: base.writingStyle || typeDef.style,
    politeness: base.politeness || customerAiValue(type,'politeness'),
    detailLevel: base.detailLevel || customerAiValue(type,'detail'),
    priceSensitivity: base.priceSensitivity || customerAiValue(type,'price'),
    decisionDrive: base.decisionDrive || customerAiValue(type,'decision'),
  };
}
function ensureCustomerProfile(cust){
  if(!cust) return null;
  const p = buildCustomerProfile({...cust, ...(cust.profile||{})});
  Object.assign(cust, {
    age:p.age, profession:p.profession, budgetEstimate:p.budget, preferredPayment:p.preferredPayment,
    patienceScore:p.patienceScore, negotiation:p.negotiation, trust:p.trust, riskAwareness:p.riskAwareness,
    replySpeed:p.replySpeed, writingStyle:p.writingStyle, politeness:p.politeness, detailLevel:p.detailLevel,
    priceSensitivity:p.priceSensitivity, decisionDrive:p.decisionDrive, aiType:p.aiType,
  });
  cust.profile = p;
  return p;
}
function defaultChatMemory(c){
  return {
    offeredVehicles: c ? [`${c.brand} ${c.model}`] : [],
    prices: [], discounts: [], rejectedPrices: [],
    imagesSent:false, documentsMentioned:false, serviceMentioned:false, tuvMentioned:false, obdMentioned:false,
    warrantyMentioned:false, financingDiscussed:false, leasingDiscussed:false, deliveryDiscussed:false,
    reservationDiscussed:false, testDrivePlanned:false, defectMentioned:false,
    conversationState:'erste Anfrage',
    openQuestion:null,
    expectations:[],
    ignoredQuestions:0,
    answeredQuestions:0,
    lastPlayerQuestionResult:null,
    trustDelta:0,
    toneScore:0, lastIntent:'', promises:[], replies:0,
  };
}
function ensureOfferAi(o, c){
  if(!o) return null;
  if(!o.chatMemory) o.chatMemory = defaultChatMemory(c);
  if(!o.chatStatus) o.chatStatus = '';
  const cust = state.customers && o.customerId ? state.customers[o.customerId] : null;
  const profile = ensureCustomerProfile(cust) || buildCustomerProfile({persona:o.persona, job:o.job, creditScore:o.creditScore, budgetEstimate:o.amount});
  o.aiType = o.aiType || profile.aiType;
  o.customerProfile = o.customerProfile || {...profile};
  if(!o.customerProfile.aiType) o.customerProfile = {...profile};
  return o.customerProfile;
}
function createCustomer(overrides){
  overrides = overrides || {};
  const wealthyLevel = upgradeLevel('wealthy_customers');
  let persona = overrides.persona ? (PERSONAS.find(p=>p.name===overrides.persona) || choice(PERSONAS)) : choice(PERSONAS);
  if(wealthyLevel && Math.random()<wealthyLevel*0.08) persona = PERSONAS.find(p=>p.name==='Luxuskäufer') || persona;
  const job = overrides.job ? {label:overrides.job, score:[overrides.creditScore||60, overrides.creditScore||60]} : choice(JOBS);
  const creditScore = overrides.creditScore!==undefined ? clamp(Math.round(overrides.creditScore), 20, 100) : randInt(job.score[0], job.score[1]);
  const name = overrides.name || (choice(FIRSTNAMES)+' '+choice(LASTNAMES));
  const cust = {
    id: uid('cust'), name, email: emailFor(name), phone: phoneFor(),
    persona: persona.name, job: job.label, creditScore,
    preferredBrands: [], budgetEstimate: overrides.budgetEstimate!==undefined ? Math.round(overrides.budgetEstimate) : (wealthyLevel ? randInt(28000 + wealthyLevel*9000, 90000 + wealthyLevel*26000) : 0), purchases: [],
    satisfaction: clamp(randInt(50,70) + upgradeLevel('premium_presence'), 0, 100), conversationLog: [], totalSpent: 0,
    lastContactDay: state.day, financingStatus: 'Unbekannt', firstContactDay: state.day,
    monthlyIncome: overrides.monthlyIncome || 0, wealth: overrides.wealth || overrides.customerWealth || 0,
    preferredPayment: overrides.preferredPayment || null,
  };
  ensureCustomerProfile(cust);
  if(overrides.monthlyIncome) cust.profile.monthlyIncome = Math.round(overrides.monthlyIncome);
  if(overrides.wealth || overrides.customerWealth) cust.profile.wealth = Math.round(overrides.wealth || overrides.customerWealth);
  if(overrides.preferredPayment) cust.profile.preferredPayment = overrides.preferredPayment;
  state.customers[cust.id] = cust;
  return cust;
}
// Manchmal meldet sich ein bereits bekannter Kunde erneut (bevorzugt zufriedene Stammkunden).
function pickCustomer(){
  if(!state.customers) state.customers = {};
  const ids = Object.keys(state.customers).filter(id=>isRetainedCustomer(state.customers[id]));
  if(ids.length >= 4 && Math.random() < 0.35){
    const pool = ids.map(id=>state.customers[id]).sort((a,b)=>b.satisfaction-a.satisfaction);
    const topPool = pool.slice(0, Math.max(3, Math.ceil(pool.length*0.5)));
    return choice(topPool);
  }
  return createCustomer();
}
function vehicleLeadClass(price){
  price = Number(price)||0;
  if(price>=1000000) return 'hyper';
  if(price>=250000) return 'supercar';
  if(price>=90000) return 'luxury';
  if(price>=45000) return 'premium';
  if(price>=18000) return 'mainstream';
  return 'budget';
}
function dealershipAudienceLevel(){
  const stock = (state.inventory||[]).filter(c=>state.listings && state.listings[c.id]);
  const avgStockPrice = stock.length ? stock.reduce((s,c)=>s+((state.listings[c.id]?.price)||c.marketValue||0),0)/stock.length : 0;
  const valuation = companyValuation().value || 0;
  const rep = state.reputation || 50;
  return clamp(
    (rep-45)/90 +
    upgradeLevel('wealthy_customers')*0.18 +
    upgradeLevel('premium_presence')*0.12 +
    Math.log10(Math.max(1, valuation))/12 +
    Math.log10(Math.max(1, avgStockPrice))/18,
    0, 1
  );
}
function leadRealismRoll(price){
  const audience = dealershipAudienceLevel();
  const highValue = price>=250000;
  let realistic = 0.74 + audience*0.10 + (highValue ? audience*0.05 : 0);
  let difficult = 0.21 - audience*0.04;
  let unrealistic = 1 - realistic - difficult;
  unrealistic = clamp(unrealistic, highValue ? 0.025 : 0.035, 0.075);
  difficult = clamp(1-realistic-unrealistic, 0.12, 0.26);
  realistic = 1-difficult-unrealistic;
  const roll = Math.random();
  if(roll<realistic) return 'realistic';
  if(roll<realistic+difficult) return 'difficult';
  return 'unrealistic';
}
function leadPersonaJobPool(vehicleClass, realism){
  const premium = ['Luxuskäufer','Sammler'];
  const normal = ['Familienvater','Pendler','Rentner','Schnäppchenjäger'];
  const jobsNormal = ['Angestellte/r','Facharbeiter/in','Beamte/r','Rentner/in','Selbstständig'];
  const jobsBusiness = ['Geschäftsführer/in','Unternehmer/in','Selbstständig','Investor/in','Freiberufler/in'];
  const jobsVip = ['Geschäftsführer/in','Investor/in','Unternehmer/in','Profisportler/in','Sammler/in','Internationaler Käufer'];
  if(vehicleClass==='hyper') return {personas: realism==='unrealistic' ? premium.concat(['Schnäppchenjäger']) : premium.concat(['Luxuskäufer']), jobs:jobsVip};
  if(vehicleClass==='supercar') return {personas:premium.concat(['Luxuskäufer']), jobs:jobsVip.concat(jobsBusiness)};
  if(vehicleClass==='luxury') return {personas:premium.concat(['Familienvater','Rentner']), jobs:jobsBusiness.concat(['Beamte/r'])};
  if(vehicleClass==='premium') return {personas:['Familienvater','Pendler','Luxuskäufer','Sammler','Rentner'], jobs:jobsBusiness.concat(jobsNormal)};
  return {personas:normal.concat(['Student','Exporthändler']), jobs:jobsNormal};
}
function matchedLeadFinancialProfile(vehicle, price, realism){
  const vehicleClass = vehicleLeadClass(price);
  const pool = leadPersonaJobPool(vehicleClass, realism);
  const audience = dealershipAudienceLevel();
  const classProfiles = {
    budget:{income:[1400,4200], wealth:[0.08,0.85], credit:[42,86]},
    mainstream:{income:[2200,7200], wealth:[0.15,1.15], credit:[48,90]},
    premium:{income:[4200,15000], wealth:[0.25,1.8], credit:[55,94]},
    luxury:{income:[9000,42000], wealth:[0.55,2.8], credit:[62,97]},
    supercar:{income:[22000,95000], wealth:[0.9,4.2], credit:[68,99]},
    hyper:{income:[65000,220000], wealth:[1.15,5.5], credit:[74,100]},
  };
  const cfg = classProfiles[vehicleClass] || classProfiles.mainstream;
  const scale = realism==='realistic' ? randFloat(0.95, 1.35+audience*.45) : realism==='difficult' ? randFloat(0.62, 0.95) : randFloat(0.18, 0.58);
  const income = Math.round(randInt(cfg.income[0], cfg.income[1]) * scale / 50) * 50;
  const wealthFactor = randFloat(cfg.wealth[0], cfg.wealth[1]) * (realism==='realistic' ? randFloat(0.9, 1.3+audience*.45) : realism==='difficult' ? randFloat(0.55, 0.95) : randFloat(0.15, 0.52));
  const wealth = Math.round(Math.max(0, price*wealthFactor)/1000)*1000;
  const creditShift = realism==='realistic' ? 0 : realism==='difficult' ? -12 : -26;
  const creditScore = clamp(randInt(cfg.credit[0], cfg.credit[1]) + creditShift + Math.round(audience*5), 24, 100);
  return {
    vehicleClass,
    persona: choice(pool.personas),
    job: choice(pool.jobs),
    creditScore,
    monthlyIncome: Math.max(800, income),
    wealth,
    budgetEstimate: Math.round(Math.max(price*0.82, Math.min(price*1.25, wealth + income*24))/10)*10,
  };
}
function leadOfferProbe(cust, car, amount, method, realism){
  return {
    id:'lead-probe',
    carId:car.id,
    customerId:cust.id,
    name:cust.name,
    persona:cust.persona,
    job:cust.job,
    creditScore:cust.creditScore,
    amount,
    paymentMethod:method,
    leadRealism:realism,
    monthlyIncome:cust.monthlyIncome,
    wealth:cust.wealth,
    customerProfile:{...(cust.profile||{}), monthlyIncome:cust.monthlyIncome, wealth:cust.wealth, budget:cust.budgetEstimate, preferredPayment:method},
  };
}
function financeLeadFit(cust, car, amount, realism){
  const probe = leadOfferProbe(cust, car, amount, 'finanzierung', realism);
  const capacity = financingCapacityProfile(probe, amount);
  const downCandidates = [
    capacity.desiredDown,
    amount*0.12,
    amount*0.2,
    amount*0.32,
    Math.min(amount*0.62, capacity.wealth*0.62),
    Math.min(amount*0.78, capacity.wealth*0.78),
  ].map(v=>clamp(Math.round((Number(v)||0)/10)*10, 0, amount));
  const uniqueDown = [...new Set(downCandidates)].sort((a,b)=>a-b);
  const terms = [48,60,72,84,96];
  let conditional = null;
  for(const months of terms){
    for(const downPayment of uniqueDown){
      const calc = calculateFinanceOffer(probe, car, {vehiclePrice:amount, months, downPayment, skipSuggestions:true});
      if(calc.bankCheck?.approved) return {ok:true, kind:'bankable', calc};
      if(!conditional && ['higher_down','shorter_term','higher_rate'].includes(calc.bankCheck?.result) && capacity.wealth>=amount*0.18){
        conditional = {ok:realism!=='realistic', kind:'conditional', calc};
      }
    }
  }
  return conditional || {ok:false, kind:'not_bankable'};
}
function cashLeadFit(cust, amount, realism){
  const wealth = Number(cust.wealth || cust.profile?.wealth || 0);
  const income = Number(cust.monthlyIncome || cust.profile?.monthlyIncome || 0);
  const limit = wealth + income*6;
  const needed = realism==='realistic' ? amount*0.92 : realism==='difficult' ? amount*0.58 : amount*0.18;
  return {ok:limit>=needed, limit, needed};
}
function leasingLeadFit(cust, amount, realism){
  const income = Number(cust.monthlyIncome || cust.profile?.monthlyIncome || 0);
  const wealth = Number(cust.wealth || cust.profile?.wealth || 0);
  const burdenLimit = realism==='realistic' ? 0.32 : realism==='difficult' ? 0.43 : 0.65;
  const specialPayment = clamp(Math.round(Math.min(amount*0.18, wealth*0.35)/10)*10, 0, amount);
  const terms = [36,48,60];
  let best = null;
  terms.forEach(months=>{
    const calc = calcLeasing(amount, cust.creditScore||60, {months, specialPayment});
    if(!best || calc.leaseRate<best.leaseRate) best = calc;
  });
  const businessLike = /geschäft|unternehmer|selbst|freiberuf|investor/i.test(cust.job||'');
  const ok = !!best && best.leaseRate<=income*burdenLimit && specialPayment<=Math.max(0, wealth*0.55) && (businessLike || amount<180000 || realism!=='realistic' || wealth>=amount*.65);
  return {ok, calc:best, specialPayment};
}
function chooseMatchedLeadMethod(cust, car, amount, realism, allowedMethods){
  allowedMethods = normalizePaymentMethods(allowedMethods);
  const vehicleClass = vehicleLeadClass(amount);
  const fits = {
    bar: cashLeadFit(cust, amount, realism),
    finanzierung: financeLeadFit(cust, car, amount, realism),
    leasing: leasingLeadFit(cust, amount, realism),
  };
  if(realism==='unrealistic'){
    return choice(allowedMethods);
  }
  const weighted = [];
  const add = (method, weight)=>{
    if(allowedMethods.includes(method) && fits[method]?.ok){
      for(let i=0;i<Math.max(1, Math.round(weight));i++) weighted.push(method);
    }
  };
  const businessLike = /geschäft|unternehmer|selbst|freiberuf|investor/i.test(cust.job||'');
  if(vehicleClass==='hyper' || vehicleClass==='supercar'){
    add('bar', vehicleClass==='hyper' ? 7 : 5);
    add('leasing', businessLike ? 6 : 3);
    add('finanzierung', vehicleClass==='hyper' ? 2 : 4);
  } else if(businessLike){
    add('leasing', 6);
    add('finanzierung', 4);
    add('bar', 3);
  } else {
    add('finanzierung', amount<90000 ? 7 : 4);
    add('bar', amount<45000 ? 5 : 3);
    add('leasing', amount>=35000 ? 4 : 2);
  }
  if(weighted.length) return choice(weighted);
  if(realism==='difficult'){
    const conditionalFinance = allowedMethods.includes('finanzierung') && fits.finanzierung?.kind==='conditional';
    if(conditionalFinance) return 'finanzierung';
    if(allowedMethods.includes('leasing') && fits.leasing?.calc) return 'leasing';
  }
  return null;
}
function createMatchedCustomerLead(car, listing){
  const listPrice = Math.max(500, Math.round((listing?.price || car.marketValue || 0)/10)*10);
  const allowedMethods = listingAllowedPaymentMethods(listing);
  for(let attempt=0; attempt<10; attempt++){
    const realism = leadRealismRoll(listPrice);
    const profile = matchedLeadFinancialProfile(car, listPrice, realism);
    const cust = createCustomer(profile);
    const personaObj = PERSONAS.find(p=>p.name===cust.persona) || choice(PERSONAS);
    const discount = Math.max(0.005, randFloat(personaObj.discount[0], personaObj.discount[1]) - upgradeLevel('wealthy_customers')*(cust.persona==='Luxuskäufer'?0.012:0.006));
    const amount = Math.max(500, Math.round(listPrice*(1-discount)/10)*10);
    const paymentMethod = chooseMatchedLeadMethod(cust, car, amount, realism, allowedMethods);
    if(paymentMethod || realism==='unrealistic'){
      return {cust, amount, paymentMethod:paymentMethod || choice(allowedMethods), realism, vehicleClass:profile.vehicleClass};
    }
    delete state.customers[cust.id];
  }
  const profile = matchedLeadFinancialProfile(car, listPrice, 'unrealistic');
  const cust = createCustomer(profile);
  return {cust, amount:listPrice, paymentMethod:choice(allowedMethods), realism:'unrealistic', vehicleClass:profile.vehicleClass};
}
function isRetainedCustomer(cust){
  if(!cust) return false;
  if((cust.purchases||[]).length>0) return true;
  const hasFinancing = (state.receivables||[]).some(r=>!r.closed && r.customerId===cust.id);
  const hasLease = (state.leaseContracts||[]).some(l=>l.status==='active' && l.customerId===cust.id);
  return hasFinancing || hasLease;
}
function hasActiveCustomerLead(custId){
  return state.offers.some(o=>o.customerId===custId) || state.searchOrders.some(o=>o.customerId===custId && o.status==='open');
}
function cleanupTransientCustomers(){
  Object.keys(state.customers||{}).forEach(id=>{
    const cust = state.customers[id];
    if(!isRetainedCustomer(cust) && !hasActiveCustomerLead(id)){
      delete state.customers[id];
      if(selectedCustomerId===id) selectedCustomerId = null;
    }
  });
}
function recordSaleForCustomer(offer, c, amount, profit, financing, reaction, opts){
  const cust = state.customers[offer.customerId];
  if(!cust) return;
  cust.purchases.push({brand:c.brand, model:c.model, year:c.year, price:amount, day:state.day, profit});
  cust.totalSpent = (cust.totalSpent||0)+amount;
  cust.financingStatus = financing ? (financing.type==='finanzierung'?'Finanzierung':'Leasing') : 'Barzahlung';
  normalizeVehicleIssues(c);
  const issuePenalty = (c.issues||[]).filter(i=>!i.repaired && (i.customerMentioned || (i.severity||1)>=3)).reduce((s,i)=>s+(i.severity||1),0);
  const satDelta = reaction.emoji==='😄'?8 : reaction.emoji==='🙂'?4 : reaction.emoji==='😐'?-1 : -6;
  cust.satisfaction = clamp((cust.satisfaction||60)+satDelta-Math.round(issuePenalty*1.5), 0, 100);
  cust.conversationLog = (cust.conversationLog||[]).concat((offer.messages||[]).map(m=>({...m})));
  cust.lastContactDay = state.day;
  if(!opts || opts.review !== false) createReviewFromSale(offer, c, amount, profit, financing, reaction);
}
// Schließt eine Unterhaltung ohne Verkauf ab (Ablehnung, Zeitüberschreitung, geplatzte Finanzierung) und aktualisiert die Zufriedenheit.
function closeConversationForCustomer(offer, satisfactionDelta){
  if(!offer || !offer.customerId) return;
  const cust = state.customers[offer.customerId];
  if(!cust) return;
  cust.satisfaction = clamp((cust.satisfaction||60)+satisfactionDelta, 0, 100);
  cust.conversationLog = (cust.conversationLog||[]).concat((offer.messages||[]).map(m=>({...m})));
  cust.lastContactDay = state.day;
}
function showDropoutModal(kind, title, message, detail){
  dropoutModalQueue.push({kind, title, message, detail});
  if(!dropoutModalShowing) renderNextDropoutModal();
}
function renderNextDropoutModal(){
  const item = dropoutModalQueue.shift();
  if(!item){ dropoutModalShowing = false; return; }
  dropoutModalShowing = true;
  const icon = item.kind==='purchase' ? '🤝' : '💬';
  const accent = item.kind==='purchase' ? 'var(--brass)' : 'var(--crimson)';
  showModal(`
    <div style="text-align:center;">
      <div style="font-size:38px;margin-bottom:8px;">${icon}</div>
      <h2 class="section-title" style="margin-bottom:8px;">${escapeHtml(item.title)}</h2>
      <p class="subtle" style="margin:0 auto 12px;max-width:460px;">${escapeHtml(item.message)}</p>
    </div>
    ${item.detail?`<div class="notice warn" style="display:block;border-color:${accent};">${escapeHtml(item.detail)}</div>`:''}
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:12px;" onclick="closeDropoutModal()">OK</button>
  `);
  const overlay = document.getElementById('modalOverlay');
  if(overlay) overlay.onclick = ()=>{};
}
function closeDropoutModal(){
  closeModal();
  dropoutModalShowing = false;
  renderNextDropoutModal();
}

/* =============================== NAVIGATION (Sidebar + Content-Pane) =============================== */
let currentPage = 'dashboard';

// Alias beibehalten: überall im Code wird bisher openWindow('appId') aufgerufen
// (Toasts, Icon-Klicks etc.) — das navigiert jetzt einfach zur entsprechenden Seite.
function openWindow(appId){
  navigateTo(appId);
}
function navigateTo(appId){
  currentPage = appId;
  if(appId==='reviews') markReviewsSeen();
  renderSidebar();
  renderPageContent();
  if(appId==='reviews') scheduleSave();
}
function handleGlobalSearch(e){
  if(e.key !== 'Enter') return;
  const q = (e.target.value||'').trim().toLowerCase();
  if(!q) return;
  const routeRules = [
    {id:'inventory', terms:['fahrzeug','bestand','auto','bmw','audi','mercedes','vw','porsche','preis','kilometer']},
    {id:'mailbox', terms:['nachricht','chat','kunde','angebot','mail','postfach']},
    {id:'customers', terms:['kunden','stammkunde','zufriedenheit']},
    {id:'reviews', terms:['bewertung','sterne','review','reklamation']},
    {id:'contracts', terms:['vertrag','finanzierung','leasing','mahnung','rate']},
    {id:'deliveries', terms:['lieferung','abholung','transport']},
    {id:'workshop', terms:['werkstatt','reparatur','service']},
    {id:'upgrades', terms:['upgrade','ausbau','investition','verbesserung','unternehmensausbau']},
    {id:'insights', terms:['insight','analyse','business','prognose','kennzahl']},
    {id:'market', terms:['börse','markt','kaufen','ankauf']},
    {id:'design', terms:['design','hintergrund','theme','glas','transparenz','optik']},
    {id:'settings', terms:['setting','einstellung','profil']},
    {id:'updates', terms:['update','news','changelog','version','patch','neuigkeit','neuerung']},
  ];
  const appMatch = APPS.find(a=>a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q));
  const ruleMatch = routeRules.find(r=>r.terms.some(t=>t.includes(q) || q.includes(t)));
  const carMatch = (state.inventory||[]).find(c=>`${c.brand} ${c.model}`.toLowerCase().includes(q));
  const offerMatch = (state.offers||[]).find(o=>(o.name||'').toLowerCase().includes(q));
  if(carMatch){ navigateTo('inventory'); return; }
  if(offerMatch){ navigateTo('mailbox'); openConversation(offerMatch.id); return; }
  if(appMatch || ruleMatch){ navigateTo((appMatch||ruleMatch).id); return; }
  showToast('SU', `<b>Keine direkten Treffer</b><br>Versuchen Sie Fahrzeug, Kunde, Nachricht, Vertrag oder Business Insights.`, null, null);
}
function markReviewsSeen(){
  state.seenReviewIds = (state.reviews||[]).map(r=>r.id);
}

/* =============================== RENDER: SHELL =============================== */
function fmtDelta(n){
  return (n>=0?'+':'')+money(n);
}
function todaysDelta(){
  const last = state.cashHistory[state.cashHistory.length-1];
  return last? last.net : 0;
}
const REF_ICON_PATHS = {
  dashboard:'<path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10.5V20h13v-9.5"></path><path d="M9.5 20v-6h5v6"></path>',
  market:'<path d="M4 8h16"></path><path d="M6 8l2-3h8l2 3"></path><path d="M6 8l-2 5v5h16v-5l-2-5"></path><path d="M7 18h1"></path><path d="M16 18h1"></path>',
  acquisition:'<path d="M4 4h16v16H4z"></path><path d="M12 7v10"></path><path d="M7 12h10"></path>',
  inventory:'<path d="M4 5h16v14H4z"></path><path d="M4 10h16"></path><path d="M9 5v14"></path><path d="M15 5v14"></path>',
  listings:'<path d="M7 7h12"></path><path d="M7 12h12"></path><path d="M7 17h12"></path><path d="M4 7h.01"></path><path d="M4 12h.01"></path><path d="M4 17h.01"></path>',
  wishlist:'<path d="M12 21s-7-4.4-9-9.2C1.6 8.2 3.7 5 7.1 5c2 0 3.4 1.1 4.9 2.8C13.5 6.1 14.9 5 16.9 5c3.4 0 5.5 3.2 4.1 6.8C19 16.6 12 21 12 21z"></path>',
  mailbox:'<path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path>',
  customers:'<circle cx="12" cy="8" r="3"></circle><path d="M5 19c.7-3.2 3.2-5 7-5s6.3 1.8 7 5"></path>',
  reviews:'<path d="M12 4l2.2 4.5 5 .7-3.6 3.5.8 5-4.4-2.3-4.4 2.3.8-5-3.6-3.5 5-.7z"></path>',
  contracts:'<path d="M7 3h8l4 4v14H7z"></path><path d="M15 3v5h5"></path><path d="M9.5 12h7"></path><path d="M9.5 16h5"></path>',
  deliveries:'<path d="M3 7h11v10H3z"></path><path d="M14 11h3l3 3v3h-6z"></path><circle cx="7" cy="18" r="1.6"></circle><circle cx="17" cy="18" r="1.6"></circle>',
  workshop:'<path d="M14.7 6.3 17.5 3.5l3 3-2.8 2.8"></path><path d="M13.8 7.2 5 16v3h3l8.8-8.8"></path>',
  ecu:'<path d="M7 4h10v16H7z"></path><path d="M9 8h6"></path><path d="M9 12h6"></path><path d="M9 16h3"></path><path d="M4 8h3"></path><path d="M4 12h3"></path><path d="M4 16h3"></path><path d="M17 8h3"></path><path d="M17 12h3"></path><path d="M17 16h3"></path>',
  bank:'<path d="M4 9h16"></path><path d="M6 9v9"></path><path d="M10 9v9"></path><path d="M14 9v9"></path><path d="M18 9v9"></path><path d="M3 20h18"></path><path d="M12 3l8 4H4z"></path>',
  finance:'<path d="M4 18h16"></path><path d="M6 15l4-4 3 3 6-7"></path><path d="M15 7h4v4"></path>',
  marketstats:'<path d="M5 19V9"></path><path d="M12 19V5"></path><path d="M19 19v-7"></path>',
  insights:'<circle cx="12" cy="12" r="3"></circle><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path>',
  calculator:'<path d="M6 3h12v18H6z"></path><path d="M8.5 7h7"></path><path d="M9 11h.01"></path><path d="M12 11h.01"></path><path d="M15 11h.01"></path><path d="M9 15h.01"></path><path d="M12 15h.01"></path><path d="M15 15h.01"></path>',
  employees:'<circle cx="9" cy="8" r="3"></circle><path d="M3.5 19c.5-3 2.7-5 5.5-5s5 2 5.5 5"></path><path d="M16 11a2.5 2.5 0 1 0 0-5"></path><path d="M17 19c-.2-1.8-.9-3.2-2-4.1"></path>',
  upgrades:'<path d="M12 4v16"></path><path d="m6 10 6-6 6 6"></path><path d="M5 20h14"></path>',
  design:'<path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z"></path><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z"></path><path d="M5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14z"></path>',
  legacy:'<path d="M7 8c-2 0-3.5 1.7-3.5 4S5 16 7 16c3.5 0 6.5-8 10-8 2 0 3.5 1.7 3.5 4S19 16 17 16c-3.5 0-6.5-8-10-8z"></path>',
  settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.3 3.1a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.3 3.1h5l.3-3.1a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1z"></path>',
  updates:'<path d="M4 5h13v14a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z"></path><path d="M17 9h3v10a2 2 0 0 1-2 2"></path><path d="M7 9h7"></path><path d="M7 13h7"></path><path d="M7 17h4"></path>',
  search:'<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.2-3.2"></path>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M10 21h4"></path>',
  apps:'<path d="M4 4h6v6H4z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6H4z"></path><path d="M14 14h6v6h-6z"></path>'
};
const REF_APP_META = {
  dashboard:['Dashboard','Übersicht und Kennzahlen','#d6ad56'], market:['Fahrzeugbörse','Fahrzeuge kaufen und verkaufen','#4d8cff'],
  inventory:['Fahrzeugbestand','Dein aktueller Bestand','#59b957'], customers:['Kunden','Kundenprofile verwalten','#36b6b4'],
  workshop:['Werkstatt','Reparaturen und Service','#d9822b'], ecu:['ECU-Tuning','Softwareoptimierung und Prüfstand','#d6ad56'], listings:['Inserate','Inserate verwalten','#8f55ff'],
  wishlist:['Wunschliste','Gespeicherte Fahrzeuge','#e6535f'], mailbox:['Postfach','Nachrichten und Angebote','#3d7ed9'],
  upgrades:['Unternehmensausbau','Upgrades und Investitionen','#d4a72f'], employees:['Mitarbeiter','Mitarbeiter verwalten','#28a8a8'],
  finance:['Finanzen','Buchhaltung und Finanzen','#45b947'], insights:['Business Insights','Statistiken und Analysen','#7a4bd6'],
  design:['Design','Hintergründe und visuelle Einstellungen','#d6ad56'],
  legacy:['Legacy','Dein Vermächtnis','#d79b26'], contracts:['Forderungen','Verträge und Mahnungen','#d75656'],
  deliveries:['Lieferungen','Übergaben planen','#5a91e8'], bank:['Bank','Kredite und Kapital','#d6ad56'],
  acquisition:['Ankauf','Private Angebote prüfen','#db8736'], reviews:['Bewertungen','Ruf und Feedback','#d9b846'],
  marketstats:['Marktstatistik','Trends und Preise','#4da6d9'], calculator:['Kalkulator','Marge und Risiko','#d9822b'],
  updates:['Updates & News','Changelog und Neuigkeiten','#4d8cff'],
  settings:['Einstellungen','Profil und Spielstand','#8290a2']
};
function refIcon(id){
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${REF_ICON_PATHS[id] || REF_ICON_PATHS.apps}</svg>`;
}
function appBadgeValue(appId){
  if(appId==='mailbox') return (state.offers||[]).filter(o=>o.unread).length;
  if(appId==='listings') return (state.offers||[]).length;
  if(appId==='workshop') return (state.workshopJobs||[]).length;
  if(appId==='ecu') return (state.ecuRequests||[]).filter(r=>!['completed','declined','failed'].includes(r.status)).length;
  if(appId==='contracts') return activeClaimActionCount();
  if(appId==='deliveries') return (state.deliveries||[]).filter(d=>!['completed','pickup_completed'].includes(d.status)).length;
  return 0;
}
function openProgramsWindow(){
  closeProgramsWindow();
  const overlay = document.createElement('div');
  overlay.className = 'program-overlay';
  overlay.id = 'programOverlay';
  overlay.innerHTML = `<div class="program-window" onclick="event.stopPropagation()">
    <div class="program-head">
      <div class="program-title"><b>Programme</b><small>Alle Bereiche deines Autohauses</small></div>
      <input class="program-search" id="programSearch" placeholder="Programm suchen..." oninput="renderProgramsGrid(this.value)" onkeydown="if(event.key==='Escape') closeProgramsWindow();">
      <button class="program-close" onclick="closeProgramsWindow()">×</button>
    </div>
    <div class="program-body" id="programBody"></div>
  </div>`;
  overlay.onclick = (ev)=>{ if(ev.target===overlay) closeProgramsWindow(); };
  document.getElementById('app').appendChild(overlay);
  renderProgramsGrid('');
  requestAnimationFrame(()=>document.getElementById('programSearch')?.focus());
}
function closeProgramsWindow(){
  document.getElementById('programOverlay')?.remove();
}
function renderProgramsGrid(q){
  const body = document.getElementById('programBody');
  if(!body) return;
  const query = (q||'').trim().toLowerCase();
  const groups = [
    ['Hauptbereiche',['market','acquisition','inventory','customers','workshop','ecu','listings','wishlist','mailbox']],
    ['Management',['upgrades','employees','finance','insights','legacy','contracts','deliveries','bank','reviews','marketstats','calculator','design','updates','settings']]
  ];
  const card = id=>{
    const app = APPS.find(a=>a.id===id); if(!app) return '';
    const meta = REF_APP_META[id] || [app.name,'Programm öffnen','#4d8cff'];
    const badge = appBadgeValue(id);
    return `<div class="program-card" style="--app-a:${meta[2]}" onclick="closeProgramsWindow();navigateTo('${id}')">
      <span class="program-icon">${refIcon(id)}</span>
      ${badge?`<span class="badge">${Math.min(99,badge)}</span>`:''}
      <b>${escapeHtml(meta[0])}</b>
      <small>${escapeHtml(meta[1])}</small>
    </div>`;
  };
  const html = groups.map(([label, ids])=>{
    const cards = ids.filter(id=>{
      const app = APPS.find(a=>a.id===id);
      const meta = REF_APP_META[id] || [];
      return app && (!query || `${app.name} ${id} ${meta.join(' ')}`.toLowerCase().includes(query));
    }).map(card).join('');
    return cards ? `<div class="program-section-title">${label}</div><div class="program-grid">${cards}</div>` : '';
  }).join('');
  body.innerHTML = html || '<div class="program-empty">Kein Programm gefunden.</div>';
}
function navEditIcon(){
  return `<svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
}

const DEFAULT_BOTTOM_ITEMS = ['dashboard','market','workshop'];
const DEFAULT_DOCK_ITEMS = ['dashboard','market','inventory','mailbox','workshop','contracts','finance','employees','settings'];
function getBottomItems(){ return (state.bottomItems && state.bottomItems.length) ? state.bottomItems : DEFAULT_BOTTOM_ITEMS.slice(); }
function getDockItems(){ return (state.dockItems && state.dockItems.length) ? state.dockItems : DEFAULT_DOCK_ITEMS.slice(); }

function renderBottomBar(){
  let bar = document.getElementById('bottomBar');
  if(!bar){
    bar = document.createElement('div');
    bar.id = 'bottomBar';
    bar.className = 'bottom-bar';
    document.getElementById('app').appendChild(bar);
  }
  const items = getBottomItems();
  const tabs = items.map(id=>{
    const app = APPS.find(a=>a.id===id);
    const badge = appBadgeValue(id);
    return `<div class="bottom-tab ${currentPage===id?'active':''} ${badge?'has-badge':''}" onclick="navigateTo('${id}')">${refIcon(id)}<span>${escapeHtml(app?.name||id)}</span>${badge?`<span class="badge">${Math.min(99,badge)}</span>`:''}</div>`;
  }).join('');
  const editBtn = `<button class="nav-edit-btn" onclick="openNavCustomize('bottom')" title="Leiste anpassen">${navEditIcon()}</button>`;
  bar.innerHTML = `${editBtn}<div class="bottom-logo"><img src="assets/logos/app-logo.png" alt=""></div><div class="bottom-title"><b>Automotive Empire</b><small>Premium Management</small></div>
    <span class="savebadge" id="savebadge"><span class="sdot"></span><span><b>Automatisch gespeichert</b><small>Spielstand wird nach jeder Aktion gesichert</small></span></span>
    <div class="bottom-tabs">${tabs}</div>
    <div class="bottom-tools">
      <div class="bottom-tool" onclick="openProgramsWindow()" title="Programme durchsuchen">${refIcon('search')}</div>
      <div class="bottom-tool" onclick="navigateTo('marketstats')" title="Marktstatistik">${refIcon('marketstats')}</div>
      <div class="bottom-tool" onclick="navigateTo('mailbox')" title="Postfach">${refIcon('mailbox')}</div>
      <div class="bottom-date">${new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})}<small>${new Date().toLocaleDateString('de-DE',{day:'2-digit',month:'short',year:'numeric'})}</small></div>
    </div>`;
}

/* ===== NAV CUSTOMIZE MODAL ===== */
let _navCustTarget = 'dock'; // 'dock' or 'bottom'
let _navDragId = null;

function openNavCustomize(target){
  _navCustTarget = target || 'dock';
  document.getElementById('navCustOverlay')?.remove();
  const overlay = document.createElement('div');
  overlay.className = 'navcust-overlay';
  overlay.id = 'navCustOverlay';
  overlay.onclick = (e)=>{ if(e.target===overlay) closeNavCustomize(); };
  overlay.innerHTML = `<div class="navcust-modal" onclick="event.stopPropagation()">
    <div class="navcust-head">
      <h3>🎛️ Navigation anpassen</h3>
      <button class="navcust-close" onclick="closeNavCustomize()">✕</button>
    </div>
    <div class="navcust-tabs">
      <div class="navcust-tab ${_navCustTarget==='dock'?'active':''}" onclick="switchNavCustTab('dock')">⬅ Seitenleiste (Links)</div>
      <div class="navcust-tab ${_navCustTarget==='bottom'?'active':''}" onclick="switchNavCustTab('bottom')">⬇ Statusleiste (Unten)</div>
    </div>
    <div class="navcust-body" id="navCustBody"></div>
  </div>`;
  document.getElementById('app').appendChild(overlay);
  renderNavCustBody();
}

function closeNavCustomize(){
  document.getElementById('navCustOverlay')?.remove();
}

function switchNavCustTab(t){
  _navCustTarget = t;
  const tabs = document.querySelectorAll('.navcust-tab');
  tabs.forEach((tab,i)=>tab.classList.toggle('active', (i===0&&t==='dock')||(i===1&&t==='bottom')));
  renderNavCustBody();
}

function getActiveNavItems(){
  return _navCustTarget==='dock' ? getDockItems() : getBottomItems();
}
function setActiveNavItems(arr){
  if(_navCustTarget==='dock') state.dockItems = arr;
  else state.bottomItems = arr;
  scheduleSave();
  renderSidebar();
}

function renderNavCustBody(){
  const body = document.getElementById('navCustBody');
  if(!body) return;
  const active = getActiveNavItems();
  const label = _navCustTarget==='dock' ? 'Seitenleiste' : 'Statusleiste';

  // Slots (active tabs, draggable)
  const slotsHtml = active.length ? active.map((id,idx)=>{
    const app = APPS.find(a=>a.id===id);
    const name = app?.name || id;
    return `<div class="navcust-slot" draggable="true"
        data-id="${id}" data-idx="${idx}"
        ondragstart="navDragStart(event,'${id}')"
        ondragover="navDragOver(event)"
        ondragleave="navDragLeave(event)"
        ondrop="navDrop(event,'${id}')">
      <div class="navcust-drag-handle"><span></span><span></span><span></span></div>
      <div class="navcust-slot-icon">${refIcon(id)}</div>
      <span class="navcust-slot-name">${escapeHtml(name)}</span>
      <button class="navcust-slot-remove" onclick="navRemoveItem('${id}')" title="Entfernen">✕</button>
    </div>`;
  }).join('') : `<div class="navcust-empty">Keine Einträge – füge Apps unten hinzu.</div>`;

  // Available apps (not yet in active list)
  const available = APPS.filter(a=>!active.includes(a.id));
  const availHtml = available.length ? available.map(a=>`<div class="navcust-app-card" onclick="navAddItem('${a.id}')">
    ${refIcon(a.id)}<span>${escapeHtml(a.name)}</span>
  </div>`).join('') : `<div class="navcust-empty">Alle Apps sind bereits in der ${label} vorhanden.</div>`;

  body.innerHTML = `
    <div>
      <div class="navcust-section-label">Aktive Einträge – ziehen zum Sortieren</div>
      <div class="navcust-slots" id="navSlots">${slotsHtml}</div>
    </div>
    <div>
      <div class="navcust-section-label">App hinzufügen</div>
      <div class="navcust-available-grid">${availHtml}</div>
    </div>`;
}

function navAddItem(id){
  const arr = getActiveNavItems();
  if(arr.includes(id)) return;
  arr.push(id);
  setActiveNavItems(arr);
  renderNavCustBody();
}

function navRemoveItem(id){
  const arr = getActiveNavItems().filter(x=>x!==id);
  setActiveNavItems(arr);
  renderNavCustBody();
}

function navDragStart(e, id){
  _navDragId = id;
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function navDragOver(e){
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function navDragLeave(e){
  e.currentTarget.classList.remove('drag-over');
}

function navDrop(e, targetId){
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if(!_navDragId || _navDragId===targetId) return;
  const arr = getActiveNavItems();
  const fromIdx = arr.indexOf(_navDragId);
  const toIdx = arr.indexOf(targetId);
  if(fromIdx<0||toIdx<0) return;
  arr.splice(fromIdx,1);
  arr.splice(toIdx,0,_navDragId);
  _navDragId = null;
  setActiveNavItems(arr);
  renderNavCustBody();
}

function renderTopbar(){

  const currentIndex = legacyIndex();
  const initials = (activeProfileName||'AE').split(/\s+/).map(p=>p[0]).join('').slice(0,2).toUpperCase();
  const successRate = Math.round(currentIndex.successRate||0);
  const legacyReady = isLegacySaleAvailable();
  const delta = todaysDelta();
  document.getElementById('topbar').innerHTML = `
    <div class="ref-brand">
      <span class="ref-brand-mark"><img src="assets/logos/app-logo.png" alt=""></span>
      <span class="ref-brand-copy"><b>Automotive Empire</b><small>&Uuml;bersicht deines Autohauses</small></span>
    </div>
    <div class="top-day">
      <b>Tag ${state.day}</b>
      <span class="day-clock-track"><span class="day-clock-fill" id="dayProgress"></span></span>
    </div>
    <div class="top-metrics">
      <div class="top-metric"><span class="mi">${refIcon('bank')}</span><span><b>${money(state.cash)}</b><small>Kontostand</small></span></div>
      <div class="top-metric"><span class="mi" style="color:var(--emerald)">${refIcon('finance')}</span><span><b class="${delta>=0?'pos':'neg'}">${fmtDelta(delta)}</b><small>Tagesgewinn</small></span></div>
      <div class="top-metric"><span class="mi" style="color:var(--blue)">${refIcon('marketstats')}</span><span><b>${successRate}%</b><small>Erfolgsquote</small></span></div>
      <div class="top-metric"><span class="mi" style="color:var(--violet)">${refIcon('legacy')}</span><span><b>${legacyReady?'Bereit':legacyLabel()}</b><small>Legacy</small></span></div>
    </div>
    <div class="top-actions">
      <button class="top-icon-btn ${state.unreadNotif>0?'has-unread':''}" onclick="toggleNotifPanel(event)" title="Benachrichtigungen">${refIcon('bell')}${state.unreadNotif>0?`<span class="bell-badge">${Math.min(99,state.unreadNotif)}</span>`:''}</button>
      <button class="top-profile" onclick="switchProfile()" title="Profil wechseln"><span class="avatar">${initials}</span><span><b>${escapeHtml(activeProfileName||'Autohaus')}</b><small>Gesch&auml;ftsf&uuml;hrer</small></span></button>
      <span class="window-controls"><span></span><span></span><span></span></span>
    </div>
  `;
}
function toggleNotifPanel(e){
  if(e) e.stopPropagation();
  const existing = document.getElementById('notifOverlay');
  if(existing){ existing.remove(); return; }
  state.unreadNotif = 0;
  renderTopbar();
  const overlay = document.createElement('div');
  overlay.className = 'notif-overlay';
  overlay.id = 'notifOverlay';
  overlay.onclick = (ev)=>{ if(ev.target===overlay) overlay.remove(); };
  const panel = document.createElement('div');
  panel.className = 'notif-panel';
  panel.id = 'notifpanel';
  panel.onclick = (ev)=>ev.stopPropagation();
  overlay.appendChild(panel);
  document.getElementById('app').appendChild(overlay);
  renderNotifPanel();
  scheduleSave();
}
function renderNotifPanel(){
  const p = document.getElementById('notifpanel');
  if(!p) return;
  const head = `<div class="notif-head"><span style="font-family:var(--font-d);font-weight:800;font-size:13px;">Benachrichtigungen</span><span class="x" onclick="document.getElementById('notifOverlay')?.remove();">✕</span></div>`;
  if(state.notifications.length===0){
    p.innerHTML = head + `<div class="empty-state" style="padding:20px;"><div class="ic">🔔</div>Keine Benachrichtigungen</div>`;
    return;
  }
  p.innerHTML = head +
    state.notifications.map(n=>`<div class="notif-item">${n.msg}<div class="t">Tag ${n.day}</div></div>`).join('');
}

function navEditIcon(){
  return `<svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
}

function renderSidebar(){
  const sidebar = document.getElementById('sidebar');
  if(sidebar) sidebar.className = 'ref-dock';
  const unreadMail = (state.offers||[]).filter(o=>o.unread).length;
  const actionableWishes = (state.searchOrders||[]).filter(o=>o.status==='open' && (state.inventory||[]).some(c=>matchesOrder(c,o))).length;
  const contractsAtRisk = activeClaimActionCount();
  const dockIds = getDockItems();
  const badgeFor = id=>{
    let n = 0;
    if(id==='mailbox') n = unreadMail;
    if(id==='inventory') n = actionableWishes;
    if(id==='contracts') n = contractsAtRisk;
    if(id==='workshop') n = (state.workshopJobs||[]).length;
    if(id==='ecu') n = appBadgeValue('ecu');
    return n ? `<span class="badge">${Math.min(99,n)}</span>` : '';
  };
  const dock = dockIds.map(id=>{
    const app = APPS.find(a=>a.id===id);
    const label = escapeHtml(app?.name||id);
    return `<div class="dock-item ${currentPage===id?'active':''}" onclick="navigateTo('${id}')" title="${label}">
    ${refIcon(id)}<span class="lbl">${label}</span>${badgeFor(id)}
  </div>`;
  }).join('');
  const rep = clamp(Math.round(legacyIndex().successRate||0),0,100);
  const editDockBtn = `<div class="dock-edit-btn" onclick="openNavCustomize('dock')" title="Navigation anpassen">${navEditIcon()}<span>Anpassen</span></div>`;
  document.getElementById('sidebar').innerHTML = `
    <div class="dock-logo" onclick="navigateTo('dashboard')"><img src="assets/logos/app-logo.png" alt=""></div>
    <div class="dock-list">${dock}<div class="dock-item ${document.getElementById('programOverlay')?'active':''}" onclick="openProgramsWindow()" title="Programme">${refIcon('apps')}<span class="lbl">Programme</span></div>${editDockBtn}</div>
    <div class="dock-spacer"></div>
    <div class="dock-ring" onclick="navigateTo('legacy')" title="Reputation &amp; Legacy"><span class="ring" style="--p:${rep}"><span>${rep}%</span></span><small>Reputation</small></div>
  `;
  renderBottomBar();
}

function renderApp(appId){
  if(appId !== currentPage) return;
  renderPageContent();
}
// true, solange die Spieluhr (Tageswechsel/Preis-Update) den Rerender auslöst.
// Dann werden Einblend-Animationen unterdrückt und die Scrollposition gehalten,
// damit sich der Tageswechsel nicht wie ein Neuladen der Seite anfühlt.
let quietClockRender = false;
function renderPageContent(){
  captureActiveDrafts();
  if(currentPage === 'branches') currentPage = 'dashboard';
  const fns = {
    dashboard: renderDashboard, market: renderMarket, acquisition: renderAcquisition, inventory: renderInventory,
    listings: renderListings, wishlist: renderWishlist, mailbox: renderMailbox, customers: renderCustomers, contracts: renderContracts, deliveries: renderDeliveries, workshop: renderWorkshop, ecu: renderEcuTuning, bank: renderBank,
    reviews: renderReviews, finance: renderFinance, marketstats: renderMarketStats, insights: renderBusinessInsights, calculator: renderCalculator, employees: renderEmployees, upgrades: renderUpgrades, legacy: renderLegacyHistory, design: renderDesign, updates: renderUpdates, settings: renderSettings,
  };
  const el = document.getElementById('pagecontent');
  if(el && fns[currentPage]){
    const samePage = el.dataset.renderedPage === currentPage;
    const prevScroll = samePage ? el.scrollTop : 0;
    el.classList.toggle('quiet-rerender', quietClockRender && samePage);
    const chatScroll = captureActiveChatScroll();
    el.innerHTML = fns[currentPage]();
    el.dataset.renderedPage = currentPage;
    el.scrollTop = prevScroll;
    restoreActiveChatScroll(chatScroll);
    if(!chatScroll) keepActiveChatAtBottom();
    scrollActiveMarketSearchMatch();
    enhancePremiumUi();
  }
}
function scrollActiveMarketSearchMatch(){
  if(currentPage!=='market' || !activeMarketSearchOrderId) return;
  requestAnimationFrame(()=>{
    const card = document.querySelector('.market-highlight');
    if(card) card.scrollIntoView({behavior:'smooth', block:'center'});
  });
}
function isChatNearBottom(chat){
  if(!chat) return true;
  return chat.scrollHeight - chat.scrollTop - chat.clientHeight <= 28;
}
function captureActiveChatScroll(){
  if(currentPage!=='mailbox' && currentPage!=='acquisition') return null;
  const chat = document.getElementById(currentPage==='acquisition' ? 'purchaseChatMessages' : 'chatMessages');
  if(!chat) return null;
  return {
    page: currentPage,
    offerId: chat.dataset ? chat.dataset.offerId : '',
    scrollTop: chat.scrollTop,
    scrollHeight: chat.scrollHeight,
    clientHeight: chat.clientHeight,
    atBottom: isChatNearBottom(chat)
  };
}
function restoreActiveChatScroll(snapshot){
  if(!snapshot) return;
  requestAnimationFrame(()=>{
    if(currentPage!==snapshot.page) return;
    const chat = document.getElementById(snapshot.page==='acquisition' ? 'purchaseChatMessages' : 'chatMessages');
    if(!chat) return;
    if(snapshot.offerId && chat.dataset && chat.dataset.offerId && chat.dataset.offerId!==snapshot.offerId) return;
    if(snapshot.atBottom){
      chat.scrollTop = chat.scrollHeight;
      return;
    }
    chat.scrollTop = Math.min(snapshot.scrollTop, Math.max(0, chat.scrollHeight - snapshot.clientHeight));
  });
}
function keepActiveChatAtBottom(){
  if(currentPage!=='mailbox' && currentPage!=='acquisition') return;
  requestAnimationFrame(()=>{
    const chat = document.getElementById(currentPage==='acquisition' ? 'purchaseChatMessages' : 'chatMessages');
    if(chat){
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(chat.scrollTo) chat.scrollTo({top:chat.scrollHeight, behavior:reduce?'auto':'smooth'});
      else chat.scrollTop = chat.scrollHeight;
    }
  });
}
function scrollPurchaseChatToBottom(){
  requestAnimationFrame(()=>{
    const chat = document.getElementById('purchaseChatMessages');
    if(chat){
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(chat.scrollTo) chat.scrollTo({top:chat.scrollHeight, behavior:reduce?'auto':'smooth'});
      else chat.scrollTop = chat.scrollHeight;
    }
  });
}
function isEditingElement(el){
  if(!el) return false;
  const tag = (el.tagName||'').toLowerCase();
  if(tag==='textarea' || tag==='select') return true;
  if(tag==='input'){
    const type = (el.type||'text').toLowerCase();
    return ['text','number','password','search','email','tel','url','range'].includes(type);
  }
  return !!el.isContentEditable;
}
function renderAllOpen(){
  applyTheme();
  applyAppBackground(state?.backgroundId || 'standard', true);
  renderTopbar();
  renderSidebar();
  if(!isEditingElement(document.activeElement)){
    if(!(currentPage==='mailbox' && syncActiveMailboxView())){
      renderPageContent();
    }
  }
  if(document.getElementById('notifOverlay')) renderNotifPanel();
  enhancePremiumUi();
}
function refreshProgressChrome(){
  if(!state || !document.getElementById('topbar') || !document.getElementById('sidebar')) return;
  renderTopbar();
  renderSidebar();
  if(['dashboard','legacy','insights'].includes(currentPage) && !isEditingElement(document.activeElement)){
    renderPageContent();
  }
  if(document.getElementById('notifOverlay')) renderNotifPanel();
  enhancePremiumUi();
}
function refreshClockChrome(){
  if(!state || !document.getElementById('topbar') || !document.getElementById('sidebar')) return;
  renderTopbar();
  renderSidebar();
  const bar = document.getElementById('dayProgress');
  if(bar){
    const dayDuration = state.dayDurationMs || DEFAULT_DAY_DURATION_MS;
    bar.style.width = Math.round((dayElapsedMs/dayDuration)*100)+'%';
  }
  if(document.getElementById('notifOverlay')) renderNotifPanel();
  enhancePremiumUi();
}

function enhancePremiumUi(){
  requestAnimationFrame(()=>{
    if(!document.body.dataset.premiumPolishBound){
      document.body.dataset.premiumPolishBound = '1';
      document.addEventListener('click', ev=>{
        const btn = ev.target.closest('.btn,.top-icon-btn,.bottom-tool,.dock-item,.bottom-tab,.program-card');
        if(!btn || btn.matches(':disabled')) return;
        btn.classList.remove('premium-confirm');
        void btn.offsetWidth;
        btn.classList.add('premium-confirm');
        setTimeout(()=>btn.classList.remove('premium-confirm'), 560);
      }, true);
    }
    document.querySelectorAll('[title]').forEach(el=>{
      if(el.matches('input,textarea,select,option')) return;
      const t = (el.getAttribute('title')||'').trim();
      if(!t) return;
      el.dataset.tip = t;
      el.setAttribute('aria-label', el.getAttribute('aria-label') || t);
      el.removeAttribute('title');
    });
    document.querySelectorAll('.dash-kpi-value,.stat-card .num,.stock-count,.claims-total,.review-score strong,.top-metric b,.bottom-status strong,.legacy-metric .val').forEach((el,idx)=>{
      if(el.dataset.polished) return;
      el.dataset.polished = '1';
      el.classList.add('premium-number');
      if(!el.dataset.tip && el.textContent.trim()) el.dataset.tip = el.textContent.trim();
    });
  });
}

/* =============================== DASHBOARD =============================== */
function sparkline(points, w, h, color){
  if(points.length<2) return `<svg width="${w}" height="${h}"></svg>`;
  const max = Math.max(...points, 1), min = Math.min(...points, 0);
  const range = (max-min)||1;
  const step = w/(points.length-1);
  const pts = points.map((p,i)=>`${(i*step).toFixed(1)},${(h-((p-min)/range)*h).toFixed(1)}`).join(' ');
  const areaPts = `0,${h} ${pts} ${w},${h}`;
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <polygon points="${areaPts}" fill="${color}" opacity="0.12"></polygon>
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"></polyline>
  </svg>`;
}
function renderAchievementStrip(){
  const unlocked = state.achievements||[];
  const pct = Math.round((unlocked.length/Math.max(1, ACHIEVEMENTS.length))*100);
  const recent = ACHIEVEMENTS.filter(a=>unlocked.includes(a.id)).slice(-5).reverse();
  return `
    <div style="min-width:220px;max-width:320px;flex:0 1 320px;">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--ink-1);margin-bottom:6px;">
        <span>Erfolge</span><span>${unlocked.length} / ${ACHIEVEMENTS.length}</span>
      </div>
      <div class="progress"><div style="width:${pct}%;background:linear-gradient(90deg,#2fb87c,#d4af6a,#ef5da8);"></div></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:9px;">
        ${(recent.length?recent:ACHIEVEMENTS.slice(0,5)).map(a=>`<span title="${a.label}: ${a.desc}" style="width:26px;height:26px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:${unlocked.includes(a.id)?'color-mix(in srgb,'+achievementColor(a.rarity)+' 18%, transparent)':'rgba(255,255,255,.04)'};border:1px solid ${unlocked.includes(a.id)?achievementColor(a.rarity):'var(--line)'};font-size:15px;opacity:${unlocked.includes(a.id)?'1':'.35'};filter:${unlocked.includes(a.id)?'none':'grayscale(1)'};">${a.icon}</span>`).join('')}
      </div>
    </div>`;
}
function renderAchievementsPanel(){
  const unlocked = state.achievements||[];
  return `
    <h2 class="section-title" style="font-size:14px;margin-bottom:10px;">Erfolge</h2>
    <div class="ach-grid">
      ${ACHIEVEMENTS.map(a=>{
        const done = unlocked.includes(a.id);
        return `<div class="ach-card ${done?'':'locked'}" style="--ach:${achievementColor(a.rarity)};">
          <div class="ach-ico">${a.icon}</div>
          <div>
            <div class="ach-name">${a.label}</div>
            <div class="ach-desc">${done ? a.desc : 'Noch gesperrt - '+a.desc}</div>
            <div class="ach-rarity">${achievementRarityLabel(a.rarity)}${a.xp?` · ${a.xp} XP`:''}</div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
}
function dashDelta(current, previous){
  if(!previous) return current ? '+100,0%' : '+0,0%';
  const pct = ((current-previous)/Math.abs(previous))*100;
  return `${pct>=0?'+':''}${pct.toFixed(1).replace('.',',')}%`;
}
function dashSpark(points, color){
  const vals = points && points.length ? points : [0,1,0,1,2,1,3];
  return sparkline(vals.slice(-18), 210, 42, color);
}
function dashIcon(label){
  return `<span class="dash-icon">${label}</span>`;
}
function dashKpi(label, value, delta, tone, icon, points){
  const negative = String(delta).trim().startsWith('-');
  return `<div class="dash-kpi ${tone}">
    <div class="dash-kpi-head"><span>${label}</span>${dashIcon(icon)}</div>
    <div class="dash-kpi-value">${value}</div>
    <div class="dash-kpi-meta"><span class="${negative?'neg':'pos'}">${delta}</span></div>
    <div class="dash-kpi-chart">${dashSpark(points, tone==='gold'?'#ffc342':tone==='green'?'#4ade80':tone==='purple'?'#9b6cff':'#3f73ff')}</div>
  </div>`;
}
function dashKpiRing(label, pct){
  pct = clamp(Math.round(pct||0),0,100);
  const word = pct>=85?'Sehr gut':pct>=70?'Gut':pct>=50?'Solide':'Ausbauf&auml;hig';
  return `<div class="dash-kpi green">
    <div class="dash-kpi-head"><span>${label}</span></div>
    <div class="kpi-split">
      <div><div class="dash-kpi-value">${pct}%</div><div class="dash-kpi-meta"><span class="pos">${word}</span></div></div>
      <span class="kpi-ring" style="--p:${pct}"><span></span></span>
    </div>
  </div>`;
}
function dashKpiLegacy(label, points){
  return `<div class="dash-kpi purple">
    <div class="dash-kpi-head"><span>${label}</span></div>
    <div class="kpi-split">
      <div><div class="dash-kpi-value">${points}</div><div class="dash-kpi-meta"><span style="color:var(--violet);">${legacyLabel()}</span></div></div>
      <span class="kpi-star"><svg viewBox="0 0 24 24">${REF_ICON_PATHS.reviews}</svg></span>
    </div>
  </div>`;
}
function dashVehicleCard(c){
  const listing = state.listings && state.listings[c.id] ? state.listings[c.id] : null;
  const listPrice = listing ? listing.price : (c.effectivePrice||c.marketValue||c.price||0);
  const profit = Math.max(0, Math.round((listPrice||0) - (c.effectivePrice||c.purchasePrice||c.price||0)));
  const interested = (state.offers||[]).filter(o=>o.carId===c.id).length;
  const inWorkshop = (state.workshopJobs||[]).find(j=>j.carId===c.id);
  const reserved = c.reservedFor && c.reservedFor.expiresDay>state.day;
  const sold = c.location==='sold' || c.sold || c.soldDay;
  let status = {label:'Nicht inseriert', cls:'unlisted', meta:'Noch kein aktives Inserat'};
  if(sold) status = {label:'Verkauft', cls:'sold', meta:c.soldDay?`Verkauft an Tag ${c.soldDay}`:'Nicht mehr im aktiven Bestand'};
  else if(reserved) status = {label:'Reserviert', cls:'reserved', meta:`Bis Tag ${c.reservedFor.expiresDay}${c.reservedFor.customerName?' · '+c.reservedFor.customerName:''}`};
  else if(inWorkshop || c.repairStatus) status = {label:'In Vorbereitung', cls:'prep', meta:inWorkshop?`${inWorkshop.label||'Werkstatt'} · ${inWorkshop.daysLeft} Tag(e)`:'Noch nicht verkaufsbereit'};
  else if(listing) status = {label:'Inseriert', cls:'listed', meta:`${money(listing.price)} · ${listingAllowedPaymentMethods(listing).map(m=>paymentMethodMeta(m).label).join(', ')} · ${interested} Anfrage${interested===1?'':'n'} · seit ${Math.max(0,state.day-(listing.createdDay||state.day))} Tag(en)`};
  return `<div class="dash-car-card" onclick="navigateTo('inventory')">
    <span class="dash-listing-badge ${status.cls}">${status.label}</span>
    ${renderCarPhoto(c)}
    <div class="dash-car-name">${c.brand} ${c.model}</div>
    <div class="dash-car-sub">${c.year} · ${(c.mileage||0).toLocaleString('de-DE')} km</div>
    <div class="dash-car-price">${money(listPrice||0)}</div>
    <div class="dash-listing-meta">${escapeHtml(status.meta)}</div>
    <div class="dash-car-foot"><span>Gewinn<br><b class="pos">+${money(profit)}</b></span><span>Interessenten<br><b>${interested}</b></span></div>
    ${!listing && !reserved && !inWorkshop && !sold ? `<button class="btn btn-ghost btn-sm dash-listing-action" onclick="event.stopPropagation();openListModal('${c.id}')">Jetzt inserieren</button>`:''}
  </div>`;
}
function dashMessagesPanel(){
  const sorted = [...(state.offers||[])].sort((a,b)=>{
    const am = a.messages && a.messages.length ? a.messages[a.messages.length-1].day : 0;
    const bm = b.messages && b.messages.length ? b.messages[b.messages.length-1].day : 0;
    return bm-am;
  }).slice(0,5);
  return `<div class="dash-panel dash-side-panel">
    <div class="dash-panel-head"><b>Neue Nachrichten</b><button onclick="navigateTo('mailbox')">Alle anzeigen</button></div>
    <div class="dash-message-list">
      ${sorted.length ? sorted.map((o,i)=>{
        const last = o.messages && o.messages.length ? o.messages[o.messages.length-1] : null;
        const initials = (o.name||'K').split(/\s+/).map(p=>p[0]).join('').slice(0,2).toUpperCase();
        return `<div class="dash-message" onclick="navigateTo('mailbox');openConversation('${o.id}')">
          <span class="avatar">${initials}</span><span><b>${escapeHtml(o.name||'Kunde')}</b><small>${escapeHtml(last?last.text:'Neue Anfrage')}</small></span><em>Tag ${last?last.day:state.day}</em>
        </div>`;
      }).join('') : '<p class="subtle">Keine offenen Nachrichten.</p>'}
    </div>
  </div>`;
}
function dashReviewsPanel(){
  const reviews = state.reviews||[];
  const avgStars = avgReviewStars();
  const total = reviews.length || 0;
  const latest = reviews[0];
  const rows = [5,4,3,2,1].map(stars=>{
    const count = reviews.filter(r=>(r.stars||0)===stars).length;
    const pct = total ? Math.round(count/total*100) : 0;
    return `<div class="rating-row"><span>${stars} Sterne</span><div><i style="width:${pct}%"></i></div><b>${pct}%</b></div>`;
  }).join('');
  const unanswered = reviews.filter(r=>!r.reply).length;
  return `<div class="dash-panel dash-side-panel">
    <div class="dash-panel-head"><b>Kundenbewertungen${unanswered?` <strong>${unanswered} offen</strong>`:''}</b><button onclick="navigateTo('reviews')">Alle anzeigen</button></div>
    <div class="review-score"><strong>${avgStars?avgStars.toFixed(1).replace('.',','):'0,0'}</strong><span class="stars">${starsText(Math.round(avgStars||0))}</span><small>(${total} Bewertungen)</small></div>
    <div class="rating-bars">${rows}</div>
    ${latest?`<div class="latest-review"><span class="avatar">${(latest.customerName||'K').slice(0,2).toUpperCase()}</span><span><b>${escapeHtml(latest.customerName)}</b><small>${starsText(latest.stars||0)} · ${escapeHtml((latest.text||'').slice(0,90))}</small></span></div>`:''}
  </div>`;
}
let dashRevenueRange = 'year';
function cycleDashRevenueRange(){
  dashRevenueRange = dashRevenueRange==='year' ? '30d' : (dashRevenueRange==='30d' ? 'all' : 'year');
  renderPageContent();
}
function dashRevenueRangeLabel(){
  return dashRevenueRange==='30d' ? 'Letzte 30 Tage' : (dashRevenueRange==='all' ? 'Gesamt' : 'Dieses Jahr');
}
function dashRevenueSales(){
  const sales = state.salesHistory || [];
  if(dashRevenueRange==='30d') return sales.filter(s=>(s.day||0)>=state.day-30);
  if(dashRevenueRange==='all') return sales;
  const maxDay = Math.max(1,state.day||1);
  return sales.filter(s=>(s.day||1)>Math.max(0,maxDay-365));
}
function dashRevenueChart(){
  const chartSales = dashRevenueSales();
  const maxDay = Math.max(1,state.day||1);
  const bucketCount = dashRevenueRange==='30d' ? 10 : 12;
  const labels = dashRevenueRange==='30d'
    ? Array.from({length:bucketCount},(_,i)=>`T-${(bucketCount-1-i)*3}`)
    : ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
  const minDay = dashRevenueRange==='30d' ? Math.max(1,state.day-29) : (dashRevenueRange==='all' ? Math.max(1, Math.min(...chartSales.map(s=>s.day||1), 1)) : Math.max(1,maxDay-364));
  const spanDays = Math.max(1, maxDay-minDay+1);
  const bucketSize = Math.max(1, Math.ceil(spanDays/bucketCount));
  const buckets = Array.from({length:bucketCount},(_,i)=>({label:labels[i],value:0,profit:0,count:0,from:minDay+i*bucketSize,to:Math.min(maxDay,minDay+(i+1)*bucketSize-1)}));
  chartSales.forEach(s=>{
    const idx = clamp(Math.floor(((s.day||1)-minDay)/bucketSize),0,bucketCount-1);
    buckets[idx].value += s.salePrice||0;
    buckets[idx].profit += s.profit||0;
    buckets[idx].count += 1;
  });
  const totalRevenue = sumBy(chartSales,s=>s.salePrice||0);
  // Liniendiagramm: Umsatz (violett, mit Fläche) und Gewinn (grün) je Zeit-Bucket
  const W = 600, H = 150, PAD = 6;
  const maxVal = Math.max(...buckets.map(b=>Math.max(b.value, b.profit)), 1);
  const minVal = Math.min(...buckets.map(b=>Math.min(0, b.profit)), 0);
  const span = Math.max(1, maxVal - minVal);
  const px = i => buckets.length>1 ? PAD + i*((W-2*PAD)/(buckets.length-1)) : W/2;
  const py = v => PAD + (H-2*PAD) * (1 - (v-minVal)/span);
  const revPts = buckets.map((b,i)=>`${px(i).toFixed(1)},${py(b.value).toFixed(1)}`).join(' ');
  const profitPts = buckets.map((b,i)=>`${px(i).toFixed(1)},${py(b.profit).toFixed(1)}`).join(' ');
  const areaPts = `${PAD},${py(0).toFixed(1)} ${revPts} ${(W-PAD)},${py(0).toFixed(1)}`;
  return `<div class="dash-panel revenue-panel">
    <div class="dash-panel-head"><b>Business Insights</b><button class="dash-range-btn" onclick="cycleDashRevenueRange()" title="Zeitraum wechseln">${dashRevenueRangeLabel()}</button></div>
    <div class="chart-legend"><span><i style="background:var(--emerald)"></i>Gewinn</span><span><i style="background:var(--violet)"></i>Umsatz</span><span class="revenue-sum">${money(totalRevenue)} Umsatz gesamt</span></div>
    <div class="line-chart">
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
        <line x1="${PAD}" y1="${py(0).toFixed(1)}" x2="${W-PAD}" y2="${py(0).toFixed(1)}" stroke="rgba(148,163,184,.2)" stroke-width="1" stroke-dasharray="4 4"></line>
        <polygon points="${areaPts}" fill="var(--violet)" opacity="0.10"></polygon>
        <polyline points="${revPts}" fill="none" stroke="var(--violet)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"></polyline>
        <polyline points="${profitPts}" fill="none" stroke="var(--emerald)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"></polyline>
      </svg>
      <div class="line-cols">${buckets.map(b=>{
        const pct = totalRevenue ? Math.round((b.value/totalRevenue)*100) : 0;
        const avgSale = b.count ? Math.round(b.value/b.count) : 0;
        return `<div class="line-col" tabindex="0">
          <small>${b.label}</small>
          <em class="bar-tooltip"><b>${b.label}</b><br>Zeitraum: Tag ${b.from}-${b.to}<br>Umsatz: ${money(b.value)}<br>Gewinn: ${money(b.profit)}<br>Verkäufe: ${b.count}<br>Ø Verkauf: ${money(avgSale)}<br>Anteil: ${pct}%</em>
        </div>`;
      }).join('')}</div>
    </div>
  </div>`;
}
function dashOrdersPanel(){
  const offers = [...activeOffers()].sort((a,b)=>{
    const am = a.messages && a.messages.length ? a.messages[a.messages.length-1].day : 0;
    const bm = b.messages && b.messages.length ? b.messages[b.messages.length-1].day : 0;
    return bm-am;
  }).slice(0,4);
  const rows = offers.map(o=>{
    const c = findCar(o.carId);
    const initials = (o.name||'K').split(/\s+/).map(p=>p[0]).join('').slice(0,2).toUpperCase();
    let badge = `<span class="order-badge">${Math.max(0,Math.round(o.patience))} Tage Geduld</span>`;
    if(o.applicationPending) badge = `<span class="order-badge bank">Bank pr&uuml;ft</span>`;
    else if((o.patience||0)<=1) badge = `<span class="order-badge hot">Springt bald ab</span>`;
    return `<div class="order-row" onclick="navigateTo('mailbox');openConversation('${o.id}')">
      <span class="avatar">${initials}</span>
      <span><b>${escapeHtml(o.name||'Kunde')}</b><small>${c?escapeHtml(c.brand+' '+c.model):'Fahrzeug'} · ${escapeHtml(o.persona||'')}</small></span>
      <span class="order-side"><span class="order-price">${money(o.amount)}</span>${badge}</span>
    </div>`;
  }).join('');
  return `<div class="dash-panel">
    <div class="dash-panel-head"><b>Aktuelle Auftr&auml;ge <strong>${activeOffers().length}</strong></b><button onclick="navigateTo('listings')">Inserate</button></div>
    <div class="order-list">${rows || '<p class="subtle" style="margin:0;">Keine offenen Kundenanfragen. Inserierte Fahrzeuge erzeugen neue Auftr&auml;ge.</p>'}</div>
    <div class="panel-link" onclick="navigateTo('mailbox')">Alle Auftr&auml;ge anzeigen &rarr;</div>
  </div>`;
}
function dashStockPanel(){
  const inv = activeInventory();
  const listed = activeListingIds().length;
  const inWorkshop = new Set((state.workshopJobs||[]).map(j=>j.carId)).size;
  const reserved = inv.filter(c=>c.reservedFor && c.reservedFor.expiresDay>state.day).length;
  const delivering = activeDeliveries().filter(d=>!['completed','pickup_completed'].includes(d.status)).length;
  const carCards = inv.slice(0,2).map(dashVehicleCard).join('');
  return `<div class="dash-panel inventory-panel">
    <div class="dash-panel-head"><b>Fahrzeugbestand</b><button onclick="navigateTo('inventory')">Zum Fahrzeugbestand</button></div>
    <div class="stock-hero">
      <div class="stock-count">${inv.length}<small>Fahrzeuge</small></div>
    </div>
    <div class="stock-breakdown">
      <div class="stock-line green"><span>Im Verkauf</span><b>${listed}</b></div>
      <div class="stock-line gold"><span>In Werkstatt</span><b>${inWorkshop}</b></div>
      <div class="stock-line purple"><span>Reserviert</span><b>${reserved}</b></div>
      <div class="stock-line blue"><span>In Lieferung</span><b>${delivering}</b></div>
    </div>
    <div class="dash-car-row">${carCards}</div>
  </div>`;
}
function dashClaimsPanel(){
  const claims = activeClaims();
  const total = sumBy(claims, x=>claimTotal(x.claim));
  const rows = claims.slice(0,4).map(x=>{
    const due = claimNeedsAction(x.claim);
    const label = due ? claimStatusLabel(x.claim) : `Tag ${x.claim.nextActionDay}`;
    const fees = claimFeesByBucket(x.claim);
    return `<div class="claim-row" onclick="navigateTo('contracts')">
      <span>${escapeHtml(x.contract.customerName||'Kunde')}</span>
      <b>${money(claimTotal(x.claim))}</b>
      <span class="claim-badge ${due?'':'scheduled'}">${escapeHtml(label)}</span>
      <small>Rate ${money(x.claim.baseAmount||0)} · Mahngebühren ${money(fees.dunning)} · Inkasso ${money(fees.collection)} · Gericht ${money(fees.court)}</small>
    </div>`;
  }).join('');
  return `<div class="dash-panel">
    <div class="dash-panel-head"><b>Offene Forderungen</b><button onclick="navigateTo('contracts')">Vertr&auml;ge</button></div>
    ${claims.length ? `<div class="claims-total">${money(total)}<small>Gesamtbetrag aus ${claims.length} Vertrag/Vertr&auml;gen</small></div>${rows}` : '<div class="notice good" style="margin:0;">Keine offenen Forderungen – alle Raten gehen p&uuml;nktlich ein.</div>'}
    ${claims.length ? `<div class="panel-link" onclick="navigateTo('contracts')">Zur Forderungsverwaltung &rarr;</div>` : ''}
  </div>`;
}
function dashActivityPanel(){
  const items = (state.notifications||[]).slice(0,5);
  const icoFor = kind => kind==='good' ? ['good','&check;'] : kind==='warn' ? ['warn','!'] : ['','i'];
  const rows = items.map(n=>{
    const [cls, glyph] = icoFor(n.kind);
    return `<div class="activity-row">
      <span class="activity-ico ${cls}">${glyph}</span>
      <small>${n.msg}</small>
      <em>Tag ${n.day}</em>
    </div>`;
  }).join('');
  return `<div class="dash-panel dash-side-panel">
    <div class="dash-panel-head"><b>Aktivit&auml;ten</b><button onclick="toggleNotifPanel(event)">Alle anzeigen</button></div>
    ${rows || '<p class="subtle" style="margin:0;">Noch keine Ereignisse.</p>'}
  </div>`;
}
function dashTasksPanel(){
  const activeDeliveryCount = activeDeliveries().filter(d=>!['completed','pickup_completed'].includes(d.status)).length;
  const dueClaims = activeClaimActionCount();
  const unansweredReviews = activeReviews().filter(r=>!r.reply).length;
  const openCustomerConditions = (state.offers||[]).reduce((sum,o)=>{
    const c = findCar(o.carId);
    return sum + (c ? openSaleConditions(o,c).length : 0);
  },0);
  return `<div class="dash-panel tasks-panel">
    <div class="dash-panel-head"><b>Heute anstehend</b></div>
    <div class="task-row blue"><span>PF</span><b>${activeOffers().length} offene Anfragen</b><small>Kundenkontakte prüfen</small></div>
    <div class="task-row green"><span>LF</span><b>${activeDeliveryCount} Fahrzeuglieferungen</b><small>Planung und Übergabe</small></div>
    <div class="task-row gold"><span>BW</span><b>${unansweredReviews} Bewertungen ausstehend</b><small>Antworten verbessern Ruf</small></div>
    <div class="task-row red"><span>MA</span><b>${dueClaims} Mahnungen</b><small>Überfällige Verträge</small></div>
    <div class="task-row red"><span>KW</span><b>${openCustomerConditions} Kundenwünsche</b><small>Mängelwünsche vor Abschluss klären</small></div>
  </div>`;
}
function dashBottomStatus(){
  const fin = (state.receivables||[]).filter(r=>!r.closed && inActiveBranch(r));
  const claims = activeClaims();
  const claimActions = activeClaimActionCount();
  const wishes = activeSearchOrders().filter(o=>o.status==='open');
  const wsJobs = activeWorkshopJobs();
  const listingCount = activeListingIds().length;
  return `<div class="bottom-status">
    <div><span class="status-ico green">FI</span><b>Offene Finanzierungen</b><strong>${fin.length}</strong><small>Gesamt: ${money(sumBy(fin,r=>r.remainingPrincipal||0))}</small></div>
    <div><span class="status-ico orange">MA</span><b>Mahnungen</b><strong>${claimActions}</strong><small>Offen: ${money(sumBy(claims,x=>claimTotal(x.claim)))}</small></div>
    <div><span class="status-ico purple">WS</span><b>Werkstatt Auslastung</b><strong>${wsJobs.length}</strong><small>${wsJobs.length>2?'Sehr hoch':'Normal'}</small></div>
    <div><span class="status-ico blue">WF</span><b>Wunschfahrzeuge</b><strong>${wishes.length}</strong><small>Aktive Anfragen</small></div>
    <div><span class="status-ico green">MK</span><b>Marketing</b><strong>${listingCount?'Aktiv':'Inaktiv'}</strong><small>${listingCount} Inserate laufen</small></div>
  </div>`;
}
function renderPremiumDashboard(){
  const valuation = companyValuation();
  const idx = valuation.index || legacyIndex();
  const legacyKpiLabel = hasLegacyRun() ? 'Legacy-Score' : 'Gr&uuml;ndungsindex';
  const legacyKpiIcon = hasLegacyRun() ? 'LG' : 'GI';
  const recentSales = (state.salesHistory||[]).filter(s=>inActiveBranch(s) && s.day>=state.day-30);
  const prevSales = (state.salesHistory||[]).filter(s=>inActiveBranch(s) && s.day<state.day-30 && s.day>=state.day-60);
  const monthProfit = sumBy(recentSales,s=>s.profit||0) + recurringMonthlyValue();
  const prevProfit = sumBy(prevSales,s=>s.profit||0) + recurringMonthlyValue();
  const hist = state.cashHistory.slice(-18);
  const cashPts = hist.map(h=>h.cash||h.net||0);
  const netPts = hist.map(h=>h.net||0);
  const cashDeltaAbs = todaysDelta();
  return `
    <div class="dashboard-premium">
      <div class="ref-section-title">Übersicht</div>
      <div class="dash-kpi-grid">
        ${dashKpi('Kontostand', money(state.cash), `${fmtDelta(cashDeltaAbs)} (${dashDelta(state.cash, Math.max(1,state.cash-cashDeltaAbs))})`, 'green', 'KO', cashPts)}
        ${dashKpi('Monatsgewinn', money(monthProfit), `${fmtDelta(monthProfit-prevProfit)} (${dashDelta(monthProfit, prevProfit)})`, 'gold', 'MG', netPts)}
        ${dashKpi('Unternehmenswert', money(valuation.value), dashDelta(valuation.value, Math.max(1,valuation.value-(state.totalProfit||0))), 'blue', 'UW', cashPts)}
        ${dashKpiRing('Erfolgsquote', idx.successRate||0)}
        ${dashKpiLegacy(legacyKpiLabel, Math.round(idx.total||0))}
      </div>
      <div class="dash-main-grid">
        <div class="dash-left">
          ${dashOrdersPanel()}
          ${dashRevenueChart()}
        </div>
        <div class="dash-left">
          ${dashStockPanel()}
          ${dashClaimsPanel()}
        </div>
        <div class="dash-right">${dashReviewsPanel()}${dashActivityPanel()}</div>
      </div>
      <div class="dash-lower-grid">${dashBottomStatus()}</div>
    </div>
  `;
}

function renderDashboard(){
  return renderPremiumDashboard();

  const openOffers = state.offers.length;
  const listedCount = Object.keys(state.listings).length;
  const avgDays = state.inventory.length? Math.round(state.inventory.reduce((s,c)=>s+c.standDays,0)/state.inventory.length):0;
  const lowCash = state.cash < 1500;
  const claims = activeClaims();
  const dueClaims = claims.filter(x=>claimNeedsAction(x.claim));
  const claimSum = claims.reduce((s,x)=>s+claimTotal(x.claim),0);
  const level = state.level||1;
  const xpNeed = xpForLevel(level);
  const xpPct = clamp(((state.xp||0)/xpNeed)*100,0,100);
  const valuation = companyValuation();
  const legacyReady = level >= 30 && !legacyState().masterUnlocked;
  const passiveDailyXp = passiveXpForDay();
  return `
    <div class="card" style="margin-bottom:18px;padding:18px 20px;display:flex;align-items:center;gap:18px;flex-wrap:wrap;">
      <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#ecd19d,var(--brass));display:flex;align-items:center;justify-content:center;font-family:var(--font-d);font-weight:800;font-size:18px;color:var(--brass-ink);flex:0 0 auto;">${level}</div>
      <div style="flex:1;min-width:180px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--txt-1);margin-bottom:6px;">
          <span>Level ${level} Händler · passiv +${passiveDailyXp} XP/Tag</span><span>${state.xp||0} / ${xpNeed} XP</span>
        </div>
        <div class="progress"><div style="width:${xpPct}%;background:linear-gradient(90deg,var(--brass),#ecd19d);"></div></div>
      </div>
      ${renderAchievementStrip()}
    </div>
    <div class="card" style="margin-bottom:18px;padding:18px 20px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;border-color:${legacyReady?'rgba(212,175,106,.48)':'var(--line)'};">
      <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,rgba(47,184,124,.26),rgba(212,175,106,.3));display:flex;align-items:center;justify-content:center;font-family:var(--font-d);font-weight:900;font-size:20px;color:var(--brass);">L</div>
      <div style="flex:1;min-width:220px;">
        <div style="font-family:var(--font-d);font-weight:800;">${legacyLabel()} · Unternehmensindex ${valuation.index.successRate}%</div>
        <div class="subtle" style="margin-top:4px;">Aktuelle Unternehmensbewertung: <b>${money(valuation.value)}</b> · mögliches Startkapital der nächsten Gründung: <b>${money(valuation.nextCapital)}</b></div>
        ${valuation.dunningFeeAdjustment>0?`<div class="subtle" style="margin-top:4px;">Bereinigt um nicht bewertete Zusatzeinnahmen aus erhöhten Mahngebühren: <b>${negativeMoney(valuation.dunningFeeAdjustment)}</b></div>`:''}
      </div>
      ${legacyReady?`<button class="btn btn-primary" onclick="openLegacyReview()">Legacy starten</button>`:`<button class="btn btn-ghost" onclick="navigateTo('legacy')">Historie öffnen</button>`}
    </div>
    <h2 class="section-title">Übersicht</h2>
    <p class="subtle">Tag ${state.day} · Willkommen zurück, Geschäftsführer/in.</p>
    ${lowCash?`<div class="notice warn">⚠️ Ihre Liquidität ist knapp (${money(state.cash)}). Verkaufen Sie Fahrzeuge oder nehmen Sie einen Kredit auf, um zahlungsfähig zu bleiben.</div>`:''}
    ${claims.length?`<div class="notice warn" style="border-color:rgba(224,85,92,.38);background:rgba(224,85,92,.12);">⚠ Offene Forderungen: <b>${claims.length}</b> Vertrag(e), Gesamtforderung <b>${money(claimSum)}</b>. ${dueClaims.length?`Bei <b>${dueClaims.length}</b> Vertrag(en) ist jetzt eine Mahnung fällig.`:'Nächste Mahnschritte sind terminiert.'} <span style="margin-left:10px;color:var(--brass);cursor:pointer;font-weight:700;" onclick="navigateTo('contracts')">Verträge prüfen →</span></div>`:''}
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">💰 Kontostand</div><div class="num">${money(state.cash)}</div></div>
      <div class="stat-card"><div class="lbl">🚗 Fahrzeugbestand</div><div class="num">${state.inventory.length}</div></div>
      <div class="stat-card"><div class="lbl">📄 Aktive Inserate</div><div class="num">${listedCount}</div></div>
      <div class="stat-card"><div class="lbl">💬 Offene Angebote</div><div class="num">${openOffers}</div></div>
      <div class="stat-card"><div class="lbl">🔧 In Werkstatt</div><div class="num">${openRepairs}</div></div>
      <div class="stat-card"><div class="lbl">💳 Wiederkehrend/Monat</div><div class="num" style="color:var(--brass);">${money((state.receivables||[]).filter(r=>!r.closed).reduce((s,r)=>s+r.monthlyPayment,0) + (state.leaseContracts||[]).filter(l=>l.status==='active').reduce((s,l)=>s+l.monthlyPayment,0))}</div></div>
      <div class="stat-card"><div class="lbl">⚠ Offene Forderungen</div><div class="num" style="color:${claims.length?'var(--crimson)':'var(--emerald)'};">${claims.length?money(claimSum):'0 €'}</div></div>
      <div class="stat-card"><div class="lbl">📆 Ø Standtage</div><div class="num">${avgDays}</div></div>
    </div>
    <h2 class="section-title" style="font-size:14px;margin-bottom:10px;">Cashflow – letzte 14 Tage</h2>
    <div class="card" style="margin-bottom:20px;">
      ${sparkline(netPts.length?netPts:[0,0], 640, 90, netPts.length && netPts[netPts.length-1]>=0? '#2fb87c':'#e0555c')}
    </div>
    ${renderAchievementsPanel()}
    <h2 class="section-title" style="font-size:14px;margin-bottom:10px;">Neuigkeiten</h2>
    ${state.notifications.slice(0,6).map(n=>`<div class="notice">📰 ${n.msg} <span style="color:var(--txt-2);margin-left:auto;white-space:nowrap;">Tag ${n.day}</span></div>`).join('') || '<p class="subtle">Noch keine Ereignisse.</p>'}
  `;
}

/* =============================== MARKET =============================== */
let marketFilter = 'Alle';
let marketPage = 1;
let marketSearch = '';
let marketSort = 'priceAsc';
let marketYearMin = '';
let marketYearMax = '';
let marketPriceMax = '';
let marketMileageMax = '';
let marketColor = '';
let marketConditionMin = '';
let marketEngine = '';
let marketTransmission = '';
let activeMarketSearchOrderId = null;
const MARKET_POOL_SIZE = 144;
const MARKET_PAGE_SIZE = 24;
function renderMarket(){
  refreshMarketPool(MARKET_POOL_SIZE);
  const brands = ['Alle', ...Object.keys(BRANDS)];
  const list = filteredMarketCars();
  const activeOrder = activeMarketSearchOrder();
  const activeMatches = activeOrder ? list.filter(c=>matchesMarketSearchOrder(c, activeOrder)) : [];
  const totalPages = Math.max(1, Math.ceil(list.length / MARKET_PAGE_SIZE));
  marketPage = clamp(marketPage||1, 1, totalPages);
  const start = (marketPage-1) * MARKET_PAGE_SIZE;
  const pageItems = list.slice(start, start + MARKET_PAGE_SIZE);
  const firstMatchIndex = activeOrder ? list.findIndex(c=>matchesMarketSearchOrder(c, activeOrder)) : -1;
  if(activeOrder && firstMatchIndex>=0){
    const targetPage = Math.floor(firstMatchIndex / MARKET_PAGE_SIZE) + 1;
    if(marketPage !== targetPage){
      marketPage = targetPage;
      return renderMarket();
    }
  }
  return `
    <h2 class="section-title">Fahrzeugbörse</h2>
    <p class="subtle">${list.length} verfügbare Fahrzeuge${marketFilter==='Alle'?'':' von '+marketFilter} · Seite ${marketPage} von ${totalPages} · täglich neue Angebote von Privatverkäufern, Händlern & Auktionen.</p>
    <div class="pill-tabs market-brand-tabs">${brands.map(b=>`<div class="pill-tab ${marketFilter===b?'active':''}" onclick="marketFilter='${b}';marketPage=1;renderApp('market')">${b}</div>`).join('')}</div>
    ${renderMarketSearchOrderBanner(activeOrder, activeMatches.length)}
    ${renderMarketFilters()}
    ${renderMarketHealth()}
    ${renderMarketPager(totalPages, list.length)}
    <div class="grid-cars">
      ${pageItems.map(carCard).join('') || '<div class="empty-state">Keine Fahrzeuge in dieser Kategorie.</div>'}
    </div>
    ${renderMarketPager(totalPages, list.length)}
  `;
}
function renderMarketHealth(){
  const all = activeMarket();
  const segmentCounts = groupCount(all, marketVehicleSegment);
  const bandCounts = MARKET_PRICE_BANDS.map(b=>`${b.id}: ${all.filter(c=>marketPriceBand(c).id===b.id).length}`).join(' · ');
  const luxuryCount = all.filter(c=>['luxus','supersport','hypercar'].includes(marketVehicleSegment(c))).length;
  const evCount = all.filter(c=>c.engine==='Elektro').length;
  return `<div class="offer-card" style="margin:0 0 12px;">
    <div class="spec-row">
      <span class="chip">Marktbestand ${all.length}</span>
      <span class="chip">Luxus/Exklusiv ${luxuryCount}</span>
      <span class="chip">Elektro ${evCount}</span>
      <span class="chip">SUV ${segmentCounts.suv||0}</span>
      <span class="chip">Sport ${segmentCounts.sportwagen||0}</span>
    </div>
    <p class="subtle" style="margin:8px 0 0;">Preisbänder: ${escapeHtml(bandCounts)}</p>
  </div>`;
}
function filteredMarketCars(){
  const search = (marketSearch||'').trim().toLowerCase();
  const yMin = Number(marketYearMin)||0;
  const yMax = Number(marketYearMax)||9999;
  const pMax = Number(marketPriceMax)||Infinity;
  const kmMax = Number(marketMileageMax)||Infinity;
  const condMin = Number(marketConditionMin)||0;
  const list = activeMarket().filter(c=>{
    if(marketFilter!=='Alle' && c.brand!==marketFilter) return false;
    if(c.year<yMin || c.year>yMax) return false;
    if((c.price||0)>pMax) return false;
    if((c.mileage||0)>kmMax) return false;
    if(marketColor && c.color!==marketColor) return false;
    if(marketEngine && c.engine!==marketEngine) return false;
    if(marketTransmission && c.transmission!==marketTransmission) return false;
    if((c.condition||0)<condMin) return false;
    if(search){
      const hay = `${c.brand} ${c.model} ${c.year} ${c.engine} ${c.transmission} ${c.color}`.toLowerCase();
      if(!hay.includes(search)) return false;
    }
    return true;
  });
  const sorters = {
    priceAsc: (a,b)=>(a.price||0)-(b.price||0),
    priceDesc: (a,b)=>(b.price||0)-(a.price||0),
    mileageAsc: (a,b)=>(a.mileage||0)-(b.mileage||0),
    mileageDesc: (a,b)=>(b.mileage||0)-(a.mileage||0),
    yearAsc: (a,b)=>(a.year||0)-(b.year||0),
    yearDesc: (a,b)=>(b.year||0)-(a.year||0),
  };
  return list.sort(sorters[marketSort] || sorters.priceAsc);
}
function renderMarketFilters(){
  return `
    <div class="offer-card" style="margin:12px 0 14px;">
      <div class="spec-row">
        <input type="text" placeholder="Fahrzeug suchen: Marke, Modell, Farbe..." value="${escapeAttr(marketSearch)}" oninput="marketSearch=this.value;marketPage=1;" onkeydown="if(event.key==='Enter'){renderApp('market')}">
        <select onchange="marketSort=this.value;marketPage=1;renderApp('market')">
          <option value="priceAsc" ${marketSort==='priceAsc'?'selected':''}>Preis niedrig</option>
          <option value="priceDesc" ${marketSort==='priceDesc'?'selected':''}>Preis hoch</option>
          <option value="mileageAsc" ${marketSort==='mileageAsc'?'selected':''}>Kilometer niedrig</option>
          <option value="mileageDesc" ${marketSort==='mileageDesc'?'selected':''}>Kilometer hoch</option>
          <option value="yearDesc" ${marketSort==='yearDesc'?'selected':''}>Baujahr neu</option>
          <option value="yearAsc" ${marketSort==='yearAsc'?'selected':''}>Baujahr alt</option>
        </select>
        <input type="number" placeholder="Baujahr ab" value="${escapeAttr(marketYearMin)}" onchange="marketYearMin=this.value;marketPage=1;renderApp('market')">
        <input type="number" placeholder="Baujahr bis" value="${escapeAttr(marketYearMax)}" onchange="marketYearMax=this.value;marketPage=1;renderApp('market')">
        <input type="number" placeholder="Preis bis" value="${escapeAttr(marketPriceMax)}" onchange="marketPriceMax=this.value;marketPage=1;renderApp('market')">
        <input type="number" placeholder="km bis" value="${escapeAttr(marketMileageMax)}" onchange="marketMileageMax=this.value;marketPage=1;renderApp('market')">
        <select onchange="marketEngine=this.value;marketPage=1;renderApp('market')">
          <option value="">Alle Kraftstoffe</option>
          ${ENGINES.map(e=>`<option value="${escapeAttr(e.label)}" ${marketEngine===e.label?'selected':''}>${e.label}</option>`).join('')}
        </select>
        <select onchange="marketTransmission=this.value;marketPage=1;renderApp('market')">
          <option value="">Alle Getriebe</option>
          ${TRANS.map(t=>`<option value="${escapeAttr(t)}" ${marketTransmission===t?'selected':''}>${t}</option>`).join('')}
        </select>
        <select onchange="marketColor=this.value;marketPage=1;renderApp('market')">
          <option value="">Alle Farben</option>
          ${COLORS.map(c=>`<option value="${escapeAttr(c)}" ${marketColor===c?'selected':''}>${c}</option>`).join('')}
        </select>
      </div>
      <div class="field" style="margin:10px 0 0;">
        <label>Mindestzustand: <span style="color:var(--brass);font-family:var(--font-m);">${marketConditionMin||0}/100</span></label>
        <input type="range" min="0" max="100" step="5" value="${marketConditionMin||0}" oninput="marketConditionMin=this.value;marketPage=1;renderApp('market')">
      </div>
      <div class="row-actions" style="margin-top:10px;">
        <button class="btn btn-primary btn-sm" onclick="marketPage=1;renderApp('market')">Suchen</button>
        <button class="btn btn-ghost btn-sm" onclick="resetMarketFilters()">Filter zurücksetzen</button>
      </div>
    </div>
  `;
}
function resetMarketFilters(clearSearchOrder = true){
  marketSearch = '';
  marketSort = 'priceAsc';
  marketYearMin = '';
  marketYearMax = '';
  marketPriceMax = '';
  marketMileageMax = '';
  marketColor = '';
  marketConditionMin = '';
  marketEngine = '';
  marketTransmission = '';
  if(clearSearchOrder) activeMarketSearchOrderId = null;
  marketPage = 1;
  renderApp('market');
}
function activeMarketSearchOrder(){
  if(!activeMarketSearchOrderId) return null;
  const so = (state.searchOrders||[]).find(o=>o.id===activeMarketSearchOrderId && o.status==='open');
  if(!so) activeMarketSearchOrderId = null;
  return so || null;
}
function matchesMarketSearchOrder(c, so, loose){
  if(!c || !so) return false;
  if(so.brand && c.brand !== so.brand) return false;
  if(so.model && c.model !== so.model) return false;
  if(!loose){
    if(so.maxPrice && (c.price||c.marketValue||0) > so.maxPrice) return false;
    if(so.maxMileage && c.mileage > so.maxMileage) return false;
    if(so.transmission && c.transmission !== so.transmission) return false;
    if(so.engine && c.engine !== so.engine) return false;
  }
  return true;
}
function applySearchOrderToMarket(orderId, loose){
  const so = (state.searchOrders||[]).find(o=>o.id===orderId);
  if(!so) return;
  activeMarketSearchOrderId = so.id;
  marketFilter = so.brand || 'Alle';
  marketSearch = so.model || '';
  marketYearMin = so.yearMin || '';
  marketYearMax = so.yearMax || '';
  marketPriceMax = loose ? '' : (so.maxPrice || '');
  marketMileageMax = loose ? '' : (so.maxMileage || '');
  marketEngine = loose ? '' : (so.engine || '');
  marketTransmission = loose ? '' : (so.transmission || '');
  marketColor = '';
  marketConditionMin = '';
  marketSort = 'priceAsc';
  marketPage = 1;
  navigateTo('market');
}
function clearMarketSearchHighlight(){
  activeMarketSearchOrderId = null;
  renderApp('market');
}
function observeActiveSearchOrder(){
  const so = activeMarketSearchOrder();
  if(!so) return;
  notify(`Suchauftrag bleibt aktiv: ${so.desc}.`, 'info');
}
function renderMarketSearchOrderBanner(so, matchCount){
  if(!so) return '';
  const desc = escapeHtml(so.desc || `${so.brand||''} ${so.model||''}`.trim());
  const hitText = matchCount ? `${matchCount} passende${matchCount>1?' Fahrzeuge':'s Fahrzeug'} gefunden` : 'Aktuell kein passendes Fahrzeug gefunden';
  return `<div class="market-search-banner">
    <div>
      <b>Suchauftrag aktiv:</b> ${desc}<br>
      <span class="hit">${hitText}</span>
    </div>
    <div class="row-actions" style="margin:0;flex-wrap:wrap;justify-content:flex-end;">
      <button class="btn btn-ghost btn-sm" onclick="navigateTo('wishlist')">Suchauftrag anzeigen</button>
      ${matchCount ? `<button class="btn btn-ghost btn-sm" onclick="resetMarketFilters(false)">Filter zurücksetzen</button>` : `<button class="btn btn-primary btn-sm" onclick="applySearchOrderToMarket('${so.id}', true)">Filter lockern</button><button class="btn btn-ghost btn-sm" onclick="observeActiveSearchOrder()">Suchauftrag beobachten</button>`}
      ${matchCount ? `<button class="btn btn-ghost btn-sm" onclick="clearMarketSearchHighlight()">Highlight beenden</button>` : `<button class="btn btn-ghost btn-sm" onclick="navigateTo('wishlist')">Zurück zur Wunschliste</button>`}
    </div>
  </div>`;
}
function renderMarketPager(totalPages, totalItems){
  if(totalPages<=1) return '';
  const pages = [];
  const from = Math.max(1, marketPage-2);
  const to = Math.min(totalPages, marketPage+2);
  for(let p=from;p<=to;p++) pages.push(p);
  return `<div class="row-actions" style="justify-content:space-between;margin:12px 0 16px;">
    <div class="subtle">${totalItems} Fahrzeuge · ${MARKET_PAGE_SIZE} pro Seite</div>
    <div class="row-actions" style="margin:0;">
      <button class="btn btn-ghost btn-sm" onclick="marketPage=1;renderApp('market')" ${marketPage<=1?'disabled':''}>Erste</button>
      <button class="btn btn-ghost btn-sm" onclick="marketPage=Math.max(1,marketPage-1);renderApp('market')" ${marketPage<=1?'disabled':''}>Zurück</button>
      ${pages.map(p=>`<button class="btn ${p===marketPage?'btn-primary':'btn-ghost'} btn-sm" onclick="marketPage=${p};renderApp('market')">${p}</button>`).join('')}
      <button class="btn btn-ghost btn-sm" onclick="marketPage=Math.min(${totalPages},marketPage+1);renderApp('market')" ${marketPage>=totalPages?'disabled':''}>Weiter</button>
      <button class="btn btn-ghost btn-sm" onclick="marketPage=${totalPages};renderApp('market')" ${marketPage>=totalPages?'disabled':''}>Letzte</button>
    </div>
  </div>`;
}
function carCard(c){
  normalizeVehicleIssues(c);
  const issuesKnown = c.inspected;
  const openIssues = c.issues.filter(i=>!i.repaired);
  const openConditions = carOpenSaleConditions(c);
  const warn = issuesKnown && openIssues.length? `<div class="tag-warn">⚠ ${openIssues.length} Mängel bekannt</div>` : (c.inspected? `<div style="color:var(--teal);font-size:10.5px;font-weight:600;">✓ Keine Mängel gefunden</div>`:'');
  const tier = tierInfo(c.brand, c.model);
  const activeOrder = activeMarketSearchOrder();
  const highlighted = activeOrder && matchesMarketSearchOrder(c, activeOrder);
  return `
  <div class="card ${highlighted?'market-highlight pulse':''}" data-market-car-id="${c.id}" style="--tier-color:${tier.color};">
    ${highlighted?'<span class="market-match-badge">Passend zum Suchauftrag</span>':''}
    <span class="tier-tag">${tier.label}</span>
    ${renderCarPhoto(c)}
    <div class="car-name">${c.brand} ${c.model}</div>
    <div class="car-sub">${c.year} · ${c.mileage.toLocaleString('de-DE')} km · ${c.engine}</div>
    <div class="cond-bar"><div class="cond-fill" style="width:${c.condition}%"></div></div>
    <div class="spec-row">
      <span class="chip">${c.transmission}</span>
      <span class="chip">${c.power} PS</span>
      <span class="chip">${c.color}</span>
      <span class="chip">TÜV ${c.tuvMonths>0? c.tuvMonths+' Mon.':'abgelaufen'}</span>
    </div>
    ${warn}
    <div class="price-row">
      <span class="price">${money(c.price)}</span>
      <span class="mval">Marktwert ~${money(c.marketValue)}</span>
    </div>
    <div class="row-actions">
      <button class="btn btn-ghost btn-sm" onclick="openInspect('${c.id}')">🔍 Prüfen</button>
      <button class="btn btn-primary btn-sm" onclick="openBuy('${c.id}')">Kaufen</button>
    </div>
  </div>`;
}
function findMarketCar(id){ return state.market.find(c=>c.id===id); }

function openInspect(id){
  const c = findMarketCar(id); if(!c) return;
  const cost = 60;
  showModal(`
    <h2 class="section-title">Fahrzeugprüfung</h2>
    <p class="subtle">${c.brand} ${c.model} (${c.year})</p>
    <div class="notice">Eine gründliche Prüfung (OBD-Diagnose, Hebebühne, Lackmessung) kostet <b>${money(cost)}</b> und deckt versteckte Mängel sowie Unfallhistorie auf.</div>
    ${c.inspected? renderInspectResults(c) : ''}
    <div class="row-actions" style="margin-top:14px;">
      <button class="btn btn-ghost" onclick="closeModal()">Schließen</button>
      ${!c.inspected? `<button class="btn btn-primary" onclick="doInspect('${id}')" ${state.cash<cost?'disabled':''}>Jetzt prüfen (${money(cost)})</button>`:''}
    </div>
  `);
}
function renderInspectResults(c){
  normalizeVehicleIssues(c);
  const openIssues = c.issues.filter(i=>!i.repaired);
  const rows = openIssues.map(i=>`${i.category}: ${i.label}`).join(', ');
  return `<div class="notice good" style="display:block;">Prüfergebnis: Zustand ${c.condition}/100 · Verschleiß ${c.wearProfile?.wearScore ?? '–'}/100 · Vorbesitzer ${c.wearProfile?.owners ?? '–'} · Wartung ${c.wearProfile?.maintenanceScore ?? '–'}/100.<br>${openIssues.length? 'Gefundene Mängel: '+rows+'.' : 'Keine versteckten Mängel gefunden.'}</div>`;
}
function doInspect(id){
  const c = findMarketCar(id); if(!c) return;
  const cost = 60;
  if(state.cash<cost) return;
  addTx('expense','Fahrzeugprüfung '+c.brand+' '+c.model,-cost);
  c.inspected = true;
  normalizeVehicleIssues(c).forEach(i=>i.discovered=true);
  openInspect(id);
  renderAllOpen();
  scheduleSave();
}
function openBuy(id){
  const c = findMarketCar(id); if(!c) return;
  showNegotiationModal(id, Math.round(c.price*0.9), 1);
}
function showNegotiationModal(id, suggested, round){
  const c = findMarketCar(id); if(!c) return;
  const min = Math.round(c.price*0.55);
  suggested = clamp(suggested, min, c.price);
  showModal(`
    <h2 class="section-title">${c.brand} ${c.model} kaufen ${round>1?'· Runde '+round+'/3':''}</h2>
    <p class="subtle">Verkäufer verlangt ${money(c.price)}. Marktwert ca. ${money(c.marketValue)}.</p>
    <div class="field">
      <label>Ihr Angebot: <span id="offerlbl" style="color:var(--amber);font-family:var(--font-m);">${money(suggested)}</span></label>
      <div style="display:flex;gap:10px;align-items:center;">
        <input type="range" min="${min}" max="${c.price}" value="${suggested}" oninput="syncFromRange('offer', this.value, ${min}, ${c.price}, '_offerVal')" id="offerRange" style="flex:1;">
        <input type="number" min="${min}" max="${c.price}" step="10" value="${suggested}" oninput="syncFromNumber('offer', this.value, ${min}, ${c.price}, '_offerVal')" onblur="snapNumberField('offer', ${min}, ${c.price}, '_offerVal')" id="offerNumber" style="width:130px;flex:0 0 auto;">
      </div>
    </div>
    <div class="row-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="makeOffer('${id}',${round})">Angebot senden</button>
    </div>
  `);
  window._offerVal = suggested;
}
function makeOffer(id, round){
  round = round||1;
  const c = findMarketCar(id); if(!c) return;
  const offer = window._offerVal || c.price;
  const ratio = offer/c.price;
  const buyerBonus = employeeBonus('Einkäufer');
  const chance = clamp((ratio-0.7)/0.3 + (round-1)*0.1 + buyerBonus*0.14, 0.03, 0.97);
  if(Math.random() < chance){
    completeBuy(c, offer);
    return;
  }
  if(round>=3){
    // letzte Runde: Verkäufer macht ein finales Angebot, keine weitere Verhandlung
    const finalPrice = Math.round((offer + c.price)/2/10)*10;
    showModal(`
      <h2 class="section-title">Letztes Angebot</h2>
      <p class="subtle">Der Verkäufer bleibt bei <b>${money(finalPrice)}</b> und ist nicht weiter verhandlungsbereit.</p>
      <div class="row-actions">
        <button class="btn btn-ghost" onclick="closeModal()">Ablehnen</button>
        <button class="btn btn-primary" onclick="completeBuyById('${id}',${finalPrice})" ${state.cash<finalPrice?'disabled':''}>Annehmen (${money(finalPrice)})</button>
      </div>
    `);
    return;
  }
  const counter = Math.round((offer + c.price)/2/10)*10;
  showModal(`
    <h2 class="section-title">Gegenangebot</h2>
    <p class="subtle">Der Verkäufer lehnt ${money(offer)} ab, bietet aber <b>${money(counter)}</b> an.</p>
    <div class="row-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Ablehnen</button>
      <button class="btn btn-ghost" onclick="showNegotiationModal('${id}',${counter},${round+1})">Eigenes Gegenangebot</button>
      <button class="btn btn-primary" onclick="completeBuyById('${id}',${counter})" ${state.cash<counter?'disabled':''}>Annehmen (${money(counter)})</button>
    </div>
  `);
}
function completeBuyById(id, price){ const c=findMarketCar(id); if(c) completeBuy(c, price); }
function completeBuy(c, price){
  if(state.cash < price){ notify('Nicht genug Kapital für diesen Kauf.', 'warn'); closeModal(); renderAllOpen(); return; }
  const buyerBonus = employeeBonus('Einkäufer');
  state.market = state.market.filter(x=>x.id!==c.id);
  c.purchasePrice = price;
  normalizeVehicleIssues(c);
  if(buyerBonus>0 && c.issues && c.issues.length && Math.random()<buyerBonus*0.35){
    const issue = c.issues.find(i=>!i.repaired);
    if(issue) issue.repaired = true;
    updateVehicleFileState(c);
  }
  c.location = 'stock';
  c.standDays = 0;
  state.inventory.push(c);
  addTx('expense', 'Ankauf '+c.brand+' '+c.model, -price);
  state.purchaseCount = (state.purchaseCount||0)+1;
  addXp(18);
  trainEmployees('Einkäufer', 28, 'erfolgreicher Fahrzeugankauf');
  const newAchievements = checkAchievements();
  playSound('buy');
  showToast('🚗', `<b>${c.brand} ${c.model}</b> für ${money(price)} gekauft – bereit für Werkstatt oder Inserat.`, null, null);
  showAchievementUnlocks(newAchievements);
  checkSearchOrderMatches();
  closeModal();
  refreshMarketPool();
  renderAllOpen();
  scheduleSave();
}

/* =============================== INVENTORY =============================== */
function bulkListingEligibleCars(){
  return activeInventory().filter(c=>{
    const reserved = c.reservedFor && c.reservedFor.expiresDay>state.day;
    const sold = c.location==='sold' || c.sold || c.soldDay;
    return !sold && !reserved && !state.listings[c.id];
  });
}
function bulkListingOpenIssues(c, mode){
  normalizeVehicleIssues(c);
  const open = (c.issues||[]).filter(i=>!i.repaired);
  if(mode==='sales') return open.filter(i=>i.customerMentioned || (i.severity||1)>=3 || ['Bremsen','Reifen','Service','Motor'].includes(i.category));
  if(mode==='all') return open;
  return [];
}
function bulkListingPriceForCar(c, markupPct, quickSale){
  const costs = vehicleTotalCosts(c);
  const raw = costs.total * (1 + (Number(markupPct)||0)/100);
  const quickCap = quickSale ? Math.max(costs.total*1.04, (c.marketValue||raw)*1.02) : raw;
  const price = Math.round(Math.max(300, quickSale ? Math.min(raw, quickCap) : raw)/10)*10;
  return price;
}
function bulkListingRepairQuote(c, mode){
  const issues = bulkListingOpenIssues(c, mode);
  if(!issues.length) return {issues:[], cost:0, days:0, condGain:0};
  const quotes = issues.map(issue=>({issue, job:issueRepairJob(issue)})).map(item=>({issue:item.issue, job:item.job, quote:workshopJobQuote(c, item.job)}));
  return {
    issues,
    cost: Math.round(sumBy(quotes, x=>x.quote.cost)),
    days: Math.max(1, Math.max(...quotes.map(x=>x.quote.days))),
    condGain: Math.min(100, sumBy(quotes, x=>x.job.cond||0)),
  };
}
function bulkListingPreview(markupPct, repairMode, quickSale){
  const inv = activeInventory();
  const listed = inv.filter(c=>state.listings[c.id]).length;
  const eligible = bulkListingEligibleCars();
  const inWorkshopIds = new Set((state.workshopJobs||[]).map(j=>j.carId));
  const rows = eligible.map(c=>{
    const inWorkshop = inWorkshopIds.has(c.id);
    const repair = bulkListingRepairQuote(c, repairMode);
    const price = bulkListingPriceForCar(c, markupPct, quickSale);
    const stats = listingPriceStats(c, price);
    let status = 'Sofort inserieren';
    if(inWorkshop) status = 'Übersprungen: In Werkstatt';
    else if(repair.issues.length) status = 'Wird nach Reparatur inseriert';
    return {car:c, price, stats, repair, inWorkshop, status};
  });
  const direct = rows.filter(r=>!r.inWorkshop && !r.repair.issues.length);
  const afterRepair = rows.filter(r=>!r.inWorkshop && r.repair.issues.length);
  return {
    invCount: inv.length,
    listed,
    unlisted: Math.max(0, inv.length-listed),
    issueCars: eligible.filter(c=>bulkListingOpenIssues(c, repairMode || 'all').length).length,
    eligible,
    rows,
    direct,
    afterRepair,
    repairCost: sumBy(afterRepair, r=>r.repair.cost),
    listingValue: sumBy(rows.filter(r=>!r.inWorkshop), r=>r.price),
    profit: sumBy(rows.filter(r=>!r.inWorkshop), r=>r.price-r.stats.total-r.repair.cost),
    skipped: rows.filter(r=>r.inWorkshop).length + (inv.length-eligible.length),
  };
}
function renderBulkListingPreview(){
  const markup = Number(document.getElementById('bulkMarkup')?.value ?? 20);
  const repairEnabled = !!document.getElementById('bulkRepair')?.checked;
  const repairMode = repairEnabled ? (document.querySelector('input[name="bulkRepairMode"]:checked')?.value || 'sales') : 'none';
  const quickSale = !!document.getElementById('bulkQuickSale')?.checked;
  const preview = bulkListingPreview(markup, repairMode, quickSale);
  const html = `
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Bestand</div><div class="num">${preview.invCount}</div></div>
      <div class="stat-card"><div class="lbl">Bereits inseriert</div><div class="num">${preview.listed}</div></div>
      <div class="stat-card"><div class="lbl">Noch nicht inseriert</div><div class="num">${preview.unlisted}</div></div>
      <div class="stat-card"><div class="lbl">Mit Mängeln</div><div class="num">${preview.issueCars}</div></div>
    </div>
    <div class="listing-metrics" style="margin-top:10px;">
      <div class="listing-metric"><span>Reparaturkosten</span><b>${money(preview.repairCost)}</b></div>
      <div class="listing-metric"><span>Inseratswert</span><b>${money(preview.listingValue)}</b></div>
      <div class="listing-metric ${preview.profit>=0?'good':'warn'}"><span>Erwarteter Gewinn</span><b>${preview.profit>=0?'+':''}${money(preview.profit)}</b></div>
      <div class="listing-metric"><span>Sofort</span><b>${preview.direct.length}</b></div>
      <div class="listing-metric"><span>Nach Werkstatt</span><b>${preview.afterRepair.length}</b></div>
      <div class="listing-metric"><span>Übersprungen</span><b>${preview.skipped}</b></div>
    </div>
    <div style="margin-top:12px;max-height:240px;overflow:auto;padding-right:4px;">
      ${preview.rows.length ? preview.rows.map(r=>`<div class="offer-card" style="margin-bottom:8px;padding:10px;">
        <div class="offer-head"><span><b>${escapeHtml(r.car.brand)} ${escapeHtml(r.car.model)}</b></span><span class="persona">${escapeHtml(r.status)}</span></div>
        <p class="subtle" style="margin:4px 0 0;">Preis ${money(r.price)} · Kosten ${money(r.stats.total)}${r.repair.cost?` · Reparatur ${money(r.repair.cost)} · ${r.repair.days} Tag(e)`:''}</p>
      </div>`).join('') : '<div class="notice">Keine passenden Fahrzeuge für die Sammelaktion.</div>'}
    </div>`;
  const target = document.getElementById('bulkListingPreview');
  if(target) target.innerHTML = html;
}
function openBulkListingModal(){
  const preview = bulkListingPreview(20, 'none', false);
  showModal(`
    <div class="listing-modal-shell">
      <div class="listing-modal-head">
        <h2 class="section-title">Alle Fahrzeuge inserieren</h2>
        <p class="subtle" style="margin:0;">Komfortaktion für nicht inserierte, nicht reservierte Fahrzeuge. Einzelaktionen bleiben unverändert.</p>
      </div>
      <div class="listing-modal-scroll">
        <div class="offer-card" style="margin-bottom:12px;">
          <h3 style="margin:0 0 10px;font-family:var(--font-d);font-size:13px;">Preisaufschlag</h3>
          <div class="field" style="margin:0;">
            <label>Aufschlag auf Gesamtkosten: <span id="bulkMarkupLabel" style="color:var(--brass);font-family:var(--font-m);">+20%</span></label>
            <input id="bulkMarkup" type="range" min="0" max="120" step="5" value="20" oninput="document.getElementById('bulkMarkupLabel').textContent='+'+this.value+'%'; document.getElementById('bulkMarkupNumber').value=this.value; renderBulkListingPreview();">
          </div>
          <div class="listing-percent-row" style="margin-top:10px;">
            <select onchange="document.getElementById('bulkMarkup').value=this.value; document.getElementById('bulkMarkupNumber').value=this.value; document.getElementById('bulkMarkupLabel').textContent='+'+this.value+'%'; renderBulkListingPreview();">
              ${[10,20,30,50,100].map(v=>`<option value="${v}" ${v===20?'selected':''}>+${v}%</option>`).join('')}
            </select>
            <input id="bulkMarkupNumber" type="number" min="0" max="120" step="5" value="20" oninput="document.getElementById('bulkMarkup').value=this.value; document.getElementById('bulkMarkupLabel').textContent='+'+this.value+'%'; renderBulkListingPreview();">
          </div>
        </div>
        <div class="offer-card" style="margin-bottom:12px;">
          <h3 style="margin:0 0 10px;font-family:var(--font-d);font-size:13px;">Werkstatt</h3>
          <label class="notice" style="display:flex;align-items:center;gap:8px;margin:0 0 8px;"><input id="bulkRepair" type="checkbox" onchange="renderBulkListingPreview()"> Alle Fahrzeuge vorher reparieren</label>
          <div class="spec-row">
            <label class="chip"><input type="radio" name="bulkRepairMode" value="sales" checked onchange="renderBulkListingPreview()"> Nur verkaufsrelevante Mängel</label>
            <label class="chip"><input type="radio" name="bulkRepairMode" value="all" onchange="renderBulkListingPreview()"> Alle Mängel vollständig</label>
          </div>
        </div>
        <div class="offer-card" style="margin-bottom:12px;">
          <h3 style="margin:0 0 10px;font-family:var(--font-d);font-size:13px;">Schnellverkauf</h3>
          <label class="notice" style="display:flex;align-items:center;gap:8px;margin:0;"><input id="bulkQuickSale" type="checkbox" onchange="renderBulkListingPreview()"> Schnellverkauf aktivieren</label>
          <p class="subtle" style="margin:8px 0 0;">Kalkuliert näher am Marktwert. Die Marge sinkt, dafür werden die Inserate attraktiver.</p>
        </div>
        <div class="offer-card" style="margin-bottom:12px;">
          <h3 style="margin:0 0 10px;font-family:var(--font-d);font-size:13px;">Zahlungsarten für alle Inserate</h3>
          <p class="subtle" style="margin:0;">Diese Auswahl gilt für alle Fahrzeuge, die durch diese Sammelaktion inseriert werden.</p>
          ${paymentMethodSelectorHtml('bulkPay', PAYMENT_METHODS)}
          <div id="bulkPaymentWarn" class="notice warn" style="display:none;margin-top:10px;">Bitte mindestens eine Zahlungsart auswählen.</div>
        </div>
        <div id="bulkListingPreview">${preview.rows.length ? '' : '<div class="notice">Keine passenden Fahrzeuge für die Sammelaktion.</div>'}</div>
      </div>
      <div class="row-actions listing-modal-actions">
        <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
        <button class="btn btn-primary" onclick="confirmBulkListing()">Alle passenden Fahrzeuge inserieren</button>
      </div>
    </div>
  `, 'listing-modal');
  renderBulkListingPreview();
}
function createListingForCar(c, price, source, quickSale, allowedPaymentMethods){
  if(!c || state.listings[c.id]) return false;
  state.listings[c.id] = {price:Math.round(price/10)*10, views:0, createdDay:state.day, source:source||'manual', quickSale:!!quickSale, allowedPaymentMethods:normalizePaymentMethods(allowedPaymentMethods)};
  c.bulkListingPlan = null;
  return true;
}
function startBulkListingRepair(c, row, markupPct, repairMode, quickSale, allowedPaymentMethods){
  if(!c || !row.repair.issues.length || (state.workshopJobs||[]).some(j=>j.carId===c.id)) return false;
  if(state.cash<row.repair.cost) return false;
  c.costs = c.costs || {};
  c.costs.repair = Math.round((c.costs.repair||0) + row.repair.cost);
  addTx('expense', 'Sammel-Inserierung Werkstatt '+c.brand+' '+c.model, -row.repair.cost);
  c.bulkListingPlan = {markupPct, repairMode, quickSale:!!quickSale, allowedPaymentMethods:normalizePaymentMethods(allowedPaymentMethods), createdDay:state.day, status:'Wird nach Reparatur inseriert'};
  state.workshopJobs.push({
    carId:c.id,
    jobId:'bulk-listing-repair',
    baseJobId:'mech',
    issueIds:row.repair.issues.map(i=>i.id),
    daysLeft:row.repair.days,
    condGain:row.repair.condGain,
    label:'Sammel-Inserierung vorbereiten'
  });
  return true;
}
function confirmBulkListing(){
  const markup = Number(document.getElementById('bulkMarkup')?.value ?? 20);
  const repairEnabled = !!document.getElementById('bulkRepair')?.checked;
  const repairMode = repairEnabled ? (document.querySelector('input[name="bulkRepairMode"]:checked')?.value || 'sales') : 'none';
  const quickSale = !!document.getElementById('bulkQuickSale')?.checked;
  const allowedPaymentMethods = selectedPaymentMethods('bulkPay');
  if(!allowedPaymentMethods.length){
    const warn = document.getElementById('bulkPaymentWarn');
    if(warn) warn.style.display = 'flex';
    notify('Bitte mindestens eine Zahlungsart auswählen.', 'warn');
    return;
  }
  const preview = bulkListingPreview(markup, repairMode, quickSale);
  let listed = 0, queued = 0, skipped = preview.skipped;
  preview.rows.forEach(row=>{
    const c = row.car;
    if(row.inWorkshop || state.listings[c.id]){ skipped++; return; }
    if(row.repair.issues.length){
      if(startBulkListingRepair(c, row, markup, repairMode, quickSale, allowedPaymentMethods)) queued++;
      else skipped++;
    } else if(createListingForCar(c, row.price, 'bulk', quickSale, allowedPaymentMethods)){
      listed++;
    }
  });
  notify(`Sammelaktion: ${listed} sofort inseriert, ${queued} für Werkstatt vorgemerkt, ${skipped} übersprungen.`, queued||listed?'good':'warn');
  closeModal(); renderAllOpen(); scheduleSave();
}
function completeBulkListingAfterRepair(c){
  if(!c || !c.bulkListingPlan || state.listings[c.id]) return false;
  const reserved = c.reservedFor && c.reservedFor.expiresDay>state.day;
  if(reserved || c.location==='sold' || c.sold || c.soldDay) return false;
  const plan = c.bulkListingPlan;
  const price = bulkListingPriceForCar(c, plan.markupPct, plan.quickSale);
  const ok = createListingForCar(c, price, 'bulk-after-repair', plan.quickSale, plan.allowedPaymentMethods);
  if(ok) notify(`Nach Werkstatt automatisch inseriert: ${c.brand} ${c.model} für ${money(price)}.`, 'good');
  return ok;
}
function renderInventory(){
  const inv = activeInventory();
  if(inv.length===0){
    return `<h2 class="section-title">Fahrzeugbestand</h2><div class="empty-state"><div class="ic">🏢</div>Ihr Bestand ist leer. Kaufen Sie Fahrzeuge über die Fahrzeugbörse.</div>`;
  }
  const bulkReady = bulkListingEligibleCars().length;
  return `
    <h2 class="section-title">Fahrzeugbestand</h2>
    <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;flex-wrap:wrap;margin-bottom:12px;">
      <p class="subtle" style="margin:0;">${inv.length} Fahrzeuge · Ø Standtage: ${Math.round(inv.reduce((s,c)=>s+c.standDays,0)/inv.length)}</p>
      <button class="btn btn-primary btn-sm" onclick="openBulkListingModal()" ${bulkReady?'':'disabled'}>Alle inserieren</button>
    </div>
    <div class="grid-cars">${inv.map(invCard).join('')}</div>
  `;
}
function invCard(c){
  normalizeVehicleIssues(c);
  const listed = state.listings[c.id];
  const inWorkshop = state.workshopJobs.find(j=>j.carId===c.id);
  const reserved = c.reservedFor && c.reservedFor.expiresDay>state.day;
  const profit = c.marketValue - c.purchasePrice;
  const tier = tierInfo(c.brand, c.model);
  const openIssues = c.issues.filter(i=>!i.repaired);
  const vehicleFile = updateVehicleFileState(c);
  const openConditions = carOpenSaleConditions(c);
  return `
  <div class="card" style="--tier-color:${reserved?'#e0555c':tier.color};">
    <span class="tier-tag">${reserved?'Reserviert':tier.label}</span>
    ${renderCarPhoto(c)}
    <div class="car-name">${c.brand} ${c.model}</div>
    <div class="car-sub">${c.year} · ${c.mileage.toLocaleString('de-DE')} km · Standtage: ${c.standDays}</div>
    <div class="cond-bar"><div class="cond-fill" style="width:${c.condition}%"></div></div>
    <div class="spec-row">
      <span class="chip">Zustand ${escapeHtml(vehicleFile.conditionLabel)} · ${c.condition}</span>
      ${c.acquisitionSource?`<span class="chip" style="color:var(--brass);">${c.acquisitionSource}</span>`:''}
      ${listed?`<span class="chip" style="color:var(--teal);border-color:rgba(51,194,160,.35);">Gelistet: ${money(listed.price)}</span>`:''}
      ${listed?paymentMethodBadges(listed.allowedPaymentMethods):''}
      ${inWorkshop?`<span class="chip" style="color:#8fb2ff;">🔧 in Werkstatt (${inWorkshop.daysLeft}d)</span>`:''}
      ${c.bulkListingPlan && !listed?`<span class="chip" style="color:var(--amber);border-color:rgba(245,158,11,.35);">Wird nach Reparatur inseriert</span>`:''}
      ${reservationChip(c)}
      ${vehicleFileDebugHtml(c)}
    </div>
    ${openIssues.length?`<div class="subtle" style="margin:6px 0 0;">Mängel: ${openIssues.slice(0,3).map(i=>escapeHtml(i.label)).join(', ')}${openIssues.length>3?' …':''}</div>`:''}
    ${openConditions.length?`<div class="tag-warn" style="margin-top:6px;">Offener Kundenwunsch: ${escapeHtml(saleConditionText(openConditions[0]))}</div>`:''}
    <div class="price-row">
      <span class="price">${money(c.marketValue)}</span>
      <span class="mval">EK ${money(c.purchasePrice)} · ${profit>=0?'+':''}${money(profit)}</span>
    </div>
    ${reserved?`<div class="row-actions" style="margin-bottom:10px;">
      <button class="btn btn-ghost btn-sm" onclick="extendReservation('${c.id}')">+3 Tage verlängern</button>
      <button class="btn btn-danger btn-sm" onclick="cancelReservation('${c.id}')">Reservierung aufheben</button>
    </div>`:''}
    <div class="row-actions inventory-card-actions">
      ${!inWorkshop? `<button class="btn btn-ghost btn-sm" onclick="openWorkshopModal('${c.id}')">🔧 Werkstatt</button>`:''}
      ${c.acquisitionHistory? `<button class="btn btn-ghost btn-sm" onclick="showAcquisitionHistory('${c.id}')">Historie</button>`:''}
      ${!listed && !inWorkshop? `<button class="btn btn-primary btn-sm" onclick="openListModal('${c.id}')">📄 Inserieren</button>`:''}
      ${listed? `<button class="btn btn-ghost btn-sm" onclick="openListModal('${c.id}')">Inserat bearbeiten</button><button class="btn btn-danger btn-sm" onclick="unlistCar('${c.id}')">Inserat entfernen</button>`:''}
    </div>
    ${!listed && !inWorkshop && !reserved? `<button class="btn btn-ghost btn-sm" style="width:100%;margin-top:6px;justify-content:center;" onclick="quickTrade('${c.id}')">⚡ Schnellverkauf an Handelspartner (${money(Math.round(c.marketValue*0.78))})</button>`:''}
  </div>`;
}
function findCar(id){ return state.inventory.find(c=>c.id===id); }
function showAcquisitionHistory(id){
  const c = findCar(id); if(!c || !c.acquisitionHistory) return;
  showModal(`
    <div class="vehicle-history-shell">
      <div class="vehicle-history-head">
        <h2 class="section-title">Ankaufshistorie</h2>
        <p class="subtle" style="margin:0;">${c.brand} ${c.model} · ${c.acquisitionSource||'Fahrzeugankauf'} · Einkauf ${money(c.purchasePrice||0)} · Prognose ${money((c.marketValue||0)-(c.purchasePrice||0))}</p>
      </div>
      <div class="vehicle-history-body">
        <div class="vehicle-history-section">
          <div class="vehicle-history-title">
            <span>Historie</span>
            <span class="chip">${c.acquisitionHistory.length} Einträge</span>
          </div>
          <div class="chat-messages vehicle-history-scroll">
            ${c.acquisitionHistory.map(m=>`<div class="bubble ${m.from==='player'?'player':'customer'}">${escapeHtml(m.text)}<div style="font-size:10px;color:var(--ink-2);margin-top:4px;">Tag ${m.day}</div></div>`).join('')}
          </div>
        </div>
      </div>
      <div class="row-actions vehicle-history-actions">
        <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal()">Schließen</button>
      </div>
    </div>
  `, 'vehicle-history-modal');
}
/* =============================== RESERVIERUNGSSYSTEM =============================== */
function reserveCar(car, offer, days, reason){
  car.reservedFor = { offerId: offer.id, customerId: offer.customerId, customerName: offer.name, expiresDay: state.day+days, reason };
}
function releaseReservation(car){
  if(car) car.reservedFor = null;
}
function isReservedForOther(car, offerId){
  return !!(car.reservedFor && car.reservedFor.offerId !== offerId && car.reservedFor.expiresDay > state.day);
}
function extendReservation(carId){
  const c = findCar(carId); if(!c || !c.reservedFor) return;
  c.reservedFor.expiresDay += 3;
  notify(`Reservierung für ${c.brand} ${c.model} verlängert bis Tag ${c.reservedFor.expiresDay}.`,'info');
  renderAllOpen(); scheduleSave();
}
function cancelReservation(carId){
  const c = findCar(carId); if(!c) return;
  c.reservedFor = null;
  notify(`Reservierung für ${c.brand} ${c.model} aufgehoben.`,'info');
  renderAllOpen(); scheduleSave();
}
function reservationChip(c){
  if(!c.reservedFor || c.reservedFor.expiresDay<=state.day) return '';
  return `<span class="chip" style="color:var(--crimson);border-color:rgba(224,85,92,.4);">🔒 Reserviert bis Tag ${c.reservedFor.expiresDay} (${c.reservedFor.customerName})</span>`;
}
function quickTrade(id){
  const c = findCar(id); if(!c) return;
  const p = Math.round(c.marketValue*0.78);
  state.inventory = state.inventory.filter(x=>x.id!==id);
  delete state.listings[id];
  addTx('income','Schnellverkauf '+c.brand+' '+c.model, p);
  notify(`Schnellverkauf: ${c.brand} ${c.model} für ${money(p)}.`,'good');
  renderAllOpen(); scheduleSave();
}

/* =============================== WORKSHOP =============================== */
function workshopJobQuote(c, job){
  const mechBonus = employeeBonus('Mechaniker');
  const prepBonus = employeeBonus('Fahrzeugaufbereiter');
  const tier = carTierOf(c.brand, c.model);
  const roleBonus = job.baseId==='clean' || job.baseId==='paint' || job.id==='clean' || job.id==='paint' ? Math.max(mechBonus, prepBonus) : mechBonus;
  return {
    cost: Math.round(job.baseCost*(0.55+0.45*tier)*(1-roleBonus*0.25)),
    days: Math.max(1, Math.round(job.baseDays*(1-roleBonus*0.3))),
  };
}
function openCustomerWishConditionsForCar(c, offerId){
  const closed = ['fulfilled','discountAccepted','rejected'];
  return (c.saleConditions||[]).filter(cond=>
    !closed.includes(cond.status) &&
    cond.status!=='repairing' &&
    !conditionIssueRepaired(c, cond) &&
    !conditionCustomerGone(cond) &&
    (!offerId || cond.offerId===offerId)
  );
}
function customerWishBatchSummary(c, conditions){
  const seen = new Set();
  const items = [];
  conditions.forEach(cond=>{
    if(seen.has(cond.issueId)) return;
    const issue = (c.issues||[]).find(i=>i.id===cond.issueId);
    if(!issue || issue.repaired) return;
    seen.add(cond.issueId);
    const job = issueRepairJob(issue);
    const quote = workshopJobQuote(c, job);
    items.push({condition:cond, issue, job, cost:quote.cost, days:quote.days});
  });
  const rawDays = items.reduce((sum,item)=>sum+item.days,0);
  return {
    items,
    labels: items.map(item=>item.issue.label),
    cost: items.reduce((sum,item)=>sum+item.cost,0),
    days: Math.max(1, Math.ceil(rawDays*0.75)),
    condGain: clamp(items.reduce((sum,item)=>sum+(item.job.cond||0),0),0,36),
    satisfactionGain: Math.min(18, items.length*4),
    chanceGain: Math.min(26, items.reduce((sum,item)=>sum+(item.issue.severity||1)*4,0)),
  };
}
function openWorkshopModal(carId){
  const c = findCar(carId); if(!c) return;
  normalizeVehicleIssues(c);
  const vehicleFile = updateVehicleFileState(c);
  const issueJobs = c.issues.filter(i=>!i.repaired).map(issueRepairJob);
  const allJobs = issueJobs.concat(REPAIR_JOBS);
  const customerWishes = openCustomerWishConditionsForCar(c);
  const batch = customerWishBatchSummary(c, customerWishes);
  showModal(`
    <h2 class="section-title">Werkstatt – ${c.brand} ${c.model}</h2>
    <p class="subtle">Zustand aktuell: ${c.condition}/100 · Verschleiß ${c.wearProfile?.wearScore ?? '–'}/100 ${c.issues.length? '· offene Mängel: '+c.issues.filter(i=>!i.repaired).length:''}</p>
    ${issueJobs.length?`<div class="notice warn" style="display:block;">Erkannte oder vorbeugend behebbare Mängel werden als konkrete Werkstattarbeiten angeboten.</div>`:''}
    ${batch.items.length>1?`<div class="offer-card" style="border-color:rgba(231,192,111,.45);">
      <div class="offer-head"><span>✅ <b>Alle Kundenwünsche erledigen</b></span><span class="persona">${batch.days} Tag(e)</span></div>
      <p class="subtle" style="margin:0 0 8px;">${batch.labels.map(escapeHtml).join(', ')}</p>
      <div class="spec-row" style="margin-bottom:10px;">
        <span class="chip">Gesamtkosten ${money(batch.cost)}</span>
        <span class="chip">+${batch.chanceGain}% Abschlusschance</span>
        <span class="chip">+${batch.satisfactionGain} Zufriedenheit</span>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center;" onclick="startAllCustomerWishRepairs('${carId}')" ${state.cash<batch.cost?'disabled':''}>Alle Kundenwünsche erledigen</button>
    </div>`:''}
    ${allJobs.map(j=>{
      const {cost, days} = workshopJobQuote(c, j);
      return `<div class="offer-card">
        <div class="offer-head"><span>${j.icon} <b>${j.label}</b></span><span class="persona">${days} Tag(e)</span></div>
        <p class="subtle" style="margin:0 0 10px;">${j.issueId?'Mangel gezielt beheben · ':''}+${j.cond} Zustand · ${money(cost)}</p>
        <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center;" onclick="startRepair('${carId}','${j.id}')" ${state.cash<cost?'disabled':''}>Auftrag starten</button>
      </div>`;
    }).join('')}
    <button class="btn btn-ghost" onclick="closeModal()" style="width:100%;justify-content:center;">Schließen</button>
  `);
}
function startRepair(carId, jobId){
  const c = findCar(carId); if(c) normalizeVehicleIssues(c);
  const issue = jobId.startsWith('issue:') && c ? c.issues.find(i=>'issue:'+i.id===jobId) : null;
  const job = issue ? issueRepairJob(issue) : REPAIR_JOBS.find(j=>j.id===jobId);
  if(!c||!job) return;
  const {cost, days} = workshopJobQuote(c, job);
  if(state.cash<cost) return;
  c.costs = c.costs || {};
  const bucket = job.baseId==='clean' || job.baseId==='paint' || job.id==='clean' || job.id==='paint' ? 'prep' : 'repair';
  c.costs[bucket] = Math.round((c.costs[bucket]||0) + cost);
  addTx('expense', job.label+' – '+c.brand+' '+c.model, -cost);
  state.workshopJobs.push({carId, jobId, issueId:job.issueId||null, baseJobId:job.baseId||job.id, daysLeft:days, condGain:job.cond, label:job.label});
  notify(`Werkstattauftrag gestartet: ${job.label} für ${c.brand} ${c.model}.`,'info');
  closeModal();
  renderAllOpen(); scheduleSave();
}
function startAllCustomerWishRepairs(carId, offerId){
  const c = findCar(carId); if(!c) return;
  normalizeVehicleIssues(c);
  const conditions = openCustomerWishConditionsForCar(c, offerId);
  const batch = customerWishBatchSummary(c, conditions);
  if(!batch.items.length) return;
  if(state.cash<batch.cost){ notify('Nicht genug Kapital für alle Kundenwünsche.', 'warn'); return; }
  c.costs = c.costs || {};
  c.costs.repair = Math.round((c.costs.repair||0) + batch.cost);
  addTx('expense', 'Alle Kundenwünsche – '+c.brand+' '+c.model, -batch.cost);
  const offerMessages = new Map();
  batch.items.forEach(item=>{
    const cond = item.condition;
    cond.status = 'repairing';
    syncCarSaleCondition(c, cond, 'repairing');
    const o = (state.offers||[]).find(x=>x.id===cond.offerId);
    if(o){
      const offerCond = (o.saleConditions||[]).find(x=>x.id===cond.id);
      if(offerCond) offerCond.status = 'repairing';
      if(!offerMessages.has(o.id)) offerMessages.set(o.id, {offer:o, labels:[]});
      offerMessages.get(o.id).labels.push(item.issue.label);
    }
  });
  offerMessages.forEach(entry=>{
    addMsg(entry.offer, 'player', `Wir erledigen die offenen Kundenwünsche gesammelt: ${entry.labels.join(', ')}. Der Verkauf pausiert bis zur Fertigstellung.`);
    addMsg(entry.offer, 'customer', 'Danke, dann warte ich auf Ihre Rückmeldung nach der Werkstatt.');
  });
  state.workshopJobs.push({
    carId,
    jobId:'customer-wishes',
    baseJobId:'mech',
    issueIds:batch.items.map(item=>item.issue.id),
    saleConditionIds:batch.items.map(item=>item.condition.id),
    offerIds:batch.items.map(item=>item.condition.offerId),
    daysLeft:batch.days,
    condGain:batch.condGain,
    label:'Alle Kundenwünsche erledigen'
  });
  notify(`Sammelauftrag gestartet: ${batch.items.length} Kundenwünsche für ${c.brand} ${c.model}.`, 'info');
  closeModal();
  renderAllOpen(); scheduleSave();
}
function renderWorkshop(){
  if(state.workshopJobs.length===0){
    return `<h2 class="section-title">Werkstatt</h2><div class="empty-state"><div class="ic">🔧</div>Keine aktiven Aufträge. Starten Sie Reparaturen über den Fahrzeugbestand.</div>`;
  }
  return `
    <h2 class="section-title">Werkstatt</h2>
    <p class="subtle">${state.workshopJobs.length} aktive Aufträge</p>
    ${state.workshopJobs.map(j=>{
      const c = findCar(j.carId);
      if(!c) return '';
      const job = REPAIR_JOBS.find(x=>x.id===(j.baseJobId||j.jobId)) || {icon:'🔧', baseDays:Math.max(1,j.daysLeft||1)};
      const pct = Math.round(100*(1-(j.daysLeft/Math.max(1,job.baseDays))));
      return `<div class="offer-card">
        <div class="offer-head"><span>${job.icon} <b>${c.brand} ${c.model}</b> — ${j.label}</span><span class="persona">${j.daysLeft} Tag(e) übrig</span></div>
        <div class="progress"><div style="width:${clamp(pct,5,100)}%"></div></div>
      </div>`;
    }).join('')}
  `;
}

/* =============================== ECU-TUNING / PERFORMANCE CENTER =============================== */
function ensureEcuState(){
  state.ecuRequests = Array.isArray(state.ecuRequests) ? state.ecuRequests : [];
  if(state.ecuIntroRequestCreated === undefined) state.ecuIntroRequestCreated = false;
  if(state.ecuSelectedRequestId === undefined) state.ecuSelectedRequestId = null;
  state.ecuHistory = Array.isArray(state.ecuHistory) ? state.ecuHistory : [];
  state.ecuStats = state.ecuStats || {completed:0, failed:0, revenue:0, byTune:{}};
  state.ecuStats.byTune = state.ecuStats.byTune || {};
  state.ecuVehicleHistories = state.ecuVehicleHistories || {};
}
function ecuTuneDef(id){ return (typeof ECU_TUNE_DEFS!=='undefined' ? ECU_TUNE_DEFS : []).find(t=>t.id===id) || null; }
function weightedEcuIntent(){
  const intents = typeof ECU_CUSTOMER_INTENTS!=='undefined' ? ECU_CUSTOMER_INTENTS : [];
  const total = intents.reduce((s,i)=>s+i.weight,0);
  let roll = Math.random()*Math.max(1,total);
  for(const i of intents){ roll -= i.weight; if(roll<=0) return i.tune; }
  return intents[0]?.tune || 'stage1';
}
function ecuVehicleKey(car){ return car.ecuKey || `${car.brand}|${car.model}|${car.year}|${car.engine}|${car.power}`.toLowerCase().replace(/\s+/g,'-'); }
function estimateTorque(car){
  const base = (car.power||120) * (/Diesel/i.test(car.engine||'') ? 2.45 : (/Elektro/i.test(car.engine||'') ? 3.1 : 1.9));
  return Math.round(base/5)*5;
}
function ecuHistoryForVehicle(car){
  ensureEcuState();
  const key = ecuVehicleKey(car);
  if(!state.ecuVehicleHistories[key]) state.ecuVehicleHistories[key] = {key, installed:[], hardware:[], entries:[], originalPower:car.power||120, originalTorque:estimateTorque(car)};
  return state.ecuVehicleHistories[key];
}
function normalizeFuelForEcu(engine){
  if(/elektro/i.test(engine||'')) return 'Elektro';
  if(/hybrid/i.test(engine||'')) return 'Hybrid';
  if(/diesel/i.test(engine||'')) return 'Diesel';
  return 'Benzin';
}
function ecuEngineCode(car){
  const list = (typeof ECU_ENGINE_PREFIXES!=='undefined' && (ECU_ENGINE_PREFIXES[car.brand] || ECU_ENGINE_PREFIXES.default)) || ['MG1'];
  return `${choice(list)}-${Math.abs(stableHash(`${car.brand}${car.model}${car.year}${car.engine}`)).toString().slice(0,3)}`;
}
function ecuCompatibility(car, tuneId){
  const def = ecuTuneDef(tuneId);
  const history = ecuHistoryForVehicle(car);
  if(!def) return {ok:false, reason:'Leistungspaket nicht gefunden.'};
  if(history.installed.includes(tuneId)) return {ok:false, reason:'Diese Optimierung ist bei diesem Fahrzeug bereits installiert.'};
  const fuel = normalizeFuelForEcu(car.engine);
  if(def.fuels && !def.fuels.includes(fuel)) return {ok:false, reason:`Nicht passend für ${fuel}-Antrieb.`};
  if(def.transmission && !def.transmission.some(t=>(car.transmission||'').includes(t))) return {ok:false, reason:'Das Getriebe ist für diese Optimierung nicht geeignet.'};
  const power = car.power || 0;
  if(power < def.minPower) return {ok:false, reason:'Die Serienleistung ist für diese Optimierung zu niedrig.'};
  if(power > def.maxPower) return {ok:false, reason:'Für diese Leistungsklasse ist eine Einzelabstimmung nötig.'};
  if(def.requirement && !history.installed.includes(def.requirement)) return {ok:false, reason:`Zuerst muss ${ecuTuneDef(def.requirement)?.short || 'die Vorstufe'} installiert sein.`};
  if(def.hardware){
    const missing = def.hardware.filter(h=>!(history.hardware||[]).includes(h));
    if(missing.length) return {ok:false, reason:`Fehlende Hardware: ${missing.join(', ')}.`};
  }
  if((car.condition||70) < 45) return {ok:false, reason:'Der technische Zustand ist für Softwaretuning zu schwach.'};
  return {ok:true, reason:'Kompatibel'};
}
function ecuPriceFor(car, def){
  const tier = tierInfo(car.brand, car.model).label;
  const mult = tier==='Luxus' ? 1.35 : (tier==='Exotisch' ? 1.7 : 1);
  return Math.round(randInt(def.price[0], def.price[1]) * mult / 10) * 10;
}
function ecuDynoFor(car, def){
  const basePower = Math.max(50, car.power||120);
  const baseTorque = estimateTorque(car);
  const powerGain = randFloat(def.powerGain[0], def.powerGain[1]);
  const torqueGain = randFloat(def.torqueGain[0], def.torqueGain[1]);
  return {beforePower:basePower, afterPower:Math.max(40, Math.round(basePower*(1+powerGain))), beforeTorque:baseTorque, afterTorque:Math.max(80, Math.round(baseTorque*(1+torqueGain)/5)*5), powerGainPct:Math.round(powerGain*100), torqueGainPct:Math.round(torqueGain*100)};
}
function generateEcuRequest(){
  ensureEcuState();
  let tuneId = weightedEcuIntent();
  let def = ecuTuneDef(tuneId) || ecuTuneDef('stage1');
  const opts = def && ['stage2','stage3','launch','vmax'].includes(def.id) ? {powerMin:Math.max(160,def.minPower-40), powerMax:520, yearMin:2014, yearMax:2026, conditionBase:100} : {yearMin:2012, yearMax:2026, conditionBase:98};
  const car = generateCar(opts);
  car.ecuKey = uid('ecucar');
  const history = ecuHistoryForVehicle(car);
  if(def.requirement && Math.random()<0.58) history.installed.push(def.requirement);
  if(def.hardware && Math.random()<0.48) history.hardware = def.hardware.slice(0, randInt(0, def.hardware.length));
  let compat = ecuCompatibility(car, tuneId);
  if(!compat.ok){
    const fallback = (typeof ECU_TUNE_DEFS!=='undefined' ? ECU_TUNE_DEFS : []).find(t=>ecuCompatibility(car, t.id).ok);
    if(fallback){ tuneId = fallback.id; def = fallback; compat = ecuCompatibility(car, tuneId); }
  }
  const names = ['Leon Wagner','Mara Stein','Jonas Keller','Nina Vogt','Tim Reuter','Sofia Brandt','Ben Adler','Lena Schuster','Marco Weiss','Clara Neumann'];
  return {id:uid('ecu'), day:state.day, status:'new', customerName:choice(names), tuneId, requestedLabel:def.short, car, engineCode:ecuEngineCode(car), message:`Ich möchte für meinen ${car.brand} ${car.model} ${def.customerText}. Können Sie das professionell prüfen und abstimmen?`, quote:null, analysis:null, dyno:null, decision:null, progress:0};
}
function maybeGenerateEcuRequest(workshopCompletionsToday){
  ensureEcuState();
  const active = state.ecuRequests.filter(r=>!['completed','declined','failed'].includes(r.status)).length;
  if(active >= 4) return;
  const shouldCreateIntro = !state.ecuIntroRequestCreated && active === 0;
  const serviceBase = Math.max(0, workshopCompletionsToday||0) * randFloat(.06,.11);
  const emptyDeskBonus = active === 0 ? 0.075 : 0;
  const chance = clamp(serviceBase + emptyDeskBonus + 0.028 + (state.reputation||50)/6500 + upgradeLevel('premium_presence')*.006, .045, .24);
  if(!shouldCreateIntro && Math.random() > chance) return;
  const req = generateEcuRequest();
  state.ecuRequests.unshift(req);
  // Auswahl nur uebernehmen, wenn gerade kein aktiver Auftrag ausgewaehlt ist -
  // eine neue Anfrage darf die laufende Arbeit im Performance Center nicht unterbrechen.
  const currentSelected = state.ecuRequests.find(x=>x.id===state.ecuSelectedRequestId && !['completed','declined','failed'].includes(x.status));
  if(!currentSelected) state.ecuSelectedRequestId = req.id;
  if(shouldCreateIntro) state.ecuIntroRequestCreated = true;
  notify(`Neue ECU-Anfrage: ${req.customerName} möchte ${req.requestedLabel} für ${req.car.brand} ${req.car.model}.`, 'info');
  showToast('EC', `<b>Neue ECU-Anfrage</b><br>${escapeHtml(req.customerName)} fragt eine ${escapeHtml(req.requestedLabel)} Optimierung an.`, 'Performance Center', ()=>navigateTo('ecu'));
  renderSidebar();
  if(currentPage === 'ecu') renderPageContent();
  scheduleSave();
}
function selectEcuRequest(id){
  ensureEcuState();
  state.ecuSelectedRequestId = id;
  renderPageContent();
  scheduleSave();
}
function activeEcuRequests(){
  ensureEcuState();
  return state.ecuRequests.filter(r=>!['completed','declined','failed'].includes(r.status));
}
function selectedEcuRequest(active){
  const list = active || activeEcuRequests();
  let selected = list.find(r=>r.id===state.ecuSelectedRequestId);
  if(!selected){
    selected = list.find(r=>['driving_in','scanning','customer_review','analyzed','ready','programming','rolling_out'].includes(r.status)) || list[0] || null;
    state.ecuSelectedRequestId = selected ? selected.id : null;
  }
  return selected;
}
function acceptEcuRequest(id){ const r = state.ecuRequests.find(x=>x.id===id); if(!r) return; state.ecuSelectedRequestId = id; r.status = 'accepted'; notify(`ECU-Anfrage angenommen: ${r.customerName} wartet auf die Eingangsanalyse.`, 'info'); renderPageContent(); scheduleSave(); }
function declineEcuRequest(id){ const r = state.ecuRequests.find(x=>x.id===id); if(!r) return; r.status = 'declined'; r.closedDay = state.day; if(state.ecuSelectedRequestId===id) state.ecuSelectedRequestId = null; notify(`ECU-Anfrage von ${r.customerName} wurde abgelehnt.`, 'info'); renderSidebar(); renderPageContent(); scheduleSave(); }
function ecuDragStart(ev, id){
  document.body.classList.add('ecu-dragging');
  if(ev.dataTransfer){
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/plain', id);
  }
}
function ecuDropZoneActive(ev, active){
  ev.preventDefault();
  const zone = ev.currentTarget;
  if(zone) zone.classList.toggle('is-hot', !!active);
}
function ecuDropToLab(ev){
  ev.preventDefault();
  if(ev.currentTarget) ev.currentTarget.classList.remove('is-hot');
  const id = ev.dataTransfer ? ev.dataTransfer.getData('text/plain') : '';
  const r = state.ecuRequests.find(x=>x.id===id); if(!r || r.status!=='accepted') return;
  r.status = 'driving_in';
  notify(`${r.car.brand} ${r.car.model} fährt ins Performance Center.`, 'info');
  renderPageContent(); scheduleSave();
  setTimeout(()=>startEcuAnalysis(id), 1400);
}
function startEcuAnalysis(id){ const r = state.ecuRequests.find(x=>x.id===id); if(!r) return; r.status = 'scanning'; renderPageContent(); scheduleSave(); setTimeout(()=>finishEcuAnalysis(id), randInt(3000,5000)); }
function ecuOptionReport(car){
  return (typeof ECU_TUNE_DEFS!=='undefined'?ECU_TUNE_DEFS:[]).map(def=>{
    const compat = ecuCompatibility(car, def.id);
    return {id:def.id, label:def.short, fullLabel:def.label, ok:compat.ok, reason:compat.reason, price:compat.ok ? ecuPriceFor(car, def) : 0, dyno:compat.ok ? ecuDynoFor(car, def) : null};
  });
}
function ecuCustomerChoiceFromReport(r, report){
  const requested = report.find(o=>o.id===r.tuneId && o.ok);
  const possible = report.filter(o=>o.ok);
  if(!possible.length || Math.random()<0.08) return [];
  const choices = [];
  if(requested) choices.push(requested);
  else choices.push(possible[0]);
  const addOns = possible.filter(o=>!choices.some(c=>c.id===o.id) && ['eco','vmax','throttle','gearbox'].includes(o.id));
  if(addOns.length && Math.random()<0.38) choices.push(choice(addOns));
  return choices.slice(0,2);
}
function finishEcuAnalysis(id){
  const r = state.ecuRequests.find(x=>x.id===id); if(!r || r.status!=='scanning') return;
  const def = ecuTuneDef(r.tuneId);
  const compat = ecuCompatibility(r.car, r.tuneId);
  const report = ecuOptionReport(r.car);
  const choices = ecuCustomerChoiceFromReport(r, report);
  const primary = choices[0] || report.find(o=>o.id===r.tuneId) || report.find(o=>o.ok);
  r.options = report;
  r.customerChoices = choices.map(o=>o.id);
  r.analysis = {ok:!!choices.length, reason:choices.length ? 'Kunde prüft die empfohlenen Optionen.' : (compat.reason || 'Keine passende Optimierung gefunden.'), fuel:normalizeFuelForEcu(r.car.engine), engineCode:r.engineCode, risk:def ? Math.round(def.risk*1000)/10 : 0, duration:def ? randInt(def.hours[0], def.hours[1]) : 0};
  r.dyno = primary && primary.dyno ? primary.dyno : (def ? ecuDynoFor(r.car, def) : null);
  r.quote = choices.reduce((s,o)=>s+(o.price||0),0);
  r.decision = choices.length ? 'thinking' : 'declined';
  r.status = 'customer_review';
  notify(`ECU-Analyse abgeschlossen: ${r.car.brand} ${r.car.model}.`, compat.ok ? 'good' : 'warn');
  renderPageContent(); scheduleSave();
  setTimeout(()=>finishEcuCustomerDecision(id), randInt(1700,2800));
}
function finishEcuCustomerDecision(id){
  const r = state.ecuRequests.find(x=>x.id===id); if(!r || r.status!=='customer_review') return;
  if(r.customerChoices && r.customerChoices.length){
    r.decision = 'accepted';
    r.status = 'ready';
    const labels = r.customerChoices.map(t=>ecuTuneDef(t)?.short || t).join(', ');
    r.customerDecisionText = `Der Kunde hat das Analyseergebnis akzeptiert und möchte ${labels} durchführen lassen.`;
    notify(`Kundenfreigabe erhalten: ${labels} für ${r.car.brand} ${r.car.model}.`, 'good');
  } else {
    r.decision = 'declined';
    r.status = 'analyzed';
    r.customerDecisionText = 'Der Kunde möchte nach der Analyse vorerst keine Softwareoptimierung durchführen.';
    notify(`ECU-Kunde hat nach der Analyse keinen Auftrag freigegeben.`, 'info');
  }
  renderPageContent(); scheduleSave();
}
function informEcuCustomer(id){
  const r = state.ecuRequests.find(x=>x.id===id); if(!r) return;
  r.status = 'declined';
  r.closedDay = state.day;
  if(state.ecuSelectedRequestId===id) state.ecuSelectedRequestId = null;
  r.customerDecisionText = 'Der Kunde wurde über das Analyseergebnis informiert. Der Auftrag wurde ohne Durchführung abgeschlossen.';
  notify(`${r.customerName} wurde über das ECU-Analyseergebnis für ${r.car.brand} ${r.car.model} informiert.`, 'info');
  renderSidebar(); renderPageContent(); scheduleSave();
}
function approveEcuCustomerDecision(id){ const r = state.ecuRequests.find(x=>x.id===id); if(!r || !r.analysis?.ok) return; r.decision = 'accepted'; r.status = 'ready'; renderPageContent(); scheduleSave(); }
function startEcuProgramming(id){ const r = state.ecuRequests.find(x=>x.id===id); if(!r || r.status!=='ready') return; r.status = 'programming'; renderPageContent(); scheduleSave(); setTimeout(()=>finishEcuProgramming(id), randInt(3500,5200)); }
function finishEcuProgramming(id){
  const r = state.ecuRequests.find(x=>x.id===id); if(!r || r.status!=='programming') return;
  const tuneIds = (r.customerChoices && r.customerChoices.length ? r.customerChoices : [r.tuneId]).filter(Boolean);
  const defs = tuneIds.map(ecuTuneDef).filter(Boolean);
  const def = defs[0] || ecuTuneDef(r.tuneId);
  const label = defs.map(d=>d.short).join(', ') || (def ? def.short : 'ECU-Tuning');
  const totalRisk = clamp(defs.reduce((s,d)=>s+(d.risk||0),0), .01, .16);
  const failed = Math.random() < totalRisk;
  const hist = ecuHistoryForVehicle(r.car);
  if(failed){
    r.status = 'failed'; r.closedDay = state.day; state.ecuStats.failed = (state.ecuStats.failed||0)+1; state.reputation = clamp((state.reputation||50)-2, 0, 100);
    publishReview({id:uid('rev'), day:state.day, customerName:r.customerName, car:`${r.car.brand} ${r.car.model}`, method:'ECU-Tuning', stars:2, recommend:false, complaint:true, categories:{Kommunikation:3, Service:2, Transparenz:3, Ergebnis:1}, text:`Die Analyse war nachvollziehbar, aber die Programmierung für ${label} konnte nicht sauber abgeschlossen werden.`, reply:''});
    notify(`ECU-Programmierung fehlgeschlagen: ${r.car.brand} ${r.car.model}.`, 'warn');
  } else {
    r.status = 'rolling_out'; r.closedDay = state.day;
    hist.installed = Array.from(new Set([...(hist.installed||[]), ...tuneIds]));
    hist.entries.unshift({day:state.day, tuneId:tuneIds.join('+'), label, power:r.dyno?.afterPower, torque:r.dyno?.afterTorque, price:r.quote});
    addTx('income', `ECU-Tuning: ${label} für ${r.car.brand} ${r.car.model}`, r.quote||0);
    state.ecuStats.completed = (state.ecuStats.completed||0)+1; state.ecuStats.revenue = (state.ecuStats.revenue||0) + (r.quote||0);
    tuneIds.forEach(t=>{ state.ecuStats.byTune[t] = (state.ecuStats.byTune[t]||0)+1; });
    state.ecuHistory.unshift({id:uid('ecuh'), day:state.day, customerName:r.customerName, car:`${r.car.brand} ${r.car.model}`, tuneId:tuneIds.join('+'), label, price:r.quote||0, beforePower:r.dyno?.beforePower, afterPower:r.dyno?.afterPower});
    state.ecuHistory = state.ecuHistory.slice(0,80); state.reputation = clamp((state.reputation||50)+2, 0, 100);
    publishReview({id:uid('rev'), day:state.day, customerName:r.customerName, car:`${r.car.brand} ${r.car.model}`, method:'ECU-Tuning', stars:5, recommend:true, complaint:false, categories:{Kommunikation:5, Service:5, Transparenz:5, Ergebnis:5}, text:`Die Optimierung ${label} wurde sauber erklärt, professionell programmiert und der Prüfstand zeigt den Unterschied deutlich.`, reply:''});
    notify(`ECU-Tuning abgeschlossen: ${label} für ${r.car.brand} ${r.car.model}.`, 'good');
    setTimeout(()=>{
      const done = state.ecuRequests.find(x=>x.id===id);
      if(done && done.status==='rolling_out'){ done.status='completed'; renderSidebar(); renderPageContent(); scheduleSave(); }
    }, 1400);
  }
  renderSidebar(); renderPageContent(); scheduleSave();
}
function renderEcuVehicleDragCard(r){
  const c = r.car;
  const plate = c.plate || `${c.brand.slice(0,2).toUpperCase()}-${String(Math.abs(stableHash(c.id||r.id))).slice(0,2)} ${randInt(100,999)}`;
  c.plate = plate;
  return `<div class="ecu-vehicle-card" draggable="true" ondragstart="ecuDragStart(event,'${r.id}')" ondragend="document.body.classList.remove('ecu-dragging')">
    <div class="ecu-drag-hint">Fahrzeug greifen und rechts ins Performance Center ziehen</div>
    <div class="ecu-vehicle-photo">${renderCarPhoto(c)}</div>
    <div class="ecu-vehicle-info">
      <div><span>Fahrzeug</span><b>${escapeHtml(c.brand)} ${escapeHtml(c.model)}</b></div>
      <div><span>Baujahr</span><b>${c.year}</b></div>
      <div><span>Motor</span><b>${escapeHtml(c.engine)}</b></div>
      <div><span>Leistung</span><b>${c.power} PS</b></div>
      <div><span>Kennzeichen</span><b>${escapeHtml(plate)}</b></div>
      <div><span>Kunde</span><b>${escapeHtml(r.customerName)}</b></div>
    </div>
  </div>`;
}

function ecuStatusLabel(status){ return {new:'Neue Anfrage', accepted:'Fahrzeug bereit', driving_in:'Fährt ein', in_lab:'Im Performance Center', scanning:'Analyse läuft', customer_review:'Kunde prüft Ergebnis', analyzed:'Analyse fertig', ready:'Freigabe erhalten', programming:'Programmierung', rolling_out:'Fahrzeug fertig', completed:'Abgeschlossen', declined:'Abgelehnt', failed:'Fehlgeschlagen'}[status] || status; }
let ecuTipEl = null;
function ecuTipShow(ev, el){
  const text = el.getAttribute('data-ecutip');
  if(!text) return;
  const title = el.getAttribute('data-ecutip-title') || '';
  if(!ecuTipEl || !document.body.contains(ecuTipEl)){
    ecuTipEl = document.createElement('div');
    ecuTipEl.className = 'ecu-tip';
    document.body.appendChild(ecuTipEl);
  }
  ecuTipEl.innerHTML = `${title?`<b>${escapeHtml(title)}</b>`:''}<span>${escapeHtml(text)}</span>`;
  ecuTipEl.style.left = '0px';
  ecuTipEl.style.top = '0px';
  ecuTipEl.classList.add('show');
  const rect = el.getBoundingClientRect();
  const tip = ecuTipEl.getBoundingClientRect();
  const margin = 12;
  // Bevorzugt rechts neben dem Element, sonst darueber/darunter - nie unter dem Mauszeiger.
  let x = rect.right + 14;
  let y = rect.top + rect.height/2 - tip.height/2;
  if(x + tip.width > window.innerWidth - margin){
    x = rect.left + rect.width/2 - tip.width/2;
    y = rect.top - tip.height - 10;
    if(y < margin) y = rect.bottom + 10;
  }
  x = clamp(x, margin, Math.max(margin, window.innerWidth - tip.width - margin));
  y = clamp(y, margin, Math.max(margin, window.innerHeight - tip.height - margin));
  ecuTipEl.style.left = `${Math.round(x)}px`;
  ecuTipEl.style.top = `${Math.round(y)}px`;
}
function ecuTipHide(){ if(ecuTipEl) ecuTipEl.classList.remove('show'); }
function renderEcuOptionResults(r){
  if(!r.options) return '';
  const selected = new Set(r.customerChoices || []);
  const okCount = r.options.filter(o=>o.ok).length;
  const rows = r.options.map(o=>{
    const stateText = o.ok ? (selected.has(o.id) ? 'Vom Kunden freigegeben.' : 'Technisch möglich.') : 'Nicht möglich.';
    const detail = o.ok ? (o.dyno ? `Erwartet: ${o.dyno.beforePower} PS auf ${o.dyno.afterPower} PS (+${o.dyno.powerGainPct}%), Preis ${money(o.price)}.` : `Preis ${money(o.price)}.`) : (o.reason || 'Für dieses Fahrzeug nicht umsetzbar.');
    const short = o.ok ? (selected.has(o.id) ? `Freigegeben · ${money(o.price)}` : money(o.price)) : (o.reason || 'Nicht möglich');
    return `<div class="ecu-option ${o.ok?'ok':'blocked'} ${selected.has(o.id)?'selected':''}" data-ecutip-title="${escapeHtml(o.fullLabel||o.label)}" data-ecutip="${escapeHtml(`${stateText} ${detail}`)}" onmouseenter="ecuTipShow(event,this)" onmouseleave="ecuTipHide()"><i>${o.ok?'✓':'×'}</i><b>${escapeHtml(o.fullLabel||o.label)}</b><span>${escapeHtml(short)}</span></div>`;
  }).join('');
  return `<div class="ecu-options"><div class="dash-panel-head"><b>Analyseergebnis</b><span>${okCount} von ${r.options.length} möglich</span></div><div class="ecu-option-list">${rows}</div></div>`;
}
function renderEcuDyno(r){
  const d = r.dyno;
  if(!d) return '<div class="notice">Nach der Analyse erscheint hier der virtuelle Prüfstand.</div>';
  return `<div class="ecu-dyno"><svg viewBox="0 0 420 170" aria-label="Virtueller Prüfstand"><path class="grid" d="M30 135H395M30 95H395M30 55H395M55 20V145M150 20V145M245 20V145M340 20V145"></path><path class="curve before" d="M35 132 C95 122, 130 98, 188 82 S298 50, 390 42"></path><path class="curve after" d="M35 130 C90 112, 138 84, 195 62 S302 29, 390 22"></path></svg><div class="ecu-dyno-stats"><span>Vorher <b>${d.beforePower} PS / ${d.beforeTorque} Nm</b></span><span>Nachher <b>${d.afterPower} PS / ${d.afterTorque} Nm</b></span><span>Gewinn <b>+${d.powerGainPct}% PS / +${d.torqueGainPct}% Nm</b></span></div></div>`;
}
function renderEcuLabDetails(r){
  const def = ecuTuneDef(r.tuneId) || {};
  if(r.status==='driving_in') return `<div class="ecu-drive-note"><div class="ecu-mini-car"></div><b>Fahrzeug fährt ins Performance Center...</b></div>`;
  if(r.status==='in_lab') return `<div class="row-actions"><button class="btn btn-primary" onclick="startEcuAnalysis('${r.id}')">Fahrzeug analysieren</button></div>`;
  if(r.status==='scanning') return `<div class="ecu-scan"><div class="ecu-scan-ring"></div><div><b>Steuergerät wird ausgelesen</b><small><span>Motorsteuergerät wird gelesen...</span><span>CAN-Bus wird analysiert...</span><span>Kompatibilität wird geprüft...</span><span>Leistungsreserven werden berechnet...</span></small></div></div><div class="progress ecu-progress"><div></div></div>`;
  const analysis = r.analysis; if(!analysis) return '';
  const wishLabel = (r.customerChoices||[]).map(t=>ecuTuneDef(t)?.short || t).join(', ') || def.short || 'Offen';
  const customerDeclined = !analysis.ok && r.decision==='declined' && (r.options||[]).some(o=>o.ok);
  const verdictTitle = analysis.ok ? 'Optimierung möglich' : (customerDeclined ? 'Kunde hat abgelehnt' : 'Keine Optimierung möglich');
  const d = analysis.ok ? r.dyno : null;
  const dynoFold = d ? `<details class="ecu-dyno-fold"><summary><span>Virtueller Prüfstand</span><b>${d.beforePower} → ${d.afterPower} PS (+${d.powerGainPct}%)</b></summary>${renderEcuDyno(r)}</details>` : '';
  const foot = [
    r.status==='customer_review' ? `<div class="ecu-scan"><div class="ecu-scan-ring"></div><div><b>Kunde prüft das Analyseergebnis</b><small>Die möglichen Optionen wurden gesendet. Die Freigabe erscheint automatisch.</small></div></div>` : '',
    r.status==='analyzed' ? `<div class="row-actions"><button class="btn btn-primary" onclick="informEcuCustomer('${r.id}')">Kunde informieren</button></div>` : '',
    r.status==='ready' ? `<div class="row-actions"><button class="btn btn-primary" onclick="startEcuProgramming('${r.id}')">Kundenwunsch durchführen</button></div>` : '',
    r.status==='programming' ? `<div class="ecu-scan"><div class="ecu-scan-ring hot"></div><div><b>Programmierung läuft</b><small>Backup erstellt, Kennfelder geschrieben, Plausibilitätscheck aktiv.</small></div></div><div class="progress ecu-progress"><div></div></div>` : '',
    r.status==='rolling_out' ? `<div class="ecu-drive-note out"><div class="ecu-mini-car"></div><b>Fahrzeug fährt aus dem Performance Center...</b></div>` : '',
    r.status==='completed' ? `<div class="notice">Auftrag abgeschlossen. Rechnung verbucht und Fahrzeughistorie aktualisiert.</div>` : '',
    r.status==='failed' ? `<div class="notice warn">Programmierung wurde abgebrochen. Der Kunde wurde informiert und die Bewertung wurde verarbeitet.</div>` : ''
  ].join('');
  return `<div class="ecu-report">
    <div class="ecu-verdict ${analysis.ok?'ok':'blocked'}"><b>${verdictTitle}</b><span>${escapeHtml(r.customerDecisionText || analysis.reason)}</span></div>
    <div class="ecu-fact-row">
      <div><span>Steuergerät</span><b>${escapeHtml(analysis.engineCode)}</b></div>
      <div><span>Dauer</span><b>${analysis.duration} Std.</b></div>
      <div><span>Preis</span><b>${money(r.quote||0)}</b></div>
      <div><span>Risiko</span><b>${analysis.risk.toFixed(1).replace('.',',')}%</b></div>
      <div data-ecutip-title="Kundenwunsch von ${escapeHtml(r.customerName)}" data-ecutip="${escapeHtml(r.message || wishLabel)}" onmouseenter="ecuTipShow(event,this)" onmouseleave="ecuTipHide()"><span>Kundenwunsch</span><b>${escapeHtml(wishLabel)}</b></div>
    </div>
    ${renderEcuOptionResults(r)}
    ${dynoFold}
    <div class="ecu-report-foot">${foot}</div>
  </div>`;
}
function renderEcuCenterVehicle(r){
  if(!r) return '';
  return `<div class="ecu-center-car ${r.status==='driving_in'?'drive-in':''} ${r.status==='rolling_out'?'drive-out':''}">
    <div class="ecu-center-car-img">${renderCarPhoto(r.car)}</div>
    <div class="ecu-cable"></div>
  </div>`;
}
function renderEcuCenterDiagnostics(r){
  if(!r) return `<div class="ecu-monitor"><b>Diagnosemonitor</b><span>Bereit</span><small>Warte auf Fahrzeug.</small></div>`;
  const temp = 72 + (r.status==='programming'?randInt(3,9):0);
  const bus = r.status==='scanning' ? 'Scan aktiv' : (r.analysis ? 'Synchron' : 'Standby');
  return `<div class="ecu-monitor"><b>Diagnosemonitor</b><span>${ecuStatusLabel(r.status)}</span><small>ECU: ${escapeHtml(r.engineCode || 'unbekannt')} · CAN-Bus: ${bus} · Öltemp.: ${temp}°C</small></div>`;
}

function renderEcuRequestCard(r, isSelected=false){
  const def = ecuTuneDef(r.tuneId) || {};
  const active = !['completed','declined','failed'].includes(r.status);
  const canDrag = r.status==='accepted' && isSelected;
  const tipAttrs = r.message ? `data-ecutip-title="Kundenwunsch von ${escapeHtml(r.customerName)}" data-ecutip="${escapeHtml(r.message)}" onmouseenter="ecuTipShow(event,this)" onmouseleave="ecuTipHide()"` : '';
  return `<div class="ecu-request ${active?'active':''} ${isSelected?'selected':''}" onclick="selectEcuRequest('${r.id}')" ${isSelected?'':tipAttrs}>
    <div class="offer-head"><span><b>${escapeHtml(r.customerName)}</b> - ${escapeHtml(def.short||r.requestedLabel)}</span><span class="persona">${ecuStatusLabel(r.status)}</span></div>
    <div class="ecu-compact-status"><b>${escapeHtml(r.car.brand)} ${escapeHtml(r.car.model)}</b><span>${escapeHtml(r.car.engine)} · ${r.car.power} PS · ${escapeHtml(r.car.year||'')}</span></div>
    ${isSelected && r.message ? `<div class="ecu-wish" ${tipAttrs}><i>Wunsch</i><span>${escapeHtml(r.message)}</span></div>` : ''}
    ${r.status==='new'?`<div class="row-actions"><button class="btn btn-primary" onclick="event.stopPropagation();acceptEcuRequest('${r.id}')">Annehmen</button><button class="btn btn-ghost" onclick="event.stopPropagation();declineEcuRequest('${r.id}')">Ablehnen</button></div>`:''}
    ${canDrag?`<div onclick="event.stopPropagation()">${renderEcuVehicleDragCard(r)}</div>`:''}
    ${r.status==='accepted' && !isSelected?`<div class="ecu-step-note compact"><b>Bereit</b><span>Auswählen, dann Fahrzeug ziehen.</span></div>`:''}
  </div>`;
}
function renderEcuTuning(){
  ensureEcuState();
  ecuTipHide();
  if(!state.ecuIntroRequestCreated && !(state.ecuRequests||[]).some(r=>!['completed','declined','failed'].includes(r.status))){
    setTimeout(()=>maybeGenerateEcuRequest(0), 0);
  }
  const active = activeEcuRequests();
  const selected = selectedEcuRequest(active);
  const stats = state.ecuStats || {};
  const centerJob = selected && !['new','accepted'].includes(selected.status) ? selected : null;
  const centerTitle = centerJob ? `${centerJob.car.brand} ${centerJob.car.model} - ${ecuStatusLabel(centerJob.status)}` : (selected ? `${selected.car.brand} ${selected.car.model} bereit` : 'Bereit für die nächste Analyse');
  return `<div class="ecu-page"><div class="ecu-page-head"><div><h2 class="section-title">ECU-Tuning</h2><p class="subtle">Kompaktes Performance Center für Softwareoptimierung, Analyse und Kundenfreigabe.</p></div><div class="ecu-kpis"><div><span>Offen</span><b>${active.length}</b></div><div><span>Fertig</span><b>${stats.completed||0}</b></div><div><span>Umsatz</span><b>${money(stats.revenue||0)}</b></div></div></div><div class="ecu-layout"><section class="ecu-requests-panel"><div class="dash-panel-head"><b>Kundenanfragen</b><span>${active.length} aktiv</span></div><div class="ecu-request-list">${active.length ? active.map(r=>renderEcuRequestCard(r, selected && r.id===selected.id)).join('') : `<div class="empty-state compact"><div class="ic">EC</div>Keine offenen ECU-Anfragen.</div>`}</div></section><aside class="ecu-center-panel"><div class="ecu-center">
    <div class="ecu-center-head">
      <div class="ecu-center-lights"><span></span><span></span><span></span></div>
      <div class="ecu-center-title"><b>Performance Center</b><small>${escapeHtml(centerTitle)}</small></div>
    </div>
    <div class="ecu-center-body">
      <div class="ecu-center-stage">
        <div class="ecu-shop-floor ${centerJob?'has-car':''}">
          <div class="ecu-lift"></div>
          <div class="ecu-rollers"></div>
          ${renderEcuCenterVehicle(centerJob)}
          ${centerJob ? '' : `<div class="ecu-drop" ondragenter="ecuDropZoneActive(event,true)" ondragover="ecuDropZoneActive(event,true)" ondragleave="ecuDropZoneActive(event,false)" ondrop="ecuDropToLab(event)"><b>Fahrzeug hier zur Analyse ablegen</b><span>${selected && selected.status==='accepted' ? 'Die ausgewählte Fahrzeugkarte links hier ablegen.' : 'Links eine Anfrage annehmen, dann das Fahrzeug hier ablegen.'}</span></div>`}
        </div>
        <div class="ecu-center-grid">${renderEcuCenterDiagnostics(centerJob)}<div class="ecu-monitor"><b>Nächster Schritt</b><span>${centerJob ? ecuStatusLabel(centerJob.status) : (selected ? ecuStatusLabel(selected.status) : 'Anfrage wählen')}</span><small>${centerJob ? 'Analyse, Entscheidung und Programmierung laufen hier im Center.' : (selected && selected.status==='accepted' ? 'Fahrzeugkarte links greifen und in die Drop-Zone ziehen.' : 'Aktiven Auftrag links auswählen oder annehmen.')}</small></div></div>
      </div>
      <div class="ecu-center-workflow">${centerJob ? renderEcuLabDetails(centerJob) : `<div class="notice">Bitte eine ECU-Anfrage auswählen, annehmen und das Fahrzeug in das Performance Center ziehen.</div>`}</div>
    </div>
  </div></aside></div></div>`;
}

/* =============================== LISTINGS / OFFERS =============================== */
function openListModal(carId){
  const c = findCar(carId); if(!c) return;
  const existing = state.listings && state.listings[c.id] ? state.listings[c.id] : null;
  const costs = vehicleTotalCosts(c);
  const min = Math.max(300, Math.round(Math.min(c.marketValue*0.7, costs.total*0.8)/10)*10);
  const max = Math.max(min+500, Math.round(Math.max(c.marketValue*2.2, costs.total*2.5)/10)*10);
  const sug = clamp(Math.round((existing ? existing.price : Math.max(c.marketValue*1.05, costs.total*1.15))/10)*10, min, max);
  const init = listingPriceStats(c, sug);
  const markupOptions = Array.from({length:20},(_,i)=>(i+1)*5);
  const paymentMethods = listingAllowedPaymentMethods(existing);
  showModal(`
    <div class="listing-modal-shell">
      <div class="listing-modal-head">
        <h2 class="section-title">${existing?'Inserat bearbeiten':'Inserat erstellen'}</h2>
        <p class="subtle" style="margin:0;">${c.brand} ${c.model} · Marktwert ~${money(c.marketValue)} · Kostenbasis ${money(costs.total)}</p>
      </div>
      <div class="listing-modal-scroll">
        <div class="listing-price-panel">
          <div class="listing-price-hero">
            <div>
              <div class="subtle" style="margin:0;text-transform:uppercase;font-weight:850;letter-spacing:.07em;">Verkaufspreis festlegen</div>
              <span class="big" id="listlbl">${money(sug)}</span>
            </div>
            <div style="text-align:right;">
              <div class="subtle" style="margin:0 0 5px;text-transform:uppercase;font-weight:850;letter-spacing:.07em;">Preisbewertung</div>
              <div class="grade" id="listRating">${init.rating.label}</div>
            </div>
          </div>
          <div class="listing-price-grid">
            <div class="field" style="margin:0;">
              <label>Preisregler</label>
              <input type="range" min="${min}" max="${max}" step="10" value="${sug}" oninput="setListingPrice(this.value, '${carId}', 'range')" id="listRange">
            </div>
            <div class="field" style="margin:0;">
              <label>Manuelle Preiseingabe</label>
              <input type="number" min="${min}" max="${max}" step="10" value="${sug}" oninput="setListingPrice(this.value, '${carId}', 'number')" onblur="setListingPrice(this.value, '${carId}', 'number', true)" id="listNumber">
            </div>
          </div>
          <div class="listing-percent-row">
            <div class="field" style="margin:0;">
              <label>Prozentaufschlag auf Gesamtkosten</label>
              <select id="listMarkupSelect" onchange="setListingMarkup(this.value, '${carId}')">
                <option value="">Individuell: ${init.markupPct.toFixed(1)}%</option>
                ${markupOptions.map(p=>`<option value="${p}" ${Math.abs(init.markupPct-p)<0.05?'selected':''}>+${p}%</option>`).join('')}
              </select>
            </div>
            <div class="notice" style="margin:0;">Der Aufschlag bezieht sich auf die echten Gesamtkosten: Einkauf, Werkstatt, Aufbereitung, Transport und sonstige Kosten.</div>
          </div>
          <div class="offer-card" style="margin:12px 0 0;">
            <h3 style="font-family:var(--font-d);font-size:13px;margin:0 0 6px;">Zahlungsarten anbieten</h3>
            <p class="subtle" style="margin:0;">Nur Kunden mit einer aktivierten Zahlungsart können auf dieses Inserat anfragen.</p>
            ${paymentMethodSelectorHtml('listPay', paymentMethods)}
            <div id="listPaymentWarn" class="notice warn" style="display:none;margin-top:10px;">Bitte mindestens eine Zahlungsart auswählen.</div>
          </div>
          <div class="listing-metrics">
            <div class="listing-metric"><span>Einkaufspreis</span><b id="listPurchase">${money(costs.purchase)}</b></div>
            <div class="listing-metric"><span>Gesamtkosten</span><b id="listTotalCost">${money(costs.total)}</b></div>
            <div class="listing-metric ${init.profit>=0?'good':'warn'}" id="listProfitCard"><span>Erwarteter Gewinn</span><b id="listMargin">${init.profit>=0?'+':''}${money(init.profit)}</b></div>
            <div class="listing-metric"><span>Gewinnmarge</span><b id="listMarginPct">${init.marginPct.toFixed(1)}%</b></div>
            <div class="listing-metric"><span>Aufschlag</span><b id="listMarkupPct">${init.markupPct>=0?'+':''}${init.markupPct.toFixed(1)}%</b></div>
            <div class="listing-metric"><span>Marktwert</span><b>${money(c.marketValue)}</b></div>
            <div class="listing-metric"><span>Nachfrage</span><b>${init.demandLabel}</b></div>
            <div class="listing-metric"><span>Zustand</span><b>${c.condition}/100</b></div>
          </div>
        </div>
        <div class="notice" style="margin:12px 0 0;">Ein höherer Preis bringt mehr Gewinn, senkt aber abhängig von Marktwert, Nachfrage und Zustand die Wahrscheinlichkeit für Kundenangebote.</div>
      </div>
      <div class="row-actions listing-modal-actions">
        <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
        <button class="btn btn-primary" onclick="listCarConfirm('${carId}')">${existing?'Änderungen speichern':'Inserieren'}</button>
      </div>
    </div>
  `, 'listing-modal');
  window._listVal = sug;
  window.listingPrice = sug;
  updateListingPriceUi(carId);
}
function vehicleCostBreakdown(c){
  const costs = c.costs || {};
  return {
    purchase: Math.round(c.purchasePrice||0),
    repair: Math.round(costs.repair || c.repairCosts || c.repairCost || 0),
    prep: Math.round(costs.prep || c.prepCosts || c.prepCost || c.detailingCost || 0),
    transport: Math.round(costs.transport || c.transportCosts || c.transportCost || 0),
    other: Math.round(costs.other || c.otherCosts || c.otherCost || 0),
  };
}
function vehicleTotalCosts(c){
  const costs = vehicleCostBreakdown(c);
  costs.total = Math.max(1, costs.purchase + costs.repair + costs.prep + costs.transport + costs.other);
  return costs;
}
function listingPriceRating(c, price){
  const demand = currentDemandItems().filter(d=>d.brand===c.brand || d.model===c.model).length;
  const demandAdj = demand>=4 ? 0.08 : demand>=2 ? 0.04 : demand===0 ? -0.03 : 0;
  const conditionAdj = ((c.condition||70)-70)/1000;
  const fair = Math.max(1, (c.marketValue||price||1) * (1 + demandAdj + conditionAdj));
  const ratio = price / fair;
  if(ratio<0.86) return {label:'Sehr günstig', tone:'good', ratio, demand};
  if(ratio<0.94) return {label:'Günstig', tone:'good', ratio, demand};
  if(ratio<1.02) return {label:'Fair', tone:'good', ratio, demand};
  if(ratio<1.10) return {label:'Marktgerecht', tone:'neutral', ratio, demand};
  if(ratio<1.20) return {label:'Etwas teuer', tone:'warn', ratio, demand};
  if(ratio<1.34) return {label:'Teuer', tone:'warn', ratio, demand};
  return {label:'Sehr teuer', tone:'bad', ratio, demand};
}
function listingPriceStats(c, price){
  const costs = vehicleTotalCosts(c);
  const profit = Math.round(price - costs.total);
  const marginPct = costs.total ? profit / costs.total * 100 : 0;
  const markupPct = costs.total ? ((price - costs.total) / costs.total) * 100 : 0;
  const rating = listingPriceRating(c, price);
  const demandLabel = rating.demand>=4 ? 'hoch' : rating.demand>=2 ? 'mittel' : rating.demand ? 'gering' : 'keine Daten';
  return {...costs, profit, marginPct, markupPct, rating, demandLabel};
}
function setListingPrice(value, carId, source, snap){
  const c = findCar(carId); if(!c) return;
  const costs = vehicleTotalCosts(c);
  const min = Math.max(300, Math.round(Math.min(c.marketValue*0.7, costs.total*0.8)/10)*10);
  const max = Math.max(min+500, Math.round(Math.max(c.marketValue*2.2, costs.total*2.5)/10)*10);
  let price = Math.round(Number(value)||min);
  price = clamp(price, min, max);
  if(snap) price = Math.round(price/10)*10;
  window._listVal = price;
  window.listingPrice = price;
  updateListingPriceUi(carId, source);
}
function setListingMarkup(value, carId){
  const c = findCar(carId); if(!c || value==='') return;
  const costs = vehicleTotalCosts(c);
  const price = Math.round(costs.total * (1 + Number(value)/100) / 10) * 10;
  setListingPrice(price, carId, 'markup', true);
}
function updateListingPriceUi(carId, source){
  const c = findCar(carId); if(!c) return;
  const price = Math.round(window.listingPrice || window._listVal || c.marketValue || 0);
  const stats = listingPriceStats(c, price);
  const setText = (id, text)=>{ const el = document.getElementById(id); if(el) el.textContent = text; };
  const range = document.getElementById('listRange');
  const number = document.getElementById('listNumber');
  const select = document.getElementById('listMarkupSelect');
  if(range && source!=='range') range.value = price;
  if(number && source!=='number') number.value = price;
  if(select && select.options && source!=='markup'){
    const exact = Array.from(select.options).find(o=>o.value && Math.abs(Number(o.value)-stats.markupPct)<0.05);
    select.value = exact ? exact.value : '';
    if(select.options[0]) select.options[0].textContent = `Individuell: ${stats.markupPct.toFixed(1)}%`;
  }
  setText('listlbl', money(price));
  setText('listRating', stats.rating.label);
  setText('listTotalCost', money(stats.total));
  setText('listMargin', (stats.profit>=0?'+':'')+money(stats.profit));
  setText('listMarginPct', `${stats.marginPct.toFixed(1)}%`);
  setText('listMarkupPct', `${stats.markupPct>=0?'+':''}${stats.markupPct.toFixed(1)}%`);
  const profitCard = document.getElementById('listProfitCard');
  if(profitCard) profitCard.className = `listing-metric ${stats.profit>=0?'good':'warn'}`;
  const rating = document.getElementById('listRating');
  if(rating && rating.style){
    const color = stats.rating.tone==='good' ? 'rgba(47,184,124,.28)' : stats.rating.tone==='bad' ? 'rgba(251,113,133,.28)' : stats.rating.tone==='warn' ? 'rgba(245,158,11,.28)' : 'rgba(92,134,255,.28)';
    rating.style.borderColor = color;
  }
}
function updateListMargin(purchasePrice){
  const el = document.getElementById('listMargin');
  if(!el) return;
  const margin = (window._listVal||0) - purchasePrice;
  el.textContent = (margin>=0?'+':'')+money(margin);
  el.style.color = margin>=0 ? 'var(--teal)' : 'var(--red)';
}
function listCarConfirm(carId){
  const price = Math.round(window.listingPrice || window._listVal || 0);
  const allowedPaymentMethods = selectedPaymentMethods('listPay');
  if(!allowedPaymentMethods.length){
    const warn = document.getElementById('listPaymentWarn');
    if(warn) warn.style.display = 'flex';
    notify('Bitte mindestens eine Zahlungsart auswählen.', 'warn');
    return;
  }
  const existing = state.listings[carId];
  state.listings[carId] = {...(existing||{}), price, views:existing?existing.views||0:0, createdDay:existing?existing.createdDay||state.day:state.day, allowedPaymentMethods};
  notify((existing?'Inserat aktualisiert: ':'Fahrzeug inseriert für ')+money(price)+'.', 'info');
  closeModal(); renderAllOpen(); scheduleSave();
}
function unlistCar(carId){
  delete state.listings[carId];
  state.offers = state.offers.filter(o=>o.carId!==carId);
  cleanupTransientCustomers();
  renderAllOpen(); scheduleSave();
}
/* =============================== VERTRÄGE (FINANZIERUNG + LEASING) =============================== */
let selectedContractId = null;
let contractViewFilter = 'active';
let contractTypeFilter = 'all';
let contractSortMode = 'nextDue';
let contractSearchQuery = '';
let contractShowArchive = false;
function openContract(id){ selectedContractId = id; renderPageContent(); }
function setContractViewFilter(filter){ contractViewFilter = filter || 'active'; selectedContractId = null; renderPageContent(); }
function setContractTypeFilter(value){ contractTypeFilter = value || 'all'; selectedContractId = null; renderPageContent(); }
function setContractSortMode(value){ contractSortMode = value || 'nextDue'; renderPageContent(); }
function setContractSearch(value){ contractSearchQuery = value || ''; selectedContractId = null; renderPageContent(); }
function toggleContractArchiveView(){ contractShowArchive = !contractShowArchive; selectedContractId = null; renderPageContent(); }
function isContractCompleted(contract){
  return !!contract && (contract.closed || String(contract.status||'').toLowerCase().includes('abgeschlossen'));
}
function isContractDefaulted(contract){
  const status = String(contract?.status||'').toLowerCase();
  return status.includes('ausfall') || status.includes('ausgefallen') || status.includes('zurückgenommen') || status.includes('zurueckgenommen') || status.includes('vergleich');
}
function canArchiveContract(contract){
  if(!contract || contract.archived || contract.openClaim) return false;
  const status = String(contract.status||'').toLowerCase();
  const terminalDefault = isContractDefaulted(contract) && (contract.closed || status.includes('ausfall') || status.includes('ausgefallen'));
  return isContractCompleted(contract) || terminalDefault;
}
function contractRow(kind, contract){
  const isFin = kind==='fin';
  const vehicle = isFin ? contract.carDesc : `${contract.carSnapshot?.brand||''} ${contract.carSnapshot?.model||''}`.trim();
  const claim = contract.openClaim;
  const claimState = claim ? claimVisualState(claim) : null;
  const completed = isContractCompleted(contract);
  const defaulted = isContractDefaulted(contract);
  const overdue = !!claim;
  const paid = contractPaymentBreakdown(contract);
  const openAmount = claim ? claimTotal(claim) : 0;
  const nextDue = completed ? 999999 : (contract.nextDueDay||999999);
  const remaining = isFin ? (contract.monthsRemaining||0) : Math.max(0,(contract.months||0)-(contract.monthsElapsed||0));
  const status = claim ? `${claimState.label}: ${claimStatusLabel(claim)}` : (contract.status || (completed?'Abgeschlossen':'Aktiv'));
  const category = overdue ? 'overdue' : (defaulted ? 'default' : (completed ? 'completed' : 'active'));
  return {id:`${kind}:${contract.id}`, kind, contract, customer:contract.customerName||'', vehicle, type:isFin?'Finanzierung':'Leasing', status, category, claimState, actionRequired:claimNeedsAction(claim), paid:paid.total, openAmount, nextDue, remaining, archived:!!contract.archived};
}
function contractRows(){
  return [
    ...(state.receivables||[]).filter(r=>inActiveBranch(r)).map(r=>contractRow('fin', r)),
    ...(state.leaseContracts||[]).filter(l=>inActiveBranch(l)).map(l=>contractRow('lea', l)),
  ];
}
function filteredContractRows(){
  const q = contractSearchQuery.trim().toLowerCase();
  let rows = contractRows().filter(r=>contractShowArchive ? r.archived : !r.archived);
  if(contractViewFilter!=='all') rows = rows.filter(r=>r.category===contractViewFilter);
  if(contractTypeFilter!=='all') rows = rows.filter(r=>r.kind===contractTypeFilter);
  if(q) rows = rows.filter(r=>`${r.customer} ${r.vehicle} ${r.status} ${r.type}`.toLowerCase().includes(q));
  rows.sort((a,b)=>{
    if(contractSortMode==='open') return b.openAmount-a.openAmount || a.nextDue-b.nextDue;
    if(contractSortMode==='paid') return b.paid-a.paid;
    if(contractSortMode==='remaining') return a.remaining-b.remaining;
    return a.nextDue-b.nextDue || b.openAmount-a.openAmount;
  });
  return rows;
}
function renderContracts(){
  const allRows = contractRows();
  const visibleRows = filteredContractRows();
  const activeFinancings = allRows.filter(r=>!r.archived && r.kind==='fin' && r.category==='active');
  const activeLeases = allRows.filter(r=>!r.archived && r.kind==='lea' && r.category==='active');
  const completedRows = allRows.filter(r=>!r.archived && r.category==='completed');
  const defaultRows = allRows.filter(r=>!r.archived && r.category==='default');
  const overdueRows = allRows.filter(r=>!r.archived && r.category==='overdue');
  const recurringMonthly = activeFinancings.reduce((s,r)=>s+(r.contract.monthlyPayment||0),0) + activeLeases.reduce((s,r)=>s+(r.contract.monthlyPayment||0),0);
  const claims = activeClaims().filter(x=>!x.contract.archived);
  const actionableClaims = claims.filter(x=>claimNeedsAction(x.claim));
  const claimSum = claims.reduce((s,x)=>s+claimTotal(x.claim),0);
  if(allRows.length===0){
    return `<h2 class="section-title">Verträge</h2><div class="empty-state"><div class="ic">📑</div>Noch keine Finanzierungs- oder Leasingverträge. Diese entstehen automatisch, sobald Kunden mit Finanzierung oder Leasing kaufen.</div>`;
  }
  if(!selectedContractId || !visibleRows.some(r=>r.id===selectedContractId)) selectedContractId = visibleRows[0]?.id || null;
  const tabs = [
    ['active','Aktiv', allRows.filter(r=>!r.archived && r.category==='active').length],
    ['overdue','Überfällig', overdueRows.length],
    ['completed','Abgeschlossen', completedRows.length],
    ['default','Forderungsausfälle', defaultRows.length],
    ['all','Alle', allRows.filter(r=>!r.archived).length],
  ].map(([key,label,count])=>`<button class="pill-tab ${contractViewFilter===key?'active':''}" onclick="setContractViewFilter('${key}')">${label} ${count}</button>`).join('');
  const listHtml = visibleRows.map(contractListItem).join('') || `<div class="empty-state" style="padding:28px 10px;"><div class="ic">📑</div>Keine Verträge für diese Filter.</div>`;
  return `
    <h2 class="section-title">Verträge</h2>
    <p class="subtle">${activeFinancings.length} aktive Finanzierungen · ${activeLeases.length} aktive Leasingverträge · ${overdueRows.length} überfällig · ${completedRows.length} abgeschlossen · ${defaultRows.length} Forderungsausfälle · wiederkehrend <b style="color:var(--brass);">${money(recurringMonthly)}/Monat</b></p>
    <div class="stat-grid" style="margin-bottom:12px;">
      <div class="stat-card"><div class="lbl">Aktiv</div><div class="num">${activeFinancings.length+activeLeases.length}</div></div>
      <div class="stat-card"><div class="lbl">Offene Forderungen</div><div class="num" style="color:${claimSum?'var(--crimson)':'var(--teal)'};">${money(claimSum)}</div></div>
      <div class="stat-card"><div class="lbl">Aktionen nötig</div><div class="num" style="color:${actionableClaims.length?'var(--crimson)':'var(--teal)'};">${actionableClaims.length}</div></div>
      <div class="stat-card"><div class="lbl">Monatlich</div><div class="num">${money(recurringMonthly)}</div></div>
    </div>
    ${claims.length?`<div class="notice ${actionableClaims.length?'warn':''}" style="display:block;">${actionableClaims.length?'⚠ Aktion erforderlich':'⏳ Wartestatus'} · ${claims.length} offene Forderung(en) · Gesamt ${money(claimSum)} · ${actionableClaims.length} aktuell notwendige Aktion(en).</div>`:''}
    <div class="pill-tabs">${tabs}</div>
    <div class="notice" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <input type="search" placeholder="Kunde oder Fahrzeug suchen" value="${escapeAttr(contractSearchQuery)}" oninput="setContractSearch(this.value)" style="min-width:220px;flex:1;">
      <select onchange="setContractTypeFilter(this.value)"><option value="all" ${contractTypeFilter==='all'?'selected':''}>Alle Arten</option><option value="fin" ${contractTypeFilter==='fin'?'selected':''}>Finanzierung</option><option value="lea" ${contractTypeFilter==='lea'?'selected':''}>Leasing</option></select>
      <select onchange="setContractSortMode(this.value)"><option value="nextDue" ${contractSortMode==='nextDue'?'selected':''}>Nächste Rate</option><option value="open" ${contractSortMode==='open'?'selected':''}>Offene Forderung</option><option value="paid" ${contractSortMode==='paid'?'selected':''}>Erhaltener Betrag</option><option value="remaining" ${contractSortMode==='remaining'?'selected':''}>Restlaufzeit</option></select>
      <button class="btn btn-ghost btn-sm" onclick="toggleContractArchiveView()">${contractShowArchive?'Archiv ausblenden':'Archiv anzeigen'}</button>
    </div>
    <div class="mailbox-layout">
      <div class="convo-list">${listHtml}</div>
      <div class="chat-thread">${renderContractDetail(selectedContractId)}</div>
    </div>
  `;
}
function contractListItem(row){
  const stateInfo = row.claimState || (row.category==='completed' ? claimVisualState(null) : null);
  const color = stateInfo ? stateInfo.color : row.category==='default' ? 'var(--crimson)' : 'var(--ink-2)';
  const style = stateInfo
    ? `border-color:${stateInfo.border};background:${stateInfo.background};`
    : (row.category==='default'?'border-color:rgba(224,85,92,.28);background:rgba(224,85,92,.055);':'');
  return `<div class="convo-item ${selectedContractId===row.id?'active':''}" onclick="openContract('${row.id}')" style="${style}">
    <div class="top"><span>${escapeHtml(row.customer)}${row.actionRequired?'<span class="badge">!</span>':''}</span><span style="color:${color};font-weight:700;">${escapeHtml(row.type)}</span></div>
    <div class="snippet">${escapeHtml(row.vehicle)} · ${escapeHtml(row.status)}${row.openAmount?` · offen ${money(row.openAmount)}`:''}<br>Nächste Rate: ${row.nextDue>=999999?'–':'Tag '+row.nextDue} · Restlaufzeit: ${row.remaining} Monate · erhalten ${money(row.paid)}${row.archived?' · Archiv':''}</div>
  </div>`;
}
function archiveContractPrompt(kind, id){
  const contract = kind==='fin'
    ? (state.receivables||[]).find(x=>x.id===id)
    : (state.leaseContracts||[]).find(x=>x.id===id);
  if(!contract || !canArchiveContract(contract)){
    notify('Dieser Vertrag kann nicht entfernt werden. Nur abgeschlossene Verträge oder endgültige Forderungsausfälle sind archivierbar.', 'warn');
    return;
  }
  const isDefault = isContractDefaulted(contract);
  showModal(`
    <h2 class="section-title">${isDefault?'Forderungsausfall wirklich aus der Übersicht entfernen?':'Abgeschlossenen Vertrag wirklich löschen?'}</h2>
    <p class="subtle">${isDefault?'Der Verlust bleibt in Statistiken, Unternehmenswert und Business Insights erhalten.':'Dieser Vertrag wird aus der Vertragsübersicht entfernt. Bereits gebuchte Einnahmen und Statistiken bleiben erhalten.'}</p>
    <div class="notice warn" style="display:block;">Es wird technisch archiviert, nicht rückwirkend aus Buchungen gelöscht.</div>
    <div class="row-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-danger" onclick="archiveContract('${kind}','${id}')">Aus Übersicht entfernen</button>
    </div>
  `);
}
function archiveContract(kind, id){
  const contract = kind==='fin'
    ? (state.receivables||[]).find(x=>x.id===id)
    : (state.leaseContracts||[]).find(x=>x.id===id);
  if(!contract || !canArchiveContract(contract)) return;
  contract.archived = true;
  contract.archivedDay = state.day;
  closeModal();
  selectedContractId = null;
  notify('Vertrag wurde archiviert. Buchungen und Statistiken bleiben erhalten.', 'info');
  renderAllOpen(); scheduleSave();
}
function restoreArchivedContract(kind, id){
  const contract = kind==='fin'
    ? (state.receivables||[]).find(x=>x.id===id)
    : (state.leaseContracts||[]).find(x=>x.id===id);
  if(!contract) return;
  contract.archived = false;
  notify('Archivierter Vertrag ist wieder sichtbar.', 'good');
  renderAllOpen(); scheduleSave();
}
function renderClaimBox(kind, contract){
  const claim = contract.openClaim;
  if(!claim && (contract.closed || String(contract.status||'').toLowerCase().includes('abgeschlossen'))){
    return `<div class="notice good">✅ Vertragsstatus: <b>Abgeschlossen</b>. Der Vertrag bleibt in der Historie sichtbar.</div>`;
  }
  if(!claim) return `<div class="notice good">Alle Raten sind aktuell. Nächste Rate: Tag ${contract.nextDueDay}.</div>`;
  normalizeClaimFees(claim);
  const fees = claimFeesByBucket(claim);
  const nextLevel = Math.min((claim.dunningLevel||0)+1, DUNNING_STEPS.length-1);
  const daysLate = Math.max(0, state.day-(claim.dueDay||state.day));
  const dunningLocked = (claim.dunningLevel||0)>0 && state.day < (claim.nextActionDay||0);
  const primaryActionLabel = (claim.dunningLevel||0)>=7 ? 'Gerichtsergebnis prüfen' : `${dunningStep(nextLevel).label} senden`;
  const visual = claimVisualState(claim);
  return `
    <div class="notice ${visual.tone==='action'?'warn':''}" style="border-color:${visual.border};background:${visual.background};display:block;">
      <b style="color:${visual.color};">${visual.label}</b><br>
      Status: ${claimStatusLabel(claim)} · ${daysLate} Tag(e) überfällig · ${claimActionLabel(claim)}<br>
      Offene Raten: <b>${claim.openRates||1}</b> · offene Rate(n): ${money(claim.baseAmount||0)} · Mahngebühren: ${money(fees.dunning)} · Inkasso: ${money(fees.collection)} · Gericht: ${money(fees.court)} · <b>aktuell zu zahlen: ${money(claimTotal(claim))}</b>
      ${state.greedyDunningMode?`<br><span style="color:var(--crimson);font-weight:700;">GEIZIG-Modus aktiv: höhere Zahlungswahrscheinlichkeit, aber stärkerer Zufriedenheits- und Rufverlust.</span>`:''}
      ${dunningLocked?`<br><span style="color:var(--ink-1);">Nächste Mahnstufe ist gesperrt bis Tag ${claim.nextActionDay}.</span>`:''}
    </div>
    <div class="row-actions" style="margin:10px 0 14px;">
      <button class="btn btn-primary btn-sm" onclick="sendDunning('${kind}','${contract.id}')" ${(dunningLocked || (!claim.actionRequired && claim.nextActionDay>state.day))?'disabled':''}>${primaryActionLabel}</button>
      <button class="btn btn-ghost btn-sm" onclick="grantPaymentDeferral('${kind}','${contract.id}')">Zahlungsaufschub</button>
      <button class="btn btn-danger btn-sm" onclick="forceContractEscalation('${kind}','${contract.id}')" ${dunningLocked?'disabled':''}>Konsequent eskalieren</button>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Forderungsverlauf</h3>
    <table class="tbl"><thead><tr><th>Tag</th><th>Ereignis</th></tr></thead><tbody>${(claim.history||[]).map(h=>`<tr><td>${h.day}</td><td>${h.text}</td></tr>`).join('')}</tbody></table>
  `;
}
function contractPaymentBreakdown(contract){
  const hist = contract.paymentHistory || [];
  const rates = hist.reduce((s,p)=>s+(p.amount||0),0);
  const fees = hist.reduce((s,p)=>s+(p.fee||0),0);
  return {rates, fees, total: rates+fees};
}
function renderContractPaymentSummary(contract){
  const paid = contractPaymentBreakdown(contract);
  const claim = contract.openClaim;
  const visual = claimVisualState(claim);
  const fees = claim ? claimFeesByBucket(claim) : {dunning:0, collection:0, court:0, total:0};
  return `
    <h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Zahlungsstand</h3>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Gezahlte Raten</div><div class="num" style="color:var(--teal);">${money(paid.rates)}</div></div>
      <div class="stat-card"><div class="lbl">Gezahlte Mahngebühren</div><div class="num" style="color:${paid.fees?'var(--brass)':'var(--ink-1)'};">${money(paid.fees)}</div></div>
      <div class="stat-card"><div class="lbl">Gesamt erhalten</div><div class="num" style="color:var(--teal);">${money(paid.total)}</div></div>
      <div class="stat-card"><div class="lbl">Aktuell offen</div><div class="num" style="color:${claim?visual.color:'var(--teal)'};">${claim?money(claimTotal(claim)):'0 €'}</div></div>
    </div>
    ${claim?`<div class="notice ${visual.tone==='action'?'warn':''}" style="display:block;border-color:${visual.border};background:${visual.background};">Aktuelle Forderung aufgeteilt: offene Rate(n) <b>${money(claim.baseAmount||0)}</b> + Mahngebühren <b>${money(fees.dunning)}</b> + Inkasso <b>${money(fees.collection)}</b> + Gericht <b>${money(fees.court)}</b> = <b>${money(claimTotal(claim))}</b>.</div>`:''}
  `;
}
function renderPaymentHistory(contract){
  const hist = contract.paymentHistory || [];
  if(!hist.length) return '<p class="subtle">Noch keine Zahlungen erhalten.</p>';
  return `<table class="tbl"><thead><tr><th>Tag</th><th>Ereignis</th><th>Rate</th><th>Gebühr</th><th>Gesamt</th></tr></thead><tbody>${hist.map(p=>{
    const total = (p.amount||0)+(p.fee||0);
    return `<tr><td>${p.day}</td><td>${p.label||'Zahlung'}</td><td style="color:var(--teal);font-family:var(--font-m);">+${money(p.amount||0)}</td><td style="color:${(p.fee||0)>0?'var(--brass)':'var(--ink-2)'};font-family:var(--font-m);">${money(p.fee||0)}</td><td style="color:var(--teal);font-family:var(--font-m);font-weight:800;">+${money(total)}</td></tr>`;
  }).join('')}</tbody></table>`;
}
function lastPaymentAmount(contract){
  const p = (contract.paymentHistory||[])[0];
  return p ? (p.amount||0)+(p.fee||0) : (contract.monthlyPayment||0);
}
function financingInterestReceived(contract){
  const paid = contractPaymentBreakdown(contract).rates;
  return Math.max(0, Math.round(paid - (contract.principal||0)));
}
function completeFinancingContract(contract){
  if(!contract || contract.completionPopupShown) return;
  if(contract.openClaim || (contract.dunningLevel||0)>0) return;
  if(!(contract.monthsRemaining<=0 || contract.remainingPrincipal<=0)) return;
  contract.remainingPrincipal = 0;
  contract.monthsRemaining = 0;
  contract.status = 'Abgeschlossen';
  contract.closed = true;
  contract.completedDay = state.day;
  contract.completionPopupShown = true;
  showContractCompletionModal('fin', contract);
}
function completeLeaseContract(lease){
  if(!lease || lease.completionPopupShown) return;
  if(lease.openClaim || (lease.dunningLevel||0)>0) return;
  lease.status = 'Abgeschlossen';
  lease.closed = true;
  lease.completedDay = state.day;
  lease.completionPopupShown = true;
  showContractCompletionModal('lea', lease);
}
function showContractCompletionModal(kind, contract){
  const isFin = kind==='fin';
  const title = isFin ? 'Finanzierung vollständig abbezahlt' : 'Leasingvertrag erfolgreich abgeschlossen';
  const vehicle = isFin ? contract.carDesc : `${contract.carSnapshot.brand} ${contract.carSnapshot.model}`;
  const intro = isFin
    ? `${escapeHtml(contract.customerName)} hat die Finanzierung für den ${escapeHtml(vehicle)} vollständig abbezahlt.`
    : `Der Leasingvertrag für den ${escapeHtml(vehicle)} mit ${escapeHtml(contract.customerName)} wurde erfolgreich abgeschlossen.`;
  const stats = isFin ? [
    ['Kunde', escapeHtml(contract.customerName)],
    ['Fahrzeug', escapeHtml(vehicle)],
    ['Finanzierungsbetrag', money(contract.principal||0)],
    ['Laufzeit', `${contract.months||0} Monate`],
    ['Gezahlte Gesamtsumme', money(contractPaymentBreakdown(contract).total)],
    ['Erhaltene Zinsen', money(financingInterestReceived(contract))],
    ['Letzte Rate', money(lastPaymentAmount(contract))],
    ['Abschlussdatum', `Tag ${contract.completedDay||state.day}`],
    ['Vertragsstatus', 'Abgeschlossen'],
  ] : [
    ['Kunde', escapeHtml(contract.customerName)],
    ['Fahrzeug', escapeHtml(vehicle)],
    ['Leasingdauer', `${contract.months||0} Monate`],
    ['Gezahlte Gesamtsumme', money(contractPaymentBreakdown(contract).total)],
    ['Letzte Leasingrate', money(lastPaymentAmount(contract))],
    ['Vertragsende', `Tag ${contract.completedDay||state.day}`],
    ['Vertragsstatus', 'Abgeschlossen'],
  ];
  showModal(`<div class="contract-complete-shell">
    <div class="contract-complete-hero">
      <div class="contract-complete-icon">✅</div>
      <div><b>${title}</b><small>${intro}</small></div>
    </div>
    <div class="contract-complete-grid">${stats.map(([label,value])=>`<div class="stat-card"><div class="lbl">${label}</div><div class="num" style="font-size:15px;">${value}</div></div>`).join('')}</div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal(); selectedContractId='${kind}:${contract.id}'; navigateTo('contracts');">OK</button>
  </div>`, 'contract-complete-modal');
  const overlay = document.getElementById('modalOverlay');
  if(overlay) overlay.onclick = ()=>{};
}
function renderContractActions(kind, contract){
  const actions = [];
  if(contract.archived){
    actions.push(`<button class="btn btn-primary btn-sm" onclick="restoreArchivedContract('${kind}','${contract.id}')">Aus Archiv wiederherstellen</button>`);
  } else if(canArchiveContract(contract)){
    actions.push(`<button class="btn btn-danger btn-sm" onclick="archiveContractPrompt('${kind}','${contract.id}')">${isContractDefaulted(contract)?'Forderungsausfall entfernen':'Abgeschlossenen Vertrag löschen'}</button>`);
  }
  if(!actions.length) return '';
  return `<h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Aktionen</h3><div class="row-actions">${actions.join('')}</div>`;
}
function renderContractDetail(id){
  if(!id) return `<div class="empty-state"><div class="ic">📑</div>Vertrag auswählen</div>`;
  const [kind, realId] = id.split(':');
  if(kind==='fin'){
    const f = (state.receivables||[]).find(x=>x.id===realId);
    if(!f) return '';
    return `
    <div class="chat-head">
      <div><div style="font-family:var(--font-d);font-weight:800;font-size:15px;">${f.customerName}</div>
      <div class="subtle" style="margin:0;">${f.carDesc} · Finanzierungsvertrag</div></div>
      <span class="chip" style="color:${f.openClaim?'var(--crimson)':((f.status==='aktuell'||f.closed)?'var(--teal)':'var(--crimson)')};">${f.openClaim?claimStatusLabel(f.openClaim):f.status}</span>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:2px 0 8px;">Vertragsübersicht</h3>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Kaufpreis</div><div class="num">${money(f.purchasePrice)}</div></div>
      <div class="stat-card"><div class="lbl">Anzahlung</div><div class="num">${money(f.downPayment)}</div></div>
      <div class="stat-card"><div class="lbl">Restschuld</div><div class="num">${money(f.remainingPrincipal)}</div></div>
      <div class="stat-card"><div class="lbl">Monatsrate</div><div class="num">${money(f.monthlyPayment)}</div></div>
      <div class="stat-card"><div class="lbl">Sollzins</div><div class="num">${(f.nominalRate*100).toFixed(1)}%</div></div>
      <div class="stat-card"><div class="lbl">Eff. Jahreszins</div><div class="num">${(f.effectiveRate*100).toFixed(1)}%</div></div>
      <div class="stat-card"><div class="lbl">Restlaufzeit</div><div class="num">${f.monthsRemaining} Monate</div></div>
      <div class="stat-card"><div class="lbl">Bereits erhalten</div><div class="num">${money(f.totalPaid||0)}</div></div>
    </div>
    <p class="subtle">Vertragsbeginn: Tag ${f.startDay} · ${f.closed?`Abschluss: Tag ${f.completedDay||state.day}`:`Nächste Rate fällig: Tag ${f.nextDueDay}`} · Mahnstufe: ${f.dunningLevel||0}/${DUNNING_STEPS.length-1}</p>
    ${renderContractPaymentSummary(f)}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Mahnungen / Forderungen</h3>
    ${renderClaimBox('fin', f)}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Zahlungshistorie</h3>
    ${renderPaymentHistory(f)}
    ${renderContractActions('fin', f)}
    `;
  }
  const l = (state.leaseContracts||[]).find(x=>x.id===realId);
  if(!l) return '';
  return `
    <div class="chat-head">
      <div><div style="font-family:var(--font-d);font-weight:800;font-size:15px;">${l.customerName}</div>
      <div class="subtle" style="margin:0;">${l.carSnapshot.brand} ${l.carSnapshot.model} · Leasingvertrag</div></div>
      <span class="chip" style="color:${l.openClaim?'var(--crimson)':'var(--teal)'};">${l.openClaim?claimStatusLabel(l.openClaim):l.status}</span>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:2px 0 8px;">Vertragsübersicht</h3>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Leasingrate</div><div class="num">${money(l.monthlyPayment)}</div></div>
      <div class="stat-card"><div class="lbl">Restwert</div><div class="num">${money(l.residual)}</div></div>
      <div class="stat-card"><div class="lbl">Laufzeit</div><div class="num">${l.monthsElapsed}/${l.months} Monate</div></div>
      <div class="stat-card"><div class="lbl">km-Limit/Jahr</div><div class="num">${l.mileageLimitPerYear?l.mileageLimitPerYear.toLocaleString('de-DE'):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Mehrkilometer</div><div class="num">${l.mileageOverageKm.toLocaleString('de-DE')} km</div></div>
      <div class="stat-card"><div class="lbl">Schäden</div><div class="num">${l.damageEvents}</div></div>
    </div>
    <p class="subtle">Vertragsbeginn: Tag ${l.createdDay} · ${l.closed?`Vertragsende: Tag ${l.completedDay||state.day}`:`Nächste Rate fällig: Tag ${l.nextDueDay}`}</p>
    ${renderContractPaymentSummary(l)}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Mahnungen / Forderungen</h3>
    ${renderClaimBox('lea', l)}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Zahlungshistorie</h3>
    ${renderPaymentHistory(l)}
    ${renderContractActions('lea', l)}
  `;
}

/* =============================== CRM: KUNDEN =============================== */
let selectedCustomerId = null;
let customerFilter = 'all';
function openCustomerProfile(custId){
  selectedCustomerId = custId;
  renderPageContent();
}
function setCustomerFilter(filter){
  customerFilter = filter || 'all';
  selectedCustomerId = null;
  renderPageContent();
}
function satisfactionColor(v){
  if(v>=75) return 'var(--teal)';
  if(v>=45) return 'var(--brass)';
  return 'var(--red)';
}
function customerStatus(cust){
  const hasFinancing = (state.receivables||[]).some(r=>r.customerId===cust.id);
  const hasLease = (state.leaseContracts||[]).some(l=>l.customerId===cust.id);
  const hasPurchase = (cust.purchases||[]).length>0;
  if(hasFinancing) return {key:'financed', label:'Finanziert', color:'var(--violet)', rank:1};
  if(hasLease) return {key:'leased', label:'Geleast', color:'var(--brass)', rank:2};
  if(hasPurchase) return {key:'bought', label:'Gekauft', color:'var(--emerald)', rank:3};
  return {key:'other', label:'Kunde', color:'var(--ink-2)', rank:4};
}
function renderCustomers(){
  cleanupTransientCustomers();
  const ids = Object.keys(state.customers).filter(id=>isRetainedCustomer(state.customers[id]));
  if(ids.length===0){
    return `<h2 class="section-title">Kunden</h2><div class="empty-state"><div class="ic">👤</div>Noch keine gespeicherten Kunden. Interessenten ohne Kauf werden automatisch bereinigt; Käufer sowie Finanzierungs- und Leasingkunden bleiben hier erhalten.</div>`;
  }
  const all = ids.map(id=>state.customers[id]);
  const counts = {
    all: all.length,
    financed: all.filter(c=>customerStatus(c).key==='financed').length,
    leased: all.filter(c=>customerStatus(c).key==='leased').length,
    bought: all.filter(c=>customerStatus(c).key==='bought').length,
  };
  const list = all
    .filter(c=>customerFilter==='all' || customerStatus(c).key===customerFilter)
    .sort((a,b)=>{
      const sa = customerStatus(a), sb = customerStatus(b);
      return sa.rank-sb.rank || (b.lastContactDay||0)-(a.lastContactDay||0);
    });
  if(!list.length) selectedCustomerId = null;
  else if(!selectedCustomerId || !list.some(c=>c.id===selectedCustomerId)) selectedCustomerId = list[0].id;
  const tabs = [
    ['all','Alle',counts.all],
    ['financed','Finanziert',counts.financed],
    ['leased','Geleast',counts.leased],
    ['bought','Gekauft',counts.bought],
  ].map(([key,label,count])=>`<button class="pill-tab ${customerFilter===key?'active':''}" onclick="setCustomerFilter('${key}')">${label} ${count}</button>`).join('');
  const listHtml = list.map(cust=>{
    const activeThread = state.offers.find(o=>o.customerId===cust.id);
    const status = customerStatus(cust);
    return `<div class="convo-item ${selectedCustomerId===cust.id?'active':''}" onclick="openCustomerProfile('${cust.id}')">
      <div class="top"><span>${cust.name}${activeThread?'<span class="unread-dot"></span>':''}</span><span style="color:${status.color};font-weight:800;">${status.label}</span></div>
      <div class="snippet">${cust.purchases.length}× gekauft · ${cust.persona} · Zufriedenheit ${cust.satisfaction}/100</div>
    </div>`;
  }).join('') || `<div class="empty-state" style="padding:28px 10px;"><div class="ic">👤</div>Keine Kunden in dieser Kategorie.</div>`;
  return `
    <h2 class="section-title">Kunden</h2>
    <p class="subtle">${ids.length} Käufer, Finanzierungs- oder Leasingkunden in Ihrer Kartei</p>
    <div class="pill-tabs">${tabs}</div>
    <div class="mailbox-layout">
      <div class="convo-list">${listHtml}</div>
      <div class="chat-thread">${renderCustomerDetail(selectedCustomerId)}</div>
    </div>
  `;
}
function renderCustomerDetail(custId){
  const cust = state.customers[custId];
  if(!cust) return `<div class="empty-state"><div class="ic">👤</div>Kunde auswählen</div>`;
  const activeOffer = state.offers.find(o=>o.customerId===custId);
  const activeWish = state.searchOrders.find(o=>o.customerId===custId && o.status==='open');
  const allMessages = (cust.conversationLog||[]).concat(activeOffer?(activeOffer.messages||[]):[]);
  const totalProfit = cust.purchases.reduce((s,p)=>s+p.profit,0);
  return `
    <div class="chat-head">
      <div>
        <div style="font-family:var(--font-d);font-weight:800;font-size:15px;">${cust.name}</div>
        <div class="subtle" style="margin:0;">${cust.email} · ${cust.phone}</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:flex-end;">
        <div class="spec-row" style="margin:0;">
          <span class="chip">${cust.persona}</span>
          <span class="chip">💼 ${cust.job}</span>
          <span class="chip">Bonität ${cust.creditScore}/100</span>
          <span class="chip">Zahlung zuletzt: ${cust.financingStatus}</span>
        </div>
        <button class="btn btn-danger btn-sm" onclick="deleteCustomerProfile('${cust.id}')">Löschen</button>
      </div>
    </div>
    <div class="stat-grid" style="margin-bottom:14px;">
      <div class="stat-card">
        <div class="lbl">Zufriedenheit</div>
        <div class="num" style="color:${satisfactionColor(cust.satisfaction)};">${cust.satisfaction}/100</div>
        <div class="progress"><div style="width:${cust.satisfaction}%;background:${satisfactionColor(cust.satisfaction)};"></div></div>
      </div>
      <div class="stat-card"><div class="lbl">Käufe gesamt</div><div class="num">${cust.purchases.length}</div></div>
      <div class="stat-card"><div class="lbl">Umsatz gesamt</div><div class="num">${money(cust.totalSpent||0)}</div></div>
      <div class="stat-card"><div class="lbl">Budget-Schätzung</div><div class="num">${money(cust.budgetEstimate||0)}</div></div>
    </div>
    <div class="spec-row" style="margin-bottom:14px;">
      ${cust.preferredBrands.length? cust.preferredBrands.map(b=>`<span class="chip">${b}</span>`).join('') : '<span class="chip">Noch keine bevorzugten Marken</span>'}
    </div>
    ${activeOffer?`<div class="notice good">💬 Aktive Unterhaltung läuft – <a style="color:var(--brass);cursor:pointer;" onclick="navigateTo('mailbox');openConversation('${activeOffer.id}')">im Postfach öffnen</a></div>`:''}
    ${activeWish?`<div class="notice">🔍 Offener Suchauftrag: ${activeWish.desc}</div>`:''}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:14px 0 8px;">Kaufhistorie</h3>
    ${cust.purchases.length? `<table class="tbl"><thead><tr><th>Tag</th><th>Fahrzeug</th><th>Preis</th><th>Marge</th></tr></thead><tbody>
      ${cust.purchases.slice().reverse().map(p=>`<tr><td>${p.day}</td><td>${p.brand} ${p.model} (${p.year})</td><td>${money(p.price)}</td><td style="color:${p.profit>=0?'var(--teal)':'var(--red)'};">${p.profit>=0?'+':''}${money(p.profit)}</td></tr>`).join('')}
    </tbody></table>${totalProfit?`<p class="subtle" style="margin-top:8px;">Gesamtmarge mit diesem Kunden: <b style="color:${totalProfit>=0?'var(--teal)':'var(--red)'};">${totalProfit>=0?'+':''}${money(totalProfit)}</b></p>`:''}` : '<p class="subtle">Noch keine abgeschlossenen Käufe.</p>'}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:16px 0 8px;">Gesprächsverlauf</h3>
    <div class="chat-messages" style="max-height:26vh;">
      ${allMessages.length? allMessages.map(m=>`<div class="bubble ${m.from}">${m.text}<div style="font-size:10px;color:var(--ink-2);margin-top:4px;">Tag ${m.day}</div></div>`).join('') : '<p class="subtle">Noch keine Nachrichten.</p>'}
    </div>
  `;
}
function deleteCustomerProfile(custId){
  const cust = state.customers[custId];
  if(!cust) return;
  if(!confirm(`${cust.name} aus der Kundenkartei löschen? Bestehende Verträge und Buchungen bleiben erhalten.`)) return;
  delete state.customers[custId];
  selectedCustomerId = null;
  notify(`${cust.name} wurde aus der Kundenkartei gelöscht.`, 'info');
  renderAllOpen(); scheduleSave();
}

/* =============================== FAHRZEUGANKAUF UI =============================== */
function openPurchaseRequest(id){ selectedPurchaseRequestId = id; renderPageContent(); }
function renderAcquisition(){
  state.purchaseRequests = state.purchaseRequests || [];
  const visible = activePurchaseRequests().filter(r=>r.status==='open' || r.status==='purchased');
  const open = visible.filter(r=>r.status==='open');
  const purchased = visible.filter(r=>r.status==='purchased');
  if(!visible.length){
    selectedPurchaseRequestId = null;
    return `<h2 class="section-title">Fahrzeugankauf</h2><div class="empty-state"><div class="ic">🤝</div>Aktuell keine Ankaufsanfragen. Gute Bewertungen und Ruf erhöhen die Chance auf hochwertige Angebote.</div>`;
  }
  if(!selectedPurchaseRequestId || !visible.some(r=>r.id===selectedPurchaseRequestId)) selectedPurchaseRequestId = visible[0].id;
  const listHtml = visible.map(r=>{
    const margin = r.car.marketValue-r.wishPrice;
    const bought = r.status==='purchased';
    return `<div class="convo-item ${selectedPurchaseRequestId===r.id?'active':''}" onclick="openPurchaseRequest('${r.id}')">
      <div class="top"><span>${r.sellerName}</span><span style="color:${bought?'var(--emerald)':(margin>=0?'var(--emerald)':'var(--crimson)')};font-weight:800;">${bought?'Gekauft':money(r.wishPrice)}</span></div>
      <div class="snippet">${r.car.brand} ${r.car.model} · ${bought?`gekauft für ${money(r.purchasedPrice||r.car.purchasePrice||0)}`:`${r.personaLabel} · Potenzial ${margin>=0?'+':''}${money(margin)}`}</div>
    </div>`;
  }).join('');
  return `
    <h2 class="section-title">Fahrzeugankauf</h2>
    <p class="subtle">${open.length} offene Ankaufsanfrage(n) · ${purchased.length} gekaufte Vorgänge. Gekaufte Chats bleiben erhalten, bis Sie sie löschen.</p>
    <div class="mailbox-layout">
      <div class="convo-list">${listHtml}</div>
      <div class="chat-thread">${renderPurchaseRequestDetail(selectedPurchaseRequestId)}</div>
    </div>
  `;
}
function renderPurchaseRequestDetail(id){
  const r = (state.purchaseRequests||[]).find(x=>x.id===id);
  if(!r) return `<div class="empty-state"><div class="ic">🤝</div>Anfrage auswählen</div>`;
  const c = r.car;
  const memory = ensurePurchaseChat(r);
  const bought = r.status==='purchased';
  const issues = r.inspected ? (c.hiddenIssues.length?c.hiddenIssues.join(', '):'keine versteckten Mängel gefunden') : 'erst nach Besichtigung/OBD sichtbar';
  const activeCounter = latestPurchaseCounterOffer(r);
  const bubbles = (r.messages||[]).map((m,idx)=>{
    const counterButton = activeCounter && activeCounter.index===idx && m.from==='seller' && !bought
      ? `<button class="btn btn-primary btn-sm" style="margin-top:9px;width:100%;justify-content:center;" onclick="acceptPurchaseCounterOffer('${r.id}', ${activeCounter.amount})">${money(activeCounter.amount)} akzeptieren</button>`
      : '';
    return `<div class="bubble ${m.from==='player'?'player':'customer'}">${escapeHtml(m.text)}<div style="font-size:10px;color:var(--ink-2);margin-top:4px;">Tag ${m.day}</div>${counterButton}</div>`;
  }).join('');
  const debug = state.chatDebug && r.lastPurchaseChatDebug ? `<div class="notice" style="display:block;margin-top:8px;border-color:rgba(92,134,255,.32);">
    <b>Ankaufschat-Debug</b><br>
    Intent: ${escapeHtml(r.lastPurchaseChatDebug.intent)} · Zustand: ${escapeHtml(r.lastPurchaseChatDebug.conversationState)}<br>
    Offene Frage: ${escapeHtml(r.lastPurchaseChatDebug.openQuestion ? r.lastPurchaseChatDebug.openQuestion.text : 'keine')}<br>
    Geduld: ${r.lastPurchaseChatDebug.patience}<br>
    Empfehlung: ${escapeHtml(r.lastPurchaseChatDebug.nextRecommendedReaction)}
  </div>` : '';
  return `
    ${bought?`<div class="notice good" style="justify-content:center;text-align:center;font-family:var(--font-d);font-size:18px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;color:var(--emerald);border-color:rgba(47,184,124,.5);">Gekauft · ${money(r.purchasedPrice||c.purchasePrice||0)} · Tag ${r.purchasedDay||state.day}</div>`:''}
    <div class="chat-head">
      <div>
        <div style="font-family:var(--font-d);font-weight:800;font-size:15px;">${r.sellerName}</div>
        <div class="subtle" style="margin:0;">${r.sellerType} · ${r.personaLabel} · ${r.photoQuality}</div>
        <div class="customer-profile-strip">
          <span class="chip">${escapeHtml(memory.conversationState)}</span>
          <span class="chip">Geduld ${r.patience}</span>
          <span class="chip">Flex ${Math.round((r.flex||0)*100)}%</span>
        </div>
      </div>
      <span class="chip" style="color:${bought?'var(--emerald)':'var(--brass)'};">${bought?'Gekauft für '+money(r.purchasedPrice||c.purchasePrice||0):'Wunschpreis '+money(r.wishPrice)}</span>
    </div>
    <div class="offer-card" style="display:grid;grid-template-columns:minmax(180px,260px) 1fr;gap:14px;align-items:start;">
      <div>${renderCarPhoto(c)}</div>
      <div>
        <div class="car-name">${c.brand} ${c.model}</div>
        <div class="car-sub">${c.year} · ${c.mileage.toLocaleString('de-DE')} km · ${c.engine} · ${c.transmission}</div>
        <div class="spec-row">
          <span class="chip">${c.power} PS</span><span class="chip">${c.color}</span><span class="chip">TÜV ${c.tuvMonths>0?c.tuvMonths+' Mon.':'abgelaufen'}</span><span class="chip">${r.knownDamage}</span>
        </div>
        <div class="stat-grid" style="margin:10px 0 0;">
          <div class="stat-card"><div class="lbl">Wunschpreis</div><div class="num">${money(r.wishPrice)}</div></div>
          <div class="stat-card"><div class="lbl">Schätzwert</div><div class="num">${money(c.marketValue)}</div></div>
          <div class="stat-card"><div class="lbl">Zustand</div><div class="num">${r.inspected?c.condition+'/100':'unbekannt'}</div></div>
          <div class="stat-card"><div class="lbl">Mängel</div><div class="num" style="font-size:13px;line-height:1.35;">${issues}</div></div>
        </div>
      </div>
    </div>
    <div class="chat-messages" id="purchaseChatMessages">${bubbles}</div>
    ${debug}
    ${bought?'':`<div style="display:flex;gap:8px;margin:10px 0;">
      <input type="text" id="purchaseTextInput" value="${escapeAttr(r.draftText||'')}" placeholder="Nachricht an Verkäufer schreiben..." style="flex:1;padding:9px 12px;border-radius:9px;background:var(--surface);border:1px solid var(--line);color:var(--ink-0);font-size:12.5px;" oninput="updatePurchaseDraft('${r.id}', this.value)" onkeydown="if(event.key==='Enter'){event.preventDefault();sendPurchaseMessage('${r.id}');}">
      <button class="btn btn-primary btn-sm" onclick="sendPurchaseMessage('${r.id}')">Senden</button>
    </div>`}
    <div class="chat-actions">
      ${bought?`
      <button class="btn btn-primary btn-sm" onclick="navigateTo('inventory')">Bestand öffnen</button>
      <button class="btn btn-danger btn-sm" onclick="deletePurchasedRequest('${r.id}')">Eintrag löschen</button>
      `:`
      <button class="btn btn-ghost btn-sm" onclick="inspectPurchaseRequest('${r.id}')">🔍 Besichtigung</button>
      <button class="btn btn-ghost btn-sm" onclick="requestPurchaseInfo('${r.id}','photos')">Bilder anfordern</button>
      <button class="btn btn-ghost btn-sm" onclick="requestPurchaseInfo('${r.id}','history')">Historie</button>
      <button class="btn btn-ghost btn-sm" onclick="requestPurchaseInfo('${r.id}','obd')">OBD-Prüfung</button>
      <button class="btn btn-primary btn-sm" onclick="openPurchaseOfferModal('${r.id}', ${Math.max(300, Math.round(c.marketValue*0.86/10)*10)})">Angebot</button>
      <button class="btn btn-danger btn-sm" onclick="archivePurchaseRequest('${r.id}')">Archivieren</button>
      `}
    </div>
  `;
}
function inspectPurchaseRequest(id){
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r) return;
  r.inspected = true; r.car.inspected = true;
  dealerMsg(r, 'Ich möchte das Fahrzeug besichtigen und technisch prüfen.');
  sellerReply(r, r.car.hiddenIssues.length ? `Bei der Besichtigung fallen folgende Punkte auf: ${r.car.hiddenIssues.join(', ')}.` : 'Die Besichtigung war unauffällig, der Wagen wirkt ehrlich.');
  renderAllOpen(); scrollPurchaseChatToBottom(); scheduleSave();
}
function requestPurchaseInfo(id, type){
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r) return;
  const labels = {photos:'weitere Bilder', history:'Fahrzeughistorie', obd:'OBD-Prüfung'};
  dealerMsg(r, `Bitte senden Sie mir ${labels[type]}.`);
  if(type==='photos'){ r.photosRequested = true; sellerReply(r, `Ich habe zusätzliche Bilder geschickt. Qualität: ${r.photoQuality}.`); }
  if(type==='history'){ r.historyRequested = true; sellerReply(r, Math.random()<0.72?'Servicehistorie ist weitgehend nachvollziehbar.':'Das Serviceheft ist leider nicht vollständig.'); }
  if(type==='obd'){ r.obdRequested = true; r.inspected = true; r.car.inspected = true; sellerReply(r, r.car.hiddenIssues.length?`OBD/Prüfung zeigt: ${r.car.hiddenIssues.join(', ')}.`:'OBD ist sauber, keine relevanten Fehler gespeichert.'); }
  renderAllOpen(); scrollPurchaseChatToBottom(); scheduleSave();
}
function openPurchaseOfferModal(id, suggested){
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r) return;
  showModal(`
    <h2 class="section-title">Ankaufsangebot</h2>
    <p class="subtle">${r.car.brand} ${r.car.model} · Wunschpreis ${money(r.wishPrice)} · Schätzwert ${money(r.car.marketValue)}</p>
    <div class="field">
      <label>Angebot: <span id="purchaseOfferlbl" style="font-family:var(--font-m);color:var(--brass);">${money(suggested)}</span></label>
      <input type="range" min="300" max="${Math.max(r.wishPrice*1.25, r.car.marketValue*1.2)}" step="100" value="${suggested}" oninput="syncFromRange('purchaseOffer', this.value, 300, ${Math.max(r.wishPrice*1.25, r.car.marketValue*1.2)}, '_purchaseOfferVal')" id="purchaseOfferRange">
      <input type="number" min="0" step="100" value="${suggested}" oninput="syncFromNumber('purchaseOffer', this.value, 0, ${Math.max(r.wishPrice*1.5, r.car.marketValue*1.5)}, '_purchaseOfferVal')" id="purchaseOfferNumber">
    </div>
    <div class="row-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="sendPurchaseOffer('${id}', window._purchaseOfferVal||${suggested})">Angebot senden</button>
    </div>
  `);
  window._purchaseOfferVal = suggested;
}
function sendPurchaseOffer(id, amount){
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r) return;
  amount = Math.max(0, Math.round(amount||0));
  r.lastOffer = amount;
  dealerMsg(r, `Ich kann Ihnen ${money(amount)} für den ${r.car.brand} ${r.car.model} anbieten.`);
  const sellerMinimum = Math.round(r.wishPrice*(1-r.flex*0.55)/10)*10;
  const fair = amount / Math.max(1, r.wishPrice);
  const knowledgePenalty = r.persona==='market' ? 0.08 : 0;
  const chance = clamp((fair-0.72)*1.7 + r.flex - knowledgePenalty + (r.inspected?0.05:0), 0.04, 0.96);
  if(amount>=sellerMinimum || Math.random()<chance){
    sellerReply(r, `Einverstanden, zu ${money(amount)} verkaufe ich.`);
    completePrivatePurchase(r, amount);
    return;
  }
  r.patience -= 1;
  if(r.patience<=0 || amount<r.wishPrice*0.65){
    sellerReply(r, 'Das ist mir zu niedrig. Ich suche mir lieber einen anderen Käufer.');
    archivePurchaseRequest(id, true);
    showDropoutModal(
      'purchase',
      'Ankauf abgebrochen',
      `${r.sellerName} ist abgesprungen und sucht sich einen anderen Käufer.`,
      `${r.car.brand} ${r.car.model} · Ihr Angebot: ${money(amount)} · Wunschpreis: ${money(r.wishPrice)}`
    );
    return;
  }
  const counterStep = Math.max(100, Math.round(r.wishPrice*0.03/10)*10);
  const counter = Math.max(sellerMinimum, Math.round((amount+counterStep)/10)*10);
  sellerReply(r, `Für ${money(amount)} gebe ich ihn nicht ab. ${money(counter)} wäre für mich machbar.`);
  closeModal(); renderAllOpen(); scrollPurchaseChatToBottom(); scheduleSave();
}
function acceptPurchaseCounterOffer(id, amount){
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r || r.status!=='open') return;
  const active = latestPurchaseCounterOffer(r);
  if(!active || active.amount !== amount){
    notify('Dieses Gegenangebot ist nicht mehr aktuell.', 'warn');
    renderAllOpen();
    return;
  }
  if(state.cash < amount){
    notify('Nicht genug Kapital für diesen Ankauf.', 'warn');
    return;
  }
  dealerMsg(r, `Einverstanden, wir akzeptieren Ihr Angebot über ${money(amount)}.`);
  sellerReply(r, `Perfekt, dann verkaufe ich den ${r.car.brand} ${r.car.model} für ${money(amount)} an Sie.`);
  completePrivatePurchase(r, amount);
  closeModal();
  renderAllOpen();
  scrollPurchaseChatToBottom();
  scheduleSave();
}
function sendPurchaseMessage(id){
  const input = document.getElementById('purchaseTextInput'); if(!input) return;
  const text = input.value.trim(); if(!text) return;
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r) return;
  dealerMsg(r, text);
  const pipeline = runPurchaseResponsePipeline(r, text);
  sellerReply(r, pipeline.reply);
  r.draftText = '';
  input.value = '';
  renderPageContent();
  scrollPurchaseChatToBottom();
  scheduleSave();
}
function archivePurchaseRequest(id, silent){
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r) return;
  r.status = 'archived';
  state.purchaseRequestArchive = state.purchaseRequestArchive || [];
  state.purchaseRequestArchive.unshift(r);
  state.purchaseRequests = state.purchaseRequests.filter(x=>x.id!==id);
  if(selectedPurchaseRequestId===id) selectedPurchaseRequestId = null;
  if(!silent) notify(`Ankaufsanfrage ${r.car.brand} ${r.car.model} archiviert.`, 'info');
  closeModal(); renderAllOpen(); scheduleSave();
}
function deletePurchasedRequest(id){
  const r = state.purchaseRequests.find(x=>x.id===id); if(!r || r.status!=='purchased') return;
  if(!confirm(`Gekauften Ankauf von ${r.sellerName} (${r.car.brand} ${r.car.model}) aus der Ankaufsliste löschen? Das Fahrzeug bleibt im Bestand.`)) return;
  state.purchaseRequests = state.purchaseRequests.filter(x=>x.id!==id);
  if(selectedPurchaseRequestId===id) selectedPurchaseRequestId = null;
  notify(`Gekaufter Ankauf ${r.car.brand} ${r.car.model} aus der Liste gelöscht.`, 'info');
  renderAllOpen(); scheduleSave();
}

/* =============================== BEWERTUNGEN UI =============================== */
function renderReviews(){
  const reviews = state.reviews || [];
  const m = reviewMetrics();
  return `
    <h2 class="section-title">Bewertungen</h2>
    <p class="subtle">Bewertungen beeinflussen neue Kunden, Vertrauen, Abschlusschancen, Ruf und hochwertige Ankaufsangebote.</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Durchschnitt</div><div class="num" style="color:var(--brass);">${m.count?m.avg.toFixed(1):'–'} ★</div></div>
      <div class="stat-card"><div class="lbl">Bewertungen</div><div class="num">${m.count}</div></div>
      <div class="stat-card"><div class="lbl">Weiterempfehlung</div><div class="num">${Math.round(m.recommend)}%</div></div>
      <div class="stat-card"><div class="lbl">Antwortquote</div><div class="num">${Math.round(m.response)}%</div></div>
      <div class="stat-card"><div class="lbl">Reklamationsquote</div><div class="num" style="color:${m.complaint>25?'var(--crimson)':'var(--emerald)'};">${Math.round(m.complaint)}%</div></div>
      <div class="stat-card"><div class="lbl">Suchplatzierung</div><div class="num">${m.influence>=0?'Top':'Schwach'}</div></div>
    </div>
    ${reviews.length?reviews.map(renderReviewCard).join(''):`<div class="empty-state"><div class="ic">⭐</div>Noch keine Bewertungen. Nach abgeschlossenen Geschäften entstehen automatisch echte Kundenbewertungen.</div>`}
  `;
}
function renderReviewCard(r){
  const cat = Object.entries(r.categories||{}).map(([k,v])=>`<span class="chip">${k}: ${starsText(v)}</span>`).join('');
  return `<div class="offer-card">
    <div class="offer-head">
      <span><b>${r.customerName}</b> · ${r.car} · Tag ${r.day}</span>
      <span style="font-family:var(--font-m);color:${r.stars>=4?'var(--brass)':(r.stars<=2?'var(--crimson)':'var(--ink-1)')};font-weight:800;">${starsText(r.stars)}</span>
    </div>
    <div class="spec-row">${cat}</div>
    <p style="font-size:13px;line-height:1.55;margin:10px 0;">"${escapeHtml(r.text)}"</p>
    ${r.reply?`<div class="notice good" style="display:block;"><b>Ihre öffentliche Antwort</b><br>${escapeHtml(r.reply)}</div>`:`
      <div style="display:flex;gap:8px;align-items:center;">
        <input type="text" id="reply_${r.id}" placeholder="Öffentlich antworten..." style="flex:1;padding:9px 12px;border-radius:9px;background:var(--surface);border:1px solid var(--line);color:var(--ink-0);font-size:12.5px;" onkeydown="if(event.key==='Enter'){event.preventDefault();replyToReview('${r.id}');}">
        <button class="btn btn-primary btn-sm" onclick="replyToReview('${r.id}')">Antworten</button>
      </div>`}
  </div>`;
}
function replyToReview(id){
  const r = (state.reviews||[]).find(x=>x.id===id); if(!r) return;
  const text = (document.getElementById('reply_'+id)?.value||'').trim();
  if(!text) return;
  r.reply = text;
  state.reviewsAnswered = (state.reviewsAnswered||0)+1;
  const friendly = /(danke|vielen dank|entschuld|freut|gerne|bedauern|melden)/i.test(text);
  state.reputation = clamp(state.reputation + (friendly?1:-1), 0, 100);
  notify(friendly?'Professionelle Antwort veröffentlicht. Vertrauen steigt leicht.':'Antwort veröffentlicht. Ton wirkt riskant für den Ruf.', friendly?'good':'warn');
  renderAllOpen(); scheduleSave();
}

/* =============================== WUNSCHLISTE (SUCHAUFTRÄGE) =============================== */
function matchesOrder(c, so){
  if(so.brand && c.brand !== so.brand) return false;
  if(so.model && c.model !== so.model) return false;
  if(so.maxPrice && c.marketValue > so.maxPrice) return false;
  if(so.maxMileage && c.mileage > so.maxMileage) return false;
  if(so.transmission && c.transmission !== so.transmission) return false;
  if(so.engine && c.engine !== so.engine) return false;
  return true;
}
function generateSearchOrder(){
  const brandNames = Object.keys(BRANDS);
  const brand = choice(brandNames);
  const b = BRANDS[brand];
  const modelNames = Object.keys(b.models);
  const model = choice(modelNames);
  const range = b.models[model];
  const mid = (range[0]+range[1])/2;
  const maxPrice = Math.round(mid*randFloat(0.35,0.85)/100)*100;
  const maxMileage = Math.random()<0.4 ? choice([40000,60000,80000,100000,120000]) : null;
  const transmission = Math.random()<0.35 ? choice(TRANS) : null;
  const engine = Math.random()<0.3 ? choice(ENGINES).label : null;
  const cust = pickCustomer();
  cust.lastContactDay = state.day;
  if(!cust.preferredBrands.includes(brand)) cust.preferredBrands.push(brand);

  let desc = `${brand} ${model}`;
  if(engine) desc += ` (${engine})`;
  desc += ` bis ${money(maxPrice)}`;
  if(maxMileage) desc += `, unter ${maxMileage.toLocaleString('de-DE')} km`;
  if(transmission) desc += `, ${transmission}`;

  return {
    id: uid('so'), customerId: cust.id, customerName: cust.name, persona: cust.persona, job: cust.job, creditScore: cust.creditScore,
    brand, model, maxPrice, maxMileage, transmission, engine, desc,
    createdDay: state.day, status: 'open', notifiedMatch: false,
  };
}
function checkSearchOrderMatches(){
  state.searchOrders.forEach(so=>{
    if(so.status!=='open') return;
    const hasMatch = (state.inventory||[]).some(c=>itemBranchId(c)===itemBranchId(so) && matchesOrder(c, so));
    if(hasMatch && !so.notifiedMatch){
      so.notifiedMatch = true;
      showToast('🔍', `Passendes Fahrzeug für <b>${so.customerName}</b> gefunden: ${so.desc}`, 'Ansehen', ()=>navigateTo('wishlist'));
    }
    if(!hasMatch && so.notifiedMatch){
      so.notifiedMatch = false;
    }
  });
}
function contactSearchOrderCustomer(orderId, carId){
  const so = state.searchOrders.find(x=>x.id===orderId); if(!so) return;
  const c = findCar(carId); if(!c) return;
  if(c.reservedFor && c.reservedFor.customerId!==so.customerId && c.reservedFor.expiresDay>state.day){
    notify(`${c.brand} ${c.model} ist aktuell für einen anderen Kunden reserviert.`,'warn');
    return;
  }
  const askPrice = c.marketValue;
  const discount = randFloat(0.02,0.12);
  const amount = Math.max(500, Math.round(askPrice*(1-discount)/10)*10);
  const paymentMethod = pickPaymentMethod(amount);
  const newOffer = {
    id: uid('off'), carId: c.id, customerId: so.customerId, name: so.customerName, persona: so.persona,
    amount, patience: 4, round: 1, job: so.job, creditScore: so.creditScore,
    paymentMethod, messages: [], unread: true, pendingReply: null, fromWishlist: true,
  };
  ensureOfferAi(newOffer, c);
  ensureSaleMethodPreference(newOffer);
  addMsg(newOffer, 'customer', initialCustomerMessage(newOffer, c));
  state.offers.push(newOffer);
  so.status = 'contacted';
  addXp(22);
  const cust = state.customers[so.customerId];
  if(cust){ cust.lastContactDay = state.day; if(!cust.preferredBrands.includes(c.brand)) cust.preferredBrands.push(c.brand); }
  notify(`${so.customerName} wurde bezüglich ${c.brand} ${c.model} kontaktiert.`,'good');
  showToast('📧', `Unterhaltung mit <b>${so.customerName}</b> im Postfach gestartet.`, 'Postfach öffnen', ()=>{navigateTo('mailbox'); openConversation(newOffer.id);});
  renderAllOpen(); scheduleSave();
}
function renderWishlist(){
  checkSearchOrderMatches();
  const orders = activeSearchOrders();
  if(orders.length===0){
    return `<h2 class="section-title">Wunschliste</h2><div class="empty-state"><div class="ic">🔍</div>Noch keine Suchaufträge. Kunden hinterlassen hier ihre Fahrzeugwünsche, sobald welche eintreffen.</div>`;
  }
  const open = orders.filter(o=>o.status==='open');
  return `
    <h2 class="section-title">Wunschliste</h2>
    <p class="subtle">${open.length} offene Suchaufträge · Kunden warten auf ein passendes Fahrzeug.</p>
    ${orders.slice().reverse().map(renderSearchOrderCard).join('')}
  `;
}
function renderSearchOrderCard(so){
  const matches = activeInventory().filter(c=>matchesOrder(c, so));
  const marketMatches = activeMarket().filter(c=>matchesMarketSearchOrder(c, so));
  const statusChip = so.status==='open'
    ? `<span class="chip" style="color:var(--brass);border-color:rgba(212,175,106,.4);">Offen</span>`
    : so.status==='contacted'
      ? `<span class="chip" style="color:var(--teal);border-color:rgba(47,184,124,.4);">Kontaktiert</span>`
      : `<span class="chip">Geschlossen</span>`;
  return `<div class="offer-card">
    <div class="offer-head">
      <span><b>${so.customerName}</b> sucht: ${so.desc}</span>
      ${statusChip}
    </div>
    <div class="spec-row" style="margin-bottom:10px;">
      <span class="chip">${so.persona}</span>
      <span class="chip">💼 ${so.job}</span>
      <span class="chip">Bonität ${so.creditScore}/100</span>
      <span class="chip">Seit Tag ${so.createdDay}</span>
    </div>
    ${matches.length ? `
      <div class="notice good">✅ ${matches.length} passende${matches.length>1?'':'s'} Fahrzeug${matches.length>1?'e':''} in Ihrem Bestand!</div>
      ${matches.map(c=>{
        const blockedByOther = c.reservedFor && c.reservedFor.customerId!==so.customerId && c.reservedFor.expiresDay>state.day;
        return `<div class="row-actions" style="margin-bottom:6px;">
        <span class="chip" style="flex:1;text-align:left;">${c.brand} ${c.model} · ${money(c.marketValue)}${blockedByOther?' · 🔒 reserviert':''}</span>
        <button class="btn btn-primary btn-sm" onclick="contactSearchOrderCustomer('${so.id}','${c.id}')" ${so.status!=='open'||blockedByOther?'disabled':''}>Kontaktieren</button>
      </div>`;
      }).join('')}
    ` : `
      <div class="notice">Aktuell kein passendes Fahrzeug in Ihrem Bestand.${marketMatches.length? ` ${marketMatches.length} passende Angebote gerade auf dem Markt verfügbar.`:' Aktuell kein passendes Fahrzeug im Markt. Wird beobachtet.'}</div>
      ${marketMatches.length? `<button class="btn btn-ghost btn-sm" onclick="applySearchOrderToMarket('${so.id}')">🔍 Im Markt suchen</button>`:''}
    `}
  </div>`;
}

/* =============================== POSTFACH (E-MAIL/CHAT) =============================== */
let selectedOfferId = null;
function captureActiveChatDraft(){
  const input = document.getElementById('freeTextInput');
  if(!input || !selectedOfferId) return;
  const o = state && state.offers ? state.offers.find(x=>x.id===selectedOfferId) : null;
  if(o) o.draftText = input.value;
}
function captureActivePurchaseDraft(){
  const input = document.getElementById('purchaseTextInput');
  if(!input || !selectedPurchaseRequestId) return;
  const r = state && state.purchaseRequests ? state.purchaseRequests.find(x=>x.id===selectedPurchaseRequestId) : null;
  if(r) r.draftText = input.value;
}
function captureActiveDrafts(){
  captureActiveChatDraft();
  captureActivePurchaseDraft();
}
function updateOfferDraft(offerId, value){
  const o = state.offers.find(x=>x.id===offerId);
  if(o) o.draftText = value;
  scheduleSave();
}
function updatePurchaseDraft(id, value){
  const r = state.purchaseRequests.find(x=>x.id===id);
  if(r) r.draftText = value;
  scheduleSave();
}
function openConversation(offerId){
  captureActiveDrafts();
  selectedOfferId = offerId;
  const o = state.offers.find(x=>x.id===offerId);
  if(o) o.unread = false;
  renderPageContent();
  scheduleSave();
}
function chatMessageHash(m){
  const raw = `${m.from||''}|${m.day||''}|${m.text||''}`;
  let hash = 0;
  for(let i=0;i<raw.length;i++) hash = ((hash << 5) - hash + raw.charCodeAt(i)) | 0;
  return String(hash >>> 0);
}
function renderChatBubble(m, idx){
  const sig = chatMessageHash(m);
  return `<div class="bubble ${m.from}" data-msg-index="${idx}" data-msg-sig="${sig}">${escapeHtml(compactRepeatedCommaText(m.text))}<div style="font-size:10px;color:var(--ink-2);margin-top:4px;">Tag ${m.day}</div></div>`;
}
function renderChatStatus(o){
  return o.chatStatus ? `<div class="chat-ai-status">${escapeHtml(o.chatStatus)} <span class="dots"><i></i><i></i><i></i></span></div>` : '';
}
function renderMailboxListHtml(offers){
  const sorted = [...offers].sort((a,b)=>{
    const da = a.messages&&a.messages.length? a.messages[a.messages.length-1].day : 0;
    const db = b.messages&&b.messages.length? b.messages[b.messages.length-1].day : 0;
    return db-da;
  });
  return sorted.map(o=>{
    const c = findCar(o.carId);
    const last = o.messages && o.messages.length? o.messages[o.messages.length-1] : null;
    return `<div class="convo-item ${selectedOfferId===o.id?'active':''}" onclick="openConversation('${o.id}')">
      <div class="top"><span>${o.name}${o.unread?'<span class="unread-dot"></span>':''}</span><span style="color:var(--ink-2);font-weight:500;">Tag ${last?last.day:state.day}</span></div>
      <div class="snippet">${c?c.brand+' '+c.model+' · ':''}${last?compactRepeatedCommaText(last.text):''}</div>
    </div>`;
  }).join('');
}
function syncOfferChatDom(offerId){
  if(currentPage!=='mailbox' || !offerId) return false;
  const chat = document.getElementById('chatMessages');
  if(!chat || chat.dataset.offerId!==offerId) return false;
  const o = state.offers.find(x=>x.id===offerId);
  if(!o) return false;
  const c = findCar(o.carId);
  const card = document.getElementById('chatVehicleCard');
  if(c && card && card.dataset.offerId===offerId){
    const profile = ensureOfferAi(o, c);
    const saleConditions = openSaleConditions(o, c);
    card.outerHTML = renderChatVehicleCard(o, c, profile, state.listings[o.carId], saleConditions);
  }
  // Hinweisbalken immer aus der zentralen Kundenwunsch-Quelle neu berechnen (nie gecachte Wuensche anzeigen)
  const noticeBox = document.getElementById('chatConditionNotice');
  if(c && noticeBox && noticeBox.dataset.offerId===offerId){
    const noticeHtml = renderChatConditionNotice(o, c, null);
    const hatteBalken = !!noticeBox.firstElementChild;
    const hatBalken = !!noticeHtml;
    if(noticeBox.innerHTML !== noticeHtml){
      noticeBox.innerHTML = noticeHtml;
      // Temporaeres Debug-Log; bei Bedarf spaeter entfernen.
      console.info('[ChatSync] Fahrzeug:', c.id, '| Kunde:', o.id, `(${o.name})`);
      console.info('[ChatSync] Offene Kundenwuensche jetzt:', openSaleConditions(o, c).map(x=>x.issueLabel||x.label));
      console.info('[ChatSync] Chat neu gerendert: ja | Hinweisbalken sichtbar:', hatBalken?'ja':'nein', hatteBalken!==hatBalken?`(vorher: ${hatteBalken?'ja':'nein'})`:'(unveraendert)');
    }
  }
  const wasBottom = isChatNearBottom(chat);
  const messages = o.messages || [];
  messages.forEach((m, idx)=>{
    const sig = chatMessageHash(m);
    const existing = chat.querySelector(`[data-msg-index="${idx}"]`);
    if(existing){
      if(existing.dataset.msgSig!==sig) existing.outerHTML = renderChatBubble(m, idx);
      return;
    }
    const status = chat.querySelector('.chat-ai-status');
    if(status) status.insertAdjacentHTML('beforebegin', renderChatBubble(m, idx));
    else chat.insertAdjacentHTML('beforeend', renderChatBubble(m, idx));
  });
  chat.querySelectorAll('[data-msg-index]').forEach(el=>{
    const idx = Number(el.dataset.msgIndex);
    if(!Number.isFinite(idx) || idx>=messages.length) el.remove();
  });
  const statusHtml = renderChatStatus(o);
  const statusEl = chat.querySelector('.chat-ai-status');
  if(statusHtml && statusEl) statusEl.outerHTML = statusHtml;
  else if(statusHtml) chat.insertAdjacentHTML('beforeend', statusHtml);
  else if(statusEl) statusEl.remove();
  chat.dataset.messageCount = String(messages.length);
  if(wasBottom) requestAnimationFrame(()=>{ chat.scrollTop = chat.scrollHeight; });
  return true;
}
function syncActiveMailboxView(){
  if(currentPage!=='mailbox' || !selectedOfferId) return false;
  const chat = document.getElementById('chatMessages');
  if(!chat || chat.dataset.offerId!==selectedOfferId) return false;
  const offers = activeOffers();
  if(!offers.find(o=>o.id===selectedOfferId)) return false;
  const list = document.querySelector('.convo-list');
  if(list) list.innerHTML = renderMailboxListHtml(offers);
  return syncOfferChatDom(selectedOfferId);
}
function renderMailbox(){
  const offers = activeOffers();
  if(offers.length===0){
    selectedOfferId = null;
    return `<h2 class="section-title">Postfach</h2><div class="empty-state"><div class="ic">📧</div>Keine aktiven Unterhaltungen. Sobald Kunden auf Ihre Inserate reagieren, erscheinen sie hier.</div>`;
  }
  if(!selectedOfferId || !offers.find(o=>o.id===selectedOfferId)){
    selectedOfferId = offers[0].id;
  }
  const listHtml = renderMailboxListHtml(offers);
  const thread = renderConversationThread(selectedOfferId);
  return `
    <h2 class="section-title">Postfach</h2>
    <p class="subtle">${offers.length} aktive Unterhaltung(en)</p>
    <div class="mailbox-layout">
      <div class="convo-list">${listHtml}</div>
      <div class="chat-thread">${thread}</div>
    </div>
  `;
}
function chatVehicleStatus(o, c, listing, saleConditions){
  const workshopJob = (state.workshopJobs||[]).find(j=>j.carId===c.id);
  if(o.bankDecision) return 'Bankentscheidung liegt vor';
  if(o.applicationPending) return o.paymentMethod==='leasing' ? 'Leasingantrag läuft' : 'Finanzierungsantrag läuft';
  if(workshopJob) return 'Werkstattauftrag aktiv';
  if(saleConditions && saleConditions.length) return 'Kundenwünsche offen';
  if(c.reservedFor && c.reservedFor.expiresDay>state.day) return 'Reserviert';
  if(o.chatMemory?.conversationState) return o.chatMemory.conversationState;
  if(listing) return 'Inserat aktiv';
  return 'Im Bestand';
}
function chatVehicleHints(o, c, saleConditions){
  normalizeVehicleIssues(c);
  const hints = [];
  const workshopJob = (state.workshopJobs||[]).find(j=>j.carId===c.id);
  const openIssues = (c.issues||[]).filter(i=>!i.repaired);
  if(saleConditions && saleConditions.length) hints.push({tone:'warn', text:`Offener Kundenwunsch: ${saleConditionText(saleConditions[0])}${saleConditions.length>1?` +${saleConditions.length-1}`:''}`});
  if(c.inspected && openIssues.length) hints.push({tone:'warn', text:`${openIssues.length} bekannte Mängel`});
  if(o.chatMemory?.testDrivePlanned) hints.push({tone:'', text:'Probefahrt geplant'});
  if(o.applicationPending && o.financingApp) hints.push({tone:'', text:`Bank: Rückmeldung Tag ${o.financingApp.resolveDay}`});
  if(o.bankDecision) hints.push({tone:o.bankDecision.bankResult?.approved?'good':'warn', text:`Bank: ${o.bankDecision.bankResult?o.bankDecision.bankResult.label:o.bankDecision.risk?.label||'Entscheidung'}`});
  if(c.reservedFor && c.reservedFor.expiresDay>state.day) hints.push({tone:'', text:`Reserviert bis Tag ${c.reservedFor.expiresDay}`});
  if(workshopJob) hints.push({tone:'', text:`Werkstatt: ${workshopJob.label||'Auftrag'} (${workshopJob.daysLeft} T)`});
  return hints.slice(0,4);
}
function renderChatVehicleCard(o, c, profile, listing, saleConditions){
  const desired = ensureSaleMethodPreference(o);
  const status = chatVehicleStatus(o, c, listing, saleConditions);
  const listPrice = listing ? listing.price : c.marketValue;
  const phase = o.chatMemory?.conversationState || 'erste Anfrage';
  const hints = chatVehicleHints(o, c, saleConditions);
  const canFinance = o.paymentMethod==='finanzierung' || desired==='finanzierung';
  const canLease = o.paymentMethod==='leasing' || desired==='leasing';
  const actions = [
    `<button class="btn btn-ghost btn-sm" onclick="navigateTo('inventory')">Fahrzeug öffnen</button>`,
    `<button class="btn btn-ghost btn-sm" onclick="navigateTo('workshop')">Werkstatt</button>`,
    listing ? `<button class="btn btn-ghost btn-sm" onclick="openListModal('${c.id}')">Inserat</button>` : '',
    canFinance ? `<button class="btn btn-ghost btn-sm" onclick="openSaleFinancingModal('${o.id}')">Finanzierung</button>` : '',
    canLease ? `<button class="btn btn-ghost btn-sm" onclick="openSaleLeasingModal('${o.id}')">Leasing</button>` : '',
    saleConditions.length ? `<button class="btn btn-primary btn-sm" onclick="showOpenSaleConditionModal('${o.id}','${saleConditions[0].id}')">Kundenwünsche</button>` : '',
  ].filter(Boolean).join('');
  return `<div class="chat-vehicle-card" id="chatVehicleCard" data-offer-id="${escapeAttr(o.id)}">
    <div class="chat-vehicle-visual">${renderCarPhoto(c)}</div>
    <div class="chat-vehicle-main">
      <div class="chat-vehicle-title">${escapeHtml(c.brand)} ${escapeHtml(c.model)}</div>
      <div class="chat-vehicle-meta">${c.year} · ${(c.mileage||0).toLocaleString('de-DE')} km · ${escapeHtml(c.engine||'')}</div>
      <div class="chat-vehicle-price">Inseratspreis: <b>${money(listPrice||0)}</b> · Angebot: <b>${money(o.amount||0)}</b></div>
      <div class="chat-vehicle-meta">Interessent: ${escapeHtml(o.name)} · Phase: ${escapeHtml(phase)}</div>
    </div>
    <div class="chat-vehicle-side">
      <div class="chat-vehicle-chips">
        <span class="chip">Kunde möchte: ${saleMethodLabel(desired)}</span>
        ${listing?paymentMethodBadges(listing.allowedPaymentMethods):''}
        <span class="chip">${escapeHtml(status)}</span>
        <span class="chip">Zustand ${Math.round(c.condition||0)}/100</span>
      </div>
      ${hints.length?`<div class="chat-vehicle-hints">${hints.map(h=>`<span class="chat-vehicle-hint ${h.tone||''}">${escapeHtml(h.text)}</span>`).join('')}</div>`:''}
      <div class="chat-vehicle-actions">${actions}</div>
    </div>
  </div>`;
}
// Hinweisbalken im Chat: wird IMMER frisch aus der zentralen Kundenwunsch-Quelle berechnet (keine DOM-Kopie).
// Leer (''), sobald keine offenen Wuensche mehr existieren - erledigte Wuensche erscheinen nur als Chat-Nachricht in der Historie.
function renderChatConditionNotice(o, c, saleConditions){
  const conds = saleConditions || openSaleConditions(o, c);
  if(!conds.length) return '';
  return `<div class="notice warn" style="margin-top:8px;display:block;"><b>Offener Kundenwunsch</b><br>${conds.map(cond=>escapeHtml(saleConditionText(cond))).join('<br>')}<br><button class="btn btn-primary btn-sm" style="margin-top:8px;" onclick="showOpenSaleConditionModal('${o.id}','${conds[0].id}')">Kundenwunsch bearbeiten</button></div>`;
}
function renderConversationThread(offerId){
  const o = state.offers.find(x=>x.id===offerId);
  if(!o) return `<div class="empty-state"><div class="ic">📧</div>Unterhaltung auswählen</div>`;
  const c = findCar(o.carId);
  if(!c) return '';
  const profile = ensureOfferAi(o, c);
  const l = state.listings[o.carId];
  const pmIcon = o.paymentMethod==='bar'?'💵':(o.paymentMethod==='finanzierung'?'🏦':'📄');
  const pmLabel = o.paymentMethod==='bar'?'Barzahlung':(o.paymentMethod==='finanzierung'?'Finanzierung':'Leasing');
  const desiredSaleMethod = ensureSaleMethodPreference(o);
  const speedLabel = profile.replySpeed>=72 ? 'antwortet schnell' : (profile.replySpeed>=48 ? 'antwortet normal' : 'antwortet eher langsam');
  const bubbles = (o.messages||[]).map((m,idx)=>renderChatBubble(m, idx)).join('');
  const liveStatus = renderChatStatus(o);
  const waitingText = o.pendingReply && o.pendingReply.kind==='ai'
    ? `${o.chatStatus || 'Kunde meldet sich später ...'} voraussichtlich Tag ${o.pendingReply.dueDay}`
    : `${o.name} antwortet voraussichtlich Tag ${o.pendingReply?.dueDay}`;
  const waiting = o.pendingReply ? `<div class="notice" style="margin-top:8px;">⏳ ${escapeHtml(waitingText)}</div>` : '';
  const debug = state.chatDebug && o.lastChatDebug ? `<div class="notice" style="display:block;margin-top:8px;border-color:rgba(92,134,255,.32);">
    <b>Chat-Debug</b><br>
    Intent: ${escapeHtml(o.lastChatDebug.intent)} · Zustand: ${escapeHtml(o.lastChatDebug.conversationState)}<br>
    Offene Frage: ${escapeHtml(o.lastChatDebug.openQuestion ? o.lastChatDebug.openQuestion.text : 'keine')}<br>
    Vertrauen: ${o.lastChatDebug.trust}% · Geduld: ${o.lastChatDebug.patience}<br>
    Empfehlung: ${escapeHtml(o.lastChatDebug.nextRecommendedReaction)}
  </div>` : '';
  const selectedFinancing = o.financingOffer ? `<div class="notice" style="margin-top:8px;display:block;">🏦 <b>Ausgewähltes Finanzierungsangebot</b><br>${financingOfferLabel(o.financingOffer)} · Gesamtzahlung ${money(o.financingOffer.totalCost)} · Zinsen ${money(o.financingOffer.totalInterest)}</div>` : '';
  const saleConditions = openSaleConditions(o, c);
  const conditionNotice = `<div id="chatConditionNotice" data-offer-id="${escapeAttr(o.id)}">${renderChatConditionNotice(o, c, saleConditions)}</div>`;
  const appPending = o.applicationPending && o.financingApp ? `<div class="notice" style="margin-top:8px;border-color:rgba(139,127,240,.4);">🏦 Antrag bei der Bank – Rückmeldung voraussichtlich Tag ${o.financingApp.resolveDay}. Fahrzeug ist bis dahin reserviert.${o.financingApp.financingOffer?`<br>${financingOfferLabel(o.financingApp.financingOffer)}`:''}</div>` : '';
  const bankDecision = o.bankDecision ? `<div class="notice warn" style="margin-top:8px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">🏦 Bankprüfung liegt vor: Zahlungsausfall-Risiko <b style="color:${riskColor(o.bankDecision.risk.delayRiskPct)};">${o.bankDecision.risk.delayRiskPct}%</b> · ${o.bankDecision.bankResult?o.bankDecision.bankResult.label:o.bankDecision.risk.label}<button class="btn btn-primary btn-sm" onclick="showBankDecisionModal('${o.id}')">Entscheidung öffnen</button></div>` : '';
  const reserved = c.reservedFor && c.reservedFor.expiresDay>state.day;
  const vehicleCard = renderChatVehicleCard(o, c, profile, l, saleConditions);
  const draft = escapeAttr(o.draftText||'');
  return `
    <div class="chat-head">
      <div>
        <div style="font-family:var(--font-d);font-weight:800;font-size:14px;">${o.name}</div>
        <div class="subtle" style="margin:0;">${c.brand} ${c.model} · ${o.persona} · ${speedLabel}</div>
        <div class="customer-profile-strip">
          <span class="chip">${escapeHtml(profile.aiType)}</span>
          <span class="chip">Budget ${money(profile.budget)}</span>
          <span class="chip">Vertrauen ${Math.round(profile.trust)}%</span>
          <span class="chip">Verhandlung ${Math.round(profile.negotiation)}%</span>
        </div>
      </div>
      <div class="spec-row" style="margin:0;">
        <span class="chip">${pmIcon} ${pmLabel}</span>
        <span class="chip">✔ Wunsch: ${saleMethodLabel(desiredSaleMethod)}</span>
        <span class="chip">💼 ${o.job||'—'}</span>
        <span class="chip">Bonität ${o.creditScore!=null?o.creditScore:'–'}/100</span>
        ${reserved?`<span class="chip" style="color:var(--crimson);border-color:rgba(224,85,92,.4);">🔒 Reserviert bis Tag ${c.reservedFor.expiresDay}</span>`:''}
      </div>
    </div>
    ${vehicleCard}
    <div class="chat-messages" id="chatMessages" data-offer-id="${escapeAttr(o.id)}" data-message-count="${(o.messages||[]).length}">${bubbles}${liveStatus}</div>
    ${waiting}${debug}${conditionNotice}${selectedFinancing}${appPending}${bankDecision}
    <p class="subtle" style="margin:10px 0 4px;">Aktuelles Angebot: <b style="color:var(--brass);font-family:var(--font-m);">${money(o.amount)}</b> (Listenpreis ${money(l?l.price:c.marketValue)})</p>
    <div style="display:flex;gap:8px;margin-bottom:10px;">
      <input type="text" id="freeTextInput" value="${draft}" placeholder="Nachricht an ${escapeAttr(o.name)} schreiben..." style="flex:1;padding:9px 12px;border-radius:9px;background:var(--surface);border:1px solid var(--line);color:var(--ink-0);font-size:12.5px;" oninput="updateOfferDraft('${o.id}', this.value)" onkeydown="if(event.key==='Enter'){event.preventDefault();sendFreeText('${o.id}');}">
      <button class="btn btn-primary btn-sm" onclick="sendFreeText('${o.id}')">Senden</button>
    </div>
    <div class="chat-actions" style="margin-top:0;padding-top:10px;">
      <button class="btn btn-ghost btn-sm" onclick="respondOffer('${o.id}','counter')">💬 Gegenangebot</button>
      <button class="btn btn-ghost btn-sm" onclick="proposePaymentMethod('${o.id}','finanzierung')">🏦 Finanzierung vorschlagen</button>
      <button class="btn btn-ghost btn-sm" onclick="proposePaymentMethod('${o.id}','leasing')">📄 Leasing vorschlagen</button>
      <button class="btn btn-ghost btn-sm" onclick="scheduleAppointment('${o.id}')">📅 Probefahrt-Termin</button>
      <button class="btn btn-ghost btn-sm" onclick="confirmReservation('${o.id}')" ${reserved?'disabled':''}>🔒 Reservierung bestätigen</button>
      <button class="btn btn-danger btn-sm" onclick="respondOffer('${o.id}','reject')" ${(o.applicationPending||o.bankDecision)?'disabled':''}>Ablehnen</button>
      <button class="btn btn-primary btn-sm" onclick="respondOffer('${o.id}','accept')" ${(o.applicationPending||o.bankDecision)?'disabled':''}>✅ Angebot akzeptieren</button>
    </div>
  `;
}
/* =============================== FREITEXT-CHAT (Intent-Erkennung) =============================== */
function sendFreeText(offerId){
  const input = document.getElementById('freeTextInput'); if(!input) return;
  const text = input.value.trim(); if(!text) return;
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  addMsg(o, 'player', text);
  o.draftText = '';
  input.value = '';
  syncActiveMailboxView();
  scheduleSave();
  setTimeout(()=>handleFreeTextReply(offerId, text), 250);
}
function pickVaried(o, bucket, options){
  o._usedTemplates = o._usedTemplates || {};
  const usedIdx = o._usedTemplates[bucket];
  let pool = options;
  if(usedIdx!==undefined && options.length>1){ pool = options.filter((_,i)=>i!==usedIdx); }
  const choice_ = pool[randInt(0,pool.length-1)];
  o._usedTemplates[bucket] = options.indexOf(choice_);
  return choice_;
}
function textHasAny(lower, words){ return words.some(w=>lower.includes(w)); }
function analyzeCustomerIntent(text){
  const lower = text.toLowerCase();
  const intents = [];
  const add = (key, words) => { if(textHasAny(lower, words)) intents.push(key); };
  add('sold', ['verkauft','nicht mehr verfügbar','schon weg','bereits reserviert für jemand anderen']);
  add('reservationRejected', ['nicht reservieren','keine reservierung','reservierung geht nicht']);
  add('priceReject', ['zu teuer','zu hoch','nicht machbar','geht nicht','zu viel']);
  add('priceLowered', ['rabatt','nachlass','günstiger','billiger','runter','reduzier','preis senken','entgegenkommen']);
  add('counterOffer', ['gegenangebot','mein angebot','ich kann anbieten','ich würde sagen','für']);
  add('price', ['preis','letzter preis','festpreis','angebot']);
  add('acceptPrice', ['einverstanden','passt','nehme ich','machen wir','okay zu','ok zu','kaufvertrag','deal']);
  add('financing', ['finanzierung','kredit','rate','monatlich','abbezahlen','bank']);
  add('leasing', ['leasing','leasen','leasingrate']);
  add('appointment', ['probefahrt','termin','vorbeikommen','anschauen','ansehen','besichtigung','uhr','morgen','heute']);
  add('reservation', ['reservier','zurücklegen','freihalten']);
  add('delivery', ['lieferung','liefern','bringen','zustellen','transport']);
  add('imagesPromised', ['schicke bilder','sende bilder','bilder kommen','fotos kommen','gleich bilder','weitere bilder']);
  add('imagesRequest', ['bilder?','fotos?','brauchen sie bilder','soll ich bilder']);
  add('images', ['bilder','fotos','aufnahmen','innenraum','detailfoto']);
  add('obd', ['obd','diagnose','fehlerspeicher']);
  add('service', ['serviceheft','scheckheft','wartung','letzter service','inspektion']);
  add('tuv', ['tüv','hu','au']);
  add('accident', ['unfallfrei','unfall','vorschaden']);
  add('warranty', ['garantie','gewährleistung','kulanz']);
  add('documents', ['unterlagen','historie']);
  add('defect', ['problem','defekt','mangel','schaden','kratzer','rost','reklamation','kaputt','unfall']);
  add('alternative', ['alternative','anderes fahrzeug','ähnliches fahrzeug','anderes modell']);
  add('tradein', ['inzahlungnahme','eintauschen','altwagen']);
  add('greeting', ['hallo','guten tag','servus','moin','hi ']);
  add('evasive', ['müsste ich prüfen','weiß ich nicht','kann ich nicht sagen','später','melde mich','keine ahnung']);
  add('pressure', ['sofort','heute noch','nur jetzt','sonst','schnell entscheiden','letzte chance']);
  const yes = /\b(ja|korrekt|stimmt|genau|ist so|bestätige|unfallfrei|vorhanden)\b/i.test(text);
  const no = /\b(nein|nicht|kein|keine|leider nicht|kann ich nicht)\b/i.test(text);
  const polite = textHasAny(lower, ['bitte','danke','vielen dank','gerne','freundlich','super','perfekt']);
  const rude = textHasAny(lower, ['egal','quatsch','lächerlich','unsinn','nerv','schlecht','abzocke','frech']);
  const numMatch = text.match(/(\d{1,3}(?:[.,]\d{3})+|\d{4,6})/);
  return {
    intents: intents.length ? intents : ['generic'],
    primary: intents[0] || 'generic',
    amount: numMatch ? parseInt(numMatch[1].replace(/[.,]/g,'')) : null,
    yes, no,
    tone: rude ? 'rude' : (polite ? 'polite' : 'neutral'),
    length: text.length,
  };
}
function detectCustomerQuestion(text){
  const lower = String(text||'').toLowerCase();
  const q = lower.includes('?');
  const has = words => words.some(w=>lower.includes(w));
  if(has(['unfallfrei','unfall','vorschaden'])) return {key:'accident', text:'Ist der Wagen unfallfrei?'};
  if(has(['serviceheft','scheckheft','letzter service','wartung','inspektion'])) return {key:'service', text:'Wann war der letzte Service bzw. gibt es ein Serviceheft?'};
  if(has(['tüv','hu','au'])) return {key:'tuv', text:'Wie lange hat der Wagen TÜV?'};
  if(has(['obd','fehlerspeicher','diagnose'])) return {key:'obd', text:'Gibt es einen OBD-Check oder Fehlerspeicher-Info?'};
  if(has(['bilder','fotos','innenraum','detailbilder'])) return {key:'images', text:'Können Sie weitere Bilder schicken?'};
  if(has(['garantie','gewährleistung'])) return {key:'warranty', text:'Gibt es Garantie oder Gewährleistung?'};
  if(has(['preis','letzter preis','rabatt','nachlass'])) return {key:'price', text:'Was ist preislich möglich?'};
  if(has(['termin','probefahrt','besichtigung','vorbeikommen'])) return {key:'appointment', text:'Können wir einen Termin vereinbaren?'};
  if(has(['finanzierung','rate','bank'])) return {key:'financing', text:'Ist Finanzierung möglich?'};
  if(has(['lieferung','liefern'])) return {key:'delivery', text:'Ist Lieferung möglich?'};
  return q ? {key:'generic', text} : null;
}
function playerAnsweredQuestion(question, text, analysis){
  if(!question) return true;
  const lower = String(text||'').toLowerCase();
  const has = words => words.some(w=>lower.includes(w));
  if(analysis.primary==='evasive') return false;
  if(question.key==='accident') return has(['unfallfrei','unfall','vorschaden','historie']) || analysis.yes || analysis.no;
  if(question.key==='service') return has(['service','scheckheft','wartung','inspektion','historie']) || analysis.yes || analysis.no;
  if(question.key==='tuv') return has(['tüv','hu','au','monat','gültig']) || analysis.yes || analysis.no;
  if(question.key==='obd') return has(['obd','diagnose','fehlerspeicher','auslesen']) || analysis.yes || analysis.no;
  if(question.key==='images') return analysis.intents.includes('images') || analysis.intents.includes('imagesPromised') || analysis.yes || analysis.no;
  if(question.key==='warranty') return analysis.intents.includes('warranty') || has(['garantie','gewährleistung','kulanz']) || analysis.yes || analysis.no;
  if(question.key==='price') return analysis.amount || analysis.intents.includes('priceLowered') || analysis.intents.includes('priceReject') || analysis.yes || analysis.no;
  if(question.key==='appointment') return analysis.intents.includes('appointment') || analysis.yes || analysis.no;
  if(question.key==='financing') return analysis.intents.includes('financing') || analysis.yes || analysis.no;
  if(question.key==='delivery') return analysis.intents.includes('delivery') || analysis.yes || analysis.no;
  return analysis.primary!=='generic' || analysis.yes || analysis.no;
}
function expectationForIntent(intent){
  return ({
    imagesPromised:'wartet auf Bilder',
    images:'wartet auf Bilder',
    obd:'wartet auf OBD-Test',
    service:'wartet auf Serviceheft',
    tuv:'wartet auf TÜV-Info',
    appointment:'Probefahrt geplant',
    financing:'Finanzierung läuft',
    leasing:'Leasing wird geprüft',
    reservation:'Reservierung angeboten',
    delivery:'Lieferung besprochen',
  })[intent] || '';
}
function updateChatMemory(offer, from, text){
  if(!offer) return;
  const c = findCar(offer.carId);
  ensureOfferAi(offer, c);
  const m = offer.chatMemory;
  const a = analyzeCustomerIntent(text||'');
  if(a.amount && a.amount>500) (from==='player' ? m.prices : m.rejectedPrices).push({day:state.day, amount:a.amount});
  if(a.intents.includes('images')) m.imagesSent = m.imagesSent || from==='player';
  if(a.intents.includes('documents')) m.documentsMentioned = true;
  if(/service|scheckheft/i.test(text)) m.serviceMentioned = true;
  if(/tüv|hu|au/i.test(text)) m.tuvMentioned = true;
  if(/obd|diagnose/i.test(text)) m.obdMentioned = true;
  if(/garantie|gewährleistung/i.test(text)) m.warrantyMentioned = true;
  if(a.intents.includes('financing')) m.financingDiscussed = true;
  if(a.intents.includes('leasing')) m.leasingDiscussed = true;
  if(a.intents.includes('delivery')) m.deliveryDiscussed = true;
  if(a.intents.includes('reservation')) m.reservationDiscussed = true;
  if(a.intents.includes('appointment')) m.testDrivePlanned = true;
  if(a.intents.includes('defect')) m.defectMentioned = true;
  if(from==='customer'){
    const question = detectCustomerQuestion(text);
    if(question) m.openQuestion = {...question, askedDay:state.day, ignoredCount:m.openQuestion?.ignoredCount||0};
  }
  if(from==='player'){
    const open = m.openQuestion;
    const answered = playerAnsweredQuestion(open, text, a);
    m.lastPlayerQuestionResult = open ? {key:open.key, answered, day:state.day} : null;
    if(open && answered){ m.openQuestion = null; m.answeredQuestions = (m.answeredQuestions||0)+1; }
    else if(open && !answered){ open.ignoredCount = (open.ignoredCount||0)+1; m.ignoredQuestions = (m.ignoredQuestions||0)+1; }
    const expectation = expectationForIntent(a.primary);
    if(expectation && !(m.expectations||[]).includes(expectation)) m.expectations.push(expectation);
    m.toneScore = clamp((m.toneScore||0) + (a.tone==='polite'?1:(a.tone==='rude'?-2:0)), -8, 8);
  }
  m.lastIntent = a.primary;
}
function chatStatusForIntent(intent, profile){
  if(intent==='images') return 'Kunde wartet auf Bilder ...';
  if(intent==='documents') return 'Kunde prüft Nachweise ...';
  if(intent==='financing') return 'Kunde wartet auf Finanzierungsentscheidung ...';
  if(intent==='leasing') return 'Kunde prüft Leasingangebot ...';
  if(intent==='appointment') return 'Kunde prüft Termin ...';
  if(intent==='reservation') return 'Kunde ist kaufbereit ...';
  if(intent==='price' || intent==='rejectPrice') return 'Kunde prüft Angebot ...';
  if(profile && profile.decisionDrive<42) return 'Kunde spricht mit Partner/Familie ...';
  return 'Kunde tippt ...';
}
function deriveConversationState(o, analysis){
  const m = o.chatMemory || defaultChatMemory(findCar(o.carId));
  let next = m.conversationState || 'erste Anfrage';
  if(analysis.primary==='sold') next = 'abgesagt';
  else if(analysis.primary==='price' || analysis.primary==='priceLowered' || analysis.primary==='priceReject' || analysis.primary==='counterOffer') next = 'Preisverhandlung';
  else if(['accident','service','tuv','obd','warranty','documents','images','imagesPromised'].includes(analysis.primary)) next = analysis.primary==='imagesPromised' ? 'wartet auf Bilder' : 'Fragen zum Fahrzeug';
  else if(analysis.primary==='appointment') next = 'Probefahrt geplant';
  else if(analysis.primary==='financing') next = 'Finanzierung läuft';
  else if(analysis.primary==='leasing') next = 'Leasing wird geprüft';
  else if(analysis.primary==='reservation') next = 'Kunde ist kaufbereit';
  else if(analysis.primary==='delivery') next = 'Lieferung besprochen';
  else if(analysis.primary==='alternative') next = 'Alternative vorgeschlagen';
  else if(m.openQuestion) next = 'wartet auf Antwort';
  m.conversationState = next;
  return next;
}
function adjustChatTrust(o, analysis){
  const profile = ensureOfferAi(o, findCar(o.carId));
  const m = o.chatMemory || defaultChatMemory(findCar(o.carId));
  let delta = 0;
  if(analysis.tone==='polite') delta += 2;
  if(analysis.tone==='rude') delta -= 5;
  if(m.lastPlayerQuestionResult?.answered) delta += 3;
  if(m.lastPlayerQuestionResult && !m.lastPlayerQuestionResult.answered) delta -= 4;
  if(['imagesPromised','obd','service','tuv','warranty','appointment','reservation'].includes(analysis.primary)) delta += 1;
  if(analysis.primary==='evasive') delta -= 2;
  profile.trust = clamp((profile.trust||50)+delta, 0, 100);
  m.trustDelta = (m.trustDelta||0)+delta;
}
function nextRecommendedReaction(o, analysis){
  const m = o.chatMemory || {};
  if(m.openQuestion) return `Frage beantworten: ${m.openQuestion.text}`;
  if((m.expectations||[]).includes('wartet auf Bilder')) return 'Bilder senden oder klaren Zeitpunkt nennen';
  if(analysis.primary==='priceReject' || analysis.primary==='price') return 'konkreten Preis oder Gegenangebot nennen';
  if(analysis.primary==='financing') return 'Finanzierungskonditionen konkretisieren';
  if(analysis.primary==='appointment') return 'Termin mit Datum/Uhrzeit bestätigen';
  return 'konkret auf den letzten Punkt eingehen';
}
function customerQuestionFollowUp(o, question){
  const c = findCar(o.carId);
  const profile = ensureOfferAi(o, c);
  const polite = profile.politeness>60 ? 'bitte ' : '';
  if(question.key==='accident') return `Könnten Sie mir ${polite}noch sagen, ob der Wagen unfallfrei ist? Das ist mir wichtig.`;
  if(question.key==='service') return `Mir fehlt noch die Info zum Serviceheft bzw. zum letzten Service. Können Sie das ${polite}kurz bestätigen?`;
  if(question.key==='tuv') return `Wie lange hat der Wagen noch TÜV? Ohne die Info kann ich schlecht entscheiden.`;
  if(question.key==='obd') return `Können Sie ${polite}noch den OBD-/Fehlerspeicherpunkt klären?`;
  if(question.key==='images') return `Alles klar, aber ich bräuchte wirklich noch die Bilder, bevor ich weiter entscheide.`;
  if(question.key==='warranty') return `Gibt es dazu Garantie oder Gewährleistung?`;
  if(question.key==='price') return `Preislich brauche ich noch eine klare Aussage. Was wäre Ihr Endpreis?`;
  if(question.key==='appointment') return `Passt ein konkreter Termin für Besichtigung oder Probefahrt?`;
  if(question.key==='financing') return `Ist eine Finanzierung konkret möglich und mit welcher Rate?`;
  if(question.key==='delivery') return `Können Sie liefern, und was würde das kosten?`;
  return `Könnten Sie meine Frage bitte noch beantworten?`;
}
function buildPipelineCustomerReply(o, pipeline){
  const c = findCar(o.carId); if(!c) return 'Danke für die Rückmeldung.';
  const profile = ensureOfferAi(o, c);
  const m = o.chatMemory || defaultChatMemory(c);
  const analysis = pipeline.analysis;
  const prefix = replyTonePrefix(o, profile);
  const ask = (state.listings[o.carId]?.price) || c.marketValue;
  const openResult = m.lastPlayerQuestionResult;
  if(openResult && !openResult.answered && m.openQuestion){
    return customerQuestionFollowUp(o, m.openQuestion);
  }
  if(openResult?.answered){
    if(openResult.key==='accident') return `${prefix} Gut, die Unfallfreiheit ist mir wichtig. Dann wäre für mich als Nächstes noch Service und TÜV interessant.`;
    if(openResult.key==='service') return `${prefix} Danke, das hilft mir. Können Sie mir noch sagen, wie lange der TÜV gültig ist?`;
    if(openResult.key==='tuv') return `${prefix} Alles klar, das klingt schon besser. Dann würde ich gerne über Preis oder Termin sprechen.`;
    if(openResult.key==='images') return `${prefix} Alles klar, danke. Ich warte auf die Bilder und schaue mir dann die Details an.`;
    if(openResult.key==='obd') return `${prefix} Danke, genau diese technische Sicherheit brauche ich. Wenn der Test sauber ist, bleiben wir im Gespräch.`;
  }
  if(analysis.primary==='imagesPromised') return `${prefix} Alles klar, danke. Ich warte auf die Bilder und melde mich danach mit einer klareren Einschätzung.`;
  if(analysis.primary==='images') return `${prefix} Bilder helfen mir sehr. Bitte schicken Sie Innenraum, Reifen, Lackstellen und die Fahrerseite.`;
  if(analysis.primary==='obd') return `${prefix} Ein OBD-Test wäre gut. Wenn der Fehlerspeicher sauber ist, nimmt mir das einiges an Risiko.`;
  if(analysis.primary==='service') return `${prefix} Servicehistorie ist für mich wichtig. Wenn das sauber dokumentiert ist, spricht das klar für den Wagen.`;
  if(analysis.primary==='tuv') return `${prefix} TÜV ist ein wichtiger Punkt. Wenn der noch länger läuft, bin ich deutlich entspannter.`;
  if(analysis.primary==='accident') return analysis.no
    ? `${prefix} Ein Unfall oder Vorschaden macht mich vorsichtig. Dann müsste der Preis das klar widerspiegeln.`
    : `${prefix} Gut, unfallfrei ist für mich ein starkes Argument.`;
  if(analysis.primary==='warranty') return `${prefix} Garantie oder Gewährleistung wäre ein Pluspunkt. Das gibt mir bei dem Kauf mehr Sicherheit.`;
  if(analysis.primary==='priceLowered' || analysis.primary==='counterOffer' || analysis.primary==='price'){
    if(analysis.amount){
      const fair = analysis.amount <= ask && analysis.amount >= o.amount*.96;
      if(fair || profile.decisionDrive>70) return `${prefix} ${money(analysis.amount)} klingt grundsätzlich machbar. Wenn die Fahrzeugdaten so bleiben, können wir Richtung Termin gehen.`;
      return `${prefix} ${money(analysis.amount)} ist noch über meinem Rahmen. Ich liege eher bei ${money(o.amount)}. Können wir uns da annähern?`;
    }
    if(profile.aiType==='Schnäppchenjäger') return `${prefix} Dann nennen Sie mir bitte konkret Ihren letzten Preis. Ohne Zahl kann ich schwer entscheiden.`;
    return `${prefix} Preislich bin ich offen, brauche aber eine konkrete Zahl, damit ich es einschätzen kann.`;
  }
  if(analysis.primary==='priceReject') return `${prefix} Verstehe. Dann sind wir preislich noch nicht zusammen. Gibt es eine Alternative oder etwas Spielraum?`;
  if(analysis.primary==='financing') return profile.creditScore>=62
    ? `${prefix} Finanzierung passt grundsätzlich. Bitte nennen Sie mir Monatsrate, Laufzeit und Anzahlung konkret.`
    : `${prefix} Finanzierung wäre gut, aber ich brauche eine realistische Vorprüfung, damit es nicht später platzt.`;
  if(analysis.primary==='leasing') return `${prefix} Leasing kann ich prüfen. Wichtig wären Laufzeit, Kilometer und monatliche Rate.`;
  if(analysis.primary==='appointment') return `${prefix} Ein Termin ist sinnvoll. Schlagen Sie mir bitte einen konkreten Tag und eine Uhrzeit vor.`;
  if(analysis.primary==='reservation') return `${prefix} Eine Reservierung hilft mir. Wenn Preis und Unterlagen passen, kann ich danach verbindlicher werden.`;
  if(analysis.primary==='reservationRejected') return `${prefix} Ohne Reservierung ist mir das etwas unsicher. Dann müsste ich schneller entscheiden oder mich weiter umsehen.`;
  if(analysis.primary==='delivery') return `${prefix} Lieferung wäre praktisch. Bitte sagen Sie mir Kosten und frühestmöglichen Liefertermin.`;
  if(analysis.primary==='defect') return `${prefix} Danke für die Offenheit. Der Mangel ist kein automatisches Aus, aber ich brauche eine klare Lösung oder einen fairen Preis.`;
  if(analysis.primary==='alternative') return `${prefix} Eine Alternative schaue ich mir gern an, solange sie zu meinem Budget und den wichtigsten Kriterien passt.`;
  if(analysis.primary==='sold') return `Schade, dann hat sich das erledigt. Falls Sie etwas Vergleichbares bekommen, können Sie sich gerne melden.`;
  if(analysis.primary==='evasive') return `${prefix} Ich verstehe, aber ich brauche dazu noch eine klare Antwort, bevor ich weitergehen kann.`;
  if(profile.aiType==='Direkter Kunde' || profile.aiType==='Ungeduldiger Kunde') return `${prefix} Können Sie mir konkret sagen, wie es jetzt weitergeht?`;
  if(profile.aiType==='Familienkunde') return `${prefix} Für mich zählt vor allem, dass der Wagen zuverlässig ist. Können Sie die wichtigsten Punkte noch einmal klar bestätigen?`;
  return `${prefix} Dann lassen Sie uns bitte den nächsten konkreten Schritt festlegen.`;
}
function runCustomerResponsePipeline(o, text){
  const analysis = analyzeCustomerIntent(text);
  const stateBefore = o.chatMemory?.conversationState || 'erste Anfrage';
  const nextState = deriveConversationState(o, analysis);
  adjustChatTrust(o, analysis);
  const reply = buildPipelineCustomerReply(o, {analysis, stateBefore, nextState});
  const debug = {
    intent: analysis.primary,
    intents: analysis.intents,
    conversationState: nextState,
    openQuestion: o.chatMemory?.openQuestion || null,
    trust: Math.round((o.customerProfile?.trust)||0),
    patience: o.patience,
    nextRecommendedReaction: nextRecommendedReaction(o, analysis),
  };
  o.lastChatDebug = debug;
  if(state.chatDebug) console.debug('[CustomerChatPipeline]', debug);
  return {kind:'ai', analysis, sourceText:text, reply, debug};
}
function scheduleAiReply(o, analysis, sourceText){
  const c = findCar(o.carId); if(!c) return;
  const profile = ensureOfferAi(o, c);
  const pipeline = analysis && analysis.kind==='ai' ? analysis : runCustomerResponsePipeline(o, sourceText||'');
  const intent = pipeline.analysis || analysis || {primary:'generic'};
  const delay = replyDelayFor(profile);
  o.chatStatus = chatStatusForIntent(intent.primary, profile);
  const payload = {...pipeline, dueDay:state.day+delay};
  if(delay<=0){
    if(!syncActiveMailboxView()) renderPageContent();
    setTimeout(()=>{
      const fresh = state.offers.find(x=>x.id===o.id); if(!fresh) return;
      fresh.chatStatus = '';
      addMsg(fresh, 'customer', payload.reply || buildPipelineCustomerReply(fresh, payload));
      if(!syncActiveMailboxView()) renderPageContent();
      scheduleSave();
    }, profile.replySpeed>82 ? 650 : 1100);
  } else {
    o.pendingReply = payload;
    if(!syncActiveMailboxView()) renderPageContent();
  }
}
function resolveAiPendingReply(o){
  if(!o || !o.pendingReply || o.pendingReply.kind!=='ai') return;
  const pending = o.pendingReply;
  o.pendingReply = null;
  o.chatStatus = '';
  addMsg(o, 'customer', pending.reply || buildPipelineCustomerReply(o, pending));
}
function replyTonePrefix(o, profile){
  if((o.chatMemory?.toneScore||0)<-2) return pickVaried(o,'tone_bad',['Ich muss ehrlich sagen, der Ton irritiert mich etwas.','So ganz wohl fühle ich mich mit der Art der Antwort nicht.']);
  if(profile.politeness>72) return pickVaried(o,'tone_good',['Danke für die Rückmeldung.','Vielen Dank für die schnelle Antwort.','Das klingt grundsätzlich gut.']);
  if(profile.aiType==='Direkter Kunde' || profile.aiType==='Ungeduldiger Kunde') return pickVaried(o,'tone_direct',['Okay.','Verstanden.','Alles klar.']);
  return pickVaried(o,'tone_neutral',['Danke für die Info.','Verstehe.','Gut, danke.']);
}
function buildCustomerReply(o, analysis, sourceText){
  const c = findCar(o.carId); if(!c) return 'Danke für die Rückmeldung.';
  const profile = ensureOfferAi(o, c);
  const m = o.chatMemory || defaultChatMemory(c);
  const l = state.listings[o.carId];
  const ask = l ? l.price : c.marketValue;
  const type = profile.aiType;
  const prefix = replyTonePrefix(o, profile);
  const rememberedPrice = (m.prices||[]).length ? m.prices[m.prices.length-1].amount : null;
  const qualityHint = c.condition<60 ? 'der Zustand macht mich noch etwas vorsichtig' : (c.mileage>180000 ? 'bei der Laufleistung möchte ich genauer hinsehen' : 'der Wagen wirkt auf den ersten Blick interessant');
  let reply = '';
  if(analysis.primary==='price' || analysis.primary==='rejectPrice'){
    if(analysis.amount && analysis.amount>=ask*0.96){
      reply = `${prefix} Wenn wir bei ${money(analysis.amount)} bleiben, würde ich den ${c.brand} ${c.model} gerne konkret machen. Können wir die nächsten Schritte klären?`;
    } else if(type==='Schnäppchenjäger'){
      reply = `${prefix} Ich bin ehrlich: preislich ist mir das noch zu hoch. Wenn Sie mir bei ${money(Math.max(500, Math.round(ask*(1-profile.priceSensitivity/520)/10)*10))} entgegenkommen, bleibe ich ernsthaft dran.`;
    } else if(type==='Premiumkunde'){
      reply = `${prefix} Der Preis ist für mich nicht der einzige Punkt. Wenn Zustand, Ausstattung und Unterlagen sauber sind, kann ich damit arbeiten. Gibt es Servicehistorie und aktuelle Bilder?`;
    } else if(type==='Vorsichtiger Kunde' || type==='Unsicherer Kunde'){
      reply = `${prefix} Preislich möchte ich nichts überstürzen. ${qualityHint}; können Sie mir vorher noch TÜV, Service und mögliche Vorschäden bestätigen?`;
    } else {
      reply = `${prefix} Mein Angebot liegt aktuell bei ${money(o.amount)}. Wenn Sie sich etwas bewegen können, kommen wir vermutlich zusammen.`;
    }
  } else if(analysis.primary==='financing'){
    reply = profile.creditScore>=62
      ? `${prefix} Eine Finanzierung wäre für mich interessant. Wichtig wäre mir eine realistische Monatsrate und keine versteckten Kosten. Können Sie mir das für ${money(o.amount)} konkret rechnen?`
      : `${prefix} Finanzierung wäre grundsätzlich gut, aber meine Bonität ist nicht perfekt. Wenn die Bank das sauber vorprüft, würde ich es versuchen.`;
  } else if(analysis.primary==='leasing'){
    reply = type==='Premiumkunde' || profile.preferredPayment==='leasing'
      ? `${prefix} Leasing passt für mich gut, vor allem wenn Laufzeit und Kilometer realistisch sind. Welche Rate wäre bei dem Fahrzeug möglich?`
      : `${prefix} Leasing kann ich mir ansehen, ich tendiere aber eher zu ${profile.preferredPayment==='bar'?'Barzahlung':'Finanzierung'}.`;
  } else if(analysis.primary==='appointment'){
    reply = profile.decisionDrive>62
      ? `${prefix} Ja, eine Besichtigung mit Probefahrt wäre der richtige nächste Schritt. Wann hätten Sie einen Slot frei?`
      : `${prefix} Ich würde mir den Wagen gerne ansehen, muss aber kurz Rücksprache halten. Reservieren Sie ihn mir bis dahin?`;
  } else if(analysis.primary==='reservation'){
    reply = `${prefix} Eine Reservierung hilft mir. ${rememberedPrice?`Wenn wir wie besprochen bei ${money(rememberedPrice)} bleiben,`:'Wenn die Eckdaten passen,'} würde ich den Termin gerne festmachen.`;
  } else if(analysis.primary==='images'){
    reply = `${prefix} Weitere Bilder wären super, besonders Innenraum, Reifen, Lackstellen und die Fahrerseite. Danach kann ich besser entscheiden.`;
  } else if(analysis.primary==='documents'){
    if(type==='Vorsichtiger Kunde' || profile.riskAwareness>70){
      reply = `${prefix} Genau das ist mir wichtig. Können Sie bitte Serviceheft, TÜV-Stand und Unfallfreiheit bestätigen? Bei ${c.mileage.toLocaleString('de-DE')} km möchte ich sicher sein.`;
    } else {
      reply = `${prefix} Unterlagen wären gut. Wenn Service und TÜV sauber sind, spricht für mich wenig gegen den ${c.brand} ${c.model}.`;
    }
  } else if(analysis.primary==='delivery'){
    reply = `${prefix} Lieferung wäre praktisch. Was würde das kosten und wann könnte der Wagen bei mir sein?`;
  } else if(analysis.primary==='defect'){
    reply = `${prefix} Danke für die Offenheit. Wenn der Mangel im Preis berücksichtigt ist oder behoben wird, bin ich nicht raus. Ich möchte nur wissen, womit ich rechnen muss.`;
  } else if(analysis.primary==='tradein'){
    reply = `${prefix} Inzahlungnahme wäre interessant. Ich hätte noch ein Fahrzeug, das ich loswerden müsste. Können wir das beim Termin mit bewerten?`;
  } else if(type==='Familienkunde'){
    reply = `${prefix} Für mich zählen vor allem Zuverlässigkeit, Sicherheit und genug Platz. Wenn der ${c.brand} ${c.model} da gut dasteht, bleiben wir im Gespräch.`;
  } else if(type==='Ungeduldiger Kunde'){
    reply = `${prefix} Ich brauche relativ schnell eine klare Richtung. Ist der Wagen noch verfügbar und zu welchem Endpreis?`;
  } else if(type==='Stammkunde'){
    reply = `${prefix} Bisher war ich mit Ihrem Autohaus zufrieden. Wenn Sie mir wieder ein faires Paket machen, würde ich gerne bei Ihnen bleiben.`;
  } else {
    reply = `${prefix} ${qualityHint}. Was wäre aus Ihrer Sicht der nächste sinnvolle Schritt?`;
  }
  m.replies = (m.replies||0)+1;
  return reply;
}
function customerConcernProfile(o){
  const type = o.customerProfile?.aiType || o.persona || '';
  if(type==='Schnäppchenjäger') return {detect:.28, tolerance:7, tags:['price'], demand:.18};
  if(type==='Premiumkunde' || type==='Luxuskäufer') return {detect:.82, tolerance:1, tags:['optics','interior','comfort','luxury'], demand:.78};
  if(type==='Vorsichtiger Kunde' || type==='Unsicherer Kunde') return {detect:.72, tolerance:2, tags:['service','safety','tech'], demand:.62};
  if(type==='Familienkunde') return {detect:.68, tolerance:3, tags:['safety','family','service'], demand:.72};
  if(type==='Technikinteressierter Kunde') return {detect:.84, tolerance:3, tags:['tech','service'], demand:.66};
  if(type==='Sammler') return {detect:.78, tolerance:2, tags:['collector','optics','service'], demand:.74};
  return {detect:.48, tolerance:4, tags:['safety','service'], demand:.42};
}
function customerVisibleIssues(o, c){
  const assessment = ensureCustomerIssueAssessment(o, c);
  return uniqueBy(assessment.detectedIds.map(id=>(c.issues||[]).find(i=>i.id===id)).filter(Boolean).filter(i=>!i.repaired), issueUniqueKey);
}
function ensureCustomerIssueAssessment(o, c){
  normalizeVehicleIssues(c);
  if(!o.customerIssueAssessment) o.customerIssueAssessment = null;
  if(o.customerIssueAssessment && o.customerIssueAssessment.carId===c.id) return o.customerIssueAssessment;
  const profile = customerConcernProfile(o);
  const detected = uniqueBy(c.issues.filter(i=>!i.repaired).filter(i=>{
    const relevant = (i.tags||[]).some(t=>profile.tags.includes(t));
    const detectChance = clamp(profile.detect + (i.severity||1)*0.08 + (c.inspected?0.18:0) + (relevant?0.16:-0.12), 0.05, 0.96);
    return relevant || Math.random()<detectChance;
  }), issueUniqueKey);
  const required = [];
  const discountable = [];
  const ignored = [];
  detected.forEach(i=>{
    const relevant = (i.tags||[]).some(t=>profile.tags.includes(t));
    const mustRepair = (i.severity||1)>=3 || (relevant && profile.demand>.55) || (profile.tolerance<=2 && (i.severity||1)>=2);
    if(mustRepair) required.push(i);
    else if(profile.tolerance>=5 || i.severity<=2) discountable.push(i);
    else ignored.push(i);
  });
  o.customerIssueAssessment = {
    carId:c.id,
    day:state.day,
    detectedIds:detected.map(i=>i.id),
    requiredIds:required.map(i=>i.id),
    discountableIds:discountable.map(i=>i.id),
    ignoredIds:ignored.map(i=>i.id),
    announced:false,
    source:'customer-check',
  };
  // Temporaeres Debug-Log fuer die Kundenpruefung; bei Bedarf spaeter entfernen.
  console.info('[Kundenpruefung] Fahrzeug:', c.id, '| Kunde:', o.name);
  console.info('[Kundenpruefung] Offene Maengel vor Pruefung:', c.issues.filter(i=>!i.repaired).map(i=>`${i.id} (${i.label})`));
  console.info('[Kundenpruefung] Bereits repariert (ignoriert):', c.issues.filter(i=>i.repaired).map(i=>`${i.id} (${i.label})`));
  const created = required.map(i=>createSaleCondition(o, c, i, 'customer-assessment')).filter(Boolean);
  console.info('[Kundenpruefung] Neu erzeugte Kundenwuensche:', created.map(cond=>`${cond.id} -> linkedDefectId ${cond.issueId} (${cond.issueLabel})`));
  return o.customerIssueAssessment;
}
function customerIssueImpact(o, c){
  const profile = customerConcernProfile(o);
  const assessment = ensureCustomerIssueAssessment(o, c);
  const ids = assessment.requiredIds.concat(assessment.discountableIds);
  const issues = uniqueBy(ids.map(id=>(c.issues||[]).find(i=>i.id===id)).filter(Boolean).filter(i=>!i.repaired), issueUniqueKey);
  const weight = issues.reduce((s,i)=>s+(i.severity||1)*((i.tags||[]).some(t=>profile.tags.includes(t))?1.25:.7),0);
  const trustDelta = -Math.round(weight*1.6);
  const pricePressure = clamp(weight*0.008, 0, .18);
  const dropoutRisk = clamp((weight-profile.tolerance)*0.045, 0, .55);
  return {issues, trustDelta, pricePressure, dropoutRisk};
}
function customerIssueWish(o, c){
  const assessment = ensureCustomerIssueAssessment(o, c);
  if(assessment.announced) return '';
  const required = uniqueBy(assessment.requiredIds.map(id=>(c.issues||[]).find(i=>i.id===id)).filter(Boolean).filter(i=>!i.repaired), issueUniqueKey);
  const discountable = uniqueBy(assessment.discountableIds.map(id=>(c.issues||[]).find(i=>i.id===id)).filter(Boolean).filter(i=>!i.repaired), issueUniqueKey);
  assessment.announced = true;
  if(required.length){
    required.forEach(i=>{ i.customerMentioned = true; createSaleCondition(o, c, i, 'customer'); });
    const labels = required.map(i=>i.label).join(', ');
    const discountText = discountable.length ? ` Kleinere Punkte wie ${discountable.slice(0,3).map(i=>i.label).join(', ')} würde ich mit einem fairen Preisnachlass akzeptieren.` : '';
    return `Grundsätzlich gefällt mir der Wagen. Vor dem Kauf müssten für mich aber noch folgende Punkte erledigt werden: ${labels}.${discountText}`;
  }
  if(discountable.length){
    const labels = discountable.slice(0,3).map(i=>i.label).join(', ');
    return `Ein paar Punkte wie ${labels} sehe ich, aber mit einem fairen Preisnachlass könnte ich damit leben.`;
  }
  return '';
}
function saleConditionText(condition){
  return condition ? (condition.label || condition.issueLabel || 'Kundenwunsch') : 'Kundenwunsch';
}
function createSaleCondition(o, c, issue, source){
  if(!o || !c || !issue) return null;
  // Fahrzeugakte ist die Wahrheit: fuer bereits reparierte Maengel entsteht nie wieder ein offener Kundenwunsch.
  if(issue.repaired){
    console.info('[Kundenpruefung] Ignorierter reparierter Mangel:', c.id, issue.id, issue.label, '(Quelle:', (source||'customer')+')');
    return null;
  }
  o.saleConditions = o.saleConditions || [];
  c.saleConditions = c.saleConditions || [];
  const issueKey = issueUniqueKey(issue);
  const existing = o.saleConditions.find(cond=>
    !['fulfilled','discountAccepted','rejected'].includes(cond.status) &&
    (cond.issueId===issue.id || issueUniqueKey(cond.issueLabel || cond.label)===issueKey)
  );
  if(existing) return existing;
  const condition = {
    id: uid('cond'),
    offerId:o.id,
    carId:c.id,
    customerName:o.name,
    issueId:issue.id,
    issueLabel:issue.label,
    category:issue.category,
    severity:issue.severity||1,
    repairCost:issue.cost||0,
    repairDays:issue.days||1,
    label:`${issue.label} beheben`,
    status:'open',
    source:source||'customer',
    createdDay:state.day,
  };
  o.saleConditions.push(condition);
  c.saleConditions.push({...condition});
  issue.customerMentioned = true;
  issue.discovered = true;
  return condition;
}
function syncCarSaleCondition(c, condition, status, extra){
  if(!c || !condition) return;
  c.saleConditions = c.saleConditions || [];
  const target = c.saleConditions.find(x=>x.id===condition.id) || c.saleConditions.find(x=>x.issueId===condition.issueId && x.offerId===condition.offerId);
  if(target) Object.assign(target, {status}, extra||{});
}
function conditionIssueRepaired(c, cond){
  if(!c || !cond) return false;
  const byId = cond.issueId ? (c.issues||[]).find(i=>i.id===cond.issueId) : null;
  const key = issueUniqueKey(cond.issueLabel || cond.label);
  const issue = byId || (c.issues||[]).find(i=>issueUniqueKey(i)===key);
  return !!(issue && issue.repaired);
}
// Kunde existiert nicht mehr (abgesprungen/abgeschlossen): Wunsch bleibt Historie, ist aber nicht mehr offen.
function conditionCustomerGone(cond){
  return !!(cond && cond.offerId && !(state.offers||[]).some(o=>o.id===cond.offerId));
}
// Fahrzeugseitige Sicht: nur Kundenwuensche, die weder geschlossen noch durch reparierte Maengel erledigt sind
// und deren Kunde noch aktiv ist.
function carOpenSaleConditions(c){
  const closed = ['fulfilled','discountAccepted','rejected'];
  return ((c && c.saleConditions) || []).filter(cond=>
    !closed.includes(cond.status) &&
    !conditionIssueRepaired(c, cond) &&
    !conditionCustomerGone(cond)
  );
}
// Zentraler Abgleich: schliesst alle Kundenwuensche, deren verknuepfter Mangel repariert wurde -
// unabhaengig davon, auf welchem Weg (Chat, Werkstatt direkt, Sammelauftrag) repariert wurde.
// silent=true aktualisiert nur den Status (Heilung alter Spielstaende beim Rendern, ohne Chat-Nachricht).
function fulfillSaleConditionsForRepairedIssues(c, opts){
  if(!c) return 0;
  const closed = ['fulfilled','discountAccepted','rejected'];
  const silent = !!(opts && opts.silent);
  const dbg = (...a)=>console.info('[Werkstatt]', ...a); // temporaeres Debug-Log
  let fulfilled = 0;
  const byOffer = new Map();
  (state.offers||[]).filter(o=>o.carId===c.id).forEach(o=>{
    (o.saleConditions||[]).forEach(cond=>{
      if(closed.includes(cond.status)) return;
      if(!conditionIssueRepaired(c, cond)) return;
      if(!silent) dbg('Kundenwunsch', cond.id, `"${cond.issueLabel||cond.label}"`, 'Status vorher:', cond.status);
      cond.status = 'fulfilled';
      cond.fulfilledDay = state.day;
      syncCarSaleCondition(c, cond, 'fulfilled', {fulfilledDay:state.day});
      if(!silent) dbg('Kundenwunsch', cond.id, 'Status nachher:', cond.status);
      fulfilled++;
      if(!byOffer.has(o.id)) byOffer.set(o.id, {offer:o, labels:[]});
      byOffer.get(o.id).labels.push(cond.issueLabel || saleConditionText(cond));
    });
  });
  // Fahrzeugkopien ohne zugehoeriges (noch aktives) Angebot ebenfalls schliessen
  (c.saleConditions||[]).forEach(cond=>{
    if(closed.includes(cond.status)) return;
    if(!conditionIssueRepaired(c, cond)) return;
    cond.status = 'fulfilled';
    cond.fulfilledDay = state.day;
    fulfilled++;
  });
  if(!silent){
    byOffer.forEach(entry=>{
      addMsg(entry.offer, 'customer', `Die gewünschten Arbeiten wurden erledigt (${entry.labels.join(', ')}). Das Fahrzeug ist jetzt bereit – für mich kann der Verkauf weitergehen.`);
      notify(`Kundenwunsch erfüllt: ${entry.offer.name} kann den Verkauf für ${c.brand} ${c.model} fortsetzen.`,'good');
    });
  }
  return fulfilled;
}
function openSaleConditions(o, c){
  if(!o || !c) return [];
  normalizeVehicleIssues(c);
  o.saleConditions = o.saleConditions || [];
  const assessment = ensureCustomerIssueAssessment(o, c);
  uniqueBy((assessment.requiredIds||[]).map(id=>(c.issues||[]).find(i=>i.id===id)).filter(Boolean).filter(i=>!i.repaired), issueUniqueKey).forEach(i=>createSaleCondition(o, c, i, 'stored-assessment'));
  o.saleConditions = uniqueBy(o.saleConditions, cond=>`${cond.offerId||o.id}|${issueUniqueKey(cond.issueLabel || cond.label)}`);
  if(c.saleConditions){
    c.saleConditions = uniqueBy(c.saleConditions, cond=>`${cond.offerId||''}|${issueUniqueKey(cond.issueLabel || cond.label)}`);
  }
  // Heilung: Wuensche, deren Mangel bereits repariert ist, still auf 'fulfilled' setzen (keine gecachten offenen Wuensche anzeigen)
  fulfillSaleConditionsForRepairedIssues(c, {silent:true});
  return uniqueBy(o.saleConditions.filter(cond=>!['fulfilled','discountAccepted','rejected'].includes(cond.status)), cond=>issueUniqueKey(cond.issueLabel || cond.label));
}
function conditionById(offerId, conditionId){
  const o = state.offers.find(x=>x.id===offerId);
  if(!o) return {};
  const c = findCar(o.carId);
  const condition = (o.saleConditions||[]).find(x=>x.id===conditionId);
  return {o,c,condition};
}
function initialCustomerMessage(o, c){
  const profile = ensureOfferAi(o, c);
  const price = money(o.amount);
  const wish = customerIssueWish(o, c);
  const suffix = wish ? ` ${wish}` : '';
  if(o.leadRealism==='unrealistic'){
    const methodText = o.paymentMethod==='leasing' ? 'Leasing' : o.paymentMethod==='finanzierung' ? 'Finanzierung' : 'Barzahlung';
    return choice([
      `Hallo, ich wollte einfach mal fragen: Wäre der ${c.brand} ${c.model} für ${price} irgendwie per ${methodText} machbar? Mir ist klar, dass das knapp werden könnte.${suffix}`,
      `Guten Tag, der ${c.brand} ${c.model} gefällt mir sehr. Vielleicht klappt es ja: Ich würde gern über ${methodText} sprechen, auch wenn mein Rahmen vermutlich nicht perfekt passt.${suffix}`,
      `Hallo, ich weiß nicht, ob das realistisch ist, aber ich interessiere mich für den ${c.brand} ${c.model}. Mein Gedanke wäre ${price} und ${methodText}.${suffix}`,
    ]);
  }
  if(profile.aiType==='Schnäppchenjäger') return `Hallo, ich habe den ${c.brand} ${c.model} gesehen. Wäre preislich ${price} machbar oder ist da noch Luft?${suffix}`;
  if(profile.aiType==='Vorsichtiger Kunde') return `Guten Tag, ich interessiere mich für den ${c.brand} ${c.model}. Können Sie mir Zustand, TÜV und Servicehistorie bestätigen? Mein Budget läge ungefähr bei ${price}.${suffix}`;
  if(profile.aiType==='Familienkunde') return `Hallo, der ${c.brand} ${c.model} könnte für unsere Familie passen. Wichtig wären mir Zuverlässigkeit und Sicherheit. Mein Angebot wäre ${price}.${suffix}`;
  if(profile.aiType==='Premiumkunde') return `Guten Tag, der ${c.brand} ${c.model} ist interessant, sofern Zustand und Ausstattung wirklich gepflegt sind. Ich würde mit ${price} einsteigen.${suffix}`;
  if(profile.aiType==='Unsicherer Kunde') return `Hallo, ich schaue mir gerade Ihren ${c.brand} ${c.model} an. Ich bin noch nicht ganz sicher, aber ${price} wäre für mich ungefähr der Rahmen.`;
  if(profile.aiType==='Ungeduldiger Kunde') return `Hallo, ist der ${c.brand} ${c.model} noch verfügbar? Wenn ja: ${price}, schnelle Abwicklung möglich?`;
  if(profile.aiType==='Stammkunde') return `Hallo, ich war schon einmal bei Ihnen zufrieden. Der ${c.brand} ${c.model} interessiert mich, mein Angebot wäre ${price}.`;
  return `Hallo, ich interessiere mich für Ihren ${c.brand} ${c.model}. Mein Angebot: ${price}.`;
}
function handleFreeTextReply(offerId, text){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const pipeline = runCustomerResponsePipeline(o, text);
  if(pipeline.analysis.tone==='rude'){
    state.reputation = clamp(state.reputation-1,0,100);
  }
  scheduleAiReply(o, pipeline, text);
  scheduleSave();
}

function renderListings(){
  const ids = Object.keys(state.listings);
  let html = `<h2 class="section-title">Inserate</h2><p class="subtle">${ids.length} aktive Inserate · ${state.offers.length} offene Kundenangebote</p>`;
  if(state.offers.length){
    html += `<h3 style="font-family:var(--font-d);font-size:13px;margin:6px 0 10px;">Eingehende Angebote</h3>`;
    html += state.offers.map(offerCard).join('');
  }
  html += `<h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 10px;">Alle Inserate</h3>`;
  if(ids.length===0){
    html += `<div class="empty-state"><div class="ic">📄</div>Noch keine Inserate. Erstellen Sie eines über den Fahrzeugbestand.</div>`;
  } else {
    html += `<div class="grid-cars">` + ids.map(id=>{
      const c = findCar(id); const l = state.listings[id];
      if(!c) return '';
      return `<div class="card">
        ${renderCarPhoto(c)}
        <div class="car-name">${c.brand} ${c.model}</div>
        <div class="car-sub">Seit Tag ${l.createdDay} · ${l.views} Aufrufe</div>
        <div class="spec-row">${paymentMethodBadges(l.allowedPaymentMethods)}${reservationChip(c)}</div>
        <div class="price-row"><span class="price">${money(l.price)}</span><span class="mval">Marktwert ${money(c.marketValue)}</span></div>
        <div class="row-actions">
          <button class="btn btn-ghost btn-sm" onclick="openListModal('${id}')">Bearbeiten</button>
          <button class="btn btn-danger btn-sm" onclick="unlistCar('${id}')">Inserat entfernen</button>
        </div>
      </div>`;
    }).join('') + `</div>`;
  }
  return html;
}
function offerCard(o){
  const c = findCar(o.carId);
  if(!c) return '';
  const l = state.listings[o.carId];
  const pmIcon = o.paymentMethod==='bar'?'💵':(o.paymentMethod==='finanzierung'?'🏦':'📄');
  const pmLabel = o.paymentMethod==='bar'?'Barzahlung':(o.paymentMethod==='finanzierung'?'Finanzierung':'Leasing');
  const desiredSaleMethod = ensureSaleMethodPreference(o);
  const conditions = openSaleConditions(o, c);
  return `<div class="offer-card">
    <div class="offer-head">
      <span><b>${o.name}</b> — ${c.brand} ${c.model}</span>
      <span class="persona">${o.persona}</span>
    </div>
    <p class="subtle" style="margin:0 0 6px;">Angebot: <b style="color:var(--amber);font-family:var(--font-m);">${money(o.amount)}</b> (Listenpreis ${money(l?l.price:c.marketValue)}) · Geduld: ${o.patience} Tag(e)</p>
    <div class="spec-row" style="margin-bottom:10px;">
      <span class="chip">${pmIcon} ${pmLabel}</span>
      <span class="chip">Wunsch: ${saleMethodLabel(desiredSaleMethod)}</span>
      ${l?paymentMethodBadges(l.allowedPaymentMethods):''}
      ${o.job?`<span class="chip">💼 ${o.job}</span>`:''}
      ${o.creditScore!=null?`<span class="chip">Bonität ${o.creditScore}/100</span>`:''}
      ${conditions.length?`<span class="chip" style="color:var(--crimson);border-color:rgba(224,85,92,.42);">Offener Kundenwunsch: ${escapeHtml(saleConditionText(conditions[0]))}</span>`:''}
    </div>
    <div class="row-actions">
      <button class="btn btn-danger btn-sm" onclick="respondOffer('${o.id}','reject')">Ablehnen</button>
      <button class="btn btn-ghost btn-sm" onclick="respondOffer('${o.id}','counter')">Gegenangebot</button>
      <button class="btn btn-primary btn-sm" onclick="respondOffer('${o.id}','accept')">Angebot akzeptieren</button>
    </div>
  </div>`;
}
function respondOffer(offerId, action){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  if(o.applicationPending && (action==='reject'||action==='accept')){ notify('Der Antrag läuft noch bei der Bank – bitte abwarten.','info'); return; }
  const c = findCar(o.carId);
  if(!c){ notify('Fahrzeug nicht mehr im Bestand.', 'warn'); return; }
  if(action==='reject'){
    addMsg(o, 'player', `Vielen Dank für Ihr Interesse, leider müssen wir ablehnen.`);
    closeConversationForCustomer(o, -3);
    state.offers = state.offers.filter(x=>x.id!==offerId);
    notify(`Angebot von ${o.name} abgelehnt.`,'info');
    renderAllOpen(); scheduleSave();
  } else if(action==='accept'){
    const issueImpact = customerIssueImpact(o, c);
    const blockingIssue = issueImpact.issues.find(i=>!i.repaired && (i.customerMentioned || (i.severity||1)>=3));
    if(blockingIssue) createSaleCondition(o, c, blockingIssue, 'accept-check');
    const conditions = openSaleConditions(o, c);
    if(conditions.length){ showOpenSaleConditionModal(o.id, conditions[0].id); return; }
    addMsg(o, 'player', `Ich akzeptiere Ihr Angebot über ${money(o.amount)}. Bitte wählen wir jetzt die passende Verkaufsart.`);
    openSaleMethodModal(o.id);
    renderAllOpen(); scheduleSave();
  } else if(action==='counter'){
    openCounterModal(offerId);
  }
}
function openCounterModal(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const l = state.listings[o.carId];
  const askPrice = l? l.price : c.marketValue;
  const round = o.round||1;
  const suggested = clamp(Math.round((o.amount+askPrice)/2/10)*10, o.amount, askPrice);
  showModal(`
    <h2 class="section-title">Gegenangebot an ${o.name} ${round>1?'· Runde '+round+'/3':''}</h2>
    <p class="subtle">Kundenangebot: ${money(o.amount)} · Ihr Listenpreis: ${money(askPrice)}</p>
    <div class="field">
      <label>Ihr Gegenangebot: <span id="counterlbl" style="color:var(--amber);font-family:var(--font-m);">${money(suggested)}</span></label>
      <div style="display:flex;gap:10px;align-items:center;">
        <input type="range" min="${o.amount}" max="${askPrice}" value="${suggested}" oninput="syncFromRange('counter', this.value, ${o.amount}, ${askPrice}, '_counterVal')" id="counterRange" style="flex:1;">
        <input type="number" min="${o.amount}" max="${askPrice}" step="10" value="${suggested}" oninput="syncFromNumber('counter', this.value, ${o.amount}, ${askPrice}, '_counterVal')" onblur="snapNumberField('counter', ${o.amount}, ${askPrice}, '_counterVal')" id="counterNumber" style="width:130px;flex:0 0 auto;">
      </div>
    </div>
    <div class="notice">Je näher Ihr Preis am Kundenangebot liegt, desto wahrscheinlicher wird er akzeptiert. Ein zu hoher Preis kann den Kunden verärgern.</div>
    <div class="row-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Abbrechen</button>
      <button class="btn btn-primary" onclick="sendCounter('${offerId}')">Gegenangebot senden</button>
    </div>
  `);
  window._counterVal = suggested;
}
function sendCounter(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c){ closeModal(); return; }
  const price = window._counterVal;
  const round = o.round||1;
  closeModal();
  addMsg(o, 'player', `Mein Gegenangebot: ${money(price)}.`);
  const acceptChance = clamp(0.78 - (price-o.amount)/Math.max(1,o.amount)*1.5 + (round-1)*0.06, 0.06, 0.95);
  if(Math.random()<acceptChance){
    addMsg(o, 'customer', `Einverstanden, ${money(price)} passt für mich!`);
    o.amount = price;
    openSaleMethodModal(offerId);
    renderAllOpen(); scheduleSave();
    return;
  }
  if(round>=3){
    // letzte Runde: Kunde bleibt bei seinem zuletzt genannten Angebot – keine weitere Verhandlung mehr
    addMsg(o, 'customer', `Ich bleibe bei ${money(o.amount)}, mehr Verhandlungsspielraum habe ich leider nicht.`);
    showModal(`
      <h2 class="section-title">${o.name} bleibt hart</h2>
      <p class="subtle">Nach mehreren Runden bietet ${o.name} nicht mehr als <b>${money(o.amount)}</b> und ist nicht weiter verhandlungsbereit.</p>
      <div class="row-actions">
        <button class="btn btn-ghost" onclick="closeModal();respondOffer('${offerId}','reject')">Ablehnen</button>
        <button class="btn btn-primary" onclick="closeModal();respondOffer('${offerId}','accept')">Angebot akzeptieren (${money(o.amount)})</button>
      </div>
    `);
    renderAllOpen(); scheduleSave();
    return;
  }
  if(o.patience>1 && Math.random()<0.65){
    // Kunde bleibt dran, erhöht sein Angebot etwas und wartet auf Ihre nächste Runde
    const raise = Math.round((o.amount + (price-o.amount)*randFloat(0.3,0.6))/10)*10;
    o.amount = Math.max(o.amount, raise);
    o.round = round+1;
    o.patience -= 1;
    addMsg(o, 'customer', `Ich könnte auf ${money(o.amount)} gehen, wäre das für Sie machbar?`);
    notify(`${o.name} erhöht sein Angebot auf ${money(o.amount)} und wartet auf Ihre Antwort.`,'info');
    renderAllOpen(); scheduleSave();
    openCounterModal(offerId);
  } else {
    addMsg(o, 'customer', `Das ist mir zu weit auseinander, ich steige aus.`);
    closeConversationForCustomer(o, -4);
    state.offers = state.offers.filter(x=>x.id!==o.id);
    notify(`${o.name} lehnt Ihr Gegenangebot von ${money(price)} ab und springt ab.`,'warn');
    showDropoutModal(
      'sale',
      'Kunde abgesprungen',
      `${o.name} hat die Verhandlung abgebrochen.`,
      `Grund: Gegenangebot ${money(price)} war zu weit vom Kundenrahmen entfernt.`
    );
    renderAllOpen(); scheduleSave();
  }
}
function preferredSaleMethod(o){
  const text = ((o.messages||[]).map(m=>m.text).join(' ')+' '+(o.paymentMethod||'')).toLowerCase();
  if(/bar|cash|sofort|überweise|ueberweise/.test(text)) return 'bar';
  if(/leasing|leasen/.test(text)) return 'leasing';
  if(/finanz|rate|raten|monatlich|kredit/.test(text)) return 'finanzierung';
  return o.paymentMethod || 'bar';
}
function saleMethodLabel(method){
  return method==='bar' ? 'Barzahlung' : method==='finanzierung' ? 'Finanzierung' : 'Leasing';
}
function ensureSaleMethodPreference(o){
  if(!o) return 'bar';
  if(!o.desiredSaleMethod) o.desiredSaleMethod = preferredSaleMethod(o);
  o.approvedSaleMethods = Array.isArray(o.approvedSaleMethods) ? o.approvedSaleMethods : [];
  if(!o.approvedSaleMethods.includes(o.desiredSaleMethod)) o.approvedSaleMethods.push(o.desiredSaleMethod);
  return o.desiredSaleMethod;
}
function isSaleMethodAllowed(o, method){
  ensureSaleMethodPreference(o);
  return (o.approvedSaleMethods||[]).includes(method);
}
function saleMethodFlexibility(o){
  const profile = ensureOfferAi(o, findCar(o.carId)) || {};
  const type = profile.aiType || o.persona || '';
  let flex = 0.34 + (profile.negotiation||50)/300 + (profile.trust||50)/420 - (profile.riskAwareness||50)/520;
  if(type==='Unsicherer Kunde') flex += 0.20;
  if(type==='Direkter Kunde' || type==='Ungeduldiger Kunde') flex -= 0.10;
  if(type==='Premiumkunde' || type==='Luxuskäufer') flex += 0.10;
  if(String(o.job||'').toLowerCase().includes('geschäft') || String(o.job||'').toLowerCase().includes('selbst')) flex -= 0.06;
  return clamp(flex, 0.08, 0.86);
}
function saleMethodSwitchChance(o, method){
  const desired = ensureSaleMethodPreference(o);
  if(method===desired) return 1;
  let chance = saleMethodFlexibility(o);
  if(desired==='leasing' && method==='finanzierung') chance += 0.10;
  if(desired==='finanzierung' && method==='leasing') chance -= 0.04;
  if(method==='bar') chance += o.amount < (financingWealthEstimate(o, o.amount)||0)*0.75 ? 0.12 : -0.18;
  if(desired==='bar' && method!=='bar') chance -= 0.24;
  return clamp(chance, 0.04, 0.9);
}
function requestSaleMethodSwitch(offerId, method, reopenSaleModal){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const desired = ensureSaleMethodPreference(o);
  const chance = saleMethodSwitchChance(o, method);
  addMsg(o, 'player', `Darf ich Ihnen statt ${saleMethodLabel(desired)} ${saleMethodLabel(method)} anbieten?`);
  if(Math.random()<chance){
    o.approvedSaleMethods = Array.isArray(o.approvedSaleMethods) ? o.approvedSaleMethods : [desired];
    if(!o.approvedSaleMethods.includes(method)) o.approvedSaleMethods.push(method);
    o.paymentMethod = method;
    const line = method==='bar'
      ? `Wenn Sie mir preislich etwas entgegenkommen, ist Barzahlung für mich auch in Ordnung.`
      : method==='finanzierung'
        ? `Eigentlich wollte ich ${saleMethodLabel(desired)}, aber bei passenden Konditionen wäre Finanzierung für mich ebenfalls denkbar.`
        : `Eigentlich wollte ich ${saleMethodLabel(desired)}, aber ein transparentes Leasingangebot kann ich mir vorstellen.`;
    addMsg(o, 'customer', line);
    notify(`${o.name} akzeptiert ${saleMethodLabel(method)} als Alternative.`, 'good');
    closeModal(); if(reopenSaleModal) openSaleMethodModal(offerId);
  } else {
    addMsg(o, 'customer', `Nein, ich möchte ausdrücklich ${saleMethodLabel(desired)}. ${saleMethodLabel(method)} kommt für mich aktuell nicht infrage.`);
    notify(`${o.name} bleibt bei ${saleMethodLabel(desired)}.`, 'warn');
    closeModal(); if(reopenSaleModal) openSaleMethodModal(offerId);
  }
  renderAllOpen(); scheduleSave();
}
function saleMethodCard(offerId, method, title, text, selected, allowed, offered){
  const meta = {
    bar: {
      icon:'💶', accent:'#3ecf7f',
      pros:['Sofortiger Zahlungseingang','Keine Bankprüfung'],
      cons:['Keine laufenden Einnahmen']
    },
    finanzierung: {
      icon:'🏦', accent:'#5c86ff',
      pros:['Ratenzahlung mit Bankprüfung','Laufende Einnahmen möglich'],
      cons:['Genehmigung abhängig von Bonität']
    },
    leasing: {
      icon:'📄', accent:'#8b7ff0',
      pros:['Monatliche Leasingraten','Klare Vertragslaufzeit'],
      cons:['Rückgabe und Vertragsende beachten']
    }
  }[method] || {icon:'✓', accent:'var(--brass)', pros:[], cons:[]};
  const tag = selected ? 'Kundenwunsch' : (!offered && !allowed ? 'nicht inseriert' : (allowed ? 'zugestimmt' : 'Zustimmung nötig'));
  return `<button class="sale-method-card ${selected?'selected':''} ${(allowed && offered) || selected?'':'blocked'}" style="--sale-a:${meta.accent};" onclick="chooseSaleMethod('${offerId}','${method}')">
    <span class="sale-icon">${meta.icon}</span>
    <div>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </div>
    <ul>
      ${meta.pros.map(x=>`<li><b>+</b><span>${escapeHtml(x)}</span></li>`).join('')}
      ${meta.cons.map(x=>`<li><b>!</b><span>${escapeHtml(x)}</span></li>`).join('')}
    </ul>
    <span class="sale-method-tag">${escapeHtml(tag)}</span>
  </button>`;
}
function openSaleMethodModal(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const listing = state.listings[o.carId];
  const preferred = ensureSaleMethodPreference(o);
  const listingMethods = listingAllowedPaymentMethods(listing);
  showModal(`
    <div class="sale-method-hero">
      <div>
        <h2>Verkaufsart wählen</h2>
        <p>${o.name} hat den Preis von <b>${money(o.amount)}</b> für ${c.brand} ${c.model} akzeptiert. Wählen Sie bewusst, welcher Abschlussprozess gestartet wird.</p>
      </div>
      <div class="sale-method-preference">Wunsch: ${saleMethodLabel(preferred)}</div>
    </div>
    <div class="sale-method-grid">
      ${saleMethodCard(offerId,'bar','Barzahlung','Sofortiger Zahlungseingang, keine Bankprüfung.', preferred==='bar', isSaleMethodAllowed(o,'bar'), listingMethods.includes('bar'))}
      ${saleMethodCard(offerId,'finanzierung','Finanzierung','Ratenzahlung mit Bankprüfung und laufenden Einnahmen.', preferred==='finanzierung', isSaleMethodAllowed(o,'finanzierung'), listingMethods.includes('finanzierung'))}
      ${saleMethodCard(offerId,'leasing','Leasing','Monatliche Leasingraten mit Vertragslaufzeit.', preferred==='leasing', isSaleMethodAllowed(o,'leasing'), listingMethods.includes('leasing'))}
    </div>
    <div class="notice" style="display:block;">Im Inserat angeboten: ${paymentMethodBadges(listingMethods)}<br>Wenn eine Alternative nicht dem Kundenwunsch oder dem Inserat entspricht, wird zuerst eine Zustimmung im Chat eingeholt.</div>
    <button class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:8px;" onclick="closeModal()">Abbrechen</button>
  `, 'sale-method-modal');
}
function chooseSaleMethod(offerId, method){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const offeredInListing = listingPaymentMethodOffered(o, method);
  const alreadyApproved = (o.approvedSaleMethods||[]).includes(method);
  if(!offeredInListing && !alreadyApproved){
    notify('Diese Zahlungsart wurde im Inserat nicht angeboten.', 'warn');
    requestSaleMethodSwitch(offerId, method, true);
    return;
  }
  if(!isSaleMethodAllowed(o, method)){
    requestSaleMethodSwitch(offerId, method, true);
    return;
  }
  o.paymentMethod = method;
  if(method==='bar'){
    closeModal();
    addMsg(o, 'player', `Wir schließen den Verkauf per Barzahlung ab. Ich erstelle den Kaufvertrag und verbuche die Zahlung.`);
    completeSaleFlow(c, o.amount, o, null);
    renderAllOpen(); scheduleSave();
    return;
  }
  if(method==='finanzierung'){ openSaleFinancingModal(offerId); return; }
  if(method==='leasing'){ openSaleLeasingModal(offerId); return; }
}
function normalizeFinanceConfig(o, config){
  config = config || {};
  const vehiclePrice = Math.max(0, Math.round(Number(config.vehiclePrice ?? o.amount ?? 0)));
  const downPayment = clamp(Math.round(Number(config.downPayment ?? 0)/10)*10, 0, vehiclePrice);
  const requestedMonths = Number(config.months ?? config.termMonths ?? 60);
  const termMonths = FINANCING_TERMS.includes(requestedMonths)
    ? requestedMonths
    : FINANCING_TERMS.reduce((best,m)=>Math.abs(m-requestedMonths)<Math.abs(best-requestedMonths)?m:best, FINANCING_TERMS[0]);
  let annualInterestRate = config.annualRate ?? config.annualInterestRate ?? config.nominalRate;
  if(annualInterestRate!==undefined){
    annualInterestRate = Number(annualInterestRate)||0;
    if(annualInterestRate>1) annualInterestRate = annualInterestRate/100;
    annualInterestRate = clamp(annualInterestRate, 0, 0.22);
  }
  return {vehiclePrice, downPayment, termMonths, annualInterestRate};
}
function calculateFinanceOffer(o, vehicle, config){
  const normalized = normalizeFinanceConfig(o, config);
  const calc = calcFinancing(normalized.vehiclePrice, o.creditScore||60, {
    months: normalized.termMonths,
    downPayment: normalized.downPayment,
    annualRate: normalized.annualInterestRate,
    offer:o
  });
  const bank = evaluateBankApproval(o, calc);
  if(bank.requiredDownPayment!==undefined) bank.requiredDownPayment = clamp(Math.round(bank.requiredDownPayment/10)*10, 0, normalized.vehiclePrice);
  if(bank.requiredMonthlyPayment!==undefined) bank.requiredMonthlyPayment = Math.max(0, Math.round(bank.requiredMonthlyPayment/10)*10);
  const fit = evaluateFinancingPriorities(o, calc);
  const approvalChance = customerFinancingAcceptanceChance(o, calc);
  const warnings = [];
  if(calc.downPayment<0 || calc.downPayment>normalized.vehiclePrice) warnings.push('Anzahlung außerhalb plausibler Grenzen.');
  if(calc.principal!==normalized.vehiclePrice-calc.downPayment) warnings.push('Finanzierungsbetrag stimmt nicht mit Preis minus Anzahlung überein.');
  if(bank.result==='rejected') warnings.push(bank.note || 'Bank lehnt ab.');
  if(fit.mustViolated.length) warnings.push('Mindestens eine Muss-Bedingung des Kunden ist verletzt.');
  const customerApproved = !fit.mustViolated.length;
  const bankApproved = !!bank.approved;
  const status = !customerApproved ? 'customer-blocked' : (bank.result==='rejected' ? 'bank-rejected' : (!bankApproved ? 'bank-conditions' : (fit.wishIssues.length ? 'negotiable' : 'ready')));
  const debug = {
    vehiclePrice: normalized.vehiclePrice,
    downPayment: calc.downPayment,
    financedAmount: calc.principal,
    termMonths: calc.months,
    annualInterestRate: calc.nominalRate,
    monthlyInterestRate: calc.nominalRate/12,
    monthlyRate: calc.monthlyPayment,
    customerIncome: fit.priorities.income,
    customerCreditScore: clamp(o.creditScore||60, 0, 100),
    maxAffordableRate: bank.maxAffordableRate,
    customerMaxRate: fit.results.find(x=>x.type==='monthlyMax')?.value || 0,
    bankMaxRate: bank.maxAffordableRate,
    debtToIncomeRatio: bank.debtToIncomeRatio,
    maxDebtToIncomeRatio: bank.maxDebtToIncomeRatio,
    minimumDownPayment: bank.minimumDownPayment,
    actualDownPayment: bank.actualDownPayment,
    riskScore: bank.riskScore,
    bankApproved,
    customerApproved,
    rejectionReason: bank.reason || warnings.join(' ') || '',
    failedBankCheck: (bank.failedChecks||[]).map(x=>x.label).join(', ') || 'keine',
  };
  return {
    ...calc,
    vehiclePrice: normalized.vehiclePrice,
    financedAmount: calc.principal,
    termMonths: calc.months,
    annualInterestRate: calc.nominalRate,
    monthlyInterestRate: calc.nominalRate/12,
    monthlyRate: calc.monthlyPayment,
    totalPayment: calc.totalCost,
    customerChecks: fit.results,
    customerEvaluation: fit,
    bank,
    bankCheck: bank,
    evals: fit,
    chance: approvalChance,
    customerChance: approvalChance,
    approvalChance,
    status,
    warnings,
    suggestions: config?.skipSuggestions ? [] : financingSuggestionTexts(o, calc, bank, fit),
    debug,
  };
}
function financeResultFor(o, calcOrResult){
  if(calcOrResult && calcOrResult.debug) return calcOrResult;
  return calculateFinanceOffer(o, findCar(o.carId), {
    vehiclePrice:o.amount,
    downPayment:calcOrResult?.downPayment,
    months:calcOrResult?.months,
    annualRate:calcOrResult?.nominalRate
  });
}
function findBankableFinanceForTerm(o, months){
  const price = Math.max(0, Math.round(o.amount||0));
  const wealth = financingWealthEstimate(o, price);
  const maxCustomerDown = clamp(Math.round(Math.min(price, wealth)/10)*10, 0, price);
  const test = downPayment=>calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:price, months, downPayment, skipSuggestions:true});
  const zero = test(0);
  const max = test(maxCustomerDown);
  const bankLimit = zero.bankCheck.maxAffordableRate || max.bankCheck.maxAffordableRate || 0;
  if(zero.bankCheck.approved) return {possible:true, result:zero, requiredDownPayment:0, maxCustomerDown, bankLimit, maxFinancedAmount:price};
  if(!max.bankCheck.approved){
    return {possible:false, result:max, requiredDownPayment:null, maxCustomerDown, bankLimit, maxFinancedAmount:Math.max(0, price-maxCustomerDown), reason:max.bankCheck.reason || max.bankCheck.note || 'Keine bankfähige Finanzierung bei dieser Laufzeit.'};
  }
  let lo = 0;
  let hi = maxCustomerDown;
  let best = max;
  for(let i=0;i<24;i++){
    const mid = Math.round(((lo+hi)/2)/10)*10;
    const candidate = test(mid);
    if(candidate.bankCheck.approved){
      best = candidate;
      hi = mid - 10;
    } else {
      lo = mid + 10;
    }
  }
  return {possible:true, result:best, requiredDownPayment:best.downPayment, maxCustomerDown, bankLimit, maxFinancedAmount:Math.max(0, price-best.downPayment)};
}
function analyzeBankableFinancing(o, current){
  const price = Math.max(0, Math.round(o.amount||current?.vehiclePrice||0));
  const wealth = financingWealthEstimate(o, price);
  const byTerm = FINANCING_TERMS.map(months=>findBankableFinanceForTerm(o, months));
  const possible = byTerm.filter(x=>x.possible);
  const best = possible.slice().sort((a,b)=>a.requiredDownPayment-b.requiredDownPayment || a.result.monthlyPayment-b.result.monthlyPayment)[0] || null;
  const longest = byTerm[byTerm.length-1];
  const currentTermPlan = byTerm.find(x=>x.result?.months===current?.months || x.result?.termMonths===current?.termMonths) || null;
  const noBankableReason = !best
    ? (longest?.result?.monthlyPayment > (longest?.bankLimit||0)
      ? `Rate bleibt selbst bei maximaler Laufzeit und ${money(longest.maxCustomerDown)} Anzahlung über dem Banklimit.`
      : `Notwendige Anzahlung übersteigt das Kundenvermögen von ${money(wealth)}.`)
    : '';
  return {
    vehiclePrice:price,
    wealth,
    byTerm,
    possible,
    best,
    longest,
    currentTermPlan,
    maxCustomerDown:Math.min(price, Math.round(wealth/10)*10),
    bankable:!!best,
    noBankableReason,
  };
}
function financingTargetOptions(o, downPayment){
  return FINANCING_TERMS.map(months=>calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:o.amount, months, downPayment}));
}
function solveFinancingForTargetRate(o, downPayment, targetRate){
  const options = financingTargetOptions(o, downPayment).sort((a,b)=>a.months-b.months);
  const possible = options.filter(opt=>opt.monthlyPayment<=targetRate);
  const lowest = options.reduce((best,opt)=>!best || opt.monthlyPayment<best.monthlyPayment ? opt : best, null);
  const best = possible[0] || lowest;
  return {
    possible: possible.length>0,
    calc: best,
    alternatives: possible.slice(0,3),
    lowest,
    targetRate,
  };
}
function solveFinancingForFixedTermTarget(o, months, downPayment, targetRate){
  const price = Math.max(0, Math.round(o.amount||0));
  const maxDown = financingMaxDownPayment(o);
  const current = calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:price, months, downPayment});
  const maxed = calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:price, months, downPayment:maxDown});
  if(current.monthlyPayment<=targetRate){
    return {mode:'fixed-term', possible:true, calc:current, targetRate, requiredDownPayment:downPayment, current, maxed};
  }
  if(maxed.monthlyPayment>targetRate){
    return {mode:'fixed-term', possible:false, calc:current, targetRate, requiredDownPayment:null, current, maxed};
  }
  let lo = downPayment;
  let hi = maxDown;
  let best = maxed;
  for(let i=0;i<24;i++){
    const mid = Math.round(((lo+hi)/2)/10)*10;
    const candidate = calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:price, months, downPayment:mid});
    if(candidate.monthlyPayment<=targetRate){
      best = candidate;
      hi = mid - 10;
    } else {
      lo = mid + 10;
    }
  }
  return {mode:'fixed-term', possible:true, calc:current, targetRate, requiredDownPayment:best.downPayment, requiredCalc:best, current, maxed};
}
function financingTargetBounds(o, downPayment){
  const options = financingTargetOptions(o, downPayment);
  const minRate = Math.min(...options.map(x=>x.monthlyPayment));
  const maxRate = Math.max(...options.map(x=>x.monthlyPayment));
  return {
    min: Math.max(25, Math.floor(minRate*.65/10)*10),
    max: Math.max(maxRate+100, Math.ceil(maxRate*1.12/10)*10),
    minRate,
    maxRate,
  };
}
function preferredMonthlyTarget(o, calc){
  const evalBase = ensureFinancingPriorities(o, o.amount);
  const monthlyMust = (evalBase.items||[]).find(x=>x.type==='monthlyMax' && x.priority==='must');
  const monthlyWish = (evalBase.items||[]).find(x=>x.type==='monthlyMax');
  return Math.round((monthlyMust?.value || monthlyWish?.value || calc.monthlyPayment)/10)*10;
}
function financingMaxDownPayment(o){
  const amount = Math.max(0, o.amount||0);
  const profile = financingCapacityProfile(o, amount);
  const assetBackedMax = Math.max(amount*.35, Math.min(amount*.72, profile.wealth*.72));
  return Math.round(clamp(assetBackedMax, amount*.25, amount*.72)/10)*10;
}
function financingDownPaymentCandidates(o){
  const priorities = ensureFinancingPriorities(o, o.amount);
  const downMax = (priorities.items||[]).find(x=>x.type==='downMax')?.value || Math.round(o.amount*.18/10)*10;
  const maxUi = financingMaxDownPayment(o);
  const set = new Set([0, Math.round(o.amount*.05/10)*10, Math.round(o.amount*.1/10)*10, Math.round(o.amount*.15/10)*10, Math.round(o.amount*.2/10)*10, Math.round(o.amount*.3/10)*10, Math.round(o.amount*.45/10)*10, downMax]);
  const step = o.amount>150000 ? 5000 : 500;
  for(let d=Math.max(0, downMax-step*2); d<=Math.min(maxUi, downMax+step*4); d+=step) set.add(Math.round(d/10)*10);
  return [...set].filter(v=>v>=0 && v<=maxUi).sort((a,b)=>a-b);
}
function scoreFinancingOption(o, calc){
  const result = financeResultFor(o, calc);
  const bank = result.bankCheck;
  const evals = result.customerEvaluation;
  const chance = result.approvalChance;
  let score = chance*100;
  if(bank.result==='approved') score += 28;
  else if(bank.result==='higher_down' || bank.result==='shorter_term' || bank.result==='higher_rate') score += 8;
  else score -= 80;
  score -= evals.mustViolated.length*55;
  score -= evals.wishIssues.length*12;
  score -= evals.prefIssues.length*3;
  score -= Math.max(0, result.months-72)*0.7;
  score -= Math.max(0, result.totalInterest/Math.max(1,result.principal)-0.22)*18;
  return {score, bank, evals, chance};
}
function bestFinancingOptions(o){
  const candidates = [];
  financingDownPaymentCandidates(o).forEach(downPayment=>{
    FINANCING_TERMS.forEach(months=>{
      const calc = calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:o.amount, months, downPayment});
      const rated = scoreFinancingOption(o, calc);
      candidates.push({...calc, ...rated});
    });
  });
  analyzeBankableFinancing(o).possible.forEach(plan=>{
    const rated = scoreFinancingOption(o, plan.result);
    candidates.push({...plan.result, ...rated});
  });
  const unique = uniqueBy(candidates, x=>`${x.downPayment}|${x.months}|${x.monthlyPayment}`);
  const approved = unique.filter(x=>x.bankCheck.approved);
  if(!approved.length) return [];
  const sorted = approved.slice().sort((a,b)=>b.score-a.score);
  const seeds = [
    sorted[0],
    approved.slice().sort((a,b)=>a.monthlyPayment-b.monthlyPayment || b.score-a.score)[0],
    approved.slice().sort((a,b)=>a.downPayment-b.downPayment || b.score-a.score)[0],
    approved.slice().sort((a,b)=>a.months-b.months || b.score-a.score)[0],
    ...sorted
  ].filter(Boolean);
  const picked = [];
  const diverseEnough = (a,b)=>(
    Math.abs(a.monthlyPayment-b.monthlyPayment) >= Math.max(100, (o.amount||0)*0.0015) ||
    Math.abs(a.downPayment-b.downPayment) >= Math.max(500, (o.amount||0)*0.04) ||
    Math.abs(a.months-b.months) >= 12
  );
  seeds.forEach(option=>{
    if(picked.length>=3) return;
    if(picked.every(existing=>diverseEnough(option, existing))) picked.push(option);
  });
  return picked.length ? picked : sorted.slice(0,3);
}
function financingSuggestionTexts(o, calc, bank, fit){
  const suggestions = [];
  const monthly = fit.results.find(x=>x.type==='monthlyMax' && x.status!=='fulfilled');
  const down = fit.results.find(x=>x.type==='downMax' && x.status!=='fulfilled');
  const term = fit.results.find(x=>(x.type==='minMonths' || x.type==='desiredMonths') && x.status!=='fulfilled');
  if(monthly){
    const match = FINANCING_TERMS.find(m=>m>calc.months && calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:o.amount, months:m, downPayment:calc.downPayment, skipSuggestions:true}).monthlyPayment<=monthly.value);
    if(match) suggestions.push(`Eine Laufzeit von ${match} Monaten würde die Monatsrate unter ${money(monthly.value)} senken.`);
  }
  if(down) suggestions.push(`Die Anzahlung sollte höchstens ${money(down.value)} betragen, damit der Kundenwunsch erfüllt bleibt.`);
  if(term) suggestions.push(`Bei ${term.value} Monaten liegt das Angebot näher an der gewünschten Laufzeit.`);
  if(bank.result==='higher_down') suggestions.push(`${money(Math.max(500, (bank.requiredDownPayment||0)-calc.downPayment))} mehr Anzahlung können die Bankgenehmigung deutlich verbessern.`);
  if(bank.result==='shorter_term') suggestions.push(`Die Bank bevorzugt maximal ${bank.requiredMonths} Monate Laufzeit.`);
  if(bank.result==='higher_rate') suggestions.push(`Die Bank verlangt voraussichtlich einen Risikoaufschlag auf den Zinssatz.`);
  if(bank.result==='rejected'){
    if(bank.requiredMonthlyPayment) suggestions.push(`Mit etwa ${money(bank.requiredMonthlyPayment)} Monatsrate wäre die Finanzierung für die Bank realistischer.`);
    if(bank.requiredDownPayment && bank.requiredDownPayment>calc.downPayment) suggestions.push(`Bei einer Anzahlung von rund ${money(bank.requiredDownPayment)} wäre eine Genehmigung wahrscheinlicher.`);
    suggestions.push(`Wenn diese Konditionen nicht tragbar sind, sollte der Kunde Barzahlung, Leasing oder ein günstigeres Fahrzeug prüfen.`);
  }
  const allGood = !fit.mustViolated.length && !fit.wishIssues.length && bank.result==='approved';
  if(allGood) suggestions.push(`Dieses Angebot erfüllt die Kundenanforderungen und ist bankseitig genehmigungsfähig.`);
  return suggestions.slice(0,3);
}
function financingSnapshot(financing){
  if(!financing) return null;
  return {
    vehiclePrice: financing.vehiclePrice,
    downPayment: financing.downPayment,
    months: financing.months,
    nominalRate: financing.nominalRate,
    principal: financing.principal,
    monthlyPayment: financing.monthlyPayment,
    totalCost: financing.totalCost,
    totalInterest: financing.totalInterest,
  };
}
function setPendingSaleFinancingOffer(o, financing, source){
  if(!o || !financing) return financing;
  o.pendingFinancingOffer = financing;
  o.pendingFinancingSource = source || 'preview';
  o.pendingFinancingSnapshot = financingSnapshot(financing);
  return financing;
}
function openSaleFinancingModal(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const down = o.financingOffer?.downPayment ?? Math.round(o.amount*0.12/10)*10;
  const months = o.financingOffer?.months || 60;
  const calc = calculateFinanceOffer(o, c, {vehiclePrice:o.amount, months, downPayment:down});
  const target = preferredMonthlyTarget(o, calc);
  const targetBounds = financingTargetBounds(o, down);
  const solved = solveFinancingForTargetRate(o, down, target);
  const initialCalc = solved.possible ? solved.calc : calc;
  setPendingSaleFinancingOffer(o, initialCalc, 'open');
  showModal(`
    <h2 class="section-title">Finanzierung konfigurieren</h2>
    <p class="subtle">${o.name} · ${c.brand} ${c.model} · Fahrzeugpreis ${money(o.amount)}</p>
    <div class="notice" style="display:block;">
      <b>Finanzierungs-Konfigurator</b><br>
      Erstellen Sie ein Angebot, das Bankvorgaben und Kundenanforderungen möglichst gut zusammenbringt.
      <button class="btn btn-primary btn-sm" style="margin-top:10px;" onclick="applyOptimalSaleFinancing('${offerId}')">✨ Optimales Angebot berechnen</button>
    </div>
    <div class="field"><label>Anzahlung: <span id="saleFinDownLbl" style="color:var(--brass);font-family:var(--font-m);">${money(down)}</span></label>
      <input id="saleFinDown" type="range" min="0" max="${financingMaxDownPayment(o)}" step="10" value="${down}" oninput="updateSaleFinancingPreview('${offerId}','target')">
    </div>
    <div class="field"><label>Laufzeit</label>
      <select id="saleFinMonths" onchange="updateSaleFinancingPreview('${offerId}','manual')">${FINANCING_TERMS.map(m=>`<option value="${m}" ${m===initialCalc.months?'selected':''}>${m} Monate</option>`).join('')}</select>
    </div>
    <div class="field">
      <label>Gewünschte Monatsrate: <span id="saleFinTargetLbl" style="color:var(--brass);font-family:var(--font-m);">${money(target)}</span></label>
      <div style="display:flex;gap:10px;align-items:center;">
        <input id="saleFinTargetRate" type="range" min="${targetBounds.min}" max="${targetBounds.max}" step="10" value="${target}" oninput="syncSaleFinancingTarget('${offerId}','range')" style="flex:1;">
        <input id="saleFinTargetNumber" type="number" min="${targetBounds.min}" max="${targetBounds.max}" step="10" value="${target}" oninput="syncSaleFinancingTarget('${offerId}','number')" style="width:120px;flex:0 0 auto;">
      </div>
    </div>
    <div id="saleFinPreview">${renderSaleFinancingPreviewForOffer(o, initialCalc, solved)}</div>
    <div id="saleFinConfirmWarning"></div>
    <div class="row-actions"><button class="btn btn-ghost" onclick="openSaleMethodModal('${offerId}')">Zurück</button><button class="btn btn-primary" onclick="confirmSaleFinancing('${offerId}')">Finanzierungsangebot bestätigen</button></div>
  `);
}
function syncSaleFinancingTarget(offerId, source){
  const range = document.getElementById('saleFinTargetRate');
  const number = document.getElementById('saleFinTargetNumber');
  const value = Number((source==='number' ? number?.value : range?.value) || 0);
  if(range && source==='number') range.value = value;
  if(number && source==='range') number.value = value;
  const lbl = document.getElementById('saleFinTargetLbl'); if(lbl) lbl.textContent = money(value);
  updateSaleFinancingPreview(offerId, 'target');
}
function setSaleFinancingControls(calc){
  const down = document.getElementById('saleFinDown');
  const months = document.getElementById('saleFinMonths');
  const targetRange = document.getElementById('saleFinTargetRate');
  const targetNumber = document.getElementById('saleFinTargetNumber');
  const targetLbl = document.getElementById('saleFinTargetLbl');
  const downLbl = document.getElementById('saleFinDownLbl');
  if(down) down.value = calc.downPayment;
  if(months) months.value = String(calc.months);
  if(targetRange) targetRange.value = calc.monthlyPayment;
  if(targetNumber) targetNumber.value = calc.monthlyPayment;
  if(targetLbl) targetLbl.textContent = money(calc.monthlyPayment);
  if(downLbl) downLbl.textContent = money(calc.downPayment);
}
function setSaleFinancingConfirmWarning(html){
  const box = document.getElementById('saleFinConfirmWarning');
  if(box) box.innerHTML = html || '';
}
function unlockSaleFinancingTerm(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  o.financingLockedTerm = null;
  updateSaleFinancingPreview(offerId, 'target');
}
function keepSaleFinancingCurrentRate(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o.pendingFinancingOffer) return;
  const calc = o.pendingFinancingOffer;
  const range = document.getElementById('saleFinTargetRate');
  const number = document.getElementById('saleFinTargetNumber');
  const lbl = document.getElementById('saleFinTargetLbl');
  if(range) range.value = calc.monthlyPayment;
  if(number) number.value = calc.monthlyPayment;
  if(lbl) lbl.textContent = money(calc.monthlyPayment);
  setSaleFinancingConfirmWarning('');
  updateSaleFinancingPreview(offerId, 'manual');
}
function applyRequiredDownForTarget(offerId, downPayment){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const down = document.getElementById('saleFinDown');
  if(down) down.value = Number(downPayment);
  updateSaleFinancingPreview(offerId, 'target');
}
function applySaleFinancingOption(offerId, downPayment, months){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  o.financingLockedTerm = Number(months);
  const calc = calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:o.amount, months:Number(months), downPayment:Number(downPayment)});
  setPendingSaleFinancingOffer(o, calc, 'option');
  setSaleFinancingControls(calc);
  const preview = document.getElementById('saleFinPreview');
  if(preview) preview.innerHTML = renderSaleFinancingPreviewForOffer(o, calc, null, bestFinancingOptions(o));
}
function applyOptimalSaleFinancing(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  o.financingLockedTerm = null;
  const options = bestFinancingOptions(o);
  const best = options[0];
  if(!best){
    const current = calculateFinanceOffer(o, findCar(o.carId), {
      vehiclePrice:o.amount,
      months:Number(document.getElementById('saleFinMonths')?.value||60),
      downPayment:Number(document.getElementById('saleFinDown')?.value||0)
    });
    setPendingSaleFinancingOffer(o, current, 'optimal-none');
    const preview = document.getElementById('saleFinPreview');
    if(preview) preview.innerHTML = renderSaleFinancingPreviewForOffer(o, current, null, []);
    notify('Keine bankfähige Finanzierung möglich.', 'warn');
    return;
  }
  setPendingSaleFinancingOffer(o, best, 'optimal');
  setSaleFinancingControls(best);
  const preview = document.getElementById('saleFinPreview');
  if(preview) preview.innerHTML = renderSaleFinancingPreviewForOffer(o, best, null, options);
  notify('Optimales Finanzierungsangebot berechnet.', 'good');
}
function updateSaleFinancingPreview(offerId, mode){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  setSaleFinancingConfirmWarning('');
  const down = Number(document.getElementById('saleFinDown')?.value||0);
  const months = Number(document.getElementById('saleFinMonths')?.value||60);
  const targetInput = document.getElementById('saleFinTargetNumber');
  const target = Number(targetInput?.value || 0);
  if(mode==='manual') o.financingLockedTerm = months;
  const lockedTerm = o.financingLockedTerm || null;
  const solved = mode==='target' && target>0
    ? (lockedTerm ? solveFinancingForFixedTermTarget(o, lockedTerm, down, target) : solveFinancingForTargetRate(o, down, target))
    : null;
  const calc = solved?.mode==='fixed-term'
    ? solved.calc
    : (solved ? solved.calc : calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:o.amount, months, downPayment:down}));
  setPendingSaleFinancingOffer(o, calc, mode || 'update');
  const lbl = document.getElementById('saleFinDownLbl'); if(lbl) lbl.textContent = money(down);
  const select = document.getElementById('saleFinMonths'); if(select && solved && solved.mode!=='fixed-term') select.value = String(calc.months);
  if(mode==='manual'){
    const targetLbl = document.getElementById('saleFinTargetLbl'); if(targetLbl) targetLbl.textContent = money(calc.monthlyPayment);
    const range = document.getElementById('saleFinTargetRate'); if(range) range.value = calc.monthlyPayment;
    const number = document.getElementById('saleFinTargetNumber'); if(number) number.value = calc.monthlyPayment;
  }
  const preview = document.getElementById('saleFinPreview'); if(preview) preview.innerHTML = renderSaleFinancingPreviewForOffer(o, calc, solved);
}
function renderFinancingTargetResult(o, calc, solved){
  if(!solved) return '';
  if(solved.mode==='fixed-term'){
    if(solved.possible && solved.requiredDownPayment>calc.downPayment){
      return `<div class="notice warn" style="display:block;">
        <b>Laufzeit fixiert: ${calc.months} Monate</b><br>
        Mit ${calc.months} Monaten ist eine Rate von ${money(solved.targetRate)} nur möglich, wenn die Anzahlung auf <b>${money(solved.requiredDownPayment)}</b> erhöht wird.
        Aktuell ergibt diese Laufzeit <b>${money(calc.monthlyPayment)}/Monat</b>.
        <div class="row-actions" style="margin-top:10px;">
          <button class="btn btn-primary btn-sm" onclick="applyRequiredDownForTarget('${o.id}',${solved.requiredDownPayment})">Anzahlung automatisch erhöhen</button>
          <button class="btn btn-ghost btn-sm" onclick="unlockSaleFinancingTerm('${o.id}')">Laufzeit wieder verlängern</button>
          <button class="btn btn-ghost btn-sm" onclick="keepSaleFinancingCurrentRate('${o.id}')">Aktuelle Rate behalten</button>
        </div>
      </div>`;
    }
    if(solved.possible){
      return `<div class="notice" style="display:block;border-color:rgba(62,207,127,.35);"><b>Laufzeit fixiert: ${calc.months} Monate</b><br>${money(solved.targetRate)} ist mit der aktuellen Anzahlung erreichbar. Aktuelle Rate: <b>${money(calc.monthlyPayment)}/Monat</b>.</div>`;
    }
    return `<div class="notice warn" style="display:block;">
      <b>Kombination nicht möglich</b><br>
      Mit fixierten ${calc.months} Monaten ist ${money(solved.targetRate)} selbst bei maximaler Anzahlung nicht erreichbar. Niedrigste Rate bei dieser Laufzeit: <b>${money(solved.maxed.monthlyPayment)}</b>.
      <div class="row-actions" style="margin-top:10px;">
        <button class="btn btn-ghost btn-sm" onclick="unlockSaleFinancingTerm('${o.id}')">Laufzeit wieder verlängern</button>
        <button class="btn btn-ghost btn-sm" onclick="keepSaleFinancingCurrentRate('${o.id}')">Aktuelle Rate behalten</button>
      </div>
    </div>`;
  }
  if(solved.possible){
    const alternatives = solved.alternatives.length>1 ? `<br>Weitere mögliche Laufzeiten: ${solved.alternatives.map(x=>`${x.months} Monate (${money(x.monthlyPayment)}/Monat)`).join(', ')}` : '';
    return `<div class="notice" style="display:block;border-color:rgba(62,207,127,.35);"><b>Zielrate erreichbar</b><br>${money(solved.targetRate)} ist möglich. Sinnvoll gewählt: <b>${calc.months} Monate</b> mit ${money(calc.monthlyPayment)}/Monat.${alternatives}</div>`;
  }
  return `<div class="notice warn" style="display:block;"><b>Zielrate nicht erreichbar</b><br>Mit den aktuellen Bankkonditionen ist eine Monatsrate von ${money(solved.targetRate)} nicht möglich. Die niedrigstmögliche Rate beträgt <b>${money(solved.lowest.monthlyPayment)}</b> bei <b>${solved.lowest.months} Monaten</b>.</div>`;
}
function renderFinancingAlternatives(offerId, options, current){
  const rows = (options||[]).filter(Boolean).slice(0,3);
  if(!rows.length) return '';
  return `<div class="notice" style="display:block;">
    <b>Verhandlungsvorschläge</b><br>
    <div class="stat-grid" style="margin-top:8px;">${rows.map((opt,idx)=>{
      const active = current && opt.downPayment===current.downPayment && opt.months===current.months;
      return `<div class="stat-card" style="display:flex;flex-direction:column;gap:7px;border-color:${active?'rgba(62,207,127,.45)':'var(--line)'};">
        <div class="lbl">Option ${String.fromCharCode(65+idx)}${active?' · aktiv':''}</div>
        <div class="num" style="font-size:16px;">${opt.months} Monate</div>
        <div class="subtle" style="margin:0;line-height:1.45;">${money(opt.monthlyPayment)}/Monat<br>${money(opt.downPayment)} Anzahlung<br>${money(opt.totalInterest)} Zinsen<br>${opt.bankCheck?.result==='rejected'?'Nicht darstellbar':'Erfolg'} ${Math.round((opt.approvalChance||opt.chance||0)*100)}%</div>
        <button class="btn btn-ghost btn-sm" onclick="applySaleFinancingOption('${offerId}',${opt.downPayment},${opt.months})">Übernehmen</button>
      </div>`;
    }).join('')}</div>
  </div>`;
}
function renderFinancingLiveAnalysis(o, calc, bank, fit){
  const result = financeResultFor(o, calc);
  const chance = result.approvalChance;
  const bankOk = bank.result==='approved';
  const customerOk = !fit.mustViolated.length;
  const suggestions = financingSuggestionTexts(o, calc, bank, fit);
  const customerRows = fit.results.filter(r=>r.priority!=='pref' || r.status!=='fulfilled').slice(0,6);
  return `<div class="notice" style="display:block;">
    <b>Live-Analyse</b>
    <div class="stat-grid" style="margin-top:8px;">
      <div class="stat-card"><div class="lbl">Bank</div><div class="num" style="font-size:16px;color:${bankOk?'var(--teal)':bank.result==='rejected'?'var(--crimson)':'var(--brass)'};">${bankOk?'Genehmigungsfähig':bank.label}</div><p class="subtle" style="margin:6px 0 0;">${escapeHtml(bank.note||'')}</p></div>
      <div class="stat-card"><div class="lbl">Kunde</div><div class="num" style="font-size:16px;color:${customerOk?'var(--teal)':'var(--crimson)'};">${customerOk?'Muss erfüllt':'Muss verletzt'}</div><p class="subtle" style="margin:6px 0 0;line-height:1.45;">${customerRows.map(r=>`${financingRequirementStatusIcon(r.status)} ${escapeHtml(r.label)}`).join('<br>')}</p></div>
      <div class="stat-card"><div class="lbl">Erfolgschance</div><div class="num">${Math.round(chance*100)}%</div><p class="subtle" style="margin:6px 0 0;">inkl. Bank, Kunde und Konditionen</p></div>
    </div>
    ${suggestions.length?`<div style="margin-top:10px;"><b>Hinweise</b><br>${suggestions.map(s=>`<span style="display:block;line-height:1.55;">${escapeHtml(s)}</span>`).join('')}</div>`:''}
  </div>`;
}
function renderBankabilitySolution(o, result){
  const analysis = analyzeBankableFinancing(o, result);
  const currentPlan = analysis.currentTermPlan;
  const currentTermText = currentPlan?.possible
    ? `Bei ${result.months} Monaten wäre eine Anzahlung von mindestens ${money(currentPlan.requiredDownPayment)} nötig. Maximal finanzierbar: ${money(currentPlan.maxFinancedAmount)}.`
    : `Bei ${result.months} Monaten reicht die maximal plausible Anzahlung von ${money(currentPlan?.maxCustomerDown||analysis.maxCustomerDown)} nicht aus.`;
  const longer = analysis.byTerm.find(x=>x.possible && x.result.months>result.months);
  const longerText = longer
    ? `Eine längere Laufzeit hilft: ${longer.result.months} Monate mit ${money(longer.requiredDownPayment)} Anzahlung und ${money(longer.result.monthlyPayment)}/Monat wäre bankfähig.`
    : `Eine längere Laufzeit macht dieses Angebot nicht automatisch bankfähig.`;
  if(analysis.best){
    return `<div class="notice" style="display:block;">
      <b>Bankfähige Lösung</b><br>
      ${currentTermText}<br>
      ${longerText}<br>
      Sinnvollste bankfähige Variante: <b>${analysis.best.result.months} Monate</b>, <b>${money(analysis.best.requiredDownPayment)}</b> Anzahlung, <b>${money(analysis.best.result.monthlyPayment)}/Monat</b>.
    </div>`;
  }
  return `<div class="notice warn" style="display:block;">
    <b>Keine bankfähige Finanzierung möglich</b><br>
    ${analysis.noBankableReason}<br>
    Fahrzeugpreis: ${money(analysis.vehiclePrice)} · Kundenvermögen: ${money(analysis.wealth)} · Maximal plausible Anzahlung: ${money(analysis.maxCustomerDown)}.<br>
    Der Verkaufspreis ist für diesen Kunden zu hoch. Barzahlung, Leasing oder ein günstigeres Fahrzeug prüfen.
  </div>`;
}
function renderFinanceDebug(result){
  const d = result.debug;
  const bank = result.bankCheck || {};
  const failed = bank.failedChecks || [];
  const passed = bank.passedChecks || [];
  const fmtDebug = (v,k)=>{
    if(typeof v!=='number') return escapeHtml(String(v));
    const key = k.toLowerCase();
    if(key.includes('ratio')) return (v*100).toFixed(1)+'%';
    if(key.includes('interestrate')) return (v*100).toFixed(3)+'%';
    if(key.includes('score')) return String(Math.round(v));
    if(key.includes('months')) return `${Math.round(v)} Monate`;
    if(key.includes('approved')) return v ? 'true' : 'false';
    return money(v);
  };
  return `<details class="notice ${failed.length?'warn':'good'}" style="display:block;"><summary><b>Bankprüfung Debug</b></summary>
    <table class="tbl"><tbody>
      ${Object.entries(d).map(([k,v])=>`<tr><td>${escapeHtml(k)}</td><td style="font-family:var(--font-m);text-align:right;">${fmtDebug(v,k)}</td></tr>`).join('')}
    </tbody></table>
    <div style="margin-top:10px;line-height:1.55;">
      <b>Fehlgeschlagene Bankbedingungen</b><br>
      ${failed.length ? failed.map(x=>`<span style="display:block;color:var(--crimson);">${escapeHtml(x.label)}: ${escapeHtml(x.detail)}</span>`).join('') : '<span style="color:var(--teal);">Keine harte Bankbedingung fehlgeschlagen.</span>'}
    </div>
    <div style="margin-top:8px;line-height:1.55;">
      <b>Erfüllte Bankbedingungen</b><br>
      ${passed.map(x=>`<span style="display:block;color:var(--teal);">${escapeHtml(x.label)}: ${escapeHtml(x.detail)}</span>`).join('') || '<span class="subtle">Keine.</span>'}
    </div>
  </details>`;
}
function renderSaleFinancingPreviewForOffer(o, calc, solved, alternatives){
  const result = financeResultFor(o, calc);
  const fit = result.customerEvaluation;
  const bank = result.bankCheck;
  const fitLabel = fit.mustViolated.length ? 'Muss verletzt' : (fit.wishIssues.length ? 'verhandelbar' : 'passt gut');
  const fitColor = fit.mustViolated.length ? 'var(--crimson)' : (fit.wishIssues.length ? 'var(--amber)' : 'var(--teal)');
  return `<div class="stat-grid">
    <div class="stat-card"><div class="lbl">Finanzierungsbetrag</div><div class="num">${money(calc.principal)}</div></div>
    <div class="stat-card"><div class="lbl">Zinssatz</div><div class="num">${(calc.nominalRate*100).toFixed(1)}%</div></div>
    <div class="stat-card"><div class="lbl">Monatsrate</div><div class="num">${money(calc.monthlyPayment)}</div></div>
    <div class="stat-card"><div class="lbl">Gesamtkosten</div><div class="num">${money(calc.totalCost)}</div></div>
  </div>
  ${renderFinancingTargetResult(o, calc, solved)}
  ${renderBankabilitySolution(o, result)}
  <div class="notice" style="display:block;">Zinsen gesamt: <b>${money(result.totalInterest)}</b> · Bank: <b style="color:${bank.result==='approved'?'var(--teal)':bank.result==='rejected'?'var(--crimson)':'var(--brass)'};">${bank.label}</b> · Kundenzustimmung geschätzt: <b>${Math.round(result.approvalChance*100)}%</b> · Status: <b style="color:${fitColor};">${fitLabel}</b></div>
  ${renderFinancingLiveAnalysis(o, result, bank, fit)}
  ${renderFinanceDebug(result)}
  ${renderFinancingAlternatives(o.id, alternatives || (fit.mustViolated.length || fit.wishIssues.length || bank.result!=='approved' ? bestFinancingOptions(o) : []), result)}
  ${renderFinancingPriorityPanel(o, result)}`;
}
function confirmSaleFinancing(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  if(!isSaleMethodAllowed(o, 'finanzierung')){
    notify(`${o.name} hat Finanzierung noch nicht zugestimmt.`, 'warn');
    requestSaleMethodSwitch(offerId, 'finanzierung', true);
    return;
  }
  const down = Number(document.getElementById('saleFinDown')?.value||0);
  const months = Number(document.getElementById('saleFinMonths')?.value||60);
  const uiSnapshot = {
    monthlyPayment: Number(o.pendingFinancingOffer?.monthlyPayment || document.getElementById('saleFinTargetNumber')?.value || 0),
    downPayment: down,
    months,
  };
  let financing = o.pendingFinancingOffer && o.pendingFinancingOffer.debug
    ? o.pendingFinancingOffer
    : calculateFinanceOffer(o, c, {vehiclePrice:o.amount, months, downPayment:down});
  const controlsChanged = financing.downPayment!==down || financing.months!==months;
  if(controlsChanged){
    financing = calculateFinanceOffer(o, c, {
      vehiclePrice:o.amount,
      months,
      downPayment:down,
      annualRate:financing.nominalRate
    });
    setPendingSaleFinancingOffer(o, financing, 'confirm-controls-sync');
  }
  const requestedTargetRate = Number(document.getElementById('saleFinTargetNumber')?.value || 0);
  if(requestedTargetRate>0 && financing.monthlyPayment>requestedTargetRate){
    console.warn('[Finanzierung Debug] Bestätigung blockiert: Zielrate wird vom aktuellen Angebot überschritten', {
      targetRate: requestedTargetRate,
      offerRate: financing.monthlyPayment,
      downPayment: financing.downPayment,
      months: financing.months
    });
    updateSaleFinancingPreview(offerId, 'target');
    notify(`Die Zielrate ${money(requestedTargetRate)} ist im aktuellen Angebot nicht erreicht. Bitte Anzahlung erhöhen, Laufzeit freigeben oder aktuelle Rate behalten.`, 'warn');
    return;
  }
  const bankSnapshot = financingSnapshot(financing);
  console.log('[Finanzierung Debug] Vor Klick UI', uiSnapshot);
  console.log('[Finanzierung Debug] An Bank gesendet', bankSnapshot);
  o.paymentMethod = 'finanzierung';
  o.financingOffer = financing;
  o.confirmedFinancingSnapshot = bankSnapshot;
  delete o.pendingFinancingOffer;
  delete o.pendingFinancingSnapshot;
  delete o.pendingFinancingSource;
  closeModal();
  const evaluation = financing.customerEvaluation;
  addMsg(o, 'player', `Wir schließen per Finanzierung ab: ${financing.months} Monate, ${(financing.nominalRate*100).toFixed(1)}% Zins, ${money(financing.monthlyPayment)} monatlich bei ${money(financing.downPayment)} Anzahlung.`);
  if(evaluation.mustViolated.length){
    addMsg(o, 'customer', financingCounterProposal(o, financing, evaluation));
    notify(`${o.name} lehnt ab: Eine Muss-Bedingung der Finanzierung ist verletzt.`, 'warn');
    renderAllOpen(); scheduleSave();
    return;
  }
  if(evaluation.wishIssues.length && Math.random()>financing.approvalChance){
    addMsg(o, 'customer', financingCounterProposal(o, financing, evaluation));
    notify(`${o.name} möchte über die Finanzierungskonditionen verhandeln.`, 'info');
    renderAllOpen(); scheduleSave();
    return;
  }
  addMsg(o, 'player', 'Die Konditionen passen, ich starte jetzt die Bankanfrage.');
  startFinancingApplication(c, o.amount, o);
}
function openSaleLeasingModal(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const months = o.financingOffer?.months || 36;
  const special = o.financingOffer?.specialPayment ?? Math.round(o.amount*.1/10)*10;
  const calc = calcLeasing(o.amount, o.creditScore||60, {months, specialPayment:special});
  showModal(`
    <h2 class="section-title">Leasing konfigurieren</h2>
    <p class="subtle">${o.name} · ${c.brand} ${c.model} · Fahrzeugpreis ${money(o.amount)}</p>
    <div class="field"><label>Sonderzahlung: <span id="saleLeaseSpecialLbl" style="color:var(--brass);font-family:var(--font-m);">${money(special)}</span></label>
      <input id="saleLeaseSpecial" type="range" min="0" max="${Math.round(o.amount*.3/10)*10}" step="10" value="${special}" oninput="updateSaleLeasingPreview('${offerId}')">
    </div>
    <div class="field"><label>Laufzeit</label>
      <select id="saleLeaseMonths" onchange="updateSaleLeasingPreview('${offerId}')">${[24,36,48,60].map(m=>`<option value="${m}" ${m===months?'selected':''}>${m} Monate</option>`).join('')}</select>
    </div>
    <div id="saleLeasePreview">${renderSaleLeasingPreview(calc)}</div>
    <div class="row-actions"><button class="btn btn-ghost" onclick="openSaleMethodModal('${offerId}')">Zurück</button><button class="btn btn-primary" onclick="confirmSaleLeasing('${offerId}')">Leasinganfrage starten</button></div>
  `);
}
function renderSaleLeasingPreview(calc){
  return `<div class="stat-grid">
    <div class="stat-card"><div class="lbl">Laufzeit</div><div class="num">${calc.months} Monate</div></div>
    <div class="stat-card"><div class="lbl">Sonderzahlung</div><div class="num">${money(calc.specialPayment)}</div></div>
    <div class="stat-card"><div class="lbl">Monatsrate</div><div class="num">${money(calc.leaseRate)}</div></div>
    <div class="stat-card"><div class="lbl">Restwert</div><div class="num">${money(calc.residual)}</div></div>
  </div>`;
}
function updateSaleLeasingPreview(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const special = Number(document.getElementById('saleLeaseSpecial')?.value||0);
  const months = Number(document.getElementById('saleLeaseMonths')?.value||36);
  const calc = calcLeasing(o.amount, o.creditScore||60, {months, specialPayment:special});
  const lbl = document.getElementById('saleLeaseSpecialLbl'); if(lbl) lbl.textContent = money(special);
  const preview = document.getElementById('saleLeasePreview'); if(preview) preview.innerHTML = renderSaleLeasingPreview(calc);
}
function confirmSaleLeasing(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  if(!isSaleMethodAllowed(o, 'leasing')){
    notify(`${o.name} hat Leasing noch nicht zugestimmt.`, 'warn');
    requestSaleMethodSwitch(offerId, 'leasing', true);
    return;
  }
  const special = Number(document.getElementById('saleLeaseSpecial')?.value||0);
  const months = Number(document.getElementById('saleLeaseMonths')?.value||36);
  const leasing = calcLeasing(o.amount, o.creditScore||60, {months, specialPayment:special});
  o.paymentMethod = 'leasing';
  o.financingOffer = leasing;
  closeModal();
  addMsg(o, 'player', `Wir schließen per Leasing ab: ${leasing.months} Monate, ${money(leasing.leaseRate)} monatlich bei ${money(leasing.specialPayment)} Sonderzahlung. Ich starte jetzt die Leasinganfrage.`);
  startFinancingApplication(c, o.amount, o);
}
function startFinancingApplication(c, amount, offer){
  if(offer.paymentMethod && !isSaleMethodAllowed(offer, offer.paymentMethod)){
    notify(`${offer.name} hat ${saleMethodLabel(offer.paymentMethod)} nicht zugestimmt.`, 'warn');
    return;
  }
  const advisorBonus = employeeBonus(offer.paymentMethod==='leasing' ? 'Leasingberater' : 'Finanzierungsberater');
  const days = Math.max(1, randInt(1,3) - Math.round(advisorBonus*1.4));
  reserveCar(c, offer, days+1, offer.paymentMethod);
  offer.applicationPending = true;
  const financingVehicle = findCar(offer.carId) || c;
  const financingOffer = offer.paymentMethod==='finanzierung'
    ? (offer.financingOffer ? financeResultFor(offer, offer.financingOffer) : calculateFinanceOffer(offer, financingVehicle, {vehiclePrice:amount}))
    : (offer.paymentMethod==='leasing' ? (offer.financingOffer || calcLeasing(amount, offer.creditScore||60)) : null);
  if(offer.paymentMethod==='finanzierung'){
    console.log('[Finanzierung Debug] startFinancingApplication -> Bankantrag', financingSnapshot(financingOffer));
  }
  offer.financingApp = { amount, method: offer.paymentMethod, resolveDay: state.day+days, financingOffer };
  const kind = offer.paymentMethod==='leasing' ? 'Leasingantrag' : 'Finanzierungsantrag';
  addMsg(offer, 'player', `Ich reiche Ihren ${kind} über ${money(amount)} bei unserer Partnerbank ein.${financingOffer?` Konditionen: ${financingOfferLabel(financingOffer)}.`:''} Das Fahrzeug ist für Sie reserviert.`);
  addMsg(offer, 'customer', `Alles klar, ich warte auf die Rückmeldung.`);
  notify(`${kind} für ${c.brand} ${c.model} eingereicht (Bearbeitung ca. ${days} Tag(e)).`,'info');
  renderAllOpen(); scheduleSave();
}
function resolveFinancingApplication(o){
  const c = findCar(o.carId);
  const app = o.financingApp;
  o.applicationPending = false;
  o.financingApp = null;
  if(!c || !app) return;
  reserveCar(c, o, 4, 'bankDecision');
  o.bankDecision = {
    amount: app.amount,
    method: app.method,
    financingOffer: app.financingOffer || null,
    risk: financingApproval(o.creditScore||60, app.amount, app.method),
  };
  if(app.method==='finanzierung'){
    const financing = app.financingOffer ? financeResultFor(o, app.financingOffer) : calculateFinanceOffer(o, c, {vehiclePrice:app.amount});
    o.bankDecision.financingOffer = financing;
    o.bankDecision.bankResult = financing.bankCheck;
  }
  addMsg(o, 'customer', `Die Bankprüfung ist da. Bitte entscheiden Sie, ob Sie den Antrag freigeben möchten.`);
  showBankDecisionModal(o.id);
  renderAllOpen(); scheduleSave();
}
function riskColor(riskPct){
  if(riskPct<=12) return 'var(--teal)';
  if(riskPct<=28) return 'var(--brass)';
  return 'var(--crimson)';
}
function financingOfferLabel(f){
  if(!f) return 'Finanzierungsangebot';
  if(f.type==='leasing') return `${f.months} Monate · ${money(f.leaseRate)}/Monat · ${money(f.specialPayment||0)} Sonderzahlung`;
  return `${f.months} Monate · ${(f.nominalRate*100).toFixed(1)}% · ${money(f.monthlyPayment)}/Monat · ${money(f.downPayment)} Anzahlung`;
}
function financingConditionSignature(amount, financing){
  if(!financing) return `none:${Math.round(amount||0)}`;
  const priceBucket = Math.round((amount||0)/250)*250;
  const downBucket = Math.round((financing.downPayment||0)/250)*250;
  const rateBucket = Math.round((financing.nominalRate||0)*10000)/10000;
  const paymentBucket = Math.round((financing.monthlyPayment||0)/25)*25;
  return [priceBucket, downBucket, financing.months||0, rateBucket, paymentBucket].join('|');
}
function financingWealthEstimate(o, amount){
  amount = Math.max(0, amount || o.amount || 0);
  const explicitWealth = Number(o.wealth || o.customerWealth || o.customerProfile?.wealth || 0);
  if(explicitWealth>0) return Math.round(explicitWealth/1000)*1000;
  const profileBudget = Number(o.customerProfile?.budget || o.budgetEstimate || 0);
  const customerBudget = o.customerId && state.customers ? Number(state.customers[o.customerId]?.budgetEstimate||0) : 0;
  const raw = Math.max(profileBudget, customerBudget, 0);
  if(raw>0) return Math.round(raw/1000)*1000;
  const kind = financingCustomerKind(o);
  const fallback = kind==='wealthy' ? amount*0.85 : kind==='business' ? amount*0.45 : amount*0.22;
  return Math.round(fallback/1000)*1000;
}
function estimateMonthlyIncome(o){
  const explicitIncome = Number(o.monthlyIncome || o.estimatedIncome || o.customerProfile?.monthlyIncome || 0);
  if(explicitIncome>0) return Math.round(explicitIncome/50)*50;
  const job = String(o.job||'').toLowerCase();
  let base = 2600;
  if(job.includes('arzt') || job.includes('anwalt') || job.includes('geschäft') || job.includes('unternehmer')) base = 6200;
  else if(job.includes('manager') || job.includes('ingenieur') || job.includes('it') || job.includes('berater')) base = 4700;
  else if(job.includes('meister') || job.includes('techniker') || job.includes('polizei')) base = 3400;
  else if(job.includes('student') || job.includes('azubi')) base = 1250;
  else if(job.includes('rentner')) base = 2100;
  const credit = clamp(o.creditScore||60, 20, 100);
  const persona = o.persona || o.customerProfile?.aiType || '';
  const personaMod = persona==='Luxuskäufer' || persona==='Premiumkunde' ? 1.28 : (persona==='Schnäppchenjäger' || persona==='Student' ? 0.82 : 1);
  const amount = Math.max(0, o.amount||0);
  const wealth = financingWealthEstimate(o, amount);
  const kind = financingCustomerKind(o);
  const assetIncomeFloor = kind==='wealthy'
    ? Math.max(base, amount/48, wealth/30)
    : kind==='business'
      ? Math.max(base, amount/70, wealth/42)
      : Math.max(base, wealth/90);
  return Math.round(Math.max(base * personaMod * clamp(0.78 + credit/220, 0.85, 1.22), assetIncomeFloor) / 50) * 50;
}
function financingCustomerKind(o){
  const text = `${o.persona||''} ${o.customerProfile?.aiType||''} ${o.job||''}`.toLowerCase();
  if(text.includes('student') || text.includes('azubi') || text.includes('jung')) return 'young';
  if(text.includes('famil')) return 'family';
  if(text.includes('schnäpp') || text.includes('preis')) return 'price';
  if(text.includes('perfektion') || text.includes('vorsichtig') || text.includes('unsicher')) return 'careful';
  if(text.includes('luxus') || text.includes('premium') || text.includes('arzt') || text.includes('anwalt')) return 'wealthy';
  if(text.includes('unternehmer') || text.includes('geschäft') || text.includes('selbst')) return 'business';
  return 'balanced';
}
function financingCapacityProfile(o, amount){
  amount = Math.max(0, amount || o.amount || 0);
  const kind = financingCustomerKind(o);
  const income = estimateMonthlyIncome(o);
  const wealth = financingWealthEstimate(o, amount);
  const credit = clamp(o.creditScore||60, 0, 100);
  const luxuryScale = amount>=350000 ? 'hyper' : amount>=150000 ? 'luxury' : amount>=70000 ? 'premium' : 'normal';
  const riskFactor = kind==='wealthy' ? .34 : kind==='business' ? .28 : kind==='young' ? .17 : kind==='family' ? .19 : kind==='price' ? .18 : .21;
  const minEconomicPayment = Math.round((amount * (luxuryScale==='hyper' ? .0065 : luxuryScale==='luxury' ? .0075 : .009))/10)*10;
  const incomeBasedPayment = Math.round(income*riskFactor/10)*10;
  const wealthBasedPayment = Math.round(Math.max(0, (amount - Math.min(amount*.65, wealth*.55)) / 96)/10)*10;
  const realisticMonthly = Math.max(120, Math.min(Math.max(incomeBasedPayment, minEconomicPayment), Math.max(incomeBasedPayment, wealthBasedPayment, minEconomicPayment)));
  const preferredDownPct = kind==='wealthy' ? (luxuryScale==='hyper' ? .36 : .28) : kind==='business' ? .20 : kind==='price' ? .10 : kind==='young' ? .08 : kind==='family' ? .12 : .15;
  const affordableDown = Math.max(0, Math.min(amount*.72, wealth*.62));
  const desiredDown = Math.round(Math.min(Math.max(amount*preferredDownPct, amount*.06), affordableDown || amount*preferredDownPct)/10)*10;
  return {kind, income, wealth, credit, luxuryScale, realisticMonthly, desiredDown, affordableDown:Math.round(affordableDown/10)*10, riskFactor};
}
function ensureFinancingPriorities(o, amount){
  amount = Math.round(amount || o.amount || 0);
  if(o.financingPriorities && o.financingPriorities.version===2 && o.financingPriorities.amount===amount && Array.isArray(o.financingPriorities.items)) return o.financingPriorities;
  const capacity = financingCapacityProfile(o, amount);
  const income = capacity.income;
  const wealth = capacity.wealth;
  const kind = capacity.kind;
  const credit = clamp(o.creditScore||60, 0, 100);
  const rateFactor = kind==='young' ? 0.145 : kind==='family' ? 0.155 : kind==='price' ? 0.15 : kind==='business' ? 0.19 : kind==='wealthy' ? 0.25 : 0.17;
  const maxMonthly = Math.round(Math.max(income*rateFactor, capacity.realisticMonthly)/10)*10;
  const downFactor = kind==='young' ? 0.06 : kind==='price' ? 0.08 : kind==='family' ? 0.10 : kind==='business' ? 0.18 : kind==='wealthy' ? (capacity.luxuryScale==='hyper' ? 0.42 : 0.28) : 0.12;
  const maxDown = Math.round(Math.max(amount*downFactor, capacity.desiredDown)/10)*10;
  const desiredMonths = kind==='wealthy' ? (capacity.luxuryScale==='hyper' ? 60 : 48) : kind==='business' ? 60 : kind==='price' ? 72 : kind==='young' ? 84 : kind==='family' ? 72 : 60;
  const minMonths = kind==='young' || kind==='family' || kind==='price' ? Math.min(48, desiredMonths) : 24;
  const items = [
    {id:'monthlyMax', type:'monthlyMax', priority:(kind==='price'||kind==='young'||kind==='family')?'must':'wish', label:`Max. Monatsrate ${money(maxMonthly)}`, value:maxMonthly},
    {id:'downMax', type:'downMax', priority:(kind==='young'||kind==='price')?'must':'wish', label:`Max. Anzahlung ${money(maxDown)}`, value:maxDown},
    {id:'minMonths', type:'minMonths', priority:(kind==='young'||kind==='family')?'must':'wish', label:`mindestens ${minMonths} Monate`, value:minMonths},
    {id:'desiredMonths', type:'desiredMonths', priority:'wish', label:`${desiredMonths} Monate wären ideal`, value:desiredMonths},
    {id:'preferFinancing', type:'method', priority:'wish', label:'Finanzierung bevorzugt', value:'finanzierung'},
    {id:'lowRate', type:'rateMax', priority:kind==='careful'?'wish':'pref', label:'möglichst niedriger Zinssatz', value:credit>=78 ? 0.07 : 0.095},
    {id:'noBalloon', type:'noBalloon', priority:'pref', label:'keine Schlussrate', value:true},
  ];
  if(kind==='wealthy'){
    items[0].priority = 'wish';
    items[1].priority = 'pref';
    items[2].priority = 'pref';
    items[3].value = desiredMonths;
    items[3].label = capacity.luxuryScale==='hyper' ? `${desiredMonths} Monate akzeptabel` : 'schneller Abschluss bevorzugt';
  }
  if(kind==='business'){
    items[0].priority = 'wish';
    items[1].priority = 'wish';
    items[3].label = 'Liquidität schonen';
    items[3].value = 60;
  }
  o.financingPriorities = {version:2, amount, kind, income, wealth, capacity, items};
  return o.financingPriorities;
}
function evaluateFinancingPriorities(o, financing){
  const priorities = ensureFinancingPriorities(o, o.amount || financing.totalCost);
  const results = priorities.items.map(req=>{
    let status = 'fulfilled';
    let detail = '';
    if(req.type==='monthlyMax'){
      status = financing.monthlyPayment<=req.value ? 'fulfilled' : 'violated';
      detail = `${money(financing.monthlyPayment)} / max. ${money(req.value)}`;
    } else if(req.type==='downMax'){
      status = financing.downPayment<=req.value ? 'fulfilled' : 'violated';
      detail = `${money(financing.downPayment)} / max. ${money(req.value)}`;
    } else if(req.type==='minMonths'){
      status = financing.months>=req.value ? 'fulfilled' : 'violated';
      detail = `${financing.months} / min. ${req.value} Monate`;
    } else if(req.type==='desiredMonths'){
      const diff = Math.abs((financing.months||0)-req.value);
      status = diff===0 ? 'fulfilled' : (diff<=12 ? 'partial' : 'violated');
      detail = `${financing.months} Monate, Wunsch ${req.value}`;
    } else if(req.type==='rateMax'){
      status = financing.nominalRate<=req.value ? 'fulfilled' : (financing.nominalRate<=req.value+0.018 ? 'partial' : 'violated');
      detail = `${(financing.nominalRate*100).toFixed(1)}%`;
    } else {
      status = 'fulfilled';
      detail = 'erfüllt';
    }
    return {...req, status, detail};
  });
  const mustViolated = results.filter(r=>r.priority==='must' && r.status==='violated');
  const wishIssues = results.filter(r=>r.priority==='wish' && r.status!=='fulfilled');
  const prefIssues = results.filter(r=>r.priority==='pref' && r.status!=='fulfilled');
  return {priorities, results, mustViolated, wishIssues, prefIssues};
}
function financingRequirementStatusIcon(status){
  if(status==='fulfilled') return '✔';
  if(status==='partial') return '⚠';
  return '✖';
}
function financingPriorityLabel(priority){
  if(priority==='must') return {title:'Muss', color:'var(--crimson)'};
  if(priority==='wish') return {title:'Wunsch', color:'var(--amber)'};
  return {title:'Präferenz', color:'var(--teal)'};
}
function renderFinancingPriorityPanel(o, financing){
  const evaluation = financing ? (financing.customerEvaluation || evaluateFinancingPriorities(o, financing)) : null;
  const priorities = evaluation ? evaluation.priorities : ensureFinancingPriorities(o, o.amount);
  const groups = ['must','wish','pref'];
  return `<div class="notice" style="display:block;margin:10px 0;">
    <b>Kundenanforderungen</b><br>
    <span class="subtle">Vermögen ${money(priorities.wealth||0)} · Einkommen ${money(priorities.income)}/Monat · Profil: ${priorities.kind}${priorities.capacity?.luxuryScale?` · Klasse ${priorities.capacity.luxuryScale}`:''}</span>
    ${groups.map(priority=>{
      const meta = financingPriorityLabel(priority);
      const items = (evaluation ? evaluation.results : priorities.items).filter(x=>x.priority===priority);
      if(!items.length) return '';
      return `<div style="margin-top:8px;"><b style="color:${meta.color};">${meta.title}</b><br>${items.map(item=>{
        const icon = evaluation ? financingRequirementStatusIcon(item.status) : '✔';
        const detail = evaluation ? ` <span class="subtle">(${escapeHtml(item.detail)})</span>` : '';
        return `<span style="display:block;line-height:1.55;">${icon} ${escapeHtml(item.label)}${detail}</span>`;
      }).join('')}</div>`;
    }).join('')}
  </div>`;
}
function financingCounterProposal(o, financing, evaluation){
  const capacity = evaluation.priorities?.capacity || financingCapacityProfile(o, o.amount);
  const firstMust = evaluation.mustViolated[0];
  if(firstMust){
    if(firstMust.type==='monthlyMax'){
      const possible = FINANCING_TERMS.find(m=>m>=financing.months && calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:o.amount, months:m, downPayment:financing.downPayment, annualRate:financing.nominalRate, skipSuggestions:true}).monthlyPayment<=firstMust.value);
      if(possible) return `Ich kann höchstens ${money(firstMust.value)} monatlich zahlen. Könnten wir auf ${possible} Monate gehen?`;
      if(capacity.affordableDown>financing.downPayment+1000) return `Das wird wohl mit meiner Wunschrate nichts. Dann könnte ich mehr anzahlen, notfalls bis etwa ${money(capacity.affordableDown)}.`;
      return `Ich kann höchstens ${money(firstMust.value)} monatlich zahlen. Wenn das nicht darstellbar ist, müsste ich ein günstigeres Fahrzeug oder Barzahlung prüfen.`;
    }
    if(firstMust.type==='downMax') return capacity.kind==='wealthy' ? `Die Anzahlung ist höher als geplant, aber für einen schnellen Abschluss könnte ich sie prüfen.` : `Mehr als ${money(firstMust.value)} Anzahlung habe ich nicht. Können wir die Anzahlung entsprechend senken?`;
    if(firstMust.type==='minMonths') return `${financing.months} Monate sind mir zu kurz. Ich brauche mindestens ${firstMust.value} Monate.`;
  }
  const wish = evaluation.wishIssues[0];
  if(wish){
    if(wish.type==='desiredMonths' || wish.type==='minMonths') return `${financing.months} Monate passen noch nicht ganz. Mit ${wish.value} Monaten könnte ich besser leben.`;
    if(wish.type==='monthlyMax') return `Mit etwas geringerer Rate könnte ich mir das vorstellen. Mein Wunsch liegt eher bei ${money(wish.value)} monatlich.`;
    if(wish.type==='downMax') return `Bei ${money(financing.downPayment)} Anzahlung wird es schwierig. Mir wäre eher ${money(wish.value)} recht.`;
    if(wish.type==='rateMax') return `Der Zinssatz ist mir etwas hoch. Wenn Sie die Rate oder den Zins etwas senken, passt das eher.`;
  }
  return `Das Angebot klingt für mich machbar. Bitte reichen Sie es bei der Bank ein: ${money(financing.monthlyPayment)} monatlich über ${financing.months} Monate.`;
}
function financingAcceptanceReply(o, financing, evaluation){
  if(evaluation.wishIssues.length){
    return `Das ist nicht ganz meine Wunschlösung, aber damit kann ich leben. Bitte reichen Sie es bei der Bank ein: ${money(financing.monthlyPayment)} monatlich über ${financing.months} Monate.`;
  }
  if(evaluation.prefIssues.length){
    return `Ein paar Details wären anders schöner, aber grundsätzlich passt das. Bitte reichen Sie es bei der Bank ein.`;
  }
  return `Das Angebot passt für mich. Bitte reichen Sie es bei der Bank ein: ${money(financing.monthlyPayment)} monatlich über ${financing.months} Monate.`;
}
function financingNetworkBonus(){
  return upgradeLevel('financing_network')*0.004 + employeeBonus('Finanzierungsberater')*0.012 + clamp((state.reputation||50)-55, -20, 35)*0.0007;
}
function calculateFinancingRate(o, amount, downPayment, months){
  const credit = clamp(o.creditScore||60, 0, 100);
  const income = estimateMonthlyIncome(o);
  const principal = Math.max(0, amount-downPayment);
  const downPct = downPayment/Math.max(1, amount);
  const preliminaryRate = annuity(principal, 0.08, months);
  const paymentBurden = preliminaryRate/Math.max(1, income);
  let rate = 0.059;
  rate += clamp((72-credit)*0.00125, -0.026, 0.075);
  rate += months>60 ? (months-60)*0.00055 : months<36 ? -(36-months)*0.00035 : 0;
  rate += downPct<0.12 ? (0.12-downPct)*0.22 : 0;
  rate -= downPct>0.22 ? (downPct-0.22)*0.08 : 0;
  rate += paymentBurden>0.18 ? (paymentBurden-0.18)*0.20 : 0;
  rate += amount>60000 ? 0.008 : amount>35000 ? 0.003 : 0;
  rate -= financingNetworkBonus();
  return clamp(rate, credit>=82 ? 0.039 : 0.069, credit<45 ? 0.169 : 0.149);
}
function customerFinancingAcceptanceChance(o, financing){
  const income = estimateMonthlyIncome(o);
  const profile = ensureOfferAi(o, findCar(o.carId));
  const priorityEval = evaluateFinancingPriorities(o, financing);
  const paymentBurden = financing.monthlyPayment/Math.max(1,income);
  const downBurden = financing.downPayment/Math.max(1,income);
  const totalInterestPct = financing.totalInterest/Math.max(1,financing.principal);
  if(priorityEval.mustViolated.length) return clamp(0.03 + (profile.trust||50)/1200, 0.03, 0.12);
  let chance = 0.76;
  chance -= Math.max(0, paymentBurden-0.16)*2.1;
  chance -= Math.max(0, downBurden-1.1)*0.16;
  chance -= Math.max(0, totalInterestPct-0.22)*0.55;
  chance -= priorityEval.wishIssues.length*0.13;
  chance -= priorityEval.prefIssues.length*0.035;
  chance += priorityEval.results.filter(r=>r.priority==='wish' && r.status==='fulfilled').length*0.025;
  chance += financing.months>=60 && income<3000 ? 0.12 : 0;
  chance -= financing.months>=84 && (profile.riskAwareness||50)>68 ? 0.12 : 0;
  chance += (profile.trust||50)>65 ? 0.07 : 0;
  chance += o.persona==='Luxuskäufer' && financing.months<=48 ? 0.08 : 0;
  chance += o.persona==='Schnäppchenjäger' && financing.monthlyPayment<income*0.13 ? 0.08 : 0;
  return clamp(chance, 0.08, 0.94);
}
function bankRequiredDownForMonthlyLimit(o, financing, maxAffordableRate){
  const vehiclePrice = Math.max(1, financing.principal + financing.downPayment);
  const wealth = financingWealthEstimate(o, vehiclePrice);
  const maxCustomerDown = clamp(Math.round(Math.min(vehiclePrice, wealth)/10)*10, 0, vehiclePrice);
  const test = downPayment=>calcFinancing(vehiclePrice, o.creditScore||60, {
    months: financing.months,
    downPayment,
    offer:o
  });
  if(test(maxCustomerDown).monthlyPayment>maxAffordableRate) return null;
  let lo = 0;
  let hi = maxCustomerDown;
  let best = maxCustomerDown;
  for(let i=0;i<24;i++){
    const mid = Math.round(((lo+hi)/2)/10)*10;
    if(test(mid).monthlyPayment<=maxAffordableRate){
      best = mid;
      hi = mid - 10;
    } else {
      lo = mid + 10;
    }
  }
  return {downPayment:best, maxCustomerDown, monthlyPayment:test(best).monthlyPayment};
}
function evaluateBankApproval(o, financing){
  const credit = clamp(o.creditScore||60, 0, 100);
  const income = estimateMonthlyIncome(o);
  const capacity = financingCapacityProfile(o, financing.principal + financing.downPayment);
  const wealth = capacity.wealth;
  const vehiclePrice = Math.max(1, financing.principal+financing.downPayment);
  const downPct = financing.downPayment/vehiclePrice;
  const burden = financing.monthlyPayment/Math.max(1,income);
  const assetCoverage = wealth/Math.max(1, financing.principal+financing.downPayment);
  const securedLuxury = capacity.kind==='wealthy' || assetCoverage>=0.45;
  const burdenLimit = securedLuxury ? 0.48 : capacity.kind==='business' ? 0.40 : 0.34;
  const maxAffordableRate = Math.round(income*burdenLimit);
  const minimumDownPayment = Math.round(vehiclePrice*(securedLuxury ? 0.12 : 0.11)/10)*10;
  const riskScore = clamp(100-credit + Math.max(0, burden-0.16)*180 + Math.max(0, financing.months-60)*0.55 + Math.max(0, 0.12-downPct)*140 - Math.max(0, assetCoverage-0.35)*28 - Math.max(0, downPct-0.2)*36, 0, 100);
  const passedChecks = [];
  const failedChecks = [];
  const addCheck = (id, label, passed, detail)=>{
    const row = {id, label, passed, detail};
    (passed ? passedChecks : failedChecks).push(row);
  };
  addCheck('creditMin', 'Mindestbonität', credit>=38, `Bonität ${credit}/100, Minimum 38/100`);
  addCheck('monthlyBurden', 'Rate im Verhältnis zum Einkommen', financing.monthlyPayment<=maxAffordableRate, `${money(financing.monthlyPayment)} Rate / ${money(income)} Einkommen = ${(burden*100).toFixed(1)}%, erlaubt ${(burdenLimit*100).toFixed(1)}% bzw. ${money(maxAffordableRate)}`);
  addCheck('downPaymentPlausible', 'Anzahlung plausibel', financing.downPayment>=0 && financing.downPayment<=vehiclePrice, `${money(financing.downPayment)} von ${money(vehiclePrice)}`);
  const requiredDownPayment = Math.round(Math.min(vehiclePrice, Math.max(minimumDownPayment, financing.downPayment, vehiclePrice-income*burdenLimit*Math.max(1, financing.months)))/10)*10;
  const hardFailed = failedChecks.filter(x=>x.id==='creditMin' || x.id==='monthlyBurden' || x.id==='downPaymentPlausible');
  if(hardFailed.length){
    const primary = hardFailed[0];
    const monthlyOnly = hardFailed.length===1 && primary.id==='monthlyBurden';
    const downSolution = monthlyOnly ? bankRequiredDownForMonthlyLimit(o, financing, maxAffordableRate) : null;
    if(downSolution && downSolution.downPayment>financing.downPayment){
      return {approved:false, result:'higher_down', label:'Nur mit höherer Anzahlung', reason:`Rate liegt über dem Banklimit; mit ${money(downSolution.downPayment)} Anzahlung wäre die Rate bei etwa ${money(downSolution.monthlyPayment)}.`, failedChecks, passedChecks, maxAffordableRate, actualMonthlyRate:financing.monthlyPayment, requiredMonthlyPayment:maxAffordableRate, requiredDownPayment:downSolution.downPayment, actualDownPayment:financing.downPayment, minimumDownPayment, maxDebtToIncomeRatio:burdenLimit, debtToIncomeRatio:burden, riskScore, note:`Rate zu hoch. Bankfähig wäre dieses Angebot voraussichtlich ab ${money(downSolution.downPayment)} Anzahlung.`};
    }
    return {
      approved:false,
      result:'rejected',
      label:'Abgelehnt',
      reason:primary.detail,
      failedChecks,
      passedChecks,
      maxAffordableRate,
      actualMonthlyRate:financing.monthlyPayment,
      requiredMonthlyPayment:maxAffordableRate,
      requiredDownPayment,
      actualDownPayment:financing.downPayment,
      minimumDownPayment,
      maxDebtToIncomeRatio:burdenLimit,
      debtToIncomeRatio:burden,
      riskScore,
      note:`Ablehnung: ${primary.label} fehlgeschlagen. ${primary.detail}.`
    };
  }
  if(downPct<0.11) return {approved:false, result:'higher_down', label:'Nur mit höherer Anzahlung', reason:'Besicherung unter Mindestanzahlung.', failedChecks:[{id:'minimumDownPayment', label:'Mindestanzahlung', passed:false, detail:`${money(financing.downPayment)} vorhanden, mindestens ${money(minimumDownPayment)} erwartet.`}], passedChecks, maxAffordableRate, actualMonthlyRate:financing.monthlyPayment, requiredMonthlyPayment:maxAffordableRate, requiredDownPayment: Math.min(vehiclePrice, Math.round(vehiclePrice*0.18/10)*10), actualDownPayment:financing.downPayment, minimumDownPayment, maxDebtToIncomeRatio:burdenLimit, debtToIncomeRatio:burden, riskScore, note:'Die Besicherung ist zu niedrig.'};
  const longTermRiskLimit = securedLuxury ? 68 : 48;
  const longTermMonthLimit = securedLuxury ? 84 : 72;
  if(financing.months>longTermMonthLimit && riskScore>longTermRiskLimit) return {approved:false, result:'shorter_term', label:'Nur mit kürzerer Laufzeit', reason:'Laufzeit-Risiko zu hoch.', failedChecks:[{id:'termRisk', label:'Laufzeit/Risiko', passed:false, detail:`${financing.months} Monate bei Risikoscore ${Math.round(riskScore)}, maximal ${longTermMonthLimit} Monate empfohlen.`}], passedChecks, maxAffordableRate, actualMonthlyRate:financing.monthlyPayment, requiredMonthlyPayment:maxAffordableRate, requiredDownPayment, actualDownPayment:financing.downPayment, minimumDownPayment, maxDebtToIncomeRatio:burdenLimit, debtToIncomeRatio:burden, riskScore, requiredMonths: longTermMonthLimit, note:'Die Laufzeit ist für das Risiko zu lang.'};
  if(riskScore>58) return {approved:false, result:'higher_rate', label:'Nur mit höherem Zinssatz', reason:'Risikoaufschlag erforderlich.', failedChecks:[{id:'riskScore', label:'Risikoscore', passed:false, detail:`Risikoscore ${Math.round(riskScore)} über Grenze 58.`}], passedChecks, maxAffordableRate, actualMonthlyRate:financing.monthlyPayment, requiredMonthlyPayment:maxAffordableRate, requiredDownPayment, actualDownPayment:financing.downPayment, minimumDownPayment, maxDebtToIncomeRatio:burdenLimit, debtToIncomeRatio:burden, riskScore, requiredRate: clamp(financing.nominalRate+0.024, financing.nominalRate, 0.169), note:'Risikoaufschlag erforderlich.'};
  return {approved:true, result:'approved', label:'Genehmigt', reason:'Alle harten Bankbedingungen erfüllt.', failedChecks:[], passedChecks, maxAffordableRate, actualMonthlyRate:financing.monthlyPayment, requiredMonthlyPayment:maxAffordableRate, requiredDownPayment, actualDownPayment:financing.downPayment, minimumDownPayment, maxDebtToIncomeRatio:burdenLimit, debtToIncomeRatio:burden, riskScore, note:'Konditionen passen zur Bonität.'};
}
function showBankDecisionModal(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o.bankDecision) return;
  const c = findCar(o.carId); if(!c) return;
  const app = o.bankDecision;
  const kind = app.method==='leasing' ? 'Leasingantrag' : 'Finanzierungsantrag';
  const calc = app.method==='finanzierung'
    ? (app.financingOffer ? financeResultFor(o, app.financingOffer) : calculateFinanceOffer(o, c, {vehiclePrice:app.amount, ...(app.options||{})}))
    : (app.financingOffer || calcLeasing(app.amount, o.creditScore||60));
  const risk = app.risk || financingApproval(o.creditScore||60, app.amount, app.method);
  const delayRisk = risk.delayRiskPct;
  const higherDown = Math.round(app.amount*0.15/10)*10;
  const bank = app.method==='finanzierung' ? calc.bankCheck : {approved:true, result:'approved', label:'Genehmigt', riskScore:delayRisk, note:risk.label, failedChecks:[], passedChecks:[]};
  app.bankResult = bank;
  const revisedShort = app.method==='finanzierung' && bank.result==='shorter_term' ? calculateFinanceOffer(o, c, {vehiclePrice:app.amount, downPayment:calc.downPayment, months:bank.requiredMonths, annualRate:calc.nominalRate}) : null;
  const revisedRate = app.method==='finanzierung' && bank.result==='higher_rate' ? calculateFinanceOffer(o, c, {vehiclePrice:app.amount, downPayment:calc.downPayment, months:calc.months, annualRate:bank.requiredRate}) : null;
  showModal(`
    <h2 class="section-title">🏦 Bankprüfung: ${kind}</h2>
    <p class="subtle">${o.name} möchte ${money(app.amount)} für ${c.brand} ${c.model} ${app.method==='leasing'?'leasen':'finanzieren'}.</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Bonität</div><div class="num" style="color:${riskColor(100-(o.creditScore||60))};">${o.creditScore||60}/100</div></div>
      <div class="stat-card"><div class="lbl">Zahlungsausfall-Risiko</div><div class="num" style="color:${riskColor(delayRisk)};">${delayRisk}%</div></div>
      <div class="stat-card"><div class="lbl">Bankentscheidung</div><div class="num" style="font-size:18px;color:${bank.result==='approved'?'var(--teal)':bank.result==='rejected'?'var(--crimson)':'var(--brass)'};">${bank.label}</div></div>
      <div class="stat-card"><div class="lbl">${app.method==='leasing'?'Leasingrate':'Monatsrate'}</div><div class="num">${money(app.method==='leasing'?calc.leaseRate:calc.monthlyPayment)}</div></div>
    </div>
    ${app.method==='finanzierung'?`<div class="notice" style="display:block;">
      <b>Geprüfte Konditionen</b><br>
      ${financingOfferLabel(calc)}<br>
      Finanzierungsbetrag: ${money(calc.principal)} · Gesamtzahlung: ${money(calc.totalCost)} · Zinsen gesamt: ${money(calc.totalInterest)}<br>
      Bankhinweis: ${bank.note}
    </div>`:''}
    ${app.method==='finanzierung'?renderFinanceDebug(calc):''}
    <div class="notice ${risk.level==='high'?'warn':'good'}" style="display:block;">
      <b>Kundenhinweise</b><br>
      Beruf: ${o.job} · Bonität: ${o.creditScore}/100 · Zahlungsart: ${app.method==='leasing'?'Leasing':'Finanzierung'}<br>
      ${risk.notes.join('<br>')}
    </div>
    <div class="row-actions">
      <button class="btn btn-danger" onclick="closeModal(); bankRejectApplication('${o.id}')">Ablehnen</button>
      ${bank.result==='higher_down'?`<button class="btn btn-ghost" onclick="closeModal(); bankApproveWithConditions('${o.id}', ${bank.requiredDownPayment||higherDown})">Nur mit ${money(bank.requiredDownPayment||higherDown)} Anzahlung</button>`:''}
      ${bank.result==='shorter_term'?`<button class="btn btn-ghost" onclick="closeModal(); bankPresentRevisedFinancing('${o.id}','shorter')">Kürzere Laufzeit vorlegen${revisedShort?` (${revisedShort.months} Monate)`:''}</button>`:''}
      ${bank.result==='higher_rate'?`<button class="btn btn-ghost" onclick="closeModal(); bankPresentRevisedFinancing('${o.id}','rate')">Höheren Zinssatz vorlegen${revisedRate?` (${(revisedRate.nominalRate*100).toFixed(1)}%)`:''}</button>`:''}
      ${bank.result==='approved'?`<button class="btn btn-primary" onclick="closeModal(); bankApproveApplication('${o.id}')">Genehmigen</button>`:''}
    </div>
  `);
}
function bankApproveApplication(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o.bankDecision) return;
  const c = findCar(o.carId); if(!c) return;
  const app = o.bankDecision;
  o.bankDecision = null;
  releaseReservation(c);
  addMsg(o, 'player', `Ich genehmige den ${app.method==='leasing'?'Leasing':'Finanzierungs'}antrag.`);
  addMsg(o, 'customer', `Vielen Dank, das freut mich!`);
  const financing = app.method==='finanzierung'
    ? (app.financingOffer ? financeResultFor(o, app.financingOffer) : calculateFinanceOffer(o, c, {vehiclePrice:app.amount, ...(app.options||{})}))
    : (app.financingOffer || calcLeasing(app.amount, o.creditScore||60));
  completeSaleFlow(c, app.amount, o, financing);
}
function bankApproveWithConditions(offerId, higherDown){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o.bankDecision) return;
  const app = o.bankDecision;
  const financing = app.method==='finanzierung'
    ? calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:app.amount, ...(app.financingOffer||{}), downPayment:higherDown})
    : null;
  const signature = financingConditionSignature(app.amount, financing || app.financingOffer);
  o.conditionDecisionSignatures = o.conditionDecisionSignatures || [];
  if(o.conditionDecisionSignatures.includes(signature)){
    notify('Diese Konditionen wurden dem Kunden bereits vorgelegt. Ein neuer Versuch ist nur bei echter Änderung möglich.','warn');
    showBankDecisionModal(offerId);
    return;
  }
  o.conditionDecisionSignatures.push(signature);
  o.bankDecision = null;
  o._manualBankCondition = higherDown;
  showFinancingConditionsModal(o, {amount:app.amount, method:app.method, higherDown, financingOffer:financing});
}
function bankPresentRevisedFinancing(offerId, mode){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o.bankDecision) return;
  const car = findCar(o.carId); if(!car) return;
  const app = o.bankDecision;
  const current = app.financingOffer ? financeResultFor(o, app.financingOffer) : calculateFinanceOffer(o, car, {vehiclePrice:app.amount});
  const revised = mode==='shorter'
    ? calculateFinanceOffer(o, car, {vehiclePrice:app.amount, downPayment:current.downPayment, months:Math.min(60, current.months||60), annualRate:current.nominalRate})
    : calculateFinanceOffer(o, car, {vehiclePrice:app.amount, downPayment:current.downPayment, months:current.months, annualRate:clamp((current.nominalRate||0.08)+0.024, 0, 0.169)});
  const signature = financingConditionSignature(app.amount, revised);
  o.conditionDecisionSignatures = o.conditionDecisionSignatures || [];
  if(o.conditionDecisionSignatures.includes(signature)){
    notify('Diese Konditionen wurden dem Kunden bereits vorgelegt. Bitte ändern Sie das Angebot deutlicher.','warn');
    showBankDecisionModal(offerId);
    return;
  }
  o.conditionDecisionSignatures.push(signature);
  const chance = customerFinancingAcceptanceChance(o, revised);
  o.bankDecision = null;
  addMsg(o, 'player', `Die Bank genehmigt nur angepasste Konditionen: ${financingOfferLabel(revised)}.`);
  if(Math.random()<chance){
    addMsg(o, 'customer', `Einverstanden, die angepassten Konditionen akzeptiere ich.`);
    releaseReservation(car);
    completeSaleFlow(car, app.amount, o, revised);
  } else {
    addMsg(o, 'customer', `Die angepassten Konditionen sind mir zu teuer. So möchte ich den Vertrag nicht abschließen.`);
    rejectFinancingConditions(offerId);
  }
  renderAllOpen(); scheduleSave();
}
function bankRejectApplication(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o.bankDecision) return;
  const c = findCar(o.carId); if(!c) return;
  const app = o.bankDecision;
  o.bankDecision = null;
  addMsg(o, 'player', `Ich lehne den ${app.method==='leasing'?'Leasing':'Finanzierungs'}antrag aufgrund des Risikos ab.`);
  addMsg(o, 'customer', `Schade, dann klappt es wohl leider nicht.`);
  showFinancingRejectedModal(c, app.amount, o);
  renderAllOpen(); scheduleSave();
}
function showFinancingConditionsModal(o, app){
  const c = findCar(o.carId); if(!c) return;
  const higherDown = app.higherDown || Math.round(app.amount*0.15/10)*10;
  const acceptChance = customerConditionAcceptChance(o, app.amount, higherDown);
  o._conditionWheel = createConditionWheelDecision(o.id, app.amount, higherDown, acceptChance);
  o._conditionWheel.financingOffer = app.financingOffer || null;
  debugConditionWheel('decision-created', o, {nextAction:'show wheel modal'});
  showModal(`
    <h2 class="section-title">🏦 Bank verlangt höhere Anzahlung</h2>
    <p class="subtle">Die Bank genehmigt ${o.name}s Antrag über ${money(app.amount)} nur bei einer Anzahlung von mindestens ${money(higherDown)}.</p>
    <div class="wheel-wrap">
      <div class="wheel-pointer"></div>
      <div class="condition-wheel" id="conditionWheel">
        <div class="wheel-label accept">Akzeptiert</div>
        <div class="wheel-label reject">Lehnt ab</div>
      </div>
      <div class="wheel-result" id="conditionWheelResult">Das Glücksrad entscheidet...</div>
      <div class="wheel-note">Akzeptanzchance: ${Math.round(acceptChance*100)}%. Die Entscheidung wird automatisch getroffen.</div>
    </div>
    <div class="notice" style="display:block;">Bitte warten: Der Kunde entscheidet zufällig, ob er die höhere Anzahlung stemmen kann.</div>
  `);
  const overlay = document.getElementById('modalOverlay');
  if(overlay) overlay.onclick = ()=>{};
  setTimeout(()=>startConditionWheelSpin(o.id), 250);
}
function customerConditionAcceptChance(o, amount, higherDown){
  const credit = clamp(o.creditScore||60, 0, 100);
  const downPressure = clamp((higherDown||0)/Math.max(1,amount||1), 0, .45);
  const personaBoost = o.persona==='Luxuskäufer' ? .12 : (o.persona==='Schnäppchenjäger' ? -.16 : (o.persona==='Student' ? -.12 : 0));
  return clamp(.38 + credit/260 - downPressure*.65 + personaBoost, .18, .86);
}
const CONDITION_WHEEL = Object.freeze({
  durationMs: 4200,
  settleMs: 900,
  acceptedAngle: 270,
  rejectedAngle: 90,
  minTurns: 6,
  maxTurns: 8,
});
// Spiellogik: genau ein Ergebnis wird vor der Animation festgelegt.
function createConditionWheelDecision(offerId, amount, higherDown, acceptChance, rng){
  const random = rng || Math.random;
  const result = random() < acceptChance ? 'accepted' : 'rejected';
  return {
    offerId,
    amount,
    higherDown,
    acceptChance,
    result,
    status:'ready',
    spinStarted:false,
    animationDone:false,
    executed:false,
    createdDay:state.day,
    token: uid('wheel'),
  };
}
// Darstellung: der Zielwinkel wird ausschließlich aus dem festgelegten Ergebnis abgeleitet.
function conditionWheelTargetRotation(result, turns){
  const baseAngle = result==='accepted' ? CONDITION_WHEEL.acceptedAngle : CONDITION_WHEEL.rejectedAngle;
  return 360 * turns + baseAngle;
}
function conditionWheelDisplayedResult(rotation){
  const localAngleAtPointer = (360 - (((rotation % 360) + 360) % 360)) % 360;
  return localAngleAtPointer < 180 ? 'accepted' : 'rejected';
}
function conditionWheelResultText(result){
  return result==='accepted'
    ? 'Kunde akzeptiert die höhere Anzahlung'
    : 'Kunde lehnt die höhere Anzahlung ab';
}
function isConditionWheelModalOpen(){
  return !!(document.getElementById('modalOverlay') && document.getElementById('conditionWheel'));
}
function debugConditionWheel(step, offer, extra){
  try{
    const w = offer && offer._conditionWheel ? offer._conditionWheel : {};
    const financingStatus = offer ? {
      applicationPending: !!offer.applicationPending,
      financingApp: !!offer.financingApp,
      bankDecision: !!offer.bankDecision,
      offerStillOpen: !!(state.offers||[]).find(x=>x.id===offer.id),
    } : {};
    console.debug('[ConditionWheel]', step, {
      offerId: offer && offer.id,
      customer: offer && offer.name,
      probability: w.acceptChance,
      result: w.result,
      displayedResult: w.displayedResult,
      finalRotation: w.finalRotation,
      status: w.status,
      financingStatus,
      ...(extra||{}),
    });
  }catch(e){}
}
function startConditionWheelSpin(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o._conditionWheel) return;
  const session = o._conditionWheel;
  if(session.spinStarted || session.animationDone || session.executed || session.status!=='ready') return;
  if(!isConditionWheelModalOpen()) return;
  const wheel = document.getElementById('conditionWheel');
  const resultEl = document.getElementById('conditionWheelResult');
  if(!wheel || !resultEl) return;
  session.spinStarted = true;
  session.status = 'spinning';
  const turns = randInt(CONDITION_WHEEL.minTurns, CONDITION_WHEEL.maxTurns);
  session.finalRotation = conditionWheelTargetRotation(session.result, turns);
  session.displayedResult = conditionWheelDisplayedResult(session.finalRotation);
  if(session.displayedResult !== session.result){
    session.status = 'blocked';
    console.error('[ConditionWheel] Zielwinkel passt nicht zum berechneten Ergebnis', {
      offerId,
      result: session.result,
      displayedResult: session.displayedResult,
      finalRotation: session.finalRotation,
    });
    return;
  }
  debugConditionWheel('spin-start', o, {nextAction:'animate wheel'});
  playWheelSound();
  wheel.style.transition = 'none';
  wheel.style.transform = 'rotate(0deg)';
  void wheel.offsetHeight;
  wheel.style.transition = `transform ${CONDITION_WHEEL.durationMs}ms cubic-bezier(.12,.72,.12,1)`;
  requestAnimationFrame(()=>{ wheel.style.transform = `rotate(${session.finalRotation}deg)`; });
  const finish = ()=>finishConditionWheelSpin(offerId, session.token);
  wheel.addEventListener('transitionend', finish, {once:true});
  session.fallbackTimer = setTimeout(finish, CONDITION_WHEEL.durationMs + 180);
}
function finishConditionWheelSpin(offerId, token){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o._conditionWheel) return;
  const session = o._conditionWheel;
  if(session.token!==token || session.animationDone || session.executed) return;
  if(session.fallbackTimer) clearTimeout(session.fallbackTimer);
  if(!isConditionWheelModalOpen()) return;
  const wheel = document.getElementById('conditionWheel');
  const resultEl = document.getElementById('conditionWheelResult');
  if(!wheel || !resultEl) return;
  session.animationDone = true;
  session.status = 'finished';
  wheel.style.transition = 'none';
  wheel.style.transform = `rotate(${session.finalRotation}deg)`;
  resultEl.textContent = conditionWheelResultText(session.result);
  resultEl.style.color = session.result==='accepted' ? 'var(--teal)' : 'var(--crimson)';
  playSound(session.result==='accepted' ? 'sale' : 'warn');
  debugConditionWheel('spin-finished', o, {nextAction:session.result==='accepted'?'acceptFinancingConditions':'rejectFinancingConditions'});
  setTimeout(()=>executeConditionWheelResult(offerId, token), CONDITION_WHEEL.settleMs);
}
function executeConditionWheelResult(offerId, token){
  const o = state.offers.find(x=>x.id===offerId); if(!o || !o._conditionWheel) return;
  const session = o._conditionWheel;
  if(session.token!==token || session.executed || session.status!=='finished') return;
  session.executed = true;
  closeModal();
  debugConditionWheel('execute-result', o, {nextAction:session.result==='accepted'?'acceptFinancingConditions':'rejectFinancingConditions'});
  if(session.result==='accepted') acceptFinancingConditions(offerId);
  else rejectFinancingConditions(offerId);
}
function runConditionWheelSelfTest(iterations){
  const total = iterations || 1000;
  const failures = [];
  for(let i=0;i<total;i++){
    let draw = (i * 37 % 1000) / 1000;
    const session = createConditionWheelDecision('test-'+i, 50000, 7500, 0.5, ()=>draw);
    const turns = CONDITION_WHEEL.minTurns + (i % (CONDITION_WHEEL.maxTurns-CONDITION_WHEEL.minTurns+1));
    const rotation = conditionWheelTargetRotation(session.result, turns);
    const displayed = conditionWheelDisplayedResult(rotation);
    const beforeSpinClean = session.spinStarted === false && session.executed === false && session.status === 'ready';
    session.spinStarted = true;
    session.status = 'spinning';
    const secondStartBlocked = session.spinStarted || session.status !== 'ready';
    session.finalRotation = rotation;
    session.displayedResult = displayed;
    session.animationDone = true;
    session.status = 'finished';
    const firstExecuteAllowed = !session.executed && session.status === 'finished';
    session.executed = true;
    const secondExecuteBlocked = session.executed === true;
    if(displayed !== session.result || !beforeSpinClean || !secondStartBlocked || !firstExecuteAllowed || !secondExecuteBlocked || !Number.isFinite(rotation)){
      failures.push({i, result:session.result, displayed, rotation, beforeSpinClean, secondStartBlocked, firstExecuteAllowed, secondExecuteBlocked});
    }
  }
  return {ok:failures.length===0, iterations:total, failures};
}
function playWheelSound(){
  try{
    const ctx = window._audioCtx || (window._audioCtx = new (window.AudioContext||window.webkitAudioContext)());
    for(let i=0;i<26;i++){
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = i%2 ? 'triangle' : 'sine';
      o.frequency.value = 420 + (i%7)*38;
      o.connect(g); g.connect(ctx.destination);
      const t = ctx.currentTime + i*0.075;
      g.gain.setValueAtTime(0.0001,t);
      g.gain.exponentialRampToValueAtTime(0.09, t+0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t+0.055);
      o.start(t); o.stop(t+0.07);
    }
  }catch(e){ /* Audio evtl. nicht verfügbar – ignorieren */ }
}
function acceptFinancingConditions(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const wheel = o._conditionWheel;
  if(!wheel || wheel.result !== 'accepted'){
    debugConditionWheel('accept-blocked-invalid-result', o, {nextAction:'rejectFinancingConditions'});
    rejectFinancingConditions(offerId);
    return;
  }
  const amount = wheel.amount;
  const approvedFinancing = wheel.financingOffer || (o.paymentMethod==='finanzierung' ? calculateFinanceOffer(o, c, {vehiclePrice:amount, downPayment:wheel.higherDown}) : null);
  debugConditionWheel('accepted-apply', o, {nextAction:'completeSaleFlow'});
  delete o._conditionWheel;
  releaseReservation(c);
  addMsg(o, 'customer', `In Ordnung, ich akzeptiere die höhere Anzahlung.`);
  const financing = o.paymentMethod==='finanzierung' ? approvedFinancing : calcLeasing(amount, o.creditScore||60);
  completeSaleFlow(c, amount, o, financing);
}
function rejectFinancingConditions(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId);
  debugConditionWheel('rejected-apply', o, {nextAction:'keep deal open for alternatives'});
  delete o._conditionWheel;
  if(c) releaseReservation(c);
  o.applicationPending = false;
  o.financingApp = null;
  o.bankDecision = null;
  o.pendingReply = null;
  o.chatStatus = '';
  o.patience = Math.max(1, (o.patience||2)-1);
  addMsg(o, 'customer', `Die höhere Anzahlung schaffe ich leider nicht. Können wir über eine andere Zahlungsart oder einen niedrigeren Preis sprechen?`);
  notify(`${o.name} konnte die verschärften Finanzierungsbedingungen nicht erfüllen.`,'warn');
  renderAllOpen(); scheduleSave();
}
function showFinancingRejectedModal(c, amount, offer){
  const kind = offer.paymentMethod==='leasing' ? 'Leasinganfrage' : 'Finanzierungsanfrage';
  showModal(`
    <h2 class="section-title">🏦 Antrag nicht freigegeben</h2>
    <p class="subtle">${kind} über ${money(amount)} wurde nicht freigegeben (Bonität: ${offer.creditScore}/100, ${offer.job}).</p>
    <div class="notice warn">Ohne Finanzierung kann ${offer.name} das Fahrzeug nur bar bezahlen — oder der Deal platzt.</div>
    <div class="row-actions">
      <button class="btn btn-danger" onclick="closeModal(); cancelDealAfterRejection('${offer.id}')">Deal platzen lassen</button>
      <button class="btn btn-primary" onclick="closeModal(); completeSaleFlowById('${c.id}','${offer.id}',${amount})">${offer.name} zahlt stattdessen bar</button>
    </div>
  `);
}
function cancelDealAfterRejection(offerId){
  const o = state.offers.find(x=>x.id===offerId);
  const c = o ? findCar(o.carId) : null;
  if(c) releaseReservation(c);
  if(o) closeConversationForCustomer(o, -5);
  state.offers = state.offers.filter(x=>x.id!==offerId);
  if(o){
    notify(`${o.name} konnte keine Finanzierung bekommen und ist abgesprungen.`,'warn');
    showDropoutModal(
      'sale',
      'Kunde abgesprungen',
      `${o.name} konnte die Finanzierung nicht abschließen.`,
      'Der Verkauf wurde nicht abgeschlossen. Fahrzeug und Zahlung bleiben unverändert.'
    );
  }
  renderAllOpen(); scheduleSave();
}
function completeSaleFlowById(carId, offerId, amount){
  const c = findCar(carId); const o = state.offers.find(x=>x.id===offerId);
  if(!c||!o) return;
  releaseReservation(c);
  completeSaleFlow(c, amount, o, null);
}
function completeSaleFlow(c, amount, offer, financing){
  const standDays = c.standDays;
  state.inventory = state.inventory.filter(x=>x.id!==c.id);
  delete state.listings[c.id];
  state.offers = state.offers.filter(o=>o.carId!==c.id);

  let cashReceived = amount;
  if(financing){
    if(financing.type==='leasing'){
      // Leasing bindet das Autohaus immer über die Laufzeit – nur die Sonderzahlung fließt sofort.
      cashReceived = financing.specialPayment;
      createLeaseContract(offer, c, financing);
    } else if(financing.type==='finanzierung' && state.extendedFinancingMode){
      cashReceived = financing.downPayment;
      createFinancingContract(offer, c, financing);
    }
  }
  addTx('income', 'Verkauf '+c.brand+' '+c.model+' an '+offer.name + (cashReceived<amount ? ' (Anzahlung/Sonderzahlung, Rest über Finanzierungspartner Autohaus)' : ''), cashReceived);
  const profit = amount - c.purchasePrice;
  const marginPct = c.purchasePrice ? (profit/c.purchasePrice*100) : 0;
  state.salesHistory = state.salesHistory || [];
  const saleRecord = {
    id: uid('sale'), day: state.day, brand:c.brand, model:c.model, year:c.year,
    mileage:c.mileage, engine:c.engine, transmission:c.transmission, tier:tierInfo(c.brand,c.model).label,
    salePrice: amount, purchasePrice:c.purchasePrice||0, marketValue:c.marketValue||0,
    profit, marginPct, standDays, paymentMethod: financing ? financing.type : 'bar',
    customerName: offer.name, condition:c.condition,
  };
  state.salesHistory.unshift(saleRecord);
  state.salesHistory = state.salesHistory.slice(0,500);
  const repBefore = state.reputation;
  const repChange = clamp((profit>=0? randInt(1,3): -randInt(1,3)), -6, 6);
  state.reputation = clamp(state.reputation + repChange, 0, 100);
  const xpGain = computeXpGain(profit)
    + (financing ? (financing.type==='leasing' ? 42 : 34) : 0)
    + (offer.fromWishlist ? 32 : 0);
  const leveledUp = addXp(xpGain);
  const reaction = customerReaction(amount, offer.amount);
  const delivery = createDeliveryOrder(offer, c, amount, profit, financing, reaction, saleRecord.id);
  recordSaleForCustomer(offer, c, amount, profit, financing, reaction, {review:false});
  state.salesCount = (state.salesCount||0)+1;
  state.lastProfit = profit;
  state.bestProfit = Math.max(state.bestProfit||0, profit);
  state.totalProfit = (state.totalProfit||0) + profit;
  state.lastTierLuxury = ['Luxus','Exotisch'].includes(tierInfo(c.brand, c.model).label);
  if(standDays<=3) state.fastSales = (state.fastSales||0)+1;
  if(financing && financing.type==='leasing') state.leasingSales = (state.leasingSales||0)+1;
  else if(financing && financing.type==='finanzierung') state.financingSales = (state.financingSales||0)+1;
  else state.cashSales = (state.cashSales||0)+1;
  trainEmployees('Verkäufer', profit>=0 ? 42 : 24, 'abgeschlossener Verkauf');
  if(financing && financing.type==='leasing') trainEmployees('Leasingberater', 45, 'genehmigter Leasingabschluss');
  if(financing && financing.type==='finanzierung') trainEmployees('Finanzierungsberater', 45, 'genehmigte Finanzierung');
  const newAchievements = checkAchievements();
  playSound('sale');
  showSaleCelebration({
    c, amount, profit, marginPct, standDays, repChange, repBefore, repAfter: state.reputation,
    xpGain, leveledUp, newAchievements, financing, customerName: offer.name, persona: offer.persona,
    reaction, deliveryId: delivery.id,
  });
  renderAllOpen();
  scheduleSave();
}

/* =============================== FAHRZEUGLIEFERUNG =============================== */
const DELIVERY_TYPES = {
  pickup:{label:'Selbstabholung', mult:0, days:[0,1]},
  standard:{label:'Lieferung', mult:1, days:[2,4]},
  express:{label:'Expresslieferung', mult:1.65, days:[1,2]},
  scheduled:{label:'Terminlieferung', mult:1.25, days:[3,6]},
};
const DELIVERY_METHODS = {
  own:{label:'Eigener Fahrer', mult:.58, risk:.09, quality:0, days:0},
  carrier:{label:'Externe Spedition', mult:.78, risk:.045, quality:1, days:1},
  premium:{label:'Premium-Transport', mult:1.08, risk:.018, quality:2, days:0},
};
const DELIVERY_SHARES = {
  customer:{label:'Kunde zahlt vollständig', dealerPct:0, sat:0, review:0},
  split:{label:'50:50 Kulanz', dealerPct:.5, sat:4, review:1},
  dealer:{label:'Autohaus übernimmt vollständig', dealerPct:1, sat:9, review:1},
};
function deliveryDistanceFor(offer, amount){
  let base = randInt(8,180);
  if(offer.persona==='Luxuskäufer') base += randInt(20,160);
  if(offer.persona==='Student') base = randInt(3,80);
  if(amount>70000) base += randInt(30,220);
  return clamp(base, 3, 520);
}
function deliveryCustomerAge(offer){
  if(offer.persona==='Student') return randInt(19,29);
  if(offer.persona==='Rentner') return randInt(63,82);
  return randInt(28,62);
}
function chooseDeliveryType(offer, c, amount, distanceKm, age){
  const highValue = amount >= 45000;
  const suv = SUV_MODELS.includes(c.model);
  if(distanceKm<25 && age<62 && !highValue && Math.random()<0.62) return 'pickup';
  if(offer.persona==='Luxuskäufer' && Math.random()<0.46) return 'express';
  if(distanceKm>140 || highValue || suv) return Math.random()<0.36 ? 'scheduled' : (Math.random()<0.28 ? 'express' : 'standard');
  return Math.random()<0.25 ? 'pickup' : (Math.random()<0.22 ? 'scheduled' : 'standard');
}
function deliveryCostBase(c, amount, type, distanceKm){
  if(type==='pickup') return 0;
  const size = SUV_MODELS.includes(c.model) ? 1.18 : 1;
  const value = 1 + clamp(amount/160000, 0, .55);
  const typeMult = DELIVERY_TYPES[type].mult || 1;
  return Math.round((distanceKm*1.35*size*value*typeMult + 85*typeMult)/10)*10;
}
function createDeliveryOrder(offer, c, amount, profit, financing, reaction, saleId){
  const distanceKm = deliveryDistanceFor(offer, amount);
  const age = deliveryCustomerAge(offer);
  const desiredType = chooseDeliveryType(offer, c, amount, distanceKm, age);
  const baseCost = deliveryCostBase(c, amount, desiredType, distanceKm);
  const order = {
    id: uid('del'), saleId, createdDay: state.day, status:'planning', statusIndex:0,
    customerId: offer.customerId, customerName: offer.name, customerAge: age,
    persona: offer.persona, car:{brand:c.brand, model:c.model, year:c.year, value:amount, tier:tierInfo(c.brand,c.model).label},
    desiredType, distanceKm, baseCost, method:null, share:'customer',
    dealerSharePct:0, customerCharge:baseCost, dealerCost:0, transportCost:0,
    daysTotal:0, daysLeft:0, plannedArrivalDay:null, onTime:null, problem:false,
    reviewPending:true, reviewStarsDelta:0, satisfactionDelta:0, summary:'Übergabe noch nicht abgeschlossen.',
    reviewContext:{offer:{...offer}, car:{...c}, amount, profit, financing, reaction},
  };
  state.deliveries = state.deliveries || [];
  state.deliveries.unshift(order);
  return order;
}
function deliveryStatusLabel(d){
  if(d.status==='planning') return 'Lieferung planen';
  if(d.status==='pickup_completed') return 'Selbstabholung abgeschlossen';
  if(d.status==='completed') return 'Lieferung abgeschlossen';
  return ['Fahrzeug wird vorbereitet','Fahrzeug verladen','Fahrzeug unterwegs','Kurz vor Ankunft'][d.statusIndex||0] || 'Fahrzeug unterwegs';
}
function openDeliveryPlanning(id){
  const d = (state.deliveries||[]).find(x=>x.id===id); if(!d) return;
  const type = DELIVERY_TYPES[d.desiredType];
  if(d.desiredType==='pickup'){
    showModal(`
      <h2 class="section-title">Fahrzeugübergabe planen</h2>
      <p class="subtle">${d.customerName} möchte den ${d.car.brand} ${d.car.model} selbst abholen.</p>
      <div class="stat-grid">
        <div class="stat-card"><div class="lbl">Entfernung</div><div class="num">${d.distanceKm} km</div></div>
        <div class="stat-card"><div class="lbl">Lieferkosten</div><div class="num">${money(0)}</div></div>
      </div>
      <div class="notice good">Keine Lieferkosten. Die Übergabe kann direkt abgeschlossen werden.</div>
      <div class="row-actions"><button class="btn btn-ghost" onclick="closeModal()">Später</button><button class="btn btn-primary" onclick="completePickupDelivery('${d.id}')">Abholung abschließen</button></div>
    `);
    return;
  }
  showModal(`
    <h2 class="section-title">Fahrzeuglieferung planen</h2>
    <p class="subtle">${d.customerName} möchte ${type.label.toLowerCase()} für ${d.car.brand} ${d.car.model}. Entfernung: ${d.distanceKm} km. Basiskosten laut Vertrag: ${money(d.baseCost)}.</p>
    <div class="field"><label>Durchführung</label><select id="deliveryMethod">${Object.entries(DELIVERY_METHODS).map(([k,m])=>`<option value="${k}">${m.label} · Kostenfaktor ${(m.mult*100).toFixed(0)}% · Risiko ${(m.risk*100).toFixed(1)}%</option>`).join('')}</select></div>
    <div class="field"><label>Kulanzentscheidung</label><select id="deliveryShare">${Object.entries(DELIVERY_SHARES).map(([k,s])=>`<option value="${k}">${s.label}</option>`).join('')}</select></div>
    <div class="notice" style="display:block;">Lieferkosten werden dem Kunden transparent berechnet. Ihre Kulanz reduziert kurzfristig den Gewinn, kann aber Zufriedenheit, Bewertung und Stammkundenchance verbessern.</div>
    <div class="row-actions"><button class="btn btn-ghost" onclick="closeModal()">Später</button><button class="btn btn-primary" onclick="confirmDeliveryPlan('${d.id}')">Lieferung beauftragen</button></div>
  `);
}
function completePickupDelivery(id){
  const d = (state.deliveries||[]).find(x=>x.id===id); if(!d) return;
  d.status = 'pickup_completed'; d.completedDay = state.day; d.onTime = true;
  d.summary = 'Selbstabholung pünktlich abgeschlossen.'; d.satisfactionDelta = 1;
  finalizeDelivery(d); closeModal(); renderAllOpen(); scheduleSave();
}
function confirmDeliveryPlan(id){
  const d = (state.deliveries||[]).find(x=>x.id===id); if(!d) return;
  const methodKey = document.getElementById('deliveryMethod')?.value || 'carrier';
  const shareKey = document.getElementById('deliveryShare')?.value || 'customer';
  const method = DELIVERY_METHODS[methodKey], share = DELIVERY_SHARES[shareKey], type = DELIVERY_TYPES[d.desiredType];
  const coordBonus = employeeBonus('Fuhrpark-/Lieferkoordinator');
  const deliveryUpgrade = upgradeLevel('premium_delivery');
  d.method = methodKey; d.share = shareKey; d.dealerSharePct = share.dealerPct;
  d.transportCost = Math.round(d.baseCost * method.mult / 10) * 10;
  d.customerCharge = Math.round(d.transportCost * (1-share.dealerPct) / 10) * 10;
  d.dealerCost = Math.round(d.transportCost * share.dealerPct / 10) * 10;
  d.daysTotal = Math.max(1, randInt(type.days[0], type.days[1]) + method.days - Math.round(coordBonus*2) - (deliveryUpgrade>=3 ? 1 : 0));
  d.daysLeft = Math.max(1,d.daysTotal); d.plannedArrivalDay = state.day + d.daysLeft;
  d.status = 'active'; d.statusIndex = 0;
  d.satisfactionDelta = share.sat + method.quality + Math.round(coordBonus*2) + deliveryUpgrade; d.reviewStarsDelta = share.review + (method.quality>=2 ? 1 : 0) + (coordBonus>0.45 ? 1 : 0) + (deliveryUpgrade>=2 ? 1 : 0);
  if(d.customerCharge>0) addTx('income', 'Lieferkosten '+d.car.brand+' '+d.car.model+' an '+d.customerName, d.customerCharge);
  if(d.transportCost>0) addTx('expense', method.label+' '+d.car.brand+' '+d.car.model, -d.transportCost);
  notify(`Lieferung für ${d.car.brand} ${d.car.model} beauftragt. Ankunft voraussichtlich Tag ${d.plannedArrivalDay}.`, 'info');
  closeModal(); renderAllOpen(); scheduleSave();
}
function processDeliveries(){
  (state.deliveries||[]).forEach(d=>{
    if(d.status!=='active') return;
    d.daysLeft = Math.max(0,(d.daysLeft||0)-1);
    const progress = d.daysTotal ? 1 - d.daysLeft/d.daysTotal : 1;
    d.statusIndex = clamp(Math.floor(progress*4),0,3);
    if(d.daysLeft<=0){
      const method = DELIVERY_METHODS[d.method] || DELIVERY_METHODS.carrier;
      const coordBonus = employeeBonus('Fuhrpark-/Lieferkoordinator');
      d.problem = Math.random() < Math.max(0.01, method.risk - coordBonus*0.08 - upgradeLevel('premium_delivery')*0.035);
      d.onTime = !d.problem || Math.random()<0.45;
      d.completedDay = state.day; d.status = 'completed';
      d.summary = d.problem ? (d.onTime ? 'Lieferung abgeschlossen, aber mit kleinen Übergabeproblemen.' : 'Lieferung verspätet abgeschlossen.') : 'Lieferung pünktlich und professionell abgeschlossen.';
      if(d.problem){ d.satisfactionDelta -= d.onTime ? 3 : 7; d.reviewStarsDelta -= d.onTime ? 1 : 2; }
      finalizeDelivery(d);
    }
  });
}
function finalizeDelivery(d){
  const cust = state.customers && state.customers[d.customerId];
  if(cust) cust.satisfaction = clamp((cust.satisfaction||60)+(d.satisfactionDelta||0),0,100);
  const ctx = d.reviewContext;
  if(ctx && d.reviewPending){
    createReviewFromSale(ctx.offer, ctx.car, ctx.amount, ctx.profit, ctx.financing, ctx.reaction, d);
    d.reviewPending = false;
  }
  state.deliveryHistory = state.deliveryHistory || [];
  if(!state.deliveryHistory.some(x=>x.id===d.id)){
    state.deliveryHistory.unshift({...d, reviewContext:null});
    addXp(d.onTime ? 26 : 16);
    trainEmployees('Fuhrpark-/Lieferkoordinator', d.onTime ? 32 : 20, 'abgeschlossene Fahrzeuglieferung');
  }
  showToast('🚚', `<b>Fahrzeug erfolgreich ausgeliefert</b><br>${escapeHtml(d.car.brand+' '+d.car.model)}<br>Empfänger: ${escapeHtml(d.customerName)}<br>${escapeHtml(d.summary)}`, 'Lieferung', ()=>navigateTo('deliveries'));
}
function renderDeliveries(){
  const all = activeDeliveries();
  const active = all.filter(d=>!['completed','pickup_completed'].includes(d.status));
  const done = all.filter(d=>['completed','pickup_completed'].includes(d.status)).slice(0,20);
  const delivered = all.filter(d=>['completed','pickup_completed'].includes(d.status));
  const avgCost = avg(all.filter(d=>d.baseCost>0), d=>d.baseCost||0);
  const free = all.filter(d=>d.dealerSharePct>=1).length;
  return `
    <h2 class="section-title">Fahrzeuglieferung</h2>
    <p class="subtle">Lieferungen entstehen automatisch nach Verkäufen. Kosten, Kulanz, Dauer und Übergabequalität wirken auf Kundenzufriedenheit und Bewertungen.</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Aktiv / offen</div><div class="num">${active.length}</div></div>
      <div class="stat-card"><div class="lbl">Abgeschlossen</div><div class="num">${delivered.length}</div></div>
      <div class="stat-card"><div class="lbl">Ø Lieferkosten</div><div class="num">${avgCost?money(Math.round(avgCost)):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Kostenlose Lieferungen</div><div class="num">${all.length?Math.round(free/all.length*100):0}%</div></div>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;">Offene Lieferungen</h3>
    ${active.length ? active.map(renderDeliveryCard).join('') : '<div class="empty-state"><div class="ic">🚚</div>Keine offenen Lieferungen.</div>'}
    <h3 style="font-family:var(--font-d);font-size:13px;margin-top:18px;">Abgeschlossen</h3>
    ${done.length ? done.map(renderDeliveryCard).join('') : '<p class="subtle">Noch keine abgeschlossenen Lieferungen.</p>'}
  `;
}
function renderDeliveryCard(d){
  const type = DELIVERY_TYPES[d.desiredType] || DELIVERY_TYPES.standard;
  const method = d.method ? DELIVERY_METHODS[d.method] : null;
  const status = deliveryStatusLabel(d);
  const done = ['completed','pickup_completed'].includes(d.status);
  return `<div class="offer-card">
    <div class="offer-head"><span><b>${d.car.brand} ${d.car.model}</b> — ${d.customerName}</span><span class="persona">${status}</span></div>
    <p class="subtle" style="margin:0 0 8px;">${type.label} · ${d.distanceKm} km · Kundenkosten ${money(d.customerCharge||0)} · Autohausanteil ${money(Math.max(0,d.dealerCost||0))}${d.plannedArrivalDay?` · geplant Tag ${d.plannedArrivalDay}`:''}</p>
    <div class="spec-row">
      <span class="chip">${method?method.label:'Noch nicht beauftragt'}</span>
      <span class="chip">${DELIVERY_SHARES[d.share]?.label || 'Kunde zahlt vollständig'}</span>
      ${d.onTime!=null?`<span class="chip">${d.onTime?'pünktlich':'verspätet'}</span>`:''}
      ${d.problem?'<span class="chip" style="color:var(--red);">Problem</span>':''}
    </div>
    ${!done?`<div class="progress"><div style="width:${d.status==='planning'?8:Math.round((1-(d.daysLeft||0)/Math.max(1,d.daysTotal||1))*100)}%;"></div></div>`:''}
    <div class="row-actions" style="margin-top:10px;">
      ${d.status==='planning'?`<button class="btn btn-primary btn-sm" onclick="openDeliveryPlanning('${d.id}')">Planen</button>`:''}
      ${done?`<button class="btn btn-ghost btn-sm" disabled>Abgeschlossen</button>`:`<button class="btn btn-ghost btn-sm" onclick="navigateTo('deliveries')">Details</button>`}
    </div>
  </div>`;
}

/* =============================== LEASINGVERTRÄGE (MEHRJÄHRIGE SIMULATION) =============================== */
/* =============================== FINANZIERUNGSVERTRÄGE (LANGFRISTIG, AMORTISIEREND) =============================== */
function createFinancingContract(offer, c, financing){
  const income = estimateMonthlyIncome(offer);
  const downPct = (financing.downPayment||0)/Math.max(1, financing.principal + (financing.downPayment||0));
  const riskAdjustment = clamp(
    Math.max(0,(financing.months||0)-48)*0.0012 +
    Math.max(0,(financing.monthlyPayment||0)/Math.max(1,income)-0.16)*0.42 -
    Math.max(0,downPct-0.18)*0.18,
    -0.04,
    0.16
  );
  state.receivables = state.receivables || [];
  state.receivables.push({
    id: uid('rcv'), customerId: offer.customerId, customerName: offer.name,
    carDesc: c.brand+' '+c.model,
    carSnapshot: { brand:c.brand, model:c.model, year:c.year, engine:c.engine, transmission:c.transmission, color:c.color, power:c.power },
    type: 'finanzierung',
    purchasePrice: financing.principal+financing.downPayment, downPayment: financing.downPayment,
    principal: financing.principal, remainingPrincipal: financing.principal,
    months: financing.months, monthsRemaining: financing.months, monthsElapsed: 0,
    nominalRate: financing.nominalRate, effectiveRate: financing.effectiveRate,
    monthlyPayment: financing.monthlyPayment, totalPaid: 0, paymentHistory: [],
    startDay: state.day, nextDueDay: state.day+30, dunningLevel: 0, status: 'aktuell',
    creditScore: offer.creditScore||60, closed: false, openClaim:null, leniency:0, completionPopupShown:false,
    financingRiskAdjustment: riskAdjustment, estimatedIncome: income, totalInterest: financing.totalInterest||0,
  });
}
function processFinancingMonth(contract){
  if(contract.openClaim){
    addMissedRateToClaim(contract, contract.monthlyPayment);
    return { kind:'finanzierung', success:false, contract };
  }
  if(Math.random() >= paymentDelayChance(contract)){
    return collectFinancingPayment(contract);
  }
  createOpenClaim(contract, 'fin', contract.monthlyPayment);
  return { kind:'finanzierung', success:false, contract };
}
function collectFinancingPayment(contract){
  const monthlyRate = contract.nominalRate/12;
  const interestPortion = Math.round(contract.remainingPrincipal*monthlyRate);
  let principalPortion = contract.monthlyPayment - interestPortion;
  if(principalPortion > contract.remainingPrincipal) principalPortion = contract.remainingPrincipal;
  if(principalPortion < 0) principalPortion = 0;
  contract.remainingPrincipal = Math.max(0, Math.round(contract.remainingPrincipal-principalPortion));
  contract.monthsElapsed = (contract.monthsElapsed||0)+1;
  contract.monthsRemaining = Math.max(0, contract.monthsRemaining-1);
  contract.dunningLevel = 0;
  contract.status = 'aktuell';
  recordContractPayment(contract, contract.monthlyPayment, 0, 'Monatsrate');
  if(contract.monthsRemaining<=0 || contract.remainingPrincipal<=0){
    contract.status = 'Abgeschlossen';
    contract.closed = true;
    addXp(45);
    notify(`Finanzierung von ${contract.customerName} für ${contract.carDesc} ist vollständig abbezahlt.`,'good');
    completeFinancingContract(contract);
  }
  return { kind:'finanzierung', success:true, contract };
}
function handleMissedFinancingPayment(contract){
  const lvl = contract.dunningLevel;
  if(lvl===1){
    contract.status = 'verspätet';
    notify(`${contract.customerName} hat die Rate für ${contract.carDesc} verspätet gezahlt.`,'warn');
  } else if(lvl===2){
    contract.status = 'mahnung';
    notify(`1. Mahnung an ${contract.customerName} versendet (${contract.carDesc}).`,'warn');
    state.reputation = clamp(state.reputation-1,0,100);
  } else if(lvl===3){
    contract.status = 'ratenpause';
    contract.monthsRemaining += 1;
    notify(`${contract.customerName} erhält eine Ratenpause für ${contract.carDesc} – Laufzeit verlängert sich um einen Monat.`,'warn');
  } else {
    resolveFinancingDefault(contract);
  }
  return { kind:'finanzierung', success:false, contract };
}
function sendDunning(kind, id){
  const contract = findContractByKind(kind, id);
  if(!contract || !contract.openClaim) return;
  const claim = contract.openClaim;
  if((claim.dunningLevel||0)>0 && state.day < (claim.nextActionDay||0)){
    notify(`${claimStatusLabel(claim)} wurde bereits versendet. Nächste Mahnstufe erst ab Tag ${claim.nextActionDay}.`,'warn');
    renderAllOpen();
    return;
  }
  if(!claim.actionRequired && claim.nextActionDay>state.day) return;
  if((claim.dunningLevel||0)>=7){
    resolveLegalClaimOutcome(kind, contract);
    renderAllOpen(); scheduleSave();
    return;
  }
  claim.dunningLevel = Math.min((claim.dunningLevel||0)+1, DUNNING_STEPS.length-1);
  const addedFee = addClaimFeeForLevel(claim, claim.dunningLevel);
  const feeTotal = claimFeeTotal(claim);
  claim.actionRequired = false;
  claim.nextActionDay = state.day + dunningStep(claim.dunningLevel).nextDays;
  claim.status = claimStatusLabel(claim);
  claim.history.unshift({day:state.day, type:'dunning', text:`${claimStatusLabel(claim)} versendet. Neue Gebühr ${money(addedFee)}, Gebühren gesamt ${money(feeTotal)}.`});
  contract.dunningLevel = claim.dunningLevel;
  contract.status = claim.status;
  const cust = state.customers && state.customers[contract.customerId];
  const greedyImpact = state.greedyDunningMode ? Math.ceil(greedyDunningPressure(claim)*3) + 2 : 0;
  if(cust) cust.satisfaction = clamp(cust.satisfaction - (claim.dunningLevel>=4?4:2) - greedyImpact, 0, 100);
  state.reputation = clamp(state.reputation - (claim.dunningLevel>=5?1:0) - (state.greedyDunningMode && feeTotal>0 ? 1 : 0), 0, 100);
  state.dunningsSent = (state.dunningsSent||0)+1;
  showAchievementUnlocks(checkAchievements());
  notify(`${claimStatusLabel(claim)} an ${contract.customerName} versendet. Nächster Schritt ab Tag ${claim.nextActionDay}.${state.greedyDunningMode?' Geizig-Modus belastet Zufriedenheit und Ruf.':''}`,'warn');
  renderAllOpen(); scheduleSave();
}
function grantPaymentDeferral(kind, id){
  const contract = findContractByKind(kind, id);
  if(!contract || !contract.openClaim) return;
  const claim = contract.openClaim;
  claim.actionRequired = false;
  claim.nextActionDay = state.day + 7;
  claim.history.unshift({day:state.day, type:'deferral', text:'Zahlungsaufschub bis Tag '+claim.nextActionDay+' gewährt.'});
  contract.leniency = (contract.leniency||0)+1;
  contract.status = 'Stundung';
  const cust = state.customers && state.customers[contract.customerId];
  if(cust) cust.satisfaction = clamp(cust.satisfaction + 4, 0, 100);
  notify(`${contract.customerName} erhält Zahlungsaufschub bis Tag ${claim.nextActionDay}.`,'info');
  renderAllOpen(); scheduleSave();
}
function resolveLegalClaimOutcome(kind, contract){
  if(!contract || !contract.openClaim) return;
  const claim = contract.openClaim;
  normalizeClaimFees(claim);
  claim.dunningLevel = Math.max(claim.dunningLevel||0, 7);
  contract.dunningLevel = claim.dunningLevel;
  addClaimFeeForLevel(claim, 7);
  if(claim.legalResolved){
    notify(`Das Gerichtsverfahren für ${contract.customerName} wurde bereits entschieden.`,'info');
    return;
  }
  claim.legalResolved = true;
  claim.actionRequired = false;
  claim.status = 'Gericht entschieden';
  const total = claimTotal(claim);
  const roll = Math.random();
  if(roll < 0.45){
    claim.history.unshift({day:state.day, type:'legal-result', text:`Gerichtsurteil: Kunde trägt alle Kosten und zahlt vollständig ${money(total)}.`});
    closeOpenClaim(contract, true);
    notify(`${contract.customerName} zahlt nach Gerichtsentscheid die vollständige Forderung von ${money(total)}.`,'good');
  } else if(roll < 0.65){
    claim.nextActionDay = state.day + 14;
    claim.status = 'Ratenvereinbarung nach Gericht';
    claim.history.unshift({day:state.day, type:'legal-result', text:`Gerichtsergebnis: verbindliche Ratenvereinbarung über ${money(total)}. Nächste Prüfung Tag ${claim.nextActionDay}.`});
    contract.status = 'Ratenvereinbarung nach Gericht';
    contract.leniency = (contract.leniency||0)+1;
    notify(`${contract.customerName} erhält nach Gericht eine verbindliche Ratenvereinbarung über ${money(total)}.`,'info');
  } else if(roll < 0.84){
    claim.history.unshift({day:state.day, type:'legal-result', text:'Gerichtsergebnis: Forderung wird über Rücknahme/Vergleich abgeschlossen.'});
    contract.openClaim = null;
    contract.dunningLevel = 0;
    if(kind==='lea'){
      closeLeaseWithReturn(contract, true);
      contract.status = 'Abgeschlossen';
      contract.closed = true;
      contract.completedDay = state.day;
      notify(`Leasingfall von ${contract.customerName} wurde nach Gerichtsentscheid durch Fahrzeugrücknahme abgeschlossen.`,'warn');
    } else {
      resolveFinancingDefault(contract);
    }
  } else {
    claim.history.unshift({day:state.day, type:'legal-result', text:`Gerichtsergebnis: Forderungsausfall über ${money(total)}. Fall abgeschlossen.`});
    addTx('expense', 'Forderungsausfall '+contract.customerName+' ('+contractDesc(contract)+')', -total);
    contract.openClaim = null;
    contract.dunningLevel = 0;
    contract.status = 'Forderungsausfall';
    contract.closed = true;
    contract.completedDay = state.day;
    state.reputation = clamp(state.reputation-3,0,100);
    notify(`${contract.customerName}: Forderung von ${money(total)} fällt nach Gerichtsentscheid aus. Fall abgeschlossen.`,'warn');
  }
}
function showOpenSaleConditionModal(offerId, conditionId){
  const {o,c,condition} = conditionById(offerId, conditionId);
  if(!o || !c || !condition) return;
  const issue = (c.issues||[]).find(i=>i.id===condition.issueId);
  const job = issue ? issueRepairJob(issue) : {baseCost:condition.repairCost||350, baseDays:condition.repairDays||1, label:condition.label, id:'mech', cond:6};
  const tier = carTierOf(c.brand, c.model);
  const roleBonus = employeeBonus(job.baseId==='clean' || job.baseId==='paint' ? 'Fahrzeugaufbereiter' : 'Mechaniker');
  const cost = Math.round(job.baseCost*(0.55+0.45*tier)*(1-roleBonus*0.25));
  const days = Math.max(1, Math.round(job.baseDays*(1-roleBonus*0.3)));
  const suggestedDiscount = Math.round(Math.max(cost*.75, o.amount*(condition.severity||1)*0.012)/10)*10;
  const allOpen = openSaleConditions(o, c).filter(cond=>cond.status!=='repairing');
  showModal(`
    <h2 class="section-title">Offener Kundenwunsch</h2>
    <p class="subtle">${o.name} möchte vor dem Kauf, dass <b>${escapeHtml(saleConditionText(condition))}</b>.</p>
    <div class="notice warn" style="display:block;">Normaler Verkaufsabschluss ist blockiert, bis Sie diesen Wunsch erfüllen, ablehnen oder der Kunde einen Ausgleich akzeptiert.</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Werkstattkosten</div><div class="num">${money(cost)}</div></div>
      <div class="stat-card"><div class="lbl">Dauer</div><div class="num">${days} Tag(e)</div></div>
      <div class="stat-card"><div class="lbl">Schwere</div><div class="num">${condition.severity}/4</div></div>
      <div class="stat-card"><div class="lbl">Vorschlag Rabatt</div><div class="num">${money(suggestedDiscount)}</div></div>
    </div>
    <div class="row-actions">
      <button class="btn btn-primary" onclick="fulfillSaleCondition('${offerId}','${conditionId}')">Kundenwunsch erfüllen</button>
      ${allOpen.length>1?`<button class="btn btn-primary" onclick="startAllCustomerWishRepairs('${c.id}','${offerId}')">Alle Kundenwünsche erfüllen</button>`:''}
      <button class="btn btn-ghost" onclick="showSaleConditionDiscount('${offerId}','${conditionId}',${suggestedDiscount})">Preisnachlass anbieten</button>
      <button class="btn btn-ghost" onclick="offerRepairCostShare('${offerId}','${conditionId}')">50% Reparaturkosten übernehmen</button>
      <button class="btn btn-danger" onclick="rejectSaleCondition('${offerId}','${conditionId}')">Kundenwunsch ablehnen</button>
    </div>
  `);
}
function showSaleConditionDiscount(offerId, conditionId, suggested){
  const {o,condition} = conditionById(offerId, conditionId);
  if(!o || !condition) return;
  showModal(`
    <h2 class="section-title">Preisnachlass anbieten</h2>
    <p class="subtle">Rabatt als Ausgleich für: ${escapeHtml(saleConditionText(condition))}</p>
    <div class="field"><label>Rabatt: <span id="condDiscountLbl" style="color:var(--brass);font-family:var(--font-m);">${money(suggested)}</span></label>
      <input id="condDiscount" type="range" min="0" max="${Math.round(o.amount*.22/10)*10}" step="10" value="${suggested}" oninput="document.getElementById('condDiscountLbl').textContent=money(Number(this.value)||0)">
    </div>
    <div class="row-actions"><button class="btn btn-ghost" onclick="showOpenSaleConditionModal('${offerId}','${conditionId}')">Zurück</button><button class="btn btn-primary" onclick="submitSaleConditionDiscount('${offerId}','${conditionId}')">Rabatt anbieten</button></div>
  `);
}
function saleConditionDiscountChance(o, condition, discount){
  const profile = customerConcernProfile(o);
  const repairCost = Math.max(1, condition.repairCost||300);
  const ratio = discount/repairCost;
  let chance = 0.18 + ratio*0.42 + clamp(discount/Math.max(1,o.amount)*1.8,0,.22) + ((o.customerProfile?.trust||50)-50)/260;
  chance -= (condition.severity||1)*0.08;
  if(profile.tolerance>=6) chance += 0.18;
  if(profile.tags.includes('safety') && ['Bremsen','Reifen','Service'].includes(condition.category)) chance -= 0.22;
  if(profile.tags.includes('luxury') || profile.tags.includes('collector')) chance -= 0.18;
  return clamp(chance, .04, .9);
}
function fulfillSaleCondition(offerId, conditionId){
  const {o,c,condition} = conditionById(offerId, conditionId);
  if(!o || !c || !condition) return;
  const issue = (c.issues||[]).find(i=>i.id===condition.issueId);
  if(!issue) return;
  condition.status = 'repairing';
  syncCarSaleCondition(c, condition, 'repairing');
  addMsg(o, 'player', `Wir erfüllen Ihren Wunsch und geben "${issue.label}" in die Werkstatt. Der Verkauf pausiert bis zur Fertigstellung.`);
  addMsg(o, 'customer', `Danke, dann warte ich auf die Rückmeldung nach der Reparatur.`);
  closeModal();
  startRepair(c.id, 'issue:'+issue.id);
  const job = state.workshopJobs[state.workshopJobs.length-1];
  if(job){ job.saleConditionId = condition.id; job.offerId = o.id; job.customerName = o.name; }
  renderAllOpen(); scheduleSave();
}
function rejectSaleCondition(offerId, conditionId){
  const {o,c,condition} = conditionById(offerId, conditionId);
  if(!o || !c || !condition) return;
  const profile = customerConcernProfile(o);
  condition.status = 'rejected';
  syncCarSaleCondition(c, condition, 'rejected');
  addMsg(o, 'player', `Wir können "${saleConditionText(condition)}" vor dem Verkauf leider nicht übernehmen.`);
  if(Math.random()<clamp(.32 + profile.demand*.45 + (condition.severity||1)*.08, .18, .86)){
    addMsg(o, 'customer', `Dann möchte ich den Kauf lieber nicht abschließen. Das Risiko ist mir zu hoch.`);
    closeConversationForCustomer(o, -8);
    state.offers = state.offers.filter(x=>x.id!==o.id);
    notify(`${o.name} springt wegen abgelehntem Kundenwunsch ab.`,'warn');
    closeModal();
  } else {
    addMsg(o, 'customer', `Gut, ich bin nicht begeistert, aber wir können weiterreden, wenn der Preis dafür passt.`);
    notify(`${o.name} akzeptiert die Ablehnung nur widerwillig. Vertrauen sinkt.`,'warn');
    closeModal(); openCounterModal(offerId);
  }
  renderAllOpen(); scheduleSave();
}
function submitSaleConditionDiscount(offerId, conditionId){
  const discount = Number(document.getElementById('condDiscount')?.value||0);
  const {o,c,condition} = conditionById(offerId, conditionId);
  if(!o || !c || !condition) return;
  const chance = saleConditionDiscountChance(o, condition, discount);
  addMsg(o, 'player', `Als Ausgleich für "${saleConditionText(condition)}" biete ich ${money(discount)} Preisnachlass an.`);
  if(Math.random()<chance){
    o.amount = Math.max(500, Math.round((o.amount-discount)/10)*10);
    condition.status = 'discountAccepted';
    condition.discount = discount;
    syncCarSaleCondition(c, condition, 'discountAccepted', {discount});
    addMsg(o, 'customer', `Mit ${money(discount)} Nachlass akzeptiere ich den Mangel. Dann können wir den Abschluss fortsetzen.`);
    notify(`${o.name} akzeptiert den Preisnachlass. Verkauf wieder freigegeben.`,'good');
    closeModal(); openSaleMethodModal(offerId);
  } else {
    addMsg(o, 'customer', `Der Nachlass reicht mir für diesen Mangel nicht. Bitte beheben oder deutlich fairer im Preis werden.`);
    notify(`${o.name} lehnt den Preisnachlass ab.`,'warn');
    closeModal(); showOpenSaleConditionModal(offerId, conditionId);
  }
  renderAllOpen(); scheduleSave();
}
function offerRepairCostShare(offerId, conditionId){
  const {o,c,condition} = conditionById(offerId, conditionId);
  if(!o || !c || !condition) return;
  const share = Math.round((condition.repairCost||400)*0.5/10)*10;
  addMsg(o, 'player', `Wir würden ${money(share)} der Reparaturkosten für "${saleConditionText(condition)}" übernehmen.`);
  const chance = saleConditionDiscountChance(o, condition, share) - ((condition.severity||1)>=3 ? .12 : 0);
  if(Math.random()<chance){
    o.amount = Math.max(500, Math.round((o.amount-share)/10)*10);
    condition.status = 'discountAccepted';
    condition.discount = share;
    syncCarSaleCondition(c, condition, 'discountAccepted', {discount:share});
    addMsg(o, 'customer', `Einverstanden, mit Ihrer Beteiligung kann ich das akzeptieren.`);
    closeModal(); openSaleMethodModal(offerId);
  } else {
    addMsg(o, 'customer', `Das reicht mir nicht. Ich möchte den Mangel vor dem Kauf erledigt haben.`);
    closeModal(); showOpenSaleConditionModal(offerId, conditionId);
  }
  renderAllOpen(); scheduleSave();
}
function forceContractEscalation(kind, id){
  const contract = findContractByKind(kind, id);
  if(!contract || !contract.openClaim) return;
  if((contract.openClaim.dunningLevel||0)>0 && state.day < (contract.openClaim.nextActionDay||0)){
    notify(`Konsequente Eskalation erst ab Tag ${contract.openClaim.nextActionDay} möglich.`,'warn');
    renderAllOpen();
    return;
  }
  contract.openClaim.actionRequired = true;
  contract.openClaim.nextActionDay = state.day;
  if(contract.openClaim.dunningLevel>=7){
    resolveLegalClaimOutcome(kind, contract);
  } else {
    sendDunning(kind, id);
  }
  renderAllOpen(); scheduleSave();
}
function processOpenClaims(){
  activeClaims().forEach(({kind, contract, claim})=>{
    if(claim.legalResolved && claim.status==='Ratenvereinbarung nach Gericht' && (claim.nextActionDay||0)<=state.day){
      if(Math.random()<0.72){
        claim.history.unshift({day:state.day, type:'payment-plan', text:`Ratenvereinbarung erfüllt. Gesamtforderung ${money(claimTotal(claim))} eingezogen.`});
        closeOpenClaim(contract, true);
      } else {
        const total = claimTotal(claim);
        claim.history.unshift({day:state.day, type:'payment-plan', text:`Ratenvereinbarung gebrochen. Forderungsausfall über ${money(total)}. Fall abgeschlossen.`});
        addTx('expense', 'Forderungsausfall '+contract.customerName+' ('+contractDesc(contract)+')', -total);
        contract.openClaim = null;
        contract.dunningLevel = 0;
        contract.status = 'Forderungsausfall';
        contract.closed = true;
        contract.completedDay = state.day;
        state.reputation = clamp(state.reputation-3,0,100);
        notify(`${contract.customerName} bricht die gerichtliche Ratenvereinbarung. Forderung von ${money(total)} fällt aus.`,'warn');
      }
      return;
    }
    if((claim.dunningLevel||0)>=7 && !claim.legalResolved && (claim.nextActionDay||0)<=state.day){
      resolveLegalClaimOutcome(kind, contract);
      return;
    }
    if(!claim.actionRequired && claim.nextActionDay<=state.day){
      claim.actionRequired = true;
      notify(`Jetzt ${dunningStep((claim.dunningLevel||0)+1).label} an ${contract.customerName} senden (${contractDesc(contract)}).`,'warn');
      showToast('⚠', `<b>Mahnung fällig</b><br>${contract.customerName}<br>${contractDesc(contract)}<br>${claimActionLabel(claim)}`, 'Vertrag öffnen', ()=>{selectedContractId=kind+':'+contract.id; navigateTo('contracts');});
    }
    if((claim.dunningLevel||0)>0 && !claim.actionRequired){
      const greedyPressure = state.greedyDunningMode ? 0.04 + greedyDunningPressure(claim)*0.08 : 0;
      const baseChance = 0.18 + (claim.dunningLevel||0)*0.11 + clamp((contract.creditScore||60)-55, -25, 25)/250 - (contract.leniency||0)*0.03 + greedyPressure;
      if(Math.random()<clamp(baseChance,0.08,0.82)){
        closeOpenClaim(contract, true);
      } else if(Math.random()<0.08 && (claim.dunningLevel||0)<4){
        claim.actionRequired = true;
        claim.history.unshift({day:state.day, type:'request', text:'Kunde bittet um Zahlungsaufschub oder niedrigere Rate.'});
        notify(`${contract.customerName} bittet wegen ${contractDesc(contract)} um Zahlungsaufschub. Entscheidung im Vertrag nötig.`,'info');
      }
    }
  });
}
function resolveFinancingDefault(contract){
  const roll = Math.random();
  contract.closed = true;
  if(roll<0.3){
    const settlement = Math.round(contract.remainingPrincipal*0.4);
    addTx('income', 'Vergleichszahlung '+contract.customerName+' ('+contract.carDesc+')', settlement);
    notify(`${contract.customerName} ist insolvent, zahlt aber ${money(settlement)} als Vergleich für ${contract.carDesc}. Restschuld wird abgeschrieben.`,'warn');
    contract.status = 'Vergleich abgeschlossen';
  } else if(roll<0.6){
    notify(`${contract.customerName} ist zahlungsunfähig – ${contract.carDesc} wird zurückgeholt (Fahrzeugrücknahme).`,'warn');
    repossessFinancedCar(contract);
    contract.status = 'Fahrzeug zurückgenommen';
  } else {
    addTx('expense', 'Forderungsausfall '+contract.customerName+' ('+contract.carDesc+')', -contract.remainingPrincipal);
    notify(`${contract.customerName} ist insolvent – Inkasso und Gerichtsverfahren eingeleitet, ${money(contract.remainingPrincipal)} Restschuld ausgefallen.`,'warn');
    state.reputation = clamp(state.reputation-3,0,100);
    contract.status = 'ausgefallen';
  }
}
function repossessFinancedCar(contract){
  const snap = contract.carSnapshot;
  const condition = randInt(40,65);
  const mileage = Math.round(((contract.monthsElapsed||0)/12)*14500);
  let marketValue = Math.max(500, Math.round(contract.remainingPrincipal*0.6));
  const car = {
    id: uid('car'), brand:snap.brand, model:snap.model, year:snap.year,
    mileage, engine:snap.engine, power:snap.power, transmission:snap.transmission, color:snap.color,
    condition, hiddenIssues:['Rückläufer aus Kreditausfall'], tuvMonths: randInt(-2,12),
    inspected:false, price: Math.round(marketValue*1.05/10)*10, marketValue,
    purchasePrice: 0, standDays:0, dayAdded: state.day, location:'stock', repairStatus:null, reservedFor:null,
  };
  ensureVehiclePhoto(car);
  state.inventory.push(car);
  checkSearchOrderMatches();
}

function createLeaseContract(offer, c, financing){
  state.leaseContracts = state.leaseContracts || [];
  state.leaseContracts.push({
    id: uid('lease'), customerId: offer.customerId, customerName: offer.name,
    carSnapshot: { brand:c.brand, model:c.model, year:c.year, engine:c.engine, transmission:c.transmission, color:c.color, power:c.power },
    months: financing.months, monthsElapsed: 0, monthlyPayment: financing.leaseRate,
    mileageLimitPerYear: financing.mileage, residual: financing.residual,
    nextDueDay: state.day+30, status: 'active', mileageOverageKm: 0, damageEvents: 0,
    createdDay: state.day, creditScore: offer.creditScore||60, type:'leasing',
    totalPaid:0, paymentHistory:[], openClaim:null, dunningLevel:0, leniency:0, closed:false, completionPopupShown:false,
  });
}
function rollLeaseEvent(lease){
  if(lease.status!=='active') return;
  if(Math.random()>=0.18) return;
  const roll = Math.random();
  if(roll<0.4){
    const overage = randInt(500,3000);
    lease.mileageOverageKm += overage;
    notify(`${lease.customerName} ist mit dem geleasten ${lease.carSnapshot.brand} ${lease.carSnapshot.model} ${overage.toLocaleString('de-DE')} km mehr gefahren als vorgesehen.`,'info');
  } else if(roll<0.7){
    lease.damageEvents += 1;
    notify(`Am geleasten ${lease.carSnapshot.brand} ${lease.carSnapshot.model} von ${lease.customerName} wurde ein kleiner Schaden gemeldet.`,'warn');
  } else if(lease.months-lease.monthsElapsed >= 3 && !document.getElementById('modalOverlay')){
    showEarlyReturnModal(lease);
  }
}
function showEarlyReturnModal(lease){
  showModal(`
    <h2 class="section-title">📄 Vorzeitige Rückgabe angefragt</h2>
    <p class="subtle">${lease.customerName} möchte den Leasingvertrag für ${lease.carSnapshot.brand} ${lease.carSnapshot.model} vorzeitig beenden (noch ${lease.months-lease.monthsElapsed} Monate Restlaufzeit).</p>
    <div class="row-actions">
      <button class="btn btn-ghost" onclick="closeModal(); declineEarlyReturn('${lease.id}')">Ablehnen – Vertrag läuft weiter</button>
      <button class="btn btn-primary" onclick="closeModal(); acceptEarlyReturn('${lease.id}')">Annehmen – Fahrzeug zurücknehmen</button>
    </div>
  `);
}
function declineEarlyReturn(leaseId){
  notify('Vorzeitige Rückgabe abgelehnt, Vertrag läuft weiter.','info');
  renderAllOpen(); scheduleSave();
}
function acceptEarlyReturn(leaseId){
  const lease = (state.leaseContracts||[]).find(l=>l.id===leaseId); if(!lease) return;
  closeLeaseWithReturn(lease, true);
  notify(`${lease.customerName} hat das Fahrzeug vorzeitig zurückgegeben.`,'info');
  renderAllOpen(); scheduleSave();
}
function triggerLeaseEnd(lease){
  lease.status = 'ended_pending';
  showModal(`
    <h2 class="section-title">📄 Leasingvertrag läuft aus</h2>
    <p class="subtle">${lease.customerName}s Leasingvertrag für ${lease.carSnapshot.brand} ${lease.carSnapshot.model} endet. Restwert: ${money(lease.residual)}.</p>
    ${lease.mileageOverageKm>0?`<div class="notice warn">⚠ ${lease.mileageOverageKm.toLocaleString('de-DE')} km Mehrkilometer erfasst.</div>`:''}
    ${lease.damageEvents>0?`<div class="notice warn">⚠ ${lease.damageEvents} Schadensmeldung(en) während der Laufzeit.</div>`:''}
    <div class="row-actions" style="flex-direction:column;gap:8px;">
      <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal(); leaseTakeover('${lease.id}')">🚗 Kunde übernimmt Fahrzeug für ${money(lease.residual)}</button>
      <button class="btn btn-ghost" style="width:100%;justify-content:center;" onclick="closeModal(); leaseReturn('${lease.id}')">↩ Fahrzeug wird zurückgegeben</button>
      <button class="btn btn-ghost" style="width:100%;justify-content:center;" onclick="closeModal(); leaseExtend('${lease.id}')">📄 Verlängerung um 12 Monate anbieten</button>
    </div>
  `);
}
function leaseTakeover(leaseId){
  const lease = (state.leaseContracts||[]).find(l=>l.id===leaseId); if(!lease) return;
  addTx('income', 'Fahrzeugübernahme '+lease.customerName+' ('+lease.carSnapshot.brand+' '+lease.carSnapshot.model+')', lease.residual);
  addXp(42);
  notify(`${lease.customerName} hat den ${lease.carSnapshot.brand} ${lease.carSnapshot.model} für ${money(lease.residual)} übernommen.`,'good');
  completeLeaseContract(lease);
  renderAllOpen(); scheduleSave();
}
function leaseReturn(leaseId){
  const lease = (state.leaseContracts||[]).find(l=>l.id===leaseId); if(!lease) return;
  closeLeaseWithReturn(lease, false);
  renderAllOpen(); scheduleSave();
}
function leaseExtend(leaseId){
  const lease = (state.leaseContracts||[]).find(l=>l.id===leaseId); if(!lease) return;
  if(Math.random()<0.6){
    lease.months += 12;
    lease.status = 'active';
    notify(`${lease.customerName} verlängert den Leasingvertrag für ${lease.carSnapshot.brand} ${lease.carSnapshot.model} um 12 Monate.`,'good');
  } else {
    notify(`${lease.customerName} lehnt eine Verlängerung ab und gibt das Fahrzeug zurück.`,'info');
    closeLeaseWithReturn(lease, false);
  }
  renderAllOpen(); scheduleSave();
}
function closeLeaseWithReturn(lease, early){
  addXp(38);
  const snap = lease.carSnapshot;
  const conditionPenalty = lease.damageEvents*randInt(5,9);
  const condition = clamp(85-conditionPenalty-Math.round(lease.mileageOverageKm/5000), 25, 95);
  const mileage = Math.round((lease.monthsElapsed/12)*14500) + lease.mileageOverageKm;
  let marketValue = Math.round(lease.residual * (1-lease.damageEvents*0.06) * (condition/85));
  marketValue = Math.max(600, marketValue);
  const returnedCar = {
    id: uid('car'), brand: snap.brand, model: snap.model, year: snap.year,
    mileage, engine: snap.engine, power: snap.power, transmission: snap.transmission,
    color: snap.color, condition, hiddenIssues: lease.damageEvents>0 ? ['Gebrauchsspuren aus Leasingrückläufer'] : [],
    tuvMonths: randInt(-1,18), inspected:false, price: Math.round(marketValue*1.05/10)*10, marketValue,
    purchasePrice: lease.residual, standDays:0, dayAdded: state.day, location:'stock', repairStatus:null, reservedFor:null,
  };
  ensureVehiclePhoto(returnedCar);
  state.inventory.push(returnedCar);
  notify(`${early?'Vorzeitig zurückgegebenes':'Zurückgegebenes'} Leasingfahrzeug ${snap.brand} ${snap.model} ist wieder in Ihrem Bestand (Zustand ${condition}/100).`, 'info');
  checkSearchOrderMatches();
  if(!early) completeLeaseContract(lease);
  else {
    lease.status = 'Abgeschlossen';
    lease.closed = true;
    lease.completedDay = state.day;
  }
}

/* =============================== VERKAUFS-FEIER =============================== */
function renderFinancingBlock(f){
  if(!f) return `<div class="notice good" style="margin-top:4px;"><span>💵</span><span>Barzahlung – sofort vollständig beglichen.</span></div>`;
  if(f.type==='finanzierung'){
    return `<div class="notice" style="margin-top:4px;"><div>🏦 <b>Finanzierung genehmigt</b><br>
      Anzahlung: ${money(f.downPayment)} · Laufzeit: ${f.months} Monate<br>
      Sollzins: ${(f.nominalRate*100).toFixed(1)}% · eff. Jahreszins: ${(f.effectiveRate*100).toFixed(1)}%<br>
      Monatliche Rate: ${money(f.monthlyPayment)} · Gesamtkosten: ${money(f.totalCost)}</div></div>`;
  }
  return `<div class="notice" style="margin-top:4px;"><div>📄 <b>Leasingvertrag</b><br>
    Laufzeit: ${f.months} Monate · Kilometerlimit: ${f.mileage.toLocaleString('de-DE')} km/Jahr<br>
    Sonderzahlung: ${money(f.specialPayment)} · Restwert: ${money(f.residual)}<br>
    Leasingrate: ${money(f.leaseRate)}/Monat</div></div>`;
}
function showSaleCelebration(d){
  const profitColor = d.profit>=0 ? 'var(--teal)' : 'var(--red)';
  showModal(`
    <div style="text-align:center;position:relative;">
      <div id="confettiWrap" style="position:absolute;inset:-22px -22px auto -22px;height:150px;overflow:hidden;pointer-events:none;"></div>
      <div style="font-size:42px;margin-bottom:4px;">🎉</div>
      <h2 class="section-title" style="font-size:20px;">Verkauft!</h2>
      <p class="subtle">${d.c.brand} ${d.c.model} an ${d.customerName} (${d.persona})</p>
    </div>
    <div class="stat-grid" style="margin-top:6px;">
      <div class="stat-card"><div class="lbl">Verkaufspreis</div><div class="num" id="celPrice">0 €</div></div>
      <div class="stat-card"><div class="lbl">Marge</div><div class="num" style="color:${profitColor};font-size:16px;">${d.profit>=0?'+':''}${money(d.profit)}<br><span style="font-size:12px;">(${d.marginPct>=0?'+':''}${d.marginPct.toFixed(1)}%)</span></div></div>
      <div class="stat-card"><div class="lbl">Standtage</div><div class="num">${d.standDays}</div></div>
      <div class="stat-card"><div class="lbl">Ruf</div><div class="num" style="font-size:16px;">${d.repBefore} → ${d.repAfter}<br><span style="font-size:12px;color:${d.repChange>=0?'var(--teal)':'var(--red)'};">(${d.repChange>=0?'+':''}${d.repChange})</span></div></div>
    </div>
    ${renderFinancingBlock(d.financing)}
    <div class="notice good">${d.reaction.emoji} ${d.reaction.text}</div>
    <div class="notice" style="border-color:rgba(212,175,106,.35);">✨ +${d.xpGain} XP${d.leveledUp?` · 🎊 Level ${state.level} erreicht!`:''}</div>
    ${d.newAchievements.map(a=>`<div class="notice" style="border-color:rgba(212,175,106,.4);"><span style="font-size:18px;">${a.icon}</span><span><b>${a.label}</b> freigeschaltet – ${a.desc}</span></div>`).join('')}
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px;" onclick="closeModal();openDeliveryPlanning('${d.deliveryId}')">Lieferung planen</button>
  `);
  animateCelebrationNumber('celPrice', d.amount);
  spawnConfetti();
  showAchievementUnlocks(d.newAchievements);
}
function animateCelebrationNumber(elId, target){
  const el = document.getElementById(elId); if(!el) return;
  const start = performance.now(); const dur = 700;
  function step(t){
    const p = Math.min(1,(t-start)/dur);
    const eased = 1-Math.pow(1-p,3);
    el.textContent = money(Math.round(target*eased));
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
function spawnConfetti(){
  const wrap = document.getElementById('confettiWrap'); if(!wrap) return;
  const colors = ['#d4af6a','#2fb87c','#8b7ff0','#e0555c','#ffffff'];
  for(let i=0;i<26;i++){
    const p = document.createElement('div');
    const size = randInt(5,9);
    p.style.cssText = `position:absolute;top:-10px;left:${randInt(0,100)}%;width:${size}px;height:${size}px;background:${choice(colors)};opacity:.9;border-radius:${Math.random()<0.5?'50%':'2px'};animation:confettiFall ${randFloat(1.1,1.9).toFixed(2)}s ease-in forwards;animation-delay:${randFloat(0,0.3).toFixed(2)}s;`;
    wrap.appendChild(p);
  }
}

/* =============================== POSTFACH: AKTIONEN =============================== */
function proposePaymentMethod(offerId, method){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  ensureSaleMethodPreference(o);
  if(!isSaleMethodAllowed(o, method)){
    requestSaleMethodSwitch(offerId, method);
    return;
  }
  if(method==='finanzierung'){
    showFinancingOfferModal(offerId);
    return;
  }
  const c = findCar(o.carId);
  const profile = ensureOfferAi(o, c);
  const label = method==='finanzierung' ? 'eine Finanzierung' : 'ein Leasingangebot';
  addMsg(o, 'player', `Ich könnte Ihnen ${label} für ${money(o.amount)} anbieten.`);
  const chance = clamp(((o.creditScore||60)/100) + 0.15, 0.15, 0.95);
  if(Math.random() < chance){
    o.paymentMethod = method;
    const calc = method==='finanzierung' ? calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:o.amount}) : calcLeasing(o.amount, o.creditScore||60);
    const rateText = method==='finanzierung'
      ? `${money(calc.monthlyPayment)}/Monat bei ${money(calc.downPayment)} Anzahlung`
      : `${money(calc.leaseRate)}/Monat`;
    const line = profile.aiType==='Vorsichtiger Kunde' || profile.riskAwareness>72
      ? `Das klingt grundsätzlich gut. Ich würde die Konditionen bei ${rateText} aber gerne sauber prüfen, bevor ich zusage.`
      : (profile.aiType==='Premiumkunde'
        ? `Wenn die Konditionen transparent sind, passt ${rateText} für mich. Bitte bereiten Sie das professionell vor.`
        : `Das klingt gut – bei ${rateText} bin ich dabei!`);
    addMsg(o, 'customer', line);
  } else {
    addMsg(o, 'customer', profile.aiType==='Schnäppchenjäger'
      ? `Danke, aber das überzeugt mich noch nicht. Mir ist der Endpreis wichtiger als eine andere Zahlungsart.`
      : `Danke, aber ich bleibe lieber bei meiner bisherigen Zahlungsweise.`);
  }
  renderPageContent(); scheduleSave();
}
function scheduleAppointment(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const profile = ensureOfferAi(o, findCar(o.carId));
  addMsg(o, 'player', `Können wir einen Termin für eine Probefahrt vereinbaren?`);
  const delay = replyDelayFor(profile);
  o.chatStatus = chatStatusForIntent('appointment', profile);
  if(delay<=0){
    o.chatStatus = '';
    resolveAppointmentReply(o);
  } else {
    o.pendingReply = {kind:'appointment', dueDay: state.day+delay};
  }
  renderPageContent(); scheduleSave();
}
function resolveAppointmentReply(o){
  const profile = ensureOfferAi(o, findCar(o.carId));
  const confirmed = Math.random() < clamp(0.58 + (profile.decisionDrive||55)/260 + (profile.trust||55)/380, 0.45, 0.88);
  if(confirmed){
    addMsg(o, 'customer', profile.aiType==='Unsicherer Kunde'
      ? `Grundsätzlich ja. Ich würde den Termin gerne machen, muss aber vorher noch kurz Rücksprache halten. Welche Zeiten hätten Sie?`
      : `Gerne, ich komme vorbei! Sagen Sie mir einfach, wann es passt.`);
    o.patience += 1;
  } else {
    addMsg(o, 'customer', profile.aiType==='Ungeduldiger Kunde'
      ? `Diese Woche wird schwierig. Wenn es keinen schnellen Termin gibt, schaue ich parallel weiter.`
      : `Diese Woche passt es leider nicht, vielleicht etwas später.`);
  }
}
function confirmReservation(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const profile = ensureOfferAi(o, c);
  if(c.reservedFor && c.reservedFor.offerId===o.id){ return; }
  if(isReservedForOther(c, o.id)){ notify('Fahrzeug ist bereits anderweitig reserviert.','warn'); renderPageContent(); return; }
  reserveCar(c, o, 5, 'manual');
  addMsg(o, 'player', `Ich reserviere das Fahrzeug für Sie bis Tag ${c.reservedFor.expiresDay}.`);
  addMsg(o, 'customer', profile.riskAwareness>68
    ? `Vielen Dank, das gibt mir Sicherheit. Dann prüfe ich die letzten Details und melde mich verbindlich.`
    : `Vielen Dank, das hilft mir sehr. Dann bleiben wir dran!`);
  o.patience += 1;
  renderAllOpen(); scheduleSave();
}

/* =============================== BANK =============================== */
function renderBank(){
  const limit = Math.round(8000 + state.reputation*400 + Math.max(0,state.cash)*0.5);
  const dailyInterest = Math.round(state.loanPrincipal*state.loanRate);
  return `
    <h2 class="section-title">Bank</h2>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Offener Kredit</div><div class="num">${money(state.loanPrincipal)}</div></div>
      <div class="stat-card"><div class="lbl">Zinssatz/Tag</div><div class="num">${(state.loanRate*100).toFixed(3)}%</div></div>
      <div class="stat-card"><div class="lbl">Kreditlimit</div><div class="num">${money(limit)}</div></div>
      <div class="stat-card"><div class="lbl">Tageszinsen</div><div class="num">${money(dailyInterest)}</div></div>
    </div>
    <div class="field">
      <label>Kredit aufnehmen: <span id="loanlbl" style="font-family:var(--font-m);color:var(--amber);">${money(1000)}</span></label>
      <div style="display:flex;gap:10px;align-items:center;">
        <input type="range" min="500" max="${Math.max(500,limit-state.loanPrincipal)}" step="100" value="1000" oninput="syncFromRange('loan', this.value, 500, ${Math.max(500,limit-state.loanPrincipal)}, '_loanVal')" id="loanRange" style="flex:1;">
        <input type="number" min="500" max="${Math.max(500,limit-state.loanPrincipal)}" step="100" value="1000" oninput="syncFromNumber('loan', this.value, 500, ${Math.max(500,limit-state.loanPrincipal)}, '_loanVal')" onblur="snapNumberField('loan', 500, ${Math.max(500,limit-state.loanPrincipal)}, '_loanVal')" id="loanNumber" style="width:130px;flex:0 0 auto;">
      </div>
    </div>
    <button class="btn btn-primary" onclick="takeLoan()">Kredit aufnehmen</button>
    <hr style="border:none;border-top:1px solid var(--glass-brd);margin:20px 0;">
    <div class="field">
      <label>Kredit tilgen: <span id="replbl" style="font-family:var(--font-m);color:var(--teal);">${money(Math.min(500,state.loanPrincipal))}</span></label>
      <div style="display:flex;gap:10px;align-items:center;">
        <input type="range" min="0" max="${state.loanPrincipal}" step="50" value="${Math.min(500,state.loanPrincipal)}" oninput="syncFromRange('rep', this.value, 0, ${state.loanPrincipal}, '_repVal')" id="repRange" style="flex:1;">
        <input type="number" min="0" max="${state.loanPrincipal}" step="50" value="${Math.min(500,state.loanPrincipal)}" oninput="syncFromNumber('rep', this.value, 0, ${state.loanPrincipal}, '_repVal')" onblur="snapNumberField('rep', 0, ${state.loanPrincipal}, '_repVal')" id="repNumber" style="width:130px;flex:0 0 auto;">
      </div>
    </div>
    <button class="btn btn-ghost" onclick="repayLoan()" ${state.loanPrincipal<=0?'disabled':''}>Tilgung durchführen</button>
  `;
}
function takeLoan(){
  const amt = window._loanVal||1000;
  state.loanPrincipal += amt;
  addTx('income','Kreditaufnahme', amt);
  notify('Kredit aufgenommen: '+money(amt)+'.', 'info');
  renderAllOpen(); scheduleSave();
}
function repayLoan(){
  const amt = Math.min(window._repVal||0, state.loanPrincipal, state.cash);
  if(amt<=0) return;
  state.loanPrincipal -= amt;
  addTx('expense','Kredittilgung', -amt);
  notify('Kredit getilgt: '+money(amt)+'.', 'info');
  renderAllOpen(); scheduleSave();
}

/* =============================== FINANCE =============================== */
function renderFinance(){
  const income = state.transactions.filter(t=>t.amount>0).reduce((s,t)=>s+t.amount,0);
  const expense = state.transactions.filter(t=>t.amount<0).reduce((s,t)=>s+t.amount,0);
  const receivables = (state.receivables||[]).filter(r=>!r.closed);
  const leases = (state.leaseContracts||[]).filter(l=>l.status==='active');
  const recurringMonthly = receivables.reduce((s,r)=>s+r.monthlyPayment,0) + leases.reduce((s,l)=>s+l.monthlyPayment,0);
  const claims = activeClaims();
  const claimSum = claims.reduce((s,x)=>s+claimTotal(x.claim),0);
  return `
    <h2 class="section-title">Finanzen</h2>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Einnahmen (gesamt)</div><div class="num" style="color:var(--teal);">${money(income)}</div></div>
      <div class="stat-card"><div class="lbl">Ausgaben (gesamt)</div><div class="num" style="color:var(--red);">${money(expense)}</div></div>
      <div class="stat-card"><div class="lbl">Nettoergebnis</div><div class="num">${money(income+expense)}</div></div>
      <div class="stat-card"><div class="lbl">💳 Wiederkehrend/Monat</div><div class="num" style="color:var(--brass);">${money(recurringMonthly)}</div></div>
      <div class="stat-card"><div class="lbl">⚠ Offene Forderungen</div><div class="num" style="color:${claims.length?'var(--crimson)':'var(--teal)'};">${claims.length?money(claimSum):'0 €'}</div></div>
    </div>
    ${claims.length ? `
    <h3 style="font-family:var(--font-d);font-size:13px;margin:6px 0 10px;">Offene Forderungen <a style="color:var(--brass);font-size:11px;cursor:pointer;font-weight:600;" onclick="navigateTo('contracts')">→ Mahnwesen öffnen</a></h3>
    <table class="tbl finance-table"><thead><tr><th>Kunde</th><th>Fahrzeug</th><th>Status</th><th>Gesamt</th><th>Nächster Schritt</th></tr></thead>
    <tbody>${claims.map(({contract, claim})=>`<tr><td>${contract.customerName}</td><td>${contractDesc(contract)}</td><td style="color:var(--red);">${claimStatusLabel(claim)}</td><td style="font-family:var(--font-m);">${money(claimTotal(claim))}</td><td>${claimActionLabel(claim)}</td></tr>`).join('')}</tbody></table>
    ` : ''}
    ${receivables.length ? `
    <h3 style="font-family:var(--font-d);font-size:13px;margin:6px 0 10px;">Offene Finanzierungsverträge <a style="color:var(--brass);font-size:11px;cursor:pointer;font-weight:600;" onclick="navigateTo('contracts')">→ Details in Verträge</a></h3>
    <table class="tbl finance-table"><thead><tr><th>Kunde</th><th>Fahrzeug</th><th>Rate/Monat</th><th>Restschuld</th><th>Status</th></tr></thead>
    <tbody>${receivables.map(r=>`<tr><td>${r.customerName}</td><td>${r.carDesc}</td><td style="font-family:var(--font-m);">${money(r.monthlyPayment)}</td><td>${money(r.remainingPrincipal)}</td><td style="color:${r.status==='aktuell'?'var(--teal)':'var(--red)'};">${r.status}</td></tr>`).join('')}</tbody></table>
    ` : ''}
    ${leases.length ? `
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 10px;">Laufende Leasingverträge <a style="color:var(--brass);font-size:11px;cursor:pointer;font-weight:600;" onclick="navigateTo('contracts')">→ Details in Verträge</a></h3>
    <table class="tbl finance-table"><thead><tr><th>Kunde</th><th>Fahrzeug</th><th>Rate/Monat</th><th>Laufzeit</th><th>Mehr-km</th><th>Schäden</th></tr></thead>
    <tbody>${leases.map(l=>`<tr><td>${l.customerName}</td><td>${l.carSnapshot.brand} ${l.carSnapshot.model}</td><td style="font-family:var(--font-m);">${money(l.monthlyPayment)}</td><td>${l.monthsElapsed}/${l.months} Monate</td><td>${l.mileageOverageKm>0?l.mileageOverageKm.toLocaleString('de-DE')+' km':'–'}</td><td>${l.damageEvents||'–'}</td></tr>`).join('')}</tbody></table>
    ` : ''}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 10px;">Letzte Transaktionen</h3>
    <table class="tbl finance-table"><thead><tr><th>Tag</th><th>Beschreibung</th><th>Betrag</th></tr></thead>
    <tbody>${state.transactions.slice(0,40).map(t=>`<tr><td>${t.day}</td><td>${t.desc}</td><td style="color:${t.amount>=0?'var(--teal)':'var(--red)'};font-family:var(--font-m);">${fmtDelta(t.amount)}</td></tr>`).join('') || '<tr><td colspan="3" style="text-align:center;color:var(--txt-2);">Keine Transaktionen</td></tr>'}</tbody></table>
  `;
}

/* =============================== MARKTSTATISTIK & KALKULATOR =============================== */
function statFilter(){
  state.marketStatsFilters = state.marketStatsFilters || {};
  return state.marketStatsFilters;
}
function setMarketStatFilter(key, value){
  state.marketStatsFilters = state.marketStatsFilters || {};
  state.marketStatsFilters[key] = value;
  renderApp('marketstats'); scheduleSave();
}
function allVehicleRows(){
  const market = (state.market||[]).map(c=>({...c, source:'Markt', effectivePrice:c.price||c.marketValue||0}));
  const stock = (state.inventory||[]).map(c=>({...c, source:'Bestand', effectivePrice:(state.listings[c.id]?.price)||c.price||c.marketValue||0}));
  return market.concat(stock);
}
function vehicleMatchesFilter(c, f){
  if(f.brand && c.brand!==f.brand) return false;
  if(f.model && c.model!==f.model) return false;
  if(f.engine && c.engine!==f.engine) return false;
  if(f.transmission && c.transmission!==f.transmission) return false;
  if(f.tier && tierInfo(c.brand,c.model).label!==f.tier) return false;
  if(f.yearMin && c.year < +f.yearMin) return false;
  if(f.yearMax && c.year > +f.yearMax) return false;
  if(f.priceMax && (c.effectivePrice||0) > +f.priceMax) return false;
  if(f.mileageMax && (c.mileage||0) > +f.mileageMax) return false;
  return true;
}
function periodDayLimit(){
  const p = statFilter().period || 'all';
  if(p==='14') return state.day-14;
  if(p==='30') return state.day-30;
  if(p==='60') return state.day-60;
  return -Infinity;
}
function salesForStats(){
  const f = statFilter(), minDay = periodDayLimit();
  return (state.salesHistory||[]).filter(s=>s.day>=minDay && vehicleMatchesFilter({...s, effectivePrice:s.salePrice}, f));
}
function purchasesForStats(){
  const f = statFilter(), minDay = periodDayLimit();
  return (state.purchaseHistory||[]).filter(p=>p.day>=minDay && vehicleMatchesFilter({...p, effectivePrice:p.price}, f));
}
function demandForStats(){
  const f = statFilter(), minDay = periodDayLimit();
  return currentDemandItems().filter(d=>d.day>=minDay && (!f.brand || d.brand===f.brand) && (!f.model || d.model===f.model));
}
function lineSvg(points, key, color){
  const data = points.slice().reverse();
  if(data.length<2) return `<div class="empty-state" style="padding:18px;">Noch zu wenig Verlauf.</div>`;
  const vals = data.map(p=>Number(p[key])||0);
  const min = Math.min(...vals), max = Math.max(...vals), span = Math.max(1,max-min);
  const coords = vals.map((v,i)=>`${(i/(vals.length-1))*100},${42-((v-min)/span)*34+4}`).join(' ');
  return `<svg viewBox="0 0 100 52" style="width:100%;height:150px;"><polyline points="${coords}" fill="none" stroke="${color||'var(--brass)'}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><line x1="0" y1="46" x2="100" y2="46" stroke="var(--line)"/></svg>`;
}
function barSvg(entries, color){
  const rows = entries.slice(0,7);
  const max = Math.max(1,...rows.map(x=>x[1]));
  return `<div style="display:grid;gap:8px;">${rows.map(([k,v])=>`<div style="display:grid;grid-template-columns:120px 1fr 44px;gap:8px;align-items:center;font-size:12px;"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(k)}</span><span style="height:9px;background:var(--surface);border-radius:20px;overflow:hidden;"><span style="display:block;height:100%;width:${v/max*100}%;background:${color||'var(--brass)'};"></span></span><b style="font-family:var(--font-m);text-align:right;">${v}</b></div>`).join('') || '<p class="subtle">Keine Daten.</p>'}</div>`;
}
function renderUpgrades(){
  ensureUpgrades();
  const owned = UPGRADE_DEFS.reduce((s,u)=>s+upgradeLevel(u.id),0);
  const max = UPGRADE_DEFS.length*3;
  const active = UPGRADE_DEFS.filter(u=>upgradeLevel(u.id)>0).length;
  const totalInvestment = state.upgradeStats.totalInvestment || 0;
  return `
    <h2 class="section-title">Unternehmensausbau</h2>
    <p class="subtle">Strategische Upgrades verbessern echte Systeme im Autohaus. Jede Investition kostet Liquidit&auml;t und bringt nur dann Vorteile, wenn Preis, Ruf, Fahrzeugqualit&auml;t und Prozesse zusammenpassen.</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Aktive Upgrades</div><div class="num">${active}</div></div>
      <div class="stat-card"><div class="lbl">Ausbaustufen</div><div class="num">${owned}/${max}</div></div>
      <div class="stat-card"><div class="lbl">Investiert</div><div class="num">${money(totalInvestment)}</div></div>
      <div class="stat-card"><div class="lbl">Legacy-Zugang</div><div class="num">${hasLegacyRun()?legacyLabel():'Noch offen'}</div></div>
    </div>
    <div class="upgrade-grid">
      ${UPGRADE_DEFS.map(def=>{
        const level = upgradeLevel(def.id);
        const unlocked = upgradeUnlocked(def);
        const maxed = level>=3;
        const cost = upgradeCost(def);
        const canBuy = unlocked && !maxed && (state.cash||0)>=cost;
        return `<div class="upgrade-card ${unlocked?'':'locked'} ${maxed?'maxed':''}">
          <div class="upgrade-head">
            <span class="upgrade-icon">${escapeHtml(def.icon)}</span>
            <span><b>${escapeHtml(def.name)}</b><small>Stufe ${level}/3</small></span>
            <span class="chip">${maxed?'Max':(unlocked?'Bereit':'Gesperrt')}</span>
          </div>
          <p class="upgrade-desc">${escapeHtml(def.desc)}</p>
          <div class="upgrade-levels">${[1,2,3].map(i=>`<span class="${level>=i?'on':''}"></span>`).join('')}</div>
          <div class="upgrade-effect"><b style="color:var(--ink-0);font-family:var(--font-d);display:block;margin-bottom:4px;">${maxed?'Aktiver Effekt':'N&auml;chster Effekt'}</b>${escapeHtml(upgradeEffectText(def))}</div>
          <div class="upgrade-req">Voraussetzung: ${escapeHtml(upgradeRequirementText(def))}</div>
          <div class="upgrade-foot">
            <span class="upgrade-cost">${maxed?'Vollst&auml;ndig':money(cost)}</span>
            <button class="btn ${canBuy?'btn-primary':'btn-ghost'} btn-sm" onclick="buyUpgrade('${def.id}')" ${(!canBuy)?'disabled':''}>Upgrade kaufen</button>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
}
function renderBranches(){
  return renderDashboard();
}
function renderMarketStats(){
  const f = statFilter();
  const vehicles = allVehicleRows().filter(c=>vehicleMatchesFilter(c, f));
  const sales = salesForStats();
  const purchases = purchasesForStats();
  const demand = demandForStats();
  const listings = Object.keys(state.listings||{}).map(id=>({car:findCar(id), listing:state.listings[id]})).filter(x=>x.car && vehicleMatchesFilter({...x.car, effectivePrice:x.listing.price}, f));
  const hist = (state.marketHistory||[]).filter(h=>h.day>=periodDayLimit());
  const avgMarket = Math.round(avg(vehicles, c=>c.effectivePrice||0));
  const avgSale = Math.round(avg(sales, s=>s.salePrice||0));
  const avgPurchase = Math.round(avg(purchases, p=>p.price||0));
  const avgProfit = Math.round(avg(sales, s=>s.profit||0));
  const avgMargin = avg(sales, s=>s.marginPct||0);
  const avgStand = avg(sales, s=>s.standDays||0);
  const brandDemand = topEntries(groupCount(demand, d=>d.brand), 8);
  const modelDemand = topEntries(groupCount(demand, d=>`${d.brand} ${d.model}`), 8);
  const demandCounts = groupCount(demand, d=>`${d.brand} ${d.model}`);
  const saleCounts = groupCount(sales, s=>`${s.brand} ${s.model}`);
  const trendKeys = [...new Set(Object.keys(demandCounts).concat(Object.keys(saleCounts)))];
  const rising = trendKeys.map(k=>({name:k, score:(demandCounts[k]||0)-(saleCounts[k]||0), demand:demandCounts[k]||0, sales:saleCounts[k]||0})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,6);
  const falling = trendKeys.map(k=>({name:k, score:(demandCounts[k]||0)-(saleCounts[k]||0), demand:demandCounts[k]||0, sales:saleCounts[k]||0})).filter(x=>x.score<0).sort((a,b)=>a.score-b.score).slice(0,6);
  const fastest = sales.slice().sort((a,b)=>a.standDays-b.standDays).slice(0,6);
  const slowest = sales.slice().sort((a,b)=>b.standDays-a.standDays).slice(0,6);
  const best = sales.slice().sort((a,b)=>b.profit-a.profit).slice(0,6);
  const worst = sales.slice().sort((a,b)=>a.profit-b.profit).slice(0,6);
  const brands = Object.keys(BRANDS);
  const models = f.brand ? Object.keys(BRANDS[f.brand].models) : [];
  return `
    <h2 class="section-title">Marktstatistik</h2>
    <p class="subtle">Alle Werte werden aus aktuellem Markt, Bestand, Inseraten, Anfragen, Ankäufen, Verkäufen und gespeicherten Marktbewegungen berechnet.</p>
    <div class="offer-card">
      <div class="spec-row">
        <select onchange="setMarketStatFilter('period',this.value)"><option value="all" ${(!f.period||f.period==='all')?'selected':''}>Gesamt</option><option value="14" ${f.period==='14'?'selected':''}>14 Tage</option><option value="30" ${f.period==='30'?'selected':''}>30 Tage</option><option value="60" ${f.period==='60'?'selected':''}>60 Tage</option></select>
        <select onchange="setMarketStatFilter('brand',this.value);setMarketStatFilter('model','')"><option value="">Alle Marken</option>${brands.map(b=>`<option ${f.brand===b?'selected':''}>${b}</option>`).join('')}</select>
        <select onchange="setMarketStatFilter('model',this.value)"><option value="">Alle Modelle</option>${models.map(m=>`<option ${f.model===m?'selected':''}>${m}</option>`).join('')}</select>
        <select onchange="setMarketStatFilter('engine',this.value)"><option value="">Alle Kraftstoffe</option>${ENGINES.map(e=>`<option ${f.engine===e.label?'selected':''}>${e.label}</option>`).join('')}</select>
        <select onchange="setMarketStatFilter('transmission',this.value)"><option value="">Alle Getriebe</option>${TRANS.map(t=>`<option ${f.transmission===t?'selected':''}>${t}</option>`).join('')}</select>
        <select onchange="setMarketStatFilter('tier',this.value)"><option value="">Alle Klassen</option>${['Budget','Mittelklasse','Premium','Luxus','Exotisch'].map(t=>`<option ${f.tier===t?'selected':''}>${t}</option>`).join('')}</select>
      </div>
      <div class="spec-row">
        <input type="number" placeholder="Baujahr ab" value="${escapeAttr(f.yearMin||'')}" onchange="setMarketStatFilter('yearMin',this.value)">
        <input type="number" placeholder="Baujahr bis" value="${escapeAttr(f.yearMax||'')}" onchange="setMarketStatFilter('yearMax',this.value)">
        <input type="number" placeholder="Preis bis" value="${escapeAttr(f.priceMax||'')}" onchange="setMarketStatFilter('priceMax',this.value)">
        <input type="number" placeholder="km bis" value="${escapeAttr(f.mileageMax||'')}" onchange="setMarketStatFilter('mileageMax',this.value)">
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Ø Marktpreis</div><div class="num">${money(avgMarket)}</div></div>
      <div class="stat-card"><div class="lbl">Ø Verkaufspreis</div><div class="num">${money(avgSale)}</div></div>
      <div class="stat-card"><div class="lbl">Ø Einkaufspreis</div><div class="num">${money(avgPurchase)}</div></div>
      <div class="stat-card"><div class="lbl">Ø Gewinn</div><div class="num" style="color:${avgProfit>=0?'var(--teal)':'var(--red)'};">${money(avgProfit)}</div></div>
      <div class="stat-card"><div class="lbl">Ø Marge</div><div class="num">${avgMargin.toFixed(1)}%</div></div>
      <div class="stat-card"><div class="lbl">Ø Standzeit</div><div class="num">${avgStand.toFixed(1)} Tage</div></div>
      <div class="stat-card"><div class="lbl">Aktive Inserate</div><div class="num">${listings.length}</div></div>
      <div class="stat-card"><div class="lbl">Aktuelle Nachfrage</div><div class="num">${demand.length}</div></div>
    </div>
    <div class="grid-cars" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr));">
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Preisentwicklung</h3>${lineSvg(hist,'avgMarketPrice','var(--brass)')}</div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Nachfrageverlauf</h3>${lineSvg(hist,'demand','var(--teal)')}</div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Beliebteste Marken</h3>${barSvg(brandDemand,'var(--violet)')}</div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Beliebteste Modelle</h3>${barSvg(modelDemand,'var(--brass)')}</div>
    </div>
    <div class="grid-cars" style="grid-template-columns:repeat(auto-fit,minmax(320px,1fr));margin-top:14px;">
      ${renderStatTable('Steigende Nachfrage', rising, x=>x.name, x=>`${x.demand} Nachfrage · ${x.sales} Verkäufe`)}
      ${renderStatTable('Sinkende Nachfrage', falling, x=>x.name, x=>`${x.demand} Nachfrage · ${x.sales} Verkäufe`)}
      ${renderStatTable('Schnellste Verkäufer', fastest, s=>`${s.brand} ${s.model}`, s=>`${s.standDays} Tage · ${money(s.profit)}`)}
      ${renderStatTable('Langsamste Verkäufer', slowest, s=>`${s.brand} ${s.model}`, s=>`${s.standDays} Tage · ${money(s.salePrice)}`)}
      ${renderStatTable('Höchste Gewinnmarge', best, s=>`${s.brand} ${s.model}`, s=>`${money(s.profit)} · ${s.marginPct.toFixed(1)}%`)}
      ${renderStatTable('Niedrigste Gewinnmarge', worst, s=>`${s.brand} ${s.model}`, s=>`${money(s.profit)} · ${s.marginPct.toFixed(1)}%`)}
    </div>
  `;
}
function biPct(n){ return Number.isFinite(n) ? n.toFixed(1).replace('.', ',')+'%' : '–'; }
function biNum(n, suffix){
  if(!Number.isFinite(n)) return '–';
  return `${Number.isInteger(n)?n:n.toFixed(1).replace('.', ',')}${suffix||''}`;
}
function biRate(part, total){ return total ? part/total*100 : 0; }
function biGroupStats(rows, keyFn){
  const map = {};
  rows.forEach(r=>{
    const key = keyFn(r) || 'Unbekannt';
    if(!map[key]) map[key] = {key, count:0, revenue:0, profit:0, marginSum:0, standSum:0, loss:0};
    const g = map[key];
    g.count++;
    g.revenue += Number(r.salePrice)||0;
    g.profit += Number(r.profit)||0;
    g.marginSum += Number(r.marginPct)||0;
    g.standSum += Number(r.standDays)||0;
    if((r.profit||0)<0) g.loss++;
  });
  return Object.values(map).map(g=>({
    ...g,
    avgRevenue:g.revenue/Math.max(1,g.count),
    avgProfit:g.profit/Math.max(1,g.count),
    avgMargin:g.marginSum/Math.max(1,g.count),
    avgStand:g.standSum/Math.max(1,g.count),
  }));
}
function biTrendRows(points, key, label){
  const data = (points||[]).slice().reverse();
  if(data.length<2) return `<p class="subtle">Für ${label} gibt es noch keinen belastbaren Verlauf.</p>`;
  const first = Number(data[0][key])||0;
  const last = Number(data[data.length-1][key])||0;
  const delta = last-first;
  return `<p class="subtle" style="margin-top:8px;">${label}: ${delta>=0?'+':''}${key.toLowerCase().includes('price')||key.toLowerCase().includes('profit')?money(delta):biNum(delta)}</p>`;
}
function biMiniHeatmap(groups, valueKey, label){
  const rows = groups.filter(g=>g.count>=1).sort((a,b)=>b[valueKey]-a[valueKey]).slice(0,12);
  if(!rows.length) return `<div class="empty-state" style="padding:18px;">Keine Daten für ${label}.</div>`;
  const vals = rows.map(r=>Number(r[valueKey])||0);
  const min = Math.min(...vals), max = Math.max(...vals), span = Math.max(1,max-min);
  return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;">${rows.map(r=>{
    const intensity = ((Number(r[valueKey])||0)-min)/span;
    const bg = `color-mix(in srgb, var(--brass) ${Math.round(16+intensity*48)}%, transparent)`;
    return `<div style="border:1px solid var(--line);border-radius:10px;padding:9px;background:${bg};">
      <div style="font-size:11px;color:var(--ink-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(r.key)}</div>
      <b style="font-family:var(--font-m);font-size:15px;">${valueKey.toLowerCase().includes('margin')?biPct(r[valueKey]):(valueKey.toLowerCase().includes('stand')?biNum(r[valueKey],' T'):money(Math.round(r[valueKey])) )}</b>
      <div style="font-size:10px;color:var(--ink-2);">${r.count} Verkauf(e)</div>
    </div>`;
  }).join('')}</div>`;
}
function businessInsightsData(){
  const sales = state.salesHistory || [];
  const tx = state.transactions || [];
  const reviews = state.reviews || [];
  const receivables = state.receivables || [];
  const leases = state.leaseContracts || [];
  const contracts = receivables.concat(leases);
  const deliveries = state.deliveries || [];
  const completedDeliveries = deliveries.filter(d=>['completed','pickup_completed'].includes(d.status));
  const deliveryWithCost = deliveries.filter(d=>(d.baseCost||0)>0);
  const freeDeliveries = deliveries.filter(d=>(d.dealerSharePct||0)>=1);
  const courtesyDeliveryLoss = sumBy(deliveries, d=>Math.max(0,d.dealerCost||0));
  const freeDeliveryReviews = (state.reviews||[]).filter(r=>/Lieferung:/i.test(r.text||'') && /kostenlos|pünktlich|professionell|Selbstabholung/i.test(r.text||''));
  const valuation = companyValuation();
  const revenue = sumBy(sales, s=>s.salePrice||0);
  const profit = sumBy(sales, s=>s.profit||0);
  const avgSale = avg(sales, s=>s.salePrice||0);
  const avgProfit = avg(sales, s=>s.profit||0);
  const avgMargin = avg(sales, s=>s.marginPct||0);
  const avgDiscount = avg(sales.filter(s=>(s.marketValue||0)>0), s=>Math.max(0, ((s.marketValue||0)-(s.salePrice||0))/(s.marketValue||1)*100));
  const avgStand = avg(sales, s=>s.standDays||0);
  const complaints = reviews.filter(r=>r.complaint).length;
  const dunnings = state.dunningsSent || 0;
  const defaults = contracts.filter(c=>String(c.status||'').toLowerCase().includes('ausgefallen')).length;
  const activeClaims = window.activeClaims ? window.activeClaims() : [];
  const financingSales = sales.filter(s=>s.paymentMethod==='finanzierung').length;
  const leasingSales = sales.filter(s=>s.paymentMethod==='leasing').length;
  const cashSales = sales.filter(s=>s.paymentMethod==='bar').length;
  const recurring = recurringMonthlyValue();
  const customers = Object.values(state.customers||{});
  const repeatCustomers = customers.filter(c=>(c.purchases||[]).length>1).length;
  const totalCustomerPurchases = customers.reduce((s,c)=>s+(c.purchases||[]).length,0);
  const employeeRows = (state.employees||[]).map(e=>({
    key:e.name,
    role:e.role,
    skill:e.skill||0,
    level:e.level||1,
    motivation:e.motivation||0,
    efficiency:e.efficiency||0,
    errorRate:e.errorRate||0,
    salary:e.salary||0,
    value:(e.efficiency||e.skill||0)/Math.max(1,e.salary||1)*100,
  }));
  const purchaseRequests = state.purchaseRequests||[];
  const purchasedRequests = purchaseRequests.filter(r=>r.status==='purchased').length;
  const openRequests = purchaseRequests.filter(r=>r.status==='open').length;
  const searchOrders = state.searchOrders||[];
  const openSearchOrders = searchOrders.filter(o=>o.status==='open').length;
  const matchedSearchOrders = searchOrders.filter(o=>o.status && o.status!=='open').length;
  ensureUpgrades();
  const upgrades = UPGRADE_DEFS.map(u=>({id:u.id, name:u.name, level:upgradeLevel(u.id)})).filter(u=>u.level>0);
  const upgradeInvestment = state.upgradeStats?.totalInvestment || 0;
  const brandGroups = biGroupStats(sales, s=>s.brand);
  const modelGroups = biGroupStats(sales, s=>`${s.brand} ${s.model}`);
  const tierGroups = biGroupStats(sales, s=>s.tier);
  const engineGroups = biGroupStats(sales, s=>s.engine);
  return {
    sales, tx, reviews, receivables, leases, contracts, valuation,
    deliveries, completedDeliveries, deliveryWithCost, freeDeliveries, courtesyDeliveryLoss, freeDeliveryReviews,
    revenue, profit, avgSale, avgProfit, avgMargin, avgDiscount, avgStand,
    complaints, dunnings, defaults, activeClaims,
    financingSales, leasingSales, cashSales, recurring,
    customers, repeatCustomers, totalCustomerPurchases,
    employeeRows, purchaseRequests, purchasedRequests, openRequests,
    searchOrders, openSearchOrders, matchedSearchOrders,
    upgrades, upgradeInvestment,
    brandGroups, modelGroups, tierGroups, engineGroups,
  };
}
function businessInsightRecommendations(d){
  const out = [];
  const evidence = (text, basis, impact)=>out.push({text, basis, impact:impact||'Mittel'});
  if(d.sales.length>=4){
    const brands = d.brandGroups.filter(g=>g.count>=2).sort((a,b)=>b.avgMargin-a.avgMargin);
    if(brands.length>=2){
      const top = brands[0], low = brands[brands.length-1], diff = top.avgMargin-low.avgMargin;
      if(Math.abs(diff)>=5) evidence(`${top.key} erzielt bei Ihnen im Schnitt ${biPct(diff)} mehr Marge als ${low.key}.`, `${top.count} Verkäufe ${top.key}, ${low.count} Verkäufe ${low.key}`, 'Hoch');
    }
    if(d.avgDiscount>=8) evidence(`Ihr durchschnittlicher Rabatt gegenüber Marktwert liegt bei ${biPct(d.avgDiscount)}. Schon eine Senkung um 2 Prozentpunkte hätte bei Ihrer bisherigen Umsatzbasis rechnerisch rund ${money(Math.round(d.revenue*.02))} mehr Verkaufserlös bedeutet.`, `${d.sales.length} Verkäufe mit gespeicherten Marktwerten`, 'Hoch');
    if(d.avgStand>=25) evidence(`Ihre durchschnittliche Standzeit liegt bei ${biNum(d.avgStand,' Tagen')}. Kürzere Standzeiten würden Kapital schneller freisetzen.`, `${d.sales.length} abgeschlossene Verkäufe`, 'Mittel');
    const losses = d.sales.filter(s=>(s.profit||0)<0);
    if(losses.length) evidence(`${losses.length} von ${d.sales.length} Verkäufen waren Verlustgeschäfte (${biPct(biRate(losses.length,d.sales.length))}).`, 'Verkaufshistorie mit Gewinn je Fahrzeug', losses.length>=2?'Hoch':'Mittel');
  }
  if(d.reviews.length>=3){
    const complaintRate = biRate(d.complaints,d.reviews.length);
    if(complaintRate>=20) evidence(`${biPct(complaintRate)} Ihrer Bewertungen enthalten Reklamationen.`, `${d.complaints} Reklamationen aus ${d.reviews.length} Bewertungen`, 'Hoch');
    const highMileageComplaints = d.sales.filter(s=>(s.mileage||0)>180000).length && d.reviews.filter(r=>r.complaint).length;
    const complaintSales = d.sales.filter(s=>(s.mileage||0)>180000);
    if(highMileageComplaints && complaintSales.length>=2) evidence(`Sie haben ${complaintSales.length} Verkäufe mit über 180.000 km in der Historie. Prüfen Sie diese Gruppe gesondert, da Reklamationen im Spielstand bereits auftreten.`, 'Verknüpfung Bewertungen zu einzelnen Fahrzeugen wird nicht gespeichert; daher keine Prozentbehauptung.', 'Mittel');
  }
  if(d.contracts.length>=2){
    if(d.recurring>0) evidence(`Finanzierungen und Leasing erzeugen aktuell ${money(d.recurring)} monatlichen Cashflow.`, `${d.receivables.filter(r=>!r.closed).length} aktive Finanzierungen, ${d.leases.filter(l=>l.status==='active').length} aktive Leasingverträge`, 'Mittel');
    if(d.dunnings>0) evidence(`Es wurden bisher ${d.dunnings} Mahnungen versendet. Die aktuelle offene Mahnquote liegt bei ${biPct(biRate(d.activeClaims.length,d.contracts.length))}.`, `${d.activeClaims.length} offene Forderungen bei ${d.contracts.length} Verträgen`, d.activeClaims.length?'Hoch':'Mittel');
    if(d.defaults>0) evidence(`${d.defaults} Vertrag(e) sind als Forderungsausfall markiert.`, 'Status der Finanzierungs- und Leasingverträge', 'Hoch');
  }
  if((state.workshopJobs||[]).length>0){
    const mechanics = (state.employees||[]).filter(e=>e.role==='Mechaniker').length;
    if((state.workshopJobs||[]).length > Math.max(1, mechanics)*2) evidence(`Die Werkstatt hat ${state.workshopJobs.length} laufende Aufträge bei ${mechanics} Mechaniker(n).`, 'Aktive Werkstattjobs und Mitarbeiterrollen', 'Mittel');
  }
  if(d.searchOrders.length>=3) evidence(`${d.openSearchOrders} Wunschfahrzeug-Aufträge sind offen; ${d.matchedSearchOrders} wurden bereits aus dem Status herausgeführt.`, 'Wunschliste/Suchaufträge des aktuellen Spielstands', 'Niedrig');
  if(d.purchaseRequests.length>=3) evidence(`Von ${d.purchaseRequests.length} Fahrzeugankaufs-Anfragen wurden ${d.purchasedRequests} gekauft.`, 'Fahrzeugankauf-Historie', 'Niedrig');
  if(d.completedDeliveries.length>=3){
    const avgDealerCost = avg(d.completedDeliveries, x=>Math.max(0,x.dealerCost||0));
    const freeRate = biRate(d.freeDeliveries.length,d.deliveries.length);
    evidence(`Ihre Fahrzeuglieferungen kosten das Autohaus im Schnitt ${money(Math.round(avgDealerCost))} pro abgeschlossener Übergabe. Kostenlose Lieferungen machen ${biPct(freeRate)} aller Lieferaufträge aus.`, `${d.completedDeliveries.length} abgeschlossene Lieferungen`, avgDealerCost>150?'Mittel':'Niedrig');
    const onTimeRate = biRate(d.completedDeliveries.filter(x=>x.onTime).length,d.completedDeliveries.length);
    if(onTimeRate<85) evidence(`Die Lieferpünktlichkeit liegt bei ${biPct(onTimeRate)}. Verspätungen können spätere Bewertungen verschlechtern.`, 'Abgeschlossene Lieferungen mit Status pünktlich/verspätet', 'Hoch');
  }
  return out;
}
function businessInsightForecasts(d){
  const out = [];
  const add = (text, basis)=>out.push({text,basis});
  const analystBonus = employeeBonus('Business-Analyst');
  if(d.sales.length>=4 && d.avgStand>5 && d.avgProfit>0){
    const uplift = d.avgStand/(d.avgStand-5)-1;
    add(`Wenn Sie Ihre durchschnittliche Standzeit um 5 Tage reduzieren, steigt die rechnerische Verkaufskapazität bei gleicher Nachfrage um etwa ${biPct(uplift*100)}.`, `Durchschnittliche Standzeit ${biNum(d.avgStand,' Tage')} und Ø Gewinn ${money(Math.round(d.avgProfit))}`);
  }
  const hist = state.cashHistory||[];
  if(hist.length>=5){
    const ordered = hist.slice(-10);
    const delta = ordered[ordered.length-1].cash - ordered[0].cash;
    const perDay = delta/Math.max(1, ordered[ordered.length-1].day-ordered[0].day);
    add(`Ihre Liquidität entwickelt sich aktuell mit ${perDay>=0?'+':''}${money(Math.round(perDay))} pro Ingame-Tag.`, `CashHistory der letzten ${ordered.length} Messpunkte`);
  }
  if((state.evDemand||1)!==1) add(`Die Elektro-Nachfrage steht aktuell bei ${biPct((state.evDemand||1)*100)} des Basiswerts.`, 'Aktueller Marktfaktor evDemand');
  if((state.suvDemand||1)!==1) add(`Die SUV-Nachfrage steht aktuell bei ${biPct((state.suvDemand||1)*100)} des Basiswerts.`, 'Aktueller Marktfaktor suvDemand');
  if((state.level||1)<30 && typeof xpForLevel==='function'){
    const needed = xpForLevel(state.level||1) - (state.xp||0);
    const passive = passiveXpForDay();
    if(passive>0) add(`Bei ausschließlich passivem XP-Zuwachs erreichen Sie das nächste Level in etwa ${Math.ceil(needed/passive)} Ingame-Tag(en).`, `Aktuelles Level ${state.level||1}, ${state.xp||0}/${xpForLevel(state.level||1)} XP, passiv +${passive} XP/Tag`);
  }
  if(analystBonus>0 && out.length){
    add(`Ihr Business-Analyst erhöht die Prognosequalität um etwa ${Math.round(analystBonus*18)}%, weil mehr interne Kennzahlen zusammengeführt werden.`, 'Mitarbeiterrolle Business-Analyst, aktuelle Unternehmens- und Marktdaten');
  }
  return out;
}
function renderBusinessInsights(){
  const d = businessInsightsData();
  const recommendations = businessInsightRecommendations(d);
  const forecasts = businessInsightForecasts(d);
  const hist = (state.marketHistory||[]).slice(0,40);
  const topBrands = d.brandGroups.slice().sort((a,b)=>b.avgMargin-a.avgMargin).slice(0,8);
  const bestModels = d.modelGroups.slice().sort((a,b)=>b.profit-a.profit).slice(0,8);
  const worstModels = d.modelGroups.slice().sort((a,b)=>a.profit-b.profit).slice(0,8);
  const highMarginCars = d.sales.slice().sort((a,b)=>b.profit-a.profit).slice(0,8);
  const lossCars = d.sales.filter(s=>(s.profit||0)<0).sort((a,b)=>a.profit-b.profit).slice(0,8);
  const employeesBest = d.employeeRows.slice().sort((a,b)=>(b.efficiency||b.skill)-(a.efficiency||a.skill));
  const employeesWeak = d.employeeRows.slice().sort((a,b)=>(a.efficiency||a.skill)-(b.efficiency||b.skill));
  const closeRate = biRate(d.sales.length, d.sales.length + (state.offers||[]).length);
  const repeatRate = biRate(d.repeatCustomers, Math.max(1,d.customers.length));
  const financingRate = biRate(d.financingSales,d.sales.length);
  const leasingRate = biRate(d.leasingSales,d.sales.length);
  const avgDeliveryCost = avg(d.deliveryWithCost, x=>x.baseCost||0);
  const avgDeliveryDistance = avg(d.deliveries, x=>x.distanceKm||0);
  const avgDeliveryDuration = avg(d.completedDeliveries.filter(x=>x.daysTotal), x=>x.daysTotal||0);
  const freeDeliveryRate = biRate(d.freeDeliveries.length,d.deliveries.length);
  const avgCourtesyLoss = avg(d.deliveries, x=>Math.max(0,x.dealerCost||0));
  const freeReviewed = d.completedDeliveries.filter(x=>(x.dealerSharePct||0)>=1 && Number.isFinite(x.reviewStars));
  const paidReviewed = d.completedDeliveries.filter(x=>(x.dealerSharePct||0)<=0 && Number.isFinite(x.reviewStars));
  const freeRepeat = d.completedDeliveries.filter(x=>(x.dealerSharePct||0)>=1 && ((state.customers||{})[x.customerId]?.purchases||[]).length>1);
  return `
    <h2 class="section-title">Business Insights</h2>
    <p class="subtle">Alle Aussagen basieren ausschließlich auf Daten dieses Spielstands. Wo Daten fehlen, wird keine Empfehlung erfunden.</p>
    ${d.sales.length<2 ? `<div class="notice warn" style="display:block;"><b>Datenbasis noch klein</b><br>Für belastbare Unternehmensanalysen werden mindestens mehrere Verkäufe, Bewertungen oder Vertragsereignisse benötigt. Aktuell liegen ${d.sales.length} Verkauf(e), ${d.reviews.length} Bewertung(en) und ${d.contracts.length} Vertrag/Verträge vor.</div>`:''}
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Umsatz</div><div class="num">${money(d.revenue)}</div></div>
      <div class="stat-card"><div class="lbl">Gesamtgewinn</div><div class="num" style="color:${d.profit>=0?'var(--teal)':'var(--red)'};">${money(d.profit)}</div></div>
      <div class="stat-card"><div class="lbl">Unternehmenswert</div><div class="num">${money(d.valuation.value)}</div></div>
      <div class="stat-card"><div class="lbl">Liquidität</div><div class="num" style="color:${(state.cash||0)>=0?'var(--teal)':'var(--red)'};">${money(state.cash||0)}</div></div>
      <div class="stat-card"><div class="lbl">Erfolgsquote</div><div class="num">${d.valuation.index.successRate}%</div></div>
      <div class="stat-card"><div class="lbl">Legacy-Score</div><div class="num">${currentLegacyScore() || '–'}${currentLegacyScore()?'%':''}</div></div>
      <div class="stat-card"><div class="lbl">Kundenzufriedenheit</div><div class="num">${state.reputation||0}/100</div></div>
      <div class="stat-card"><div class="lbl">Reklamationsquote</div><div class="num">${d.reviews.length?biPct(biRate(d.complaints,d.reviews.length)):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Finanzierungsquote</div><div class="num">${d.sales.length?biPct(financingRate):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Leasingquote</div><div class="num">${d.sales.length?biPct(leasingRate):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Ø Marge</div><div class="num">${d.sales.length?biPct(d.avgMargin):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Ø Rabatt</div><div class="num">${d.sales.length?biPct(d.avgDiscount):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Ø Standzeit</div><div class="num">${d.sales.length?biNum(d.avgStand,' T'):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Abschlussquote</div><div class="num">${d.sales.length?biPct(closeRate):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Stammkundenquote</div><div class="num">${d.customers.length?biPct(repeatRate):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Aktive Upgrades</div><div class="num">${d.upgrades.length}</div></div>
      <div class="stat-card"><div class="lbl">Upgrade-Investition</div><div class="num">${money(d.upgradeInvestment)}</div></div>
      <div class="stat-card"><div class="lbl">Mahnquote offen</div><div class="num">${d.contracts.length?biPct(biRate(d.activeClaims.length,d.contracts.length)):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Ø Lieferkosten</div><div class="num">${avgDeliveryCost?money(Math.round(avgDeliveryCost)):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Kostenlose Lieferungen</div><div class="num">${d.deliveries.length?biPct(freeDeliveryRate):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Ø Lieferentfernung</div><div class="num">${d.deliveries.length?biNum(avgDeliveryDistance,' km'):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Ø Lieferdauer</div><div class="num">${avgDeliveryDuration?biNum(avgDeliveryDuration,' T'):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Ø Kulanzverlust</div><div class="num">${d.deliveries.length?money(Math.round(avgCourtesyLoss)):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Gratislieferung Ø Bewertung</div><div class="num">${freeReviewed.length?biNum(avg(freeReviewed,x=>x.reviewStars),' ★'):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Bezahlte Lieferung Ø Bewertung</div><div class="num">${paidReviewed.length?biNum(avg(paidReviewed,x=>x.reviewStars),' ★'):'–'}</div></div>
      <div class="stat-card"><div class="lbl">Gratislieferung Stammkunden</div><div class="num">${d.freeDeliveries.length?biPct(biRate(freeRepeat.length,d.freeDeliveries.length)):'–'}</div></div>
    </div>
    <div class="grid-cars" style="grid-template-columns:repeat(auto-fit,minmax(320px,1fr));">
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Gewinnentwicklung</h3>${lineSvg(hist,'avgProfit','var(--teal)')}${biTrendRows(hist,'avgProfit','Ø Gewinn')}</div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Umsatzentwicklung</h3>${lineSvg(hist,'avgSalePrice','var(--brass)')}${biTrendRows(hist,'avgSalePrice','Ø Verkaufspreis')}</div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Nachfrage-Heatmap nach Marke</h3>${biMiniHeatmap(d.brandGroups,'avgMargin','Marken')}</div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Standzeit nach Segment</h3>${biMiniHeatmap(d.tierGroups,'avgStand','Segmente')}</div>
    </div>
    <div class="grid-cars" style="grid-template-columns:repeat(auto-fit,minmax(340px,1fr));margin-top:14px;">
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Intelligente Empfehlungen</h3>${recommendations.length?recommendations.map(r=>`<div class="notice ${r.impact==='Hoch'?'warn':'good'}" style="display:block;"><b>${escapeHtml(r.text)}</b><br><span style="color:var(--ink-2);">Datenbasis: ${escapeHtml(r.basis)}</span></div>`).join(''):'<p class="subtle">Noch keine belastbare Empfehlung. Das System wartet auf mehr echte Unternehmensdaten.</p>'}</div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Prognosen</h3>${forecasts.length?forecasts.map(f=>`<div class="notice" style="display:block;"><b>${escapeHtml(f.text)}</b><br><span style="color:var(--ink-2);">Berechnet aus: ${escapeHtml(f.basis)}</span></div>`).join(''):'<p class="subtle">Noch keine Prognose möglich, weil Verlauf oder Trenddaten fehlen.</p>'}</div>
      ${renderStatTable('Erfolgreichste Marken nach Ø Marge', topBrands, x=>x.key, x=>`${biPct(x.avgMargin)} · ${x.count} Verkäufe`)}
      ${renderStatTable('Erfolgreichste Modelle nach Gewinn', bestModels, x=>x.key, x=>`${money(x.profit)} · ${x.count} Verkäufe`)}
      ${renderStatTable('Fahrzeuge mit höchsten Margen', highMarginCars, s=>`${s.brand} ${s.model}`, s=>`${money(s.profit)} · ${biPct(s.marginPct||0)}`)}
      ${renderStatTable('Fahrzeuge mit größten Verlusten', lossCars, s=>`${s.brand} ${s.model}`, s=>`${money(s.profit)} · ${biPct(s.marginPct||0)}`)}
      ${renderStatTable('Mitarbeiter nach Effizienz', employeesBest, e=>`${e.key} (${e.role})`, e=>`Level ${e.level} · Effizienz ${Math.round(e.efficiency)}% · Fehler ${Math.round(e.errorRate)}% · ${money((e.salary||0)*30)}/Monat`)}
      ${renderStatTable('Schwächste Mitarbeiterdaten', employeesWeak, e=>`${e.key} (${e.role})`, e=>`Motivation ${Math.round(e.motivation)}% · Effizienz ${Math.round(e.efficiency)}% · ${money((e.salary||0)*30)}/Monat`)}
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Datenabdeckung</h3>
        <table class="tbl"><tbody>
          <tr><td>Verkäufe</td><td style="text-align:right;font-family:var(--font-m);">${d.sales.length}</td></tr>
          <tr><td>Bewertungen</td><td style="text-align:right;font-family:var(--font-m);">${d.reviews.length}</td></tr>
          <tr><td>Verträge</td><td style="text-align:right;font-family:var(--font-m);">${d.contracts.length}</td></tr>
          <tr><td>Zahlungsausfälle</td><td style="text-align:right;font-family:var(--font-m);">${d.defaults}</td></tr>
          <tr><td>Werkstatt laufend / abgeschlossen</td><td style="text-align:right;font-family:var(--font-m);">${(state.workshopJobs||[]).length} / ${state.workshopCompleted||0}</td></tr>
          <tr><td>Fahrzeugankäufe gekauft / offen</td><td style="text-align:right;font-family:var(--font-m);">${d.purchasedRequests} / ${d.openRequests}</td></tr>
          <tr><td>Wunschfahrzeug-Aufträge offen</td><td style="text-align:right;font-family:var(--font-m);">${d.openSearchOrders}</td></tr>
          <tr><td>Lieferungen abgeschlossen / offen</td><td style="text-align:right;font-family:var(--font-m);">${d.completedDeliveries.length} / ${d.deliveries.length-d.completedDeliveries.length}</td></tr>
          <tr><td>Kulanzkosten Lieferungen gesamt</td><td style="text-align:right;font-family:var(--font-m);">${money(Math.round(d.courtesyDeliveryLoss))}</td></tr>
        </tbody></table>
        <p class="subtle" style="margin-top:10px;">Mitarbeiter werden im aktuellen Spielstand nicht einzelnen Verkäufen zugeordnet. Deshalb bewertet Business Insights Mitarbeiter nicht nach Umsatz, sondern nur nach real gespeicherten Mitarbeiterdaten wie Rolle, Skill und Gehalt.</p>
      </div>
    </div>
  `;
}
function renderStatTable(title, rows, left, right){
  return `<div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">${title}</h3><table class="tbl"><tbody>${rows.map(r=>`<tr><td>${escapeHtml(left(r))}</td><td style="text-align:right;font-family:var(--font-m);">${escapeHtml(right(r))}</td></tr>`).join('') || '<tr><td colspan="2" style="color:var(--ink-2);">Noch keine Daten</td></tr>'}</tbody></table></div>`;
}
function setCalcInput(group, key, value){
  state.calcInputs = state.calcInputs || {};
  state.calcInputs[group] = state.calcInputs[group] || {};
  state.calcInputs[group][key] = value;
  scheduleSave();
}
function calcVal(group, key, fallback){ return Number((state.calcInputs&&state.calcInputs[group]&&state.calcInputs[group][key]) ?? fallback ?? 0) || 0; }
function annuity(principal, annualRate, months){
  const r = (annualRate||0)/12;
  if(months<=0) return 0;
  if(r===0) return principal/months;
  return principal * (r*Math.pow(1+r,months))/(Math.pow(1+r,months)-1);
}
function financeSchedule(principal, annualRate, months){
  const pay = annuity(principal, annualRate, months);
  let rest = principal, rows = [];
  for(let m=1;m<=months;m++){
    const interest = rest*(annualRate/12);
    const principalPart = Math.min(rest, pay-interest);
    rest = Math.max(0, rest-principalPart);
    if(m<=6 || m===months || m%12===0) rows.push({m, pay, interest, principalPart, rest});
  }
  return {pay, rows};
}
function calculatorVehicleOptions(){
  const selected = state.calcInputs?.analysis?.vehicleId || '';
  return allVehicleRows().map(c=>`<option value="${c.id}" ${selected===c.id?'selected':''}>${c.source}: ${c.brand} ${c.model} · ${money(c.effectivePrice||c.marketValue||0)}</option>`).join('');
}
function selectedCalcVehicle(){
  const id = state.calcInputs?.analysis?.vehicleId;
  return allVehicleRows().find(c=>c.id===id) || allVehicleRows()[0] || null;
}
function renderCalculator(){
  const p = state.calcInputs?.profit || {};
  const purchase = calcVal('profit','purchase', 0), repair = calcVal('profit','repair',0), transport = calcVal('profit','transport',0), registration = calcVal('profit','registration',0), prep = calcVal('profit','prep',0), ads = calcVal('profit','ads',0), other = calcVal('profit','other',0), sale = calcVal('profit','sale',0);
  const totalCost = purchase+repair+transport+registration+prep+ads+other;
  const gross = sale-totalCost;
  const finPrice = calcVal('finance','price', sale||25000), down = calcVal('finance','down', Math.round(finPrice*.15)), rate = calcVal('finance','rate',6.5)/100, months = calcVal('finance','months',48);
  const principal = Math.max(0, finPrice-down), fs = financeSchedule(principal, rate, months), finTotal = fs.pay*months+down;
  const leasePrice = calcVal('lease','price', finPrice), special = calcVal('lease','special', Math.round(leasePrice*.1)), residual = calcVal('lease','residual', Math.round(leasePrice*.48)), leaseMonths = calcVal('lease','months',36), leaseRatePct = calcVal('lease','rate',5.5)/100, km = calcVal('lease','km',15000);
  const leaseRate = ((leasePrice-special-residual)/Math.max(1,leaseMonths)) + ((leasePrice+residual)/2)*(leaseRatePct/12);
  const car = selectedCalcVehicle();
  const comparables = car ? (state.salesHistory||[]).filter(s=>s.brand===car.brand || s.tier===tierInfo(car.brand,car.model).label) : [];
  const expectedSale = car ? Math.round(avg(comparables, s=>s.salePrice) || car.marketValue || car.effectivePrice || 0) : 0;
  const expectedStand = Math.round(avg(comparables, s=>s.standDays) || avg(state.salesHistory||[], s=>s.standDays) || 0);
  const expectedProfit = car ? expectedSale - (car.effectivePrice||car.purchasePrice||car.price||0) : 0;
  const demand = car ? currentDemandItems().filter(d=>d.brand===car.brand || d.model===car.model).length : 0;
  const risk = car ? clamp((100-(car.condition||70)) + (car.hiddenIssues||[]).length*18 + Math.max(0,(car.mileage||0)-120000)/6000 + Math.max(0,(car.effectivePrice||0)-expectedSale)/1000, 0, 100) : 0;
  return `
    <h2 class="section-title">Kalkulator</h2>
    <p class="subtle">Alle automatischen Vergleichswerte stammen aus Markt, Bestand, Anfragen und Verkaufshistorie. Manuelle Eingaben werden mathematisch direkt berechnet.</p>
    <div class="grid-cars" style="grid-template-columns:repeat(auto-fit,minmax(330px,1fr));">
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Gewinnkalkulation</h3>
        ${calcInput('profit','purchase','Einkaufspreis',purchase)}${calcInput('profit','repair','Reparaturkosten',repair)}${calcInput('profit','transport','Transportkosten',transport)}${calcInput('profit','registration','Zulassungskosten',registration)}${calcInput('profit','prep','Aufbereitungskosten',prep)}${calcInput('profit','ads','Werbekosten',ads)}${calcInput('profit','other','Sonstige Kosten',other)}${calcInput('profit','sale','Geplanter Verkaufspreis',sale)}
        <div class="stat-grid"><div class="stat-card"><div class="lbl">Gesamtkosten</div><div class="num">${money(totalCost)}</div></div><div class="stat-card"><div class="lbl">Bruttogewinn</div><div class="num" style="color:${gross>=0?'var(--teal)':'var(--red)'};">${money(gross)}</div></div><div class="stat-card"><div class="lbl">Marge</div><div class="num">${totalCost?(gross/totalCost*100).toFixed(1):'0.0'}%</div></div><div class="stat-card"><div class="lbl">Break-even</div><div class="num">${money(totalCost)}</div></div></div>
      </div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Finanzierungsrechner</h3>
        ${calcInput('finance','price','Fahrzeugpreis',finPrice)}${calcInput('finance','down','Anzahlung',down)}${calcInput('finance','rate','Zinssatz % p.a.',(rate*100).toFixed(2))}${calcInput('finance','months','Laufzeit Monate',months)}
        <div class="stat-grid"><div class="stat-card"><div class="lbl">Finanziert</div><div class="num">${money(principal)}</div></div><div class="stat-card"><div class="lbl">Monatsrate</div><div class="num">${money(fs.pay)}</div></div><div class="stat-card"><div class="lbl">Gesamtkosten</div><div class="num">${money(finTotal)}</div></div><div class="stat-card"><div class="lbl">Zinskosten</div><div class="num">${money(finTotal-finPrice)}</div></div></div>
        <table class="tbl"><thead><tr><th>Monat</th><th>Rate</th><th>Zins</th><th>Restschuld</th></tr></thead><tbody>${fs.rows.map(r=>`<tr><td>${r.m}</td><td>${money(r.pay)}</td><td>${money(r.interest)}</td><td>${money(r.rest)}</td></tr>`).join('')}</tbody></table>
      </div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Leasingrechner</h3>
        ${calcInput('lease','price','Fahrzeugpreis',leasePrice)}${calcInput('lease','special','Sonderzahlung',special)}${calcInput('lease','residual','Restwert',residual)}${calcInput('lease','months','Laufzeit Monate',leaseMonths)}${calcInput('lease','rate','Zinssatz % p.a.',(leaseRatePct*100).toFixed(2))}${calcInput('lease','km','km/Jahr',km)}
        <div class="stat-grid"><div class="stat-card"><div class="lbl">Leasingrate</div><div class="num">${money(leaseRate)}</div></div><div class="stat-card"><div class="lbl">Gesamtkosten</div><div class="num">${money(leaseRate*leaseMonths+special)}</div></div><div class="stat-card"><div class="lbl">Restwert</div><div class="num">${money(residual)}</div></div><div class="stat-card"><div class="lbl">km gesamt</div><div class="num">${Math.round(km*leaseMonths/12).toLocaleString('de-DE')}</div></div></div>
      </div>
      <div class="offer-card"><h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Wirtschaftlichkeitsanalyse</h3>
        <div class="field"><label>Fahrzeug aus Markt/Bestand</label><select onchange="setCalcInput('analysis','vehicleId',this.value);renderApp('calculator')"><option value="">Automatisch wählen</option>${calculatorVehicleOptions()}</select></div>
        ${car?`<p class="subtle">${car.source}: <b>${car.brand} ${car.model}</b> · Einkauf/Preis ${money(car.effectivePrice||car.price||0)} · Schätzwert ${money(car.marketValue||0)}</p>
        <div class="stat-grid"><div class="stat-card"><div class="lbl">Erwarteter Verkauf</div><div class="num">${money(expectedSale)}</div></div><div class="stat-card"><div class="lbl">Erwarteter Gewinn</div><div class="num" style="color:${expectedProfit>=0?'var(--teal)':'var(--red)'};">${money(expectedProfit)}</div></div><div class="stat-card"><div class="lbl">Standzeit-Prognose</div><div class="num">${expectedStand||'–'} Tage</div></div><div class="stat-card"><div class="lbl">Nachfrage</div><div class="num">${demand}</div></div><div class="stat-card"><div class="lbl">Kapitalbindung</div><div class="num">${money((car.effectivePrice||car.price||0)*Math.max(1,expectedStand)/30)}</div></div><div class="stat-card"><div class="lbl">Risiko</div><div class="num" style="color:${risk>55?'var(--red)':(risk>28?'var(--brass)':'var(--teal)')};">${Math.round(risk)}/100</div></div></div>`:'<div class="empty-state">Kein Fahrzeug verfügbar.</div>'}
      </div>
    </div>
  `;
}
function calcInput(group,key,label,value){
  return `<div class="field"><label>${label}</label><input type="number" step="0.01" value="${escapeAttr(value)}" onchange="setCalcInput('${group}','${key}',this.value);renderApp('calculator')"></div>`;
}

/* =============================== EMPLOYEES =============================== */
/* =============================== FINANZIERUNG / XP / ERFOLGE / SOUND =============================== */
const PAYMENT_METHODS = ['bar','finanzierung','leasing'];
function paymentMethodMeta(method){
  return ({
    bar:{label:'Barzahlung', icon:'💶', accent:'#3ecf7f', text:'Sofortiger Zahlungseingang ohne Bankprüfung.'},
    finanzierung:{label:'Finanzierung', icon:'🏦', accent:'#5c86ff', text:'Ratenzahlung mit Bankprüfung und laufenden Einnahmen.'},
    leasing:{label:'Leasing', icon:'📄', accent:'#8b7ff0', text:'Monatliche Leasingraten über feste Laufzeit.'},
  })[method] || {label:method, icon:'✓', accent:'var(--brass)', text:''};
}
function normalizePaymentMethods(methods){
  const raw = Array.isArray(methods) ? methods : [];
  const mapped = raw.map(m=>m==='cash'?'bar':m==='financing'?'finanzierung':m).filter(m=>PAYMENT_METHODS.includes(m));
  const unique = [...new Set(mapped)];
  return unique.length ? unique : [...PAYMENT_METHODS];
}
function listingAllowedPaymentMethods(listing){
  return normalizePaymentMethods(listing?.allowedPaymentMethods);
}
function paymentMethodBadges(methods){
  return normalizePaymentMethods(methods).map(method=>{
    const meta = paymentMethodMeta(method);
    return `<span class="chip" style="color:${meta.accent};border-color:color-mix(in srgb, ${meta.accent} 38%, transparent);">${meta.icon} ${meta.label}</span>`;
  }).join('');
}
function paymentMethodSelectorHtml(prefix, methods){
  const selected = normalizePaymentMethods(methods);
  return `<div class="payment-method-grid">
    ${PAYMENT_METHODS.map(method=>{
      const meta = paymentMethodMeta(method);
      const active = selected.includes(method);
      return `<label class="payment-method-card ${active?'active':''}" style="--pay-a:${meta.accent};" onclick="setTimeout(()=>syncPaymentCards('${prefix}'),0)">
        <input type="checkbox" data-payment-prefix="${prefix}" value="${method}" ${active?'checked':''}>
        <span class="pay-icon">${meta.icon}</span>
        <b>${meta.label}</b>
        <small>${meta.text}</small>
      </label>`;
    }).join('')}
  </div>`;
}
function selectedPaymentMethods(prefix){
  return Array.from(document.querySelectorAll(`input[data-payment-prefix="${prefix}"]:checked`)).map(input=>input.value);
}
function syncPaymentCards(prefix){
  document.querySelectorAll(`input[data-payment-prefix="${prefix}"]`).forEach(input=>{
    const card = input.closest('.payment-method-card');
    if(card) card.classList.toggle('active', input.checked);
  });
}
function listingPaymentMethodOffered(o, method){
  const listing = o && state.listings ? state.listings[o.carId] : null;
  return listingAllowedPaymentMethods(listing).includes(method);
}
function pickPaymentMethod(price){
  let cashChance;
  if(price<10000) cashChance = 0.72;
  else if(price<30000) cashChance = 0.52;
  else if(price<60000) cashChance = 0.34;
  else cashChance = 0.22;
  if(Math.random()<cashChance) return 'bar';
  const financingShare = price<12000 ? 0.72 : (price<35000 ? 0.62 : 0.50);
  return Math.random()<financingShare ? 'finanzierung' : 'leasing';
}
function financingApproval(creditScore, price, method){
  const score = clamp(creditScore||60, 0, 100);
  const pricePenalty = clamp((price-25000)/160000, 0, 0.22);
  const staffBonus = employeeBonus(method==='leasing' ? 'Leasingberater' : 'Finanzierungsberater');
  const methodBonus = (method==='leasing' ? 0.04 : 0) + staffBonus*0.09 + upgradeLevel('financing_network')*0.055;
  let approve = 0.18 + score*0.0088 - pricePenalty + methodBonus;
  if(score>=80) approve = Math.max(approve, 0.82 - pricePenalty*0.35 + methodBonus);
  else if(score>=70) approve = Math.max(approve, 0.70 - pricePenalty*0.45 + methodBonus);
  else if(score>=60) approve = Math.max(approve, 0.56 - pricePenalty*0.55 + methodBonus);
  approve = clamp(approve, 0.08, score>=80 ? 0.96 : 0.9);
  const conditional = clamp(0.22 - Math.max(0, score-70)*0.004 + pricePenalty*0.35, 0.06, 0.28);
  const delayRiskPct = Math.max(2, Math.round(paymentDelayChance({creditScore:score})*100 - staffBonus*9));
  const notes = [];
  if(score>=80) notes.push('Sehr gute Bonität: Ausfall ist unwahrscheinlich, aber nicht ausgeschlossen.');
  else if(score>=65) notes.push('Solide Bonität: normale Vertragsüberwachung empfohlen.');
  else if(score>=50) notes.push('Mittlere Bonität: höhere Anzahlung oder kürzere Laufzeit sinnvoll.');
  else notes.push('Schwache Bonität: hohes Risiko für Zahlungsverzug und Mahnwesen.');
  if(price>=60000) notes.push('Hoher Fahrzeugwert: einzelne Ausfälle belasten die Liquidität stärker.');
  if(method==='leasing') notes.push('Leasing: Fahrzeug bleibt verwertbar, Rückgabe-/Schadensrisiko beachten.');
  else notes.push('Finanzierung: Autohaus trägt im erweiterten Modell das laufende Forderungsrisiko.');
  const level = delayRiskPct<=12 ? 'low' : delayRiskPct<=28 ? 'medium' : 'high';
  const label = level==='low' ? 'Genehmigung empfohlen' : level==='medium' ? 'Mit Auflage prüfen' : 'Ablehnung erwägen';
  const color = level==='low' ? 'var(--teal)' : level==='medium' ? 'var(--brass)' : 'var(--crimson)';
  return {approve, conditional, reject: clamp(1-approve-conditional, 0, 1), delayRiskPct, notes, level, label, color};
}
const FINANCING_TERMS = [12,24,36,48,60,72,84,96];
function calcFinancing(price, creditScore, options){
  options = options || {};
  const months = FINANCING_TERMS.includes(Number(options.months)) ? Number(options.months) : (options.months ? clamp(Math.round(options.months), 12, 96) : 60);
  const baseDownPct = clamp(0.24 - (creditScore||60)/520, 0.05, 0.28);
  const downPayment = Math.min(price, Math.max(0, Math.round((options.downPayment!==undefined ? options.downPayment : price*baseDownPct)/10)*10));
  const principal = Math.max(0, price - downPayment);
  const nominalRate = options.annualRate!==undefined
    ? clamp(Number(options.annualRate)||0, 0, 0.22)
    : (options.nominalRate!==undefined ? clamp(Number(options.nominalRate)||0, 0, 0.22) : calculateFinancingRate(options.offer || {creditScore}, price, downPayment, months));
  const monthlyPayment = Math.round(annuity(principal, nominalRate, months));
  const totalRatePayments = monthlyPayment * months;
  const totalCost = totalRatePayments + downPayment;
  const totalInterest = Math.max(0, totalRatePayments - principal);
  const effectiveRate = Math.pow(1+nominalRate/12,12)-1;
  return {type:'finanzierung', downPayment, months, nominalRate, effectiveRate, monthlyPayment, totalCost, principal, totalInterest};
}
function generateFinancingOffers(o, price){
  const credit = o.creditScore||60;
  const income = estimateMonthlyIncome(o);
  const terms = FINANCING_TERMS;
  return terms.map(months=>{
    const preferredDownPct = income<2400 && months>=60 ? 0.08 : (credit>=78 ? 0.12 : 0.16);
    const downPayment = Math.round(price*preferredDownPct/10)*10;
    const calc = calculateFinanceOffer(o, findCar(o.carId), {vehiclePrice:price, months, downPayment});
    return {...calc, bank:calc.bankCheck, customerChance:calc.approvalChance};
  });
}
function renderFinancingOfferCards(offerId, offers){
  const o = state.offers.find(x=>x.id===offerId);
  return `<div class="stat-grid">${offers.map((f,idx)=>`
    <div class="stat-card" style="display:flex;flex-direction:column;gap:8px;">
      <div class="lbl">Angebot ${idx+1}</div>
      <div class="num" style="font-size:17px;">${f.months} Monate</div>
      <div class="subtle" style="margin:0;line-height:1.45;">
        Zinssatz: <b>${(f.nominalRate*100).toFixed(1)}%</b><br>
        Anzahlung: <b>${money(f.downPayment)}</b><br>
        Monatsrate: <b style="color:var(--brass);">${money(f.monthlyPayment)}</b><br>
        Gesamtzahlung: ${money(f.totalCost)}<br>
        Zinsen gesamt: ${money(f.totalInterest)}<br>
        Bank: <span style="color:${f.bank.result==='approved'?'var(--teal)':f.bank.result==='rejected'?'var(--crimson)':'var(--brass)'};">${f.bank.label}</span><br>
        Kundenzustimmung: ${Math.round(f.customerChance*100)}%
      </div>
      ${o?renderFinancingOfferFit(o, f):''}
      <button class="btn btn-primary btn-sm" style="justify-content:center;" onclick="selectFinancingOffer('${offerId}',${idx})">Dieses Angebot senden</button>
    </div>`).join('')}</div>`;
}
function renderFinancingOfferFit(o, financing){
  const evaluation = financeResultFor(o, financing).customerEvaluation;
  const rows = evaluation.results.filter(r=>r.priority!=='pref' || r.status!=='fulfilled').slice(0,5);
  const color = evaluation.mustViolated.length ? 'var(--crimson)' : (evaluation.wishIssues.length ? 'var(--amber)' : 'var(--teal)');
  const label = evaluation.mustViolated.length ? 'Muss verletzt' : (evaluation.wishIssues.length ? 'verhandelbar' : 'passt');
  return `<div style="border-top:1px solid var(--line);padding-top:7px;">
    <b style="color:${color};font-size:11px;">${label}</b>
    <div class="subtle" style="line-height:1.45;margin-top:4px;">${rows.map(r=>`${financingRequirementStatusIcon(r.status)} ${escapeHtml(r.label)}`).join('<br>')}</div>
  </div>`;
}
function showFinancingOfferModal(offerId){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const c = findCar(o.carId); if(!c) return;
  const price = o.amount;
  o.financingOffers = generateFinancingOffers(o, price);
  showModal(`
    <h2 class="section-title">🏦 Finanzierungsangebote für ${o.name}</h2>
    <p class="subtle">${c.brand} ${c.model} · Fahrzeugpreis ${money(price)} · geschätztes Einkommen ${money(estimateMonthlyIncome(o))}/Monat · Bonität ${o.creditScore||60}/100</p>
    ${renderFinancingPriorityPanel(o, null)}
    ${renderFinancingOfferCards(offerId, o.financingOffers)}
  `);
}
function selectFinancingOffer(offerId, index){
  const o = state.offers.find(x=>x.id===offerId); if(!o) return;
  const offers = o.financingOffers || generateFinancingOffers(o, o.amount);
  const financing = offers[index]; if(!financing) return;
  const signature = financingConditionSignature(o.amount, financing);
  o.sentFinancingSignatures = o.sentFinancingSignatures || [];
  if(o.sentFinancingSignatures.includes(signature)){
    notify('Dieses Finanzierungsangebot wurde bereits vorgelegt. Für eine neue Kundenreaktion müssen Preis, Laufzeit, Zinssatz, Rate oder Anzahlung spürbar anders sein.','warn');
    return;
  }
  o.sentFinancingSignatures.push(signature);
  closeModal();
  o.paymentMethod = 'finanzierung';
  o.financingOffer = financing;
  const evaluation = evaluateFinancingPriorities(o, financing);
  const chance = customerFinancingAcceptanceChance(o, financing);
  addMsg(o, 'player', `Ich kann Ihnen folgendes Finanzierungsangebot machen: ${financing.months} Monate, ${(financing.nominalRate*100).toFixed(1)}% Zins, ${money(financing.monthlyPayment)} monatlich bei ${money(financing.downPayment)} Anzahlung.`);
  if(evaluation.mustViolated.length){
    addMsg(o, 'customer', financingCounterProposal(o, financing, evaluation));
    notify(`${o.name} lehnt das Finanzierungsangebot wegen einer Muss-Bedingung ab.`, 'warn');
  } else if(Math.random()<chance){
    addMsg(o, 'customer', financingAcceptanceReply(o, financing, evaluation));
  } else {
    addMsg(o, 'customer', financingCounterProposal(o, financing, evaluation));
    notify(`${o.name} macht einen Gegenvorschlag zu den Finanzierungskonditionen.`, 'info');
  }
  renderAllOpen(); scheduleSave();
}
function calcLeasing(price, creditScore, options){
  options = options || {};
  const months = [24,36,48,60].includes(Number(options.months)) ? Number(options.months) : choice([24,36,48]);
  const mileage = choice([10000,15000,20000,30000]);
  const residualPct = clamp(0.55 - months/300, 0.35, 0.6);
  const residual = Math.round(price*residualPct);
  const specialPayment = Math.max(0, Math.min(price, Math.round((options.specialPayment!==undefined ? options.specialPayment : price*0.1)/10)*10));
  const financeCharge = price*0.0025;
  const leaseRate = Math.round((price-specialPayment-residual)/months + financeCharge);
  return {type:'leasing', months, mileage, residual, specialPayment, leaseRate};
}
function xpForLevel(level){
  level = Math.max(1, Math.round(level||1));
  if(level < 10) return Math.round(80 + level*28);
  if(level < 20){
    const n = level - 10;
    return Math.round(360 + n*55 + n*n*5);
  }
  const n = level - 20;
  return Math.round(1100 + n*90 + n*n*8);
}
function addXp(amount, source){
  const startLevel = state.level||1;
  state.xp = (state.xp||0)+amount;
  let leveled = false;
  while(state.xp >= xpForLevel(state.level||1)){
    state.xp -= xpForLevel(state.level||1);
    state.level = (state.level||1)+1;
    leveled = true;
  }
  if(leveled && (state.level||1) > startLevel && (state.level||1) < 30){
    notify(`Level ${state.level} erreicht${source==='passiv'?' durch automatische Erfahrung':''}.`, 'good');
  }
  if(leveled && startLevel < 30 && (state.level||1) >= 30 && !legacyState().masterUnlocked){
    notify('Level 30 erreicht: Sie können Ihr Unternehmen jetzt freiwillig bewerten und eine neue Legacy gründen.', 'good');
    showToast('L', '<b>Legacy verfügbar</b><br>Level 30 erreicht. Der Unternehmensverkauf ist freiwillig und startet erst nach Ihrer Bestätigung.', 'Bewertung öffnen', ()=>openLegacyReview());
  }
  refreshProgressChrome();
  return leveled;
}
function computeXpGain(profit){
  let xp = 45;
  if(profit>0) xp += Math.min(220, Math.round(profit/70));
  else xp += 12;
  return Math.max(28, xp);
}
function passiveXpForDay(){
  const level = state.level||1;
  const inventoryXp = Math.min(18, (state.inventory||[]).length*3);
  const listingXp = Math.min(14, Object.keys(state.listings||{}).length*3);
  const contractXp = Math.min(14, activeContractCount()*3);
  const employeeXp = Math.min(10, (state.employees||[]).length*2);
  const reputationXp = (state.reputation||0) >= 75 ? 7 : (state.reputation||0) >= 65 ? 4 : 0;
  const earlyBoost = level < 10 ? 18 : level < 20 ? 10 : level < 30 ? 5 : 0;
  return Math.max(18, Math.round(18 + earlyBoost + inventoryXp + listingXp + contractXp + employeeXp + reputationXp));
}
function achievementColor(rarity){
  return ({common:'#d4af6a', rare:'#2fb87c', epic:'#8b7ff0', legendary:'#ef5da8'})[rarity||'common'] || '#d4af6a';
}
function achievementRarityLabel(rarity){
  return ({common:'Meilenstein', rare:'Seltener Erfolg', epic:'Epischer Erfolg', legendary:'Legendär'})[rarity||'common'] || 'Meilenstein';
}
function checkAchievements(){
  if(!state.achievements) state.achievements = [];
  const newly = [];
  ACHIEVEMENTS.forEach(a=>{
    if(!state.achievements.includes(a.id) && a.check(state)){
      state.achievements.push(a.id);
      if(a.xp) addXp(a.xp);
      a.unlockedDay = state.day;
      newly.push(a);
    }
  });
  return newly;
}
function showAchievementUnlocks(list){
  if(!list || !list.length) return;
  list.forEach((a,i)=>setTimeout(()=>showAchievementPopup(a), i*650));
}
function showAchievementPopup(a){
  let stack = document.querySelector('.achievement-stack');
  if(!stack){
    stack = document.createElement('div');
    stack.className = 'achievement-stack';
    document.body.appendChild(stack);
  }
  const el = document.createElement('div');
  const color = achievementColor(a.rarity);
  el.className = 'achievement-popup';
  el.style.setProperty('--ach', color);
  el.innerHTML = `
    <div class="achievement-icon">${a.icon}</div>
    <div class="achievement-copy">
      <div class="achievement-kicker">${achievementRarityLabel(a.rarity)} freigeschaltet</div>
      <div class="achievement-title">${a.label}</div>
      <div class="achievement-desc">${a.desc}</div>
      ${a.xp?`<span class="achievement-xp">+${a.xp} XP</span>`:''}
    </div>`;
  stack.appendChild(el);
  playSound('achievement');
  setTimeout(()=>{ if(el.parentNode) el.remove(); }, 5400);
}
function customerReaction(paid, offered){
  const ratio = paid/Math.max(1,offered);
  if(ratio<=1.03) return {emoji:'😄', text:'Kunde ist begeistert – ein fairer Deal!'};
  if(ratio<=1.12) return {emoji:'🙂', text:'Kunde ist zufrieden mit dem Abschluss.'};
  if(ratio<=1.25) return {emoji:'😐', text:'Kunde ist neutral – hätte gerne mehr Rabatt gehabt.'};
  return {emoji:'😒', text:'Kunde ist unzufrieden mit dem Preis.'};
}
function playSound(type){
  try{
    const ctx = window._audioCtx || (window._audioCtx = new (window.AudioContext||window.webkitAudioContext)());
    const seq = type==='achievement' ? [659.25,783.99,987.77,1318.51] : (type==='sale' ? [523.25,659.25,783.99,1046.5] : [523.25,659.25]);
    seq.forEach((freq,i)=>{
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type='sine'; o.frequency.value=freq;
      o.connect(g); g.connect(ctx.destination);
      const t = ctx.currentTime + i*0.09;
      g.gain.setValueAtTime(0.0001,t);
      g.gain.exponentialRampToValueAtTime(0.16, t+0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t+0.26);
      o.start(t); o.stop(t+0.28);
    });
  }catch(e){ /* Audio evtl. nicht verfügbar – ignorieren */ }
}

function roleMeta(role){ return EMP_ROLES.find(r=>r.role===role) || EMP_ROLES[0]; }
function normalizeEmployee(e){
  const skill = e.skill ?? e.efficiency ?? randInt(35,78);
  e.level = e.level || Math.max(1, Math.floor(skill/25));
  e.experience = e.experience || 0;
  e.motivation = e.motivation ?? randInt(58,92);
  e.efficiency = e.efficiency ?? clamp(Math.round(skill*0.68 + e.motivation*0.22 + e.level*4), 30, 99);
  e.errorRate = e.errorRate ?? clamp(Math.round(18 - e.efficiency/8 + randInt(-2,5)), 2, 24);
  e.satisfaction = e.satisfaction ?? randInt(58,88);
  e.specialization = e.specialization || roleMeta(e.role).spec;
  e.personality = e.personality || choice(EMP_PERSONALITIES);
  e.strength = e.strength || choice(EMP_STRENGTHS);
  e.weakness = e.weakness || choice(EMP_WEAKNESSES);
  return e;
}
function employeeEffectValue(e){
  normalizeEmployee(e);
  const base = (e.efficiency||0)*0.52 + (e.motivation||0)*0.22 + (e.satisfaction||0)*0.12 + (e.level||1)*6 - (e.errorRate||0)*1.3;
  return clamp(base/100, 0.04, 1.15);
}
function employeeBonus(role){
  const aliases = {Marketing:'Marketing-Manager'};
  const target = aliases[role] || role;
  const emps = (state.employees||[]).filter(e=>e.role===target || e.role===role).map(normalizeEmployee);
  if(!emps.length) return 0;
  const total = emps.reduce((s,e)=>s+employeeEffectValue(e),0);
  return clamp(total, 0, 0.85);
}
function trainEmployees(role, xp, reason){
  const emps = (state.employees||[]).filter(e=>e.role===role).map(normalizeEmployee);
  emps.forEach(e=>{
    e.experience += xp;
    e.motivation = clamp((e.motivation||70)+1, 25, 100);
    e.satisfaction = clamp((e.satisfaction||70)+0.5, 25, 100);
    while(e.experience >= e.level*100){
      e.experience -= e.level*100;
      e.level += 1;
      e.efficiency = clamp((e.efficiency||60)+randInt(2,5), 30, 100);
      e.errorRate = clamp((e.errorRate||10)-1, 1, 30);
      notify(`${e.name} (${e.role}) ist auf Level ${e.level} aufgestiegen${reason?' – '+reason:''}.`, 'good');
    }
  });
}
function candidateSalary(role, efficiency, experience){
  const premium = ['Business-Analyst','Finanzierungsberater','Leasingberater','Fuhrpark-/Lieferkoordinator'].includes(role) ? 1.10 : 1;
  const daily = (26 + efficiency*0.46 + experience*1.6) * premium;
  return Math.round(clamp(daily, 38, 92) / 2) * 2;
}
function generateCandidate(){
  const role = choice(EMP_ROLES).role;
  const experience = randInt(1,5);
  const motivation = randInt(45,96);
  const efficiency = clamp(randInt(32,86) + experience*3, 25, 98);
  const errorRate = clamp(randInt(4,22) - experience, 2, 28);
  const salary = candidateSalary(role, efficiency, experience);
  return {
    id: uid('cand'), role, name: choice(FIRSTNAMES)+' '+choice(LASTNAMES),
    salary, experience, motivation, efficiency, errorRate,
    level: Math.max(1, Math.floor((efficiency+experience*6)/35)),
    satisfaction: randInt(55,88), specialization: roleMeta(role).spec,
    personality: choice(EMP_PERSONALITIES), strength: choice(EMP_STRENGTHS), weakness: choice(EMP_WEAKNESSES),
  };
}
function ensureCandidates(){
  state.candidates = state.candidates || [];
  state.employees = state.employees || [];
  state.employees.forEach(normalizeEmployee);
  state.candidates.forEach(normalizeEmployee);
  while(state.candidates.length<6) state.candidates.push(generateCandidate());
}
function employeeImpactSummary(){
  const roles = EMP_ROLES.map(r=>({role:r.role, count:(state.employees||[]).filter(e=>e.role===r.role).length, icon:r.icon}));
  return roles.filter(r=>r.count).map(r=>`${r.icon} ${r.role}: ${r.count}`).join(' · ') || 'Noch keine Rollen besetzt';
}
function employeeCard(e, candidate){
  normalizeEmployee(e);
  const meta = roleMeta(e.role);
  const xpNeed = Math.max(100, e.level*100);
  const xpPct = clamp(Math.round((e.experience||0)/xpNeed*100),0,100);
  return `<div class="offer-card" style="display:grid;grid-template-columns:46px minmax(0,1fr) auto;gap:12px;align-items:start;">
    <div class="avatar">${meta.icon}</div>
    <div style="min-width:0;">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <b style="font-size:13.5px;">${escapeHtml(e.name)}</b>
        <span class="chip">${meta.icon} ${e.role}</span>
        <span class="chip">Level ${e.level}</span>
      </div>
      <p class="subtle" style="margin:6px 0 8px;">${meta.desc}</p>
      <div class="stat-grid" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;margin:0;">
        <div class="stat-card"><div class="lbl">Gehalt/Monat</div><div class="num" style="font-size:15px;">${money((e.salary||0)*30)}</div></div>
        <div class="stat-card"><div class="lbl">Motivation</div><div class="num" style="font-size:15px;">${Math.round(e.motivation)}%</div></div>
        <div class="stat-card"><div class="lbl">Effizienz</div><div class="num" style="font-size:15px;">${Math.round(e.efficiency)}%</div></div>
        <div class="stat-card"><div class="lbl">Fehlerquote</div><div class="num" style="font-size:15px;color:${e.errorRate>16?'var(--red)':'var(--teal)'};">${Math.round(e.errorRate)}%</div></div>
      </div>
      <div class="progress" style="margin-top:10px;"><div style="width:${xpPct}%;"></div></div>
      <div class="subtle" style="margin-top:7px;">${escapeHtml(e.specialization)} · ${escapeHtml(e.personality)} · Stärke: ${escapeHtml(e.strength)} · Schwäche: ${escapeHtml(e.weakness)}</div>
    </div>
    <div class="row-actions" style="margin:0;justify-content:flex-end;">
      ${candidate ? `<button class="btn btn-ghost btn-sm" onclick="rejectCandidate('${e.id}')">Ablehnen</button><button class="btn btn-primary btn-sm" onclick="hireEmployee('${e.id}')">Einstellen</button>` : `<button class="btn btn-danger btn-sm" onclick="fireEmployee('${e.id}')">Entlassen</button>`}
    </div>
  </div>`;
}
function renderEmployees(){
  ensureCandidates();
  const totalSalary = (state.employees||[]).reduce((s,e)=>s+(e.salary||0),0);
  const avgMotivation = Math.round(avg(state.employees||[], e=>e.motivation||0) || 0);
  const avgEfficiency = Math.round(avg(state.employees||[], e=>e.efficiency||0) || 0);
  const avgError = Math.round(avg(state.employees||[], e=>e.errorRate||0) || 0);
  const nextPayrollIn = Math.max(0, 30 - ((state.day||1) - (state.lastEmployeePayrollDay||state.day||1)));
  const workload = Math.min(100, Math.round(((state.offers||[]).length + (state.workshopJobs||[]).length + activeClaims().length + (state.deliveries||[]).filter(d=>d.status==='active').length) / Math.max(1,(state.employees||[]).length*2) * 100));
  return `
    <h2 class="section-title">Mitarbeiter</h2>
    <p class="subtle">Teamsteuerung mit echten Effekten auf Verkauf, Ankauf, Werkstatt, Finanzierung, Leasing, Marketing, Mahnwesen, Business Insights und Lieferungen.</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Mitarbeiter</div><div class="num">${(state.employees||[]).length}</div></div>
      <div class="stat-card"><div class="lbl">Gehaltskosten/Monat</div><div class="num">${money(totalSalary*30)}</div></div>
      <div class="stat-card"><div class="lbl">Nächste Auszahlung</div><div class="num">${nextPayrollIn} T</div></div>
      <div class="stat-card"><div class="lbl">Motivation Ø</div><div class="num">${avgMotivation||'–'}%</div></div>
      <div class="stat-card"><div class="lbl">Effizienz Ø</div><div class="num">${avgEfficiency||'–'}%</div></div>
      <div class="stat-card"><div class="lbl">Fehlerquote Ø</div><div class="num" style="color:${avgError>16?'var(--red)':'var(--teal)'};">${avgError||'–'}%</div></div>
      <div class="stat-card"><div class="lbl">Auslastung</div><div class="num">${workload}%</div></div>
    </div>
    <div class="offer-card"><b>Rollenverteilung</b><p class="subtle" style="margin:6px 0 0;">${employeeImpactSummary()}</p></div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 10px;">Aktuelle Mitarbeiter</h3>
    ${(state.employees||[]).length? state.employees.map(e=>employeeCard(e,false)).join('') : '<div class="empty-state"><div class="ic">MA</div>Noch keine Mitarbeiter eingestellt.</div>'}
    <h3 style="font-family:var(--font-d);font-size:13px;margin:20px 0 10px;">Offene Bewerbungen</h3>
    ${(state.candidates||[]).map(c=>employeeCard(c,true)).join('')}
  `;
}
function hireEmployee(id){
  const idx = state.candidates.findIndex(c=>c.id===id);
  if(idx<0) return;
  const c = normalizeEmployee(state.candidates[idx]);
  state.employees.push({...c, id:uid('emp')});
  state.candidates.splice(idx,1);
  ensureCandidates();
  notify(c.name+' wurde als '+c.role+' eingestellt.', 'good');
  renderAllOpen(); scheduleSave();
}
function rejectCandidate(id){
  state.candidates = (state.candidates||[]).filter(c=>c.id!==id);
  ensureCandidates();
  renderAllOpen(); scheduleSave();
}
function fireEmployee(id){
  state.employees = state.employees.filter(e=>e.id!==id);
  renderAllOpen(); scheduleSave();
}

/* =============================== LEGACY =============================== */
function renderLegacyScoreBars(index){
  return `<div class="legacy-bars">${index.categories.map(c=>`
    <div class="legacy-score-row">
      <div class="name">${c.label}</div>
      <div class="legacy-progress"><span style="--w:${(c.points/c.max*100).toFixed(1)}%;"></span></div>
      <div class="pts">${c.points.toFixed(1)}/${c.max}</div>
    </div>
  `).join('')}</div>`;
}
function renderLegacyExplanation(){
  return `
    <div class="legacy-explain-shell">
      <div class="legacy-explain-head">
        <span class="legacy-explain-icon">L</span>
        <div>
          <h3>Was ist Legacy?</h3>
          <p>Legacy fasst den freiwilligen Unternehmensabschluss zusammen und bewertet den Durchlauf anhand echter Spielstandsdaten.</p>
        </div>
      </div>
      <div class="legacy-explain">
        <div class="notice"><b>Was ist eine Legacy?</b><br>Eine neue Unternehmensgründung nach dem freiwilligen Verkauf Ihres Level-30-Autohauses.</div>
        <div class="notice"><b>Unternehmenswert</b><br>Er entsteht aus realen Spieldaten: Kapital, Gewinn, Bestand, Verträgen, Bewertungen und Organisation.</div>
        <div class="notice"><b>Startkapital</b><br>Die nächste Gründung startet mit 10% des berechneten Unternehmenswerts.</div>
        <div class="notice"><b>Erfolgsquote</b><br>Der Unternehmensindex hat maximal 100 Punkte und misst die Qualität dieses Durchlaufs.</div>
        <div class="notice"><b>Legacy-Score</b><br>Der Durchschnitt aller abgeschlossenen Erfolgsquoten. Er ändert sich nur beim Abschluss.</div>
        <div class="notice"><b>Fairness</b><br>Zahlungsausfälle werden nicht direkt bestraft. Bewertet wird, ob Mahnwesen und Verträge professionell geführt wurden.</div>
        <div class="notice"><b>Mahngebühren</b><br>Im Spiel zählen Ihre eingestellten Gebühren. Für Legacy werden Zusatzeinnahmen über Standardgebühren automatisch abgezogen.</div>
      </div>
    </div>
  `;
}
function renderLegacyPreview(valuation, legacyReady){
  const level = state.level||1;
  const levelPct = clamp(Math.round(level/30*100),0,100);
  return `
    <h2 class="section-title">Legacy-Historie</h2>
    <p class="subtle">Erste Gr&uuml;ndung &middot; Level ${level} / 30 &middot; Legacy wird ab Level 30 freigeschaltet.</p>
    <div class="offer-card" style="margin:14px 0 16px;padding:18px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:18px;flex-wrap:wrap;">
        <div style="flex:1;min-width:240px;">
          <h3 style="margin:0;font-family:var(--font-d);font-size:16px;">Du hast deine erste Legacy noch nicht erreicht.</h3>
          <p class="subtle" style="margin:8px 0 0;">Baue dein Autohaus bis Level 30 auf. Danach kannst du freiwillig einen Legacy-Neustart starten und mit einem Teil deines Unternehmenswerts in die n&auml;chste Generation gehen.</p>
        </div>
        ${legacyReady ? `<button class="btn btn-primary" onclick="openLegacyReview()">Legacy starten</button>` : `<span class="chip">Freischaltung ab Level 30</span>`}
      </div>
      <div style="margin-top:18px;">
        <div style="display:flex;justify-content:space-between;gap:12px;font-size:12px;color:var(--ink-1);font-weight:700;">
          <span>Aktueller Fortschritt</span>
          <span>Level ${level} / 30</span>
        </div>
        <div class="progress" style="height:12px;margin-top:10px;"><div style="width:${levelPct}%;background:linear-gradient(90deg,var(--dash-blue),var(--brass));"></div></div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Aktueller Unternehmenswert</div><div class="num">${money(valuation.value)}</div></div>
      <div class="stat-card"><div class="lbl">Aktuelle Erfolgsquote</div><div class="num">${valuation.index.successRate}%</div></div>
      <div class="stat-card"><div class="lbl">M&ouml;gliches Startkapital</div><div class="num">${money(valuation.nextCapital)}</div></div>
      <div class="stat-card"><div class="lbl">Freischaltung</div><div class="num">${legacyReady ? 'Bereit' : 'Level 30'}</div></div>
    </div>
    <div class="offer-card" style="margin:14px 0;">
      <h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Aktueller Unternehmensindex</h3>
      ${renderLegacyScoreBars(valuation.index)}
      <p class="subtle">Diese Werte basieren bereits auf deinem echten Spielstand. Sie werden erst beim freiwilligen Legacy-Neustart dauerhaft in der Historie gespeichert.</p>
    </div>
    ${renderLegacyExplanation()}
  `;
}
function renderLegacyHistory(){
  const l = legacyState();
  const valuation = companyValuation();
  const done = l.completed || [];
  const projectedScore = done.length ? currentLegacyScore() : 0;
  const legacyStarted = hasLegacyRun();
  const legacyReady = (state.level||1) >= 30 && !l.masterUnlocked;
  if(!legacyStarted) return renderLegacyPreview(valuation, legacyReady);
  const pageTitle = 'Legacy-Historie';
  const scoreLabel = legacyStarted ? 'Legacy-Score' : 'Gr&uuml;ndungsindex';
  const nextCapitalLabel = legacyStarted || legacyReady ? 'Startkapital n&auml;chste Legacy' : 'Startkapital n&auml;chste Gr&uuml;ndung';
  return `
    <h2 class="section-title">${pageTitle}</h2>
    <p class="subtle">${legacyLabel()} &middot; Level ${state.level||1} &middot; aktuelle Erfolgsquote ${valuation.index.successRate}% &middot; ${scoreLabel} ${legacyStarted ? (projectedScore||'--')+'%' : Math.round(valuation.index.total||0)+'%'}</p>
    <div class="stat-grid">
      <div class="stat-card"><div class="lbl">Wert vor Bereinigung</div><div class="num">${money(valuation.rawValue)}</div></div>
      <div class="stat-card"><div class="lbl">Nicht bewertete Mahngebühren</div><div class="num" style="color:${valuation.dunningFeeAdjustment>0?'var(--red)':'var(--ink-1)'};">${negativeMoney(valuation.dunningFeeAdjustment)}</div></div>
      <div class="stat-card"><div class="lbl">Bewertungsrelevanter Wert</div><div class="num">${money(valuation.value)}</div></div>
      <div class="stat-card"><div class="lbl">${nextCapitalLabel}</div><div class="num">${money(valuation.nextCapital)}</div></div>
      <div class="stat-card"><div class="lbl">Unternehmensindex</div><div class="num">${valuation.index.successRate}%</div></div>
      <div class="stat-card"><div class="lbl">${scoreLabel}</div><div class="num">${legacyStarted ? (projectedScore?projectedScore+'%':'--') : Math.round(valuation.index.total||0)+'%'}</div></div>
    </div>
    <div class="offer-card" style="margin:14px 0;">
      <h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Aktueller Unternehmensindex</h3>
      ${renderLegacyScoreBars(valuation.index)}
      ${legacyReady ? `<button class="btn btn-primary" onclick="openLegacyReview()">Legacy starten</button>` : `<p class="subtle">${legacyStarted ? 'Legacy kann ab Level 30 freiwillig gestartet werden.' : 'Der freiwillige Unternehmensverkauf wird ab Level 30 freigeschaltet.'}</p>`}
    </div>
    ${done.length ? `
      <div class="offer-card">
        <h3 style="margin-top:0;font-family:var(--font-d);font-size:13px;">Abgeschlossene Unternehmensgründungen</h3>
        <table class="tbl legacy-history-table">
          <thead><tr><th>Legacy</th><th>Wert</th><th>Mahn-Abzug</th><th>Startkapital</th><th>Quote</th><th>Score</th><th>Gewinn</th><th>Verkäufe</th><th>Marge</th><th>Zufriedenheit</th><th>Spielzeit</th></tr></thead>
          <tbody>${done.map(x=>`<tr>
            <td>${x.label}</td><td>${money(x.companyValue)}</td><td>${negativeMoney(x.dunningFeeAdjustment||0)}</td><td>${money(x.nextCapital)}</td><td>${x.successRate}%</td><td>${x.legacyScore}%</td>
            <td>${money(x.totalProfit)}</td><td>${x.salesCount}</td><td>${(x.avgMargin||0).toFixed(1)}%</td><td>${x.reputation}/100</td><td>${x.daysPlayed} Tage</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>` : `<div class="empty-state"><div class="ic">L</div>Noch kein Unternehmensverkauf abgeschlossen.</div>`}
    ${(legacyStarted || legacyReady) ? renderLegacyExplanation() : ''}
  `;
}
function openLegacyReview(){
  if((state.level||1) < 30){ notify('Legacy ist ab Level 30 verfügbar.', 'warn'); return; }
  const l = legacyState();
  const v = companyValuation();
  const nextScore = legacyScoreAfter(v.index.successRate);
  const firstExplain = !l.explained ? renderLegacyExplanation() : '';
  showModal(`
    <div class="legacy-hero">
      <div class="legacy-kicker">Unternehmensverkauf vorbereitet</div>
      <h2 class="legacy-title">${legacyLabel()} abschließen</h2>
      <p class="legacy-sub">Sie verkaufen Ihr aufgebautes Autohaus und gründen mit Ihrer Erfahrung ein neues Unternehmen. Der Neustart erfolgt freiwillig und basiert vollständig auf Ihren aktuellen Kennzahlen.</p>
    </div>
    <div class="legacy-body">
      <div class="legacy-grid">
        <div class="legacy-metric"><div class="lbl">Wert vor Bereinigung</div><div class="val">${money(v.rawValue)}</div></div>
        <div class="legacy-metric"><div class="lbl">Nicht bewertete Mahngebühren</div><div class="val" style="color:${v.dunningFeeAdjustment>0?'var(--red)':'var(--ink-1)'};">${negativeMoney(v.dunningFeeAdjustment)}</div></div>
        <div class="legacy-metric"><div class="lbl">Bewertungsrelevanter Wert</div><div class="val" id="legacyValue">0 €</div></div>
        <div class="legacy-metric"><div class="lbl">Startkapital nächste Gründung</div><div class="val">${money(v.nextCapital)}</div></div>
        <div class="legacy-metric"><div class="lbl">Abschluss-Erfolgsquote</div><div class="val">${v.index.successRate}%</div></div>
        <div class="legacy-metric"><div class="lbl">Legacy-Score danach</div><div class="val">${nextScore}%</div></div>
      </div>
      <div class="notice" style="display:block;">
        Für die Legacy-Bewertung werden immer die Standard-Mahngebühren verwendet. Zusatzeinnahmen aus höheren Gebühren bleiben im normalen Spiel erhalten, erhöhen aber Unternehmenswert, Erfolgsquote und Legacy-Score nicht.
      </div>
      ${renderLegacyScoreBars(v.index)}
      <div class="stat-grid">
        <div class="stat-card"><div class="lbl">Eigenkapital</div><div class="num">${money(v.equity)}</div></div>
        <div class="stat-card"><div class="lbl">Gesamtgewinn</div><div class="num">${money(state.totalProfit||0)}</div></div>
        <div class="stat-card"><div class="lbl">Fahrzeugverkäufe</div><div class="num">${state.salesCount||0}</div></div>
        <div class="stat-card"><div class="lbl">Ø Marge</div><div class="num">${(v.avgMargin||0).toFixed(1)}%</div></div>
        <div class="stat-card"><div class="lbl">Ø Standzeit</div><div class="num">${Math.round(v.avgStand||0)} Tage</div></div>
        <div class="stat-card"><div class="lbl">Kundenzufriedenheit</div><div class="num">${state.reputation||0}/100</div></div>
      </div>
      ${firstExplain}
      <div class="row-actions" style="margin-top:16px;justify-content:flex-end;">
        <button class="btn btn-ghost" onclick="closeModal()">Noch nicht verkaufen</button>
        <button class="btn btn-primary" onclick="confirmLegacyStart()">Unternehmen verkaufen</button>
      </div>
    </div>
  `, 'legacy-modal');
  animateCelebrationNumber('legacyValue', v.value);
  playSound('achievement');
}
async function confirmLegacyStart(){
  const l = legacyState();
  const v = companyValuation();
  const completedLabel = legacyLabel();
  const completedCount = (l.completed||[]).length;
  const entry = {
    id: uid('legacy'), legacy: completedCount, label: completedLabel, day: state.day,
    rawCompanyValue: v.rawValue, dunningFeeAdjustment: v.dunningFeeAdjustment,
    companyValue: v.value, nextCapital: v.nextCapital, successRate: v.index.successRate,
    legacyScore: legacyScoreAfter(v.index.successRate), totalProfit: state.totalProfit||0,
    salesCount: state.salesCount||0, avgMargin: v.avgMargin||0, reputation: state.reputation||0,
    avgStars: v.avgStars||0, daysPlayed: Math.max(1,state.day-(l.startedAtDay||1)+1),
    recurring: v.recurring, contracts: activeContractCount(), claimsRecovered: state.claimsRecovered||0,
    indexCategories: v.index.categories.map(c=>({label:c.label, points:c.points, max:c.max})),
  };
  const keepTheme = state.themeMode;
  const keepBackground = getAppBackground(state.backgroundId).id;
  const keepDesign = {...designSettings()};
  const completed = (l.completed||[]).concat(entry);
  const nextLegacy = (l.current||0) + 1;
  const masterUnlocked = nextLegacy > 10;
  state = defaultState();
  state.themeMode = keepTheme;
  state.backgroundId = keepBackground;
  state.designSettings = keepDesign;
  state.cash = masterUnlocked ? Math.max(v.nextCapital, 1000000) : v.nextCapital;
  state.level = masterUnlocked ? 1000 : 1;
  state.legacy = {
    current: masterUnlocked ? 10 : nextLegacy,
    completed,
    explained: true,
    foundingCapital: state.cash,
    startedAtDay: 1,
    masterUnlocked,
  };
  dayElapsedMs = 0;
  priceElapsedMs = 0;
  refreshMarketPool();
  seedInitialInventory();
  state.cashHistory.push({day:1, cash:state.cash, net:0});
  notify(masterUnlocked ? 'Master-Modus freigeschaltet. Level 1000 ist spielbar.' : `${completedLabel} abgeschlossen. Neues Unternehmen gegründet.`, 'good');
  await saveNow();
  closeModal();
  renderAllOpen();
  navigateTo('legacy');
  showToast('L', `<b>${completedLabel} abgeschlossen</b><br>Unternehmenswert: ${money(entry.companyValue)}<br>Neues Startkapital: ${money(entry.nextCapital)}<br>Legacy-Score: ${entry.legacyScore}%`, 'Historie', ()=>navigateTo('legacy'));
}

/* =============================== SETTINGS =============================== */
function renderBackgroundSelector(){
  const activeId = getAppBackground(state.backgroundId).id;
  return `
    <div class="background-grid">
      ${APP_BACKGROUNDS.map((bg,index)=>`
        <button type="button" class="background-card ${bg.id===activeId?'active':''}" onclick="setAppBackground('${escapeAttr(bg.id)}')" aria-label="Hintergrund ${index+1} ausw&auml;hlen">
          <div class="background-preview ${bg.url?'':'default'}" style="${bg.url?`background-image:url('${escapeAttr(bg.url)}')`:''}"></div>
          <div class="background-check">${bg.id===activeId?'&#10003;':''}</div>
        </button>
      `).join('')}
    </div>
  `;
}
function renderDesignControl(key, label, desc){
  const value = pct(designSettings()[key]);
  return `
    <div class="design-control">
      <div class="design-control-head">
        <b>${escapeHtml(label)}</b>
        <span id="design_${key}_value">${value}%</span>
      </div>
      <input type="range" min="0" max="100" step="1" value="${value}" oninput="setDesignSetting('${key}', this.value)">
      <p>${escapeHtml(desc)}</p>
    </div>
  `;
}
function renderDesign(){
  const active = getAppBackground(state.backgroundId);
  const ds = designSettings();
  return `
    <h2 class="section-title">Design</h2>
    <p class="subtle">Zentrale Verwaltung für Hintergründe, Glasoptik, Transparenz, Animationen und zukünftige Themes.</p>
    <div class="design-hero offer-card">
      <div>
        <div class="design-kicker">Aktives Erscheinungsbild</div>
        <h3>Ausgew&auml;hlter Hintergrund</h3>
        <p class="subtle" style="margin:4px 0 0;">Die Auswahl wird sofort angewendet und automatisch gespeichert.</p>
      </div>
      <span class="pill">${escapeHtml(APP_BACKGROUNDS.length)} Hintergründe</span>
    </div>
    <div class="design-section offer-card">
      <div class="offer-head">
        <div>
          <b>Hintergründe</b>
          <p class="subtle" style="margin:4px 0 0;">Galerieansicht für aktuelle und zukünftige Hintergrundbilder.</p>
        </div>
        <span class="pill">${escapeHtml(APP_BACKGROUNDS.findIndex(bg=>bg.id===active.id)+1)} / ${escapeHtml(APP_BACKGROUNDS.length)}</span>
      </div>
      <div class="design-gallery-scroll">
        ${renderBackgroundSelector()}
      </div>
    </div>
    <div class="design-section offer-card">
      <div class="offer-head">
        <div>
          <b>Oberflächen-Anpassung</b>
          <p class="subtle" style="margin:4px 0 0;">Live-Vorschau ohne Übernehmen-Button. Aktuell: ${ds.uiTransparency}% Transparenz, ${ds.glassStrength}% Glasoptik.</p>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="resetDesignSettings()">Standard wiederherstellen</button>
      </div>
      <div class="design-controls">
        ${renderDesignControl('uiTransparency','UI-Transparenz','Steuert, wie stark die Hintergrundbilder durch Panels, Karten und Fenster sichtbar bleiben.')}
        ${renderDesignControl('glassStrength','Glasoptik','Regelt Blur, Materialtiefe, Lichtreflexe und die hochwertige Glassmorphism-Wirkung.')}
        ${renderDesignControl('backgroundOverlay','Hintergrund-Abdunklung','Bestimmt, wie stark der Hintergrund für bessere Lesbarkeit abgedunkelt wird.')}
        ${renderDesignControl('backgroundBlur','Hintergrundunschärfe','Macht das Hintergrundbild hinter der UI weicher oder komplett scharf.')}
      </div>
    </div>
    <div class="design-section-grid">
      <div class="offer-card">
        <div class="design-kicker">Vorbereitet</div>
        <b>Weitere Materialoptionen</b>
        <p class="subtle" style="margin:6px 0 0;">Hier können später Glasstärke, Blur und Materialwirkung fein gesteuert werden.</p>
      </div>
      <div class="offer-card">
        <div class="design-kicker">Vorbereitet</div>
        <b>Farbschema & Animationen</b>
        <p class="subtle" style="margin:6px 0 0;">Zukünftige Themes, Akzentfarben und Bewegungsoptionen finden hier ihren Platz.</p>
      </div>
    </div>
  `;
}
/* =============================== UPDATES & NEWS =============================== */
function sortedChangelog(){
  return CHANGELOG.slice().sort((a,b)=>{
    if(!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    const vd = cmpVersion(b.version, a.version);
    if(vd) return vd;
    return String(b.date||'').localeCompare(String(a.date||''));
  });
}
function updateTypeMeta(type){
  return UPDATE_TYPES[type] || UPDATE_TYPES.normal;
}
function fmtUpdateDate(iso){
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime()) ? escapeHtml(iso||'') : d.toLocaleDateString('de-DE', {day:'2-digit', month:'2-digit', year:'numeric'});
}
function renderUpdateColumns(entry, showEmpty){
  const s = entry.sections || {};
  const cols = [
    {kind:'new',      label:'Neu',        icon:UPD_SVG.plus,    items:s.new,      empty:'Keine neuen Inhalte'},
    {kind:'improved', label:'Verbessert', icon:UPD_SVG.arrowUp, items:s.improved, empty:'Keine Verbesserungen'},
    {kind:'fixed',    label:'Behoben',    icon:UPD_SVG.wrench,  items:s.fixed,    empty:'Keine Fehlerbehebungen'},
  ];
  const rendered = cols
    .filter(c=>showEmpty || (c.items && c.items.length))
    .map(c=>`<div class="upd-col ${c.kind}">
      <div class="upd-col-head"><span class="cic">${c.icon}</span><b>${c.label}</b></div>
      <div class="upd-col-line"></div>
      <ul>${(c.items && c.items.length)
        ? c.items.map(t=>`<li>${escapeHtml(t)}</li>`).join('')
        : `<li class="none">${c.empty}</li>`}</ul>
    </div>`).join('');
  return rendered ? `<div class="upd-cols">${rendered}</div>` : '<div class="upd-empty">Keine Details zu dieser Version hinterlegt.</div>';
}
// Kompakte Variante für das Willkommensfenster (leere Spalten ausgeblendet).
function renderChangelogSections(entry){
  return renderUpdateColumns(entry, false);
}
function updateCardArt(index){
  const dynamicBackgrounds = APP_BACKGROUNDS.filter(bg=>bg && bg.url);
  if(!dynamicBackgrounds.length) return '';
  return dynamicBackgrounds[Math.abs(index) % dynamicBackgrounds.length].url;
}
function renderUpdateCard(entry, index){
  const meta = updateTypeMeta(entry.type);
  const isMajor = entry.type === 'major';
  const isPinned = !!entry.pinned;
  const art = entry.image || updateCardArt(index);
  const sub = entry.headline || (!isMajor && entry.title ? entry.title : '');
  const artStyle = art ? ` style="background-image:url('${escapeAttr(art)}')"` : '';
  return `<div class="upd-card ${isMajor?'upd-major':''} ${isPinned?'upd-pinned':''}" style="--i:${Math.min(index,8)};--upd-accent:${meta.accent}">
    <div class="upd-art"${artStyle}>
      <span class="upd-ribbon">${escapeHtml(isPinned ? 'Highlight' : meta.ribbon)}</span>
    </div>
    <div class="upd-body">
      <div class="upd-head">
        <span class="upd-type-ic">${UPD_SVG[meta.icon] || UPD_SVG.gear}</span>
        <div class="upd-head-title">
          <b>${escapeHtml(entry.title || meta.label)}</b>
          <small>${fmtUpdateDate(entry.date)}</small>
        </div>
        <span class="upd-badge">${escapeHtml(isPinned ? 'Highlight' : meta.badge)}</span>
      </div>
      ${isMajor && entry.headline?`<div class="upd-major-line"><span class="spark">✦</span>${escapeHtml(meta.label)}</div>`:''}
      ${sub?`<p class="upd-headline">${escapeHtml(sub)}</p>`:''}
      ${renderUpdateColumns(entry, true)}
    </div>
  </div>`;
}
function renderUpdates(){
  const entries = sortedChangelog();
  const pinned = entries.filter(e=>e.pinned);
  const regular = entries.filter(e=>!e.pinned);
  const newest = regular.slice(0, 3);
  const older = regular.slice(3);
  const statusLabel = (!updateUiState || updateUiState.status==='idle' || updateUiState.status==='current')
    ? 'Alles ist aktuell'
    : (updateUiState.label || 'Alles ist aktuell');
  return `
    <div class="upd-hero">
      <div class="upd-hero-main">
        <span class="upd-hero-icon">${refIcon('updates')}</span>
        <div>
          <h1>Updates &amp; News</h1>
          <p class="upd-hero-sub">Alle Neuigkeiten, Updates und Verbesserungen auf einen Blick.</p>
        </div>
      </div>
      <div class="upd-hero-side">
        <div class="upd-brand"><img src="assets/logos/app-logo.png" alt=""><span class="b1">Automotive</span><span class="b2">EMPIRE</span></div>
        <div class="upd-version-panel">
          <small>Status</small>
          <div class="vnum">Aktuell</div>
          <span class="vstatus" id="updateStatusText">${escapeHtml(statusLabel)}</span>
          <span class="upd-version-check">${UPD_SVG.check}</span>
        </div>
      </div>
    </div>
    <div class="upd-section-row">
      <h2 class="upd-section-label"><span class="star">★</span>Highlight &amp; aktuelle Updates</h2>
      <button class="upd-check-btn" onclick="checkForUpdatesManual()">${UPD_SVG.refresh} Nach Updates suchen</button>
    </div>
    ${pinned.map((e,i)=>renderUpdateCard(e,i)).join('')}
    ${newest.length?`<div class="upd-section-row upd-subsection"><h2 class="upd-section-label"><span class="star">•</span>Weitere Updates</h2></div>`:''}
    ${newest.map((e,i)=>renderUpdateCard(e,i+pinned.length)).join('')}
    ${older.length?`
      <div class="upd-older" id="olderUpdates">${older.map((e,i)=>renderUpdateCard(e,i+newest.length+pinned.length)).join('')}</div>
      <button class="upd-older-toggle" id="olderUpdatesToggle" onclick="toggleOlderUpdates()">
        <span class="chev">${UPD_SVG.chevron}</span><span id="olderUpdatesLbl">Ältere Updates anzeigen</span>
      </button>
    `:''}
  `;
}
function toggleOlderUpdates(){
  const box = document.getElementById('olderUpdates');
  const btn = document.getElementById('olderUpdatesToggle');
  const lbl = document.getElementById('olderUpdatesLbl');
  if(!box || !btn || !lbl) return;
  const open = box.classList.toggle('open');
  btn.classList.toggle('open', open);
  lbl.textContent = open ? 'Ältere Updates ausblenden' : 'Ältere Updates anzeigen';
}

function renderSettings(){
  const fees = state.dunningFees || defaultState().dunningFees;
  return `
    <h2 class="section-title">Einstellungen</h2>
    <div class="notice">Der Spielstand wird automatisch nach jeder Aktion gespeichert.</div>
    <div class="notice">Die Spielzeit läuft automatisch weiter (ein Spieltag alle paar Sekunden) und pausiert, solange ein Dialogfenster geöffnet ist.</div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 8px;">App-Updates</h3>
    <div class="offer-card">
      <p class="subtle" style="margin:0 0 6px;">Automotive Empire prüft nach dem Login automatisch auf Updates — niemals während einer laufenden Spielsitzung.</p>
      <div class="row-actions" style="max-width:520px;">
        <button class="btn btn-primary" onclick="checkForUpdatesManual()">Nach Updates suchen</button>
        <button class="btn btn-ghost" onclick="navigateTo('updates')">📰 Updates &amp; News öffnen</button>
      </div>
      <p class="subtle" id="updateStatusText" style="margin:10px 0 0;">${escapeHtml(updateUiState.label || 'Noch nicht geprüft')}</p>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 8px;">Darstellung</h3>
    <div class="offer-card">
      <p class="subtle" style="margin:0 0 10px;">Die Oberfläche nutzt ein ruhiges Dark-Design mit klaren Akzentfarben für Gewinn, Verlust, Warnungen, Legacy und Erfolge. Alternativ steht ein helles Design zur Verfügung.</p>
      <div class="row-actions" style="max-width:420px;">
        <button class="btn ${state.themeMode!=='light'?'btn-primary':'btn-ghost'}" onclick="setThemeMode('dark')">Dunkles Design</button>
        <button class="btn ${state.themeMode==='light'?'btn-primary':'btn-ghost'}" onclick="setThemeMode('light')">Helles Design</button>
      </div>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 8px;">Debug</h3>
    <div class="offer-card">
      <p class="subtle" style="margin:0 0 10px;">Zeigt im Kundenchat die interne Antwort-Pipeline mit erkanntem Intent, Gesprächszustand, offenen Fragen und empfohlener nächster Reaktion.</p>
      <button class="btn ${state.chatDebug?'btn-primary':'btn-ghost'}" onclick="toggleChatDebug()">
        ${state.chatDebug?'Chat-Debug aktiv':'Chat-Debug aktivieren'}
      </button>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 8px;">Zeit & Spielfluss</h3>
    <div class="offer-card">
      <div class="field">
        <label>Spieltag-Dauer: <span id="dayDurationLbl" style="color:var(--brass);font-family:var(--font-m);">${((state.dayDurationMs||DEFAULT_DAY_DURATION_MS)/1000).toFixed(1)} Sekunden</span></label>
        <input type="range" min="4000" max="12000" step="1000" value="${state.dayDurationMs||DEFAULT_DAY_DURATION_MS}" oninput="setDayDuration(+this.value)">
      </div>
      <div class="field">
        <label>Max. neue Kaufanfragen pro Tag</label>
        <input type="number" min="0" max="3" value="${state.maxNewOffersPerDay||1}" oninput="setMaxNewOffers(+this.value)">
      </div>
      <div class="field">
        <label>Zahlungsverzug bei Raten: <span id="paymentDelayLbl" style="color:var(--brass);font-family:var(--font-m);">${state.paymentDelayPercent ?? 18}%</span></label>
        <input type="range" min="0" max="100" step="1" value="${state.paymentDelayPercent ?? 18}" oninput="setPaymentDelayPercent(+this.value)">
      </div>
      <p class="subtle" style="margin:8px 0 0;">Neue Anfragen werden automatisch zurückgehalten, wenn bereits offene Gespräche, ungelesene Nachrichten oder fällige Mahnungen Aufmerksamkeit brauchen.</p>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 8px;">Mahngebühren</h3>
    <div class="offer-card">
      <div class="notice ${state.greedyDunningMode?'warn':''}" style="display:block;margin-bottom:14px;">
        <b>GEIZIG-Modus ${state.greedyDunningMode?'aktiv':'inaktiv'}</b><br>
        ${state.greedyDunningMode
          ? 'Sie fahren eine harte Gebührenpolitik: hohe Mahngebühren erzeugen etwas mehr Zahlungsdruck, senken aber Kundenzufriedenheit stärker und können Ihrem Ruf schaden.'
          : 'Normale Gebührenpolitik: Mahnungen wirken moderat. Sie können die Gebühren trotzdem frei setzen; extrem hohe Werte sind spielerisch riskant.'}
      </div>
      <button class="btn ${state.greedyDunningMode?'btn-danger':'btn-ghost'}" onclick="toggleGreedyDunningMode()">
        ${state.greedyDunningMode?'GEIZIG-Modus deaktivieren':'GEIZIG-Modus aktivieren'}
      </button>
      <div class="stat-grid" style="margin-bottom:0;">
        ${[['reminder','Erinnerung'],['level1','Mahnstufe 1'],['level2','Mahnstufe 2'],['level3','Mahnstufe 3'],['collection','Inkasso/Rücknahme'],['legal','Gericht']].map(([key,label])=>`
          <div class="field" style="margin:12px 0 0;">
            <label>${label}</label>
            <input type="number" min="0" step="5" value="${fees[key]}" oninput="setDunningFee('${key}', +this.value)">
          </div>
        `).join('')}
      </div>
    </div>
    <h3 style="font-family:var(--font-d);font-size:13px;margin:18px 0 8px;">Finanzierungsmodell</h3>
    <div class="offer-card">
      <p class="subtle" style="margin:0 0 10px;">
        <b>Erweitert – Autohaus als Kreditgeber (Standard):</b> Bei Finanzierung erhalten Sie nur die Anzahlung sofort, den Rest über monatliche Raten direkt vom Kunden – mit echtem Tilgungsplan, Mahnstufen und Ausfallrisiko bis hin zu Fahrzeugrücknahme oder Forderungsausfall.<br><br>
        <b>Realistisch:</b> Bei genehmigter Finanzierung erhalten Sie den vollen Kaufpreis sofort von der Partnerbank ausgezahlt, ohne eigenes Risiko.<br><br>
        <span style="color:var(--ink-2);">Hinweis: Leasingverträge laufen unabhängig von dieser Einstellung immer als mehrmonatiges Vertragsverhältnis mit monatlichen Raten.</span>
      </p>
      <button class="btn ${state.extendedFinancingMode?'btn-primary':'btn-ghost'}" onclick="toggleExtendedFinancing()">
        ${state.extendedFinancingMode? '✅ Erweitertes Modell aktiv' : 'Realistisches Modell aktiv – umschalten auf Erweitert'}
      </button>
    </div>
    <button class="btn btn-danger" style="margin-top:18px;" onclick="resetGame()">Spielstand zurücksetzen</button>
  `;
}
function setDayDuration(v){
  state.dayDurationMs = clamp(Math.round(v||DEFAULT_DAY_DURATION_MS), 4000, 12000);
  const lbl = document.getElementById('dayDurationLbl');
  if(lbl) lbl.textContent = (state.dayDurationMs/1000).toFixed(1)+' Sekunden';
  scheduleSave();
}
function setMaxNewOffers(v){
  state.maxNewOffersPerDay = clamp(Math.round(v||1), 0, 3);
  scheduleSave();
}
function setPaymentDelayPercent(v){
  state.paymentDelayPercent = clamp(Math.round(v||0), 0, 100);
  const lbl = document.getElementById('paymentDelayLbl');
  if(lbl) lbl.textContent = state.paymentDelayPercent+'%';
  scheduleSave();
}
function toggleChatDebug(){
  state.chatDebug = !state.chatDebug;
  renderAllOpen(); scheduleSave();
}
function setDunningFee(key, value){
  state.dunningFees = state.dunningFees || defaultState().dunningFees;
  state.dunningFees[key] = Math.max(0, Math.round(Number(value)||0));
  scheduleSave();
}
function toggleGreedyDunningMode(){
  state.greedyDunningMode = !state.greedyDunningMode;
  notify(state.greedyDunningMode ? 'GEIZIG-Modus aktiviert: mehr Zahlungsdruck, aber stärkerer Zufriedenheits- und Rufverlust.' : 'GEIZIG-Modus deaktiviert.', state.greedyDunningMode?'warn':'info');
  renderApp('settings');
  scheduleSave();
}
function toggleExtendedFinancing(){
  state.extendedFinancingMode = !state.extendedFinancingMode;
  notify(state.extendedFinancingMode? 'Erweitertes Finanzierungsmodell aktiviert.' : 'Realistisches Finanzierungsmodell aktiviert.', 'info');
  renderAllOpen(); scheduleSave();
}
async function resetGame(){
  if(!confirm(`Spielstand für "${activeProfileName||'dieses Profil'}" wirklich zurücksetzen? Dieser Vorgang kann nicht rückgängig gemacht werden.`)) return;
  const keepTheme = state && state.themeMode === 'light' ? 'light' : 'dark';
  const keepBackground = getAppBackground(state && state.backgroundId).id;
  const keepDesign = state ? {...designSettings()} : {...DEFAULT_DESIGN_SETTINGS};
  state = defaultState();
  state.themeMode = keepTheme;
  state.backgroundId = keepBackground;
  state.designSettings = keepDesign;
  dayElapsedMs = 0;
  priceElapsedMs = 0;
  refreshMarketPool();
  seedInitialInventory();
  state.cashHistory.push({day:1, cash:state.cash, net:0});
  await saveNow();
  renderAllOpen();
}

/* =============================== MODAL =============================== */
function showModal(html, modalClass){
  closeModal(true);
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modalOverlay';
  overlay.onclick = (e)=>{ if(e.target===overlay) closeModal(); };
  overlay.innerHTML = `<div class="modal ${modalClass||''}">${html}</div>`;
  document.getElementById('app').appendChild(overlay);
  enhancePremiumUi();
}
function closeModal(instant){
  const m = document.getElementById('modalOverlay');
  if(!m) return;
  if(instant || window.matchMedia('(prefers-reduced-motion: reduce)').matches){ m.remove(); return; }
  if(m.classList.contains('closing')) return;
  m.classList.add('closing');
  setTimeout(()=>{ if(m.parentNode) m.remove(); }, 190);
}

/* =============================== GAME LOOP =============================== */
function seedInitialInventory(){
  const starters = [
    {brand:'Volkswagen', model:'Polo', year:2018, mileage:72000, engine:'Benzin', transmission:'Manuell', color:'Silber', condition:78, newPrice:22000, marketValue:12800, purchasePrice:10880},
    {brand:'Opel', model:'Astra', year:2017, mileage:94000, engine:'Diesel', transmission:'Automatik', color:'Grau', condition:74, newPrice:28500, marketValue:14200, purchasePrice:12070},
  ];
  starters.forEach((tpl,i)=>{
    const c = {
      id: uid('car'), power: i ? 136 : 95, hiddenIssues: [], tuvMonths: 14-i*3,
      inspected:false, price: Math.round(tpl.marketValue*1.08/10)*10,
      location:'stock', repairStatus:null, standDays:0, dayAdded: state?state.day:1,
      reservedFor:null, ...tpl,
    };
    ensureVehiclePhoto(c);
    const wear = createVehicleWearProfile(c);
    c.wearProfile = {wearScore:wear.wearScore, owners:wear.owners, maintenanceScore:wear.maintenanceScore, individuality:wear.individuality};
    c.issues = wear.issues;
    c.vehicleFile = createVehicleFile(c, c.issues);
    updateVehicleFileState(c);
    state.inventory.push(c);
  });
}

/* =============================== ZEITSTEUERUNG (Echtzeit, automatisch) =============================== */
// Kein manueller "Tag"-Button mehr: Die Spielzeit läuft von selbst weiter.
// Ein Spieltag dauert DAY_DURATION_MS Echtzeit – kurz genug, dass z.B. Werkstattaufträge (1-3 Tage) nicht lange warten lassen.
const DEFAULT_DAY_DURATION_MS = 6000;
let dayElapsedMs = 0;

const PRICE_UPDATE_MS = 180000; // 3 Minuten Echtzeit zwischen Marktpreis-Aktualisierungen
let priceElapsedMs = 0;

function startGameClock(){
  setInterval(()=>{
    if(!state || !activeProfileId){ return; }
    const dialogOpen = document.getElementById('modalOverlay') || document.getElementById('notifOverlay');
    if(dialogOpen){ return; } // Zeit pausiert, solange der Spieler in einem Dialog entscheidet
    dayElapsedMs += 200;
    priceElapsedMs += 200;
    const dayDuration = state.dayDurationMs || DEFAULT_DAY_DURATION_MS;
    if(dayElapsedMs >= dayDuration){
      dayElapsedMs = 0;
      nextDay();
    } else {
      const bar = document.getElementById('dayProgress');
      if(bar) bar.style.width = Math.round((dayElapsedMs/dayDuration)*100)+'%';
    }
    if(priceElapsedMs >= PRICE_UPDATE_MS){
      priceElapsedMs = 0;
      updateMarketPrices();
    }
  }, 200);
}

// Aktualisiert Marktwerte, Wirtschaftstrend und Fahrzeugangebot nur alle paar Minuten,
// statt bei jedem Spieltag – damit sich Preise nicht ständig ändern.
function updateMarketPrices(){
  state.inventory.forEach(c=>{
    c.marketValue = Math.round(c.marketValue*(1+randFloat(-0.02,0.02)));
  });

  state.marketTrend = clamp(state.marketTrend*(1+randFloat(-0.02,0.025)), 0.75, 1.4);
  state.evDemand = clamp((state.evDemand||1)*(1+randFloat(-0.02,0.02)),0.7,1.6);
  state.suvDemand = clamp((state.suvDemand||1)*(1+randFloat(-0.02,0.02)),0.7,1.6);

  if(Math.random()<0.35){
    const ev = choice(EVENTS);
    ev.fx(state);
    notify('📰 '+ev.text, 'info');
  }

  // Angebot am Markt erweitern: neue Verkäufer stellen Fahrzeuge ein, bestehende Angebote bleiben erhalten.
  for(let i=0;i<randInt(3,8);i++){
    const c = generateCar();
    c.marketSource = choice(['Privatverkäufer','Händlerangebot','Leasingrückläufer','Firmenfahrzeug','Importfahrzeug','Jahreswagen','Gebrauchtwagen']);
    state.market.push(c);
  }
  refreshMarketPool();
  recordMarketSnapshot();

  refreshClockChrome();
  scheduleSave();
}

function nextDay(){
  state.day++;
  const passiveXp = passiveXpForDay();
  if(passiveXp>0){
    state.passiveXpEarned = (state.passiveXpEarned||0) + passiveXp;
    addXp(passiveXp, 'passiv');
  }
  // loan interest
  if(state.loanPrincipal>0){
    const interest = Math.round(state.loanPrincipal*state.loanRate);
    state.loanPrincipal += interest;
    addTx('expense','Kreditzinsen',-interest);
  }
  // salaries
  const salaryTotal = state.employees.reduce((s,e)=>s+e.salary,0);
  if(state.lastEmployeePayrollDay===undefined) state.lastEmployeePayrollDay = state.day;
  if(salaryTotal>0 && state.day - (state.lastEmployeePayrollDay||1) >= 30){
    addTx('expense','Gehälter Mitarbeiter (30 Tage)',-salaryTotal*30);
    state.lastEmployeePayrollDay = state.day;
    notify(`Mitarbeitergehälter für 30 Tage ausgezahlt: ${money(salaryTotal*30)}.`, 'info');
  }
  (state.employees||[]).forEach(e=>{
    normalizeEmployee(e);
    e.satisfaction = clamp((e.satisfaction||70) + ((state.cash||0)>salaryTotal*10 ? 0.2 : -1.2), 20, 100);
    e.motivation = clamp((e.motivation||70) + ((e.satisfaction||70)>=65 ? 0.1 : -0.6), 20, 100);
    e.efficiency = clamp(Math.round((e.efficiency||60)*0.985 + (e.motivation||70)*0.015), 25, 100);
  });

  // workshop progress
  let completedWorkshopToday = 0;
  state.workshopJobs = state.workshopJobs.filter(j=>{
    j.daysLeft--;
    if(j.daysLeft<=0){
      const c = findCar(j.carId);
      if(c){
        normalizeVehicleIssues(c);
        // Temporaeres Debug-Log fuer den Werkstattabschluss; bei Bedarf spaeter entfernen.
        console.info('[Werkstatt] Auftrag abgeschlossen:', j.label, '| Fahrzeug:', c.brand, c.model);
        console.info('[Werkstatt] linkedCustomerRequestIds:', j.saleConditionIds || (j.saleConditionId ? [j.saleConditionId] : []), '| issueIds:', j.issueIds || (j.issueId ? [j.issueId] : []));
        console.info('[Werkstatt] Offene blockierende Wuensche vorher:', carOpenSaleConditions(c).map(x=>`${x.issueLabel||x.label} (${x.status})`));
        c.condition = clamp(c.condition+j.condGain,0,100);
        if(j.issueIds && j.issueIds.length){
          j.issueIds.forEach(issueId=>{
            const issue = c.issues.find(i=>i.id===issueId);
            if(issue){ issue.repaired = true; issue.discovered = true; }
          });
          const finishedByOffer = new Map();
          (j.saleConditionIds||[]).forEach((conditionId, idx)=>{
            const offerId = (j.offerIds||[])[idx];
            const o = (state.offers||[]).find(x=>x.id===offerId);
            const cond = o && (o.saleConditions||[]).find(x=>x.id===conditionId);
            if(cond){
              cond.status = 'fulfilled';
              cond.fulfilledDay = state.day;
              syncCarSaleCondition(c, cond, 'fulfilled', {fulfilledDay:state.day});
              if(!finishedByOffer.has(o.id)) finishedByOffer.set(o.id, {offer:o, labels:[]});
              finishedByOffer.get(o.id).labels.push(cond.issueLabel || saleConditionText(cond));
            }
          });
          finishedByOffer.forEach(entry=>{
            addMsg(entry.offer, 'customer', `Danke, die vereinbarten Punkte sind erledigt: ${entry.labels.join(', ')}. Für mich ist der Verkauf damit wieder freigegeben.`);
            notify(`Kundenwünsche erfüllt: ${entry.offer.name} kann den Verkauf für ${c.brand} ${c.model} fortsetzen.`,'good');
          });
        } else if(j.issueId){
          const issue = c.issues.find(i=>i.id===j.issueId);
          if(issue){ issue.repaired = true; issue.discovered = true; }
          if(j.saleConditionId && j.offerId){
            const o = (state.offers||[]).find(x=>x.id===j.offerId);
            const cond = o && (o.saleConditions||[]).find(x=>x.id===j.saleConditionId);
            if(cond){
              cond.status = 'fulfilled';
              cond.fulfilledDay = state.day;
              syncCarSaleCondition(c, cond, 'fulfilled', {fulfilledDay:state.day});
              addMsg(o, 'customer', `Danke, dass "${cond.issueLabel}" erledigt wurde. Für mich ist der Punkt damit geklärt.`);
              notify(`Kundenwunsch erfüllt: ${o.name} kann den Verkauf für ${c.brand} ${c.model} fortsetzen.`,'good');
            }
          }
        } else if((j.jobId==='mech'||j.jobId==='paint'||j.jobId==='tires'||j.jobId==='tuv') && c.issues.length){
          const target = c.issues.find(i=>!i.repaired && (
            j.jobId==='paint' ? i.category==='Karosserie' :
            j.jobId==='tires' ? i.category==='Reifen' :
            j.jobId==='tuv' ? /tüv|tuv/i.test(i.label||'') :
            ['Motor','Bremsen','Fahrwerk','Elektronik','Service'].includes(i.category)
          ));
          if(target) target.repaired = true;
        }
        // Frischer TÜV gilt dauerhaft am Fahrzeug: Gueltigkeit setzen, damit spaetere Kunden ihn nicht erneut verlangen.
        const repairedIdsThisJob = j.issueIds || (j.issueId ? [j.issueId] : []);
        const tuvDone = j.jobId==='tuv' || j.baseJobId==='tuv' ||
          repairedIdsThisJob.some(id=>{ const i=(c.issues||[]).find(x=>x.id===id); return i && i.repaired && /tüv|tuv/i.test(i.label||''); });
        if(tuvDone){
          // Alle TÜV-bezogenen Maengel sind mit frischem TÜV logisch erledigt (z.B. "laeuft bald ab" + "abgelaufen")
          (c.issues||[]).forEach(i=>{ if(!i.repaired && /tüv|tuv/i.test(i.label||'')) i.repaired = true; });
          if((c.tuvMonths||0) < 24){
            console.info('[Werkstatt] TÜV erneuert:', c.id, '| tuvMonths vorher:', c.tuvMonths||0, '| nachher: 24');
            c.tuvMonths = 24;
          }
        }
        // Zentraler Abgleich: schliesst auch Kundenwuensche, die NICHT direkt am Auftrag verknuepft waren
        // (z.B. Mangel direkt ueber die Werkstatt repariert statt ueber "Kundenwunsch erfuellen" im Chat).
        fulfillSaleConditionsForRepairedIssues(c);
        console.info('[Werkstatt] Offene blockierende Wuensche nachher:', carOpenSaleConditions(c).map(x=>`${x.issueLabel||x.label} (${x.status})`));
        console.info('[Werkstatt] Chat aktualisiert: ja (Kundennachricht sofort, Voll-Rerender am Tagesende)');
        updateVehicleFileState(c);
        c.marketValue = Math.round(c.marketValue*(1+j.condGain/300));
        if(c.bulkListingPlan) completeBulkListingAfterRepair(c);
        state.workshopCompleted = (state.workshopCompleted||0)+1;
        completedWorkshopToday++;
        trainEmployees((j.jobId==='clean'||j.jobId==='paint') ? 'Fahrzeugaufbereiter' : 'Mechaniker', 34, 'abgeschlossener Werkstattauftrag');
        notify(`Werkstatt fertig: ${j.label} für ${c.brand} ${c.model} abgeschlossen.`,'good');
        showAchievementUnlocks(checkAchievements());
      }
      return false;
    }
    return true;
  });

  maybeGenerateEcuRequest(completedWorkshopToday);

  // Standtage hochzählen (Wertentwicklung passiert jetzt separat, nur alle paar Minuten)
  state.inventory.forEach(c=>{ c.standDays++; });
  processDeliveries();

  // offers patience decay
  state.offers = state.offers.filter(o=>{
    if(o.applicationPending) return true;
    if(o.unread || o.pendingReply || activeClaims().some(x=>x.claim.actionRequired)){
      o.patience = Math.min(o.patience+0.25, 6);
      return true;
    }
    o.patience -= 0.5;
    if(o.patience<=0){
      closeConversationForCustomer(o, -2);
      notify(`${o.name} ist ungeduldig geworden und abgesprungen.`,'warn');
      showDropoutModal(
        'sale',
        'Kunde abgesprungen',
        `${o.name} hat das Interesse verloren.`,
        'Grund: Zu lange Wartezeit bzw. zu wenig Fortschritt im Verkaufsgespräch.'
      );
      return false;
    }
    return true;
  });

  // fällige Postfach-Antworten auflösen (verzögerte Kundenreaktionen)
  state.offers.forEach(o=>{
    if(o.pendingReply && o.pendingReply.dueDay<=state.day){
      const kind = o.pendingReply.kind;
      if(kind==='ai'){
        resolveAiPendingReply(o);
      } else {
        o.pendingReply = null;
        o.chatStatus = '';
        if(kind==='appointment') resolveAppointmentReply(o);
      }
      showToast('📧', `<b>${o.name}</b> hat auf Ihre Nachricht geantwortet.`, 'Ansehen', ()=>{navigateTo('mailbox'); openConversation(o.id);});
    }
  });

  // fällige Finanzierungs-/Leasinganträge bei der Bank auflösen
  state.offers.forEach(o=>{
    if(o.applicationPending && o.financingApp && o.financingApp.resolveDay<=state.day){
      resolveFinancingApplication(o);
      showToast('🏦', `Rückmeldung zum Finanzierungsantrag von <b>${o.name}</b> ist da.`, 'Ansehen', ()=>{navigateTo('mailbox'); openConversation(o.id);});
    }
  });

  // Reservierungen: Ablauf prüfen
  state.inventory.forEach(c=>{
    if(c.reservedFor && c.reservedFor.expiresDay<=state.day){
      const o = state.offers.find(x=>x.id===c.reservedFor.offerId);
      c.reservedFor = null;
      if(o && !o.applicationPending){
        if(Math.random()<0.5){
          addMsg(o,'customer', `Können wir die Reservierung noch etwas verlängern? Ich brauche noch etwas Zeit.`);
          reserveCar(c, o, 3, 'manual');
        } else {
          addMsg(o,'customer', `Die Zeit ist leider um, ich muss mich anderweitig umsehen.`);
          closeConversationForCustomer(o, -3);
          state.offers = state.offers.filter(x=>x.id!==o.id);
          notify(`${o.name}s Reservierung ist abgelaufen – Kunde ist abgesprungen.`,'warn');
          showDropoutModal(
            'sale',
            'Kunde abgesprungen',
            `${o.name} hat wegen abgelaufener Reservierung abgesagt.`,
            `${c.brand} ${c.model} ist wieder frei verfügbar.`
          );
        }
      }
    }
  });

  // Finanzierungsverträge: monatlicher Tilgungsplan, Mahnstufen, Ausfallrisiko
  const finPayments = [];
  (state.receivables||[]).forEach(r=>{
    clearBranchFields(r);
    if(r.closed) return;
    while(r.nextDueDay<=state.day && !r.closed){
      r.nextDueDay += 30;
      const result = processFinancingMonth(r);
      if(result.success) finPayments.push(result.contract);
    }
  });
  state.receivables = state.receivables || [];

  // Leasingverträge: monatliche Rate, Ereignisse, Vertragsende
  const leasePayments = [];
  (state.leaseContracts||[]).forEach(lease=>{
    if(lease.status!=='active') return;
    while(lease.nextDueDay<=state.day && lease.status==='active'){
      lease.nextDueDay += 30;
      lease.monthsElapsed += 1;
      if(lease.openClaim){
        addMissedRateToClaim(lease, lease.monthlyPayment);
        continue;
      }
      if(Math.random()>=paymentDelayChance(lease)){
        recordContractPayment(lease, lease.monthlyPayment, 0, 'Leasingrate');
        leasePayments.push(lease);
      } else {
        createOpenClaim(lease, 'lea', lease.monthlyPayment);
      }
      rollLeaseEvent(lease);
      if(lease.monthsElapsed >= lease.months && lease.status==='active' && !document.getElementById('modalOverlay')){
        triggerLeaseEnd(lease);
      }
    }
  });
  state.leaseContracts = state.leaseContracts || [];
  processOpenClaims();

  // Sichtbares Zahlungs-Feedback: einzeln bei wenigen Zahlungen, gebündelt bei vielen (z.B. 40 Verträgen)
  const totalPayments = finPayments.length + leasePayments.length;
  if(totalPayments>0 && totalPayments<=3){
    finPayments.forEach(r=>{
      showToast('💳', `<b>Neue Zahlung eingegangen</b><br>${r.carDesc} · ${r.customerName}<br>Monatsrate: <b style="color:var(--teal);">+${money(r.monthlyPayment)}</b><br>Restlaufzeit: ${r.monthsRemaining} Monate · Restschuld: ${money(r.remainingPrincipal)}<br>Gesamt erhalten: ${money(r.totalPaid)}`, null, null);
    });
    leasePayments.forEach(l=>{
      showToast('📄', `<b>Leasingrate erhalten</b><br>${l.carSnapshot.brand} ${l.carSnapshot.model} · ${l.customerName}<br>+${money(l.monthlyPayment)}<br>Vertrag läuft noch: ${l.months-l.monthsElapsed} Monate<br>Restwert bei Vertragsende: ${money(l.residual)}`, null, null);
    });
  } else if(totalPayments>3){
    const sum = finPayments.reduce((s,r)=>s+r.monthlyPayment,0) + leasePayments.reduce((s,l)=>s+l.monthlyPayment,0);
    showToast('💳', `<b>${totalPayments} Zahlungen eingegangen</b><br>Gesamt: <b style="color:var(--teal);">+${money(sum)}</b> aus laufenden Verträgen`, 'Verträge ansehen', ()=>navigateTo('contracts'));
  }

  // Wunschliste: neue Suchaufträge, Ablauf alter Aufträge, Treffer-Check
  const wishlistUpgrade = upgradeLevel('wishlist_marketing');
  if(activeSearchOrders().filter(o=>o.status==='open').length < 6 + wishlistUpgrade && Math.random()<0.28 + wishlistUpgrade*0.045){
    state.searchOrders.push(generateSearchOrder());
  }
  state.searchOrders = state.searchOrders.filter(so=>{
    if(so.status==='open' && state.day-so.createdDay > 45){
      notify(`${so.customerName} hat den Suchauftrag „${so.desc}“ storniert.`,'info');
      return false;
    }
    return true;
  });
  checkSearchOrderMatches();

  // generate new offers for listed cars - gedrosselt, damit schnellere Spielzeit nicht hektisch wird
  const sellerBonus = employeeBonus('Verkäufer');
  const marketingBonus = employeeBonus('Marketing');
  const photoBonus = employeeBonus('Fotograf');
  const openConversationLoad = activeOffers().filter(o=>!o.applicationPending).length;
  const unreadLoad = activeOffers().filter(o=>o.unread).length;
  const claimsLoad = activeClaimActionCount();
  const dailyOfferLimit = state.maxNewOffersPerDay == null ? 1 : clamp(Math.round(state.maxNewOffersPerDay), 0, 3);
  const conversationCapacity = Math.max(0, 8-openConversationLoad);
  const operationsCapacity = claimsLoad>=3 ? 1 : 3;
  const maxNewOffers = Math.max(0, Math.min(dailyOfferLimit, conversationCapacity, operationsCapacity));
  let newOffersToday = 0;
  const listingIds = activeListingIds().sort((a,b)=>(state.listings[a].createdDay||0)-(state.listings[b].createdDay||0));
  listingIds.forEach(carId=>{
    if(newOffersToday>=maxNewOffers) return;
    const c = findCar(carId); if(!c) return;
    const l = state.listings[carId];
    l.views += randInt(1,4) + Math.round(marketingBonus*6) + Math.round(photoBonus*4) + upgradeLevel('better_listings')*2 + upgradeLevel('reputation_campaign');
    const priceRatio = l.price / c.marketValue; // >1 overpriced
    const listedDays = Math.max(0, state.day - (l.createdDay||state.day));
    const alreadyHasOffer = state.offers.some(o=>o.carId===carId);
    if(alreadyHasOffer) return;
    normalizeVehicleIssues(c);
    const issueLoad = (c.issues||[]).filter(i=>!i.repaired).reduce((s,i)=>s+(i.severity||1),0);
    let chance = clamp(0.18 - (priceRatio-1)*0.42 - issueLoad*0.012 + state.reputation/650 + sellerBonus*0.16 + marketingBonus*0.08 + photoBonus*0.07 + reviewInfluence() + upgradeLevel('better_listings')*0.035 + upgradeLevel('premium_presence')*0.02 + upgradeLevel('reputation_campaign')*0.025, 0.01, 0.68);
    if(l.quickSale) chance = clamp(chance + 0.08, 0.01, 0.78);
    chance = clamp(chance + Math.min(0.18, listedDays*0.012), 0.01, 0.74);
    if(openConversationLoad===0 && unreadLoad===0) chance = Math.max(chance, 0.28);
    if(openConversationLoad===0 && unreadLoad===0 && listedDays>=2) chance = Math.max(chance, 0.45);
    if(unreadLoad>0) chance *= 0.82;
    if(state.lastOfferDay===state.day) chance *= 0.35;
    if(Math.random()<chance){
      const lead = createMatchedCustomerLead(c, l);
      const cust = lead.cust;
      const personaObj = PERSONAS.find(p=>p.name===cust.persona) || choice(PERSONAS);
      const amount = lead.amount;
      const paymentMethod = lead.paymentMethod;
      cust.lastContactDay = state.day;
      if(!cust.preferredBrands.includes(c.brand)) cust.preferredBrands.push(c.brand);
      cust.budgetEstimate = cust.budgetEstimate ? Math.round((cust.budgetEstimate+amount)/2) : amount;
      if(cust.profile){
        cust.profile.monthlyIncome = cust.monthlyIncome || cust.profile.monthlyIncome || 0;
        cust.profile.wealth = cust.wealth || cust.profile.wealth || 0;
        cust.profile.preferredPayment = paymentMethod;
        cust.profile.budget = cust.budgetEstimate;
      }
      const newOffer = {
        id: uid('off'), carId, customerId: cust.id, name: cust.name,
        persona: cust.persona, amount, patience: personaObj.patience, round: 1,
        job: cust.job, creditScore: cust.creditScore, paymentMethod, messages: [], unread: true, pendingReply: null,
        monthlyIncome: cust.monthlyIncome || cust.profile?.monthlyIncome || 0,
        wealth: cust.wealth || cust.profile?.wealth || 0,
        leadRealism: lead.realism,
        leadVehicleClass: lead.vehicleClass,
        desiredSaleMethod: paymentMethod,
        approvedSaleMethods: [paymentMethod],
        customerProfile:{...(cust.profile||{}), monthlyIncome:cust.monthlyIncome || cust.profile?.monthlyIncome || 0, wealth:cust.wealth || cust.profile?.wealth || 0, budget:cust.budgetEstimate, preferredPayment:paymentMethod},
      };
      ensureOfferAi(newOffer, c);
      ensureSaleMethodPreference(newOffer);
      const issueImpact = customerIssueImpact(newOffer, c);
      if(issueImpact.pricePressure>0){
        newOffer.amount = Math.max(500, Math.round(newOffer.amount*(1-issueImpact.pricePressure)/10)*10);
        newOffer.vehicleIssueConcerns = issueImpact.issues.map(i=>i.id);
      }
      if(newOffer.paymentMethod==='finanzierung') ensureFinancingPriorities(newOffer, newOffer.amount);
      addMsg(newOffer, 'customer', initialCustomerMessage(newOffer, c));
      state.offers.push(newOffer);
      state.lastOfferDay = state.day;
      trainEmployees('Marketing-Manager', 10, 'neue Inseratsanfrage');
      trainEmployees('Fotograf', 8, 'Inserat erzeugt Nachfrage');
      newOffersToday++;
    }
  });

  maybeGeneratePurchaseRequest();

  // cash history point
  const prevCash = state.cashHistory.length? state.cashHistory[state.cashHistory.length-1].cash : state.cash;
  state.cashHistory.push({day:state.day, cash:state.cash, net: state.cash-prevCash});
  state.cashHistory = state.cashHistory.slice(-60);
  recordMarketSnapshot();

  cleanupTransientCustomers();
  ensureCandidates();
  refreshClockChrome();
  scheduleSave();
}

/* =============================== INIT =============================== */
function installDragSelectionGuard(){
  let leftMouseDown = false;
  const clear = ()=>{
    leftMouseDown = false;
    document.body.classList.remove('drag-select-guard');
  };
  document.addEventListener('mousedown', e=>{
    if(e.button !== 0) return;
    leftMouseDown = true;
    document.body.classList.add('drag-select-guard');
  }, true);
  document.addEventListener('mouseup', clear, true);
  document.addEventListener('mouseleave', clear, true);
  document.addEventListener('selectstart', e=>{
    const draggable = e.target && e.target.closest ? e.target.closest('[draggable="true"]') : null;
    if(leftMouseDown && !draggable) e.preventDefault();
  }, true);
  document.addEventListener('dragstart', e=>{
    const el = e.target && e.target.closest ? e.target.closest('[draggable="true"]') : null;
    if(el) return;
    if(leftMouseDown) e.preventDefault();
  }, true);
}
async function init(){
  installDragSelectionGuard();
  await loadAppRuntimeInfo();
  initUpdaterBridge();
  // Hintergruende aus assets/backgrounds/ erkennen; nach 2,5s weiterladen, Scan laeuft dann im Hintergrund fertig.
  await Promise.race([discoverAppBackgrounds(), new Promise(r=>setTimeout(r, 2500))]);
  await renderProfileLogin();
}
// Entfernt Altlasten des zurückgebauten Filialen-Systems; wird auch in nextDay() benötigt.
function clearBranchFields(obj){
  if(!obj || typeof obj !== 'object') return obj;
  delete obj.branchId;
  delete obj.locationBranchId;
  delete obj.sourceBranchId;
  return obj;
}
// Ergänzt fehlende Felder in älteren Spielständen, damit neu hinzugefügte Systeme nicht abstürzen.
function migrateState(){
  repairMojibakeDeep(state);
  activeProfileName = repairMojibakeText(activeProfileName||'');
  const salaryBalanceVersion = state.salaryBalanceVersion || 1;
  const d = defaultState();
  Object.keys(d).forEach(key=>{
    if(state[key] === undefined) state[key] = d[key];
  });
  legacyState();
  ensureUpgrades();
  ensureBranches();
  if(state.themeMode !== 'light' && state.themeMode !== 'dark') state.themeMode = 'dark';
  state.backgroundId = normalizeAppBackgroundId(state.backgroundId);
  // Nur zuruecksetzen, wenn der Ordner-Scan lief und die ID wirklich fehlt; ohne Scan Auswahl behalten.
  if(appBackgroundsDiscovered && !APP_BACKGROUNDS.some(bg=>bg.id===state.backgroundId)) state.backgroundId = defaultAppBackground().id;
  state.designSettings = {...DEFAULT_DESIGN_SETTINGS, ...(state.designSettings || {})};
  Object.keys(DEFAULT_DESIGN_SETTINGS).forEach(key=>{ state.designSettings[key] = pct(state.designSettings[key]); });
  if(state.paymentDelayPercent===undefined) state.paymentDelayPercent = d.paymentDelayPercent;
  if(state.legacyDunningFeeExtraIncome===undefined) state.legacyDunningFeeExtraIncome = 0;
  if(state.passiveXpEarned===undefined) state.passiveXpEarned = 0;
  if(state.lastEmployeePayrollDay===undefined) state.lastEmployeePayrollDay = state.day || 1;
  ensureEcuState();
  (state.ecuRequests||[]).forEach(r=>{
    if(r.status==='scanning') r.status = 'in_lab';
    if(r.status==='programming') r.status = 'ready';
    if(r.car) ensureVehiclePhoto(r.car);
  });
  state.purchaseRequests = state.purchaseRequests || [];
  state.purchaseRequestArchive = state.purchaseRequestArchive || [];
  state.employees = state.employees || [];
  state.candidates = state.candidates || [];
  state.employees.forEach(normalizeEmployee);
  state.candidates.forEach(normalizeEmployee);
  if(salaryBalanceVersion < 2){
    [...state.employees, ...state.candidates].forEach(e=>{
      if(e && e.salary) e.salary = Math.max(34, Math.round((e.salary*0.62)/2)*2);
    });
    state.salaryBalanceVersion = 2;
  }
  state.reviews = state.reviews || [];
  state.deliveries = state.deliveries || [];
  state.deliveryHistory = state.deliveryHistory || [];
  state.seenReviewIds = state.seenReviewIds || [];
  Object.values(state.customers||{}).forEach(cust=>ensureCustomerProfile(cust));
  (state.purchaseRequests||[]).forEach(r=>{
    clearBranchFields(r);
    if(r.car) clearBranchFields(r.car);
    if(r.status===undefined) r.status = 'open';
    if(r.messages===undefined) r.messages = [];
    if(r.draftText===undefined) r.draftText = '';
    ensurePurchaseChat(r);
    if(r.car) ensureVehiclePhoto(r.car);
  });
  (state.purchaseRequestArchive||[]).forEach(r=>{ clearBranchFields(r); ensurePurchaseChat(r); if(r.car){ clearBranchFields(r.car); ensureVehiclePhoto(r.car); } });
  (state.reviews||[]).forEach(r=>{ clearBranchFields(r); if(r.reply===undefined) r.reply = ''; });
  (state.deliveries||[]).forEach(dv=>{
    clearBranchFields(dv);
    if(dv.status===undefined) dv.status = 'planning';
    if(dv.statusIndex===undefined) dv.statusIndex = 0;
    if(dv.dealerSharePct===undefined) dv.dealerSharePct = 0;
    if(dv.customerCharge===undefined) dv.customerCharge = dv.baseCost||0;
    if(dv.dealerCost===undefined) dv.dealerCost = 0;
    if(dv.transportCost===undefined) dv.transportCost = 0;
    if(dv.reviewPending===undefined) dv.reviewPending = !!dv.reviewContext;
    if(dv.summary===undefined) dv.summary = 'Übergabe noch nicht abgeschlossen.';
  });
  state.offers.forEach(o=>{
    clearBranchFields(o);
    if(o.messages===undefined) o.messages = [];
    if(o.unread===undefined) o.unread = false;
    if(o.pendingReply===undefined) o.pendingReply = null;
    if(o.chatStatus===undefined) o.chatStatus = '';
    if(o.chatMemory===undefined) o.chatMemory = defaultChatMemory(findCar(o.carId));
    o.chatMemory = {...defaultChatMemory(findCar(o.carId)), ...o.chatMemory};
    if(!Array.isArray(o.chatMemory.expectations)) o.chatMemory.expectations = [];
    if(o.chatMemory.ignoredQuestions===undefined) o.chatMemory.ignoredQuestions = 0;
    if(o.chatMemory.answeredQuestions===undefined) o.chatMemory.answeredQuestions = 0;
    ensureOfferAi(o, findCar(o.carId));
    if(o.round===undefined) o.round = 1;
    if(o.applicationPending===undefined) o.applicationPending = false;
    if(o.financingApp===undefined) o.financingApp = null;
    if(o.financingOffers===undefined) o.financingOffers = null;
    if(o.financingOffer===undefined) o.financingOffer = null;
    if(o.financingPriorities===undefined) o.financingPriorities = null;
    if(o.sentFinancingSignatures===undefined) o.sentFinancingSignatures = [];
    if(o.conditionDecisionSignatures===undefined) o.conditionDecisionSignatures = [];
    if(o.saleConditions===undefined) o.saleConditions = [];
    if(o.customerIssueAssessment===undefined) o.customerIssueAssessment = null;
    if(o.bankDecision===undefined) o.bankDecision = null;
    if(o.draftText===undefined) o.draftText = '';
    ensureSaleMethodPreference(o);
    o.saleConditions = uniqueBy(o.saleConditions, cond=>`${cond.offerId||o.id}|${issueUniqueKey(cond.issueLabel || cond.label)}`);
    (o.messages||[]).forEach(m=>{ if(m && m.text) m.text = compactRepeatedCommaText(m.text); });
  });
  state.inventory.forEach(c=>{
    clearBranchFields(c);
    if(c.reservedFor===undefined) c.reservedFor = null;
    ensureVehiclePhoto(c);
    if(!c.wearProfile){
      const wear = createVehicleWearProfile(c);
      c.wearProfile = {wearScore:wear.wearScore, owners:wear.owners, maintenanceScore:wear.maintenanceScore, individuality:wear.individuality};
      if(!Array.isArray(c.issues) || !c.issues.length) c.issues = wear.issues;
    }
    if(c.saleConditions===undefined) c.saleConditions = [];
    c.saleConditions = uniqueBy(c.saleConditions, cond=>`${cond.offerId||''}|${issueUniqueKey(cond.issueLabel || cond.label)}`);
    normalizeVehicleIssues(c);
  });
  (state.market||[]).forEach(c=>{
    clearBranchFields(c); ensureVehiclePhoto(c);
    if(!c.wearProfile){
      const wear = createVehicleWearProfile(c);
      c.wearProfile = {wearScore:wear.wearScore, owners:wear.owners, maintenanceScore:wear.maintenanceScore, individuality:wear.individuality};
      if(!Array.isArray(c.issues) || !c.issues.length) c.issues = wear.issues;
    }
    normalizeVehicleIssues(c);
  });
  (state.searchOrders||[]).forEach(clearBranchFields);
  (state.workshopJobs||[]).forEach(clearBranchFields);
  (state.salesHistory||[]).forEach(clearBranchFields);
  (state.purchaseHistory||[]).forEach(clearBranchFields);
  if(state.leaseContracts===undefined) state.leaseContracts = [];
  // Alte, einfache Forderungen (vor dem vollen Tilgungsplan-System) auf das neue Format heben
  (state.receivables||[]).forEach(r=>{
    if(r.closed===undefined) r.closed = (r.status==='defaulted'||r.status==='abbezahlt');
    if(r.remainingPrincipal===undefined) r.remainingPrincipal = Math.round((r.monthlyPayment||0)*(r.monthsRemaining||0)*0.9);
    if(r.principal===undefined) r.principal = r.remainingPrincipal;
    if(r.downPayment===undefined) r.downPayment = 0;
    if(r.purchasePrice===undefined) r.purchasePrice = r.principal;
    if(r.nominalRate===undefined) r.nominalRate = 0.06;
    if(r.effectiveRate===undefined) r.effectiveRate = 0.065;
    if(r.totalInterest===undefined) r.totalInterest = Math.max(0, Math.round((r.monthlyPayment||0)*(r.months||r.monthsRemaining||0) - (r.principal||0)));
    if(r.estimatedIncome===undefined) r.estimatedIncome = 0;
    if(r.financingRiskAdjustment===undefined) r.financingRiskAdjustment = 0;
    if(r.months===undefined) r.months = r.monthsRemaining||0;
    if(r.monthsElapsed===undefined) r.monthsElapsed = 0;
    if(r.totalPaid===undefined) r.totalPaid = 0;
    if(r.paymentHistory===undefined) r.paymentHistory = [];
    if(r.startDay===undefined) r.startDay = state.day;
    if(r.dunningLevel===undefined) r.dunningLevel = r.lateStreak||0;
    if(r.status==='active') r.status = 'aktuell';
    if(r.status==='late') r.status = 'mahnung';
    if(r.carSnapshot===undefined) r.carSnapshot = {brand:'', model:'', year:2020, engine:'Benzin', transmission:'Automatik', color:'Grau', power:120};
    if(r.openClaim===undefined) r.openClaim = null;
    if(r.openClaim){
      if(r.openClaim.openRates===undefined) r.openClaim.openRates = 1;
      if(r.openClaim.rateItems===undefined) r.openClaim.rateItems = [{day:r.openClaim.dueDay||state.day, amount:r.openClaim.baseAmount||r.monthlyPayment||0}];
      normalizeClaimFees(r.openClaim);
    }
    if(r.leniency===undefined) r.leniency = 0;
    if(r.type===undefined) r.type = 'finanzierung';
    if(r.paymentHistory===undefined) r.paymentHistory = [];
    if(r.closed && !String(r.status||'').toLowerCase().includes('abgeschlossen') && r.status!=='ausgefallen' && r.status!=='Fahrzeug zurückgenommen' && r.status!=='Vergleich abgeschlossen') r.status = 'Abgeschlossen';
    if(r.closed && r.completedDay===undefined) r.completedDay = state.day;
    if(r.completionPopupShown===undefined) r.completionPopupShown = !!r.closed;
    if(r.archived===undefined) r.archived = false;
  });
  (state.leaseContracts||[]).forEach(l=>{
    clearBranchFields(l);
    if(l.type===undefined) l.type = 'leasing';
    if(l.totalPaid===undefined) l.totalPaid = 0;
    if(l.paymentHistory===undefined) l.paymentHistory = [];
    if(l.openClaim===undefined) l.openClaim = null;
    if(l.openClaim){
      if(l.openClaim.openRates===undefined) l.openClaim.openRates = 1;
      if(l.openClaim.rateItems===undefined) l.openClaim.rateItems = [{day:l.openClaim.dueDay||state.day, amount:l.openClaim.baseAmount||l.monthlyPayment||0}];
      normalizeClaimFees(l.openClaim);
    }
    if(l.dunningLevel===undefined) l.dunningLevel = 0;
    if(l.leniency===undefined) l.leniency = 0;
    if(l.status==='closed') l.status = 'Abgeschlossen';
    if(l.closed===undefined) l.closed = String(l.status||'').toLowerCase().includes('abgeschlossen');
    if(l.closed && l.completedDay===undefined) l.completedDay = state.day;
    if(l.completionPopupShown===undefined) l.completionPopupShown = !!l.closed;
    if(l.archived===undefined) l.archived = false;
  });
}
window.addEventListener('load', init);
