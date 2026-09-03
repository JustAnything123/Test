# Projektfortschritt — ¡Vamos! (Spanisch A2 → B1)

**Stand:** 3. September 2026
**Branch:** `claude/spanish-learning-app-daily-o5s13u`
**Letzter Commit:** `bd6a206`
**Status:** ✅ Version 1 fertig, getestet und gepusht — wartet auf die Freischaltung von GitHub Pages

---

## Kurzfassung

Die App ist vollständig gebaut und funktioniert. Alle Anforderungen aus der
ursprünglichen Idee sind umgesetzt. Es fehlt genau **ein Schritt, den nur du
ausführen kannst**: GitHub Pages im Repository aktivieren (siehe
[Was als Nächstes ansteht](#was-als-nächstes-ansteht)).

| Kennzahl | Wert |
|---|---|
| Tageslektionen | 60 |
| Vokabeln | 600 |
| Beispielsätze | 300 |
| Grammatikthemen mit Erklärung | 60 |
| Grammatikübungen | 300 |
| Lernkarten gesamt | 1200 |
| Übungstypen | 6 |
| Zeilen Programmcode | 2206 |
| Zeilen Lerninhalt | 3641 |
| Automatische Tests | 77 (alle grün) |

---

## Anforderungen aus der Idee — Abgleich

| Deine Anforderung | Status | Umgesetzt als |
|---|---|---|
| Lern-App im HTML-Format | ✅ | Reines HTML/CSS/JavaScript, kein Build-Schritt |
| Tägliche Aufgaben | ✅ | 60 Tageslektionen mit festem Ablauf |
| Vokabeln | ✅ | 600 Stück, je mit Artikel, Wortart und Beispielsatz |
| Sätze | ✅ | 300 Beispielsätze mit Übersetzung |
| Grammatikalische Erklärungen | ✅ | 60 Themen, auf Deutsch, mit Tabellen und Merksätzen |
| Start bei Niveau A2 | ✅ | Tag 1–33 als A2 ausgezeichnet, Tag 34–60 als B1 |
| „Ggf. erweiterte Aufgaben" | ✅ | Hören, Satzbau, Lückentext, Schnell-Wiederholung |
| Fortschrittszähler: aktive Tage | ✅ | Zähler + Streak + Kalendergitter |
| Fortschrittszähler: gelernte Wörter | ✅ | Zählt Karten ab Stufe 2 |
| Historie merkt sich Fehler | ✅ | Jede Karte mit Stufe, Fehlerzahl, letzten Falscheingaben |
| Falsche Aufgaben kommen wieder | ✅ | Problemwort-System (siehe unten) |
| An Memrise orientiert | ✅ | Intervall-Leiter und Übungstypen 1:1 übernommen |
| Recherche vor dem Bauen | ✅ | Memrise, Anki, Duolingo — Quellen in der README |
| Benachrichtigung 19:30 auf Android | ⚠️ | Über Kalender/Wecker gelöst — technisch begründet, siehe unten |
| Über Benachrichtigung zur Seite | ✅ | Der Kalendertermin enthält den Link zur App |

---

## Der eine Kompromiss: die 19:30-Benachrichtigung

**Das Problem.** Eine Webseite kann sich nicht selbst zu einer festen Uhrzeit
melden, wenn sie geschlossen ist. JavaScript läuft nur, solange die Seite offen
ist. Die dafür vorgesehene Web-Schnittstelle *Notification Triggers*
(`showTrigger` / `TimestampTrigger`) lief in zwei Chrome-Testphasen — Chrome 80–83
und 86–88 — und wurde **nie ausgeliefert**. Sie existiert bis heute nicht.

**Die gewählte Lösung** (von dir entschieden): Der Kalender oder Wecker des
Handys übernimmt die Erinnerung.

- Die App erzeugt auf Knopfdruck eine `.ics`-Kalenderdatei
- Täglich wiederkehrend um 19:30, Zeitzone `Europe/Berlin` hinterlegt
- Sommer-/Winterzeit passt sich damit automatisch an
- Der Termin enthält den Link zur App — Benachrichtigung antippen und du bist drin
- Alternativ eine bebilderte Anleitung für den Android-Wecker

**Warum das sogar besser ist:** Kalender- und Weckerbenachrichtigungen sind zu
100 % zuverlässig — auch offline, im Flugmodus und im Energiesparmodus. Echte
Web-Push-Nachrichten können vom Android-Energiesparmodus verzögert werden.

**Nachrüstbar:** Der Service Worker liegt bereits vorbereitet im Projekt. Für
echte Push-Nachrichten bräuchte es zusätzlich VAPID-Schlüssel und einen externen
Zeitgeber (z. B. eine GitHub-Action täglich um 17:30 UTC). Siehe
[Ideen für später](#ideen-für-später).

---

## Was fertig ist

### Grundgerüst ✅

| Datei | Zeilen | Zweck |
|---|---|---|
| `index.html` | 214 | Aufbau aller sechs Bildschirme |
| `css/stil.css` | 396 | Aussehen, helles und dunkles Thema, mobil-first |
| `manifest.json` | 17 | Macht die Seite zur installierbaren App |
| `service-worker.js` | 53 | Offline-Zwischenspeicher |
| `icons/` | 3 Dateien | App-Icon in 192px, 512px und maskable |

### Kern-Logik ✅

| Datei | Zeilen | Zweck |
|---|---|---|
| `js/daten.js` | 73 | Sammelbehälter, Nachschlagewerk, Ablenker für Multiple Choice |
| `js/speicher.js` | 138 | localStorage, Export/Import, Datumslogik |
| `js/srs.js` | 142 | Intervall-Leiter, Problemwörter, Übungstyp je Stufe |
| `js/sprache.js` | 72 | Spanische Sprachausgabe, blendet sich selbst aus wenn keine da |
| `js/uebungen.js` | 379 | Die sechs Übungstypen, Antwortvergleich |
| `js/statistik.js` | 192 | Zähler, Streak, Kalendergitter, Historie, ICS-Erzeugung |
| `js/tagesplan.js` | 133 | Stellt die Aufgaben einer Sitzung zusammen |
| `js/app.js` | 397 | Ablaufsteuerung, Bildschirmwechsel, alle Knöpfe |

### Die sechs Übungstypen ✅

| Typ | Beschreibung | Vorbild |
|---|---|---|
| Karteikarte | Wort + Beispielsatz ansehen | Memrise „Learn New Words" |
| Multiple Choice | 4 Optionen, Ablenker aus derselben Wortart | Memrise |
| Tippen | Freie Eingabe mit Tastenreihe á é í ó ú ñ ü ¿ ¡ | Memrise „Typing Test" |
| Satzbau | Wortkacheln in die richtige Reihenfolge | Memrise „Tapping Test" |
| Hören | Vorgelesenen Satz aufschreiben, mit Langsam-Knopf | Memrise „Listening Test" |
| Lückentext | Grammatische Form einsetzen, mit Tipp-Buttons | eigene Ergänzung |

### Lerninhalt ✅

| Datei | Tage | Niveau | Schwerpunkt |
|---|---|---|---|
| `lektionen-01-10.js` | 1–10 | A2 | ser/estar, hay, unregelmäßige Verben, Pronomen, gustar |
| `lektionen-11-20.js` | 11–20 | A2 | Vergleiche, Imperativ, Perfecto, Indefinido, Imperfecto |
| `lektionen-21-30.js` | 21–30 | A2 | Futuro, por/para, Relativsätze, Verneinung, unpersönliches se |
| `lektionen-31-40.js` | 31–40 | A2→B1 | Condicional, Pluscuamperfecto, Passiv, **Subjuntivo-Einstieg** |
| `lektionen-41-50.js` | 41–50 | B1 | Subjuntivo nach Konjunktionen, Bedingungssätze Typ 1, aunque |
| `lektionen-51-60.js` | 51–60 | B1 | Imperfecto de Subjuntivo, Bedingungssätze Typ 2 und 3, lo |

Jede Lektion: exakt 10 Vokabeln, 5 Sätze, 1 Grammatikthema mit 5 Übungen.
Alle 1200 Karten-IDs geprüft — keine Doppelung, keine Lücke.

### Fortschritt und Historie ✅

- **Streak** — Tage in Folge; reißt erst, wenn ein ganzer Tag verstreicht
- **Aktive Tage** — Gesamtzahl
- **Gelernte Wörter** — Karten ab Stufe 2 (mindestens zweimal richtig)
- **Genauigkeit** — Trefferquote über alle Antworten
- **Problemwörter** — Anzahl, anklickbar direkt zur gefilterten Liste
- **Kalendergitter** — letzte 12 Wochen, Farbintensität nach Aufgabenzahl
- **Historie** — jede Karte mit Stufenbalken, Fehlerzahl, Fälligkeit und den
  letzten zwei Falscheingaben; filterbar nach *alle / Problemwörter / fällig*

### Wiederholsystem ✅

Intervall-Leiter (1:1 von Memrise):

```
Stufe   0      1       2      3       4        5        6        7
Zeit    4 Std  12 Std  1 Tag  6 Tage  12 Tage  48 Tage  96 Tage  6 Monate
```

Problemwörter (Konzept von Anki übernommen):

- Ab **4 Fehlern** wird eine Karte markiert
- Sie erscheint danach in **jeder** Sitzung, unabhängig von der Fälligkeit
- Sie wird immer **getippt** abgefragt — kein Raten aus vier Optionen
- Die Markierung fällt erst nach **3 Treffern in Folge** weg
- Ein Fehler dazwischen setzt die Zählung zurück

### Bedienkomfort ✅

- Helles und dunkles Thema, folgt auf Wunsch der Systemeinstellung
- Tagesziel einstellbar (15 / 25 / 40 / alles Fällige)
- Sprachausgabe abschaltbar
- Export und Import des Lernstands als Sicherungsdatei
- Zurücksetzen mit doppelter Sicherheitsabfrage
- Zwei Zusatzmodi: „Nur Wiederholen" und „Schnell-Wiederholung"
- Offline nutzbar
- Funktioniert auch per Doppelklick auf `index.html` (ohne Server)

---

## Was getestet wurde

### Unit-Tests der Wiederhollogik — 29 von 29 grün

Stufenaufstieg · Rückfall bei Fehler · korrekte Intervalle · Leech-Bildung nach
4 Fehlern · Befreiung nach 3 Treffern · Serie-Unterbrechung · Fälligkeit ·
Übungstyp je Stufe · Höchststufe · Historie auf 10 Einträge begrenzt

### End-to-End-Tests im Browser — 48 von 48 grün

Getestet im Handy-Format 390×844 mit Chromium:

| Bereich | Geprüft |
|---|---|
| Daten | 60 Lektionen, 600 Vokabeln, 300 Sätze vollständig geladen |
| Tagesdurchlauf | 41 Aufgaben, jede 7. absichtlich falsch, alle Übungstypen erreicht |
| Zustand danach | Tageszähler, 20 neue Karten, Streak, Genauigkeit |
| Neustart | Fortschritt überlebt das Neuladen der Seite |
| Problemwörter | Bildung, Anzeige, Position im Tagesplan, Tippmodus erzwungen |
| Historie | Einträge, Filter, Markierung, Anzeige der Falscheingaben |
| Hör-Übung | Erkennung, Abspiel- und Langsam-Knopf, 9 Akzenttasten |
| Antwortvergleich | Akzente, Artikel, Groß-/Kleinschreibung, Mehrfachlösungen |
| Zusatzmodi | Nur-Wiederholen ohne neue Wörter, Schnell-Wiederholung |
| Kalenderdatei | RRULE, Zeitzone, Uhrzeit, Alarm, Link, CRLF-Zeilenenden |
| Sicherung | Export, Zurücksetzen, Import, Abweisung kaputter Dateien |
| Einstellungen | Thema, Tagesziel begrenzt die Wiederholung |
| Offline | App startet ohne Netzverbindung |
| Nach Tag 60 | Abschlussmeldung, Wechsel in den Wiederholungsmodus |
| Konsole | keine JavaScript-Fehler über den gesamten Durchlauf |

### Gefundene und behobene Fehler

| # | Fehler | Ursache | Behebung |
|---|---|---|---|
| 1 | „Weiter" war neben „Prüfen" sichtbar | `.btn { display: inline-block }` überschrieb die eingebaute Browser-Regel `[hidden] { display: none }` | Eigene Regel `[hidden] { display: none !important }` im Stylesheet |
| 2 | Zähler „Gelernte Wörter" blieb nach Tag 1 auf 0 | Schwelle lag bei Stufe 3, ein neues Wort erreicht am ersten Tag aber nur Stufe 2 | Schwelle auf Stufe 2 gesetzt — entspricht „mindestens zweimal richtig" |
| 3 | Akzentleiste brach in zwei Zeilen um | `flex-wrap` mit 9 Tasten und Mindestbreite | Raster mit 9 gleich breiten Spalten |
| 4 | Syntaxfehler in den Lerndaten | Deutsches `„` von geradem `"` geschlossen — das beendet den JavaScript-Text | 12 Stellen auf typografisches `"` umgestellt |

---

## Was als Nächstes ansteht

### 🔲 Nur du: GitHub Pages aktivieren

Der letzte Schritt zur Nutzbarkeit auf dem Handy. Dauert zwei Minuten:

1. Repository auf github.com → **Settings** → links **Pages**
2. *Source*: **Deploy from a branch**
3. *Branch*: `claude/spanish-learning-app-daily-o5s13u`, Ordner `/ (root)` → **Save**
4. 1–2 Minuten warten → Adresse: `https://justanything123.github.io/Test/`
5. Auf dem Handy in Chrome öffnen → Menü (⋮) → **Zum Startbildschirm hinzufügen**

### 🔲 Nur du: Erinnerung einrichten

In der App: Menü (☰) → **⏰ Erinnerung 19:30** → Kalenderdatei herunterladen →
in den Downloads antippen → Google Kalender importiert sie.

### 🔲 Nur du: Spanische Stimme prüfen

Unter ⚙️ Einstellungen steht, ob eine gefunden wurde. Falls nicht:
Android-Einstellungen → System → Sprachen & Eingabe → Text-in-Sprache-Ausgabe →
Zahnrad bei Google-Sprachausgabe → *Sprache installieren* → **Español**.
Ohne sie blendet die App die Hör-Übungen automatisch aus.

---

## Ideen für später

Nichts davon ist nötig — die App ist ohne diese Punkte vollständig. Sortiert
nach Aufwand.

### Klein

- **Mehr Lerninhalt.** Tag 61+ nach dem Muster in `data/` anhängen. Die Anleitung
  dafür steht in der README unter *Eigene Inhalte ergänzen*.
- **Lieblingswörter markieren.** Ein Stern-Knopf, der Karten in eine eigene Liste
  legt.
- **Tagesziel-Erinnerung in der App.** Ein Hinweis, wenn du an einem Tag noch
  nichts gemacht hast — allerdings nur sichtbar, wenn die App offen ist.

### Mittel

- **Statistik ausbauen.** Verlaufskurve der gelernten Wörter über die Zeit,
  Fehlerquote pro Grammatikthema (zeigt dir, wo es wirklich hakt).
- **Prüfungsmodus.** 20 zufällige Aufgaben ohne Hilfen, mit Notenergebnis.
- **Suchfunktion in der Historie.** Bei 1200 Karten irgendwann nützlich.

### Groß

- **Echte Push-Benachrichtigungen.** Der Service Worker liegt bereit. Zusätzlich
  nötig:
  1. VAPID-Schlüsselpaar erzeugen (`npx web-push generate-vapid-keys`)
  2. Öffentlichen Schlüssel in die App, privaten als GitHub-Secret hinterlegen
  3. Push-Anmeldung des Handys speichern (z. B. als Repository-Datei oder Gist)
  4. GitHub-Action mit Zeitplan `30 17 * * *` und `30 18 * * *`, die im Skript
     prüft, ob es in Berlin gerade 19:30 ist, und dann den Push sendet
  Aufwand: etwa ein halber Tag. Nutzen gegenüber der Kalenderlösung: gering.
- **Fortschritt zwischen Geräten synchronisieren.** Bräuchte einen Server oder
  eine Anbindung an einen Cloud-Speicher. Der Export/Import deckt den Umzug auf
  ein neues Gerät bereits ab.
- **Eigene Audioaufnahmen** statt der Gerätestimme. Klanglich besser, aber
  600 Aufnahmen sind viel Arbeit und viele Megabyte.

---

## Bekannte Grenzen

Nichts davon ist ein Fehler — es sind bewusste Entscheidungen oder technische
Grenzen, die du kennen solltest.

| Punkt | Erläuterung |
|---|---|
| Fortschritt nur auf einem Gerät | Liegt im Browserspeicher. Löschen der Browserdaten entfernt ihn. **Abhilfe:** regelmäßig sichern (⚙️ Einstellungen), etwa monatlich. |
| Kein automatischer Push um 19:30 | Technisch nicht möglich, siehe oben. Der Kalendertermin übernimmt das zuverlässig. |
| Hör-Übungen brauchen eine Stimme | Ohne installierte spanische Stimme blendet die App sie aus und weist darauf hin. |
| Sprachqualität der Stimme | Die Gerätestimme klingt maschinell. Für Aussprache-Training reicht sie, für Feinheiten nicht. |
| Kein Sprechtraining | Die App prüft nichts, was du sagst. Das ist mit Web-Technik schwer verlässlich zu lösen. |
| Inhalt endet bei Tag 60 | Danach Wiederholungsmodus. Neue Tage lassen sich jederzeit anhängen. |

---

## Chronik

| Datum | Was passiert ist |
|---|---|
| 03.09.2026 | Recherche zu Memrise, Anki und Duolingo; Klärung der Notification-Frage |
| 03.09.2026 | Plan abgestimmt: GitHub Pages, Kalender-Erinnerung, 60 Tage A2→B1 |
| 03.09.2026 | Grundgerüst, Kern-Logik, sechs Übungstypen, Ablaufsteuerung gebaut |
| 03.09.2026 | Zwischentest nach Tag 1–10 — zwei Fehler gefunden und behoben |
| 03.09.2026 | Lerninhalt Tag 11–60 geschrieben, Daten validiert |
| 03.09.2026 | 29 Unit-Tests und 48 E2E-Tests, alle grün |
| 03.09.2026 | README geschrieben, Commit `bd6a206` gepusht |
