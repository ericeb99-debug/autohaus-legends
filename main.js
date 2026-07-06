// Electron-Huelle fuer Autohaus Legends.
// Laedt das unveraenderte Spiel (autodealer-simulator.html) in einem nativen Fenster.
// Das Spiel selbst wird hier NICHT veraendert.
const { app, BrowserWindow, protocol, net, shell, nativeTheme } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = __dirname;

// Eigenes app://-Protokoll statt file://: verhaelt sich wie ein Webserver, damit
// relative Pfade und fetch() (z.B. assets/backgrounds/backgrounds.json) exakt wie
// im Browser funktionieren. file:// wuerde fetch auf lokale Dateien blockieren.
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } },
]);

// Nur eine Instanz zulassen (zwei Instanzen wuerden sich das localStorage-Profil streitig machen)
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

  app.whenReady().then(() => {
    nativeTheme.themeSource = 'dark';

    protocol.handle('app', (request) => {
      const u = new URL(request.url);
      const rel = decodeURIComponent(u.pathname).replace(/^\/+/, '');
      const file = path.normalize(path.join(ROOT, rel));
      // Zugriff strikt auf den App-Ordner begrenzen
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
