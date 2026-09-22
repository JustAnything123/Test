/* Teilen — der Weg einer Schreibaufgabe zu einem Menschen und zurück.

   Die App hat keinen Server. Es gibt also keinen Ort, an dem eine Prüfung
   liegen könnte, während sie auf Bewertung wartet. Deshalb reist sie mit:

     Du  →  Link mit deiner Antwort  →  Prüfer
     Du  ←  Link mit der Bewertung   ←  Prüfer

   Der Trick ist der Teil hinter dem # in einer Adresse (das "Fragment").
   Den liest nur der Browser; an den Webserver wird er nicht geschickt. Der
   Prüfer braucht deshalb weder ein Konto noch eine Installation — er tippt
   auf den Link und ist in derselben App.

   WICHTIG und ehrlich: Der Messenger, mit dem du den Link verschickst, sieht
   den Inhalt natürlich trotzdem. Verschlüsselt ist hier nichts.

   Klein gehalten wird das Paket dadurch, dass nur die ANTWORT mitreist.
   Aufgabenstellung, Kriterien und Musterlösung stecken schon in der App des
   Prüfers — er öffnet ja dieselbe. */

var Teilen = {

  /* Ab dieser Länge ist ein Link nicht mehr verlässlich: Manche Messenger
     kürzen, manche Mailprogramme brechen um. Dann bietet die App den
     Textblock zum Kopieren an. */
  MAX_LINK: 4000,

  /* ---- Ein- und Auspacken ---------------------------------------------- */

  /** Objekt → URL-sicherer Text.
      Der Umweg über TextEncoder ist nötig, weil btoa() nur mit Zeichen bis
      255 umgehen kann. Ohne ihn würden „ä" und „ñ" den Vorgang abbrechen. */
  packen(objekt) {
    const bytes = new TextEncoder().encode(JSON.stringify(objekt));
    let roh = '';
    for (const b of bytes) roh += String.fromCharCode(b);
    return btoa(roh).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  },

  /** URL-sicherer Text → Objekt. Gibt null zurück, wenn der Link kaputt ist. */
  entpacken(text) {
    try {
      let b64 = String(text).replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      const roh = atob(b64);
      const bytes = new Uint8Array(roh.length);
      for (let i = 0; i < roh.length; i++) bytes[i] = roh.charCodeAt(i);
      return JSON.parse(new TextDecoder().decode(bytes));
    } catch (e) {
      return null;
    }
  },

  /** Die eigene Adresse ohne alles hinter dem #. */
  grundadresse() {
    return location.href.split('#')[0];
  },

  /* ---- Hinweg: der Prüfauftrag ----------------------------------------- */

  /** Paket für den Prüfer. Enthält nur, was der Prüfer nicht schon hat. */
  auftragPacken(versuch, kursId) {
    return {
      v: 1,
      art: 'auftrag',
      id: versuch.id,
      kurs: kursId || Kurse.aktiveId(),
      pruefung: versuch.pruefungId,
      datum: versuch.datum,
      antworten: versuch.offen.map(o => ({ fid: o.frageId, text: o.antwort || '' }))
    };
  },

  auftragLink(versuch, kursId) {
    return this.grundadresse() + '#pruefen=' + this.packen(this.auftragPacken(versuch, kursId));
  },

  /* ---- Rückweg: die Bewertung ------------------------------------------ */

  bewertungPacken(auftrag, bewertungen, von) {
    return {
      v: 1,
      art: 'bewertung',
      id: auftrag.id,
      kurs: auftrag.kurs,
      pruefung: auftrag.pruefung,
      von: von || '',
      datum: new Date().toISOString().slice(0, 10),
      b: Object.keys(bewertungen).map(fid => ({
        fid,
        urteil:  bewertungen[fid].urteil,
        hinweis: bewertungen[fid].hinweis || ''
      }))
    };
  },

  bewertungLink(auftrag, bewertungen, von) {
    return this.grundadresse() + '#bewertung=' + this.packen(this.bewertungPacken(auftrag, bewertungen, von));
  },

  /* ---- Was steht im Link? ---------------------------------------------- */

  /** Liest #pruefen= oder #bewertung= aus der Adresse.
      Gibt { art, daten } zurück oder null. */
  ausAdresse(adresse) {
    const hash = String(adresse === undefined ? location.hash : adresse);
    const treffer = hash.match(/[#&](pruefen|bewertung)=([A-Za-z0-9_-]+)/);
    if (!treffer) return null;
    const daten = this.entpacken(treffer[2]);
    if (!daten || daten.art !== (treffer[1] === 'pruefen' ? 'auftrag' : 'bewertung')) return null;
    return { art: daten.art, daten };
  },

  /** Das Fragment wieder entfernen, damit ein Neuladen nicht alles
      wiederholt und der Link nicht in der Adresszeile stehenbleibt. */
  adresseSaeubern() {
    if (location.hash) history.replaceState(null, '', this.grundadresse());
  },

  /* ---- Ersatzweg: Textblock zum Kopieren -------------------------------- */

  /** Wenn der Link zu lang wird oder gar nicht ankommt: ein lesbarer Text,
      den man in jeden Messenger kleben kann. Der Prüfer antwortet dann
      formlos, und die Bewertung wird von Hand eingetragen. */
  auftragAlsText(versuch, def) {
    const zeilen = [];
    zeilen.push(`${t('pruefer.betreff')} — ${def ? def.name : versuch.pruefungId}`);
    zeilen.push(`${t('pruefer.kennung')}: ${versuch.id}`);
    zeilen.push('');
    for (const o of versuch.offen) {
      zeilen.push('--- ' + t('pruefer.dieAufgabe') + ' ---');
      zeilen.push(o.auftrag);
      zeilen.push('');
      zeilen.push('--- ' + t('pruefer.dieAntwort') + ' ---');
      zeilen.push(o.antwort || '(' + t('pruef.nichtsGeschrieben') + ')');
      zeilen.push('');
      if (o.kriterien && o.kriterien.length) {
        zeilen.push('--- ' + t('pruefer.woraufAchten') + ' ---');
        for (const k of o.kriterien) zeilen.push('[ ] ' + k);
        zeilen.push('');
      }
      zeilen.push('--- ' + t('pruefer.bitteBewerten') + ' ---');
      zeilen.push(`[ ] ${t('pruefer.richtig')}   [ ] ${t('pruefer.teilweise')}   [ ] ${t('pruefer.falsch')}`);
      zeilen.push(t('pruefer.hinweis') + ': ______________________');
    }
    return zeilen.join('\n');
  },

  /* ---- Verschicken ------------------------------------------------------ */

  /** Über das Teilen-Menü des Geräts verschicken. Gibt es das nicht
      (Rechner-Browser), landet der Text in der Zwischenablage. Gibt zurück,
      was passiert ist, damit die Oberfläche es sagen kann. */
  async verschicken(titel, text) {
    if (navigator.share) {
      try {
        await navigator.share({ title: titel, text });
        return 'geteilt';
      } catch (e) {
        if (e && e.name === 'AbortError') return 'abgebrochen';
        // sonst weiter zur Zwischenablage
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      return 'kopiert';
    } catch (e) {
      return 'fehlgeschlagen';
    }
  },

  /** Ist der Link kurz genug, um verlässlich anzukommen? */
  linkTraegt(link) {
    return link.length <= this.MAX_LINK;
  }
};
