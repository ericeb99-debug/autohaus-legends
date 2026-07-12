// Electron-Huelle fuer Automotive Empire.
// Laedt das unveraenderte Spiel in einem nativen Fenster.
// Das Spiel selbst wird hier NICHT veraendert.
const { app, BrowserWindow, protocol, net, shell, nativeTheme, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const fsSync = require('fs');
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
let updateCheckInProgress = false;
let updateReadyToInstall = false;

// ============================================================================
// ⚠️ NUR FUER DIE ENTWICKLUNGSPHASE: Signaturpruefung des Auto-Updaters
// ============================================================================
// Die Builds sind aktuell nicht code-signiert. electron-updater prueft unter
// Windows aber die Authenticode-Signatur des heruntergeladenen Installers
// gegen den konfigurierten Publisher ("Automotive Empire" in package.json,
// build.win.signtoolOptions.publisherName) und bricht sonst ab mit:
//   "New version ... is not signed by the application owner"
//
// Solange ALLOW_UNSIGNED_UPDATES = true ist, wird diese Pruefung uebersprungen
// und unsignierte Updates werden akzeptiert.
//
// ⚠️⚠️ WICHTIG — VOR EINEM OEFFENTLICHEN RELEASE ZURUECKSTELLEN! ⚠️⚠️
// Sobald die Builds mit einem echten Zertifikat signiert werden:
//   ALLOW_UNSIGNED_UPDATES auf false setzen (oder den Block entfernen).
// Damit greift automatisch wieder die Standard-Sicherheitspruefung von
// electron-updater — es sind keine weiteren Aenderungen noetig.
// ============================================================================
const ALLOW_UNSIGNED_UPDATES = true;

function isUpdateProviderConfigured() {
  try {
    const updateConfigPath = app.isPackaged
      ? path.join(process.resourcesPath, 'app-update.yml')
      : path.join(ROOT, 'package.json');
    const content = fsSync.readFileSync(updateConfigPath, 'utf8');
    if (app.isPackaged) {
      const owner = (content.match(/^owner:\s*(.+)$/m) || [])[1]?.trim();
      const repo = (content.match(/^repo:\s*(.+)$/m) || [])[1]?.trim();
      return !!(owner && repo && owner !== 'MEIN_GITHUB_NAME' && repo !== 'MEIN_REPO_NAME');
    }
    const config = JSON.parse(content);
    const publish = Array.isArray(config.build?.publish) ? config.build.publish[0] : config.build?.publish;
    return !!(publish?.owner && publish?.repo && publish.owner !== 'MEIN_GITHUB_NAME' && publish.repo !== 'MEIN_REPO_NAME');
  } catch (e) {
    return false;
  }
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

function sendUpdateStatus(type, payload = {}) {
  BrowserWindow.getAllWindows().forEach(win => {
    if (!win.isDestroyed()) win.webContents.send('updater-status', { type, ...payload });
  });
}

async function checkForUpdates(manual = false) {
  if (isDevVariant) {
    sendUpdateStatus('update-disabled', { manual, reason: 'dev-build' });
    return { ok: false, devBuild: true };
  }
  if (!app.isPackaged) {
    sendUpdateStatus('update-disabled', { manual, reason: 'development' });
    return { ok: false, dev: true };
  }
  if (!isUpdateProviderConfigured()) {
    sendUpdateStatus('update-disabled', { manual, reason: 'not-configured' });
    return { ok: false, configured: false };
  }
  if (updateCheckInProgress) return { ok: false, busy: true };
  updateCheckInProgress = true;
  sendUpdateStatus('update-checking', { manual });
  try {
    await autoUpdater.checkForUpdates();
    return { ok: true };
  } catch (error) {
    sendUpdateStatus('update-error', { message: error && error.message ? error.message : String(error) });
    return { ok: false, error: error && error.message ? error.message : String(error) };
  } finally {
    updateCheckInProgress = false;
  }
}

function setupAutoUpdater() {
  ipcMain.handle('update-check-manual', () => checkForUpdates(true));
  ipcMain.handle('update-install-now', () => {
    if (isDevVariant) return { ok: false, devBuild: true };
    if (!app.isPackaged) return { ok: false, dev: true };
    if (!updateReadyToInstall) return { ok: false, ready: false };
    autoUpdater.quitAndInstall(false, true);
    return { ok: true };
  });

  if (isDevVariant) {
    console.log('[Updater] Auto-update disabled in DEV variant.');
    return;
  }

  autoUpdater.autoDownload = false;
  autoUpdater.allowDowngrade = false;
  autoUpdater.allowPrerelease = false;

  if (process.platform === 'win32' && ALLOW_UNSIGNED_UPDATES) {
    // Ersetzt die Windows-Signaturpruefung des Updaters. Rueckgabe null
    // bedeutet fuer electron-updater "Signatur in Ordnung" — unsignierte
    // Entwicklungs-Builds werden dadurch installiert.
    // ⚠️ Vor einem oeffentlichen Release: ALLOW_UNSIGNED_UPDATES = false
    // (siehe grossen Hinweisblock am Dateianfang).
    autoUpdater.verifyUpdateCodeSignature = () => Promise.resolve(null);
    console.log('[Updater] WARNUNG: Signaturpruefung deaktiviert (ALLOW_UNSIGNED_UPDATES=true, nur Entwicklungsphase).');
  }

  autoUpdater.on('checking-for-update', () => {
    sendUpdateStatus('update-checking');
  });
  autoUpdater.on('update-available', info => {
    sendUpdateStatus('update-available', { version: info.version });
    autoUpdater.downloadUpdate().catch(error => {
      sendUpdateStatus('update-error', { message: error && error.message ? error.message : String(error) });
    });
  });
  autoUpdater.on('update-not-available', info => {
    sendUpdateStatus('update-not-available', { version: info.version });
  });
  autoUpdater.on('download-progress', progress => {
    sendUpdateStatus('update-download-progress', {
      percent: Math.round(progress.percent || 0),
      transferred: progress.transferred,
      total: progress.total,
      bytesPerSecond: progress.bytesPerSecond,
    });
  });
  autoUpdater.on('update-downloaded', info => {
    updateReadyToInstall = true;
    sendUpdateStatus('update-downloaded', { version: info.version });
  });
  autoUpdater.on('error', error => {
    sendUpdateStatus('update-error', { message: error && error.message ? error.message : String(error) });
  });

  if (!app.isPackaged) {
    console.log('[Updater] Auto-update disabled in development mode.');
    return;
  }
  if (!isUpdateProviderConfigured()) {
    console.log('[Updater] Auto-update disabled until GitHub owner/repo are configured.');
    return;
  }
  setTimeout(() => {
    checkForUpdates(false).catch(error => {
      sendUpdateStatus('update-error', { message: error && error.message ? error.message : String(error) });
    });
  }, 8000);
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
      updaterEnabled: !isDevVariant,
      userDataPath: app.getPath('userData'),
    }));

    ipcMain.handle('backgrounds-list', () => listBackgroundImages());

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
    setupAutoUpdater();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

function createWindow() {
  const windowOptions = {
    title: APP_DISPLAY_NAME,
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
  };

  // Windows behaelt exakt das bisherige ICO. Unter macOS stammt das App-Icon
  // nativ aus dem signierten .app-Bundle (electron-builder / ICNS).
  if (process.platform === 'win32') {
    windowOptions.icon = path.join(__dirname, 'assets', 'logos', 'automotive-empire-icon.ico');
  }

  const win = new BrowserWindow(windowOptions);

  // Fenstertitel fest auf den App-Namen halten (Seitentitel des Spiels nicht durchreichen)
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
