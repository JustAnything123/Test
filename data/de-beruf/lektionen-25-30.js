/* Ruta temática «Alemán en el trabajo» · Día 25–30 · Alimentación, seguridad y empleo
   Alérgenos, formas de alimentación, nutrientes, seguridad laboral, contrato y entrevista. */

LEKTION('de-beruf', {
  tag: 25, niveau: "B1", thema: "Alérgenos e intolerancias",
  vokabeln: [
    { id: "bv2501", de: "das Allergen",          es: "el alérgeno",       wortart: "sustantivo", beispiel: "Alle Allergene stehen in der Karte.", beispielUe: "Todos los alérgenos están en la carta." },
    { id: "bv2502", de: "die Allergie",          es: "la alergia",        wortart: "sustantivo", beispiel: "Haben Sie eine Allergie?", beispielUe: "¿Tiene alguna alergia?" },
    { id: "bv2503", de: "die Unverträglichkeit", es: "la intolerancia",   wortart: "sustantivo", beispiel: "Sie hat eine Laktose-Unverträglichkeit.", beispielUe: "Tiene intolerancia a la lactosa." },
    { id: "bv2504", de: "die Nuss",              es: "la nuez",           wortart: "sustantivo", beispiel: "Das Dessert enthält Nüsse.", beispielUe: "El postre contiene nueces." },
    { id: "bv2505", de: "das Gluten",            es: "el gluten",         wortart: "sustantivo", beispiel: "Das Brot enthält Gluten.", beispielUe: "El pan contiene gluten." },
    { id: "bv2506", de: "die Laktose",           es: "la lactosa",        wortart: "sustantivo", beispiel: "Die Soße ist ohne Laktose.", beispielUe: "La salsa es sin lactosa." },
    { id: "bv2507", de: "die Meeresfrüchte",     es: "los mariscos",      wortart: "sustantivo (plural)", beispiel: "Meeresfrüchte sind ein häufiges Allergen.", beispielUe: "Los mariscos son un alérgeno frecuente." },
    { id: "bv2508", de: "das Ei",                es: "el huevo",          wortart: "sustantivo", beispiel: "Die Nudeln enthalten Ei.", beispielUe: "La pasta contiene huevo." },
    { id: "bv2509", de: "der Sellerie",          es: "el apio",           wortart: "sustantivo", beispiel: "In der Brühe ist Sellerie.", beispielUe: "En el caldo hay apio." },
    { id: "bv2510", de: "kennzeichnen",          es: "señalar, etiquetar", wortart: "verbo", beispiel: "Wir kennzeichnen alle Allergene.", beispielUe: "Señalamos todos los alérgenos." }
  ],
  saetze: [
    { id: "bs2501", de: "Haben Sie eine Allergie oder eine Unverträglichkeit?", es: "¿Tiene alguna alergia o intolerancia?" },
    { id: "bs2502", de: "Dieses Gericht enthält Nüsse und Ei.", es: "Este plato contiene nueces y huevo." },
    { id: "bs2503", de: "Ich frage in der Küche nach, bevor ich etwas verspreche.", es: "Pregunto en la cocina antes de prometer nada." },
    { id: "bs2504", de: "Wir können das Gericht auch glutenfrei zubereiten.", es: "También podemos preparar el plato sin gluten." },
    { id: "bs2505", de: "Alle Allergene sind in der Karte gekennzeichnet.", es: "Todos los alérgenos están señalados en la carta." }
  ],
  grammatik: {
    id: "bg25", titel: "Recursos: responder con seguridad a una pregunta de alergia",
    erklaerung: `
      <p>Esta es la conversación con más responsabilidad de todo el servicio. Una alergia
      grave puede acabar en el hospital, así que hay una sola regla: <strong>no adivines
      nunca</strong>.</p>
      <table>
        <tr><th>Paso</th><th>Frase</th></tr>
        <tr><td>1. Preguntar</td><td><strong>Haben Sie eine Allergie oder Unverträglichkeit?</strong></td></tr>
        <tr><td>2. Repetir</td><td>Also keine Nüsse, richtig? <strong>Ich notiere das.</strong></td></tr>
        <tr><td>3. Consultar</td><td><strong>Ich frage in der Küche nach</strong>, einen Moment bitte.</td></tr>
        <tr><td>4. Responder</td><td>Das Gericht <strong>enthält</strong> kein Gluten. / Das <strong>kann ich Ihnen nicht garantieren</strong>.</td></tr>
      </table>
      <div class="merke">La frase prohibida es <em>Ich glaube, da ist nichts drin.</em> Si
      no lo sabes con certeza, la respuesta profesional es
      <strong>Das prüfe ich für Sie in der Küche.</strong> Nadie se enfada por esperar dos
      minutos; un error de este tipo no se arregla.</div>
      <p>En la Unión Europea hay <strong>catorce alérgenos</strong> de declaración
      obligatoria. Los que más aparecen en una carta alemana:</p>
      <ul>
        <li><strong>glutenhaltiges Getreide</strong> — cereales con gluten</li>
        <li><strong>Milch / Laktose</strong>, <strong>Eier</strong>, <strong>Fisch</strong>, <strong>Krebstiere</strong></li>
        <li><strong>Erdnüsse</strong> (cacahuetes) y <strong>Schalenfrüchte</strong> (frutos de cáscara)</li>
        <li><strong>Soja</strong>, <strong>Sellerie</strong>, <strong>Senf</strong> (mostaza), <strong>Sesam</strong></li>
        <li><strong>Sulfite</strong>, <strong>Lupinen</strong>, <strong>Weichtiere</strong> (moluscos)</li>
      </ul>
      <p>Los adjetivos terminados en <strong>-frei</strong> significan «sin»:
      <em>glutenfrei</em>, <em>laktosefrei</em>, <em>nussfrei</em>. Y <strong>-haltig</strong>
      significa lo contrario, «que contiene»: <em>glutenhaltig</em>.</p>`,
    uebungen: [
      { id: "bg2501", satz: "Haben Sie eine ___ oder Unverträglichkeit?", loesung: "Allergie", tipps: ["Allergie", "Allergen", "Alternative"], hinweis: "la reacción de la persona", ue: "¿Tiene alguna alergia o intolerancia?" },
      { id: "bg2502", satz: "Ich ___ in der Küche nach. (nachfragen)", loesung: "frage", tipps: ["frage", "fragen", "gefragt"], hinweis: "separable: nach va al final", ue: "Pregunto en la cocina." },
      { id: "bg2503", satz: "Dieses Gericht ist ___, ohne Weizen.", loesung: "glutenfrei", tipps: ["glutenfrei", "glutenhaltig", "laktosefrei"], hinweis: "-frei = sin", ue: "Este plato es sin gluten, sin trigo." },
      { id: "bg2504", satz: "Alle Allergene müssen ___ werden.", loesung: "gekennzeichnet", tipps: ["gekennzeichnet", "kennzeichnen", "kennzeichnet"], hinweis: "pasiva: participio + werden", ue: "Todos los alérgenos deben señalarse." },
      { id: "bg2505", satz: "Die Brühe ___ Sellerie.", loesung: "enthält", tipps: ["enthält", "enthalten", "enthalte"], hinweis: "sie + verbo: a → ä", ue: "El caldo contiene apio." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 26, niveau: "B1", thema: "Formas de alimentación",
  vokabeln: [
    { id: "bv2601", de: "vegetarisch",    es: "vegetariano",              wortart: "adjetivo", beispiel: "Wir haben vier vegetarische Gerichte.", beispielUe: "Tenemos cuatro platos vegetarianos." },
    { id: "bv2602", de: "vegan",          es: "vegano",                   wortart: "adjetivo", beispiel: "Der Kuchen ist vegan.", beispielUe: "El pastel es vegano." },
    { id: "bv2603", de: "halal",          es: "halal",                    wortart: "adjetivo", beispiel: "Das Fleisch ist halal.", beispielUe: "La carne es halal." },
    { id: "bv2604", de: "koscher",        es: "kosher",                   wortart: "adjetivo", beispiel: "Koschere Küche brauchen wir selten.", beispielUe: "Cocina kosher la necesitamos pocas veces." },
    { id: "bv2605", de: "laktosefrei",    es: "sin lactosa",              wortart: "adjetivo", beispiel: "Wir haben laktosefreie Milch.", beispielUe: "Tenemos leche sin lactosa." },
    { id: "bv2606", de: "der Ersatz",     es: "el sustituto",             wortart: "sustantivo", beispiel: "Als Ersatz nehmen wir Hafermilch.", beispielUe: "Como sustituto usamos leche de avena." },
    { id: "bv2607", de: "pflanzlich",     es: "de origen vegetal",        wortart: "adjetivo", beispiel: "Das Gericht ist rein pflanzlich.", beispielUe: "El plato es totalmente vegetal." },
    { id: "bv2608", de: "verzichten auf", es: "prescindir de",            wortart: "verbo", beispiel: "Sie verzichtet auf Zucker.", beispielUe: "Ella prescinde del azúcar." },
    { id: "bv2609", de: "die Alternative", es: "la alternativa",          wortart: "sustantivo", beispiel: "Ich habe eine Alternative für Sie.", beispielUe: "Tengo una alternativa para usted." },
    { id: "bv2610", de: "anbieten",       es: "ofrecer",                  wortart: "verbo separable", beispiel: "Ich biete Ihnen etwas anderes an.", beispielUe: "Le ofrezco otra cosa." }
  ],
  saetze: [
    { id: "bs2601", de: "Haben Sie auch vegetarische Gerichte?", es: "¿Tienen también platos vegetarianos?" },
    { id: "bs2602", de: "Vegan bedeutet ganz ohne tierische Produkte.", es: "Vegano significa totalmente sin productos de origen animal." },
    { id: "bs2603", de: "Wir können den Käse durch eine pflanzliche Alternative ersetzen.", es: "Podemos sustituir el queso por una alternativa vegetal." },
    { id: "bs2604", de: "Der Kuchen ist laktosefrei.", es: "El pastel es sin lactosa." },
    { id: "bs2605", de: "Ich biete Ihnen gern etwas anderes an.", es: "Con gusto le ofrezco otra cosa." }
  ],
  grammatik: {
    id: "bg26", titel: "Recursos: ofrecer alternativas",
    erklaerung: `
      <p>Cada vez más clientes comen de una forma concreta. Lo que se espera de ti no es que
      lo entiendas todo, sino que sepas explicar qué lleva un plato y ofrecer una salida.</p>
      <table>
        <tr><th>Forma</th><th>Sin</th></tr>
        <tr><td><strong>vegetarisch</strong></td><td>sin carne ni pescado (sí huevo y leche)</td></tr>
        <tr><td><strong>vegan</strong></td><td>sin ningún producto animal (tampoco miel)</td></tr>
        <tr><td><strong>halal</strong></td><td>sin cerdo ni alcohol, carne sacrificada según el rito</td></tr>
        <tr><td><strong>koscher</strong></td><td>según las reglas judías, sin mezclar carne y leche</td></tr>
      </table>
      <div class="merke">Un error caro: el caldo. Muchas sopas y salsas «vegetarianas»
      llevan <em>Fleischbrühe</em> o <em>Fischsoße</em>. Antes de decir que un plato es
      vegetariano, pregunta por el fondo: <em>Ist die Soße mit Fleischbrühe?</em></div>
      <p>La estructura para ofrecer una alternativa tiene tres piezas, y funciona siempre:</p>
      <ul>
        <li><strong>Das Gericht enthält ...</strong> — lo que lleva</li>
        <li><strong>Aber ich kann Ihnen ... anbieten.</strong> — lo que sí puedes dar</li>
        <li><strong>Wir können ... durch ... ersetzen.</strong> — lo que se puede cambiar</li>
      </ul>
      <p>El verbo <strong>ersetzen</strong> se construye con <em>durch</em>:
      <em>Wir ersetzen die Sahne <strong>durch</strong> Hafercreme.</em> Y
      <strong>verzichten</strong> siempre con <em>auf</em> + acusativo:
      <em>Ich verzichte <strong>auf</strong> Zucker.</em></p>`,
    uebungen: [
      { id: "bg2601", satz: "Haben Sie auch ___ Gerichte?", loesung: "vegetarische", tipps: ["vegetarische", "vegetarisch", "vegetarisches"], hinweis: "plural sin artículo: terminación -e", ue: "¿Tienen también platos vegetarianos?" },
      { id: "bg2602", satz: "Wir können Ihnen eine ___ anbieten.", loesung: "Alternative", tipps: ["Alternative", "Allergie", "Portion"], hinweis: "otra opción", ue: "Podemos ofrecerle una alternativa." },
      { id: "bg2603", satz: "Das Gericht ist rein ___.", loesung: "pflanzlich", tipps: ["pflanzlich", "pflanzliche", "tierisch"], hinweis: "adjetivo sin terminación tras sein", ue: "El plato es totalmente vegetal." },
      { id: "bg2604", satz: "Vegan heißt: ganz ___ tierische Produkte.", loesung: "ohne", tipps: ["ohne", "mit", "für"], hinweis: "ohne = sin", ue: "Vegano significa totalmente sin productos animales." },
      { id: "bg2605", satz: "Ich biete Ihnen gern etwas anderes ___.", loesung: "an", tipps: ["an", "auf", "aus"], hinweis: "separable: anbieten", ue: "Con gusto le ofrezco otra cosa." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 27, niveau: "B1", thema: "Nutrientes y alimentación",
  vokabeln: [
    { id: "bv2701", de: "der Nährwert",      es: "el valor nutricional",     wortart: "sustantivo", beispiel: "Der Nährwert steht auf der Packung.", beispielUe: "El valor nutricional está en el envase." },
    { id: "bv2702", de: "das Eiweiß",        es: "la proteína",              wortart: "sustantivo", beispiel: "Fisch enthält viel Eiweiß.", beispielUe: "El pescado tiene mucha proteína." },
    { id: "bv2703", de: "das Kohlenhydrat",  es: "el carbohidrato",          wortart: "sustantivo", beispiel: "Nudeln liefern Kohlenhydrate.", beispielUe: "La pasta aporta carbohidratos." },
    { id: "bv2704", de: "das Fett",          es: "la grasa",                 wortart: "sustantivo", beispiel: "Zu viel Fett ist ungesund.", beispielUe: "Demasiada grasa no es sana." },
    { id: "bv2705", de: "das Vitamin",       es: "la vitamina",              wortart: "sustantivo", beispiel: "Obst hat viele Vitamine.", beispielUe: "La fruta tiene muchas vitaminas." },
    { id: "bv2706", de: "die Kalorie",       es: "la caloría",               wortart: "sustantivo", beispiel: "Das Gericht hat 600 Kalorien.", beispielUe: "El plato tiene 600 calorías." },
    { id: "bv2707", de: "der Ballaststoff",  es: "la fibra",                 wortart: "sustantivo", beispiel: "Vollkorn hat viele Ballaststoffe.", beispielUe: "El integral tiene mucha fibra." },
    { id: "bv2708", de: "ausgewogen",        es: "equilibrado",              wortart: "adjetivo", beispiel: "Das Menü ist ausgewogen.", beispielUe: "El menú es equilibrado." },
    { id: "bv2709", de: "fettarm",           es: "bajo en grasa",            wortart: "adjetivo", beispiel: "Das Gericht ist fettarm.", beispielUe: "El plato es bajo en grasa." },
    { id: "bv2710", de: "die Zutatenliste",  es: "la lista de ingredientes", wortart: "sustantivo", beispiel: "Lies bitte die Zutatenliste.", beispielUe: "Lee la lista de ingredientes, por favor." }
  ],
  saetze: [
    { id: "bs2701", de: "Fisch enthält viel Eiweiß und wenig Fett.", es: "El pescado tiene mucha proteína y poca grasa." },
    { id: "bs2702", de: "Eine ausgewogene Ernährung hat alle Nährstoffe.", es: "Una alimentación equilibrada tiene todos los nutrientes." },
    { id: "bs2703", de: "Dieses Gericht ist besonders fettarm.", es: "Este plato es especialmente bajo en grasa." },
    { id: "bs2704", de: "Gemüse liefert Vitamine und Ballaststoffe.", es: "La verdura aporta vitaminas y fibra." },
    { id: "bs2705", de: "Die Zutatenliste steht auf der Verpackung.", es: "La lista de ingredientes está en el envase." }
  ],
  grammatik: {
    id: "bg27", titel: "Recursos: hablar de nutrientes y cantidades",
    erklaerung: `
      <p>Cada vez más huéspedes preguntan por calorías, proteína o azúcar. Para responder
      necesitas dos parejas de palabras y una preposición.</p>
      <table>
        <tr><th>Estructura</th><th>Ejemplo</th></tr>
        <tr><td><strong>viel / wenig</strong> + incontable</td><td>Fisch hat <strong>viel</strong> Eiweiß und <strong>wenig</strong> Fett.</td></tr>
        <tr><td><strong>reich an</strong> + dativo</td><td>Gemüse ist <strong>reich an</strong> Vitaminen.</td></tr>
        <tr><td><strong>arm an</strong> + dativo</td><td>Der Salat ist <strong>arm an</strong> Kalorien.</td></tr>
        <tr><td>adjetivo en <strong>-arm / -reich</strong></td><td><strong>fettarm</strong>, <strong>kalorienarm</strong>, <strong>vitaminreich</strong>, <strong>ballaststoffreich</strong></td></tr>
      </table>
      <div class="merke"><strong>viel</strong> va con incontables (viel Fett, viel Zucker)
      y <strong>viele</strong> con contables en plural (viele Vitamine, viele Kalorien). Lo
      mismo con <em>wenig</em> y <em>wenige</em>. Es la misma lógica de
      <em>wie viel / wie viele</em> del día 6.</div>
      <p>Los tres grandes grupos de nutrientes, tal y como aparecen en una etiqueta alemana:</p>
      <ul>
        <li><strong>Eiweiß</strong> (también <em>Protein</em>) — carne, pescado, legumbres</li>
        <li><strong>Kohlenhydrate</strong> — pan, pasta, arroz, papas</li>
        <li><strong>Fett</strong>, con la subdivisión <em>gesättigte Fettsäuren</em> (grasas saturadas)</li>
      </ul>
      <p>Y una frase honesta que siempre puedes decir: <em>Genaue Nährwerte habe ich leider
      nicht, aber die Zutatenliste kann ich Ihnen zeigen.</em></p>`,
    uebungen: [
      { id: "bg2701", satz: "Fisch enthält viel ___.", loesung: "Eiweiß", tipps: ["Eiweiß", "Kalorien", "Vitamine"], hinweis: "incontable tras viel", ue: "El pescado contiene mucha proteína." },
      { id: "bg2702", satz: "Eine ___ Ernährung ist wichtig.", loesung: "ausgewogene", tipps: ["ausgewogene", "ausgewogen", "ausgewogenes"], hinweis: "eine + femenino: terminación -e", ue: "Una alimentación equilibrada es importante." },
      { id: "bg2703", satz: "Dieses Gericht ist besonders ___.", loesung: "fettarm", tipps: ["fettarm", "fettreich", "fett"], hinweis: "-arm = bajo en", ue: "Este plato es especialmente bajo en grasa." },
      { id: "bg2704", satz: "Gemüse ist reich ___ Vitaminen.", loesung: "an", tipps: ["an", "auf", "von"], hinweis: "reich an + dativo", ue: "La verdura es rica en vitaminas." },
      { id: "bg2705", satz: "Nudeln bestehen vor allem aus ___.", loesung: "Kohlenhydraten", tipps: ["Kohlenhydraten", "Kohlenhydrate", "Kohlenhydrat"], hinweis: "aus + dativo plural: -n", ue: "La pasta se compone sobre todo de carbohidratos." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 28, niveau: "B1", thema: "Seguridad laboral y accidentes",
  vokabeln: [
    { id: "bv2801", de: "die Arbeitssicherheit", es: "la seguridad laboral",     wortart: "sustantivo", beispiel: "Arbeitssicherheit geht vor.", beispielUe: "La seguridad laboral es lo primero." },
    { id: "bv2802", de: "der Unfall",            es: "el accidente",             wortart: "sustantivo", beispiel: "Jeder Unfall wird gemeldet.", beispielUe: "Todo accidente se notifica." },
    { id: "bv2803", de: "die Schnittverletzung", es: "el corte",                 wortart: "sustantivo", beispiel: "Schnittverletzungen sind häufig.", beispielUe: "Los cortes son frecuentes." },
    { id: "bv2804", de: "die Verbrennung",       es: "la quemadura",             wortart: "sustantivo", beispiel: "Die Verbrennung muss gekühlt werden.", beispielUe: "La quemadura hay que enfriarla." },
    { id: "bv2805", de: "rutschig",              es: "resbaladizo",              wortart: "adjetivo", beispiel: "Der Boden ist rutschig.", beispielUe: "El suelo está resbaladizo." },
    { id: "bv2806", de: "der Verbandskasten",    es: "el botiquín",              wortart: "sustantivo", beispiel: "Der Verbandskasten hängt an der Wand.", beispielUe: "El botiquín está en la pared." },
    { id: "bv2807", de: "der Notausgang",        es: "la salida de emergencia",  wortart: "sustantivo", beispiel: "Der Notausgang muss frei bleiben.", beispielUe: "La salida de emergencia debe quedar libre." },
    { id: "bv2808", de: "der Feuerlöscher",      es: "el extintor",              wortart: "sustantivo", beispiel: "Der Feuerlöscher steht neben der Tür.", beispielUe: "El extintor está junto a la puerta." },
    { id: "bv2809", de: "melden",                es: "notificar",                wortart: "verbo", beispiel: "Ich melde den Unfall sofort.", beispielUe: "Notifico el accidente enseguida." },
    { id: "bv2810", de: "das Pflaster",          es: "la tirita",                wortart: "sustantivo", beispiel: "Ich brauche ein Pflaster.", beispielUe: "Necesito una tirita." }
  ],
  saetze: [
    { id: "bs2801", de: "Ich habe mich in den Finger geschnitten.", es: "Me corté el dedo." },
    { id: "bs2802", de: "Vorsicht, der Boden ist rutschig.", es: "Cuidado, el suelo está resbaladizo." },
    { id: "bs2803", de: "Jeden Unfall muss man sofort melden.", es: "Todo accidente hay que notificarlo enseguida." },
    { id: "bs2804", de: "Der Verbandskasten hängt neben der Tür.", es: "El botiquín está junto a la puerta." },
    { id: "bs2805", de: "Der Notausgang darf nie zugestellt werden.", es: "La salida de emergencia nunca debe bloquearse." }
  ],
  grammatik: {
    id: "bg28", titel: "Recursos: avisar de un peligro y notificar un accidente",
    erklaerung: `
      <p>La cocina es el puesto de trabajo con más accidentes de la hostelería. Dos cosas
      hay que poder decir de inmediato: <strong>un aviso</strong> y <strong>qué ha
      pasado</strong>.</p>
      <table>
        <tr><th>Situación</th><th>Se grita / se dice</th></tr>
        <tr><td>pasas con algo caliente</td><td><strong>Vorsicht, heiß!</strong> / <strong>Achtung, hinter dir!</strong></td></tr>
        <tr><td>suelo mojado</td><td><strong>Vorsicht, rutschig!</strong></td></tr>
        <tr><td>alguien se corta</td><td>Ich habe mich <strong>geschnitten</strong>. Wo ist der Verbandskasten?</td></tr>
        <tr><td>quemadura</td><td>Ich habe mich <strong>verbrannt</strong>. Bitte <strong>kühlen</strong>.</td></tr>
      </table>
      <div class="merke">Los verbos de accidente son reflexivos:
      <em>Ich habe <strong>mich</strong> geschnitten</em> (me he cortado),
      <em>Ich habe <strong>mich</strong> verbrannt</em> (me he quemado). Sin el
      <em>mich</em> la frase significa que cortaste otra cosa.</div>
      <p>Y una obligación legal alemana que sorprende a mucha gente: <strong>todo</strong>
      accidente laboral se anota, por pequeño que sea, en el
      <strong>Verbandbuch</strong> — el libro de primeros auxilios. Si más tarde hay
      complicaciones, esa anotación es la prueba ante la mutua:</p>
      <ul>
        <li><strong>Ich melde das dem Chef.</strong> — se lo comunico al jefe</li>
        <li><strong>Das kommt ins Verbandbuch.</strong> — se anota en el libro</li>
        <li><strong>Ich brauche einen Arzt.</strong> — necesito un médico</li>
      </ul>`,
    uebungen: [
      { id: "bg2801", satz: "Ich habe ___ in den Finger geschnitten.", loesung: "mich", tipps: ["mich", "mir", "ich"], hinweis: "verbo reflexivo en acusativo", ue: "Me corté el dedo." },
      { id: "bg2802", satz: "Vorsicht, der Boden ist ___.", loesung: "rutschig", tipps: ["rutschig", "heiß", "frei"], hinweis: "resbaladizo", ue: "Cuidado, el suelo está resbaladizo." },
      { id: "bg2803", satz: "Jeden Unfall muss man sofort ___.", loesung: "melden", tipps: ["melden", "meldet", "gemeldet"], hinweis: "infinitivo detrás de muss", ue: "Todo accidente hay que notificarlo enseguida." },
      { id: "bg2804", satz: "Wo ist der ___?", loesung: "Verbandskasten", tipps: ["Verbandskasten", "Feuerlöscher", "Notausgang"], hinweis: "la caja de primeros auxilios", ue: "¿Dónde está el botiquín?" },
      { id: "bg2805", satz: "Der ___ muss immer frei bleiben.", loesung: "Notausgang", tipps: ["Notausgang", "Verbandskasten", "Aufzug"], hinweis: "la salida de emergencia", ue: "La salida de emergencia debe estar siempre libre." }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 29, niveau: "B2", thema: "Contrato, turnos y vacaciones",
  vokabeln: [
    { id: "bv2901", de: "der Arbeitsvertrag", es: "el contrato de trabajo",    wortart: "sustantivo", beispiel: "Der Arbeitsvertrag gilt ein Jahr.", beispielUe: "El contrato vale un año." },
    { id: "bv2902", de: "der Lohn",           es: "el sueldo",                 wortart: "sustantivo", beispiel: "Der Lohn kommt am Monatsende.", beispielUe: "El sueldo llega a fin de mes." },
    { id: "bv2903", de: "die Überstunde",     es: "la hora extra",             wortart: "sustantivo", beispiel: "Ich habe zwölf Überstunden.", beispielUe: "Tengo doce horas extra." },
    { id: "bv2904", de: "der Urlaubsantrag",  es: "la solicitud de vacaciones", wortart: "sustantivo", beispiel: "Ich stelle einen Urlaubsantrag.", beispielUe: "Presento una solicitud de vacaciones." },
    { id: "bv2905", de: "sich krankmelden",   es: "dar parte de enfermedad",   wortart: "verbo separable", beispiel: "Ich muss mich krankmelden.", beispielUe: "Tengo que dar parte de enfermedad." },
    { id: "bv2906", de: "die Krankmeldung",   es: "el parte de baja",          wortart: "sustantivo", beispiel: "Die Krankmeldung kommt vom Arzt.", beispielUe: "El parte de baja lo da el médico." },
    { id: "bv2907", de: "tauschen",           es: "cambiar, intercambiar",     wortart: "verbo", beispiel: "Wir tauschen die Schicht.", beispielUe: "Cambiamos el turno." },
    { id: "bv2908", de: "die Probezeit",      es: "el periodo de prueba",      wortart: "sustantivo", beispiel: "Die Probezeit dauert sechs Monate.", beispielUe: "El periodo de prueba dura seis meses." },
    { id: "bv2909", de: "der Betriebsrat",    es: "el comité de empresa",      wortart: "sustantivo", beispiel: "Der Betriebsrat hilft bei Problemen.", beispielUe: "El comité de empresa ayuda con los problemas." },
    { id: "bv2910", de: "der Feierabend",     es: "el fin de la jornada",      wortart: "sustantivo", beispiel: "Schönen Feierabend!", beispielUe: "¡Buen fin de jornada!" }
  ],
  saetze: [
    { id: "bs2901", de: "Könnte ich am Freitag freinehmen?", es: "¿Podría tomarme libre el viernes?" },
    { id: "bs2902", de: "Ich möchte einen Urlaubsantrag stellen.", es: "Quisiera presentar una solicitud de vacaciones." },
    { id: "bs2903", de: "Ich muss mich heute leider krankmelden.", es: "Hoy lamentablemente tengo que dar parte de enfermedad." },
    { id: "bs2904", de: "Können wir die Schicht am Samstag tauschen?", es: "¿Podemos cambiar el turno del sábado?" },
    { id: "bs2905", de: "Wie viele Überstunden habe ich diesen Monat?", es: "¿Cuántas horas extra tengo este mes?" }
  ],
  grammatik: {
    id: "bg29", titel: "Recursos: hablar con el jefe sobre turnos y derechos",
    erklaerung: `
      <p>Pedir algo al jefe se hace en <strong>Konjunktiv II</strong> — la misma forma
      cortés del día 12, ahora aplicada a ti y no al cliente. Directo suena exigente;
      en condicional suena profesional.</p>
      <table>
        <tr><th>Directo</th><th>Profesional</th></tr>
        <tr><td>Ich will am Freitag frei.</td><td><strong>Könnte ich</strong> am Freitag freinehmen?</td></tr>
        <tr><td>Tauschen wir die Schicht.</td><td><strong>Wäre es möglich</strong>, die Schicht zu tauschen?</td></tr>
        <tr><td>Ich brauche mehr Lohn.</td><td><strong>Ich würde gern</strong> über meinen Lohn sprechen.</td></tr>
        <tr><td>Das ist zu viel Arbeit.</td><td><strong>Ich schaffe das zeitlich nicht.</strong> Was ist am wichtigsten?</td></tr>
      </table>
      <div class="merke">La baja por enfermedad tiene reglas estrictas en Alemania: hay que
      avisar <strong>antes</strong> del inicio del turno —
      <em>Ich muss mich leider krankmelden</em> — y a partir del tercer día (en muchas
      empresas desde el primero) se necesita el certificado médico, la
      <strong>Arbeitsunfähigkeitsbescheinigung</strong>, que todos llaman
      <em>der gelbe Schein</em>.</div>
      <p>Cinco derechos que conviene conocer por su nombre alemán:</p>
      <ul>
        <li><strong>Mindestlohn</strong> — salario mínimo legal</li>
        <li><strong>Urlaubsanspruch</strong> — derecho a vacaciones (mínimo 20 días con 5 días semanales)</li>
        <li><strong>Überstunden</strong> — horas extra, se pagan o se compensan con tiempo libre</li>
        <li><strong>Arbeitszeitgesetz</strong> — jornada máxima y descansos obligatorios</li>
        <li><strong>Lohnabrechnung</strong> — la nómina; guárdala siempre</li>
      </ul>
      <p>Y si algo no cuadra, la frase neutra que abre la conversación sin acusar a nadie:
      <em>Ich habe eine Frage zu meiner Lohnabrechnung. Hätten Sie kurz Zeit?</em></p>`,
    uebungen: [
      { id: "bg2901", satz: "___ ich am Freitag freinehmen?", loesung: "Könnte", tipps: ["Könnte", "Kann", "Konnte"], hinweis: "Konjunktiv II de können", ue: "¿Podría tomarme libre el viernes?" },
      { id: "bg2902", satz: "Ich möchte einen ___ stellen.", loesung: "Urlaubsantrag", tipps: ["Urlaubsantrag", "Arbeitsvertrag", "Feierabend"], hinweis: "la solicitud de vacaciones", ue: "Quisiera presentar una solicitud de vacaciones." },
      { id: "bg2903", satz: "Ich muss mich heute ___.", loesung: "krankmelden", tipps: ["krankmelden", "krankgemeldet", "melde krank"], hinweis: "infinitivo detrás de muss", ue: "Hoy tengo que dar parte de enfermedad." },
      { id: "bg2904", satz: "Können wir die Schicht ___?", loesung: "tauschen", tipps: ["tauschen", "tauscht", "getauscht"], hinweis: "infinitivo detrás de können", ue: "¿Podemos cambiar el turno?" },
      { id: "bg2905", satz: "Wie viele ___ habe ich diesen Monat?", loesung: "Überstunden", tipps: ["Überstunden", "Überstunde", "Probezeit"], hinweis: "plural: viele + contable", ue: "¿Cuántas horas extra tengo este mes?" }
    ]
  }
});

LEKTION('de-beruf', {
  tag: 30, niveau: "B2", thema: "Entrevista de trabajo y repaso final",
  vokabeln: [
    { id: "bv3001", de: "das Vorstellungsgespräch", es: "la entrevista de trabajo", wortart: "sustantivo", beispiel: "Das Vorstellungsgespräch ist am Montag.", beispielUe: "La entrevista es el lunes." },
    { id: "bv3002", de: "die Bewerbung",            es: "la solicitud de empleo",   wortart: "sustantivo", beispiel: "Ich schicke meine Bewerbung.", beispielUe: "Envío mi solicitud." },
    { id: "bv3003", de: "das Zeugnis",              es: "el certificado laboral",   wortart: "sustantivo", beispiel: "Hier sind meine Zeugnisse.", beispielUe: "Aquí están mis certificados." },
    { id: "bv3004", de: "die Berufserfahrung",      es: "la experiencia profesional", wortart: "sustantivo", beispiel: "Ich habe drei Jahre Berufserfahrung.", beispielUe: "Tengo tres años de experiencia." },
    { id: "bv3005", de: "belastbar",                es: "resistente al estrés",     wortart: "adjetivo", beispiel: "Ich bin belastbar und ruhig.", beispielUe: "Soy resistente al estrés y tranquilo." },
    { id: "bv3006", de: "teamfähig",                es: "capaz de trabajar en equipo", wortart: "adjetivo", beispiel: "Sie ist sehr teamfähig.", beispielUe: "Ella trabaja muy bien en equipo." },
    { id: "bv3007", de: "flexibel",                 es: "flexible",                 wortart: "adjetivo", beispiel: "Ich bin flexibel bei den Schichten.", beispielUe: "Soy flexible con los turnos." },
    { id: "bv3008", de: "die Einarbeitung",         es: "la formación inicial",     wortart: "sustantivo", beispiel: "Die Einarbeitung dauert zwei Wochen.", beispielUe: "La formación inicial dura dos semanas." },
    { id: "bv3009", de: "die Ausbildung",           es: "la formación profesional", wortart: "sustantivo", beispiel: "Ich habe eine Ausbildung als Koch.", beispielUe: "Tengo formación como cocinero." },
    { id: "bv3010", de: "der Quereinsteiger",       es: "quien cambia de sector",   wortart: "sustantivo", beispiel: "Als Quereinsteiger lerne ich schnell.", beispielUe: "Vengo de otro sector y aprendo rápido." }
  ],
  saetze: [
    { id: "bs3001", de: "Ich habe drei Jahre Berufserfahrung in der Gastronomie.", es: "Tengo tres años de experiencia en hostelería." },
    { id: "bs3002", de: "Ich bin belastbar und arbeite gern im Team.", es: "Soy resistente al estrés y me gusta trabajar en equipo." },
    { id: "bs3003", de: "Wann könnten Sie bei uns anfangen?", es: "¿Cuándo podría empezar con nosotros?" },
    { id: "bs3004", de: "Ich bin flexibel, auch am Wochenende.", es: "Soy flexible, también los fines de semana." },
    { id: "bs3005", de: "Haben Sie noch Fragen an uns?", es: "¿Tiene alguna pregunta para nosotros?" }
  ],
  grammatik: {
    id: "bg30", titel: "Recursos: la entrevista — y qué llevas ya contigo",
    erklaerung: `
      <p>Última lección de la ruta. Una entrevista en hostelería es corta y muy práctica:
      quieren saber qué sabes hacer, cuándo puedes empezar y si encajas en el equipo.</p>
      <table>
        <tr><th>Pregunta</th><th>Respuesta modelo</th></tr>
        <tr><td>Erzählen Sie etwas über sich.</td><td>Ich komme aus ..., ich arbeite seit ... in der Gastronomie.</td></tr>
        <tr><td>Welche Erfahrung haben Sie?</td><td>Ich habe <strong>drei Jahre Berufserfahrung</strong> als Kellnerin.</td></tr>
        <tr><td>Was sind Ihre Stärken?</td><td>Ich bin <strong>belastbar, teamfähig und pünktlich</strong>.</td></tr>
        <tr><td>Sind Sie flexibel?</td><td>Ja, ich kann auch <strong>abends und am Wochenende</strong>.</td></tr>
        <tr><td>Wann könnten Sie anfangen?</td><td>Ich <strong>könnte ab dem ersten März</strong> anfangen.</td></tr>
      </table>
      <div class="merke">Sobre el alemán, di la verdad y añade lo que estás haciendo:
      <em>Mein Deutsch ist noch nicht perfekt, aber ich lerne jeden Tag und im Service
      verstehe ich alles Wichtige.</em> Eso vale más que fingir un nivel que no tienes.</div>
      <p><strong>Repaso de la ruta.</strong> En treinta días has cubierto el turno completo:</p>
      <ul>
        <li><strong>Cocina</strong> (días 1–8): aparatos, cortes, cocciones, productos, cantidades, mise en place, HACCP.</li>
        <li><strong>Servicio</strong> (días 9–16): recibir, carta, bebidas, comanda, atender, quejas, cobrar, teléfono.</li>
        <li><strong>Hotel</strong> (días 17–24): recepción, habitaciones, check-in y check-out, housekeeping, información, problemas, desayuno.</li>
        <li><strong>Alimentación y empleo</strong> (días 25–30): alérgenos, dietas, nutrientes, seguridad, contrato, entrevista.</li>
      </ul>
      <p>A partir de aquí lo que sostiene el nivel es la repetición: las tarjetas siguen
      volviendo según el plan de repasos, y las palabras que fallas vuelven antes. Sigue con
      el curso general de alemán en paralelo — esta ruta te da el vocabulario del turno, el
      curso largo te da la gramática que lo sujeta. <strong>Viel Erfolg!</strong></p>`,
    uebungen: [
      { id: "bg3001", satz: "Ich habe drei Jahre ___ in der Gastronomie.", loesung: "Berufserfahrung", tipps: ["Berufserfahrung", "Ausbildung", "Einarbeitung"], hinweis: "los años trabajados", ue: "Tengo tres años de experiencia en hostelería." },
      { id: "bg3002", satz: "Ich bin ___ und arbeite gern im Team.", loesung: "belastbar", tipps: ["belastbar", "belasten", "belastet"], hinweis: "adjetivo: resistente al estrés", ue: "Soy resistente al estrés y me gusta trabajar en equipo." },
      { id: "bg3003", satz: "Wann könnten Sie bei uns ___?", loesung: "anfangen", tipps: ["anfangen", "angefangen", "fange an"], hinweis: "infinitivo detrás de könnten", ue: "¿Cuándo podría empezar con nosotros?" },
      { id: "bg3004", satz: "Ich habe eine ___ als Koch gemacht.", loesung: "Ausbildung", tipps: ["Ausbildung", "Einarbeitung", "Bewerbung"], hinweis: "la formación profesional alemana", ue: "Hice la formación profesional de cocinero." },
      { id: "bg3005", satz: "Die ___ im neuen Betrieb dauert zwei Wochen.", loesung: "Einarbeitung", tipps: ["Einarbeitung", "Ausbildung", "Probezeit"], hinweis: "las primeras semanas aprendiendo el puesto", ue: "La formación inicial en la nueva empresa dura dos semanas." }
    ]
  }
});
