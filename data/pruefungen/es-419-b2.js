/* Prüfung B2 · Spanisch (Lateinamerika) · Zwischenstopp nach Tag 90 — Kursabschluss

   Vorbild DELE B2. Verlangt wird, was ab Tag 61 dazukam: Perfecto und
   Pluscuamperfecto de Subjuntivo, Passiv-Ersatzformen, zweiteilige
   Konnektoren, Futuro und Condicional Perfecto, Nominalstil, Distanzierung. */

PRUEFUNG('es-419', {
  id: 'p-es-419-b2', nachTag: 90, niveau: 'B2',
  name: 'Prüfung B2', vorbild: 'DELE B2', bestehen: 60, dauer: 75,
  teile: [
    { id: 't1', art: 'lesen', name: 'Leseverstehen', aufgaben: [
      { id: 'lc1a1', art: 'rf', nummer: 'Aufgabe 1',
        anweisung: 'Lies den Text. Sind die Aussagen richtig oder falsch?',
        text:
`Durante años se dio por hecho que la memoria funcionaba como una grabadora: lo vivido quedaba archivado y bastaba con recuperarlo. Investigaciones recientes han demostrado que no es así. Cada vez que recordamos algo, lo reconstruimos, y en esa reconstrucción intervienen lo que sabemos hoy y lo que esperamos encontrar.

De ahí que dos personas que vivieron lo mismo puedan contarlo de maneras incompatibles sin que ninguna mienta. No se trata de mala fe, sino del modo en que opera el recuerdo.

Esto tiene consecuencias prácticas. En los tribunales, el testimonio de un testigo sigue teniendo mucho peso, aunque se sabe desde hace tiempo que es menos fiable de lo que parece. Algunos especialistas proponen que se acompañe siempre de otras pruebas; otros advierten que, de aplicarse ese criterio con rigor, muchos casos quedarían sin resolver.`,
        fragen: [
          { id: 'lc1101', text: 'Hoy se considera que la memoria archiva los hechos sin cambiarlos.', loesung: 'f' },
          { id: 'lc1102', text: 'Al recordar, influye lo que sabemos en el presente.',                loesung: 'r' },
          { id: 'lc1103', text: 'Dos versiones distintas implican que alguien miente.',               loesung: 'f' },
          { id: 'lc1104', text: 'El testimonio de un testigo pesa mucho en los tribunales.',          loesung: 'r' },
          { id: 'lc1105', text: 'Todos los especialistas coinciden en la solución.',                  loesung: 'f' }
        ] },
      { id: 'lc1a2', art: 'zuordnen', nummer: 'Aufgabe 2',
        anweisung: 'Fünf Aussagen, sechs Textausschnitte. Welcher Ausschnitt passt zu welcher Aussage? Einer bleibt übrig.',
        optionen: [
          { wert: 'A', text: '«Lo que más me costó no fue el idioma, sino entender cuándo una pregunta era de verdad una pregunta.»' },
          { wert: 'B', text: '«Volví después de doce años y descubrí que el barrio seguía igual; el que había cambiado era yo.»' },
          { wert: 'C', text: '«Al principio traducía mentalmente cada frase. Un día me di cuenta de que ya no lo hacía.»' },
          { wert: 'D', text: '«Nos advirtieron que el primer invierno sería duro, pero nadie mencionó lo largas que se hacen las tardes.»' },
          { wert: 'E', text: '«Mi hija corrige mi acento desde que entró a la escuela. No sé si reírme u ofenderme.»' },
          { wert: 'F', text: '«Firmé el contrato sin leerlo entero. Me confié, y esa fue mi lección más cara.»' }
        ],
        fragen: [
          { id: 'lc1201', text: 'Habla de un momento en que el idioma dejó de ser un esfuerzo consciente.', loesung: 'C' },
          { id: 'lc1202', text: 'Menciona una dificultad cultural, no lingüística.',                        loesung: 'A' },
          { id: 'lc1203', text: 'Describe el regreso a un lugar conocido.',                                 loesung: 'B' },
          { id: 'lc1204', text: 'Se refiere a algo del clima que no le habían advertido.',                  loesung: 'D' },
          { id: 'lc1205', text: 'Habla de la relación entre generaciones dentro de la familia.',            loesung: 'E' }
        ] },
      { id: 'lc1a3', art: 'mc', nummer: 'Aufgabe 3',
        anweisung: 'Lies den Text und wähle die richtige Antwort: a, b oder c.',
        text:
`Se calcula que una de cada tres frutas producidas en la región se pierde antes de llegar al consumidor. No se pierde en el campo, como suele creerse, sino en el transporte y el almacenamiento.

Las cooperativas que han invertido en cadena de frío reportan pérdidas muy inferiores. El problema es que esa inversión resulta inalcanzable para el pequeño productor, que además no tiene con qué garantizar un crédito.

Algunos gobiernos han impulsado centros de acopio compartidos. Donde se han puesto en marcha, los resultados son buenos; donde solo se anunciaron, la situación no ha variado. De haberse ampliado el programa hace cinco años, hoy se hablaría de otra cosa.`,
        fragen: [
          { id: 'lc1301', text: '¿Dónde se produce sobre todo la pérdida?',
            optionen: [ { wert: 'a', text: 'En el campo.' }, { wert: 'b', text: 'En el transporte y el almacenamiento.' }, { wert: 'c', text: 'En los mercados.' } ], loesung: 'b' },
          { id: 'lc1302', text: '¿Qué reportan las cooperativas con cadena de frío?',
            optionen: [ { wert: 'a', text: 'Pérdidas mucho menores.' }, { wert: 'b', text: 'Las mismas pérdidas.' }, { wert: 'c', text: 'Más gastos que beneficios.' } ], loesung: 'a' },
          { id: 'lc1303', text: '¿Por qué el pequeño productor no invierte?',
            optionen: [ { wert: 'a', text: 'Porque no le interesa.' }, { wert: 'b', text: 'Porque no cuenta con garantía para un crédito.' }, { wert: 'c', text: 'Porque la ley se lo impide.' } ], loesung: 'b' },
          { id: 'lc1304', text: '¿Qué diferencia marca el texto entre unos programas y otros?',
            optionen: [ { wert: 'a', text: 'Entre los que se aplicaron y los que solo se anunciaron.' }, { wert: 'b', text: 'Entre los públicos y los privados.' }, { wert: 'c', text: 'Entre el norte y el sur.' } ], loesung: 'a' },
          { id: 'lc1305', text: 'La última frase expresa…',
            optionen: [ { wert: 'a', text: 'una certeza sobre el futuro.' }, { wert: 'b', text: 'una condición irreal sobre el pasado.' }, { wert: 'c', text: 'una orden.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Hörverstehen', aufgaben: [
      { id: 'lc2a1', art: 'hoeren', nummer: 'Aufgabe 4',
        anweisung: 'Höre die Nachricht und beantworte die Fragen.',
        audio: 'Buenas tardes, le hablo de la agencia. Quería comentarle que el vuelo que tenía reservado fue cancelado por la aerolínea. Ya le conseguimos un lugar en el de la mañana siguiente, sin costo adicional. De no convenirle, podríamos gestionarle el reembolso completo, aunque eso tardaría unas tres semanas. Le agradecería que me confirmara antes de las seis, porque después ya no podría garantizarle el lugar.',
        fragen: [
          { id: 'lc2101', text: 'El vuelo fue cancelado por la aerolínea.',            loesung: 'r' },
          { id: 'lc2102', text: 'El nuevo vuelo tiene un costo adicional.',            loesung: 'f' },
          { id: 'lc2103', text: 'El reembolso sería inmediato.',                       loesung: 'f' },
          { id: 'lc2104', text: 'Hay que confirmar antes de las seis.',                loesung: 'r' },
          { id: 'lc2105', text: 'Después de esa hora el lugar ya no está garantizado.', loesung: 'r' }
        ] },
      { id: 'lc2a2', art: 'hoeren', nummer: 'Aufgabe 5',
        anweisung: 'Höre den Beitrag und wähle die richtige Antwort: a, b oder c.',
        audio: 'En el programa de hoy hablamos del descanso. Los especialistas insisten en que no basta con dormir ocho horas: lo decisivo es la regularidad. Quien se acuesta y se levanta siempre a la misma hora descansa mejor que quien duerme mucho el fin de semana para compensar. Se recomienda, además, evitar las pantallas en la última hora del día. Y una advertencia: el café de media tarde sigue haciendo efecto a la hora de dormir, aunque uno no lo note.',
        fragen: [
          { id: 'lc2201', text: 'Según los especialistas, lo decisivo es…',
            optionen: [ { wert: 'a', text: 'dormir ocho horas exactas.' }, { wert: 'b', text: 'la regularidad del horario.' }, { wert: 'c', text: 'dormir de día.' } ], loesung: 'b' },
          { id: 'lc2202', text: '¿Qué dicen de dormir mucho el fin de semana?',
            optionen: [ { wert: 'a', text: 'Que compensa la semana.' }, { wert: 'b', text: 'Que es lo más recomendable.' }, { wert: 'c', text: 'Que descansa menos que un horario regular.' } ], loesung: 'c' },
          { id: 'lc2203', text: '¿Qué se recomienda evitar?',
            optionen: [ { wert: 'a', text: 'Las pantallas en la última hora.' }, { wert: 'b', text: 'La cena.' }, { wert: 'c', text: 'El ejercicio en la mañana.' } ], loesung: 'a' },
          { id: 'lc2204', text: '¿Qué advertencia hacen sobre el café?',
            optionen: [ { wert: 'a', text: 'Que ya no hace efecto en la tarde.' }, { wert: 'b', text: 'Que sigue haciendo efecto aunque no se note.' }, { wert: 'c', text: 'Que ayuda a dormir.' } ], loesung: 'b' },
          { id: 'lc2205', text: 'El tono del programa es…',
            optionen: [ { wert: 'a', text: 'divulgativo y con recomendaciones.' }, { wert: 'b', text: 'polémico y crítico.' }, { wert: 'c', text: 'publicitario.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Sprachbausteine', aufgaben: [
      { id: 'lc3a1', art: 'baustein', nummer: 'Aufgabe 6',
        anweisung: 'Lies den Text. Welche Form passt in jede Lücke? Wähle a, b oder c.',
        text:
`Estimado señor Ruiz:

Le escribo a propósito del informe que nos [1] la semana pasada. Lamento que no [2] recibir antes nuestra respuesta.

Nos llamó la atención que el análisis [3] sin considerar los datos del trimestre anterior. De [4] incluido, las conclusiones habrían sido distintas.

No solo nos parece incompleto, [5] también difícil de defender ante el consejo. Se [6] que la revisión se entregue antes del viernes; de lo contrario, no habrá tiempo material.

Por otra parte, [7] que el equipo ya había advertido este punto en marzo. Si esto es así, habría [8] corregirse entonces.

Quedo a la espera de que nos [9] su versión revisada. En cuanto la [10], convocaremos la reunión.

Atentamente,
L. Herrera`,
        fragen: [
          { id: 'lc3101', text: 'Lücke 1',  optionen: [ { wert: 'a', text: 'envió' }, { wert: 'b', text: 'enviara' }, { wert: 'c', text: 'enviaría' } ], loesung: 'a' },
          { id: 'lc3102', text: 'Lücke 2',  optionen: [ { wert: 'a', text: 'ha podido' }, { wert: 'b', text: 'haya podido' }, { wert: 'c', text: 'podrá' } ], loesung: 'b' },
          { id: 'lc3103', text: 'Lücke 3',  optionen: [ { wert: 'a', text: 'se hizo' }, { wert: 'b', text: 'se haya hecho' }, { wert: 'c', text: 'se hará' } ], loesung: 'b' },
          { id: 'lc3104', text: 'Lücke 4',  optionen: [ { wert: 'a', text: 'haberse' }, { wert: 'b', text: 'habiendo' }, { wert: 'c', text: 'haber' } ], loesung: 'a' },
          { id: 'lc3105', text: 'Lücke 5',  optionen: [ { wert: 'a', text: 'pero' }, { wert: 'b', text: 'aunque' }, { wert: 'c', text: 'sino' } ], loesung: 'c' },
          { id: 'lc3106', text: 'Lücke 6',  optionen: [ { wert: 'a', text: 'requiere' }, { wert: 'b', text: 'requieren' }, { wert: 'c', text: 'requerirá' } ], loesung: 'a' },
          { id: 'lc3107', text: 'Lücke 7',  optionen: [ { wert: 'a', text: 'se dice' }, { wert: 'b', text: 'se diga' }, { wert: 'c', text: 'dice' } ], loesung: 'a' },
          { id: 'lc3108', text: 'Lücke 8',  optionen: [ { wert: 'a', text: 'debido' }, { wert: 'b', text: 'deber' }, { wert: 'c', text: 'debiendo' } ], loesung: 'a' },
          { id: 'lc3109', text: 'Lücke 9',  optionen: [ { wert: 'a', text: 'envía' }, { wert: 'b', text: 'envíe' }, { wert: 'c', text: 'enviaba' } ], loesung: 'b' },
          { id: 'lc3110', text: 'Lücke 10', optionen: [ { wert: 'a', text: 'recibimos' }, { wert: 'b', text: 'recibamos' }, { wert: 'c', text: 'recibíamos' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Schreiben', aufgaben: [
      { id: 'lc4a1', art: 'schreiben', nummer: 'Aufgabe 7',
        anweisung: 'Schreibe den Text auf Spanisch. Diese Aufgabe wird nicht automatisch bewertet.',
        fragen: [ {
          id: 'lc4101',
          auftrag: 'In deiner Stadt soll eine vielbefahrene Straße im Zentrum für Autos gesperrt werden. Schreibe einen Leserbrief an eine Zeitung.',
          punkte: [
            'Nenne deinen Standpunkt klar.',
            'Führe mindestens zwei Argumente an und belege sie.',
            'Geh auf einen Einwand der Gegenseite ein und entkräfte ihn.',
            'Schließe mit einem Vorschlag.'
          ],
          umfang: 'Schreibe 150–180 Wörter.',
          auftragZiel: 'En tu ciudad se plantea cerrar al tráfico una calle muy transitada del centro. Escribe una carta al director de un periódico.',
          punkteZiel: [
            'Expón tu postura con claridad.',
            'Da al menos dos argumentos y susténtalos.',
            'Recoge una objeción de quienes opinan lo contrario y respóndela.',
            'Termina con una propuesta.'
          ],
          umfangZiel: 'Entre 150 y 180 palabras.',
          kriterienZiel: [
            'La postura se entiende desde el principio.',
            'Hay al menos dos argumentos, no solo opiniones.',
            'Se recoge y se responde una objeción contraria.',
            'El texto está articulado con conectores (sin embargo, por lo tanto, ahora bien…).',
            'El registro es adecuado para un periódico.',
            'El texto tiene al menos 150 palabras.'
          ],
          kriterien: [
            'Der Standpunkt ist von Anfang an klar.',
            'Es gibt mindestens zwei Argumente, nicht nur Meinungen.',
            'Ein Einwand der Gegenseite wird aufgegriffen und beantwortet.',
            'Der Text ist mit Konnektoren gegliedert (sin embargo, por lo tanto, ahora bien…).',
            'Das Register passt zu einer Zeitung.',
            'Der Text hat mindestens 150 Wörter.'
          ],
          muster:
`Señor director:

Leí con interés la propuesta de cerrar al tráfico la calle Bolívar. Estoy a favor, y me permito explicar por qué.

En primer lugar, se trata de la calle con más accidentes de peatones del centro; los datos municipales del año pasado no dejan lugar a dudas. En segundo lugar, las ciudades que han peatonalizado su casco histórico registran más visitantes, no menos.

Se objeta que el comercio saldría perjudicado. Es una preocupación legítima, pero conviene mirar lo ocurrido en otras ciudades: tras unos meses difíciles, la facturación se recuperó y en varios casos superó la anterior. Lo que sí hace falta es acompañar la medida con transporte público suficiente.

Propongo, por lo tanto, que el cierre se aplique primero los fines de semana y que se evalúe al cabo de un año con cifras públicas. Así nadie tendría que decidir a ciegas.

Atentamente,
Dennis Z.`
        } ] }
    ] }
  ]
});
