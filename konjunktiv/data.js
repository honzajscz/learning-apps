/* Konjunktiv I a II: obsah aplikace.
   Zdroj: materiály učitele (DaF Grammatik, kapitola 10 „Das Verb“, s. 241 až 250,
   a cvičebnice s. 192 až 193, cvičení 63 až 66). Výklad je v češtině.

   Formát:
   LESSONS: { id, title, sub, html, check: [položky] }
   SETS:    { id, title, sub, source?, items: [položky] }
   Položka:
     { t: "choice", q, o: [možnosti], a: index správné, ex: vysvětlení }
     { t: "input", q, lead?, a: [vzory], show: vzorová odpověď, ex }
   Vzory odpovědí: {a|b|} jsou alternativy (prázdná = vynechat). Při kontrole
   se nehledí na velikost písmen, interpunkci, ß/ss ani ä/ae, ö/oe, ü/ue.
   VERBS: tvary pro interaktivní tabulku (ich, du, er/sie/es, wir, ihr, sie/Sie). */

window.KONJ = {};

KONJ.LESSONS = [
{
  id: "modi",
  title: "Čtyři slovesné způsoby",
  sub: "Indikativ, Imperativ, Konjunktiv I a II",
  html: `
<p>Když něco říkáme, skoro vždy tím něco zamýšlíme: konstatujeme, rozkazujeme, převyprávíme nebo si přejeme. Němčina má pro to čtyři <b>slovesné způsoby (die Modi)</b>. Učebnice je ukazuje na jedné scéně: dýně a nůž.</p>

<div class="modi">
  <div class="mod m-ind"><h4>Indikativ</h4><p>Mluvčí říká něco <b>konkrétního a skutečného</b>.</p><p class="de">Ich brauche ein Messer.</p><p class="cz">Potřebuju nůž.</p></div>
  <div class="mod m-imp"><h4>Imperativ</h4><p>Mluvčí <b>rozkazuje</b> nebo si něco <b>přeje</b>.</p><p class="de">Gib das Messer her!</p><p class="cz">Dej sem ten nůž!</p></div>
  <div class="mod m-k1"><h4>Konjunktiv I</h4><p>Mluvčí <b>předává, co viděl nebo slyšel</b>.</p><p class="de">Der Mann sagte, er brauche ein Messer.</p><p class="cz">Ten muž říkal, že potřebuje nůž.</p></div>
  <div class="mod m-k2"><h4>Konjunktiv II</h4><p>Mluvčí si <b>přeje něco, co možná vůbec není možné</b>.</p><p class="de">Es wäre gut, wenn ich jetzt ein Messer hätte.</p><p class="cz">Bylo by dobré, kdybych teď měl nůž.</p></div>
</div>

<h3>Indikativ = způsob skutečnosti</h3>
<p>Indikativ (<i>Wirklichkeitsmodus</i>) vyjadřuje, <b>co je</b>, <b>co se stalo</b> a <b>co se stane</b>. Je to „normální“ němčina, kterou používáš nejčastěji.</p>

<h3>Konjunktivy = způsoby možnosti</h3>
<p>Oba konjunktivy mají za úkol vyjádřit <b>formy možnosti</b> (<i>Formen der Möglichkeit</i>): to, co jen někdo tvrdí, nebo to, co by bylo, kdyby…</p>

<div class="box cz-box">
  <h4>🇨🇿 Jak to máme v češtině</h4>
  <ul>
    <li><b>Indikativ</b> = oznamovací způsob (<i>potřebuju</i>).</li>
    <li><b>Imperativ</b> = rozkazovací způsob (<i>dej</i>).</li>
    <li><b>Konjunktiv II</b> ≈ podmiňovací způsob: <i>bych, bys, by, kdyby, jako by, kéž by</i>. Tohle znáš, jen se to v němčině tvoří jinak.</li>
    <li><b>Konjunktiv I</b> čeština <b>vůbec nemá</b>. Když převyprávíme, co kdo řekl, použijeme prostě oznamovací způsob: „Řekl, že <i>potřebuje</i> nůž.“ Němčina má na to zvláštní tvar (<i>er brauche</i>), kterým mluvčí dává najevo: <b>„to tvrdí on, ne já“</b>.</li>
  </ul>
</div>

<div class="box tip">
  <h4>💡 Jak si to zapamatovat</h4>
  <p><b>Konjunktiv I</b> = „informace z druhé ruky“ (zprávy, noviny, citace).<br>
  <b>Konjunktiv II</b> = „kdyby a bych“ (přání, nereálné situace, zdvořilost).</p>
</div>
`,
  check: [
    { t: "choice", q: "Který způsob je ve větě <span class=\"de\">Der Mann sagte, er brauche ein Messer.</span>?", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 2, ex: "Předává se, co muž řekl (nepřímá řeč). Tvar <i>brauche</i> místo <i>braucht</i> je Konjunktiv I." },
    { t: "choice", q: "Kterému českému způsobu nejvíc odpovídá Konjunktiv II?", o: ["oznamovacímu", "podmiňovacímu (bych, kdyby)", "rozkazovacímu", "žádnému"], a: 1, ex: "Konjunktiv II je obdoba českého podmiňovacího způsobu: <i>Es wäre gut</i> = <i>Bylo by dobré</i>." }
  ]
},
{
  id: "k1-pouziti",
  title: "Konjunktiv I: k čemu slouží",
  sub: "Nepřímá řeč, texty, návody, patos",
  html: `
<h3>1. Nepřímá řeč (indirekte Rede)</h3>
<p>Konjunktiv I je <b>typický pro nepřímou řeč</b>. Učebnice to ukazuje na reportérce a zpěvákovi:</p>
<div class="pair">
  <div><span class="lbl">Přímá řeč</span><p>Zpěvák P. říká reportérce: <span class="de">„Ich freue mich sehr über diesen Preis!“</span></p></div>
  <div><span class="lbl">Nepřímá řeč</span><p>Druhý den reportérka v televizi vypráví: <span class="de">Der Sänger P. sagte, dass er sich über diesen Preis sehr <b>freue</b>.</span></p></div>
</div>
<p>Reportérka tím říká jen „<i>on to řekl</i>“, ne „<i>je to pravda</i>“. Konjunktiv I je tak jakési zdvořilé „prý“ a drží si od tvrzení odstup. Proto ho najdeš v každých novinách:</p>
<p class="de">Laut Polizei sei der Fahrer zu schnell gefahren.</p>
<p class="cz">Podle policie řidič (prý) jel příliš rychle.</p>

<h3>2. Hlavně v psaném textu</h3>
<p>Konjunktiv I se používá <b>hlavně v textech</b> (zprávy, novinové články, odborné texty, protokoly). V <b>hovorové řeči</b> dávají Němci přednost <b>Konjunktivu II</b>, nebo dokonce obyčejnému indikativu:</p>
<p class="de">Ich habe Sophies Freund gestern Abend in einer Bar gesehen.</p>
<p class="de">Katja sagte, dass sie deinen Freund gestern in einer Bar gesehen hat (habe).</p>
<p>V rozhovoru u kafe tedy klidně řekneš <i>hat</i>. V písemné práci nebo v dopise je správně <i>habe</i>.</p>

<h3>3. Návody</h3>
<p>Občas se Konjunktiv I objeví i v <b>návodech</b>, typicky s neosobním <i>man</i>:</p>
<ul>
  <li>Ve starších kuchařkách: <span class="de">Man nehme 3 Eier und schlage sie in die Schüssel.</span> <span class="cz">(Vezměte 3 vejce a rozklepněte je do mísy.)</span></li>
  <li>Na příbalových letácích léků: <span class="de">Man nehme täglich 3 Tropfen.</span> <span class="cz">(Užívejte denně 3 kapky.)</span></li>
</ul>

<h3>4. Rétorika a náboženství (patos)</h3>
<p>Ve slavnostních a náboženských výrocích plných patosu:</p>
<p class="de">Möge Eure Liebe ewig währen!</p>
<p class="cz">Kéž vaše láska trvá navěky!</p>
<div class="box cz-box">
  <h4>🇨🇿 Česká obdoba</h4>
  <p>Tady odpovídá Konjunktiv I českému <b>„kéž“</b> nebo <b>„ať“</b>. Navíc pár ustálených frází, které uslyšíš běžně:</p>
  <ul>
    <li><span class="de">Es lebe der König!</span> <span class="cz">Ať žije král!</span></li>
    <li><span class="de">Gott sei Dank!</span> <span class="cz">Bohu díky!</span></li>
    <li><span class="de">Sei es, wie es sei.</span> <span class="cz">Ať je to jak chce.</span></li>
  </ul>
</div>

<div class="box tip">
  <h4>💡 Jak Konjunktiv I poznáš</h4>
  <p>Nejlépe ve <b>3. osobě jednotného čísla</b>: <i>er komme</i> (ne <i>kommt</i>), <i>sie habe</i> (ne <i>hat</i>), <i>es sei</i> (ne <i>ist</i>). Koncovka <b>-e</b> u er/sie/es je jeho poznávací znamení.</p>
</div>
`,
  check: [
    { t: "choice", q: "Kde Konjunktiv I potkáš nejčastěji?", o: ["v hovorové řeči mezi přáteli", "v novinách a zprávách", "v rozkazech", "v podmínkových větách s wenn"], a: 1, ex: "Konjunktiv I se používá hlavně v psaném textu, typicky v nepřímé řeči ve zprávách. V hovoru se dává přednost Konjunktivu II." },
    { t: "choice", q: "Co znamená <span class=\"de\">Man nehme täglich 3 Tropfen.</span>?", o: ["Člověk vzal 3 kapky denně.", "Užívejte denně 3 kapky.", "Kdyby člověk bral 3 kapky denně…", "Prý bere 3 kapky denně."], a: 1, ex: "Konjunktiv I s <i>man</i> v návodu (příbalový leták) funguje jako pokyn." }
  ]
},
{
  id: "k1-tvoreni",
  title: "Tvoření Konjunktivu I",
  sub: "Kmen z infinitivu + koncovky, pravidlo náhrady",
  html: `
<p>Konjunktiv I Präsens se <b>odvozuje od infinitivu</b>: vezmeš kmen (infinitiv bez <i>-en</i>) a přidáš koncovky <b>-e, -est, -e, -en, -et, -en</b>.</p>

<table class="conj">
  <thead><tr><th></th><th>Indikativ Präsens</th><th>Konjunktiv I</th></tr></thead>
  <tbody>
    <tr class="same"><td>ich</td><td>hör<b>e</b>, ruf<b>e</b></td><td>hör<b>e</b>, ruf<b>e</b> <span class="eq">= indikativ</span></td></tr>
    <tr><td>du</td><td>hör<b>st</b>, ruf<b>st</b></td><td>hör<b>est</b>, ruf<b>est</b></td></tr>
    <tr><td>er/sie/es</td><td>hör<b>t</b>, ruf<b>t</b></td><td>hör<b>e</b>, ruf<b>e</b></td></tr>
    <tr class="same"><td>wir</td><td>hör<b>en</b>, ruf<b>en</b></td><td>hör<b>en</b>, ruf<b>en</b> <span class="eq">= indikativ</span></td></tr>
    <tr><td>ihr</td><td>hör<b>t</b>, ruf<b>t</b></td><td>hör<b>et</b>, ruf<b>et</b></td></tr>
    <tr class="same"><td>sie/Sie</td><td>hör<b>en</b>, ruf<b>en</b></td><td>hör<b>en</b>, ruf<b>en</b> <span class="eq">= indikativ</span></td></tr>
  </tbody>
</table>

<div class="box warn">
  <h4>⚠️ Kmen se nemění</h4>
  <p>U Konjunktivu I <b>nejsou žádné přehlásky ani změny samohlásky</b>, které znáš z indikativu. Prostě vezmeš infinitiv:</p>
  <ul>
    <li>er <i>nimmt</i> → er <b>nehme</b> (nehmen)</li>
    <li>er <i>fährt</i> → er <b>fahre</b> (fahren)</li>
    <li>er <i>kann</i> → er <b>könne</b> (können)</li>
    <li>er <i>weiß</i> → er <b>wisse</b> (wissen)</li>
  </ul>
  <p>Jedinou výjimkou je <b>sein</b>: ich <b>sei</b>, du <b>sei(e)st</b>, er <b>sei</b>, wir <b>seien</b>, ihr <b>seiet</b>, sie <b>seien</b> (u ich a er chybí -e).</p>
</div>

<h3>Pravidlo náhrady</h3>
<p><b>Většina tvarů Konjunktivu I se nedá odlišit od indikativu</b> (viz šedé řádky v tabulce). V takovém případě se <b>jako náhrada použije Konjunktiv II</b>:</p>
<p class="de">Die Kinder sagen, sie <s>haben</s> <b>hätten</b> Hunger.</p>
<p class="cz"><i>sie haben</i> by vypadalo jako obyčejný indikativ, proto <i>hätten</i>.</p>
<p>A když je i Konjunktiv II stejný jako Präteritum (u pravidelných sloves: <i>sie kauften</i>), použije se <b>würde + infinitiv</b>:</p>
<p class="de">Die Nachbarn erzählen, sie <b>würden</b> ein Auto <b>kaufen</b>.</p>

<h3>Pomocná a vzorová slovesa</h3>
<p>Modře jsou tvary, které se <b>opravdu používají</b>. Pro všechny ostatní sáhni po Konjunktivu II.</p>
<div class="scroll">
<table class="conj grid">
  <thead><tr><th></th><th>sein</th><th>haben</th><th>werden</th><th>müssen</th><th>wollen</th><th>kaufen</th><th>lassen</th><th>wissen</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td class="hi">sei</td><td>habe</td><td>werde</td><td class="hi">müsse</td><td class="hi">wolle</td><td>kaufe</td><td>lasse</td><td class="hi">wisse</td></tr>
    <tr><td>du</td><td class="hi">seist</td><td>habest</td><td>werdest</td><td>müssest</td><td>wollest</td><td>kaufest</td><td>lassest</td><td>wissest</td></tr>
    <tr><td>er/sie/es</td><td class="hi">sei</td><td class="hi">habe</td><td class="hi">werde</td><td class="hi">müsse</td><td class="hi">wolle</td><td class="hi">kaufe</td><td class="hi">lasse</td><td class="hi">wisse</td></tr>
    <tr><td>wir</td><td class="hi">seien</td><td>haben</td><td>werden</td><td>müssen</td><td>wollen</td><td>kaufen</td><td>lassen</td><td>wissen</td></tr>
    <tr><td>ihr</td><td>seiet</td><td>habet</td><td>werdet</td><td>müsset</td><td>wollet</td><td>kaufet</td><td>lasset</td><td>wisset</td></tr>
    <tr><td>sie/Sie</td><td class="hi">seien</td><td>haben</td><td>werden</td><td>müssen</td><td>wollen</td><td>kaufen</td><td>lassen</td><td>wissen</td></tr>
  </tbody>
</table>
</div>

<div class="box tip">
  <h4>💡 V praxi stačí</h4>
  <p>Umět <b>er/sie/es</b> (kmen + e) a <b>všechny tvary slovesa sein</b>. Tvary jako <i>ihr habet</i> nebo <i>du wissest</i> znějí knižně a skoro se nepoužívají.</p>
</div>
<p>Vyzkoušej si to v záložce <a href="#/tabulky">Tabulky</a>: u každého slovesa vidíš, kdy je potřeba náhrada.</p>
`,
  check: [
    { t: "choice", q: "Jak zní Konjunktiv I od <i>er nimmt</i> (nehmen)?", o: ["er nimmt", "er nehme", "er nähme", "er nimme"], a: 1, ex: "Kmen z infinitivu <i>nehm-</i> + <i>-e</i>. Tvar <i>nähme</i> je Konjunktiv II." },
    { t: "choice", q: "<span class=\"de\">Meine Eltern sagen, sie ___ keine Zeit.</span>", o: ["haben", "habe", "hätten"], a: 2, ex: "Konjunktiv I <i>sie haben</i> = indikativ, proto náhrada Konjunktivem II: <i>hätten</i>." },
    { t: "choice", q: "Který tvar je Konjunktiv I slovesa <i>sein</i> pro <i>er</i>?", o: ["er seie", "er sei", "er wäre", "er ist"], a: 1, ex: "<i>sein</i> je výjimka: er <b>sei</b> (bez -e)." }
  ]
},
{
  id: "k1-casy",
  title: "Časy v nepřímé řeči",
  sub: "Perfekt, Präsens, Futur v Konjunktivu I",
  html: `
<p>Nepřímá řeč může stát ve všech šesti časech, ale <b>Konjunktiv I má jen tři časové roviny</b>. Podle zvoleného tvaru poznáš, <b>kdy se děj odehrává</b> vzhledem k okamžiku, kdy to dotyčný řekl:</p>

<div class="tl">
  <div class="tl-row"><b>Konjunktiv I Perfekt</b><span>Děj už proběhl (<b>předtím</b>).</span></div>
  <div class="tl-row"><b>Konjunktiv I Präsens</b><span>Děj probíhá v okamžiku mluvení (<b>současně</b>).</span></div>
  <div class="tl-row"><b>Konjunktiv I Futur</b><span>Děj proběhne později (<b>potom</b>).</span></div>
</div>

<h3>Stavba věty</h3>
<p>V nepřímé řeči je vždy <b>uvozovací (nadřazená) věta</b>, ve které je jmenována mluvící osoba. Ve <b>druhé části</b> se pak dozvíš, o co jde.</p>
<table class="conj two">
  <thead><tr><th>übergeordneter Satz</th><th>untergeordneter Satz</th></tr></thead>
  <tbody>
    <tr><td>Anja erzählte,</td><td><span class="tag">K I Perfekt</span> <span class="de">dass sie vor einem Jahr ein Kind bekommen <b>habe</b>.</span></td></tr>
    <tr><td>Sie sagte,</td><td><span class="tag">K I Präsens</span> <span class="de">sie <b>gehe</b> jetzt wieder arbeiten.</span></td></tr>
    <tr><td>Ihr Chef hat ihr versprochen,</td><td><span class="tag">K I Futur</span> <span class="de">dass sie nur vormittags arbeiten <b>werde</b>.</span></td></tr>
  </tbody>
</table>

<div class="box cz-box">
  <h4>🇨🇿 Dobrá zpráva pro Čechy</h4>
  <p>Čas v nepřímé řeči <b>nezávisí na čase uvozovací věty</b>, stejně jako v češtině: „Řekla, že <i>jde</i> zase do práce.“ Nic neposouváš jako v angličtině (<i>she said she was going</i>). Je jedno, jestli je to <i>sie sagt</i>, <i>sie sagte</i> nebo <i>sie hat gesagt</i>.</p>
  <p>Všechny minulé časy (Präteritum, Perfekt, Plusquamperfekt) se v nepřímé řeči spojí do <b>jednoho</b>: Konjunktiv I Perfekt.<br>
  <span class="de">„Ich war krank.“</span> → <span class="de">Er sagt, er <b>sei</b> krank <b>gewesen</b>.</span></p>
</div>

<h3>Konjunktiv I Perfekt</h3>
<div class="formula"><b>haben/sein</b> v Konjunktivu I <span>+</span> <b>Partizip II</b></div>
<p><span class="de">ich sei gegangen</span>, <span class="de">er habe gegeben</span></p>
<p class="de">Die Oma sagte, sie habe heute keinen Kuchen gebacken.</p>
<p><b>Náhrada:</b> u <b>ich, wir, sie/Sie</b> se Konjunktiv I Perfekt neliší od indikativu Perfekt (<i>sie haben gekauft</i>), proto se použije Konjunktiv II:</p>
<p class="de">Lena erzählte, dass ihre Nachbarn ein Wohnmobil gekauft hätten.</p>
<p class="cz">(Se <i>sein</i> náhrada potřeba není: <i>sie seien gefahren</i> je jasný Konjunktiv I.)</p>

<h3>Konjunktiv I Futur</h3>
<div class="formula"><b>werden</b> v Konjunktivu I <span>+</span> <b>infinitiv</b></div>
<p><span class="de">er werde kommen</span>, <span class="de">du werdest bringen</span></p>
<p class="de">Die Kollegin versprach, sie werde morgen pünktlich sein.</p>
<p><b>Náhrada:</b> u <b>ich</b> a <b>v množném čísle</b> se neliší od indikativu Futur (<i>sie werden</i>), proto <b>würde + infinitiv</b>:</p>
<p class="de">Der Wetterbericht sagt, dass Regen und Stürme zunehmen würden.</p>
<p class="note">Pozn.: v učebnici je u Futur překlep („unterscheidet sich nicht vom Indikativ Perfekt“), správně má být <b>Indikativ Futur</b>.</p>

<h3>Navíc: co se v nepřímé řeči ještě mění</h3>
<ul>
  <li><b>Zájmena</b> podle smyslu: <span class="de">„Ich bin müde.“</span> → <span class="de">Sie sagt, <b>sie</b> sei müde.</span> <span class="de">„mein Auto“</span> → <span class="de"><b>sein</b> Auto</span>.</li>
  <li><b>S „dass“ nebo bez:</b> <span class="de">Sie sagt, dass sie müde <b>sei</b>.</span> (sloveso na konci) nebo <span class="de">Sie sagt, sie <b>sei</b> müde.</span> (slovosled hlavní věty). Obojí je správně.</li>
  <li><b>Otázka s tázacím slovem:</b> <span class="de">„Wann kommt der Zug?“</span> → <span class="de">Er fragt, wann der Zug <b>komme</b>.</span></li>
  <li><b>Otázka ano/ne</b> → <b>ob</b>: <span class="de">„Hast du Zeit?“</span> → <span class="de">Sie fragt, ob ich Zeit <b>hätte</b>.</span></li>
  <li><b>Rozkaz</b> → <b>sollen</b> (zdvořile <b>mögen</b>): <span class="de">„Warte!“</span> → <span class="de">Er sagt, ich <b>solle</b> warten.</span></li>
</ul>
`,
  check: [
    { t: "choice", q: "<span class=\"de\">„Ich habe ein Kind bekommen.“</span> Anja erzählte, dass sie ein Kind bekommen ___.", o: ["habe", "hätte", "werde", "hat"], a: 0, ex: "Děj proběhl před výpovědí: Konjunktiv I Perfekt. <i>sie habe</i> se od indikativu liší, takže náhrada není potřeba." },
    { t: "choice", q: "<span class=\"de\">„Ich gehe jetzt arbeiten.“</span> Sie sagte, sie ___ jetzt arbeiten.", o: ["ging", "gehe", "sei gegangen", "würde gegangen"], a: 1, ex: "Děj je současný s výpovědí: Konjunktiv I Präsens. Že je uvozovací věta v minulosti (<i>sagte</i>), na tom nic nemění." },
    { t: "choice", q: "<span class=\"de\">„Wir werden pünktlich sein.“</span> Die Kollegen versprachen, sie ___ pünktlich sein.", o: ["werden", "werde", "würden"], a: 2, ex: "Futur v množném čísle: <i>sie werden</i> = indikativ, proto náhrada <i>würden</i>." }
  ]
},
{
  id: "k2-pouziti",
  title: "Konjunktiv II: k čemu slouží",
  sub: "Šest situací, kdy ho použiješ",
  html: `
<p>Konjunktiv II použiješ všude tam, kde v češtině řekneš <b>bych, kdyby, jako by</b> nebo <b>kéž by</b>. Učebnice uvádí šest situací:</p>

<div class="uses">
  <div class="use"><h4>1. Nereálné věty <small>irreale Sätze</small></h4>
    <p class="de">Wenn es kein Internet gäbe, würden wir etwas zusammen unternehmen.</p>
    <p class="cz">Kdyby nebyl internet, podnikli bychom spolu něco.</p></div>
  <div class="use"><h4>2. Zdvořilé přání <small>höflicher Wunsch</small></h4>
    <p class="de">Wärst du so freundlich, dich zu beeilen?</p>
    <p class="cz">Byl bys tak laskav a pospíšil sis?</p>
    <p class="mini">Taky: <span class="de">Könnten Sie mir helfen?</span> <span class="de">Ich hätte gern einen Kaffee.</span> <span class="de">Würdest du bitte das Fenster schließen?</span></p></div>
  <div class="use"><h4>3. Rada <small>Rat geben</small></h4>
    <p class="de">Mit deinem Wohnungsproblem würde ich zum Mieterbund gehen.</p>
    <p class="cz">S tím tvým problémem s bytem bych šel do spolku nájemníků.</p>
    <p class="mini">Taky: <span class="de">An deiner Stelle würde ich…</span> <span class="de">Du solltest mehr schlafen.</span></p></div>
  <div class="use"><h4>4. Nereálná přání <small>irreale Wünsche</small></h4>
    <p class="de">Wenn ich nur etwas fliegen könnte!</p>
    <p class="cz">Kdybych tak aspoň trochu uměl létat!</p>
    <p class="mini">Typicky s <b>doch, bloß, nur</b>. Jde to i bez <i>wenn</i>, sloveso pak jde na začátek: <span class="de">Könnte ich doch fliegen!</span></p></div>
  <div class="use"><h4>5. Nereálná přirovnání <small>irreale Vergleiche</small></h4>
    <p class="de">Sie tat so, als ob sie nichts wüsste.</p>
    <p class="cz">Dělala, jako by nic nevěděla.</p>
    <p class="mini">Taky bez <i>ob</i>, se slovesem hned za <i>als</i>: <span class="de">Sie tat so, als wüsste sie nichts.</span></p></div>
  <div class="use"><h4>6. Nepřímá řeč <small>Indirekte Rede</small></h4>
    <p>Jako náhrada, <b>když se tvary indikativu a Konjunktivu I neliší</b>, aby nedošlo k nedorozumění.</p>
    <p class="de">Sie sagen, sie hätten keine Zeit.</p></div>
</div>

<div class="box cz-box">
  <h4>🇨🇿 Srovnání s češtinou</h4>
  <p>Stavba nereálné podmínky je stejná jako v češtině: podmínka i důsledek jsou v „podmiňovacím způsobu“.</p>
  <p><span class="de">Wenn ich Geld <b>hätte</b>, <b>würde</b> ich ein Auto <b>kaufen</b>.</span><br><span class="cz">Kdybych <b>měl</b> peníze, <b>koupil bych</b> auto.</span></p>
  <p>Jen pozor: české <i>kdyby</i> už v sobě „by“ má. Německé <i>wenn</i> je jen „když“, takže podmiňovací tvar musí nést sloveso (<i>hätte</i>).</p>
</div>
`,
  check: [
    { t: "choice", q: "<span class=\"de\">Er tut so, als ob er alles ___.</span>", o: ["weiß", "wüsste", "wusste"], a: 1, ex: "Nereálné přirovnání (<i>als ob</i>): Konjunktiv II <i>wüsste</i>. Pozor, <i>wusste</i> bez přehlásky je jen Präteritum." },
    { t: "choice", q: "O jakou situaci jde: <span class=\"de\">An deiner Stelle würde ich das nicht machen.</span>", o: ["nereálné přirovnání", "rada", "nepřímá řeč", "nereálné přání"], a: 1, ex: "<i>An deiner Stelle würde ich…</i> (Na tvém místě bych…) je typická rada." }
  ]
},
{
  id: "k2-tvoreni",
  title: "Tvoření Konjunktivu II",
  sub: "würde + infinitiv, Präteritum + přehláska, minulost",
  html: `
<h3>Pravidelná slovesa: würde + infinitiv</h3>
<div class="formula"><b>würde</b> (časované) <span>+</span> <b>infinitiv</b></div>
<table class="conj">
  <tbody>
    <tr><td>ich</td><td><b>würde</b> wohnen</td></tr>
    <tr><td>du</td><td><b>würdest</b> wohnen</td></tr>
    <tr><td>er/sie/es</td><td><b>würde</b> wohnen</td></tr>
    <tr><td>wir</td><td><b>würden</b> wohnen</td></tr>
    <tr><td>ihr</td><td><b>würdet</b> wohnen</td></tr>
    <tr><td>sie/Sie</td><td><b>würden</b> wohnen</td></tr>
  </tbody>
</table>
<p class="de">Ich würde hier gerne wohnen, wenn es nicht so teuer wäre.</p>
<p class="de">Wenn er nicht so viel arbeiten würde, hätte er mehr Zeit.</p>
<p class="cz">Proč würde? Vlastní Konjunktiv II pravidelných sloves je stejný jako Präteritum (<i>ich wohnte</i>), takže by nebylo poznat, že jde o podmínku.</p>

<div class="box cz-box"><h4>🇨🇿 Pomůcka</h4><p><b>würde ≈ „bych“</b>. <i>Ich würde wohnen</i> = <i>bydlel bych</i>.</p></div>

<h3>Nepravidelná slovesa: Präteritum + koncovky</h3>
<div class="formula"><b>kmen Präteritum</b> (+ přehláska) <span>+</span> <b>-e, -(e)st, -e, -en, -(e)t, -en</b></div>
<p>Samohlásky <b>a, o, u</b> dostanou přehlásku:</p>
<div class="three">
  <table class="conj"><thead><tr><th colspan="2">ich kam <b>a › ä</b></th></tr></thead><tbody>
    <tr><td>ich</td><td>käme</td></tr><tr><td>du</td><td>kämest</td></tr><tr><td>er/sie/es</td><td>käme</td></tr><tr><td>wir</td><td>kämen</td></tr><tr><td>ihr</td><td>kämet</td></tr><tr><td>sie/Sie</td><td>kämen</td></tr></tbody></table>
  <table class="conj"><thead><tr><th colspan="2">ich zog <b>o › ö</b></th></tr></thead><tbody>
    <tr><td>ich</td><td>zöge</td></tr><tr><td>du</td><td>zögest</td></tr><tr><td>er/sie/es</td><td>zöge</td></tr><tr><td>wir</td><td>zögen</td></tr><tr><td>ihr</td><td>zöget</td></tr><tr><td>sie/Sie</td><td>zögen</td></tr></tbody></table>
  <table class="conj"><thead><tr><th colspan="2">ich trug <b>u › ü</b></th></tr></thead><tbody>
    <tr><td>ich</td><td>trüge</td></tr><tr><td>du</td><td>trügest</td></tr><tr><td>er/sie/es</td><td>trüge</td></tr><tr><td>wir</td><td>trügen</td></tr><tr><td>ihr</td><td>trüget</td></tr><tr><td>sie/Sie</td><td>trügen</td></tr></tbody></table>
</div>
<p class="de">Wenn es nach mir ginge, bliebe ich lieber zu Hause.</p>
<p class="cz">Kdyby to bylo podle mě, zůstal bych raději doma. (ging › ginge, blieb › bliebe: bez a/o/u jen koncovka)</p>

<h3>Nejpoužívanější tvary</h3>
<p>Tyhle se opravdu používají a stojí za to je umět nazpaměť:</p>
<div class="scroll">
<table class="conj grid">
  <thead><tr><th></th><th>haben</th><th>sein</th><th>werden</th><th>müssen</th><th>dürfen</th><th>lassen</th><th>wissen</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>hätte</td><td>wäre</td><td>würde</td><td>müsste</td><td>dürfte</td><td>ließe</td><td>wüsste</td></tr>
    <tr><td>du</td><td>hättest</td><td>wär(e)st</td><td>würdest</td><td>müsstest</td><td>dürftest</td><td>ließest</td><td>wüsstest</td></tr>
    <tr><td>er/sie/es</td><td>hätte</td><td>wäre</td><td>würde</td><td>müsste</td><td>dürfte</td><td>ließe</td><td>wüsste</td></tr>
    <tr><td>wir</td><td>hätten</td><td>wären</td><td>würden</td><td>müssten</td><td>dürften</td><td>ließen</td><td>wüssten</td></tr>
    <tr><td>ihr</td><td>hättet</td><td>wäret</td><td>würdet</td><td>müsstet</td><td>dürftet</td><td>ließet</td><td>wüsstet</td></tr>
    <tr><td>sie/Sie</td><td>hätten</td><td>wären</td><td>würden</td><td>müssten</td><td>dürften</td><td>ließen</td><td>wüssten</td></tr>
  </tbody>
</table>
</div>
<p>Dále <b>gehen:</b> ich ginge, <b>bleiben:</b> ich bliebe. Navíc velmi častá: <b>können:</b> ich könnte, <b>geben:</b> es gäbe, <b>kommen:</b> ich käme.</p>
<p class="note">Pozor: <b>wollen</b> a <b>sollen</b> přehlásku nedostanou: <i>ich wollte, du solltest</i> (vypadá jako Präteritum, ale jako Konjunktiv II se běžně používá: <span class="de">Du solltest mehr schlafen.</span>).</p>

<h3>U ostatních nepravidelných sloves: würde + infinitiv</h3>
<p>Tvary jako <i>sähe, nähme, führe</i> znějí dnes knižně. V praxi se použije <b>würde + infinitiv</b>:</p>
<p class="de">Ich würde es so gern mit eigenen Augen sehen.</p>

<h3>Minulost: Konjunktiv II Plusquamperfekt</h3>
<p>Konjunktiv II má <b>jen jeden minulý tvar</b>:</p>
<div class="formula"><b>hätte/wäre</b> <span>+</span> <b>Partizip II</b></div>
<p class="de">Es wäre besser gewesen, wenn du es nicht gemacht hättest.</p>
<p class="cz">Bylo by bývalo lepší, kdybys to nebyl udělal. (Běžně: Bylo by lepší, kdybys to neudělal.)</p>
<p class="mini">Navíc s modálním slovesem: <span class="de">Ich hätte kommen können.</span> <span class="cz">(Mohl jsem přijít. / Byl bych mohl přijít.)</span></p>
`,
  check: [
    { t: "choice", q: "Konjunktiv II od <i>ich kam</i> (kommen):", o: ["ich kame", "ich käme", "ich komme", "ich kämte"], a: 1, ex: "Präteritum <i>kam</i> + přehláska a › ä + <i>-e</i> = <i>käme</i>." },
    { t: "choice", q: "Jak řekneš <i>Kdybych to byl věděl…</i>?", o: ["Wenn ich das wüsste…", "Wenn ich das gewusst hätte…", "Wenn ich das gewusst habe…", "Wenn ich das wissen würde…"], a: 1, ex: "Minulost v Konjunktivu II: <i>hätte</i> + Partizip II." },
    { t: "choice", q: "Proč se u pravidelných sloves používá <i>würde</i> + infinitiv?", o: ["Protože je to zdvořilejší.", "Protože jejich Konjunktiv II vypadá stejně jako Präteritum.", "Protože nemají Präteritum.", "Protože to tak chce slovosled."], a: 1, ex: "<i>ich kaufte</i> je Präteritum i Konjunktiv II. Aby bylo jasné, že jde o podmínku, použije se <i>ich würde kaufen</i>." }
  ]
},
{
  id: "tahak",
  title: "Tahák a časté chyby",
  sub: "Rozhodovací postup, shrnutí, na co si dát pozor",
  html: `
<h3>Postup: nepřímá řeč</h3>
<ol class="steps">
  <li><b>Kdy se to stalo</b> vzhledem k výpovědi? Předtím: Perfekt. Současně: Präsens. Potom: Futur.</li>
  <li><b>Vytvoř Konjunktiv I</b> (kmen infinitivu + -e…, u minulosti habe/sei + Partizip II, u budoucnosti werde + infinitiv).</li>
  <li><b>Liší se od indikativu?</b> Ano: hotovo. Ne: použij <b>Konjunktiv II</b>.</li>
  <li><b>Je Konjunktiv II stejný jako Präteritum</b> (pravidelná slovesa)? Pak <b>würde + infinitiv</b>.</li>
  <li>Uprav <b>zájmena</b> a u <i>dass</i> dej sloveso <b>na konec</b>.</li>
</ol>
<div class="flow">
  <div class="de">„Wir kaufen ein Auto.“</div>
  <div>K I: sie kaufen = indikativ ✗</div>
  <div>K II: sie kauften = Präteritum ✗</div>
  <div class="de"><b>Sie sagen, sie würden ein Auto kaufen.</b> ✓</div>
</div>

<h3>Postup: Konjunktiv II</h3>
<ol class="steps">
  <li>Je to <b>haben, sein, werden, modální sloveso, wissen</b> (nebo <i>gehen, bleiben, kommen, geben</i>)? Použij vlastní tvar: <i>hätte, wäre, könnte, müsste, wüsste, ginge…</i></li>
  <li>Jakékoli jiné sloveso: <b>würde + infinitiv</b>.</li>
  <li>Minulost: <b>hätte/wäre + Partizip II</b>.</li>
</ol>

<h3>Shrnutí</h3>
<div class="scroll">
<table class="conj two">
  <thead><tr><th></th><th>Konjunktiv I</th><th>Konjunktiv II</th></tr></thead>
  <tbody>
    <tr><td>Hlavní použití</td><td>nepřímá řeč (texty, zprávy)</td><td>nereálnost, přání, zdvořilost, rada, als ob</td></tr>
    <tr><td>Česky</td><td>nemá obdobu („prý“)</td><td>bych, kdyby, jako by</td></tr>
    <tr><td>Přítomnost</td><td>er komme, er habe, er sei</td><td>er käme / würde kommen, hätte, wäre</td></tr>
    <tr><td>Minulost</td><td>er habe gesehen, er sei gegangen</td><td>er hätte gesehen, er wäre gegangen</td></tr>
    <tr><td>Budoucnost</td><td>er werde kommen</td><td>(er würde kommen)</td></tr>
  </tbody>
</table>
</div>

<h3>Časté chyby</h3>
<div class="box warn">
  <ul>
    <li><b>Chybějící přehláska.</b> <i>hatte, war, konnte, wusste</i> je minulý čas! <i>hätte, wäre, könnte, wüsste</i> je Konjunktiv II. Jedna tečka mění „měl jsem“ na „měl bych“.</li>
    <li><b>Přehláska v Konjunktivu I.</b> <i>er nähme</i> je Konjunktiv II. Konjunktiv I je <i>er nehme</i> (z infinitivu).</li>
    <li><b>würde u haben a sein.</b> <i>Wenn ich Zeit haben würde</i> sice uslyšíš, ale správně a hezčí je <i>Wenn ich Zeit hätte</i>. Stejně <i>wäre</i> místo <i>sein würde</i>.</li>
    <li><b>Posouvání časů jako v angličtině.</b> <i>Sie sagte, sie gehe…</i>, ne <i>sie sei gegangen</i>, pokud jde o současný děj.</li>
    <li><b>Slovosled s dass.</b> <i>…, dass er krank <b>sei</b>.</i> (sloveso na konec). Bez <i>dass</i>: <i>…, er <b>sei</b> krank.</i></li>
  </ul>
</div>
`,
  check: [
    { t: "choice", q: "Která věta znamená <i>Kdybych měl čas…</i>?", o: ["Wenn ich Zeit hatte…", "Wenn ich Zeit hätte…", "Wenn ich Zeit habe…", "Wenn ich Zeit gehabt habe…"], a: 1, ex: "<i>hätte</i> s přehláskou = Konjunktiv II. <i>hatte</i> je jen Präteritum (Když jsem měl čas…)." },
    { t: "choice", q: "<span class=\"de\">„Wir arbeiten viel.“</span> Sie sagen, sie ___", o: ["arbeiten viel.", "arbeiteten viel.", "würden viel arbeiten.", "arbeite viel."], a: 2, ex: "K I <i>sie arbeiten</i> = indikativ, K II <i>sie arbeiteten</i> = Präteritum, proto <i>würden … arbeiten</i>." }
  ]
}
];

KONJ.SETS = [
{
  id: "u63",
  title: "Učebnice 63: Motorkáři",
  sub: "Wie heißt der Satz in der indirekten Rede?",
  source: "Cvičebnice s. 192",
  intro: "Pět motorkářů u stolu. Převeď, co říkají, do nepřímé řeči (Konjunktiv I). Doplň jen pokračování věty.",
  items: [
    { t: "input", q: "Holger: <span class=\"de\">„Da ist eine Mücke im Glas!“</span>", lead: "Holger sagt,", a: ["da sei eine Mücke im Glas", "dass da eine Mücke im Glas sei", "dass eine Mücke im Glas sei", "es sei eine Mücke im Glas", "eine Mücke sei im Glas"], show: "Holger sagt, da sei eine Mücke im Glas.", ex: "Vzorová věta z učebnice. <i>ist</i> → <i>sei</i>. S <i>dass</i> jde sloveso na konec: <i>dass da eine Mücke im Glas sei</i>." },
    { t: "input", q: "Hans: <span class=\"de\">„Das Essen riecht komisch.“</span>", lead: "Hans beschwert sich darüber, dass", a: ["das Essen komisch rieche"], show: "Hans beschwert sich darüber, dass das Essen komisch rieche.", ex: "<i>riecht</i> → Konjunktiv I <i>rieche</i> (kmen riech- + e). Po <i>dass</i> jde sloveso na konec." },
    { t: "input", q: "Reiner (k Ulimu): <span class=\"de\">„Wenn du es geschafft haben wirst, mit dem Rauchen aufzuhören, werde ich von einem Tag auf den anderen keinen Tropfen Alkohol mehr trinken.“</span>", lead: "Reiner verspricht Uli, dass", a: [
        "er, wenn {Uli|er} es geschafft haben werde, mit dem Rauchen aufzuhören, von einem Tag auf den anderen keinen Tropfen Alkohol mehr trinken werde",
        "er, wenn {Uli|er} es geschafft habe, mit dem Rauchen aufzuhören, von einem Tag auf den anderen keinen Tropfen Alkohol mehr trinken werde",
        "er von einem Tag auf den anderen keinen Tropfen Alkohol mehr trinken werde, wenn {Uli|er} es geschafft haben werde, mit dem Rauchen aufzuhören",
        "er von einem Tag auf den anderen keinen Tropfen Alkohol mehr trinken werde, wenn {Uli|er} es geschafft habe, mit dem Rauchen aufzuhören"
      ], show: "Reiner verspricht Uli, dass er, wenn Uli es geschafft haben werde, mit dem Rauchen aufzuhören, von einem Tag auf den anderen keinen Tropfen Alkohol mehr trinken werde.", ex: "Nejtěžší věta. <i>du</i> → <i>Uli/er</i>, <i>ich</i> → <i>er</i>. <i>wirst geschafft haben</i> (Futur II) → <i>geschafft haben werde</i>, <i>werde trinken</i> → <i>trinken werde</i>. Obě formy <i>werde</i> se od indikativu (<i>wird</i>) liší, takže zůstává Konjunktiv I." },
    { t: "input", q: "Uli: <span class=\"de\">„Meine Schwiegermutter meinte: Du hast doch keine Ahnung von Blumen! Der habe ich es aber gezeigt!“</span>", lead: "Uli erzählt,", a: [
        "seine Schwiegermutter habe gemeint, er habe {doch|} keine Ahnung von Blumen{| und}{| der} habe er es aber gezeigt",
        "seine Schwiegermutter habe gemeint, er habe {doch|} keine Ahnung von Blumen, er habe es ihr aber gezeigt",
        "dass seine Schwiegermutter gemeint habe, er habe {doch|} keine Ahnung von Blumen{| und}{| der} habe er es aber gezeigt"
      ], show: "Uli erzählt, seine Schwiegermutter habe gemeint, er habe doch keine Ahnung von Blumen. Der habe er es aber gezeigt.", ex: "<i>meinte</i> (minulost) → Konjunktiv I Perfekt <i>habe gemeint</i>. <i>du hast</i> → <i>er habe</i>. <i>habe ich gezeigt</i> → <i>habe er gezeigt</i> (3. osoba <i>habe</i> se liší od <i>hat</i>)." },
    { t: "input", q: "Dieter: <span class=\"de\">„Ich muss los. Meine Frau trifft sich mit ihren Freundinnen und ich soll auf die Kinder aufpassen.“</span>", lead: "Dieter behauptet,", a: [
        "er müsse los{| und}{|,} seine Frau treffe sich mit ihren Freundinnen und er solle auf die Kinder aufpassen",
        "dass er los müsse{| und}{|,} seine Frau treffe sich mit ihren Freundinnen und er solle auf die Kinder aufpassen",
        "er müsse los{| denn} seine Frau treffe sich mit ihren Freundinnen und er solle auf die Kinder aufpassen"
      ], show: "Dieter behauptet, er müsse los. Seine Frau treffe sich mit ihren Freundinnen und er solle auf die Kinder aufpassen.", ex: "<i>ich muss</i> → <i>er müsse</i>, <i>trifft</i> → <i>treffe</i> (z infinitivu treffen, bez změny e › i), <i>ich soll</i> → <i>er solle</i>. <i>meine Frau</i> → <i>seine Frau</i>." },
    { t: "input", q: "Martin: <span class=\"de\">„Wie lange darf man hier parken?“</span>", lead: "Martin fragt,", a: ["wie lange man hier parken dürfe"], show: "Martin fragt, wie lange man hier parken dürfe.", ex: "Otázka s tázacím slovem: <i>wie lange</i> + sloveso na konec. <i>darf</i> → <i>dürfe</i> (z infinitivu dürfen)." }
  ]
},
{
  id: "u64",
  title: "Učebnice 64: Zdvořileji",
  sub: "Sagen Sie es höflicher.",
  source: "Cvičebnice s. 193",
  intro: "Přeformuluj rozkaz jako zdvořilou prosbu s Konjunktivem II (würde + infinitiv, případně könnte).",
  items: [
    { t: "input", q: "<span class=\"de\">Bring den Müll raus!</span>", a: ["{würdest|könntest} du {bitte|} den Müll {rausbringen|hinausbringen|herausbringen}"], show: "Würdest du bitte den Müll rausbringen?", ex: "Vzor z učebnice: <i>würdest du</i> + <i>bitte</i> + infinitiv na konci. Odlučitelná předpona zůstane u infinitivu: <i>rausbringen</i>." },
    { t: "input", q: "<span class=\"de\">Beeilt euch!</span>", a: ["{würdet|könntet} ihr euch {bitte|} beeilen", "wärt ihr so freundlich{|,} euch zu beeilen"], show: "Würdet ihr euch bitte beeilen?", ex: "<i>ihr</i> → <i>würdet ihr</i>. Zvratné <i>euch</i> zůstává." },
    { t: "input", q: "<span class=\"de\">Helfen Sie mir!</span>", a: ["{würden|könnten} Sie mir {bitte|} helfen"], show: "Würden Sie mir bitte helfen?", ex: "Vykání: <i>Würden Sie</i>. Velmi časté je i <i>Könnten Sie mir bitte helfen?</i>" },
    { t: "input", q: "<span class=\"de\">Widersprich mir nicht dauernd!</span>", a: ["{würdest|könntest} du mir {bitte|} nicht {dauernd|ständig|immer} widersprechen"], show: "Würdest du mir bitte nicht dauernd widersprechen?", ex: "<i>widersprechen</i> je neodlučitelné, celé jde na konec. <i>nicht dauernd</i> stojí před infinitivem." },
    { t: "input", q: "<span class=\"de\">Fahr doch los!</span>", a: ["{würdest|könntest} du {bitte|doch|doch bitte|bitte doch|jetzt|bitte jetzt|} losfahren"], show: "Würdest du bitte losfahren?", ex: "Odlučitelné <i>los|fahren</i> se v infinitivu spojí: <i>losfahren</i>." },
    { t: "input", q: "<span class=\"de\">Bringen Sie mir ein Bier!</span>", a: ["{würden|könnten} Sie mir {bitte|} ein Bier bringen"], show: "Würden Sie mir bitte ein Bier bringen?", ex: "V hospodě taky: <i>Ich hätte gern ein Bier.</i> (To je taky Konjunktiv II.)" },
    { t: "input", q: "<span class=\"de\">Sitz still!</span>", a: ["{würdest|könntest} du {bitte|} {stillsitzen|still sitzen}"], show: "Würdest du bitte stillsitzen?", ex: "<i>stillsitzen</i> (sedět v klidu) jde na konec jako infinitiv." }
  ]
},
{
  id: "u65",
  title: "Učebnice 65: Kdyby tak…",
  sub: "Bilden Sie irreale Wunschsätze mit doch, bloß, nur.",
  source: "Cvičebnice s. 193",
  intro: "Vytvoř nereálné přání s Konjunktivem II a částicí doch, bloß nebo nur. Přání je opakem skutečnosti! Jde to s wenn (sloveso na konci) i bez něj (sloveso na začátku).",
  items: [
    { t: "input", q: "<span class=\"de\">Sie spricht immer viel zu laut.</span>", a: ["wenn sie {doch|bloß|nur} nicht immer viel zu laut {spräche|sprechen würde}", "spräche sie {doch|bloß|nur} nicht immer viel zu laut", "würde sie {doch|bloß|nur} nicht immer viel zu laut sprechen"], show: "Wenn sie bloß nicht immer viel zu laut spräche (sprechen würde)!", ex: "Vzor z učebnice. <i>sprach</i> → <i>spräche</i>, v hovoru spíš <i>sprechen würde</i>. Skutečnost je kladná, přání proto záporné (<i>nicht</i>)." },
    { t: "input", q: "<span class=\"de\">Du hast sie beleidigt.</span>", a: ["wenn du sie {doch|bloß|nur} nicht beleidigt hättest", "hättest du sie {doch|bloß|nur} nicht beleidigt"], show: "Wenn du sie doch nicht beleidigt hättest!", ex: "Skutečnost je v minulosti (Perfekt), proto Konjunktiv II minulý: <i>hättest … beleidigt</i>." },
    { t: "input", q: "<span class=\"de\">Ich muss alles alleine machen.</span>", a: ["wenn ich {doch|bloß|nur} nicht alles {alleine|allein} machen müsste", "müsste ich {doch|bloß|nur} nicht alles {alleine|allein} machen"], show: "Wenn ich bloß nicht alles alleine machen müsste!", ex: "Modální sloveso: <i>muss</i> → <i>müsste</i>. Ve vedlejší větě s <i>wenn</i> stojí na úplném konci." },
    { t: "input", q: "<span class=\"de\">Die Tür war nicht abgeschlossen.</span>", a: ["wenn die Tür {doch|bloß|nur} abgeschlossen gewesen wäre", "wäre die Tür {doch|bloß|nur} abgeschlossen gewesen"], show: "Wenn die Tür doch abgeschlossen gewesen wäre!", ex: "Minulost: <i>wäre … gewesen</i>. Skutečnost byla záporná, přání je kladné (bez <i>nicht</i>)." },
    { t: "input", q: "<span class=\"de\">Er lässt uns immer warten.</span>", a: ["wenn er uns {doch|bloß|nur} nicht immer warten {ließe|lassen würde}", "ließe er uns {doch|bloß|nur} nicht immer warten", "würde er uns {doch|bloß|nur} nicht immer warten lassen"], show: "Wenn er uns nur nicht immer warten ließe!", ex: "<i>lassen</i> → <i>ließe</i> (Präteritum ließ + e). Patří mezi běžně používané tvary." },
    { t: "input", q: "<span class=\"de\">Sie sind ständig schlecht gelaunt.</span>", a: ["wenn sie {doch|bloß|nur} nicht ständig schlecht gelaunt wären", "wären sie {doch|bloß|nur} nicht ständig schlecht gelaunt", "wenn sie {doch|bloß|nur} nicht {immer|so} schlecht gelaunt wären"], show: "Wenn sie bloß nicht ständig schlecht gelaunt wären!", ex: "<i>sind</i> → <i>wären</i>." },
    { t: "input", q: "<span class=\"de\">Das Haus wird verkauft.</span>", a: ["wenn das Haus {doch|bloß|nur} nicht verkauft {würde|werden würde}", "würde das Haus {doch|bloß|nur} nicht verkauft{| werden}"], show: "Wenn das Haus doch nicht verkauft würde!", ex: "Trpný rod: <i>wird verkauft</i> → <i>würde verkauft</i>. Tady je <i>würde</i> Konjunktiv II od <i>werden</i>." }
  ]
},
{
  id: "u66",
  title: "Učebnice 66: Smutný mops",
  sub: "Drücken Sie einen irrealen Wunsch aus.",
  source: "Cvičebnice s. 193",
  intro: "Mops na židli. Spoj dvě věty do nereálné podmínky: Wenn …, … . Obě části převrať, protože mluvíš o opaku skutečnosti.",
  items: [
    { t: "input", q: "<span class=\"de\">Er hat keinen Termin. Er muss lange warten.</span>", a: ["wenn er einen Termin hätte{,|} müsste er nicht {so|} lange warten"], show: "Wenn er einen Termin hätte, müsste er nicht so lange warten.", ex: "Vzor z učebnice. <i>hat keinen</i> → <i>hätte einen</i>, <i>muss</i> → <i>müsste nicht</i>. Hlavní věta po <i>wenn</i>-větě začíná slovesem." },
    { t: "input", q: "<span class=\"de\">Er ist klein. Man muss ihn auf den Stuhl heben.</span>", a: ["wenn er {nicht so klein|nicht klein|größer} wäre{,|} müsste man ihn nicht auf den Stuhl heben"], show: "Wenn er nicht so klein wäre, müsste man ihn nicht auf den Stuhl heben.", ex: "<i>ist</i> → <i>wäre</i>, <i>muss</i> → <i>müsste</i>." },
    { t: "input", q: "<span class=\"de\">Er hat keine Schuhe an. Er darf die Füße auf den Stuhl stellen.</span>", a: ["wenn er Schuhe {anhätte|an hätte}{,|} dürfte er die Füße nicht auf den Stuhl stellen"], show: "Wenn er Schuhe anhätte, dürfte er die Füße nicht auf den Stuhl stellen.", ex: "<i>anhaben</i> je odlučitelné: ve vedlejší větě <i>anhätte</i>. <i>darf</i> → <i>dürfte</i>." },
    { t: "input", q: "<span class=\"de\">Er guckt so traurig. Die anderen trösten ihn.</span>", a: ["wenn er nicht so traurig {gucken würde|guckte|schauen würde|schaute}{,|} würden {ihn die anderen|die anderen ihn} nicht trösten", "wenn er nicht so traurig {gucken würde|guckte}{,|} trösteten {ihn die anderen|die anderen ihn} nicht"], show: "Wenn er nicht so traurig gucken würde, würden die anderen ihn nicht trösten.", ex: "Pravidelná slovesa (<i>gucken, trösten</i>) potřebují <i>würde</i> + infinitiv, protože <i>guckte, trösteten</i> vypadá jako Präteritum." },
    { t: "input", q: "<span class=\"de\">Er kann nicht sprechen. Niemand unterhält sich mit ihm.</span>", a: ["wenn er sprechen könnte{,|} würde sich {jemand|einer|man} mit ihm unterhalten", "wenn er sprechen könnte{,|} würde {jemand|einer} sich mit ihm unterhalten", "wenn er sprechen könnte{,|} unterhielte sich {jemand|einer} mit ihm", "wenn er sprechen könnte{,|} würden sich {die anderen|alle} mit ihm unterhalten"], show: "Wenn er sprechen könnte, würde sich jemand mit ihm unterhalten.", ex: "<i>kann nicht</i> → <i>könnte</i>; <i>niemand</i> → <i>jemand</i>. <i>unterhielte</i> je správně, ale zní knižně." },
    { t: "input", q: "<span class=\"de\">Er kann nicht lesen. Ihm ist langweilig.</span>", a: ["wenn er lesen könnte{,|} wäre {ihm|es ihm} nicht {so|} langweilig"], show: "Wenn er lesen könnte, wäre ihm nicht langweilig.", ex: "<i>ist</i> → <i>wäre</i>. Po <i>wenn</i>-větě začíná hlavní věta slovesem: <i>wäre ihm…</i>" }
  ]
},
{
  id: "tvary1",
  title: "Tvary Konjunktivu I",
  sub: "Kmen z infinitivu + koncovka",
  intro: "Napiš tvar Konjunktivu I. Pamatuj: kmen z infinitivu, žádné přehlásky ani změny samohlásky.",
  items: [
    { t: "input", q: "er + <b>kommen</b>", a: ["komme"], show: "er komme", ex: "komm- + e (indikativ: kommt)." },
    { t: "input", q: "sie (ona) + <b>haben</b>", a: ["habe"], show: "sie habe", ex: "hab- + e (indikativ: hat)." },
    { t: "input", q: "es + <b>geben</b>", a: ["gebe"], show: "es gebe", ex: "Z infinitivu geben: <i>gebe</i>, ne <i>gibt</i>." },
    { t: "input", q: "man + <b>nehmen</b>", a: ["nehme"], show: "man nehme", ex: "Jako v kuchařce: <i>Man nehme…</i>" },
    { t: "input", q: "er + <b>fahren</b>", a: ["fahre"], show: "er fahre", ex: "Bez přehlásky: <i>fahre</i> (indikativ fährt, Konjunktiv II führe)." },
    { t: "input", q: "sie (ona) + <b>können</b>", a: ["könne"], show: "sie könne", ex: "Z infinitivu können: <i>könne</i> (ne kann)." },
    { t: "input", q: "er + <b>wissen</b>", a: ["wisse"], show: "er wisse", ex: "wiss- + e (indikativ: weiß)." },
    { t: "input", q: "man + <b>sollen</b>", a: ["solle"], show: "man solle", ex: "soll- + e." },
    { t: "input", q: "er + <b>mögen</b>", a: ["möge"], show: "er möge", ex: "Jako v <i>Möge Eure Liebe ewig währen!</i>" },
    { t: "input", q: "ich + <b>sein</b>", a: ["sei"], show: "ich sei", ex: "<i>sein</i> je výjimka: <i>ich sei</i> bez -e." },
    { t: "input", q: "du + <b>sein</b>", a: ["{seiest|seist}"], show: "du sei(e)st", ex: "Obojí je správně: <i>seist</i> i <i>seiest</i>." },
    { t: "input", q: "wir + <b>sein</b>", a: ["seien"], show: "wir seien", ex: "U <i>sein</i> se Konjunktiv I liší ve všech osobách, proto se používá všude." },
    { t: "input", q: "ihr + <b>sein</b>", a: ["seiet"], show: "ihr seiet", ex: "Tvar <i>seiet</i> je správně, ale v praxi vzácný." },
    { t: "input", q: "er + <b>werden</b>", a: ["werde"], show: "er werde", ex: "werd- + e (indikativ: wird). Používá se pro Futur: <i>er werde kommen</i>." },
    { t: "input", q: "er + <b>dürfen</b>", a: ["dürfe"], show: "er dürfe", ex: "Z infinitivu dürfen (indikativ darf)." },
    { t: "input", q: "du + <b>kommen</b>", a: ["kommest"], show: "du kommest", ex: "komm- + est. (V praxi se ale u <i>du</i> spíš použije Konjunktiv II.)" },
    { t: "input", q: "er + <b>sehen</b>", a: ["sehe"], show: "er sehe", ex: "Z infinitivu sehen (indikativ sieht)." },
    { t: "input", q: "er + <b>lassen</b>", a: ["lasse"], show: "er lasse", ex: "Bez přehlásky (indikativ lässt)." }
  ]
},
{
  id: "tvary2",
  title: "Tvary Konjunktivu II",
  sub: "hätte, wäre, würde, käme…",
  intro: "Napiš tvar Konjunktivu II (jedno slovo). Nepravidelná slovesa: Präteritum + přehláska + koncovka.",
  items: [
    { t: "input", q: "ich + <b>haben</b>", a: ["hätte"], show: "ich hätte", ex: "hatte + přehláska." },
    { t: "input", q: "du + <b>sein</b>", a: ["{wärst|wärest}"], show: "du wär(e)st", ex: "war + přehláska + (e)st." },
    { t: "input", q: "er + <b>werden</b>", a: ["würde"], show: "er würde", ex: "wurde + přehláska." },
    { t: "input", q: "wir + <b>müssen</b>", a: ["müssten"], show: "wir müssten", ex: "mussten + přehláska." },
    { t: "input", q: "sie (ona) + <b>dürfen</b>", a: ["dürfte"], show: "sie dürfte", ex: "durfte + přehláska." },
    { t: "input", q: "ich + <b>lassen</b>", a: ["ließe"], show: "ich ließe", ex: "ließ + e (bez a/o/u, takže bez přehlásky)." },
    { t: "input", q: "er + <b>wissen</b>", a: ["wüsste"], show: "er wüsste", ex: "wusste + přehláska." },
    { t: "input", q: "ihr + <b>haben</b>", a: ["hättet"], show: "ihr hättet", ex: "hätt- + et." },
    { t: "input", q: "ich + <b>kommen</b>", a: ["käme"], show: "ich käme", ex: "kam + ä + e." },
    { t: "input", q: "er + <b>gehen</b>", a: ["ginge"], show: "er ginge", ex: "ging + e." },
    { t: "input", q: "ich + <b>bleiben</b>", a: ["bliebe"], show: "ich bliebe", ex: "blieb + e." },
    { t: "input", q: "es + <b>geben</b>", a: ["gäbe"], show: "es gäbe", ex: "gab + ä + e. Velmi časté: <i>Wenn es … gäbe</i>." },
    { t: "input", q: "wir + <b>können</b>", a: ["könnten"], show: "wir könnten", ex: "konnten + přehláska." },
    { t: "input", q: "du + <b>können</b>", a: ["könntest"], show: "du könntest", ex: "Typické pro prosbu: <i>Könntest du…?</i>" },
    { t: "input", q: "sie (oni) + <b>ziehen</b>", a: ["zögen"], show: "sie zögen", ex: "zog + ö + en." },
    { t: "input", q: "ich + <b>tragen</b>", a: ["trüge"], show: "ich trüge", ex: "trug + ü + e." },
    { t: "input", q: "er + <b>sollen</b>", a: ["sollte"], show: "er sollte", ex: "<i>sollen</i> přehlásku nedostane: <i>sollte</i> (stejné jako Präteritum)." },
    { t: "input", q: "ihr + <b>sein</b>", a: ["{wärt|wäret}"], show: "ihr wär(e)t", ex: "wär- + (e)t." }
  ]
},
{
  id: "nahrada",
  title: "Konjunktiv I, nebo náhrada?",
  sub: "Kdy sáhnout po Konjunktivu II nebo würde",
  intro: "Vyber správný tvar pro nepřímou řeč. Když se Konjunktiv I neliší od indikativu, nastupuje Konjunktiv II.",
  items: [
    { t: "choice", q: "<span class=\"de\">Die Kinder sagen, sie ___ Hunger.</span>", o: ["haben", "hätten", "habe"], a: 1, ex: "K I <i>sie haben</i> = indikativ, proto K II <i>hätten</i>." },
    { t: "choice", q: "<span class=\"de\">Paul sagt, er ___ keine Zeit.</span>", o: ["hat", "habe", "hätte"], a: 1, ex: "<i>er habe</i> se od <i>er hat</i> liší, takže zůstává Konjunktiv I." },
    { t: "choice", q: "<span class=\"de\">„Wir kaufen ein neues Auto.“</span> Die Nachbarn erzählen, …", o: ["sie kaufen ein neues Auto.", "sie kauften ein neues Auto.", "sie würden ein neues Auto kaufen."], a: 2, ex: "K I <i>kaufen</i> = indikativ, K II <i>kauften</i> = Präteritum. Zbývá <i>würden … kaufen</i>." },
    { t: "choice", q: "<span class=\"de\">Anna sagt, sie ___ krank.</span>", o: ["ist", "sei", "wäre"], a: 1, ex: "<i>sei</i> je jasný Konjunktiv I." },
    { t: "choice", q: "<span class=\"de\">Meine Eltern sagen, sie ___ morgen.</span> (kommen)", o: ["kommen", "kommten", "kämen"], a: 2, ex: "K I <i>sie kommen</i> = indikativ. K II <i>kämen</i> (kam + ä). Šlo by i <i>würden morgen kommen</i>." },
    { t: "choice", q: "<span class=\"de\">Er behauptet, ich ___ das gewusst.</span>", o: ["habe", "hätte", "hat"], a: 1, ex: "<i>ich habe</i> = indikativ Perfekt, proto <i>ich hätte … gewusst</i>." },
    { t: "choice", q: "<span class=\"de\">Der Minister erklärt, er ___ nicht zurücktreten.</span> (Futur)", o: ["wird", "werde", "würde"], a: 1, ex: "<i>er werde</i> se liší od <i>er wird</i>: Konjunktiv I Futur." },
    { t: "choice", q: "<span class=\"de\">Die Experten sagen, die Preise ___ steigen.</span> (Futur)", o: ["werden", "werde", "würden"], a: 2, ex: "Množné číslo: <i>sie werden</i> = indikativ, proto <i>würden</i>." },
    { t: "choice", q: "<span class=\"de\">Lena erzählte, sie ___ nach Berlin gefahren.</span>", o: ["ist", "sei", "wäre"], a: 1, ex: "Perfekt se <i>sein</i>: <i>sei gefahren</i>. Tvary <i>sein</i> se v Konjunktivu I liší vždy." },
    { t: "choice", q: "<span class=\"de\">Die Kollegen meinten, sie ___ das nicht gewusst.</span>", o: ["haben", "habe", "hätten"], a: 2, ex: "<i>sie haben gewusst</i> = indikativ, proto <i>hätten gewusst</i>." },
    { t: "choice", q: "<span class=\"de\">Er sagt, er ___ es nicht.</span> (wissen)", o: ["weiß", "wisse", "wüsste"], a: 1, ex: "<i>er wisse</i> se liší od <i>er weiß</i>: Konjunktiv I." },
    { t: "choice", q: "<span class=\"de\">Sie sagen, sie ___ in Prag.</span> (wohnen)", o: ["wohnen", "wohnten", "würden … wohnen"], a: 2, ex: "Pravidelné sloveso v množném čísle: K I = indikativ, K II = Präteritum, proto <i>würden in Prag wohnen</i>." }
  ]
},
{
  id: "neprima",
  title: "Z přímé do nepřímé řeči",
  sub: "Celé věty v Konjunktivu I",
  intro: "Převeď do nepřímé řeči. Doplň jen pokračování věty (s dass, nebo bez něj). Nezapomeň na zájmena a na náhradu.",
  items: [
    { t: "input", q: "Anna: <span class=\"de\">„Ich bin müde.“</span>", lead: "Anna sagt,", a: ["{sie sei müde|dass sie müde sei}"], show: "Anna sagt, sie sei müde.", ex: "<i>ich bin</i> → <i>sie sei</i>." },
    { t: "input", q: "Tom: <span class=\"de\">„Ich habe keine Zeit.“</span>", lead: "Tom sagt,", a: ["{er habe keine Zeit|dass er keine Zeit habe}"], show: "Tom sagt, er habe keine Zeit.", ex: "<i>er habe</i> se liší od <i>er hat</i>." },
    { t: "input", q: "Die Kinder: <span class=\"de\">„Wir haben Hunger.“</span>", lead: "Die Kinder sagen,", a: ["{sie hätten Hunger|dass sie Hunger hätten}"], show: "Die Kinder sagen, sie hätten Hunger.", ex: "<i>sie haben</i> = indikativ, proto <i>hätten</i>." },
    { t: "input", q: "Lisa: <span class=\"de\">„Ich habe das Buch gelesen.“</span>", lead: "Lisa erzählt,", a: ["{sie habe das Buch gelesen|dass sie das Buch gelesen habe}"], show: "Lisa erzählt, sie habe das Buch gelesen.", ex: "Konjunktiv I Perfekt: <i>habe … gelesen</i>." },
    { t: "input", q: "Max: <span class=\"de\">„Ich bin nach Berlin gefahren.“</span>", lead: "Max erzählt,", a: ["{er sei nach Berlin gefahren|dass er nach Berlin gefahren sei}"], show: "Max erzählt, er sei nach Berlin gefahren.", ex: "Konjunktiv I Perfekt se <i>sein</i>: <i>sei … gefahren</i>." },
    { t: "input", q: "Max: <span class=\"de\">„Letztes Jahr fuhr ich nach Wien.“</span>", lead: "Max erzählt,", a: ["{er sei letztes Jahr nach Wien gefahren|letztes Jahr sei er nach Wien gefahren|dass er letztes Jahr nach Wien gefahren sei}"], show: "Max erzählt, er sei letztes Jahr nach Wien gefahren.", ex: "Präteritum (<i>fuhr</i>) se v nepřímé řeči mění na Konjunktiv I Perfekt: <i>sei … gefahren</i>. Konjunktiv I má jen jednu minulost." },
    { t: "input", q: "Der Chef: <span class=\"de\">„Ich komme morgen.“</span>", lead: "Der Chef sagt,", a: ["{er komme morgen|dass er morgen komme|er werde morgen kommen|dass er morgen kommen werde}"], show: "Der Chef sagt, er komme morgen.", ex: "<i>er komme</i> (Präsens) nebo <i>er werde kommen</i> (Futur)." },
    { t: "input", q: "Paul: <span class=\"de\">„Ich werde dich anrufen.“</span>", lead: "Paul verspricht mir,", a: ["{er werde mich anrufen|dass er mich anrufen werde}"], show: "Paul verspricht mir, er werde mich anrufen.", ex: "Futur: <i>werde … anrufen</i>. <i>dich</i> → <i>mich</i>, protože to Paul řekl mně." },
    { t: "input", q: "Ein Gast: <span class=\"de\">„Wann kommt der Zug?“</span>", lead: "Der Gast fragt,", a: ["wann der Zug komme"], show: "Der Gast fragt, wann der Zug komme.", ex: "Tázací slovo zůstává, sloveso jde na konec: <i>komme</i>." },
    { t: "input", q: "Sie fragt mich: <span class=\"de\">„Hast du Zeit?“</span>", lead: "Sie fragt mich,", a: ["ob ich Zeit {hätte|habe}"], show: "Sie fragt mich, ob ich Zeit hätte.", ex: "Otázka ano/ne → <i>ob</i>. <i>ich habe</i> = indikativ, proto lépe <i>hätte</i>." },
    { t: "input", q: "Der Lehrer zu den Schülern: <span class=\"de\">„Macht die Bücher auf!“</span>", lead: "Der Lehrer sagt den Schülern,", a: ["{sie sollten|sie sollen} die Bücher aufmachen", "dass sie die Bücher aufmachen {sollten|sollen}"], show: "Der Lehrer sagt den Schülern, sie sollten die Bücher aufmachen.", ex: "Rozkaz → <i>sollen</i>. <i>sie sollen</i> = indikativ, proto <i>sollten</i>." },
    { t: "input", q: "Der Sänger P.: <span class=\"de\">„Ich freue mich sehr über diesen Preis.“</span>", lead: "Der Sänger sagte,", a: ["er freue sich {sehr über diesen Preis|über diesen Preis sehr}", "dass er sich {sehr über diesen Preis|über diesen Preis sehr} freue"], show: "Der Sänger sagte, dass er sich über diesen Preis sehr freue.", ex: "Příklad z učebnice: <i>freut</i> → <i>freue</i>." }
  ]
},
{
  id: "casy",
  title: "Časy v nepřímé řeči",
  sub: "Předtím, současně, potom",
  intro: "Vyber správný tvar podle toho, kdy se děj odehrává vzhledem k výpovědi.",
  items: [
    { t: "choice", q: "<span class=\"de\">„Ich war gestern im Kino.“</span> Er sagt, …", o: ["er sei gestern im Kino gewesen.", "er war gestern im Kino.", "er wäre gestern im Kino."], a: 0, ex: "Minulost → Konjunktiv I Perfekt: <i>sei … gewesen</i>." },
    { t: "choice", q: "Uvozovací věta je v minulém čase (<i>sagte</i>), děj je současný s výpovědí. Jaký tvar?", o: ["Konjunktiv I Präsens", "Konjunktiv I Perfekt", "Konjunktiv I Futur"], a: 0, ex: "Čas uvozovací věty nehraje roli. Současnost = Präsens." },
    { t: "choice", q: "Konjunktiv I Perfekt vyjadřuje děj, který…", o: ["proběhl před výpovědí", "probíhá současně s výpovědí", "proběhne po výpovědi"], a: 0, ex: "Perfekt = předčasnost (vorher)." },
    { t: "choice", q: "<span class=\"de\">„Ich habe heute keinen Kuchen gebacken.“</span> Die Oma sagte, …", o: ["sie habe heute keinen Kuchen gebacken.", "sie backe heute keinen Kuchen.", "sie werde heute keinen Kuchen backen."], a: 0, ex: "Příklad z učebnice: K I Perfekt <i>habe gebacken</i>." },
    { t: "choice", q: "<span class=\"de\">„Ich bin morgen pünktlich.“</span> Die Kollegin versprach, sie ___ morgen pünktlich sein.", o: ["sei", "werde", "würde"], a: 1, ex: "Budoucnost: K I Futur <i>werde … sein</i>. Ve 3. osobě se liší od indikativu (<i>wird</i>)." },
    { t: "choice", q: "<span class=\"de\">„Wir haben ein Wohnmobil gekauft.“</span> Lena erzählte, dass ihre Nachbarn ein Wohnmobil gekauft ___.", o: ["haben", "habe", "hätten"], a: 2, ex: "<i>sie haben gekauft</i> = indikativ, proto <i>hätten</i>." },
    { t: "choice", q: "<span class=\"de\">„Regen und Stürme werden zunehmen.“</span> Der Wetterbericht sagt, dass Regen und Stürme ___", o: ["zunehmen werden.", "zunehmen würden.", "zunehmen werde."], a: 1, ex: "Futur v množném čísle → <i>würden</i>." },
    { t: "choice", q: "<span class=\"de\">„Ich arbeite jetzt im Büro.“</span> Sie hat gesagt, sie ___ jetzt im Büro.", o: ["arbeite", "habe gearbeitet", "arbeitete"], a: 0, ex: "Současný děj: Präsens <i>arbeite</i> (3. os. se liší od <i>arbeitet</i>)." },
    { t: "choice", q: "<span class=\"de\">„Ich hatte einen Unfall.“</span> Er erzählt, er ___ einen Unfall ___.", o: ["habe … gehabt", "hatte … (nic)", "hätte … (nic)"], a: 0, ex: "Präteritum → K I Perfekt: <i>habe … gehabt</i>." }
  ]
},
{
  id: "k2praxe",
  title: "Konjunktiv II v praxi",
  sub: "Podmínky, přání, rady, als ob",
  intro: "Doplň nebo přeformuluj s Konjunktivem II.",
  items: [
    { t: "choice", q: "<span class=\"de\">Wenn ich mehr Geld ___, würde ich reisen.</span>", o: ["hatte", "hätte", "habe"], a: 1, ex: "<i>hatte</i> je Präteritum. Konjunktiv II: <i>hätte</i>." },
    { t: "choice", q: "Zdvořile: <span class=\"de\">___ Sie mir bitte helfen?</span>", o: ["Konnten", "Könnten", "Kannten"], a: 1, ex: "<i>Könnten Sie…?</i> je zdvořilá prosba. <i>Konnten</i> je minulý čas." },
    { t: "choice", q: "<span class=\"de\">An deiner Stelle ___ ich zum Arzt gehen.</span>", o: ["werde", "würde", "wurde"], a: 1, ex: "Rada: <i>würde</i> + infinitiv." },
    { t: "choice", q: "<span class=\"de\">Es wäre besser gewesen, wenn du es nicht gemacht ___.</span>", o: ["hast", "hattest", "hättest"], a: 2, ex: "Minulost v K II: <i>hättest gemacht</i>." },
    { t: "choice", q: "<span class=\"de\">Wenn ich nur fliegen ___!</span>", o: ["kann", "konnte", "könnte"], a: 2, ex: "Nereálné přání: <i>könnte</i>." },
    { t: "choice", q: "<span class=\"de\">Wenn es kein Internet ___, würden wir mehr reden.</span>", o: ["gibt", "gab", "gäbe"], a: 2, ex: "<i>gab</i> + ä + e = <i>gäbe</i>." },
    { t: "choice", q: "<span class=\"de\">Er sieht aus, als ___ er krank.</span>", o: ["ist", "wäre", "war"], a: 1, ex: "<i>als</i> + sloveso hned za ním (bez <i>ob</i>): <i>als wäre er krank</i>." },
    { t: "choice", q: "<span class=\"de\">Du ___ mehr schlafen.</span> (rada: měl bys)", o: ["sollst", "solltest", "sölltest"], a: 1, ex: "<i>solltest</i> (bez přehlásky) = měl bys." },
    { t: "input", q: "<span class=\"de\">Ich habe kein Auto. Ich fahre mit dem Bus.</span>", a: ["wenn ich ein Auto hätte{,|} {würde ich nicht mit dem Bus fahren|führe ich nicht mit dem Bus|müsste ich nicht mit dem Bus fahren}"], show: "Wenn ich ein Auto hätte, würde ich nicht mit dem Bus fahren.", ex: "Obě části obrátíš: <i>kein Auto</i> → <i>ein Auto</i>, <i>fahre</i> → <i>würde nicht fahren</i>." },
    { t: "input", q: "<span class=\"de\">Ich bin krank. Ich kann nicht kommen.</span>", a: ["wenn ich {nicht krank|gesund} wäre{,|} könnte ich kommen"], show: "Wenn ich nicht krank wäre, könnte ich kommen.", ex: "<i>bin</i> → <i>wäre</i>, <i>kann</i> → <i>könnte</i>." },
    { t: "input", q: "<span class=\"de\">Ich hatte keine Zeit. Ich bin nicht gekommen.</span>", a: ["wenn ich Zeit gehabt hätte{,|} wäre ich gekommen"], show: "Wenn ich Zeit gehabt hätte, wäre ich gekommen.", ex: "Minulost: <i>hätte … gehabt</i>, <i>wäre … gekommen</i>." },
    { t: "input", q: "Zdvořile: <span class=\"de\">Gib mir das Salz!</span>", a: ["{würdest|könntest} du mir {bitte|} das Salz geben"], show: "Würdest du mir bitte das Salz geben?", ex: "<i>Würdest du / Könntest du</i> + infinitiv." },
    { t: "input", q: "<span class=\"de\">Er ist nicht reich, aber er tut so.</span>", lead: "Er tut so,", a: ["{als ob er reich wäre|als wäre er reich|als wenn er reich wäre}"], show: "Er tut so, als ob er reich wäre.", ex: "Nereálné přirovnání: <i>als ob … wäre</i> nebo <i>als wäre …</i>." }
  ]
},
{
  id: "poznej",
  title: "Poznej způsob a použití",
  sub: "Indikativ, Imperativ, K I, K II?",
  intro: "Urči, o jaký způsob nebo jaké použití jde.",
  items: [
    { t: "choice", q: "<span class=\"de\">Ich brauche ein Messer.</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 0, ex: "Konkrétní skutečnost." },
    { t: "choice", q: "<span class=\"de\">Gib das Messer her!</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 1, ex: "Rozkaz." },
    { t: "choice", q: "<span class=\"de\">Der Mann sagte, er brauche ein Messer.</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 2, ex: "Nepřímá řeč: <i>brauche</i>." },
    { t: "choice", q: "<span class=\"de\">Es wäre gut, wenn ich ein Messer hätte.</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 3, ex: "Přání: <i>wäre, hätte</i>." },
    { t: "choice", q: "<span class=\"de\">Man nehme täglich 3 Tropfen.</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 2, ex: "Návod (příbalový leták): Konjunktiv I." },
    { t: "choice", q: "<span class=\"de\">Möge Eure Liebe ewig währen!</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 2, ex: "Patos: Konjunktiv I <i>möge</i>." },
    { t: "choice", q: "<span class=\"de\">Er hatte keine Zeit.</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 0, ex: "Pozor, bez přehlásky: <i>hatte</i> = Präteritum (indikativ)." },
    { t: "choice", q: "<span class=\"de\">Er hätte keine Zeit.</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 3, ex: "S přehláskou: <i>hätte</i> = Konjunktiv II." },
    { t: "choice", q: "<span class=\"de\">Laut Polizei sei der Fahrer zu schnell gefahren.</span>", o: ["Indikativ", "Imperativ", "Konjunktiv I", "Konjunktiv II"], a: 2, ex: "Novinová zpráva: <i>sei gefahren</i>." },
    { t: "choice", q: "<span class=\"de\">Mit deinem Wohnungsproblem würde ich zum Mieterbund gehen.</span>", o: ["nereálná podmínka", "rada", "nereálné přirovnání", "zdvořilá prosba"], a: 1, ex: "Rada (Rat geben)." },
    { t: "choice", q: "<span class=\"de\">Wenn ich nur etwas fliegen könnte!</span>", o: ["nereálné přání", "rada", "nepřímá řeč", "zdvořilá prosba"], a: 0, ex: "Nereálné přání (irrealer Wunsch)." },
    { t: "choice", q: "<span class=\"de\">Wenn es kein Internet gäbe, würden wir etwas unternehmen.</span>", o: ["nereálné přirovnání", "nereálná podmínka", "nepřímá řeč", "rada"], a: 1, ex: "Nereálná podmínka (irrealer Satz)." },
    { t: "choice", q: "<span class=\"de\">Sie tat so, als ob sie nichts wüsste.</span>", o: ["nereálné přání", "nereálné přirovnání", "zdvořilá prosba", "nepřímá řeč"], a: 1, ex: "<i>als ob</i> = nereálné přirovnání." },
    { t: "choice", q: "<span class=\"de\">Wärst du so freundlich, dich zu beeilen?</span>", o: ["rada", "zdvořilá prosba", "nereálná podmínka", "nepřímá řeč"], a: 1, ex: "Zdvořilé přání (höflicher Wunsch)." },
    { t: "choice", q: "<span class=\"de\">Lena erzählte, dass ihre Nachbarn ein Wohnmobil gekauft hätten.</span>", o: ["nereálné přání", "nepřímá řeč (náhrada za K I)", "rada", "nereálné přirovnání"], a: 1, ex: "Konjunktiv II jako náhrada v nepřímé řeči, protože <i>sie haben gekauft</i> by vypadalo jako indikativ." }
  ]
}
];

/* Tvary pro interaktivní tabulku: ind = indikativ Präsens, k1, k2.
   k2prat: Konjunktiv II je shodný s Präteritem (proto v praxi würde + infinitiv).
   k2rare: vlastní tvar K II zní knižně, běžně würde + infinitiv. */
KONJ.VERBS = [
  { inf: "sein", cz: "být", ind: ["bin","bist","ist","sind","seid","sind"], k1: ["sei","sei(e)st","sei","seien","seiet","seien"], k2: ["wäre","wär(e)st","wäre","wären","wär(e)t","wären"] },
  { inf: "haben", cz: "mít", ind: ["habe","hast","hat","haben","habt","haben"], k1: ["habe","habest","habe","haben","habet","haben"], k2: ["hätte","hättest","hätte","hätten","hättet","hätten"] },
  { inf: "werden", cz: "stát se, budoucí čas", ind: ["werde","wirst","wird","werden","werdet","werden"], k1: ["werde","werdest","werde","werden","werdet","werden"], k2: ["würde","würdest","würde","würden","würdet","würden"] },
  { inf: "können", cz: "moci, umět", ind: ["kann","kannst","kann","können","könnt","können"], k1: ["könne","könnest","könne","können","könnet","können"], k2: ["könnte","könntest","könnte","könnten","könntet","könnten"] },
  { inf: "müssen", cz: "muset", ind: ["muss","musst","muss","müssen","müsst","müssen"], k1: ["müsse","müssest","müsse","müssen","müsset","müssen"], k2: ["müsste","müsstest","müsste","müssten","müsstet","müssten"] },
  { inf: "dürfen", cz: "smět", ind: ["darf","darfst","darf","dürfen","dürft","dürfen"], k1: ["dürfe","dürfest","dürfe","dürfen","dürfet","dürfen"], k2: ["dürfte","dürftest","dürfte","dürften","dürftet","dürften"] },
  { inf: "wollen", cz: "chtít", ind: ["will","willst","will","wollen","wollt","wollen"], k1: ["wolle","wollest","wolle","wollen","wollet","wollen"], k2: ["wollte","wolltest","wollte","wollten","wolltet","wollten"], k2note: "Bez přehlásky, stejné jako Präteritum, přesto se používá." },
  { inf: "sollen", cz: "mít (povinnost)", ind: ["soll","sollst","soll","sollen","sollt","sollen"], k1: ["solle","sollest","solle","sollen","sollet","sollen"], k2: ["sollte","solltest","sollte","sollten","solltet","sollten"], k2note: "Bez přehlásky, stejné jako Präteritum, přesto se používá (Du solltest…)." },
  { inf: "mögen", cz: "mít rád", ind: ["mag","magst","mag","mögen","mögt","mögen"], k1: ["möge","mögest","möge","mögen","möget","mögen"], k2: ["möchte","möchtest","möchte","möchten","möchtet","möchten"] },
  { inf: "wissen", cz: "vědět", ind: ["weiß","weißt","weiß","wissen","wisst","wissen"], k1: ["wisse","wissest","wisse","wissen","wisset","wissen"], k2: ["wüsste","wüsstest","wüsste","wüssten","wüsstet","wüssten"] },
  { inf: "lassen", cz: "nechat", ind: ["lasse","lässt","lässt","lassen","lasst","lassen"], k1: ["lasse","lassest","lasse","lassen","lasset","lassen"], k2: ["ließe","ließest","ließe","ließen","ließet","ließen"] },
  { inf: "kommen", cz: "přijít", ind: ["komme","kommst","kommt","kommen","kommt","kommen"], k1: ["komme","kommest","komme","kommen","kommet","kommen"], k2: ["käme","kämest","käme","kämen","kämet","kämen"] },
  { inf: "gehen", cz: "jít", ind: ["gehe","gehst","geht","gehen","geht","gehen"], k1: ["gehe","gehest","gehe","gehen","gehet","gehen"], k2: ["ginge","gingest","ginge","gingen","ginget","gingen"] },
  { inf: "geben", cz: "dát", ind: ["gebe","gibst","gibt","geben","gebt","geben"], k1: ["gebe","gebest","gebe","geben","gebet","geben"], k2: ["gäbe","gäbest","gäbe","gäben","gäbet","gäben"] },
  { inf: "bleiben", cz: "zůstat", ind: ["bleibe","bleibst","bleibt","bleiben","bleibt","bleiben"], k1: ["bleibe","bleibest","bleibe","bleiben","bleibet","bleiben"], k2: ["bliebe","bliebest","bliebe","blieben","bliebet","blieben"] },
  { inf: "nehmen", cz: "vzít", ind: ["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"], k1: ["nehme","nehmest","nehme","nehmen","nehmet","nehmen"], k2: ["nähme","nähmest","nähme","nähmen","nähmet","nähmen"], k2rare: true },
  { inf: "fahren", cz: "jet", ind: ["fahre","fährst","fährt","fahren","fahrt","fahren"], k1: ["fahre","fahrest","fahre","fahren","fahret","fahren"], k2: ["führe","führest","führe","führen","führet","führen"], k2rare: true },
  { inf: "sehen", cz: "vidět", ind: ["sehe","siehst","sieht","sehen","seht","sehen"], k1: ["sehe","sehest","sehe","sehen","sehet","sehen"], k2: ["sähe","sähest","sähe","sähen","sähet","sähen"], k2rare: true },
  { inf: "ziehen", cz: "táhnout", ind: ["ziehe","ziehst","zieht","ziehen","zieht","ziehen"], k1: ["ziehe","ziehest","ziehe","ziehen","ziehet","ziehen"], k2: ["zöge","zögest","zöge","zögen","zöget","zögen"], k2rare: true },
  { inf: "tragen", cz: "nést", ind: ["trage","trägst","trägt","tragen","tragt","tragen"], k1: ["trage","tragest","trage","tragen","traget","tragen"], k2: ["trüge","trügest","trüge","trügen","trüget","trügen"], k2rare: true },
  { inf: "tun", cz: "dělat", ind: ["tue","tust","tut","tun","tut","tun"], k1: ["tue","tuest","tue","tuen","tuet","tuen"], k2: ["täte","tätest","täte","täten","tätet","täten"], k2rare: true },
  { inf: "kaufen", cz: "koupit", ind: ["kaufe","kaufst","kauft","kaufen","kauft","kaufen"], k1: ["kaufe","kaufest","kaufe","kaufen","kaufet","kaufen"], k2: ["kaufte","kauftest","kaufte","kauften","kauftet","kauften"], k2prat: true },
  { inf: "machen", cz: "dělat", ind: ["mache","machst","macht","machen","macht","machen"], k1: ["mache","machest","mache","machen","machet","machen"], k2: ["machte","machtest","machte","machten","machtet","machten"], k2prat: true },
  { inf: "arbeiten", cz: "pracovat", ind: ["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"], k1: ["arbeite","arbeitest","arbeite","arbeiten","arbeitet","arbeiten"], k2: ["arbeitete","arbeitetest","arbeitete","arbeiteten","arbeitetet","arbeiteten"], k2prat: true }
];
