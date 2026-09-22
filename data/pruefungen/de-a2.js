/* Prüfung A2 · Deutsch für Spanischsprachige · Zwischenstopp nach Tag 60 */

PRUEFUNG('de', {
  id: 'p-de-a2', nachTag: 60, niveau: 'A2',
  name: 'Examen A2', vorbild: 'Goethe-Zertifikat A2', bestehen: 60, dauer: 55,
  teile: [
    { id: 't1', art: 'lesen', name: 'Comprensión de lectura', aufgaben: [
      { id: 'db1a1', art: 'rf', nummer: 'Tarea 1',
        anweisung: 'Lee el texto. ¿Las afirmaciones son verdaderas o falsas?',
        text:
`Als ich nach Deutschland kam, konnte ich fast kein Deutsch. Ich hatte einen Kurs gebucht, aber er fing erst im Oktober an.

In den ersten Wochen habe ich viel ferngesehen, weil ich dachte, dass ich so schneller lerne. Das hat leider nicht funktioniert. Erst als ich in einem Café angefangen habe zu arbeiten, ging es schnell: Ich musste jeden Tag sprechen.

Heute unterrichte ich selbst. Ich sage meinen Schülern immer, dass sie den Mund aufmachen sollen, obwohl sie Fehler machen. Ohne Fehler lernt man nichts.`,
        fragen: [
          { id: 'db1101', text: 'Der Kurs hat sofort nach der Ankunft begonnen.',        loesung: 'f' },
          { id: 'db1102', text: 'Fernsehen hat beim Lernen nicht viel geholfen.',        loesung: 'r' },
          { id: 'db1103', text: 'Die Arbeit im Café hat die Sprache verbessert.',        loesung: 'r' },
          { id: 'db1104', text: 'Heute arbeitet die Person immer noch im Café.',         loesung: 'f' },
          { id: 'db1105', text: 'Sie rät dazu, trotz Fehlern zu sprechen.',              loesung: 'r' }
        ] },
      { id: 'db1a2', art: 'zuordnen', nummer: 'Tarea 2',
        anweisung: 'Cinco personas buscan un curso. ¿Qué oferta va con cada una? Sobra una.',
        optionen: [
          { wert: 'A', text: 'Schreibwerkstatt: In zwölf Abenden entsteht Ihre eigene Kurzgeschichte.' },
          { wert: 'B', text: 'Bewerbungstraining: Wir üben Vorstellungsgespräche mit Videoaufnahme.' },
          { wert: 'C', text: 'Konversationskurs in Vierergruppen. Nur sprechen, keine Grammatik.' },
          { wert: 'D', text: 'Computerkurs für Senioren. Ruhiges Tempo, gedrucktes Material.' },
          { wert: 'E', text: 'Naturfotografie. Samstags früh unterwegs. Eigene Kamera nötig.' },
          { wert: 'F', text: 'Vegetarisch kochen für Anfänger. Jedes Mal ein ganzes Menü zum Mitnehmen.' }
        ],
        fragen: [
          { id: 'db1201', text: 'Pilar will die Angst vor dem Sprechen verlieren.',            loesung: 'C' },
          { id: 'db1202', text: 'Tomás hat bald ein Vorstellungsgespräch und will üben.',      loesung: 'B' },
          { id: 'db1203', text: 'Rosa ist 72 und möchte den Computer bedienen lernen.',        loesung: 'D' },
          { id: 'db1204', text: 'Ignacio schreibt seit Jahren und möchte etwas fertigstellen.', loesung: 'A' },
          { id: 'db1205', text: 'Nuria will samstags mit ihrer Kamera nach draußen.',          loesung: 'E' }
        ] },
      { id: 'db1a3', art: 'mc', nummer: 'Tarea 3',
        anweisung: 'Lee el texto y elige la respuesta correcta: a, b o c.',
        text:
`Immer mehr Menschen in Deutschland fahren mit dem Fahrrad zur Arbeit. Viele sagen, dass sie damit Zeit sparen, weil sie nicht im Stau stehen. Außerdem ist es billiger als das Auto.

Es gibt aber auch Probleme. In vielen Städten fehlen sichere Radwege, und im Winter ist es morgens noch dunkel. Wer weiter als zehn Kilometer fährt, kommt oft verschwitzt an.

Einige Firmen haben deshalb Duschen eingebaut. Andere zahlen einen Zuschuss für ein Dienstfahrrad.`,
        fragen: [
          { id: 'db1301', text: '¿Por qué ahorran tiempo?',
            optionen: [ { wert: 'a', text: 'Porque no están en el atasco.' }, { wert: 'b', text: 'Porque salen más tarde.' }, { wert: 'c', text: 'Porque trabajan menos.' } ], loesung: 'a' },
          { id: 'db1302', text: '¿Qué falta en muchas ciudades?',
            optionen: [ { wert: 'a', text: 'Bicicletas.' }, { wert: 'b', text: 'Carriles bici seguros.' }, { wert: 'c', text: 'Aparcamientos.' } ], loesung: 'b' },
          { id: 'db1303', text: '¿Cuál es el problema en invierno?',
            optionen: [ { wert: 'a', text: 'Hace demasiado calor.' }, { wert: 'b', text: 'Los trenes no funcionan.' }, { wert: 'c', text: 'Por la mañana todavía está oscuro.' } ], loesung: 'c' },
          { id: 'db1304', text: '¿Qué pasa si el trayecto supera los diez kilómetros?',
            optionen: [ { wert: 'a', text: 'Se llega sudado.' }, { wert: 'b', text: 'Se llega tarde.' }, { wert: 'c', text: 'No está permitido.' } ], loesung: 'a' },
          { id: 'db1305', text: '¿Qué hacen algunas empresas?',
            optionen: [ { wert: 'a', text: 'Prohíben la bicicleta.' }, { wert: 'b', text: 'Han instalado duchas.' }, { wert: 'c', text: 'Pagan el coche.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Comprensión auditiva', aufgaben: [
      { id: 'db2a1', art: 'hoeren', nummer: 'Tarea 4',
        anweisung: 'Escucha el mensaje y responde.',
        audio: 'Hallo Carmen, hier ist Alex. Ich rufe an, weil der Kurs, den du machen wolltest, leider schon voll ist. Man hat mir gesagt, dass sie dich anrufen würden, wenn ein Platz frei wird. An deiner Stelle würde ich mich noch heute auf die Liste setzen lassen. Übrigens ist es dieselbe Lehrerin wie letztes Jahr. Melde dich, wenn du kannst.',
        fragen: [
          { id: 'db2101', text: 'Der Kurs hat noch freie Plätze.',                    loesung: 'f' },
          { id: 'db2102', text: 'Alex rät, sich auf die Warteliste setzen zu lassen.', loesung: 'r' },
          { id: 'db2103', text: 'Er empfiehlt, noch ein paar Tage zu warten.',         loesung: 'f' },
          { id: 'db2104', text: 'Die Lehrerin ist dieselbe wie letztes Jahr.',         loesung: 'r' },
          { id: 'db2105', text: 'Alex möchte, dass Carmen sich meldet.',               loesung: 'r' }
        ] },
      { id: 'db2a2', art: 'hoeren', nummer: 'Tarea 5',
        anweisung: 'Escucha el anuncio y elige la respuesta correcta: a, b o c.',
        audio: 'Liebe Fahrgäste, wegen Bauarbeiten auf der Strecke fährt der Zug um elf Uhr fünfzehn nach Leipzig heute vom Busbahnhof ab. Ein kostenloser Shuttle bringt Sie dorthin; er fährt alle zehn Minuten vom Haupteingang. Bitte seien Sie mindestens eine halbe Stunde vorher da. Wir bitten um Ihr Verständnis.',
        fragen: [
          { id: 'db2201', text: '¿Por qué cambia la salida?',
            optionen: [ { wert: 'a', text: 'Por una huelga.' }, { wert: 'b', text: 'Por obras en la vía.' }, { wert: 'c', text: 'Por el mal tiempo.' } ], loesung: 'b' },
          { id: 'db2202', text: '¿Desde dónde sale hoy el tren?',
            optionen: [ { wert: 'a', text: 'Desde la estación de autobuses.' }, { wert: 'b', text: 'Desde la vía dos.' }, { wert: 'c', text: 'Desde el aeropuerto.' } ], loesung: 'a' },
          { id: 'db2203', text: '¿Cuánto cuesta el servicio de enlace?',
            optionen: [ { wert: 'a', text: 'Dos euros.' }, { wert: 'b', text: 'Depende del billete.' }, { wert: 'c', text: 'Nada.' } ], loesung: 'c' },
          { id: 'db2204', text: '¿Cada cuánto sale?',
            optionen: [ { wert: 'a', text: 'Cada diez minutos.' }, { wert: 'b', text: 'Cada media hora.' }, { wert: 'c', text: 'Cada hora.' } ], loesung: 'a' },
          { id: 'db2205', text: '¿Con cuánta antelación hay que estar allí?',
            optionen: [ { wert: 'a', text: 'Diez minutos.' }, { wert: 'b', text: 'Media hora como mínimo.' }, { wert: 'c', text: 'Dos horas.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Estructuras', aufgaben: [
      { id: 'db3a1', art: 'baustein', nummer: 'Tarea 6',
        anweisung: 'Lee el texto. ¿Qué forma va en cada hueco? Elige a, b o c.',
        text:
`Liebe Frau Meier,

ich schreibe Ihnen, [1] ich am Kurs nicht teilnehmen kann. Leider [2] mein Arbeitgeber meine Schicht geändert.

Als ich mich [3] Monat angemeldet habe, [4] ich noch nichts davon. Ich habe mich sehr [5] den Kurs gefreut.

Ich würde gern wissen, [6] ich das Geld zurückbekomme. Es wäre schön, wenn Sie mir eine [7] Bestätigung schicken könnten.

Der Kurs im Januar [8] mir gut passen. Könnten Sie mir sagen, ob dort noch Plätze [9] sind?

Vielen Dank, [10] Sie mir helfen.

Mit freundlichen Grüßen
D. Z.`,
        fragen: [
          { id: 'db3101', text: 'Hueco 1',  optionen: [ { wert: 'a', text: 'weil' }, { wert: 'b', text: 'denn' }, { wert: 'c', text: 'obwohl' } ], loesung: 'a' },
          { id: 'db3102', text: 'Hueco 2',  optionen: [ { wert: 'a', text: 'ist' }, { wert: 'b', text: 'hat' }, { wert: 'c', text: 'wird' } ], loesung: 'b' },
          { id: 'db3103', text: 'Hueco 3',  optionen: [ { wert: 'a', text: 'letzten' }, { wert: 'b', text: 'letzter' }, { wert: 'c', text: 'letztes' } ], loesung: 'a' },
          { id: 'db3104', text: 'Hueco 4',  optionen: [ { wert: 'a', text: 'weiß' }, { wert: 'b', text: 'wusste' }, { wert: 'c', text: 'gewusst' } ], loesung: 'b' },
          { id: 'db3105', text: 'Hueco 5',  optionen: [ { wert: 'a', text: 'an' }, { wert: 'b', text: 'für' }, { wert: 'c', text: 'auf' } ], loesung: 'c' },
          { id: 'db3106', text: 'Hueco 6',  optionen: [ { wert: 'a', text: 'ob' }, { wert: 'b', text: 'wenn' }, { wert: 'c', text: 'dass' } ], loesung: 'a' },
          { id: 'db3107', text: 'Hueco 7',  optionen: [ { wert: 'a', text: 'schriftliche' }, { wert: 'b', text: 'schriftlicher' }, { wert: 'c', text: 'schriftlichen' } ], loesung: 'a' },
          { id: 'db3108', text: 'Hueco 8',  optionen: [ { wert: 'a', text: 'wird' }, { wert: 'b', text: 'würde' }, { wert: 'c', text: 'wurde' } ], loesung: 'b' },
          { id: 'db3109', text: 'Hueco 9',  optionen: [ { wert: 'a', text: 'frei' }, { wert: 'b', text: 'freie' }, { wert: 'c', text: 'freien' } ], loesung: 'a' },
          { id: 'db3110', text: 'Hueco 10', optionen: [ { wert: 'a', text: 'weil' }, { wert: 'b', text: 'dass' }, { wert: 'c', text: 'wenn' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Expresión escrita', aufgaben: [
      { id: 'db4a1', art: 'schreiben', nummer: 'Tarea 7',
        anweisung: 'Escribe el texto en alemán. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'db4101',
          auftrag: 'Has reservado una plaza en un curso, pero no puedes asistir. Escribe un correo a la escuela.',
          punkte: [ 'Explica por qué tienes que anular.', 'Pregunta si te devuelven el dinero o si puedes cambiar de curso.', 'Pide una confirmación por escrito.' ],
          umfang: 'Escribe entre 80 y 100 palabras.',
          auftragZiel: 'Du hast einen Kursplatz gebucht, kannst aber nicht teilnehmen. Schreib eine E-Mail an die Sprachschule.',
          punkteZiel: [ 'Erkläre, warum du absagen musst.', 'Frag, ob du das Geld zurückbekommst oder wechseln kannst.', 'Bitte um eine schriftliche Bestätigung.' ],
          umfangZiel: 'Schreibe 80 bis 100 Wörter.',
          kriterienZiel: [
            'Anrede und Grußformel passen zu einer förmlichen Mail.',
            'Alle drei Punkte sind behandelt.',
            'Die Sie-Form wird durchgehalten.',
            'Der Text hat mindestens 80 Wörter.',
            'Es gibt mindestens einen Nebensatz mit weil, dass oder ob.'
          ],
          kriterien: [
            'El saludo y la despedida son adecuados para un correo formal.',
            'Se tratan los tres puntos.',
            'Se mantiene la forma Sie.',
            'El texto tiene al menos 80 palabras.',
            'Aparece al menos una subordinada con weil, dass u ob.'
          ],
          muster:
`Sehr geehrte Damen und Herren,

ich habe mich letzte Woche für den Kurs B1 im Oktober angemeldet.

Leider muss ich absagen, weil mein Arbeitgeber meine Schicht geändert hat. Ich könnte nicht mehr pünktlich zum Unterricht kommen.

Ich wollte fragen, ob ich das Geld zurückbekomme oder ob ich in den Kurs im Januar wechseln kann. Der Januarkurs würde mir gut passen.

Könnten Sie mir bitte eine schriftliche Bestätigung schicken?

Vielen Dank für Ihre Hilfe.

Mit freundlichen Grüßen
Dennis Z.`
        } ] }
    ] }
  ]
});
