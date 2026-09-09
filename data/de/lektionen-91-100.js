/* Día 91–100 · Nivel B2 · Estilo indirecto, atributos y estilo nominal */

LEKTION('de', {
  tag: 91, niveau: "B2", thema: "Prensa y política",
  vokabeln: [
    { id: "v9101", de: "die Presse",      es: "la prensa",      wortart: "sustantivo", beispiel: "Die Presse berichtet darüber.", beispielUe: "La prensa informa sobre eso." },
    { id: "v9102", de: "die Regierung",   es: "el gobierno",    wortart: "sustantivo", beispiel: "Die Regierung schweigt.", beispielUe: "El gobierno calla." },
    { id: "v9103", de: "der Sprecher",    es: "el portavoz",    wortart: "sustantivo", beispiel: "Der Sprecher bestätigte es.", beispielUe: "El portavoz lo confirmó." },
    { id: "v9104", de: "äußern",          es: "manifestar",     wortart: "verbo", beispiel: "Er äußerte Kritik.", beispielUe: "Él manifestó críticas." },
    { id: "v9105", de: "die Stellungnahme", es: "el pronunciamiento", wortart: "sustantivo", beispiel: "Eine Stellungnahme steht aus.", beispielUe: "Falta un pronunciamiento." },
    { id: "v9106", de: "dementieren",     es: "desmentir",      wortart: "verbo", beispiel: "Das Ministerium dementiert.", beispielUe: "El ministerio desmiente." },
    { id: "v9107", de: "der Abgeordnete", es: "el diputado",    wortart: "sustantivo", beispiel: "Die Abgeordneten stimmten ab.", beispielUe: "Los diputados votaron." },
    { id: "v9108", de: "die Sitzung",     es: "la sesión",      wortart: "sustantivo", beispiel: "Die Sitzung dauerte lange.", beispielUe: "La sesión duró mucho." },
    { id: "v9109", de: "verkünden",       es: "anunciar",       wortart: "verbo", beispiel: "Sie verkündeten das Ergebnis.", beispielUe: "Anunciaron el resultado." },
    { id: "v9110", de: "laut",            es: "según",          wortart: "preposición", beispiel: "Laut der Zeitung stimmt es.", beispielUe: "Según el periódico es cierto." }
  ],
  saetze: [
    { id: "s9101", de: "Der Minister sagte, er sei nicht informiert.", es: "El ministro dijo que no estaba informado." },
    { id: "s9102", de: "Die Sprecherin erklärte, man werde die Lage prüfen.", es: "La portavoz declaró que se examinaría la situación." },
    { id: "s9103", de: "Er behauptet, er habe nichts gewusst.", es: "Él afirma que no sabía nada." },
    { id: "s9104", de: "Sie sagte, sie könne morgen kommen.", es: "Ella dijo que podía venir mañana." },
    { id: "s9105", de: "Die Abgeordneten sagten, sie hätten keine Zeit.", es: "Los diputados dijeron que no tenían tiempo." }
  ],
  grammatik: {
    id: "g91", titel: "Konjunktiv I — el modo de la prensa",
    erklaerung: `
      <p>Hasta ahora contabas lo que otros decían con <em>dass</em> + indicativo. Eso vale
      para hablar. En prensa, informes y actas se usa el <strong>Konjunktiv I</strong>, y
      su función es muy concreta:</p>
      <div class="merke">El Konjunktiv I marca que <strong>quien escribe no se hace
      responsable</strong> del contenido: solo reproduce. En español eso se hace con
      <em>según</em>, <em>supuestamente</em> o el condicional periodístico. En alemán es
      una forma verbal.</div>
      <p><strong>Cómo se forma:</strong> raíz del <em>infinitivo</em> + terminaciones
      -e, -est, -e, -en, -et, -en. Sin cambio de vocal, sin irregularidades:</p>
      <table>
        <tr><th></th><th>haben</th><th>können</th><th>werden</th><th>sein</th></tr>
        <tr><td>ich</td><td>habe</td><td>könne</td><td>werde</td><td><strong>sei</strong></td></tr>
        <tr><td>du</td><td>habest</td><td>könnest</td><td>werdest</td><td>sei(e)st</td></tr>
        <tr><td><strong>er/sie/es</strong></td><td><strong>habe</strong></td><td><strong>könne</strong></td><td><strong>werde</strong></td><td><strong>sei</strong></td></tr>
        <tr><td>wir</td><td>haben</td><td>können</td><td>werden</td><td>seien</td></tr>
        <tr><td>ihr</td><td>habet</td><td>könnet</td><td>werdet</td><td>seiet</td></tr>
        <tr><td>sie/Sie</td><td>haben</td><td>können</td><td>werden</td><td>seien</td></tr>
      </table>
      <p><strong>El único caso que se usa de verdad es la tercera persona del singular</strong>,
      porque es la única que se distingue del indicativo: <em>er hat</em> → <em>er
      <strong>habe</strong></em>, <em>er kommt</em> → <em>er <strong>komme</strong></em>,
      <em>er kann</em> → <em>er <strong>könne</strong></em>.</p>
      <div class="merke"><strong>La regla de sustitución.</strong> Cuando el Konjunktiv I
      coincide con el indicativo — y eso pasa en todo el plural y en la primera persona —
      se usa el <strong>Konjunktiv II</strong> en su lugar:<br>
      <em>sie haben</em> (igual al indicativo) → <em>sie <strong>hätten</strong></em><br>
      <em>sie kommen</em> → <em>sie <strong>kämen</strong></em> o <em>sie
      <strong>würden kommen</strong></em></div>
      <p><strong>sein es la excepción</strong> y por eso aparece constantemente: sus formas
      son distintas en todas las personas, así que nunca hay que sustituirlo.
      <em>Er sei krank</em>, <em>sie seien informiert</em>.</p>
      <p><strong>Lo que no cambia:</strong> el orden de la frase es el de una principal
      normal si omites <em>dass</em> — <em>Er sagte, er <strong>sei</strong> nicht
      informiert</em>. Con <em>dass</em> el verbo se va al final y el Konjunktiv I
      suele desaparecer, porque ya no hace falta marcar nada.</p>`,
    uebungen: [
      { id: "g9101", satz: "Der Minister sagte, er ___ nicht informiert. (sein)", loesung: "sei", tipps: ["sei", "ist", "wäre"], hinweis: "Konjunktiv I de sein", ue: "El ministro dijo que no estaba informado." },
      { id: "g9102", satz: "Sie erklärte, man ___ die Lage prüfen. (werden)", loesung: "werde", tipps: ["werde", "wird", "würde"], hinweis: "tercera persona singular", ue: "Declaró que se examinaría la situación." },
      { id: "g9103", satz: "Er behauptet, er ___ nichts gewusst. (haben)", loesung: "habe", tipps: ["habe", "hat", "hätte"], hinweis: "Konjunktiv I de haben", ue: "Afirma que no sabía nada." },
      { id: "g9104", satz: "Sie sagte, sie ___ morgen kommen. (können)", loesung: "könne", tipps: ["könne", "kann", "könnte"], hinweis: "sin Umlaut: es Konjunktiv I", ue: "Dijo que podía venir mañana." },
      { id: "g9105", satz: "Sie sagten, sie ___ keine Zeit. (haben, plural)", loesung: "hätten", tipps: ["hätten", "haben", "habe"], hinweis: "plural: hay que sustituir", ue: "Dijeron que no tenían tiempo." }
    ]
  }
});

LEKTION('de', {
  tag: 92, niveau: "B2", thema: "Informar sobre hechos",
  vokabeln: [
    { id: "v9201", de: "der Vorfall",     es: "el incidente",   wortart: "sustantivo", beispiel: "Der Vorfall wird untersucht.", beispielUe: "El incidente se investiga." },
    { id: "v9202", de: "die Untersuchung", es: "la investigación", wortart: "sustantivo", beispiel: "Die Untersuchung läuft noch.", beispielUe: "La investigación sigue en curso." },
    { id: "v9203", de: "ermitteln",       es: "investigar oficialmente", wortart: "verbo", beispiel: "Die Polizei ermittelt.", beispielUe: "La policía investiga." },
    { id: "v9204", de: "der Sachverhalt", es: "los hechos",     wortart: "sustantivo", beispiel: "Der Sachverhalt ist unklar.", beispielUe: "Los hechos no están claros." },
    { id: "v9205", de: "zurückweisen",    es: "rechazar",       wortart: "verbo separable", beispiel: "Er weist den Vorwurf zurück.", beispielUe: "Él rechaza el reproche." },
    { id: "v9206", de: "die Anschuldigung", es: "la acusación", wortart: "sustantivo", beispiel: "Die Anschuldigung ist schwer.", beispielUe: "La acusación es grave." },
    { id: "v9207", de: "die Zeugenaussage", es: "el testimonio", wortart: "sustantivo", beispiel: "Die Zeugenaussage half.", beispielUe: "El testimonio ayudó." },
    { id: "v9208", de: "vorläufig",       es: "provisional",    wortart: "adjetivo", beispiel: "Das ist ein vorläufiges Ergebnis.", beispielUe: "Es un resultado provisional." },
    { id: "v9209", de: "umstritten",      es: "controvertido",  wortart: "adjetivo", beispiel: "Die Maßnahme ist umstritten.", beispielUe: "La medida es controvertida." },
    { id: "v9210", de: "sich äußern zu",  es: "pronunciarse sobre", wortart: "verbo con preposición", beispiel: "Er äußert sich nicht dazu.", beispielUe: "Él no se pronuncia al respecto." }
  ],
  saetze: [
    { id: "s9201", de: "Er sagte, er sei am Abend zu Hause gewesen.", es: "Dijo que por la tarde había estado en casa." },
    { id: "s9202", de: "Sie erklärte, sie habe nichts bemerkt.", es: "Declaró que no había notado nada." },
    { id: "s9203", de: "Der Zeuge sagte, er habe den Wagen gesehen.", es: "El testigo dijo que había visto el coche." },
    { id: "s9204", de: "Sie sagten, sie hätten nichts gehört.", es: "Dijeron que no habían oído nada." },
    { id: "s9205", de: "Er betonte, er werde sich dazu äußern.", es: "Subrayó que se pronunciaría al respecto." }
  ],
  grammatik: {
    id: "g92", titel: "Konjunktiv I en pasado y futuro",
    erklaerung: `
      <p>Buena noticia: el estilo indirecto simplifica los tiempos. Los tres pasados del
      alemán se funden en <strong>uno solo</strong>.</p>
      <table>
        <tr><th>Estilo directo</th><th>Estilo indirecto</th></tr>
        <tr><td>Ich <strong>war</strong> zu Hause. (Präteritum)</td><td rowspan="3">Er sagte, er <strong>sei</strong> zu Hause <strong>gewesen</strong>.</td></tr>
        <tr><td>Ich <strong>bin</strong> zu Hause <strong>gewesen</strong>. (Perfekt)</td></tr>
        <tr><td>Ich <strong>war</strong> zu Hause <strong>gewesen</strong>. (Plusquamperfekt)</td></tr>
        <tr><td>Ich <strong>habe</strong> nichts <strong>bemerkt</strong>.</td><td>Sie sagte, sie <strong>habe</strong> nichts <strong>bemerkt</strong>.</td></tr>
        <tr><td>Ich <strong>werde</strong> mich äußern.</td><td>Er sagte, er <strong>werde</strong> sich äußern.</td></tr>
      </table>
      <div class="merke"><strong>La fórmula del pasado:</strong> <em>habe</em> o <em>sei</em>
      en Konjunktiv I + participio II. El auxiliar es el mismo que en el Perfekt normal.
      No existe un Konjunktiv I de Präteritum: no hace falta.</div>
      <p><strong>Y la sustitución también vale aquí.</strong> En plural, <em>haben</em>
      coincide con el indicativo, así que se pasa al Konjunktiv II:</p>
      <table>
        <tr><td>er <strong>habe</strong> gehört</td><td>correcto: se distingue de <em>hat</em></td></tr>
        <tr><td>sie <s>haben</s> gehört</td><td>igual al indicativo → sie <strong>hätten</strong> gehört</td></tr>
        <tr><td>ich <s>habe</s> gehört</td><td>igual al indicativo → ich <strong>hätte</strong> gehört</td></tr>
      </table>
      <p><strong>Cómo se lee un texto de prensa con esto.</strong> Fíjate en la diferencia:</p>
      <table>
        <tr><td><em>Der Minister <strong>war</strong> nicht informiert.</em></td><td>El periódico lo afirma: es un hecho.</td></tr>
        <tr><td><em>Der Minister <strong>sei</strong> nicht informiert gewesen.</em></td><td>Lo dice el ministro. El periódico no se moja.</td></tr>
      </table>
      <div class="merke">Ese matiz es exactamente lo que se examina en el B2 y lo que
      necesitas para leer prensa alemana sin malinterpretarla. Un artículo entero en
      Konjunktiv I no está afirmando nada: está citando.</div>
      <p><strong>Los verbos que lo introducen</strong> a menudo aparecen solo al principio;
      después el Konjunktiv I basta para señalar que se sigue citando, párrafos enteros
      sin repetir <em>er sagte</em>.</p>`,
    uebungen: [
      { id: "g9201", satz: "Er sagte, er ___ zu Hause gewesen.", loesung: "sei", tipps: ["sei", "habe", "wäre"], hinweis: "sein forma el perfecto con sein", ue: "Dijo que había estado en casa." },
      { id: "g9202", satz: "Sie erklärte, sie ___ nichts bemerkt.", loesung: "habe", tipps: ["habe", "sei", "hätte"], hinweis: "tercera persona singular", ue: "Declaró que no había notado nada." },
      { id: "g9203", satz: "Sie sagten, sie ___ nichts gehört. (plural)", loesung: "hätten", tipps: ["hätten", "haben", "habe"], hinweis: "en plural hay que sustituir", ue: "Dijeron que no habían oído nada." },
      { id: "g9204", satz: "Er betonte, er ___ sich dazu äußern.", loesung: "werde", tipps: ["werde", "wird", "würde"], hinweis: "futuro en estilo indirecto", ue: "Subrayó que se pronunciaría." },
      { id: "g9205", satz: "Ich war krank. → Er sagte, er ___ krank gewesen.", loesung: "sei", tipps: ["sei", "habe", "ist"], hinweis: "un solo pasado", ue: "Dijo que había estado enfermo." }
    ]
  }
});

LEKTION('de', {
  tag: 93, niveau: "B2", thema: "Ciencia e investigación",
  vokabeln: [
    { id: "v9301", de: "die Forschung",   es: "la investigación científica", wortart: "sustantivo", beispiel: "Die Forschung geht weiter.", beispielUe: "La investigación continúa." },
    { id: "v9302", de: "die Studie",      es: "el estudio",     wortart: "sustantivo", beispiel: "Die Studie wurde veröffentlicht.", beispielUe: "El estudio fue publicado." },
    { id: "v9303", de: "die Erkenntnis",  es: "el hallazgo",    wortart: "sustantivo", beispiel: "Das ist eine neue Erkenntnis.", beispielUe: "Ese es un hallazgo nuevo." },
    { id: "v9304", de: "nachweisen",      es: "demostrar",      wortart: "verbo separable", beispiel: "Das lässt sich nachweisen.", beispielUe: "Eso se puede demostrar." },
    { id: "v9305", de: "die These",       es: "la tesis",       wortart: "sustantivo", beispiel: "Seine These überzeugt nicht.", beispielUe: "Su tesis no convence." },
    { id: "v9306", de: "belegen",         es: "acreditar",      wortart: "verbo", beispiel: "Zahlen belegen das.", beispielUe: "Las cifras lo acreditan." },
    { id: "v9307", de: "der Ansatz",      es: "el enfoque",     wortart: "sustantivo", beispiel: "Der Ansatz ist neu.", beispielUe: "El enfoque es nuevo." },
    { id: "v9308", de: "auswerten",       es: "evaluar datos",  wortart: "verbo separable", beispiel: "Wir werten die Daten aus.", beispielUe: "Evaluamos los datos." },
    { id: "v9309", de: "die Stichprobe",  es: "la muestra",     wortart: "sustantivo", beispiel: "Die Stichprobe war zu klein.", beispielUe: "La muestra era muy pequeña." },
    { id: "v9310", de: "schlüssig",       es: "concluyente",    wortart: "adjetivo", beispiel: "Das Argument ist schlüssig.", beispielUe: "El argumento es concluyente." }
  ],
  saetze: [
    { id: "s9301", de: "Die vor einem Jahr veröffentlichte Studie ist umstritten.", es: "El estudio publicado hace un año es controvertido." },
    { id: "s9302", de: "Das von Forschern entwickelte Verfahren funktioniert.", es: "El procedimiento desarrollado por investigadores funciona." },
    { id: "s9303", de: "Die in Berlin durchgeführte Untersuchung war teuer.", es: "La investigación realizada en Berlín fue cara." },
    { id: "s9304", de: "Die stark steigenden Kosten sind ein Problem.", es: "Los costes fuertemente crecientes son un problema." },
    { id: "s9305", de: "Der zu prüfende Antrag liegt bereits vor.", es: "La solicitud que hay que revisar ya está." }
  ],
  grammatik: {
    id: "g93", titel: "Atributos participiales extendidos",
    erklaerung: `
      <p>Esta es la construcción que más asusta al leer un texto científico alemán: una
      frase de relativo entera comprimida <strong>entre el artículo y el sustantivo</strong>.
      No hay nada parecido en español, pero se descifra con un truco mecánico.</p>
      <table>
        <tr><th>Con relativa (fácil)</th><th>Con atributo extendido (texto real)</th></tr>
        <tr><td>die Studie, <strong>die</strong> vor einem Jahr <strong>veröffentlicht wurde</strong></td><td>die vor einem Jahr <strong>veröffentlichte</strong> Studie</td></tr>
        <tr><td>das Verfahren, <strong>das</strong> von Forschern <strong>entwickelt wurde</strong></td><td>das von Forschern <strong>entwickelte</strong> Verfahren</td></tr>
        <tr><td>die Kosten, <strong>die</strong> stark <strong>steigen</strong></td><td>die stark <strong>steigenden</strong> Kosten</td></tr>
      </table>
      <div class="merke"><strong>Cómo leerlo, paso a paso:</strong><br>
      1. Ves un artículo (<em>die</em>) y detrás algo que no es un sustantivo.<br>
      2. <strong>Salta hasta el sustantivo</strong> — es el que cierra el bloque
      (<em>Studie</em>).<br>
      3. Lee <em>die Studie</em>, y luego vuelve atrás: el participio te dice qué le pasó,
      y lo demás son los detalles.</div>
      <p><strong>Los tres tipos</strong> y lo que significan:</p>
      <table>
        <tr><th>Forma</th><th>Sentido</th><th>Equivale a</th></tr>
        <tr><td>Partizip II<br><em>die veröffentlichte Studie</em></td><td>pasivo, terminado</td><td>die Studie, die veröffentlicht wurde</td></tr>
        <tr><td>Partizip I<br><em>die steigenden Kosten</em></td><td>activo, simultáneo</td><td>die Kosten, die steigen</td></tr>
        <tr><td><strong>zu</strong> + Partizip I<br><em>der zu prüfende Antrag</em></td><td>pasivo + necesidad</td><td>der Antrag, der geprüft werden muss</td></tr>
      </table>
      <p>El tercero, la <em>Gerundivkonstruktion</em>, es puro lenguaje administrativo y
      significa siempre <strong>que hay que</strong> o <strong>que se puede</strong>:
      <em>die zu lösende Aufgabe</em> (la tarea que hay que resolver),
      <em>die zu erwartenden Kosten</em> (los costes esperables).</p>
      <div class="merke"><strong>Para producir, no lo necesitas.</strong> La relativa dice
      lo mismo y nadie te va a penalizar por usarla. Pero <strong>para leer</strong> es
      imprescindible: prensa, leyes, manuales y textos académicos están llenos de esto, y
      quien no lo reconoce se pierde el sujeto de la frase.</div>`,
    uebungen: [
      { id: "g9301", satz: "Die vor einem Jahr veröffentlicht___ Studie ist umstritten.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "femenino nominativo con die", ue: "El estudio publicado hace un año es controvertido." },
      { id: "g9302", satz: "Das von Forschern entwickelt___ Verfahren funktioniert.", loesung: "e", tipps: ["e", "es", "en"], hinweis: "neutro nominativo con das", ue: "El procedimiento desarrollado funciona." },
      { id: "g9303", satz: "Die stark steig___ Kosten sind ein Problem.", loesung: "enden", tipps: ["enden", "end", "gestiegenen"], hinweis: "Partizip I, plural", ue: "Los costes crecientes son un problema." },
      { id: "g9304", satz: "Der zu prüfend___ Antrag liegt vor.", loesung: "e", tipps: ["e", "en", "er"], hinweis: "masculino nominativo con der", ue: "La solicitud a revisar ya está." },
      { id: "g9305", satz: "Der Antrag, der geprüft werden muss = der zu ___ Antrag", loesung: "prüfende", tipps: ["prüfende", "geprüfte", "prüfenden"], hinweis: "zu + Partizip I", ue: "La solicitud que hay que revisar." }
    ]
  }
});

LEKTION('de', {
  tag: 94, niveau: "B2", thema: "Economía",
  vokabeln: [
    { id: "v9401", de: "das Unternehmen", es: "la empresa",     wortart: "sustantivo", beispiel: "Das Unternehmen wächst.", beispielUe: "La empresa crece." },
    { id: "v9402", de: "der Umsatz",      es: "la facturación", wortart: "sustantivo", beispiel: "Der Umsatz ist gestiegen.", beispielUe: "La facturación subió." },
    { id: "v9403", de: "die Investition", es: "la inversión",   wortart: "sustantivo", beispiel: "Die Investition lohnt sich.", beispielUe: "La inversión vale la pena." },
    { id: "v9404", de: "die Nachfrage",   es: "la demanda",     wortart: "sustantivo", beispiel: "Die Nachfrage sinkt.", beispielUe: "La demanda baja." },
    { id: "v9405", de: "das Angebot",     es: "la oferta",      wortart: "sustantivo", beispiel: "Das Angebot ist begrenzt.", beispielUe: "La oferta es limitada." },
    { id: "v9406", de: "die Rendite",     es: "la rentabilidad", wortart: "sustantivo", beispiel: "Die Rendite ist gering.", beispielUe: "La rentabilidad es baja." },
    { id: "v9407", de: "wirtschaftlich",  es: "económico",      wortart: "adjetivo", beispiel: "Das ist wirtschaftlich sinnvoll.", beispielUe: "Eso es económicamente razonable." },
    { id: "v9408", de: "der Wettbewerb",  es: "la competencia", wortart: "sustantivo", beispiel: "Der Wettbewerb ist hart.", beispielUe: "La competencia es dura." },
    { id: "v9409", de: "expandieren",     es: "expandirse",     wortart: "verbo", beispiel: "Die Firma expandiert nach Asien.", beispielUe: "La empresa se expande a Asia." },
    { id: "v9410", de: "die Bilanz",      es: "el balance",     wortart: "sustantivo", beispiel: "Die Bilanz ist positiv.", beispielUe: "El balance es positivo." }
  ],
  saetze: [
    { id: "s9401", de: "Nach Abschluss der Verhandlungen wurde der Vertrag unterschrieben.", es: "Tras la conclusión de las negociaciones se firmó el contrato." },
    { id: "s9402", de: "Aufgrund gestiegener Kosten senken wir die Investitionen.", es: "Debido al aumento de los costes reducimos las inversiones." },
    { id: "s9403", de: "Zur Steigerung des Umsatzes brauchen wir neue Kunden.", es: "Para aumentar la facturación necesitamos nuevos clientes." },
    { id: "s9404", de: "Trotz sinkender Nachfrage bleibt der Preis stabil.", es: "Pese a la demanda decreciente el precio se mantiene." },
    { id: "s9405", de: "Bei Nichterfüllung der Bedingungen entfällt der Anspruch.", es: "En caso de incumplimiento de las condiciones decae el derecho." }
  ],
  grammatik: {
    id: "g94", titel: "Estilo nominal y estilo verbal",
    erklaerung: `
      <p>En el día 78 viste la nominalización básica. En B2 hay que dominar el camino en
      <strong>las dos direcciones</strong>: leer un texto oficial y poder decirlo con
      frases normales, y al revés.</p>
      <table>
        <tr><th>Estilo verbal (claro)</th><th>Estilo nominal (oficial)</th></tr>
        <tr><td>Nachdem die Verhandlungen abgeschlossen waren, …</td><td><strong>Nach Abschluss</strong> der Verhandlungen …</td></tr>
        <tr><td>Weil die Kosten gestiegen sind, …</td><td><strong>Aufgrund gestiegener Kosten</strong> …</td></tr>
        <tr><td>Damit der Umsatz steigt, …</td><td><strong>Zur Steigerung</strong> des Umsatzes …</td></tr>
        <tr><td>Obwohl die Nachfrage sinkt, …</td><td><strong>Trotz sinkender Nachfrage</strong> …</td></tr>
        <tr><td>Wenn die Bedingungen nicht erfüllt werden, …</td><td><strong>Bei Nichterfüllung</strong> der Bedingungen …</td></tr>
        <tr><td>Indem man die Daten auswertet, …</td><td><strong>Durch Auswertung</strong> der Daten …</td></tr>
      </table>
      <div class="merke"><strong>El repertorio de preposiciones del B2</strong>, más allá de
      wegen y trotz:<br>
      <strong>aufgrund</strong> (debido a) · <strong>zwecks</strong> (con fines de) ·
      <strong>mittels</strong> (mediante) · <strong>anhand</strong> (a partir de) ·
      <strong>hinsichtlich</strong> (respecto a) · <strong>bezüglich</strong> (en relación con) ·
      <strong>infolge</strong> (a consecuencia de) · <strong>im Falle</strong> (en caso de) ·
      <strong>unter Berücksichtigung</strong> (teniendo en cuenta). Todas con genitivo.</div>
      <p><strong>Tres marcas del estilo nominal</strong>, útiles para reconocerlo:</p>
      <ol>
        <li>Muchos sustantivos en <strong>-ung</strong> encadenados en genitivo:
            <em>zur Verbesserung der Auswertung der Daten</em>.</li>
        <li><strong>Participios como adjetivo</strong> en lugar de relativas:
            <em>gestiegener Kosten</em>, <em>sinkender Nachfrage</em>.</li>
        <li>Prefijos de negación en el propio sustantivo:
            <strong>Nicht</strong>erfüllung, <strong>Un</strong>tätigkeit,
            <strong>Miss</strong>achtung.</li>
      </ol>
      <div class="merke"><strong>Cuándo usar cuál.</strong> El estilo nominal es obligatorio
      en contratos, solicitudes y actas — allí un texto verbal suena infantil. En una
      carta de reclamación o un correo a un colega, en cambio, el estilo verbal es más
      claro y más educado. Saber cambiar de registro es justamente lo que separa el B2
      del B1.</div>`,
    uebungen: [
      { id: "g9401", satz: "___ Abschluss der Verhandlungen wurde unterschrieben.", loesung: "Nach", tipps: ["Nach", "Vor", "Bei"], hinweis: "nachdem", ue: "Tras la conclusión se firmó." },
      { id: "g9402", satz: "___ gestiegener Kosten senken wir die Investitionen.", loesung: "Aufgrund", tipps: ["Aufgrund", "Trotz", "Zur"], hinweis: "weil, en registro formal", ue: "Debido al aumento de costes reducimos inversiones." },
      { id: "g9403", satz: "___ Steigerung des Umsatzes brauchen wir Kunden.", loesung: "Zur", tipps: ["Zur", "Zum", "Für"], hinweis: "damit / um zu, femenino", ue: "Para aumentar la facturación necesitamos clientes." },
      { id: "g9404", satz: "___ sinkender Nachfrage bleibt der Preis stabil.", loesung: "Trotz", tipps: ["Trotz", "Wegen", "Nach"], hinweis: "obwohl", ue: "Pese a la demanda decreciente el precio se mantiene." },
      { id: "g9405", satz: "steigern → die Steiger___", loesung: "ung", tipps: ["ung", "heit", "e"], hinweis: "sustantivo de acción", ue: "aumentar → el aumento" }
    ]
  }
});

LEKTION('de', {
  tag: 95, niveau: "B2", thema: "Procesos y estados",
  vokabeln: [
    { id: "v9501", de: "die Angelegenheit", es: "el asunto",    wortart: "sustantivo", beispiel: "Die Angelegenheit ist erledigt.", beispielUe: "El asunto está resuelto." },
    { id: "v9502", de: "abschließen",     es: "concluir",       wortart: "verbo separable", beispiel: "Wir schließen den Fall ab.", beispielUe: "Cerramos el caso." },
    { id: "v9503", de: "aufheben",        es: "anular",         wortart: "verbo separable", beispiel: "Das Urteil wurde aufgehoben.", beispielUe: "La sentencia fue anulada." },
    { id: "v9504", de: "die Unterschrift", es: "la firma",      wortart: "sustantivo", beispiel: "Es fehlt die Unterschrift.", beispielUe: "Falta la firma." },
    { id: "v9505", de: "in Kraft treten", es: "entrar en vigor", wortart: "expresión", beispiel: "Das Gesetz tritt morgen in Kraft.", beispielUe: "La ley entra en vigor mañana." },
    { id: "v9506", de: "die Regelung",    es: "la regulación",  wortart: "sustantivo", beispiel: "Die Regelung ist neu.", beispielUe: "La regulación es nueva." },
    { id: "v9507", de: "verankern",       es: "consagrar, fijar", wortart: "verbo", beispiel: "Das ist im Gesetz verankert.", beispielUe: "Eso está fijado en la ley." },
    { id: "v9508", de: "rückgängig machen", es: "revertir",     wortart: "expresión", beispiel: "Das lässt sich nicht rückgängig machen.", beispielUe: "Eso no se puede revertir." },
    { id: "v9509", de: "endgültig",       es: "definitivo",     wortart: "adjetivo", beispiel: "Die Entscheidung ist endgültig.", beispielUe: "La decisión es definitiva." },
    { id: "v9510", de: "die Fassung",     es: "la versión",     wortart: "sustantivo", beispiel: "Das ist die neue Fassung.", beispielUe: "Esta es la nueva versión." }
  ],
  saetze: [
    { id: "s9501", de: "Die Tür wird gerade geschlossen.", es: "La puerta se está cerrando ahora." },
    { id: "s9502", de: "Die Tür ist seit gestern geschlossen.", es: "La puerta está cerrada desde ayer." },
    { id: "s9503", de: "Das Gesetz wurde letztes Jahr geändert.", es: "La ley fue modificada el año pasado." },
    { id: "s9504", de: "Der Antrag ist bereits bearbeitet.", es: "La solicitud ya está tramitada." },
    { id: "s9505", de: "Das Fenster ist gestern geöffnet worden.", es: "La ventana fue abierta ayer." }
  ],
  grammatik: {
    id: "g95", titel: "Vorgangspassiv y Zustandspassiv",
    erklaerung: `
      <p>El alemán distingue dos pasivas que el español junta en una. La diferencia es la
      misma que entre <em>se está cerrando</em> y <em>está cerrada</em>: acción o
      resultado.</p>
      <table>
        <tr><th></th><th>Vorgangspassiv (proceso)</th><th>Zustandspassiv (estado)</th></tr>
        <tr><td>Auxiliar</td><td><strong>werden</strong> + Partizip II</td><td><strong>sein</strong> + Partizip II</td></tr>
        <tr><td>Pregunta</td><td>¿qué está pasando?</td><td>¿cómo está la cosa?</td></tr>
        <tr><td>Ejemplo</td><td>Die Tür <strong>wird</strong> geschlossen.</td><td>Die Tür <strong>ist</strong> geschlossen.</td></tr>
        <tr><td>Español</td><td>La puerta se está cerrando.</td><td>La puerta está cerrada.</td></tr>
      </table>
      <div class="merke"><strong>Regla de bolsillo:</strong> el Zustandspassiv es el
      <em>resultado</em> del Vorgangspassiv. Primero <em>wird geöffnet</em>, después
      <em>ist geöffnet</em>. Si puedes añadir <em>seit gestern</em> o <em>immer noch</em>,
      es estado.</div>
      <p><strong>La confusión clásica</strong> es entre el Zustandspassiv y el
      <em>Perfekt</em> del Vorgangspassiv, porque los dos empiezan con <em>ist</em>:</p>
      <table>
        <tr><td><em>Das Fenster <strong>ist geöffnet</strong>.</em></td><td>estado: está abierta ahora</td></tr>
        <tr><td><em>Das Fenster <strong>ist geöffnet worden</strong>.</em></td><td>proceso en Perfekt: alguien la abrió</td></tr>
      </table>
      <p>La palabra <strong>worden</strong> es la señal: si está, es proceso; si no está,
      es estado.</p>
      <p><strong>Dos limitaciones del Zustandspassiv:</strong></p>
      <ol>
        <li>Casi nunca lleva agente. <em>Die Tür ist von mir geschlossen</em> suena mal;
            para nombrar a quien actúa se usa el proceso.</li>
        <li>Solo lo forman verbos que producen un resultado duradero.
            <em>Der Brief ist geschrieben</em> ✓ — <em>Das Lied ist gesungen</em> ✗,
            porque cantar no deja un estado.</li>
      </ol>
      <div class="merke">En los dos primeros tiempos la diferencia se ve muy clara:<br>
      proceso: <em>wird geschlossen</em> / <em>wurde geschlossen</em><br>
      estado: <em>ist geschlossen</em> / <em>war geschlossen</em></div>`,
    uebungen: [
      { id: "g9501", satz: "Die Tür ___ gerade geschlossen. (proceso)", loesung: "wird", tipps: ["wird", "ist", "war"], hinweis: "está ocurriendo", ue: "La puerta se está cerrando." },
      { id: "g9502", satz: "Die Tür ___ seit gestern geschlossen. (estado)", loesung: "ist", tipps: ["ist", "wird", "wurde"], hinweis: "resultado duradero", ue: "La puerta está cerrada desde ayer." },
      { id: "g9503", satz: "Das Gesetz ___ letztes Jahr geändert. (proceso, pasado)", loesung: "wurde", tipps: ["wurde", "war", "ist"], hinweis: "Präteritum del proceso", ue: "La ley fue modificada el año pasado." },
      { id: "g9504", satz: "Der Antrag ist bereits ___. (bearbeiten, estado)", loesung: "bearbeitet", tipps: ["bearbeitet", "bearbeitet worden", "bearbeiten"], hinweis: "sin worden", ue: "La solicitud ya está tramitada." },
      { id: "g9505", satz: "Das Fenster ist gestern geöffnet ___. (proceso, Perfekt)", loesung: "worden", tipps: ["worden", "geworden", "gewesen"], hinweis: "la palabra que marca el proceso", ue: "La ventana fue abierta ayer." }
    ]
  }
});

LEKTION('de', {
  tag: 96, niveau: "B2", thema: "Sociedad",
  vokabeln: [
    { id: "v9601", de: "die Gesellschaft", es: "la sociedad",   wortart: "sustantivo", beispiel: "Die Gesellschaft verändert sich.", beispielUe: "La sociedad cambia." },
    { id: "v9602", de: "der Wandel",      es: "el cambio profundo", wortart: "sustantivo", beispiel: "Der Wandel ist spürbar.", beispielUe: "El cambio se nota." },
    { id: "v9603", de: "die Ungleichheit", es: "la desigualdad", wortart: "sustantivo", beispiel: "Die Ungleichheit wächst.", beispielUe: "La desigualdad crece." },
    { id: "v9604", de: "die Teilhabe",    es: "la participación social", wortart: "sustantivo", beispiel: "Teilhabe ist ein Recht.", beispielUe: "La participación es un derecho." },
    { id: "v9605", de: "der Zusammenhalt", es: "la cohesión",   wortart: "sustantivo", beispiel: "Der Zusammenhalt ist stark.", beispielUe: "La cohesión es fuerte." },
    { id: "v9606", de: "benachteiligen",  es: "perjudicar",     wortart: "verbo", beispiel: "Niemand darf benachteiligt werden.", beispielUe: "Nadie debe ser perjudicado." },
    { id: "v9607", de: "die Toleranz",    es: "la tolerancia",  wortart: "sustantivo", beispiel: "Toleranz hat Grenzen.", beispielUe: "La tolerancia tiene límites." },
    { id: "v9608", de: "der Wohlstand",   es: "el bienestar material", wortart: "sustantivo", beispiel: "Der Wohlstand ist ungleich verteilt.", beispielUe: "El bienestar está mal repartido." },
    { id: "v9609", de: "sich engagieren", es: "comprometerse",  wortart: "verbo reflexivo", beispiel: "Viele engagieren sich ehrenamtlich.", beispielUe: "Muchos se comprometen como voluntarios." },
    { id: "v9610", de: "die Vielfalt",    es: "la diversidad",  wortart: "sustantivo", beispiel: "Vielfalt ist ein Gewinn.", beispielUe: "La diversidad es una ganancia." }
  ],
  saetze: [
    { id: "s9601", de: "Auch wenn es schwierig ist, versuchen wir es.", es: "Aunque sea difícil, lo intentamos." },
    { id: "s9602", de: "Selbst wenn wir gewinnen, ändert das nichts.", es: "Incluso si ganamos, eso no cambia nada." },
    { id: "s9603", de: "So schwierig es auch ist, wir machen weiter.", es: "Por difícil que sea, seguimos." },
    { id: "s9604", de: "Ungeachtet der Kosten wurde das Projekt gestartet.", es: "Sin tener en cuenta los costes se inició el proyecto." },
    { id: "s9605", de: "Er kam zur Sitzung, obwohl er krank war.", es: "Vino a la sesión aunque estaba enfermo." }
  ],
  grammatik: {
    id: "g96", titel: "Construcciones concesivas",
    erklaerung: `
      <p>Todas dicen <em>aunque</em>, pero cada una con un matiz distinto y con una
      sintaxis distinta. En B2 se espera que las manejes todas, no solo <em>obwohl</em>.</p>
      <table>
        <tr><th>Construcción</th><th>Matiz</th><th>Sintaxis</th></tr>
        <tr><td><strong>obwohl</strong> (obgleich, obschon)</td><td>hecho real</td><td>verbo al final</td></tr>
        <tr><td><strong>auch wenn</strong></td><td>real o hipotético, enfático</td><td>verbo al final</td></tr>
        <tr><td><strong>selbst wenn</strong></td><td>caso extremo: incluso si</td><td>verbo al final</td></tr>
        <tr><td><strong>wenn … auch</strong></td><td>culto, escrito</td><td>verbo al final</td></tr>
        <tr><td><strong>trotzdem, dennoch, gleichwohl</strong></td><td>consecuencia inesperada</td><td>posición 1, verbo detrás</td></tr>
        <tr><td><strong>trotz, ungeachtet</strong></td><td>igual, pero con sustantivo</td><td>preposición + genitivo</td></tr>
        <tr><td><strong>so … auch</strong></td><td>por … que sea</td><td>construcción propia</td></tr>
      </table>
      <div class="merke"><strong>obwohl o auch wenn.</strong><br>
      <em>Er kam, <strong>obwohl</strong> er krank war.</em> — estaba enfermo de verdad.<br>
      <em>Er käme, <strong>auch wenn</strong> er krank wäre.</em> — hipótesis.<br>
      <em><strong>Selbst wenn</strong> wir gewinnen, ändert das nichts.</em> — el caso más
      favorable, y aun así.</div>
      <p><strong>La construcción con <em>so … auch</em></strong> es la más elegante y la
      que menos se enseña. El adjetivo va pegado a <em>so</em>, y la frase funciona como
      subordinada:</p>
      <table>
        <tr><td><em><strong>So schwierig</strong> es <strong>auch</strong> ist, wir machen weiter.</em></td><td>Por difícil que sea, seguimos.</td></tr>
        <tr><td><em><strong>So sehr</strong> ich mich <strong>auch</strong> bemühe, es klappt nicht.</em></td><td>Por mucho que me esfuerce, no sale.</td></tr>
      </table>
      <p><strong>Y los indefinidos concesivos</strong> con <em>auch immer</em>, que traducen
      el <em>-quiera que</em> español:</p>
      <ul>
        <li><em><strong>Was</strong> du <strong>auch immer</strong> sagst,</em> — digas lo que digas,</li>
        <li><em><strong>Wie</strong> es <strong>auch immer</strong> ausgeht,</em> — acabe como acabe,</li>
        <li><em><strong>Wer</strong> es <strong>auch immer</strong> war,</em> — quienquiera que fuera,</li>
      </ul>
      <div class="merke"><strong>Un aviso de puntuación:</strong> <em>trotzdem</em> no es
      conjunción subordinante. <em>Trotzdem er krank war</em> es un uso antiguo que hoy
      cuenta como error; di <em>obwohl er krank war</em> o <em>Er war krank. Trotzdem
      kam er.</em></div>`,
    uebungen: [
      { id: "g9601", satz: "___ wenn es schwierig ist, versuchen wir es. (aunque)", loesung: "Auch", tipps: ["Auch", "Selbst", "So"], hinweis: "concesivo enfático", ue: "Aunque sea difícil, lo intentamos." },
      { id: "g9602", satz: "___ wenn wir gewinnen, ändert das nichts. (incluso si)", loesung: "Selbst", tipps: ["Selbst", "Auch", "Sogar"], hinweis: "el caso extremo", ue: "Incluso si ganamos, no cambia nada." },
      { id: "g9603", satz: "So schwierig es ___ ist, wir machen weiter.", loesung: "auch", tipps: ["auch", "immer", "sehr"], hinweis: "la segunda mitad de so … auch", ue: "Por difícil que sea, seguimos." },
      { id: "g9604", satz: "___ der Kosten wurde das Projekt gestartet.", loesung: "Ungeachtet", tipps: ["Ungeachtet", "Obwohl", "Trotzdem"], hinweis: "preposición con genitivo", ue: "Sin importar los costes se inició el proyecto." },
      { id: "g9605", satz: "Er kam, ___ er krank war.", loesung: "obwohl", tipps: ["obwohl", "trotzdem", "trotz"], hinweis: "hecho real, verbo al final", ue: "Vino aunque estaba enfermo." }
    ]
  }
});

LEKTION('de', {
  tag: 97, niveau: "B2", thema: "Negociar y tramitar",
  vokabeln: [
    { id: "v9701", de: "in Anspruch nehmen", es: "hacer uso de", wortart: "expresión", beispiel: "Wir nehmen die Hilfe in Anspruch.", beispielUe: "Hacemos uso de la ayuda." },
    { id: "v9702", de: "in Betracht ziehen", es: "considerar",  wortart: "expresión", beispiel: "Das ziehen wir in Betracht.", beispielUe: "Eso lo consideramos." },
    { id: "v9703", de: "außer Acht lassen", es: "pasar por alto", wortart: "expresión", beispiel: "Das darf man nicht außer Acht lassen.", beispielUe: "Eso no se puede pasar por alto." },
    { id: "v9704", de: "Bezug nehmen auf", es: "hacer referencia a", wortart: "expresión", beispiel: "Ich nehme Bezug auf Ihr Schreiben.", beispielUe: "Hago referencia a su escrito." },
    { id: "v9705", de: "in Kauf nehmen",  es: "aceptar como mal menor", wortart: "expresión", beispiel: "Das nehmen wir in Kauf.", beispielUe: "Eso lo aceptamos." },
    { id: "v9706", de: "zum Ausdruck bringen", es: "expresar",  wortart: "expresión", beispiel: "Er brachte seine Sorge zum Ausdruck.", beispielUe: "Expresó su preocupación." },
    { id: "v9707", de: "unter Beweis stellen", es: "demostrar", wortart: "expresión", beispiel: "Sie stellte ihr Können unter Beweis.", beispielUe: "Demostró su capacidad." },
    { id: "v9708", de: "zur Anwendung kommen", es: "aplicarse", wortart: "expresión", beispiel: "Die Regel kommt hier zur Anwendung.", beispielUe: "La regla se aplica aquí." },
    { id: "v9709", de: "zur Kenntnis nehmen", es: "tomar nota de", wortart: "expresión", beispiel: "Bitte nehmen Sie das zur Kenntnis.", beispielUe: "Por favor tome nota." },
    { id: "v9710", de: "Anklang finden",  es: "tener buena acogida", wortart: "expresión", beispiel: "Der Vorschlag fand Anklang.", beispielUe: "La propuesta tuvo buena acogida." }
  ],
  saetze: [
    { id: "s9701", de: "Wir nehmen Ihr Angebot gern in Anspruch.", es: "Con gusto hacemos uso de su oferta." },
    { id: "s9702", de: "Diese Möglichkeit sollten wir in Betracht ziehen.", es: "Deberíamos considerar esta posibilidad." },
    { id: "s9703", de: "Diesen Punkt dürfen wir nicht außer Acht lassen.", es: "Este punto no lo podemos pasar por alto." },
    { id: "s9704", de: "Ich möchte meine Bedenken zum Ausdruck bringen.", es: "Quisiera expresar mis reservas." },
    { id: "s9705", de: "Bitte nehmen Sie die Änderung zur Kenntnis.", es: "Por favor tome nota del cambio." }
  ],
  grammatik: {
    id: "g97", titel: "Funktionsverbgefüge — el registro formal",
    erklaerung: `
      <p>Ya viste las combinaciones fijas sencillas (día 87). Los
      <strong>Funktionsverbgefüge</strong> son su versión formal: un sustantivo abstracto
      más un verbo casi vacío que sustituye a un verbo simple. Son la marca del alemán de
      oficina, de contratos y de discursos.</p>
      <table>
        <tr><th>Verbo simple</th><th>Funktionsverbgefüge</th></tr>
        <tr><td>benutzen</td><td>in Anspruch nehmen</td></tr>
        <tr><td>erwägen</td><td>in Betracht / in Erwägung ziehen</td></tr>
        <tr><td>ignorieren</td><td>außer Acht lassen</td></tr>
        <tr><td>sich beziehen auf</td><td>Bezug nehmen auf</td></tr>
        <tr><td>akzeptieren (a regañadientes)</td><td>in Kauf nehmen</td></tr>
        <tr><td>ausdrücken</td><td>zum Ausdruck bringen</td></tr>
        <tr><td>beweisen</td><td>unter Beweis stellen</td></tr>
        <tr><td>anwenden</td><td>zur Anwendung bringen</td></tr>
        <tr><td>entscheiden</td><td>eine Entscheidung treffen</td></tr>
        <tr><td>beenden</td><td>zum Abschluss bringen</td></tr>
      </table>
      <div class="merke"><strong>La pareja bringen / kommen</strong> es el detalle más útil
      de todo el tema, porque convierte activa en pasiva sin usar <em>werden</em>:<br>
      <em>zur Anwendung <strong>bringen</strong></em> = anwenden (activo, alguien lo aplica)<br>
      <em>zur Anwendung <strong>kommen</strong></em> = angewendet werden (pasivo, se aplica)<br>
      Lo mismo con <em>zum Abschluss bringen / kommen</em>, <em>zum Einsatz bringen /
      kommen</em>.</div>
      <p><strong>Tres rasgos formales</strong> que hay que respetar al pie de la letra:</p>
      <ol>
        <li>La preposición y el artículo están <strong>fundidos y congelados</strong>:
            <em>zur</em>, <em>zum</em>, <em>in</em>, <em>außer</em>. Nunca
            <em>zu der Anwendung</em>.</li>
        <li>El sustantivo <strong>no lleva adjetivo</strong>. Para matizar se usa un
            adverbio fuera del bloque: <em>Wir ziehen das <strong>ernsthaft</strong> in
            Betracht.</em></li>
        <li>El bloque se separa en la frase como cualquier otro complemento: el verbo va en
            posición 2 y el resto se queda al final —
            <em>Wir <strong>nehmen</strong> Ihr Angebot gern <strong>in Anspruch</strong>.</em></li>
      </ol>
      <div class="merke"><strong>Consejo de uso:</strong> reconócelos siempre, úsalos con
      medida. Un correo con tres Funktionsverbgefüge suena competente; con diez, suena a
      burocracia y se lee mal. El verbo simple casi nunca es incorrecto — solo menos
      formal.</div>`,
    uebungen: [
      { id: "g9701", satz: "Wir nehmen Ihr Angebot gern in ___.", loesung: "Anspruch", tipps: ["Anspruch", "Betracht", "Kauf"], hinweis: "hacer uso de algo", ue: "Hacemos uso de su oferta." },
      { id: "g9702", satz: "Das sollten wir in ___ ziehen.", loesung: "Betracht", tipps: ["Betracht", "Anspruch", "Kenntnis"], hinweis: "considerar", ue: "Eso deberíamos considerarlo." },
      { id: "g9703", satz: "Das dürfen wir nicht außer ___ lassen.", loesung: "Acht", tipps: ["Acht", "Kraft", "Sicht"], hinweis: "pasar por alto", ue: "Eso no lo podemos pasar por alto." },
      { id: "g9704", satz: "Ich möchte meine Bedenken zum ___ bringen.", loesung: "Ausdruck", tipps: ["Ausdruck", "Abschluss", "Einsatz"], hinweis: "expresar", ue: "Quiero expresar mis reservas." },
      { id: "g9705", satz: "Die Regel kommt hier zur ___. (se aplica)", loesung: "Anwendung", tipps: ["Anwendung", "Kenntnis", "Verfügung"], hinweis: "kommen = versión pasiva", ue: "La regla se aplica aquí." }
    ]
  }
});

LEKTION('de', {
  tag: 98, niveau: "B2", thema: "Debate",
  vokabeln: [
    { id: "v9801", de: "die Auseinandersetzung", es: "la confrontación", wortart: "sustantivo", beispiel: "Die Auseinandersetzung war hart.", beispielUe: "La confrontación fue dura." },
    { id: "v9802", de: "entkräften",      es: "refutar",        wortart: "verbo", beispiel: "Er entkräftete das Argument.", beispielUe: "Refutó el argumento." },
    { id: "v9803", de: "plausibel",       es: "plausible",      wortart: "adjetivo", beispiel: "Das klingt plausibel.", beispielUe: "Eso suena plausible." },
    { id: "v9804", de: "der Einwand",     es: "la objeción",    wortart: "sustantivo", beispiel: "Ihr Einwand ist berechtigt.", beispielUe: "Su objeción es justificada." },
    { id: "v9805", de: "stichhaltig",     es: "sólido",         wortart: "adjetivo", beispiel: "Das Argument ist stichhaltig.", beispielUe: "El argumento es sólido." },
    { id: "v9806", de: "relativieren",    es: "relativizar",    wortart: "verbo", beispiel: "Er relativierte seine Aussage.", beispielUe: "Relativizó su declaración." },
    { id: "v9807", de: "untermauern",     es: "respaldar",      wortart: "verbo", beispiel: "Zahlen untermauern die These.", beispielUe: "Las cifras respaldan la tesis." },
    { id: "v9808", de: "die Gegenposition", es: "la postura contraria", wortart: "sustantivo", beispiel: "Die Gegenposition ist bekannt.", beispielUe: "La postura contraria es conocida." },
    { id: "v9809", de: "nachvollziehbar", es: "comprensible",   wortart: "adjetivo", beispiel: "Das ist gut nachvollziehbar.", beispielUe: "Eso es bien comprensible." },
    { id: "v9810", de: "einwenden",       es: "objetar",        wortart: "verbo separable", beispiel: "Dagegen ist nichts einzuwenden.", beispielUe: "Contra eso no hay nada que objetar." }
  ],
  saetze: [
    { id: "s9801", de: "Wir sollten warten, zumal die Lage unklar ist.", es: "Deberíamos esperar, sobre todo porque la situación no está clara." },
    { id: "s9802", de: "Sofern es möglich ist, helfen wir gern.", es: "Siempre que sea posible, ayudamos con gusto." },
    { id: "s9803", de: "Man lernt eine Sprache, indem man sie benutzt.", es: "Una lengua se aprende usándola." },
    { id: "s9804", de: "Es ist zu teuer, als dass wir es kaufen könnten.", es: "Es demasiado caro como para que lo compremos." },
    { id: "s9805", de: "Er hat zwar recht, doch ändert das nichts.", es: "Tiene razón, pero eso no cambia nada." }
  ],
  grammatik: {
    id: "g98", titel: "Conectores de argumentación",
    erklaerung: `
      <p>Estos conectores no añaden información: <strong>ordenan la discusión</strong>.
      Son los que se esperan en un texto argumentativo de B2 y los que hacen que una
      opinión suene razonada en lugar de improvisada.</p>
      <table>
        <tr><th>Conector</th><th>Significado</th><th>Sintaxis</th></tr>
        <tr><td><strong>zumal</strong></td><td>sobre todo porque (refuerza el motivo)</td><td>verbo al final</td></tr>
        <tr><td><strong>sofern</strong> / <strong>falls</strong></td><td>siempre que, en caso de que</td><td>verbo al final</td></tr>
        <tr><td><strong>indem</strong></td><td>mediante, -ando (gerundio español)</td><td>verbo al final</td></tr>
        <tr><td><strong>insofern / insoweit</strong></td><td>en ese sentido</td><td>posición 1</td></tr>
        <tr><td><strong>zu … als dass</strong></td><td>demasiado … como para que</td><td>verbo al final, Konjunktiv II</td></tr>
        <tr><td><strong>geschweige denn</strong></td><td>ni mucho menos</td><td>tras una negación</td></tr>
        <tr><td><strong>vielmehr</strong></td><td>más bien</td><td>posición 1</td></tr>
        <tr><td><strong>hingegen / indes</strong></td><td>en cambio</td><td>posición 1 o intercalado</td></tr>
        <tr><td><strong>doch</strong> (acentuado)</td><td>pero, sin embargo</td><td>posición 1, verbo detrás</td></tr>
      </table>
      <div class="merke"><strong>indem</strong> es el que más falta hace a un
      hispanohablante, porque el alemán no tiene gerundio. Todo <em>-ando</em> de modo se
      dice con <em>indem</em>:<br>
      <em>Man lernt eine Sprache, <strong>indem</strong> man sie benutzt.</em> — usándola.<br>
      No lo confundas con <em>in dem</em> (relativo, dos palabras): <em>das Haus, in dem
      ich wohne</em>.</div>
      <p><strong>zumal</strong> no es un simple <em>weil</em>. Añade un motivo
      <em>adicional</em> que refuerza lo ya dicho: <em>Wir sollten warten, zumal die Lage
      unklar ist</em> — ya había razones para esperar, y encima está esta.</p>
      <p><strong>La construcción <em>zu … als dass</em></strong> expresa que algo es tan
      excesivo que impide la consecuencia, y va siempre en Konjunktiv II:</p>
      <p style="margin-left:1rem"><em>Es ist <strong>zu</strong> teuer, <strong>als
      dass</strong> wir es kaufen <strong>könnten</strong>.</em></p>
      <p>Con el mismo sujeto se prefiere la versión con infinitivo:
      <em>Es ist zu teuer, <strong>um</strong> es <strong>zu</strong> kaufen.</em></p>
      <div class="merke"><strong>doch</strong> tiene dos vidas ya conocidas: partícula átona
      (<em>Komm doch mal!</em>) y adverbio acentuado en posición 1
      (<em>…, <strong>doch ändert</strong> das nichts</em>), donde el verbo va detrás.
      Y una tercera: respuesta afirmativa a una pregunta negativa — <em>Hast du keine
      Zeit? — <strong>Doch!</strong></em></div>`,
    uebungen: [
      { id: "g9801", satz: "Wir sollten warten, ___ die Lage unklar ist.", loesung: "zumal", tipps: ["zumal", "obwohl", "sofern"], hinweis: "motivo adicional que refuerza", ue: "Deberíamos esperar, sobre todo porque no está claro." },
      { id: "g9802", satz: "___ es möglich ist, helfen wir gern.", loesung: "Sofern", tipps: ["Sofern", "Zumal", "Indem"], hinweis: "siempre que", ue: "Siempre que sea posible, ayudamos." },
      { id: "g9803", satz: "Man lernt eine Sprache, ___ man sie benutzt.", loesung: "indem", tipps: ["indem", "in dem", "damit"], hinweis: "el gerundio de modo", ue: "Una lengua se aprende usándola." },
      { id: "g9804", satz: "Es ist zu teuer, ___ dass wir es kaufen könnten.", loesung: "als", tipps: ["als", "so", "um"], hinweis: "demasiado … como para", ue: "Es demasiado caro para comprarlo." },
      { id: "g9805", satz: "Er hat zwar recht, ___ ändert das nichts.", loesung: "doch", tipps: ["doch", "aber", "sondern"], hinweis: "posición 1, verbo detrás", ue: "Tiene razón, pero eso no cambia nada." }
    ]
  }
});

LEKTION('de', {
  tag: 99, niveau: "B2", thema: "Derecho y formalidades",
  vokabeln: [
    { id: "v9901", de: "die Klausel",     es: "la cláusula",    wortart: "sustantivo", beispiel: "Die Klausel ist unwirksam.", beispielUe: "La cláusula es nula." },
    { id: "v9902", de: "der Anspruch",    es: "el derecho a algo", wortart: "sustantivo", beispiel: "Sie haben Anspruch darauf.", beispielUe: "Usted tiene derecho a ello." },
    { id: "v9903", de: "haften",          es: "responder legalmente", wortart: "verbo", beispiel: "Wir haften nicht für Schäden.", beispielUe: "No respondemos por daños." },
    { id: "v9904", de: "die Vollmacht",   es: "el poder notarial", wortart: "sustantivo", beispiel: "Er hat eine Vollmacht.", beispielUe: "Él tiene un poder." },
    { id: "v9905", de: "verpflichten",    es: "obligar",        wortart: "verbo", beispiel: "Der Vertrag verpflichtet beide Seiten.", beispielUe: "El contrato obliga a ambas partes." },
    { id: "v9906", de: "die Haftung",     es: "la responsabilidad legal", wortart: "sustantivo", beispiel: "Die Haftung ist begrenzt.", beispielUe: "La responsabilidad es limitada." },
    { id: "v9907", de: "der Verstoß",     es: "la infracción",  wortart: "sustantivo", beispiel: "Das ist ein Verstoß gegen die Regeln.", beispielUe: "Eso es una infracción de las reglas." },
    { id: "v9908", de: "geltend machen",  es: "hacer valer",    wortart: "expresión", beispiel: "Sie können Ansprüche geltend machen.", beispielUe: "Puede hacer valer sus derechos." },
    { id: "v9909", de: "der Vorbehalt",   es: "la reserva",     wortart: "sustantivo", beispiel: "Unter Vorbehalt der Prüfung.", beispielUe: "A reserva de comprobación." },
    { id: "v9910", de: "unverzüglich",    es: "sin demora",     wortart: "adverbio", beispiel: "Bitte melden Sie sich unverzüglich.", beispielUe: "Por favor comuníquese sin demora." }
  ],
  saetze: [
    { id: "s9901", de: "Hinsichtlich der Kosten gibt es noch Fragen.", es: "Respecto a los costes quedan preguntas." },
    { id: "s9902", de: "Bezüglich Ihrer Anfrage teile ich Ihnen Folgendes mit.", es: "En relación con su consulta le comunico lo siguiente." },
    { id: "s9903", de: "Anhand der Unterlagen prüfen wir den Antrag.", es: "A partir de los documentos revisamos la solicitud." },
    { id: "s9904", de: "Mittels eines Formulars können Sie widersprechen.", es: "Mediante un formulario puede presentar objeción." },
    { id: "s9905", de: "Infolge des Verstoßes entfällt der Anspruch.", es: "A consecuencia de la infracción decae el derecho." }
  ],
  grammatik: {
    id: "g99", titel: "Preposiciones de genitivo del registro formal",
    erklaerung: `
      <p>Estas preposiciones no se oyen en la calle, pero están en todas las cartas de
      autoridades, contratos y correos de trabajo. Todas rigen <strong>genitivo</strong>.</p>
      <table>
        <tr><th>Preposición</th><th>Español</th><th>Equivalente hablado</th></tr>
        <tr><td><strong>hinsichtlich</strong></td><td>respecto a</td><td>was … angeht</td></tr>
        <tr><td><strong>bezüglich</strong></td><td>en relación con</td><td>wegen</td></tr>
        <tr><td><strong>anhand</strong></td><td>a partir de</td><td>mit</td></tr>
        <tr><td><strong>mittels</strong></td><td>mediante</td><td>mit, durch</td></tr>
        <tr><td><strong>infolge</strong></td><td>a consecuencia de</td><td>wegen</td></tr>
        <tr><td><strong>zwecks</strong></td><td>con el fin de</td><td>um zu</td></tr>
        <tr><td><strong>seitens</strong></td><td>por parte de</td><td>von</td></tr>
        <tr><td><strong>angesichts</strong></td><td>ante, dada</td><td>wegen</td></tr>
        <tr><td><strong>anlässlich</strong></td><td>con motivo de</td><td>zu</td></tr>
        <tr><td><strong>zugunsten</strong></td><td>a favor de</td><td>für</td></tr>
        <tr><td><strong>binnen</strong></td><td>en el plazo de</td><td>in</td></tr>
      </table>
      <div class="merke"><strong>La regla del genitivo sigue viva aquí.</strong>
      Masculino y neutro: <em>des Verstoß<strong>es</strong></em>, <em>eines
      Formular<strong>s</strong></em>. Femenino y plural: <em>der Prüfung</em>,
      <em>der Unterlagen</em>. Con posesivo: <em>Ihr<strong>er</strong> Anfrage</em>.</div>
      <p><strong>Dos detalles que se preguntan en el examen:</strong></p>
      <ol>
        <li><strong>Sin artículo, el genitivo no se marca</strong>, así que estas
            preposiciones cambian a dativo o se quedan sin marca:
            <em>binnen <strong>einer</strong> Woche</em> (genitivo o dativo, ambos
            aceptados), <em>mittels Computer</em> (sin marca, plural
            <em>mittels Computern</em> en dativo).</li>
        <li><strong>dank</strong> y <strong>trotz</strong> admiten hoy los dos casos.
            En texto cuidado, genitivo: <em>dank <strong>des</strong> Hinweises</em>.</li>
      </ol>
      <p><strong>Cómo se usan de verdad</strong> — las fórmulas de correo que puedes copiar
      tal cual:</p>
      <ul>
        <li><em><strong>Bezüglich</strong> Ihrer Anfrage teile ich Ihnen mit, dass …</em></li>
        <li><em><strong>Hinsichtlich</strong> der Kosten bitte ich um Rückmeldung.</em></li>
        <li><em><strong>Anhand</strong> der beigefügten Unterlagen können Sie …</em></li>
        <li><em>Ich bitte um Antwort <strong>binnen</strong> zwei Wochen.</em></li>
      </ul>
      <div class="merke">No las apiles. Una por párrafo transmite competencia; tres en la
      misma frase convierten el texto en una parodia de lenguaje administrativo — un
      efecto que los propios alemanes llaman <em>Behördendeutsch</em> y que no es un
      elogio.</div>`,
    uebungen: [
      { id: "g9901", satz: "___ der Kosten gibt es noch Fragen. (respecto a)", loesung: "Hinsichtlich", tipps: ["Hinsichtlich", "Anhand", "Mittels"], hinweis: "sobre el tema de", ue: "Respecto a los costes quedan preguntas." },
      { id: "g9902", satz: "___ Ihrer Anfrage teile ich Ihnen mit … (en relación con)", loesung: "Bezüglich", tipps: ["Bezüglich", "Infolge", "Zwecks"], hinweis: "fórmula de correo", ue: "En relación con su consulta le comunico…" },
      { id: "g9903", satz: "___ der Unterlagen prüfen wir den Antrag. (a partir de)", loesung: "Anhand", tipps: ["Anhand", "Mittels", "Seitens"], hinweis: "con ayuda de un documento", ue: "A partir de los documentos revisamos la solicitud." },
      { id: "g9904", satz: "___ eines Formulars können Sie widersprechen. (mediante)", loesung: "Mittels", tipps: ["Mittels", "Anhand", "Binnen"], hinweis: "instrumento", ue: "Mediante un formulario puede objetar." },
      { id: "g9905", satz: "___ des Verstoßes entfällt der Anspruch. (a consecuencia de)", loesung: "Infolge", tipps: ["Infolge", "Zwecks", "Zugunsten"], hinweis: "causa con resultado", ue: "A consecuencia de la infracción decae el derecho." }
    ]
  }
});

LEKTION('de', {
  tag: 100, niveau: "B2", thema: "Condiciones",
  vokabeln: [
    { id: "v10001", de: "die Annahme",    es: "la suposición",  wortart: "sustantivo", beispiel: "Das ist nur eine Annahme.", beispielUe: "Eso es solo una suposición." },
    { id: "v10002", de: "unterstellen",   es: "dar por supuesto", wortart: "verbo", beispiel: "Ich unterstelle ihm nichts.", beispielUe: "No le supongo nada." },
    { id: "v10003", de: "vorausgesetzt",  es: "siempre que",    wortart: "conjunción", beispiel: "Vorausgesetzt, du hast Zeit.", beispielUe: "Siempre que tengas tiempo." },
    { id: "v10004", de: "andernfalls",    es: "de lo contrario", wortart: "adverbio", beispiel: "Andernfalls sagen wir ab.", beispielUe: "De lo contrario cancelamos." },
    { id: "v10005", de: "ansonsten",      es: "por lo demás",   wortart: "adverbio", beispiel: "Ansonsten ist alles in Ordnung.", beispielUe: "Por lo demás todo está bien." },
    { id: "v10006", de: "hypothetisch",   es: "hipotético",     wortart: "adjetivo", beispiel: "Das ist rein hypothetisch.", beispielUe: "Eso es puramente hipotético." },
    { id: "v10007", de: "die Konsequenz", es: "la consecuencia", wortart: "sustantivo", beispiel: "Das hat Konsequenzen.", beispielUe: "Eso tiene consecuencias." },
    { id: "v10008", de: "abhängen von",   es: "depender de",    wortart: "verbo con preposición", beispiel: "Das hängt vom Wetter ab.", beispielUe: "Eso depende del tiempo." },
    { id: "v10009", de: "gegebenenfalls", es: "llegado el caso", wortart: "adverbio", beispiel: "Gegebenenfalls rufen wir an.", beispielUe: "Llegado el caso llamamos." },
    { id: "v10010", de: "notfalls",       es: "si hace falta",  wortart: "adverbio", beispiel: "Notfalls nehmen wir ein Taxi.", beispielUe: "Si hace falta tomamos un taxi." }
  ],
  saetze: [
    { id: "s10001", de: "Hätte ich mehr Zeit, würde ich mitkommen.", es: "Si tuviera más tiempo, iría contigo." },
    { id: "s10002", de: "Wäre er schneller gewesen, hätte er gewonnen.", es: "Si hubiera sido más rápido, habría ganado." },
    { id: "s10003", de: "Sollten Sie Fragen haben, rufen Sie uns an.", es: "Si tuviera preguntas, llámenos." },
    { id: "s10004", de: "Vorausgesetzt, das Wetter bleibt gut, fahren wir.", es: "Siempre que el tiempo siga bueno, vamos." },
    { id: "s10005", de: "Andernfalls verschieben wir den Termin.", es: "De lo contrario aplazamos la cita." }
  ],
  grammatik: {
    id: "g100", titel: "Condicionales sin wenn",
    erklaerung: `
      <p>En alemán escrito la condición muy a menudo aparece <strong>sin wenn</strong>. La
      subordinada se reconoce entonces por una sola cosa: <strong>empieza directamente con
      el verbo</strong>.</p>
      <table>
        <tr><th>Con wenn</th><th>Sin wenn</th></tr>
        <tr><td><strong>Wenn</strong> ich mehr Zeit <strong>hätte</strong>, würde ich mitkommen.</td><td><strong>Hätte</strong> ich mehr Zeit, würde ich mitkommen.</td></tr>
        <tr><td><strong>Wenn</strong> er schneller <strong>gewesen wäre</strong>, hätte er gewonnen.</td><td><strong>Wäre</strong> er schneller gewesen, hätte er gewonnen.</td></tr>
        <tr><td><strong>Wenn</strong> Sie Fragen <strong>haben</strong>, rufen Sie an.</td><td><strong>Haben</strong> Sie Fragen, rufen Sie an.</td></tr>
      </table>
      <div class="merke">Es la misma inversión que en una pregunta, pero no es una pregunta:
      lo delata la coma y la segunda mitad. La principal puede empezar con
      <strong>so</strong> o <strong>dann</strong>, que marcan claramente dónde termina la
      condición: <em>Hätte ich Zeit, <strong>so</strong> käme ich.</em></div>
      <p><strong>La variante formal con sollten</strong> es la más frecuente en cartas y
      correos, y suena más cortés que <em>wenn</em>:</p>
      <table>
        <tr><td><em><strong>Sollten</strong> Sie Fragen haben, …</em></td><td>Si tuviera preguntas, …</td></tr>
        <tr><td><em><strong>Sollte</strong> das nicht möglich sein, …</em></td><td>Si eso no fuera posible, …</td></tr>
        <tr><td><em><strong>Sollte</strong> sich etwas ändern, melde ich mich.</em></td><td>Si algo cambiara, aviso.</td></tr>
      </table>
      <p><strong>Las demás formas de introducir una condición:</strong></p>
      <table>
        <tr><td><strong>falls</strong></td><td>en caso de que (verbo al final)</td></tr>
        <tr><td><strong>sofern</strong></td><td>siempre que (verbo al final)</td></tr>
        <tr><td><strong>vorausgesetzt(, dass)</strong></td><td>siempre que, dado que se cumpla</td></tr>
        <tr><td><strong>angenommen(, dass)</strong></td><td>suponiendo que</td></tr>
        <tr><td><strong>gesetzt den Fall(, dass)</strong></td><td>puesto el caso de que</td></tr>
        <tr><td><strong>es sei denn(, dass)</strong></td><td>a menos que</td></tr>
        <tr><td><strong>im Falle</strong> + genitivo</td><td>en caso de (con sustantivo)</td></tr>
      </table>
      <p>Con <em>vorausgesetzt</em>, <em>angenommen</em> y <em>gesetzt den Fall</em> se
      puede omitir el <em>dass</em>, y entonces la frase sigue el orden normal:
      <em>Vorausgesetzt, <strong>das Wetter bleibt</strong> gut, …</em></p>
      <div class="merke"><strong>La condición negativa</strong> tiene sus propias palabras y
      todas van en posición 1: <em>sonst</em>, <em>andernfalls</em>, <em>ansonsten</em>.<br>
      <em>Wir müssen los, <strong>sonst verpassen wir</strong> den Zug.</em></div>`,
    uebungen: [
      { id: "g10001", satz: "___ ich mehr Zeit, würde ich mitkommen. (haben, sin wenn)", loesung: "Hätte", tipps: ["Hätte", "Habe", "Wenn"], hinweis: "el verbo abre la frase", ue: "Si tuviera más tiempo, iría." },
      { id: "g10002", satz: "___ er schneller gewesen, hätte er gewonnen.", loesung: "Wäre", tipps: ["Wäre", "Hätte", "War"], hinweis: "sein en Konjunktiv II", ue: "Si hubiera sido más rápido, habría ganado." },
      { id: "g10003", satz: "___ Sie Fragen haben, rufen Sie uns an. (formal)", loesung: "Sollten", tipps: ["Sollten", "Wenn", "Haben"], hinweis: "la variante cortés", ue: "Si tuviera preguntas, llámenos." },
      { id: "g10004", satz: "___, das Wetter bleibt gut, fahren wir. (siempre que)", loesung: "Vorausgesetzt", tipps: ["Vorausgesetzt", "Angenommen", "Andernfalls"], hinweis: "condición que debe cumplirse", ue: "Siempre que el tiempo siga bueno, vamos." },
      { id: "g10005", satz: "___ verschieben wir den Termin. (de lo contrario)", loesung: "Andernfalls", tipps: ["Andernfalls", "Vorausgesetzt", "Sofern"], hinweis: "condición negativa", ue: "De lo contrario aplazamos la cita." }
    ]
  }
});
