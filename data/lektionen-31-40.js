/* Tag 31–40 · Übergang A2 → B1 · Condicional, Plusquamperfekt, Passiv */

LEKTIONEN.push({
  tag: 31, niveau: "A2", thema: "Höflich bitten",
  vokabeln: [
    { id: "v3101", es: "el ruego",       de: "die Bitte",        wortart: "Substantiv", beispiel: "Tengo un ruego.", beispielDe: "Ich habe eine Bitte." },
    { id: "v3102", es: "amablemente",    de: "freundlicherweise", wortart: "Adverb", beispiel: "Me ayudó amablemente.", beispielDe: "Er half mir freundlicherweise." },
    { id: "v3103", es: "importar",       de: "etwas ausmachen",  wortart: "Verb", beispiel: "¿Le importaría esperar?", beispielDe: "Würde es Ihnen etwas ausmachen zu warten?" },
    { id: "v3104", es: "el permiso",     de: "die Erlaubnis",    wortart: "Substantiv", beispiel: "¿Me da permiso?", beispielDe: "Erlauben Sie?" },
    { id: "v3105", es: "atender",        de: "bedienen / betreuen", wortart: "Verb", beispiel: "Enseguida le atiendo.", beispielDe: "Ich bediene Sie sofort." },
    { id: "v3106", es: "encantado",      de: "erfreut",          wortart: "Adjektiv", beispiel: "Encantado de ayudarle.", beispielDe: "Gerne helfe ich Ihnen." },
    { id: "v3107", es: "disculpar",      de: "entschuldigen",    wortart: "Verb", beispiel: "Disculpe la molestia.", beispielDe: "Entschuldigen Sie die Störung." },
    { id: "v3108", es: "el trato",       de: "der Umgang",       wortart: "Substantiv", beispiel: "El trato fue muy amable.", beispielDe: "Der Umgang war sehr freundlich." },
    { id: "v3109", es: "agradecido",     de: "dankbar",          wortart: "Adjektiv", beispiel: "Estoy muy agradecido.", beispielDe: "Ich bin sehr dankbar." },
    { id: "v3110", es: "la molestia",    de: "die Mühe",         wortart: "Substantiv", beispiel: "No es ninguna molestia.", beispielDe: "Das ist keine Mühe." }
  ],
  saetze: [
    { id: "s3101", es: "¿Podrías ayudarme un momento?",         de: "Könntest du mir kurz helfen?" },
    { id: "s3102", es: "Me gustaría reservar una mesa.",        de: "Ich würde gern einen Tisch reservieren." },
    { id: "s3103", es: "¿Le importaría cerrar la ventana?",     de: "Würde es Ihnen etwas ausmachen, das Fenster zu schließen?" },
    { id: "s3104", es: "Yo que tú, hablaría con el jefe.",      de: "An deiner Stelle würde ich mit dem Chef sprechen." },
    { id: "s3105", es: "Deberías descansar más.",               de: "Du solltest dich mehr ausruhen." }
  ],
  grammatik: {
    id: "g31", titel: "Condicional simple — der würde-Fall",
    erklaerung: `
      <p>Das Condicional wird genauso gebaut wie das Futuro (Tag 22): Endungen an den
      ganzen Infinitiv. Nur die Endungen sind andere — es sind die des Imperfecto.</p>
      <table>
        <tr><th>Person</th><th>Endung</th><th>hablar</th><th>comer</th></tr>
        <tr><td>yo</td><td>-ía</td><td>hablaría</td><td>comería</td></tr>
        <tr><td>tú</td><td>-ías</td><td>hablarías</td><td>comerías</td></tr>
        <tr><td>él/ella</td><td>-ía</td><td>hablaría</td><td>comería</td></tr>
        <tr><td>nosotros</td><td>-íamos</td><td>hablaríamos</td><td>comeríamos</td></tr>
        <tr><td>vosotros</td><td>-íais</td><td>hablaríais</td><td>comeríais</td></tr>
        <tr><td>ellos</td><td>-ían</td><td>hablarían</td><td>comerían</td></tr>
      </table>
      <div class="merke"><strong>Das Beste daran:</strong> Es sind <strong>dieselben</strong>
      unregelmäßigen Stämme wie beim Futuro. Wer <em>tendré</em> kann, kann auch
      <em>tendría</em>.<br>
      <em>tendr-, pondr-, vendr-, saldr-, habr-, podr-, sabr-, querr-, har-, dir-</em></div>
      <p><strong>Wofür man es braucht:</strong></p>
      <table>
        <tr><th>Zweck</th><th>Beispiel</th></tr>
        <tr><td>höfliche Bitte</td><td><em>¿Podrías ayudarme?</em> (Könntest du mir helfen?)</td></tr>
        <tr><td>höflicher Wunsch</td><td><em>Me gustaría un café.</em> (Ich hätte gern einen Kaffee.)</td></tr>
        <tr><td>Rat</td><td><em>Yo que tú, no iría.</em> (An deiner Stelle würde ich nicht gehen.)</td></tr>
        <tr><td>Vorschlag</td><td><em>Deberías descansar.</em> (Du solltest dich ausruhen.)</td></tr>
        <tr><td>Vermutung über früher</td><td><em>Serían las diez.</em> (Es war wohl zehn Uhr.)</td></tr>
      </table>
      <div class="merke"><strong>Merke den Unterschied:</strong><br>
      <em>Quiero un café.</em> = Ich will einen Kaffee. (direkt)<br>
      <em>Querría un café.</em> / <em>Me gustaría un café.</em> = Ich hätte gern … (höflich)<br>
      Im Restaurant nimmt man immer die zweite Variante.</div>`,
    uebungen: [
      { id: "g3101", satz: "¿___ (poder, tú) ayudarme?", loesung: "Podrías", tipps: ["Podrías", "Puedes", "Podrás"], hinweis: "Stamm podr- + ías", de: "Könntest du mir helfen?" },
      { id: "g3102", satz: "Me ___ (gustar) un café, por favor.", loesung: "gustaría", tipps: ["gustaría", "gusta", "gustará"], hinweis: "höflicher Wunsch", de: "Ich hätte gern einen Kaffee." },
      { id: "g3103", satz: "Yo que tú, ___ (hablar) con él.", loesung: "hablaría", tipps: ["hablaría", "hablaré", "hablo"], hinweis: "Rat", de: "An deiner Stelle würde ich mit ihm sprechen." },
      { id: "g3104", satz: "___ (deber, tú) descansar más.", loesung: "Deberías", tipps: ["Deberías", "Debes", "Deberás"], hinweis: "du solltest", de: "Du solltest dich mehr ausruhen." },
      { id: "g3105", satz: "Nosotros ___ (tener) que salir antes.", loesung: "tendríamos", tipps: ["tendríamos", "teneríamos", "tendremos"], hinweis: "Stamm tendr-", de: "Wir müssten früher losgehen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 32, niveau: "A2", thema: "Was vorher geschehen war",
  vokabeln: [
    { id: "v3201", es: "previamente",    de: "zuvor",            wortart: "Adverb", beispiel: "Ya lo habíamos hablado previamente.", beispielDe: "Wir hatten vorher schon darüber gesprochen." },
    { id: "v3202", es: "avisar",         de: "Bescheid geben",   wortart: "Verb", beispiel: "Nadie me había avisado.", beispielDe: "Niemand hatte mir Bescheid gegeben." },
    { id: "v3203", es: "el aviso",       de: "der Hinweis",      wortart: "Substantiv", beispiel: "No recibí ningún aviso.", beispielDe: "Ich erhielt keinen Hinweis." },
    { id: "v3204", es: "darse cuenta",   de: "bemerken",         wortart: "Verb", beispiel: "No me había dado cuenta.", beispielDe: "Ich hatte es nicht bemerkt." },
    { id: "v3205", es: "antes de que",   de: "bevor",            wortart: "Konjunktion", beispiel: "Salí antes de que llegara.", beispielDe: "Ich ging, bevor er ankam." },
    { id: "v3206", es: "el retraso",     de: "die Verzögerung",  wortart: "Substantiv", beispiel: "Hubo un retraso importante.", beispielDe: "Es gab eine erhebliche Verzögerung." },
    { id: "v3207", es: "olvidarse",      de: "vergessen",        wortart: "Verb", beispiel: "Se me había olvidado.", beispielDe: "Ich hatte es vergessen." },
    { id: "v3208", es: "cumplir",        de: "erfüllen",         wortart: "Verb", beispiel: "Ya había cumplido su promesa.", beispielDe: "Er hatte sein Versprechen schon erfüllt." },
    { id: "v3209", es: "mientras tanto", de: "in der Zwischenzeit", wortart: "Adverb", beispiel: "Mientras tanto, preparé la cena.", beispielDe: "In der Zwischenzeit machte ich das Abendessen." },
    { id: "v3210", es: "por adelantado", de: "im Voraus",        wortart: "Adverb", beispiel: "Hay que pagar por adelantado.", beispielDe: "Man muss im Voraus zahlen." }
  ],
  saetze: [
    { id: "s3201", es: "Cuando llegué, ella ya se había ido.",  de: "Als ich ankam, war sie schon gegangen." },
    { id: "s3202", es: "No sabía que habías estado en México.", de: "Ich wusste nicht, dass du in Mexiko gewesen warst." },
    { id: "s3203", es: "Nunca había probado algo así.",         de: "Ich hatte nie zuvor so etwas probiert." },
    { id: "s3204", es: "Habíamos terminado antes de las seis.", de: "Wir waren vor sechs fertig gewesen." },
    { id: "s3205", es: "Me dijo que había perdido las llaves.", de: "Er sagte mir, dass er die Schlüssel verloren hatte." }
  ],
  grammatik: {
    id: "g32", titel: "Pluscuamperfecto — die Vorvergangenheit",
    erklaerung: `
      <p>Diese Zeit entspricht genau dem deutschen Plusquamperfekt („ich hatte gemacht“).
      Sie erzählt, was <strong>vor</strong> einem anderen Ereignis in der Vergangenheit
      geschehen war.</p>
      <div class="merke"><strong>Bauplan:</strong> <em>haber</em> im Imperfecto + Partizip<br>
      <em>había, habías, había, habíamos, habíais, habían</em> + <em>hablado / comido / vivido</em></div>
      <table>
        <tr><th>Person</th><th>Form</th></tr>
        <tr><td>yo</td><td>había hablado</td></tr>
        <tr><td>tú</td><td>habías hablado</td></tr>
        <tr><td>él/ella</td><td>había hablado</td></tr>
        <tr><td>nosotros</td><td>habíamos hablado</td></tr>
        <tr><td>vosotros</td><td>habíais hablado</td></tr>
        <tr><td>ellos</td><td>habían hablado</td></tr>
      </table>
      <p>Die Partizipien sind dieselben wie beim Perfecto (Tag 15) — auch die
      unregelmäßigen: <em>hecho, visto, dicho, escrito, puesto, vuelto, abierto, roto</em>.</p>
      <p><strong>Die Zeitachse:</strong></p>
      <ul>
        <li><em>Cuando <strong>llegué</strong> (Indefinido),
            ella ya <strong>se había ido</strong> (Pluscuamperfecto).</em></li>
        <li>Sie ging <strong>zuerst</strong> weg, <strong>danach</strong> kam ich an.</li>
      </ul>
      <div class="merke"><strong>Typische Begleiter:</strong> <em>ya</em> (schon),
      <em>todavía no</em> (noch nicht), <em>nunca</em> (nie zuvor),
      <em>antes</em> (vorher), <em>cuando</em>.</div>
      <p>Sehr häufig auch in der indirekten Rede: <em>Me dijo que <strong>había
      perdido</strong> las llaves.</em> — Er sagte mir, dass er die Schlüssel verloren hatte.</p>`,
    uebungen: [
      { id: "g3201", satz: "Cuando llegué, ella ya se ___ ido.", loesung: "había", tipps: ["había", "ha", "habría"], hinweis: "ella → ?", de: "Als ich ankam, war sie schon gegangen." },
      { id: "g3202", satz: "Nunca ___ (haber, yo) visto algo así.", loesung: "había", tipps: ["había", "he", "habría"], hinweis: "yo → ?", de: "Ich hatte nie so etwas gesehen." },
      { id: "g3203", satz: "Ellos ___ terminado antes de las seis.", loesung: "habían", tipps: ["habían", "habrán", "han"], hinweis: "ellos → ?", de: "Sie waren vor sechs fertig gewesen." },
      { id: "g3204", satz: "Me dijo que había ___ (perder) las llaves.", loesung: "perdido", tipps: ["perdido", "perdiendo", "perdió"], hinweis: "Partizip", de: "Er sagte, er habe die Schlüssel verloren." },
      { id: "g3205", satz: "No sabía que ___ (haber, tú) estado allí.", loesung: "habías", tipps: ["habías", "has", "habrías"], hinweis: "tú → ?", de: "Ich wusste nicht, dass du dort gewesen warst." }
    ]
  }
});

LEKTIONEN.push({
  tag: 33, niveau: "A2", thema: "Nachrichten und Berichte",
  vokabeln: [
    { id: "v3301", es: "la noticia",     de: "die Nachricht",    wortart: "Substantiv", beispiel: "La noticia fue publicada ayer.", beispielDe: "Die Nachricht wurde gestern veröffentlicht." },
    { id: "v3302", es: "el periodista",  de: "der Journalist",   wortart: "Substantiv", beispiel: "El periodista escribió el artículo.", beispielDe: "Der Journalist schrieb den Artikel." },
    { id: "v3303", es: "publicar",       de: "veröffentlichen",  wortart: "Verb", beispiel: "El libro fue publicado en 2020.", beispielDe: "Das Buch wurde 2020 veröffentlicht." },
    { id: "v3304", es: "el titular",     de: "die Schlagzeile",  wortart: "Substantiv", beispiel: "El titular es muy llamativo.", beispielDe: "Die Schlagzeile ist sehr auffällig." },
    { id: "v3305", es: "la fuente",      de: "die Quelle",       wortart: "Substantiv", beispiel: "Según fuentes oficiales…", beispielDe: "Laut offiziellen Quellen…" },
    { id: "v3306", es: "anunciar",       de: "ankündigen",       wortart: "Verb", beispiel: "Anunciaron nuevas medidas.", beispielDe: "Sie kündigten neue Maßnahmen an." },
    { id: "v3307", es: "la medida",      de: "die Maßnahme",     wortart: "Substantiv", beispiel: "Las medidas fueron aprobadas.", beispielDe: "Die Maßnahmen wurden genehmigt." },
    { id: "v3308", es: "el acuerdo",     de: "das Abkommen",     wortart: "Substantiv", beispiel: "Se firmó un acuerdo.", beispielDe: "Ein Abkommen wurde unterzeichnet." },
    { id: "v3309", es: "destruir",       de: "zerstören",        wortart: "Verb", beispiel: "El edificio fue destruido.", beispielDe: "Das Gebäude wurde zerstört." },
    { id: "v3310", es: "el suceso",      de: "das Geschehen",    wortart: "Substantiv", beispiel: "El suceso ocurrió de noche.", beispielDe: "Das Geschehen ereignete sich nachts." }
  ],
  saetze: [
    { id: "s3301", es: "El libro fue escrito por Cervantes.",   de: "Das Buch wurde von Cervantes geschrieben." },
    { id: "s3302", es: "La casa fue construida en 1920.",       de: "Das Haus wurde 1920 gebaut." },
    { id: "s3303", es: "Se firmó el acuerdo esta mañana.",      de: "Das Abkommen wurde heute Morgen unterzeichnet." },
    { id: "s3304", es: "Las tiendas están cerradas los domingos.", de: "Die Läden sind sonntags geschlossen." },
    { id: "s3305", es: "El problema fue resuelto rápidamente.", de: "Das Problem wurde schnell gelöst." }
  ],
  grammatik: {
    id: "g33", titel: "Das Passiv — drei Wege",
    erklaerung: `
      <p>Das Spanische hat ein echtes Passiv, benutzt es aber viel seltener als das Deutsche.
      Es gibt drei Möglichkeiten — und die dritte ist im Alltag die häufigste.</p>
      <p><strong>1. Vorgangspassiv mit <em>ser</em></strong> — förmlich, typisch für Nachrichten:</p>
      <div class="merke"><em>ser</em> + Partizip (<strong>passt sich an!</strong>) + <em>por</em> + Urheber<br>
      <em>La casa <strong>fue construida</strong> por mi abuelo.</em><br>
      <em>Los libros <strong>fueron escritos</strong> en 1920.</em></div>
      <p>Das Partizip verhält sich hier wie ein Adjektiv: <em>-o, -a, -os, -as</em>.</p>
      <p><strong>2. Zustandspassiv mit <em>estar</em></strong> — beschreibt das Ergebnis,
      nicht den Vorgang:</p>
      <table>
        <tr><th>ser = der Vorgang</th><th>estar = das Ergebnis</th></tr>
        <tr><td><em>La puerta fue cerrada.</em><br>(Sie wurde geschlossen — jemand tat es)</td>
            <td><em>La puerta está cerrada.</em><br>(Sie ist zu — das ist der Zustand)</td></tr>
      </table>
      <p><strong>3. Das <em>se</em>-Passiv</strong> — im gesprochenen Spanisch das gängigste
      (siehe auch Tag 29):</p>
      <ul>
        <li><em><strong>Se firmó</strong> el acuerdo.</em> (Das Abkommen wurde unterzeichnet.)</li>
        <li><em><strong>Se venden</strong> pisos.</em> (Wohnungen werden verkauft.)</li>
        <li><em><strong>Se construyeron</strong> muchas casas.</em> (Es wurden viele Häuser gebaut.)</li>
      </ul>
      <div class="merke"><strong>Faustregel:</strong> Wenn der Urheber genannt wird, nimm
      <em>ser … por</em>. Wenn er egal oder unbekannt ist — was meistens der Fall ist —
      nimm das <em>se</em>-Passiv. Das klingt natürlicher.</div>`,
    uebungen: [
      { id: "g3301", satz: "El libro ___ escrito por Cervantes.", loesung: "fue", tipps: ["fue", "estuvo", "se"], hinweis: "Vorgang + Urheber", de: "Das Buch wurde von Cervantes geschrieben." },
      { id: "g3302", satz: "La puerta ___ cerrada. (Zustand)", loesung: "está", tipps: ["está", "fue", "se"], hinweis: "Ergebnis", de: "Die Tür ist geschlossen." },
      { id: "g3303", satz: "La casa fue ___ (construir) en 1920.", loesung: "construida", tipps: ["construida", "construido", "construir"], hinweis: "la casa = weiblich", de: "Das Haus wurde 1920 gebaut." },
      { id: "g3304", satz: "___ firmó el acuerdo ayer.", loesung: "Se", tipps: ["Se", "Fue", "Está"], hinweis: "se-Passiv", de: "Das Abkommen wurde gestern unterzeichnet." },
      { id: "g3305", satz: "Los documentos ___ (ser) enviados ayer.", loesung: "fueron", tipps: ["fueron", "fue", "estuvieron"], hinweis: "Mehrzahl", de: "Die Dokumente wurden gestern verschickt." }
    ]
  }
});

LEKTIONEN.push({
  tag: 34, niveau: "B1", thema: "Was jemand gesagt hat",
  vokabeln: [
    { id: "v3401", es: "afirmar",        de: "behaupten",        wortart: "Verb", beispiel: "Afirmó que era inocente.", beispielDe: "Er behauptete, er sei unschuldig." },
    { id: "v3402", es: "comentar",       de: "anmerken",         wortart: "Verb", beispiel: "Comentó que llegaría tarde.", beispielDe: "Er merkte an, dass er spät kommen würde." },
    { id: "v3403", es: "advertir",       de: "warnen",           wortart: "Verb", beispiel: "Me advirtió del peligro.", beispielDe: "Er warnte mich vor der Gefahr." },
    { id: "v3404", es: "asegurar",       de: "versichern",       wortart: "Verb", beispiel: "Aseguró que vendría.", beispielDe: "Er versicherte, dass er kommen würde." },
    { id: "v3405", es: "la promesa",     de: "das Versprechen",  wortart: "Substantiv", beispiel: "Cumplió su promesa.", beispielDe: "Er hielt sein Versprechen." },
    { id: "v3406", es: "quejarse",       de: "sich beschweren",  wortart: "Verb", beispiel: "Se quejó del ruido.", beispielDe: "Er beschwerte sich über den Lärm." },
    { id: "v3407", es: "reconocer",      de: "zugeben",          wortart: "Verb", beispiel: "Reconoció su error.", beispielDe: "Er gab seinen Fehler zu." },
    { id: "v3408", es: "el rumor",       de: "das Gerücht",      wortart: "Substantiv", beispiel: "Es solo un rumor.", beispielDe: "Das ist nur ein Gerücht." },
    { id: "v3409", es: "insistir",       de: "darauf bestehen",  wortart: "Verb", beispiel: "Insistió en pagar.", beispielDe: "Er bestand darauf zu zahlen." },
    { id: "v3410", es: "el testigo",     de: "der Zeuge",        wortart: "Substantiv", beispiel: "El testigo contó lo que vio.", beispielDe: "Der Zeuge erzählte, was er sah." }
  ],
  saetze: [
    { id: "s3401", es: "Dijo que estaba muy cansado.",          de: "Er sagte, dass er sehr müde sei." },
    { id: "s3402", es: "Me contó que había viajado a Cuba.",    de: "Er erzählte mir, dass er nach Kuba gereist war." },
    { id: "s3403", es: "Aseguró que llegaría a tiempo.",        de: "Er versicherte, dass er pünktlich ankäme." },
    { id: "s3404", es: "Preguntó si podíamos ayudarle.",        de: "Er fragte, ob wir ihm helfen könnten." },
    { id: "s3405", es: "Nos explicó que no había otra opción.", de: "Er erklärte uns, dass es keine andere Möglichkeit gab." }
  ],
  grammatik: {
    id: "g34", titel: "Indirekte Rede",
    erklaerung: `
      <p>Wenn du wiedergibst, was jemand gesagt hat, verschieben sich die Zeiten — genau wie
      im Deutschen, aber nach klaren Regeln. Steht das einleitende Verb in der Vergangenheit
      (<em>dijo, contó, preguntó</em>), rutscht alles eine Stufe zurück.</p>
      <table>
        <tr><th>Original</th><th>wird zu</th></tr>
        <tr><td>Presente: <em>Estoy cansado.</em></td><td>Imperfecto: <em>Dijo que estaba cansado.</em></td></tr>
        <tr><td>Indefinido: <em>Viajé a Cuba.</em></td><td>Pluscuamperfecto: <em>Dijo que había viajado.</em></td></tr>
        <tr><td>Perfecto: <em>He comido.</em></td><td>Pluscuamperfecto: <em>Dijo que había comido.</em></td></tr>
        <tr><td>Futuro: <em>Llegaré a tiempo.</em></td><td>Condicional: <em>Dijo que llegaría.</em></td></tr>
        <tr><td>Imperfecto: <em>Vivía allí.</em></td><td>bleibt: <em>Dijo que vivía allí.</em></td></tr>
      </table>
      <div class="merke"><strong>Merkhilfe:</strong> Jede Zeit macht einen Schritt in die
      Vergangenheit. Was schon ganz hinten ist (Imperfecto, Pluscuamperfecto), bleibt stehen.</div>
      <p><strong>Fragen wiedergeben:</strong></p>
      <ul>
        <li>mit Fragewort: <em>¿Dónde vives?</em> → <em>Preguntó <strong>dónde</strong> vivía.</em></li>
        <li>ohne Fragewort: <em>¿Vienes?</em> → <em>Preguntó <strong>si</strong> venía.</em></li>
      </ul>
      <p><strong>Was sich außerdem ändert</strong> — die Perspektive verschiebt sich mit:</p>
      <table>
        <tr><td><em>yo</em> → <em>él/ella</em></td><td><em>mi</em> → <em>su</em></td></tr>
        <tr><td><em>aquí</em> → <em>allí</em></td><td><em>hoy</em> → <em>aquel día</em></td></tr>
        <tr><td><em>ahora</em> → <em>entonces</em></td><td><em>mañana</em> → <em>al día siguiente</em></td></tr>
      </table>
      <p><em>„Mañana vendré aquí“</em> → <em>Dijo que al día siguiente iría allí.</em></p>`,
    uebungen: [
      { id: "g3401", satz: "„Estoy cansado“ → Dijo que ___ cansado.", loesung: "estaba", tipps: ["estaba", "está", "estuvo"], hinweis: "Presente → Imperfecto", de: "Er sagte, dass er müde sei." },
      { id: "g3402", satz: "„Viajé a Cuba“ → Contó que ___ viajado.", loesung: "había", tipps: ["había", "ha", "habría"], hinweis: "Indefinido → Pluscuamperfecto", de: "Er erzählte, dass er nach Kuba gereist war." },
      { id: "g3403", satz: "„Llegaré tarde“ → Dijo que ___ tarde.", loesung: "llegaría", tipps: ["llegaría", "llegará", "llegaba"], hinweis: "Futuro → Condicional", de: "Er sagte, dass er spät käme." },
      { id: "g3404", satz: "„¿Vienes?“ → Preguntó ___ venía.", loesung: "si", tipps: ["si", "sí", "que"], hinweis: "Frage ohne Fragewort", de: "Er fragte, ob ich käme." },
      { id: "g3405", satz: "„¿Dónde vives?“ → Preguntó dónde ___.", loesung: "vivía", tipps: ["vivía", "vives", "viví"], hinweis: "Presente → Imperfecto", de: "Er fragte, wo ich wohnte." }
    ]
  }
});

LEKTIONEN.push({
  tag: 35, niveau: "B1", thema: "Umwelt und Natur",
  vokabeln: [
    { id: "v3501", es: "el medio ambiente", de: "die Umwelt",    wortart: "Substantiv", beispiel: "Hay que cuidar el medio ambiente.", beispielDe: "Man muss die Umwelt schützen." },
    { id: "v3502", es: "el residuo",     de: "der Abfall",       wortart: "Substantiv", beispiel: "Separamos los residuos.", beispielDe: "Wir trennen den Abfall." },
    { id: "v3503", es: "reciclar",       de: "recyceln",         wortart: "Verb", beispiel: "Reciclamos el papel.", beispielDe: "Wir recyceln das Papier." },
    { id: "v3504", es: "la sequía",      de: "die Dürre",        wortart: "Substantiv", beispiel: "La sequía afecta al sur.", beispielDe: "Die Dürre betrifft den Süden." },
    { id: "v3505", es: "contaminar",     de: "verschmutzen",     wortart: "Verb", beispiel: "Los coches contaminan mucho.", beispielDe: "Autos verschmutzen viel." },
    { id: "v3506", es: "el bosque",      de: "der Wald",         wortart: "Substantiv", beispiel: "El bosque está protegido.", beispielDe: "Der Wald steht unter Schutz." },
    { id: "v3507", es: "ahorrar",        de: "sparen",           wortart: "Verb", beispiel: "Hay que ahorrar agua.", beispielDe: "Man muss Wasser sparen." },
    { id: "v3508", es: "renovable",      de: "erneuerbar",       wortart: "Adjektiv", beispiel: "Usamos energía renovable.", beispielDe: "Wir nutzen erneuerbare Energie." },
    { id: "v3509", es: "la especie",     de: "die Art (Tier)",   wortart: "Substantiv", beispiel: "Es una especie protegida.", beispielDe: "Das ist eine geschützte Art." },
    { id: "v3510", es: "el desarrollo",  de: "die Entwicklung",  wortart: "Substantiv", beispiel: "El desarrollo sostenible es clave.", beispielDe: "Nachhaltige Entwicklung ist entscheidend." }
  ],
  saetze: [
    { id: "s3501", es: "Llevo tres años reciclando todo.",       de: "Ich recycle seit drei Jahren alles." },
    { id: "s3502", es: "Acabamos de plantar veinte árboles.",    de: "Wir haben gerade zwanzig Bäume gepflanzt." },
    { id: "s3503", es: "Sigue habiendo mucha contaminación.",    de: "Es gibt weiterhin viel Verschmutzung." },
    { id: "s3504", es: "Dejé de usar bolsas de plástico.",       de: "Ich hörte auf, Plastiktüten zu benutzen." },
    { id: "s3505", es: "Volvimos a hablar del mismo problema.",  de: "Wir sprachen wieder über dasselbe Problem." }
  ],
  grammatik: {
    id: "g35", titel: "Verbalperiphrasen — Verlauf und Wiederholung",
    erklaerung: `
      <p>Verbalperiphrasen sind feste Verbindungen aus einem Hilfsverb und einem Infinitiv
      oder Gerundio. Sie drücken Nuancen aus, für die das Deutsche Adverbien braucht.</p>
      <table>
        <tr><th>Periphrase</th><th>Bedeutung</th><th>Beispiel</th></tr>
        <tr><td><em>llevar</em> + Zeit + Gerundio</td><td>seit … tun</td><td>Llevo tres años estudiando. (Ich lerne seit drei Jahren.)</td></tr>
        <tr><td><em>seguir</em> + Gerundio</td><td>weiterhin tun</td><td>Sigue lloviendo. (Es regnet immer noch.)</td></tr>
        <tr><td><em>ir</em> + Gerundio</td><td>allmählich tun</td><td>Voy entendiendo. (Ich verstehe langsam.)</td></tr>
        <tr><td><em>acabar de</em> + Inf.</td><td>gerade getan</td><td>Acabo de llegar. (Ich bin gerade angekommen.)</td></tr>
        <tr><td><em>volver a</em> + Inf.</td><td>wieder tun</td><td>Volví a llamar. (Ich rief wieder an.)</td></tr>
        <tr><td><em>dejar de</em> + Inf.</td><td>aufhören zu</td><td>Dejé de fumar. (Ich hörte auf zu rauchen.)</td></tr>
        <tr><td><em>ponerse a</em> + Inf.</td><td>sich daranmachen</td><td>Se puso a llorar. (Er fing an zu weinen.)</td></tr>
        <tr><td><em>estar a punto de</em> + Inf.</td><td>kurz davor sein</td><td>Estoy a punto de salir. (Ich gehe gleich.)</td></tr>
      </table>
      <div class="merke"><strong>Besonders nützlich: <em>llevar</em> + Gerundio.</strong>
      Es ersetzt das umständliche <em>desde hace</em>.<br>
      <em>Estudio español desde hace tres años.</em><br>
      = <em><strong>Llevo tres años estudiando</strong> español.</em><br>
      Die zweite Variante klingt deutlich spanischer.</div>
      <p><strong>Verneint</strong> bedeutet <em>llevar</em> „seit … nicht“:
      <em>Llevo dos días sin dormir.</em> — Ich habe seit zwei Tagen nicht geschlafen.</p>`,
    uebungen: [
      { id: "g3501", satz: "___ tres años estudiando español.", loesung: "Llevo", tipps: ["Llevo", "Hace", "Estoy"], hinweis: "seit … tun", de: "Ich lerne seit drei Jahren Spanisch." },
      { id: "g3502", satz: "___ de llegar a casa. (gerade)", loesung: "Acabo", tipps: ["Acabo", "Llevo", "Sigo"], hinweis: "gerade eben", de: "Ich bin gerade nach Hause gekommen." },
      { id: "g3503", satz: "___ lloviendo desde ayer. (weiterhin)", loesung: "Sigue", tipps: ["Sigue", "Acaba", "Lleva"], hinweis: "weiter tun", de: "Es regnet seit gestern weiter." },
      { id: "g3504", satz: "___ de fumar hace un año.", loesung: "Dejé", tipps: ["Dejé", "Volví", "Acabé"], hinweis: "aufhören", de: "Ich hörte vor einem Jahr auf zu rauchen." },
      { id: "g3505", satz: "___ a llamar más tarde. (wieder)", loesung: "Volví", tipps: ["Volví", "Dejé", "Acabé"], hinweis: "nochmal tun", de: "Ich rief später wieder an." }
    ]
  }
});

LEKTIONEN.push({
  tag: 36, niveau: "B1", thema: "Wünsche äußern",
  vokabeln: [
    { id: "v3601", es: "el deseo",       de: "der Wunsch",       wortart: "Substantiv", beispiel: "Es mi mayor deseo.", beispielDe: "Das ist mein größter Wunsch." },
    { id: "v3602", es: "esperar",        de: "hoffen",           wortart: "Verb", beispiel: "Espero que estés bien.", beispielDe: "Ich hoffe, es geht dir gut." },
    { id: "v3603", es: "ojalá",          de: "hoffentlich",      wortart: "Adverb", beispiel: "Ojalá haga buen tiempo.", beispielDe: "Hoffentlich wird das Wetter gut." },
    { id: "v3604", es: "pedir",          de: "bitten",           wortart: "Verb", beispiel: "Te pido que me escuches.", beispielDe: "Ich bitte dich, mir zuzuhören." },
    { id: "v3605", es: "necesitar",      de: "brauchen",         wortart: "Verb", beispiel: "Necesito que me ayudes.", beispielDe: "Ich brauche deine Hilfe." },
    { id: "v3606", es: "el anhelo",      de: "die Sehnsucht",    wortart: "Substantiv", beispiel: "Siente un anhelo profundo.", beispielDe: "Er empfindet eine tiefe Sehnsucht." },
    { id: "v3607", es: "preferir",       de: "vorziehen",        wortart: "Verb", beispiel: "Prefiero que vengas mañana.", beispielDe: "Mir ist lieber, du kommst morgen." },
    { id: "v3608", es: "aconsejar",      de: "raten",            wortart: "Verb", beispiel: "Te aconsejo que descanses.", beispielDe: "Ich rate dir, dich auszuruhen." },
    { id: "v3609", es: "exigir",         de: "verlangen",        wortart: "Verb", beispiel: "Exigen que paguemos ya.", beispielDe: "Sie verlangen, dass wir sofort zahlen." },
    { id: "v3610", es: "rogar",          de: "inständig bitten", wortart: "Verb", beispiel: "Le ruego que me perdone.", beispielDe: "Ich bitte Sie, mir zu verzeihen." }
  ],
  saetze: [
    { id: "s3601", es: "Quiero que vengas a mi fiesta.",        de: "Ich will, dass du zu meiner Party kommst." },
    { id: "s3602", es: "Espero que tengas un buen día.",        de: "Ich hoffe, du hast einen guten Tag." },
    { id: "s3603", es: "Ojalá llueva pronto.",                  de: "Hoffentlich regnet es bald." },
    { id: "s3604", es: "Te pido que me escuches un momento.",   de: "Ich bitte dich, mir kurz zuzuhören." },
    { id: "s3605", es: "Prefiero que hablemos mañana.",         de: "Mir ist lieber, wir sprechen morgen." }
  ],
  grammatik: {
    id: "g36", titel: "Subjuntivo: die Bildung",
    erklaerung: `
      <p>Jetzt kommt das Thema, das Spanisch von den meisten anderen Sprachen unterscheidet.
      Der <em>Subjuntivo</em> ist keine Zeit, sondern ein <strong>Modus</strong> — er zeigt an,
      dass etwas gewünscht, bezweifelt oder bewertet wird, statt einfach festgestellt.</p>
      <div class="merke"><strong>Die gute Nachricht:</strong> Die Bildung kennst du schon.
      Es ist genau die Form aus dem verneinten Imperativ (Tag 14) — die Endungen tauschen.</div>
      <p><strong>So geht es in drei Schritten:</strong></p>
      <ol>
        <li>Die <em>yo</em>-Form im Präsens bilden: <em>hablar → hablo</em></li>
        <li>Das <em>-o</em> streichen: <em>habl-</em></li>
        <li>Die Gegen-Endungen anhängen</li>
      </ol>
      <table>
        <tr><th></th><th>hablar (-ar → e)</th><th>comer (-er → a)</th><th>vivir (-ir → a)</th></tr>
        <tr><td>yo</td><td>habl<em>e</em></td><td>com<em>a</em></td><td>viv<em>a</em></td></tr>
        <tr><td>tú</td><td>habl<em>es</em></td><td>com<em>as</em></td><td>viv<em>as</em></td></tr>
        <tr><td>él/ella</td><td>habl<em>e</em></td><td>com<em>a</em></td><td>viv<em>a</em></td></tr>
        <tr><td>nosotros</td><td>habl<em>emos</em></td><td>com<em>amos</em></td><td>viv<em>amos</em></td></tr>
        <tr><td>vosotros</td><td>habl<em>éis</em></td><td>com<em>áis</em></td><td>viv<em>áis</em></td></tr>
        <tr><td>ellos</td><td>habl<em>en</em></td><td>com<em>an</em></td><td>viv<em>an</em></td></tr>
      </table>
      <p><strong>Der Trick funktioniert auch bei unregelmäßigen Verben</strong>, weil die
      Unregelmäßigkeit in der yo-Form steckt:</p>
      <ul>
        <li><em>tener → tengo → tenga, tengas, tenga…</em></li>
        <li><em>hacer → hago → haga…</em> · <em>decir → digo → diga…</em></li>
        <li><em>venir → vengo → venga…</em> · <em>salir → salgo → salga…</em></li>
        <li><em>conocer → conozco → conozca…</em> · <em>ver → veo → vea…</em></li>
      </ul>
      <p><strong>Nur sechs echte Ausnahmen</strong> — Merkspruch: <em>„Dishes“</em><br>
      <em><strong>d</strong>ar → dé</em> · <em><strong>i</strong>r → vaya</em> ·
      <em><strong>s</strong>er → sea</em> · <em><strong>h</strong>aber → haya</em> ·
      <em><strong>e</strong>star → esté</em> · <em><strong>s</strong>aber → sepa</em></p>`,
    uebungen: [
      { id: "g3601", satz: "Quiero que ___ (hablar, tú) con él.", loesung: "hables", tipps: ["hables", "hablas", "hable"], hinweis: "-ar bekommt e", de: "Ich will, dass du mit ihm sprichst." },
      { id: "g3602", satz: "Espero que ___ (comer, vosotros) bien.", loesung: "comáis", tipps: ["comáis", "coméis", "coman"], hinweis: "-er bekommt a", de: "Ich hoffe, ihr esst gut." },
      { id: "g3603", satz: "Quiero que ___ (tener, tú) cuidado.", loesung: "tengas", tipps: ["tengas", "tienes", "tenga"], hinweis: "yo-Form tengo → ?", de: "Ich will, dass du aufpasst." },
      { id: "g3604", satz: "Espero que ___ (ser) verdad.", loesung: "sea", tipps: ["sea", "es", "sería"], hinweis: "Ausnahme", de: "Ich hoffe, das stimmt." },
      { id: "g3605", satz: "Ojalá ___ (ir, él) al médico.", loesung: "vaya", tipps: ["vaya", "va", "iría"], hinweis: "Ausnahme", de: "Hoffentlich geht er zum Arzt." }
    ]
  }
});

LEKTIONEN.push({
  tag: 37, niveau: "B1", thema: "Bitten und Wünsche an andere",
  vokabeln: [
    { id: "v3701", es: "el encargo",     de: "der Auftrag",      wortart: "Substantiv", beispiel: "Me hizo un encargo.", beispielDe: "Er gab mir einen Auftrag." },
    { id: "v3702", es: "permitir",       de: "erlauben",         wortart: "Verb", beispiel: "No permiten que fumemos aquí.", beispielDe: "Sie erlauben nicht, dass wir hier rauchen." },
    { id: "v3703", es: "prohibir",       de: "verbieten",        wortart: "Verb", beispiel: "Prohíben que entren perros.", beispielDe: "Sie verbieten, dass Hunde hereinkommen." },
    { id: "v3704", es: "sugerir",        de: "vorschlagen",      wortart: "Verb", beispiel: "Sugiero que esperemos.", beispielDe: "Ich schlage vor, dass wir warten." },
    { id: "v3705", es: "proponer",       de: "vorschlagen",      wortart: "Verb", beispiel: "Propongo que salgamos ya.", beispielDe: "Ich schlage vor, dass wir jetzt gehen." },
    { id: "v3706", es: "impedir",        de: "verhindern",       wortart: "Verb", beispiel: "Nada impide que lo hagas.", beispielDe: "Nichts hindert dich daran, es zu tun." },
    { id: "v3707", es: "el requisito",   de: "die Voraussetzung", wortart: "Substantiv", beispiel: "Cumple todos los requisitos.", beispielDe: "Er erfüllt alle Voraussetzungen." },
    { id: "v3708", es: "recomendar",     de: "empfehlen",        wortart: "Verb", beispiel: "Te recomiendo que lo pruebes.", beispielDe: "Ich empfehle dir, es zu probieren." },
    { id: "v3709", es: "conseguir que",  de: "erreichen, dass",  wortart: "Verb", beispiel: "Consiguió que le escucharan.", beispielDe: "Er erreichte, dass man ihm zuhörte." },
    { id: "v3710", es: "el consentimiento", de: "die Zustimmung", wortart: "Substantiv", beispiel: "Necesitamos su consentimiento.", beispielDe: "Wir brauchen seine Zustimmung." }
  ],
  saetze: [
    { id: "s3701", es: "Quiero salir esta noche.",              de: "Ich will heute Abend ausgehen." },
    { id: "s3702", es: "Quiero que salgas esta noche.",         de: "Ich will, dass du heute Abend ausgehst." },
    { id: "s3703", es: "Te recomiendo que veas esa película.",  de: "Ich empfehle dir, diesen Film zu sehen." },
    { id: "s3704", es: "No permiten que entren perros.",        de: "Sie erlauben nicht, dass Hunde hereinkommen." },
    { id: "s3705", es: "Necesito que me digas la verdad.",      de: "Ich brauche, dass du mir die Wahrheit sagst." }
  ],
  grammatik: {
    id: "g37", titel: "Subjuntivo nach Wunsch und Aufforderung",
    erklaerung: `
      <p>Jetzt zum Gebrauch. Der erste und häufigste Fall: Jemand <strong>will, dass jemand
      anderes</strong> etwas tut.</p>
      <div class="merke"><strong>Die entscheidende Frage: Wer macht was?</strong><br>
      <strong>Gleiche Person</strong> → Infinitiv:<br>
      <em>Quiero <strong>salir</strong>.</em> (Ich will — ich gehe raus.)<br>
      <strong>Zwei verschiedene Personen</strong> → <em>que</em> + Subjuntivo:<br>
      <em>Quiero <strong>que salgas</strong>.</em> (Ich will — du gehst raus.)</div>
      <p>Das ist die Grundregel für den halben Subjuntivo. Merke sie dir gut.</p>
      <p><strong>Verben, die diese Konstruktion auslösen:</strong></p>
      <table>
        <tr><th>Wunsch</th><th>Aufforderung</th><th>Erlaubnis / Verbot</th></tr>
        <tr><td>querer que<br>desear que<br>esperar que<br>preferir que<br>necesitar que</td>
            <td>pedir que<br>rogar que<br>exigir que<br>aconsejar que<br>recomendar que<br>sugerir que</td>
            <td>permitir que<br>dejar que<br>prohibir que<br>impedir que</td></tr>
      </table>
      <p><strong>Beispiele:</strong></p>
      <ul>
        <li><em>Te pido que <strong>tengas</strong> paciencia.</em></li>
        <li><em>Nos aconsejan que <strong>vayamos</strong> temprano.</em></li>
        <li><em>No permiten que <strong>fumemos</strong> aquí.</em></li>
      </ul>
      <div class="merke"><strong>Ausnahme, die du kennen musst:</strong> Nach
      <em>dejar</em>, <em>permitir</em>, <em>prohibir</em>, <em>impedir</em> und
      <em>hacer</em> geht auch der Infinitiv, wenn ein Pronomen dabeisteht:<br>
      <em>No <strong>me</strong> dejan <strong>salir</strong>.</em> = <em>No dejan que
      <strong>salga</strong>.</em> — beides korrekt.</div>`,
    uebungen: [
      { id: "g3701", satz: "Quiero ___ (salir, yo) esta noche.", loesung: "salir", tipps: ["salir", "salga", "salgo"], hinweis: "gleiche Person!", de: "Ich will heute Abend ausgehen." },
      { id: "g3702", satz: "Quiero que ___ (salir, tú) esta noche.", loesung: "salgas", tipps: ["salgas", "sales", "salir"], hinweis: "zwei Personen", de: "Ich will, dass du heute Abend ausgehst." },
      { id: "g3703", satz: "Te pido que ___ (tener) paciencia.", loesung: "tengas", tipps: ["tengas", "tienes", "tener"], hinweis: "yo-Form tengo", de: "Ich bitte dich, geduldig zu sein." },
      { id: "g3704", satz: "Espero que ___ (venir, ellos) pronto.", loesung: "vengan", tipps: ["vengan", "vienen", "venir"], hinweis: "yo-Form vengo", de: "Ich hoffe, dass sie bald kommen." },
      { id: "g3705", satz: "No permiten que ___ (fumar, nosotros).", loesung: "fumemos", tipps: ["fumemos", "fumamos", "fumar"], hinweis: "-ar → -emos", de: "Sie erlauben nicht, dass wir rauchen." }
    ]
  }
});

LEKTIONEN.push({
  tag: 38, niveau: "B1", thema: "Gefühle ausdrücken",
  vokabeln: [
    { id: "v3801", es: "alegrarse de",   de: "sich freuen über", wortart: "Verb", beispiel: "Me alegro de que estés aquí.", beispielDe: "Ich freue mich, dass du hier bist." },
    { id: "v3802", es: "sentir",         de: "bedauern / fühlen", wortart: "Verb", beispiel: "Siento que no puedas venir.", beispielDe: "Es tut mir leid, dass du nicht kommen kannst." },
    { id: "v3803", es: "temer",          de: "befürchten",       wortart: "Verb", beispiel: "Temo que sea tarde.", beispielDe: "Ich befürchte, es ist zu spät." },
    { id: "v3804", es: "sorprender",     de: "überraschen",      wortart: "Verb", beispiel: "Me sorprende que no lo sepas.", beispielDe: "Es überrascht mich, dass du es nicht weißt." },
    { id: "v3805", es: "la lástima",     de: "das Bedauern",     wortart: "Substantiv", beispiel: "Es una lástima que no vengas.", beispielDe: "Schade, dass du nicht kommst." },
    { id: "v3806", es: "molestar",       de: "stören",           wortart: "Verb", beispiel: "Me molesta que hables así.", beispielDe: "Es stört mich, dass du so redest." },
    { id: "v3807", es: "avergonzarse",   de: "sich schämen",     wortart: "Verb", beispiel: "Se avergüenza de su error.", beispielDe: "Er schämt sich für seinen Fehler." },
    { id: "v3808", es: "el orgullo",     de: "der Stolz",        wortart: "Substantiv", beispiel: "Lo dice con orgullo.", beispielDe: "Er sagt es mit Stolz." },
    { id: "v3809", es: "emocionante",    de: "aufregend",        wortart: "Adjektiv", beispiel: "Fue un momento emocionante.", beispielDe: "Das war ein aufregender Moment." },
    { id: "v3810", es: "el alivio",      de: "die Erleichterung", wortart: "Substantiv", beispiel: "Qué alivio saberlo.", beispielDe: "Was für eine Erleichterung, das zu wissen." }
  ],
  saetze: [
    { id: "s3801", es: "Me alegro de que estés aquí.",          de: "Ich freue mich, dass du hier bist." },
    { id: "s3802", es: "Siento que no puedas venir.",           de: "Es tut mir leid, dass du nicht kommen kannst." },
    { id: "s3803", es: "Es una lástima que se vaya tan pronto.", de: "Schade, dass er so früh geht." },
    { id: "s3804", es: "Me sorprende que no lo sepas.",         de: "Es überrascht mich, dass du das nicht weißt." },
    { id: "s3805", es: "Es importante que descanses.",          de: "Es ist wichtig, dass du dich ausruhst." }
  ],
  grammatik: {
    id: "g38", titel: "Subjuntivo nach Gefühlen und Wertungen",
    erklaerung: `
      <p>Der zweite große Auslöser: Wenn du etwas nicht nur feststellst, sondern
      <strong>bewertest</strong> — es gut, schade, überraschend oder wichtig findest.</p>
      <div class="merke"><strong>Der Gedanke dahinter:</strong> Die Tatsache selbst ist
      unstrittig. Was du sagst, ist deine <strong>Reaktion</strong> darauf — und diese
      subjektive Färbung verlangt den Subjuntivo.</div>
      <p><strong>1. Gefühlsverben</strong> (dieselbe Personen-Regel wie gestern):</p>
      <ul>
        <li><em>alegrarse de que</em>, <em>sentir que</em>, <em>temer que</em></li>
        <li><em>gustar que</em>, <em>encantar que</em>, <em>molestar que</em></li>
        <li><em>sorprender que</em>, <em>dar pena que</em>, <em>tener miedo de que</em></li>
      </ul>
      <p><em>Me alegro de que <strong>estés</strong> aquí.</em> ·
      <em>Temo que <strong>llegue</strong> tarde.</em></p>
      <p><strong>2. Unpersönliche Wertungen</strong> nach dem Muster
      <em>es</em> + Adjektiv + <em>que</em>:</p>
      <table>
        <tr><td><em>Es importante que…</em></td><td><em>Es necesario que…</em></td></tr>
        <tr><td><em>Es mejor que…</em></td><td><em>Es una pena que…</em></td></tr>
        <tr><td><em>Es raro que…</em></td><td><em>Es posible que…</em></td></tr>
        <tr><td><em>Es lógico que…</em></td><td><em>Está bien que…</em></td></tr>
      </table>
      <p><em>Es importante que <strong>vengas</strong> temprano.</em></p>
      <div class="merke"><strong>Die wichtige Ausnahme:</strong> Ausdrücke, die eine
      <strong>Tatsache</strong> feststellen statt sie zu bewerten, nehmen den Indikativ:<br>
      <em>Es <strong>verdad</strong> que <strong>viene</strong>.</em> (Es ist wahr, dass…)<br>
      <em>Es <strong>evidente</strong> que <strong>está</strong> cansado.</em><br>
      <em>Es <strong>seguro</strong> que <strong>llega</strong> hoy.</em><br>
      Merke: <em>verdad, cierto, evidente, obvio, seguro</em> → Indikativ.<br>
      <strong>Aber verneint kippt es:</strong> <em>No es verdad que <strong>venga</strong>.</em></div>
      <p><strong>Ohne Personenwechsel</strong> steht wieder der Infinitiv:<br>
      <em>Es importante <strong>descansar</strong>.</em> (allgemein)<br>
      <em>Es importante que <strong>descanses</strong>.</em> (du konkret)</p>`,
    uebungen: [
      { id: "g3801", satz: "Me alegro de que ___ (estar, tú) aquí.", loesung: "estés", tipps: ["estés", "estás", "estar"], hinweis: "Gefühl", de: "Ich freue mich, dass du hier bist." },
      { id: "g3802", satz: "Es importante que ___ (descansar, tú).", loesung: "descanses", tipps: ["descanses", "descansas", "descansar"], hinweis: "Wertung", de: "Es ist wichtig, dass du dich ausruhst." },
      { id: "g3803", satz: "Es verdad que él ___ (venir) hoy.", loesung: "viene", tipps: ["viene", "venga", "vendría"], hinweis: "Tatsache → Indikativ", de: "Es stimmt, dass er heute kommt." },
      { id: "g3804", satz: "Es una lástima que no ___ (poder, tú) venir.", loesung: "puedas", tipps: ["puedas", "puedes", "poder"], hinweis: "Wertung", de: "Schade, dass du nicht kommen kannst." },
      { id: "g3805", satz: "Me sorprende que no lo ___ (saber, tú).", loesung: "sepas", tipps: ["sepas", "sabes", "saber"], hinweis: "saber → sepa", de: "Es überrascht mich, dass du es nicht weißt." }
    ]
  }
});

LEKTIONEN.push({
  tag: 39, niveau: "B1", thema: "Zweifeln und Vermuten",
  vokabeln: [
    { id: "v3901", es: "dudar",          de: "zweifeln",         wortart: "Verb", beispiel: "Dudo que venga.", beispielDe: "Ich bezweifle, dass er kommt." },
    { id: "v3902", es: "la duda",        de: "der Zweifel",      wortart: "Substantiv", beispiel: "No tengo ninguna duda.", beispielDe: "Ich habe keinerlei Zweifel." },
    { id: "v3903", es: "puede que",      de: "es kann sein, dass", wortart: "Ausdruck", beispiel: "Puede que llueva.", beispielDe: "Es kann sein, dass es regnet." },
    { id: "v3904", es: "negar",          de: "bestreiten",       wortart: "Verb", beispiel: "Niega que sea culpa suya.", beispielDe: "Er bestreitet, dass es seine Schuld ist." },
    { id: "v3905", es: "tal vez",        de: "vielleicht",       wortart: "Adverb", beispiel: "Tal vez tengas razón.", beispielDe: "Vielleicht hast du recht." },
    { id: "v3906", es: "la posibilidad", de: "die Möglichkeit",  wortart: "Substantiv", beispiel: "Existe esa posibilidad.", beispielDe: "Diese Möglichkeit besteht." },
    { id: "v3907", es: "improbable",     de: "unwahrscheinlich", wortart: "Adjektiv", beispiel: "Es improbable que gane.", beispielDe: "Es ist unwahrscheinlich, dass er gewinnt." },
    { id: "v3908", es: "sospechar",      de: "vermuten",         wortart: "Verb", beispiel: "Sospecho que lo sabe.", beispielDe: "Ich vermute, dass er es weiß." },
    { id: "v3909", es: "convencer",      de: "überzeugen",       wortart: "Verb", beispiel: "No me convence esa idea.", beispielDe: "Diese Idee überzeugt mich nicht." },
    { id: "v3910", es: "el hecho",       de: "die Tatsache",     wortart: "Substantiv", beispiel: "El hecho es que no vino.", beispielDe: "Tatsache ist, dass er nicht kam." }
  ],
  saetze: [
    { id: "s3901", es: "Creo que va a llover mañana.",          de: "Ich glaube, dass es morgen regnet." },
    { id: "s3902", es: "No creo que llueva mañana.",            de: "Ich glaube nicht, dass es morgen regnet." },
    { id: "s3903", es: "Dudo que llegue a tiempo.",             de: "Ich bezweifle, dass er pünktlich kommt." },
    { id: "s3904", es: "Quizás venga esta tarde.",              de: "Vielleicht kommt er heute Nachmittag." },
    { id: "s3905", es: "Es posible que haya un problema.",      de: "Möglicherweise gibt es ein Problem." }
  ],
  grammatik: {
    id: "g39", titel: "Subjuntivo bei Zweifel und Verneinung",
    erklaerung: `
      <p>Der dritte Auslöser: Sobald du an etwas <strong>zweifelst</strong> oder es
      <strong>verneinst</strong>, kippt der Satz in den Subjuntivo.</p>
      <div class="merke"><strong>Die Kippregel — der wichtigste Satz dieser Lektion:</strong><br>
      <em>Creo que <strong>viene</strong>.</em> → Indikativ (ich bin sicher)<br>
      <em>No creo que <strong>venga</strong>.</em> → Subjuntivo (ich bin unsicher)<br>
      Ein einziges <em>no</em> wechselt den Modus.</div>
      <table>
        <tr><th>bejaht → Indikativ</th><th>verneint → Subjuntivo</th></tr>
        <tr><td>Creo que es verdad.</td><td>No creo que sea verdad.</td></tr>
        <tr><td>Pienso que viene.</td><td>No pienso que venga.</td></tr>
        <tr><td>Es seguro que llega.</td><td>No es seguro que llegue.</td></tr>
        <tr><td>Está claro que sabe.</td><td>No está claro que sepa.</td></tr>
      </table>
      <p><strong>Immer Subjuntivo</strong> — auch ohne <em>no</em> — nach:</p>
      <ul>
        <li><em>dudar que</em> (bezweifeln): <em>Dudo que <strong>llegue</strong>.</em></li>
        <li><em>negar que</em> (bestreiten): <em>Niega que <strong>sea</strong> suyo.</em></li>
        <li><em>es posible / probable / improbable que</em></li>
        <li><em>puede que</em>: <em>Puede que <strong>tengas</strong> razón.</em></li>
        <li><em>no estar seguro de que</em></li>
      </ul>
      <p><strong>Sonderfall <em>quizás</em>, <em>tal vez</em>, <em>a lo mejor</em>:</strong></p>
      <table>
        <tr><td><em>quizás / tal vez</em></td><td>meist Subjuntivo:<br><em>Quizás <strong>venga</strong>.</em></td></tr>
        <tr><td><em>a lo mejor</em></td><td>immer Indikativ:<br><em>A lo mejor <strong>viene</strong>.</em></td></tr>
      </table>
      <div class="merke"><strong>Merkhilfe fürs Gefühl:</strong> Der Indikativ stellt fest,
      was <strong>ist</strong>. Der Subjuntivo spricht über das, was sein <strong>könnte</strong> —
      Wunsch, Zweifel, Bewertung. Je unsicherer die Aussage, desto wahrscheinlicher der
      Subjuntivo.</div>`,
    uebungen: [
      { id: "g3901", satz: "Creo que ___ (venir, él) mañana.", loesung: "viene", tipps: ["viene", "venga", "vendrá"], hinweis: "bejaht → Indikativ", de: "Ich glaube, er kommt morgen." },
      { id: "g3902", satz: "No creo que ___ (venir, él) mañana.", loesung: "venga", tipps: ["venga", "viene", "vendrá"], hinweis: "verneint → Subjuntivo", de: "Ich glaube nicht, dass er morgen kommt." },
      { id: "g3903", satz: "Dudo que ___ (ser) verdad.", loesung: "sea", tipps: ["sea", "es", "será"], hinweis: "dudar → immer Subjuntivo", de: "Ich bezweifle, dass das stimmt." },
      { id: "g3904", satz: "Es posible que ___ (haber) un error.", loesung: "haya", tipps: ["haya", "hay", "habrá"], hinweis: "hay → haya", de: "Möglicherweise gibt es einen Fehler." },
      { id: "g3905", satz: "Quizás ___ (tener, tú) razón.", loesung: "tengas", tipps: ["tengas", "tienes", "tendrás"], hinweis: "quizás → Subjuntivo", de: "Vielleicht hast du recht." }
    ]
  }
});

LEKTIONEN.push({
  tag: 40, niveau: "B1", thema: "Hoffen und Wünschen",
  vokabeln: [
    { id: "v4001", es: "el milagro",     de: "das Wunder",       wortart: "Substantiv", beispiel: "Sería un milagro.", beispielDe: "Das wäre ein Wunder." },
    { id: "v4002", es: "el ánimo",       de: "der Mut",          wortart: "Substantiv", beispiel: "¡Ánimo, tú puedes!", beispielDe: "Kopf hoch, du schaffst das!" },
    { id: "v4003", es: "la suerte",      de: "das Glück",        wortart: "Substantiv", beispiel: "Ojalá tengas suerte.", beispielDe: "Hoffentlich hast du Glück." },
    { id: "v4004", es: "mejorar",        de: "besser werden",    wortart: "Verb", beispiel: "Ojalá mejore pronto.", beispielDe: "Hoffentlich wird er bald gesund." },
    { id: "v4005", es: "cumplirse",      de: "in Erfüllung gehen", wortart: "Verb", beispiel: "Ojalá se cumpla tu deseo.", beispielDe: "Möge dein Wunsch in Erfüllung gehen." },
    { id: "v4006", es: "el propósito",   de: "die Absicht",      wortart: "Substantiv", beispiel: "Su propósito es ayudar.", beispielDe: "Seine Absicht ist zu helfen." },
    { id: "v4007", es: "confiar",        de: "vertrauen",        wortart: "Verb", beispiel: "Confío en que salga bien.", beispielDe: "Ich vertraue darauf, dass es gut geht." },
    { id: "v4008", es: "el destino",     de: "das Schicksal",    wortart: "Substantiv", beispiel: "Fue cosa del destino.", beispielDe: "Das war Schicksal." },
    { id: "v4009", es: "la ilusión",     de: "die Vorfreude",    wortart: "Substantiv", beispiel: "Me hace mucha ilusión.", beispielDe: "Ich freue mich sehr darauf." },
    { id: "v4010", es: "afortunadamente", de: "glücklicherweise", wortart: "Adverb", beispiel: "Afortunadamente, no pasó nada.", beispielDe: "Glücklicherweise ist nichts passiert." }
  ],
  saetze: [
    { id: "s4001", es: "Ojalá haga buen tiempo mañana.",        de: "Hoffentlich wird morgen das Wetter gut." },
    { id: "s4002", es: "Que tengas un buen viaje.",             de: "Hab eine gute Reise." },
    { id: "s4003", es: "Espero que todo salga bien.",           de: "Ich hoffe, dass alles gut geht." },
    { id: "s4004", es: "Ojalá pudiera ayudarte más.",           de: "Ich wünschte, ich könnte dir mehr helfen." },
    { id: "s4005", es: "Que te mejores pronto.",                de: "Gute Besserung." }
  ],
  grammatik: {
    id: "g40", titel: "ojalá und Wunschformeln",
    erklaerung: `
      <p><em>Ojalá</em> stammt aus dem Arabischen (<em>law šā' Allāh</em> — „so Gott will“)
      und ist ein Überbleibsel aus den 800 Jahren maurischer Geschichte Spaniens. Es heißt
      „hoffentlich“ und verlangt <strong>immer</strong> den Subjuntivo.</p>
      <table>
        <tr><th>Form</th><th>Bedeutung</th><th>Beispiel</th></tr>
        <tr><td><em>ojalá</em> + Presente de Subjuntivo</td><td>realistische Hoffnung</td>
            <td><em>Ojalá <strong>venga</strong>.</em><br>(Hoffentlich kommt er.)</td></tr>
        <tr><td><em>ojalá</em> + Imperfecto de Subjuntivo</td><td>unerfüllbarer Wunsch</td>
            <td><em>Ojalá <strong>viniera</strong>.</em><br>(Wenn er nur käme.)</td></tr>
      </table>
      <p>Die zweite Form (Imperfecto de Subjuntivo) lernst du an Tag 54 im Detail — hier
      reicht es, sie zu erkennen.</p>
      <p><strong>Wunschformeln mit <em>que</em></strong> — dabei ist ein „ich wünsche“
      gedanklich weggelassen. Diese Wendungen hörst du in Spanien täglich:</p>
      <table>
        <tr><td><em>¡Que <strong>tengas</strong> un buen día!</em></td><td>Hab einen schönen Tag!</td></tr>
        <tr><td><em>¡Que <strong>te mejores</strong>!</em></td><td>Gute Besserung!</td></tr>
        <tr><td><em>¡Que <strong>aproveche</strong>!</em></td><td>Guten Appetit!</td></tr>
        <tr><td><em>¡Que <strong>te vaya</strong> bien!</em></td><td>Alles Gute!</td></tr>
        <tr><td><em>¡Que <strong>descanses</strong>!</em></td><td>Schlaf gut!</td></tr>
        <tr><td><em>¡Que <strong>lo pases</strong> bien!</em></td><td>Viel Spaß!</td></tr>
      </table>
      <div class="merke"><strong>Praktisch:</strong> Diese Formeln kannst du auswendig
      lernen und sofort benutzen — sie sind der schnellste Weg, natürlich zu klingen.
      Und nebenbei trainierst du den Subjuntivo, ohne darüber nachzudenken.</div>`,
    uebungen: [
      { id: "g4001", satz: "Ojalá ___ (hacer) buen tiempo mañana.", loesung: "haga", tipps: ["haga", "hace", "hará"], hinweis: "ojalá → Subjuntivo", de: "Hoffentlich wird morgen schönes Wetter." },
      { id: "g4002", satz: "¡Que ___ (tener, tú) un buen viaje!", loesung: "tengas", tipps: ["tengas", "tienes", "tendrás"], hinweis: "Wunschformel", de: "Gute Reise!" },
      { id: "g4003", satz: "Espero que todo ___ (salir) bien.", loesung: "salga", tipps: ["salga", "sale", "saldrá"], hinweis: "esperar que", de: "Ich hoffe, alles geht gut." },
      { id: "g4004", satz: "¡Que ___ (descansar, tú)!", loesung: "descanses", tipps: ["descanses", "descansas", "descansar"], hinweis: "Schlaf gut", de: "Schlaf gut!" },
      { id: "g4005", satz: "Ojalá ___ (poder, nosotros) ir juntos.", loesung: "podamos", tipps: ["podamos", "podemos", "podremos"], hinweis: "yo-Form puedo → pued-", de: "Hoffentlich können wir zusammen gehen." }
    ]
  }
});
