/* Día 21–30 · Nivel A1 · Adjetivos, reflexivos y cierre del nivel */

LEKTION('de', {
  tag: 21, niveau: "A1", thema: "Describir cosas",
  vokabeln: [
    { id: "v2101", de: "groß",           es: "grande",         wortart: "adjetivo", beispiel: "Die Wohnung ist groß.", beispielUe: "El departamento es grande." },
    { id: "v2102", de: "klein",          es: "pequeño",        wortart: "adjetivo", beispiel: "Mein Zimmer ist klein.", beispielUe: "Mi cuarto es pequeño." },
    { id: "v2103", de: "schön",          es: "bonito",         wortart: "adjetivo", beispiel: "Das Wetter ist schön.", beispielUe: "El clima está bonito." },
    { id: "v2104", de: "hässlich",       es: "feo",            wortart: "adjetivo", beispiel: "Das Gebäude ist hässlich.", beispielUe: "El edificio es feo." },
    { id: "v2105", de: "interessant",    es: "interesante",    wortart: "adjetivo", beispiel: "Der Film war interessant.", beispielUe: "La película fue interesante." },
    { id: "v2106", de: "langweilig",     es: "aburrido",       wortart: "adjetivo", beispiel: "Das Buch ist langweilig.", beispielUe: "El libro es aburrido." },
    { id: "v2107", de: "bequem",         es: "cómodo",         wortart: "adjetivo", beispiel: "Der Stuhl ist bequem.", beispielUe: "La silla es cómoda." },
    { id: "v2108", de: "laut",           es: "ruidoso",        wortart: "adjetivo", beispiel: "Die Straße ist laut.", beispielUe: "La calle es ruidosa." },
    { id: "v2109", de: "ruhig",          es: "tranquilo",      wortart: "adjetivo", beispiel: "Das Viertel ist ruhig.", beispielUe: "El barrio es tranquilo." },
    { id: "v2110", de: "das Zimmer",     es: "el cuarto",      wortart: "sustantivo", beispiel: "Das Zimmer ist hell.", beispielUe: "El cuarto es luminoso." }
  ],
  saetze: [
    { id: "s2101", de: "Meine Wohnung ist größer als deine.", es: "Mi departamento es más grande que el tuyo." },
    { id: "s2102", de: "Berlin ist die größte Stadt Deutschlands.", es: "Berlín es la ciudad más grande de Alemania." },
    { id: "s2103", de: "Der Film war interessanter als das Buch.", es: "La película fue más interesante que el libro." },
    { id: "s2104", de: "Hier ist es genauso ruhig wie dort.", es: "Aquí es igual de tranquilo que allá." },
    { id: "s2105", de: "Das ist die beste Lösung.",          es: "Esa es la mejor solución." }
  ],
  grammatik: {
    id: "g21", titel: "Comparar: größer, am größten",
    erklaerung: `
      <p>El alemán compara con <strong>terminaciones</strong>, no con palabras sueltas como
      el español. Donde nosotros decimos «más grande», el alemán dice
      <em>größ<strong>er</strong></em>.</p>
      <table>
        <tr><th>Grado</th><th>Forma</th><th>Ejemplo</th></tr>
        <tr><td>positivo</td><td>adjetivo</td><td><em>klein</em> (pequeño)</td></tr>
        <tr><td>comparativo</td><td>+ <em>-er</em></td><td><em>kleiner</em> (más pequeño)</td></tr>
        <tr><td>superlativo</td><td><em>am</em> + <em>-sten</em></td><td><em>am kleinsten</em> (el más pequeño)</td></tr>
      </table>
      <div class="merke"><strong>Cuidado, trampa habitual:</strong> nunca se dice
      <s>mehr groß</s>. El «más» ya está dentro de la terminación <em>-er</em>. Es como el
      inglés <em>bigger</em>, no <em>more big</em>.</div>
      <p><strong>Muchos adjetivos cortos añaden Umlaut:</strong></p>
      <table>
        <tr><td>alt → <em>älter</em> → am ältesten</td><td>groß → <em>größer</em> → am größten</td></tr>
        <tr><td>jung → <em>jünger</em></td><td>lang → <em>länger</em></td></tr>
        <tr><td>kalt → <em>kälter</em></td><td>warm → <em>wärmer</em></td></tr>
      </table>
      <p><strong>Cuatro irregulares</strong> — hay que sabérselos:</p>
      <table>
        <tr><th>positivo</th><th>comparativo</th><th>superlativo</th></tr>
        <tr><td>gut</td><td><em>besser</em></td><td>am besten</td></tr>
        <tr><td>viel</td><td><em>mehr</em></td><td>am meisten</td></tr>
        <tr><td>gern</td><td><em>lieber</em></td><td>am liebsten</td></tr>
        <tr><td>hoch</td><td><em>höher</em></td><td>am höchsten</td></tr>
      </table>
      <div class="merke"><strong>als o wie:</strong><br>
      <em>als</em> = que (comparación desigual): <em>Ich bin größer <strong>als</strong> du.</em><br>
      <em>wie</em> = como (igualdad): <em>Ich bin so groß <strong>wie</strong> du.</em><br>
      Error muy típico: <s>größer wie du</s>. Lo dicen incluso algunos alemanes, pero es
      incorrecto.</div>
      <p><strong>gern, lieber, am liebsten</strong> son especialmente útiles para hablar de
      gustos: <em>Ich trinke <strong>gern</strong> Tee, aber <strong>lieber</strong> Kaffee.</em></p>`,
    uebungen: [
      { id: "g2101", satz: "Meine Wohnung ist ___ als deine. (groß)", loesung: "größer", tipps: ["größer", "mehr groß", "am größten"], hinweis: "comparativo con Umlaut", ue: "Mi departamento es más grande que el tuyo." },
      { id: "g2102", satz: "Ich bin größer ___ du.", loesung: "als", tipps: ["als", "wie", "wenn"], hinweis: "desigualdad", ue: "Soy más alto que tú." },
      { id: "g2103", satz: "Hier ist es so ruhig ___ dort.", loesung: "wie", tipps: ["wie", "als", "denn"], hinweis: "igualdad", ue: "Aquí es tan tranquilo como allá." },
      { id: "g2104", satz: "Das ist die ___ Lösung. (gut, superlativo)", loesung: "beste", tipps: ["beste", "gutste", "guteste"], hinweis: "irregular", ue: "Esa es la mejor solución." },
      { id: "g2105", satz: "Ich trinke ___ Kaffee als Tee. (gern)", loesung: "lieber", tipps: ["lieber", "gerner", "mehr gern"], hinweis: "irregular", ue: "Prefiero café que té." }
    ]
  }
});

LEKTION('de', {
  tag: 22, niveau: "A1", thema: "Rutinas personales",
  vokabeln: [
    { id: "v2201", de: "sich waschen",   es: "lavarse",        wortart: "verbo reflexivo", beispiel: "Ich wasche mich schnell.", beispielUe: "Me lavo rápido." },
    { id: "v2202", de: "sich anziehen",  es: "vestirse",       wortart: "verbo reflexivo", beispiel: "Er zieht sich an.", beispielUe: "Él se viste." },
    { id: "v2203", de: "sich freuen",    es: "alegrarse",      wortart: "verbo reflexivo", beispiel: "Ich freue mich sehr.", beispielUe: "Me alegro mucho." },
    { id: "v2204", de: "sich setzen",    es: "sentarse",       wortart: "verbo reflexivo", beispiel: "Setzen Sie sich bitte.", beispielUe: "Siéntese, por favor." },
    { id: "v2205", de: "sich fühlen",    es: "sentirse",       wortart: "verbo reflexivo", beispiel: "Wie fühlst du dich?", beispielUe: "¿Cómo te sientes?" },
    { id: "v2206", de: "sich beeilen",   es: "apurarse",       wortart: "verbo reflexivo", beispiel: "Beeil dich!", beispielUe: "¡Apúrate!" },
    { id: "v2207", de: "sich erinnern",  es: "acordarse",      wortart: "verbo reflexivo", beispiel: "Ich erinnere mich nicht.", beispielUe: "No me acuerdo." },
    { id: "v2208", de: "sich ausruhen",  es: "descansar",      wortart: "verbo reflexivo", beispiel: "Ruh dich aus!", beispielUe: "¡Descansa!" },
    { id: "v2209", de: "die Hand",       es: "la mano",        wortart: "sustantivo", beispiel: "Ich wasche mir die Hände.", beispielUe: "Me lavo las manos." },
    { id: "v2210", de: "die Zähne",      es: "los dientes",    wortart: "sustantivo", beispiel: "Ich putze mir die Zähne.", beispielUe: "Me lavo los dientes." }
  ],
  saetze: [
    { id: "s2201", de: "Ich wasche mich jeden Morgen.",      es: "Me lavo cada mañana." },
    { id: "s2202", de: "Wie fühlst du dich heute?",          es: "¿Cómo te sientes hoy?" },
    { id: "s2203", de: "Ich putze mir die Zähne.",           es: "Me lavo los dientes." },
    { id: "s2204", de: "Wir freuen uns auf das Wochenende.", es: "Esperamos con ganas el fin de semana." },
    { id: "s2205", de: "Beeil dich, wir sind spät dran!",    es: "¡Apúrate, vamos tarde!" }
  ],
  grammatik: {
    id: "g22", titel: "Verbos reflexivos",
    erklaerung: `
      <p>Los reflexivos alemanes funcionan como los españoles — con una diferencia
      importante en la posición del pronombre.</p>
      <table>
        <tr><th>Persona</th><th>Acusativo</th><th>Dativo</th></tr>
        <tr><td>ich</td><td><em>mich</em></td><td><em>mir</em></td></tr>
        <tr><td>du</td><td><em>dich</em></td><td><em>dir</em></td></tr>
        <tr><td>er/sie/es</td><td><em>sich</em></td><td><em>sich</em></td></tr>
        <tr><td>wir</td><td><em>uns</em></td><td><em>uns</em></td></tr>
        <tr><td>ihr</td><td><em>euch</em></td><td><em>euch</em></td></tr>
        <tr><td>sie/Sie</td><td><em>sich</em></td><td><em>sich</em></td></tr>
      </table>
      <div class="merke"><strong>La diferencia con el español:</strong> el pronombre no va
      pegado al verbo, sino <strong>detrás del verbo conjugado</strong>.<br>
      Español: «<strong>Me</strong> lavo» — pronombre delante.<br>
      Alemán: <em>Ich wasche <strong>mich</strong>.</em> — pronombre detrás.</div>
      <p><strong>Acusativo o dativo:</strong> normalmente acusativo. Se usa dativo cuando la
      frase ya tiene un objeto directo:</p>
      <ul>
        <li><em>Ich wasche <strong>mich</strong>.</em> (me lavo — acusativo)</li>
        <li><em>Ich wasche <strong>mir</strong> die Hände.</em> (me lavo las manos — «las
            manos» es el objeto directo, así que el reflexivo pasa a dativo)</li>
      </ul>
      <div class="merke"><strong>Como en español:</strong> con partes del cuerpo se usa el
      <strong>artículo determinado</strong>, no el posesivo.<br>
      <em>Ich putze mir <strong>die</strong> Zähne.</em> — Me lavo <strong>los</strong>
      dientes. Nunca <s>meine Zähne</s>.</div>
      <p><strong>Falsos amigos:</strong> muchos verbos son reflexivos en un idioma y no en el
      otro.</p>
      <table>
        <tr><th>Reflexivo en alemán, no en español</th><th>Reflexivo en español, no en alemán</th></tr>
        <tr><td><em>sich erinnern</em> — recordar</td><td>quedarse — <em>bleiben</em></td></tr>
        <tr><td><em>sich freuen</em> — alegrarse (sí coincide)</td><td>irse — <em>gehen</em></td></tr>
        <tr><td><em>sich beeilen</em> — apurarse</td><td>caerse — <em>fallen</em></td></tr>
      </table>
      <p>Hay que aprenderlos uno por uno. En el diccionario aparecen siempre con
      <em>sich</em> delante.</p>`,
    uebungen: [
      { id: "g2201", satz: "Ich wasche ___ jeden Morgen.", loesung: "mich", tipps: ["mich", "mir", "sich"], hinweis: "sin objeto directo", ue: "Me lavo cada mañana." },
      { id: "g2202", satz: "Ich wasche ___ die Hände.", loesung: "mir", tipps: ["mir", "mich", "meine"], hinweis: "con objeto directo → dativo", ue: "Me lavo las manos." },
      { id: "g2203", satz: "Wie fühlst du ___ heute?", loesung: "dich", tipps: ["dich", "dir", "sich"], hinweis: "du → acusativo", ue: "¿Cómo te sientes hoy?" },
      { id: "g2204", satz: "Wir freuen ___ sehr.", loesung: "uns", tipps: ["uns", "sich", "euch"], hinweis: "wir → ?", ue: "Nos alegramos mucho." },
      { id: "g2205", satz: "Setzen Sie ___ bitte!", loesung: "sich", tipps: ["sich", "Sie", "euch"], hinweis: "Sie formal → ?", ue: "¡Siéntese, por favor!" }
    ]
  }
});

LEKTION('de', {
  tag: 23, niveau: "A1", thema: "Permiso y consejo",
  vokabeln: [
    { id: "v2301", de: "dürfen",         es: "tener permiso",  wortart: "verbo modal", beispiel: "Darf ich hier parken?", beispielUe: "¿Puedo estacionar aquí?" },
    { id: "v2302", de: "sollen",         es: "deber",          wortart: "verbo modal", beispiel: "Du sollst mehr schlafen.", beispielUe: "Deberías dormir más." },
    { id: "v2303", de: "mögen",          es: "gustar",         wortart: "verbo modal", beispiel: "Ich mag keinen Fisch.", beispielUe: "No me gusta el pescado." },
    { id: "v2304", de: "parken",         es: "estacionar",     wortart: "verbo", beispiel: "Hier darf man nicht parken.", beispielUe: "Aquí no se puede estacionar." },
    { id: "v2305", de: "erlaubt",        es: "permitido",      wortart: "adjetivo", beispiel: "Das ist nicht erlaubt.", beispielUe: "Eso no está permitido." },
    { id: "v2306", de: "verboten",       es: "prohibido",      wortart: "adjetivo", beispiel: "Rauchen ist verboten.", beispielUe: "Fumar está prohibido." },
    { id: "v2307", de: "der Rat",        es: "el consejo",     wortart: "sustantivo", beispiel: "Danke für den Rat.", beispielUe: "Gracias por el consejo." },
    { id: "v2308", de: "vielleicht",     es: "quizás",         wortart: "adverbio", beispiel: "Vielleicht komme ich später.", beispielUe: "Quizás venga más tarde." },
    { id: "v2309", de: "unbedingt",      es: "sin falta",      wortart: "adverbio", beispiel: "Du musst das unbedingt sehen.", beispielUe: "Tienes que ver esto sin falta." },
    { id: "v2310", de: "besser",         es: "mejor",          wortart: "adjetivo", beispiel: "Es wäre besser so.", beispielUe: "Sería mejor así." }
  ],
  saetze: [
    { id: "s2301", de: "Darf ich hier rauchen?",             es: "¿Puedo fumar aquí?" },
    { id: "s2302", de: "Du sollst mehr Wasser trinken.",     es: "Deberías tomar más agua." },
    { id: "s2303", de: "Ich mag klassische Musik.",          es: "Me gusta la música clásica." },
    { id: "s2304", de: "Hier darf man nicht parken.",        es: "Aquí no se puede estacionar." },
    { id: "s2305", de: "Sollen wir zusammen gehen?",         es: "¿Vamos juntos?" }
  ],
  grammatik: {
    id: "g23", titel: "dürfen, sollen, mögen",
    erklaerung: `
      <p>Los tres modales que faltaban. Con estos ya tienes los seis.</p>
      <table>
        <tr><th></th><th>dürfen</th><th>sollen</th><th>mögen</th></tr>
        <tr><td>ich</td><td>darf</td><td>soll</td><td>mag</td></tr>
        <tr><td>du</td><td>darfst</td><td>sollst</td><td>magst</td></tr>
        <tr><td>er/sie/es</td><td>darf</td><td>soll</td><td>mag</td></tr>
        <tr><td>wir</td><td>dürfen</td><td>sollen</td><td>mögen</td></tr>
        <tr><td>ihr</td><td>dürft</td><td>sollt</td><td>mögt</td></tr>
        <tr><td>sie/Sie</td><td>dürfen</td><td>sollen</td><td>mögen</td></tr>
      </table>
      <p><strong>Los matices, que en español se pierden:</strong></p>
      <table>
        <tr><th>Modal</th><th>Significado exacto</th><th>Ejemplo</th></tr>
        <tr><td><em>dürfen</em></td><td>tener permiso</td><td><em>Darf ich rauchen?</em> (¿me lo permiten?)</td></tr>
        <tr><td><em>können</em></td><td>ser capaz</td><td><em>Kann ich schwimmen?</em> (¿sé nadar?)</td></tr>
        <tr><td><em>sollen</em></td><td>otro lo espera de mí</td><td><em>Ich soll pünktlich sein.</em></td></tr>
        <tr><td><em>müssen</em></td><td>necesidad objetiva</td><td><em>Ich muss arbeiten.</em></td></tr>
      </table>
      <div class="merke"><strong>La diferencia más importante — la negación:</strong><br>
      <em>Du <strong>musst nicht</strong> kommen.</em> = No hace falta que vengas.<br>
      <em>Du <strong>darfst nicht</strong> kommen.</em> = No tienes permiso para venir.<br>
      ¡Cuidado! Para prohibir se usa <em>nicht dürfen</em>, no <em>nicht müssen</em>.
      Este error puede cambiar completamente el sentido.</div>
      <p><strong>mögen y möchten</strong> son parientes pero se usan distinto:</p>
      <ul>
        <li><em>mögen</em> = gustar, <strong>sin</strong> infinitivo:
            <em>Ich <strong>mag</strong> Kaffee.</em> (Me gusta el café.)</li>
        <li><em>möchten</em> = querría, <strong>con</strong> infinitivo o sustantivo:
            <em>Ich <strong>möchte</strong> einen Kaffee (trinken).</em></li>
      </ul>
      <div class="merke"><strong>sollen para preguntar por deseos ajenos:</strong>
      <em><strong>Soll</strong> ich das Fenster öffnen?</em> — «¿Quieres que abra la
      ventana?» Es la forma habitual de ofrecer ayuda en alemán.</div>`,
    uebungen: [
      { id: "g2301", satz: "___ (dürfen) ich hier rauchen?", loesung: "Darf", tipps: ["Darf", "Darfe", "Kann"], hinweis: "permiso, ich", ue: "¿Puedo fumar aquí?" },
      { id: "g2302", satz: "Du ___ (sollen) mehr Wasser trinken.", loesung: "sollst", tipps: ["sollst", "soll", "sollen"], hinweis: "du → ?", ue: "Deberías tomar más agua." },
      { id: "g2303", satz: "Ich ___ (mögen) klassische Musik.", loesung: "mag", tipps: ["mag", "möchte", "magst"], hinweis: "gustar, sin infinitivo", ue: "Me gusta la música clásica." },
      { id: "g2304", satz: "Du ___ nicht kommen. (no hace falta)", loesung: "musst", tipps: ["musst", "darfst", "sollst"], hinweis: "innecesario", ue: "No hace falta que vengas." },
      { id: "g2305", satz: "Du ___ nicht rauchen. (prohibido)", loesung: "darfst", tipps: ["darfst", "musst", "kannst"], hinweis: "prohibición", ue: "No puedes fumar." }
    ]
  }
});

LEKTION('de', {
  tag: 24, niveau: "A1", thema: "Casa y muebles",
  vokabeln: [
    { id: "v2401", de: "die Küche",      es: "la cocina",      wortart: "sustantivo", beispiel: "Die Küche ist neu.", beispielUe: "La cocina es nueva." },
    { id: "v2402", de: "das Bad",        es: "el baño",        wortart: "sustantivo", beispiel: "Das Bad ist klein.", beispielUe: "El baño es pequeño." },
    { id: "v2403", de: "der Stuhl",      es: "la silla",       wortart: "sustantivo", beispiel: "Der Stuhl steht dort.", beispielUe: "La silla está allá." },
    { id: "v2404", de: "der Schrank",    es: "el armario",     wortart: "sustantivo", beispiel: "Der Schrank ist voll.", beispielUe: "El armario está lleno." },
    { id: "v2405", de: "die Lampe",      es: "la lámpara",     wortart: "sustantivo", beispiel: "Die Lampe ist kaputt.", beispielUe: "La lámpara está descompuesta." },
    { id: "v2406", de: "der Kühlschrank", es: "el refrigerador", wortart: "sustantivo", beispiel: "Der Kühlschrank ist leer.", beispielUe: "El refrigerador está vacío." },
    { id: "v2407", de: "der Balkon",     es: "el balcón",      wortart: "sustantivo", beispiel: "Wir haben einen Balkon.", beispielUe: "Tenemos un balcón." },
    { id: "v2408", de: "die Miete",      es: "la renta",       wortart: "sustantivo", beispiel: "Die Miete ist hoch.", beispielUe: "La renta es alta." },
    { id: "v2409", de: "der Nachbar",    es: "el vecino",      wortart: "sustantivo", beispiel: "Mein Nachbar ist nett.", beispielUe: "Mi vecino es amable." },
    { id: "v2410", de: "umziehen",       es: "mudarse",        wortart: "verbo separable", beispiel: "Wir ziehen im Mai um.", beispielUe: "Nos mudamos en mayo." }
  ],
  saetze: [
    { id: "s2401", de: "Ich gehe heute Abend ins Kino.",     es: "Esta noche voy al cine." },
    { id: "s2402", de: "Wir fahren morgen mit dem Auto nach Köln.", es: "Mañana vamos a Colonia en carro." },
    { id: "s2403", de: "Er arbeitet seit Januar in Berlin.", es: "Él trabaja en Berlín desde enero." },
    { id: "s2404", de: "Sie kommt heute leider nicht.",      es: "Lamentablemente ella no viene hoy." },
    { id: "s2405", de: "Ich habe gestern lange geschlafen.", es: "Ayer dormí mucho." }
  ],
  grammatik: {
    id: "g24", titel: "El orden dentro de la frase",
    erklaerung: `
      <p>Ya sabes que el verbo va en posición 2. Pero ¿en qué orden va todo lo demás?
      El alemán tiene una regla — y es bastante estricta.</p>
      <div class="merke"><strong>TE-KA-MO-LO</strong> — el orden de los complementos:<br>
      <strong>TE</strong>mporal (cuándo) → <strong>KA</strong>usal (por qué) →
      <strong>MO</strong>dal (cómo) → <strong>LO</strong>kal (dónde)</div>
      <table>
        <tr><th>Sujeto+verbo</th><th>TE (cuándo)</th><th>MO (cómo)</th><th>LO (dónde)</th></tr>
        <tr><td>Ich fahre</td><td>morgen</td><td>mit dem Auto</td><td>nach Köln.</td></tr>
        <tr><td>Wir gehen</td><td>heute Abend</td><td>—</td><td>ins Kino.</td></tr>
        <tr><td>Er arbeitet</td><td>seit Januar</td><td>—</td><td>in Berlin.</td></tr>
      </table>
      <div class="merke"><strong>Justo al revés que en español:</strong><br>
      Español: «Voy <strong>al cine</strong> (dónde) <strong>esta noche</strong> (cuándo)».<br>
      Alemán: <em>Ich gehe <strong>heute Abend</strong> (cuándo) <strong>ins Kino</strong>
      (dónde).</em><br>
      Si dudas, recuerda: <strong>el tiempo va antes, el lugar al final</strong>.</div>
      <p><strong>Los pronombres se cuelan al principio</strong>, delante de todo lo demás:</p>
      <ul>
        <li><em>Ich gebe <strong>dir</strong> morgen das Buch.</em></li>
        <li><em>Ich habe <strong>es</strong> gestern gekauft.</em></li>
      </ul>
      <p><strong>Y el orden de los objetos:</strong></p>
      <table>
        <tr><td>dos sustantivos</td><td>dativo antes que acusativo</td><td><em>Ich gebe <strong>dem Kind</strong> <strong>das Buch</strong>.</em></td></tr>
        <tr><td>un pronombre</td><td>el pronombre primero</td><td><em>Ich gebe <strong>es</strong> dem Kind.</em></td></tr>
        <tr><td>dos pronombres</td><td>acusativo antes que dativo</td><td><em>Ich gebe <strong>es</strong> <strong>ihm</strong>.</em></td></tr>
      </table>
      <div class="merke"><strong>Regla práctica:</strong> los pronombres siempre lo más
      adelante posible. Y entre dos pronombres se invierte el orden habitual — acusativo
      primero. Es el único caso donde ocurre.</div>`,
    uebungen: [
      { id: "g2401", satz: "Ich gehe ___ ins Kino. (heute Abend)", loesung: "heute Abend", tipps: ["heute Abend", "ins Kino heute Abend"], hinweis: "tiempo antes del lugar", ue: "Esta noche voy al cine." },
      { id: "g2402", satz: "Wir fahren morgen ___ nach Köln. (mit dem Auto)", loesung: "mit dem Auto", tipps: ["mit dem Auto", "nach Köln"], hinweis: "modo antes del lugar", ue: "Mañana vamos a Colonia en carro." },
      { id: "g2403", satz: "Ich gebe ___ morgen das Buch. (a ti)", loesung: "dir", tipps: ["dir", "dich", "du"], hinweis: "pronombre muy adelante", ue: "Te doy el libro mañana." },
      { id: "g2404", satz: "Ich gebe ___ ihm. (das Buch como pronombre)", loesung: "es", tipps: ["es", "ihn", "das"], hinweis: "acusativo antes del dativo", ue: "Se lo doy a él." },
      { id: "g2405", satz: "Er arbeitet ___ in Berlin. (seit Januar)", loesung: "seit Januar", tipps: ["seit Januar", "in Berlin seit Januar"], hinweis: "tiempo primero", ue: "Trabaja en Berlín desde enero." }
    ]
  }
});

LEKTION('de', {
  tag: 25, niveau: "A1", thema: "Comprar ropa",
  vokabeln: [
    { id: "v2501", de: "die Hose",       es: "el pantalón",    wortart: "sustantivo", beispiel: "Die Hose ist zu lang.", beispielUe: "El pantalón es muy largo." },
    { id: "v2502", de: "das Hemd",       es: "la camisa",      wortart: "sustantivo", beispiel: "Das Hemd gefällt mir.", beispielUe: "La camisa me gusta." },
    { id: "v2503", de: "die Schuhe",     es: "los zapatos",    wortart: "sustantivo", beispiel: "Die Schuhe sind bequem.", beispielUe: "Los zapatos son cómodos." },
    { id: "v2504", de: "die Jacke",      es: "la chamarra",    wortart: "sustantivo", beispiel: "Ich brauche eine Jacke.", beispielUe: "Necesito una chamarra." },
    { id: "v2505", de: "die Größe",      es: "la talla",       wortart: "sustantivo", beispiel: "Welche Größe haben Sie?", beispielUe: "¿Qué talla usa?" },
    { id: "v2506", de: "anprobieren",    es: "probarse",       wortart: "verbo separable", beispiel: "Darf ich das anprobieren?", beispielUe: "¿Me lo puedo probar?" },
    { id: "v2507", de: "passen",         es: "quedar bien",    wortart: "verbo", beispiel: "Die Hose passt mir gut.", beispielUe: "El pantalón me queda bien." },
    { id: "v2508", de: "umtauschen",     es: "cambiar",        wortart: "verbo separable", beispiel: "Kann ich das umtauschen?", beispielUe: "¿Puedo cambiar esto?" },
    { id: "v2509", de: "die Kasse",      es: "la caja",        wortart: "sustantivo", beispiel: "Die Kasse ist dort.", beispielUe: "La caja está allá." },
    { id: "v2510", de: "der Kassenbon",  es: "el ticket",      wortart: "sustantivo", beispiel: "Haben Sie den Kassenbon?", beispielUe: "¿Tiene el ticket?" }
  ],
  saetze: [
    { id: "s2501", de: "Welche Größe haben Sie?",            es: "¿Qué talla usa?" },
    { id: "s2502", de: "Diese Hose passt mir sehr gut.",     es: "Este pantalón me queda muy bien." },
    { id: "s2503", de: "Kann ich das bitte anprobieren?",    es: "¿Me lo puedo probar, por favor?" },
    { id: "s2504", de: "Dieses Hemd ist zu teuer.",          es: "Esta camisa es demasiado cara." },
    { id: "s2505", de: "Welchen Pullover nimmst du?",        es: "¿Qué suéter te llevas?" }
  ],
  grammatik: {
    id: "g25", titel: "dieser y welcher",
    erklaerung: `
      <p>Dos palabras muy útiles que siguen el patrón del artículo determinado — si sabes
      <em>der/die/das</em>, ya sabes estas.</p>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo</td><td>dies<em>er</em></td><td>dies<em>e</em></td><td>dies<em>es</em></td><td>dies<em>e</em></td></tr>
        <tr><td>Acusativo</td><td>dies<em>en</em></td><td>dies<em>e</em></td><td>dies<em>es</em></td><td>dies<em>e</em></td></tr>
        <tr><td>Dativo</td><td>dies<em>em</em></td><td>dies<em>er</em></td><td>dies<em>em</em></td><td>dies<em>en</em></td></tr>
      </table>
      <div class="merke"><strong>El truco:</strong> las terminaciones son las mismas que las
      del artículo determinado.<br>
      <em>d<strong>er</strong></em> → <em>dies<strong>er</strong></em><br>
      <em>d<strong>en</strong></em> → <em>dies<strong>en</strong></em><br>
      <em>d<strong>em</strong></em> → <em>dies<strong>em</strong></em><br>
      Lo mismo vale para <em>welcher</em> (cuál), <em>jeder</em> (cada) y
      <em>mancher</em> (algunos).</div>
      <p><strong>Cómo se usan:</strong></p>
      <ul>
        <li><em>dieser</em> = este, esta — señala algo cercano:
            <em><strong>Diese</strong> Hose gefällt mir.</em></li>
        <li><em>welcher</em> = cuál, qué — pregunta por una selección:
            <em><strong>Welchen</strong> Pullover nimmst du?</em></li>
        <li><em>jeder</em> = cada: <em><strong>Jeden</strong> Tag lerne ich.</em></li>
      </ul>
      <div class="merke"><strong>Diferencia con el español:</strong> el alemán no distingue
      entre «este», «ese» y «aquel». <em>dieser</em> cubre los tres. Para marcar distancia
      se añade <em>dort</em> o <em>da</em>: <em>diese Hose <strong>da</strong></em>
      (ese pantalón de ahí).</div>
      <p><strong>En el día a día</strong> muchos alemanes dicen simplemente
      <em>der/die/das</em> con énfasis en lugar de <em>dieser</em>:
      <em><strong>Die</strong> Hose nehme ich.</em> — «Ese pantalón me llevo.»</p>`,
    uebungen: [
      { id: "g2501", satz: "___ Hose gefällt mir. (dieser, die Hose)", loesung: "Diese", tipps: ["Diese", "Dieser", "Dieses"], hinweis: "femenino nominativo", ue: "Este pantalón me gusta." },
      { id: "g2502", satz: "___ Pullover nimmst du? (welcher, der Pullover)", loesung: "Welchen", tipps: ["Welchen", "Welcher", "Welches"], hinweis: "masculino acusativo", ue: "¿Qué suéter te llevas?" },
      { id: "g2503", satz: "___ Hemd ist zu teuer. (dieser, das Hemd)", loesung: "Dieses", tipps: ["Dieses", "Diese", "Dieser"], hinweis: "neutro", ue: "Esta camisa es muy cara." },
      { id: "g2504", satz: "Ich lerne ___ Tag. (jeder, der Tag)", loesung: "jeden", tipps: ["jeden", "jeder", "jedem"], hinweis: "masculino acusativo", ue: "Aprendo cada día." },
      { id: "g2505", satz: "Mit ___ Bus fährst du? (welcher, der Bus)", loesung: "welchem", tipps: ["welchem", "welchen", "welcher"], hinweis: "mit → dativo", ue: "¿En qué autobús vas?" }
    ]
  }
});

LEKTION('de', {
  tag: 26, niveau: "A1", thema: "El cuerpo y la salud",
  vokabeln: [
    { id: "v2601", de: "der Kopf",       es: "la cabeza",      wortart: "sustantivo", beispiel: "Mein Kopf tut weh.", beispielUe: "Me duele la cabeza." },
    { id: "v2602", de: "der Bauch",      es: "la panza",       wortart: "sustantivo", beispiel: "Mein Bauch tut weh.", beispielUe: "Me duele la panza." },
    { id: "v2603", de: "der Rücken",     es: "la espalda",     wortart: "sustantivo", beispiel: "Der Rücken tut mir weh.", beispielUe: "Me duele la espalda." },
    { id: "v2604", de: "wehtun",         es: "doler",          wortart: "verbo separable", beispiel: "Was tut dir weh?", beispielUe: "¿Qué te duele?" },
    { id: "v2605", de: "die Schmerzen",  es: "los dolores",    wortart: "sustantivo", beispiel: "Ich habe Schmerzen.", beispielUe: "Tengo dolores." },
    { id: "v2606", de: "das Fieber",     es: "la fiebre",      wortart: "sustantivo", beispiel: "Sie hat Fieber.", beispielUe: "Ella tiene fiebre." },
    { id: "v2607", de: "die Medizin",    es: "el medicamento", wortart: "sustantivo", beispiel: "Nimm die Medizin!", beispielUe: "¡Toma el medicamento!" },
    { id: "v2608", de: "die Apotheke",   es: "la farmacia",    wortart: "sustantivo", beispiel: "Die Apotheke ist offen.", beispielUe: "La farmacia está abierta." },
    { id: "v2609", de: "gesund",         es: "sano",           wortart: "adjetivo", beispiel: "Ich bin wieder gesund.", beispielUe: "Ya estoy sano otra vez." },
    { id: "v2610", de: "sich erholen",   es: "recuperarse",    wortart: "verbo reflexivo", beispiel: "Erhol dich gut!", beispielUe: "¡Que te recuperes bien!" }
  ],
  saetze: [
    { id: "s2601", de: "Mir tut der Kopf weh.",              es: "Me duele la cabeza." },
    { id: "s2602", de: "Ich habe seit gestern Fieber.",      es: "Tengo fiebre desde ayer." },
    { id: "s2603", de: "Du solltest zum Arzt gehen.",        es: "Deberías ir al médico." },
    { id: "s2604", de: "Wie geht es dir heute?",             es: "¿Cómo estás hoy?" },
    { id: "s2605", de: "Mir ist kalt.",                      es: "Tengo frío." }
  ],
  grammatik: {
    id: "g26", titel: "Expresiones con dativo: mir tut weh",
    erklaerung: `
      <p>Un grupo de expresiones muy frecuentes en las que <strong>la persona va en
      dativo</strong> — igual que en español con «me duele».</p>
      <table>
        <tr><th>Alemán</th><th>Español</th></tr>
        <tr><td><em>Mir tut der Kopf weh.</em></td><td>Me duele la cabeza.</td></tr>
        <tr><td><em>Mir ist kalt.</em></td><td>Tengo frío.</td></tr>
        <tr><td><em>Mir ist schlecht.</em></td><td>Me siento mal.</td></tr>
        <tr><td><em>Wie geht es dir?</em></td><td>¿Cómo estás?</td></tr>
        <tr><td><em>Das gefällt mir.</em></td><td>Eso me gusta.</td></tr>
        <tr><td><em>Es tut mir leid.</em></td><td>Lo siento.</td></tr>
      </table>
      <div class="merke"><strong>Ojo con «tengo frío»:</strong> no se dice
      <s>Ich bin kalt</s> — eso significaría que tú, como persona, eres fría de carácter.
      Se dice <em><strong>Mir</strong> ist kalt.</em><br>
      Lo mismo con <em>Mir ist warm</em> (tengo calor), <em>Mir ist schlecht</em>
      (me siento mal).</div>
      <p><strong><em>wehtun</em> se comporta como <em>doler</em>:</strong> el verbo se
      ajusta a lo que duele, no a la persona.</p>
      <ul>
        <li><em>Der Kopf <strong>tut</strong> mir weh.</em> (una cosa → singular)</li>
        <li><em>Die Füße <strong>tun</strong> mir weh.</em> (varias → plural)</li>
      </ul>
      <p>Y es separable: <em>Mir <strong>tut</strong> der Rücken <strong>weh</strong>.</em></p>
      <div class="merke"><strong>La estructura del saludo:</strong> <em>Wie geht es dir?</em>
      es literalmente «¿cómo le va a ti?». En el habla se abrevia a <em>Wie geht's?</em><br>
      Respuestas: <em>Mir geht's gut.</em> · <em>Es geht.</em> (más o menos) ·
      <em>Nicht so gut.</em></div>
      <p><strong>Con partes del cuerpo</strong> se usa el artículo determinado, no el
      posesivo — como en español: <em>Mir tut <strong>der</strong> Kopf weh</em>, no
      <s>mein Kopf</s>.</p>`,
    uebungen: [
      { id: "g2601", satz: "___ tut der Kopf weh. (a mí)", loesung: "Mir", tipps: ["Mir", "Mich", "Ich"], hinweis: "dativo", ue: "Me duele la cabeza." },
      { id: "g2602", satz: "___ ist kalt. (a mí)", loesung: "Mir", tipps: ["Mir", "Ich", "Mich"], hinweis: "nunca ich bin kalt", ue: "Tengo frío." },
      { id: "g2603", satz: "Die Füße ___ mir weh. (wehtun)", loesung: "tun", tipps: ["tun", "tut", "tue"], hinweis: "die Füße = plural", ue: "Me duelen los pies." },
      { id: "g2604", satz: "Wie geht es ___? (a ti)", loesung: "dir", tipps: ["dir", "dich", "du"], hinweis: "dativo", ue: "¿Cómo estás?" },
      { id: "g2605", satz: "Es tut ___ leid. (a mí)", loesung: "mir", tipps: ["mir", "mich", "ich"], hinweis: "lo siento", ue: "Lo siento." }
    ]
  }
});

LEKTION('de', {
  tag: 27, niveau: "A1", thema: "Tiempo libre",
  vokabeln: [
    { id: "v2701", de: "die Freizeit",   es: "el tiempo libre", wortart: "sustantivo", beispiel: "In meiner Freizeit lese ich.", beispielUe: "En mi tiempo libre leo." },
    { id: "v2702", de: "schwimmen",      es: "nadar",          wortart: "verbo", beispiel: "Ich schwimme gern.", beispielUe: "Me gusta nadar." },
    { id: "v2703", de: "wandern",        es: "hacer senderismo", wortart: "verbo", beispiel: "Wir wandern am Wochenende.", beispielUe: "El fin de semana hacemos senderismo." },
    { id: "v2704", de: "tanzen",         es: "bailar",         wortart: "verbo", beispiel: "Sie tanzt sehr gut.", beispielUe: "Ella baila muy bien." },
    { id: "v2705", de: "der Verein",     es: "el club",        wortart: "sustantivo", beispiel: "Ich bin in einem Verein.", beispielUe: "Estoy en un club." },
    { id: "v2706", de: "das Hobby",      es: "el pasatiempo",  wortart: "sustantivo", beispiel: "Mein Hobby ist Musik.", beispielUe: "Mi pasatiempo es la música." },
    { id: "v2707", de: "sich treffen",   es: "encontrarse",    wortart: "verbo reflexivo", beispiel: "Wir treffen uns um acht.", beispielUe: "Nos vemos a las ocho." },
    { id: "v2708", de: "die Ausstellung", es: "la exposición", wortart: "sustantivo", beispiel: "Die Ausstellung ist toll.", beispielUe: "La exposición es genial." },
    { id: "v2709", de: "das Konzert",    es: "el concierto",   wortart: "sustantivo", beispiel: "Das Konzert war super.", beispielUe: "El concierto estuvo súper." },
    { id: "v2710", de: "Lust haben",     es: "tener ganas",    wortart: "expresión", beispiel: "Hast du Lust mitzukommen?", beispielUe: "¿Tienes ganas de venir?" }
  ],
  saetze: [
    { id: "s2701", de: "Wenn ich Zeit habe, gehe ich schwimmen.", es: "Cuando tengo tiempo, voy a nadar." },
    { id: "s2702", de: "Wenn es regnet, bleiben wir zu Hause.", es: "Cuando llueve, nos quedamos en casa." },
    { id: "s2703", de: "Ich weiß nicht, ob er kommt.",       es: "No sé si él viene." },
    { id: "s2704", de: "Wenn du Lust hast, komm doch mit!",  es: "Si tienes ganas, ¡ven con nosotros!" },
    { id: "s2705", de: "Ich frage, ob das Konzert stattfindet.", es: "Pregunto si el concierto tiene lugar." }
  ],
  grammatik: {
    id: "g27", titel: "wenn y ob",
    erklaerung: `
      <p>Dos conjunciones más que mandan el verbo al final (como <em>weil</em>).
      Se confunden fácilmente porque en español ambas pueden ser «si».</p>
      <div class="merke"><strong>La diferencia clave:</strong><br>
      <em>wenn</em> = <strong>cuando</strong> o <strong>si</strong> (condición)<br>
      <em>ob</em> = <strong>si</strong> en preguntas indirectas (¿sí o no?)</div>
      <table>
        <tr><th>wenn</th><th>ob</th></tr>
        <tr><td><em>Wenn ich Zeit habe, komme ich.</em><br>Cuando/Si tengo tiempo, voy.</td>
            <td><em>Ich weiß nicht, ob er kommt.</em><br>No sé si él viene.</td></tr>
        <tr><td>expresa condición o momento</td><td>expresa duda, pregunta indirecta</td></tr>
      </table>
      <p><strong>La prueba:</strong> si puedes sustituir «si» por «¿sí o no?», usa
      <em>ob</em>. «No sé si viene» → «No sé: ¿viene o no?» → <em>ob</em>.<br>
      «Si tengo tiempo, voy» → aquí no hay pregunta → <em>wenn</em>.</p>
      <p><strong>Preguntas indirectas con palabra interrogativa</strong> mantienen esa
      palabra y mandan el verbo al final:</p>
      <ul>
        <li><em>Ich weiß nicht, <strong>wo</strong> er <strong>wohnt</strong>.</em></li>
        <li><em>Sag mir, <strong>wann</strong> du <strong>kommst</strong>.</em></li>
        <li><em>Ich frage, <strong>wie viel</strong> das <strong>kostet</strong>.</em></li>
      </ul>
      <div class="merke"><strong>Importante:</strong> en la pregunta indirecta el orden
      cambia respecto a la pregunta directa.<br>
      Directa: <em>Wo <strong>wohnt er</strong>?</em><br>
      Indirecta: <em>Ich weiß nicht, wo <strong>er wohnt</strong>.</em><br>
      El sujeto vuelve delante y el verbo se va al final.</div>
      <p><strong>Y una nota sobre <em>wenn</em> en pasado:</strong> para «cuando» referido a
      un momento único del pasado se usa <em>als</em>, no <em>wenn</em>:
      <em><strong>Als</strong> ich klein war…</em> (Cuando era pequeño…). Lo veremos en el
      día 39.</p>`,
    uebungen: [
      { id: "g2701", satz: "___ ich Zeit habe, komme ich.", loesung: "Wenn", tipps: ["Wenn", "Ob", "Als"], hinweis: "condición", ue: "Cuando tengo tiempo, voy." },
      { id: "g2702", satz: "Ich weiß nicht, ___ er kommt.", loesung: "ob", tipps: ["ob", "wenn", "dass"], hinweis: "¿sí o no?", ue: "No sé si él viene." },
      { id: "g2703", satz: "Wenn es ___ (regnen), bleiben wir hier.", loesung: "regnet", tipps: ["regnet", "regnen", "es regnet"], hinweis: "verbo al final", ue: "Cuando llueve, nos quedamos aquí." },
      { id: "g2704", satz: "Ich weiß nicht, wo er ___ (wohnen).", loesung: "wohnt", tipps: ["wohnt", "wohnen", "wohnt er"], hinweis: "sujeto delante, verbo al final", ue: "No sé dónde vive." },
      { id: "g2705", satz: "Sag mir, ___ du kommst. (cuándo)", loesung: "wann", tipps: ["wann", "ob", "wenn"], hinweis: "pregunta indirecta con W", ue: "Dime cuándo vienes." }
    ]
  }
});

LEKTION('de', {
  tag: 28, niveau: "A1", thema: "Fechas y citas",
  vokabeln: [
    { id: "v2801", de: "der Geburtstag", es: "el cumpleaños",  wortart: "sustantivo", beispiel: "Mein Geburtstag ist im Mai.", beispielUe: "Mi cumpleaños es en mayo." },
    { id: "v2802", de: "das Datum",      es: "la fecha",       wortart: "sustantivo", beispiel: "Welches Datum haben wir?", beispielUe: "¿Qué fecha es hoy?" },
    { id: "v2803", de: "der Feiertag",   es: "el día festivo", wortart: "sustantivo", beispiel: "Morgen ist ein Feiertag.", beispielUe: "Mañana es día festivo." },
    { id: "v2804", de: "der Urlaub",     es: "las vacaciones", wortart: "sustantivo", beispiel: "Ich habe im Juli Urlaub.", beispielUe: "Tengo vacaciones en julio." },
    { id: "v2805", de: "verschieben",    es: "posponer",       wortart: "verbo", beispiel: "Können wir das verschieben?", beispielUe: "¿Podemos posponerlo?" },
    { id: "v2806", de: "absagen",        es: "cancelar",       wortart: "verbo separable", beispiel: "Ich muss leider absagen.", beispielUe: "Lamentablemente tengo que cancelar." },
    { id: "v2807", de: "vereinbaren",    es: "acordar",        wortart: "verbo", beispiel: "Wir vereinbaren einen Termin.", beispielUe: "Acordamos una cita." },
    { id: "v2808", de: "die Woche",      es: "la semana",      wortart: "sustantivo", beispiel: "Nächste Woche bin ich weg.", beispielUe: "La próxima semana no estoy." },
    { id: "v2809", de: "übermorgen",     es: "pasado mañana",  wortart: "adverbio", beispiel: "Übermorgen habe ich Zeit.", beispielUe: "Pasado mañana tengo tiempo." },
    { id: "v2810", de: "vorgestern",     es: "anteayer",       wortart: "adverbio", beispiel: "Vorgestern war ich krank.", beispielUe: "Anteayer estuve enfermo." }
  ],
  saetze: [
    { id: "s2801", de: "Mein Geburtstag ist am dritten Mai.", es: "Mi cumpleaños es el tres de mayo." },
    { id: "s2802", de: "Heute ist der zwanzigste September.", es: "Hoy es veinte de septiembre." },
    { id: "s2803", de: "Der Termin ist am Montag, dem ersten Juni.", es: "La cita es el lunes primero de junio." },
    { id: "s2804", de: "Ich habe nächste Woche Urlaub.",     es: "La próxima semana tengo vacaciones." },
    { id: "s2805", de: "Können wir den Termin verschieben?", es: "¿Podemos posponer la cita?" }
  ],
  grammatik: {
    id: "g28", titel: "Los números ordinales y las fechas",
    erklaerung: `
      <p>Para dar fechas necesitas los números ordinales — «primero», «segundo»… El alemán
      los forma con dos terminaciones y muy pocas excepciones.</p>
      <div class="merke"><strong>La regla:</strong><br>
      Del 1 al 19: número + <em>-te</em> → <em>der vier<strong>te</strong></em><br>
      Del 20 en adelante: número + <em>-ste</em> → <em>der zwanzig<strong>ste</strong></em></div>
      <table>
        <tr><th>Número</th><th>Ordinal</th><th>Número</th><th>Ordinal</th></tr>
        <tr><td>1</td><td><em>der erste</em> (irregular)</td><td>7</td><td>der siebte (irregular)</td></tr>
        <tr><td>2</td><td>der zweite</td><td>8</td><td><em>der achte</em> (una t)</td></tr>
        <tr><td>3</td><td><em>der dritte</em> (irregular)</td><td>20</td><td>der zwanzigste</td></tr>
        <tr><td>4</td><td>der vierte</td><td>21</td><td>der einundzwanzigste</td></tr>
        <tr><td>5</td><td>der fünfte</td><td>31</td><td>der einunddreißigste</td></tr>
      </table>
      <p><strong>Las cuatro irregularidades:</strong> <em>erste</em> (no <s>einte</s>),
      <em>dritte</em> (no <s>dreite</s>), <em>siebte</em> (no <s>siebente</s>),
      <em>achte</em> (con una sola t).</p>
      <p><strong>Cómo se dicen las fechas:</strong></p>
      <table>
        <tr><th>Pregunta</th><th>Respuesta</th></tr>
        <tr><td>Der Wievielte ist heute?</td><td><em>Heute ist <strong>der</strong> dritte Mai.</em></td></tr>
        <tr><td>Wann hast du Geburtstag?</td><td><em><strong>Am</strong> dritt<strong>en</strong> Mai.</em></td></tr>
      </table>
      <div class="merke"><strong>Fíjate en la terminación:</strong> con <em>am</em> el
      ordinal lleva <em>-en</em>, porque <em>am</em> exige dativo.<br>
      <em>der dritt<strong>e</strong> Mai</em> (nominativo) →
      <em>am dritt<strong>en</strong> Mai</em> (dativo)</div>
      <p><strong>Por escrito</strong> se abrevia con punto: <em>am 3. Mai</em>,
      <em>der 20. September</em>. El punto significa «ordinal».</p>
      <p><strong>Los años</strong> se dicen sin preposición y de forma especial:
      1985 = <em>neunzehnhundertfünfundachtzig</em>. A partir de 2000:
      <em>zweitausendvierundzwanzig</em>.</p>`,
    uebungen: [
      { id: "g2801", satz: "Heute ist der ___ Mai. (3)", loesung: "dritte", tipps: ["dritte", "dreite", "drite"], hinweis: "irregular", ue: "Hoy es tres de mayo." },
      { id: "g2802", satz: "Mein Geburtstag ist am ___ Juni. (1)", loesung: "ersten", tipps: ["ersten", "erste", "einten"], hinweis: "am → dativo -en", ue: "Mi cumpleaños es el primero de junio." },
      { id: "g2803", satz: "Der Termin ist am ___ September. (20)", loesung: "zwanzigsten", tipps: ["zwanzigsten", "zwanzigten", "zwanzigste"], hinweis: "a partir de 20: -ste + -n", ue: "La cita es el veinte de septiembre." },
      { id: "g2804", satz: "Heute ist der ___ August. (8)", loesung: "achte", tipps: ["achte", "achtte", "achtste"], hinweis: "una sola t", ue: "Hoy es ocho de agosto." },
      { id: "g2805", satz: "Ich komme am ___ Juli. (7)", loesung: "siebten", tipps: ["siebten", "siebenten", "siebte"], hinweis: "irregular + dativo", ue: "Vengo el siete de julio." }
    ]
  }
});

LEKTION('de', {
  tag: 29, niveau: "A1", thema: "Orientarse en la ciudad",
  vokabeln: [
    { id: "v2901", de: "die Straße",     es: "la calle",       wortart: "sustantivo", beispiel: "Die Straße ist lang.", beispielUe: "La calle es larga." },
    { id: "v2902", de: "die Ecke",       es: "la esquina",     wortart: "sustantivo", beispiel: "An der Ecke ist ein Café.", beispielUe: "En la esquina hay un café." },
    { id: "v2903", de: "geradeaus",      es: "derecho",        wortart: "adverbio", beispiel: "Gehen Sie geradeaus.", beispielUe: "Siga derecho." },
    { id: "v2904", de: "links",          es: "a la izquierda", wortart: "adverbio", beispiel: "Biegen Sie links ab.", beispielUe: "Dé vuelta a la izquierda." },
    { id: "v2905", de: "rechts",         es: "a la derecha",   wortart: "adverbio", beispiel: "Das Museum ist rechts.", beispielUe: "El museo está a la derecha." },
    { id: "v2906", de: "die Ampel",      es: "el semáforo",    wortart: "sustantivo", beispiel: "An der Ampel links.", beispielUe: "En el semáforo a la izquierda." },
    { id: "v2907", de: "die Haltestelle", es: "la parada",     wortart: "sustantivo", beispiel: "Die Haltestelle ist dort.", beispielUe: "La parada está allá." },
    { id: "v2908", de: "die Brücke",     es: "el puente",      wortart: "sustantivo", beispiel: "Gehen Sie über die Brücke.", beispielUe: "Cruce el puente." },
    { id: "v2909", de: "in der Nähe",    es: "cerca",          wortart: "expresión", beispiel: "Ist das in der Nähe?", beispielUe: "¿Está cerca?" },
    { id: "v2910", de: "sich verlaufen", es: "perderse",       wortart: "verbo reflexivo", beispiel: "Ich habe mich verlaufen.", beispielUe: "Me perdí." }
  ],
  saetze: [
    { id: "s2901", de: "Das Buch liegt auf dem Tisch.",      es: "El libro está sobre la mesa." },
    { id: "s2902", de: "Ich lege das Buch auf den Tisch.",   es: "Pongo el libro sobre la mesa." },
    { id: "s2903", de: "Wir gehen in den Park.",             es: "Vamos al parque." },
    { id: "s2904", de: "Wir sind im Park.",                  es: "Estamos en el parque." },
    { id: "s2905", de: "Die Haltestelle ist neben der Bank.", es: "La parada está junto al banco." }
  ],
  grammatik: {
    id: "g29", titel: "Wo o wohin: las preposiciones de dos casos",
    erklaerung: `
      <p>Nueve preposiciones alemanas pueden llevar dativo <strong>o</strong> acusativo.
      Cuál de los dos depende de una sola pregunta.</p>
      <div class="merke"><strong>La regla de oro:</strong><br>
      <strong>wohin?</strong> (¿adónde? — hay movimiento hacia un lugar) →
      <strong>acusativo</strong><br>
      <strong>wo?</strong> (¿dónde? — posición, sin cambio de lugar) →
      <strong>dativo</strong></div>
      <table>
        <tr><th>wohin? → acusativo</th><th>wo? → dativo</th></tr>
        <tr><td><em>Ich gehe in <strong>den</strong> Park.</em><br>Voy al parque.</td>
            <td><em>Ich bin in <strong>dem</strong> Park.</em><br>Estoy en el parque.</td></tr>
        <tr><td><em>Ich lege das Buch auf <strong>den</strong> Tisch.</em></td>
            <td><em>Das Buch liegt auf <strong>dem</strong> Tisch.</em></td></tr>
      </table>
      <p><strong>Las nueve preposiciones:</strong></p>
      <table>
        <tr><td><em>an</em> (en, junto a)</td><td><em>auf</em> (sobre)</td><td><em>hinter</em> (detrás)</td></tr>
        <tr><td><em>in</em> (en, dentro)</td><td><em>neben</em> (al lado)</td><td><em>über</em> (encima)</td></tr>
        <tr><td><em>unter</em> (debajo)</td><td><em>vor</em> (delante)</td><td><em>zwischen</em> (entre)</td></tr>
      </table>
      <div class="merke"><strong>Los pares de verbos que lo hacen visible:</strong><br>
      <em>legen</em> (poner acostado) → acusativo · <em>liegen</em> (estar acostado) → dativo<br>
      <em>stellen</em> (poner de pie) → acusativo · <em>stehen</em> (estar de pie) → dativo<br>
      <em>setzen</em> (sentar) → acusativo · <em>sitzen</em> (estar sentado) → dativo<br>
      Los primeros son acciones con movimiento, los segundos son estados.</div>
      <p><strong>Contracciones muy usadas:</strong> <em>in dem</em> → <em>im</em> ·
      <em>in das</em> → <em>ins</em> · <em>an dem</em> → <em>am</em> ·
      <em>an das</em> → <em>ans</em> · <em>auf das</em> → <em>aufs</em></p>
      <p><em>Ich gehe <strong>ins</strong> Kino</em> (movimiento) frente a
      <em>Ich bin <strong>im</strong> Kino</em> (posición). La diferencia entre
      <em>ins</em> e <em>im</em> es exactamente esta regla.</p>`,
    uebungen: [
      { id: "g2901", satz: "Das Buch liegt auf ___ Tisch. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "wo? → dativo", ue: "El libro está sobre la mesa." },
      { id: "g2902", satz: "Ich lege das Buch auf ___ Tisch. (der)", loesung: "den", tipps: ["den", "dem", "der"], hinweis: "wohin? → acusativo", ue: "Pongo el libro sobre la mesa." },
      { id: "g2903", satz: "Wir gehen in ___ Park. (der)", loesung: "den", tipps: ["den", "dem", "der"], hinweis: "movimiento", ue: "Vamos al parque." },
      { id: "g2904", satz: "Wir sind ___ Park. (in + dem)", loesung: "im", tipps: ["im", "ins", "in den"], hinweis: "posición, contracción", ue: "Estamos en el parque." },
      { id: "g2905", satz: "Die Haltestelle ist neben ___ Bank. (die)", loesung: "der", tipps: ["der", "die", "den"], hinweis: "wo? femenino dativo", ue: "La parada está junto al banco." }
    ]
  }
});

LEKTION('de', {
  tag: 30, niveau: "A1", thema: "Repaso: A1 completo",
  vokabeln: [
    { id: "v3001", de: "wiederholen",    es: "repasar",        wortart: "verbo", beispiel: "Ich wiederhole die Grammatik.", beispielUe: "Repaso la gramática." },
    { id: "v3002", de: "der Fortschritt", es: "el progreso",   wortart: "sustantivo", beispiel: "Du machst gute Fortschritte.", beispielUe: "Haces buenos progresos." },
    { id: "v3003", de: "die Regel",      es: "la regla",       wortart: "sustantivo", beispiel: "Diese Regel ist wichtig.", beispielUe: "Esta regla es importante." },
    { id: "v3004", de: "der Fehler",     es: "el error",       wortart: "sustantivo", beispiel: "Fehler sind normal.", beispielUe: "Los errores son normales." },
    { id: "v3005", de: "verbessern",     es: "mejorar",        wortart: "verbo", beispiel: "Ich möchte mein Deutsch verbessern.", beispielUe: "Quiero mejorar mi alemán." },
    { id: "v3006", de: "das Ziel",       es: "la meta",        wortart: "sustantivo", beispiel: "Mein Ziel ist B1.", beispielUe: "Mi meta es B1." },
    { id: "v3007", de: "schaffen",       es: "lograr",         wortart: "verbo", beispiel: "Du schaffst das!", beispielUe: "¡Tú lo logras!" },
    { id: "v3008", de: "weitermachen",   es: "seguir adelante", wortart: "verbo separable", beispiel: "Mach einfach weiter!", beispielUe: "¡Simplemente sigue!" },
    { id: "v3009", de: "stolz",          es: "orgulloso",      wortart: "adjetivo", beispiel: "Ich bin stolz auf dich.", beispielUe: "Estoy orgulloso de ti." },
    { id: "v3010", de: "der Anfang",     es: "el comienzo",    wortart: "sustantivo", beispiel: "Das ist erst der Anfang.", beispielUe: "Esto es apenas el comienzo." }
  ],
  saetze: [
    { id: "s3001", de: "Ich lerne seit einem Monat Deutsch.", es: "Aprendo alemán desde hace un mes." },
    { id: "s3002", de: "Gestern habe ich viel wiederholt.",  es: "Ayer repasé mucho." },
    { id: "s3003", de: "Wenn ich übe, werde ich besser.",    es: "Cuando practico, mejoro." },
    { id: "s3004", de: "Ich kann schon einfache Gespräche führen.", es: "Ya puedo tener conversaciones sencillas." },
    { id: "s3005", de: "Das ist erst der Anfang!",           es: "¡Esto es apenas el comienzo!" }
  ],
  grammatik: {
    id: "g30", titel: "Todo el A1 en una página",
    erklaerung: `
      <p>Treinta días, 300 palabras, 30 temas de gramática. Esto es lo que ya dominas.</p>
      <p><strong>Los cuatro pilares del orden de palabras:</strong></p>
      <table>
        <tr><th>Situación</th><th>Verbo</th><th>Ejemplo</th></tr>
        <tr><td>frase normal</td><td>posición 2</td><td>Ich <em>gehe</em> heute ins Kino.</td></tr>
        <tr><td>pregunta sí/no</td><td>posición 1</td><td><em>Gehst</em> du ins Kino?</td></tr>
        <tr><td>con modal / Perfekt</td><td>2 + final</td><td>Ich <em>will</em> ins Kino <em>gehen</em>.</td></tr>
        <tr><td>subordinada</td><td>al final</td><td>…, weil ich ins Kino <em>gehe</em>.</td></tr>
      </table>
      <p><strong>Los tres casos que conoces:</strong></p>
      <table>
        <tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
        <tr><td>Nominativo (quién)</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Acusativo (a quién/qué)</td><td><em>den</em></td><td>die</td><td>das</td><td>die</td></tr>
        <tr><td>Dativo (a quién, dónde)</td><td><em>dem</em></td><td><em>der</em></td><td><em>dem</em></td><td><em>den</em>+n</td></tr>
      </table>
      <div class="merke"><strong>Los tres trucos que te ahorran dudas:</strong><br>
      <strong>FUGOD</strong> — für, um, gegen, ohne, durch → siempre acusativo<br>
      <strong>mit-nach-aus-bei-seit-von-zu</strong> → siempre dativo<br>
      <strong>wohin/wo</strong> — las nueve de dos casos: movimiento → acusativo,
      posición → dativo</div>
      <p><strong>Lo que ya puedes hacer</strong> — esta es la descripción oficial del A1:</p>
      <ul>
        <li>presentarte y presentar a otros</li>
        <li>hacer y responder preguntas sobre datos personales</li>
        <li>comunicarte de forma sencilla si tu interlocutor habla despacio</li>
        <li>hablar de tu rutina, tu familia, tus compras, tu tiempo libre</li>
        <li>contar lo que hiciste ayer con el Perfekt</li>
      </ul>
      <div class="merke"><strong>Un consejo honesto para lo que viene:</strong> el A2 se
      centra en dos cosas que cuestan trabajo — la declinación del adjetivo y los tipos de
      subordinada. Ninguna de las dos es difícil de entender; ambas necesitan repetición.
      Por eso esta app repite: lo que hoy te cuesta, en tres semanas te saldrá solo.</div>
      <p style="text-align:center;margin-top:1.3rem"><strong>¡Muy bien! Ya tienes el A1.</strong></p>`,
    uebungen: [
      { id: "g3001", satz: "Heute ___ (gehen) ich ins Kino.", loesung: "gehe", tipps: ["gehe", "gehen", "ich gehe"], hinweis: "verbo en posición 2", ue: "Hoy voy al cine." },
      { id: "g3002", satz: "Ich bleibe, weil ich müde ___ (sein).", loesung: "bin", tipps: ["bin", "ist", "bin müde"], hinweis: "subordinada → final", ue: "Me quedo porque estoy cansado." },
      { id: "g3003", satz: "Ich habe gestern viel ___ (arbeiten).", loesung: "gearbeitet", tipps: ["gearbeitet", "arbeiten", "gearbeitt"], hinweis: "participio", ue: "Ayer trabajé mucho." },
      { id: "g3004", satz: "Ich fahre mit ___ Bus. (der)", loesung: "dem", tipps: ["dem", "den", "der"], hinweis: "mit → dativo", ue: "Voy en autobús." },
      { id: "g3005", satz: "Ich kaufe ___ Apfel. (ein)", loesung: "einen", tipps: ["einen", "ein", "einem"], hinweis: "der Apfel → acusativo", ue: "Compro una manzana." }
    ]
  }
});
