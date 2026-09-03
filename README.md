# ¡Vamos! — Spanisch A2 → B1

Eine tägliche Spanisch-Lern-App zum Selbsthosten. Läuft als normale Webseite im
Browser, funktioniert offline und speichert deinen Fortschritt auf deinem Gerät.

**60 Tageslektionen · 600 Vokabeln · 300 Beispielsätze · 60 Grammatikthemen**

---

## Inhalt

1. [Was die App kann](#was-die-app-kann)
2. [Schnellstart in 5 Minuten](#schnellstart-in-5-minuten)
3. [Die Erinnerung um 19:30 einrichten](#die-erinnerung-um-1930-einrichten)
4. [Wie das Lernsystem funktioniert](#wie-das-lernsystem-funktioniert)
5. [Fortschritt sichern](#fortschritt-sichern)
6. [Aufbau der Dateien](#aufbau-der-dateien)
7. [Eigene Inhalte ergänzen](#eigene-inhalte-ergänzen)
8. [Häufige Fragen](#häufige-fragen)

---

## Was die App kann

**Jeden Tag eine Lektion** mit 10 neuen Vokabeln, 5 Beispielsätzen und einem
Grammatikthema. Der Aufbau folgt Memrise: erst die fälligen Wiederholungen,
dann der neue Stoff.

**Sechs Übungsarten**, die mit deinem Können anspruchsvoller werden:

| Übung | Was du tust |
|---|---|
| Karteikarte | Neues Wort mit Beispielsatz ansehen |
| Multiple Choice | Aus vier Möglichkeiten wählen |
| Tippen | Das Wort selbst schreiben — mit Tastenreihe für á é í ó ú ñ ü ¿ ¡ |
| Satzbau | Vorgegebene Wörter in die richtige Reihenfolge bringen |
| Hören | Den vorgelesenen Satz aufschreiben |
| Lückentext | Die richtige grammatische Form einsetzen |

**Wiederholsystem nach Memrise-Vorbild.** Jedes Wort hat eine Stufe. Sitzt es,
wandert es weiter: 4 Stunden → 12 Stunden → 1 Tag → 6 Tage → 12 Tage → 48 Tage →
96 Tage → 6 Monate. Ein Fehler wirft es auf Stufe 0 zurück.

**Problemwörter, die nicht lockerlassen.** Was du viermal falsch hattest, wird
markiert und kommt ab dann in **jeder** Sitzung wieder — und zwar zum Tippen,
nicht zum Raten. Erst wenn es dreimal hintereinander sitzt, ist es wieder frei.

**Fortschritt im Blick:** Streak (Tage in Folge), aktive Tage gesamt, gelernte
Wörter, Trefferquote, Problemwörter und ein Kalendergitter der letzten 12 Wochen.

**Historie:** Jedes Wort, das du je gesehen hast, mit Stufe, Fehlerzahl und deinen
letzten Falscheingaben. Filterbar nach Problemwörtern und Fälligkeit.

**Aussprache ohne Downloads.** Die App nutzt die eingebaute Sprachausgabe deines
Handys. Keine Audiodateien, kein Internet nötig.

---

## Schnellstart in 5 Minuten

### Weg A — als App auf dem Handy (empfohlen)

Dafür veröffentlichst du die Dateien einmalig über GitHub Pages. Das ist kostenlos
und dauert zwei Minuten.

1. Öffne dieses Repository auf github.com
2. **Settings** (oben rechts im Repo, nicht dein Profil)
3. Links in der Seitenleiste: **Pages**
4. Unter *Build and deployment* → *Source*: **Deploy from a branch**
5. Unter *Branch*: `claude/spanish-learning-app-daily-o5s13u` auswählen,
   Ordner auf `/ (root)` lassen → **Save**
6. Ein bis zwei Minuten warten, Seite neu laden. Oben erscheint deine Adresse:

   ```
   https://justanything123.github.io/Test/
   ```

7. Diese Adresse auf dem Handy in **Chrome** öffnen
8. Menü (⋮) → **Zum Startbildschirm hinzufügen**

Ab jetzt liegt ¡Vamos! als Icon auf deinem Startbildschirm und startet ohne
Browser-Adressleiste, wie eine normale App.

### Weg B — ohne Hosting, direkt vom Gerät

Lade das Repository als ZIP herunter, entpacke es und öffne `index.html` per
Doppelklick. Die App funktioniert vollständig — es fehlen nur das App-Icon und
der Offline-Modus.

> Diese App braucht bewusst keinen Server, kein npm und keinen Build-Schritt.
> Es sind reine HTML-, CSS- und JavaScript-Dateien, die du alle lesen und
> bearbeiten kannst.

---

## Die Erinnerung um 19:30 einrichten

### Warum die App das nicht selbst kann

Eine Webseite kann sich **nicht selbst** zu einer festen Uhrzeit melden, wenn sie
geschlossen ist. JavaScript läuft nur, solange die Seite offen ist. Die
Web-Schnittstelle, die genau dafür gedacht war — *Notification Triggers* mit
`showTrigger` und `TimestampTrigger` — wurde von Google in zwei Testphasen
erprobt (Chrome 80–83 und 86–88) und **nie ausgeliefert**. Es gibt sie bis heute
nicht.

Deshalb übernimmt der Kalender oder Wecker deines Handys diese Aufgabe. Das ist
sogar der bessere Weg: zuverlässig, auch offline und im Energiesparmodus.

### Weg 1 — Kalendereintrag mit einem Klick

1. In der App: Menü (☰) → **⏰ Erinnerung 19:30**
2. Auf **📅 Kalender-Erinnerung herunterladen** tippen
3. Die Datei `spanisch-1930.ics` in deinen Downloads antippen
4. Google Kalender öffnet sich → **Importieren** bestätigen

Fertig. Ab jetzt meldet sich dein Handy jeden Abend um 19:30 mit einer
Benachrichtigung, die den Link zur App enthält — antippen und du bist drin.

Der Termin ist mit der Zeitzone `Europe/Berlin` hinterlegt. Die Umstellung auf
Sommer- und Winterzeit passiert also automatisch, du musst nichts nachjustieren.

### Weg 2 — Wecker der Uhr-App

1. Uhr-App öffnen → Reiter **Wecker** → **+**
2. Zeit **19:30** einstellen
3. **Wiederholen** antippen → alle sieben Wochentage auswählen
4. Als Bezeichnung z. B. **„Spanisch lernen 🇪🇸"** eingeben
5. Speichern

### Später doch echte Push-Benachrichtigungen?

Das ist nachrüstbar. Der Service Worker (`service-worker.js`) liegt bereits
bereit. Dazu bräuchte es VAPID-Schlüssel und einen Zeitgeber, der den Push
auslöst — zum Beispiel eine GitHub-Action, die täglich um 17:30 UTC läuft.
Das ist ein eigener Ausbauschritt und für den Anfang nicht nötig.

---

## Wie das Lernsystem funktioniert

### Der Ablauf einer Sitzung

```
1. ⚠️  Problemwörter      →  was hartnäckig hakt, immer zuerst
2. 🔁  Wiederholungen     →  was heute fällig ist
3. 📖  Neue Vokabeln      →  ansehen · Multiple Choice · tippen
4. 💬  Sätze              →  Satzbau und Hören
5. 📐  Grammatik          →  Erklärung lesen, dann Lückentext
6. 🎉  Abschluss          →  Statistik und Fehlerübersicht
```

### Die Intervall-Leiter

| Stufe | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| **Nächste Wiederholung** | 4 Std | 12 Std | 1 Tag | 6 Tage | 12 Tage | 48 Tage | 96 Tage | 6 Monate |

- **Richtig** → eine Stufe hoch
- **Falsch** → zurück auf Stufe 0, in vier Stunden wieder dran
- Ab **Stufe 2** zählt ein Wort im Zähler als *gelernt* — es saß dann mindestens
  zweimal und die nächste Wiederholung ist einen Tag entfernt

### Problemwörter

Nach **vier Fehlern** wird ein Wort markiert. Ab dann:

- erscheint es in **jeder** Sitzung, unabhängig vom Fälligkeitsdatum
- wird es immer im **Tippmodus** abgefragt — kein Raten aus vier Optionen
- wird die Markierung erst nach **drei Treffern in Folge** aufgehoben

Damit erfüllt die App genau das, was eine Lern-App leisten soll: Was du nicht
kannst, verschwindet nicht einfach.

### Bewertung deiner Eingaben

Die Prüfung ist absichtlich freundlich, aber nicht nachlässig:

| Eingabe | Lösung | Ergebnis |
|---|---|---|
| `casa` | `la casa` | ✓ richtig — der Artikel darf fehlen |
| `LA CASA` | `la casa` | ✓ richtig — Groß-/Kleinschreibung egal |
| `sabado` | `sábado` | ✓ richtig, aber gelb: „Fast perfekt — die Akzente!" |
| `Wagen` | `das Auto, der Wagen` | ✓ richtig — jede genannte Übersetzung zählt |
| `haus` | `la casa` | ✗ falsch |

---

## Fortschritt sichern

> **Wichtig:** Dein Fortschritt liegt im Speicher deines Browsers. Löschst du die
> Browserdaten oder wechselst du das Gerät, ist er weg.

**Sicherung erstellen:** Menü (☰) → ⚙️ Einstellungen → **⬇️ Fortschritt sichern**.
Du bekommst eine Datei wie `spanisch-fortschritt-2026-09-03.json`.

**Sicherung einspielen:** Menü → ⚙️ Einstellungen → **⬆️ Sicherung einspielen** →
Datei auswählen.

So überträgst du deinen Stand auch auf ein neues Handy. Mach das am besten
einmal im Monat.

---

## Aufbau der Dateien

```
index.html                 Grundgerüst der App
manifest.json              macht die Seite zur installierbaren App
service-worker.js          Offline-Zwischenspeicher
icons/                     App-Icons

css/stil.css               gesamtes Aussehen, helles und dunkles Thema

js/daten.js                Sammelbehälter für die Lektionen
js/speicher.js             Fortschritt speichern, Export und Import
js/srs.js                  Intervall-Leiter und Problemwörter
js/sprache.js              Sprachausgabe (spanische Stimme)
js/uebungen.js             die sechs Übungstypen
js/statistik.js            Zähler, Streak, Kalendergitter, Kalenderdatei
js/tagesplan.js            stellt die Aufgaben einer Sitzung zusammen
js/app.js                  Ablaufsteuerung und Bildschirmwechsel

data/lektionen-01-10.js    Tag  1–10   A2 · Grundlagen
data/lektionen-11-20.js    Tag 11–20   A2 · Vergleichen, Befehle, Vergangenheit
data/lektionen-21-30.js    Tag 21–30   A2 · Zukunft, Nebensätze
data/lektionen-31-40.js    Tag 31–40   A2→B1 · Condicional, Passiv, Subjuntivo
data/lektionen-41-50.js    Tag 41–50   B1 · Subjuntivo im Einsatz
data/lektionen-51-60.js    Tag 51–60   B1 · Irreales, Vertiefung
```

Alles ist bewusst schlicht gehalten: klassische `<script>`-Tags statt Module,
globale Objekte statt Frameworks. So funktioniert die App auch, wenn du
`index.html` einfach per Doppelklick öffnest — bei modernen ES-Modulen und
`fetch()` würde der Browser das blockieren.

### Lernstoff auf einen Blick

| Tage | Niveau | Grammatikthemen |
|---|---|---|
| 1–10 | A2 | ser/estar · hay/estar · unregelmäßige Verben · Reflexive · Gerundio · Objektpronomen · gustar · Possessiv/Demonstrativ |
| 11–20 | A2 | Vergleiche · doler · Imperativ bejaht/verneint · Perfecto · Indefinido · Imperfecto · Indefinido vs. Imperfecto |
| 21–30 | A2 | ir a + Infinitiv · Futuro · por/para · Konnektoren · Relativsätze · Verneinung · Adverbien · indirekte Fragen · unpersönliches se |
| 31–40 | A2→B1 | Condicional · Pluscuamperfecto · Passiv · indirekte Rede · Perifrasen · **Subjuntivo: Bildung, Wunsch, Gefühl, Zweifel, ojalá** |
| 41–50 | B1 | Subjuntivo nach Zeit- und Zweckkonjunktionen · in Relativsätzen · alle Imperativformen · Bedingungssätze Typ 1 · aunque · B1-Konnektoren |
| 51–60 | B1 | Imperfecto de Subjuntivo · Bedingungssätze Typ 2 und 3 · Zeitenfolge · neutrales lo · se der Unabsichtlichkeit · Redewendungen |

---

## Eigene Inhalte ergänzen

Einen weiteren Tag hinzufügen: In einer Datei unter `data/` einen neuen Block
anhängen. Das Muster ist immer gleich:

```js
LEKTIONEN.push({
  tag: 61, niveau: "B1", thema: "Mein eigenes Thema",
  vokabeln: [
    { id: "v6101", es: "la palabra", de: "das Wort",
      wortart: "Substantiv",
      beispiel: "Es una palabra nueva.", beispielDe: "Das ist ein neues Wort." }
    // … insgesamt 10
  ],
  saetze: [
    { id: "s6101", es: "Un ejemplo sencillo.", de: "Ein einfaches Beispiel." }
    // … insgesamt 5
  ],
  grammatik: {
    id: "g61", titel: "Mein Thema",
    erklaerung: `<p>Erklärung als HTML …</p>`,
    uebungen: [
      { id: "g6101", satz: "Un ___ sencillo.", loesung: "ejemplo",
        tipps: ["ejemplo", "problema"], hinweis: "Substantiv",
        de: "Ein einfaches Beispiel." }
      // … insgesamt 5
    ]
  }
});
```

**Zwei Regeln, damit nichts kaputtgeht:**

1. **Jede `id` muss einmalig sein.** Das Schema `v` + Tag + laufende Nummer
   (`v6101`) hält das automatisch auseinander. Die ids sind der Schlüssel zu
   deinem Lernstand — ändere sie nie nachträglich, sonst geht der Fortschritt
   für diese Karte verloren.
2. **In JavaScript-Texten kein gerades `"` verwenden.** Das beendet den Text
   mitten im Satz. Nutze `„…"` oder `'…'`.

Neue Datei angelegt? Dann trage sie in `index.html` bei den `<script>`-Tags
und in `service-worker.js` in der Liste `DATEIEN` nach.

---

## Häufige Fragen

**Die Hör-Übungen erscheinen nicht.**
Deinem Gerät fehlt eine spanische Stimme. Auf Android: Einstellungen → System →
Sprachen & Eingabe → Text-in-Sprache-Ausgabe → bei der Google-Sprachausgabe auf
das Zahnrad → *Sprache installieren* → **Español**. Danach die App neu laden.
Unter ⚙️ Einstellungen steht, ob eine Stimme gefunden wurde.

**Mein Streak ist weg.**
Der Streak zählt aufeinanderfolgende Tage. Ein ausgelassener Tag setzt ihn
zurück. Solange du heute noch lernen kannst, zählt gestern als letzter Tag —
er reißt also erst, wenn ein ganzer Tag verstreicht.

**„Gelernte Wörter" steigt langsamer als erwartet.**
Ein Wort zählt ab Stufe 2, also nachdem es zweimal richtig war. Wörter, die du
falsch hattest, fallen wieder heraus, bis sie erneut sitzen. Der Zähler zeigt
damit, was du wirklich kannst — nicht, was du schon einmal gesehen hast.

**Ein Problemwort geht nicht weg.**
Es braucht drei Treffer **in Folge**. Ein Fehler dazwischen setzt die Zählung
zurück. Das ist Absicht: Genau diese Wörter sind die, die sonst nie sitzen.

**Kann ich mehrere Tage auf einmal machen?**
Ja — nach dem Abschluss einfach nochmal auf „Heute lernen". Empfehlenswert ist
es nicht: Verteiltes Lernen bringt deutlich mehr als ein langer Block.

**Zählt Wiederholen als aktiver Tag?**
Ja, für den Streak und das Kalendergitter. Nur eine vollständige Tageslektion
schaltet aber den Tageszähler weiter.

**Was passiert nach Tag 60?**
Die App wechselt in den Wiederholungsmodus. Jeden Tag kommt, was fällig ist —
genau das entscheidet darüber, ob das Gelernte in einem Jahr noch da ist.

---

## Quellen und Vorbilder

Aufbau und Lernlogik orientieren sich an:

- [Memrise: Spaced-Repetition-System](https://memrise.zendesk.com/hc/en-us/articles/360015889057-How-does-the-spaced-repetition-system-work) — die Intervall-Leiter
- [Memrise: Übungstypen](https://memrise.zendesk.com/hc/en-us/articles/360015973818-How-many-testing-types-are-there) — Multiple Choice, Tippen, Satzbau, Hören
- [Anki / SM-2: Ease Factor und Leeches](https://help.remnote.com/en/articles/6026144-the-anki-sm-2-spaced-repetition-algorithm) — der Umgang mit hartnäckigen Karten
- [Chrome: Notification Triggers](https://developer.chrome.com/docs/web-platform/notification-triggers) — warum geplante Web-Benachrichtigungen nicht existieren
