/* Prüfung A1 · Deutsch für Spanischsprachige · Zwischenstopp nach Tag 30

   Vorbild Goethe-Zertifikat A1 / Start Deutsch 1. Arbeitsanweisungen auf
   Spanisch, Texte auf Deutsch. Verlangt wird nur, was bis Tag 30 vorkam. */

PRUEFUNG('de', {
  id: 'p-de-a1', nachTag: 30, niveau: 'A1',
  name: 'Examen A1', vorbild: 'Goethe-Zertifikat A1', bestehen: 60, dauer: 45,
  teile: [
    { id: 't1', art: 'lesen', name: 'Comprensión de lectura', aufgaben: [
      { id: 'da1a1', art: 'rf', nummer: 'Tarea 1',
        anweisung: 'Lee el correo. ¿Las afirmaciones son verdaderas o falsas?',
        text:
`Hallo Sofía,

wie geht es dir? Mir geht es gut. Ich wohne jetzt in Bremen. Meine Wohnung ist klein, aber sie hat einen Balkon.

Ich stehe um halb sieben auf und fahre mit dem Fahrrad zur Arbeit. Das dauert zwanzig Minuten. Am Wochenende arbeite ich nicht.

Am Samstag mache ich eine Party. Kommst du? Wir fangen um acht Uhr an. Du kannst deinen Bruder mitbringen.

Viele Grüße
Lena`,
        fragen: [
          { id: 'da1101', text: 'Lena wohnt in Bremen.',                 loesung: 'r' },
          { id: 'da1102', text: 'Die Wohnung ist groß.',                 loesung: 'f' },
          { id: 'da1103', text: 'Lena fährt mit dem Bus zur Arbeit.',    loesung: 'f' },
          { id: 'da1104', text: 'Am Wochenende arbeitet Lena nicht.',    loesung: 'r' },
          { id: 'da1105', text: 'Die Party beginnt um acht Uhr.',        loesung: 'r' }
        ] },
      { id: 'da1a2', art: 'zuordnen', nummer: 'Tarea 2',
        anweisung: 'Cinco personas buscan algo. ¿Qué anuncio va con cada una? Sobra uno.',
        optionen: [
          { wert: 'A', text: 'Deutschkurs für Anfänger. Montag und Mittwoch, 18 bis 20 Uhr. Kleine Gruppen.' },
          { wert: 'B', text: 'Fitnessstudio. Wir öffnen um 6 Uhr. Kurse vor der Arbeit.' },
          { wert: 'C', text: 'Zimmer in Wohngemeinschaft. 10 Minuten zur Universität. 320 Euro.' },
          { wert: 'D', text: 'Café sucht Hilfe für Samstag und Sonntag. Erfahrung nicht nötig.' },
          { wert: 'E', text: 'Ich gehe mit Ihrem Hund spazieren. Auch am Wochenende.' },
          { wert: 'F', text: 'Fahrrad zu verkaufen. Fast neu. 90 Euro.' }
        ],
        fragen: [
          { id: 'da1201', text: 'Ana möchte Deutsch lernen. Sie hat abends Zeit.',        loesung: 'A' },
          { id: 'da1202', text: 'Carlos sucht ein günstiges Zimmer bei der Universität.', loesung: 'C' },
          { id: 'da1203', text: 'Elena braucht am Wochenende Hilfe für ihren Hund.',      loesung: 'E' },
          { id: 'da1204', text: 'Diego möchte vor der Arbeit Sport machen.',              loesung: 'B' },
          { id: 'da1205', text: 'Sofía sucht Arbeit am Samstag und Sonntag.',             loesung: 'D' }
        ] },
      { id: 'da1a3', art: 'mc', nummer: 'Tarea 3',
        anweisung: 'Lee el texto y elige la respuesta correcta: a, b o c.',
        text:
`Der Wochenmarkt ist jeden Dienstag und Freitag auf dem Rathausplatz. Er beginnt um sieben Uhr und endet um dreizehn Uhr.

Man kann dort Obst, Gemüse, Brot und Käse kaufen. Viele Leute kommen früh, denn dann ist alles frisch.

Im Winter ist der Markt nur am Freitag. Bitte bringen Sie eine Tasche mit. Es gibt keine Plastiktüten.`,
        fragen: [
          { id: 'da1301', text: '¿Cuándo hay mercado?',
            optionen: [ { wert: 'a', text: 'Martes y viernes.' }, { wert: 'b', text: 'Todos los días.' }, { wert: 'c', text: 'Solo el domingo.' } ], loesung: 'a' },
          { id: 'da1302', text: '¿A qué hora termina?',
            optionen: [ { wert: 'a', text: 'A las siete.' }, { wert: 'b', text: 'A la una de la tarde.' }, { wert: 'c', text: 'A las seis de la tarde.' } ], loesung: 'b' },
          { id: 'da1303', text: '¿Por qué va la gente temprano?',
            optionen: [ { wert: 'a', text: 'Porque es más barato.' }, { wert: 'b', text: 'Porque hay menos gente.' }, { wert: 'c', text: 'Porque todo está fresco.' } ], loesung: 'c' },
          { id: 'da1304', text: '¿Qué pasa en invierno?',
            optionen: [ { wert: 'a', text: 'El mercado es solo el viernes.' }, { wert: 'b', text: 'No hay mercado.' }, { wert: 'c', text: 'El mercado empieza más tarde.' } ], loesung: 'a' },
          { id: 'da1305', text: '¿Qué hay que llevar?',
            optionen: [ { wert: 'a', text: 'Dinero en efectivo.' }, { wert: 'b', text: 'Una bolsa.' }, { wert: 'c', text: 'El documento de identidad.' } ], loesung: 'b' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Comprensión auditiva', aufgaben: [
      { id: 'da2a1', art: 'hoeren', nummer: 'Tarea 4',
        anweisung: 'Escucha el mensaje y responde. Puedes escucharlo las veces que quieras.',
        audio: 'Hallo, hier ist Paul. Wir fahren am Sonntag an den See. Wir treffen uns um neun Uhr bei mir. Ich habe ein Auto, du musst also nicht mit dem Zug fahren. Bring bitte etwas zu essen mit. Wenn es regnet, gehen wir ins Museum. Ruf mich heute Abend an.',
        fragen: [
          { id: 'da2101', text: 'Sie fahren am Samstag an den See.',  loesung: 'f' },
          { id: 'da2102', text: 'Sie treffen sich um neun Uhr.',       loesung: 'r' },
          { id: 'da2103', text: 'Paul hat ein Auto.',                  loesung: 'r' },
          { id: 'da2104', text: 'Sie fahren mit dem Zug.',             loesung: 'f' },
          { id: 'da2105', text: 'Bei Regen gehen sie ins Museum.',     loesung: 'r' }
        ] },
      { id: 'da2a2', art: 'hoeren', nummer: 'Tarea 5',
        anweisung: 'Escucha el anuncio y elige la respuesta correcta: a, b o c.',
        audio: 'Achtung, bitte. Der Zug nach Hamburg fährt heute von Gleis fünf. Er hat zehn Minuten Verspätung. Reisende mit Fahrrad gehen bitte zum Ende des Bahnsteigs. Vielen Dank.',
        fragen: [
          { id: 'da2201', text: '¿De qué vía sale el tren?',
            optionen: [ { wert: 'a', text: 'De la cinco.' }, { wert: 'b', text: 'De la diez.' }, { wert: 'c', text: 'De la dos.' } ], loesung: 'a' },
          { id: 'da2202', text: '¿Adónde va el tren?',
            optionen: [ { wert: 'a', text: 'A Berlín.' }, { wert: 'b', text: 'A Hamburgo.' }, { wert: 'c', text: 'A Múnich.' } ], loesung: 'b' },
          { id: 'da2203', text: '¿Qué pasa con el tren?',
            optionen: [ { wert: 'a', text: 'Sale antes.' }, { wert: 'b', text: 'Lleva retraso.' }, { wert: 'c', text: 'No sale hoy.' } ], loesung: 'b' },
          { id: 'da2204', text: '¿Cuántos minutos de retraso?',
            optionen: [ { wert: 'a', text: 'Cinco.' }, { wert: 'b', text: 'Diez.' }, { wert: 'c', text: 'Veinte.' } ], loesung: 'b' },
          { id: 'da2205', text: '¿Adónde van los viajeros con bicicleta?',
            optionen: [ { wert: 'a', text: 'Al final del andén.' }, { wert: 'b', text: 'A la taquilla.' }, { wert: 'c', text: 'A la cafetería.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Estructuras', aufgaben: [
      { id: 'da3a1', art: 'baustein', nummer: 'Tarea 6',
        anweisung: 'Lee el texto. ¿Qué palabra va en cada hueco? Elige a, b o c.',
        text:
`Liebe Anna,

ich [1] jetzt in Köln. Die Stadt [2] mir sehr gut. Meine Wohnung ist klein, aber [3] hat einen Balkon.

Ich stehe um sieben Uhr [4] und fahre [5] dem Fahrrad zur Arbeit. Am Abend [6] ich oft mit Freunden ins Kino.

Gestern [7] ich einen Film gesehen. Er war sehr gut. Am Wochenende [8] ich nicht arbeiten.

Kommst du im Sommer? [9] du kommst, zeige ich dir die Stadt. Ich habe [10] Zeit.

Viele Grüße
Marco`,
        fragen: [
          { id: 'da3101', text: 'Hueco 1',  optionen: [ { wert: 'a', text: 'wohne' }, { wert: 'b', text: 'wohnt' }, { wert: 'c', text: 'wohnen' } ], loesung: 'a' },
          { id: 'da3102', text: 'Hueco 2',  optionen: [ { wert: 'a', text: 'gefalle' }, { wert: 'b', text: 'gefällt' }, { wert: 'c', text: 'gefallen' } ], loesung: 'b' },
          { id: 'da3103', text: 'Hueco 3',  optionen: [ { wert: 'a', text: 'er' }, { wert: 'b', text: 'es' }, { wert: 'c', text: 'sie' } ], loesung: 'c' },
          { id: 'da3104', text: 'Hueco 4',  optionen: [ { wert: 'a', text: 'auf' }, { wert: 'b', text: 'an' }, { wert: 'c', text: 'aus' } ], loesung: 'a' },
          { id: 'da3105', text: 'Hueco 5',  optionen: [ { wert: 'a', text: 'mit' }, { wert: 'b', text: 'für' }, { wert: 'c', text: 'ohne' } ], loesung: 'a' },
          { id: 'da3106', text: 'Hueco 6',  optionen: [ { wert: 'a', text: 'gehe' }, { wert: 'b', text: 'gehst' }, { wert: 'c', text: 'geht' } ], loesung: 'a' },
          { id: 'da3107', text: 'Hueco 7',  optionen: [ { wert: 'a', text: 'bin' }, { wert: 'b', text: 'habe' }, { wert: 'c', text: 'war' } ], loesung: 'b' },
          { id: 'da3108', text: 'Hueco 8',  optionen: [ { wert: 'a', text: 'muss' }, { wert: 'b', text: 'musst' }, { wert: 'c', text: 'müssen' } ], loesung: 'a' },
          { id: 'da3109', text: 'Hueco 9',  optionen: [ { wert: 'a', text: 'Ob' }, { wert: 'b', text: 'Wenn' }, { wert: 'c', text: 'Weil' } ], loesung: 'b' },
          { id: 'da3110', text: 'Hueco 10', optionen: [ { wert: 'a', text: 'kein' }, { wert: 'b', text: 'nicht' }, { wert: 'c', text: 'viel' } ], loesung: 'c' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Expresión escrita', aufgaben: [
      { id: 'da4a1', art: 'schreiben', nummer: 'Tarea 7',
        anweisung: 'Escribe el texto en alemán. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'da4101',
          auftrag: 'Tu amigo Lukas te ha invitado a su cumpleaños. Escríbele un mensaje corto.',
          punkte: [ 'Dale las gracias por la invitación.', 'Dile si puedes ir o no, y por qué.', 'Pregúntale qué puedes llevar.' ],
          umfang: 'Escribe entre 30 y 40 palabras.',
          auftragZiel: 'Dein Freund Lukas hat dich zu seinem Geburtstag eingeladen. Schreib ihm eine kurze Nachricht.',
          punkteZiel: [ 'Bedanke dich für die Einladung.', 'Sag, ob du kommen kannst und warum.', 'Frag, was du mitbringen kannst.' ],
          umfangZiel: 'Schreibe 30 bis 40 Wörter.',
          kriterienZiel: [
            'Anrede und Gruß sind vorhanden.',
            'Alle drei Punkte sind behandelt.',
            'Der Text hat mindestens 30 Wörter.',
            'Das Verb steht an zweiter Position.',
            'Der Text ist ohne Nachfragen verständlich.'
          ],
          kriterien: [
            'Hay saludo y despedida.',
            'Se tratan los tres puntos.',
            'El texto tiene al menos 30 palabras.',
            'El verbo va en segunda posición.',
            'Se entiende sin tener que preguntar.'
          ],
          muster:
`Hallo Lukas,

vielen Dank für die Einladung! Ich komme gern.

Am Samstag habe ich Zeit. Ich muss aber um zehn Uhr gehen, denn ich arbeite am Sonntag früh.

Was kann ich mitbringen? Soll ich einen Kuchen machen?

Bis Samstag!
Ana`
        } ] }
    ] }
  ]
});
