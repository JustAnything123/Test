/* Prüfung · Deutsch im Beruf · Zwischenstopp nach Tag 30 — Grundpfad

   Vorbild telc Deutsch B1·B2 Beruf. Geprüft wird der Arbeitstag aus Küche,
   Service, Rezeption und Ernährung, wie er in den Tagen 1–30 vorkam. */

PRUEFUNG('de-beruf', {
  id: 'p-de-beruf-1', nachTag: 30, niveau: 'B1',
  name: 'Examen 1 · El turno diario', vorbild: 'telc Deutsch B1·B2 Beruf',
  bestehen: 60, dauer: 60,
  teile: [
    { id: 't1', art: 'lesen', name: 'Comprensión de lectura', aufgaben: [
      { id: 'ba1a1', art: 'rf', nummer: 'Tarea 1',
        anweisung: 'Lee el aviso del tablón del personal. ¿Las afirmaciones son verdaderas o falsas?',
        text:
`An alle Mitarbeiterinnen und Mitarbeiter,

ab Montag gilt der neue Dienstplan. Die Frühschicht beginnt um 6:30 Uhr, nicht mehr um 7:00 Uhr. Die Spätschicht endet unverändert um 23:00 Uhr.

Bitte tragt die Temperaturen der Kühlschränke weiterhin zweimal täglich ins Protokoll ein — morgens und vor Schichtende. Wer eine Abweichung feststellt, meldet sie sofort der Küchenleitung und notiert sie zusätzlich im Protokoll.

Die Lieferung kommt ab sofort dienstags und freitags. Bitte kontrolliert bei der Annahme das Haltbarkeitsdatum und die Temperatur der Ware.

Urlaubsanträge für den Sommer bitte bis zum 30. April abgeben.`,
        fragen: [
          { id: 'ba1101', text: 'Die Frühschicht beginnt ab Montag eine halbe Stunde früher.', loesung: 'r' },
          { id: 'ba1102', text: 'Die Spätschicht endet jetzt später.',                         loesung: 'f' },
          { id: 'ba1103', text: 'Die Temperaturen werden zweimal am Tag eingetragen.',         loesung: 'r' },
          { id: 'ba1104', text: 'Abweichungen darf man bis Schichtende sammeln.',              loesung: 'f' },
          { id: 'ba1105', text: 'Urlaubsanträge sind bis Ende April abzugeben.',               loesung: 'r' }
        ] },
      { id: 'ba1a2', art: 'zuordnen', nummer: 'Tarea 2',
        anweisung: 'Cinco situaciones del turno. ¿Qué frase encaja en cada una? Sobra una.',
        optionen: [
          { wert: 'A', text: 'Einen Moment bitte, ich frage in der Küche nach und komme sofort zurück.' },
          { wert: 'B', text: 'Das tut mir sehr leid. Ich bringe Ihnen selbstverständlich ein neues Gericht.' },
          { wert: 'C', text: 'Darf ich Ihnen schon etwas zu trinken bringen, während Sie die Karte ansehen?' },
          { wert: 'D', text: 'Auf welchen Namen darf ich die Reservierung eintragen? Können Sie das buchstabieren?' },
          { wert: 'E', text: 'Zusammen oder getrennt? Und darf es bar oder mit Karte sein?' },
          { wert: 'F', text: 'Ihr Zimmer ist im dritten Stock, der Aufzug ist rechts hinter der Treppe.' }
        ],
        fragen: [
          { id: 'ba1201', text: 'Ein Gast sagt, das Essen sei kalt.',                            loesung: 'B' },
          { id: 'ba1202', text: 'Ein Gast fragt nach einer Zutat, die du nicht kennst.',         loesung: 'A' },
          { id: 'ba1203', text: 'Der Gast hat gerade Platz genommen.',                           loesung: 'C' },
          { id: 'ba1204', text: 'Jemand reserviert telefonisch einen Tisch.',                    loesung: 'D' },
          { id: 'ba1205', text: 'Der Gast möchte zahlen.',                                       loesung: 'E' }
        ] },
      { id: 'ba1a3', art: 'mc', nummer: 'Tarea 3',
        anweisung: 'Lee el texto y elige la respuesta correcta: a, b o c.',
        text:
`Die 14 Hauptallergene müssen im Betrieb jederzeit auskunftsfähig sein. Das bedeutet nicht, dass jede Servicekraft sie auswendig weiß, sondern dass sie innerhalb kurzer Zeit eine verlässliche Antwort geben kann.

Auf keinen Fall darf geraten werden. Die richtige Formulierung lautet: „Einen Moment bitte, ich frage in der Küche nach." Erst danach folgt die Auskunft.

Bei einer schweren Allergie genügt es nicht, die Zutat wegzulassen. Auch Spuren durch dasselbe Schneidebrett oder dasselbe Frittierfett können gefährlich sein. Deshalb wird die Küche immer informiert, bevor die Bestellung aufgenommen wird.`,
        fragen: [
          { id: 'ba1301', text: '¿Qué significa «auskunftsfähig sein»?',
            optionen: [ { wert: 'a', text: 'Saberse los 14 alérgenos de memoria.' }, { wert: 'b', text: 'Poder dar una respuesta fiable en poco tiempo.' }, { wert: 'c', text: 'Tener una lista en la pared.' } ], loesung: 'b' },
          { id: 'ba1302', text: '¿Qué no se debe hacer nunca?',
            optionen: [ { wert: 'a', text: 'Adivinar.' }, { wert: 'b', text: 'Preguntar en la cocina.' }, { wert: 'c', text: 'Pedir un momento.' } ], loesung: 'a' },
          { id: 'ba1303', text: '¿Por qué no basta con quitar el ingrediente?',
            optionen: [ { wert: 'a', text: 'Porque el plato sabría distinto.' }, { wert: 'b', text: 'Porque puede haber trazas por la tabla o el aceite.' }, { wert: 'c', text: 'Porque la carta no lo permite.' } ], loesung: 'b' },
          { id: 'ba1304', text: '¿Cuándo se informa a la cocina?',
            optionen: [ { wert: 'a', text: 'Después de servir.' }, { wert: 'b', text: 'Al final del turno.' }, { wert: 'c', text: 'Antes de tomar la comanda.' } ], loesung: 'c' },
          { id: 'ba1305', text: 'La frase «Einen Moment bitte, ich frage in der Küche nach» sirve para…',
            optionen: [ { wert: 'a', text: 'ganar tiempo y dar una respuesta segura.' }, { wert: 'b', text: 'rechazar al cliente.' }, { wert: 'c', text: 'cobrar más.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Comprensión auditiva', aufgaben: [
      { id: 'ba2a1', art: 'hoeren', nummer: 'Tarea 4',
        anweisung: 'Escucha el traspaso de turno y responde.',
        audio: 'So, ich übergebe dir die Schicht. Tisch vier hat schon bestellt, das Essen kommt gleich raus. Die Suppe für Tisch sieben muss noch abgeschmeckt werden. Der Herd hinten ist ausgemacht, der Backofen läuft noch auf hundertsechzig Grad. Die Lieferung ist angekommen und eingeräumt, aber die Temperatur ist noch nicht ins Protokoll eingetragen. Und in Zimmer zwölf fehlt ein Kissenbezug, das musst du an die Rezeption weitergeben.',
        fragen: [
          { id: 'ba2101', text: 'Tisch vier hat noch nicht bestellt.',                 loesung: 'f' },
          { id: 'ba2102', text: 'Die Suppe muss noch abgeschmeckt werden.',            loesung: 'r' },
          { id: 'ba2103', text: 'Der Backofen ist ausgeschaltet.',                     loesung: 'f' },
          { id: 'ba2104', text: 'Die Temperatur der Lieferung fehlt im Protokoll.',    loesung: 'r' },
          { id: 'ba2105', text: 'In Zimmer zwölf fehlt ein Kissenbezug.',              loesung: 'r' }
        ] },
      { id: 'ba2a2', art: 'hoeren', nummer: 'Tarea 5',
        anweisung: 'Escucha la llamada y elige la respuesta correcta: a, b o c.',
        audio: 'Guten Tag, hier ist Familie Brandner, B wie Berta, R wie Richard, A wie Anton, N wie Nordpol, D wie Dora, N wie Nordpol, E wie Emil, R wie Richard. Wir haben ein Doppelzimmer für Freitag gebucht. Wir würden gern einen Tag früher anreisen, also schon am Donnerstag. Und wenn möglich hätten wir gern ein Zimmer mit Balkon. Wir kommen erst gegen zweiundzwanzig Uhr an.',
        fragen: [
          { id: 'ba2201', text: '¿Cómo se escribe el apellido?',
            optionen: [ { wert: 'a', text: 'Brantner.' }, { wert: 'b', text: 'Brandner.' }, { wert: 'c', text: 'Brander.' } ], loesung: 'b' },
          { id: 'ba2202', text: '¿Qué tipo de habitación tienen reservada?',
            optionen: [ { wert: 'a', text: 'Individual.' }, { wert: 'b', text: 'Doble.' }, { wert: 'c', text: 'Suite.' } ], loesung: 'b' },
          { id: 'ba2203', text: '¿Qué quieren cambiar?',
            optionen: [ { wert: 'a', text: 'Llegar un día antes.' }, { wert: 'b', text: 'Llegar un día después.' }, { wert: 'c', text: 'Anular la reserva.' } ], loesung: 'a' },
          { id: 'ba2204', text: '¿Qué desean además?',
            optionen: [ { wert: 'a', text: 'Una habitación con balcón.' }, { wert: 'b', text: 'Una cama supletoria.' }, { wert: 'c', text: 'Media pensión.' } ], loesung: 'a' },
          { id: 'ba2205', text: '¿A qué hora llegan?',
            optionen: [ { wert: 'a', text: 'Sobre las doce.' }, { wert: 'b', text: 'Sobre las veinte.' }, { wert: 'c', text: 'Sobre las veintidós.' } ], loesung: 'c' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Estructuras', aufgaben: [
      { id: 'ba3a1', art: 'baustein', nummer: 'Tarea 6',
        anweisung: 'Lee el texto. ¿Qué forma va en cada hueco? Elige a, b o c.',
        text:
`Notiz für die Spätschicht:

[1] bitte die Kühlschranktemperaturen vor Schichtende. Die Werte kommen [2] das Protokoll.

Die Lieferung von heute [3] schon eingeräumt worden. Das Hackfleisch muss [4] heute verbraucht werden.

Tisch sechs hat eine Nussallergie. Bitte [5] der Küche Bescheid, bevor du die Bestellung aufnimmst. Wenn ein Gast fragt, ob ein Gericht Nüsse [6], sag nie „ich glaube nicht".

Die Suppe schmeckt [7] Muskat — das war Absicht. Falls sie [8] salzig ist, gib etwas Sahne dazu.

Herr Becker von Zimmer 12 wollte wissen, [9] das Frühstück im Preis inbegriffen ist. Ja, ist es.

Danke, dass du [10] die Übergabe kümmerst.`,
        fragen: [
          { id: 'ba3101', text: 'Hueco 1',  optionen: [ { wert: 'a', text: 'Miss' }, { wert: 'b', text: 'Misst' }, { wert: 'c', text: 'Messen' } ], loesung: 'a' },
          { id: 'ba3102', text: 'Hueco 2',  optionen: [ { wert: 'a', text: 'in' }, { wert: 'b', text: 'im' }, { wert: 'c', text: 'ins' } ], loesung: 'c' },
          { id: 'ba3103', text: 'Hueco 3',  optionen: [ { wert: 'a', text: 'ist' }, { wert: 'b', text: 'hat' }, { wert: 'c', text: 'wird' } ], loesung: 'a' },
          { id: 'ba3104', text: 'Hueco 4',  optionen: [ { wert: 'a', text: 'noch' }, { wert: 'b', text: 'schon' }, { wert: 'c', text: 'erst' } ], loesung: 'a' },
          { id: 'ba3105', text: 'Hueco 5',  optionen: [ { wert: 'a', text: 'sagst' }, { wert: 'b', text: 'sag' }, { wert: 'c', text: 'sagen' } ], loesung: 'b' },
          { id: 'ba3106', text: 'Hueco 6',  optionen: [ { wert: 'a', text: 'enthält' }, { wert: 'b', text: 'enthalten' }, { wert: 'c', text: 'enthaltet' } ], loesung: 'a' },
          { id: 'ba3107', text: 'Hueco 7',  optionen: [ { wert: 'a', text: 'nach' }, { wert: 'b', text: 'zu' }, { wert: 'c', text: 'an' } ], loesung: 'a' },
          { id: 'ba3108', text: 'Hueco 8',  optionen: [ { wert: 'a', text: 'zu' }, { wert: 'b', text: 'nach' }, { wert: 'c', text: 'viel' } ], loesung: 'a' },
          { id: 'ba3109', text: 'Hueco 9',  optionen: [ { wert: 'a', text: 'dass' }, { wert: 'b', text: 'ob' }, { wert: 'c', text: 'wenn' } ], loesung: 'b' },
          { id: 'ba3110', text: 'Hueco 10', optionen: [ { wert: 'a', text: 'dich um' }, { wert: 'b', text: 'dir um' }, { wert: 'c', text: 'sich um' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Expresión escrita', aufgaben: [
      { id: 'ba4a1', art: 'schreiben', nummer: 'Tarea 7',
        anweisung: 'Escribe el texto en alemán. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'ba4101',
          auftrag: 'Un cliente se quejó por escrito: su plato llegó frío y esperó mucho. El jefe te pide que redactes la respuesta.',
          punkte: [ 'Discúlpate concretamente, sin excusas vagas.', 'Explica qué pasó.', 'Ofrece una solución.', 'Invítalo a volver.' ],
          umfang: 'Escribe entre 100 y 130 palabras.',
          auftragZiel: 'Ein Gast hat sich schriftlich beschwert: Sein Essen kam kalt, und er hat lange gewartet. Der Chef bittet dich, die Antwort zu schreiben.',
          punkteZiel: [ 'Entschuldige dich konkret, ohne vage Ausreden.', 'Erkläre, was passiert ist.', 'Biete eine Lösung an.', 'Lade ihn ein, wiederzukommen.' ],
          umfangZiel: 'Schreibe 100 bis 130 Wörter.',
          kriterienZiel: [
            'Anrede und Grußformel passen zu einem Geschäftsbrief.',
            'Die Entschuldigung ist konkret und nicht nur floskelhaft.',
            'Alle vier Punkte sind behandelt.',
            'Die Sie-Form wird durchgehalten.',
            'Der Text hat mindestens 100 Wörter.'
          ],
          kriterien: [
            'El saludo y la despedida son adecuados para una carta comercial.',
            'La disculpa es concreta, no solo una fórmula.',
            'Se tratan los cuatro puntos.',
            'Se mantiene la forma Sie.',
            'El texto tiene al menos 100 palabras.'
          ],
          muster:
`Sehr geehrter Herr Sandoval,

vielen Dank für Ihre Nachricht. Es tut mir aufrichtig leid, dass Sie bei uns lange warten mussten und Ihr Essen nicht mehr warm war.

Am vergangenen Samstag ist in der Küche ein Gerät ausgefallen. Wir haben versucht, alle Gäste trotzdem zu bedienen, und das ist uns in Ihrem Fall nicht gelungen. Das war unser Fehler, nicht Ihrer.

Wir haben den Betrag für Ihren Hauptgang bereits erstattet. Außerdem möchten wir Sie gern noch einmal einladen — Sie erhalten diese E-Mail als Gutschein für zwei Personen.

Ich würde mich freuen, Sie wieder bei uns begrüßen zu dürfen.

Mit freundlichen Grüßen
D. Z., Restaurantleitung`
        } ] }
    ] }
  ]
});
