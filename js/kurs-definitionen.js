/* Die drei Kurse dieser App.
   Muss VOR den Datendateien geladen werden, damit LEKTION(...) die Kurse
   schon kennt. */

/* ---- 1. Spanisch, wie es in Spanien gesprochen wird ---- */
Kurse.definieren({
  id: 'es-es',
  reihenfolge: 1,
  name: 'Español (España)',
  nameUi: 'Spanisch (Spanien)',
  untertitel: 'A2 → B1 · 60 Tage',
  flagge: '🇪🇸',
  ziel: 'es',                                   // Zielsprache
  ausgang: 'de',                                // Sprache, aus der übersetzt wird
  ui: 'de',                                     // Oberflächensprache
  stimmen: ['es-ES', 'es'],                     // Suchreihenfolge für die Sprachausgabe
  sonderzeichen: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
  farbe: '#c8102e',
  hinweis: 'Mit vosotros und dem Wortschatz Spaniens.'
});

/* ---- 2. Spanisch, wie es in Lateinamerika gesprochen wird ---- */
Kurse.definieren({
  id: 'es-419',
  reihenfolge: 2,
  name: 'Español (Latinoamérica)',
  nameUi: 'Spanisch (Lateinamerika)',
  untertitel: 'A2 → B2 · 90 Tage',
  flagge: '🌎',
  ziel: 'es',
  ausgang: 'de',
  ui: 'de',
  stimmen: ['es-MX', 'es-US', 'es-419', 'es-CO', 'es-AR', 'es'],
  sonderzeichen: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'],
  farbe: '#0b7a4b',
  hinweis: 'Neutrales Lateinamerikanisch: ustedes statt vosotros, Wortschatz der überall verstanden wird.'
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
  untertitel: 'Cocina · Restaurante · Hotel · 45 días',
  flagge: '🍽️',
  ziel: 'de',
  ausgang: 'es',
  ui: 'es',                                     // Oberfläche auf Spanisch
  stimmen: ['de-DE', 'de-AT', 'de-CH', 'de'],
  sonderzeichen: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
  farbe: '#a8651a',
  hinweis: 'Vocabulario y frases del turno diario en cocina, servicio y recepción. Recomendado a partir del día 30 del curso de alemán (nivel A2).'
});
