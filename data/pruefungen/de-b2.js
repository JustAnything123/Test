/* Prüfung B2 · Deutsch für Spanischsprachige · Zwischenstopp nach Tag 120 — Kursabschluss */

PRUEFUNG('de', {
  id: 'p-de-b2', nachTag: 120, niveau: 'B2',
  name: 'Examen B2', vorbild: 'Goethe-Zertifikat B2', bestehen: 60, dauer: 80,
  teile: [
    { id: 't1', art: 'lesen', name: 'Comprensión de lectura', aufgaben: [
      { id: 'dd1a1', art: 'rf', nummer: 'Tarea 1',
        anweisung: 'Lee el texto. ¿Las afirmaciones son verdaderas o falsas?',
        text:
`Lange galt das Gedächtnis als eine Art Aufnahmegerät: Erlebtes werde abgelegt und lasse sich später abrufen. Neuere Untersuchungen haben gezeigt, dass es sich anders verhält. Jedes Mal, wenn wir uns erinnern, setzen wir das Erinnerte neu zusammen — und dabei wirkt mit, was wir heute wissen und was wir zu finden erwarten.

Deshalb können zwei Menschen dasselbe erlebt haben und es unvereinbar schildern, ohne dass einer von beiden lügt. Es handelt sich nicht um böse Absicht, sondern um die Arbeitsweise der Erinnerung.

Das hat Folgen. Vor Gericht wiegt die Zeugenaussage nach wie vor schwer, obwohl seit Langem bekannt ist, dass sie weniger verlässlich ist, als sie wirkt. Manche Fachleute fordern, sie stets durch weitere Beweise zu stützen; andere geben zu bedenken, dass bei strenger Anwendung dieses Grundsatzes zahlreiche Fälle ungeklärt blieben.`,
        fragen: [
          { id: 'dd1101', text: 'Heute gilt das Gedächtnis als unveränderlicher Speicher.',      loesung: 'f' },
          { id: 'dd1102', text: 'Beim Erinnern wirkt heutiges Wissen mit.',                      loesung: 'r' },
          { id: 'dd1103', text: 'Abweichende Schilderungen bedeuten, dass jemand lügt.',         loesung: 'f' },
          { id: 'dd1104', text: 'Die Zeugenaussage hat vor Gericht weiterhin großes Gewicht.',   loesung: 'r' },
          { id: 'dd1105', text: 'Die Fachleute sind sich über die Lösung einig.',                loesung: 'f' }
        ] },
      { id: 'dd1a2', art: 'zuordnen', nummer: 'Tarea 2',
        anweisung: 'Cinco afirmaciones, seis fragmentos. ¿Cuál va con cuál? Sobra uno.',
        optionen: [
          { wert: 'A', text: '„Die Regel selbst war nie das Problem. Schwierig wurde es, wenn zwei Regeln gleichzeitig galten."' },
          { wert: 'B', text: '„Man riet mir, erst zu schweigen und zuzuhören. Im Nachhinein war das der beste Rat, den ich bekam."' },
          { wert: 'C', text: '„Ich hielt meine Unsicherheit für ein Zeichen mangelnder Begabung. Dabei war sie nur ein Zeichen von Anfang."' },
          { wert: 'D', text: '„Es hieß, der Abschluss öffne alle Türen. Geöffnet hat er genau eine — aber die richtige."' },
          { wert: 'E', text: '„Über Jahre habe ich Vokabeln gesammelt, ohne sie je zu benutzen. Das war verlorene Zeit."' },
          { wert: 'F', text: '„Der Kurs war teuer, und ich habe ihn abgebrochen. Trotzdem bereue ich die Anmeldung nicht."' }
        ],
        fragen: [
          { id: 'dd1201', text: 'Bewertet einen Ratschlag rückblickend positiv.',                 loesung: 'B' },
          { id: 'dd1202', text: 'Beschreibt ein Missverständnis über die eigene Begabung.',       loesung: 'C' },
          { id: 'dd1203', text: 'Relativiert eine übertriebene Erwartung, ohne zu klagen.',       loesung: 'D' },
          { id: 'dd1204', text: 'Nennt Schwierigkeiten, die erst beim Zusammentreffen entstehen.', loesung: 'A' },
          { id: 'dd1205', text: 'Erkennt eine eigene Fehlinvestition an Zeit an.',                loesung: 'E' }
        ] },
      { id: 'dd1a3', art: 'mc', nummer: 'Tarea 3',
        anweisung: 'Lee el texto y elige la respuesta correcta: a, b o c.',
        text:
`Schätzungen zufolge geht rund ein Drittel des erzeugten Obstes verloren, bevor es den Handel erreicht. Entgegen einer verbreiteten Annahme geschieht dies nicht auf dem Feld, sondern bei Transport und Lagerung.

Genossenschaften, die in eine durchgehende Kühlkette investiert haben, melden deutlich geringere Verluste. Das Problem besteht darin, dass eine solche Investition für kleine Erzeuger unerreichbar bleibt, zumal ihnen die Sicherheiten für einen Kredit fehlen.

Mehrere Länder haben gemeinsame Sammelstellen gefördert. Wo diese tatsächlich eingerichtet wurden, sind die Ergebnisse gut; wo es bei der Ankündigung blieb, hat sich nichts geändert. Wäre das Programm vor fünf Jahren ausgeweitet worden, stünde man heute anders da.`,
        fragen: [
          { id: 'dd1301', text: '¿Dónde se produce sobre todo la pérdida?',
            optionen: [ { wert: 'a', text: 'En el campo.' }, { wert: 'b', text: 'En transporte y almacenamiento.' }, { wert: 'c', text: 'En las tiendas.' } ], loesung: 'b' },
          { id: 'dd1302', text: '¿Qué informan las cooperativas con cadena de frío?',
            optionen: [ { wert: 'a', text: 'Pérdidas claramente menores.' }, { wert: 'b', text: 'Las mismas pérdidas.' }, { wert: 'c', text: 'Más costes que beneficios.' } ], loesung: 'a' },
          { id: 'dd1303', text: '¿Por qué no invierten los pequeños productores?',
            optionen: [ { wert: 'a', text: 'Porque no quieren.' }, { wert: 'b', text: 'Porque les faltan garantías para un crédito.' }, { wert: 'c', text: 'Porque la ley lo prohíbe.' } ], loesung: 'b' },
          { id: 'dd1304', text: '¿Qué distingue el texto?',
            optionen: [ { wert: 'a', text: 'Programas aplicados frente a solo anunciados.' }, { wert: 'b', text: 'Públicos frente a privados.' }, { wert: 'c', text: 'Norte frente a sur.' } ], loesung: 'a' },
          { id: 'dd1305', text: 'La última frase expresa…',
            optionen: [ { wert: 'a', text: 'una certeza.' }, { wert: 'b', text: 'una condición irreal sobre el pasado.' }, { wert: 'c', text: 'una orden.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Comprensión auditiva', aufgaben: [
      { id: 'dd2a1', art: 'hoeren', nummer: 'Tarea 4',
        anweisung: 'Escucha la intervención y responde.',
        audio: 'Meine Damen und Herren, lassen Sie mich das kurz einordnen. Die Zahlen, die Ihnen vorliegen, beziehen sich ausschließlich auf das erste Halbjahr. Sie sind also nicht mit dem Vorjahreswert vergleichbar, der zwölf Monate umfasst. Es wäre wünschenswert, dass wir uns auf einen einheitlichen Zeitraum verständigen. Andernfalls laufen wir Gefahr, dass jede Abteilung mit anderen Grundlagen argumentiert. Ich schlage vor, die Entscheidung zu vertagen, bis die Zahlen für das Gesamtjahr vorliegen.',
        fragen: [
          { id: 'dd2101', text: 'Die Zahlen umfassen nur das erste Halbjahr.',          loesung: 'r' },
          { id: 'dd2102', text: 'Sie sind mit dem Vorjahreswert direkt vergleichbar.',  loesung: 'f' },
          { id: 'dd2103', text: 'Die Rednerin wünscht einen einheitlichen Zeitraum.',   loesung: 'r' },
          { id: 'dd2104', text: 'Sie will sofort entscheiden.',                         loesung: 'f' },
          { id: 'dd2105', text: 'Sie schlägt vor, die Entscheidung zu vertagen.',       loesung: 'r' }
        ] },
      { id: 'dd2a2', art: 'hoeren', nummer: 'Tarea 5',
        anweisung: 'Escucha el comentario y elige la respuesta correcta: a, b o c.',
        audio: 'Die neue Regelung wird als großer Wurf verkauft. Sieht man genauer hin, fällt auf, dass die wesentlichen Punkte in eine Übergangsfrist verschoben wurden. Das heißt nicht, dass die Reform wirkungslos bliebe; es heißt, dass sich ihre Wirkung erst in einigen Jahren zeigen wird. Wer heute Erfolge feiert, feiert eine Ankündigung. Interessanter als die Frage, ob die Richtung stimmt, ist deshalb die Frage, wer die Übergangszeit finanziert.',
        fragen: [
          { id: 'dd2201', text: 'La postura del comentarista es…',
            optionen: [ { wert: 'a', text: 'de entusiasmo.' }, { wert: 'b', text: 'escéptica, pero no de rechazo.' }, { wert: 'c', text: 'de rechazo total.' } ], loesung: 'b' },
          { id: 'dd2202', text: '¿Qué critica sobre todo?',
            optionen: [ { wert: 'a', text: 'Que los puntos esenciales se aplazaron.' }, { wert: 'b', text: 'Que la dirección es equivocada.' }, { wert: 'c', text: 'Que nadie la entiende.' } ], loesung: 'a' },
          { id: 'dd2203', text: '«Wer heute Erfolge feiert, feiert eine Ankündigung» significa…',
            optionen: [ { wert: 'a', text: 'que ya hay resultados.' }, { wert: 'b', text: 'que se celebra algo que aún no ocurrió.' }, { wert: 'c', text: 'que la fiesta fue cara.' } ], loesung: 'b' },
          { id: 'dd2204', text: '¿Qué le parece la pregunta más interesante?',
            optionen: [ { wert: 'a', text: 'Si la dirección es correcta.' }, { wert: 'b', text: 'Quién financia el periodo transitorio.' }, { wert: 'c', text: 'Cuándo entra en vigor.' } ], loesung: 'b' },
          { id: 'dd2205', text: 'El recurso «Das heißt nicht … es heißt …» sirve para…',
            optionen: [ { wert: 'a', text: 'matizar una afirmación.' }, { wert: 'b', text: 'repetir lo mismo.' }, { wert: 'c', text: 'hacer una broma.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Estructuras', aufgaben: [
      { id: 'dd3a1', art: 'baustein', nummer: 'Tarea 6',
        anweisung: 'Lee el texto. ¿Qué forma va en cada hueco? Elige a, b o c.',
        text:
`Sehr geehrte Damen und Herren,

[1] der anhaltenden Lieferschwierigkeiten sehen wir uns gezwungen, den vereinbarten Termin zu verschieben.

Wie Ihnen bekannt sein dürfte, [2] unser Zulieferer bereits im Frühjahr auf Engpässe hingewiesen. Die daraufhin [3] Maßnahmen haben die Lage entschärft, aber nicht gelöst.

Wir bitten um Verständnis, [4] wir Ihnen keinen verbindlichen Ersatztermin nennen können. [5] wir es könnten, hätten wir ihn längst genannt.

Die Lieferung [6] voraussichtlich Ende November erfolgen. Sollte sich daran etwas ändern, [7] wir Sie unverzüglich.

Wir möchten betonen, dass wir die Verzögerung [8] bedauern. Man hat uns versichert, die Produktion [9] wieder angelaufen.

Für Rückfragen [10] wir Ihnen selbstverständlich zur Verfügung.

Mit freundlichen Grüßen
M. Berger`,
        fragen: [
          { id: 'dd3101', text: 'Hueco 1',  optionen: [ { wert: 'a', text: 'Wegen' }, { wert: 'b', text: 'Aufgrund' }, { wert: 'c', text: 'Trotz' } ], loesung: 'b' },
          { id: 'dd3102', text: 'Hueco 2',  optionen: [ { wert: 'a', text: 'hat' }, { wert: 'b', text: 'habe' }, { wert: 'c', text: 'hätte' } ], loesung: 'a' },
          { id: 'dd3103', text: 'Hueco 3',  optionen: [ { wert: 'a', text: 'ergriffenen' }, { wert: 'b', text: 'ergreifenden' }, { wert: 'c', text: 'ergreifen' } ], loesung: 'a' },
          { id: 'dd3104', text: 'Hueco 4',  optionen: [ { wert: 'a', text: 'ob' }, { wert: 'b', text: 'dass' }, { wert: 'c', text: 'als' } ], loesung: 'b' },
          { id: 'dd3105', text: 'Hueco 5',  optionen: [ { wert: 'a', text: 'Könnten' }, { wert: 'b', text: 'Können' }, { wert: 'c', text: 'Konnten' } ], loesung: 'a' },
          { id: 'dd3106', text: 'Hueco 6',  optionen: [ { wert: 'a', text: 'wird' }, { wert: 'b', text: 'würde' }, { wert: 'c', text: 'wurde' } ], loesung: 'a' },
          { id: 'dd3107', text: 'Hueco 7',  optionen: [ { wert: 'a', text: 'informieren' }, { wert: 'b', text: 'informierten' }, { wert: 'c', text: 'informiert' } ], loesung: 'a' },
          { id: 'dd3108', text: 'Hueco 8',  optionen: [ { wert: 'a', text: 'außerordentlich' }, { wert: 'b', text: 'außerordentliche' }, { wert: 'c', text: 'außerordentlichen' } ], loesung: 'a' },
          { id: 'dd3109', text: 'Hueco 9',  optionen: [ { wert: 'a', text: 'ist' }, { wert: 'b', text: 'sei' }, { wert: 'c', text: 'wäre' } ], loesung: 'b' },
          { id: 'dd3110', text: 'Hueco 10', optionen: [ { wert: 'a', text: 'stehen' }, { wert: 'b', text: 'steht' }, { wert: 'c', text: 'ständen' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Expresión escrita', aufgaben: [
      { id: 'dd4a1', art: 'schreiben', nummer: 'Tarea 7',
        anweisung: 'Escribe el texto en alemán. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'dd4101',
          auftrag: 'En tu ciudad se plantea cerrar al tráfico una calle céntrica muy transitada. Escribe una carta al director de un periódico.',
          punkte: [ 'Expón tu postura con claridad.', 'Da al menos dos argumentos y susténtalos.', 'Recoge una objeción contraria y respóndela.', 'Termina con una propuesta.' ],
          umfang: 'Escribe entre 150 y 180 palabras.',
          auftragZiel: 'In deiner Stadt soll eine viel befahrene Straße im Zentrum für Autos gesperrt werden. Schreib einen Leserbrief an eine Zeitung.',
          punkteZiel: [ 'Nenne deinen Standpunkt klar.', 'Führe mindestens zwei Argumente an und belege sie.', 'Geh auf einen Einwand der Gegenseite ein und entkräfte ihn.', 'Schließe mit einem Vorschlag.' ],
          umfangZiel: 'Schreibe 150 bis 180 Wörter.',
          kriterienZiel: [
            'Der Standpunkt ist von Anfang an klar.',
            'Es gibt mindestens zwei belegte Argumente, nicht nur Meinungen.',
            'Ein Einwand wird aufgegriffen und beantwortet.',
            'Der Text ist mit Konnektoren gegliedert (allerdings, folglich, gleichwohl…).',
            'Das Register passt zu einer Zeitung.',
            'Der Text hat mindestens 150 Wörter.'
          ],
          kriterien: [
            'La postura se entiende desde el principio.',
            'Hay al menos dos argumentos sustentados.',
            'Se recoge y se responde una objeción.',
            'El texto está articulado con conectores (allerdings, folglich, gleichwohl…).',
            'El registro es adecuado para un periódico.',
            'El texto tiene al menos 150 palabras.'
          ],
          muster:
`Sehr geehrte Redaktion,

mit Interesse habe ich den Vorschlag gelesen, die Bahnhofstraße für den Autoverkehr zu sperren. Ich halte ihn für richtig und möchte kurz begründen, warum.

Erstens verzeichnet diese Straße laut städtischer Statistik die meisten Fußgängerunfälle der Innenstadt. Zweitens zeigen Erfahrungen aus vergleichbaren Städten, dass die Zahl der Besucher nach einer Sperrung steigt statt zu sinken.

Nun wird eingewandt, der Einzelhandel werde darunter leiden. Diese Sorge ist berechtigt, sie hält der Prüfung allerdings nur teilweise stand: Nach einigen schwierigen Monaten erholten sich die Umsätze andernorts und lagen später über dem Ausgangswert. Notwendig ist freilich, die Maßnahme mit einem ausreichenden Nahverkehrsangebot zu begleiten.

Ich schlage daher vor, die Sperrung zunächst an Wochenenden zu erproben und nach einem Jahr anhand offengelegter Zahlen zu bewerten. So müsste niemand blind entscheiden.

Mit freundlichen Grüßen
Dennis Z.`
        } ] }
    ] }
  ]
});
