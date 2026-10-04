/* Prüfung A1 · Spanisch (Lateinamerika) · Zwischenstopp nach Tag 30

   Vorbild DELE A1. Verlangt wird nur, was in den Tagen 1–30 vorkam: sich
   vorstellen, Zahlen und Uhrzeit, Familie und Wohnung, Essen und Einkaufen,
   Stadt und Verkehr, Freizeit und Pläne. Wortschatz wie im Kurs: el carro,
   la papa, el jugo, el celular, el boleto. Seit Oktober 2026; Frage-IDs mit
   dem Kürzel lz. */

PRUEFUNG('es-419', {
  id: 'p-es-419-a1', nachTag: 30, niveau: 'A1',
  name: 'Prüfung A1', vorbild: 'DELE A1', bestehen: 60, dauer: 45,
  teile: [
    { id: 't1', art: 'lesen', name: 'Leseverstehen', aufgaben: [
      { id: 'lz1a1', art: 'rf', nummer: 'Aufgabe 1',
        anweisung: 'Lies die Nachricht. Sind die Aussagen richtig oder falsch?',
        text:
`¡Hola, Clara!

¿Cómo estás? Yo estoy muy bien. Ahora vivo en Lima, en un departamento pequeño cerca del centro. Tiene dos cuartos y una cocina muy bonita.

Trabajo en un hotel de lunes a viernes. Voy al trabajo en autobús, son veinte minutos. El sábado y el domingo no trabajo.

El domingo voy a hacer una fiesta en mi casa. ¿Quieres venir? Empieza a las siete de la noche. Puedes venir con tu hermano.

Un beso,
Valentina`,
        fragen: [
          { id: 'lz1101', text: 'Valentina vive en Lima.',                        loesung: 'r' },
          { id: 'lz1102', text: 'El departamento tiene tres cuartos.',            loesung: 'f' },
          { id: 'lz1103', text: 'Valentina va al trabajo en carro.',              loesung: 'f' },
          { id: 'lz1104', text: 'El fin de semana Valentina no trabaja.',         loesung: 'r' },
          { id: 'lz1105', text: 'La fiesta empieza a las siete de la noche.',     loesung: 'r' }
        ] },
      { id: 'lz1a2', art: 'zuordnen', nummer: 'Aufgabe 2',
        anweisung: 'Fünf Personen suchen etwas. Welche Anzeige passt zu wem? Eine bleibt übrig.',
        optionen: [
          { wert: 'A', text: 'Clases de español para principiantes. Lunes y miércoles, de seis a ocho de la noche.' },
          { wert: 'B', text: 'Farmacia San Martín: abierta todos los días, también el domingo.' },
          { wert: 'C', text: 'Se renta cuarto pequeño cerca de la universidad. 200 dólares al mes.' },
          { wert: 'D', text: 'Restaurante busca mesero para el sábado y el domingo.' },
          { wert: 'E', text: 'Vendo bicicleta roja, casi nueva. 80 dólares.' },
          { wert: 'F', text: 'Gimnasio Activo: abre a las cinco y media de la mañana.' }
        ],
        fragen: [
          { id: 'lz1201', text: 'Pedro quiere aprender español. Tiene tiempo por la noche.',   loesung: 'A' },
          { id: 'lz1202', text: 'Lucía busca un cuarto barato para estudiar.',                  loesung: 'C' },
          { id: 'lz1203', text: 'Tomás necesita una medicina. Hoy es domingo.',                loesung: 'B' },
          { id: 'lz1204', text: 'Ana quiere hacer deporte antes del trabajo.',                  loesung: 'F' },
          { id: 'lz1205', text: 'Diego busca trabajo para el fin de semana.',                   loesung: 'D' }
        ] },
      { id: 'lz1a3', art: 'mc', nummer: 'Aufgabe 3',
        anweisung: 'Lies den Text und wähle die richtige Antwort: a, b oder c.',
        text:
`Café La Esquina

Abrimos de martes a domingo, de ocho de la mañana a nueve de la noche. Los lunes está cerrado.

Desayuno completo: café, jugo de naranja, pan y huevos por 25 pesos. Los niños de menos de seis años no pagan.

Tenemos mesas en la terraza y música en vivo el viernes por la noche.`,
        fragen: [
          { id: 'lz1301', text: '¿Qué día está cerrado el café?',
            optionen: [ { wert: 'a', text: 'El domingo.' }, { wert: 'b', text: 'El martes.' }, { wert: 'c', text: 'El lunes.' } ], loesung: 'c' },
          { id: 'lz1302', text: '¿A qué hora cierra?',
            optionen: [ { wert: 'a', text: 'A las nueve de la noche.' }, { wert: 'b', text: 'A las ocho de la mañana.' }, { wert: 'c', text: 'A las seis de la tarde.' } ], loesung: 'a' },
          { id: 'lz1303', text: '¿Cuánto cuesta el desayuno completo?',
            optionen: [ { wert: 'a', text: '15 pesos.' }, { wert: 'b', text: '25 pesos.' }, { wert: 'c', text: '52 pesos.' } ], loesung: 'b' },
          { id: 'lz1304', text: '¿Quién no paga?',
            optionen: [ { wert: 'a', text: 'Los estudiantes.' }, { wert: 'b', text: 'Los niños de menos de seis años.' }, { wert: 'c', text: 'Los clientes de la terraza.' } ], loesung: 'b' },
          { id: 'lz1305', text: '¿Cuándo hay música?',
            optionen: [ { wert: 'a', text: 'El viernes por la noche.' }, { wert: 'b', text: 'Todos los días.' }, { wert: 'c', text: 'El domingo por la mañana.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Hörverstehen', aufgaben: [
      { id: 'lz2a1', art: 'hoeren', nummer: 'Aufgabe 4',
        anweisung: 'Höre die Nachricht und beantworte die Fragen. Du darfst so oft hören, wie du möchtest.',
        audio: 'Hola, Daniel, soy Marta. ¿Quieres ir al cine conmigo el sábado? La película empieza a las ocho y media. Podemos comer algo antes, a las siete, en el restaurante de la plaza. Yo voy en metro, no tengo carro. Mi hermana también viene. Llámame, por favor. ¡Chao!',
        fragen: [
          { id: 'lz2101', text: 'Marta quiere ir al cine el domingo.',           loesung: 'f' },
          { id: 'lz2102', text: 'La película empieza a las ocho y media.',       loesung: 'r' },
          { id: 'lz2103', text: 'Antes quieren comer en la plaza.',              loesung: 'r' },
          { id: 'lz2104', text: 'Marta va en carro.',                            loesung: 'f' },
          { id: 'lz2105', text: 'La hermana de Marta también va.',               loesung: 'r' }
        ] },
      { id: 'lz2a2', art: 'hoeren', nummer: 'Aufgabe 5',
        anweisung: 'Höre das Gespräch auf dem Markt und wähle die richtige Antwort: a, b oder c.',
        audio: 'Buenos días, señora. ¿Cuánto cuestan las manzanas? Veinte pesos el kilo. Entonces un kilo de manzanas, por favor. ¿Algo más? Sí, medio kilo de tomates y dos cebollas. Hoy no hay papas, lo siento. No importa. ¿Cuánto es? Son cuarenta y cinco pesos. Aquí tiene. Gracias, que le vaya bien.',
        fragen: [
          { id: 'lz2201', text: '¿Cuánto cuesta el kilo de manzanas?',
            optionen: [ { wert: 'a', text: 'Veinte pesos.' }, { wert: 'b', text: 'Doce pesos.' }, { wert: 'c', text: 'Cuarenta pesos.' } ], loesung: 'a' },
          { id: 'lz2202', text: '¿Cuántas manzanas compra?',
            optionen: [ { wert: 'a', text: 'Medio kilo.' }, { wert: 'b', text: 'Dos kilos.' }, { wert: 'c', text: 'Un kilo.' } ], loesung: 'c' },
          { id: 'lz2203', text: '¿Qué compra también?',
            optionen: [ { wert: 'a', text: 'Tomates y cebollas.' }, { wert: 'b', text: 'Papas y tomates.' }, { wert: 'c', text: 'Naranjas.' } ], loesung: 'a' },
          { id: 'lz2204', text: '¿Qué no hay hoy?',
            optionen: [ { wert: 'a', text: 'Cebollas.' }, { wert: 'b', text: 'Papas.' }, { wert: 'c', text: 'Manzanas.' } ], loesung: 'b' },
          { id: 'lz2205', text: '¿Cuánto paga en total?',
            optionen: [ { wert: 'a', text: '54 pesos.' }, { wert: 'b', text: '25 pesos.' }, { wert: 'c', text: '45 pesos.' } ], loesung: 'c' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Sprachbausteine', aufgaben: [
      { id: 'lz3a1', art: 'baustein', nummer: 'Aufgabe 6',
        anweisung: 'Lies den Text. Welches Wort passt in jede Lücke? Wähle a, b oder c.',
        text:
`¡Hola!

Me [1] Sofía y [2] de Alemania, de Hamburgo. Ahora vivo en Bogotá. [3] treinta años y trabajo en una oficina [4] centro.

Todos los días [5] el metro a las ocho. Normalmente [6] a la una con mis compañeros.

Los fines de semana me [7] bailar salsa. Bogotá [8] muy grande y bonita, pero a veces hace frío.

El próximo mes [9] a visitar a mi familia en Alemania. ¿Y tú? ¿[10] te llamas?

Sofía`,
        fragen: [
          { id: 'lz3101', text: 'Lücke 1',  optionen: [ { wert: 'a', text: 'llama' }, { wert: 'b', text: 'llamo' }, { wert: 'c', text: 'llamas' } ], loesung: 'b' },
          { id: 'lz3102', text: 'Lücke 2',  optionen: [ { wert: 'a', text: 'soy' }, { wert: 'b', text: 'estoy' }, { wert: 'c', text: 'tengo' } ], loesung: 'a' },
          { id: 'lz3103', text: 'Lücke 3',  optionen: [ { wert: 'a', text: 'Soy' }, { wert: 'b', text: 'Estoy' }, { wert: 'c', text: 'Tengo' } ], loesung: 'c' },
          { id: 'lz3104', text: 'Lücke 4',  optionen: [ { wert: 'a', text: 'del' }, { wert: 'b', text: 'de el' }, { wert: 'c', text: 'al' } ], loesung: 'a' },
          { id: 'lz3105', text: 'Lücke 5',  optionen: [ { wert: 'a', text: 'toma' }, { wert: 'b', text: 'tomamos' }, { wert: 'c', text: 'tomo' } ], loesung: 'c' },
          { id: 'lz3106', text: 'Lücke 6',  optionen: [ { wert: 'a', text: 'almuerzo' }, { wert: 'b', text: 'almorzo' }, { wert: 'c', text: 'almuerza' } ], loesung: 'a' },
          { id: 'lz3107', text: 'Lücke 7',  optionen: [ { wert: 'a', text: 'gustan' }, { wert: 'b', text: 'gusta' }, { wert: 'c', text: 'gusto' } ], loesung: 'b' },
          { id: 'lz3108', text: 'Lücke 8',  optionen: [ { wert: 'a', text: 'está' }, { wert: 'b', text: 'hay' }, { wert: 'c', text: 'es' } ], loesung: 'c' },
          { id: 'lz3109', text: 'Lücke 9',  optionen: [ { wert: 'a', text: 'voy' }, { wert: 'b', text: 'vas' }, { wert: 'c', text: 'va' } ], loesung: 'a' },
          { id: 'lz3110', text: 'Lücke 10', optionen: [ { wert: 'a', text: 'Qué' }, { wert: 'b', text: 'Cómo' }, { wert: 'c', text: 'Dónde' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Schreiben', aufgaben: [
      { id: 'lz4a1', art: 'schreiben', nummer: 'Aufgabe 7',
        anweisung: 'Schreibe den Text auf Spanisch. Diese Aufgabe wird nicht automatisch bewertet.',
        fragen: [ {
          id: 'lz4101',
          auftrag: 'Du hast eine neue Brieffreundin in Mexiko, Daniela. Schreib ihr eine erste Nachricht und stell dich vor.',
          punkte: [ 'Wie heißt du, woher kommst du, wie alt bist du?', 'Wo wohnst du und was machst du beruflich?', 'Was machst du gern in deiner Freizeit?', 'Stell ihr eine Frage.' ],
          umfang: 'Schreibe 30 bis 40 Wörter.',
          auftragZiel: 'Tienes una nueva amiga por correspondencia en México, Daniela. Escríbele un primer mensaje y preséntate.',
          punkteZiel: [ '¿Cómo te llamas, de dónde eres, cuántos años tienes?', '¿Dónde vives y a qué te dedicas?', '¿Qué te gusta hacer en tu tiempo libre?', 'Hazle una pregunta.' ],
          umfangZiel: 'Entre 30 y 40 palabras.',
          kriterienZiel: [
            'Hay saludo y despedida.',
            'Se tratan los cuatro puntos.',
            'ser, estar y tener se usan bien (soy de…, vivo en…, tengo … años).',
            'La pregunta final es una pregunta de verdad (con ¿ y ?).',
            'El mensaje se entiende sin tener que preguntar.'
          ],
          kriterien: [
            'Anrede und Gruß sind vorhanden.',
            'Alle vier Punkte sind behandelt.',
            'ser, estar und tener sitzen (soy de…, vivo en…, tengo … años).',
            'Die Frage am Schluss ist eine echte Frage (mit ¿ und ?).',
            'Die Nachricht ist ohne Nachfragen verständlich.'
          ],
          muster:
`¡Hola, Daniela!

Me llamo Jonas, soy alemán y tengo treinta y dos años. Vivo en Leipzig y soy ingeniero.

En mi tiempo libre me gusta nadar y cocinar. Los fines de semana voy a la montaña.

¿Y tú? ¿Qué te gusta hacer?

Un saludo,
Jonas`
        } ] }
    ] },

    { id: 't5', art: 'sprechen', name: 'Sprechen', aufgaben: [
      { id: 'lz5a1', art: 'sprechen', nummer: 'Aufgabe 8',
        anweisung: 'Sprich auf Spanisch und nimm dich auf. Diese Aufgabe wird nicht automatisch bewertet.',
        fragen: [ {
          id: 'lz5101', dauer: 90,
          auftrag: 'Stell dich vor, wie im ersten Teil der mündlichen DELE-Prüfung A1.',
          punkte: [ 'Name, Alter und Herkunft', 'Wohnort', 'Sprachen', 'Beruf oder Studium', 'Familie', 'Hobbys' ],
          umfang: 'Sprich 30 bis 60 Sekunden.',
          auftragZiel: 'Preséntate, como en la primera parte de la prueba oral del DELE A1.',
          punkteZiel: [ 'Nombre, edad y origen', 'Dónde vive', 'Idiomas', 'Profesión o estudios', 'Familia', 'Aficiones' ],
          umfangZiel: 'Habla entre 30 y 60 segundos.',
          kriterienZiel: [
            'Aparecen al menos cinco de los seis puntos.',
            'Las frases son sencillas pero completas (soy, vivo, tengo, hablo…).',
            'Los números (la edad) se dicen bien.',
            'La pronunciación no dificulta la comprensión.',
            'Se entiende todo sin tener que preguntar.'
          ],
          kriterien: [
            'Mindestens fünf der sechs Punkte kommen vor.',
            'Die Sätze sind einfach, aber vollständig (soy, vivo, tengo, hablo…).',
            'Zahlen wie das Alter sind richtig gesagt.',
            'Die Aussprache stört das Verständnis nicht.',
            'Man versteht alles ohne Nachfragen.'
          ],
          muster:
`Hola, me llamo Anna. Tengo veintinueve años y soy de Alemania, de Colonia.

Vivo en Berlín, en un departamento pequeño.

Hablo alemán, inglés y un poco de español.

Soy enfermera y trabajo en un hospital.

Tengo un hermano y una hermana. Mis padres viven en Colonia.

En mi tiempo libre me gusta correr, leer y bailar.`
        } ] }
    ] }
  ]
});
