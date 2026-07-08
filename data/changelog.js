const CHANGELOG = [
  {
    version:'1.1.1', date:'2026-07-07', type:'major', pinned:true,
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
      ]
    }
  },
  {
    version:'1.1.1', date:'2026-07-07', type:'normal',
    title:'Neuer Name',
    headline:'Das Spiel tritt ab sofort unter dem Namen Automotive Empire auf.',
    sections:{
      improved:[
        'App-Name, Fenstertitel, Installer und sichtbare UI-Texte wurden auf Automotive Empire angepasst.',
        'Die DEV-Version ist ebenfalls passend benannt und erscheint als Automotive Empire DEV.',
        'Das bestehende Logo bleibt erhalten, damit sich das Spiel weiterhin vertraut anfühlt.'
      ]
    }
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
  },
  {
    version:'1.1.1', date:'2026-07-06', type:'hotfix',
    title:'Update- & Icon-Feinschliff',
    sections:{
      improved:[
        'Update-Hinweise, Login, Einstellungen und Willkommensfenster wirken jetzt einheitlicher und aufgeräumter.',
      ],
      fixed:[
        'Die Update-Installation schlug bei Entwicklungs-Builds an der Signaturprüfung fehl („not signed by the application owner“).',
        'Im Willkommensfenster nach einem Update erschien der Text „rocket“ statt des eigentlichen Icons.',
        'Das Willkommensfenster zeigte nach einem Update veraltete Update-Informationen.',
      ],
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
  },
  {
    version:'1.0.5', date:'2026-07-06', type:'bugfix',
    title:'Login-Fix & neues App-Logo',
    sections:{
      improved:['Neues App-Logo für Fenster, Taskleiste und Installer.'],
      fixed:['Anmeldung am Profil funktioniert wieder zuverlässig.'],
    },
  },
  {
    version:'1.0.2', date:'2026-07-06', type:'feature',
    title:'Natives Speichersystem',
    sections:{
      new:['Spielstände werden als echte Dateien im Benutzerordner gespeichert — inklusive automatischer Backups bei jedem Speichern.'],
      improved:['Speichern ist dadurch robuster gegen Datenverlust und unabhängig vom Browser-Speicher.'],
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
