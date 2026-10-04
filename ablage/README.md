# Ablage

Hier liegt, was nicht mehr in der App angezeigt wird, aber nicht verloren
gehen soll.

## Spanisch (Spanien) — ausgeblendet seit Oktober 2026

| Was | Wo |
|---|---|
| 60 Tageslektionen (A2 → B1) | `ablage/es-es/` |
| Prüfungen A2 und B1 | `ablage/pruefungen/` |
| Kursdefinition | `ablage/kurs-es-es.js` |

Der Kurs wird nicht mehr gebraucht. Die Dateien werden weder von der App
geladen noch vom Offline-Speicher zwischengespeichert, und die Datenprüfung
`tests/01-daten.js` sieht sie nicht, weil sie außerhalb von `data/` liegen.

**Ein vorhandener Lernstand bleibt erhalten.** Er steht weiter im Speicher des
Browsers unter dem Kurs `es-es` und ist auch in jeder exportierten Sicherung
enthalten — nur angezeigt wird er nicht. Wer zuletzt im Spanien-Kurs gelernt
hat, bekommt beim nächsten Start die Kursauswahl.

### Zurückholen

1. `ablage/es-es/` zurück nach `data/es-es/` verschieben
2. `ablage/pruefungen/es-es-*.js` zurück nach `data/pruefungen/`
3. Den Block aus `ablage/kurs-es-es.js` wieder vorne in
   `js/kurs-definitionen.js` einfügen
4. Die `<script>`-Zeilen in `index.html` und die Einträge in
   `service-worker.js` wieder ergänzen, Cache-Namen hochzählen
5. `bash tests/alle.sh`

Der Stand vor dem Ausblenden liegt außerdem vollständig im Git-Verlauf, und
der Branch `backup/v1-spanien-a2-b1` enthält die allererste Fassung.
