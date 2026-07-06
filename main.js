// Electron-Huelle fuer Autohaus Legends.
// Laedt das unveraenderte Spiel (autodealer-simulator.html) in einem nativen Fenster.
// Das Spiel selbst wird hier NICHT veraendert.
const { app, BrowserWindow, protocol, net, shell, nativeTheme, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs/promises');
const { pathToFileURL } = require('url');

app.setName('Autohaus Legends');

const ROOT = __dirname;
const savesDir = path.join(app.getPath('userData'), 'Saves');

function getFilenameForKey(key) {
  if (key === 'autodealer-profiles' || key === 'autodealer-profiles-v1') return 'profiles.json';
  if (key.startsWith('autodealer-state-v3-')) {
    const profile = key.replace('autodealer-state-v3-', '');
    const cleanProfile = profile.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `save_${cleanProfile}.json`;
  }
  const cleanKey = key.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `${cleanKey}.json`;
}

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } },
]);

// Nur eine Instanz zulassen (zwei Instanzen wuerden sich sonst dieselben Speicherdateien teilen)
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    const win = BrowserWindow.getAllWindows()[0];
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });

  app.whenReady().then(async () => {
    nativeTheme.themeSource = 'dark';
    
    await fs.mkdir(savesDir, { recursive: true });

    ipcMain.handle('storage-get', async (event, key) => {
      console.log(`[Main] storage-get called for key: ${key}`);
      const filename = getFilenameForKey(key);
      const filepath = path.join(savesDir, filename);
      try {
        const content = await fs.readFile(filepath, 'utf8');
        console.log(`[Main] Successfully read ${filename}`);
        return { value: content };
      } catch (e) {
        if (e.code === 'ENOENT') {
          console.log(`[Main] File ${filename} not found, returning null`);
          return { value: null };
        }
        console.error(`[Main] Error reading ${filename}:`, e);
        return { value: null };
      }
    });

    ipcMain.handle('storage-set', async (event, key, value) => {
      console.log(`[Main] storage-set started for key: ${key}`);
      const filename = getFilenameForKey(key);
      const filepath = path.join(savesDir, filename);
      const backupPath = path.join(savesDir, filename.replace('.json', '.backup.json'));
      
      console.log(`[Main] Target file path: ${filepath}`);
      
      if (value === '' || value === null || value === undefined) {
        try { await fs.unlink(filepath); console.log(`[Main] Deleted ${filename}`); } catch(e) {}
        return;
      }
      
      try {
        const exists = await fs.stat(filepath).then(()=>true).catch(()=>false);
        if (exists) {
          await fs.copyFile(filepath, backupPath);
          console.log(`[Main] Backup created: ${backupPath}`);
        }
      } catch (e) {
        console.error(`[Main] Error creating backup for ${filename}:`, e);
      }
      
      try {
        const tempPath = filepath + '.tmp';
        await fs.writeFile(tempPath, value, 'utf8');
        await fs.rename(tempPath, filepath);
        console.log(`[Main] File written successfully: ${filepath}`);
      } catch (e) {
        console.error(`[Main] Error writing ${filename}:`, e);
      }
    });

    protocol.handle('app', (request) => {
      const u = new URL(request.url);
      const rel = decodeURIComponent(u.pathname).replace(/^\/+/, '');
      const file = path.normalize(path.join(ROOT, rel));
      if (!file.startsWith(path.normalize(ROOT + path.sep))) {
        return new Response('Forbidden', { status: 403 });
      }
      return net.fetch(pathToFileURL(file).toString());
    });

    createWindow();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

function createWindow() {
  const win = new BrowserWindow({
    title: 'Autohaus Legends',
    width: 1600,
    height: 900,
    minWidth: 1280,
    minHeight: 720,
    maximizable: true,
    fullscreenable: true,
    autoHideMenuBar: true,        // Menue versteckt; Alt zeigt es, F11 = Vollbild bleibt verfuegbar
    backgroundColor: '#0d1322',   // dunkler App-Hintergrund, passend zum Spiel (kein weisses Aufblitzen)
    show: false,                  // erst zeigen, wenn fertig geladen
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  // Fenstertitel fest auf "Autohaus Legends" halten (Seitentitel des Spiels nicht durchreichen)
  win.on('page-title-updated', (e) => e.preventDefault());

  // Externe Links (falls je vorhanden) im Standardbrowser oeffnen, nie im App-Fenster
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  win.once('ready-to-show', () => win.show());
  win.loadURL('app://game/autodealer-simulator.html');
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
