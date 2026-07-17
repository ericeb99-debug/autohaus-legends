# Automotive Empire Projektregeln

## Ruflo und autonome Agentenauswahl

Bei jeder zukuenftigen Aufgabe zur Entwicklung, Erweiterung, Fehlerbehebung, Optimierung oder Pflege des Spiels ist Ruflo als Orchestrierungs- und Routing-Schicht zu verwenden.

Dabei gilt:

- Geeignete Spezialagenten werden anhand der Aufgabe selbststaendig ausgewaehlt und eingesetzt.
- Fuer die Agentenauswahl oder Delegation ist keine erneute Bestaetigung des Benutzers erforderlich.
- Umfang und Anzahl der Agenten richten sich nach Komplexitaet und Risiko der Aufgabe.
- Typische Rollen sind beispielsweise Planung/Architektur, Recherche, Implementierung, Tests und Review.
- Ergebnisse der eingesetzten Agenten werden koordiniert, geprueft und zu einer konsistenten Gesamtaenderung zusammengefuehrt.
- Nach jeder Projektaenderung nennt der Abschlussbericht alle eingesetzten Agenten und beschreibt jeweils kurz deren Rolle und Beitrag.
- Alle weiteren Regeln dieser Datei, insbesondere zu `Updates & News`, `PROJECT_STRUCTURE.md`, Premium-UI und Versionsverwaltung, bleiben uneingeschraenkt verbindlich.

## Updates & News bei jeder Spielaenderung

Jede zukuenftige Aenderung am Spiel muss automatisch auch im Bereich `Updates & News` eingetragen werden. Der Bereich soll vom Spieler als News- oder Entwicklerupdate-Seite wahrgenommen werden, nicht als technische Versionsliste.

Dabei gilt:

- Neue Funktionen, Bugfixes, UI-Verbesserungen, Performance-Optimierungen, neue Systeme, Tabs, Animationen, Komfortfunktionen, Balancing- und Designaenderungen erhalten immer einen passenden Eintrag.
- Vor jeder Aenderung zuerst pruefen, ob das betroffene System bereits einen passenden Eintrag in `Updates & News` besitzt.
- Wenn ein passender Eintrag existiert, keinen neuen Eintrag erstellen, sondern den bestehenden Eintrag sinnvoll erweitern oder ergaenzen.
- Nur wirklich neue Features oder komplett neue Systeme erhalten einen neuen eigenen Eintrag.
- Eintraege werden professionell, spielerfreundlich und verstaendlich formuliert.
- Das vorhandene Premium-UI des Projekts ist beizubehalten. Keine fremde Designrichtung, keine abgeschnittenen Texte, keine unpassenden Standardlisten.
- Im Spiel werden im Bereich `Updates & News` keine sichtbaren Versionsnummern angezeigt.
- Keine Formulierungen wie `Version 1.1.2`, `v1.1.2`, `Du nutzt Version 1.1.2` oder `Willkommen bei Version 1.1.2`.
- Falls ein Titel benoetigt wird, neutrale Titel verwenden, zum Beispiel `Aktuelles Update`, `Neues Feature`, `Komfortupdate`, `Stabilitaetsverbesserungen`, `Design-Feinschliff` oder `Neues System`.
- `package.json` und `GAME_VERSION` duerfen nicht eigenstaendig geaendert werden. Versionsverwaltung bleibt manuell.

Standardablauf fuer jede zukuenftige Spielaenderung:

1. Aenderung umsetzen.
2. Pruefen, ob ein bestehender `Updates & News`-Eintrag zum betroffenen System existiert.
3. Bestehenden Eintrag erweitern oder nur bei komplett neuem Feature/System einen neuen Eintrag erstellen.
4. Eintrag professionell zusammenfassen.
5. Optisch am vorhandenen Design orientieren.
6. Keine Versionsnummer im Spiel anzeigen.
7. `package.json` und `GAME_VERSION` unveraendert lassen.

## PROJECT_STRUCTURE.md aktuell halten

Die Datei `PROJECT_STRUCTURE.md` ist die dauerhafte technische Projektdokumentation. Sie muss automatisch aktualisiert werden, wenn neue Dateien oder Ordner entstehen, Systeme ausgelagert werden, Assets verschoben werden oder neue Spielbereiche hinzukommen.

Bei Struktur- oder Systemaenderungen gilt zusaetzlich:

1. Betroffene Dateien/Ordner in `PROJECT_STRUCTURE.md` dokumentieren.
2. Die Suchuebersicht aktualisieren, damit klar bleibt, wo Login, Dashboard, Werkstatt, Kunden, Fahrzeuge, Updates & News, Design, Auto-Updater, DEV-Build und Release-Build liegen.
3. Neue Systeme wie Notizblock, ECU oder weitere Module sofort in der Dokumentation ergaenzen.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
