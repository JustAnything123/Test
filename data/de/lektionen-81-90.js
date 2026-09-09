/* Día 81–90 · Nivel B1 · Cierre del nivel */

LEKTION('de', {
  tag: 81, niveau: "B1", thema: "Cortesía y peticiones",
  vokabeln: [
    { id: "v8101", de: "die Bitte",       es: "el ruego",       wortart: "sustantivo", beispiel: "Ich habe eine Bitte.", beispielUe: "Tengo un ruego." },
    { id: "v8102", de: "bitten um",       es: "pedir",          wortart: "verbo con preposición", beispiel: "Ich bitte um Verständnis.", beispielUe: "Pido comprensión." },
    { id: "v8103", de: "der Gefallen",    es: "el favor",       wortart: "sustantivo", beispiel: "Tust du mir einen Gefallen?", beispielUe: "¿Me haces un favor?" },
    { id: "v8104", de: "stören",          es: "molestar",       wortart: "verbo", beispiel: "Störe ich gerade?", beispielUe: "¿Molesto ahora?" },
    { id: "v8105", de: "die Rücksicht",   es: "la consideración", wortart: "sustantivo", beispiel: "Nimm bitte Rücksicht.", beispielUe: "Ten consideración, por favor." },
    { id: "v8106", de: "sich bedanken",   es: "dar las gracias", wortart: "verbo reflexivo", beispiel: "Ich bedanke mich herzlich.", beispielUe: "Doy las gracias de corazón." },
    { id: "v8107", de: "entgegenkommen",  es: "hacer una concesión", wortart: "verbo separable", beispiel: "Wir kommen Ihnen entgegen.", beispielUe: "Le hacemos una concesión." },
    { id: "v8108", de: "die Zusage",      es: "la confirmación", wortart: "sustantivo", beispiel: "Ich warte auf Ihre Zusage.", beispielUe: "Espero su confirmación." },
    { id: "v8109", de: "Bescheid geben",  es: "avisar",         wortart: "expresión", beispiel: "Gib mir bitte Bescheid.", beispielUe: "Avísame, por favor." },
    { id: "v8110", de: "gestatten",       es: "permitir (formal)", wortart: "verbo", beispiel: "Gestatten Sie eine Frage?", beispielUe: "¿Permite una pregunta?" }
  ],
  saetze: [
    { id: "s8101", de: "Könnten Sie mir bitte helfen?", es: "¿Podría ayudarme, por favor?" },
    { id: "s8102", de: "Ich hätte gern einen Termin.", es: "Quisiera una cita." },
    { id: "s8103", de: "Wären Sie so freundlich, mir das zu erklären?", es: "¿Sería tan amable de explicármelo?" },
    { id: "s8104", de: "Wenn ich nur mehr Zeit hätte!", es: "¡Ojalá tuviera más tiempo!" },
    { id: "s8105", de: "Ich wünschte, ich könnte bleiben.", es: "Ojalá pudiera quedarme." }
  ],
  grammatik: {
    id: "g81", titel: "Konjunktiv II: cortesía y deseos irreales",
    erklaerung: `
      <p>El Konjunktiv II no sirve solo para lo irreal. En el trato diario es sobre todo
      la <strong>forma de pedir sin sonar exigente</strong>. Compara:</p>
      <table>
        <tr><th>Indicativo (brusco)</th><th>Konjunktiv II (cortés)</th></tr>
        <tr><td>Können Sie mir helfen?</td><td><strong>Könnten</strong> Sie mir helfen?</td></tr>
        <tr><td>Ich will einen Termin.</td><td>Ich <strong>hätte</strong> gern einen Termin.</td></tr>
        <tr><td>Sind Sie so freundlich?</td><td><strong>Wären</strong> Sie so freundlich?</td></tr>
        <tr><td>Ich will noch etwas fragen.</td><td>Ich <strong>würde</strong> gern noch etwas fragen.</td></tr>
      </table>
      <div class="merke">Seis formas cubren casi todo:
      <strong>hätte, wäre, könnte, würde, dürfte, möchte</strong>. Con esas seis y un
      <em>bitte</em> ya suenas educado en cualquier situación.</div>
      <p><strong>Formas propias frente a würde.</strong> Los verbos frecuentes tienen su
      propia forma; los demás usan <em>würde + Infinitiv</em>:</p>
      <table>
        <tr><td>haben → <strong>hätte</strong></td><td>sein → <strong>wäre</strong></td><td>werden → <strong>würde</strong></td></tr>
        <tr><td>können → <strong>könnte</strong></td><td>müssen → <strong>müsste</strong></td><td>dürfen → <strong>dürfte</strong></td></tr>
        <tr><td>wissen → <strong>wüsste</strong></td><td>kommen → <strong>käme</strong></td><td>gehen → <strong>ginge</strong></td></tr>
        <tr><td>geben → <strong>gäbe</strong></td><td>brauchen → <strong>bräuchte</strong></td><td>el resto → <strong>würde</strong> + infinitivo</td></tr>
      </table>
      <p>Se forman del Präteritum con Umlaut y terminación -e: <em>ich war</em> →
      <em>ich wäre</em>, <em>ich kam</em> → <em>ich käme</em>.</p>
      <p><strong>Deseos irreales</strong> — tres construcciones para lo mismo:</p>
      <table>
        <tr><td><em><strong>Wenn</strong> ich <strong>nur</strong> mehr Zeit <strong>hätte</strong>!</em></td><td>verbo al final</td></tr>
        <tr><td><em><strong>Hätte</strong> ich <strong>doch</strong> mehr Zeit!</em></td><td>sin wenn: verbo en posición 1</td></tr>
        <tr><td><em>Ich <strong>wünschte</strong>, ich hätte mehr Zeit.</em></td><td>la más frecuente al hablar</td></tr>
      </table>
      <div class="merke">Las partículas <strong>nur</strong> y <strong>doch</strong> son casi
      obligatorias en el deseo — son las que le dan el matiz de <em>ojalá</em>.
      Sin ellas la frase suena a condición a medias.</div>
      <p><strong>Para el pasado</strong> ya tienes la fórmula del día 62:
      <em>Wenn ich nur mehr Zeit <strong>gehabt hätte</strong>!</em> — ojalá hubiera
      tenido más tiempo.</p>`,
    uebungen: [
      { id: "g8101", satz: "___ Sie mir bitte helfen? (können, cortés)", loesung: "Könnten", tipps: ["Könnten", "Können", "Konnten"], hinweis: "Konjunktiv II con Umlaut", ue: "¿Podría ayudarme?" },
      { id: "g8102", satz: "Ich ___ gern einen Termin. (haben, cortés)", loesung: "hätte", tipps: ["hätte", "habe", "hatte"], hinweis: "la forma de pedir algo", ue: "Quisiera una cita." },
      { id: "g8103", satz: "___ Sie so freundlich? (sein, cortés)", loesung: "Wären", tipps: ["Wären", "Sind", "Waren"], hinweis: "Konjunktiv II de sein", ue: "¿Sería tan amable?" },
      { id: "g8104", satz: "Wenn ich nur mehr Zeit ___! (haben)", loesung: "hätte", tipps: ["hätte", "habe", "hatte"], hinweis: "deseo irreal", ue: "¡Ojalá tuviera más tiempo!" },
      { id: "g8105", satz: "Ich wünschte, ich ___ bleiben. (können)", loesung: "könnte", tipps: ["könnte", "kann", "konnte"], hinweis: "tras ich wünschte", ue: "Ojalá pudiera quedarme." }
    ]
  }
});

LEKTION('de', {
  tag: 82, niveau: "B1", thema: "Generalizar",
  vokabeln: [
    { id: "v8201", de: "die Verallgemeinerung", es: "la generalización", wortart: "sustantivo", beispiel: "Das ist eine Verallgemeinerung.", beispielUe: "Eso es una generalización." },
    { id: "v8202", de: "gelten",          es: "valer, ser válido", wortart: "verbo", beispiel: "Das gilt für alle.", beispielUe: "Eso vale para todos." },
    { id: "v8203", de: "zutreffen",       es: "ser aplicable",  wortart: "verbo separable", beispiel: "Das trifft nicht zu.", beispielUe: "Eso no es aplicable." },
    { id: "v8204", de: "der Grundsatz",   es: "el principio",   wortart: "sustantivo", beispiel: "Das ist ein Grundsatz.", beispielUe: "Ese es un principio." },
    { id: "v8205", de: "im Allgemeinen",  es: "en general",     wortart: "expresión", beispiel: "Im Allgemeinen stimmt das.", beispielUe: "En general es cierto." },
    { id: "v8206", de: "jeweils",         es: "en cada caso",   wortart: "adverbio", beispiel: "Es sind jeweils zwei.", beispielUe: "Son dos en cada caso." },
    { id: "v8207", de: "durchaus",        es: "perfectamente",  wortart: "adverbio", beispiel: "Das ist durchaus möglich.", beispielUe: "Eso es perfectamente posible." },
    { id: "v8208", de: "keineswegs",      es: "de ninguna manera", wortart: "adverbio", beispiel: "Das ist keineswegs sicher.", beispielUe: "Eso no es seguro en absoluto." },
    { id: "v8209", de: "weitgehend",      es: "en gran medida", wortart: "adverbio", beispiel: "Wir sind uns weitgehend einig.", beispielUe: "Estamos de acuerdo en gran medida." },
    { id: "v8210", de: "die Ausnahme bestätigt die Regel", es: "la excepción confirma la regla", wortart: "expresión", beispiel: "Die Ausnahme bestätigt die Regel.", beispielUe: "La excepción confirma la regla." }
  ],
  saetze: [
    { id: "s8201", de: "Alles, was du sagst, stimmt.", es: "Todo lo que dices es cierto." },
    { id: "s8202", de: "Das ist das Beste, was mir passieren konnte.", es: "Es lo mejor que me podía pasar." },
    { id: "s8203", de: "Wer zu spät kommt, muss draußen warten.", es: "Quien llega tarde tiene que esperar fuera." },
    { id: "s8204", de: "Die Stadt, wo ich geboren bin, ist klein.", es: "La ciudad donde nací es pequeña." },
    { id: "s8205", de: "Er hat gelogen, was mich sehr geärgert hat.", es: "Mintió, lo que me molestó mucho." }
  ],
  grammatik: {
    id: "g82", titel: "Relativas con was, wo y wer",
    erklaerung: `
      <p>Junto a <em>der/die/das</em> hay tres pronombres relativos más. Cada uno tiene su
      terreno y ninguno se puede sustituir por otro.</p>
      <p><strong>1. was</strong> — cuando la relativa no se refiere a un sustantivo concreto:</p>
      <table>
        <tr><th>Situación</th><th>Ejemplo</th></tr>
        <tr><td>tras alles, nichts, etwas, vieles, einiges</td><td>Alles, <strong>was</strong> du sagst, stimmt.</td></tr>
        <tr><td>tras <em>das</em> como pronombre</td><td>Das, <strong>was</strong> er meint, ist anders.</td></tr>
        <tr><td>tras un superlativo neutro</td><td>das Beste, <strong>was</strong> mir passieren konnte</td></tr>
        <tr><td>referida a <strong>toda</strong> la frase anterior</td><td>Er hat gelogen, <strong>was</strong> mich ärgert.</td></tr>
      </table>
      <p>Si el verbo de la relativa lleva preposición, <em>was</em> se convierte en un
      compuesto con <em>wo-</em>: <em>Das ist etwas, <strong>worüber</strong> wir reden
      müssen.</em></p>
      <p><strong>2. wo</strong> — para lugares. Es la salida cómoda cuando no quieres pensar
      la preposición y el caso:</p>
      <table>
        <tr><td>die Stadt, <strong>in der</strong> ich wohne</td><td>= die Stadt, <strong>wo</strong> ich wohne</td></tr>
        <tr><td>das Haus, <strong>in dem</strong> wir waren</td><td>= das Haus, <strong>wo</strong> wir waren</td></tr>
      </table>
      <p>Con nombres propios de ciudad o país <strong>solo</strong> vale <em>wo</em>:
      <em>Berlin, <strong>wo</strong> ich studiert habe</em> — nunca <em>in dem</em>.
      También sirve para el tiempo: <em>der Tag, wo wir uns trafen</em> (coloquial;
      en texto cuidado: <em>an dem</em>).</p>
      <p><strong>3. wer / wen / wem</strong> — significa <em>quien</em> en sentido general,
      sin antecedente. Se declina como los interrogativos:</p>
      <table>
        <tr><td><strong>Wer</strong> zu spät kommt, muss warten.</td><td>Quien llega tarde espera.</td></tr>
        <tr><td><strong>Wen</strong> ich einlade, entscheide ich.</td><td>A quién invito lo decido yo.</td></tr>
        <tr><td><strong>Wem</strong> das nicht passt, der soll gehen.</td><td>A quien no le guste, que se vaya.</td></tr>
      </table>
      <div class="merke">Estas frases empiezan con la subordinada, así que la principal
      arranca directamente con el <strong>verbo</strong> — o con <em>der</em>:
      <em>Wer zu spät kommt, <strong>muss</strong> warten</em> /
      <em>Wem das nicht passt, <strong>der</strong> soll gehen</em>.</div>`,
    uebungen: [
      { id: "g8201", satz: "Alles, ___ du sagst, stimmt.", loesung: "was", tipps: ["was", "das", "wer"], hinweis: "tras alles", ue: "Todo lo que dices es cierto." },
      { id: "g8202", satz: "Das ist das Beste, ___ mir passieren konnte.", loesung: "was", tipps: ["was", "das", "wo"], hinweis: "tras un superlativo neutro", ue: "Es lo mejor que me podía pasar." },
      { id: "g8203", satz: "___ zu spät kommt, muss draußen warten.", loesung: "Wer", tipps: ["Wer", "Wen", "Was"], hinweis: "sujeto general", ue: "Quien llega tarde espera fuera." },
      { id: "g8204", satz: "Die Stadt, ___ ich geboren bin, ist klein.", loesung: "wo", tipps: ["wo", "die", "was"], hinweis: "lugar", ue: "La ciudad donde nací es pequeña." },
      { id: "g8205", satz: "Er hat gelogen, ___ mich sehr geärgert hat.", loesung: "was", tipps: ["was", "das", "der"], hinweis: "se refiere a toda la frase", ue: "Mintió, lo que me molestó mucho." }
    ]
  }
});

LEKTION('de', {
  tag: 83, niveau: "B1", thema: "Comparar",
  vokabeln: [
    { id: "v8301", de: "der Vergleich",   es: "la comparación", wortart: "sustantivo", beispiel: "Der Vergleich hinkt.", beispielUe: "La comparación cojea." },
    { id: "v8302", de: "die Ähnlichkeit", es: "la similitud",   wortart: "sustantivo", beispiel: "Es gibt eine Ähnlichkeit.", beispielUe: "Hay una similitud." },
    { id: "v8303", de: "übertreffen",     es: "superar",        wortart: "verbo", beispiel: "Das übertrifft alles.", beispielUe: "Eso lo supera todo." },
    { id: "v8304", de: "deutlich",        es: "claramente",     wortart: "adjetivo y adverbio", beispiel: "Es ist deutlich besser.", beispielUe: "Es claramente mejor." },
    { id: "v8305", de: "gering",          es: "escaso",         wortart: "adjetivo", beispiel: "Der Unterschied ist gering.", beispielUe: "La diferencia es escasa." },
    { id: "v8306", de: "erheblich",       es: "considerable",   wortart: "adjetivo", beispiel: "Das ist ein erheblicher Vorteil.", beispielUe: "Es una ventaja considerable." },
    { id: "v8307", de: "zunehmen",        es: "aumentar",       wortart: "verbo separable", beispiel: "Die Zahl nimmt zu.", beispielUe: "La cifra aumenta." },
    { id: "v8308", de: "abnehmen",        es: "disminuir",      wortart: "verbo separable", beispiel: "Das Interesse nimmt ab.", beispielUe: "El interés disminuye." },
    { id: "v8309", de: "entsprechen",     es: "corresponder a", wortart: "verbo", beispiel: "Das entspricht meinen Erwartungen.", beispielUe: "Eso corresponde a mis expectativas." },
    { id: "v8310", de: "im Vergleich zu", es: "en comparación con", wortart: "expresión", beispiel: "Im Vergleich zu früher ist es leicht.", beispielUe: "En comparación con antes es fácil." }
  ],
  saetze: [
    { id: "s8301", de: "Je mehr ich lerne, desto leichter wird es.", es: "Cuanto más aprendo, más fácil se vuelve." },
    { id: "s8302", de: "Er war so müde, dass er sofort einschlief.", es: "Estaba tan cansado que se durmió enseguida." },
    { id: "s8303", de: "Sie ist genauso alt wie ich.", es: "Ella tiene exactamente mi edad." },
    { id: "s8304", de: "Der Test war schwerer als erwartet.", es: "El examen fue más difícil de lo esperado." },
    { id: "s8305", de: "Je später es wird, desto ruhiger ist es.", es: "Cuanto más tarde se hace, más tranquilo está." }
  ],
  grammatik: {
    id: "g83", titel: "Comparaciones: als, wie, je … desto, so … dass",
    erklaerung: `
      <p><strong>Lo primero, la pareja que más se falla:</strong></p>
      <table>
        <tr><th>igualdad → <strong>wie</strong></th><th>desigualdad → <strong>als</strong></th></tr>
        <tr><td>Sie ist <strong>so</strong> alt <strong>wie</strong> ich.</td><td>Er ist älter <strong>als</strong> ich.</td></tr>
        <tr><td>genauso schnell wie / nicht so gut wie</td><td>besser als / schwerer als</td></tr>
      </table>
      <div class="merke"><strong>Comparativo siempre con als.</strong> <em>größer wie</em>
      se oye en la calle pero es incorrecto. Regla mecánica: si la palabra lleva
      <strong>-er</strong> de comparativo, detrás va <strong>als</strong>.</div>
      <p><strong>je … desto</strong> = <em>cuanto más … más</em>. Es la construcción con el
      orden más raro del alemán, así que fíjate bien:</p>
      <table>
        <tr><td><strong>Je</strong> mehr ich lerne,</td><td>subordinada → verbo <strong>al final</strong></td></tr>
        <tr><td><strong>desto</strong> leichter <strong>wird</strong> es.</td><td>principal → <em>desto</em> + comparativo ocupan la posición 1, el verbo va en la 2</td></tr>
      </table>
      <p><em>desto</em> y <em>umso</em> son intercambiables. Los dos comparativos van
      pegados a <em>je</em> y a <em>desto</em>, nunca sueltos:
      <em>Je <strong>länger</strong>, desto <strong>besser</strong>.</em></p>
      <p><strong>so … dass</strong> = <em>tan … que</em>, expresa la consecuencia:</p>
      <table>
        <tr><td>Er war <strong>so</strong> müde, <strong>dass</strong> er einschlief.</td><td>con adjetivo</td></tr>
        <tr><td>Es regnete <strong>so</strong> stark, <strong>dass</strong> wir blieben.</td><td>con adverbio</td></tr>
        <tr><td>Er hatte <strong>solche</strong> Angst, <strong>dass</strong> er nicht schlief.</td><td>con sustantivo: solch-</td></tr>
      </table>
      <p><strong>Comparación irreal</strong> con <em>als ob</em> + Konjunktiv II:
      <em>Er tut so, <strong>als ob</strong> er alles <strong>wüsste</strong>.</em> — Hace
      como si lo supiera todo. Sin <em>ob</em>, el verbo va justo detrás de <em>als</em>:
      <em>Er tut so, <strong>als wüsste</strong> er alles.</em></p>
      <div class="merke">Y no confundas los tres <em>als</em>: comparativo
      (<em>größer als</em>), temporal (<em>als ich Kind war</em>) y de función
      (<em>Ich arbeite als Lehrer</em>). Son tres palabras distintas que suenan igual.</div>`,
    uebungen: [
      { id: "g8301", satz: "___ mehr ich lerne, desto leichter wird es.", loesung: "Je", tipps: ["Je", "Desto", "So"], hinweis: "primera mitad", ue: "Cuanto más aprendo, más fácil es." },
      { id: "g8302", satz: "Je mehr ich übe, ___ besser werde ich.", loesung: "desto", tipps: ["desto", "je", "als"], hinweis: "segunda mitad", ue: "Cuanto más practico, mejor me vuelvo." },
      { id: "g8303", satz: "Er war so müde, ___ er sofort einschlief.", loesung: "dass", tipps: ["dass", "als", "wie"], hinweis: "consecuencia", ue: "Estaba tan cansado que se durmió." },
      { id: "g8304", satz: "Sie ist genauso alt ___ ich.", loesung: "wie", tipps: ["wie", "als", "denn"], hinweis: "igualdad", ue: "Ella tiene mi misma edad." },
      { id: "g8305", satz: "Der Test war schwerer ___ erwartet.", loesung: "als", tipps: ["als", "wie", "so"], hinweis: "comparativo", ue: "El examen fue más difícil de lo esperado." }
    ]
  }
});

LEKTION('de', {
  tag: 84, niveau: "B1", thema: "Alternativas y decisiones",
  vokabeln: [
    { id: "v8401", de: "die Alternative", es: "la alternativa", wortart: "sustantivo", beispiel: "Es gibt keine Alternative.", beispielUe: "No hay alternativa." },
    { id: "v8402", de: "die Auswahl",     es: "la selección",   wortart: "sustantivo", beispiel: "Die Auswahl ist groß.", beispielUe: "La selección es grande." },
    { id: "v8403", de: "sich entscheiden für", es: "decidirse por", wortart: "verbo con preposición", beispiel: "Ich entscheide mich für Plan B.", beispielUe: "Me decido por el plan B." },
    { id: "v8404", de: "abwägen",         es: "sopesar",        wortart: "verbo separable", beispiel: "Wir wägen die Vorteile ab.", beispielUe: "Sopesamos las ventajas." },
    { id: "v8405", de: "der Vorteil",     es: "la ventaja",     wortart: "sustantivo", beispiel: "Das hat einen Vorteil.", beispielUe: "Eso tiene una ventaja." },
    { id: "v8406", de: "der Nachteil",    es: "la desventaja",  wortart: "sustantivo", beispiel: "Der Nachteil ist der Preis.", beispielUe: "La desventaja es el precio." },
    { id: "v8407", de: "ausschließen",    es: "excluir",        wortart: "verbo separable", beispiel: "Das schließe ich aus.", beispielUe: "Eso lo excluyo." },
    { id: "v8408", de: "vorziehen",       es: "preferir",       wortart: "verbo separable", beispiel: "Ich ziehe die erste Lösung vor.", beispielUe: "Prefiero la primera solución." },
    { id: "v8409", de: "zugleich",        es: "a la vez",       wortart: "adverbio", beispiel: "Es ist teuer und zugleich gut.", beispielUe: "Es caro y a la vez bueno." },
    { id: "v8410", de: "die Bedingung",   es: "la condición",   wortart: "sustantivo", beispiel: "Unter einer Bedingung.", beispielUe: "Con una condición." }
  ],
  saetze: [
    { id: "s8401", de: "Er spricht nicht nur Deutsch, sondern auch Russisch.", es: "No solo habla alemán, sino también ruso." },
    { id: "s8402", de: "Entweder wir gehen jetzt oder wir bleiben hier.", es: "O nos vamos ahora o nos quedamos aquí." },
    { id: "s8403", de: "Sowohl mein Bruder als auch meine Schwester wohnen dort.", es: "Tanto mi hermano como mi hermana viven allí." },
    { id: "s8404", de: "Es ist zwar teuer, aber es lohnt sich.", es: "Es cierto que es caro, pero vale la pena." },
    { id: "s8405", de: "Einerseits ist es praktisch, andererseits zu teuer.", es: "Por un lado es práctico, por otro demasiado caro." }
  ],
  grammatik: {
    id: "g84", titel: "Conectores de dos partes",
    erklaerung: `
      <p>Estos conectores vienen en pareja: la primera mitad anuncia, la segunda cierra.
      Son la marca de un alemán ordenado y aparecen en todo texto argumentativo.</p>
      <table>
        <tr><th>Conector</th><th>Español</th><th>Ejemplo</th></tr>
        <tr><td><strong>nicht nur … sondern auch</strong></td><td>no solo … sino también</td><td>Er spricht nicht nur Deutsch, sondern auch Russisch.</td></tr>
        <tr><td><strong>sowohl … als auch</strong></td><td>tanto … como</td><td>Sowohl er als auch sie kommen.</td></tr>
        <tr><td><strong>entweder … oder</strong></td><td>o … o</td><td>Entweder wir gehen oder wir bleiben.</td></tr>
        <tr><td><strong>weder … noch</strong></td><td>ni … ni</td><td>Weder er noch sie war da.</td></tr>
        <tr><td><strong>zwar … aber</strong></td><td>es cierto que … pero</td><td>Es ist zwar teuer, aber gut.</td></tr>
        <tr><td><strong>einerseits … andererseits</strong></td><td>por un lado … por otro</td><td>Einerseits praktisch, andererseits teuer.</td></tr>
        <tr><td><strong>je … desto</strong></td><td>cuanto más … más</td><td>Je mehr, desto besser.</td></tr>
      </table>
      <p><strong>Cuatro detalles que deciden si suena bien:</strong></p>
      <ol>
        <li><strong>sondern</strong>, no <em>aber</em>. <em>sondern</em> solo aparece tras
            una negación y corrige lo negado: <em>nicht … sondern</em>. Con
            <em>aber</em> la frase sería agramatical.</li>
        <li><strong>weder … noch</strong> ya es negativo. Nada de añadir <em>nicht</em>
            ni <em>kein</em>: <em>Ich habe weder Zeit noch Lust</em>.</li>
        <li><strong>sowohl … als auch</strong> une dos sujetos → verbo en
            <strong>plural</strong>: <em>Sowohl er als auch sie <strong>kommen</strong></em>.</li>
        <li><strong>zwar</strong> no significa <em>ciertamente</em> a secas: anuncia una
            objeción que llega inmediatamente con <em>aber</em>. Nunca va solo.</li>
      </ol>
      <div class="merke"><strong>Y la posición.</strong> Cuando <em>entweder</em>,
      <em>einerseits</em> o <em>weder</em> abren la frase, pueden ocupar la posición 1
      (verbo detrás: <em>Entweder <strong>gehen wir</strong> jetzt…</em>) o quedarse fuera
      de la cuenta (<em>Entweder <strong>wir gehen</strong> jetzt…</em>). Las dos son
      correctas; la primera es más cuidada.</div>`,
    uebungen: [
      { id: "g8401", satz: "Er spricht nicht nur Deutsch, ___ auch Russisch.", loesung: "sondern", tipps: ["sondern", "aber", "oder"], hinweis: "tras una negación", ue: "No solo habla alemán, sino también ruso." },
      { id: "g8402", satz: "___ wir gehen jetzt oder wir bleiben hier.", loesung: "Entweder", tipps: ["Entweder", "Sowohl", "Weder"], hinweis: "o … o", ue: "O nos vamos o nos quedamos." },
      { id: "g8403", satz: "Sowohl er ___ auch sie kommen mit.", loesung: "als", tipps: ["als", "wie", "und"], hinweis: "tanto … como", ue: "Tanto él como ella vienen." },
      { id: "g8404", satz: "Es ist ___ teuer, aber es lohnt sich.", loesung: "zwar", tipps: ["zwar", "sowohl", "weder"], hinweis: "anuncia la objeción", ue: "Es caro, pero vale la pena." },
      { id: "g8405", satz: "___ ist es praktisch, andererseits zu teuer.", loesung: "Einerseits", tipps: ["Einerseits", "Entweder", "Zwar"], hinweis: "por un lado", ue: "Por un lado es práctico, por otro caro." }
    ]
  }
});

LEKTION('de', {
  tag: 85, niveau: "B1", thema: "Contar lo que otros dicen",
  vokabeln: [
    { id: "v8501", de: "mitteilen",       es: "comunicar",      wortart: "verbo separable", beispiel: "Er teilt uns das Ergebnis mit.", beispielUe: "Él nos comunica el resultado." },
    { id: "v8502", de: "erwähnen",        es: "mencionar",      wortart: "verbo", beispiel: "Das hat sie nicht erwähnt.", beispielUe: "Eso no lo mencionó." },
    { id: "v8503", de: "bestätigen",      es: "confirmar",      wortart: "verbo", beispiel: "Können Sie das bestätigen?", beispielUe: "¿Puede confirmarlo?" },
    { id: "v8504", de: "versichern",      es: "asegurar",       wortart: "verbo", beispiel: "Er versicherte mir das Gegenteil.", beispielUe: "Él me aseguró lo contrario." },
    { id: "v8505", de: "die Aussage",     es: "la declaración", wortart: "sustantivo", beispiel: "Seine Aussage war klar.", beispielUe: "Su declaración fue clara." },
    { id: "v8506", de: "wiedergeben",     es: "reproducir",     wortart: "verbo separable", beispiel: "Ich gebe nur wieder, was er sagte.", beispielUe: "Solo reproduzco lo que dijo." },
    { id: "v8507", de: "zitieren",        es: "citar",          wortart: "verbo", beispiel: "Er zitiert die Zeitung.", beispielUe: "Él cita el periódico." },
    { id: "v8508", de: "der Inhalt",      es: "el contenido",   wortart: "sustantivo", beispiel: "Der Inhalt war wichtig.", beispielUe: "El contenido era importante." },
    { id: "v8509", de: "sinngemäß",       es: "en esencia",     wortart: "adverbio", beispiel: "Er sagte sinngemäß das Gleiche.", beispielUe: "Dijo en esencia lo mismo." },
    { id: "v8510", de: "vorwerfen",       es: "reprochar",      wortart: "verbo separable", beispiel: "Sie wirft ihm nichts vor.", beispielUe: "Ella no le reprocha nada." }
  ],
  saetze: [
    { id: "s8501", de: "Er sagt, dass er keine Zeit hat.", es: "Dice que no tiene tiempo." },
    { id: "s8502", de: "Sie hat mir mitgeteilt, dass sie später kommt.", es: "Me comunicó que viene más tarde." },
    { id: "s8503", de: "Er fragte, ob ich mitkomme.", es: "Preguntó si voy con él." },
    { id: "s8504", de: "Sie wollte wissen, wann der Kurs beginnt.", es: "Quería saber cuándo empieza el curso." },
    { id: "s8505", de: "Er sagt, ich soll ihn anrufen.", es: "Dice que lo llame." }
  ],
  grammatik: {
    id: "g85", titel: "Estilo indirecto en la lengua hablada",
    erklaerung: `
      <p>En alemán hablado el estilo indirecto es sencillo: <strong>dass + indicativo</strong>.
      El Konjunktiv I que verás en los periódicos llega en el B2; para conversar no hace
      falta.</p>
      <table>
        <tr><th>Directo</th><th>Indirecto</th></tr>
        <tr><td>Er sagt: <em>Ich habe keine Zeit.</em></td><td>Er sagt, <strong>dass er</strong> keine Zeit <strong>hat</strong>.</td></tr>
        <tr><td>Sie sagt: <em>Ich komme später.</em></td><td>Sie sagt, <strong>dass sie</strong> später <strong>kommt</strong>.</td></tr>
      </table>
      <p>El <em>dass</em> se puede omitir; entonces la frase mantiene el orden normal:
      <em>Er sagt, <strong>er hat</strong> keine Zeit.</em> Las dos formas son correctas.</p>
      <p><strong>Preguntas indirectas</strong> — dos casos:</p>
      <table>
        <tr><td>pregunta de sí/no → <strong>ob</strong></td><td><em>Kommst du mit?</em> → Er fragte, <strong>ob</strong> ich mitkomme.</td></tr>
        <tr><td>pregunta con W- → se conserva la W-</td><td><em>Wann beginnt der Kurs?</em> → Sie wollte wissen, <strong>wann</strong> der Kurs beginnt.</td></tr>
      </table>
      <div class="merke">Las dos son subordinadas: <strong>el verbo se va al final</strong>.
      Y nada de repetir la inversión de la pregunta: <em>Er fragte, ob ich
      <strong>mitkomme</strong></em>, nunca <em>ob komme ich mit</em>.</div>
      <p><strong>Imperativos</strong> se transforman con <em>sollen</em>:</p>
      <p style="margin-left:1rem"><em>Ruf mich an!</em> → Er sagt, dass ich ihn anrufen
      <strong>soll</strong>. / Er sagt, ich <strong>soll</strong> ihn anrufen.</p>
      <p><strong>Lo que hay que cambiar además del verbo:</strong></p>
      <table>
        <tr><td>pronombres</td><td>ich → er/sie · mein → sein/ihr · du → ich</td></tr>
        <tr><td>tiempo</td><td>heute → an dem Tag · morgen → am nächsten Tag · gestern → am Tag davor</td></tr>
        <tr><td>lugar</td><td>hier → dort · dieser → jener / der</td></tr>
      </table>
      <p><strong>Verbos útiles para introducir:</strong> sagen, meinen, erklären, berichten,
      mitteilen, behaupten, erwähnen, bestätigen, versichern, antworten, fragen,
      wissen wollen. Elegir bien el verbo ya transmite tu postura: <em>behaupten</em>
      señala que dudas, <em>bestätigen</em> que lo das por bueno.</p>`,
    uebungen: [
      { id: "g8501", satz: "Er sagt, ___ er keine Zeit hat.", loesung: "dass", tipps: ["dass", "ob", "was"], hinweis: "afirmación", ue: "Dice que no tiene tiempo." },
      { id: "g8502", satz: "Er fragte, ___ ich mitkomme.", loesung: "ob", tipps: ["ob", "dass", "wenn"], hinweis: "pregunta de sí o no", ue: "Preguntó si voy con él." },
      { id: "g8503", satz: "Sie wollte wissen, ___ der Kurs beginnt.", loesung: "wann", tipps: ["wann", "ob", "dass"], hinweis: "se conserva la palabra interrogativa", ue: "Quería saber cuándo empieza el curso." },
      { id: "g8504", satz: "Ich bin müde. → Er sagt, dass ___ müde ist.", loesung: "er", tipps: ["er", "ich", "sie"], hinweis: "cambio de pronombre", ue: "Dice que está cansado." },
      { id: "g8505", satz: "Ruf mich an! → Er sagt, dass ich ihn anrufen ___.", loesung: "soll", tipps: ["soll", "will", "muss"], hinweis: "imperativo indirecto", ue: "Dice que lo llame." }
    ]
  }
});

LEKTION('de', {
  tag: 86, niveau: "B1", thema: "Lugares y caminos",
  vokabeln: [
    { id: "v8601", de: "die Richtung",    es: "la dirección",   wortart: "sustantivo", beispiel: "Wir gehen in diese Richtung.", beispielUe: "Vamos en esta dirección." },
    { id: "v8602", de: "gegenüber",       es: "enfrente de",    wortart: "preposición", beispiel: "Die Post ist gegenüber der Bank.", beispielUe: "Correos está enfrente del banco." },
    { id: "v8603", de: "entlang",         es: "a lo largo de",  wortart: "preposición", beispiel: "Gehen Sie die Straße entlang.", beispielUe: "Vaya a lo largo de la calle." },
    { id: "v8604", de: "die Umgebung",    es: "los alrededores", wortart: "sustantivo", beispiel: "Die Umgebung ist schön.", beispielUe: "Los alrededores son bonitos." },
    { id: "v8605", de: "die Kreuzung",    es: "el cruce",       wortart: "sustantivo", beispiel: "An der Kreuzung links.", beispielUe: "En el cruce a la izquierda." },
    { id: "v8606", de: "abbiegen",        es: "girar",          wortart: "verbo separable", beispiel: "Biegen Sie rechts ab.", beispielUe: "Gire a la derecha." },
    { id: "v8607", de: "geradeaus",       es: "todo recto",     wortart: "adverbio", beispiel: "Immer geradeaus.", beispielUe: "Siempre recto." },
    { id: "v8608", de: "die Ecke",        es: "la esquina",     wortart: "sustantivo", beispiel: "Es ist gleich um die Ecke.", beispielUe: "Está a la vuelta de la esquina." },
    { id: "v8609", de: "der Eingang",     es: "la entrada",     wortart: "sustantivo", beispiel: "Der Eingang ist hinten.", beispielUe: "La entrada está detrás." },
    { id: "v8610", de: "die Nähe",        es: "la cercanía",    wortart: "sustantivo", beispiel: "Es ist hier in der Nähe.", beispielUe: "Está aquí cerca." }
  ],
  saetze: [
    { id: "s8601", de: "Ich fahre morgen nach Berlin.", es: "Mañana voy a Berlín." },
    { id: "s8602", de: "Nächstes Jahr fahren wir in die Schweiz.", es: "El año que viene vamos a Suiza." },
    { id: "s8603", de: "Wir gehen heute zum Arzt.", es: "Hoy vamos al médico." },
    { id: "s8604", de: "Sie kommt aus der Türkei.", es: "Ella viene de Turquía." },
    { id: "s8605", de: "Ich gehe jetzt nach Hause.", es: "Ahora me voy a casa." }
  ],
  grammatik: {
    id: "g86", titel: "Las indicaciones de lugar, ordenadas",
    erklaerung: `
      <p>El español se apaña con <em>a</em>, <em>en</em> y <em>de</em>. El alemán obliga a
      elegir entre seis preposiciones, y el criterio no es el que uno espera. Esta es la
      tabla que lo resuelve.</p>
      <p><strong>1. ¿Adónde? — destino</strong></p>
      <table>
        <tr><th>Preposición</th><th>Cuándo</th><th>Ejemplo</th></tr>
        <tr><td><strong>nach</strong></td><td>ciudades, países <em>sin</em> artículo, puntos cardinales</td><td>nach Berlin, nach Spanien, nach Norden</td></tr>
        <tr><td><strong>in</strong> + Akk</td><td>países <em>con</em> artículo, y todo lo que se entra</td><td>in die Schweiz, in die Türkei, in die USA, ins Kino</td></tr>
        <tr><td><strong>zu</strong> + Dat</td><td>personas, instituciones, un punto al que se va</td><td>zum Arzt, zur Post, zu meiner Freundin</td></tr>
        <tr><td><strong>auf</strong> + Akk</td><td>algunas instituciones y superficies</td><td>auf die Bank, auf den Markt, auf den Berg</td></tr>
        <tr><td><strong>an</strong> + Akk</td><td>bordes: agua, ventana, mesa</td><td>ans Meer, ans Fenster</td></tr>
      </table>
      <div class="merke">Países con artículo — hay que saberlos de memoria porque son
      pocos: <strong>die Schweiz, die Türkei, die USA (Pl.), die Niederlande (Pl.),
      der Iran, der Irak, die Ukraine, die Slowakei</strong>. Con todos los demás,
      <em>nach</em>.</div>
      <p><strong>2. ¿Dónde? — posición</strong> — las mismas preposiciones, pero
      <strong>en dativo</strong>: <em>in Berlin, in der Schweiz, beim Arzt, auf der Bank,
      am Meer</em>.</p>
      <table>
        <tr><th>Adónde</th><th>Dónde</th><th>De dónde</th></tr>
        <tr><td>nach Berlin</td><td>in Berlin</td><td>aus Berlin</td></tr>
        <tr><td>in die Schweiz</td><td>in der Schweiz</td><td>aus der Schweiz</td></tr>
        <tr><td>zum Arzt</td><td><strong>beim</strong> Arzt</td><td><strong>vom</strong> Arzt</td></tr>
        <tr><td>nach Hause</td><td><strong>zu</strong> Hause</td><td>von zu Hause</td></tr>
      </table>
      <p><strong>3. ¿De dónde?</strong> — <em>aus</em> cuando se sale de dentro o se es de
      un sitio (<em>Ich komme aus Peru</em>); <em>von</em> cuando se viene de un punto o
      de una persona (<em>Ich komme von der Arbeit</em>, <em>von meiner Mutter</em>).</p>
      <div class="merke"><strong>zu Hause / nach Hause</strong> es la excepción que todo el
      mundo confunde: <em>zu Hause</em> = en casa (posición), <em>nach Hause</em> = a casa
      (movimiento). No hay artículo en ninguna de las dos.</div>`,
    uebungen: [
      { id: "g8601", satz: "Ich fahre morgen ___ Berlin.", loesung: "nach", tipps: ["nach", "in", "zu"], hinweis: "ciudad", ue: "Mañana voy a Berlín." },
      { id: "g8602", satz: "Wir fahren ___ die Schweiz.", loesung: "in", tipps: ["in", "nach", "zu"], hinweis: "país con artículo", ue: "Vamos a Suiza." },
      { id: "g8603", satz: "Wir gehen heute ___ Arzt. (zu + dem)", loesung: "zum", tipps: ["zum", "zur", "ins"], hinweis: "persona o consulta", ue: "Hoy vamos al médico." },
      { id: "g8604", satz: "Sie kommt ___ der Türkei.", loesung: "aus", tipps: ["aus", "von", "ab"], hinweis: "origen de un país", ue: "Ella viene de Turquía." },
      { id: "g8605", satz: "Ich gehe jetzt ___ Hause.", loesung: "nach", tipps: ["nach", "zu", "in"], hinweis: "movimiento hacia casa", ue: "Ahora me voy a casa." }
    ]
  }
});

LEKTION('de', {
  tag: 87, niveau: "B1", thema: "Expresiones fijas del trabajo",
  vokabeln: [
    { id: "v8701", de: "eine Entscheidung treffen", es: "tomar una decisión", wortart: "expresión", beispiel: "Wir treffen morgen eine Entscheidung.", beispielUe: "Mañana tomamos una decisión." },
    { id: "v8702", de: "in Frage kommen", es: "entrar en consideración", wortart: "expresión", beispiel: "Das kommt nicht in Frage.", beispielUe: "Eso no entra en consideración." },
    { id: "v8703", de: "zur Verfügung stehen", es: "estar a disposición", wortart: "expresión", beispiel: "Ich stehe zur Verfügung.", beispielUe: "Estoy a disposición." },
    { id: "v8704", de: "eine Rolle spielen", es: "jugar un papel", wortart: "expresión", beispiel: "Das spielt keine Rolle.", beispielUe: "Eso no importa." },
    { id: "v8705", de: "Bescheid wissen", es: "estar al tanto", wortart: "expresión", beispiel: "Ich weiß schon Bescheid.", beispielUe: "Ya estoy al tanto." },
    { id: "v8706", de: "Kontakt aufnehmen", es: "ponerse en contacto", wortart: "expresión", beispiel: "Wir nehmen Kontakt auf.", beispielUe: "Nos ponemos en contacto." },
    { id: "v8707", de: "eine Frage stellen", es: "hacer una pregunta", wortart: "expresión", beispiel: "Darf ich eine Frage stellen?", beispielUe: "¿Puedo hacer una pregunta?" },
    { id: "v8708", de: "Rücksicht nehmen", es: "tener consideración", wortart: "expresión", beispiel: "Nimm bitte Rücksicht.", beispielUe: "Ten consideración." },
    { id: "v8709", de: "zur Sprache bringen", es: "sacar a colación", wortart: "expresión", beispiel: "Ich bringe das zur Sprache.", beispielUe: "Lo saco a colación." },
    { id: "v8710", de: "Wert legen auf", es: "dar importancia a", wortart: "expresión", beispiel: "Wir legen Wert auf Pünktlichkeit.", beispielUe: "Damos importancia a la puntualidad." }
  ],
  saetze: [
    { id: "s8701", de: "Wir müssen bald eine Entscheidung treffen.", es: "Pronto tenemos que tomar una decisión." },
    { id: "s8702", de: "Das kommt für mich nicht in Frage.", es: "Eso para mí queda descartado." },
    { id: "s8703", de: "Ich stehe Ihnen gern zur Verfügung.", es: "Con gusto estoy a su disposición." },
    { id: "s8704", de: "Das Geld spielt dabei keine Rolle.", es: "El dinero ahí no importa." },
    { id: "s8705", de: "Darf ich Ihnen eine Frage stellen?", es: "¿Puedo hacerle una pregunta?" }
  ],
  grammatik: {
    id: "g87", titel: "Combinaciones fijas de nombre y verbo",
    erklaerung: `
      <p>En estas expresiones el <strong>sustantivo lleva todo el significado</strong> y el
      verbo está casi vacío. Por eso no se pueden traducir palabra por palabra: hay que
      aprender el bloque entero, verbo incluido.</p>
      <div class="merke">El error más visible del hispanohablante es elegir el verbo por
      analogía: <em>eine Frage <s>machen</s></em> — en alemán una pregunta se
      <strong>pone</strong>: <em>eine Frage <strong>stellen</strong></em>.</div>
      <table>
        <tr><th>Expresión</th><th>Español</th></tr>
        <tr><td>eine Entscheidung <strong>treffen</strong></td><td>tomar una decisión</td></tr>
        <tr><td>eine Frage <strong>stellen</strong></td><td>hacer una pregunta</td></tr>
        <tr><td>einen Termin <strong>vereinbaren</strong></td><td>concertar una cita</td></tr>
        <tr><td>eine Rolle <strong>spielen</strong></td><td>jugar un papel</td></tr>
        <tr><td>Rücksicht <strong>nehmen</strong></td><td>tener consideración</td></tr>
        <tr><td>Bescheid <strong>wissen</strong> / <strong>geben</strong></td><td>estar al tanto / avisar</td></tr>
        <tr><td>in Frage <strong>kommen</strong></td><td>entrar en consideración</td></tr>
        <tr><td>zur Verfügung <strong>stehen</strong> / <strong>stellen</strong></td><td>estar / poner a disposición</td></tr>
        <tr><td>Wert <strong>legen</strong> auf</td><td>dar importancia a</td></tr>
        <tr><td>eine Rede <strong>halten</strong></td><td>dar un discurso</td></tr>
        <tr><td>Abschied <strong>nehmen</strong></td><td>despedirse</td></tr>
        <tr><td>zur Sprache <strong>bringen</strong></td><td>sacar a colación</td></tr>
      </table>
      <p><strong>Dos reglas que las gobiernan:</strong></p>
      <ol>
        <li><strong>El artículo está fijado.</strong> Unas van sin artículo
            (<em>Rücksicht nehmen</em>, <em>Bescheid wissen</em>), otras con indefinido
            (<em>eine Entscheidung treffen</em>), otras con la contracción congelada
            (<em>zur Verfügung</em>, <em>in Frage</em>). No se puede cambiar.</li>
        <li><strong>No admiten adjetivos</strong> dentro del bloque. Para matizar se usa un
            adverbio: <em>Wir treffen <strong>bald</strong> eine Entscheidung</em>, no
            <em>eine schnelle Entscheidung treffen</em> — aunque eso último exista, ya no es
            la expresión fija sino una frase normal.</li>
      </ol>
      <p><strong>Por qué merecen el esfuerzo:</strong> son el registro estándar de correos,
      reuniones y textos oficiales. Un <em>Ich stehe Ihnen gern zur Verfügung</em> al
      final de un correo hace más por tu credibilidad que tres frases correctas pero
      escolares.</p>`,
    uebungen: [
      { id: "g8701", satz: "Wir müssen eine Entscheidung ___.", loesung: "treffen", tipps: ["treffen", "machen", "nehmen"], hinweis: "una decisión se encuentra", ue: "Tenemos que tomar una decisión." },
      { id: "g8702", satz: "Darf ich eine Frage ___?", loesung: "stellen", tipps: ["stellen", "machen", "fragen"], hinweis: "una pregunta se pone", ue: "¿Puedo hacer una pregunta?" },
      { id: "g8703", satz: "Das kommt für mich nicht in ___.", loesung: "Frage", tipps: ["Frage", "Rolle", "Sprache"], hinweis: "queda descartado", ue: "Eso queda descartado." },
      { id: "g8704", satz: "Ich stehe Ihnen gern zur ___.", loesung: "Verfügung", tipps: ["Verfügung", "Sprache", "Seite"], hinweis: "a su disposición", ue: "Estoy a su disposición." },
      { id: "g8705", satz: "Das Geld spielt dabei keine ___.", loesung: "Rolle", tipps: ["Rolle", "Frage", "Sache"], hinweis: "no importa", ue: "El dinero ahí no importa." }
    ]
  }
});

LEKTION('de', {
  tag: 88, niveau: "B1", thema: "Escribir un texto",
  vokabeln: [
    { id: "v8801", de: "die Einleitung",  es: "la introducción", wortart: "sustantivo", beispiel: "Die Einleitung ist kurz.", beispielUe: "La introducción es breve." },
    { id: "v8802", de: "der Hauptteil",   es: "la parte central", wortart: "sustantivo", beispiel: "Im Hauptteil erkläre ich alles.", beispielUe: "En la parte central lo explico todo." },
    { id: "v8803", de: "der Schluss",     es: "la conclusión",  wortart: "sustantivo", beispiel: "Der Schluss fehlt noch.", beispielUe: "Falta la conclusión." },
    { id: "v8804", de: "der Absatz",      es: "el párrafo",     wortart: "sustantivo", beispiel: "Mach hier einen neuen Absatz.", beispielUe: "Haz aquí un párrafo nuevo." },
    { id: "v8805", de: "zunächst",        es: "en primer lugar", wortart: "adverbio", beispiel: "Zunächst ein Beispiel.", beispielUe: "En primer lugar un ejemplo." },
    { id: "v8806", de: "schließlich",     es: "finalmente",     wortart: "adverbio", beispiel: "Schließlich kam die Antwort.", beispielUe: "Finalmente llegó la respuesta." },
    { id: "v8807", de: "zusammenfassen",  es: "resumir",        wortart: "verbo separable", beispiel: "Ich fasse kurz zusammen.", beispielUe: "Resumo brevemente." },
    { id: "v8808", de: "gliedern",        es: "estructurar",    wortart: "verbo", beispiel: "Der Text ist gut gegliedert.", beispielUe: "El texto está bien estructurado." },
    { id: "v8809", de: "das Fazit",       es: "la conclusión final", wortart: "sustantivo", beispiel: "Mein Fazit ist positiv.", beispielUe: "Mi conclusión es positiva." },
    { id: "v8810", de: "verweisen auf",   es: "remitir a",      wortart: "verbo con preposición", beispiel: "Ich verweise auf mein Schreiben.", beispielUe: "Remito a mi escrito." }
  ],
  saetze: [
    { id: "s8801", de: "Zunächst möchte ich mich kurz vorstellen.", es: "En primer lugar quisiera presentarme brevemente." },
    { id: "s8802", de: "Außerdem habe ich noch eine Frage.", es: "Además tengo otra pregunta." },
    { id: "s8803", de: "Aus diesem Grund schreibe ich Ihnen.", es: "Por esta razón le escribo." },
    { id: "s8804", de: "Zusammenfassend lässt sich sagen, dass es funktioniert.", es: "Resumiendo, se puede decir que funciona." },
    { id: "s8805", de: "Abschließend bedanke ich mich für Ihre Zeit.", es: "Para terminar, le agradezco su tiempo." }
  ],
  grammatik: {
    id: "g88", titel: "Estructurar un texto",
    erklaerung: `
      <p>Un texto B1 no se juzga solo por la gramática, sino por si el lector puede
      seguirlo. Para eso hay un inventario cerrado de conectores de texto — y todos
      funcionan igual: van en la <strong>posición 1</strong>, así que
      <strong>el verbo va detrás</strong>.</p>
      <table>
        <tr><th>Función</th><th>Conectores</th></tr>
        <tr><td>empezar / ordenar</td><td>zunächst, zuerst, dann, danach, anschließend, schließlich</td></tr>
        <tr><td>añadir</td><td>außerdem, zudem, darüber hinaus, ebenfalls, auch</td></tr>
        <tr><td>contrastar</td><td>jedoch, hingegen, dagegen, allerdings, im Gegensatz dazu</td></tr>
        <tr><td>justificar</td><td>aus diesem Grund, deshalb, nämlich, denn</td></tr>
        <tr><td>ejemplificar</td><td>zum Beispiel, etwa, so, beispielsweise</td></tr>
        <tr><td>cerrar</td><td>insgesamt, zusammenfassend, abschließend, alles in allem</td></tr>
      </table>
      <div class="merke">Comprueba siempre lo mismo:
      <em>Außerdem <strong>habe ich</strong> eine Frage</em> — correcto.
      <em>Außerdem <strong>ich habe</strong>…</em> — incorrecto. La casilla 1 ya está
      ocupada por el conector.</div>
      <p><strong>La estructura de una carta o correo formal</strong>, que es lo que más se
      pide en un examen B1:</p>
      <table>
        <tr><td><strong>Anrede</strong></td><td>Sehr geehrte Damen und Herren, / Sehr geehrter Herr Meier,</td></tr>
        <tr><td><strong>Einleitung</strong></td><td>ich schreibe Ihnen, weil… / mit Interesse habe ich gelesen…</td></tr>
        <tr><td><strong>Hauptteil</strong></td><td>un párrafo por idea, unidos con los conectores de arriba</td></tr>
        <tr><td><strong>Schluss</strong></td><td>Über eine Antwort würde ich mich freuen.</td></tr>
        <tr><td><strong>Gruß</strong></td><td>Mit freundlichen Grüßen (formal) / Viele Grüße (informal)</td></tr>
      </table>
      <div class="merke"><strong>Detalle que cuesta puntos:</strong> tras la coma del saludo
      la carta sigue en <strong>minúscula</strong>:<br>
      <em>Sehr geehrte Damen und Herren,<br><strong>ich</strong> schreibe Ihnen wegen…</em><br>
      Y ni <em>Mit freundlichen Grüßen</em> ni <em>Viele Grüße</em> llevan coma al final.</div>
      <p><strong>Un consejo de estilo:</strong> alterna frases largas y cortas y no empieces
      tres frases seguidas con <em>ich</em>. Poner otro elemento en la posición 1
      (<em>Deshalb…</em>, <em>Im letzten Jahr…</em>, <em>Für mich…</em>) hace que el texto
      suene alemán en lugar de traducido.</p>`,
    uebungen: [
      { id: "g8801", satz: "___ möchte ich mich vorstellen. (en primer lugar)", loesung: "Zunächst", tipps: ["Zunächst", "Schließlich", "Außerdem"], hinweis: "empieza el texto", ue: "En primer lugar quisiera presentarme." },
      { id: "g8802", satz: "___ habe ich noch eine Frage. (además)", loesung: "Außerdem", tipps: ["Außerdem", "Zunächst", "Jedoch"], hinweis: "añadir información", ue: "Además tengo otra pregunta." },
      { id: "g8803", satz: "Aus diesem ___ schreibe ich Ihnen.", loesung: "Grund", tipps: ["Grund", "Fall", "Zweck"], hinweis: "por esta razón", ue: "Por esta razón le escribo." },
      { id: "g8804", satz: "___ lässt sich sagen, dass es klappt. (resumiendo)", loesung: "Zusammenfassend", tipps: ["Zusammenfassend", "Zunächst", "Außerdem"], hinweis: "cierre del texto", ue: "Resumiendo, se puede decir que funciona." },
      { id: "g8805", satz: "Sehr geehrte Damen und Herren, ___ schreibe Ihnen wegen des Kurses.", loesung: "ich", tipps: ["ich", "Ich", "wir"], hinweis: "tras la coma sigue en minúscula", ue: "Estimados señores, les escribo por el curso." }
    ]
  }
});

LEKTION('de', {
  tag: 89, niveau: "B1", thema: "Expresiones hechas",
  vokabeln: [
    { id: "v8901", de: "die Nase voll haben", es: "estar harto", wortart: "expresión", beispiel: "Ich habe die Nase voll.", beispielUe: "Estoy harto." },
    { id: "v8902", de: "die Daumen drücken", es: "cruzar los dedos", wortart: "expresión", beispiel: "Ich drücke dir die Daumen.", beispielUe: "Te cruzo los dedos." },
    { id: "v8903", de: "unter vier Augen",  es: "a solas",       wortart: "expresión", beispiel: "Reden wir unter vier Augen.", beispielUe: "Hablemos a solas." },
    { id: "v8904", de: "auf dem Laufenden sein", es: "estar al día", wortart: "expresión", beispiel: "Ich bin auf dem Laufenden.", beispielUe: "Estoy al día." },
    { id: "v8905", de: "ins Wasser fallen", es: "irse al agua",  wortart: "expresión", beispiel: "Das Fest ist ins Wasser gefallen.", beispielUe: "La fiesta se fue al agua." },
    { id: "v8906", de: "den Faden verlieren", es: "perder el hilo", wortart: "expresión", beispiel: "Ich habe den Faden verloren.", beispielUe: "Perdí el hilo." },
    { id: "v8907", de: "aus dem Häuschen sein", es: "estar entusiasmado", wortart: "expresión", beispiel: "Sie war ganz aus dem Häuschen.", beispielUe: "Estaba entusiasmadísima." },
    { id: "v8908", de: "die Katze im Sack kaufen", es: "comprar a ciegas", wortart: "expresión", beispiel: "Ich kaufe keine Katze im Sack.", beispielUe: "No compro a ciegas." },
    { id: "v8909", de: "über den Berg sein", es: "haber pasado lo peor", wortart: "expresión", beispiel: "Wir sind über den Berg.", beispielUe: "Ya pasó lo peor." },
    { id: "v8910", de: "Schwein haben",     es: "tener suerte",  wortart: "expresión", beispiel: "Da hast du Schwein gehabt.", beispielUe: "Ahí tuviste suerte." }
  ],
  saetze: [
    { id: "s8901", de: "Ich habe die Nase voll von diesem Chaos.", es: "Estoy harto de este caos." },
    { id: "s8902", de: "Ich drücke dir für morgen die Daumen.", es: "Te cruzo los dedos para mañana." },
    { id: "s8903", de: "Können wir das unter vier Augen besprechen?", es: "¿Podemos hablarlo a solas?" },
    { id: "s8904", de: "Das Fest ist leider ins Wasser gefallen.", es: "La fiesta lamentablemente se fue al agua." },
    { id: "s8905", de: "Da hast du aber Schwein gehabt!", es: "¡Pues sí que tuviste suerte!" }
  ],
  grammatik: {
    id: "g89", titel: "Redewendungen — cuándo y cómo usarlas",
    erklaerung: `
      <p>Las expresiones hechas son el nivel donde un idioma deja de sonar a manual. Tienen
      tres propiedades que conviene tener claras antes de usarlas.</p>
      <ol>
        <li><strong>No se traducen palabra por palabra.</strong> <em>Ich drücke dir die
            Daumen</em> significa lo mismo que <em>te cruzo los dedos</em>, pero los
            alemanes <em>aprietan los pulgares</em>. Traducir la imagen española al alemán
            casi siempre falla.</li>
        <li><strong>Están congeladas.</strong> No se cambia el artículo, ni el número, ni el
            verbo: <em>die Nase voll haben</em>, nunca <em>eine Nase voll haben</em>.</li>
        <li><strong>Son informales.</strong> Valen entre amigos y en el trabajo relajado; en
            una carta oficial, no.</li>
      </ol>
      <table>
        <tr><th>Alemán</th><th>Literalmente</th><th>Significa</th></tr>
        <tr><td>die Nase voll haben</td><td>tener la nariz llena</td><td>estar harto</td></tr>
        <tr><td>jemandem die Daumen drücken</td><td>apretarle los pulgares</td><td>desear suerte</td></tr>
        <tr><td>unter vier Augen</td><td>bajo cuatro ojos</td><td>a solas</td></tr>
        <tr><td>ins Wasser fallen</td><td>caer al agua</td><td>cancelarse</td></tr>
        <tr><td>den Faden verlieren</td><td>perder el hilo</td><td>perder el hilo</td></tr>
        <tr><td>Schwein haben</td><td>tener cerdo</td><td>tener suerte</td></tr>
        <tr><td>die Katze im Sack kaufen</td><td>comprar el gato en el saco</td><td>comprar sin ver</td></tr>
        <tr><td>über den Berg sein</td><td>estar sobre la montaña</td><td>haber pasado lo peor</td></tr>
        <tr><td>Bahnhof verstehen</td><td>entender estación</td><td>no entender nada</td></tr>
        <tr><td>Daumen drehen</td><td>girar los pulgares</td><td>estar sin hacer nada</td></tr>
        <tr><td>ins Fettnäpfchen treten</td><td>pisar el cuenco de grasa</td><td>meter la pata</td></tr>
        <tr><td>auf dem Laufenden sein</td><td>estar sobre lo que corre</td><td>estar al día</td></tr>
      </table>
      <div class="merke"><strong>Consejo práctico:</strong> empieza por
      <em>entenderlas</em>. Producirlas es más arriesgado — una expresión mal colocada
      suena rara, y el hueco se tapa perfectamente con lenguaje normal:
      <em>Ich habe keine Lust mehr</em> dice lo mismo que <em>Ich habe die Nase voll</em>
      sin ningún riesgo.</div>
      <p>Cuando oigas una que no conozcas, no intentes descifrar las palabras sueltas:
      pregunta directamente <em>Was bedeutet das?</em> Ni los propios alemanes saben de
      dónde viene el cerdo de <em>Schwein haben</em>.</p>`,
    uebungen: [
      { id: "g8901", satz: "Ich habe die Nase ___.", loesung: "voll", tipps: ["voll", "leer", "satt"], hinweis: "estar harto", ue: "Estoy harto." },
      { id: "g8902", satz: "Ich drücke dir die ___.", loesung: "Daumen", tipps: ["Daumen", "Finger", "Hand"], hinweis: "desear suerte", ue: "Te deseo suerte." },
      { id: "g8903", satz: "Reden wir unter vier ___.", loesung: "Augen", tipps: ["Augen", "Ohren", "Wänden"], hinweis: "a solas", ue: "Hablemos a solas." },
      { id: "g8904", satz: "Das Fest ist ins ___ gefallen.", loesung: "Wasser", tipps: ["Wasser", "Meer", "Loch"], hinweis: "se canceló", ue: "La fiesta se canceló." },
      { id: "g8905", satz: "Da hast du aber ___ gehabt! (suerte)", loesung: "Schwein", tipps: ["Schwein", "Glück", "Pech"], hinweis: "la expresión con animal", ue: "¡Pues sí que tuviste suerte!" }
    ]
  }
});

LEKTION('de', {
  tag: 90, niveau: "B1", thema: "Cierre del B1",
  vokabeln: [
    { id: "v9001", de: "die Selbstständigkeit", es: "la autonomía", wortart: "sustantivo", beispiel: "Du gewinnst an Selbstständigkeit.", beispielUe: "Ganas autonomía." },
    { id: "v9002", de: "sich ausdrücken", es: "expresarse",     wortart: "verbo reflexivo", beispiel: "Ich kann mich gut ausdrücken.", beispielUe: "Puedo expresarme bien." },
    { id: "v9003", de: "mühelos",         es: "sin esfuerzo",   wortart: "adverbio", beispiel: "Das geht fast mühelos.", beispielUe: "Eso ya va casi sin esfuerzo." },
    { id: "v9004", de: "der Wortschatz",  es: "el vocabulario", wortart: "sustantivo", beispiel: "Mein Wortschatz wächst.", beispielUe: "Mi vocabulario crece." },
    { id: "v9005", de: "die Feinheit",    es: "el matiz",       wortart: "sustantivo", beispiel: "Jetzt kommen die Feinheiten.", beispielUe: "Ahora vienen los matices." },
    { id: "v9006", de: "souverän",        es: "con soltura",    wortart: "adjetivo", beispiel: "Du wirkst souverän.", beispielUe: "Transmites soltura." },
    { id: "v9007", de: "die Herausforderung", es: "el desafío", wortart: "sustantivo", beispiel: "Das war eine Herausforderung.", beispielUe: "Eso fue un desafío." },
    { id: "v9008", de: "meistern",        es: "superar con éxito", wortart: "verbo", beispiel: "Du hast das gemeistert.", beispielUe: "Lo has superado." },
    { id: "v9009", de: "stolz",           es: "orgulloso",      wortart: "adjetivo", beispiel: "Sei stolz auf dich.", beispielUe: "Siéntete orgulloso." },
    { id: "v9010", de: "weiterkommen",    es: "avanzar",        wortart: "verbo separable", beispiel: "So kommst du weiter.", beispielUe: "Así avanzas." }
  ],
  saetze: [
    { id: "s9001", de: "Ich kann mich inzwischen gut ausdrücken.", es: "Mientras tanto ya puedo expresarme bien." },
    { id: "s9002", de: "Je mehr ich lese, desto sicherer werde ich.", es: "Cuanto más leo, más seguro me vuelvo." },
    { id: "s9003", de: "Ich verstehe fast alles, was ich höre.", es: "Entiendo casi todo lo que oigo." },
    { id: "s9004", de: "Obwohl es lange gedauert hat, hat es sich gelohnt.", es: "Aunque duró mucho, valió la pena." },
    { id: "s9005", de: "Ich hätte nicht gedacht, dass ich so weit komme.", es: "No habría pensado que llegaría tan lejos." }
  ],
  grammatik: {
    id: "g90", titel: "B1 completo — dónde estás ahora",
    erklaerung: `
      <p>Noventa días, 900 palabras, 90 temas de gramática. Esto es lo que has añadido en
      los últimos treinta días.</p>
      <table>
        <tr><th>Área</th><th>Contenido del B1</th></tr>
        <tr><td>Relativas</td><td>dativo, genitivo (dessen/deren), was, wo, wer</td></tr>
        <tr><td>Konjunktiv II</td><td>cortesía, deseos irreales, pasado con hätte/wäre + doble infinitivo</td></tr>
        <tr><td>Pasiva</td><td>todos los tiempos, con modales, impersonal, y sus cuatro alternativas</td></tr>
        <tr><td>Casos</td><td>genitivo completo con sus preposiciones, n-Deklination</td></tr>
        <tr><td>Participios</td><td>Partizip I y II como adjetivo</td></tr>
        <tr><td>Orden</td><td>TeKaMoLo, posición de nicht, tres clases de conectores</td></tr>
        <tr><td>Estructuras</td><td>da-/wo-, verbos con preposición, um/ohne/statt zu, subordinadas temporales</td></tr>
        <tr><td>Matices</td><td>modales subjetivos, Futur I y II, Modalpartikeln</td></tr>
        <tr><td>Estilo</td><td>nominalización, formación de palabras, conectores de texto, expresiones fijas</td></tr>
      </table>
      <div class="merke"><strong>Lo que puedes hacer</strong> — descripción oficial del B1:<br>
      entender las ideas principales de textos claros sobre temas conocidos del trabajo,
      la escuela y el ocio; desenvolverte en casi todas las situaciones de un viaje;
      producir textos sencillos y coherentes; describir experiencias, deseos y planes, y
      justificar brevemente tus opiniones.</div>
      <p><strong>El B1 es el nivel de la independencia.</strong> Ya no dependes de que la
      otra persona hable despacio. Puedes vivir, trabajar y discutir en alemán aunque
      cometas errores — y a partir de aquí el idioma se aprende sobre todo
      <em>usándolo</em>: leyendo prensa, viendo series, escribiendo correos de verdad.</p>
      <div class="merke"><strong>Lo que viene en el B2:</strong> Konjunktiv I y estilo
      indirecto de la prensa, participios extendidos, estilo nominal, construcciones
      concesivas, Funktionsverbgefüge, y el trabajo fino: argumentar, matizar, escribir
      con registro. Menos reglas nuevas, mucha más precisión.</div>
      <p style="text-align:center;margin-top:1.3rem"><strong>¡Enhorabuena! Ya tienes el B1.
      Tres cuartas partes del camino.</strong></p>`,
    uebungen: [
      { id: "g9001", satz: "Der Kollege, ___ ich geholfen habe, ist krank.", loesung: "dem", tipps: ["dem", "den", "dessen"], hinweis: "relativa en dativo", ue: "El colega al que ayudé está enfermo." },
      { id: "g9002", satz: "Die Frist muss unbedingt eingehalten ___.", loesung: "werden", tipps: ["werden", "worden", "wird"], hinweis: "pasiva con modal", ue: "El plazo tiene que cumplirse." },
      { id: "g9003", satz: "___ mehr ich lese, desto sicherer werde ich.", loesung: "Je", tipps: ["Je", "Desto", "So"], hinweis: "cuanto más", ue: "Cuanto más leo, más seguro me vuelvo." },
      { id: "g9004", satz: "Ich hätte nicht gedacht, dass ich so weit ___. (kommen)", loesung: "komme", tipps: ["komme", "kommen", "gekommen"], hinweis: "subordinada, primera persona", ue: "No habría pensado que llegaría tan lejos." },
      { id: "g9005", satz: "Er ___ sehr gut Deutsch sprechen. (dicen que)", loesung: "soll", tipps: ["soll", "will", "muss"], hinweis: "modal subjetivo: rumor", ue: "Dicen que habla muy bien alemán." }
    ]
  }
});
