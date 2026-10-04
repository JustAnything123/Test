/* Prüfung · Deutsch im Beruf · Zwischenstopp nach Tag 15 — Primeros pasos

   Vorbild Goethe-Zertifikat A1, aber mit Situationen aus dem Arbeitsalltag:
   erster Arbeitstag, Aushänge, Öffnungszeiten, Anruf der Chefin, Gäste
   empfangen und kassieren. Verlangt wird nur, was in den Tagen 1–15 vorkam.
   Seit Oktober 2026. Frage-IDs mit dem Kürzel bz. */

PRUEFUNG('de-beruf', {
  id: 'p-de-beruf-a1', nachTag: 15, niveau: 'A1',
  name: 'Examen 1 · Primeros pasos', vorbild: 'Goethe-Zertifikat A1 (temas del trabajo)',
  bestehen: 60, dauer: 45,
  teile: [
    { id: 't1', art: 'lesen', name: 'Comprensión de lectura', aufgaben: [
      { id: 'bz1a1', art: 'rf', nummer: 'Tarea 1',
        anweisung: 'Lee el mensaje del jefe de cocina. ¿Las afirmaciones son verdaderas o falsas?',
        text:
`Hallo Ana,

willkommen im Team! Dein erster Arbeitstag ist am Montag. Du arbeitest von acht bis vier Uhr in der Küche. Bitte sei um Viertel vor acht da.

Die Kochjacke und die Mütze bekommst du von uns. Du brauchst nur schwarze Schuhe.

Der Umkleideraum ist im Keller, neben dem Lager. Am Mittwoch hast du frei.

Bis Montag!
Jonas, Küchenchef`,
        fragen: [
          { id: 'bz1101', text: 'Ana beginnt am Montag.',                  loesung: 'r' },
          { id: 'bz1102', text: 'Ana arbeitet im Service.',                loesung: 'f' },
          { id: 'bz1103', text: 'Ana soll um 7:45 Uhr da sein.',           loesung: 'r' },
          { id: 'bz1104', text: 'Ana muss eine Kochjacke kaufen.',         loesung: 'f' },
          { id: 'bz1105', text: 'Der Umkleideraum ist im Keller.',         loesung: 'r' }
        ] },
      { id: 'bz1a2', art: 'zuordnen', nummer: 'Tarea 2',
        anweisung: 'Cinco compañeros buscan información. ¿Qué aviso del tablón va con cada uno? Sobra uno.',
        optionen: [
          { wert: 'A', text: 'Lieferung Gemüse: Dienstag und Freitag, 7 Uhr. Bitte die Kisten kontrollieren.' },
          { wert: 'B', text: 'Umkleideraum: Bitte keine Schuhe auf die Bänke stellen. Schränke abends schließen.' },
          { wert: 'C', text: 'Essen für das Personal: jeden Tag um 15 Uhr im Gastraum. Für alle kostenlos.' },
          { wert: 'D', text: 'Wer hat am Samstag frei? Wir brauchen Hilfe für eine Hochzeit, 18 bis 24 Uhr. Bitte bei der Chefin melden.' },
          { wert: 'E', text: 'Toiletten für Gäste: Bitte jede Stunde kontrollieren. Seife und Papiertücher bringen.' },
          { wert: 'F', text: 'Deutschkurs für Mitarbeiter: montags um 16 Uhr im Büro. Anfänger willkommen.' }
        ],
        fragen: [
          { id: 'bz1201', text: 'Lucía möchte am Wochenende extra arbeiten.',     loesung: 'D' },
          { id: 'bz1202', text: 'Tom fragt: Wann gibt es Essen für uns?',          loesung: 'C' },
          { id: 'bz1203', text: 'Mia möchte besser Deutsch sprechen.',              loesung: 'F' },
          { id: 'bz1204', text: 'Ali fragt: Wann kommt das Gemüse?',               loesung: 'A' },
          { id: 'bz1205', text: 'Paul ist heute für die Gästetoiletten da.',       loesung: 'E' }
        ] },
      { id: 'bz1a3', art: 'mc', nummer: 'Tarea 3',
        anweisung: 'Lee la información del restaurante y elige la respuesta correcta: a, b o c.',
        text:
`Restaurant Linde

Wir sind von Dienstag bis Sonntag für Sie da, von 11:30 bis 22 Uhr. Montag ist Ruhetag.

Mittagsmenü von Dienstag bis Freitag: Suppe und Hauptgericht für 12,90 Euro. Kinder bis sechs Jahre essen kostenlos.

Im Sommer ist unsere Terrasse offen. Reservierung bitte nur per Telefon: 0421 33 87 50.`,
        fragen: [
          { id: 'bz1301', text: '¿Qué día está cerrado el restaurante?',
            optionen: [ { wert: 'a', text: 'El martes.' }, { wert: 'b', text: 'El lunes.' }, { wert: 'c', text: 'El domingo.' } ], loesung: 'b' },
          { id: 'bz1302', text: '¿A qué hora cierra?',
            optionen: [ { wert: 'a', text: 'A las once y media.' }, { wert: 'b', text: 'A las doce del mediodía.' }, { wert: 'c', text: 'A las diez de la noche.' } ], loesung: 'c' },
          { id: 'bz1303', text: '¿Cuánto cuesta el menú del mediodía?',
            optionen: [ { wert: 'a', text: '12,90 euros.' }, { wert: 'b', text: '9,20 euros.' }, { wert: 'c', text: '21,90 euros.' } ], loesung: 'a' },
          { id: 'bz1304', text: '¿Quién come gratis?',
            optionen: [ { wert: 'a', text: 'Los grupos grandes.' }, { wert: 'b', text: 'Los niños de hasta seis años.' }, { wert: 'c', text: 'El personal.' } ], loesung: 'b' },
          { id: 'bz1305', text: '¿Cómo se reserva?',
            optionen: [ { wert: 'a', text: 'Por teléfono.' }, { wert: 'b', text: 'Por correo electrónico.' }, { wert: 'c', text: 'En la terraza.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Comprensión auditiva', aufgaben: [
      { id: 'bz2a1', art: 'hoeren', nummer: 'Tarea 4',
        anweisung: 'Escucha el mensaje de la jefa y responde. Puedes escucharlo las veces que quieras.',
        audio: 'Hallo Carlos, hier ist Frau Becker vom Restaurant Linde. Morgen ist Samstag, und wir haben eine Hochzeit mit achtzig Personen. Kannst du bitte schon um zehn Uhr kommen, nicht um zwölf? Morgen arbeitest du an der Theke, nicht in der Küche. Bring bitte deine schwarze Hose mit. Am Sonntag hast du dann frei. Danke und bis morgen!',
        fragen: [
          { id: 'bz2101', text: 'Die Hochzeit ist am Sonntag.',             loesung: 'f' },
          { id: 'bz2102', text: 'Es kommen achtzig Personen.',              loesung: 'r' },
          { id: 'bz2103', text: 'Carlos soll um zehn Uhr kommen.',          loesung: 'r' },
          { id: 'bz2104', text: 'Carlos arbeitet morgen in der Küche.',     loesung: 'f' },
          { id: 'bz2105', text: 'Am Sonntag hat Carlos frei.',              loesung: 'r' }
        ] },
      { id: 'bz2a2', art: 'hoeren', nummer: 'Tarea 5',
        anweisung: 'Escucha la conversación en el restaurante y elige la respuesta correcta: a, b o c.',
        audio: 'Guten Abend! Haben Sie reserviert? Ja, auf den Namen Schulz, für drei Personen. Sehr gut, Tisch Nummer sieben, am Fenster. Möchten Sie schon etwas trinken? Ja, zwei Wasser, bitte, und einen Apfelsaft für das Kind. Gern. Heute gibt es leider keinen Fisch, aber wir haben eine sehr gute Gemüsesuppe. Dann nehmen wir drei Suppen. Später: Das macht zusammen achtundzwanzig Euro fünfzig. Hier sind dreißig Euro. Stimmt so!',
        fragen: [
          { id: 'bz2201', text: '¿Para cuántas personas es la reserva?',
            optionen: [ { wert: 'a', text: 'Para dos.' }, { wert: 'b', text: 'Para tres.' }, { wert: 'c', text: 'Para siete.' } ], loesung: 'b' },
          { id: 'bz2202', text: '¿Qué mesa tienen?',
            optionen: [ { wert: 'a', text: 'La mesa tres.' }, { wert: 'b', text: 'La mesa diecisiete.' }, { wert: 'c', text: 'La mesa siete.' } ], loesung: 'c' },
          { id: 'bz2203', text: '¿Qué toma el niño?',
            optionen: [ { wert: 'a', text: 'Jugo de manzana.' }, { wert: 'b', text: 'Agua.' }, { wert: 'c', text: 'Leche.' } ], loesung: 'a' },
          { id: 'bz2204', text: '¿Qué no hay hoy?',
            optionen: [ { wert: 'a', text: 'Sopa.' }, { wert: 'b', text: 'Pescado.' }, { wert: 'c', text: 'Verdura.' } ], loesung: 'b' },
          { id: 'bz2205', text: '¿Cuánto es la cuenta?',
            optionen: [ { wert: 'a', text: '30,00 euros.' }, { wert: 'b', text: '38,50 euros.' }, { wert: 'c', text: '28,50 euros.' } ], loesung: 'c' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Estructuras', aufgaben: [
      { id: 'bz3a1', art: 'baustein', nummer: 'Tarea 6',
        anweisung: 'Lee el correo. ¿Qué palabra va en cada hueco? Elige a, b o c.',
        text:
`Hallo Mia,

ich [1] jetzt Küchenhilfe im Hotel Krone. Das Team [2] sehr nett. Mein Chef [3] Herr Wagner.

Ich arbeite [4] Dienstag bis Samstag. Der Dienst beginnt [5] sieben Uhr. Am Morgen wasche ich das Gemüse und [6] die Kartoffeln aus dem Lager.

In der Küche habe ich [7] Kochjacke und eine Mütze. Am Mittag kommen viele Gäste, das Restaurant ist immer [8].

Am Sonntag und am Montag habe ich frei. [9] du am Sonntag Zeit? Ich [10] dir das Hotel zeigen.

Liebe Grüße
Ana`,
        fragen: [
          { id: 'bz3101', text: 'Hueco 1',  optionen: [ { wert: 'a', text: 'ist' }, { wert: 'b', text: 'bin' }, { wert: 'c', text: 'bist' } ], loesung: 'b' },
          { id: 'bz3102', text: 'Hueco 2',  optionen: [ { wert: 'a', text: 'ist' }, { wert: 'b', text: 'sind' }, { wert: 'c', text: 'bin' } ], loesung: 'a' },
          { id: 'bz3103', text: 'Hueco 3',  optionen: [ { wert: 'a', text: 'heiße' }, { wert: 'b', text: 'heißen' }, { wert: 'c', text: 'heißt' } ], loesung: 'c' },
          { id: 'bz3104', text: 'Hueco 4',  optionen: [ { wert: 'a', text: 'von' }, { wert: 'b', text: 'um' }, { wert: 'c', text: 'am' } ], loesung: 'a' },
          { id: 'bz3105', text: 'Hueco 5',  optionen: [ { wert: 'a', text: 'am' }, { wert: 'b', text: 'um' }, { wert: 'c', text: 'im' } ], loesung: 'b' },
          { id: 'bz3106', text: 'Hueco 6',  optionen: [ { wert: 'a', text: 'holen' }, { wert: 'b', text: 'holt' }, { wert: 'c', text: 'hole' } ], loesung: 'c' },
          { id: 'bz3107', text: 'Hueco 7',  optionen: [ { wert: 'a', text: 'eine' }, { wert: 'b', text: 'einen' }, { wert: 'c', text: 'ein' } ], loesung: 'a' },
          { id: 'bz3108', text: 'Hueco 8',  optionen: [ { wert: 'a', text: 'leer' }, { wert: 'b', text: 'voll' }, { wert: 'c', text: 'klein' } ], loesung: 'b' },
          { id: 'bz3109', text: 'Hueco 9',  optionen: [ { wert: 'a', text: 'Habe' }, { wert: 'b', text: 'Hat' }, { wert: 'c', text: 'Hast' } ], loesung: 'c' },
          { id: 'bz3110', text: 'Hueco 10', optionen: [ { wert: 'a', text: 'kann' }, { wert: 'b', text: 'kannst' }, { wert: 'c', text: 'können' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Expresión escrita', aufgaben: [
      { id: 'bz4a1', art: 'schreiben', nummer: 'Tarea 7',
        anweisung: 'Escribe el texto en alemán. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'bz4101',
          auftrag: 'Estás enfermo o enferma y mañana no puedes trabajar. Escribe un mensaje corto a tu jefa, la señora Becker.',
          punkte: [ 'Di que estás enfermo/a y que mañana no puedes trabajar.', 'Di que hoy vas al médico.', 'Pregunta si puedes trabajar el sábado.' ],
          umfang: 'Escribe entre 20 y 30 palabras.',
          auftragZiel: 'Du bist krank und kannst morgen nicht arbeiten. Schreib eine kurze Nachricht an deine Chefin, Frau Becker.',
          punkteZiel: [ 'Sag, dass du krank bist und morgen nicht arbeiten kannst.', 'Sag, dass du heute zum Arzt gehst.', 'Frag, ob du am Samstag arbeiten kannst.' ],
          umfangZiel: 'Schreibe 20 bis 30 Wörter.',
          kriterienZiel: [
            'Anrede und Gruß sind vorhanden.',
            'Alle drei Punkte sind behandelt.',
            'Die Frage nach Samstag ist eine echte Frage (Verb vorne).',
            'Das Verb steht in den Aussagesätzen an zweiter Position.',
            'Die Nachricht ist ohne Nachfragen verständlich.'
          ],
          kriterien: [
            'Hay saludo y despedida.',
            'Se tratan los tres puntos.',
            'La pregunta del sábado es una pregunta de verdad (verbo al principio).',
            'En las frases afirmativas el verbo va en segunda posición.',
            'El mensaje se entiende sin tener que preguntar.'
          ],
          muster:
`Hallo Frau Becker,

ich bin leider krank und kann morgen nicht arbeiten. Heute gehe ich zum Arzt.

Kann ich am Samstag arbeiten?

Viele Grüße
Carlos`
        } ] }
    ] },

    { id: 't5', art: 'sprechen', name: 'Expresión oral', aufgaben: [
      { id: 'bz5a1', art: 'sprechen', nummer: 'Tarea 8',
        anweisung: 'Habla en alemán y grábate. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'bz5101', dauer: 90,
          auftrag: 'Es tu primer día. Preséntate a tu nuevo equipo.',
          punkte: [ 'Tu nombre y de dónde vienes', 'Dónde vives', 'Qué idiomas hablas', 'Tu profesión y qué haces aquí', 'Qué días trabajas' ],
          umfang: 'Habla entre 30 y 60 segundos.',
          auftragZiel: 'Es ist dein erster Arbeitstag. Stell dich deinem neuen Team vor.',
          punkteZiel: [ 'Name und Herkunft', 'Wohnort', 'Sprachen', 'Beruf und Aufgabe hier', 'Arbeitstage' ],
          umfangZiel: 'Sprich 30 bis 60 Sekunden.',
          kriterienZiel: [
            'Alle fünf Punkte kommen vor.',
            'Die Sätze sind einfach, aber vollständig (Verb an zweiter Position).',
            'Berufe und Wochentage sind richtig (Köchin, am Montag …).',
            'Die Aussprache stört das Verständnis nicht.',
            'Man versteht alles ohne Nachfragen.'
          ],
          kriterien: [
            'Aparecen los cinco puntos.',
            'Las frases son sencillas pero completas (verbo en segunda posición).',
            'Las profesiones y los días están bien dichos (Köchin, am Montag …).',
            'La pronunciación no dificulta la comprensión.',
            'Se entiende todo sin tener que preguntar.'
          ],
          muster:
`Hallo zusammen! Ich heiße Carlos und komme aus Mexiko.

Ich wohne jetzt in Bremen, nicht weit vom Restaurant.

Ich spreche Spanisch, Englisch und ein bisschen Deutsch.

Ich bin Koch von Beruf. Hier bin ich in der Küche, am Anfang als Küchenhilfe.

Ich arbeite von Dienstag bis Samstag. Am Sonntag und am Montag habe ich frei.

Danke und bis bald!`
        } ] }
    ] }
  ]
});
