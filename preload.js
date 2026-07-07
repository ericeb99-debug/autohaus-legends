const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('storage', {
    get: async (key) => {
        console.log(`[Preload] storage.get called for ${key}`);
        return await ipcRenderer.invoke('storage-get', key);
    },
    set: (key, value) => {
        console.log(`[Preload] storage.set called for ${key}`);
        return ipcRenderer.invoke('storage-set', key, value);
    }
});

contextBridge.exposeInMainWorld('updater', {
    onStatus: (callback) => {
        if (typeof callback !== 'function') return () => {};
        const handler = (_event, payload) => callback(payload);
        ipcRenderer.on('updater-status', handler);
        return () => ipcRenderer.removeListener('updater-status', handler);
    },
    checkManual: () => ipcRenderer.invoke('update-check-manual'),
    installNow: () => ipcRenderer.invoke('update-install-now')
});

contextBridge.exposeInMainWorld('appInfo', {
    get: () => ipcRenderer.invoke('app-info')
});

contextBridge.exposeInMainWorld('backgrounds', {
    list: () => ipcRenderer.invoke('backgrounds-list')
});
console.log('[Preload] window.storage registered successfully.');
