/* Kursdefinition „Spanisch (Spanien)" — in der Ablage.

   Der Kurs ist ausgeblendet, weil er nicht mehr gebraucht wird. Wie man ihn
   zurückholt, steht in ablage/README.md. */

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
