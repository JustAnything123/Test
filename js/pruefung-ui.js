/* Anzeige der Prüfungsaufgaben.

   Bewusst getrennt von js/uebungen.js, weil eine Prüfungsaufgabe sich anders
   verhält als eine Lernübung:

     Lernübung            Prüfungsaufgabe
     ---------            ---------------
     eine Frage je Seite  eine ganze Aufgabe je Seite (Text + alle Fragen)
     Tipps erlaubt        keine Tipps
     sofortige Antwort    keine Rückmeldung bis zum Schluss
     bewertet sich selbst sammelt nur ein, ausgewertet wird am Ende

   Jeder Aufgabentyp zeichnet sich in einen Behälter und schreibt die Antworten
   direkt in das mitgegebene Objekt `antworten` (Schlüssel: die Frage-ID). Die
   Prüfung kann dadurch jederzeit vor- und zurückblättern, ohne dass etwas
   verlorengeht. */

var PruefungUI = {

  esc(s) { return Uebungen.escape(s); },

  /** Eine Aufgabe zeichnen. `eintrag` kommt aus Pruefungen.aufgaben(). */
  zeichnen(eintrag, behaelter, antworten) {
    const a = eintrag.aufgabe;
    const bauer = this['art_' + a.art];
    behaelter.innerHTML = '';
    if (!bauer) {
      behaelter.innerHTML = `<p class="hinweis">Unbekannte Aufgabenart: ${this.esc(a.art)}</p>`;
      return;
    }
    bauer.call(this, eintrag, behaelter, antworten);
  },

  /* ---- gemeinsame Bausteine ------------------------------------------- */

  /** Kopf mit Teilname und Arbeitsanweisung. */
  kopf(eintrag) {
    const { teil, aufgabe } = eintrag;
    return `
      <div class="pruef-kopf">
        <span class="pruef-teil">${this.esc(teil.name)}</span>
        <span class="pruef-nummer">${this.esc(aufgabe.nummer || '')}</span>
      </div>
      <p class="pruef-anweisung">${this.esc(aufgabe.anweisung)}</p>`;
  },

  /** Ein Lesetext. Absätze werden an Leerzeilen getrennt. */
  text(roh) {
    const absaetze = String(roh).split(/\n\s*\n/)
      .map(p => `<p>${this.esc(p.trim()).replace(/\n/g, '<br>')}</p>`).join('');
    return `<div class="pruef-text">${absaetze}</div>`;
  },

  /** Knopfreihe für eine Frage. `optionen` ist [{ wert, text }]. */
  optionen(frage, optionen, antworten) {
    const gewaehlt = antworten[frage.id];
    return `<div class="pruef-optionen" data-frage="${this.esc(frage.id)}">${
      optionen.map(o => `
        <button type="button" class="pruef-option${String(gewaehlt) === String(o.wert) ? ' gewaehlt' : ''}"
                data-wert="${this.esc(o.wert)}">${this.esc(o.text)}</button>`).join('')
    }</div>`;
  },

  /** Klicks auf Antwortknöpfe einsammeln. Ein Klick auf die schon gewählte
      Antwort nimmt sie zurück — in einer Prüfung darf man sich umentscheiden
      und auch gar nichts ankreuzen. */
  optionenVerdrahten(behaelter, antworten) {
    behaelter.querySelectorAll('.pruef-optionen').forEach(gruppe => {
      const frageId = gruppe.dataset.frage;
      gruppe.querySelectorAll('.pruef-option').forEach(knopf => {
        knopf.addEventListener('click', () => {
          const wert = knopf.dataset.wert;
          if (String(antworten[frageId]) === String(wert)) {
            delete antworten[frageId];
          } else {
            antworten[frageId] = wert;
          }
          gruppe.querySelectorAll('.pruef-option').forEach(k => {
            k.classList.toggle('gewaehlt', String(antworten[frageId]) === String(k.dataset.wert));
          });
        });
      });
    });
  },

  /* ---- 1. Richtig oder falsch ----------------------------------------- */

  art_rf(eintrag, b, antworten) {
    const a = eintrag.aufgabe;
    const ja   = t('pruef.richtig');
    const nein = t('pruef.falsch');
    b.innerHTML = this.kopf(eintrag)
      + (a.text ? this.text(a.text) : '')
      + `<ol class="pruef-fragen">${
          a.fragen.map(f => `
            <li>
              <p class="pruef-frage">${this.esc(f.text)}</p>
              ${this.optionen(f, [{ wert: 'r', text: ja }, { wert: 'f', text: nein }], antworten)}
            </li>`).join('')
        }</ol>`;
    this.optionenVerdrahten(b, antworten);
  },

  /* ---- 2. Multiple Choice --------------------------------------------- */

  art_mc(eintrag, b, antworten) {
    const a = eintrag.aufgabe;
    b.innerHTML = this.kopf(eintrag)
      + (a.text ? this.text(a.text) : '')
      + `<ol class="pruef-fragen">${
          a.fragen.map(f => `
            <li>
              <p class="pruef-frage">${this.esc(f.text)}</p>
              ${this.optionen(f, f.optionen.map(o => ({ wert: o.wert, text: o.wert + ')  ' + o.text })), antworten)}
            </li>`).join('')
        }</ol>`;
    b.querySelectorAll('.pruef-optionen').forEach(g => g.classList.add('pruef-optionen-unter'));
    this.optionenVerdrahten(b, antworten);
  },

  /* ---- 3. Zuordnen ----------------------------------------------------- */

  art_zuordnen(eintrag, b, antworten) {
    const a = eintrag.aufgabe;
    b.innerHTML = this.kopf(eintrag)
      + `<div class="pruef-anzeigen">${
          a.optionen.map(o => `
            <div class="pruef-anzeige">
              <span class="pruef-buchstabe">${this.esc(o.wert)}</span>
              <span>${this.esc(o.text)}</span>
            </div>`).join('')
        }</div>`
      + `<ol class="pruef-fragen">${
          a.fragen.map(f => `
            <li>
              <p class="pruef-frage">${this.esc(f.text)}</p>
              ${this.optionen(f, a.optionen.map(o => ({ wert: o.wert, text: o.wert })), antworten)}
            </li>`).join('')
        }</ol>`;
    b.querySelectorAll('.pruef-optionen').forEach(g => g.classList.add('pruef-optionen-kurz'));
    this.optionenVerdrahten(b, antworten);
  },

  /* ---- 4. Sprachbausteine --------------------------------------------- */

  art_baustein(eintrag, b, antworten) {
    const a = eintrag.aufgabe;
    // Im Text stehen die Lücken als [1], [2] … — sie werden hervorgehoben,
    // die Auswahl steht darunter. Das ist die Anordnung der echten Prüfung.
    const textMitLuecken = this.esc(a.text)
      .replace(/\[(\d+)\]/g, '<span class="pruef-luecke">$1</span>')
      .split(/\n\s*\n/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');

    b.innerHTML = this.kopf(eintrag)
      + `<div class="pruef-text">${textMitLuecken}</div>`
      + `<ol class="pruef-fragen pruef-bausteine">${
          a.fragen.map((f, i) => `
            <li>
              <span class="pruef-luecke-nr">${i + 1}</span>
              ${this.optionen(f, f.optionen.map(o => ({ wert: o.wert, text: o.text })), antworten)}
            </li>`).join('')
        }</ol>`;
    b.querySelectorAll('.pruef-optionen').forEach(g => g.classList.add('pruef-optionen-kurz'));
    this.optionenVerdrahten(b, antworten);
  },

  /* ---- 5. Hörverstehen ------------------------------------------------- */

  art_hoeren(eintrag, b, antworten) {
    const a = eintrag.aufgabe;
    // Der gesprochene Text wird NICHT angezeigt — sonst wäre es Lesen.
    const ja   = t('pruef.richtig');
    const nein = t('pruef.falsch');

    b.innerHTML = this.kopf(eintrag)
      + `<div class="pruef-hoeren">
           <button type="button" class="btn btn-hoeren" id="pruef-abspielen">▶ ${this.esc(t('pruef.anhoeren'))}</button>
           <button type="button" class="btn btn-neben" id="pruef-langsam">🐢 ${this.esc(t('pruef.langsam'))}</button>
           <p class="hinweis">${this.esc(t('pruef.hoerHinweis'))}</p>
         </div>`
      + `<ol class="pruef-fragen">${
          a.fragen.map(f => `
            <li>
              <p class="pruef-frage">${this.esc(f.text)}</p>
              ${f.optionen
                  ? this.optionen(f, f.optionen.map(o => ({ wert: o.wert, text: o.wert + ')  ' + o.text })), antworten)
                  : this.optionen(f, [{ wert: 'r', text: ja }, { wert: 'f', text: nein }], antworten)}
            </li>`).join('')
        }</ol>`;

    if (a.fragen[0] && a.fragen[0].optionen) {
      b.querySelectorAll('.pruef-optionen').forEach(g => g.classList.add('pruef-optionen-unter'));
    }
    b.querySelector('#pruef-abspielen').addEventListener('click', () => Sprache.sprich(a.audio, 0.95));
    b.querySelector('#pruef-langsam').addEventListener('click',   () => Sprache.sprich(a.audio, 0.6));
    this.optionenVerdrahten(b, antworten);
  },

  /* ---- 6. Schreiben (wird NICHT automatisch bewertet) ------------------ */

  art_schreiben(eintrag, b, antworten) {
    const a = eintrag.aufgabe;
    const f = a.fragen[0];

    b.innerHTML = this.kopf(eintrag)
      + `<div class="pruef-auftrag">
           <p>${this.esc(f.auftrag)}</p>
           <ul>${(f.punkte || []).map(p => `<li>${this.esc(p)}</li>`).join('')}</ul>
           ${f.umfang ? `<p class="hinweis">${this.esc(f.umfang)}</p>` : ''}
         </div>
         <div class="pruef-warnung">${this.esc(t('pruef.nichtAutomatisch'))}</div>
         <textarea id="pruef-schreibfeld" class="pruef-schreibfeld" rows="12"
                   placeholder="${this.esc(t('pruef.schreibPlatzhalter'))}"></textarea>
         <p class="pruef-zaehler"><span id="pruef-woerter">0</span> ${this.esc(t('pruef.woerter'))}</p>`;

    const feld   = b.querySelector('#pruef-schreibfeld');
    const zaehler = b.querySelector('#pruef-woerter');
    feld.value = antworten[f.id] || '';

    const zaehlen = () => {
      antworten[f.id] = feld.value;
      const n = feld.value.trim() ? feld.value.trim().split(/\s+/).length : 0;
      zaehler.textContent = n;
    };
    feld.addEventListener('input', zaehlen);
    zaehlen();
  }
};
