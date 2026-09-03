/* Statistik — alles, was gezählt und angezeigt wird:
   Streak, aktive Tage, gelernte Wörter, Genauigkeit, Heatmap, Historie
   sowie die Kalenderdatei für die 19:30-Erinnerung. */

var Statistik = {

  /** Streak = wie viele Tage am Stück hast du gelernt?
      Wenn du heute noch nicht dran warst, zählt gestern als letzter Tag —
      der Streak reißt also erst, wenn ein ganzer Tag ausgelassen wurde. */
  streak() {
    const tage = new Set(Speicher.daten.aktiveTage);
    if (!tage.size) return 0;

    const alsText = d => {
      const p = n => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
    };
    const cursor = new Date();
    if (!tage.has(alsText(cursor))) {
      cursor.setDate(cursor.getDate() - 1);          // heute noch offen → ab gestern zählen
      if (!tage.has(alsText(cursor))) return 0;      // gestern auch nicht → Streak ist weg
    }
    let n = 0;
    while (tage.has(alsText(cursor))) {
      n++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return n;
  },

  aktiveTage()  { return Speicher.daten.aktiveTage.length; },
  gelernteWoerter() { return SRS.anzahlGelernt(); },
  problemwoerter()  { return SRS.leeches().length; },

  /** Trefferquote über alle Antworten hinweg. */
  genauigkeit() {
    let r = 0, f = 0;
    for (const k of Object.values(Speicher.daten.karten)) { r += k.richtig; f += k.falsch; }
    if (r + f === 0) return null;
    return Math.round((r / (r + f)) * 100);
  },

  /** Die Kästchen-Grafik der letzten 12 Wochen (wie bei GitHub). */
  zeichneHeatmap(behaelter) {
    const WOCHEN = 12;
    const heute = new Date(); heute.setHours(0, 0, 0, 0);
    const p = n => String(n).padStart(2, '0');
    const text = d => `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;

    // Am Montag der Woche vor 12 Wochen beginnen, damit die Spalten sauber stehen
    const start = new Date(heute);
    start.setDate(start.getDate() - (WOCHEN * 7 - 1));
    const wochentag = (start.getDay() + 6) % 7;          // Montag = 0
    start.setDate(start.getDate() - wochentag);

    const heuteText = text(heute);
    let html = '';
    for (let i = 0; i < WOCHEN * 7 + 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (d > heute) { html += '<div class="hm-tag" style="visibility:hidden"></div>'; continue; }
      const t = text(d);
      const n = Speicher.daten.tagesUebungen[t] || 0;
      const stufe = n === 0 ? '' : n < 8 ? 's1' : n < 18 ? 's2' : n < 30 ? 's3' : 's4';
      const heuteMarke = t === heuteText ? ' heute' : '';
      html += `<div class="hm-tag ${stufe}${heuteMarke}" title="${t}: ${n} Aufgaben"></div>`;
    }
    behaelter.innerHTML = html;
  },

  /** Die Historie-Liste. filter: 'alle' | 'leech' | 'faellig' */
  zeichneHistorie(behaelter, filter) {
    let ids = Object.keys(Speicher.daten.karten).filter(id => Speicher.daten.karten[id].gesehen);

    if (filter === 'leech')   ids = ids.filter(id => Speicher.daten.karten[id].leech);
    if (filter === 'faellig') ids = ids.filter(id => SRS.istFaellig(id));

    // Die problematischsten zuerst
    ids.sort((a, b) => {
      const ka = Speicher.daten.karten[a], kb = Speicher.daten.karten[b];
      if (kb.leech !== ka.leech) return kb.leech - ka.leech;
      if (kb.falsch !== ka.falsch) return kb.falsch - ka.falsch;
      return ka.stufe - kb.stufe;
    });

    if (!ids.length) {
      behaelter.innerHTML = '<p class="leer-hinweis">Hier ist noch nichts. Lerne erst einen Tag durch.</p>';
      return;
    }

    const esc = s => Uebungen.escape(s);
    behaelter.innerHTML = ids.map(id => {
      const k = Speicher.daten.karten[id];
      const inhalt = Daten.karteNachId(id);
      if (!inhalt) return '';

      const vorn = inhalt.art === 'grammatik' ? inhalt.loesung : inhalt.es;
      const hinten = inhalt.art === 'grammatik'
        ? (inhalt.thema || 'Grammatik')
        : inhalt.de;

      // Stufenanzeige: 8 Balken, gefüllt bis zur erreichten Stufe
      const balken = Array.from({ length: 8 }, (_, i) =>
        `<div class="h-punkt${i <= k.stufe ? ' voll' : ''}"></div>`).join('');

      const letzteFehler = k.historie.filter(h => !h.korrekt && h.eingabe).slice(-2)
        .map(h => `„${esc(h.eingabe)}"`).join(', ');

      return `
        <div class="h-zeile${k.leech ? ' ist-leech' : ''}">
          <div class="h-kopf">
            <span class="h-es">${esc(vorn)}</span>
            <span class="h-de">${esc(hinten)}</span>
            <span class="h-meta">${k.leech ? '⚠️ ' : ''}${k.richtig}✓ ${k.falsch}✗ · ${SRS.faelligText(id)}</span>
          </div>
          <div class="h-stufen">${balken}</div>
          ${letzteFehler ? `<div class="h-letzte-fehler">Zuletzt getippt: ${letzteFehler}</div>` : ''}
        </div>`;
    }).join('');
  },

  /* ================= Kalender-Erinnerung 19:30 ================= */

  /** Erzeugt eine .ics-Datei (Kalender-Standardformat) und lädt sie herunter.
      Der Termin wiederholt sich täglich um 19:30 Ortszeit Berlin und enthält
      den Link zu dieser App. Antippen der Benachrichtigung öffnet die App. */
  kalenderHerunterladen() {
    const url = location.href.split('#')[0];
    const jetzt = new Date();
    const p = n => String(n).padStart(2, '0');
    const stempel = d => `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}`
                       + `T${p(d.getUTCHours())}${p(d.getUTCMinutes())}${p(d.getUTCSeconds())}Z`;

    // Startdatum: heute, falls es noch vor 19:30 ist — sonst morgen
    const start = new Date();
    if (jetzt.getHours() > 19 || (jetzt.getHours() === 19 && jetzt.getMinutes() >= 30)) {
      start.setDate(start.getDate() + 1);
    }
    const datum = `${start.getFullYear()}${p(start.getMonth() + 1)}${p(start.getDate())}`;

    // Zeilen dürfen im ICS-Format kein rohes Komma enthalten
    const esc = s => String(s).replace(/([,;\\])/g, '\\$1');

    const zeilen = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Vamos Spanisch//Erinnerung//DE',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      // Zeitzonendefinition, damit Sommer-/Winterzeit automatisch stimmt
      'BEGIN:VTIMEZONE',
      'TZID:Europe/Berlin',
      'BEGIN:DAYLIGHT',
      'TZOFFSETFROM:+0100', 'TZOFFSETTO:+0200', 'TZNAME:CEST',
      'DTSTART:19700329T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
      'END:DAYLIGHT',
      'BEGIN:STANDARD',
      'TZOFFSETFROM:+0200', 'TZOFFSETTO:+0100', 'TZNAME:CET',
      'DTSTART:19701025T030000', 'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
      'END:STANDARD',
      'END:VTIMEZONE',
      'BEGIN:VEVENT',
      `UID:vamos-spanisch-1930-${Date.now()}@local`,
      `DTSTAMP:${stempel(jetzt)}`,
      `DTSTART;TZID=Europe/Berlin:${datum}T193000`,
      `DTEND;TZID=Europe/Berlin:${datum}T195000`,
      'RRULE:FREQ=DAILY',
      'SUMMARY:🇪🇸 Spanisch lernen',
      `DESCRIPTION:${esc('Deine Tageslektion wartet: ' + url)}`,
      `URL:${url}`,
      'BEGIN:VALARM',
      'TRIGGER:PT0M',
      'ACTION:DISPLAY',
      'DESCRIPTION:Spanisch lernen',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ];

    // Im ICS-Format werden Zeilen mit CRLF getrennt
    const inhalt = zeilen.join('\r\n');
    const blob = new Blob([inhalt], { type: 'text/calendar;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'spanisch-1930.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    return inhalt;
  }
};
