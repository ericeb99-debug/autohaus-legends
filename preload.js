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
console.log('[Preload] window.storage registered successfully.');
