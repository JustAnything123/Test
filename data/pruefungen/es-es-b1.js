/* Prüfung B1 · Spanisch (Spanien) · Zwischenstopp nach Tag 60 — Kursabschluss

   Vorbild DELE B1. Verlangt wird, was bis Tag 60 vorkam: Subjuntivo in allen
   Auslösern, Condicional, Bedingungssätze Typ 1–3, Pluscuamperfecto,
   indirekte Rede, Relativsätze, B1-Konnektoren. */

PRUEFUNG('es-es', {
  id: 'p-es-es-b1',
  nachTag: 60,
  niveau: 'B1',
  name: 'Prüfung B1',
  vorbild: 'DELE B1',
  bestehen: 60,
  dauer: 60,

  teile: [
    {
      id: 't1', art: 'lesen', name: 'Leseverstehen',
      aufgaben: [
        {
          id: 'eb1a1', art: 'rf', nummer: 'Aufgabe 1',
          anweisung: 'Lies den Text. Sind die Aussagen richtig oder falsch?',
          text:
`Cuando terminé la carrera, pensaba que encontraría trabajo enseguida. Mandé más de cincuenta solicitudes y solo me llamaron de tres empresas. Si me hubiera preparado mejor las entrevistas, quizá habría tenido más suerte.

Al final acepté un puesto que no tenía nada que ver con lo que había estudiado. Me dijeron que sería algo temporal, pero llevo ya cuatro años y me gusta lo que hago. Aprendí que no siempre hay que seguir el camino que uno se imagina.

Ahora doy talleres a estudiantes que están a punto de terminar. Les digo que preparen bien las entrevistas y que no se desanimen si al principio no sale.`,
          fragen: [
            { id: 'eb1101', text: 'El autor encontró trabajo poco después de terminar la carrera.', loesung: 'f' },
            { id: 'eb1102', text: 'Solo tres empresas respondieron a sus solicitudes.',              loesung: 'r' },
            { id: 'eb1103', text: 'El puesto que aceptó correspondía a lo que había estudiado.',     loesung: 'f' },
            { id: 'eb1104', text: 'Lleva cuatro años en ese trabajo y está contento.',               loesung: 'r' },
            { id: 'eb1105', text: 'Hoy aconseja a estudiantes que van a terminar sus estudios.',     loesung: 'r' }
          ]
        },
        {
          id: 'eb1a2', art: 'zuordnen', nummer: 'Aufgabe 2',
          anweisung: 'Fünf Personen suchen einen Kurs. Welches Angebot passt zu wem? Eines bleibt übrig.',
          optionen: [
            { wert: 'A', text: 'Taller de escritura creativa. Doce sesiones. Al final cada participante publica un relato corto.' },
            { wert: 'B', text: 'Curso de preparación para entrevistas de trabajo. Simulacros grabados y comentario individual.' },
            { wert: 'C', text: 'Conversación en grupos de cuatro. Solo hablar, sin gramática. Niveles B1 y B2.' },
            { wert: 'D', text: 'Informática para mayores. Ritmo tranquilo, material en papel, repetimos lo que haga falta.' },
            { wert: 'E', text: 'Fotografía de naturaleza. Salidas los sábados por la mañana. Se necesita cámara propia.' },
            { wert: 'F', text: 'Cocina vegetariana para principiantes. Cada clase, un menú completo que te llevas a casa.' }
          ],
          fragen: [
            { id: 'eb1201', text: 'Pilar quiere perder el miedo a hablar y no le interesa estudiar más reglas.',  loesung: 'C' },
            { id: 'eb1202', text: 'A Tomás le ofrecen entrevistas y quiere practicarlas antes.',                   loesung: 'B' },
            { id: 'eb1203', text: 'Rosa, de 72 años, quiere aprender a usar el ordenador sin prisas.',             loesung: 'D' },
            { id: 'eb1204', text: 'Ignacio escribe desde hace años y le gustaría publicar algo por fin.',          loesung: 'A' },
            { id: 'eb1205', text: 'Nuria quiere aprovechar los fines de semana para salir al campo con su cámara.', loesung: 'E' }
          ]
        },
        {
          id: 'eb1a3', art: 'mc', nummer: 'Aufgabe 3',
          anweisung: 'Lies den Text und wähle die richtige Antwort: a, b oder c.',
          text:
`El teletrabajo llegó de golpe y muchas empresas lo mantuvieron después. Los empleados dicen que ganan tiempo porque ya no se desplazan, y que se concentran mejor por la mañana. Sin embargo, casi la mitad reconoce que le cuesta separar el trabajo de la vida privada.

Los jefes, por su parte, temían que bajara el rendimiento. Los estudios no lo confirman: la productividad se mantiene o incluso sube. Lo que sí se resiente es la relación entre compañeros, sobre todo para quien acaba de entrar en la empresa.

Por eso la mayoría de las empresas ha optado por un modelo mixto: dos o tres días en casa y el resto en la oficina.`,
          fragen: [
            { id: 'eb1301', text: '¿Qué ventaja mencionan los empleados?',
              optionen: [ { wert: 'a', text: 'Que ganan tiempo al no desplazarse.' },
                          { wert: 'b', text: 'Que cobran más que antes.' },
                          { wert: 'c', text: 'Que trabajan menos horas.' } ], loesung: 'a' },
            { id: 'eb1302', text: '¿Qué les cuesta a casi la mitad de ellos?',
              optionen: [ { wert: 'a', text: 'Concentrarse por la mañana.' },
                          { wert: 'b', text: 'Separar el trabajo de la vida privada.' },
                          { wert: 'c', text: 'Manejar los programas nuevos.' } ], loesung: 'b' },
            { id: 'eb1303', text: '¿Qué temían los jefes?',
              optionen: [ { wert: 'a', text: 'Que subieran los costes.' },
                          { wert: 'b', text: 'Que los empleados se fueran.' },
                          { wert: 'c', text: 'Que bajara el rendimiento.' } ], loesung: 'c' },
            { id: 'eb1304', text: 'Según los estudios, la productividad…',
              optionen: [ { wert: 'a', text: 'se mantiene o sube.' },
                          { wert: 'b', text: 'baja claramente.' },
                          { wert: 'c', text: 'no se ha podido medir.' } ], loesung: 'a' },
            { id: 'eb1305', text: '¿Quién nota más la falta de contacto?',
              optionen: [ { wert: 'a', text: 'Los jefes.' },
                          { wert: 'b', text: 'Quien acaba de entrar en la empresa.' },
                          { wert: 'c', text: 'Los que viven lejos.' } ], loesung: 'b' }
          ]
        }
      ]
    },

    {
      id: 't2', art: 'hoeren', name: 'Hörverstehen',
      aufgaben: [
        {
          id: 'eb2a1', art: 'hoeren', nummer: 'Aufgabe 4',
          anweisung: 'Höre die Nachricht und beantworte die Fragen. Du darfst so oft hören, wie du möchtest.',
          audio: 'Hola Carmen, soy Álvaro. Te llamo porque el curso que querías hacer ya está completo. Me han dicho que si te apuntas a la lista de espera, te avisarían en cuanto quedara una plaza. Yo que tú lo haría hoy mismo. Por cierto, la profesora es la misma que tuvimos el año pasado, así que ya sabes que merece la pena. Llámame cuando puedas.',
          fragen: [
            { id: 'eb2101', text: 'El curso todavía tiene plazas libres.',             loesung: 'f' },
            { id: 'eb2102', text: 'Álvaro le aconseja apuntarse a la lista de espera.', loesung: 'r' },
            { id: 'eb2103', text: 'Le recomienda esperar unos días antes de decidir.',  loesung: 'f' },
            { id: 'eb2104', text: 'La profesora ya les dio clase el año pasado.',       loesung: 'r' },
            { id: 'eb2105', text: 'Álvaro quiere que Carmen le llame.',                 loesung: 'r' }
          ]
        },
        {
          id: 'eb2a2', art: 'hoeren', nummer: 'Aufgabe 5',
          anweisung: 'Höre die Durchsage und wähle die richtige Antwort: a, b oder c.',
          audio: 'Estimados viajeros: debido a unas obras en la vía, el tren de las once y cuarto con destino a Barcelona saldrá hoy desde la estación de autobuses. Un servicio gratuito los llevará hasta allí; sale cada diez minutos desde la puerta principal. Rogamos que se presenten con al menos media hora de antelación. Disculpen las molestias.',
          fragen: [
            { id: 'eb2201', text: '¿Por qué cambia la salida?',
              optionen: [ { wert: 'a', text: 'Por una huelga.' },
                          { wert: 'b', text: 'Por obras en la vía.' },
                          { wert: 'c', text: 'Por el mal tiempo.' } ], loesung: 'b' },
            { id: 'eb2202', text: '¿Desde dónde sale hoy el tren?',
              optionen: [ { wert: 'a', text: 'Desde la estación de autobuses.' },
                          { wert: 'b', text: 'Desde el andén dos.' },
                          { wert: 'c', text: 'Desde el aeropuerto.' } ], loesung: 'a' },
            { id: 'eb2203', text: '¿Cuánto cuesta el servicio de enlace?',
              optionen: [ { wert: 'a', text: 'Dos euros.' },
                          { wert: 'b', text: 'Depende del billete.' },
                          { wert: 'c', text: 'Nada, es gratuito.' } ], loesung: 'c' },
            { id: 'eb2204', text: '¿Cada cuánto sale ese servicio?',
              optionen: [ { wert: 'a', text: 'Cada diez minutos.' },
                          { wert: 'b', text: 'Cada media hora.' },
                          { wert: 'c', text: 'Cada hora.' } ], loesung: 'a' },
            { id: 'eb2205', text: '¿Con cuánta antelación hay que presentarse?',
              optionen: [ { wert: 'a', text: 'Con diez minutos.' },
                          { wert: 'b', text: 'Con media hora como mínimo.' },
                          { wert: 'c', text: 'Con dos horas.' } ], loesung: 'b' }
          ]
        }
      ]
    },

    {
      id: 't3', art: 'bausteine', name: 'Sprachbausteine',
      aufgaben: [
        {
          id: 'eb3a1', art: 'baustein', nummer: 'Aufgabe 6',
          anweisung: 'Lies den Text. Welche Form passt in jede Lücke? Wähle a, b oder c.',
          text:
`Hola Marta:

Te escribo para contarte lo del piso. Espero que [1] bien la mudanza, porque aquí ha sido un caos.

Cuando llegamos, los del transporte ya [2] las cajas en el portal y se habían ido. Si nos [3] avisado, habríamos pedido el día libre. Al final subimos todo nosotros; me dijeron que [4] paciencia, y la tuve.

Ojalá [5] más espacio en la cocina, pero no me quejo. En cuanto [6] los muebles, te mando fotos. Es una pena que no [7] venir el fin de semana pasado.

Aunque [8] un poco pequeño, el piso me encanta. Buscaba algo que [9] luz y cerca del metro, y lo he encontrado. Si [10] tiempo el sábado, ven a verlo.

Un beso,
Nuria`,
          fragen: [
            { id: 'eb3101', text: 'Lücke 1',
              optionen: [ { wert: 'a', text: 'fue' }, { wert: 'b', text: 'fuera' }, { wert: 'c', text: 'haya ido' } ], loesung: 'c' },
            { id: 'eb3102', text: 'Lücke 2',
              optionen: [ { wert: 'a', text: 'habían dejado' }, { wert: 'b', text: 'dejaban' }, { wert: 'c', text: 'han dejado' } ], loesung: 'a' },
            { id: 'eb3103', text: 'Lücke 3',
              optionen: [ { wert: 'a', text: 'han' }, { wert: 'b', text: 'hubieran' }, { wert: 'c', text: 'habrían' } ], loesung: 'b' },
            { id: 'eb3104', text: 'Lücke 4',
              optionen: [ { wert: 'a', text: 'tengo' }, { wert: 'b', text: 'tenga' }, { wert: 'c', text: 'tuviera' } ], loesung: 'c' },
            { id: 'eb3105', text: 'Lücke 5',
              optionen: [ { wert: 'a', text: 'hay' }, { wert: 'b', text: 'hubiera' }, { wert: 'c', text: 'habrá' } ], loesung: 'b' },
            { id: 'eb3106', text: 'Lücke 6',
              optionen: [ { wert: 'a', text: 'llegan' }, { wert: 'b', text: 'lleguen' }, { wert: 'c', text: 'llegaron' } ], loesung: 'b' },
            { id: 'eb3107', text: 'Lücke 7',
              optionen: [ { wert: 'a', text: 'pudiste' }, { wert: 'b', text: 'podías' }, { wert: 'c', text: 'pudieras' } ], loesung: 'c' },
            { id: 'eb3108', text: 'Lücke 8',
              optionen: [ { wert: 'a', text: 'es' }, { wert: 'b', text: 'sea' }, { wert: 'c', text: 'fuera' } ], loesung: 'b' },
            { id: 'eb3109', text: 'Lücke 9',
              optionen: [ { wert: 'a', text: 'tiene' }, { wert: 'b', text: 'tuviera' }, { wert: 'c', text: 'tuviese' } ], loesung: 'b' },
            { id: 'eb3110', text: 'Lücke 10',
              optionen: [ { wert: 'a', text: 'tienes' }, { wert: 'b', text: 'tengas' }, { wert: 'c', text: 'tuvieras' } ], loesung: 'a' }
          ]
        }
      ]
    },

    {
      id: 't4', art: 'schreiben', name: 'Schreiben',
      aufgaben: [
        {
          id: 'eb4a1', art: 'schreiben', nummer: 'Aufgabe 7',
          anweisung: 'Schreibe den Text auf Spanisch. Diese Aufgabe wird nicht automatisch bewertet.',
          fragen: [
            {
              id: 'eb4101',
              auftrag: 'Du hast in einem Sprachkurs einen Platz bekommen, kannst aber doch nicht teilnehmen. Schreibe eine E-Mail an die Sprachschule.',
              punkte: [
                'Erkläre, warum du absagen musst.',
                'Frag, ob du das Geld zurückbekommst oder in einen späteren Kurs wechseln kannst.',
                'Bitte um eine schriftliche Bestätigung.'
              ],
              umfang: 'Schreibe 100–130 Wörter.',
              auftragZiel: 'Has conseguido una plaza en un curso de idiomas, pero al final no vas a poder asistir. Escribe un correo a la escuela.',
              punkteZiel: [
                'Explica por qué tienes que anular.',
                'Pregunta si te devuelven el dinero o si puedes cambiar a un curso posterior.',
                'Pide una confirmación por escrito.'
              ],
              umfangZiel: 'Entre 100 y 130 palabras.',
              kriterienZiel: [
                'Hay saludo y despedida adecuados para un correo formal.',
                'Se tratan los tres puntos.',
                'Se usa usted de forma coherente.',
                'El texto tiene al menos 100 palabras.',
                'Aparece al menos una forma de subjuntivo o de condicional usada con sentido.'
              ],
              kriterien: [
                'Anrede und Grußformel passen zu einer förmlichen Mail.',
                'Alle drei Punkte sind behandelt.',
                'Die Höflichkeitsform (usted) wird durchgehalten.',
                'Der Text hat mindestens 100 Wörter.',
                'Mindestens eine Subjuntivo- oder Condicional-Form wird sinnvoll verwendet.'
              ],
              muster:
`Estimados señores:

Me puse en contacto con ustedes la semana pasada y conseguí una plaza en el curso de nivel B1 que empieza en octubre.

Lamentablemente tengo que anular mi inscripción, porque mi empresa me ha cambiado el turno y ya no podría llegar a tiempo a las clases.

Quería preguntarles si sería posible recuperar el importe o, si lo prefieren, cambiar mi plaza a un curso posterior. Me vendría muy bien el de enero.

Les agradecería que me confirmaran por escrito la anulación.

Muchas gracias por su ayuda.

Un cordial saludo,
Dennis Z.`
            }
          ]
        }
      ]
    }
  ]
});
