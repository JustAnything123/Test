/* Día 101–110 · Nivel B2 · Precisión, cohesión y registro */

LEKTION('de', {
  tag: 101, niveau: "B2", thema: "Apariencia y realidad",
  vokabeln: [
    { id: "v10101", de: "der Schein",     es: "la apariencia",  wortart: "sustantivo", beispiel: "Der Schein trügt.", beispielUe: "Las apariencias engañan." },
    { id: "v10102", de: "täuschen",       es: "engañar",        wortart: "verbo", beispiel: "Da täuschst du dich.", beispielUe: "Ahí te equivocas." },
    { id: "v10103", de: "der Eindruck",   es: "la impresión",   wortart: "sustantivo", beispiel: "Ich habe den Eindruck, dass …", beispielUe: "Tengo la impresión de que…" },
    { id: "v10104", de: "vortäuschen",    es: "fingir",         wortart: "verbo separable", beispiel: "Er täuscht Interesse vor.", beispielUe: "Él finge interés." },
    { id: "v10105", de: "scheinbar",      es: "aparentemente (falso)", wortart: "adverbio", beispiel: "Das ist nur scheinbar einfach.", beispielUe: "Eso solo es fácil en apariencia." },
    { id: "v10106", de: "offensichtlich", es: "evidentemente",  wortart: "adverbio", beispiel: "Das ist offensichtlich falsch.", beispielUe: "Eso es evidentemente falso." },
    { id: "v10107", de: "wahrnehmen",     es: "percibir",       wortart: "verbo separable", beispiel: "Ich nehme das anders wahr.", beispielUe: "Yo lo percibo distinto." },
    { id: "v10108", de: "sich verstellen", es: "disimular",     wortart: "verbo reflexivo", beispiel: "Er verstellt sich ständig.", beispielUe: "Él disimula constantemente." },
    { id: "v10109", de: "die Einbildung", es: "la imaginación", wortart: "sustantivo", beispiel: "Das ist reine Einbildung.", beispielUe: "Eso es pura imaginación." },
    { id: "v10110", de: "so tun als ob",  es: "hacer como si",  wortart: "expresión", beispiel: "Tu nicht so, als ob!", beispielUe: "¡No hagas como si nada!" }
  ],
  saetze: [
    { id: "s10101", de: "Er tut so, als ob er alles wüsste.", es: "Hace como si lo supiera todo." },
    { id: "s10102", de: "Sie sieht aus, als hätte sie nicht geschlafen.", es: "Tiene aspecto de no haber dormido." },
    { id: "s10103", de: "Es klingt, als wäre etwas passiert.", es: "Suena como si hubiera pasado algo." },
    { id: "s10104", de: "Er tat so, als ob er nichts gehört hätte.", es: "Hizo como si no hubiera oído nada." },
    { id: "s10105", de: "Das ist scheinbar einfach, in Wirklichkeit aber schwer.", es: "Eso parece fácil, pero en realidad es difícil." }
  ],
  grammatik: {
    id: "g101", titel: "Comparaciones irreales: als ob",
    erklaerung: `
      <p>Cuando algo <em>parece</em> ser de una manera sin serlo, el alemán usa
      <strong>als ob</strong> (o <em>als wenn</em>, <em>wie wenn</em>) con
      <strong>Konjunktiv II</strong>. Es el equivalente exacto de <em>como si</em>.</p>
      <table>
        <tr><th>Alemán</th><th>Español</th></tr>
        <tr><td>Er tut so, <strong>als ob</strong> er alles <strong>wüsste</strong>.</td><td>Hace como si lo supiera todo.</td></tr>
        <tr><td>Es klingt, <strong>als ob</strong> etwas passiert <strong>wäre</strong>.</td><td>Suena como si hubiera pasado algo.</td></tr>
      </table>
      <div class="merke"><strong>La variante sin <em>ob</em>.</strong> Se puede quitar el
      <em>ob</em>, y entonces el verbo va <strong>inmediatamente detrás de als</strong>:<br>
      <em>…, <strong>als ob</strong> er alles <strong>wüsste</strong>.</em> (verbo al final)<br>
      <em>…, <strong>als wüsste</strong> er alles.</em> (verbo justo detrás)<br>
      Las dos son correctas; la segunda es más elegante y muy frecuente en literatura.</div>
      <p><strong>Los dos tiempos</strong> siguen la lógica del Konjunktiv II que ya conoces:</p>
      <table>
        <tr><td>a la vez</td><td>Er tut so, als ob er alles <strong>wüsste</strong>.</td><td>presente</td></tr>
        <tr><td>anterior</td><td>Er tut so, als ob er nichts <strong>gehört hätte</strong>.</td><td>pasado</td></tr>
      </table>
      <p><strong>Los verbos que lo piden</strong> son los de percepción y apariencia:
      <em>aussehen</em> (tener aspecto), <em>klingen</em> (sonar), <em>wirken</em> (dar la
      impresión), <em>scheinen</em> (parecer), <em>sich anfühlen</em> (sentirse), y sobre
      todo <em>so tun</em> (hacer como si).</p>
      <div class="merke"><strong>El par que confunde a todo el mundo:</strong><br>
      <strong>scheinbar</strong> = solo en apariencia, y es <em>falso</em>.
      <em>Das Problem ist scheinbar gelöst</em> — parece resuelto, pero no lo está.<br>
      <strong>anscheinend</strong> = por lo que se ve, probablemente <em>cierto</em>.
      <em>Das Problem ist anscheinend gelöst</em> — todo indica que sí.<br>
      El español <em>aparentemente</em> cubre los dos, así que aquí hay que decidir.</div>
      <p><strong>Y un aviso de forma:</strong> con <em>als ob</em> el indicativo también se
      oye (<em>als ob er alles weiß</em>), pero en un examen cuenta como error. Konjunktiv
      II, siempre.</p>`,
    uebungen: [
      { id: "g10101", satz: "Er tut so, als ___ er alles wüsste.", loesung: "ob", tipps: ["ob", "wenn er", "dass"], hinweis: "la conjunción completa", ue: "Hace como si lo supiera todo." },
      { id: "g10102", satz: "Sie sieht aus, als ___ sie nicht geschlafen. (haben, K II)", loesung: "hätte", tipps: ["hätte", "hat", "wäre"], hinweis: "sin ob: verbo justo detrás", ue: "Tiene aspecto de no haber dormido." },
      { id: "g10103", satz: "Es klingt, als ___ etwas passiert. (sein, K II)", loesung: "wäre", tipps: ["wäre", "hätte", "ist"], hinweis: "passieren va con sein", ue: "Suena como si hubiera pasado algo." },
      { id: "g10104", satz: "Er tat so, als ob er nichts ___ hätte. (hören)", loesung: "gehört", tipps: ["gehört", "hören", "höre"], hinweis: "participio II", ue: "Hizo como si no hubiera oído nada." },
      { id: "g10105", satz: "Das ist ___ einfach, in Wirklichkeit aber schwer.", loesung: "scheinbar", tipps: ["scheinbar", "anscheinend", "offensichtlich"], hinweis: "la apariencia es falsa", ue: "Eso solo parece fácil." }
    ]
  }
});

LEKTION('de', {
  tag: 102, niveau: "B2", thema: "Señalar deficiencias",
  vokabeln: [
    { id: "v10201", de: "unzureichend",   es: "insuficiente",   wortart: "adjetivo", beispiel: "Die Angaben sind unzureichend.", beispielUe: "Los datos son insuficientes." },
    { id: "v10202", de: "mangelhaft",     es: "deficiente",     wortart: "adjetivo", beispiel: "Die Qualität ist mangelhaft.", beispielUe: "La calidad es deficiente." },
    { id: "v10203", de: "der Mangel",     es: "la carencia",    wortart: "sustantivo", beispiel: "Es herrscht ein Mangel an Personal.", beispielUe: "Hay carencia de personal." },
    { id: "v10204", de: "das Versäumnis", es: "la omisión",     wortart: "sustantivo", beispiel: "Das war ein Versäumnis.", beispielUe: "Eso fue una omisión." },
    { id: "v10205", de: "missachten",     es: "desatender",     wortart: "verbo", beispiel: "Er hat die Regel missachtet.", beispielUe: "Él desatendió la regla." },
    { id: "v10206", de: "die Unstimmigkeit", es: "la discrepancia", wortart: "sustantivo", beispiel: "Es gibt Unstimmigkeiten.", beispielUe: "Hay discrepancias." },
    { id: "v10207", de: "fehlerhaft",     es: "defectuoso",     wortart: "adjetivo", beispiel: "Die Rechnung ist fehlerhaft.", beispielUe: "La factura es defectuosa." },
    { id: "v10208", de: "unterlassen",    es: "omitir",         wortart: "verbo", beispiel: "Er hat die Meldung unterlassen.", beispielUe: "Él omitió el aviso." },
    { id: "v10209", de: "die Untätigkeit", es: "la inacción",   wortart: "sustantivo", beispiel: "Die Untätigkeit ärgert mich.", beispielUe: "La inacción me molesta." },
    { id: "v10210", de: "bedenklich",     es: "preocupante",    wortart: "adjetivo", beispiel: "Die Lage ist bedenklich.", beispielUe: "La situación es preocupante." }
  ],
  saetze: [
    { id: "s10201", de: "Die Unterlagen sind leider unvollständig.", es: "Los documentos están lamentablemente incompletos." },
    { id: "s10202", de: "Das ist für mich völlig unverständlich.", es: "Eso para mí es completamente incomprensible." },
    { id: "s10203", de: "Er hat die Frist missachtet.", es: "Él desatendió el plazo." },
    { id: "s10204", de: "Die Antwort war nicht nur spät, sondern auch unklar.", es: "La respuesta no solo fue tardía, sino también poco clara." },
    { id: "s10205", de: "Ohne Nachweis ist der Antrag ungültig.", es: "Sin comprobante la solicitud no es válida." }
  ],
  grammatik: {
    id: "g102", titel: "Negación mediante formación de palabras",
    erklaerung: `
      <p>Junto a <em>nicht</em> y <em>kein</em>, el alemán niega <strong>dentro de la
      palabra</strong>. En textos formales esta es la forma habitual, porque permite negar
      sin que la frase suene combativa.</p>
      <table>
        <tr><th>Elemento</th><th>Significado</th><th>Ejemplos</th></tr>
        <tr><td><strong>un-</strong></td><td>lo contrario</td><td>unmöglich, unklar, unvollständig, das Unglück</td></tr>
        <tr><td><strong>miss-</strong></td><td>mal, equivocadamente</td><td>missachten, missverstehen, der Misserfolg</td></tr>
        <tr><td><strong>Nicht-</strong></td><td>ausencia (con sustantivos)</td><td>die Nichterfüllung, der Nichtraucher</td></tr>
        <tr><td><strong>-los</strong></td><td>sin</td><td>arbeitslos, sinnlos, hoffnungslos</td></tr>
        <tr><td><strong>-frei</strong></td><td>libre de (positivo)</td><td>kostenfrei, rauchfrei, stressfrei</td></tr>
        <tr><td><strong>-arm</strong></td><td>con poco</td><td>fettarm, kalorienarm</td></tr>
        <tr><td><strong>in- / il- / ir- / a-</strong></td><td>en palabras de origen latino</td><td>inakzeptabel, illegal, irrelevant, asozial</td></tr>
        <tr><td><strong>des-</strong></td><td>falta de</td><td>desinteressiert, desinformiert</td></tr>
      </table>
      <div class="merke"><strong>-los frente a -frei:</strong> los dos significan
      <em>sin</em>, pero <em>-los</em> señala una carencia negativa
      (<em>arbeitslos</em>, <em>hilflos</em>) y <em>-frei</em> una liberación deseada
      (<em>kostenfrei</em>, <em>schmerzfrei</em>). <em>Fehlerfrei</em> es un elogio;
      <em>fehlerlos</em> también existe pero suena más neutro.</div>
      <p><strong>un- no es lo mismo que nicht.</strong> Con <em>un-</em> la negación queda
      lexicalizada y suele significar el polo contrario, no la simple ausencia:</p>
      <table>
        <tr><td><em>nicht schön</em></td><td>simplemente no bonito</td></tr>
        <tr><td><em>unschön</em></td><td>feo, desagradable — más fuerte</td></tr>
        <tr><td><em>nicht sicher</em></td><td>no seguro de algo</td></tr>
        <tr><td><em>unsicher</em></td><td>inseguro (carácter o situación)</td></tr>
      </table>
      <p><strong>Negaciones encubiertas.</strong> Algunas palabras niegan sin parecerlo, y
      por eso <strong>no admiten otra negación</strong>: <em>kaum</em> (apenas),
      <em>ohne</em>, <em>außer</em>, <em>statt</em>, <em>vergeblich</em> (en vano),
      <em>versäumen</em> (dejar de).</p>
      <div class="merke">Recuerda que el alemán no acumula negaciones. Si ya has puesto
      <em>ohne</em>, <em>kaum</em> o un <em>un-</em>, la frase ya está negada:
      <em>Ohne Nachweis ist der Antrag ungültig</em> — no hace falta ningún
      <em>nicht</em>.</div>`,
    uebungen: [
      { id: "g10201", satz: "Die Unterlagen sind ___vollständig.", loesung: "un", tipps: ["un", "miss", "nicht"], hinweis: "prefijo de negación", ue: "Los documentos están incompletos." },
      { id: "g10202", satz: "Er hat die Frist ___achtet. (desatender)", loesung: "miss", tipps: ["miss", "un", "ver"], hinweis: "hacer algo mal o no hacerlo", ue: "Desatendió el plazo." },
      { id: "g10203", satz: "Ohne Nachweis ist der Antrag ___gültig.", loesung: "un", tipps: ["un", "in", "nicht"], hinweis: "adjetivo germánico", ue: "Sin comprobante la solicitud no es válida." },
      { id: "g10204", satz: "Ein Bereich für Leute, die nicht rauchen: der ___raucherbereich", loesung: "Nicht", tipps: ["Nicht", "Un", "Kein"], hinweis: "prefijo con sustantivos", ue: "La zona de no fumadores." },
      { id: "g10205", satz: "Arbeit + Endung = arbeits___ (sin trabajo)", loesung: "los", tipps: ["los", "frei", "arm"], hinweis: "carencia negativa", ue: "sin trabajo, desempleado" }
    ]
  }
});

LEKTION('de', {
  tag: 103, niveau: "B2", thema: "Formación y estudios",
  vokabeln: [
    { id: "v10301", de: "die Bildung",    es: "la educación",   wortart: "sustantivo", beispiel: "Bildung ist ein Grundrecht.", beispielUe: "La educación es un derecho básico." },
    { id: "v10302", de: "der Lehrplan",   es: "el plan de estudios", wortart: "sustantivo", beispiel: "Der Lehrplan wurde geändert.", beispielUe: "El plan de estudios cambió." },
    { id: "v10303", de: "eine Prüfung ablegen", es: "presentarse a un examen", wortart: "expresión", beispiel: "Ich lege morgen die Prüfung ab.", beispielUe: "Mañana me presento al examen." },
    { id: "v10304", de: "das Zeugnis",    es: "el certificado de notas", wortart: "sustantivo", beispiel: "Das Zeugnis kommt per Post.", beispielUe: "El certificado llega por correo." },
    { id: "v10305", de: "die Fachrichtung", es: "la especialidad", wortart: "sustantivo", beispiel: "Welche Fachrichtung studierst du?", beispielUe: "¿Qué especialidad estudias?" },
    { id: "v10306", de: "sich einschreiben", es: "matricularse", wortart: "verbo reflexivo separable", beispiel: "Ich habe mich eingeschrieben.", beispielUe: "Me he matriculado." },
    { id: "v10307", de: "das Studium",    es: "la carrera",     wortart: "sustantivo", beispiel: "Das Studium dauert vier Jahre.", beispielUe: "La carrera dura cuatro años." },
    { id: "v10308", de: "der Dozent",     es: "el docente",     wortart: "sustantivo n-Deklination", beispiel: "Der Dozent erklärt gut.", beispielUe: "El docente explica bien." },
    { id: "v10309", de: "die Vorlesung",  es: "la clase magistral", wortart: "sustantivo", beispiel: "Die Vorlesung fällt aus.", beispielUe: "La clase se suspende." },
    { id: "v10310", de: "bestehen",       es: "aprobar",        wortart: "verbo", beispiel: "Ich habe die Prüfung bestanden.", beispielUe: "Aprobé el examen." }
  ],
  saetze: [
    { id: "s10301", de: "Ich weiß, dass er das nicht hat machen können.", es: "Sé que él no ha podido hacer eso." },
    { id: "s10302", de: "Er sagte, dass er den Text habe lesen müssen.", es: "Dijo que había tenido que leer el texto." },
    { id: "s10303", de: "Ich glaube, dass sie das hätte wissen müssen.", es: "Creo que ella debería haberlo sabido." },
    { id: "s10304", de: "Wir hoffen, dass die Arbeit rechtzeitig fertig geworden ist.", es: "Esperamos que el trabajo se haya terminado a tiempo." },
    { id: "s10305", de: "Dass er kommen würde, hatte niemand erwartet.", es: "Que él vendría no lo esperaba nadie." }
  ],
  grammatik: {
    id: "g103", titel: "El final de la subordinada: cuando se juntan tres verbos",
    erklaerung: `
      <p>La regla que aprendiste es simple: en subordinada, el verbo conjugado va al final.
      Funciona siempre… menos en un caso, y ese caso aparece constantemente.</p>
      <table>
        <tr><th>Situación</th><th>Ejemplo</th></tr>
        <tr><td>normal</td><td>Ich weiß, dass er den Text gelesen <strong>hat</strong>.</td></tr>
        <tr><td>dos verbos al final</td><td>Ich weiß, dass er den Text lesen <strong>musste</strong>.</td></tr>
        <tr><td><strong>doble infinitivo</strong></td><td>Ich weiß, dass er den Text <strong>hat</strong> lesen müssen.</td></tr>
      </table>
      <div class="merke"><strong>La excepción del doble infinitivo:</strong> cuando al final
      quedan <em>dos infinitivos</em> (porque un verbo modal está en Perfekt o en
      Konjunktiv II), el auxiliar <strong>salta delante del grupo</strong> en vez de
      quedarse detrás.<br>
      <em>… dass er das nicht <strong>hat</strong> machen können.</em><br>
      <em>… dass sie das <strong>hätte</strong> wissen müssen.</em><br>
      <em>… dass er den Text <strong>habe</strong> lesen müssen.</em> (Konjunktiv I)</div>
      <p><strong>Por qué ocurre:</strong> el alemán no tolera un verbo conjugado detrás de
      dos infinitivos. <em>…machen können hat</em> es impronunciable para un oído alemán,
      así que el auxiliar se adelanta. Es la única excepción real a la regla del verbo
      final.</p>
      <p><strong>Los mismos verbos que forman doble infinitivo</strong> ya los conoces del
      Perfekt: los seis modales, más <em>lassen</em>, <em>sehen</em>, <em>hören</em> y
      <em>brauchen</em>.</p>
      <p><strong>Subordinadas encajadas.</strong> En textos escritos se anidan varias, y
      cada una cierra con su verbo. Se leen de dentro hacia fuera:</p>
      <p style="margin-left:1rem"><em>Ich hoffe, dass du verstehst, warum ich, obwohl ich
      wenig Zeit hatte, den Text noch einmal gelesen habe.</em></p>
      <div class="merke"><strong>Consejo para escribir:</strong> no anides más de dos. Una
      frase con tres subordinadas encajadas es gramaticalmente correcta y absolutamente
      ilegible. Los alemanes también prefieren dos frases cortas.</div>
      <p><strong>Y una posibilidad útil:</strong> una subordinada con <em>dass</em> puede
      ocupar ella misma la posición 1 de la principal —
      <em><strong>Dass er kommen würde</strong>, hatte niemand erwartet.</em> El verbo de
      la principal viene inmediatamente detrás.</p>`,
    uebungen: [
      { id: "g10301", satz: "Ich weiß, dass er das nicht ___ machen können. (haben)", loesung: "hat", tipps: ["hat", "hatte", "haben"], hinweis: "el auxiliar se adelanta", ue: "Sé que no ha podido hacerlo." },
      { id: "g10302", satz: "Er sagte, dass er den Text ___ lesen müssen. (haben, K I)", loesung: "habe", tipps: ["habe", "hat", "hätte"], hinweis: "estilo indirecto", ue: "Dijo que había tenido que leer el texto." },
      { id: "g10303", satz: "Ich glaube, dass sie das ___ wissen müssen. (K II)", loesung: "hätte", tipps: ["hätte", "hat", "habe"], hinweis: "reproche en Konjunktiv II", ue: "Creo que debería haberlo sabido." },
      { id: "g10304", satz: "Wir hoffen, dass die Arbeit fertig geworden ___.", loesung: "ist", tipps: ["ist", "hat", "war"], hinweis: "un solo participio: regla normal", ue: "Esperamos que el trabajo esté terminado." },
      { id: "g10305", satz: "___ er kommen würde, hatte niemand erwartet.", loesung: "Dass", tipps: ["Dass", "Ob", "Was"], hinweis: "la subordinada en posición 1", ue: "Que vendría no lo esperaba nadie." }
    ]
  }
});

LEKTION('de', {
  tag: 104, niveau: "B2", thema: "Cohesión del texto",
  vokabeln: [
    { id: "v10401", de: "die Kohärenz",   es: "la coherencia",  wortart: "sustantivo", beispiel: "Dem Text fehlt Kohärenz.", beispielUe: "Al texto le falta coherencia." },
    { id: "v10402", de: "der Bezug",      es: "la referencia",  wortart: "sustantivo", beispiel: "Der Bezug ist unklar.", beispielUe: "La referencia no está clara." },
    { id: "v10403", de: "ersetzen",       es: "sustituir",      wortart: "verbo", beispiel: "Ersetze das Wort bitte.", beispielUe: "Sustituye la palabra, por favor." },
    { id: "v10404", de: "das Stichwort",  es: "la palabra clave", wortart: "sustantivo", beispiel: "Nenne mir das Stichwort.", beispielUe: "Dime la palabra clave." },
    { id: "v10405", de: "der Oberbegriff", es: "el término general", wortart: "sustantivo", beispiel: "Möbel ist der Oberbegriff.", beispielUe: "Muebles es el término general." },
    { id: "v10406", de: "der Verweis",    es: "la remisión",    wortart: "sustantivo", beispiel: "Der Verweis steht unten.", beispielUe: "La remisión está abajo." },
    { id: "v10407", de: "eindeutig",      es: "inequívoco",     wortart: "adjetivo", beispiel: "Die Aussage ist eindeutig.", beispielUe: "La declaración es inequívoca." },
    { id: "v10408", de: "missverständlich", es: "ambiguo",      wortart: "adjetivo", beispiel: "Der Satz ist missverständlich.", beispielUe: "La frase es ambigua." },
    { id: "v10409", de: "umschreiben",    es: "parafrasear",    wortart: "verbo", beispiel: "Ich umschreibe das Wort.", beispielUe: "Parafraseo la palabra." },
    { id: "v10410", de: "andeuten",       es: "insinuar",       wortart: "verbo separable", beispiel: "Er deutete das nur an.", beispielUe: "Él solo lo insinuó." }
  ],
  saetze: [
    { id: "s10401", de: "Derjenige, der zuletzt geht, macht das Licht aus.", es: "El que se va el último apaga la luz." },
    { id: "s10402", de: "Es gibt zwei Wege; Ersterer ist kürzer, Letzterer sicherer.", es: "Hay dos caminos; el primero es más corto, el segundo más seguro." },
    { id: "s10403", de: "Diesbezüglich habe ich noch eine Frage.", es: "Al respecto tengo otra pregunta." },
    { id: "s10404", de: "Das Gesagte gilt auch für morgen.", es: "Lo dicho vale también para mañana." },
    { id: "s10405", de: "Wir fahren mit demselben Zug wie gestern.", es: "Vamos en el mismo tren que ayer." }
  ],
  grammatik: {
    id: "g104", titel: "Palabras de referencia",
    erklaerung: `
      <p>Un texto B2 no repite los sustantivos: los retoma. Estas son las palabras que
      sirven para ello y que se esperan en un escrito de nivel.</p>
      <p><strong>1. derjenige, der …</strong> — anuncia una relativa. Las dos partes se
      declinan: <em>derjenige, diejenige, dasjenige, diejenigen; dessen, deren;
      demjenigen…</em></p>
      <p style="margin-left:1rem"><em><strong>Derjenige</strong>, der zuletzt geht, macht
      das Licht aus.</em> — Es el equivalente culto de <em>wer zuletzt geht</em>.</p>
      <p><strong>2. derselbe frente a der gleiche</strong> — una distinción que el español
      no marca:</p>
      <table>
        <tr><td><em>Wir fahren mit <strong>demselben</strong> Zug.</em></td><td>el mismo tren, físicamente uno solo</td></tr>
        <tr><td><em>Wir haben <strong>das gleiche</strong> Auto.</em></td><td>el mismo modelo, dos coches distintos</td></tr>
      </table>
      <p><em>derselbe</em> se escribe en una palabra y declina las dos mitades:
      <em>derselbe, denselben, demselben, desselben, dieselbe, dasselbe, dieselben</em>.
      Con preposición se separa: <em>am selben Tag</em>, <em>im selben Haus</em>.</p>
      <p><strong>3. Ersterer / Letzterer</strong> — el primero / el segundo de dos cosas
      mencionadas. Se declinan como adjetivos y se escriben con mayúscula cuando
      sustituyen al sustantivo.</p>
      <p><strong>4. Los adverbios de referencia</strong>, típicos del registro formal:</p>
      <table>
        <tr><td><strong>diesbezüglich</strong></td><td>al respecto</td></tr>
        <tr><td><strong>dementsprechend</strong></td><td>en consecuencia</td></tr>
        <tr><td><strong>demzufolge</strong></td><td>según eso</td></tr>
        <tr><td><strong>dessen ungeachtet</strong></td><td>a pesar de ello</td></tr>
        <tr><td><strong>hierzu / hierfür / hierbei</strong></td><td>para esto / en esto</td></tr>
      </table>
      <p><strong>5. Participios y adjetivos sustantivados</strong> — la forma más compacta
      de retomar algo: <em>das <strong>Gesagte</strong></em> (lo dicho),
      <em>das <strong>Genannte</strong></em> (lo mencionado),
      <em>das <strong>Wesentliche</strong></em> (lo esencial),
      <em>der <strong>Betroffene</strong></em> (el afectado),
      <em>die <strong>Beteiligten</strong></em> (los implicados).</p>
      <div class="merke"><strong>La regla de oro de la cohesión:</strong> cada palabra de
      referencia tiene que apuntar a <strong>un</strong> antecedente identificable. Si un
      lector puede dudar de a qué se refiere tu <em>dieser</em>, repite el sustantivo. La
      claridad gana siempre a la elegancia.</div>`,
    uebungen: [
      { id: "g10401", satz: "___, der zuletzt geht, macht das Licht aus.", loesung: "Derjenige", tipps: ["Derjenige", "Derselbe", "Ersterer"], hinweis: "anuncia una relativa", ue: "El que se va el último apaga la luz." },
      { id: "g10402", satz: "Es gibt zwei Wege; ___ ist kürzer. (el primero)", loesung: "Ersterer", tipps: ["Ersterer", "Letzterer", "Derselbe"], hinweis: "el primero de dos", ue: "Hay dos caminos; el primero es más corto." },
      { id: "g10403", satz: "___ habe ich noch eine Frage. (al respecto)", loesung: "Diesbezüglich", tipps: ["Diesbezüglich", "Demzufolge", "Hierbei"], hinweis: "adverbio de referencia formal", ue: "Al respecto tengo otra pregunta." },
      { id: "g10404", satz: "Das ___ gilt auch für morgen. (lo dicho)", loesung: "Gesagte", tipps: ["Gesagte", "Sagen", "Gesagt"], hinweis: "participio sustantivado", ue: "Lo dicho vale también para mañana." },
      { id: "g10405", satz: "Wir fahren mit ___ Zug wie gestern. (el mismo tren)", loesung: "demselben", tipps: ["demselben", "dem gleichen", "demjenigen"], hinweis: "idéntico, no solo igual", ue: "Vamos en el mismo tren que ayer." }
    ]
  }
});

LEKTION('de', {
  tag: 105, niveau: "B2", thema: "Registros de la lengua",
  vokabeln: [
    { id: "v10501", de: "die Sprachebene", es: "el registro",   wortart: "sustantivo", beispiel: "Achte auf die Sprachebene.", beispielUe: "Cuida el registro." },
    { id: "v10502", de: "gehoben",        es: "culto",          wortart: "adjetivo", beispiel: "Das ist gehobene Sprache.", beispielUe: "Ese es lenguaje culto." },
    { id: "v10503", de: "salopp",         es: "desenfadado",    wortart: "adjetivo", beispiel: "Das klingt zu salopp.", beispielUe: "Eso suena demasiado desenfadado." },
    { id: "v10504", de: "vertraulich",    es: "de confianza",   wortart: "adjetivo", beispiel: "Der Ton war sehr vertraulich.", beispielUe: "El tono era muy de confianza." },
    { id: "v10505", de: "angemessen",     es: "apropiado",      wortart: "adjetivo", beispiel: "Wähle eine angemessene Anrede.", beispielUe: "Elige un tratamiento apropiado." },
    { id: "v10506", de: "die Anrede",     es: "el tratamiento", wortart: "sustantivo", beispiel: "Die Anrede fehlt.", beispielUe: "Falta el tratamiento." },
    { id: "v10507", de: "duzen",          es: "tutear",         wortart: "verbo", beispiel: "Wir duzen uns hier.", beispielUe: "Aquí nos tuteamos." },
    { id: "v10508", de: "siezen",         es: "tratar de usted", wortart: "verbo", beispiel: "Im Büro siezen wir uns.", beispielUe: "En la oficina nos tratamos de usted." },
    { id: "v10509", de: "die Floskel",    es: "la fórmula vacía", wortart: "sustantivo", beispiel: "Das ist nur eine Floskel.", beispielUe: "Eso es solo una fórmula vacía." },
    { id: "v10510", de: "verbindlich",    es: "cordial y firme", wortart: "adjetivo", beispiel: "Der Ton war verbindlich.", beispielUe: "El tono era cordial." }
  ],
  saetze: [
    { id: "s10501", de: "Könnten Sie mir das bitte erläutern?", es: "¿Podría explicarme eso, por favor?" },
    { id: "s10502", de: "Kannst du mir das mal erklären?", es: "¿Me lo explicas?" },
    { id: "s10503", de: "Sag mal, was ist da eigentlich los?", es: "Oye, ¿qué pasa ahí?" },
    { id: "s10504", de: "Ich erlaube mir, Sie darauf hinzuweisen.", es: "Me permito señalárselo." },
    { id: "s10505", de: "Mach's gut und bis bald!", es: "¡Cuídate y hasta pronto!" }
  ],
  grammatik: {
    id: "g105", titel: "Elegir el registro",
    erklaerung: `
      <p>El mismo contenido, tres formas. Saber cuál toca es una competencia propia del B2 —
      y equivocarse de registro molesta más que un error de gramática.</p>
      <table>
        <tr><th>Culto / formal</th><th>Neutro</th><th>Coloquial</th></tr>
        <tr><td>Könnten Sie mir das erläutern?</td><td>Können Sie mir das erklären?</td><td>Kannst du mir das mal erklären?</td></tr>
        <tr><td>Ich erhalte eine Nachricht.</td><td>Ich bekomme eine Nachricht.</td><td>Ich kriege eine Nachricht.</td></tr>
        <tr><td>Ich erlaube mir hinzuweisen …</td><td>Ich möchte sagen …</td><td>Ich sag mal …</td></tr>
        <tr><td>Mit freundlichen Grüßen</td><td>Viele Grüße</td><td>Mach's gut!</td></tr>
        <tr><td>Die Angelegenheit ist erledigt.</td><td>Die Sache ist fertig.</td><td>Das Ding ist durch.</td></tr>
      </table>
      <p><strong>Las señales de cada registro:</strong></p>
      <table>
        <tr><th>Formal</th><th>Coloquial</th></tr>
        <tr><td>Sie, Ihnen, Ihr (siempre en mayúscula)</td><td>du, dir, dein</td></tr>
        <tr><td>Konjunktiv II de cortesía</td><td>indicativo directo</td></tr>
        <tr><td>estilo nominal, Funktionsverbgefüge</td><td>verbos simples</td></tr>
        <tr><td>sin Modalpartikeln</td><td>doch, mal, ja, halt, eben</td></tr>
        <tr><td>frases completas</td><td>elipsis: <em>Komme gleich.</em> <em>Alles klar?</em></td></tr>
        <tr><td>erhalten, erläutern, sich befinden, benötigen</td><td>kriegen, checken, Bock haben, voll gut</td></tr>
      </table>
      <div class="merke"><strong>du o Sie</strong> no es una cuestión de simpatía sino de
      convención. Por defecto <strong>Sie</strong> con desconocidos y en el trabajo; el
      cambio a <em>du</em> lo propone la persona de más edad o rango. En muchas empresas
      jóvenes y en toda la vida universitaria se tutea desde el principio. Si dudas, usa
      <em>Sie</em>: nadie se ofende por eso.</div>
      <p><strong>Errores de registro típicos</strong> y por qué llaman la atención:</p>
      <ul>
        <li><em>Hallo Herr Meier</em> en una solicitud de trabajo — demasiado informal.</li>
        <li><em>Sehr geehrter Herr Meier</em> a un compañero de al lado — irónico o frío.</li>
        <li><em>Hochachtungsvoll</em> hoy suena a enfado o a carta de abogado; la fórmula
            normal es <em>Mit freundlichen Grüßen</em>.</li>
        <li>Modalpartikeln en un texto oficial — <em>Wir haben ja gesagt …</em> suena a
            conversación de bar.</li>
      </ul>`,
    uebungen: [
      { id: "g10501", satz: "Formal: ___ Sie mir das bitte erläutern? (können)", loesung: "Könnten", tipps: ["Könnten", "Können", "Kannst"], hinweis: "cortesía con Konjunktiv II", ue: "¿Podría explicármelo?" },
      { id: "g10502", satz: "Informell: ___ du mir das mal erklären?", loesung: "Kannst", tipps: ["Kannst", "Können", "Könnten"], hinweis: "tuteo", ue: "¿Me lo explicas?" },
      { id: "g10503", satz: "Gehoben für bekommen: ___", loesung: "erhalten", tipps: ["erhalten", "kriegen", "holen"], hinweis: "registro culto", ue: "recibir, en registro culto" },
      { id: "g10504", satz: "Umgangssprachlich für bekommen: ___", loesung: "kriegen", tipps: ["kriegen", "erhalten", "empfangen"], hinweis: "registro coloquial", ue: "recibir, en registro coloquial" },
      { id: "g10505", satz: "Ich ___ Sie darauf hin. (hinweisen)", loesung: "weise", tipps: ["weise", "weisen", "hinweise"], hinweis: "verbo separable en posición 2", ue: "Se lo señalo." }
    ]
  }
});

LEKTION('de', {
  tag: 106, niveau: "B2", thema: "Resumir un texto",
  vokabeln: [
    { id: "v10601", de: "die Zusammenfassung", es: "el resumen", wortart: "sustantivo", beispiel: "Schreib eine kurze Zusammenfassung.", beispielUe: "Escribe un resumen breve." },
    { id: "v10602", de: "der Kerngedanke", es: "la idea central", wortart: "sustantivo", beispiel: "Der Kerngedanke ist einfach.", beispielUe: "La idea central es sencilla." },
    { id: "v10603", de: "wesentlich",     es: "esencial",       wortart: "adjetivo", beispiel: "Das ist der wesentliche Punkt.", beispielUe: "Ese es el punto esencial." },
    { id: "v10604", de: "die Aussageabsicht", es: "la intención comunicativa", wortart: "sustantivo", beispiel: "Die Aussageabsicht ist klar.", beispielUe: "La intención es clara." },
    { id: "v10605", de: "knapp",          es: "escueto",        wortart: "adjetivo", beispiel: "Fass dich bitte knapp.", beispielUe: "Sé escueto, por favor." },
    { id: "v10606", de: "der Verfasser",  es: "el autor",       wortart: "sustantivo", beispiel: "Der Verfasser bleibt anonym.", beispielUe: "El autor permanece anónimo." },
    { id: "v10607", de: "sich befassen mit", es: "ocuparse de", wortart: "verbo con preposición", beispiel: "Der Text befasst sich mit Migration.", beispielUe: "El texto se ocupa de la migración." },
    { id: "v10608", de: "hervorheben",    es: "destacar",       wortart: "verbo separable", beispiel: "Er hebt einen Punkt hervor.", beispielUe: "Él destaca un punto." },
    { id: "v10609", de: "weglassen",      es: "omitir",         wortart: "verbo separable", beispiel: "Details kann man weglassen.", beispielUe: "Los detalles se pueden omitir." },
    { id: "v10610", de: "der Schluss",    es: "la conclusión",  wortart: "sustantivo", beispiel: "Er kommt zu einem klaren Schluss.", beispielUe: "Llega a una conclusión clara." }
  ],
  saetze: [
    { id: "s10601", de: "Der Text befasst sich mit dem Klimawandel.", es: "El texto se ocupa del cambio climático." },
    { id: "s10602", de: "Der Verfasser vertritt die These, dass Veränderung nötig ist.", es: "El autor defiende la tesis de que el cambio es necesario." },
    { id: "s10603", de: "Im ersten Abschnitt geht es um die Ursachen.", es: "En el primer apartado se trata de las causas." },
    { id: "s10604", de: "Der Autor kommt zu dem Schluss, dass Handeln nötig ist.", es: "El autor llega a la conclusión de que hay que actuar." },
    { id: "s10605", de: "Zusammenfassend lässt sich festhalten, dass die Lage ernst ist.", es: "En resumen se puede constatar que la situación es seria." }
  ],
  grammatik: {
    id: "g106", titel: "Escribir un resumen",
    erklaerung: `
      <p>El resumen es una de las dos tareas escritas del examen B2. No se juzga tu opinión
      sino tu capacidad de <strong>separar lo esencial de lo accesorio</strong> y decirlo
      con tus palabras. Hay cinco reglas fijas.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td><strong>Presente</strong>, siempre</td><td>aunque el texto original esté en pasado: <em>Der Autor beschreibt…</em></td></tr>
        <tr><td><strong>Tercera persona</strong></td><td>nada de <em>ich finde</em>: el resumen no lleva tu opinión</td></tr>
        <tr><td><strong>Tus palabras</strong></td><td>copiar frases enteras cuenta como error, no como cita</td></tr>
        <tr><td><strong>Sin ejemplos ni cifras</strong></td><td>salvo que sean el argumento principal</td></tr>
        <tr><td><strong>Un tercio de largo</strong></td><td>como mucho: si no cabe, no has resumido</td></tr>
      </table>
      <p><strong>El esqueleto</strong>, frase por frase:</p>
      <table>
        <tr><td>1. Entrada</td><td><em>Der Text „…" von … aus dem Jahr … <strong>befasst sich mit</strong> …</em></td></tr>
        <tr><td>2. Tesis</td><td><em>Der Verfasser <strong>vertritt die These</strong>, dass …</em></td></tr>
        <tr><td>3. Desarrollo</td><td><em>Im ersten Abschnitt <strong>geht es um</strong> … Anschließend <strong>erläutert</strong> der Autor …</em></td></tr>
        <tr><td>4. Cierre</td><td><em>Abschließend <strong>kommt er zu dem Schluss</strong>, dass …</em></td></tr>
      </table>
      <div class="merke"><strong>Los verbos de resumen</strong> son un vocabulario propio, y
      cada uno dice algo distinto sobre la actitud del autor:<br>
      neutrales: <em>beschreiben, darstellen, erläutern, nennen, erwähnen</em><br>
      valorativos: <em>betonen, hervorheben, kritisieren, bezweifeln, warnen vor</em><br>
      de posición: <em>vertreten, fordern, plädieren für, sich aussprechen gegen</em></div>
      <p><strong>El Konjunktiv I aparece aquí de forma natural.</strong> Cuando reproduces lo
      que el autor afirma, marcas la distancia:</p>
      <p style="margin-left:1rem"><em>Der Autor betont, die Lage <strong>sei</strong>
      ernst.</em> — él lo dice, no lo afirmas tú.</p>
      <div class="merke"><strong>El error de bulto</strong> es empezar con
      <em>In diesem Text möchte ich…</em>. El texto no es tuyo. Y el segundo es mezclar tu
      valoración: si te piden opinión, va en un apartado aparte, claramente separado, con
      <em>Meiner Ansicht nach…</em></div>`,
    uebungen: [
      { id: "g10601", satz: "Der Text ___ sich mit dem Klimawandel. (befassen)", loesung: "befasst", tipps: ["befasst", "befassen", "befasste"], hinweis: "presente, tercera persona", ue: "El texto se ocupa del cambio climático." },
      { id: "g10602", satz: "Der Verfasser vertritt die ___, dass Veränderung nötig ist.", loesung: "These", tipps: ["These", "Meinung", "Frage"], hinweis: "la postura defendida", ue: "El autor defiende la tesis de que…" },
      { id: "g10603", satz: "Im ersten Abschnitt ___ es um die Ursachen. (gehen)", loesung: "geht", tipps: ["geht", "gibt", "handelt"], hinweis: "es geht um", ue: "En el primer apartado se trata de las causas." },
      { id: "g10604", satz: "Der Autor kommt zu dem ___, dass Handeln nötig ist.", loesung: "Schluss", tipps: ["Schluss", "Ende", "Ergebnis"], hinweis: "llegar a la conclusión", ue: "El autor llega a la conclusión de que…" },
      { id: "g10605", satz: "Eine Zusammenfassung steht immer im ___.", loesung: "Präsens", tipps: ["Präsens", "Präteritum", "Perfekt"], hinweis: "el tiempo verbal obligatorio", ue: "Un resumen va siempre en presente." }
    ]
  }
});

LEKTION('de', {
  tag: 107, niveau: "B2", thema: "Argumentar",
  vokabeln: [
    { id: "v10701", de: "der Beleg",      es: "la prueba",      wortart: "sustantivo", beispiel: "Dafür fehlt der Beleg.", beispielUe: "Para eso falta la prueba." },
    { id: "v10702", de: "die Schlussfolgerung", es: "la conclusión lógica", wortart: "sustantivo", beispiel: "Die Schlussfolgerung ist falsch.", beispielUe: "La conclusión es falsa." },
    { id: "v10703", de: "das Gegenargument", es: "el contraargumento", wortart: "sustantivo", beispiel: "Es gibt ein Gegenargument.", beispielUe: "Hay un contraargumento." },
    { id: "v10704", de: "veranschaulichen", es: "ilustrar",     wortart: "verbo", beispiel: "Ein Beispiel veranschaulicht das.", beispielUe: "Un ejemplo lo ilustra." },
    { id: "v10705", de: "einleuchten",    es: "resultar evidente", wortart: "verbo separable", beispiel: "Das leuchtet mir ein.", beispielUe: "Eso me resulta evidente." },
    { id: "v10706", de: "widerlegen",     es: "rebatir",        wortart: "verbo", beispiel: "Die Studie widerlegt die These.", beispielUe: "El estudio rebate la tesis." },
    { id: "v10707", de: "die Gewichtung", es: "la ponderación", wortart: "sustantivo", beispiel: "Die Gewichtung ist entscheidend.", beispielUe: "La ponderación es decisiva." },
    { id: "v10708", de: "abschließend",   es: "para terminar",  wortart: "adverbio", beispiel: "Abschließend ein Beispiel.", beispielUe: "Para terminar, un ejemplo." },
    { id: "v10709", de: "zutreffend",     es: "acertado",       wortart: "adjetivo", beispiel: "Das ist zutreffend.", beispielUe: "Eso es acertado." },
    { id: "v10710", de: "argumentieren",  es: "argumentar",     wortart: "verbo", beispiel: "Er argumentiert sachlich.", beispielUe: "Él argumenta objetivamente." }
  ],
  saetze: [
    { id: "s10701", de: "Meiner Ansicht nach ist das der falsche Weg.", es: "En mi opinión ese es el camino equivocado." },
    { id: "s10702", de: "Dafür spricht, dass die Kosten sinken.", es: "A favor está que los costes bajan." },
    { id: "s10703", de: "Dagegen spricht der hohe Aufwand.", es: "En contra está el elevado esfuerzo." },
    { id: "s10704", de: "Ein Beispiel dafür ist die Entwicklung in Berlin.", es: "Un ejemplo de ello es la evolución en Berlín." },
    { id: "s10705", de: "Letztlich überwiegen für mich die Vorteile.", es: "En definitiva para mí pesan más las ventajas." }
  ],
  grammatik: {
    id: "g107", titel: "Construir una argumentación",
    erklaerung: `
      <p>La segunda tarea escrita del B2 es un texto argumentativo. Se evalúa la
      <strong>estructura</strong> tanto como la lengua, y la estructura esperada es siempre
      la misma.</p>
      <table>
        <tr><th>Parte</th><th>Contenido</th></tr>
        <tr><td><strong>Einleitung</strong></td><td>el tema, por qué importa ahora, y tu pregunta</td></tr>
        <tr><td><strong>Argumente</strong></td><td>2–3 argumentos, cada uno: tesis → razón → ejemplo</td></tr>
        <tr><td><strong>Gegenargumente</strong></td><td>1–2 objeciones, reconocidas y respondidas</td></tr>
        <tr><td><strong>Fazit</strong></td><td>tu postura, derivada de lo anterior</td></tr>
      </table>
      <div class="merke"><strong>La unidad mínima es el trío</strong>
      <em>Behauptung – Begründung – Beispiel</em>. Un argumento sin razón es una opinión; y
      una razón sin ejemplo se olvida. Los correctores buscan literalmente esas tres
      partes.</div>
      <p><strong>El repertorio de fórmulas</strong>, ordenado por función:</p>
      <table>
        <tr><td>opinión</td><td>Meiner Ansicht nach … · Ich bin der Meinung, dass … · Für mich steht fest, dass …</td></tr>
        <tr><td>a favor</td><td><strong>Dafür spricht</strong>, dass … · Hinzu kommt, dass … · Ein weiterer Aspekt ist …</td></tr>
        <tr><td>en contra</td><td><strong>Dagegen spricht</strong> … · Kritiker wenden ein, dass … · Man könnte einwenden, dass …</td></tr>
        <tr><td>ejemplo</td><td>Ein Beispiel dafür ist … · Das zeigt sich daran, dass … · Man denke nur an …</td></tr>
        <tr><td>concesión</td><td>Zwar …, aber … · Es trifft zu, dass …, allerdings …</td></tr>
        <tr><td>conclusión</td><td>Letztlich überwiegt … · Aus diesen Gründen … · Alles in allem …</td></tr>
      </table>
      <p><strong>Cuidado con la posición 1.</strong> Todas estas fórmulas ocupan la primera
      casilla, así que el verbo va inmediatamente después:</p>
      <ul>
        <li><em>Meiner Ansicht nach <strong>ist</strong> das der falsche Weg.</em> ✓</li>
        <li><em>Meiner Ansicht nach <strong>das ist</strong> …</em> ✗</li>
        <li><em><strong>Dafür spricht</strong>, dass …</em> — aquí <em>dafür</em> es la
            casilla 1 y <em>spricht</em> la 2; el sujeto real es la frase con
            <em>dass</em>.</li>
      </ul>
      <div class="merke"><strong>El contraargumento no es opcional</strong> ni una debilidad.
      Reconocer la objeción y responderla es lo que distingue un texto B2 de una lista de
      opiniones: <em>Zwar sind die Kosten hoch, allerdings amortisieren sie sich in wenigen
      Jahren.</em></div>`,
    uebungen: [
      { id: "g10701", satz: "Meiner Ansicht nach ___ das der falsche Weg. (sein)", loesung: "ist", tipps: ["ist", "es ist", "das ist"], hinweis: "la fórmula ocupa la posición 1", ue: "En mi opinión ese es el camino equivocado." },
      { id: "g10702", satz: "___ spricht, dass die Kosten sinken. (a favor)", loesung: "Dafür", tipps: ["Dafür", "Dagegen", "Darum"], hinweis: "argumento a favor", ue: "A favor está que los costes bajan." },
      { id: "g10703", satz: "___ spricht der hohe Aufwand. (en contra)", loesung: "Dagegen", tipps: ["Dagegen", "Dafür", "Damit"], hinweis: "objeción", ue: "En contra está el elevado esfuerzo." },
      { id: "g10704", satz: "Ein Beispiel ___ ist die Entwicklung in Berlin.", loesung: "dafür", tipps: ["dafür", "davon", "dazu"], hinweis: "da- + für", ue: "Un ejemplo de ello es la evolución en Berlín." },
      { id: "g10705", satz: "___ überwiegen für mich die Vorteile. (en definitiva)", loesung: "Letztlich", tipps: ["Letztlich", "Zunächst", "Dagegen"], hinweis: "cierre de la argumentación", ue: "En definitiva pesan más las ventajas." }
    ]
  }
});

LEKTION('de', {
  tag: 108, niveau: "B2", thema: "Criticar y discrepar",
  vokabeln: [
    { id: "v10801", de: "die Beschwerde", es: "la reclamación", wortart: "sustantivo", beispiel: "Ich reiche eine Beschwerde ein.", beispielUe: "Presento una reclamación." },
    { id: "v10802", de: "bemängeln",      es: "criticar un defecto", wortart: "verbo", beispiel: "Er bemängelt die Qualität.", beispielUe: "Él critica la calidad." },
    { id: "v10803", de: "die Nachbesserung", es: "la subsanación", wortart: "sustantivo", beispiel: "Wir bitten um Nachbesserung.", beispielUe: "Pedimos una subsanación." },
    { id: "v10804", de: "taktvoll",       es: "con tacto",      wortart: "adjetivo", beispiel: "Sag es bitte taktvoll.", beispielUe: "Dilo con tacto, por favor." },
    { id: "v10805", de: "der Kompromiss", es: "el compromiso",  wortart: "sustantivo", beispiel: "Wir finden einen Kompromiss.", beispielUe: "Encontramos un compromiso." },
    { id: "v10806", de: "nachgeben",      es: "ceder",          wortart: "verbo separable", beispiel: "Irgendwann gab er nach.", beispielUe: "En algún momento cedió." },
    { id: "v10807", de: "eskalieren",     es: "escalar",        wortart: "verbo", beispiel: "Der Streit eskalierte.", beispielUe: "La disputa escaló." },
    { id: "v10808", de: "die Vermittlung", es: "la mediación",  wortart: "sustantivo", beispiel: "Die Vermittlung hat geholfen.", beispielUe: "La mediación ayudó." },
    { id: "v10809", de: "sachlich",       es: "objetivo",       wortart: "adjetivo", beispiel: "Bleiben wir sachlich.", beispielUe: "Mantengámonos objetivos." },
    { id: "v10810", de: "zugestehen",     es: "conceder",       wortart: "verbo separable", beispiel: "Das gestehe ich Ihnen zu.", beispielUe: "Eso se lo concedo." }
  ],
  saetze: [
    { id: "s10801", de: "Da bin ich anderer Meinung.", es: "Ahí soy de otra opinión." },
    { id: "s10802", de: "Das sehe ich etwas anders.", es: "Eso lo veo algo distinto." },
    { id: "s10803", de: "Ich kann Ihnen da leider nicht ganz zustimmen.", es: "Ahí lamentablemente no puedo darle del todo la razón." },
    { id: "s10804", de: "Es wäre schön, wenn das etwas schneller ginge.", es: "Estaría bien si eso fuera algo más rápido." },
    { id: "s10805", de: "Mir ist aufgefallen, dass die Antwort noch fehlt.", es: "Me he dado cuenta de que aún falta la respuesta." }
  ],
  grammatik: {
    id: "g108", titel: "Criticar sin ofender",
    erklaerung: `
      <p>La crítica directa que en español suena enérgica, en alemán suena agresiva. El
      alemán amortigua con <strong>medios gramaticales</strong>, no solo con el tono, y
      esos medios ya los tienes todos.</p>
      <table>
        <tr><th>Directo (suena duro)</th><th>Amortiguado</th></tr>
        <tr><td>Sie haben unrecht.</td><td>Da bin ich anderer Meinung.</td></tr>
        <tr><td>Das ist falsch.</td><td>Das sehe ich etwas anders.</td></tr>
        <tr><td>Ich stimme nicht zu.</td><td>Ich kann Ihnen da nicht ganz zustimmen.</td></tr>
        <tr><td>Machen Sie das schneller!</td><td>Es wäre schön, wenn das etwas schneller ginge.</td></tr>
        <tr><td>Sie haben die Antwort vergessen.</td><td>Mir ist aufgefallen, dass die Antwort noch fehlt.</td></tr>
      </table>
      <p><strong>Las cinco técnicas</strong> que producen ese efecto:</p>
      <ol>
        <li><strong>Konjunktiv II:</strong> <em>wäre</em>, <em>ginge</em>, <em>hätte</em>,
            <em>könnte</em> — todo lo que dices se vuelve hipotético y por tanto
            negociable.</li>
        <li><strong>Palabras que rebajan:</strong> <em>etwas</em>, <em>ein wenig</em>,
            <em>nicht ganz</em>, <em>eventuell</em>, <em>vielleicht</em>,
            <em>möglicherweise</em>.</li>
        <li><strong>Mensaje en primera persona</strong> en lugar de reproche:
            <em>Mir ist aufgefallen …</em> / <em>Ich habe den Eindruck …</em>, y no
            <em>Sie haben …</em></li>
        <li><strong>Pasiva o impersonal</strong> para no señalar al culpable:
            <em>Die Frist wurde nicht eingehalten</em> en vez de <em>Sie haben die Frist
            nicht eingehalten</em>.</li>
        <li><strong>Concesión primero:</strong> <em>Ihr Vorschlag ist interessant,
            allerdings …</em> — reconocer algo antes de objetar.</li>
      </ol>
      <div class="merke"><strong>El equilibrio alemán</strong> no es evitar la crítica: es
      decirla con claridad y sin atacar a la persona. <em>Bleiben wir sachlich</em> es
      literalmente lo que se espera — la crítica va al asunto, nunca al interlocutor. Un
      <em>Das ist Unsinn</em> cierra una conversación de trabajo; un <em>Da habe ich
      Bedenken</em> la abre.</div>
      <p><strong>Fórmulas listas para una reclamación escrita:</strong></p>
      <ul>
        <li><em>Leider muss ich feststellen, dass …</em></li>
        <li><em>Ich bitte Sie, den Fehler bis zum … zu beheben.</em></li>
        <li><em>Sollte sich daran nichts ändern, sehe ich mich gezwungen, …</em></li>
        <li><em>Ich gehe davon aus, dass sich das kurzfristig klären lässt.</em></li>
      </ul>`,
    uebungen: [
      { id: "g10801", satz: "Da bin ich anderer ___.", loesung: "Meinung", tipps: ["Meinung", "Ansicht", "Seite"], hinweis: "discrepar con suavidad", ue: "Ahí soy de otra opinión." },
      { id: "g10802", satz: "Das ___ ich etwas anders. (sehen)", loesung: "sehe", tipps: ["sehe", "sieht", "sehen"], hinweis: "primera persona", ue: "Eso lo veo algo distinto." },
      { id: "g10803", satz: "Ich kann Ihnen da leider nicht ganz ___.", loesung: "zustimmen", tipps: ["zustimmen", "stimmen zu", "zugestimmt"], hinweis: "infinitivo tras kann", ue: "No puedo darle del todo la razón." },
      { id: "g10804", satz: "Es ___ schön, wenn das schneller ginge. (sein, K II)", loesung: "wäre", tipps: ["wäre", "ist", "war"], hinweis: "Konjunktiv II amortigua", ue: "Estaría bien si fuera más rápido." },
      { id: "g10805", satz: "___ ist aufgefallen, dass die Antwort fehlt. (a mí)", loesung: "Mir", tipps: ["Mir", "Ich", "Mich"], hinweis: "auffallen rige dativo", ue: "Me he dado cuenta de que falta la respuesta." }
    ]
  }
});

LEKTION('de', {
  tag: 109, niveau: "B2", thema: "Describir gráficos",
  vokabeln: [
    { id: "v10901", de: "das Schaubild",  es: "el gráfico",     wortart: "sustantivo", beispiel: "Das Schaubild zeigt drei Kurven.", beispielUe: "El gráfico muestra tres curvas." },
    { id: "v10902", de: "die Achse",      es: "el eje",         wortart: "sustantivo", beispiel: "Auf der waagerechten Achse steht die Zeit.", beispielUe: "En el eje horizontal está el tiempo." },
    { id: "v10903", de: "der Anteil",     es: "la proporción",  wortart: "sustantivo", beispiel: "Der Anteil ist gestiegen.", beispielUe: "La proporción ha subido." },
    { id: "v10904", de: "betragen",       es: "ascender a",     wortart: "verbo", beispiel: "Der Wert beträgt 40 Prozent.", beispielUe: "El valor asciende al 40 por ciento." },
    { id: "v10905", de: "der Höchststand", es: "el máximo",     wortart: "sustantivo", beispiel: "2020 war der Höchststand.", beispielUe: "2020 fue el máximo." },
    { id: "v10906", de: "der Rückgang",   es: "el descenso",    wortart: "sustantivo", beispiel: "Es gab einen leichten Rückgang.", beispielUe: "Hubo un ligero descenso." },
    { id: "v10907", de: "die Zunahme",    es: "el aumento",     wortart: "sustantivo", beispiel: "Die Zunahme ist deutlich.", beispielUe: "El aumento es claro." },
    { id: "v10908", de: "konstant",       es: "constante",      wortart: "adjetivo", beispiel: "Die Zahl bleibt konstant.", beispielUe: "La cifra se mantiene constante." },
    { id: "v10909", de: "der Durchschnitt", es: "el promedio",  wortart: "sustantivo", beispiel: "Der Durchschnitt liegt bei 30.", beispielUe: "El promedio está en 30." },
    { id: "v10910", de: "sich belaufen auf", es: "ascender a",  wortart: "verbo con preposición", beispiel: "Die Summe beläuft sich auf 500 Euro.", beispielUe: "La suma asciende a 500 euros." }
  ],
  saetze: [
    { id: "s10901", de: "Die Grafik zeigt die Entwicklung der Preise.", es: "El gráfico muestra la evolución de los precios." },
    { id: "s10902", de: "Der Anteil beträgt rund 40 Prozent.", es: "La proporción asciende a un 40 por ciento." },
    { id: "s10903", de: "Die Zahl ist von 20 auf 35 gestiegen.", es: "La cifra subió de 20 a 35." },
    { id: "s10904", de: "Im Vergleich zum Vorjahr ist ein Rückgang zu erkennen.", es: "En comparación con el año anterior se aprecia un descenso." },
    { id: "s10905", de: "Am höchsten ist der Wert im Jahr 2020.", es: "El valor más alto es en el año 2020." }
  ],
  grammatik: {
    id: "g109", titel: "Describir cifras y evoluciones",
    erklaerung: `
      <p>Describir un gráfico es una tarea fija del B2 oral y escrito. Se resuelve con un
      vocabulario cerrado y, sobre todo, con <strong>las preposiciones correctas</strong>,
      que es donde se pierden los puntos.</p>
      <div class="merke"><strong>Las cuatro preposiciones de las cifras:</strong><br>
      <strong>von … auf …</strong> — el punto de partida y el de llegada:
      <em>von 20 <strong>auf</strong> 35 steigen</em><br>
      <strong>um …</strong> — la diferencia: <em><strong>um</strong> 15 Punkte steigen</em><br>
      <strong>bei …</strong> — el nivel: <em>Der Wert liegt <strong>bei</strong> 40 Prozent</em><br>
      <strong>auf …</strong> — el nivel alcanzado: <em><strong>auf</strong> 35 steigen</em></div>
      <table>
        <tr><th>Función</th><th>Expresiones</th></tr>
        <tr><td>presentar</td><td>Die Grafik <strong>zeigt</strong> / <strong>stellt … dar</strong> / <strong>gibt Auskunft über</strong> …</td></tr>
        <tr><td>cantidad</td><td><strong>betragen</strong>, <strong>sich belaufen auf</strong>, <strong>liegen bei</strong>, ausmachen</td></tr>
        <tr><td>subida</td><td>steigen, zunehmen, wachsen, sich erhöhen, ansteigen</td></tr>
        <tr><td>bajada</td><td>sinken, abnehmen, zurückgehen, fallen, sich verringern</td></tr>
        <tr><td>estabilidad</td><td>konstant bleiben, stagnieren, sich kaum verändern</td></tr>
        <tr><td>extremos</td><td>den Höchststand erreichen, am höchsten / niedrigsten sein</td></tr>
        <tr><td>comparar</td><td>im Vergleich zu, gegenüber dem Vorjahr, doppelt so hoch wie</td></tr>
      </table>
      <p><strong>Matizar las cifras</strong> — el alemán rara vez da un número desnudo:</p>
      <table>
        <tr><td><strong>rund / etwa / circa</strong></td><td>aproximadamente</td></tr>
        <tr><td><strong>knapp</strong> 40 %</td><td>algo menos de 40</td></tr>
        <tr><td><strong>gut</strong> 40 %</td><td>algo más de 40</td></tr>
        <tr><td><strong>über / unter</strong> 40 %</td><td>por encima / por debajo</td></tr>
        <tr><td><strong>jeder Dritte</strong></td><td>uno de cada tres</td></tr>
      </table>
      <div class="merke"><strong>knapp</strong> y <strong>gut</strong> delante de un número
      son la trampa favorita de los exámenes de comprensión: <em>knapp 40 Prozent</em> es
      <strong>menos</strong> de 40, <em>gut 40 Prozent</em> es <strong>más</strong>.</div>
      <p><strong>Y no olvides la parte que se evalúa aparte:</strong> tras describir, hay que
      <em>interpretar</em>. Una frase basta:
      <em>Das lässt darauf schließen, dass …</em> o
      <em>Eine mögliche Erklärung dafür ist, dass …</em></p>`,
    uebungen: [
      { id: "g10901", satz: "Der Anteil ___ rund 40 Prozent. (betragen)", loesung: "beträgt", tipps: ["beträgt", "betragt", "betrifft"], hinweis: "verbo irregular", ue: "La proporción asciende a un 40 por ciento." },
      { id: "g10902", satz: "Die Zahl ist ___ 20 auf 35 gestiegen.", loesung: "von", tipps: ["von", "um", "bei"], hinweis: "punto de partida", ue: "La cifra subió de 20 a 35." },
      { id: "g10903", satz: "Die Zahl ist ___ 15 Punkte gestiegen. (diferencia)", loesung: "um", tipps: ["um", "von", "auf"], hinweis: "la diferencia", ue: "La cifra subió en 15 puntos." },
      { id: "g10904", satz: "Der Wert liegt ___ 40 Prozent. (nivel)", loesung: "bei", tipps: ["bei", "auf", "in"], hinweis: "liegen bei", ue: "El valor está en el 40 por ciento." },
      { id: "g10905", satz: "Im ___ zum Vorjahr gab es einen Rückgang.", loesung: "Vergleich", tipps: ["Vergleich", "Gegensatz", "Unterschied"], hinweis: "im … zu", ue: "En comparación con el año anterior hubo un descenso." }
    ]
  }
});

LEKTION('de', {
  tag: 110, niveau: "B2", thema: "Correspondencia formal",
  vokabeln: [
    { id: "v11001", de: "der Betreff",    es: "el asunto",      wortart: "sustantivo", beispiel: "Der Betreff fehlt.", beispielUe: "Falta el asunto." },
    { id: "v11002", de: "die Anlage",     es: "el archivo adjunto", wortart: "sustantivo", beispiel: "Die Anlage finden Sie unten.", beispielUe: "El adjunto está abajo." },
    { id: "v11003", de: "beifügen",       es: "adjuntar",       wortart: "verbo separable", beispiel: "Ich füge den Lebenslauf bei.", beispielUe: "Adjunto el currículum." },
    { id: "v11004", de: "das Anliegen",   es: "la petición",    wortart: "sustantivo", beispiel: "Mein Anliegen ist kurz.", beispielUe: "Mi petición es breve." },
    { id: "v11005", de: "die Rückmeldung", es: "la respuesta",  wortart: "sustantivo", beispiel: "Ich bitte um Rückmeldung.", beispielUe: "Ruego una respuesta." },
    { id: "v11006", de: "der Empfänger",  es: "el destinatario", wortart: "sustantivo", beispiel: "Der Empfänger ist unbekannt.", beispielUe: "El destinatario es desconocido." },
    { id: "v11007", de: "das Schreiben",  es: "el escrito",     wortart: "sustantivo", beispiel: "Ihr Schreiben vom 3. Mai.", beispielUe: "Su escrito del 3 de mayo." },
    { id: "v11008", de: "die Grußformel", es: "la despedida",   wortart: "sustantivo", beispiel: "Die Grußformel steht am Ende.", beispielUe: "La despedida va al final." },
    { id: "v11009", de: "hochachtungsvoll", es: "atentamente (anticuado)", wortart: "adverbio", beispiel: "Hochachtungsvoll klingt heute streng.", beispielUe: "Hochachtungsvoll hoy suena severo." },
    { id: "v11010", de: "sich erlauben",  es: "permitirse",     wortart: "verbo reflexivo", beispiel: "Ich erlaube mir nachzufragen.", beispielUe: "Me permito preguntar." }
  ],
  saetze: [
    { id: "s11001", de: "Sehr geehrte Frau Meier, ich wende mich an Sie, weil ...", es: "Estimada Sra. Meier, me dirijo a usted porque…" },
    { id: "s11002", de: "Anbei sende ich Ihnen die geforderten Unterlagen.", es: "Adjunto le envío los documentos solicitados." },
    { id: "s11003", de: "Ich wäre Ihnen für eine kurze Rückmeldung sehr dankbar.", es: "Le estaría muy agradecido por una breve respuesta." },
    { id: "s11004", de: "Für Rückfragen stehe ich Ihnen gern zur Verfügung.", es: "Para consultas quedo a su disposición." },
    { id: "s11005", de: "Mit freundlichen Grüßen", es: "Atentamente" }
  ],
  grammatik: {
    id: "g110", titel: "La carta y el correo formal",
    erklaerung: `
      <p>El correo formal alemán es casi un formulario: quien conoce las fórmulas escribe
      uno en cinco minutos. Estas son las piezas, en orden.</p>
      <table>
        <tr><th>Parte</th><th>Contenido</th></tr>
        <tr><td><strong>Betreff</strong></td><td>sin verbo, concreto: <em>Bewerbung als Servicetechniker</em> / <em>Ihr Schreiben vom 3. Mai</em></td></tr>
        <tr><td><strong>Anrede</strong></td><td><em>Sehr geehrte Damen und Herren,</em> (sin nombre) · <em>Sehr geehrter Herr Dr. Meier,</em> (con nombre y título)</td></tr>
        <tr><td><strong>Einstieg</strong></td><td><em>ich wende mich an Sie, weil …</em> / <em>vielen Dank für Ihr Schreiben vom …</em></td></tr>
        <tr><td><strong>Hauptteil</strong></td><td>un párrafo por asunto, con los conectores del día 88</td></tr>
        <tr><td><strong>Schluss</strong></td><td><em>Für Rückfragen stehe ich Ihnen gern zur Verfügung.</em></td></tr>
        <tr><td><strong>Gruß</strong></td><td><em>Mit freundlichen Grüßen</em> — sin coma detrás</td></tr>
        <tr><td><strong>Anlage</strong></td><td><em>Anlagen: Lebenslauf, Zeugnisse</em></td></tr>
      </table>
      <div class="merke"><strong>Las tres reglas de escritura que se corrigen siempre:</strong><br>
      1. Tras la coma del <em>Anrede</em>, el texto sigue en <strong>minúscula</strong>:
      <em>Sehr geehrte Frau Meier,<br>ich wende mich …</em><br>
      2. <strong>Sie, Ihnen, Ihr</strong> siempre con mayúscula.<br>
      3. La <em>Grußformel</em> <strong>no lleva coma</strong> ni punto al final.</div>
      <p><strong>Las fórmulas por función</strong>, listas para copiar:</p>
      <table>
        <tr><td>pedir</td><td>Ich möchte Sie bitten, … · Könnten Sie mir bitte mitteilen, ob …</td></tr>
        <tr><td>adjuntar</td><td><strong>Anbei</strong> sende ich Ihnen … · <strong>Beigefügt</strong> finden Sie …</td></tr>
        <tr><td>agradecer</td><td>Ich wäre Ihnen für … sehr dankbar. · Vielen Dank im Voraus.</td></tr>
        <tr><td>disculparse</td><td>Ich bitte um Entschuldigung für … · Bitte haben Sie Verständnis dafür, dass …</td></tr>
        <tr><td>meter prisa</td><td>Ich bitte um Antwort bis zum … · Über eine baldige Rückmeldung würde ich mich freuen.</td></tr>
      </table>
      <p><strong>Dos avisos de tono.</strong> <em>Hochachtungsvoll</em> ya no es la fórmula
      neutra que aparece en los diccionarios antiguos: hoy suena distante o incluso
      hostil, y se reserva para cartas de abogados. Y <em>Liebe Grüße</em> es cariñoso —
      entre colegas que se tutean, no en una solicitud.</p>
      <div class="merke">En correos, <strong>Mit freundlichen Grüßen</strong> funciona
      siempre. Es la despedida por defecto y nunca es un error; <em>Viele Grüße</em> es su
      versión algo más relajada, adecuada cuando ya hay varios correos de ida y vuelta.</div>`,
    uebungen: [
      { id: "g11001", satz: "Sehr geehrte Frau Meier, ___ wende mich an Sie.", loesung: "ich", tipps: ["ich", "Ich", "wir"], hinweis: "tras la coma sigue en minúscula", ue: "Estimada Sra. Meier, me dirijo a usted." },
      { id: "g11002", satz: "___ sende ich Ihnen die Unterlagen. (adjunto)", loesung: "Anbei", tipps: ["Anbei", "Dabei", "Hierbei"], hinweis: "fórmula de adjuntar", ue: "Adjunto le envío los documentos." },
      { id: "g11003", satz: "Ich wäre Ihnen für eine Rückmeldung sehr ___.", loesung: "dankbar", tipps: ["dankbar", "danken", "Dank"], hinweis: "adjetivo tras sehr", ue: "Le estaría muy agradecido por una respuesta." },
      { id: "g11004", satz: "Für Rückfragen stehe ich Ihnen gern zur ___.", loesung: "Verfügung", tipps: ["Verfügung", "Seite", "Auskunft"], hinweis: "fórmula de cierre", ue: "Para consultas quedo a su disposición." },
      { id: "g11005", satz: "Mit freundlichen ___", loesung: "Grüßen", tipps: ["Grüßen", "Gruß", "Grüße"], hinweis: "dativo plural tras mit", ue: "Atentamente" }
    ]
  }
});
