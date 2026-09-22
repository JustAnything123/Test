/* Prüfung A2 · Spanisch (Spanien) · Zwischenstopp nach Tag 33

   Aufbau nach dem Vorbild des DELE A2. Es werden ausschließlich Wortschatz
   und Grammatik aus den Tagen 1–33 verlangt: ser/estar, hay, gustar, Objekt-
   pronomen, Imperativ, Pretérito perfecto, Indefinido, Imperfecto,
   ir a + Infinitiv, hay que / tener que, Verneinung.

   Drei Teile werden automatisch bewertet (35 Punkte), der Schreibteil nicht —
   dafür gibt es Kriterien und eine Musterlösung. */

PRUEFUNG('es-es', {
  id: 'p-es-es-a2',
  nachTag: 33,
  niveau: 'A2',
  name: 'Prüfung A2',
  vorbild: 'DELE A2',
  bestehen: 60,
  dauer: 45,

  teile: [

    /* ================= Teil 1 — Leseverstehen (15 Punkte) ============== */
    {
      id: 't1', art: 'lesen', name: 'Leseverstehen',
      aufgaben: [

        {
          id: 't1a1', art: 'rf', nummer: 'Aufgabe 1',
          anweisung: 'Lies die E-Mail. Sind die Aussagen richtig oder falsch?',
          text:
`¡Hola, Lucía!

¿Qué tal estás? Yo estoy muy bien. La semana pasada me mudé a un piso nuevo en el centro de Valencia. Es pequeño pero muy bonito y tiene un balcón grande. Antes vivía en las afueras y tardaba una hora en llegar al trabajo. Ahora voy andando en quince minutos.

El sábado voy a hacer una fiesta para enseñar el piso a mis amigos. ¿Puedes venir? Empezamos a las ocho. Si quieres, puedes traer a tu hermano.

Un abrazo,
Marta`,
          fragen: [
            { id: 'q1101', text: 'Marta vive ahora en el centro de Valencia.',      loesung: 'r' },
            { id: 'q1102', text: 'El piso nuevo de Marta es grande.',               loesung: 'f' },
            { id: 'q1103', text: 'Antes Marta tardaba más tiempo en ir al trabajo.', loesung: 'r' },
            { id: 'q1104', text: 'Marta va al trabajo en autobús.',                 loesung: 'f' },
            { id: 'q1105', text: 'La fiesta es el domingo.',                        loesung: 'f' }
          ]
        },

        {
          id: 't1a2', art: 'zuordnen', nummer: 'Aufgabe 2',
          anweisung: 'Fünf Personen suchen etwas. Welche Anzeige passt zu wem? Eine Anzeige bleibt übrig.',
          optionen: [
            { wert: 'A', text: 'Clases de cocina tradicional española. Martes y jueves por la tarde. Grupos pequeños.' },
            { wert: 'B', text: 'Gimnasio abierto desde las 6:00. Clases de 6:30 a 8:00, antes de tu jornada.' },
            { wert: 'C', text: 'Se alquila habitación en piso compartido, a cinco minutos de la facultad. 300 € al mes.' },
            { wert: 'D', text: 'Restaurante busca personal para sábados y domingos. No es necesaria experiencia.' },
            { wert: 'E', text: 'Paseo perros y los cuido en mi casa. También los fines de semana.' },
            { wert: 'F', text: 'Vendo bicicleta de montaña, casi nueva, poco uso. 150 €.' }
          ],
          fragen: [
            { id: 'q1201', text: 'Ana quiere aprender a preparar platos españoles.',           loesung: 'A' },
            { id: 'q1202', text: 'Carlos busca una habitación barata cerca de la universidad.', loesung: 'C' },
            { id: 'q1203', text: 'Elena necesita a alguien que cuide a su perro el fin de semana.', loesung: 'E' },
            { id: 'q1204', text: 'Diego quiere hacer deporte por la mañana, antes del trabajo.', loesung: 'B' },
            { id: 'q1205', text: 'Sofía busca un trabajo para los fines de semana.',            loesung: 'D' }
          ]
        },

        {
          id: 't1a3', art: 'mc', nummer: 'Aufgabe 3',
          anweisung: 'Lies den Text und wähle die richtige Antwort: a, b oder c.',
          text:
`En España la gente suele comer entre las dos y las tres de la tarde. La cena es más tarde que en otros países europeos: normalmente entre las nueve y las diez. Por eso muchas tiendas pequeñas cierran a mediodía y abren otra vez por la tarde.

Este horario sorprende a muchos turistas. Cuando llegan a un restaurante a las siete de la tarde, a veces la cocina todavía está cerrada. Los camareros les recomiendan tomar algo en la barra y volver más tarde.`,
          fragen: [
            { id: 'q1301', text: '¿A qué hora comen normalmente los españoles?',
              optionen: [ { wert: 'a', text: 'Entre las doce y la una.' },
                          { wert: 'b', text: 'Entre las dos y las tres.' },
                          { wert: 'c', text: 'Entre las cuatro y las cinco.' } ], loesung: 'b' },
            { id: 'q1302', text: 'La cena en España es…',
              optionen: [ { wert: 'a', text: 'más temprano que en otros países europeos.' },
                          { wert: 'b', text: 'a la misma hora que en otros países europeos.' },
                          { wert: 'c', text: 'más tarde que en otros países europeos.' } ], loesung: 'c' },
            { id: 'q1303', text: '¿Por qué cierran las tiendas pequeñas a mediodía?',
              optionen: [ { wert: 'a', text: 'Porque es la hora de comer.' },
                          { wert: 'b', text: 'Porque no tienen clientes nunca.' },
                          { wert: 'c', text: 'Porque los dueños están de vacaciones.' } ], loesung: 'a' },
            { id: 'q1304', text: 'Si un turista llega a un restaurante a las siete de la tarde…',
              optionen: [ { wert: 'a', text: 'puede cenar enseguida.' },
                          { wert: 'b', text: 'la cocina puede estar todavía cerrada.' },
                          { wert: 'c', text: 'el restaurante siempre está lleno.' } ], loesung: 'b' },
            { id: 'q1305', text: '¿Qué recomiendan los camareros?',
              optionen: [ { wert: 'a', text: 'Ir a otro restaurante.' },
                          { wert: 'b', text: 'Esperar en la puerta.' },
                          { wert: 'c', text: 'Tomar algo y volver más tarde.' } ], loesung: 'c' }
          ]
        }
      ]
    },

    /* ================= Teil 2 — Hörverstehen (10 Punkte) =============== */
    {
      id: 't2', art: 'hoeren', name: 'Hörverstehen',
      aufgaben: [

        {
          id: 't2a1', art: 'hoeren', nummer: 'Aufgabe 4',
          anweisung: 'Höre die Nachricht und beantworte die Fragen. Du darfst so oft hören, wie du möchtest.',
          audio: 'Hola, soy Pablo. Te llamo porque el domingo vamos a la playa con Marta y Jorge. Salimos a las nueve de la mañana desde mi casa. Yo llevo el coche, así que no necesitas coger el tren. Trae bañador y algo de comer. Si llueve, vamos al museo. Llámame esta noche, por favor.',
          fragen: [
            { id: 'q2101', text: 'Van a la playa el sábado.',        loesung: 'f' },
            { id: 'q2102', text: 'Salen a las nueve de la mañana.',  loesung: 'r' },
            { id: 'q2103', text: 'Pablo lleva el coche.',            loesung: 'r' },
            { id: 'q2104', text: 'Hay que coger el tren.',           loesung: 'f' },
            { id: 'q2105', text: 'Si llueve, van al museo.',         loesung: 'r' }
          ]
        },

        {
          id: 't2a2', art: 'hoeren', nummer: 'Aufgabe 5',
          anweisung: 'Höre die Durchsage und wähle die richtige Antwort: a, b oder c.',
          audio: 'Atención, por favor. El tren con destino a Sevilla sale del andén número cinco con diez minutos de retraso. Los pasajeros con billete para el vagón número tres deben dirigirse al final del andén. Gracias por su comprensión.',
          fragen: [
            { id: 'q2201', text: '¿De qué andén sale el tren?',
              optionen: [ { wert: 'a', text: 'Del andén tres.' },
                          { wert: 'b', text: 'Del andén cinco.' },
                          { wert: 'c', text: 'Del andén diez.' } ], loesung: 'b' },
            { id: 'q2202', text: '¿Adónde va el tren?',
              optionen: [ { wert: 'a', text: 'A Sevilla.' },
                          { wert: 'b', text: 'A Valencia.' },
                          { wert: 'c', text: 'A Granada.' } ], loesung: 'a' },
            { id: 'q2203', text: '¿Qué pasa con el tren?',
              optionen: [ { wert: 'a', text: 'Sale antes de la hora.' },
                          { wert: 'b', text: 'Sale con retraso.' },
                          { wert: 'c', text: 'No sale hoy.' } ], loesung: 'b' },
            { id: 'q2204', text: '¿Cuántos minutos de retraso tiene?',
              optionen: [ { wert: 'a', text: 'Tres minutos.' },
                          { wert: 'b', text: 'Cinco minutos.' },
                          { wert: 'c', text: 'Diez minutos.' } ], loesung: 'c' },
            { id: 'q2205', text: '¿Adónde deben ir los pasajeros del vagón tres?',
              optionen: [ { wert: 'a', text: 'Al final del andén.' },
                          { wert: 'b', text: 'A la cafetería.' },
                          { wert: 'c', text: 'A la taquilla.' } ], loesung: 'a' }
          ]
        }
      ]
    },

    /* ================= Teil 3 — Sprachbausteine (10 Punkte) ============ */
    {
      id: 't3', art: 'bausteine', name: 'Sprachbausteine',
      aufgaben: [
        {
          id: 't3a1', art: 'baustein', nummer: 'Aufgabe 6',
          anweisung: 'Lies den Text. Welches Wort passt in jede Lücke? Wähle a, b oder c.',
          text:
`Querido Juan:

Te escribo desde Granada. [1] aquí desde el lunes y me [2] mucho la ciudad. El hotel [3] en el centro, muy cerca de la catedral. Ayer [4] a la Alhambra con un grupo. Cuando [5] pequeño, mi padre me [6] muchas veces fotos de este lugar, pero verlo es diferente.

Mañana [7] a ir a las cuevas del Sacromonte. Todavía no [8] flamenco en directo. [9] que reservar antes, porque hay mucha gente.

¿[10] venir conmigo el año que viene?

Un abrazo,
Ana`,
          fragen: [
            { id: 'q3101', text: 'Lücke 1',
              optionen: [ { wert: 'a', text: 'Estoy' }, { wert: 'b', text: 'Soy' }, { wert: 'c', text: 'Hay' } ], loesung: 'a' },
            { id: 'q3102', text: 'Lücke 2',
              optionen: [ { wert: 'a', text: 'gustan' }, { wert: 'b', text: 'gusta' }, { wert: 'c', text: 'gusto' } ], loesung: 'b' },
            { id: 'q3103', text: 'Lücke 3',
              optionen: [ { wert: 'a', text: 'es' }, { wert: 'b', text: 'hay' }, { wert: 'c', text: 'está' } ], loesung: 'c' },
            { id: 'q3104', text: 'Lücke 4',
              optionen: [ { wert: 'a', text: 'fui' }, { wert: 'b', text: 'iba' }, { wert: 'c', text: 'voy' } ], loesung: 'a' },
            { id: 'q3105', text: 'Lücke 5',
              optionen: [ { wert: 'a', text: 'fui' }, { wert: 'b', text: 'era' }, { wert: 'c', text: 'soy' } ], loesung: 'b' },
            { id: 'q3106', text: 'Lücke 6',
              optionen: [ { wert: 'a', text: 'enseñó' }, { wert: 'b', text: 'enseña' }, { wert: 'c', text: 'enseñaba' } ], loesung: 'c' },
            { id: 'q3107', text: 'Lücke 7',
              optionen: [ { wert: 'a', text: 'voy' }, { wert: 'b', text: 'iré' }, { wert: 'c', text: 'fui' } ], loesung: 'a' },
            { id: 'q3108', text: 'Lücke 8',
              optionen: [ { wert: 'a', text: 'vi' }, { wert: 'b', text: 'he visto' }, { wert: 'c', text: 'veía' } ], loesung: 'b' },
            { id: 'q3109', text: 'Lücke 9',
              optionen: [ { wert: 'a', text: 'Es' }, { wert: 'b', text: 'Tiene' }, { wert: 'c', text: 'Hay' } ], loesung: 'c' },
            { id: 'q3110', text: 'Lücke 10',
              optionen: [ { wert: 'a', text: 'Quieren' }, { wert: 'b', text: 'Quieres' }, { wert: 'c', text: 'Queréis' } ], loesung: 'b' }
          ]
        }
      ]
    },

    /* ================= Teil 4 — Schreiben (nicht automatisch) ========== */
    {
      id: 't4', art: 'schreiben', name: 'Schreiben',
      aufgaben: [
        {
          id: 't4a1', art: 'schreiben', nummer: 'Aufgabe 7',
          anweisung: 'Schreibe die Antwort auf Spanisch. Diese Aufgabe wird nicht automatisch bewertet.',
          fragen: [
            {
              id: 'q4101',
              auftrag: 'Dein Freund Miguel aus Madrid hat dir geschrieben und dich eingeladen, ihn im Sommer zu besuchen. Antworte ihm.',
              punkte: [
                'Bedanke dich für die Einladung.',
                'Sag ihm, wann du kommen kannst.',
                'Frag ihn, wie das Wetter in Madrid im Sommer ist.'
              ],
              umfang: 'Schreibe 60–80 Wörter.',

              /* Dieselbe Aufgabe auf Spanisch. Der Prüfer ist Spanisch-
                 sprecher und bekommt den Prüfer-Bildschirm in seiner
                 Sprache — mit einer deutschen Aufgabenstellung könnte er
                 nicht beurteilen, ob der Text zur Aufgabe passt. */
              auftragZiel: 'Tu amigo Miguel, de Madrid, te ha escrito y te ha invitado a visitarlo en verano. Respóndele.',
              punkteZiel: [
                'Dale las gracias por la invitación.',
                'Dile cuándo puedes ir.',
                'Pregúntale qué tiempo hace en Madrid en verano.'
              ],
              umfangZiel: 'Entre 60 y 80 palabras.',
              kriterienZiel: [
                'Hay saludo y despedida.',
                'Se tratan los tres puntos.',
                'El texto tiene al menos 60 palabras.',
                'Se entiende sin tener que preguntar.',
                'Los tiempos verbales encajan (presente y futuro con ir a + infinitivo).'
              ],

              kriterien: [
                'Anrede und Grußformel sind vorhanden.',
                'Alle drei Punkte sind behandelt.',
                'Der Text hat mindestens 60 Wörter.',
                'Der Text ist ohne Nachfragen verständlich.',
                'Die Zeiten passen (Gegenwart und Zukunft mit ir a + Infinitiv).'
              ],
              muster:
`Querido Miguel:

¡Muchas gracias por tu invitación! Me alegro mucho.

Este verano tengo vacaciones en agosto, así que puedo ir del diez al veinte. Voy a coger el tren, porque no me gusta volar. Si te va bien, llego un sábado por la tarde.

Una pregunta: ¿qué tiempo hace en Madrid en agosto? ¿Hace mucho calor? No sé qué ropa tengo que llevar.

¡Hasta pronto!

Un abrazo,
Dennis`
            }
          ]
        }
      ]
    }
  ]
});
