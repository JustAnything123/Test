/* Prüfung · Deutsch im Beruf · Zwischenstopp nach Tag 45 — Fachwortschatz

   Hier wird geprüft, was den Profi vom Anfänger unterscheidet: nicht „das
   Messer", sondern welches. Dazu die Wortbildungsregel aus Tag 31, mit der
   sich solche Begriffe selbst herleiten lassen. */

PRUEFUNG('de-beruf', {
  id: 'p-de-beruf-2', nachTag: 45, niveau: 'B2',
  name: 'Examen 2 · Vocabulario técnico', vorbild: 'telc Deutsch B1·B2 Beruf',
  bestehen: 60, dauer: 60,
  teile: [
    { id: 't1', art: 'lesen', name: 'Comprensión de lectura', aufgaben: [
      { id: 'bb1a1', art: 'rf', nummer: 'Tarea 1',
        anweisung: 'Lee el estándar de la casa. ¿Las afirmaciones son verdaderas o falsas?',
        text:
`Standard für das Gedeck — à la carte

Der Platzteller bleibt bis zur Vorspeise stehen und wird erst danach abgeräumt. Auf ihn kommt kein Essen.

Das Besteck wird von außen nach innen benutzt. Ganz außen liegen Suppenlöffel und Vorspeisengabel, innen das Fleischmesser und die Fleischgabel. Der Dessertlöffel liegt quer über dem Teller, nicht seitlich.

Der Brotteller steht links oben, das Buttermesser liegt darauf. Die Gläser stehen rechts über dem Messer: Wasserglas vorn, Weinglas dahinter.

Suppenteller werden vor dem Service vorgewärmt. Teller für kalte Vorspeisen dürfen nicht vorgewärmt werden.`,
        fragen: [
          { id: 'bb1101', text: 'Auf den Platzteller wird Essen angerichtet.',                loesung: 'f' },
          { id: 'bb1102', text: 'Das Besteck wird von außen nach innen benutzt.',             loesung: 'r' },
          { id: 'bb1103', text: 'Der Dessertlöffel liegt seitlich neben dem Teller.',         loesung: 'f' },
          { id: 'bb1104', text: 'Das Buttermesser liegt auf dem Brotteller.',                 loesung: 'r' },
          { id: 'bb1105', text: 'Teller für kalte Vorspeisen werden auch vorgewärmt.',        loesung: 'f' }
        ] },
      { id: 'bb1a2', art: 'zuordnen', nummer: 'Tarea 2',
        anweisung: 'Cinco tareas del turno. ¿Qué utensilio hace falta en cada caso? Sobra uno.',
        optionen: [
          { wert: 'A', text: 'das Filetiermesser' },
          { wert: 'B', text: 'der Durchschlag' },
          { wert: 'C', text: 'der Schneebesen' },
          { wert: 'D', text: 'die Küchenzange' },
          { wert: 'E', text: 'der Wetzstahl' },
          { wert: 'F', text: 'die Küchenwaage' }
        ],
        fragen: [
          { id: 'bb1201', text: 'Der Lachs soll von der Gräte gelöst werden.',               loesung: 'A' },
          { id: 'bb1202', text: 'Die Nudeln sind fertig und müssen abgegossen werden.',      loesung: 'B' },
          { id: 'bb1203', text: 'Die Soße hat Klümpchen und soll glatt werden.',             loesung: 'C' },
          { id: 'bb1204', text: 'Das Steak in der Pfanne muss gewendet werden.',             loesung: 'D' },
          { id: 'bb1205', text: 'Das Kochmesser schneidet nicht mehr sauber.',               loesung: 'E' }
        ] },
      { id: 'bb1a3', art: 'mc', nummer: 'Tarea 3',
        anweisung: 'Lee el texto y elige la respuesta correcta: a, b o c.',
        text:
`Das Deutsche erfindet für Fachbegriffe kaum neue Wörter — es setzt sie zusammen. Die wichtige Information steht dabei immer hinten, und dieses letzte Wort bestimmt auch den Artikel: das Messer, also das Fleischmesser; der Teller, also der Suppenteller.

Steht vorne ein Verb, wird nur der Stamm genommen, ohne die Endung -en: braten wird zu Brat-, also die Bratpfanne. Manchmal schiebt sich eine Fuge dazwischen, meist -n oder -s: Suppe + n + Teller.

Diese Regel greift allerdings nicht bei den Berufsbezeichnungen im Haus. Chef de Rang, Commis, Sommelier und Sous-Chef kommen aus dem Französischen und müssen einzeln gelernt werden.`,
        fragen: [
          { id: 'bb1301', text: '¿Dónde está la información importante en una palabra compuesta?',
            optionen: [ { wert: 'a', text: 'Al final.' }, { wert: 'b', text: 'Al principio.' }, { wert: 'c', text: 'En el medio.' } ], loesung: 'a' },
          { id: 'bb1302', text: '¿Qué determina el artículo?',
            optionen: [ { wert: 'a', text: 'La primera palabra.' }, { wert: 'b', text: 'La última palabra.' }, { wert: 'c', text: 'La longitud.' } ], loesung: 'b' },
          { id: 'bb1303', text: 'Si delante va un verbo, se usa…',
            optionen: [ { wert: 'a', text: 'el infinitivo completo.' }, { wert: 'b', text: 'el participio.' }, { wert: 'c', text: 'solo la raíz, sin -en.' } ], loesung: 'c' },
          { id: 'bb1304', text: '¿Para qué sirve la letra de unión?',
            optionen: [ { wert: 'a', text: 'Cambia el significado.' }, { wert: 'b', text: 'Facilita la pronunciación.' }, { wert: 'c', text: 'Marca el plural.' } ], loesung: 'b' },
          { id: 'bb1305', text: '¿Dónde no funciona la regla?',
            optionen: [ { wert: 'a', text: 'En los nombres de los puestos, de origen francés.' }, { wert: 'b', text: 'En los utensilios de cocina.' }, { wert: 'c', text: 'En los tipos de habitación.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't2', art: 'hoeren', name: 'Comprensión auditiva', aufgaben: [
      { id: 'bb2a1', art: 'hoeren', nummer: 'Tarea 4',
        anweisung: 'Escucha la instrucción de la cocina y responde.',
        audio: 'Hör zu: Für Tisch neun brauche ich zweimal Rinderfilet, einmal blutig, einmal rosa. Die Kartoffeln bitte tournieren, nicht würfeln. Den Lachs für Tisch vier filetieren und entgräten, und achte darauf, dass keine Gräte drinbleibt. Die Möhren schneidest du in feine Julienne, nicht in Scheiben. Und stell die Suppenteller schon mal in den Wärmeschrank.',
        fragen: [
          { id: 'bb2101', text: 'Ein Rinderfilet soll durchgebraten werden.',       loesung: 'f' },
          { id: 'bb2102', text: 'Die Kartoffeln sollen tourniert werden.',          loesung: 'r' },
          { id: 'bb2103', text: 'Der Lachs soll filetiert und entgrätet werden.',   loesung: 'r' },
          { id: 'bb2104', text: 'Die Möhren werden in Scheiben geschnitten.',       loesung: 'f' },
          { id: 'bb2105', text: 'Die Suppenteller sollen vorgewärmt werden.',       loesung: 'r' }
        ] },
      { id: 'bb2a2', art: 'hoeren', nummer: 'Tarea 5',
        anweisung: 'Escucha la instrucción de recepción y elige la respuesta correcta: a, b o c.',
        audio: 'Für heute Abend: Zimmer zweihundertvier ist ein Abreisezimmer und wird zuerst gereinigt. Zimmer zweihundertsechs ist ein Bleibezimmer, da reicht das Nötigste. Familie Kern hat ein Familienzimmer mit Zustellbett gebucht, für zwei Erwachsene und zwei Kinder, mit Halbpension. Bitte zwei Badetücher und zwei Gästehandtücher pro Person. Für den Spiegel im Bad nimmst du den Glasreiniger, nicht den Sanitärreiniger.',
        fragen: [
          { id: 'bb2201', text: '¿Qué habitación se limpia primero?',
            optionen: [ { wert: 'a', text: 'La 204, de salida.' }, { wert: 'b', text: 'La 206, ocupada.' }, { wert: 'c', text: 'Ninguna de las dos.' } ], loesung: 'a' },
          { id: 'bb2202', text: '¿Qué tipo de habitación reservó la familia Kern?',
            optionen: [ { wert: 'a', text: 'Doble.' }, { wert: 'b', text: 'Familiar con cama supletoria.' }, { wert: 'c', text: 'Dos individuales.' } ], loesung: 'b' },
          { id: 'bb2203', text: '¿Qué régimen tienen?',
            optionen: [ { wert: 'a', text: 'Solo alojamiento.' }, { wert: 'b', text: 'Media pensión.' }, { wert: 'c', text: 'Pensión completa.' } ], loesung: 'b' },
          { id: 'bb2204', text: '¿Cuántas toallas de baño por persona?',
            optionen: [ { wert: 'a', text: 'Una.' }, { wert: 'b', text: 'Dos.' }, { wert: 'c', text: 'Tres.' } ], loesung: 'b' },
          { id: 'bb2205', text: '¿Qué producto se usa para el espejo?',
            optionen: [ { wert: 'a', text: 'El limpiacristales.' }, { wert: 'b', text: 'El limpiador sanitario.' }, { wert: 'c', text: 'El limpiador multiusos.' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't3', art: 'bausteine', name: 'Estructuras', aufgaben: [
      { id: 'bb3a1', art: 'baustein', nummer: 'Tarea 6',
        anweisung: 'Lee el texto. ¿Qué palabra va en cada hueco? Elige a, b o c.',
        text:
`Einweisung für den ersten Tag

Ein Messer für Fisch heißt [1]. Ein Teller für Suppe heißt [2]. Es heißt [3] Suppenteller, weil es der Teller heißt.

Eine Pfanne zum Braten ist [4]. Bei solchen Wörtern steht vorne der [5] des Verbs.

Die Teller [6] vor dem Service vorgewärmt. Das Besteck wird mit einem Tuch [7].

Bring [8] Gast bitte ein frisches Handtuch. Wir bringen den [9] jeden Morgen frische Handtücher.

Das Frühstück ist im Preis [10].`,
        fragen: [
          { id: 'bb3101', text: 'Hueco 1',  optionen: [ { wert: 'a', text: 'das Fischmesser' }, { wert: 'b', text: 'das Messerfisch' }, { wert: 'c', text: 'der Fischmesser' } ], loesung: 'a' },
          { id: 'bb3102', text: 'Hueco 2',  optionen: [ { wert: 'a', text: 'der Suppeteller' }, { wert: 'b', text: 'der Suppenteller' }, { wert: 'c', text: 'das Tellersuppe' } ], loesung: 'b' },
          { id: 'bb3103', text: 'Hueco 3',  optionen: [ { wert: 'a', text: 'das' }, { wert: 'b', text: 'die' }, { wert: 'c', text: 'der' } ], loesung: 'c' },
          { id: 'bb3104', text: 'Hueco 4',  optionen: [ { wert: 'a', text: 'die Bratenpfanne' }, { wert: 'b', text: 'die Bratpfanne' }, { wert: 'c', text: 'die Pfannenbrat' } ], loesung: 'b' },
          { id: 'bb3105', text: 'Hueco 5',  optionen: [ { wert: 'a', text: 'Stamm' }, { wert: 'b', text: 'Infinitiv' }, { wert: 'c', text: 'Artikel' } ], loesung: 'a' },
          { id: 'bb3106', text: 'Hueco 6',  optionen: [ { wert: 'a', text: 'wird' }, { wert: 'b', text: 'werden' }, { wert: 'c', text: 'sind' } ], loesung: 'b' },
          { id: 'bb3107', text: 'Hueco 7',  optionen: [ { wert: 'a', text: 'poliert' }, { wert: 'b', text: 'gepoliert' }, { wert: 'c', text: 'polieren' } ], loesung: 'a' },
          { id: 'bb3108', text: 'Hueco 8',  optionen: [ { wert: 'a', text: 'den' }, { wert: 'b', text: 'dem' }, { wert: 'c', text: 'der' } ], loesung: 'b' },
          { id: 'bb3109', text: 'Hueco 9',  optionen: [ { wert: 'a', text: 'Gäste' }, { wert: 'b', text: 'Gästen' }, { wert: 'c', text: 'Gastes' } ], loesung: 'b' },
          { id: 'bb3110', text: 'Hueco 10', optionen: [ { wert: 'a', text: 'inbegriffen' }, { wert: 'b', text: 'zuzüglich' }, { wert: 'c', text: 'begriffen' } ], loesung: 'a' }
        ] }
    ] },

    { id: 't4', art: 'schreiben', name: 'Expresión escrita', aufgaben: [
      { id: 'bb4a1', art: 'schreiben', nummer: 'Tarea 7',
        anweisung: 'Escribe el texto en alemán. Esta tarea no se evalúa automáticamente.',
        fragen: [ {
          id: 'bb4101',
          auftrag: 'Empieza un compañero nuevo. Escríbele una nota con el estándar de la casa para poner la mesa.',
          punkte: [
            'Explica dónde va el cubierto y en qué orden se usa.',
            'Nombra al menos cuatro tipos de plato o cubierto con su nombre exacto.',
            'Di qué platos se precalientan y cuáles no.',
            'Añade un consejo práctico.'
          ],
          umfang: 'Escribe entre 100 y 130 palabras.',
          auftragZiel: 'Ein neuer Kollege fängt an. Schreib ihm eine Notiz mit dem Hausstandard für das Eindecken.',
          punkteZiel: [
            'Erkläre, wo das Besteck liegt und in welcher Reihenfolge es benutzt wird.',
            'Nenne mindestens vier Teller- oder Besteckarten beim genauen Namen.',
            'Sag, welche Teller vorgewärmt werden und welche nicht.',
            'Gib einen praktischen Tipp dazu.'
          ],
          umfangZiel: 'Schreibe 100 bis 130 Wörter.',
          kriterienZiel: [
            'Mindestens vier Fachbegriffe werden korrekt verwendet (z. B. Platzteller, Suppenteller, Buttermesser, Dessertlöffel).',
            'Die Artikel der Fachbegriffe stimmen.',
            'Alle vier Punkte sind behandelt.',
            'Der Text ist als Anweisung verständlich, auch für jemanden, der neu ist.',
            'Der Text hat mindestens 100 Wörter.'
          ],
          kriterien: [
            'Se usan correctamente al menos cuatro términos técnicos (p. ej. Platzteller, Suppenteller, Buttermesser, Dessertlöffel).',
            'Los artículos de esos términos son correctos.',
            'Se tratan los cuatro puntos.',
            'El texto se entiende como instrucción, también para alguien nuevo.',
            'El texto tiene al menos 100 palabras.'
          ],
          muster:
`Hallo Andrés,

hier kurz unser Standard fürs Eindecken.

Der Platzteller kommt in die Mitte und bleibt bis zur Vorspeise stehen. Das Besteck wird von außen nach innen benutzt: außen der Suppenlöffel und die Vorspeisengabel, innen das Fleischmesser und die Fleischgabel. Der Dessertlöffel liegt quer über dem Teller.

Der Brotteller steht links oben, das Buttermesser liegt darauf. Die Gläser stehen rechts über dem Messer.

Die Suppenteller werden vorgewärmt, die Teller für kalte Vorspeisen nicht — das ist der häufigste Fehler.

Tipp: Fass die Gläser immer am Stiel an, dann bleiben keine Fingerabdrücke drauf.

Meld dich, wenn etwas unklar ist.

Viele Grüße
Dennis`
        } ] }
    ] }
  ]
});
