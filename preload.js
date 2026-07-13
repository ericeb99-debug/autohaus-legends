const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('storage', {
    get: (key) => ipcRenderer.invoke('storage-get', key),
    set: (key, value) => ipcRenderer.invoke('storage-set', key, value)
});

contextBridge.exposeInMainWorld('appLifecycle', {
    requestQuit: () => ipcRenderer.invoke('app-quit-request'),
    confirmQuit: () => ipcRenderer.invoke('app-quit-confirm'),
    cancelQuit: () => ipcRenderer.invoke('app-quit-cancel'),
    toggleFullscreen: () => ipcRenderer.invoke('app-toggle-fullscreen'),
    onQuitRequested: (callback) => {
        if (typeof callback !== 'function') return () => {};
        const handler = (_event, payload) => callback(payload);
        ipcRenderer.on('app-quit-requested', handler);
        return () => ipcRenderer.removeListener('app-quit-requested', handler);
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
