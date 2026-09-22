/* Prüfung A2 · Spanisch (Lateinamerika) · Zwischenstopp nach Tag 33

   Vorbild DELE A2. Wortschatz und Formen wie im Kurs: ustedes statt vosotros,
   el carro, la papa, el jugo, el celular, el departamento. */

PRUEFUNG('es-419', {
  id: 'p-es-419-a2',
  nachTag: 33,
  niveau: 'A2',
  name: 'Prüfung A2',
  vorbild: 'DELE A2',
  bestehen: 60,
  dauer: 45,

  teile: [
    {
      id: 't1', art: 'lesen', name: 'Leseverstehen',
      aufgaben: [
        {
          id: 'la1a1', art: 'rf', nummer: 'Aufgabe 1',
          anweisung: 'Lies die Nachricht. Sind die Aussagen richtig oder falsch?',
          text:
`¡Hola, Camila!

¿Cómo están todos por allá? Nosotros muy bien. El mes pasado nos cambiamos a un departamento más grande, cerca del parque. Antes vivíamos en el centro, pero había mucho ruido y casi nunca abríamos las ventanas.

Ahora Julián va caminando a la escuela, son diez minutos. Yo sigo yendo en carro al trabajo porque queda lejos.

El sábado hacemos una comida en la casa nueva. ¿Se animan a venir? Empezamos como a la una. Si quieren, traigan a los niños.

Un abrazo,
Valeria`,
          fragen: [
            { id: 'la1101', text: 'Valeria y su familia se cambiaron de departamento.', loesung: 'r' },
            { id: 'la1102', text: 'Antes vivían cerca del parque.',                      loesung: 'f' },
            { id: 'la1103', text: 'En el centro había mucho ruido.',                     loesung: 'r' },
            { id: 'la1104', text: 'Julián va a la escuela en carro.',                    loesung: 'f' },
            { id: 'la1105', text: 'La comida es el sábado a la una.',                    loesung: 'r' }
          ]
        },
        {
          id: 'la1a2', art: 'zuordnen', nummer: 'Aufgabe 2',
          anweisung: 'Fünf Personen suchen etwas. Welche Anzeige passt zu wem? Eine bleibt übrig.',
          optionen: [
            { wert: 'A', text: 'Clases de cocina mexicana. Martes y jueves en la tarde. Grupos de seis personas.' },
            { wert: 'B', text: 'Gimnasio abierto desde las cinco de la mañana. Clases antes de la jornada laboral.' },
            { wert: 'C', text: 'Se renta cuarto en departamento compartido, a tres cuadras de la universidad.' },
            { wert: 'D', text: 'Restaurante busca meseros para fines de semana. No se necesita experiencia.' },
            { wert: 'E', text: 'Paseo perros y los cuido en mi casa, también sábados y domingos.' },
            { wert: 'F', text: 'Vendo bicicleta casi nueva, poco uso. Precio a tratar.' }
          ],
          fragen: [
            { id: 'la1201', text: 'Ana quiere aprender a preparar platillos mexicanos.',        loesung: 'A' },
            { id: 'la1202', text: 'Carlos busca un cuarto barato cerca de la universidad.',     loesung: 'C' },
            { id: 'la1203', text: 'Elena necesita quién cuide a su perro el fin de semana.',    loesung: 'E' },
            { id: 'la1204', text: 'Diego quiere hacer ejercicio antes de entrar al trabajo.',   loesung: 'B' },
            { id: 'la1205', text: 'Sofía busca trabajo solo para los fines de semana.',         loesung: 'D' }
          ]
        },
        {
          id: 'la1a3', art: 'mc', nummer: 'Aufgabe 3',
          anweisung: 'Lies den Text und wähle die richtige Antwort: a, b oder c.',
          text:
`En muchos países de América Latina la comida principal es a mediodía, entre la una y las tres de la tarde. La cena suele ser más ligera: un caldo, unas quesadillas o simplemente café con pan.

Los visitantes se sorprenden cuando llegan a un restaurante a las seis de la tarde y ven que casi no hay gente. Los meseros les explican que la hora fuerte es más tarde, y les ofrecen algo de tomar mientras esperan.

En las ciudades grandes, sin embargo, cada vez hay más lugares abiertos todo el día.`,
          fragen: [
            { id: 'la1301', text: '¿Cuándo es la comida principal?',
              optionen: [ { wert: 'a', text: 'Entre la una y las tres de la tarde.' },
                          { wert: 'b', text: 'Entre las nueve y las diez de la noche.' },
                          { wert: 'c', text: 'Muy temprano en la mañana.' } ], loesung: 'a' },
            { id: 'la1302', text: 'La cena normalmente es…',
              optionen: [ { wert: 'a', text: 'más pesada que la comida.' },
                          { wert: 'b', text: 'más ligera.' },
                          { wert: 'c', text: 'igual que la comida.' } ], loesung: 'b' },
            { id: 'la1303', text: '¿Qué pasa a las seis de la tarde en los restaurantes?',
              optionen: [ { wert: 'a', text: 'Están llenos.' },
                          { wert: 'b', text: 'Están cerrados.' },
                          { wert: 'c', text: 'Casi no hay gente.' } ], loesung: 'c' },
            { id: 'la1304', text: '¿Qué hacen los meseros?',
              optionen: [ { wert: 'a', text: 'Les ofrecen algo de tomar.' },
                          { wert: 'b', text: 'Les piden que regresen mañana.' },
                          { wert: 'c', text: 'Les cobran antes.' } ], loesung: 'a' },
            { id: 'la1305', text: '¿Qué cambia en las ciudades grandes?',
              optionen: [ { wert: 'a', text: 'Ya nadie cena.' },
                          { wert: 'b', text: 'Hay más lugares abiertos todo el día.' },
                          { wert: 'c', text: 'Los restaurantes cierran más temprano.' } ], loesung: 'b' }
          ]
        }
      ]
    },

    {
      id: 't2', art: 'hoeren', name: 'Hörverstehen',
      aufgaben: [
        {
          id: 'la2a1', art: 'hoeren', nummer: 'Aufgabe 4',
          anweisung: 'Höre die Nachricht und beantworte die Fragen. Du darfst so oft hören, wie du möchtest.',
          audio: 'Hola, habla Pablo. Te llamo porque el domingo vamos a la playa con Marta y Jorge. Salimos a las nueve de la mañana de mi casa. Yo llevo el carro, así que no necesitas tomar el camión. Trae traje de baño y algo de comer. Si llueve, mejor vamos al museo. Márcame en la noche, por favor.',
          fragen: [
            { id: 'la2101', text: 'Van a la playa el sábado.',        loesung: 'f' },
            { id: 'la2102', text: 'Salen a las nueve de la mañana.',  loesung: 'r' },
            { id: 'la2103', text: 'Pablo lleva el carro.',            loesung: 'r' },
            { id: 'la2104', text: 'Hay que tomar el camión.',         loesung: 'f' },
            { id: 'la2105', text: 'Si llueve, van al museo.',         loesung: 'r' }
          ]
        },
        {
          id: 'la2a2', art: 'hoeren', nummer: 'Aufgabe 5',
          anweisung: 'Höre die Durchsage und wähle die richtige Antwort: a, b oder c.',
          audio: 'Atención, por favor. El autobús con destino a Guadalajara sale de la plataforma número siete con quince minutos de retraso. Los pasajeros que viajen con equipaje grande deben pasar antes por el mostrador dos. Gracias por su comprensión.',
          fragen: [
            { id: 'la2201', text: '¿De qué plataforma sale el autobús?',
              optionen: [ { wert: 'a', text: 'De la dos.' }, { wert: 'b', text: 'De la siete.' }, { wert: 'c', text: 'De la quince.' } ], loesung: 'b' },
            { id: 'la2202', text: '¿Adónde va el autobús?',
              optionen: [ { wert: 'a', text: 'A Guadalajara.' }, { wert: 'b', text: 'A Monterrey.' }, { wert: 'c', text: 'A Puebla.' } ], loesung: 'a' },
            { id: 'la2203', text: '¿Qué pasa con el autobús?',
              optionen: [ { wert: 'a', text: 'Sale antes.' }, { wert: 'b', text: 'Sale con retraso.' }, { wert: 'c', text: 'Ya salió.' } ], loesung: 'b' },
            { id: 'la2204', text: '¿Cuántos minutos de retraso tiene?',
              optionen: [ { wert: 'a', text: 'Cinco.' }, { wert: 'b', text: 'Diez.' }, { wert: 'c', text: 'Quince.' } ], loesung: 'c' },
            { id: 'la2205', text: '¿Quién debe pasar por el mostrador dos?',
              optionen: [ { wert: 'a', text: 'Quien viaje con equipaje grande.' },
                          { wert: 'b', text: 'Todos los pasajeros.' },
                          { wert: 'c', text: 'Los que viajen con niños.' } ], loesung: 'a' }
          ]
        }
      ]
    },

    {
      id: 't3', art: 'bausteine', name: 'Sprachbausteine',
      aufgaben: [
        {
          id: 'la3a1', art: 'baustein', nummer: 'Aufgabe 6',
          anweisung: 'Lies den Text. Welches Wort passt in jede Lücke? Wähle a, b oder c.',
          text:
`Querido Juan:

Te escribo desde Oaxaca. [1] aquí desde el lunes y me [2] mucho la ciudad. El hotel [3] en el centro, muy cerca del mercado. Ayer [4] a Monte Albán con un grupo. Cuando [5] niño, mi papá me [6] muchas veces fotos de ese lugar, pero verlo es distinto.

Mañana [7] a ir a Hierve el Agua. Todavía no [8] un mezcal de verdad. [9] que reservar antes, porque va mucha gente.

¿[10] venir conmigo el año que viene?

Un abrazo,
Ana`,
          fragen: [
            { id: 'la3101', text: 'Lücke 1',
              optionen: [ { wert: 'a', text: 'Estoy' }, { wert: 'b', text: 'Soy' }, { wert: 'c', text: 'Hay' } ], loesung: 'a' },
            { id: 'la3102', text: 'Lücke 2',
              optionen: [ { wert: 'a', text: 'gustan' }, { wert: 'b', text: 'gusta' }, { wert: 'c', text: 'gusto' } ], loesung: 'b' },
            { id: 'la3103', text: 'Lücke 3',
              optionen: [ { wert: 'a', text: 'es' }, { wert: 'b', text: 'hay' }, { wert: 'c', text: 'está' } ], loesung: 'c' },
            { id: 'la3104', text: 'Lücke 4',
              optionen: [ { wert: 'a', text: 'fui' }, { wert: 'b', text: 'iba' }, { wert: 'c', text: 'voy' } ], loesung: 'a' },
            { id: 'la3105', text: 'Lücke 5',
              optionen: [ { wert: 'a', text: 'fui' }, { wert: 'b', text: 'era' }, { wert: 'c', text: 'soy' } ], loesung: 'b' },
            { id: 'la3106', text: 'Lücke 6',
              optionen: [ { wert: 'a', text: 'enseñó' }, { wert: 'b', text: 'enseña' }, { wert: 'c', text: 'enseñaba' } ], loesung: 'c' },
            { id: 'la3107', text: 'Lücke 7',
              optionen: [ { wert: 'a', text: 'voy' }, { wert: 'b', text: 'iré' }, { wert: 'c', text: 'fui' } ], loesung: 'a' },
            { id: 'la3108', text: 'Lücke 8',
              optionen: [ { wert: 'a', text: 'probé' }, { wert: 'b', text: 'he probado' }, { wert: 'c', text: 'probaba' } ], loesung: 'b' },
            { id: 'la3109', text: 'Lücke 9',
              optionen: [ { wert: 'a', text: 'Es' }, { wert: 'b', text: 'Tiene' }, { wert: 'c', text: 'Hay' } ], loesung: 'c' },
            { id: 'la3110', text: 'Lücke 10',
              optionen: [ { wert: 'a', text: 'Quieren' }, { wert: 'b', text: 'Quieres' }, { wert: 'c', text: 'Queremos' } ], loesung: 'b' }
          ]
        }
      ]
    },

    {
      id: 't4', art: 'schreiben', name: 'Schreiben',
      aufgaben: [
        {
          id: 'la4a1', art: 'schreiben', nummer: 'Aufgabe 7',
          anweisung: 'Schreibe die Antwort auf Spanisch. Diese Aufgabe wird nicht automatisch bewertet.',
          fragen: [
            {
              id: 'la4101',
              auftrag: 'Dein Freund Mateo aus Bogotá hat dir geschrieben und dich eingeladen, ihn in den Ferien zu besuchen. Antworte ihm.',
              punkte: [
                'Bedanke dich für die Einladung.',
                'Sag, wann du kommen kannst.',
                'Frag, wie das Wetter in Bogotá zu der Zeit ist.'
              ],
              umfang: 'Schreibe 60–80 Wörter.',
              auftragZiel: 'Tu amigo Mateo, de Bogotá, te escribió y te invitó a visitarlo en las vacaciones. Respóndele.',
              punkteZiel: [
                'Dale las gracias por la invitación.',
                'Dile cuándo puedes ir.',
                'Pregúntale qué clima hace en Bogotá en esa época.'
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
`Querido Mateo:

¡Muchas gracias por la invitación! Me dio mucho gusto tu mensaje.

Tengo vacaciones en julio, así que puedo ir del cinco al quince. Voy a llegar en avión, porque el viaje en autobús es muy largo. Si te queda bien, llego un lunes en la tarde.

Una pregunta: ¿qué clima hace en Bogotá en julio? ¿Llueve mucho? No sé qué ropa llevar.

¡Nos vemos pronto!

Un abrazo,
Dennis`
            }
          ]
        }
      ]
    }
  ]
});
