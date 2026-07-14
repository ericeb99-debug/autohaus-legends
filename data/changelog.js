const CHANGELOG = [
  {
    version:'1.1.1', date:'2026-07-13', type:'major', pinned:true,
    title:'Performance- & Komfort-Highlight',
    headline:'Automotive Empire startet jetzt immersiver, beendet Spielstände besonders sicher und arbeitet auch in langen Sessions spürbar effizienter.',
    sections:{
      new:[
        'Das Spiel startet standardmäßig direkt im echten Vollbild, ohne die Auflösung oder Skalierung des Betriebssystems zu verändern.',
        'Ein dauerhaft sichtbarer Exit-Button in der Kopfleiste führt über einen klaren Bestätigungsdialog zum sicheren Beenden.',
      ],
      improved:[
        'Vollbild- und Fenstermodus merken sich die bewusste Auswahl sowie eine sinnvolle Fensterposition für den verwendeten Bildschirm.',
        'Speichervorgänge werden geordnet, gebündelt und beim Beenden vollständig abgeschlossen, bevor sich die Anwendung schließt.',
        'Unsichtbare Bereiche vermeiden unnötige Aktualisierungen; hochauflösende Programmbilder werden erst in der Nähe des sichtbaren Bereichs dekodiert.',
        'Fenster-, Speicher- und Oberflächenaktualisierungen verursachen weniger doppelte Arbeit und bleiben dadurch auch bei langen Spielständen flüssiger.',
        'Bereits geöffnete Spielbereiche reagieren beim erneuten Aufrufen deutlich schneller und behalten ihren bisherigen Zustand im Hintergrund bei.',
        'Große Fahrzeug-, Kunden- und Werkstattbestände lassen sich flüssiger durchsuchen und scrollen, auch in langen Legacy-Spielständen.',
        'Wiederkehrende Oberflächen- und Bildaktualisierungen werden intelligent gebündelt, damit umfangreiche Spielstände weniger unnötige Rechenarbeit verursachen.',
      ],
      fixed:[
        'Exit-Button, Fenster-Schließen, Alt+F4 und Cmd+Q verwenden nun denselben sicheren Speichern-und-Beenden-Ablauf.',
        'Parallele Schreibzugriffe auf denselben Spielstand können sich nicht mehr gegenseitig überschneiden.',
      ],
    },
    en:{
      title:'Performance & Comfort Highlight',
      headline:'Automotive Empire now starts more immersively, closes saves with extra care and works more efficiently throughout long sessions.',
      sections:{
        new:[
          'The game now starts directly in true fullscreen by default without changing the operating system resolution or scaling.',
          'A permanently visible exit button in the header opens a clear confirmation dialog for safe shutdown.',
        ],
        improved:[
          'Fullscreen and windowed mode remember the deliberate choice and a sensible window position for the display in use.',
          'Save operations are serialized, batched and fully completed before the application closes.',
          'Hidden areas avoid unnecessary updates, while high-resolution program artwork is decoded only near the visible viewport.',
          'Window, storage and interface updates perform less duplicate work, keeping long-running saves smoother.',
          'Previously opened game areas now respond much faster when revisited and retain their state in the background.',
          'Large vehicle, customer and workshop collections now remain smoother to browse and scroll, even in long-running Legacy saves.',
          'Recurring interface and image updates are intelligently batched so extensive saves cause less unnecessary processing.',
        ],
        fixed:[
          'The exit button, window close control, Alt+F4 and Cmd+Q now share the same safe save-and-quit flow.',
          'Parallel writes to the same save file can no longer overlap.',
        ],
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-12', type:'improved',
    title:'Navigations-Feinschliff',
    headline:'Seitenleiste und Schnellleiste wirken moderner, klarer und bleiben auch in kleinen Fenstern komfortabel lesbar.',
    sections:{
      improved:[
        'Die Navigationssymbole verwenden jetzt ein einheitliches Premium-Design mit dezenten Farbakzenten, wodurch sich die Spielbereiche schneller unterscheiden lassen.',
        'Sanfte Hover-Effekte geben beim Überfahren direktes visuelles Feedback, ohne vom Spielgeschehen abzulenken.',
        'Die Schaltfläche zum Anpassen der Schnellleiste ist jetzt dauerhaft sichtbar und passend bei den Schnellzugriffen angeordnet.',
        'Das Programme-Fenster präsentiert alle Bereiche jetzt als großzügige Hero-Karten mit stimmungsvollen Motiven, klaren Kategorie-Farben und hochwertiger Glasoptik.',
        'Jeder Spielbereich besitzt nun ein eigenes, passend zugeschnittenes Hero-Motiv und ist dadurch bereits am Bild eindeutig erkennbar.',
        'Neue Öffnungs-, Karten- und Hover-Animationen sowie eine feinere Suche und Scrollleiste machen die Modulauswahl spürbar ruhiger und lebendiger.',
        'Hochauflösende Hero-Motive, individuelle Modulfarben und dezente Live-Informationen verleihen jeder Programmkarte mehr Tiefe, Klarheit und Eigenständigkeit.',
        'Alle Hero-Motive wurden detailgetreu in 4K rekonstruiert und bleiben dadurch auch auf hochauflösenden Displays klar, ruhig und hochwertig.',
        'Das Programme-Fenster wurde als zentrales AAA-Steuerungspanel neu aufgebaut: Schnellzugriffe, klar gegliederte Bereiche und kompakte Bildkarten bringen alle Module schneller und hochwertiger zusammen.',
        'Dynamische Kartenformate und dichter angeordnete Bereichspanels nutzen den verfügbaren Platz jetzt besser und heben zentrale Module gezielt hervor.',
        'Ein dauerhaft sichtbarer Programme-Launcher sitzt jetzt fest vor der Tableiste und öffnet das Steuerungspanel jederzeit per Klick, F1 oder Strg+Leertaste.',
      ],
      fixed:[
        'Hinweise und Beschreibungen der Navigation werden jetzt vollständig über der Oberfläche angezeigt und passen ihre Position automatisch an den verfügbaren Bildschirmplatz an.',
        'Auch bei kleinen Fenstern bleiben die Navigationshinweise vollständig sichtbar und lesbar.',
      ],
    },
    en:{
      title:'Navigation Polish',
      headline:'The sidebar and quick-access bar now look more modern and distinctive while remaining easy to read in smaller windows.',
      sections:{
        improved:[
          'Navigation icons now share a consistent premium style with subtle color accents, making game areas easier to distinguish at a glance.',
          'Gentle hover effects provide clear visual feedback without distracting from gameplay.',
          'The quick-access customization button is now permanently visible and positioned alongside the quick-access controls.',
          'The Programs window now presents every area as a spacious hero card with atmospheric imagery, clear category colors and premium glass styling.',
          'Every game area now has its own carefully cropped hero artwork, making each module recognizable from its image alone.',
          'New opening, card and hover animations plus a refined search field and scrollbar make module selection feel calmer and more alive.',
          'High-resolution hero artwork, individual module colors and subtle live information give every program card greater depth, clarity and identity.',
          'All hero scenes were faithfully reconstructed in 4K, keeping them crisp, composed and premium on high-resolution displays.',
          'The Programs window has been rebuilt as a central AAA control panel, combining quick access, clearly structured areas and compact visual module cards.',
          'Dynamic card sizes and more tightly arranged area panels now use the available space better while deliberately highlighting key modules.',
          'A permanently visible Programs launcher now sits in front of the tab bar and opens the control panel at any time via click, F1 or Ctrl+Space.',
        ],
        fixed:[
          'Navigation hints and descriptions now appear fully above the interface and automatically adapt their position to the available screen space.',
          'Navigation hints remain completely visible and readable even in small windows.',
        ],
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-11', type:'improved',
    title:'Werkstatt-Komfort verbessert',
    headline:'Reparaturen blockieren Kunden und Verkäufe nicht mehr unnötig lange.',
    sections:{
      improved:[
        'Alle Werkstattaufträge dauern jetzt maximal bis zum nächsten Tageswechsel.',
        'Kundenwünsche, Sammelreparaturen und automatische Reparaturen vor der Inserierung werden dadurch deutlich schneller abgeschlossen.',
        'Fortschrittsanzeigen der Werkstatt passen sich an die kürzere Bearbeitungszeit an.',
      ],
    },
    en:{
      title:'Workshop Flow Improved',
      headline:'Repairs no longer block customers and sales longer than necessary.',
      sections:{
        improved:[
          'All workshop jobs now take at most until the next day transition.',
          'Customer requests, batch repairs and automatic pre-listing repairs now complete much faster.',
          'Workshop progress displays now match the shorter processing time.',
        ],
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-09', type:'improved',
    title:'Lokalisierung vervollständigt',
    headline:'Alle verbleibenden Spielbereiche sind jetzt vollständig auf Englisch und Deutsch lokalisiert.',
    sections:{
      improved:[
        'Fahrzeugbörse und Angebotskarten zeigen alle Labels, Buttons und Statusmeldungen in der gewählten Sprache.',
        'Bankentscheidungs-Modal und Finanzierungsangebots-Karten nutzen übersetzte Ergebnis-Labels.',
        'Finanzierungskonditionen-Drehrad und Finanzierungsabgelehnt-Modal sind vollständig übersetzt.',
        'Kunden-Abbruch-Benachrichtigungen erscheinen in der gewählten Sprache.',
        'Lieferungsseite: Übersicht, Karten, Statusanzeigen und alle Aktionen sind übersetzt.',
        'Vorzeitige Rückgabe und Leasing-Abschluss-Modal nutzen die gewählte Sprache.',
        'Kaufbedingungen-Modals und Rabattdialog sind übersetzt.',
        'Bank-Bereich zeigt alle Labels und Aktionen in der gewählten Sprache.',
        'Taschenrechner und km-Angaben passen sich der Sprache und Zahlenformatierung an.',
        'Gegenseitiges Verhandlungs-Modal (fest bleibendes Angebot) ist übersetzt.',
        'Finanzierungsprioritäts-Panel und Zahlungsart-Beschreibungen sind übersetzt.',
        'Der Login übernimmt jetzt bereits vor dem Laden eines Spielstands die Sprache des zuletzt verwendeten Profils.',
        'Kundenchats erzeugen Antworten, Statusmeldungen und neue Anfragen vollständig in der eingestellten Sprache.',
        'ECU-Tuning zeigt Paketnamen, Kundenwünsche und dynamische Anfragetexte jetzt konsequent auf Deutsch oder Englisch.',
        'Finanztabellen übersetzen jetzt auch Vertragsstatus, Mahnschritte und gespeicherte Buchungsbeschreibungen vollständig ins Englische.',
      ],
    },
    en:{
      title:'Localization Completed',
      headline:'All remaining game areas are now fully localized in both English and German.',
      sections:{
        improved:[
          'Vehicle listings and offer cards now show all labels, buttons and status messages in the selected language.',
          'Bank decision modal and financing offer cards use translated result labels.',
          'Financing conditions wheel and financing rejected modal are fully translated.',
          'Customer dropout notifications appear in the selected language.',
          'Deliveries page: overview, cards, status labels and all actions are translated.',
          'Early return and lease end modal use the selected language.',
          'Sale condition modals and discount dialog are translated.',
          'Bank panel shows all labels and actions in the selected language.',
          'Calculator and kilometer figures adapt to the language and number format.',
          'Counter "firm offer" modal is translated.',
          'Financing priority panel and payment method descriptions are translated.',
          'The login now uses the language of the most recently played profile before loading a save.',
          'Customer chats generate replies, status messages, and new inquiries entirely in the selected language.',
          'ECU Tuning now consistently localizes package names, customer requests, and dynamic request text.',
          'Finance tables now also translate contract statuses, collection steps, and stored transaction descriptions into English.',
        ],
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-08', type:'major',
    title:'🌍 Vollständige Englisch-Lokalisierung',
    headline:'Automotive Empire unterstützt jetzt vollständig Deutsch und Englisch. Das gesamte Spiel – inklusive Benutzeroberfläche, Menüs, Benachrichtigungen, Tooltips, Kalender sowie Währungs- und Zahlenformatierung – passt sich automatisch der gewählten Sprache an. In der englischen Version werden alle Geldbeträge und Formate professionell auf US-Dollar und internationale Schreibweise umgestellt. Das neue Lokalisierungssystem ist außerdem für weitere Sprachen in zukünftigen Updates vorbereitet.',
    sections:{
      new:[
        'Neuer Sprachbereich unter Einstellungen: Wechsel zwischen 🇺🇸 English und 🇩🇪 Deutsch, sofort und ohne Neustart.',
        'Standardsprache für neue Spielstände ist jetzt Englisch.',
        'Automatische Währungsumstellung: Deutsch zeigt Euro (€) im deutschen Zahlenformat, Englisch zeigt US-Dollar ($) im englischen Zahlenformat.',
        'Kalender, Wochentage und Monatsnamen werden vollständig in der gewählten Sprache angezeigt.',
      ],
      improved:[
        'Alle Spielbereiche sind jetzt vollständig in beide Sprachen übersetzt: Fahrzeugbörse, Bestand, Ankauf, Kunden, Werkstatt, ECU-Center, Verträge, Finanzen, Business Insights, Wunschliste, Mitarbeiter, Unternehmensausbau, Legacy, Login-Bildschirm, Achievements und Marktstatistik.',
        'Verkaufsabschluss-Modal, Finanzierungsblock, Kundenzufriedenheitsanzeige und alle Erfolge werden in der gewählten Sprache angezeigt.',
        'Willkommensfenster nach Updates und Login-Meldungen erscheinen jetzt in der korrekten Sprache.',
        'Dezimaltrennzeichen in Business Insights und Marktstatistik passen sich der Sprache an.',
        'Die gewählte Sprache wird dauerhaft im Spielstand gespeichert und beim nächsten Start automatisch geladen.',
      ],
      prepared:[
        'Das Lokalisierungssystem ist so aufgebaut, dass weitere Sprachen wie Französisch, Spanisch oder Italienisch später ergänzt werden können, ohne bestehende Spielbereiche zu verändern.',
      ],
    },
    en:{
      title:'🌍 Full English Localization',
      headline:'Automotive Empire now fully supports both English and German. The entire game—including the user interface, menus, notifications, tooltips, calendar, currency, and number formatting—automatically adapts to the selected language. The English version uses U.S. Dollar formatting and professional international localization throughout the game. The new localization system is also designed to support additional languages in future updates.',
      sections:{
        new:[
          'New Language section under Settings: switch between 🇺🇸 English and 🇩🇪 Deutsch instantly, no restart required.',
          'New save games now default to English.',
          'Automatic currency switching: German shows Euro (€) in German number format, English shows US Dollar ($) in English number format.',
          'The calendar, weekdays and month names now display fully in the selected language.',
        ],
        improved:[
          'All game areas are now fully translated into both languages: Vehicle Marketplace, Inventory, Acquisition, Customers, Workshop, ECU Center, Finance Contracts, Finance, Business Insights, Wishlist, Staff, Business Upgrades, Legacy, Login screen, Achievements and Market Statistics.',
          'Sale celebration modal, financing block, customer reaction display and all achievements now show in the selected language.',
          'Post-update welcome dialog and login notifications now appear in the correct language.',
          'Decimal separators in Business Insights and Market Statistics adapt to the active language.',
          'The selected language is saved permanently with your save data and loaded automatically next time you play.',
        ],
        prepared:[
          'The localization system is built so additional languages such as French, Spanish or Italian can be added later without changing existing game areas.',
        ],
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'major',
    title:'Performance Center Update',
    headline:'Das neue Performance Center erweitert Automotive Empire um einen interaktiven ECU- und Softwareoptimierungsbereich mit Fahrzeuganalyse, Drag & Drop, Kompatibilitätsprüfung und realistischem Kundenablauf.',
    sections:{
      new:[
        'Neuer Performance-Center-Bereich für ECU- und Softwareoptimierung.',
        'Kunden können Stage 1, Stage 2, Stage 3, ECO, Pops & Bangs, Vmax-Aufhebung, Launch Control und weitere Optimierungen anfragen.',
        'Fahrzeuge können per Drag & Drop ins Performance Center gebracht werden.',
        'Analyse- und Kompatibilitätsprüfung prüfen Fahrzeug, Antrieb, Leistung, Getriebe, Vorstufen und nötige Hardware.',
        'Kunden entscheiden nach der Analyse automatisch, welche möglichen Optimierungen durchgeführt werden sollen.'
      ],
      improved:[
        'Performance-Center-Layout übersichtlicher gestaltet und stärker auf den Prüfstand fokussiert.',
        'Fahrzeugkarten, Kundenwünsche und Analysehinweise sind besser lesbar.',
        'Mehrere ECU-Aufträge werden kompakter als auswählbare Liste dargestellt.',
        'Benachrichtigungen zeigen offene ECU-Aufträge direkt am ECU-Tab.',
        'Analyse, Diagnose, Kundenentscheidung und Programmierung finden sichtbar im Performance Center statt.',
        'Der komplette Kundenwunsch ist per elegantem Hover-Overlay lesbar.',
        'Der virtuelle Prüfstand lässt sich platzsparend ein- und ausklappen.',
        'Abgeschlossene Softwareoptimierungen werden sauber abgerechnet, wirken sich auf Bewertungen und Reputation aus und erscheinen in einer eigenen Auftragshistorie.'
      ],
      fixed:[
        'Falsche oder abgeschnittene Kundenwunsch-Texte wurden korrigiert.',
        'Umlaute und fehlerhafte Textdarstellungen im ECU-Bereich wurden bereinigt.',
        'Probleme mit nicht sichtbaren oder schwer greifbaren Fahrzeugen beim Drag & Drop wurden behoben.',
        'Fälle ohne mögliche Optimierung können jetzt sauber über Kunde informieren abgeschlossen werden.',
        'Das Layout bleibt ohne Scrollen bedienbar, ohne wichtige Aktionsbuttons zu verstecken.'
      ]
    },
    en:{
      title:'Performance Center Update',
      headline:'The new Performance Center adds an interactive ECU and software optimization area to Automotive Empire, with vehicle analysis, drag & drop, compatibility checks and a realistic customer flow.',
      sections:{
        new:[
          'New Performance Center area for ECU and software optimization.',
          'Customers can request Stage 1, Stage 2, Stage 3, ECO, pops & bangs, top-speed limiter removal, launch control and other optimizations.',
          'Vehicles can be brought into the Performance Center via drag & drop.',
          'Analysis and compatibility checks review vehicle, drivetrain, power, transmission, prerequisite stages and required hardware.',
          'After the analysis, customers automatically decide which possible optimizations should be carried out.'
        ],
        improved:[
          'Performance Center layout made clearer and more focused on the dyno bay.',
          'Vehicle cards, customer requests and analysis notes are easier to read.',
          'Multiple ECU jobs are shown as a more compact, selectable list.',
          'Notifications show open ECU jobs directly on the ECU tab.',
          'Analysis, diagnostics, customer decision and programming now visibly take place in the Performance Center.',
          'The full customer request is readable via an elegant hover overlay.',
          'The virtual dyno bay can be collapsed and expanded to save space.',
          'Completed software optimizations are billed cleanly, affect reviews and reputation, and appear in their own job history.'
        ],
        fixed:[
          'Incorrect or truncated customer request texts were corrected.',
          'Accented characters and broken text rendering in the ECU area were cleaned up.',
          'Issues with invisible or hard-to-grab vehicles during drag & drop were fixed.',
          'Cases with no possible optimization can now be closed cleanly via "Inform customer".',
          'The layout stays fully usable without scrolling, without hiding important action buttons.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-08', type:'major',
    title:'Realistisches Kalendersystem',
    headline:'Automotive Empire nutzt jetzt ein vollwertiges Kalender- und Zeitsystem mit festen Startdaten, echten Monaten, Jahreswechseln und einer stabilen Grundlage für langfristige Unternehmenssimulation.',
    sections:{
      new:[
        'Neue Spielstände beginnen immer am 01. Januar 2027 mit einem festen Kalenderstart.',
        'Bestehende Spielstände werden automatisch anhand ihres bisherigen Tagesfortschritts auf das neue Kalendersystem umgestellt.',
        'Monate, Monatslängen, Schaltjahre, Wochentage und Jahreswechsel werden jetzt zentral berechnet.',
        'Neue Legacy-Durchläufe starten wieder mit einem frischen Kalender am festen Startdatum.'
      ],
      improved:[
        'Die obere Spielanzeige zeigt jetzt Wochentag und echtes Datum statt nur einer endlosen Tagesnummer.',
        'Die Spieltag-Dauer steuert nun klar, wie lange ein Kalendertag in Echtzeit dauert.',
        'Tageslimits für neue Kaufanfragen orientieren sich weiterhin sauber am aktuellen Kalendertag.',
        'Legacy-Fortschritt hängt stärker an Unternehmenswert, Gewinn, Reputation, Verkäufen und abgeschlossenen Aufträgen statt an schnell vergangenen Tagen.',
        'Das komplette Spiel zeigt jetzt echte Kalenderdaten statt Tagesnummern: Finanzen, Verträge, Finanzierung, Leasing, Mahnwesen, Fahrzeugbörse, Kundenchats, Bewertungen, Lieferungen, Reservierungen, Suchaufträge und die letzten Transaktionen.',
        'Alle zukünftigen Termine wie Ratenfälligkeiten, Bank-Rückmeldungen, Lieferankünfte und Mahnfristen werden mit dem echten Kalender berechnet und berücksichtigen Monatslängen, Schaltjahre und Jahreswechsel.',
        'Umsatz- und Gewinnverläufe im Dashboard beschriften ihre Zeiträume jetzt mit echten Kalenderdaten und Monatsnamen.',
        'Der Levelaufstieg durch passive Erfahrung ist jetzt unabhängig von der eingestellten Kalendertag-Dauer: Kürzere Kalendertage beschleunigen den Legacy-Fortschritt nicht mehr.'
      ],
      fixed:[
        'Die Übernahme bestehender Spielstände wurde korrigiert: Der bisherige Spielfortschritt wird jetzt anhand der früher deutlich schnelleren Spieltag-Dauer plausibel in den Kalender eingeordnet, statt Monate oder Jahre zu weit in die Zukunft zu springen.',
        'Wenig gespielte Spielstände starten dadurch nicht mehr später im Kalender als deutlich weiter aufgebaute Unternehmen.',
        'Auch ältere gespeicherte Einträge wie Benachrichtigungen, Mahnverläufe und Kundennachrichten zeigen ihre Zeitangaben jetzt als echtes Kalenderdatum.',
        'Alle Verläufe und Historien bleiben streng chronologisch: Neueste Ereignisse stehen oben, ältere darunter, ohne Datumsrücksprünge.'
      ],
      prepared:[
        'Monatsabschlüsse und monatliche Kosten.',
        'Jahresstatistiken und langfristige Unternehmensberichte.',
        'Saisonale Nachfrage, Events und wirtschaftliche Entwicklungen.',
        'Zeitabhängige Systeme wie Leasing, Versicherungen, Termine und Kampagnen.'
      ]
    },
    en:{
      title:'Realistic Calendar System',
      headline:'Automotive Empire now uses a full calendar and time system with a fixed start date, real months, year transitions and a stable foundation for long-term business simulation.',
      sections:{
        new:[
          'New save games always start on January 1, 2027 with a fixed calendar start.',
          'Existing save games are automatically migrated to the new calendar system based on their previous day progress.',
          'Months, month lengths, leap years, weekdays and year transitions are now calculated centrally.',
          'New Legacy runs start again with a fresh calendar at the fixed start date.'
        ],
        improved:[
          'The top game display now shows the weekday and real date instead of just an endless day number.',
          'The calendar day duration now clearly controls how long a calendar day lasts in real time.',
          'Daily limits for new purchase inquiries still align cleanly with the current calendar day.',
          'Legacy progress now depends more on company value, profit, reputation, sales and completed jobs rather than on days passing quickly.',
          'The entire game now shows real calendar dates instead of day numbers: finance, contracts, financing, leasing, collections, the vehicle marketplace, customer chats, reviews, deliveries, reservations, search requests and recent transactions.',
          'All future dates such as installment due dates, bank responses, delivery arrivals and reminder deadlines are calculated using the real calendar and account for month lengths, leap years and year transitions.',
          'Revenue and profit charts on the dashboard now label their time ranges with real calendar dates and month names.',
          'Level progress from passive experience is now independent of the configured calendar day duration: shorter calendar days no longer speed up Legacy progress.'
        ],
        fixed:[
          'Migration of existing save games was corrected: previous progress is now plausibly mapped onto the calendar based on the earlier, much faster day duration, instead of jumping months or years too far into the future.',
          'Lightly played save games no longer start later on the calendar than much more developed companies.',
          'Older stored entries such as notifications, collection histories and customer messages now show their timestamps as real calendar dates.',
          'All histories and logs remain strictly chronological: newest events on top, older ones below, with no date jumps.'
        ],
        prepared:[
          'Month-end closings and monthly costs.',
          'Annual statistics and long-term business reports.',
          'Seasonal demand, events and economic developments.',
          'Time-based systems such as leasing, insurance, appointments and campaigns.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Design-Auswahl verfeinert',
    headline:'Die Hintergrundauswahl zeigt jetzt nur noch die Bildvorschau und keine Dateinamen mehr.',
    sections:{
      improved:[
        'Hintergründe werden weiterhin automatisch erkannt, bleiben in der Auswahl aber optisch sauber ohne sichtbare Bildnamen.',
        'Die aktive Auswahl wird neutral angezeigt und wirkt dadurch aufgeräumter.'
      ]
    },
    en:{
      title:'Refined Background Selection',
      headline:'The background picker now shows only the image preview, with no file names displayed.',
      sections:{
        improved:[
          'Backgrounds are still detected automatically, but the picker now stays visually clean with no visible file names.',
          'The active selection is highlighted neutrally, giving the picker a tidier look.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Design-Start verbessert',
    headline:'Neue Profile starten jetzt direkt mit dem ersten Hintergrundbild.',
    sections:{
      improved:[
        'Bild 1 aus dem Hintergrundordner ist jetzt der Standardhintergrund für neue Spieler und neue Profile.',
        'Falls ein gespeicherter Hintergrund nicht mehr vorhanden ist, wählt das Spiel automatisch wieder einen passenden vorhandenen Hintergrund.'
      ]
    },
    en:{
      title:'Improved Default Background',
      headline:'New profiles now start directly with the first background image.',
      sections:{
        improved:[
          'Image 1 from the backgrounds folder is now the default background for new players and new profiles.',
          'If a saved background no longer exists, the game automatically selects another available background instead.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Hintergründe automatisch erkannt',
    headline:'Der Designbereich aktualisiert seine Hintergrundauswahl jetzt automatisch anhand der Bilder im Hintergrundordner.',
    sections:{
      improved:[
        'Neue Bilder in assets/backgrounds erscheinen automatisch in der Auswahl.',
        'Entfernte Hintergrundbilder verschwinden beim nächsten Start auch aus der Auswahl.',
        'Dateinamen werden intern automatisch verarbeitet, ohne in der Auswahl sichtbar zu sein.'
      ]
    },
    en:{
      title:'Automatic Background Detection',
      headline:'The Design area now automatically updates its background selection based on the images in the backgrounds folder.',
      sections:{
        improved:[
          'New images placed in assets/backgrounds automatically appear in the picker.',
          'Removed background images disappear from the picker on the next launch as well.',
          'File names are processed internally without being shown in the picker.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Technische Verbesserungen',
    headline:'Das Projekt verfügt jetzt über eine dauerhafte technische Dokumentation.',
    sections:{
      improved:[
        'Die Projektstruktur ist jetzt in einer eigenen Dokumentation übersichtlich beschrieben.',
        'Wichtige Bereiche wie Login, Fahrzeuge, Kunden, Werkstatt, Design, Updates & News und Build-Systeme lassen sich schneller finden.',
        'Neue Systeme und verschobene Dateien werden künftig in der Dokumentation mitgepflegt.'
      ]
    },
    en:{
      title:'Technical Improvements',
      headline:'The project now has permanent technical documentation.',
      sections:{
        improved:[
          'The project structure is now clearly described in its own documentation.',
          'Key areas such as login, vehicles, customers, workshop, design, Updates & News and build systems can be found more quickly.',
          'New systems and moved files will be kept up to date in the documentation going forward.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Technische Grundlage verbessert',
    headline:'Die Projektstruktur wurde auf mehrere Dateien aufgeteilt, ohne das Spielerlebnis zu verändern.',
    sections:{
      improved:[
        'Styles, App-Script und Updates-&-News-Daten sind jetzt sauberer getrennt.',
        'Automotive Empire bleibt unverändert spielbar und nutzt weiterhin dieselben Spielstände, Profile und Systeme.',
        'Die neue Struktur erleichtert zukünftige Erweiterungen und Updates.'
      ]
    },
    en:{
      title:'Improved Technical Foundation',
      headline:'The project structure was split across multiple files without changing the gameplay experience.',
      sections:{
        improved:[
          'Styles, app script and Updates & News data are now separated more cleanly.',
          'Automotive Empire remains playable exactly as before and still uses the same save games, profiles and systems.',
          'The new structure makes future extensions and updates easier.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'hotfix',
    title:'Branding & Bedienung',
    headline:'Das neue App-Icon greift jetzt auch in der Desktop-App, und die Bedienung mit gedrückter Maustaste fühlt sich sauberer an.',
    sections:{
      improved:[
        'Die Windows-App nutzt nun die neue Automotive-Empire-Identität, damit Desktop-, Taskleisten- und Fenster-Icon korrekt zum neuen Branding passen.',
        'Beim Ziehen mit gedrückter linker Maustaste werden UI-Texte und Felder nicht mehr versehentlich markiert.',
        'Logos erscheinen jetzt ruhiger ohne gelben Glow-Effekt, und die farbigen Fensterpunkte in der oberen Leiste wurden entfernt.',
        'Neue Updates werden jetzt als klare Info-Karte angezeigt, damit wichtige Hinweise besser auffallen.',
        'Die Logo-Flächen wurden weiter bereinigt, damit kein gelber Rand mehr an den Logos erscheint.',
        'Das Logo oberhalb der seitlichen Tableiste wurde entfernt, damit die Tabs höher und direkter erreichbar sind.'
      ]
    },
    en:{
      title:'Branding & Interaction Polish',
      headline:'The new app icon now also applies inside the desktop app, and click-and-drag interaction feels cleaner.',
      sections:{
        improved:[
          'The Windows app now uses the new Automotive Empire identity, so the desktop, taskbar and window icons correctly match the new branding.',
          'Dragging with the left mouse button held down no longer accidentally selects UI text and fields.',
          'Logos now appear calmer without a yellow glow effect, and the colored window dots in the top bar were removed.',
          'New updates are now shown as a clear info card so important notices stand out better.',
          'Logo areas were further cleaned up so no yellow border appears around the logos anymore.',
          'The logo above the side tab bar was removed so the tabs sit higher and are reached more directly.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Neues Branding',
    headline:'Automotive Empire zeigt sich jetzt mit dem neuen offiziellen Markenauftritt.',
    sections:{
      new:[
        'Das neue Automotive-Empire-Logo ist jetzt im Login, in der App-Oberfläche sowie in Fenster-, Taskleisten- und Installer-Icons eingebunden.',
        'Die bisherigen Hintergründe wurden vollständig durch drei neue Premium-Hintergründe ersetzt.',
        'Updates & News, Dashboard und Navigationsbereiche greifen das neue Branding sauber im bestehenden Premium-Design auf.'
      ],
      improved:[
        'Das goldene A mit silbernem Ring und Flügeln ist jetzt das einzige offizielle Markenlogo und ersetzt alle bisherigen Logo- und App-Icon-Varianten.',
        'Login, Profilauswahl, Navigation, Updates & News sowie die Desktop-App verwenden durchgehend dasselbe offizielle Markenlogo.',
        'Fenster, Taskleiste, Desktop-Verknüpfung, Installer und plattformspezifische App-Icons greifen auf einheitliche Markenassets zurück.',
        'Der Hintergrund des Logos ist jetzt transparent – sowohl im Spiel als auch beim Desktop-App-Icon.'
      ]
    },
    en:{
      title:'New Branding',
      headline:'Automotive Empire now appears with its new official brand identity.',
      sections:{
        new:[
          'The new Automotive Empire logo is now used on the login screen, throughout the app interface, and in window, taskbar and installer icons.',
          'The previous backgrounds have been fully replaced with three new premium backgrounds.',
          'Updates & News, the Dashboard and navigation areas now reflect the new branding cleanly within the existing premium design.'
        ],
        improved:[
          'The golden A with its silver ring and wings is now the sole official brand logo and replaces all previous logo and app icon variants.',
          'Login, profile selection, navigation, Updates & News, and the desktop app consistently use the same official brand logo.',
          'Window, taskbar, desktop shortcut, installer, and platform-specific app icons now share one unified set of brand assets.',
          'The logo background is now transparent both in-game and on the desktop app icon.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Neuer Name',
    headline:'Das Spiel tritt ab sofort unter dem Namen Automotive Empire auf.',
    sections:{
      improved:[
        'App-Name, Fenstertitel, Installer und sichtbare UI-Texte wurden auf Automotive Empire angepasst.',
        'Die DEV-Version ist ebenfalls passend benannt und erscheint als Automotive Empire DEV.',
        'Der Markenauftritt verwendet durchgehend das aktuelle offizielle Automotive-Empire-Logo.'
      ]
    },
    en:{
      title:'New Name',
      headline:'The game now goes by the name Automotive Empire.',
      sections:{
        improved:[
          'App name, window title, installer and visible UI text were updated to Automotive Empire.',
          'The DEV build is named accordingly and appears as Automotive Empire DEV.',
          'The brand identity consistently uses the current official Automotive Empire logo.'
        ]
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'hotfix',
    title:'Oberfläche aufgeräumt',
    headline:'Das experimentelle Notizblock-Widget wurde wieder entfernt, damit die Oberfläche schlank und störungsfrei bleibt.',
    sections:{
      improved:[
        'Die untere Leiste ist wieder auf die bewährten Spielbereiche fokussiert.',
        'Der zusätzliche schwebende Notizblock-Layer wurde entfernt, damit keine Fläche über Dashboard, Programme oder anderen Seiten liegt.',
      ],
      fixed:[
        'Das Notizblock-Icon und das zugehörige Widget erscheinen nicht mehr im Spiel.',
      ],
    },
    en:{
      title:'Interface Cleanup',
      headline:'The experimental notepad widget was removed again, keeping the interface lean and distraction-free.',
      sections:{
        improved:[
          'The bottom bar is refocused on the proven game areas.',
          'The extra floating notepad layer was removed so no overlay sits on top of the Dashboard, Programs or other pages.',
        ],
        fixed:[
          'The notepad icon and its widget no longer appear in the game.',
        ],
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'hotfix',
    title:'Stabilitätsverbesserungen',
    headline:'Geöffnete Bereiche bleiben jetzt ruhig stehen, während die Spielzeit weiterläuft.',
    sections:{
      improved:[
        'Wenn ein neuer Spieltag beginnt, bleibt deine aktuelle Ansicht geöffnet und springt nicht mehr ständig an den Anfang zurück.',
        'Beim Lesen, Scrollen oder Bearbeiten bleiben Seiten deutlich stabiler, auch wenn im Hintergrund Zeit, Markt und Kunden weiterlaufen.',
        'Updates & News zeigt Neuerungen jetzt klarer als Spieler-News statt als technische Versionsliste.',
      ],
      fixed:[
        'Das störende Neuladen der aktuellen Seite während der laufenden Spielzeit wurde behoben.',
      ],
    },
    en:{
      title:'Stability Improvements',
      headline:'Open pages now stay calmly in place while game time keeps running.',
      sections:{
        improved:[
          'When a new game day begins, your current view stays open and no longer keeps jumping back to the top.',
          'Reading, scrolling or editing stays noticeably more stable, even while time, the market and customers keep progressing in the background.',
          'Updates & News now presents new content more clearly as player-facing news instead of a technical version list.',
        ],
        fixed:[
          'The disruptive reloading of the current page during active game time was fixed.',
        ],
      },
    },
  },
  {
    version:'1.1.1', date:'2026-07-06', type:'hotfix',
    title:'Update- & Icon-Feinschliff',
    sections:{
      improved:[
        'Update-Hinweise, Login, Einstellungen und Willkommensfenster wirken jetzt einheitlicher und aufgeräumter.',
        'Seitenleiste und Schnellzugriffe verwenden jetzt durchgängig klare, fein gezeichnete Premium-Symbole für eine ruhigere und hochwertigere Navigation.',
      ],
      fixed:[
        'Die Update-Installation schlug bei Entwicklungs-Builds an der Signaturprüfung fehl („not signed by the application owner“).',
        'Im Willkommensfenster nach einem Update erschien der Text „rocket“ statt des eigentlichen Icons.',
        'Das Willkommensfenster zeigte nach einem Update veraltete Update-Informationen.',
      ],
    },
    en:{
      title:'Update & Icon Polish',
      sections:{
        improved:[
          'Update notices, login, settings and the welcome window now look more consistent and tidy.',
          'The sidebar and quick-access bar now use a consistent set of crisp, finely drawn premium symbols for calmer, more polished navigation.',
        ],
        fixed:[
          'Update installation failed the signature check on development builds ("not signed by the application owner").',
          'The welcome window showed the text "rocket" instead of the actual icon after an update.',
          'The welcome window showed outdated update information after an update.',
        ],
      },
    },
  },
  {
    version:'1.1.0', date:'2026-07-06', type:'major',
    title:'Updates & News Center',
    headline:'Automotive Empire erhält ein eigenes, dauerhaftes Update-Center — alle Neuerungen ab sofort übersichtlich im Spiel.',
    sections:{
      new:[
        'Neues Programm „Updates & News“ im Programme-Menü: alle Neuerungen, Verbesserungen und Bugfixes als moderne Update-Karten.',
        'Willkommensfenster nach jedem Update: Beim ersten Start einer neuen Ausgabe werden die Neuerungen einmalig vorgestellt.',
        'Dezente Benachrichtigung oben rechts, falls während einer Spielsitzung ein neues Update erscheint — ohne Unterbrechung.',
        'Update-Typen mit eigener Optik: Großes Inhaltsupdate, Content-, Feature-, Balance-, Bugfix-Update und Hotfix.',
      ],
      improved:[
        'Updates werden nie mehr mitten im Spiel installiert — nur noch nach dem Login oder auf ausdrücklichen Wunsch.',
        '„Nach Updates suchen“ meldet sich ruhiger: Ist alles aktuell, erscheint nur ein kurzer Hinweis ohne technische Details.',
        'Update-Informationen sind jetzt im Update-Center, in den Einstellungen und auf dem Anmeldebildschirm leichter erreichbar.',
      ],
      fixed:[
        'Der Update-Dialog konnte bisher mitten in einer laufenden Spielsitzung erscheinen und das Spiel unterbrechen.',
      ],
    },
    en:{
      title:'Updates & News Center',
      headline:'Automotive Empire gets its own permanent update center — all the latest news, clearly presented in the game from now on.',
      sections:{
        new:[
          'New "Updates & News" program in the Programs menu: all new content, improvements and bug fixes as modern update cards.',
          'Welcome window after every update: new content is presented once the first time a new release is launched.',
          'A subtle notification in the top right if a new update appears during a play session — without interrupting you.',
          'Update types with their own look: major content update, content, feature, balance, bugfix update and hotfix.',
        ],
        improved:[
          'Updates are never installed mid-session anymore — only after login or on explicit request.',
          '"Check for updates" is quieter now: if everything is current, only a short notice appears with no technical details.',
          'Update information is now easier to reach in the update center, in settings and on the login screen.',
        ],
        fixed:[
          'The update dialog could previously appear in the middle of an active play session and interrupt the game.',
        ],
      },
    },
  },
  {
    version:'1.0.5', date:'2026-07-06', type:'bugfix',
    title:'Login-Fix & neues App-Logo',
    sections:{
      improved:['Neues App-Logo für Fenster, Taskleiste und Installer.'],
      fixed:['Anmeldung am Profil funktioniert wieder zuverlässig.'],
    },
    en:{
      title:'Login Fix & New App Logo',
      sections:{
        improved:['New app logo for window, taskbar and installer.'],
        fixed:['Profile login works reliably again.'],
      },
    },
  },
  {
    version:'1.0.2', date:'2026-07-06', type:'feature',
    title:'Natives Speichersystem',
    sections:{
      new:['Spielstände werden als echte Dateien im Benutzerordner gespeichert — inklusive automatischer Backups bei jedem Speichern.'],
      improved:['Speichern ist dadurch robuster gegen Datenverlust und unabhängig vom Browser-Speicher.'],
    },
    en:{
      title:'Native Save System',
      sections:{
        new:['Save games are now stored as real files in the user folder — including automatic backups on every save.'],
        improved:['Saving is now more robust against data loss and independent of browser storage.'],
      },
    },
  },
  {
    version:'1.0.0', date:'2026-07-06', type:'major',
    title:'Automotive Empire als Desktop-App',
    headline:'Aus dem Browser-Spiel wird eine vollwertige Windows-Anwendung.',
    sections:{
      new:[
        'Automotive Empire läuft jetzt als eigenständige Desktop-App mit Installer und portabler Version.',
        'Automatische Update-Prüfung über GitHub Releases.',
        'UI 3.0: komplett neu aufgebaute Oberfläche mit Dock, KPI-Leiste, Programm-Launcher und Glasoptik.',
      ],
    },
    en:{
      title:'Automotive Empire as a Desktop App',
      headline:'The browser game becomes a full Windows application.',
      sections:{
        new:[
          'Automotive Empire now runs as a standalone desktop app with an installer and a portable version.',
          'Automatic update checks via GitHub Releases.',
          'UI 3.0: a completely rebuilt interface with a dock, KPI bar, program launcher and glass look.',
        ],
      },
    },
  },
];
function cmpVersion(a, b){
  const pa = String(a||'').split('.').map(n=>parseInt(n,10)||0);
  const pb = String(b||'').split('.').map(n=>parseInt(n,10)||0);
  for(let i=0;i<Math.max(pa.length,pb.length);i++){
    const d = (pa[i]||0)-(pb[i]||0);
    if(d) return d;
  }
  return 0;
}
const UPGRADE_DEFS = [
  {id:'wealthy_customers', icon:'WK', name:'Wohlhabende Kunden', desc:'Das Autohaus zieht häufiger Käufer mit höherem Budget und geringerer Preisempfindlichkeit an.', costs:[18000,52000,125000], reqLevel:3, effects:['+8% Chance auf Luxuskäufer, leicht weniger Rabattdruck','+16% Chance auf Luxuskäufer, bessere Budgets','+24% Chance auf Luxuskäufer, stärkere Abschlusschance bei teuren Fahrzeugen']},
  {id:'premium_presence', icon:'PA', name:'Premium-Auftritt', desc:'Ein professionellerer Auftritt erhöht Vertrauen, Zufriedenheit und Abschlussqualität.', costs:[14000,42000,98000], reqLevel:2, effects:['+2% Anfragechance, +1 Zufriedenheit bei neuen Kunden','+4% Anfragechance, bessere Bewertungsbasis','+6% Anfragechance, stärkeres Vertrauen bei Neukunden']},
  {id:'better_listings', icon:'BI', name:'Bessere Inserate', desc:'Hochwertigere Inserate erzeugen mehr Aufmerksamkeit und mehr seriöse Anfragen.', costs:[12000,36000,86000], reqLevel:2, effects:['+3,5% Anfragechance, mehr Views','+7% Anfragechance, deutlich mehr Views','+10,5% Anfragechance, kürzere Standzeiten durch mehr Leads']},
  {id:'financing_network', icon:'FN', name:'Finanzierungsnetzwerk', desc:'Bessere Bankkontakte erhöhen Genehmigungen und verbessern Grenzfälle.', costs:[22000,64000,150000], reqLevel:5, effects:['+5,5% Genehmigungsbasis','+11% Genehmigungsbasis','+16,5% Genehmigungsbasis und stabilere Kreditfälle']},
  {id:'premium_delivery', icon:'PL', name:'Premium-Lieferung', desc:'Professionellere Übergaben senken Lieferprobleme und verbessern Lieferbewertungen.', costs:[16000,46000,105000], reqLevel:4, effects:['weniger Lieferprobleme, bessere Übergabequalität','deutlich weniger Lieferprobleme','Premium-Übergaben mit starkem Bewertungsbonus']},
  {id:'market_tools', icon:'MT', name:'Marktanalyse-Tools', desc:'Bessere Daten helfen beim Ankauf, bei Marktwerten und bei der Risikoeinschätzung.', costs:[20000,58000,135000], reqLevel:6, effects:['mehr gute Marktgelegenheiten','bessere Einkaufspreis-Chancen','stärkerer Zugang zu profitablen Fahrzeugen']},
  {id:'wishlist_marketing', icon:'WM', name:'Wunschkunden-Marketing', desc:'Gezielte Kampagnen erhöhen die Zahl aktiver Suchaufträge und passender Wunschkunden.', costs:[15000,44000,99000], reqLevel:4, effects:['mehr Suchaufträge','mehr aktive Suchaufträge','deutlich mehr Wunschfahrzeug-Nachfrage']},
  {id:'dunning_management', icon:'FM', name:'Forderungsmanagement', desc:'Bessere Übersicht senkt vergessene Mahnungen und reduziert Zahlungsverzug leicht.', costs:[13000,39000,92000], reqLevel:5, effects:['-3% Zahlungsverzugsrisiko','-6% Zahlungsverzugsrisiko','-9% Zahlungsverzugsrisiko']},
  {id:'reputation_campaign', icon:'RK', name:'Rufkampagne', desc:'Investitionen in Vertrauen und Bekanntheit verbessern Nachfrage, Bewertungen und Stammkundenwirkung.', costs:[24000,70000,165000], reqLevel:8, effects:['mehr Nachfrage und Bewertungswahrscheinlichkeit','stärkere Weiterempfehlungen','spürbar bessere Markenwirkung']},
  {id:'luxury_access', icon:'LX', name:'Luxusmarkt-Zugang', desc:'Legacy-gebundener Zugang zu hochwertigeren Fahrzeugen und exklusiveren Kunden.', costs:[65000,155000,340000], reqLevel:10, legacyReq:1, effects:['mehr Premiumfahrzeuge am Markt','mehr hochwertige Marktchancen','Elite-Zugang mit stärkerem Luxusfokus']},
];

// Preisspannen = ungefährer Neuwagenpreis (EUR) je Modell, angelehnt an reale Listenpreise.
