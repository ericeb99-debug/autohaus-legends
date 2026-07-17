// Electron-Huelle fuer Automotive Empire.
// Laedt das unveraenderte Spiel in einem nativen Fenster.
// Das Spiel selbst wird hier NICHT veraendert.
const { app, BrowserWindow, protocol, net, shell, nativeTheme, ipcMain, screen } = require('electron');
const path = require('path');
const fs = require('fs/promises');
const { pathToFileURL } = require('url');

const isDevVariant = process.env.AUTOMOTIVE_EMPIRE_DEV === '1' || process.argv.includes('--dev') || /\bdev\b/i.test(app.getName());
const APP_DISPLAY_NAME = isDevVariant ? 'Automotive Empire DEV' : 'Automotive Empire';
const APP_USER_MODEL_ID = isDevVariant ? 'de.eric.automotive-empire.dev' : 'de.eric.automotive-empire';
const LEGACY_APP_DISPLAY_NAME = isDevVariant ? 'Autohaus Legends DEV' : 'Autohaus Legends';

app.setName(APP_DISPLAY_NAME);
if (process.platform === 'win32') app.setAppUserModelId(APP_USER_MODEL_ID);
const userDataDir = path.join(app.getPath('appData'), APP_DISPLAY_NAME);
const legacyUserDataDir = path.join(app.getPath('appData'), LEGACY_APP_DISPLAY_NAME);
app.setPath('userData', userDataDir);

const ROOT = __dirname;
const savesDir = path.join(userDataDir, 'Saves');
const storageDirs = ['Local Storage', 'Session Storage'];
const backgroundImageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp']);
const windowStatePath = path.join(userDataDir, 'window-state.json');
const storageWriteQueues = new Map();
let mainWindow = null;
let allowAppQuit = false;
let quitRequestPending = false;
let windowStateTimer = null;
let windowStateWriteQueue = Promise.resolve();

async function readWindowState() {
  try { return JSON.parse(await fs.readFile(windowStatePath, 'utf8')); }
  catch (_) { return { fullscreen: true }; }
}
function persistWindowState(state) {
  windowStateWriteQueue = windowStateWriteQueue.catch(()=>{}).then(async () => {
    await fs.mkdir(path.dirname(windowStatePath), { recursive: true });
    await fs.writeFile(windowStatePath + '.tmp', JSON.stringify(state), 'utf8');
    await fs.rename(windowStatePath + '.tmp', windowStatePath);
  });
  return windowStateWriteQueue;
}
function scheduleWindowStateSave(win) {
  if (!win || win.isDestroyed() || win.isFullScreen()) return;
  clearTimeout(windowStateTimer);
  windowStateTimer = setTimeout(async () => {
    if (!win || win.isDestroyed() || win.isFullScreen()) return;
    const bounds = win.getBounds();
    const state = { fullscreen: false, bounds, displayId: screen.getDisplayMatching(bounds).id };
    try { await persistWindowState(state); }
    catch (error) { console.error('[Window] Could not persist window state:', error); }
  }, 350);
}
async function writeFullscreenPreference(win, fullscreen) {
  const previous = await readWindowState();
  const next = {...previous, fullscreen: !!fullscreen};
  if (win && !win.isDestroyed() && !fullscreen) {
    next.bounds = win.getBounds();
    next.displayId = screen.getDisplayMatching(next.bounds).id;
  }
  try { await persistWindowState(next); }
  catch (error) { console.error('[Window] Could not persist fullscreen preference:', error); }
}
function queueStorageWrite(key, task) {
  const previous = storageWriteQueues.get(key) || Promise.resolve();
  const current = previous.catch(()=>{}).then(task).finally(() => {
    if (storageWriteQueues.get(key) === current) storageWriteQueues.delete(key);
  });
  storageWriteQueues.set(key, current);
  return current;
}
function requestSafeQuit(reason) {
  if (allowAppQuit || quitRequestPending) return;
  const win = mainWindow && !mainWindow.isDestroyed() ? mainWindow : BrowserWindow.getAllWindows()[0];
  if (!win || win.webContents.isDestroyed()) { allowAppQuit = true; app.quit(); return; }
  quitRequestPending = true;
  if (win.isMinimized()) win.restore();
  win.show();
  win.focus();
  win.webContents.send('app-quit-requested', { reason: reason || 'system' });
}

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

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch (e) {
    return false;
  }
}

async function directoryHasEntries(target) {
  const entries = await fs.readdir(target).catch(() => []);
  return entries.length > 0;
}

async function copyIfTargetMissing(source, target) {
  if (!(await pathExists(source)) || (await pathExists(target))) return;
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.cp(source, target, { recursive: true, force: false, errorOnExist: false });
}

async function migrateLegacyUserDataIfNeeded() {
  if (userDataDir === legacyUserDataDir || !(await pathExists(legacyUserDataDir))) return;

  const legacySavesDir = path.join(legacyUserDataDir, 'Saves');
  const newSavesDir = path.join(userDataDir, 'Saves');
  if (await pathExists(legacySavesDir)) {
    const newSavesAlreadyUsed = await directoryHasEntries(newSavesDir);
    if (!newSavesAlreadyUsed) {
      await fs.mkdir(userDataDir, { recursive: true });
      await fs.cp(legacySavesDir, newSavesDir, { recursive: true, force: false, errorOnExist: false });
    }
  }

  await Promise.all(storageDirs.map(dir =>
    copyIfTargetMissing(path.join(legacyUserDataDir, dir), path.join(userDataDir, dir)).catch(() => {})
  ));
}

async function listBackgroundImages() {
  const root = path.join(ROOT, 'assets', 'backgrounds');
  const results = [];

  async function walk(dir, prefix = '') {
    const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(dir, entry.name);
      const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        await walk(fullPath, rel);
        continue;
      }
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!backgroundImageExtensions.has(ext)) continue;
      results.push(rel.replace(/\\/g, '/'));
    }
  }

  await walk(root);
  return results.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

async function resetGameData() {
  await fs.mkdir(savesDir, { recursive: true });
  const entries = await fs.readdir(savesDir, { withFileTypes: true }).catch(() => []);
  const saveFilePattern = /^(profiles(?:\.backup)?|save_[a-z0-9-]+(?:\.backup)?)\.json$/i;
  await Promise.all(entries
    .filter(entry => entry.isFile() && saveFilePattern.test(entry.name))
    .map(entry => fs.unlink(path.join(savesDir, entry.name)).catch(() => {})));

  await Promise.all(storageDirs.map(dir =>
    fs.rm(path.join(app.getPath('userData'), dir), { recursive: true, force: true }).catch(() => {})
  ));
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

    if (process.argv.includes('--reset-game-data')) {
      await resetGameData();
      app.quit();
      return;
    }
    
    await migrateLegacyUserDataIfNeeded();
    await fs.mkdir(savesDir, { recursive: true });

    ipcMain.handle('app-info', () => ({
      name: APP_DISPLAY_NAME,
      isDev: isDevVariant,
      userDataPath: app.getPath('userData'),
    }));

    ipcMain.handle('backgrounds-list', () => listBackgroundImages());

    ipcMain.handle('storage-get', async (event, key) => {
      const filename = getFilenameForKey(key);
      const filepath = path.join(savesDir, filename);
      try {
        const content = await fs.readFile(filepath, 'utf8');
        return { value: content };
      } catch (e) {
        if (e.code === 'ENOENT') {
          return { value: null };
        }
        console.error(`[Main] Error reading ${filename}:`, e);
        return { value: null };
      }
    });

    ipcMain.handle('storage-set', async (event, key, value) => {
      return queueStorageWrite(key, async () => {
        const filename = getFilenameForKey(key);
        const filepath = path.join(savesDir, filename);
        const backupPath = path.join(savesDir, filename.replace('.json', '.backup.json'));
        if (value === '' || value === null || value === undefined) {
          try { await fs.unlink(filepath); } catch(e) {}
          return;
        }
        try {
          const exists = await fs.stat(filepath).then(()=>true).catch(()=>false);
          if (exists) await fs.copyFile(filepath, backupPath);
        } catch (e) {
          console.error(`[Main] Error creating backup for ${filename}:`, e);
        }
        const tempPath = filepath + '.tmp';
        await fs.writeFile(tempPath, value, 'utf8');
        await fs.rename(tempPath, filepath);
      });
    });

    ipcMain.handle('app-quit-request', () => requestSafeQuit('button'));
    ipcMain.handle('app-quit-cancel', () => { quitRequestPending = false; });
    ipcMain.handle('app-quit-confirm', async () => {
      await Promise.allSettled([...storageWriteQueues.values()]);
      allowAppQuit = true;
      quitRequestPending = false;
      app.quit();
    });
    ipcMain.handle('app-toggle-fullscreen', () => {
      const win = mainWindow;
      if (!win || win.isDestroyed()) return false;
      win.setFullScreen(!win.isFullScreen());
      return win.isFullScreen();
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

    createWindow(await readWindowState());
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

function createWindow(windowState = {fullscreen:true}) {
  const displays = screen.getAllDisplays();
  const preferredDisplay = displays.find(d => String(d.id) === String(windowState.displayId)) || screen.getPrimaryDisplay();
  const area = preferredDisplay.workArea;
  const saved = windowState.bounds;
  const savedVisible = saved && displays.some(d => {
    const a=d.workArea; return saved.x < a.x+a.width-80 && saved.x+saved.width > a.x+80 && saved.y < a.y+a.height-80 && saved.y+saved.height > a.y+80;
  });
  const width = savedVisible ? Math.max(1280, saved.width) : Math.min(1600, area.width);
  const height = savedVisible ? Math.max(720, saved.height) : Math.min(900, area.height);
  const x = savedVisible ? saved.x : Math.round(area.x + (area.width-width)/2);
  const y = savedVisible ? saved.y : Math.round(area.y + (area.height-height)/2);
  const win = new BrowserWindow({
    title: APP_DISPLAY_NAME,
    x, y, width, height,
    minWidth: 1280,
    minHeight: 720,
    maximizable: true,
    fullscreenable: true,
    fullscreen: windowState.fullscreen !== false,
    autoHideMenuBar: true,        // Menue versteckt; Alt zeigt es, F11 = Vollbild bleibt verfuegbar
    backgroundColor: '#0d1322',   // dunkler App-Hintergrund, passend zum Spiel (kein weisses Aufblitzen)
    show: false,                  // erst zeigen, wenn fertig geladen
    icon: path.join(__dirname, 'assets', 'logos', 'automotive-empire-icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  mainWindow = win;

  // Fenstertitel fest auf den App-Namen halten (Seitentitel des Spiels nicht durchreichen)
  win.on('page-title-updated', (e) => e.preventDefault());

  // Externe Links (falls je vorhanden) im Standardbrowser oeffnen, nie im App-Fenster
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  win.on('move', () => scheduleWindowStateSave(win));
  win.on('resize', () => scheduleWindowStateSave(win));
  win.on('enter-full-screen', () => writeFullscreenPreference(win, true));
  win.on('leave-full-screen', () => writeFullscreenPreference(win, false));
  win.on('close', event => {
    if (allowAppQuit) return;
    event.preventDefault();
    requestSafeQuit('window');
  });
  win.webContents.on('before-input-event', (event, input) => {
    const altEnter = input.type==='keyDown' && input.alt && input.key==='Enter';
    const f11 = input.type==='keyDown' && input.key==='F11';
    if (!altEnter && !f11) return;
    event.preventDefault();
    win.setFullScreen(!win.isFullScreen());
  });
  const revealWindow = () => {
    if (!win.isDestroyed() && !win.isVisible()) win.show();
  };
  win.once('ready-to-show', revealWindow);
  win.webContents.once('did-finish-load', revealWindow);
  win.loadURL('app://game/autodealer-simulator.html').catch(error => {
    console.error('[Window] Could not load game UI:', error);
    revealWindow();
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('before-quit', event => {
  if (allowAppQuit) return;
  event.preventDefault();
  requestSafeQuit('system');
});
