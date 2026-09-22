/* Prüfung B1 · Deutsch für Spanischsprachige · Zwischenstopp nach Tag 90 */

PRUEFUNG('de', {
  id: 'p-de-b1', nachTag: 90, niveau: 'B1',
  name: 'Examen B1', vorbild: 'Goethe-Zertifikat B1', bestehen: 60, dauer: 65,
  teile: [
    { id: 't1', art: 'lesen', name: 'Comprensión de lectura', aufgaben: [
      { id: 'dc1a1', art: 'rf', nummer: 'Tarea 1',
        anweisung: 'Lee el texto. ¿Las afirmaciones son verdaderas o falsas?',
        text:
`Nach dem Studium dachte ich, ich würde sofort eine Stelle finden. Ich hatte über fünfzig Bewerbungen geschrieben, und nur drei Firmen haben sich gemeldet. Hätte ich mich besser auf die Gespräche vorbereitet, wäre es vielleicht anders gelaufen.

Am Ende nahm ich eine Stelle an, die mit meinem Studium nichts zu tun hatte. Mir wurde gesagt, es sei nur für ein paar Monate. Inzwischen sind vier Jahre vergangen, und ich mache die Arbeit gern.

Heute gebe ich Kurse für Studierende, die kurz vor dem Abschluss stehen. Ich sage ihnen, sie sollten sich gut vorbereiten und sich nicht entmutigen lassen.`,
        fragen: [
          { id: 'dc1101', text: 'Die Person fand direkt nach dem Studium eine Stelle.',   loesung: 'f' },
          { id: 'dc1102', text: 'Nur drei Firmen haben auf die Bewerbungen geantwortet.', loesung: 'r' },
          { id: 'dc1103', text: 'Die angenommene Stelle passte zum Studium.',             loesung: 'f' },
          { id: 'dc1104', text: 'Sie arbeitet seit vier Jahren dort und mag die Arbeit.', loesung: 'r' },
          { id: 'dc1105', text: 'Heute berät sie Studierende kurz vor dem Abschluss.',    loesung: 'r' }
        ] },
      { id: 'dc1a2', art: 'zuordnen', nummer: 'Tarea 2',
        anweisung: 'Cinco afirmaciones, seis fragmentos. ¿Cuál va con cuál? Sobra uno.',
        optionen: [
          { wert: 'A', text: '„Am schwersten war nicht die Sprache, sondern zu merken, wann eine Frage wirklich eine Frage war."' },
          { wert: 'B', text: '„Nach zwölf Jahren kam ich zurück und stellte fest: Das Viertel war gleich geblieben, ich nicht."' },
          { wert: 'C', text: '„Anfangs habe ich jeden Satz im Kopf übersetzt. Irgendwann fiel mir auf, dass ich es nicht mehr tat."' },
          { wert: 'D', text: '„Man hatte uns vor dem ersten Winter gewarnt, aber niemand sprach davon, wie lang die Nachmittage werden."' },
          { wert: 'E', text: '„Meine Tochter verbessert meinen Akzent, seit sie in der Schule ist. Ich weiß nicht, ob ich lachen soll."' },
          { wert: 'F', text: '„Ich habe den Vertrag unterschrieben, ohne ihn ganz zu lesen. Das war die teuerste Lehre meines Lebens."' }
        ],
        fragen: [
          { id: 'dc1201', text: 'Beschreibt den Moment, in dem die Sprache automatisch wurde.', loesung: 'C' },
          { id: 'dc1202', text: 'Nennt eine kulturelle, keine sprachliche Schwierigkeit.',      loesung: 'A' },
          { id: 'dc1203', text: 'Handelt von der Rückkehr an einen bekannten Ort.',             loesung: 'B' },
          { id: 'dc1204', text: 'Spricht über etwas beim Wetter, wovor niemand gewarnt hatte.', loesung: 'D' },
          { id: 'dc1205', text: 'Geht um das Verhältnis zwischen den Generationen.',            loesung: 'E' }
        ] },
      { id: 'dc1a3', art: 'mc', nummer: 'Tarea 3',
        anweisung: 'Lee el texto y elige la respuesta correcta: a, b o c.',
        text:
`Das Homeoffice kam über Nacht, und viele Firmen haben es beibehalten. Die Beschäftigten sagen, sie würden Zeit sparen, weil der Weg zur Arbeit wegfalle, und sie könnten sich vormittags besser konzentrieren. Fast die Hälfte gibt allerdings zu, dass ihr die Trennung von Arbeit und Privatleben schwerfällt.

Die Vorgesetzten hatten befürchtet, die Leistung werde sinken. Die Untersuchungen bestätigen das nicht: Die Produktivität bleibt gleich oder steigt sogar. Was darunter leidet, ist der Kontakt zwischen den Kolleginnen und Kollegen — vor allem für alle, die neu in der Firma sind.

Die meisten Unternehmen haben sich deshalb für ein gemischtes Modell entschieden.`,
        fragen: [
          { id: 'dc1301', text: '¿Qué ventaja mencionan los empleados?',
            optionen: [ { wert: 'a', text: 'Que ahorran tiempo de desplazamiento.' }, { wert: 'b', text: 'Que ganan más.' }, { wert: 'c', text: 'Que trabajan menos horas.' } ], loesung: 'a' },
          { id: 'dc1302', text: '¿Qué le cuesta a casi la mitad?',
            optionen: [ { wert: 'a', text: 'Concentrarse por la tarde.' }, { wert: 'b', text: 'Separar trabajo y vida privada.' }, { wert: 'c', text: 'Usar los programas.' } ], loesung: 'b' },
          { id: 'dc1303', text: '¿Qué habían temido los jefes?',
            optionen: [ { wert: 'a', text: 'Que subieran los costes.' }, { wert: 'b', text: 'Que la gente se fuera.' }, { wert: 'c', text: 'Que bajara el rendimiento.' } ], loesung: 'c' },
          { id: 'dc1304', text: 'Según los estudios, la productividad…',
            optionen: [ { wert: 'a', text: 'se mantiene o sube.' }, { wert: 'b', text: 'baja claramente.' }, { wert: 'c', text: 'no se pudo medir.' } ], loesung: 'a' },
          { id: 'dc1305', text: '¿Quién nota más la falta de contacto?',
            optionen: [ { wert: 'a', text: 'Los jefes.' }, { wert: 'b', text: 'Quien es nuevo en la empresa.' }, { wert: 'c', text: 'Quien vive lejos.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Comprensión auditiva', aufgaben: [
      { id: 'dc2a1', art: 'hoeren', nummer: 'Tarea 4',
        anweisung: 'Escucha el mensaje y responde.',
        audio: 'Guten Tag, hier spricht das Reisebüro. Ich wollte Ihnen mitteilen, dass Ihr Flug von der Fluggesellschaft gestrichen wurde. Wir haben Ihnen bereits einen Platz in der Maschine am nächsten Morgen reserviert, ohne Aufpreis. Sollte Ihnen das nicht passen, könnten wir die volle Erstattung veranlassen; das würde allerdings etwa drei Wochen dauern. Ich wäre Ihnen dankbar, wenn Sie mir bis achtzehn Uhr Bescheid geben könnten.',
        fragen: [
          { id: 'dc2101', text: 'Der Flug wurde von der Fluggesellschaft gestrichen.', loesung: 'r' },
          { id: 'dc2102', text: 'Der neue Flug kostet einen Aufpreis.',                 loesung: 'f' },
          { id: 'dc2103', text: 'Die Erstattung käme sofort.',                          loesung: 'f' },
          { id: 'dc2104', text: 'Eine Rückmeldung wird bis achtzehn Uhr erbeten.',      loesung: 'r' },
          { id: 'dc2105', text: 'Es gibt zwei Möglichkeiten zur Auswahl.',              loesung: 'r' }
        ] },
      { id: 'dc2a2', art: 'hoeren', nummer: 'Tarea 5',
        anweisung: 'Escucha el programa y elige la respuesta correcta: a, b o c.',
        audio: 'In unserer Sendung geht es heute um Schlaf. Fachleute betonen, dass acht Stunden allein nicht genügen: Entscheidend sei die Regelmäßigkeit. Wer immer zur selben Zeit ins Bett geht und aufsteht, erholt sich besser als jemand, der am Wochenende lange schläft, um die Woche auszugleichen. Empfohlen wird außerdem, in der letzten Stunde auf Bildschirme zu verzichten. Und eine Warnung: Der Kaffee vom Nachmittag wirkt abends noch, auch wenn man es nicht merkt.',
        fragen: [
          { id: 'dc2201', text: 'Según los expertos, lo decisivo es…',
            optionen: [ { wert: 'a', text: 'dormir ocho horas exactas.' }, { wert: 'b', text: 'la regularidad.' }, { wert: 'c', text: 'dormir de día.' } ], loesung: 'b' },
          { id: 'dc2202', text: '¿Qué dicen sobre dormir mucho el fin de semana?',
            optionen: [ { wert: 'a', text: 'Que compensa la semana.' }, { wert: 'b', text: 'Que es lo mejor.' }, { wert: 'c', text: 'Que descansa menos que un horario regular.' } ], loesung: 'c' },
          { id: 'dc2203', text: '¿Qué se recomienda evitar?',
            optionen: [ { wert: 'a', text: 'Las pantallas en la última hora.' }, { wert: 'b', text: 'La cena.' }, { wert: 'c', text: 'El deporte matinal.' } ], loesung: 'a' },
          { id: 'dc2204', text: '¿Qué advierten sobre el café?',
            optionen: [ { wert: 'a', text: 'Que ya no hace efecto.' }, { wert: 'b', text: 'Que sigue haciendo efecto por la noche.' }, { wert: 'c', text: 'Que ayuda a dormir.' } ], loesung: 'b' },
          { id: 'dc2205', text: 'El tono del programa es…',
            optionen: [ { wert: 'a', text: 'informativo, con recomendaciones.' }, { wert: 'b', text: 'polémico.' }, { wert: 'c', text: 'publicitario.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Estructuras', aufgaben: [
      { id: 'dc3a1', art: 'baustein', nummer: 'Tarea 6',
        anweisung: 'Lee el texto. ¿Qué forma va en cada hueco? Elige a, b o c.',
        text:
`Sehr geehrter Herr Wagner,

ich beziehe mich auf den Bericht, der uns letzte Woche [1] wurde. Bitte entschuldigen Sie, [2] Sie unsere Antwort erst heute erhalten.

Uns ist aufgefallen, dass die Zahlen des Vorquartals nicht berücksichtigt [3]. Wären sie einbezogen worden, [4] die Schlussfolgerungen anders ausgefallen.

Der Bericht ist nicht nur unvollständig, [5] auch schwer zu vertreten. Die Überarbeitung [6] bis Freitag vorliegen, sonst reicht die Zeit nicht.

Im Übrigen heißt es, das Team [7] bereits im März darauf hingewiesen. Wenn das stimmt, hätte man es damals korrigieren [8].

Ich freue mich auf die Fassung, [9] Sie uns zusenden. Sobald wir sie [10] haben, laden wir zur Sitzung ein.

Mit freundlichen Grüßen
L. Herrera`,
        fragen: [
          { id: 'dc3101', text: 'Hueco 1',  optionen: [ { wert: 'a', text: 'geschickt' }, { wert: 'b', text: 'schicken' }, { wert: 'c', text: 'schickte' } ], loesung: 'a' },
          { id: 'dc3102', text: 'Hueco 2',  optionen: [ { wert: 'a', text: 'ob' }, { wert: 'b', text: 'dass' }, { wert: 'c', text: 'weil' } ], loesung: 'b' },
          { id: 'dc3103', text: 'Hueco 3',  optionen: [ { wert: 'a', text: 'wurden' }, { wert: 'b', text: 'werden' }, { wert: 'c', text: 'worden' } ], loesung: 'a' },
          { id: 'dc3104', text: 'Hueco 4',  optionen: [ { wert: 'a', text: 'waren' }, { wert: 'b', text: 'wären' }, { wert: 'c', text: 'würden' } ], loesung: 'b' },
          { id: 'dc3105', text: 'Hueco 5',  optionen: [ { wert: 'a', text: 'aber' }, { wert: 'b', text: 'sondern' }, { wert: 'c', text: 'obwohl' } ], loesung: 'b' },
          { id: 'dc3106', text: 'Hueco 6',  optionen: [ { wert: 'a', text: 'muss' }, { wert: 'b', text: 'müsst' }, { wert: 'c', text: 'müssen' } ], loesung: 'a' },
          { id: 'dc3107', text: 'Hueco 7',  optionen: [ { wert: 'a', text: 'hat' }, { wert: 'b', text: 'habe' }, { wert: 'c', text: 'hätte' } ], loesung: 'b' },
          { id: 'dc3108', text: 'Hueco 8',  optionen: [ { wert: 'a', text: 'können' }, { wert: 'b', text: 'gekonnt' }, { wert: 'c', text: 'konnte' } ], loesung: 'a' },
          { id: 'dc3109', text: 'Hueco 9',  optionen: [ { wert: 'a', text: 'der' }, { wert: 'b', text: 'die' }, { wert: 'c', text: 'das' } ], loesung: 'b' },
          { id: 'dc3110', text: 'Hueco 10', optionen: [ { wert: 'a', text: 'erhalten' }, { wert: 'b', text: 'erhielten' }, { wert: 'c', text: 'erhaltet' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Expresión escrita', aufgaben: [
      { id: 'dc4a1', art: 'schreiben', nummer: 'Tarea 7',
        anweisung: 'Escribe el texto en alemán. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'dc4101',
          auftrag: 'En un foro alguien pregunta si merece la pena aprender un idioma de adulto. Escribe tu respuesta.',
          punkte: [ 'Di claramente qué opinas.', 'Da dos razones y explícalas.', 'Cuenta una experiencia propia.', 'Termina con un consejo.' ],
          umfang: 'Escribe entre 120 y 150 palabras.',
          auftragZiel: 'In einem Forum fragt jemand, ob es sich lohnt, als Erwachsener noch eine Sprache zu lernen. Schreib deine Antwort.',
          punkteZiel: [ 'Sag klar, was du denkst.', 'Nenne zwei Gründe und erkläre sie.', 'Erzähl von einer eigenen Erfahrung.', 'Schließe mit einem Rat.' ],
          umfangZiel: 'Schreibe 120 bis 150 Wörter.',
          kriterienZiel: [
            'Die Meinung ist von Anfang an klar.',
            'Es gibt zwei erklärte Gründe, nicht nur Behauptungen.',
            'Eine eigene Erfahrung kommt vor.',
            'Der Text ist mit Konnektoren gegliedert (außerdem, deshalb, allerdings…).',
            'Der Text hat mindestens 120 Wörter.'
          ],
          kriterien: [
            'La opinión queda clara desde el principio.',
            'Hay dos razones explicadas, no solo afirmaciones.',
            'Se cuenta una experiencia propia.',
            'El texto está articulado con conectores (außerdem, deshalb, allerdings…).',
            'El texto tiene al menos 120 palabras.'
          ],
          muster:
`Meiner Meinung nach lohnt es sich auf jeden Fall, auch als Erwachsener noch eine Sprache zu lernen.

Erstens lernt man als Erwachsener anders, aber nicht schlechter: Man versteht Regeln schneller und kann sie bewusst anwenden. Zweitens geht es nicht nur um die Sprache selbst. Wer eine Sprache lernt, bekommt einen anderen Blick auf das eigene Land.

Ich habe mit vierunddreißig angefangen, Spanisch zu lernen. Am Anfang war ich frustriert, weil ich im Gespräch kaum etwas verstand. Nach einem halben Jahr habe ich gemerkt, dass ich Nachrichten hören konnte, ohne nachzudenken. Dieser Moment hat mich getragen.

Mein Rat wäre deshalb: nicht auf den perfekten Kurs warten, sondern jeden Tag eine kleine Einheit machen. Regelmäßigkeit bringt mehr als lange Abende alle vierzehn Tage.`
        } ] }
    ] }
  ]
});
