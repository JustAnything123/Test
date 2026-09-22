/* Prüfung B1 · Spanisch (Lateinamerika) · Zwischenstopp nach Tag 60 */

PRUEFUNG('es-419', {
  id: 'p-es-419-b1', nachTag: 60, niveau: 'B1',
  name: 'Prüfung B1', vorbild: 'DELE B1', bestehen: 60, dauer: 60,
  teile: [
    { id: 't1', art: 'lesen', name: 'Leseverstehen', aufgaben: [
      { id: 'lb1a1', art: 'rf', nummer: 'Aufgabe 1',
        anweisung: 'Lies den Text. Sind die Aussagen richtig oder falsch?',
        text:
`Cuando terminé la carrera creí que iba a encontrar trabajo de inmediato. Mandé como cincuenta solicitudes y solo me llamaron de tres lugares. Si me hubiera preparado mejor las entrevistas, tal vez habría tenido más suerte.

Al final acepté un puesto que no tenía nada que ver con lo que estudié. Me dijeron que sería algo temporal, pero ya llevo cuatro años y me gusta lo que hago.

Ahora doy talleres a estudiantes que están por terminar. Les digo que preparen bien las entrevistas y que no se desanimen si al principio no sale.`,
        fragen: [
          { id: 'lb1101', text: 'El autor encontró trabajo poco después de terminar.',        loesung: 'f' },
          { id: 'lb1102', text: 'Solo tres lugares respondieron a sus solicitudes.',          loesung: 'r' },
          { id: 'lb1103', text: 'El puesto correspondía a lo que había estudiado.',           loesung: 'f' },
          { id: 'lb1104', text: 'Lleva cuatro años en ese trabajo y está a gusto.',           loesung: 'r' },
          { id: 'lb1105', text: 'Hoy aconseja a estudiantes que están por terminar.',         loesung: 'r' }
        ] },
      { id: 'lb1a2', art: 'zuordnen', nummer: 'Aufgabe 2',
        anweisung: 'Fünf Personen suchen einen Kurs. Welches Angebot passt zu wem? Eines bleibt übrig.',
        optionen: [
          { wert: 'A', text: 'Taller de escritura creativa. Doce sesiones; al final cada quien publica un cuento corto.' },
          { wert: 'B', text: 'Curso de preparación para entrevistas. Simulacros grabados y comentario personalizado.' },
          { wert: 'C', text: 'Conversación en grupos de cuatro. Solo hablar, sin gramática. Niveles B1 y B2.' },
          { wert: 'D', text: 'Computación para adultos mayores. Ritmo tranquilo, material impreso, repetimos lo que haga falta.' },
          { wert: 'E', text: 'Fotografía de naturaleza. Salidas los sábados temprano. Se necesita cámara propia.' },
          { wert: 'F', text: 'Cocina vegetariana para principiantes. Cada clase, un menú completo para llevar.' }
        ],
        fragen: [
          { id: 'lb1201', text: 'Pilar quiere perder el miedo a hablar y no quiere más reglas.',  loesung: 'C' },
          { id: 'lb1202', text: 'A Tomás le ofrecen entrevistas y quiere practicarlas antes.',    loesung: 'B' },
          { id: 'lb1203', text: 'Rosa, de 72 años, quiere aprender a usar la computadora.',       loesung: 'D' },
          { id: 'lb1204', text: 'Ignacio escribe desde hace años y quisiera publicar algo.',      loesung: 'A' },
          { id: 'lb1205', text: 'Nuria quiere salir al campo los sábados con su cámara.',         loesung: 'E' }
        ] },
      { id: 'lb1a3', art: 'mc', nummer: 'Aufgabe 3',
        anweisung: 'Lies den Text und wähle die richtige Antwort: a, b oder c.',
        text:
`El trabajo remoto llegó de golpe y muchas empresas lo mantuvieron. Los empleados dicen que ganan tiempo porque ya no se trasladan y que se concentran mejor en la mañana. Sin embargo, casi la mitad reconoce que le cuesta separar el trabajo de la vida privada.

Los jefes temían que bajara el rendimiento. Los estudios no lo confirman: la productividad se mantiene o incluso sube. Lo que sí se resiente es la relación entre compañeros, sobre todo para quien acaba de entrar.

Por eso la mayoría optó por un modelo mixto: dos o tres días en casa y el resto en la oficina.`,
        fragen: [
          { id: 'lb1301', text: '¿Qué ventaja mencionan los empleados?',
            optionen: [ { wert: 'a', text: 'Que ganan tiempo al no trasladarse.' }, { wert: 'b', text: 'Que ganan más dinero.' }, { wert: 'c', text: 'Que trabajan menos horas.' } ], loesung: 'a' },
          { id: 'lb1302', text: '¿Qué le cuesta a casi la mitad?',
            optionen: [ { wert: 'a', text: 'Concentrarse en la mañana.' }, { wert: 'b', text: 'Separar trabajo y vida privada.' }, { wert: 'c', text: 'Usar los programas.' } ], loesung: 'b' },
          { id: 'lb1303', text: '¿Qué temían los jefes?',
            optionen: [ { wert: 'a', text: 'Que subieran los costos.' }, { wert: 'b', text: 'Que renunciara la gente.' }, { wert: 'c', text: 'Que bajara el rendimiento.' } ], loesung: 'c' },
          { id: 'lb1304', text: 'Según los estudios, la productividad…',
            optionen: [ { wert: 'a', text: 'se mantiene o sube.' }, { wert: 'b', text: 'baja mucho.' }, { wert: 'c', text: 'no se pudo medir.' } ], loesung: 'a' },
          { id: 'lb1305', text: '¿Quién nota más la falta de contacto?',
            optionen: [ { wert: 'a', text: 'Los jefes.' }, { wert: 'b', text: 'Quien acaba de entrar.' }, { wert: 'c', text: 'Los que viven lejos.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Hörverstehen', aufgaben: [
      { id: 'lb2a1', art: 'hoeren', nummer: 'Aufgabe 4',
        anweisung: 'Höre die Nachricht und beantworte die Fragen.',
        audio: 'Hola Carmen, habla Álvaro. Te marco porque el curso que querías ya está lleno. Me dijeron que si te anotas en la lista de espera, te avisarían apenas se desocupara un lugar. Yo que tú lo haría hoy mismo. Por cierto, la maestra es la misma del año pasado, así que ya sabes que vale la pena. Márcame cuando puedas.',
        fragen: [
          { id: 'lb2101', text: 'El curso todavía tiene lugares libres.',              loesung: 'f' },
          { id: 'lb2102', text: 'Álvaro le aconseja anotarse en la lista de espera.',  loesung: 'r' },
          { id: 'lb2103', text: 'Le recomienda esperar unos días antes de decidir.',   loesung: 'f' },
          { id: 'lb2104', text: 'La maestra ya les dio clase el año pasado.',          loesung: 'r' },
          { id: 'lb2105', text: 'Álvaro quiere que Carmen le marque.',                 loesung: 'r' }
        ] },
      { id: 'lb2a2', art: 'hoeren', nummer: 'Aufgabe 5',
        anweisung: 'Höre die Durchsage und wähle die richtige Antwort: a, b oder c.',
        audio: 'Estimados pasajeros: debido a trabajos en la vía, el tren de las once y cuarto con destino a Veracruz saldrá hoy desde la central de autobuses. Un servicio gratuito los llevará hasta allá; sale cada diez minutos desde la puerta principal. Les pedimos presentarse con media hora de anticipación. Disculpen las molestias.',
        fragen: [
          { id: 'lb2201', text: '¿Por qué cambia la salida?',
            optionen: [ { wert: 'a', text: 'Por una huelga.' }, { wert: 'b', text: 'Por trabajos en la vía.' }, { wert: 'c', text: 'Por el clima.' } ], loesung: 'b' },
          { id: 'lb2202', text: '¿Desde dónde sale hoy el tren?',
            optionen: [ { wert: 'a', text: 'De la central de autobuses.' }, { wert: 'b', text: 'Del andén dos.' }, { wert: 'c', text: 'Del aeropuerto.' } ], loesung: 'a' },
          { id: 'lb2203', text: '¿Cuánto cuesta el servicio de enlace?',
            optionen: [ { wert: 'a', text: 'Veinte pesos.' }, { wert: 'b', text: 'Depende del boleto.' }, { wert: 'c', text: 'Nada, es gratuito.' } ], loesung: 'c' },
          { id: 'lb2204', text: '¿Cada cuánto sale ese servicio?',
            optionen: [ { wert: 'a', text: 'Cada diez minutos.' }, { wert: 'b', text: 'Cada media hora.' }, { wert: 'c', text: 'Cada hora.' } ], loesung: 'a' },
          { id: 'lb2205', text: '¿Con cuánta anticipación hay que presentarse?',
            optionen: [ { wert: 'a', text: 'Diez minutos.' }, { wert: 'b', text: 'Media hora.' }, { wert: 'c', text: 'Dos horas.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Sprachbausteine', aufgaben: [
      { id: 'lb3a1', art: 'baustein', nummer: 'Aufgabe 6',
        anweisung: 'Lies den Text. Welche Form passt in jede Lücke? Wähle a, b oder c.',
        text:
`Hola Marta:

Te escribo para contarte lo del departamento. Espero que te [1] bien la mudanza, porque aquí fue un caos.

Cuando llegamos, los de la mudanza ya [2] las cajas en la entrada y se habían ido. Si nos [3] avisado, habríamos pedido el día libre. Me dijeron que [4] paciencia, y la tuve.

Ojalá [5] más espacio en la cocina, pero no me quejo. En cuanto [6] los muebles, te mando fotos. Es una lástima que no [7] venir el fin de semana pasado.

Aunque [8] chico, el departamento me encanta. Buscaba algo que [9] luz y cerca del metro. Si [10] tiempo el sábado, ven a verlo.

Un beso,
Nuria`,
        fragen: [
          { id: 'lb3101', text: 'Lücke 1',  optionen: [ { wert: 'a', text: 'fue' }, { wert: 'b', text: 'fuera' }, { wert: 'c', text: 'haya ido' } ], loesung: 'c' },
          { id: 'lb3102', text: 'Lücke 2',  optionen: [ { wert: 'a', text: 'habían dejado' }, { wert: 'b', text: 'dejaban' }, { wert: 'c', text: 'han dejado' } ], loesung: 'a' },
          { id: 'lb3103', text: 'Lücke 3',  optionen: [ { wert: 'a', text: 'han' }, { wert: 'b', text: 'hubieran' }, { wert: 'c', text: 'habrían' } ], loesung: 'b' },
          { id: 'lb3104', text: 'Lücke 4',  optionen: [ { wert: 'a', text: 'tengo' }, { wert: 'b', text: 'tenga' }, { wert: 'c', text: 'tuviera' } ], loesung: 'c' },
          { id: 'lb3105', text: 'Lücke 5',  optionen: [ { wert: 'a', text: 'hay' }, { wert: 'b', text: 'hubiera' }, { wert: 'c', text: 'habrá' } ], loesung: 'b' },
          { id: 'lb3106', text: 'Lücke 6',  optionen: [ { wert: 'a', text: 'llegan' }, { wert: 'b', text: 'lleguen' }, { wert: 'c', text: 'llegaron' } ], loesung: 'b' },
          { id: 'lb3107', text: 'Lücke 7',  optionen: [ { wert: 'a', text: 'pudiste' }, { wert: 'b', text: 'podías' }, { wert: 'c', text: 'pudieras' } ], loesung: 'c' },
          { id: 'lb3108', text: 'Lücke 8',  optionen: [ { wert: 'a', text: 'es' }, { wert: 'b', text: 'sea' }, { wert: 'c', text: 'fuera' } ], loesung: 'b' },
          { id: 'lb3109', text: 'Lücke 9',  optionen: [ { wert: 'a', text: 'tiene' }, { wert: 'b', text: 'tuviera' }, { wert: 'c', text: 'tendrá' } ], loesung: 'b' },
          { id: 'lb3110', text: 'Lücke 10', optionen: [ { wert: 'a', text: 'tienes' }, { wert: 'b', text: 'tengas' }, { wert: 'c', text: 'tuvieras' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Schreiben', aufgaben: [
      { id: 'lb4a1', art: 'schreiben', nummer: 'Aufgabe 7',
        anweisung: 'Schreibe den Text auf Spanisch. Diese Aufgabe wird nicht automatisch bewertet.',
        fragen: [ {
          id: 'lb4101',
          auftrag: 'Du hast in einem Sprachkurs einen Platz bekommen, kannst aber doch nicht teilnehmen. Schreibe eine E-Mail an die Sprachschule.',
          punkte: [ 'Erkläre, warum du absagen musst.', 'Frag, ob du das Geld zurückbekommst oder wechseln kannst.', 'Bitte um eine schriftliche Bestätigung.' ],
          umfang: 'Schreibe 100–130 Wörter.',
          auftragZiel: 'Conseguiste un lugar en un curso de idiomas, pero al final no vas a poder asistir. Escribe un correo a la escuela.',
          punkteZiel: [ 'Explica por qué tienes que cancelar.', 'Pregunta si te devuelven el dinero o si puedes cambiarte a un curso posterior.', 'Pide una confirmación por escrito.' ],
          umfangZiel: 'Entre 100 y 130 palabras.',
          kriterienZiel: [
            'Hay saludo y despedida adecuados para un correo formal.',
            'Se tratan los tres puntos.', 'Se usa usted de forma coherente.',
            'El texto tiene al menos 100 palabras.',
            'Aparece al menos una forma de subjuntivo o de condicional usada con sentido.'
          ],
          kriterien: [
            'Anrede und Grußformel passen zu einer förmlichen Mail.',
            'Alle drei Punkte sind behandelt.', 'Die Höflichkeitsform (usted) wird durchgehalten.',
            'Der Text hat mindestens 100 Wörter.',
            'Mindestens eine Subjuntivo- oder Condicional-Form wird sinnvoll verwendet.'
          ],
          muster:
`Estimados señores:

Me puse en contacto con ustedes la semana pasada y conseguí un lugar en el curso de nivel B1 que empieza en octubre.

Lamentablemente tengo que cancelar mi inscripción, porque en mi trabajo me cambiaron el turno y ya no alcanzaría a llegar a tiempo a las clases.

Quería preguntarles si sería posible recuperar el importe o, si lo prefieren, cambiar mi lugar a un curso posterior. Me convendría mucho el de enero.

Les agradecería que me confirmaran la cancelación por escrito.

Muchas gracias por su apoyo.

Saludos cordiales,
Dennis Z.`
        } ] }
    ] }
  ]
});
