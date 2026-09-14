/* Oberflächentexte in zwei Sprachen.
   Welche verwendet wird, bestimmt der aktive Kurs: Wer Spanisch lernt, sieht
   die App auf Deutsch. Wer Deutsch lernt, sieht sie auf Spanisch — sonst
   müsste er ja schon Deutsch können, um die App zu bedienen.

   Platzhalter in geschweiften Klammern werden zur Laufzeit ersetzt:
   {ziel} = Sprache, die gelernt wird · {ausgang} = die eigene Sprache */

var TEXTE = {

  /* ===================== DEUTSCH ===================== */
  de: {
    sprachen: { es: 'Spanisch', de: 'Deutsch' },

    'app.untertitel': 'Sprachen lernen, jeden Tag ein Stück',

    /* Kursauswahl */
    'kurs.titel': 'Welche Sprache?',
    'kurs.hinweis': 'Jeder Kurs hat seinen eigenen Fortschritt. Du kannst jederzeit wechseln.',
    'kurs.wechseln': 'Kurs wechseln',
    'kurs.pfad': 'Lernpfad',
    'kurs.neu': 'noch nicht begonnen',
    'kurs.stand': 'Tag {tag} von {gesamt} · {gelernt} Wörter',

    /* Startbildschirm */
    'start.streak': 'Tage in Folge',
    'start.aktiveTage': 'Aktive Tage',
    'start.woerter': 'Gelernte Wörter',
    'start.genauigkeit': 'Genauigkeit',
    'start.problemwoerter': 'Problemwörter',
    'start.tagVon': 'Tag {tag} von {gesamt}',
    'start.grammatik': 'Grammatik:',
    'start.lernen': 'Heute lernen',
    'start.wiederholen': 'Wiederholen',
    'start.erledigt': '✅ Heute schon erledigt — du kannst trotzdem weiter üben.',
    'start.speed': '⚡ Schnell-Wiederholung',
    'start.nurWdh': '🔁 Nur Wiederholen',
    'start.heatmap': 'Letzte 12 Wochen',
    'start.fertigThema': 'Alle Lektionen geschafft! 🏆',
    'start.fertigText': 'Jetzt hältst du dein Wissen mit Wiederholungen frisch.',
    'start.nichtsZuTun': 'Gerade gibt es nichts zu tun. Schau später wieder rein!',

    /* Tagesplan-Checkliste */
    'plan.problem': '⚠️ Problemwörter',
    'plan.faellig': '🔁 Fällige Wiederholungen',
    'plan.vokabeln': '📖 Neue Vokabeln',
    'plan.saetze': '💬 Sätze',
    'plan.grammatik': '📐 Grammatik',

    /* Phasen während der Sitzung */
    'phase.problem': 'Problemwörter',
    'phase.wdh': 'Wiederholung',
    'phase.neu': 'Neue Wörter',
    'phase.satz': 'Sätze',
    'phase.grammatik': 'Grammatik',

    /* Übungen */
    'ueb.pruefen': 'Prüfen',
    'ueb.weiter': 'Weiter',
    'ueb.abschliessen': 'Abschließen',
    'ueb.neuesWort': 'Neues Wort',
    'ueb.wasHeisstAusgang': 'Was heißt das auf {ausgang}?',
    'ueb.wasHeisstZiel': 'Wie heißt das auf {ziel}?',
    'ueb.eingabeZiel': 'Auf {ziel} eingeben…',
    'ueb.eingabeAusgang': 'Auf {ausgang} eingeben…',
    'ueb.satzBilden': 'Bilde den Satz auf {ziel}',
    'ueb.hoerZu': 'Hör zu und schreib auf, was du hörst',
    'ueb.langsamer': '🐢 Langsamer',
    'ueb.nochmal': 'Nochmal abspielen',
    'ueb.luecke': 'Setze die richtige Form ein',
    'ueb.anhoeren': 'Anhören',

    /* Rückmeldung */
    'rueck.fastTitel': '✓ Fast perfekt — die Akzente!',
    'rueck.fastText': 'Richtig geschrieben: <b>{loesung}</b>',
    'rueck.gutTitel': ['¡Muy bien! ✓', '¡Perfecto! ✓', '¡Genial! ✓', '¡Correcto! ✓'],
    'rueck.falschTitel': 'Nicht ganz',
    'rueck.richtigWaere': 'Richtig wäre: <b>{loesung}</b>',
    'rueck.duHattest': 'Du hattest: „{meins}“',
    'rueck.wiederDran': 'Wieder dran in {zeit}',
    'rueck.leechWeg': '🎉 Kein Problemwort mehr!',
    'rueck.leechNeu': '⚠️ Ab jetzt als Problemwort markiert — es kommt in jeder Sitzung wieder, bis es dreimal hintereinander sitzt.',

    /* Abschluss */
    'fertig.perfekt': '¡Perfecto! 🏆',
    'fertig.sehrGut': '¡Muy bien!',
    'fertig.gut': '¡Bien hecho!',
    'fertig.tschuess': '¡Hasta luego!',
    'fertig.tagAbgeschlossen': 'Tag {tag} abgeschlossen',
    'fertig.wdhAbgeschlossen': 'Wiederholung abgeschlossen',
    'fertig.aufgaben': 'Aufgaben',
    'fertig.richtig': 'Richtig',
    'fertig.neueWoerter': 'Neue Wörter',
    'fertig.streak': 'Streak',
    'fertig.nochmalUeben': 'Das üben wir nochmal',
    'fertig.zurueck': 'Zur Übersicht',
    'fertig.duHattest': 'du hattest „{meins}“',

    /* Historie */
    'hist.titel': 'Historie',
    'hist.hinweis': 'Alle Wörter und Sätze, die du schon gesehen hast — sortiert nach Fehlern.',
    'hist.alle': 'Alle',
    'hist.nurLeech': 'Nur Problemwörter',
    'hist.faellig': 'Jetzt fällig',
    'hist.leer': 'Hier ist noch nichts. Lerne erst einen Tag durch.',
    'hist.zuletztGetippt': 'Zuletzt getippt: {eingaben}',
    'hist.neu': 'neu',
    'hist.jetztFaellig': 'jetzt fällig',
    'zeit.stunden': '{n} Std',
    'zeit.tage': '{n} Tage',
    'zeit.monate': '{n} Monate',
    'hist.inStunden': 'in {n} Std',
    'hist.inTagen': 'in {n} Tg',
    'hist.inMonaten': 'in {n} Mon',

    /* Erinnerung */
    'erin.titel': 'Tägliche Erinnerung um 19:30',
    'erin.warumTitel': 'Warum kein „echter“ Handy-Alarm aus der App?',
    'erin.warumText': 'Eine Webseite kann sich nicht selbst melden, wenn sie geschlossen ist — JavaScript läuft nur im offenen Tab. Die Web-Schnittstelle, die das lösen sollte (<em>Notification Triggers</em>), wurde von Google getestet, aber nie ausgeliefert. Deshalb übernimmt dein Kalender oder Wecker den Job: das ist zu 100 % zuverlässig und funktioniert auch offline und im Energiesparmodus.',
    'erin.weg1': 'Weg 1 — Kalendereintrag (ein Klick)',
    'erin.weg1s1': 'Auf den Button unten tippen — es lädt eine Datei <code>lernen-1930.ics</code>.',
    'erin.weg1s2': 'Datei in den Downloads antippen → Google Kalender öffnet sich.',
    'erin.weg1s3': '„Importieren“ bestätigen. Fertig.',
    'erin.icsKnopf': '📅 Kalender-Erinnerung herunterladen',
    'erin.icsHinweis': 'Der Termin wiederholt sich täglich um 19:30 (Zeitzone Europe/Berlin, passt sich also automatisch an Sommer- und Winterzeit an) und enthält den Link zu dieser App.',
    'erin.weg2': 'Weg 2 — Wecker der Uhr-App',
    'erin.weg2s1': 'Uhr-App öffnen → Reiter <strong>Wecker</strong> → <strong>+</strong>',
    'erin.weg2s2': 'Zeit <strong>19:30</strong> einstellen',
    'erin.weg2s3': '<strong>Wiederholen</strong> antippen → alle sieben Wochentage auswählen',
    'erin.weg2s4': 'Als Bezeichnung <strong>„Sprache lernen“</strong> eingeben',
    'erin.weg2s5': 'Speichern',
    'erin.installTitel': 'App aufs Handy legen',
    'erin.installS1': 'Diese Seite in Chrome öffnen',
    'erin.installS2': 'Menü (⋮) → <strong>Zum Startbildschirm hinzufügen</strong>',
    'erin.installS3': 'Ab dann startet sie wie eine normale App, ohne Adressleiste',
    'erin.terminName': 'Sprache lernen',
    'erin.terminText': 'Deine Tageslektion wartet: ',

    /* Einstellungen */
    'einst.titel': 'Einstellungen',
    'einst.ton': 'Aussprache vorlesen',
    'einst.darstellung': 'Darstellung',
    'einst.auto': 'Automatisch',
    'einst.hell': 'Hell',
    'einst.dunkel': 'Dunkel',
    'einst.ziel': 'Aufgaben pro Tag (max.)',
    'einst.zielKurz': '15 — kurz',
    'einst.zielNormal': '25 — normal',
    'einst.zielIntensiv': '40 — intensiv',
    'einst.zielAlles': 'Alles Fällige',
    'einst.sicherung': 'Sicherung',
    'einst.sicherungHinweis': 'Dein Fortschritt liegt nur in diesem Browser. Wenn du die Browserdaten löschst, ist er weg. Lade dir ab und zu eine Sicherung herunter — sie enthält alle Kurse.',
    'einst.export': '⬇️ Fortschritt sichern',
    'einst.import': '⬆️ Sicherung einspielen',
    'einst.reset': 'Zurücksetzen',
    'einst.resetKnopf': 'Fortschritt dieses Kurses löschen',
    'einst.resetAlles': 'Allen Fortschritt löschen (alle Kurse)',
    'einst.importOk': 'Sicherung eingespielt.',
    'einst.importFehler': 'Konnte nicht eingelesen werden: ',
    'einst.resetFrage1': 'Wirklich den Fortschritt dieses Kurses löschen? Streak, gelernte Wörter und Historie sind dann weg.',
    'einst.resetFrage2': 'Ganz sicher? Das lässt sich nicht rückgängig machen.',
    'einst.resetAllesFrage': 'Wirklich ALLE Kurse zurücksetzen?',
    'einst.stimmeFehlt': 'Keine Stimme für {ziel} gefunden. Auf Android: Einstellungen → System → Sprachen → Text-in-Sprache-Ausgabe → passende Sprache herunterladen. Hör-Übungen sind bis dahin ausgeblendet.',
    'einst.stimmeDa': 'Stimme aktiv: {name} ({sprache}).',
    'einst.keineSprachausgabe': 'Dein Browser kann keine Sprachausgabe.',

    /* Menü */
    'menue.start': '🏠 Übersicht',
    'menue.kurse': '🌍 Kurs wechseln',
    'menue.historie': '📜 Historie',
    'menue.erinnerung': '⏰ Erinnerung 19:30',
    'menue.einstellungen': '⚙️ Einstellungen',

    /* Sonstiges */
    'allg.zurueck': 'Zurück',
    'allg.menue': 'Menü',
    'allg.abbrechen': 'Sitzung abbrechen? Deine bisherigen Antworten sind gespeichert.'
  },

  /* ===================== ESPAÑOL ===================== */
  es: {
    sprachen: { es: 'español', de: 'alemán' },

    'app.untertitel': 'Aprende un idioma, un poco cada día',

    'kurs.titel': '¿Qué idioma?',
    'kurs.hinweis': 'Cada curso guarda su propio progreso. Puedes cambiar cuando quieras.',
    'kurs.wechseln': 'Cambiar de curso',
    'kurs.pfad': 'Ruta temática',
    'kurs.neu': 'aún sin empezar',
    'kurs.stand': 'Día {tag} de {gesamt} · {gelernt} palabras',

    'start.streak': 'Días seguidos',
    'start.aktiveTage': 'Días activos',
    'start.woerter': 'Palabras aprendidas',
    'start.genauigkeit': 'Aciertos',
    'start.problemwoerter': 'Palabras difíciles',
    'start.tagVon': 'Día {tag} de {gesamt}',
    'start.grammatik': 'Gramática:',
    'start.lernen': 'Estudiar hoy',
    'start.wiederholen': 'Repasar',
    'start.erledigt': '✅ Ya lo hiciste hoy — puedes seguir practicando igual.',
    'start.speed': '⚡ Repaso rápido',
    'start.nurWdh': '🔁 Solo repasar',
    'start.heatmap': 'Últimas 12 semanas',
    'start.fertigThema': '¡Terminaste todas las lecciones! 🏆',
    'start.fertigText': 'Ahora mantienes lo aprendido con los repasos.',
    'start.nichtsZuTun': 'Ahora mismo no hay nada pendiente. ¡Vuelve más tarde!',

    'plan.problem': '⚠️ Palabras difíciles',
    'plan.faellig': '🔁 Repasos pendientes',
    'plan.vokabeln': '📖 Palabras nuevas',
    'plan.saetze': '💬 Frases',
    'plan.grammatik': '📐 Gramática',

    'phase.problem': 'Palabras difíciles',
    'phase.wdh': 'Repaso',
    'phase.neu': 'Palabras nuevas',
    'phase.satz': 'Frases',
    'phase.grammatik': 'Gramática',

    'ueb.pruefen': 'Comprobar',
    'ueb.weiter': 'Siguiente',
    'ueb.abschliessen': 'Terminar',
    'ueb.neuesWort': 'Palabra nueva',
    'ueb.wasHeisstAusgang': '¿Qué significa en {ausgang}?',
    'ueb.wasHeisstZiel': '¿Cómo se dice en {ziel}?',
    'ueb.eingabeZiel': 'Escribe en {ziel}…',
    'ueb.eingabeAusgang': 'Escribe en {ausgang}…',
    'ueb.satzBilden': 'Forma la frase en {ziel}',
    'ueb.hoerZu': 'Escucha y escribe lo que oyes',
    'ueb.langsamer': '🐢 Más despacio',
    'ueb.nochmal': 'Repetir',
    'ueb.luecke': 'Completa con la forma correcta',
    'ueb.anhoeren': 'Escuchar',

    'rueck.fastTitel': '✓ Casi perfecto — ¡los acentos!',
    'rueck.fastText': 'Se escribe: <b>{loesung}</b>',
    'rueck.gutTitel': ['¡Muy bien! ✓', '¡Perfecto! ✓', '¡Genial! ✓', '¡Correcto! ✓'],
    'rueck.falschTitel': 'No del todo',
    'rueck.richtigWaere': 'Lo correcto sería: <b>{loesung}</b>',
    'rueck.duHattest': 'Escribiste: «{meins}»',
    'rueck.wiederDran': 'Vuelve en {zeit}',
    'rueck.leechWeg': '🎉 ¡Ya no es una palabra difícil!',
    'rueck.leechNeu': '⚠️ Marcada como palabra difícil — volverá en cada sesión hasta que la aciertes tres veces seguidas.',

    'fertig.perfekt': '¡Perfecto! 🏆',
    'fertig.sehrGut': '¡Muy bien!',
    'fertig.gut': '¡Bien hecho!',
    'fertig.tschuess': '¡Hasta luego!',
    'fertig.tagAbgeschlossen': 'Día {tag} completado',
    'fertig.wdhAbgeschlossen': 'Repaso completado',
    'fertig.aufgaben': 'Ejercicios',
    'fertig.richtig': 'Aciertos',
    'fertig.neueWoerter': 'Palabras nuevas',
    'fertig.streak': 'Racha',
    'fertig.nochmalUeben': 'Esto lo practicamos otra vez',
    'fertig.zurueck': 'Volver al inicio',
    'fertig.duHattest': 'escribiste «{meins}»',

    'hist.titel': 'Historial',
    'hist.hinweis': 'Todas las palabras y frases que ya viste — ordenadas por errores.',
    'hist.alle': 'Todas',
    'hist.nurLeech': 'Solo difíciles',
    'hist.faellig': 'Pendientes',
    'hist.leer': 'Aquí todavía no hay nada. Completa primero un día.',
    'hist.zuletztGetippt': 'Última vez escribiste: {eingaben}',
    'hist.neu': 'nueva',
    'hist.jetztFaellig': 'pendiente',
    'zeit.stunden': '{n} h',
    'zeit.tage': '{n} días',
    'zeit.monate': '{n} meses',
    'hist.inStunden': 'en {n} h',
    'hist.inTagen': 'en {n} d',
    'hist.inMonaten': 'en {n} m',

    'erin.titel': 'Recordatorio diario a las 19:30',
    'erin.warumTitel': '¿Por qué la app no avisa sola?',
    'erin.warumText': 'Una página web no puede avisarte sola cuando está cerrada — JavaScript solo funciona con la pestaña abierta. La interfaz que debía resolverlo (<em>Notification Triggers</em>) la probó Google pero nunca la lanzó. Por eso el aviso lo da tu calendario o tu despertador: es 100 % fiable y funciona sin conexión y en modo ahorro de batería.',
    'erin.weg1': 'Opción 1 — Cita en el calendario (un clic)',
    'erin.weg1s1': 'Pulsa el botón de abajo — se descarga un archivo <code>lernen-1930.ics</code>.',
    'erin.weg1s2': 'Abre el archivo en tus descargas → se abre Google Calendar.',
    'erin.weg1s3': 'Confirma «Importar». Listo.',
    'erin.icsKnopf': '📅 Descargar recordatorio de calendario',
    'erin.icsHinweis': 'La cita se repite cada día a las 19:30 (zona horaria Europe/Berlin, así que se ajusta sola al horario de verano) e incluye el enlace a esta app.',
    'erin.weg2': 'Opción 2 — Alarma del reloj',
    'erin.weg2s1': 'Abre la app Reloj → pestaña <strong>Alarma</strong> → <strong>+</strong>',
    'erin.weg2s2': 'Pon la hora <strong>19:30</strong>',
    'erin.weg2s3': 'Pulsa <strong>Repetir</strong> → marca los siete días',
    'erin.weg2s4': 'Ponle el nombre <strong>«Estudiar idioma»</strong>',
    'erin.weg2s5': 'Guarda',
    'erin.installTitel': 'Poner la app en el móvil',
    'erin.installS1': 'Abre esta página en Chrome',
    'erin.installS2': 'Menú (⋮) → <strong>Añadir a pantalla de inicio</strong>',
    'erin.installS3': 'Desde entonces se abre como una app normal, sin barra de direcciones',
    'erin.terminName': 'Estudiar idioma',
    'erin.terminText': 'Tu lección de hoy te espera: ',

    'einst.titel': 'Ajustes',
    'einst.ton': 'Leer la pronunciación',
    'einst.darstellung': 'Apariencia',
    'einst.auto': 'Automático',
    'einst.hell': 'Claro',
    'einst.dunkel': 'Oscuro',
    'einst.ziel': 'Ejercicios por día (máx.)',
    'einst.zielKurz': '15 — corto',
    'einst.zielNormal': '25 — normal',
    'einst.zielIntensiv': '40 — intenso',
    'einst.zielAlles': 'Todo lo pendiente',
    'einst.sicherung': 'Copia de seguridad',
    'einst.sicherungHinweis': 'Tu progreso solo está en este navegador. Si borras los datos del navegador, se pierde. Descarga una copia de vez en cuando — incluye todos los cursos.',
    'einst.export': '⬇️ Guardar progreso',
    'einst.import': '⬆️ Restaurar copia',
    'einst.reset': 'Reiniciar',
    'einst.resetKnopf': 'Borrar el progreso de este curso',
    'einst.resetAlles': 'Borrar todo el progreso (todos los cursos)',
    'einst.importOk': 'Copia restaurada.',
    'einst.importFehler': 'No se pudo leer: ',
    'einst.resetFrage1': '¿Seguro que quieres borrar el progreso de este curso? Perderás la racha, las palabras aprendidas y el historial.',
    'einst.resetFrage2': '¿Totalmente seguro? Esto no se puede deshacer.',
    'einst.resetAllesFrage': '¿Seguro que quieres reiniciar TODOS los cursos?',
    'einst.stimmeFehlt': 'No se encontró una voz en {ziel}. En Android: Ajustes → Sistema → Idiomas → Salida de texto a voz → descarga el idioma. Mientras tanto, los ejercicios de escucha están ocultos.',
    'einst.stimmeDa': 'Voz activa: {name} ({sprache}).',
    'einst.keineSprachausgabe': 'Tu navegador no puede leer en voz alta.',

    'menue.start': '🏠 Inicio',
    'menue.kurse': '🌍 Cambiar de curso',
    'menue.historie': '📜 Historial',
    'menue.erinnerung': '⏰ Recordatorio 19:30',
    'menue.einstellungen': '⚙️ Ajustes',

    'allg.zurueck': 'Atrás',
    'allg.menue': 'Menú',
    'allg.abbrechen': '¿Salir de la sesión? Tus respuestas ya están guardadas.'
  }
};

/* ---------------------------------------------------------------------------
   t() holt einen Text in der Sprache des aktiven Kurses und ersetzt die
   Platzhalter. {ziel} und {ausgang} werden automatisch mit den Sprachnamen
   gefüllt, alles andere kannst du selbst mitgeben:
       t('start.tagVon', { tag: 5, gesamt: 60 })
   --------------------------------------------------------------------------- */
function t(schluessel, werte) {
  const kurs = (typeof Kurse !== 'undefined' && Kurse.aktiv()) || null;
  const sprache = (kurs && kurs.ui) || 'de';
  const tabelle = TEXTE[sprache] || TEXTE.de;

  let text = tabelle[schluessel];
  if (text === undefined) text = TEXTE.de[schluessel];
  if (text === undefined) return schluessel;              // fällt auf, statt leer zu sein
  if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length)];

  const namen = tabelle.sprachen || TEXTE.de.sprachen;
  const alle = Object.assign({
    ziel:    kurs ? namen[kurs.ziel]    : '',
    ausgang: kurs ? namen[kurs.ausgang] : ''
  }, werte || {});

  return text.replace(/\{(\w+)\}/g, (treffer, name) =>
    alle[name] !== undefined ? alle[name] : treffer);
}
