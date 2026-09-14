# Projektfortschritt — ¡Vamos! (vier Kurse in einer App)

**Stand:** 14. September 2026
**Branch:** `claude/spanish-learning-app-daily-o5s13u`
**Status:** ✅ Version 3 fertig, getestet und gepusht

---

## Kurzfassung

Die App ist vollständig gebaut und funktioniert. Alle Anforderungen aus der
ursprünglichen Idee, die fünf Änderungswünsche und der Themen-Lernpfad
„Deutsch im Beruf" sind umgesetzt.

### Die vier Kurse

| Kurs | Richtung | Oberfläche | Niveau | Tage |
|---|---|---|---|---|
| 🇪🇸 Español (España) | Deutsch → Spanisch (Spanien) | Deutsch | A2 → B1 | 60 |
| 🌎 Español (Latinoamérica) | Deutsch → Spanisch (LatAm) | Deutsch | A2 → B2 | 90 |
| 🇩🇪 Alemán | Spanisch → Deutsch | **Spanisch** | A1 → B2 | 120 |
| 🍽️ Alemán en el trabajo | Spanisch → Deutsch, Lernpfad des Deutschkurses | **Spanisch** | A2 → B2 | 30 |

### Kennzahlen

| Kennzahl | Wert |
|---|---|
| Kurse (davon 1 Themen-Lernpfad) | 4 |
| Tageslektionen gesamt | 300 |
| Vokabeln | 3000 |
| Beispielsätze | 1500 |
| Grammatik- und Redemittelthemen | 300 |
| Übungen dazu | 1501 |
| Lernkarten gesamt | 6001 |
| Übungstypen | 6 |
| Oberflächentexte je Sprache | 140 |
| Zeilen Programmcode | 3045 |
| Zeilen Lerninhalt | 18 850 |
| Automatische Tests | 173 (alle grün) |

---

## Anforderungen aus der Idee — Abgleich

| Deine Anforderung | Status | Umgesetzt als |
|---|---|---|
| Lern-App im HTML-Format | ✅ | Reines HTML/CSS/JavaScript, kein Build-Schritt |
| Tägliche Aufgaben | ✅ | 270 Tageslektionen mit festem Ablauf |
| Vokabeln | ✅ | 2700 Stück, je mit Artikel, Wortart und Beispielsatz |
| Sätze | ✅ | 1350 Beispielsätze mit Übersetzung |
| Grammatikalische Erklärungen | ✅ | 270 Themen mit Tabellen und Merksätzen |
| Start bei Niveau A2 | ✅ | Spanischkurse beginnen bei A2 (der Deutschkurs auf deinen Wunsch bei A1) |
| „Ggf. erweiterte Aufgaben" | ✅ | Hören, Satzbau, Lückentext, Schnell-Wiederholung |
| Fortschrittszähler: aktive Tage | ✅ | Zähler + Streak + Kalendergitter |
| Fortschrittszähler: gelernte Wörter | ✅ | Zählt Karten ab Stufe 2 |
| Historie merkt sich Fehler | ✅ | Jede Karte mit Stufe, Fehlerzahl, letzten Falscheingaben |
| Falsche Aufgaben kommen wieder | ✅ | Problemwort-System (siehe unten) |
| An Memrise orientiert | ✅ | Intervall-Leiter und Übungstypen 1:1 übernommen |
| Recherche vor dem Bauen | ✅ | Memrise, Anki, Duolingo — Quellen in der README |
| Benachrichtigung 19:30 auf Android | ⚠️ | Über Kalender/Wecker gelöst — technisch begründet, siehe unten |
| Über Benachrichtigung zur Seite | ✅ | Der Kalendertermin enthält den Link zur App |

### Die fünf Änderungswünsche

| Wunsch | Status | Umgesetzt als |
|---|---|---|
| 1. Auf Lateinamerika-Spanisch umstellen | ✅ | Eigener Kurs `es-419`: kein `vosotros`, LatAm-Wortschatz, Perfecto zurückgenommen. Der Spanien-Kurs bleibt daneben bestehen |
| 2. Deutsch für Spanisch-Muttersprachler | ✅ | Kurs `de`, 120 Tage, Oberfläche und alle Erklärungen auf Spanisch |
| 3. Beide Sprachen bis B2 | ✅ | Spanisch (LatAm) 90 Tage bis B2, Deutsch 120 Tage von A1 bis B2 |
| 4. Sprache in der App umschaltbar? | ✅ | Ja — eine App, drei Kurse, jederzeit umschaltbar, Lernstand je Kurs getrennt |
| 5. Alten Stand als Kopie sichern | ✅ | Sicherungs-Branch `backup/v1-spanien-a2-b1` mit dem unveränderten Einzelkurs-Stand |

**Zu Wunsch 4 im Detail:** Eine App statt drei war die klare Empfehlung. Das
Wiederholsystem, die Übungstypen und die Statistik sind sprachunabhängig —
dreimal dieselbe Logik zu pflegen wäre dreifache Arbeit bei jedem künftigen
Fehler. Getrennt wird nur, was getrennt gehört: der Lernstand.

**Zu Wunsch 5 im Detail:** Der Branch `backup/v1-spanien-a2-b1` ist gepusht und
enthält den Stand vor dem Umbau. Der Versuch, zusätzlich ein Git-Tag zu pushen,
scheiterte an einer Einschränkung des Netzwerk-Proxys in dieser Umgebung — das
Sicherungs-**Branch** ist aber gepusht und erfüllt denselben Zweck.

### Nachtrag vom 14.09.2026

| Wunsch | Status | Umgesetzt als |
|---|---|---|
| 6. App-Name und Beschreibung an die Kurse anpassen | ✅ | `manifest.json`: Name „¡Vamos! — Spanisch & Deutsch lernen", Beschreibung nennt alle vier Kurse. Das ist der Text, den jemand sieht, der die App zum Startbildschirm hinzufügt |
| 7. Themen-Lernpfad „Deutsch im Beruf" | ✅ | Kurs `de-beruf`, 30 Tage, Küche · Restaurant · Hotel · Ernährung, mit Redemitteln statt reiner Grammatik |

**Warum der Pfad ein eigener Kurseintrag ist und nicht Tag 121 ff. des
Deutschkurses:** Wer im Hotel oder Restaurant arbeitet, braucht die Wörter des
Dienstes *jetzt* und nicht nach 120 Tagen. Als eigener Eintrag mit eigenem
Lernstand lässt sich der Pfad parallel zum langen Kurs machen — abends die
Tageslektion, und der Pfad, wenn eine Schicht ansteht.

**Warum er trotzdem nicht wie eine vierte Sprache aussieht:** Die
Kursdefinition trägt das neue Feld `gehoertZu: 'de'`. Die Kursauswahl rückt
solche Einträge ein, setzt das Schildchen *Lernpfad* (spanisch *Ruta temática*)
daneben und zeigt den Hinweistext als Notiz an. Im Code kostet das zwölf Zeilen
in `app.js`, drei Regeln im Stylesheet und zwei Oberflächentexte — die
Lernlogik selbst blieb unberührt.

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

### Kurssystem ✅

- `js/kurse.js` — Kursregister: anlegen, wechseln, Stand je Kurs abfragen
- `js/kurs-definitionen.js` — die drei Kurse mit Name, Sprachen, Stimmen, Farbe
- `js/texte.js` — 270 Oberflächentexte auf Deutsch **und** Spanisch, plus die
  Funktion `t()`, die je nach aktivem Kurs die richtige Tabelle nimmt
- Der Lernstand liegt **je Kurs getrennt** (`Speicher.fortschritt(kursId)`);
  geteilt werden nur Thema, Ton und Tagesziel
- Ein alter Einzelkurs-Stand (`spanisch_v1`) wird beim ersten Start automatisch
  in den Spanien-Kurs übernommen — getestet

**Der Kniff, mit dem beide Sprachrichtungen aus derselben Struktur laufen:**
In den Lektionen sind `es` und `de` reine Sprachkürzel, keine festen Rollen.
Welches Feld abgefragt wird und welches die Hilfe ist, entscheidet allein die
Kursdefinition über `ziel` und `ausgang`. Der Deutschkurs braucht deshalb keine
einzige Sonderbehandlung im Programmcode.

### Lerninhalt ✅

**Spanien (`data/es-es/`) — 60 Lektionen, A2 → B1**

| Tage | Niveau | Schwerpunkt |
|---|---|---|
| 1–10 | A2 | ser/estar, hay, unregelmäßige Verben, Pronomen, gustar |
| 11–20 | A2 | Vergleiche, Imperativ, Perfecto, Indefinido, Imperfecto |
| 21–30 | A2 | Futuro, por/para, Relativsätze, Verneinung, unpersönliches se |
| 31–40 | A2→B1 | Condicional, Pluscuamperfecto, Passiv, **Subjuntivo-Einstieg** |
| 41–50 | B1 | Subjuntivo nach Konjunktionen, Bedingungssätze Typ 1, aunque |
| 51–60 | B1 | Imperfecto de Subjuntivo, Bedingungssätze Typ 2 und 3, lo |

**Lateinamerika (`data/es-419/`) — 90 Lektionen, A2 → B2**

Tag 1–60 aus dem Spanien-Kurs abgeleitet und durchgängig angepasst:
`vosotros` überall durch `ustedes` ersetzt (inklusive Verbtabellen und
Imperativformen), Wortschatz auf LatAm umgestellt (`carro`, `departamento`,
`jugo`, `refrigerador`, `boleto`), `coger` konsequent vermieden, und das
Perfecto zugunsten des Indefinido zurückgenommen. Dazu 30 neue B2-Lektionen:
Subjuntivo Perfecto und Pluscuamperfecto, komplette Zeitenfolge, estilo
indirecto, Nominalstil, voseo zum Verstehen, Idiomatik und Register.

**Deutsch (`data/de/`) — 120 Lektionen, A1 → B2, Erklärungen auf Spanisch**

| Tage | Niveau | Schwerpunkt |
|---|---|---|
| 1–30 | A1 | Genus und Artikel, die drei ersten Fälle, Präsens, Verbstellung, trennbare Verben, Modalverben, Perfekt |
| 31–60 | A2 | Adjektivdeklination in allen drei Systemen, Präteritum, Nebensätze, Relativsätze, Passiv, Konjunktiv II |
| 61–90 | B1 | Relativsätze in Dativ und Genitiv, Passiv komplett, Genitiv, n-Deklination, TeKaMoLo, Modalpartikeln |
| 91–120 | B2 | Konjunktiv I, erweiterte Partizipialattribute, Nominalstil, Register, Argumentation, falsche Freunde |

**Deutsch im Beruf (`data/de-beruf/`) — 30 Lektionen, A2 → B2, Erklärungen auf Spanisch**

Ein Themen-Lernpfad des Deutschkurses für Hotel und Restaurant. Eigener
Lernstand, dadurch parallel zum langen Kurs nutzbar.

| Tage | Niveau | Schwerpunkt |
|---|---|---|
| 1–8 | A2–B1 | Küche: Geräte, Schneiden, Garmethoden, Fleisch und Fisch, Gemüse, Mengen, Mise en place, Hygiene und HACCP |
| 9–16 | A2–B1 | Service: Gedeck, Speisekarte, Getränke, Bestellung, Servieren, Reklamation, Bezahlen, Telefon |
| 17–24 | A2–B1 | Hotel: Berufe, Zimmerarten, Check-in, Check-out, Housekeeping, Auskunft, Defekte, Frühstück |
| 25–30 | B1–B2 | Allergene, Ernährungsformen, Nährstoffe, Arbeitssicherheit, Vertrag und Schichten, Vorstellungsgespräch |

Besonderheit: Das Feld `grammatik` trägt hier **Redemittel** — feste
Formulierungen für wiederkehrende Situationen (Bestellung abrufen, Beschwerde
aufnehmen, Schicht übergeben, Allergiefrage beantworten). Die Struktur ist
identisch, deshalb laufen alle sechs Übungstypen unverändert. Die
Grammatikpunkte stecken in den Redemitteln drin: Imperativ, Konjunktiv II der
Höflichkeit, Passiv, trennbare Verben, `schmecken` + Dativ, Mengenangaben ohne
„von".

Jede Lektion in jedem Kurs: exakt 10 Vokabeln, 5 Sätze, 1 Grammatik- bzw.
Redemittelthema mit 5 Übungen (eine LatAm-Lektion hat eine sechste Zusatzübung
zu `ustedes`). Alle 6001 Karten-IDs geprüft — keine Doppelung, keine Lücke,
keine Übung ohne Lücke oder Lösung.

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

### Unit-Tests der Wiederhollogik — 29 Prüfungen, alle grün

Stufenaufstieg · Rückfall bei Fehler · korrekte Intervalle · Leech-Bildung nach
4 Fehlern · Befreiung nach 3 Treffern · Serie-Unterbrechung · Fälligkeit ·
Übungstyp je Stufe · Höchststufe · Historie auf 10 Einträge begrenzt

### End-to-End-Tests im Browser — 64 Prüfungen, alle grün

Getestet im Handy-Format 390×844 mit Chromium, am Spanien-Kurs:

| Bereich | Geprüft |
|---|---|
| Kursauswahl | erscheint beim ersten Start, Kurs lässt sich wählen |
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

### Kurssystem-Tests — 29 Prüfungen, alle grün

| Bereich | Geprüft |
|---|---|
| Kursauswahl | vier Kurse angeboten, Namen korrekt, genau ein Lernpfad und der gehört zum Deutschkurs |
| Kurswechsel | Fortschritt bleibt je Kurs erhalten, keine Vermischung |
| Oberflächensprache | Deutschkurs schaltet Knöpfe, Menü, Einstellungen und Erinnerungsseite auf Spanisch, `html lang` wechselt mit |
| Migration | ein alter Einzelkurs-Stand landet vollständig im Spanien-Kurs, ohne Umweg über die Kursauswahl |

### Richtungstests — 51 Prüfungen, alle grün

Der wichtigste Test: **Tag 1 wird in allen vier Kursen komplett
durchgespielt**, mit richtigen Antworten in jeder Übungsart.

| Bereich | Geprüft |
|---|---|
| je Kurs | Lektionszahl, Ziel- und Ausgangssprache, Oberflächensprache, Sonderzeichenleiste |
| je Kurs | vollständiger Tagesdurchlauf: 10 Karteikarten, 10 MC, 10 Tippen, 5 Satzbau, 1 Erklärung, 5 Lücken |
| je Kurs | danach Tag auf 2, 20 Karten angelegt, ein aktiver Tag |
| Deutschkurs | Abschlussmeldung nach Tag 120 erscheint auf Spanisch |
| Konsole | keine JavaScript-Fehler in keinem der vier Kurse |

Damit ist die umgekehrte Sprachrichtung (Deutsch als Zielsprache) genauso
abgedeckt wie die spanische — das war die Stelle mit dem größten Risiko.

### Datenprüfung — alle vier Kurse ohne Beanstandung

Ein eigenes Prüfskript geht über jeden Kurs und meldet: fehlende Tage, doppelte
IDs, falsche Anzahl an Vokabeln, Sätzen oder Übungen, Übungen ohne Lücke `___`,
Übungen ohne Lösung, und Lösungen, die nicht unter den Tipps stehen.

### Gefundene und behobene Fehler

| # | Fehler | Ursache | Behebung |
|---|---|---|---|
| 1 | „Weiter" war neben „Prüfen" sichtbar | `.btn { display: inline-block }` überschrieb die eingebaute Browser-Regel `[hidden] { display: none }` | Eigene Regel `[hidden] { display: none !important }` im Stylesheet |
| 2 | Zähler „Gelernte Wörter" blieb nach Tag 1 auf 0 | Schwelle lag bei Stufe 3, ein neues Wort erreicht am ersten Tag aber nur Stufe 2 | Schwelle auf Stufe 2 gesetzt — entspricht „mindestens zweimal richtig" |
| 3 | Akzentleiste brach in zwei Zeilen um | `flex-wrap` mit 9 Tasten und Mindestbreite | Raster mit 9 gleich breiten Spalten |
| 4 | Syntaxfehler in den Lerndaten | Deutsches `„` von geradem `"` geschlossen — das beendet den JavaScript-Text | 12 Stellen auf typografisches `"` umgestellt |
| 5 | Nach einem Reparaturlauf fehlten in den LatAm-Daten die `<tr>`-Tags | Ein zu gieriger regulärer Ausdruck (`</tr>(\s{2,})<tr>`) hat das `<tr>` mitverschluckt — 328 Zeilen betroffen | Dateien verworfen, neu aus dem Spanien-Kurs abgeleitet, Ausdruck auf `</tr>[ \t]+<tr>` verengt, sodass er nur greift, wo kein Zeilenumbruch steht |
| 6 | Übung `g4002` war nicht lösbar | Die Lösung war ein leerer String („Modalverb ohne zu") — man konnte weder tippen noch auswählen | Neu formuliert, sodass der Infinitiv selbst die Antwort ist |
| 7 | Übung `g11803` hatte keine Lücke | Als Frage statt als Lückensatz geschrieben | In einen Lückensatz umformuliert |
| 8 | Unit-Tests liefen nicht mehr | `srs.js` übersetzt seine Zeitangaben inzwischen über `t()`; im Testlauf ohne Browser fehlte diese Funktion | Testaufbau lädt jetzt `kurse.js` und `texte.js` mit und legt einen Minimalkurs an |
| 9 | Lückensatz mit **zwei** Lücken verliert den Text hinter der zweiten | `Uebungen.typ_luecke` teilt den Satz am `___` und zeigt nur die ersten beiden Teile an — alles nach der zweiten Lücke fällt weg | Im neuen Pfad beim Schreiben vermieden und einmal korrigiert. In vier älteren Übungen steht das noch offen, siehe Bekannte Grenzen |
| 10 | Schildchen „Lernpfad" klebte am Kursnamen | Das Schildchen stand innerhalb von `.kurs-name`, dadurch las sich der Name im DOM als „Alemán en el trabajoLernpfad" | Eigene Zeile `.kurs-kopfzeile` um Name und Schildchen gelegt |

---

## Was als Nächstes ansteht

### ☑️ GitHub Pages — offenbar schon aktiv

Das Repository meldet inzwischen `has_pages: true`, die Seite dürfte also unter
`https://justanything123.github.io/Test/` erreichbar sein. Nachprüfen konnte ich
das aus dieser Umgebung nicht, weil das Netz hier `github.io` blockiert — bitte
einmal selbst aufrufen.

Falls die Adresse doch nicht lädt:

1. Repository auf github.com → **Settings** → links **Pages**
2. *Source*: **Deploy from a branch**
3. *Branch*: `claude/spanish-learning-app-daily-o5s13u`, Ordner `/ (root)` → **Save**
4. 1–2 Minuten warten
5. Auf dem Handy in Chrome öffnen → Menü (⋮) → **Zum Startbildschirm hinzufügen**

### 🔲 Nur du: Erinnerung einrichten

In der App: Menü (☰) → **⏰ Erinnerung 19:30** → Kalenderdatei herunterladen →
in den Downloads antippen → Google Kalender importiert sie.

### 🔲 Nur du: Stimme prüfen

Unter ⚙️ Einstellungen steht, ob eine gefunden wurde. Falls nicht:
Android-Einstellungen → System → Sprachen & Eingabe → Text-in-Sprache-Ausgabe →
Zahnrad bei Google-Sprachausgabe → *Sprache installieren* → **Español** für die
Spanischkurse, **Deutsch** für den Deutschkurs. Ohne passende Stimme blendet die
App die Hör-Übungen automatisch aus.

### 🔲 Nur du: Kurs wählen

Beim ersten Start fragt die App, welchen Kurs du machen willst. Wechseln geht
jederzeit über Menü (☰) → **🎓 Kurs wechseln**; jeder Kurs führt seinen eigenen
Lernstand.

---

## Ideen für später

Nichts davon ist nötig — die App ist ohne diese Punkte vollständig. Sortiert
nach Aufwand.

### Klein

- **Mehr Lerninhalt.** Weitere Tage nach dem Muster in `data/<kurs-id>/`
  anhängen. Die Anleitung steht in der README unter *Eigene Inhalte ergänzen*.
- **Den Spanien-Kurs auf B2 nachziehen.** Er endet bei Tag 60 (B1), während der
  LatAm-Kurs bis B2 geht. Die 30 B2-Lektionen ließen sich analog ableiten.
- **Weitere Kurse.** Das System ist offen: ein Block in `js/kurs-definitionen.js`,
  ein Ordner unter `data/`, fertig. Für eine neue Oberflächensprache käme eine
  dritte Tabelle in `js/texte.js` dazu.
- **Lieblingswörter markieren.** Ein Stern-Knopf, der Karten in eine eigene Liste
  legt.
- **Tagesziel-Erinnerung in der App.** Ein Hinweis, wenn du an einem Tag noch
  nichts gemacht hast — allerdings nur sichtbar, wenn die App offen ist.

### Mittel

- **Statistik ausbauen.** Verlaufskurve der gelernten Wörter über die Zeit,
  Fehlerquote pro Grammatikthema (zeigt dir, wo es wirklich hakt).
- **Prüfungsmodus.** 20 zufällige Aufgaben ohne Hilfen, mit Notenergebnis.
- **Suchfunktion in der Historie.** Bei 2400 Karten im Deutschkurs zunehmend
  nützlich.

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
| Hör-Übungen brauchen eine Stimme | Ohne passende installierte Stimme blendet die App sie aus und weist darauf hin. |
| Sprachqualität der Stimme | Die Gerätestimme klingt maschinell. Für Aussprache-Training reicht sie, für Feinheiten nicht. |
| Kein Sprechtraining | Die App prüft nichts, was du sagst. Das ist mit Web-Technik schwer verlässlich zu lösen. |
| Inhalt endet am letzten Kurstag | Tag 60, 90 oder 120 je nach Kurs. Danach Wiederholungsmodus. Neue Tage lassen sich jederzeit anhängen. |
| Spanien-Kurs endet bei B1 | Nur der LatAm-Kurs wurde auf B2 erweitert — das entsprach deinem Wunsch, den Spanien-Kurs unverändert als dritten Kurs zu behalten. |
| LatAm-Spanisch ist eine Mittelform | „Español neutro" gibt es als gesprochene Sprache nirgends; jedes Land hat eigene Wörter. Der Kurs nimmt die Variante, die überall verstanden wird, und weist auf regionale Unterschiede hin, wo sie zählen. |
| Kein Git-Tag für die Sicherung | Das Pushen von Tags scheitert am Netzwerk-Proxy dieser Umgebung. Der Sicherungs-Branch `backup/v1-spanien-a2-b1` ist gepusht und erfüllt denselben Zweck. |
| Vier Übungen mit zwei Lücken | `g0901` (Deutsch), `g2605` (Spanien), `g2605` und `g6603` (LatAm) enthalten zwei `___`. Die App zeigt nur bis zur zweiten Lücke, der Rest des Satzes fehlt auf dem Bildschirm. Lösbar bleiben sie, weil die erste Lücke die gefragte ist. Nicht angefasst, weil es außerhalb dieses Auftrags lag — auf Zuruf in einem Zug behoben. |

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
| 03.09.2026 | PROGRESS.md angelegt |
| 09.09.2026 | Fünf Änderungswünsche besprochen und entschieden: neutrales LatAm-Spanisch, Deutschkurs ab A1, beide bis B2, eine App mit Umschaltung, Sicherungs-Branch |
| 09.09.2026 | Sicherungs-Branch `backup/v1-spanien-a2-b1` gepusht |
| 09.09.2026 | Kurssystem gebaut: `kurse.js`, `kurs-definitionen.js`, `texte.js`, Speicher auf Fortschritt je Kurs umgestellt, Migration des alten Stands |
| 09.09.2026 | LatAm-Kurs abgeleitet und angepasst, 30 B2-Lektionen ergänzt (90 Tage) |
| 09.09.2026 | Deutschkurs A1 und A2 geschrieben (Tag 1–60), Erklärungen auf Spanisch |
| 09.09.2026 | Deutschkurs B1 (Tag 61–90) und B2 (Tag 91–120) geschrieben — Kurs vollständig |
| 09.09.2026 | Testsuiten auf das Kurssystem umgestellt, Richtungstest neu geschrieben; 159 Prüfungen grün |
| 09.09.2026 | README und PROGRESS.md auf Version 2 aktualisiert |
| 14.09.2026 | App-Name und Beschreibung im `manifest.json` auf alle Kurse umgestellt |
| 14.09.2026 | Kurssystem um Themen-Lernpfade erweitert (`gehoertZu`, Schildchen, eingerückte Kachel) |
| 14.09.2026 | Lernpfad „Deutsch im Beruf" geschrieben: 30 Lektionen, 300 Vokabeln, 150 Sätze, 150 Redemittelübungen |
| 14.09.2026 | Kurs- und Richtungstest auf vier Kurse erweitert; 173 Prüfungen grün, Datenprüfung ohne Beanstandung |
| 14.09.2026 | README und PROGRESS.md auf Version 3 aktualisiert |
