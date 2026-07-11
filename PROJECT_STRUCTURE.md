# Automotive Empire - Projektstruktur

Diese Datei dokumentiert die technische Struktur des Projekts. Sie ist eine dauerhafte Orientierungshilfe und muss bei neuen Dateien, verschobenen Systemen oder groesseren Refactorings mit aktualisiert werden.

Wichtig: Diese Dokumentation beschreibt den aktuellen Aufbau. Viele Spielsysteme liegen nach dem ersten Refactoring weiterhin bewusst in `js/app.js`, damit sich fuer Spieler nichts aendert.

## Projektstruktur

| Pfad | Zweck |
| --- | --- |
| `autodealer-simulator.html` | Schlanke HTML-Shell. Laedt CSS, Daten-Scripts und App-Script in fester Reihenfolge. |
| `css/` | Stylesheets fuer Layout, UI, Login, Dashboard, Design, Updates und alle Komponenten. |
| `js/` | JavaScript-Laufzeit der Anwendung. |
| `data/` | Ausgelagerte Datenbloecke wie Changelog, Fahrzeuge und Achievements. |
| `assets/` | Grafische Assets wie Logos, App-Icon und Hintergruende. |
| `scripts/` | Node-/Build-Hilfsscripts. |
| `build/` | Build-/Installer-Ressourcen, soweit vorhanden. |
| `dist/` | Release-Build-Ausgabe. Generiert, nicht als Quellstruktur behandeln. |
| `dist-dev/` | DEV-Build-Ausgabe. Generiert, nicht als Quellstruktur behandeln. |
| `node_modules/` | Installierte npm-Abhaengigkeiten. |
| `.agents/`, `.claude/` | Tool-/Agent-Konfiguration. Nicht Teil der Spiel-Logik. |

## CSS

| Datei | Aufgabe | Enthaltene Bereiche |
| --- | --- | --- |
| `css/main.css` | Zentrales Stylesheet fuer das komplette Spiel. | Grundlayout, Premium-UI, Glasoptik, Login, Dock, Bottom-Bar, Karten, Tabellen, Modals, Dashboard, Designbereich, ECU-Tuning, Updates & News, Responsive-Regeln. |

Aktueller Hinweis: CSS ist derzeit in einer Datei gebuendelt. Wenn spaeter weiter aufgeteilt wird, sollten typische Zielbereiche sein:

| Zukuenftige Datei | Geplanter Zweck |
| --- | --- |
| `css/login.css` | Login- und Profilstartscreen. |
| `css/dashboard.css` | Dashboard, KPI-Karten, Tagesuebersicht. |
| `css/components.css` | Buttons, Karten, Tabellen, Modals, Toasts, Badges. |
| `css/design.css` | Design- und Hintergrundauswahl. |
| `css/updates.css` | Updates-&-News-Seite. |

## JavaScript

### Aktive Dateien

| Datei | Aufgabe | Wichtige Funktionen / Bereiche | Abhaengigkeiten |
| --- | --- | --- | --- |
| `js/app.js` | Hauptlaufzeit des Spiels. Enthaelt aktuell die meisten Systeme und startet die Anwendung. | `init()`, Login/Profile, Navigation, Rendering, State-Migration, Speicheraufrufe, Kundenlogik, Fahrzeuge, Werkstatt, ECU-Tuning, Finanzierung, Vertraege, Lieferungen, Design, Updates & News, Auto-Updater-Bridge, UI-Helfer. | Muss nach `data/changelog.js`, `data/vehicles.js`, `data/achievements.js` und `data/ecu.js` geladen werden. Nutzt `window.storage`, `window.updater`, `window.appInfo` aus `preload.js`. |

### Wichtige Bereiche innerhalb von `js/app.js`

| Bereich | Wo aktuell suchen | Hinweise |
| --- | --- | --- |
| App-Start | `init()` in `js/app.js` | Initialisiert Runtime-Infos, Updater-Bridge, Hintergruende und Login. |
| Navigation | `navigateTo()`, `renderSidebar()`, `renderBottomBar()` | Steuert Seitenwechsel, Dock und Bottom-Bar. |
| Profile/Login | `renderProfileLogin()`, `createProfileFromLogin()`, `loadProfile()` | Nutzt native Speicherung ueber `window.storage`. |
| State/Speicherlogik | `defaultState()`, `migrateState()`, `saveNow()`, `storageGet()`, `storageSet()` | Interne Save-Keys nicht ohne Migration aendern. |
| Kunden | Kunden-, Offers-, Reviews- und Chat-Funktionen in `js/app.js` | Datenbasis teilweise in `data/vehicles.js`. |
| Fahrzeuge | `generateCar()`, Markt-, Bestand-, Inserat- und Fahrzeugdatei-Funktionen | Marken-/Modell- und Fahrzeugdaten liegen in `data/vehicles.js`. |
| Werkstatt | Werkstatt-Jobs und Reparatur-/Servicefunktionen in `js/app.js` | Kein separates Modul. |
| Finanzierung | Bank-, Finanzierungs-, Leasing- und Ratenlogik in `js/app.js` | Forderungen/Receivables ebenfalls hier. |
| Vertraege | Vertragslisten, Forderungen, Mahnungen, Archivierung in `js/app.js` | Eng mit Finanzierung verknuepft. |
| Fahrzeugboerse | Markt- und Ankaufsfunktionen in `js/app.js` | Nutzt `BRANDS` aus `data/vehicles.js`. |
| Design | Hintergrundauswahl, Themes, Transparenz und Glasoptik in `js/app.js` | Hintergrundbilder werden dynamisch aus `assets/backgrounds/` gelesen. |
| Updates & News | Rendering in `js/app.js`, Daten in `data/changelog.js` | Keine Versionsnummern sichtbar anzeigen. |
| Notizblock | Derzeit kein aktives Notizblock-System im Quellstand. | Falls das Feature neu kommt, hier dokumentieren und Updates & News pflegen. |
| ECU / Tuning | `renderEcuTuning()`, `generateEcuRequest()`, `finishEcuAnalysis()`, `finishEcuProgramming()` in `js/app.js` | Konfiguration liegt in `data/ecu.js`; Anfragen entstehen selten im Tageswechsel und nutzen eigene State-Felder. |

### Sinnvolle naechste JS-Aufteilungen

Wenn weiter refactored wird, nur schrittweise und ohne Logik neu zu schreiben:

| Ziel-Datei | Geplanter Inhalt |
| --- | --- |
| `js/storage.js` | `storageGet`, `storageSet`, `saveNow`, Profil-Speicherung. |
| `js/state.js` | `defaultState`, Migrationen, State-Reparaturen. |
| `js/navigation.js` | Sidebar, Bottom-Bar, Programmfenster, Seitenwechsel. |
| `js/ui.js` | Modals, Toasts, Helper, Icons, Render-Helfer. |
| `js/customers.js` | Kunden, Angebote, Chat, Bewertungen. |
| `js/vehicles.js` | Fahrzeugerzeugung, Markt, Bestand, Inserate. |
| `js/workshop.js` | Werkstatt und Reparaturprozesse. |
| `js/ecu.js` | Zukuenftige Auslagerung des ECU-/Softwaretuning-Ablaufs, falls das System weiter waechst. |
| `js/finance.js` | Finanzen, Bank, Kredite, Cashflow. |
| `js/contracts.js` | Vertraege, Forderungen, Mahnwesen. |
| `js/design.js` | Hintergruende, Themes, Glasoptik. |
| `js/updates.js` | Updates-&-News-Rendering und Update-Hinweise. |

## Data

| Datei | Aufgabe | Hinweise |
| --- | --- | --- |
| `data/changelog.js` | Updates-&-News-Daten. | Neue Spielaenderungen immer oben einfuegen. Im Spiel keine sichtbaren Versionsnummern anzeigen. |
| `data/vehicles.js` | Fahrzeug-, Marken-, Kunden- und Fahrzeugdatei-Daten. | Enthaelt u. a. `BRANDS`, Fahrzeugkategorien, Kunden-/KI-Typen und Fahrzeugzustandsdaten. |
| `data/achievements.js` | Achievement-Definitionen. | Enthaelt Bedingungen, Labels, Icons, Seltenheiten und XP-Werte. |
| `data/ecu.js` | ECU-/Softwaretuning-Konfiguration. | Enthaelt Tune-Pakete, Preise, Risiken, Kompatibilitaetsgrundlagen, Kundenwunsch-Gewichtung und Steuergeraete-Codes. |
| `assets/backgrounds/` | Dynamische Hintergrund-Galerie fuer den Designbereich. | Alle unterstuetzten Bilddateien in diesem Ordner werden automatisch erkannt. |

## Assets

| Bereich | Pfad | Inhalt |
| --- | --- | --- |
| Logo-Quelle | `assets/logos/app-logo.png` | Einziges offizielles Automotive-Empire-Markenlogo mit transparentem Hintergrund fuer alle In-App-Bereiche. |
| Windows-Icon | `assets/logos/automotive-empire-icon.ico` | Offizielles Mehrgroessen-Icon fuer EXE, Fenster, Taskleiste, Desktop-Verknuepfung und Installer. |
| macOS-Icon | `assets/logos/automotive-empire-icon.icns` | Offizielles Mehrgroessen-Icon fuer macOS-App-Bundles. |
| Linux-/PNG-Icons | `assets/logos/automotive-empire-icon-{16,32,48,64,128,256,512,1024}.png` | Aus dem offiziellen Logo skalierte Plattform- und Release-Assets. |
| Hintergruende | `assets/backgrounds/` | Alle `.webp`, `.png`, `.jpg`, `.jpeg`, `.gif` und `.avif` Dateien werden automatisch als auswählbare Hintergruende erkannt. Dateinamen werden intern fuer IDs genutzt, aber im Spiel nicht angezeigt. |
| Hintergrund-Konfiguration | Keine manuelle Liste erforderlich. | Der Electron-Hauptprozess liest den Ordner dynamisch und stellt die Liste ueber `preload.js` fuer den Renderer bereit. |
| Sounds | Nicht vorhanden. | Wenn Sounds ergaenzt werden, unter `assets/sounds/` dokumentieren. |
| Schriftarten | Extern via Google Fonts im HTML geladen. | Link steht in `autodealer-simulator.html`. |
| Icons | UI-Icons sind aktuell groesstenteils Inline-SVGs/Funktionen in `js/app.js`. | App-Icon liegt separat unter `assets/logos/`. |

## Electron

| Datei | Aufgabe |
| --- | --- |
| `main.js` | Electron-Hauptprozess. Erstellt das BrowserWindow, setzt App-Name/UserData-Pfad, verwaltet Native File Storage, IPC, Protokoll-Handler und Auto-Updater. |
| `preload.js` | Sichere Bridge zwischen Renderer und Electron. Stellt `window.storage`, `window.updater` und `window.appInfo` bereit. |
| `package.json` | npm-Scripts, Release-Build-Konfiguration, electron-builder Release-Settings, Installer-/Portable-Namen. |
| `electron-builder.dev.json` | DEV-Build-Konfiguration mit getrenntem Produktnamen, eigener App-ID, `dist-dev`-Ausgabe und deaktivierter Update-Verteilung. |
| `scripts/after-pack-dev.js` | Entfernt Update-Konfiguration aus DEV-Builds, damit DEV keinen Auto-Updater nutzt. |
| `scripts/reset-game-data.js` | Hilfsscript zum Zuruecksetzen der Spieldaten im aktuellen UserData-Ordner. Vorsichtig verwenden. |

### Build-Scripts

| Befehl | Zweck |
| --- | --- |
| `npm start` | Release-Modus lokal starten. |
| `npm run start:dev` | DEV-Modus lokal starten. |
| `npm run build` | Release-Installer und Portable bauen. |
| `npm run build:dev` | DEV-Installer und Portable bauen, ohne Auto-Updater. |

## Suchfunktion: Wenn ich etwas aendern moechte

| Thema | Datei / Bereich |
| --- | --- |
| Login | `js/app.js` (`renderProfileLogin`) und `css/main.css` |
| Dashboard | `js/app.js` und `css/main.css` |
| Werkstatt | `js/app.js` |
| Kunden | `js/app.js`, Daten teilweise `data/vehicles.js` |
| Fahrzeuge | `js/app.js`, Daten in `data/vehicles.js` |
| Fahrzeugboerse | `js/app.js`, `data/vehicles.js` |
| Finanzierung | `js/app.js` |
| Vertraege | `js/app.js` |
| Updates & News | Daten: `data/changelog.js`, Rendering: `js/app.js`, Styles: `css/main.css` |
| Notizblock | Derzeit kein aktives System. Bei neuer Einfuehrung Modul/Datei hier ergaenzen. |
| ECU | Ablauf/Rendering: `js/app.js`, Daten: `data/ecu.js`, Styles: `css/main.css` |
| Finanzen | `js/app.js` |
| Design | `js/app.js`, `css/main.css`, `assets/backgrounds/` |
| Icons / Branding | `assets/logos/`, In-App-Verweise in `js/app.js`, Build-Verweise in `package.json`, `electron-builder.dev.json` und `main.js` |
| Hintergruende | Ordner: `assets/backgrounds/`, Erkennung: `main.js` + `preload.js`, Anzeige/Design und Update-Karten: `js/app.js` |
| Auto-Updater | `main.js`, `preload.js`, `package.json`, `scripts/after-pack-dev.js` |
| DEV-Build | `electron-builder.dev.json`, `package.json`, `main.js`, `scripts/after-pack-dev.js` |
| Release-Build | `package.json`, `main.js` |
| Native File Storage | `main.js`, `preload.js`, Speicheraufrufe in `js/app.js` |
| Profile/Speicherstaende | `js/app.js`, `main.js` |

## Wartung

Diese Datei muss automatisch mit gepflegt werden, wenn:

- neue Ordner oder Dateien entstehen,
- Systeme aus `js/app.js` in eigene Dateien verschoben werden,
- neue Daten-Dateien unter `data/` entstehen,
- Assets verschoben, geloescht oder umbenannt werden,
- Build-/Electron-Dateien geaendert werden,
- neue Spielsysteme wie Notizblock, ECU oder weitere Module hinzukommen.

Standardablauf bei Struktur- oder Systemaenderungen:

1. Code-/Asset-Aenderung umsetzen.
2. `PROJECT_STRUCTURE.md` aktualisieren.
3. Falls spielrelevant: `data/changelog.js` mit spielerfreundlichem Updates-&-News-Eintrag aktualisieren.
4. Keine sichtbaren Versionsnummern im Spiel ergaenzen.
5. `package.json`-Version und `GAME_VERSION` nicht automatisch aendern.
