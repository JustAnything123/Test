/* Aufnahme — das Mikrofon für Sprechübungen.

   Benutzt wird die eingebaute Aufnahmefunktion des Browsers (MediaRecorder).
   Es wird nichts hochgeladen: Die Aufnahme bleibt auf dem Gerät, bis du sie
   selbst verschickst.

   Drei Dinge, die man wissen muss:

   1. Das Mikrofon gibt es nur auf einer sicheren Adresse (https), also über
      GitHub Pages. Öffnest du die index.html per Doppelklick, verweigern die
      meisten Browser den Zugriff. Dann zeigt die Übung einen Hinweis und du
      sprichst einfach laut nach, ohne Aufnahme.

   2. Der Browser fragt beim ersten Mal, ob die Seite das Mikrofon benutzen
      darf. Wer „Nein" tippt, bekommt eine Erklärung, wo man das ändert.

   3. Android und iPhone nehmen in verschiedenen Formaten auf. MP4 (AAC)
      spielen beide ab, WebM nur Android sicher. Deshalb wird MP4 genommen,
      wann immer das Gerät es aufnehmen kann. */

var Aufnahme = {

  /* Bevorzugte Formate, das erste unterstützte gewinnt. MP4 zuerst, weil
     eine Aufnahme vom Android-Handy sonst auf dem iPhone des Prüfers
     womöglich nicht abspielbar wäre. */
  FORMATE: [
    'audio/mp4;codecs=mp4a.40.2',
    'audio/mp4',
    'audio/aac',
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus'
  ],

  /** Kann auf diesem Gerät überhaupt aufgenommen werden?
      Das ist nur die technische Voraussetzung — ob ein Mikrofon angeschlossen
      ist und ob der Nutzer es erlaubt, zeigt sich erst beim Versuch. */
  moeglich() {
    return !!(window.isSecureContext &&
              navigator.mediaDevices &&
              navigator.mediaDevices.getUserMedia &&
              window.MediaRecorder);
  },

  /** Das Format, in dem dieses Gerät aufnimmt. '' heißt: Browser entscheidet. */
  format() {
    if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return '';
    return this.FORMATE.find(f => MediaRecorder.isTypeSupported(f)) || '';
  },

  /** Passende Dateiendung zu einem MIME-Typ, für die verschickte Datei. */
  endung(mime) {
    const m = String(mime || '');
    if (m.includes('mp4') || m.includes('aac')) return 'm4a';
    if (m.includes('ogg'))  return 'ogg';
    if (m.includes('webm')) return 'webm';
    return 'audio';
  },

  /** Verständliche Fehlermeldung zu einem Fehler von getUserMedia. */
  fehlertext(e) {
    const name = e && e.name;
    if (name === 'NotAllowedError' || name === 'SecurityError') return t('sprech.nichtErlaubt');
    if (name === 'NotFoundError'   || name === 'OverconstrainedError') return t('sprech.keinMikrofon');
    if (name === 'NotReadableError') return t('sprech.belegt');
    return t('sprech.fehler');
  },

  /** Eine Aufnahme starten.
      Gibt ein Objekt zurück mit
        stoppen()   → Promise<{ blob, mime, dauer }>
        abbrechen() → gibt das Mikrofon frei, verwirft die Aufnahme
      maxSekunden: danach wird von selbst gestoppt. */
  async starten(maxSekunden) {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mime = this.format();
    let rec;
    try {
      rec = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    } catch (e) {
      rec = new MediaRecorder(stream);          // Format doch nicht nehmbar
    }
    const teile = [];
    const beginn = Date.now();
    let fertig = null;
    const ergebnis = new Promise(resolve => { fertig = resolve; });

    rec.addEventListener('dataavailable', ev => { if (ev.data && ev.data.size) teile.push(ev.data); });
    rec.addEventListener('stop', () => {
      this.freigeben(stream);
      const typ = rec.mimeType || mime || (teile[0] && teile[0].type) || 'audio/webm';
      fertig({ blob: new Blob(teile, { type: typ }), mime: typ, dauer: (Date.now() - beginn) / 1000 });
    });

    rec.start();
    this._laufend = { rec, stream };
    const zeitgrenze = setTimeout(() => { if (rec.state === 'recording') rec.stop(); }, (maxSekunden || 30) * 1000);

    return {
      stoppen: () => {
        clearTimeout(zeitgrenze);
        if (rec.state === 'recording') rec.stop();
        return ergebnis;
      },
      abbrechen: () => {
        clearTimeout(zeitgrenze);
        try { if (rec.state === 'recording') rec.stop(); } catch (e) { /* schon gestoppt */ }
        this.freigeben(stream);
      },
      ergebnis       // erfüllt sich auch, wenn die Zeitgrenze zuschlägt
    };
  },

  /** Mikrofon wirklich loslassen. Ohne das bleibt auf dem Handy das rote
      Mikrofon-Symbol in der Statusleiste stehen. */
  freigeben(stream) {
    if (stream) stream.getTracks().forEach(t => t.stop());
    if (this._laufend && this._laufend.stream === stream) this._laufend = null;
  },

  /** Notbremse beim Verlassen einer Aufgabe. */
  allesFreigeben() {
    if (this._laufend) {
      try { if (this._laufend.rec.state === 'recording') this._laufend.rec.stop(); } catch (e) { /* egal */ }
      this.freigeben(this._laufend.stream);
    }
  },

  _laufend: null
};
