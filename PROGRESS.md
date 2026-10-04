# Projektfortschritt — ¡Vamos! (drei Kurse in einer App)

**Stand:** 4. Oktober 2026
**Branch:** `claude/spanish-learning-app-daily-o5s13u`
**Status:** ✅ Version 4 fertig, getestet und gepusht — Sprechübungen, A1-Ausbau,
Spanien-Kurs in der Ablage

---

## Kurzfassung

Die App ist vollständig gebaut und funktioniert. Alle Anforderungen aus der
ursprünglichen Idee, die fünf Änderungswünsche und der Themen-Lernpfad
„Deutsch im Beruf" sind umgesetzt.

### Die drei Kurse

| Kurs | Richtung | Oberfläche | Niveau | Tage |
|---|---|---|---|---|
| 🌎 Español (Latinoamérica) | Deutsch → Spanisch (LatAm) | Deutsch | A1 → B2 | 120 |
| 🇩🇪 Alemán | Spanisch → Deutsch | **Spanisch** | A1 → B2 | 120 |
| 🍽️ Alemán en el trabajo | Spanisch → Deutsch, Lernpfad des Deutschkurses | **Spanisch** | A1 → B2 | 60 |

Der Kurs *Español (España)* (60 Tage, A2 → B1) liegt seit Oktober 2026 in
`ablage/` und ist ausgeblendet. Ein vorhandener Lernstand bleibt erhalten; wie
man ihn zurückholt, steht in `ablage/README.md`.

### Kennzahlen

| Kennzahl | Wert |
|---|---|
| Kurse (davon 1 Themen-Lernpfad) | 3 sichtbar, 1 in der Ablage |
| Tageslektionen gesamt | 300 |
| Vokabeln | 3000 |
| Beispielsätze | 1500 |
| Grammatik- und Redemittelthemen | 300 |
| Übungen dazu | 1501 |
| Lernkarten gesamt | 6001 |
| Übungstypen | 7 (neu: Nachsprechen) |
| Oberflächentexte je Sprache | 272 |
| Zeilen Programmcode (JS, HTML, CSS) | 6125 |
| Zeilen Lerninhalt | 20 652 |
| Prüfungen (Zwischenstopps) | 11 · je 5 Teile mit Schreib- und Sprechteil · 407 Prüfungsfragen |
| Automatische Tests | 13 Testdateien, 435 Einzelprüfungen im Browser plus Datenprüfung — alle grün |

---

## Anforderungen aus der Idee — Abgleich

| Deine Anforderung | Status | Umgesetzt als |
|---|---|---|
| Lern-App im HTML-Format | ✅ | Reines HTML/CSS/JavaScript, kein Build-Schritt |
| Tägliche Aufgaben | ✅ | 300 Tageslektionen mit festem Ablauf |
| Vokabeln | ✅ | 3000 Stück, je mit Artikel, Wortart und Beispielsatz |
| Sätze | ✅ | 1500 Beispielsätze mit Übersetzung |
| Grammatikalische Erklärungen | ✅ | 300 Themen mit Tabellen und Merksätzen |
| Start bei Niveau A2 | ✅ | Seit Oktober 2026 beginnen auf deinen Wunsch alle Kurse bei A1; wer schon weiter war, bleibt bei seiner Lektion |
| „Ggf. erweiterte Aufgaben" | ✅ | Hören, Satzbau, Lückentext, Nachsprechen, Schnell-Wiederholung |
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
| 1. Auf Lateinamerika-Spanisch umstellen | ✅ | Eigener Kurs `es-419`: kein `vosotros`, LatAm-Wortschatz, Perfecto zurückgenommen. Der Spanien-Kurs liegt seit Oktober 2026 in der Ablage |
| 2. Deutsch für Spanisch-Muttersprachler | ✅ | Kurs `de`, 120 Tage, Oberfläche und alle Erklärungen auf Spanisch |
| 3. Beide Sprachen bis B2 | ✅ | Spanisch (LatAm) und Deutsch je 120 Tage von A1 bis B2 |
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
| 8. Fachwörter im Detail statt Oberbegriffe | ✅ | 15 Vertiefungstage (31–45) mit 150 Fachwörtern: Messer-, Teller-, Besteck-, Glas-, Zimmer- und Wäschearten, Fleischteile, Schnitttechniken, Menüfolge. Dazu die Wortbildungsregel, mit der man ein Fachwort selbst bauen kann |
| 9. Tests ins Repository legen | ✅ | Ordner `tests/` mit sieben Prüfungen, gemeinsamem Umgebungsmodul ohne feste Pfade, Starter `alle.sh` und eigener Anleitung |
| 10. Sprachprüfungen mit zuverlässiger Bewertung | ✅ | Prüfungssystem mit fünf Aufgabenarten und alle elf Zwischenstopps: DELE für die Spanischkurse, Goethe-Zertifikat für Deutsch, telc Beruf für den Lernpfad |
| 11. Schreibaufgaben an einen Prüfer schicken | ✅ | Rundlauf über den Fragment-Teil eines Links, Prüfer-Modus in derselben App, Ersatzwege Textblock und Eintragen von Hand |

**Warum die Fachwörter eigene Tage bekommen und nicht in die alten Lektionen
wandern:** Tag 1 lehrt „das Messer" — das ist richtig so, ein Anfänger braucht
erst den Oberbegriff. Acht Messerarten am ersten Tag wären unlernbar. Die
Vertiefung kommt deshalb hinten, als eigener Block ab Tag 31, und liegt damit
genau dort, wo ein Berufsschulbuch sie auch hätte. Ein zweiter Grund ist
praktisch: Hätte ich die alten Tage von 10 auf 20 Wörter aufgebläht, wäre jede
Tagessitzung von rund 40 auf 65 Aufgaben gewachsen — und der Lernstand von
jemandem, der schon dabei ist, hätte plötzlich nicht mehr gestimmt.

**Die eigentliche Lehre von Tag 31** ist nicht die Wortliste, sondern die
Bauregel: Das wichtige Wort steht hinten, es bestimmt den Artikel, und vor einem
Nomen kann auch ein Verbstamm stehen. Wer das verstanden hat, liest
„Sanitärreiniger" oder „Gästehandtuch" richtig, ohne die Wörter je gelernt zu
haben. Tag 45 prüft genau das noch einmal ab. Ehrliche Einschränkung: Bei den
Hausberufen greift die Regel nicht — *Chef de Rang*, *Commis*, *Sommelier*,
*Sous-Chef* sind französisch und müssen einzeln gelernt werden. Das steht auch
so in der Erklärung.

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

**Deutsch im Beruf (`data/de-beruf/`) — 45 Lektionen, A2 → B2, Erklärungen auf Spanisch**

Ein Themen-Lernpfad des Deutschkurses für Hotel und Restaurant. Eigener
Lernstand, dadurch parallel zum langen Kurs nutzbar.

| Tage | Niveau | Schwerpunkt |
|---|---|---|
| 1–8 | A2–B1 | Küche: Geräte, Schneiden, Garmethoden, Fleisch und Fisch, Gemüse, Mengen, Mise en place, Hygiene und HACCP |
| 9–16 | A2–B1 | Service: Gedeck, Speisekarte, Getränke, Bestellung, Servieren, Reklamation, Bezahlen, Telefon |
| 17–24 | A2–B1 | Hotel: Berufe, Zimmerarten, Check-in, Check-out, Housekeeping, Auskunft, Defekte, Frühstück |
| 25–30 | B1–B2 | Allergene, Ernährungsformen, Nährstoffe, Arbeitssicherheit, Vertrag und Schichten, Vorstellungsgespräch |
| 31–37 | B1–B2 | Fachwortschatz Küche: Messerarten, Töpfe und Großküchengeräte, Küchenhelfer, Schnitttechniken, Fleischteile und Garstufen, Fisch und Meeresfrüchte, Gemüse und Gewürze |
| 38–42 | B1–B2 | Fachwortschatz Service: Tellerarten, Besteckarten, Gläserkunde, Wein/Bier/Kaffee, Menüfolge vom Aperitif bis zum Digestif |
| 43–45 | B1–B2 | Fachwortschatz Hotel: Zimmertypen und Betten, Bettwäsche und Bad, Reinigung, Zimmerstatus und Hausberufe |

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

Die Skripte dazu liegen seit dem 22.09.2026 im Repository unter `tests/` —
wie man sie startet und was beim Übernehmen angepasst werden musste, steht
weiter unten im Abschnitt [Tests im Repository](#tests-im-repository).

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
| 9 | Lückensatz mit **zwei** Lücken verliert den Text hinter der zweiten | `Uebungen.typ_luecke` teilt den Satz am `___` und zeigt nur die ersten beiden Teile an — alles nach der zweiten Lücke fällt weg | Alle vier betroffenen Übungen umformuliert: der eine Teil steht jetzt im Satz, gefragt ist der andere. Das Prüfskript meldet zwei Lücken ab sofort als Fehler |
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

### 🔲 Nur du: Aufnahme auf Android und iPhone testen

Die Sprechübungen sind mit einem künstlichen Mikrofon getestet. Bitte einmal auf
den echten Geräten ausprobieren — über die GitHub-Pages-Adresse, nicht per
Doppelklick:

1. **Nachsprechen:** Tageslektion starten, bis zur Phase „Sprechen" blättern,
   🎙️ Aufnehmen → etwas sagen → Stopp → abspielen. Kommt die Mikrofon-Frage? Ist
   der Ton zu hören? Verschwindet das rote Mikrofon-Symbol danach?
2. **Prüfung:** Eine freigeschaltete Prüfung bis zum Sprechteil, aufnehmen,
   abgeben, **„Zur Bewertung geben"** → kommt im Teilen-Menü die Audiodatei mit?
3. **Gegenprobe:** Android-Aufnahme an das iPhone schicken und umgekehrt — lässt
   sich die Datei dort abspielen und in der App über „📂 Aufnahme hier öffnen"
   laden?

Wenn etwas hakt: bitte Gerät, Browser und die genaue Meldung notieren.

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
| Eine Lücke je Übung | `Uebungen.typ_luecke` zeigt genau ein Eingabefeld an. Ein Satz mit zwei `___` würde hinter der zweiten Lücke abgeschnitten. Das Prüfskript meldet das jetzt als Fehler, sodass es beim Ergänzen eigener Inhalte auffällt. |

---

## Prüfungssystem

Entstanden aus der Frage: „Können wir Sprachprüfungsaufgaben einbauen, die
zuverlässig funktionieren (die Prüfung)?" Der Zusatz in Klammern war der
entscheidende Punkt.

### Die Trennlinie: was bewertbar ist

Die Bewertung der App ist ein Textvergleich (`Uebungen.vergleiche()`). Er ist
robust, solange es eine **abzählbare Menge richtiger Antworten** gibt. Bei
freiem Schreiben gibt es die nicht: Für einen Brief existieren tausende
korrekte Formulierungen, und ein Textvergleich würde gute Antworten als falsch
werten. Das wäre schlimmer als keine Prüfung.

Der Glücksfall: Die echten Prüfungen von Goethe, telc und DELE bestehen in
Lesen, Hören und Sprachbausteinen ohnehin fast nur aus ankreuzbaren Aufgaben.

| Aufgabenart | Automatisch bewertet | Warum |
|---|---|---|
| Richtig/falsch | ✅ | zwei Möglichkeiten, eine richtig |
| Multiple Choice | ✅ | Antwort ist ein Optionsschlüssel |
| Zuordnen | ✅ | Antwort ist ein Buchstabe |
| Sprachbausteine | ✅ | drei Vorgaben je Lücke |
| Hörverstehen | ✅ mit Einschränkung | braucht eine installierte Stimme |
| Schreiben | ❌ | keine abzählbare Menge richtiger Antworten |

Die Bewertung vergleicht deshalb **keine Texte**, sondern Schlüssel:
`String(antwort) === String(frage.loesung)`. Damit kann sie nicht danebenliegen.

### Die Schutzfunktion beim Hörverstehen

Ohne installierte Stimme kann der Hörteil nicht stattfinden. Würde er trotzdem
gestellt, gäbe es dafür 0 Punkte, obwohl niemand etwas falsch gemacht hat.
`Pruefungen.ohneHoeren()` entfernt ihn deshalb komplett aus der Prüfung — er
zählt dann auch nicht in die Gesamtpunktzahl (35 → 25 Punkte), und auf der
Übersicht steht ein Hinweis. Der Testbrowser hat keine einzige Stimme
installiert, deshalb prüft `08-pruefung.js` beide Fälle.

### Aufbau

| Datei | Aufgabe |
|---|---|
| `js/pruefungen.js` | Register, Auswertung, Bestehensgrenze, Versuche speichern |
| `js/pruefung-ui.js` | die fünf Aufgabenarten zeichnen |
| `js/app.js` | Info-, Prüfungs- und Ergebnisbildschirm |
| `data/pruefungen/*.js` | der Inhalt, je Prüfung eine Datei |

Eine Prüfung blättert **aufgabenweise**, nicht frageweise: Ein Lesetext mit
fünf Fragen gehört auf eine Seite, sonst müsste man den Text fünfmal lesen.

### Zwischenstopps

| Kurs | Tage | Vorbild | Stand |
|---|---|---|---|
| Spanisch (Spanien) | 33 → A2, 60 → B1 | DELE | ✅ |
| Spanisch (Lateinamerika) | 33 → A2, 60 → B1, 90 → B2 | DELE | ✅ |
| Deutsch | 30 → A1, 60 → A2, 90 → B1, 120 → B2 | Goethe-Zertifikat | ✅ |
| Deutsch im Beruf | 30 → Arbeitstag, 45 → Fachwortschatz | telc Deutsch B1·B2 Beruf | ✅ |

Alle elf haben denselben Bauplan: vier Teile, sieben Aufgaben, 36 Fragen,
davon 35 automatisch bewertet, bestanden ab 60 %. Das macht sie untereinander
vergleichbar — man sieht am Ergebnis, ob man auf dem nächsten Niveau wirklich
angekommen ist.

**Der Inhalt richtet sich nach dem, was der Kurs bis dahin gebracht hat.** Die
Sprachbausteine der de-B1-Prüfung verlangen Passiv, Konjunktiv II und
erweiterte Partizipien, weil genau das in den Tagen 61–90 steht; die A1-Prüfung
bleibt bei Verbstellung, Perfekt und Wechselpräpositionen. Beim LatAm-Kurs ist
auch der Wortschatz anders: *el carro*, *la papa*, *el jugo*, *el celular*,
*el departamento*, *ustedes*.

**Ein Mangel, der erst beim Ausprobieren auffiel:** Die Karte auf dem
Startbildschirm zeigte immer nur die *erste noch nicht bestandene* Prüfung. Wer
im Deutschkurs an Tag 120 steht und die A1-Prüfung nie gemacht hat, bekam A1
angeboten und wäre an die B2-Prüfung nie herangekommen. Jetzt steht unter der
Karte eine Liste aller freigeschalteten Prüfungen mit ihrem Stand, jede direkt
anwählbar.

Bei `de-beruf` richten sich die Stopps nach Themenblöcken statt nach Niveau,
weil der Lernpfad zwischen A2 und B2 springt — er ist themen-, nicht
niveaugesteuert.

### Zwei Fehler, gefunden erst am Bildschirmfoto

**„0." vor der Schreibaufgabe.** Die Fragennummerierung hing an
`.pruef-frage::before` mit `counter(pf)`. Im Ergebnisblock läuft dieser Zähler
nicht, also stand dort `0.`. Behoben, indem die Regel auf
`.pruef-fragen > li > .pruef-frage` eingegrenzt wurde.

**„Lösung: a" in der Durchsicht.** Der reine Optionsschlüssel hilft niemandem
weiter, wer sich den Wortlaut nicht gemerkt hat, lernt daraus nichts. Die
Durchsicht zeigt jetzt den Wortlaut mit (`Lösung: a) Porque es la hora de
comer.`), bei Richtig/falsch das ausgeschriebene Wort.

Beides wäre in keinem Test aufgefallen — die Tests prüften Punkte und Logik,
nicht die Lesbarkeit. Deshalb lohnt der Blick auf das gerenderte Bild.

### Nächster Schritt: Bewertung durch einen Menschen

Schreibaufgaben werden gestellt, gespeichert und mit Kriterien und
Musterlösung angezeigt — aber nicht benotet. Geplant ist ein Rundlauf **ohne
Server**: Die Antwort reist im Fragment-Teil eines Links (`#pruefen=…`), der
Prüfer öffnet dieselbe App in einem Prüfer-Modus, bewertet mit
richtig / teilweise richtig / falsch plus Hinweis und schickt einen Rücklink.
Als Ersatzwege sind eine Datei und ein Textblock zum Abtippen vorgesehen.

Ehrliche Grenzen, die dokumentiert bleiben müssen: Das Verfahren ist nicht
fälschungssicher und taugt nicht für etwas Offizielles, und der verwendete
Messenger sieht den Text im Link.

---

## Prüfer-Rundlauf

Schreibaufgaben kann die App nicht bewerten. Sie gehen deshalb an einen
Menschen — ohne Server, ohne Konto, ohne Hochladen.

### Das Verfahren

Die Aufgabe reist im **Fragment-Teil** der Adresse (alles hinter dem `#`). Den
liest nur der Browser; an den Webserver wird er nicht geschickt. Der Prüfer
tippt auf den Link und ist in derselben App, im Prüfer-Modus.

```
du  →  #pruefen=…   (deine Antwort)      →  Prüfer
du  ←  #bewertung=… (Urteil + Hinweis)   ←  Prüfer
```

**Klein bleibt das Paket dadurch, dass nur die Antwort mitreist.**
Aufgabenstellung, Kriterien und Musterlösung hat der Prüfer schon — er öffnet
ja dieselbe App und schlägt sie über `pruefung` und `fid` nach. Gemessen: eine
A2-Schreibaufgabe ergibt 453 Zeichen, der Rückweg 365. Die Grenze liegt bei
4000; darüber schaltet die App selbst auf den Textblock um.

### Drei Entscheidungen, die den Unterschied machen

**Die Oberfläche des Prüfers läuft in der Zielsprache, nicht in der
Lernsprache.** Wer einen spanischen Text bewerten soll, ist Spanischsprecher.
Eine deutsche Oberfläche wäre für ihn unbrauchbar. Dafür gibt es `TEXTE_ZWANG`
in `texte.js` und die Datenfelder `auftragZiel`, `punkteZiel`, `kriterienZiel`.

**Die Kriterienliste macht aus einem Laien einen brauchbaren Prüfer.** Der
Prüfer ist Muttersprachler, aber kein Lehrer; „bewerte mal" überfordert. Mit
Häkchenliste weiß er, worauf er achten soll. Die Häkchen sind reine Lesehilfe
und werden nicht mitgeschickt.

**Beim Prüfer wird nichts gespeichert.** Kein Kurswechsel, kein Schreibzugriff
auf seinen Lernstand — er könnte die App selbst benutzen. Der Test weist das
in einem zweiten Browserkontext ausdrücklich nach.

### Der Fehler, der das Verfahren fast unbrauchbar gemacht hätte

Ein Link, der sich vom aktuellen nur **hinter dem `#`** unterscheidet, löst
keinen Seitenneuaufbau aus — der Browser tauscht nur das Fragment. `App.starten()`
läuft also nicht noch einmal. Hat der Lernende die App gerade offen und tippt
auf den Rücklink, passiert ohne Gegenmaßnahme **gar nichts**.

Behoben mit einem `hashchange`-Horcher. Wichtig dabei die Reihenfolge: Der
Horcher muss stehen, *bevor* der erste Link verarbeitet wird — sonst gäbe es
ihn nicht, wenn die App gleich beim Start über einen Link geöffnet wurde.

Gefunden wurde das erst im Test, weil die Bewertung zwar den Ergebnisbildschirm
zeigte (der stand noch vom vorherigen Zustand), aber nichts speicherte.

### Zwei weitere Fehler aus dem Bildschirmfoto

Der Prüfer-Bildschirm zeigte die **Kurszeile des Lernenden** im Kopf — ein Tipp
darauf hätte den Prüfer in eine fremde Kursauswahl geführt. Und der
**Zurück-Pfeil** hätte ihn mit noch erzwungener Sprache in der App des
Lernenden zurückgelassen. Beides behoben und im Test abgesichert.

### Ein Entwurfsfehler, gemeldet vom Nutzer

„Ich sehe die Prüfungen nicht." — Zwei Ursachen, beide behoben:

**Die Prüfung war vor dem Stichtag komplett unsichtbar.** `Pruefungen.offen()`
gibt nur freigeschaltete Prüfungen zurück, und die Karte wurde sonst
ausgeblendet. Wer an Tag 1 steht, sah also nichts und konnte nicht wissen, dass
es überhaupt Prüfungen gibt. Jetzt erscheint die nächste Prüfung gesperrt, mit
Stichtag und Restzahl der Tage. Dafür gibt es `Pruefungen.naechste()`.

**Der Offline-Speicher kann eine alte Fassung festhalten.** Der Service Worker
arbeitet nach dem Prinzip „erst Zwischenspeicher, dann Netz". Eine neue Fassung
wird zwar im Hintergrund geladen, greift aber erst beim *nächsten* Aufruf. Wer
die App einmal öffnet, sieht also noch den alten Stand. Damit man das erkennen
kann, steht unter *Einstellungen* jetzt der Stand der Inhalte
(„4 Kurse · 315 Tageslektionen · 11 Prüfungen"). Stimmt die Zahl nicht, hilft
ein Neuladen.

---

### Ehrliche Grenzen

Nicht fälschungssicher — der Lernende könnte seine eigene Bewertung ändern.
Für eine Lern-App unerheblich, für etwas Offizielles untauglich. Und der
Messenger sieht den Text im Link: Der Fragment-Teil erreicht den Webserver
nicht, verschlüsselt ist aber nichts.

---

## Die Meldung „Neue Fassung verfügbar"

Anlass war die Rückfrage „Ich sehe die Prüfungen nicht". Eine der beiden
Ursachen war der Offline-Speicher, und die lässt sich abstellen.

### Warum das Problem überhaupt entsteht

Der Service Worker arbeitet nach dem Prinzip **erst Zwischenspeicher, dann
Netz**. Das macht die App schnell und im Zug benutzbar, hat aber eine
Kehrseite: Eine neue Fassung wird zwar im Hintergrund geladen, greift aber erst
beim *nächsten* Aufruf. Wer die App einmal öffnet, sieht noch den alten Stand —
und weiß nicht, warum.

### Die Lösung

Die App beobachtet ihre eigene Aktualisierung und blendet unten einen Streifen
ein: *Neue Fassung verfügbar · Neu laden · Später*.

Die entscheidende Bedingung steht in `App.serviceWorkerAnmelden()`:

```js
if (arbeiter.state === 'installed' && navigator.serviceWorker.controller) {
  this.neueFassungMelden();
}
```

`installed` allein genügt nicht — das trifft auch auf die **Erstinstallation**
zu, und dort wäre die Meldung unsinnig. Erst zusammen mit einem vorhandenen
`controller` steht fest: Es läuft bereits eine Fassung, und eine neue liegt
daneben.

Zusätzlich fragt die App aktiv nach (`reg.update()`) — einmal beim Start und
noch einmal, wenn sie nach einer Pause wieder in den Vordergrund kommt. Genau
dann hat man sie oft tagelang offen gehabt.

### Der Test musste echt sein

Ein Update lässt sich nicht sinnvoll simulieren. `tests/10-update.js` ändert
deshalb wirklich `service-worker.js` auf der Platte, stößt die Prüfung an und
stellt die Datei in einem `finally` wieder her — mit anschließender Kontrolle,
dass sie unverändert ist. Geprüft wird auch der Fall, der leicht untergeht:
**beim allerersten Besuch darf keine Meldung kommen.**

### Ein Fehler im Test-Starter, dabei gefunden

`alle.sh` suchte die Tests mit dem Muster `0*.js`. Damit wäre `10-update.js`
stillschweigend übersprungen worden — und jeder weitere Test ab Nummer 10
ebenfalls. Aufgefallen ist es nur, weil der Gesamtlauf neun statt zehn Tests
meldete. Muster jetzt `[0-9]*.js`.

---

## Sprechübungen (Oktober 2026)

Du wolltest, dass die Lernenden auch **sprechen**. Gebaut wurde das in zwei
Stufen, für alle drei Kurse.

### Stufe 1 — Nachsprechen in jeder Tageslektion

Nach den Sätzen des Tages kommen zwei davon zum Nachsprechen. Der Ablauf:

1. Der Satz steht groß da, darunter die Übersetzung.
2. Das Handy spricht ihn vor (🔊 Vorsprechen, 🐢 Langsam).
3. **🎙️ Aufnehmen** — die Zeit läuft mit, ein zweiter Tipp stoppt.
4. **🔁 Vergleichen** spielt erst die Vorlage, dann die eigene Aufnahme.
5. Selbstcheck mit drei Häkchen: alle Wörter gesagt · Betonung ähnlich · flüssig.

Es gibt **keine Note** und nichts wird gespeichert oder verschickt — die
Aufnahme liegt nur im Arbeitsspeicher und ist beim Weiterblättern weg.

**Wie das technisch geht (für Einsteiger):** Jeder moderne Browser hat eine
eingebaute Aufnahmefunktion, den `MediaRecorder`. Die App fragt mit
`getUserMedia` nach dem Mikrofon, nimmt auf und bekommt am Ende ein „Blob" —
ein Stück Binärdaten, das ein `<audio>`-Element direkt abspielen kann. Das alles
steckt in **`js/aufnahme.js`**. Drei Dinge darin sind wichtig:

| Thema | Lösung |
|---|---|
| Android **und** iPhone | Aufgenommen wird als **MP4 (AAC)**, sobald das Gerät es kann — das spielen beide ab. WebM nur als Ersatz. |
| Mikrofon wirklich freigeben | Nach jedem Stopp, beim Weiterblättern und beim Verlassen werden alle Spuren beendet. Sonst bliebe auf dem Handy das rote Mikrofon-Symbol stehen. |
| Verständliche Fehler | Verweigert, kein Mikrofon, belegt (z. B. Anruf) — jeder Fall hat eine eigene Meldung mit Lösungsweg. |

Das Mikrofon gibt es nur auf einer **sicheren Adresse (https)**. Über GitHub
Pages geht es; beim Öffnen per Doppelklick zeigt die Übung einen Hinweis.

### Stufe 2 — Sprechteil in jeder Prüfung

Alle elf Prüfungen haben einen fünften Teil **Sprechen** nach dem Vorbild der
echten Prüfung (Goethe, DELE, telc): sich vorstellen, vom Wochenende erzählen,
ein Thema präsentieren, ein Briefing ans Team, ein Menü vorstellen … Wie beim
Schreiben bewertet ihn ein Mensch über den vorhandenen Prüfer-Rundlauf.

| Schritt | Was passiert | Wo im Code |
|---|---|---|
| Aufnehmen | Aufnahme direkt in der Prüfungsseite, beliebig oft neu, Höchstdauer je Aufgabe | `PruefungUI.art_sprechen` |
| Ablegen | Sofort in der **IndexedDB** (eine Datenbank im Browser, die auch größere Dateien fasst); im Lernstand steht nur ein kurzer Verweis | `Aufnahme.ablegen` |
| Abgeben | Läuft noch eine Aufnahme, wird sie erst beendet und abgelegt — erst dann wird abgegeben | `PruefungUI.fertigstellen` |
| Verschicken | Link **und Audiodatei in einer Nachricht** über das Teilen-Menü; ohne Teilen-Menü Download + Zwischenablage | `Teilen.verschicken` |
| Prüfer | sieht Dauer und Dateinamen, kann die Datei in der App öffnen, bewertet richtig / teilweise / falsch + Hinweis | `App.prueferModusStarten` |
| Rückweg | unverändert: Rücklink, Bewertung steht beim Sprechteil | `App.bewertungEinlesen` |

**Warum die Datei getrennt reist:** Eine Minute Sprache sind etwa 0,5 MB, ein
Link trägt verlässlich nur rund 4 KB. Im Link steht deshalb nur, *dass* es eine
Aufnahme gibt — Länge und Dateiname, z. B. `vamos-es-419-a1-TM22JS-lz5101.m4a`.

**Eine Feinheit für Android:** Chrome nimmt beim Teilen nur bestimmte Dateitypen
an und kennt M4A unter `audio/x-m4a`, nicht unter `audio/mp4`. Die App probiert
deshalb beide Bezeichnungen, bevor sie auf den Download ausweicht.

**Ohne Mikrofon** fällt der Sprechteil weg (wie der Hörteil ohne Stimme), mit
Hinweis auf der Übersichtsseite. **Abbrechen** einer Prüfung und **Zurücksetzen**
der App löschen die Aufnahmen; die **Sicherungsdatei enthält sie nicht**.

**Noch offen:** Der Test läuft mit einem künstlichen Mikrofon in Chromium. Ob
Aufnahme, Teilen und Abspielen auf deinem Android-Handy und einem iPhone genauso
klappen, kann nur ein Versuch auf den echten Geräten zeigen — siehe „Was als
Nächstes ansteht".

---

## A1-Ausbau: Kurse, die nach vorne wachsen (Oktober 2026)

„Deutsch im Beruf" und „Spanisch (Lateinamerika)" begannen bei A2. Beide haben
jetzt einen A1-Block **vorne**:

| Kurs | neu | bisherige Tage | neue A1-Prüfung | bisherige Prüfungen |
|---|---|---|---|---|
| Deutsch im Beruf | Tag 1–15 (A1) | 1–45 → 16–60 | nach Tag 15 („Examen 1 · Primeros pasos") | nach Tag 45 und 60, heißen jetzt Examen 2 und 3 |
| Spanisch (Lateinamerika) | Tag 1–30 (A1) | 1–90 → 31–120 | nach Tag 30 („Prüfung A1", DELE A1) | A2 nach Tag 63, B1 nach 90, B2 nach 120 |

**Das Problem dabei:** Ein Lernstand speichert den aktuellen Tag als Zahl. Wer
gerade an Tag 20 war, wäre nach dem Update plötzlich mitten im A1-Block gelandet.

**Die Lösung:** Jeder Kurs hat jetzt einen **Datenstand** und eine Liste der
**Verschiebungen** (`js/kurs-definitionen.js`):

```js
datenStand: 2,
verschiebungen: { 2: 15 }   // beim Wechsel auf Stand 2 kamen 15 Tage vorne dazu
```

Jeder Lernstand merkt sich, für welchen Datenstand er angelegt wurde. Ist er älter,
rechnet `Speicher.datenStandAngleichen()` beim Laden nach: aus Tag 20 wird Tag 35
(bzw. Tag 50 beim Spanischkurs). Das passiert nur, wenn man den Kurs **schon
begonnen** hatte — wer noch nie angefangen hat, startet bei Tag 1 mit A1. Auch eine
alte Sicherungsdatei wird beim Einspielen so angepasst.

**Was dabei gleich bleibt:** Die IDs aller Vokabeln, Sätze und Übungen. Die neuen
A1-Tage haben eigene Kürzel (`bev`/`bes`/`beg` bzw. `av`/`as`/`ag`). Dadurch bleibt
der Wiederholungsstand jeder Karte erhalten. Ebenso behalten die verschobenen
Prüfungen ihre IDs — frühere Ergebnisse gelten weiter.

**Was beim Verschieben sonst noch anzupassen war:** die Dateinamen, die
Kopfkommentare und alle Querverweise im Text („wie an Tag 9") — beim Spanischkurs
34 Stück, beim Berufspfad 7. Ein neuer Test (`13-datenstand.js`) prüft, dass man
nach dem Verschieben wirklich wieder bei **derselben Lektion** landet.

**Bewusst nicht gebaut:** eine Einstufung, mit der Neue direkt bei A2 einsteigen.
Wer neu anfängt und schon A2 kann, geht die A1-Tage zügig durch.

---

## Tests im Repository

Bis zum 22.09.2026 lagen die Prüfskripte nur im Arbeitsverzeichnis der jeweiligen
Sitzung und waren danach weg. Jetzt liegen sie unter `tests/` im Repository und
überleben damit jede Sitzung.

```
tests/alle.sh                 startet alles mit einem Befehl
tests/umgebung.js             gemeinsame Einstellungen
tests/01-daten.js … 07-luecken.js
tests/README.md               Anleitung
tests/package.json            nur für Playwright
```

### Der eine Befehl

```bash
bash tests/alle.sh
```

Startet den Webserver selbst, lässt alle Testdateien laufen und beendet den
Server danach wieder. Dauer rund zwei bis drei Minuten.

### Was die sieben Tests prüfen

| Datei | Browser | Prüft |
|---|---|---|
| `01-daten.js` | nein | alle Lerndaten aller Kurse: fehlende Felder, doppelte oder fehlende IDs, Tageslücken, Übungen mit mehr als einer Lücke |
| `02-lernsystem.js` | nein | Intervallleiter, Rückfall auf Stufe 0, Problemwörter, Übungstyp je Stufe |
| `03-ablauf.js` | ja | komplette Tagessitzung, alle sechs Übungstypen, Historie, Dunkelmodus, Kalenderdatei, Offline |
| `04-kurssystem.js` | ja | Kurswechsel, getrennter Lernstand, Oberflächensprache, Lernpfad-Darstellung |
| `05-sprachrichtungen.js` | ja | Tag 1 in allen vier Kursen, Ziel- und Ausgangssprache, Sonderzeichen |
| `06-fachwortschatz.js` | ja | Vertiefungstage 31–45: Erklärung mit Tabelle, jede Lücke sichtbar und lösbar |
| `07-luecken.js` | ja | Nachkontrolle der vier früher zweilückigen Übungen |
| `08-pruefung.js` | ja | Prüfungssystem: Freischaltung, Prüfungsregeln, Durchlauf richtig und falsch, Bestehensgrenze, gespeicherte Versuche, Gerät ohne Sprachausgabe |
| `09-pruefer.js` | ja | Prüfer-Rundlauf in zwei getrennten Browserkontexten: Link, fremdes Gerät ohne Lernstand, Bewertung, Rücklink, kaputte Links, Eintragen von Hand |
| `10-update.js` | ja | Meldung „Neue Fassung verfügbar" über einen echten Update-Vorgang des Service Workers |
| `11-sprechen.js` | ja | Nachsprech-Übung mit künstlichem Mikrofon: Aufnahme, Wiedergabe, Selbstcheck, Freigabe des Mikrofons, Fehlerfälle |
| `12-pruefung-sprechen.js` | ja | Sprechteil der Prüfung: Aufnahme, Ablage, Teilen mit Audiodatei, Prüfer, Rücklink, Aufräumen, Gerät ohne Mikrofon |
| `13-datenstand.js` | ja | Lernstand wandert mit, wenn vorne A1-Tage dazukommen; alte Sicherungen und Prüfungsergebnisse bleiben gültig |

`02` bis `05` enthalten zusammen 173 einzelne Prüfungen, dazu kommen die
inhaltlichen Kontrollen aus `01`, `06` und `07`.

### Das Problem beim Übernehmen: feste Pfade

Die Skripte waren für *eine bestimmte Sitzung* geschrieben und steckten voller
Pfade, die es nur auf diesem einen Rechner gab:

| Fest verdrahtet war | Jetzt |
|---|---|
| Sitzungsordner für Bildschirmfotos | `tests/ausgabe/` |
| `/home/user/Test/js/srs.js` | relativ zum Testordner gefunden |
| `/opt/pw-browsers/chromium-1194/…` | automatisch gesucht |
| `http://localhost:8765` | über `VAMOS_URL` änderbar |

Auf jedem anderen Rechner wären sie sofort gescheitert. Deshalb gibt es jetzt
das gemeinsame Modul **`tests/umgebung.js`**: Alles, was vom Rechner abhängt,
steht ausschließlich dort. Die Testskripte selbst wissen nichts mehr über ihre
Umgebung.

Das ist das Prinzip dahinter und der Grund, warum man so etwas überhaupt zentral
auslagert: Ändert sich der Rechner, ändert man **eine** Datei statt sieben. Über
Umgebungsvariablen geht es sogar ganz ohne Codeänderung:

```bash
VAMOS_URL=http://localhost:9000/index.html node tests/03-ablauf.js
VAMOS_PORT=9000 bash tests/alle.sh
VAMOS_CHROMIUM=/usr/bin/chromium node tests/04-kurssystem.js
```

Nachgewiesen wurde das, indem die Tests aus `/tmp` heraus gestartet wurden, also
von völlig außerhalb des Projekts — alle sieben bestanden. An der Testlogik
selbst wurde nichts geändert, nur an Pfaden und Konfiguration.

### Ein Fehler im Starter, gefunden beim Prüfen

Die erste Fassung von `alle.sh` hat den Server nicht wieder beendet. Der Grund
ist lehrreich:

```bash
( cd "$PROJEKT" && python3 -m http.server 8765 ) &
SERVER_PID=$!        # ← das ist die Klammer, nicht der Server
```

`$!` liefert die Nummer der **Subshell** — also der runden Klammer —, nicht die
von Python. Beim Aufräumen wurde die Klammer beendet, Python lief als Waise
weiter. Behoben mit `exec`, das die Subshell durch Python *ersetzt*, sodass die
gemerkte Nummer wirklich die des Servers ist:

```bash
( cd "$PROJEKT" && exec python3 -m http.server 8765 ) &
SERVER_PID=$!
```

Gegengeprobt: vor dem Lauf kein Server, nach dem Lauf keiner.

### Der Test für den Alltag

Beim Schreiben eigener Vokabeln ist **ein** Test der wichtige. Er braucht weder
Browser noch Server und ist in zwei Sekunden durch:

```bash
node tests/01-daten.js
```

Er prüft alle Lerndaten aller Kurse auf doppelte IDs, fehlende Felder, Lücken in
der Tagesnummerierung und Übungen mit mehr als einer Lücke — genau die
Tippfehler, die einem beim Lesen entgehen.

### Wenn ein Test fehlschlägt

Jede fehlgeschlagene Prüfung wird mit gefundenem und erwartetem Wert
ausgeschrieben:

```
x Lektionen geladen: 45 — erwartet 30
```

Links steht, was gefunden wurde, rechts, was erwartet war. Dann gibt es zwei
Möglichkeiten: Entweder hat die App einen Fehler — oder die Erwartung ist
veraltet. Im Beispiel war Letzteres der Fall: Der Kurs wurde absichtlich von 30
auf 45 Tage verlängert, nur der Test wusste es noch nicht.

Der Unterschied ist wichtig. Eine Erwartung anzupassen ist richtig, wenn die
Änderung gewollt war — und falsch, wenn man damit nur einen echten Fehler
stummschaltet.

### Abgrenzung

Playwright ist **keine** Abhängigkeit der App. `tests/package.json` deklariert es
nur für die Browsertests; eine globale Installation wird ebenfalls gefunden.
Zwei Dinge landen bewusst nicht im Repository und stehen in der `.gitignore`:
die Bildschirmfotos unter `tests/ausgabe/` und `node_modules/`.

Wer den Ordner `tests/` löscht, ändert am Lernen nichts.

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
| 14.09.2026 | Vier ältere Übungen mit zwei Lücken umformuliert; Prüfskript erkennt zwei Lücken jetzt selbst |
| 22.09.2026 | Wortschatz von „Deutsch im Beruf" geprüft: alle 300 Begriffe waren Oberbegriffe, keine Fachdifferenzierung |
| 22.09.2026 | 15 Vertiefungstage (31–45) geschrieben: 150 Fachwörter, 75 Sätze, 75 Redemittelübungen |
| 22.09.2026 | Neue Dateien eingebunden, Offline-Cache auf `vamos-v4` hochgezählt, Untertitel auf 45 Tage |
| 22.09.2026 | 13 Vertiefungstage im Browser durchgespielt; 173 Prüfungen grün, Datenprüfung ohne Beanstandung |
| 22.09.2026 | Testskripte aus dem Sitzungsordner ins Repository übernommen: `tests/` mit sieben Prüfungen, `umgebung.js`, `alle.sh` und Anleitung |
| 22.09.2026 | Prüfungssystem gebaut: `pruefungen.js`, `pruefung-ui.js`, drei Bildschirme, fünf Aufgabenarten, 42 Oberflächentexte je Sprache |
| 22.09.2026 | Prüfung A2 für Spanisch (Spanien) geschrieben: 4 Teile, 7 Aufgaben, 36 Fragen, 35 automatisch bewertet |
| 22.09.2026 | Validator um Prüfungsdaten erweitert, Test `08-pruefung.js` mit 34 Prüfungen; 207 Prüfungen grün |
| 22.09.2026 | Prüfer-Rundlauf gebaut: `teilen.js`, Prüfer-Bildschirm, Link-Erkennung, 35 Oberflächentexte je Sprache |
| 22.09.2026 | Fehler gefunden: Ein Link, der sich nur im Fragment unterscheidet, lädt die Seite nicht neu — `hashchange` ergänzt |
| 22.09.2026 | Test `09-pruefer.js` mit 46 Prüfungen in zwei Browserkontexten; 253 Prüfungen grün |
| 22.09.2026 | Die zehn übrigen Zwischenstopp-Prüfungen geschrieben — 11 Prüfungen, 396 Fragen |
| 22.09.2026 | Mangel behoben: Alle freigeschalteten Prüfungen sind jetzt über eine Liste erreichbar |
| 22.09.2026 | Test spielt jede einzelne Prüfung komplett durch; 267 Prüfungen grün |
| 22.09.2026 | Entwurfsfehler behoben: Prüfungen waren vor dem Stichtag unsichtbar statt gesperrt sichtbar; dazu Inhaltsstand in den Einstellungen |
| 22.09.2026 | Meldung „Neue Fassung verfügbar" gebaut, mit echtem Update-Test |
| 22.09.2026 | Fehler im Test-Starter: Muster `0*.js` hätte Test 10 und alle weiteren stillschweigend übersprungen |
| 04.10.2026 | Spanisch (Spanien) in die Ablage verschoben und ausgeblendet (`ablage/`); Tests auf den Lateinamerika-Kurs umgestellt |
| 04.10.2026 | Stufe 1: Nachsprech-Übung (`js/aufnahme.js`, Übungstyp `sprechen`), MP4 für Android und iPhone, Test `11-sprechen.js` mit künstlichem Mikrofon |
| 04.10.2026 | Stufe 2: Sprechteil in allen Prüfungen, Ablage in der IndexedDB, Link und Audiodatei in einer Nachricht, Prüfer öffnet die Datei; Test `12-pruefung-sprechen.js` |
| 04.10.2026 | Deutsch im Beruf: 15 A1-Tage vorne, bisherige Tage auf 16–60, neue A1-Prüfung; Datenstand mit automatischem Mitwandern des Lernstands, Test `13-datenstand.js` |
| 04.10.2026 | Spanisch (Lateinamerika): 30 A1-Tage vorne, bisherige Tage auf 31–120, 34 Querverweise verschoben, neue Prüfung A1 nach DELE A1 |
| 04.10.2026 | README und PROGRESS.md auf Version 4 aktualisiert; 13 Testdateien grün |
