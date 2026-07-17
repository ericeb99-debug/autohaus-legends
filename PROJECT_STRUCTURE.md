# Automotive Empire - Projektstruktur

Diese Datei dokumentiert die technische Struktur des Projekts. Sie ist eine dauerhafte Orientierungshilfe und muss bei neuen Dateien, verschobenen Systemen oder groesseren Refactorings mit aktualisiert werden.

Wichtig: Diese Dokumentation beschreibt den aktuellen Aufbau. Viele Spielsysteme liegen nach dem ersten Refactoring weiterhin bewusst in `js/app.js`, damit sich fuer Spieler nichts aendert.

## Projektstruktur

| Pfad | Zweck |
| --- | --- |
| `autodealer-simulator.html` | Schlanke HTML-Shell. Laedt CSS, Daten-Scripts inklusive Händlerbörse-Read-Model und App-Script in fester Reihenfolge. |
| `css/` | Stylesheets fuer Layout, UI, Login, Dashboard, Design, Updates und alle Komponenten. |
| `js/` | JavaScript-Laufzeit der Anwendung. |
| `data/` | Ausgelagerte Datenbloecke wie Changelog, Fahrzeuge und Achievements. |
| `assets/` | Grafische Assets wie Logos, App-Icon und Hintergruende. |
| `assets/vehicles/` | Modellgenaue Fahrzeugbilder: fünf feste Klassenstudios unter `backgrounds/` und je Modell zwei transparente Lackvarianten unter `colors/`. |
| `assets/programs/heroes/` | Originale 4K-Hero-Motive fuer alle 23 Programmkarten sowie displaygerechte JPEG-Derivate unter `optimized/960/`, `optimized/1280/` und `optimized/1920/`. Die Runtime waehlt anhand realer Kartengroesse und DPR die kleinste scharfe Variante. |
| `Performance Analysis/` | Technische, messwertorientierte Performance-Analysen. Enthaelt aktuell genau den Programme-Menue-Bericht `Performance Analysis Report.txt`. |
| `Design Concepts/` | Architektur- und Gameplay-Konzepte fuer neue oder noch nicht implementierte Systeme. Enthaelt die Haendlerboerse-Konzepte. |
| `scripts/` | Node-/Build- und lokale Entwickler-Hilfsscripts. |
| `build/` | Build-/Installer-Ressourcen, soweit vorhanden. |
| `dist/` | Release-Build-Ausgabe. Generiert, nicht als Quellstruktur behandeln. |
| `dist-dev/` | DEV-Build-Ausgabe. Generiert, nicht als Quellstruktur behandeln. |
| `node_modules/` | Installierte npm-Abhaengigkeiten. |
| `.agents/`, `.claude/` | Tool-/Agent-Konfiguration. Nicht Teil der Spiel-Logik. |
| `.codex/skills/graphify/` | Projektlokale Graphify-Skill-Anweisungen und Referenzen fuer Codex. |
| `.codex/hooks.json` | Projektlokaler Codex-Hook, der vor Werkzeugaufrufen auf den Graphify-Wissensgraphen hinweist. |
| `.graphifyignore` | Ausschlussregeln fuer lokale Laufzeiten, Builds, Abhaengigkeiten und binaere Medien beim Graph-Aufbau. |
| `.tools/graphify/` | Ignorierte, isolierte Python-Laufzeit mit Graphify. Wird nicht eingecheckt. |
| `graphify-out/` | Generierter, abfragbarer Projektgraph mit `graph.json`, Bericht, HTML-Visualisierung und Cache. |

## CSS

| Datei | Aufgabe | Enthaltene Bereiche |
| --- | --- | --- |
| `css/main.css` | Zentrales Stylesheet fuer das komplette Spiel. | Grundlayout, Premium-UI, Glasoptik, Login, Dock, Bottom-Bar, Karten, Tabellen, Modals, Dashboard, Designbereich, ECU-Tuning, Updates & News, Responsive-Regeln. |
| `css/dealer-exchange-broadcast.css` | Visuelle Broadcast-Schicht der Händlerbörse LIVE. | Nahezu deckende Live-Bühne, echte Bestandsfahrzeugdarstellung, Preis- und Countdown-Hierarchie, Live-Kennzeichnung, Fokusabdunklung und ausführliche Karten für eigene Auktionen. |

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
| `js/performance-manager.js` | Zentrale technische Performance-Schicht. | DOM-/HTML-/Asset-/Memo-Caches, persistente Seitenfenster, Render-/Update-/Animationsqueues, Event-Scopes, Messpunkte und Session-Cleanup. | Muss direkt vor `js/app.js` geladen werden und stellt `window.performanceManager` bereit. |
| `js/dealer-exchange-engine.js` | Deterministischer Simulationskern der Händlerbörse LIVE. | Phase-6.1-Migration, Händlerstrategien, Beziehungen, Direktangebote, Fahrzeugpakete, Großaufträge, wirtschaftliche Live-Auktionen, Spieler-Einlieferungen, Reservepreise, KI-Bietverhalten, Gebotsescrow, Zeitverlängerung, atomare Zuschläge, Historien, Eventlog und budgetierte Scheduler. | Wird nach `data/dealer-exchange.js` und vor `js/app.js` geladen; besitzt keine DOM-Abhängigkeit. |
| `js/app.js` | Hauptlaufzeit des Spiels. Enthaelt aktuell die meisten Systeme und startet die Anwendung. | `init()`, Login/Profile, Navigation, Rendering, State-Migration, Speicheraufrufe, Kundenlogik, Fahrzeuge, Händlerbörse LIVE, Werkstatt, ECU-Tuning, Finanzierung, Vertraege, Lieferungen, Design, Updates & News, UI-Helfer. | Muss nach den Daten-Scripts einschließlich `data/dealer-exchange.js` und nach `js/performance-manager.js` geladen werden. Nutzt `window.storage` und `window.appInfo` aus `preload.js`. |

### Wichtige Bereiche innerhalb von `js/app.js`

| Bereich | Wo aktuell suchen | Hinweise |
| --- | --- | --- |
| App-Start | `init()` in `js/app.js`, `createWindow()` in `main.js` | Initialisiert Runtime-Infos, Lifecycle-Bridge, Hintergruende und Login; Electron startet standardmaessig im echten Vollbild und merkt eine bewusste Fenstermodus-Auswahl. |
| Performance | `window.performanceManager` in `js/performance-manager.js` | Verwaltet UI-/DOM-/Asset-Caches, persistente Seiten-DOMs, Frame-Queues, Memoisierung, Listener-Scopes, Messwerte und kontrolliertes Session-Cleanup. |
| Navigation | `navigateTo()`, `renderSidebar()`, `renderBottomBar()`, `installProgramLauncherShortcuts()` | Steuert Seitenwechsel, Dock und Bottom-Bar; Programme-Launcher und Händlerbörse-LIVE-Direktzugriff liegen dauerhaft außerhalb der konfigurierbaren Tabs. Der Programme-Launcher reagiert zusätzlich auf F1 sowie Strg+Leertaste. |
| Programme-Fenster | `openProgramsWindow()`, `renderProgramsGrid()`, `updateProgramsLiveData()`, `filterProgramsGrid()`, `PROGRAM_HEROES` | Persistentes AAA-Steuerungspanel: DOM, Listener und geladene 4K-Hero-Karten werden innerhalb einer Profilsitzung wiederverwendet; beim Oeffnen werden nur Live-Werte aktualisiert. Die Händlerbörse nutzt exklusiv `dealerexchange.jpg`; optimierte Varianten liegen gemeinsam mit den übrigen Motiven in `assets/programs/heroes/optimized/`. |
| Profile/Login | `renderProfileLogin()`, `createProfileFromLogin()`, `loadProfile()` | Nutzt native Speicherung ueber `window.storage`. |
| State/Speicherlogik | `defaultState()`, `migrateState()`, `saveNow()`, `flushPendingSave()`, `storageGet()`, `storageSet()` | Interne Save-Keys nicht ohne Migration aendern. Renderer-Saves und native Dateischreibvorgaenge werden geordnet; der Exit-Ablauf wartet auf den letzten Save. |
| Sicheres Beenden | `showExitConfirmation()`, `confirmSafeExit()`, `initAppLifecycleBridge()` | Exit-Button und Betriebssystem-Schliesswege laufen ueber dieselbe Save-Bestaetigung und die `window.appLifecycle`-Bridge. |
| Kunden | Kunden-, Offers-, Reviews- und Chat-Funktionen in `js/app.js` | Datenbasis teilweise in `data/vehicles.js`. |
| Fahrzeuge | `generateCar()`, Markt-, Bestand-, Inserat- und Fahrzeugdatei-Funktionen | Marken-/Modell- und Fahrzeugdaten liegen in `data/vehicles.js`. |
| Werkstatt | Werkstatt-Jobs und Reparatur-/Servicefunktionen in `js/app.js` | Kein separates Modul. |
| Finanzierung | Bank-, Finanzierungs-, Leasing- und Ratenlogik in `js/app.js` | Forderungen/Receivables ebenfalls hier. |
| Vertraege | Vertragslisten, Forderungen, Mahnungen, Archivierung in `js/app.js` | Eng mit Finanzierung verknuepft. |
| Fahrzeugboerse | Markt- und Ankaufsfunktionen in `js/app.js` | Nutzt `BRANDS` aus `data/vehicles.js`. |
| Händlerbörse LIVE | UI über `renderDealerExchange()` und `dealerExchange*` in `js/app.js`; Simulation in `js/dealer-exchange-engine.js` | Phase 6.1: Der Echtzeit-Bietersaal unterstützt eigene Spieler-Einlieferungen und garantiert über eine persistente FIFO-Warteschlange genau eine aktive Hauptauktion. Spieler-Gewinne werden innerhalb des Engine-Abschlusses atomar in den Bestand übertragen; Statusmonitor, Startbenachrichtigung und vergrößerte Auktionsdarstellung halten laufende und wartende Einlieferungen nachvollziehbar. |
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
| `js/updates.js` | Moegliche spaetere Auslagerung des Updates-&-News-Renderings; aktuell in `js/app.js`. |

## Data

| Datei | Aufgabe | Hinweise |
| --- | --- | --- |
| `data/changelog.js` | Updates-&-News-Daten. | Neue Spielaenderungen immer oben einfuegen. Im Spiel keine sichtbaren Versionsnummern anzeigen. |
| `data/vehicles.js` | Fahrzeug-, Marken-, Kunden- und Fahrzeugdatei-Daten. | Enthaelt u. a. `BRANDS`, Fahrzeugkategorien, Kunden-/KI-Typen und Fahrzeugzustandsdaten. |
| `data/vehicle-images.js` | Zentraler Bildkatalog fuer Fahrzeugklassen, Lackvarianten, Dateischluessel und Sondermodelle der Haendlerboerse. | Wird direkt nach `data/vehicles.js` geladen; normalisiert bestehende Spielstaende auf Schwarz oder Silber und ordnet jedes Modell seinem festen Klassenstudio zu. |
| `data/achievements.js` | Achievement-Definitionen. | Enthaelt Bedingungen, Labels, Icons, Seltenheiten und XP-Werte. |
| `data/ecu.js` | ECU-/Softwaretuning-Konfiguration. | Enthaelt Tune-Pakete, Preise, Risiken, Kompatibilitaetsgrundlagen, Kundenwunsch-Gewichtung und Steuergeraete-Codes. |
| `data/dealer-exchange.js` | Persistenter Ausgangszustand der Händlerbörse LIVE. | Schema-Version 7, Händler, Startfahrzeuge, Beziehungen, Direktangebote, Fahrzeugpakete, Großaufträge, laufende und wartende Händler- und Spielerauktionen, FIFO-Auktionsqueue, Reservepreise, Gebotsverläufe, Gewinner, Auktionshistorie, Spielerlieferungen, Hinweise und Scheduler-Grundstruktur. |
| `assets/backgrounds/` | Dynamische Hintergrund-Galerie fuer den Designbereich. | Alle unterstuetzten Bilddateien in diesem Ordner werden automatisch erkannt. |

## Assets

| Bereich | Pfad | Inhalt |
| --- | --- | --- |
| Logo-Quelle | `assets/logos/app-logo.png` | Einziges offizielles Automotive-Empire-Markenlogo mit transparentem Hintergrund fuer alle In-App-Bereiche. |
| Windows-Icon | `assets/logos/automotive-empire-icon.ico` | Offizielles Mehrgroessen-Icon fuer EXE, Fenster, Taskleiste, Desktop-Verknuepfung und Installer. |
| macOS-Icon | `assets/logos/automotive-empire-icon.icns` | Offizielles Mehrgroessen-Icon fuer macOS-App-Bundles. |
| Linux-/PNG-Icons | `assets/logos/automotive-empire-icon-{16,32,48,64,128,256,512,1024}.png` | Aus dem offiziellen Logo skalierte Plattform- und Release-Assets. |
| Hintergruende | `assets/backgrounds/` | Alle `.webp`, `.png`, `.jpg`, `.jpeg`, `.gif` und `.avif` Dateien werden automatisch als auswählbare Hintergruende erkannt. Dateinamen werden intern fuer IDs genutzt, aber im Spiel nicht angezeigt. |
| Fahrzeug-Klassenstudios | `assets/vehicles/backgrounds/{budget,mittelklasse,premium,luxus,exotisch}.webp` | Exakt ein wiederverwendeter 16:9-Hintergrund pro Fahrzeugklasse; die Runtime legt das jeweilige transparente Fahrzeug darueber. |
| Fahrzeug-Lackbilder | `assets/vehicles/colors/<marke--modell>--{schwarz,silber}.webp` | Logo- und textfreie, modellgenaue Fahrzeugfreisteller in den zwei spielbaren Lackfarben. |
| Hintergrund-Konfiguration | Keine manuelle Liste erforderlich. | Der Electron-Hauptprozess liest den Ordner dynamisch und stellt die Liste ueber `preload.js` fuer den Renderer bereit. |
| Sounds | Nicht vorhanden. | Wenn Sounds ergaenzt werden, unter `assets/sounds/` dokumentieren. |
| Schriftarten | Extern via Google Fonts im HTML geladen. | Link steht in `autodealer-simulator.html`. |
| Icons | UI-Icons sind aktuell groesstenteils Inline-SVGs/Funktionen in `js/app.js`. | App-Icon liegt separat unter `assets/logos/`. |

## Electron

| Datei | Aufgabe |
| --- | --- |
| `main.js` | Electron-Hauptprozess. Erstellt das BrowserWindow, verwaltet Vollbild-/Fensterzustand, einheitliches sicheres Beenden, Native File Storage, IPC und Protokoll-Handler. |
| `preload.js` | Sichere Bridge zwischen Renderer und Electron. Stellt `window.storage`, `window.appLifecycle`, `window.appInfo` und `window.backgrounds` bereit. |
| `package.json` | npm-Scripts, Release-Build-Konfiguration sowie Installer-/Portable-Namen; keine automatische Update-Verteilung. |
| `electron-builder.dev.json` | DEV-Build-Konfiguration mit getrenntem Produktnamen, eigener App-ID und `dist-dev`-Ausgabe. |
| `scripts/reset-game-data.js` | Hilfsscript zum Zuruecksetzen der Spieldaten im aktuellen UserData-Ordner. Vorsichtig verwenden. |
| `scripts/graphify.cmd` | Windows-Starter fuer die isolierte Graphify-Installation; funktioniert auch bei gesperrter PowerShell-Skriptausfuehrung. |
| `scripts/graphify.ps1` | Alternativer PowerShell-Wrapper fuer Umgebungen mit erlaubter Skriptausfuehrung. |
| `scripts/build-vehicle-color-variants.py` | Erzeugt aus einer Cyan-Lackmaske die optimierten schwarzen und silbernen WebP-Fahrzeugbilder und entfernt verbliebene Magenta-Farbreste. |
| `scripts/validate-vehicle-images.js` | Prueft den vollstaendigen Katalog aus regulaeren Modellen und Haendlerboersen-Sonderfahrzeugen gegen alle Klassenstudios und beide Lackdateien. |

### Build-Scripts

| Befehl | Zweck |
| --- | --- |
| `npm start` | Release-Modus lokal starten. |
| `npm run start:dev` | DEV-Modus lokal starten. |
| `npm run build` | Release-Installer und Portable bauen. |
| `npm run build:dev` | DEV-Installer und Portable bauen. |
| `npm run validate:vehicle-images` | Prueft alle 280 Fahrzeugmodelle, fuenf Klassenstudios und 560 Schwarz-/Silber-Bilddateien auf Vollstaendigkeit. |

## Suchfunktion: Wenn ich etwas aendern moechte

| Thema | Datei / Bereich |
| --- | --- |
| Login | `js/app.js` (`renderProfileLogin`) und `css/main.css` |
| Dashboard | `js/app.js` und `css/main.css` |
| Werkstatt | `js/app.js` |
| Kunden | `js/app.js`, Daten teilweise `data/vehicles.js` |
| Fahrzeuge | Darstellung und Fallback: `js/app.js`; Fahrzeugdaten: `data/vehicles.js`; Bildkatalog: `data/vehicle-images.js`; Assets: `assets/vehicles/`. |
| Fahrzeugboerse | `js/app.js`, `data/vehicles.js` |
| Händlerbörse LIVE | UI: `js/app.js`, KI/Markt: `js/dealer-exchange-engine.js`, Zustand: `data/dealer-exchange.js`, Styles: `css/main.css`; Konzepte: `Design Concepts/Dealer Exchange Architecture.txt` und `Dealer Exchange Gameplay Design.txt`. |
| Finanzierung | `js/app.js` |
| Vertraege | `js/app.js` |
| Updates & News | Daten: `data/changelog.js`, Rendering: `js/app.js`, Styles: `css/main.css` |
| Notizblock | Derzeit kein aktives System. Bei neuer Einfuehrung Modul/Datei hier ergaenzen. |
| ECU | Ablauf/Rendering: `js/app.js`, Daten: `data/ecu.js`, Styles: `css/main.css` |
| Finanzen | `js/app.js` |
| Design | `js/app.js`, `css/main.css`, `assets/backgrounds/` |
| Icons / Branding | `assets/logos/`, In-App-Verweise in `js/app.js`, Build-Verweise in `package.json`, `electron-builder.dev.json` und `main.js` |
| Hintergruende | Ordner: `assets/backgrounds/`, Erkennung: `main.js` + `preload.js`, Anzeige/Design und Update-Karten: `js/app.js` |
| Auto-Updater | Entfernt. Das Spiel besitzt keine automatische oder manuelle Update-Pruefung; `Updates & News` bleibt ein lokales Archiv aus `data/changelog.js`. |
| DEV-Build | `electron-builder.dev.json`, `package.json`, `main.js` |
| Release-Build | `package.json`, `main.js` |
| Native File Storage | `main.js`, `preload.js`, Speicheraufrufe in `js/app.js` |
| Profile/Speicherstaende | `js/app.js`, `main.js` |
| Vollbild/Fensterzustand | `main.js` (`readWindowState`, `createWindow`, `writeFullscreenPreference`) |
| Exit-Button / sicheres Beenden | UI: `js/app.js` + `css/main.css`, Electron-Lifecycle: `main.js` + `preload.js` |
| Projekt-Wissensgraph / Graphify | Skill: `.codex/skills/graphify/`, Hook: `.codex/hooks.json`, Windows-Starter: `scripts/graphify.cmd`, Regeln: `.graphifyignore`, Ausgabe: `graphify-out/` |

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
