/* Die Kurse dieser App.
   (Spanisch (Spanien) liegt seit Oktober 2026 in ablage/ und ist ausgeblendet.)
   Muss VOR den Datendateien geladen werden, damit LEKTION(...) die Kurse
   schon kennt. */

/* ---- 2. Spanisch, wie es in Lateinamerika gesprochen wird ---- */
Kurse.definieren({
  id: 'es-419',
  reihenfolge: 2,
  name: 'Español (Latinoamérica)',
  nameUi: 'Spanisch (Lateinamerika)',
  untertitel: 'A1 → B2 · 120 Tage',
  flagge: '🌎',
  ziel: 'es',
  ausgang: 'de',
  ui: 'de',
  stimmen: ['es-MX', 'es-US', 'es-419', 'es-CO', 'es-AR', 'es'],
  sonderzeichen: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
  farbe: '#0b7a4b',
  sprechen: true,                               // Nachsprech-Übung und Sprech-Teil der Prüfung
  hinweis: 'Neutrales Lateinamerikanisch: ustedes statt vosotros, Wortschatz der überall verstanden wird. Ab null: Tag 1–30 sind A1.',
  // Oktober 2026: 30 A1-Tage vorne angefügt, die bisherigen Tage 1–90 sind
  // jetzt 31–120. Wer schon angefangen hatte, wird beim Laden um 30 Tage
  // weitergesetzt und bleibt so bei seiner Lektion (js/speicher.js).
  datenStand: 2,
  verschiebungen: { 2: 30 }
});

/* ---- 3. Deutsch für spanischsprachige Lernende ---- */
Kurse.definieren({
  id: 'de',
  reihenfolge: 3,
  name: 'Alemán',
  nameUi: 'Deutsch für Spanischsprachige',
  untertitel: 'A1 → B2 · 120 días',
  flagge: '🇩🇪',
  ziel: 'de',
  ausgang: 'es',
  ui: 'es',                                     // Oberfläche auf Spanisch!
  stimmen: ['de-DE', 'de-AT', 'de-CH', 'de'],
  sonderzeichen: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
  farbe: '#1a1a1a',
  sprechen: true,                               // Nachsprech-Übung und Sprech-Teil der Prüfung
  hinweis: 'Explicaciones en español. Desde cero hasta B2.'
});

/* ---- 4. Deutsch im Beruf — ein Themen-Lernpfad des Deutschkurses ----
   Eigener Kurseintrag, damit der Fortschritt getrennt zählt und man ihn
   parallel zum Hauptkurs machen kann. Über `gehoertZu` weiß die Kursauswahl,
   dass er zum Deutschkurs gehört, und zeigt ihn als Lernpfad darunter an. */
Kurse.definieren({
  id: 'de-beruf',
  reihenfolge: 4,
  gehoertZu: 'de',                              // Lernpfad des Deutschkurses
  name: 'Alemán en el trabajo',
  nameUi: 'Deutsch im Beruf (Hotel & Restaurant)',
  untertitel: 'Cocina · Restaurante · Hotel · 60 días',
  flagge: '🍽️',
  ziel: 'de',
  ausgang: 'es',
  ui: 'es',                                     // Oberfläche auf Spanisch
  stimmen: ['de-DE', 'de-AT', 'de-CH', 'de'],
  sonderzeichen: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
  farbe: '#a8651a',
  sprechen: true,                               // Nachsprech-Übung und Sprech-Teil der Prüfung
  hinweis: 'Vocabulario y frases del turno diario en cocina, servicio y recepción. Desde cero: los días 1–15 (A1) cubren lo básico del trabajo; después sigue de A2 a B2.',
  // Oktober 2026: 15 A1-Tage vorne angefügt, die bisherigen Tage 1–45 sind
  // jetzt 16–60. Wer schon angefangen hatte, wird beim Laden um 15 Tage
  // weitergesetzt und bleibt so bei seiner Lektion (js/speicher.js).
  datenStand: 2,
  verschiebungen: { 2: 15 }
});
