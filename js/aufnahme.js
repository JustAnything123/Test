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
      // 64 kbit/s reichen für Sprache völlig und halten die Datei klein:
      // etwa 0,5 MB je Minute — gut zu verschicken, auch über Mobilfunk.
      const opt = { audioBitsPerSecond: 64000 };
      if (mime) opt.mimeType = mime;
      rec = new MediaRecorder(stream, opt);
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

  _laufend: null,

  /** Sekunden als "1:05". */
  dauerText(sekunden) {
    const s = Math.max(0, Math.round(Number(sekunden) || 0));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  },

  /* ---- Ablage auf dem Gerät (für die Prüfung) ---------------------------

     Die Aufnahme einer Prüfung muss bleiben, bis sie verschickt ist — auch
     wenn man die App zwischendurch schließt. In den normalen Lernstand
     (localStorage) passt sie nicht: Der fasst nur wenige MB und nur Text.

     Deshalb liegt sie in der IndexedDB, einer Datenbank, die jeder Browser
     mitbringt und die auch größere Dateien aufnimmt. Gespeichert werden die
     rohen Bytes plus Format, nicht das Blob-Objekt selbst — ältere iPhones
     konnten Blobs in der IndexedDB nicht zuverlässig ablegen.

     Im Lernstand steht nur ein kurzer Schlüssel, der auf die Aufnahme zeigt.
     WICHTIG: Die Sicherungsdatei (Export) enthält die Aufnahmen nicht. */

  DB_NAME: 'vamos-aufnahmen',
  DB_TABELLE: 'aufnahmen',

  /* Zusätzlich im Arbeitsspeicher, solange die App offen ist. Falls die
     IndexedDB nicht geht (manche private Fenster), klappt das Verschicken
     direkt nach der Prüfung trotzdem. */
  _fluechtig: {},

  _db() {
    if (this._dbVersprechen) return this._dbVersprechen;
    this._dbVersprechen = new Promise((ok, fehler) => {
      if (!window.indexedDB) return fehler(new Error('IndexedDB fehlt'));
      const anfrage = indexedDB.open(this.DB_NAME, 1);
      anfrage.onupgradeneeded = () => anfrage.result.createObjectStore(this.DB_TABELLE);
      anfrage.onsuccess = () => ok(anfrage.result);
      anfrage.onerror   = () => fehler(anfrage.error);
    });
    // Schlägt das Öffnen fehl, beim nächsten Mal neu versuchen
    this._dbVersprechen.catch(() => { this._dbVersprechen = null; });
    return this._dbVersprechen;
  },

  /** Ein Vorgang in der Datenbank, verpackt als Promise. */
  async _vorgang(modus, arbeit) {
    const db = await this._db();
    return new Promise((ok, fehler) => {
      const tx = db.transaction(this.DB_TABELLE, modus);
      const anfrage = arbeit(tx.objectStore(this.DB_TABELLE));
      tx.oncomplete = () => ok(anfrage ? anfrage.result : undefined);
      tx.onerror = tx.onabort = () => fehler(tx.error);
    });
  },

  /** Neuer, eindeutiger Schlüssel für eine Aufnahme. */
  neuerSchluessel() {
    return 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  },

  /** Aufnahme ablegen. Gibt true zurück, wenn sie dauerhaft gespeichert ist. */
  async ablegen(schluessel, blob) {
    this._fluechtig[schluessel] = blob;
    try {
      const daten = await blob.arrayBuffer();
      await this._vorgang('readwrite', tab => tab.put({ daten, mime: blob.type }, schluessel));
      return true;
    } catch (e) {
      console.warn('Aufnahme nicht dauerhaft gespeichert:', e);
      return false;
    }
  },

  /** Aufnahme holen — als Blob, oder null, wenn es sie hier nicht gibt. */
  async holen(schluessel) {
    if (!schluessel) return null;
    if (this._fluechtig[schluessel]) return this._fluechtig[schluessel];
    try {
      const e = await this._vorgang('readonly', tab => tab.get(schluessel));
      if (!e || !e.daten) return null;
      const blob = new Blob([e.daten], { type: e.mime || '' });
      this._fluechtig[schluessel] = blob;
      return blob;
    } catch (e) {
      return null;
    }
  },

  /** Aufnahme löschen (z. B. beim Neu-Aufnehmen oder Abbrechen). */
  async entfernen(schluessel) {
    if (!schluessel) return;
    delete this._fluechtig[schluessel];
    try { await this._vorgang('readwrite', tab => tab.delete(schluessel)); } catch (e) { /* war nicht da */ }
  },

  /** Alle Aufnahmen löschen — beim Zurücksetzen der App. */
  async allesLoeschen() {
    this._fluechtig = {};
    try { await this._vorgang('readwrite', tab => tab.clear()); } catch (e) { /* nichts da */ }
  }
};
