# Tests

Neun Prüfungen, die nachsehen, ob die App noch tut, was sie soll. Alle laufen
automatisch und melden sich am Ende entweder mit „bestanden" oder mit einer Liste
der Stellen, die nicht stimmen.

**Nichts davon ist Teil der App.** Der Ordner kann gelöscht werden, ohne dass
sich am Lernen etwas ändert. Er ist nur dafür da, dass man nach einer Änderung
sieht, ob man aus Versehen etwas kaputt gemacht hat.

---

## Alles auf einmal laufen lassen

```bash
bash tests/alle.sh
```

Das Skript startet den lokalen Webserver selbst, lässt alle sieben Tests
nacheinander laufen und beendet den Server danach wieder. Am Ende steht entweder
`Alle Tests bestanden.` oder wie viele fehlgeschlagen sind.

Dauer: etwa zwei bis drei Minuten, der größte Teil davon sind die Browsertests.

## Einen einzelnen Test laufen lassen

Die beiden ersten brauchen keinen Browser und keinen Server:

```bash
node tests/01-daten.js
node tests/02-lernsystem.js
```

Die anderen fünf steuern einen echten Browser und brauchen deshalb einen
laufenden Server. In einem Terminal:

```bash
python3 -m http.server 8765
```

Und in einem zweiten:

```bash
node tests/05-sprachrichtungen.js
```

---

## Was die einzelnen Tests prüfen

| Datei | Browser nötig | Prüft |
|---|---|---|
| `01-daten.js` | nein | Alle Lerndaten aller Kurse: fehlende Felder, doppelte oder fehlende IDs, Lücken in der Tagesnummerierung, Übungen ohne oder mit mehr als einer Lücke |
| `02-lernsystem.js` | nein | Das Wiederholsystem als reine Rechenaufgabe: Intervallleiter, Rückfall auf Stufe 0 bei Fehlern, Erkennung von Problemwörtern, Übungstyp je Stufe |
| `03-ablauf.js` | ja | Eine komplette Tagessitzung von vorne bis hinten, alle sechs Übungstypen, Fortschrittsanzeige, Historie, Dunkelmodus, Kalenderdatei, Offline-Betrieb |
| `04-kurssystem.js` | ja | Umschalten zwischen den Kursen, getrennter Lernstand je Kurs, Oberflächensprache, Darstellung des Lernpfads |
| `05-sprachrichtungen.js` | ja | Spielt in **jedem** der vier Kurse Tag 1 komplett durch und prüft Ziel- und Ausgangssprache, Sonderzeichenleiste und Aufgabenverteilung |
| `06-fachwortschatz.js` | ja | Die Vertiefungstage 31–45 von „Deutsch im Beruf": Redemittel-Erklärung mit Tabelle, jede Lückenübung sichtbar bis zum Satzende und lösbar |
| `07-luecken.js` | ja | Gezielte Nachkontrolle der vier Übungen, die früher zwei Lücken hatten und deshalb abgeschnitten dargestellt wurden |
| `08-pruefung.js` | ja | Das Prüfungssystem: Freischaltung am richtigen Tag, Prüfungsregeln (keine Hilfe, keine Rückmeldung, Antworten überleben das Blättern), Durchlauf alles richtig und alles falsch, Bestehensgrenze, gespeicherte Versuche, und das Verhalten auf einem Gerät ohne Sprachausgabe |
| `09-pruefer.js` | ja | Der komplette Prüfer-Rundlauf in **zwei getrennten Browserkontexten**: Link erzeugen, in einem Fenster ohne jeden Lernstand öffnen, bewerten, Rücklink einlesen. Dazu Umlaute und Akzente im Link, erzwungene Oberflächensprache, unberührter Lernstand des Prüfers, kaputte und fremde Links, Eintragen von Hand |

Zusammen sind das **253 einzelne Prüfungen** in `02` bis `05`, `08` und `09`,
plus die inhaltlichen Kontrollen aus `01`, `06` und `07`.

### Der wichtigste Test für dich

`01-daten.js`. Immer wenn du eigene Vokabeln oder Übungen schreibst, sagt dir
dieser Test in zwei Sekunden, ob etwas übersehen wurde — eine doppelte ID, ein
vergessenes Feld, eine Übung mit zwei Lücken. Bei Prüfungen prüft er zusätzlich,
ob jede Lösung überhaupt unter den angebotenen Antworten steht. Er braucht weder
Browser noch Server:

```bash
node tests/01-daten.js
```

---

## Voraussetzungen

**Node.js** muss vorhanden sein (`node -v`).

**Python 3** für den kleinen Testserver (`python3 -V`). Jeder andere Webserver
tut es auch, dann muss nur die Adresse angepasst werden — siehe unten.

**Playwright** für die fünf Browsertests. Wenn es noch nicht installiert ist:

```bash
cd tests
npm install
npx playwright install chromium
```

Eine globale Installation wird ebenfalls gefunden, eine Installation im
Testordner ist also nicht zwingend. Welchen Browser Playwright startet, sucht
`umgebung.js` automatisch.

## Etwas anders einstellen

Ohne eine Zeile Code zu ändern:

```bash
# anderer Port oder andere Adresse
VAMOS_URL=http://localhost:9000/index.html node tests/03-ablauf.js

# anderer Port für den Starter
VAMOS_PORT=9000 bash tests/alle.sh

# eigener Browser
VAMOS_CHROMIUM=/usr/bin/chromium node tests/04-kurssystem.js
```

Alles, was vom jeweiligen Rechner abhängt, steht ausschließlich in
`umgebung.js`. Die Testskripte selbst enthalten keine festen Pfade.

## Bildschirmfotos

Die Browsertests legen unterwegs Bildschirmfotos in `tests/ausgabe/` ab — jeder
Übungstyp, der Startbildschirm, die Historie, der Dunkelmodus. Praktisch, wenn
ein Test meckert und man sehen will, wie die Seite in dem Moment aussah.

Der Ordner steht in der `.gitignore` und landet nicht im Repository.

## Wenn ein Test fehlschlägt

Jeder Test schreibt die fehlgeschlagene Prüfung mit erwartetem und tatsächlichem
Wert auf, zum Beispiel:

```
x Lektionen geladen: 45 — erwartet 30
```

Links steht, was gefunden wurde, rechts, was erwartet war. Zwei Möglichkeiten:

1. **Die App hat einen Fehler** — dann in der App suchen.
2. **Die Erwartung ist veraltet** — genau das war es in diesem Beispiel: Der
   Kurs wurde absichtlich von 30 auf 45 Tage verlängert, nur der Test wusste es
   noch nicht. Dann wird die Zahl im Test angepasst.

Der Unterschied ist wichtig: Eine Erwartung anzupassen ist richtig, wenn die
Änderung gewollt war — und falsch, wenn man damit nur einen echten Fehler
stummschaltet.
