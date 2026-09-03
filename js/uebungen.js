/* Die sechs Übungstypen.
   Jeder Typ hat zwei Aufgaben:
     1. zeichnen()  – die Aufgabe auf den Bildschirm bringen
     2. pruefen()   – die Antwort bewerten

   pruefen() liefert immer dasselbe Format zurück:
     { korrekt: true/false, fast: true/false, loesung: "...", meins: "..." }
   "fast" heißt: inhaltlich richtig, aber z. B. ohne Akzent geschrieben.
   Das zählt als richtig, wir zeigen dir aber die korrekte Schreibweise. */

var Uebungen = {

  /* ================= Hilfsfunktionen zum Vergleichen ================= */

  /** Akzente entfernen: "sábado" → "sabado". */
  ohneAkzente(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  },

  /** Text für den Vergleich vereinheitlichen:
      klein schreiben, Satzzeichen weg, Mehrfach-Leerzeichen weg. */
  normal(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[¡¿!?.,;:"'()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  },

  /** Zusätzlich den Artikel vorne wegschneiden.
      Damit gilt "casa" als richtig, wenn "la casa" gefragt war. */
  ohneArtikel(s) {
    return this.normal(s).replace(/^(el|la|los|las|un|una|unos|unas|der|die|das|ein|eine)\s+/, '');
  },

  /** Herzstück des Vergleichs. */
  vergleiche(eingabe, loesung) {
    const e = this.normal(eingabe), l = this.normal(loesung);
    if (!e) return { korrekt: false, fast: false };
    if (e === l) return { korrekt: true, fast: false };

    // Artikel dürfen fehlen
    if (this.ohneArtikel(eingabe) === this.ohneArtikel(loesung)) return { korrekt: true, fast: false };

    // Nur die Akzente fehlen → "fast richtig", zählt als Treffer
    if (this.ohneAkzente(e) === this.ohneAkzente(l)) return { korrekt: true, fast: true };
    if (this.ohneAkzente(this.ohneArtikel(eingabe)) === this.ohneAkzente(this.ohneArtikel(loesung))) {
      return { korrekt: true, fast: true };
    }

    // Mehrere erlaubte Übersetzungen, mit "/" oder "," getrennt
    const teile = String(loesung).split(/\s*[\/,]\s*/);
    if (teile.length > 1) {
      for (const t of teile) {
        const r = this.vergleiche(eingabe, t);
        if (r.korrekt) return r;
      }
    }
    return { korrekt: false, fast: false };
  },

  /** Liste zufällig durchmischen (Fisher-Yates). */
  mischen(liste) {
    const a = liste.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /** Kleiner Lautsprecher-Knopf zum Anhören. */
  lautKnopf(text) {
    if (!Sprache.kannHoeren()) return '';
    return `<button class="laut-klein" data-sprich="${this.escape(text)}" aria-label="Anhören">🔊</button>`;
  },

  /** Text sicher in HTML einsetzen (verhindert kaputtes Markup). */
  escape(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  /* ================= Der Einstiegspunkt ================= */

  /** Baut eine Aufgabe auf und gibt ein Objekt mit pruefen() zurück.
      aufgabe = { typ, karte, richtung }
      richtung: 'es2de' (Spanisch zeigen, Deutsch abfragen) oder 'de2es'. */
  zeichnen(aufgabe, behaelter) {
    const bauer = this['typ_' + aufgabe.typ];
    if (!bauer) throw new Error('Unbekannter Übungstyp: ' + aufgabe.typ);
    behaelter.innerHTML = '';
    return bauer.call(this, aufgabe, behaelter);
  },

  /* ================= 1. Karteikarte (nur ansehen) ================= */

  typ_karte(a, b) {
    const k = a.karte;
    b.innerHTML = `
      <div class="lern-karte">
        <div class="frage">Neues Wort</div>
        <div class="wort-gross">${this.escape(k.es)} ${this.lautKnopf(k.es)}</div>
        ${k.wortart ? `<div class="wortart">${this.escape(k.wortart)}</div>` : ''}
        <div class="wort-mittel" style="font-size:1.15rem;font-weight:500;margin-top:.7rem">
          ${this.escape(k.de)}
        </div>
        ${k.beispiel ? `<div class="beispiel" style="text-align:left">
            ${this.escape(k.beispiel)} ${this.lautKnopf(k.beispiel)}
            ${k.beispielDe ? `<span class="de">${this.escape(k.beispielDe)}</span>` : ''}
          </div>` : ''}
      </div>`;
    if (Sprache.kannHoeren()) Sprache.sprich(k.es);
    return {
      nurAnsehen: true,
      pruefen: () => ({ korrekt: true, fast: false, loesung: k.de, meins: '' })
    };
  },

  /* ================= 2. Multiple Choice ================= */

  typ_mc(a, b) {
    const k = a.karte;
    const nachDe   = a.richtung !== 'de2es';                 // Standard: ES zeigen, DE wählen
    const frageText = nachDe ? k.es : k.de;
    const loesung   = nachDe ? k.de : k.es;
    const feld      = nachDe ? 'de' : 'es';

    const optionen = this.mischen([loesung, ...Daten.ablenker(k, 3, feld)]);
    let gewaehlt = null;

    b.innerHTML = `
      <div class="frage">${nachDe ? 'Was heißt das auf Deutsch?' : 'Wie heißt das auf Spanisch?'}</div>
      <div class="wort-gross">${this.escape(frageText)} ${nachDe ? this.lautKnopf(k.es) : ''}</div>
      <div class="optionen">
        ${optionen.map(o => `<button class="option" data-wert="${this.escape(o)}">${this.escape(o)}</button>`).join('')}
      </div>`;

    b.querySelectorAll('.option').forEach(btn => {
      btn.addEventListener('click', () => {
        b.querySelectorAll('.option').forEach(x => x.classList.remove('gewaehlt'));
        btn.classList.add('gewaehlt');
        gewaehlt = btn.dataset.wert;
        document.dispatchEvent(new CustomEvent('antwort-bereit'));
      });
    });

    if (nachDe && Sprache.kannHoeren()) Sprache.sprich(k.es);

    return {
      istBereit: () => gewaehlt !== null,
      pruefen: () => {
        const richtig = gewaehlt === loesung;
        b.querySelectorAll('.option').forEach(btn => {
          btn.disabled = true;
          btn.classList.remove('gewaehlt');
          if (btn.dataset.wert === loesung) btn.classList.add('richtig');
          else if (btn.dataset.wert === gewaehlt) btn.classList.add('falsch');
        });
        return { korrekt: richtig, fast: false, loesung, meins: gewaehlt || '' };
      }
    };
  },

  /* ================= 3. Tippen ================= */

  typ_tippen(a, b) {
    const k = a.karte;
    const nachEs  = a.richtung !== 'es2de';                  // Standard: Deutsch zeigen, Spanisch tippen
    const frage   = nachEs ? k.de : k.es;
    const loesung = nachEs ? k.es : k.de;

    b.innerHTML = `
      <div class="frage">${nachEs ? 'Wie heißt das auf Spanisch?' : 'Wie heißt das auf Deutsch?'}</div>
      <div class="wort-gross">${this.escape(frage)} ${nachEs ? '' : this.lautKnopf(k.es)}</div>
      ${k.wortart ? `<div class="wortart">${this.escape(k.wortart)}</div>` : ''}
      <input class="eingabe" id="tipp-feld" type="text" autocomplete="off"
             autocapitalize="off" autocorrect="off" spellcheck="false"
             placeholder="${nachEs ? 'Spanisch eingeben…' : 'Deutsch eingeben…'}">
      ${nachEs ? this.akzentleiste() : ''}`;

    const feld = b.querySelector('#tipp-feld');
    if (nachEs) this.akzenteVerdrahten(b, feld);
    feld.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); document.dispatchEvent(new CustomEvent('antwort-abschicken')); }
    });
    setTimeout(() => feld.focus(), 60);

    return {
      istBereit: () => feld.value.trim().length > 0,
      fokus: () => feld.focus(),
      pruefen: () => {
        const meins = feld.value.trim();
        const r = this.vergleiche(meins, loesung);
        feld.disabled = true;
        feld.classList.add(r.korrekt ? 'richtig' : 'falsch');
        if (r.korrekt && nachEs && Sprache.kannHoeren()) Sprache.sprich(loesung);
        return { korrekt: r.korrekt, fast: r.fast, loesung, meins };
      }
    };
  },

  /** Die spanischen Sonderzeichen als Tastenreihe — auf einer deutschen
      Handy-Tastatur kommt man sonst nur umständlich an sie heran. */
  akzentleiste() {
    const zeichen = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];
    return `<div class="akzentleiste">${
      zeichen.map(z => `<button type="button" class="akzent-taste" data-zeichen="${z}">${z}</button>`).join('')
    }</div>`;
  },

  akzenteVerdrahten(b, feld) {
    b.querySelectorAll('.akzent-taste').forEach(t => {
      t.addEventListener('click', e => {
        e.preventDefault();
        const pos = feld.selectionStart ?? feld.value.length;
        feld.value = feld.value.slice(0, pos) + t.dataset.zeichen + feld.value.slice(feld.selectionEnd ?? pos);
        feld.focus();
        feld.setSelectionRange(pos + 1, pos + 1);
      });
    });
  },

  /* ================= 4. Tapping (Satz zusammensetzen) ================= */

  typ_tapping(a, b) {
    const k = a.karte;
    const loesung = k.es;
    const woerter = loesung.split(/\s+/);

    // Bei sehr kurzen Sätzen ein paar Störwörter dazulegen
    const stoerer = woerter.length <= 4
      ? Daten.ablenker(k, 2, 'es').map(s => s.split(/\s+/)[0]).filter(Boolean)
      : [];

    const vorrat = this.mischen(woerter.concat(stoerer)
      .map((w, i) => ({ w, i })));

    b.innerHTML = `
      <div class="frage">Bilde den spanischen Satz</div>
      <div class="wort-mittel">${this.escape(k.de)}</div>
      <div class="tap-ziel" id="tap-ziel"></div>
      <div class="tap-vorrat" id="tap-vorrat">
        ${vorrat.map(o => `<button class="tap-wort" data-i="${o.i}">${this.escape(o.w)}</button>`).join('')}
      </div>`;

    const ziel   = b.querySelector('#tap-ziel');
    const quelle = b.querySelector('#tap-vorrat');

    // Wort aus dem Vorrat in den Satz schieben
    quelle.addEventListener('click', e => {
      const t = e.target.closest('.tap-wort');
      if (!t || t.classList.contains('benutzt')) return;
      t.classList.add('benutzt');
      const kopie = document.createElement('button');
      kopie.className = 'tap-wort';
      kopie.textContent = t.textContent;
      kopie.dataset.i = t.dataset.i;
      ziel.appendChild(kopie);
      document.dispatchEvent(new CustomEvent('antwort-bereit'));
    });

    // Wort wieder zurücknehmen
    ziel.addEventListener('click', e => {
      const t = e.target.closest('.tap-wort');
      if (!t) return;
      const original = quelle.querySelector(`.tap-wort[data-i="${t.dataset.i}"]`);
      if (original) original.classList.remove('benutzt');
      t.remove();
    });

    return {
      istBereit: () => ziel.children.length > 0,
      pruefen: () => {
        const meins = Array.from(ziel.children).map(c => c.textContent).join(' ');
        const r = this.vergleiche(meins, loesung);
        ziel.querySelectorAll('.tap-wort').forEach(x => x.style.pointerEvents = 'none');
        quelle.style.pointerEvents = 'none';
        if (r.korrekt && Sprache.kannHoeren()) Sprache.sprich(loesung);
        return { korrekt: r.korrekt, fast: r.fast, loesung, meins };
      }
    };
  },

  /* ================= 5. Hören und schreiben ================= */

  typ_hoeren(a, b) {
    const k = a.karte;
    const loesung = k.es;

    b.innerHTML = `
      <div class="frage">Hör zu und schreib auf, was du hörst</div>
      <button class="hoer-knopf" id="hoer-ab" aria-label="Nochmal abspielen">🔊</button>
      <button class="btn btn-neben" id="hoer-langsam" style="width:auto;margin:0 auto;display:block">🐢 Langsamer</button>
      <input class="eingabe" id="tipp-feld" type="text" autocomplete="off"
             autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Spanisch eingeben…">
      ${this.akzentleiste()}`;

    const feld = b.querySelector('#tipp-feld');
    this.akzenteVerdrahten(b, feld);
    b.querySelector('#hoer-ab').addEventListener('click', () => Sprache.sprich(loesung, 0.9));
    b.querySelector('#hoer-langsam').addEventListener('click', () => Sprache.sprich(loesung, 0.55));
    feld.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); document.dispatchEvent(new CustomEvent('antwort-abschicken')); }
    });
    setTimeout(() => { Sprache.sprich(loesung); feld.focus(); }, 250);

    return {
      istBereit: () => feld.value.trim().length > 0,
      fokus: () => feld.focus(),
      pruefen: () => {
        const meins = feld.value.trim();
        const r = this.vergleiche(meins, loesung);
        feld.disabled = true;
        feld.classList.add(r.korrekt ? 'richtig' : 'falsch');
        return { korrekt: r.korrekt, fast: r.fast, loesung, meins, zusatz: k.de };
      }
    };
  },

  /* ================= 6. Lückentext (Grammatik) ================= */

  typ_luecke(a, b) {
    const u = a.karte;                       // { id, satz, loesung, tipps, hinweis, de }
    const teile = String(u.satz).split('___');

    b.innerHTML = `
      <div class="frage">Setze die richtige Form ein</div>
      ${u.hinweis ? `<div class="wortart" style="margin-bottom:.6rem">${this.escape(u.hinweis)}</div>` : ''}
      <div class="luecke-satz">
        ${this.escape(teile[0])}<input class="luecke-feld" id="tipp-feld" type="text"
          autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
          size="10">${this.escape(teile[1] || '')}
      </div>
      ${u.de ? `<div class="wortart" style="margin-top:.5rem">${this.escape(u.de)}</div>` : ''}
      ${(u.tipps && u.tipps.length) ? `<div class="tipp-reihe">${
        this.mischen(u.tipps).map(t => `<button class="tipp-btn" data-t="${this.escape(t)}">${this.escape(t)}</button>`).join('')
      }</div>` : ''}
      ${this.akzentleiste()}`;

    const feld = b.querySelector('#tipp-feld');
    this.akzenteVerdrahten(b, feld);
    b.querySelectorAll('.tipp-btn').forEach(t => {
      t.addEventListener('click', () => {
        feld.value = t.dataset.t;
        document.dispatchEvent(new CustomEvent('antwort-bereit'));
      });
    });
    feld.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); document.dispatchEvent(new CustomEvent('antwort-abschicken')); }
    });
    setTimeout(() => feld.focus(), 60);

    return {
      istBereit: () => feld.value.trim().length > 0,
      fokus: () => feld.focus(),
      pruefen: () => {
        const meins = feld.value.trim();
        const r = this.vergleiche(meins, u.loesung);
        feld.disabled = true;
        feld.classList.add(r.korrekt ? 'richtig' : 'falsch');
        const ganzerSatz = teile[0] + u.loesung + (teile[1] || '');
        if (r.korrekt && Sprache.kannHoeren()) Sprache.sprich(ganzerSatz);
        return { korrekt: r.korrekt, fast: r.fast, loesung: u.loesung, meins, zusatz: ganzerSatz };
      }
    };
  },

  /* ================= 7. Grammatik-Erklärung (nur lesen) ================= */

  typ_erklaerung(a, b) {
    const g = a.karte;
    b.innerHTML = `<div class="gram-box"><h3>${this.escape(g.titel)}</h3>${g.erklaerung}</div>`;
    return {
      nurAnsehen: true,
      pruefen: () => ({ korrekt: true, fast: false, loesung: '', meins: '' })
    };
  }
};
