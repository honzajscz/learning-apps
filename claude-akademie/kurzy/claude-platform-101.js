/* Kurz: Claude Platform 101 (podle academy.claude.com/courses/claude-platform-101) */
AKADEMIE.add({
  id: "claude-platform-101",
  emoji: "🧱",
  title: "Claude Platform 101",
  category: "produkty",
  level: "Pro vývojáře, od prvního volání API",
  desc: "Jak stavět na Claude Platform: první volání API, výběr modelu, agentní smyčka, nástroje a thinking, vestavěné nástroje, skills, MCP, správa kontextu a managed agents. Krátké ukázky kódu, důraz na pochopení.",
  source: "https://academy.claude.com/courses/claude-platform-101",
  modules: [
    {
      title: "Co je Claude Platform",
      lessons: [
        {
          id: "cp-01",
          title: "Co je Claude Platform?",
          minutes: 5,
          lead: `Claude Platform je infrastruktura Anthropic pro práci s Claude z kódu. Místo chatu v prohlížeči posíláš strukturované požadavky a dostáváš strukturované odpovědi, s kontrolou nad každým detailem.`,
          blocks: [
            { t: "h", x: "Z čeho se skládá" },
            { t: "ul", items: [
              `<b>REST API</b>, které zavoláš z libovolného jazyka.`,
              `<b>SDK</b> pro různé programovací jazyky a nástroje pro <b>příkazovou řádku</b> (CLI).`,
              `<b>Claude Console</b>: správa API klíčů, sledování spotřeby, nasazení managed agents a testování promptů.`
            ] },
            { t: "h", x: "Tři vrstvy nad sebou" },
            { t: "table", head: ["Vrstva", "Co obsahuje", "K čemu"], rows: [
              ["<b>Primitiva</b>", "Messages API, tool use, soubory, web search, code execution, MCP servery, skills", "Stavební kameny, které voláš z kódu"],
              ["<b>Infrastruktura</b>", "Managed agents, opakování (retries), fronty, observabilita", "Aby systém vydržel, když se z jednoho volání stane tisíc"],
              ["<b>Řízení (controls)</b>", "Dashboardy, evaly, limity spotřeby, logy požadavků", "Knoflíky, které tým používá, když systém běží v produkci"]
            ] },
            { t: "key", h: `Zkratka: <b>stav z primitiv, škáluj na infrastruktuře, provozuj s řízením</b>. Stejnou strukturu uvidíš v Claude Console: sekce pro stavění, správu agentů a analytiku.` },
            { t: "p", h: `<b>Příklad:</b> spravuješ helpdesk a máš přidat tlačítko, které podle obsahu tiketu navrhne odpověď v tónu a podle pravidel týmu. Postup: vytvořit klienta, načíst tiket, zavolat <code>messages.create</code> a odpověď vrátit tlačítku k vykreslení.` },
            { t: "ex", title: "Ukázka: návrh odpovědi na tiket", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-haiku-4-5",   # jednoduchý úkol, stačí Haiku
    max_tokens=1024,
    system=TONE_AND_GUIDELINES,
    messages=[{"role": "user", "content": ticket_content}],
)
draft = response.content` }
            ], note: `<code>model</code> vybírá model, <code>max_tokens</code> omezuje délku odpovědi, <code>system</code> je systémový prompt s rolí, tónem a pravidly a <code>messages</code> je pole zpráv (role <code>user</code> = vstup uživatele, tedy text tiketu). Všimni si, že <b>nestavíš chatbota od nuly</b>: přidáváš Claude do produktu, který už existuje. Tak se dostaneš od „zeptat se Claude“ k „Claude je součástí mého produktu“.` },
            { t: "info", title: "Jak číst tento kurz", h: `Ukázky kódu jsou krátké výřezy, stačí jim rozumět. Většina je v Pythonu (SDK <code>anthropic</code>), některé v TypeScriptu (<code>@anthropic-ai/sdk</code>). Kdo si je chce spustit, potřebuje účet v Claude Console a API klíč z <b>platform.claude.com</b>.` }
          ],
          quiz: [
            { q: "Ve které vrstvě platformy jsou managed agents, fronty a observabilita?", o: ["Primitiva", "Infrastruktura", "Řízení (controls)"], a: 1, why: "Infrastruktura je to, co potřebuješ, aby agentní systém vydržel i za hranicí prototypu." },
            { q: "K čemu slouží parametr system ve volání messages.create?", o: ["Určuje, který model požadavek zpracuje", "Omezuje délku odpovědi", "Je to systémový prompt: role, tón a pravidla, která Claude dodržuje"], a: 2, why: "Model určuje parametr model, délku max_tokens. V system jsou instrukce pro chování Claude." },
            { q: "Proč je v příkladu s helpdeskem zvolený Haiku?", o: ["Návrh odpovědi je jednoduchý úkol", "Jen Haiku podporuje systémový prompt", "Haiku je nejschopnější model"], a: 0, why: "Na jednoduché úkoly stačí nejrychlejší a nejlevnější model. Výběru modelu se věnuje třetí lekce." }
          ],
          cards: [
            { f: "Tři vrstvy Claude Platform", b: "Primitiva (Messages API, nástroje, skills, MCP), infrastruktura (managed agents, fronty, observabilita), řízení (dashboardy, evaly). Stav z primitiv, škáluj na infrastruktuře, provozuj s řízením." },
            { f: "Čtyři základní parametry messages.create", b: "model (který model), max_tokens (strop délky odpovědi), system (systémový prompt), messages (pole zpráv s rolemi)." }
          ],
          terms: [
            { t: "Claude Platform", d: "Infrastruktura Anthropic pro práci s Claude z kódu: REST API, SDK, CLI a Claude Console pro klíče, spotřebu, managed agents a testování promptů." },
            { t: "Systémový prompt", d: "Instrukce v parametru system, které určují roli, tón a pravidla Claude pro celý požadavek." }
          ]
        },
        {
          id: "cp-02",
          title: "První volání API",
          minutes: 4,
          lead: `Každé volání Claude API vede přes funkci messages.create: model, strop tokenů a seznam zpráv. Na skutečný úkol stačí asi 20 řádků kódu.`,
          blocks: [
            { t: "h", x: "Příprava" },
            { t: "steps", items: [
              `API klíč získáš na <b>platform.claude.com</b>. Nové účty mají malý kredit na vyzkoušení, další kredit přidáš v Claude Console (Settings &gt; Billing).`,
              `Klíč ulož do souboru <code>.env.local</code>, ne do zdrojového kódu. Klíče zapsané natvrdo v kódu končí uniklé na GitHubu.`,
              `Nainstaluj SDK, v této lekci pro TypeScript: <code>npm install @anthropic-ai/sdk</code>.`
            ] },
            { t: "h", x: "Anatomie požadavku" },
            { t: "p", h: `Zadáváš tři věci: <b>model</b> (který model požadavek zpracuje), <b>max_tokens</b> (strop délky odpovědi) a <b>messages</b> (seznam zpráv s rolí <code>user</code> nebo <code>assistant</code>, podobně jako rozhovor s Claude jinde). Volitelně přidáš <code>system</code> se systémovým promptem.` },
            { t: "ex", title: "Ukázka: code review chybné funkce", turns: [
              { who: "sys", label: "Kód (TypeScript)", mono: true, text: `const buggyCode = \`function add(a, b) { return a - b; }\`;

const response = await client.messages.create({
  model: "claude-sonnet-5",
  max_tokens: 2048,
  system: "Jsi stručný senior reviewer. Zpětnou vazbu dej v jednom odstavci.",
  messages: [{ role: "user", content: \`Zkontroluj tento kód:\\n\${buggyCode}\` }],
});

for (const block of response.content) {
  if (block.type === "text") console.log(block.text);
}` },
              { who: "ai", text: `Funkce se jmenuje add, ale odčítá. Změň return a - b na return a + b.` }
            ], note: `Dvě věci: <b>systémový prompt tvaruje personu</b> (stručný reviewer, ne upovídaný). A <code>response.content</code> je <b>pole bloků</b>, ne řetězec. U prosté odpovědi je v něm obvykle jeden blok typu <code>text</code>, ale Claude může vrátit i volání nástrojů nebo thinking. Proto bloky vždy procházej a kontroluj typ.` },
            { t: "h", x: "Ze skriptu do produktu" },
            { t: "p", h: `Stejný tvar volání pohání třeba endpoint „shrnout“: z databáze vytáhneš přepis porady, předáš ho Claude se systémovým promptem „vytáhni poznatky a rizika“, výsledek uložíš zpět k záznamu a vrátíš do UI. Totéž volání, jen zabalené v route handleru.` },
            { t: "key", h: `Všechno další v kurzu staví na tomhle vzoru: <code>messages.create</code> s modelem, stropem tokenů a zprávami.` }
          ],
          quiz: [
            { q: "Co vrací response.content?", o: ["Jeden textový řetězec", "Pole bloků (text, volání nástrojů, thinking), které procházíš a kontroluješ typ", "Počet spotřebovaných tokenů"], a: 1, why: "Odpověď se skládá z bloků různých typů. Text najdeš v blocích typu text." },
            { q: "Kam patří API klíč?", o: ["Do souboru .env.local mimo správu verzí", "Natvrdo do zdrojového kódu", "Do systémového promptu"], a: 0, why: "Klíče v kódu snadno uniknou, třeba na GitHub. Patří do souboru s proměnnými prostředí." },
            { q: "Které tři věci zadáváš v každém volání messages.create?", o: ["Model, jazyk a formát", "Jen text otázky", "Model, max_tokens a messages"], a: 2, why: "Model, strop délky odpovědi a seznam zpráv. System je volitelný." }
          ],
          cards: [
            { f: "Anatomie požadavku", b: "model + max_tokens + messages (role user nebo assistant), volitelně system." },
            { f: "Proč procházet response.content", b: "Je to pole bloků různých typů (text, tool_use, thinking). Text je v blocích typu text." }
          ],
          terms: [
            { t: "API klíč", d: "Tajný klíč z Claude Console (platform.claude.com), kterým se tvůj kód prokazuje při volání API. Patří do souboru s proměnnými prostředí, ne do kódu." },
            { t: "Obsahový blok (content block)", d: "Jedna položka v poli content v odpovědi API: text, volání nástroje (tool_use), thinking a další typy." }
          ]
        },
        {
          id: "cp-03",
          title: "Výběr správného modelu",
          minutes: 5,
          lead: `Nejchytřejší model ti zvedne účet, nejlevnější nemusí stačit. Správný model je ten nejlevnější, jehož výstup bys opravdu poslal/a ven.`,
          blocks: [
            { t: "p", h: `Model volíš parametrem <code>model</code>. Anthropic dnes nabízí čtyři úrovně (tiers):` },
            { t: "table", head: ["Úroveň", "Aktuální model", "Na co"], rows: [
              ["<b>Fable</b>", "Claude Fable 5.1<br><code>claude-fable-5-1</code>", "Nejschopnější model, nová úroveň nad Opus pro nejtěžší úkoly (obecně dostupný od 1. září 2026). Dražší než Opus, takže jen tam, kde se extra schopnosti vyplatí."],
              ["<b>Opus</b>", "Claude Opus 5.5<br><code>claude-opus-5-5</code>", "Nejschopnější ze tří základních rodin, ale nejpomalejší a nejdražší z nich. Hluboké uvažování, složitá analýza, vícekrokové programování, citlivé psaní."],
              ["<b>Sonnet</b>", "Claude Sonnet 5<br><code>claude-sonnet-5</code>", "Vyvážená inteligence, rychlost a cena. Hodí se na většinu produkční práce."],
              ["<b>Haiku</b>", "Claude Haiku 4.5<br><code>claude-haiku-4-5</code>", "Nejrychlejší a nejlevnější. Velké objemy jednoduché práce: klasifikace, extrakce, směrování."]
            ] },
            { t: "h", x: "Nejdřív jednoduchá evaluace" },
            { t: "p", h: `Než napíšeš produkční kód, připrav <b>eval</b>: sadu vzorových vstupů, které proženeš každým modelem a ohodnotíš podle toho, co je pro tvůj případ dobrý výstup. Nic složitého, na začátek stačí 20 až 30 reprezentativních příkladů ze skutečné práce. Pak postupuj zdola nahoru:` },
            { t: "steps", items: [
              `Prožeň příklady přes <b>Haiku</b>. Pokud kvalita drží, máš hotovo a ušetřil/a jsi hodně peněz.`,
              `Pokud ne, zkus <b>Sonnet</b>.`,
              `Po <b>Opus</b> sáhni, jen když to úkol opravdu potřebuje.`
            ] },
            { t: "ex", title: "Ukázka: stejný prompt přes tři modely", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `models = ["claude-haiku-4-5", "claude-sonnet-5", "claude-opus-5-5"]

for model in models:
    response = client.messages.create(
        model=model,
        max_tokens=300,
        messages=[{"role": "user", "content": prompt}],
    )
    print(model, response.usage)` }
            ], note: `Mění se jen pole <code>model</code>, prompt i <code>max_tokens</code> zůstávají. <code>response.usage</code> vrací vstupní a výstupní tokeny, podle kterých se počítá účet. U dvouvěté definice trvá Opus nejdéle a píše nejuhlazeněji, ale ta uhlazenost je zbytečná. Haiku odpoví často pod sekundu a velmi slušně. U návrhu odpovědi regulátorovi bys stejným postupem nejspíš skončil/a u Opus. Eval má pokaždé stejný tvar.` },
            { t: "tip", title: "Směrování v produkci", h: `Nemusíš vybrat jeden model na všechno. V provozním dashboardu může jeden endpoint pro zpracování dokumentů každý příchozí soubor klasifikovat s <b>Haiku</b>, aktualizace pro klienty psát se <b>Sonnet</b> a jen odpovědi na výběrová řízení (RFP) posílat na <b>Opus</b>. Jedna fronta, tři modely, volba podle úkolu.` }
          ],
          quiz: [
            { q: "Jak postupovat při výběru modelu?", o: ["Začít u nejschopnějšího a postupně zkoušet levnější", "Udělat eval na 20 až 30 příkladech, začít u Haiku a jít výš, jen když kvalita nestačí", "Vybrat podle toho, co používá konkurence"], a: 1, why: "Hledáš nejlevnější model, jehož výstup bys poslal/a ven. Eval zdola nahoru ho najde nejrychleji." },
            { q: "Co vrací response.usage?", o: ["Vstupní a výstupní tokeny, podle kterých se platí", "Seznam dostupných modelů", "Doporučený model pro další volání"], a: 0, why: "Usage ukazuje spotřebu tokenů, ze které se počítá účet." },
            { q: "Který model se hodí na velké objemy klasifikace a směrování?", o: ["Fable", "Opus", "Haiku"], a: 2, why: "Haiku je nejrychlejší a nejlevnější, optimalizovaný na objem jednoduché práce." }
          ],
          cards: [
            { f: "Čtyři úrovně modelů", b: "Fable (nejvyšší schopnosti, nejdražší), Opus (těžké problémy), Sonnet (každodenní produkční práce), Haiku (rychlost a objem)." },
            { f: "Pravidlo výběru modelu", b: "Správný model je nejlevnější, jehož výstup bys opravdu poslal/a ven. Ověř evalem od Haiku nahoru." },
            { f: "Aktuální ID modelů", b: "claude-fable-5-1, claude-opus-5-5, claude-sonnet-5, claude-haiku-4-5." }
          ],
          terms: [
            { t: "Eval (evaluace)", d: "Sada reprezentativních vstupů, které proženeš modely a výstupy ohodnotíš podle toho, co je pro tvůj případ dobré. Podle ní vybíráš model." }
          ]
        }
      ]
    },
    {
      title: "Učíme agenta",
      lessons: [
        {
          id: "cp-04",
          title: "Agentní smyčka krok za krokem",
          minutes: 5,
          lead: `Jedno volání vrátí jednu odpověď. Agent jedná, podívá se na výsledek, rozhodne o dalším kroku a pokračuje. V API je to obyčejná smyčka while.`,
          blocks: [
            { t: "p", h: `<b>Agent</b> je autonomní verze Claude, která obsluhuje obě strany konverzace bez člověka uprostřed: dostane úkol, vybere nástroj a ve smyčce pracuje, dokud Claude nerozhodne, že je hotovo. Nejjednodušší implementace:` },
            { t: "steps", items: [
              `Pošli Claude zprávu spolu s dostupnými nástroji.`,
              `Claude odpoví buď finální odpovědí, nebo žádostí o použití nástroje, který jsi definoval/a.`,
              `Tvůj kód nástroj spustí.`,
              `Výsledek pošleš zpátky Claude.`,
              `Opakuj, dokud <code>stop_reason</code> není <code>end_turn</code>.`
            ] },
            { t: "ex", title: "Ukázka: jádro smyčky s nástrojem get_weather", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `while True:
    response = client.messages.create(
        model="claude-sonnet-5", max_tokens=1024,
        tools=tools, messages=messages,
    )
    if response.stop_reason == "end_turn":
        break                    # hotovo, vypiš text

    if response.stop_reason == "tool_use":
        results = []
        for block in response.content:
            if block.type == "tool_use":
                results.append({"type": "tool_result",
                                "tool_use_id": block.id,
                                "content": run_tool(block.name, block.input)})
        messages.append({"role": "assistant", "content": response.content})
        messages.append({"role": "user", "content": results})` }
            ], note: `Tři části: pole <code>tools</code> říká, co je k dispozici (název, popis, JSON schéma vstupů). Funkce <code>run_tool</code> tu jen natvrdo vrací „95F, sunny“; v aplikaci by sahala do databáze nebo na API. A samotná smyčka se rozhoduje podle <code>stop_reason</code>.` },
            { t: "ex", title: "Ukázka: co uvidíš po spuštění", turns: [
              { who: "user", text: `Co si mám dnes vzít na sebe v Austinu?` },
              { who: "sys", label: "Kolo 1 · stop_reason: tool_use", text: `Claude žádá get_weather(city="Austin").
Tvůj kód vrací: Weather in Austin: 95F, sunny` },
              { who: "ai", label: "Kolo 2 · stop_reason: end_turn", text: `Bude horko a slunečno. Vezmi si něco lehkého a prodyšného.` }
            ], note: `Dvě volání API, jedno spuštění nástroje, jedna finální odpověď. To je celá smyčka a skoro všechno, co nad Claude API postavíš, bude vypadat podobně.` },
            { t: "h", x: "Stejná smyčka v produkci" },
            { t: "p", h: `Smyčka stejného tvaru pohání třeba endpoint pro automatickou kontrolu: compliance agent čte statický posudek stavby, nástrojem dohledává příslušné stavební předpisy a nálezy rizik zapisuje do databáze jeden po druhém. Rozdíly: skutečné nástroje místo falešného počasí, výsledky proudí do UI jako server-sent events a nálezy se ukládají do tabulky.` },
            { t: "key", h: `<b>Smyčku a nástroje vlastníš ty, uvažování vlastní Claude.</b> Když smyčku vlastnit nechceš, managed agents ji pro tebe provozují na infrastruktuře Anthropic.` }
          ],
          quiz: [
            { q: "Kdy agentní smyčka končí?", o: ["Po pevném počtu kol", "Když stop_reason je end_turn", "Když Claude poprvé zavolá nástroj"], a: 1, why: "end_turn znamená, že Claude je hotový. tool_use znamená, že chce nástroj a smyčka pokračuje." },
            { q: "Kdo v této smyčce spouští nástroj get_weather?", o: ["Tvůj kód (funkce run_tool)", "Claude na serverech Anthropic", "Uživatel ručně"], a: 0, why: "Claude o nástroj jen požádá. Spouští ho tvůj kód a výsledek vrací zpět." },
            { q: "Co po spuštění nástroje přidáš do messages?", o: ["Nic, Claude výsledek vidí sám", "Novou konverzaci od začátku", "Odpověď Claude (role assistant) a zprávu role user s blokem tool_result navázaným na tool_use_id"], a: 2, why: "Claude potřebuje vidět svou žádost i výsledek, aby mohl pokračovat." }
          ],
          cards: [
            { f: "Agentní smyčka v API", b: "Pošli zprávy s nástroji → Claude žádá nástroj (tool_use) → tvůj kód ho spustí → vrátíš tool_result → opakuj do end_turn." },
            { f: "Kdo co vlastní", b: "Ty vlastníš smyčku a nástroje, Claude vlastní uvažování. Agent = Claude ve smyčce: pozoruj, rozhodni, jednej, opakuj." }
          ],
          terms: [
            { t: "stop_reason", d: "Pole v odpovědi API, které říká, proč Claude skončil: například end_turn (hotovo) nebo tool_use (chce použít nástroj)." }
          ]
        },
        {
          id: "cp-05",
          title: "Co je tool use?",
          minutes: 6,
          lead: `Claude sám nevidí do tvé databáze ani do projektového nástroje. Nástroje (tools) mu dávají přístup k externím datům a akcím. Claude rozhoduje, kdy je zavolat, spouští je ale tvůj kód.`,
          blocks: [
            { t: "p", h: `Nástroj je <b>funkce, kterou definuješ a zpřístupníš Claude</b>. Popíšeš, co dělá a jaké má vstupy. Klíčové: <b>Claude nástroj nespouští, spouští ho tvůj kód</b>. Claude požádá o volání, tvůj kód funkci provede, výsledek se vrátí Claude a ten pokračuje.` },
            { t: "ex", title: "Ukázka: definice nástroje", turns: [
              { who: "sys", label: "JSON", mono: true, text: `{
  "name": "lookup_building_code",
  "description": "Vyhledá oddíl stavebního předpisu podle jeho identifikátoru. Vrátí plné znění oddílu.",
  "input_schema": {
    "type": "object",
    "properties": {
      "section": { "type": "string", "description": "Oddíl předpisu, který se má vyhledat" }
    },
    "required": ["section"]
  }
}` }
            ], note: `Tři části: <code>name</code>, <code>description</code> a <code>input_schema</code>. Nástroje posíláš v požadavku jako pole <code>tools</code>. Když je Claude chce použít, vrátí <code>stop_reason: "tool_use"</code> a blok <code>tool_use</code> s názvem a vstupem. Tvůj kód nástroj zavolá a výsledek vrátí jako zprávu role <code>user</code> s blokem <code>tool_result</code>, navázaným na <code>id</code> volání.` },
            { t: "warn", h: `<b>Podle popisu (description) se Claude rozhoduje, zda nástroj zavolat.</b> Vágní popis je důvod číslo jedna, proč agenti selhávají nebo dostupné nástroje nepoužijí. Piš konkrétně.` },
            { t: "h", x: "Víc nástrojů: Claude vybírá" },
            { t: "p", h: `Balíš se na tři dny do Denveru a chceš dnešní počasí i předpověď. Nadefinuješ dva nástroje: <code>get_weather</code> („dnešní aktuální počasí ve městě“) a <code>get_forecast</code> („předpověď na další dny“). Smyčka je stejná jako minule, přibude jen funkce <code>runTool</code>, která podle názvu nástroje přepíná (<code>switch</code>). Třetí nástroj? Položka v poli a nový <code>case</code>.<br><br>Claude zavolá oba nástroje, někdy v jednom kole, jindy po sobě, a odpoví: vrstvy, dnes poletující sníh, během týdne se otepluje. Vybral podle popisů: „dnešní počasí“ a „další dny“ přiřadil správným nástrojům.` },
            { t: "h", x: "Tool runner: bez opakujícího se kódu" },
            { t: "p", h: `Ruční smyčka je hodně kódu na dvě vyhledávání a psát ke každé funkci JSON schéma je jako psát kód dvakrát. Proto je v SDK Claude (TypeScript, Python, Ruby, C#, Go, Java, PHP) v betě <b>tool runner</b>: nástroj definuješ jednou a runner obslouží celou smyčku tool use a tool result. V TypeScriptu nástroj popíšeš pomocníkem <code>betaZodTool()</code> a krátkým schématem v knihovně Zod (verze 3.25.0 nebo novější).` },
            { t: "ex", title: "Ukázka: tool runner", turns: [
              { who: "sys", label: "Kód (TypeScript)", mono: true, text: `const weatherTool = betaZodTool({
  name: "get_weather",
  description: "Get today's current weather for a city.",
  inputSchema: z.object({ city: z.string().describe("The city to check") }),
  run: async ({ city }) => getWeather(city),
});

const runner = client.beta.messages.toolRunner({
  model: "claude-sonnet-5",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Balím se na tři dny do Denveru…" }],
  tools: [weatherTool, forecastTool],
});
const finalMessage = await runner;` }
            ], note: `Žádná smyčka while, žádné přepínání podle <code>stop_reason</code>, žádné ruční vracení výsledků: to všechno dělá runner. Schéma v Zod zároveň <b>validuje vstup</b>, který Claude pošle. Await na runneru vrátí finální zprávu, až se volání nástrojů usadí. Ve skutečné aplikaci nástroje obalují funkce, které už máš: compliance agent takhle zabalí existující <code>lookup_building_code</code> a <code>search_building_code</code>.` }
          ],
          quiz: [
            { q: "Kdo spouští nástroj, který jsi definoval/a?", o: ["Tvůj kód", "Claude", "Claude Console"], a: 0, why: "Claude o volání jen požádá. Funkci provede tvůj kód a výsledek vrátí jako tool_result." },
            { q: "Co je nejčastější důvod, proč agent nástroj nepoužije nebo ho použije špatně?", o: ["Moc krátké schéma", "Vágní popis (description) nástroje", "Moc nástrojů v poli tools"], a: 1, why: "Claude se podle popisu rozhoduje, kdy nástroj zavolat. Konkrétní popis je základ." },
            { q: "Co ti ušetří tool runner?", o: ["Psaní popisů nástrojů", "Platbu za tokeny", "Ruční smyčku, přepínání podle stop_reason a vracení výsledků"], a: 2, why: "Runner obslouží celou smyčku. Popis nástroje ale napsat musíš dál." }
          ],
          cards: [
            { f: "Tři části definice nástroje", b: "name, description (podle ní Claude vybírá), input_schema (JSON schéma vstupů)." },
            { f: "Tool use v kostce", b: "Claude požádá o nástroj (stop_reason tool_use) → tvůj kód ho spustí → výsledek vrátíš jako tool_result → Claude pokračuje." },
            { f: "Tool runner", b: "Pomocník v SDK (beta): nástroj definuješ jednou, runner obslouží smyčku. V TypeScriptu betaZodTool() se schématem v Zod." }
          ],
          terms: [
            { t: "Tool use (použití nástrojů)", d: "Schopnost Claude požádat o zavolání funkce, kterou mu definuješ. Claude rozhoduje kdy a s jakými vstupy, spouští ji tvůj kód." },
            { t: "Tool runner", d: "Pomocník v SDK Claude (beta), který sám obslouží smyčku volání nástrojů a vracení výsledků." }
          ]
        },
        {
          id: "cp-06",
          title: "Co je extended thinking?",
          minutes: 4,
          lead: `Některé úkoly potřebují víc než rychlou odpověď. S extended thinking Claude problém nejdřív promyslí krok za krokem a teprve pak odpoví.`,
          blocks: [
            { t: "cmp",
              bad: { lbl: "Odpověď hned", h: `Na vícekrokovou slovní úlohu o jablkách model odpoví okamžitě a sebejistě špatně: „Měl/a bys 6,5 jablka.“` },
              good: { lbl: "S thinking", h: `Claude nejdřív vygeneruje interní úvahu (chain of thought), projde jednotlivé kroky a teprve pak dá odpověď.` } },
            { t: "h", x: "Adaptivní thinking na Claude Opus 5" },
            { t: "ul", items: [
              `Na Opus 5 je thinking <b>adaptivní a ve výchozím stavu zapnuté</b>. Žádný rozpočet tokenů nevolíš: Claude sám rozhoduje, kdy a kolik přemýšlet.`,
              `Text úvahy zůstává skrytý, pokud v nastavení thinking neuvedeš <code>"display": "summarized"</code>. Pak odpověď obsahuje shrnutí úvahy vedle finálního textu.`,
              `Hloubku řídíš parametrem <code>effort</code>: <code>low</code>, <code>medium</code>, <code>high</code> (výchozí), <code>xhigh</code> (extra vysoká) a <code>max</code>.`
            ] },
            { t: "warn", h: `Past: <code>effort</code> patří do <code>output_config</code>, ne vedle bloku <code>thinking</code>.` },
            { t: "ex", title: "Ukázka: plánování výletu se shrnutou úvahou", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `response = client.messages.create(
    model="claude-opus-5",
    max_tokens=16000,
    thinking={"type": "adaptive", "display": "summarized"},
    output_config={"effort": "high"},
    tools=[weather_tool],
    messages=[{"role": "user", "content":
        "Naplánuj výlet autem ze San Francisca se dvěma zastávkami, "
        "zvaž počasí a dobu jízdy."}],
)` }
            ], note: `Výstup je zajímavější než obvykle: bloky <code>thinking</code>, ve kterých Claude zvažuje kompromisy, pak volání nástroje pro každé město a nakonec textový blok s doporučením. Úvaha je vidět, a o to tu jde.` },
            { t: "h", x: "Kdy ano a kdy ne" },
            { t: "table", head: ["Použij", "Vynech"], rows: [
              ["Matematika a vícekroková logika", "Jednoduchá klasifikace"],
              ["Ladění kódu", "Extrakce údajů"],
              ["Regulatorní analýza", "Rutinní šablonový text (boilerplate)"],
              ["Cokoli s kompromisy nebo porovnáním možností", "Tady jen přidá latenci a cenu bez lepšího výsledku"]
            ] },
            { t: "p", h: `V produkci je to rozdíl mezi agentem, který najde problémy jeden po druhém, a agentem, který je propojí. Compliance aplikace se zapnutým adaptivním thinking při automatické kontrole uvažuje napříč oddíly posudku a odhalí třeba, že specifikace zatížení větrem v oddílu tři odporuje specifikaci materiálu jinde v dokumentu.` }
          ],
          quiz: [
            { q: "Kam patří parametr effort?", o: ["Do bloku thinking", "Do output_config", "Do systémového promptu"], a: 1, why: "Častá chyba je dát effort vedle thinking. Patří do output_config." },
            { q: "Jak na Claude Opus 5 dostaneš shrnutí úvahy do odpovědi?", o: ["V nastavení thinking uvedeš display: summarized", "Nastavíš rozpočet tokenů pro thinking", "Nejde to, úvaha je vždy skrytá"], a: 0, why: "Bez display: summarized zůstává text úvahy skrytý. Rozpočet tokenů se na Opus 5 nevolí." },
            { q: "U kterého úkolu thinking spíš nezapínat?", o: ["Ladění kódu", "Regulatorní analýza", "Jednoduchá klasifikace tiketů"], a: 2, why: "U jednoduchých úkolů thinking jen přidá latenci a cenu, výsledek nezlepší." }
          ],
          cards: [
            { f: "Extended thinking", b: "Claude před odpovědí promyslí problém krok za krokem. Na Opus 5 je adaptivní a ve výchozím stavu zapnuté." },
            { f: "Úrovně effort", b: "low, medium, high (výchozí), xhigh, max. Nastavují se v output_config." },
            { f: "Kdy thinking", b: "Ano: matematika, logika, ladění, regulace, kompromisy. Ne: klasifikace, extrakce, boilerplate." }
          ],
          terms: [
            { t: "Extended thinking", d: "Funkce, při které Claude před odpovědí generuje interní úvahu (chain of thought). Na Opus 5 je adaptivní a ve výchozím stavu zapnutá." },
            { t: "Effort", d: "Parametr v output_config, kterým řídíš, jak moc Claude přemýšlí: low, medium, high (výchozí), xhigh, max." }
          ]
        }
      ]
    },
    {
      title: "Rozšiřujeme agenta",
      lessons: [
        {
          id: "cp-07",
          title: "Vestavěné nástroje",
          minutes: 5,
          lead: `Některé schopnosti jsou tak běžné, že je Anthropic dodává hotové. Nepíšeš kód, nehostuješ sandbox. Nástroj jen deklaruješ a Anthropic ho spustí.`,
          blocks: [
            { t: "h", x: "Serverové nástroje" },
            { t: "ul", items: [
              `<b>Web search</b>: hledá na internetu a vrací výsledky s citacemi.`,
              `<b>Code execution</b>: píše a spouští Python v sandboxu.`,
              `<b>Web fetch</b>: stáhne plný obsah z URL.`
            ] },
            { t: "p", h: `Běží na infrastruktuře Anthropic, takže <b>nepotřebuješ agentní smyčku</b>. Claude nástroj zavolá sám a výsledek přijde ve stejné odpovědi.` },
            { t: "ex", title: "Ukázka: web search a code execution", turns: [
              { who: "sys", label: "Kód (Python), jen podstatné řádky", mono: true, text: `# Volání 1: web search, hledání běží na serveru
tools=[{"type": "web_search_20260209", "name": "web_search"}]

# Volání 2: code execution, Claude napíše a spustí Python
tools=[{"type": "code_execution_20260120", "name": "code_execution"}]

# V odpovědi hledej typy bloků:
#   server_tool_use                   volání nástroje
#   bash_code_execution_tool_result   výstup kódu (stdout)
#   text                              běžný text` }
            ], note: `Žádné přepínání podle <code>stop_reason</code>, žádné vracení výsledků. U web search uvidíš volání nástroje a jednovětou odpověď s citacemi. U code execution kód, který Claude napsal, stdout ze sandboxu a finální odpověď. Nespouštěl/a jsi vyhledávač ani sandbox, jen jsi deklaroval/a dva nástroje.` },
            { t: "p", h: `Druhá kategorie jsou <b>klientské nástroje</b>, které běží tam, kde běží tvůj kód. Anthropic zveřejňuje jejich schémata a Claude je na ně trénovaný, takže schéma nepíšeš. Příklady: <b>Memory</b> (Claude čte a zapisuje paměť napříč sezeními) a <b>Bash</b> (trvalý shell pro spouštění příkazů). Pro memory mají čtyři SDK pomocníka, který obslouží volání paměti nad úložištěm, jež dodáš ty. Shell pro bash spouští tvoje aplikace.` },
            { t: "table", head: ["", "Serverové nástroje", "Klientské nástroje"], rows: [
              ["Příklady", "web search, code execution, web fetch", "memory, bash"],
              ["Kdo spouští", "Anthropic", "Tvůj kód"],
              ["Schéma", "Jen deklaruješ typ v <code>tools</code>", "Vestavěné v Claude, stejný tvar jako vlastní nástroj"],
              ["Výsledek", "Ve stejné odpovědi, bez smyčky", "Vracíš ho ty, jako u vlastních nástrojů"]
            ] },
            { t: "warn", h: `Web search umí pohánět třeba endpoint pro fact-check, který ověří každé číselné a regulatorní tvrzení v návrhu proti živému webu. Ale to, že něco najdeš na internetu, neznamená, že je to pravda. <b>Práci Claude vždy zkontroluj.</b>` }
          ],
          quiz: [
            { q: "Proč u serverových nástrojů nepotřebuješ agentní smyčku?", o: ["Spouští je Anthropic a výsledek přijde ve stejné odpovědi", "Vracejí jen text", "Fungují jen s Haiku"], a: 0, why: "Serverový nástroj proběhne na straně Anthropic, ty nic nespouštíš ani nevracíš." },
            { q: "Kdo spouští klientský nástroj bash?", o: ["Anthropic", "Tvoje aplikace", "Claude Console"], a: 1, why: "Schéma je vestavěné v Claude, ale shell běží tam, kde běží tvůj kód." },
            { q: "Jaký typ bloku v odpovědi označuje volání serverového nástroje?", o: ["tool_result", "thinking", "server_tool_use"], a: 2, why: "server_tool_use je volání, výsledek code execution přijde jako bash_code_execution_tool_result." }
          ],
          cards: [
            { f: "Serverové nástroje", b: "Web search, code execution, web fetch. Deklaruješ je v tools, spouští je Anthropic, výsledek je ve stejné odpovědi." },
            { f: "Klientské nástroje", b: "Memory a bash. Schéma je vestavěné v Claude, spouští je tvůj kód." }
          ],
          terms: [
            { t: "Serverový nástroj (server tool)", d: "Vestavěný nástroj, který deklaruješ v požadavku a spouští ho Anthropic na své infrastruktuře: web search, code execution, web fetch." },
            { t: "Klientský nástroj (client tool)", d: "Nástroj se schématem vestavěným v Claude, který ale spouští tvůj kód: například memory a bash." }
          ]
        },
        {
          id: "cp-08",
          title: "Skills v API",
          minutes: 5,
          lead: `Skill je složka s instrukcemi, skripty a zdroji, kterou Claude načte, když se hodí. Jednou ji nahraješ a pak ji připojíš k libovolnému volání messages.create.`,
          blocks: [
            { t: "p", h: `Jádrem každého Skillu je soubor <code>SKILL.md</code>. Učíš v něm Claude, <b>jak něco děláš ty</b>: formát status reportu, checklist pro review, release notes. Claude Skill přečte, postup dodrží a výstup má tvůj tvar.` },
            { t: "table", head: ["", "Nástroje (tools)", "Skills"], rows: [
              ["Co dělají", "Připojují Claude k datům a akcím", "Učí Claude postup"],
              ["Příklad", "„Najdi tento oddíl předpisu“, „pošli e-mail“", "„Vytvoř denní status report podle této šablony“"],
              ["Jak", "Claude nástroj zavolá a běží něco jiného", "Claude playbook čte a řídí se jím, někdy spustí přibalené skripty"],
              ["Zkratka", "<b>Co</b> Claude umí", "<b>Jak</b> to chceš mít udělané"]
            ] },
            { t: "info", h: `Skills se nenačítají celé hned. Na začátku se do kontextu dostane jen <b>název a popis</b>. Celý Skill se načte, až agent usoudí, že je relevantní. Kontext tak zůstane štíhlý, i když je Skillů k dispozici hodně.` },
            { t: "h", x: "Nahrání a připojení" },
            { t: "ex", title: "Ukázka: generátor status reportů", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `skill = client.skills.create(
    display_name="Status Report Generator",
    files=files_from_dir("status-report-skill"),  # složka se SKILL.md
)

response = client.messages.create(
    model="claude-opus-5",
    max_tokens=4096,
    container={"skills": [
        {"type": "custom", "skill_id": skill.id, "version": "latest"}
    ]},
    tools=[{"type": "code_execution_20250825", "name": "code_execution"}],
    messages=[{"role": "user",
               "content": f"Vytvoř denní status report z tohoto logu: {activity_log}"}],
)` }
            ], note: `Skill se nahraje jednou do workspace (programově, nebo přímo na Claude Platform) a pak se na něj odkazuješ přes ID. Připojuje se v <code>container.skills</code>. Je to seznam, takže můžeš vrstvit víc Skillů. Uživatelský prompt má jeden řádek, pravidla pro sekce, tón a blokery jsou ve Skillu.` },
            { t: "ul", items: [
              `Voláš běžné <code>client.messages.create</code> bez beta hlavičky. Skills jsou na Claude API obecně dostupné, hlavička <code>skills-2025-10-02</code> už není potřeba (požadavky, které ji posílají, dál fungují).`,
              `<b>Code execution je povinný.</b> Na API běží Skills uvnitř kontejneru nástroje code execution. Díky tomu mohou postupy dělat skutečnou práci, třeba spouštět skripty v terminálu.`
            ] },
            { t: "tip", h: `V produkci takhle tým sjednotí výstup celé funkce: v endpointu pro denní status reporty dostane každý PM stejnou strukturu, tón i pořadí sekcí, aniž by kdokoli kopíroval šablonu do promptu. <b>Po Skillu sáhni, když na „jak“ záleží stejně jako na „co“.</b>` }
          ],
          quiz: [
            { q: "Jaký je rozdíl mezi nástrojem a Skillem?", o: ["Žádný, jsou to synonyma", "Nástroj určuje, co Claude umí (data a akce); Skill, jak to chceš mít udělané (postup)", "Skill je rychlejší verze nástroje"], a: 1, why: "Nástroje připojují k datům a akcím, Skills učí postup." },
            { q: "Co se ze Skillu načte do kontextu na začátku?", o: ["Celý obsah všech souborů", "Nic", "Jen název a popis"], a: 2, why: "Celý Skill se načte, až agent usoudí, že je relevantní. Kontext zůstane štíhlý." },
            { q: "Proč je u Skillů v API zapnutý nástroj code execution?", o: ["Skills běží uvnitř jeho kontejneru, takže mohou spouštět skripty", "Kvůli citacím", "Je to jen doporučení"], a: 0, why: "Na API je code execution pro Skills povinný: poskytuje prostředí, ve kterém postup běží." }
          ],
          cards: [
            { f: "Nástroje vs. Skills", b: "Nástroje: co Claude umí (data, akce). Skills: jak to chceš mít udělané (postup)." },
            { f: "Skill v API", b: "Nahrát jednou (client.skills.create), připojit přes container.skills, zapnout code execution." }
          ],
          terms: []
        },
        {
          id: "cp-09",
          title: "MCP v API",
          minutes: 5,
          lead: `Máme nástroje i skills, tak proč ještě MCP? Odpověď je v tom, kdo udržuje kód integrace.`,
          blocks: [
            { t: "p", h: `Agent má stáhnout úkoly z Asany, zkontrolovat Google Kalendář a prohledat Slack. S vlastními nástroji napíšeš tři integrace. To jde. Horší je, že je pak musíš <b>udržovat</b> při každé změně API těch služeb, a ty se mění často.` },
            { t: "p", h: `MCP přesouvá údržbu na <b>poskytovatele služby</b>. Asana, Slack i Google zveřejňují vlastní MCP servery. Každý vystavuje svoje nástroje (s popisy, schématy a autentizací) přes standardní protokol. Když se jejich API změní, aktualizují server. Ty neměníš nic.` },
            { t: "table", head: ["Funkce", "K čemu"], rows: [
              ["<b>Tools</b>", "Tvoje interní systémy: databáze, projektový tracker, vlastní API. Kód vlastníš, takže i údržbu."],
              ["<b>Skills</b>", "Postup: šablona reportu, checklist pro review. Jsou to instrukce, ne nutně integrace."],
              ["<b>MCP</b>", "Služby třetích stran. Integraci udržuje poskytovatel: wrapper pro Asanu nepíšeš ty, napsala ho Asana."]
            ] },
            { t: "key", h: `Nástroje jsou na <b>tvoje věci</b>, skills na <b>tvoje procesy</b> a MCP na <b>věci všech ostatních</b>.` },
            { t: "ex", title: "Ukázka: připojení k MCP serveru Linear", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `response = client.beta.messages.create(
    model="claude-opus-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Jaké nástroje máš k dispozici?"}],
    mcp_servers=[{
        "type": "url",
        "url": "https://mcp.linear.app/mcp",
        "name": "linear",
        "authorization_token": os.environ["LINEAR_MCP_TOKEN"],
    }],
    tools=[{"type": "mcp_toolset", "mcp_server_name": "linear"}],
    betas=["mcp-client-2025-11-20"],
)` }
            ], note: `<code>mcp_servers</code> deklaruje spojení (typ, URL, jméno a volitelně token). Položka typu <code>mcp_toolset</code> v <code>tools</code> určuje, které nástroje serveru Claude smí použít; výchozí jsou všechny. Nenapsal/a jsi jediné schéma: Claude server prozkoumá, získá seznam nástrojů a vybere ten správný. MCP konektor je v betě, proto beta hlavička.` },
            { t: "h", x: "Jen vybrané nástroje" },
            { t: "ex", title: "Ukázka: Slack jen pro čtení", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `tools=[{
    "type": "mcp_toolset",
    "mcp_server_name": "slack",
    "default_config": {"enabled": False},
    "configs": {
        "search_messages": {"enabled": True},
        "list_channels": {"enabled": True},
    },
}]` }
            ], note: `MCP servery často vystavují spoustu nástrojů. Nechceš dát Claude právo zápisu, nebo nechceš, aby definice zabíraly kontext. Proto všechno vypneš a povolíš jen vybrané. Claude teď umí hledat ve Slacku a vypsat kanály, ale nic nepošle ani nesmaže. Seznam dostupných serverů a víc o protokolu najdeš na <b>modelcontextprotocol.io</b>.` }
          ],
          quiz: [
            { q: "Proč pro službu třetí strany použít MCP místo vlastního nástroje?", o: ["MCP je vždy rychlejší", "Integraci udržuje poskytovatel služby, při změně jeho API neměníš nic", "MCP nepotřebuje autentizaci"], a: 1, why: "MCP řeší hlavně údržbu: server publikuje a aktualizuje poskytovatel." },
            { q: "K čemu je v požadavku položka typu mcp_toolset?", o: ["Určuje, které nástroje MCP serveru smí Claude použít", "Deklaruje URL serveru", "Zapíná thinking"], a: 0, why: "Spojení deklaruje mcp_servers, přístup k nástrojům povoluje mcp_toolset." },
            { q: "Jak udělat ze Slack MCP serveru server jen pro čtení?", o: ["Nepřidat token", "Odebrat server z mcp_servers", "V default_config vše vypnout a v configs povolit jen search_messages a list_channels"], a: 2, why: "Vzor „vše vypnout, vybrané povolit“ omezí Claude na čtecí nástroje." }
          ],
          cards: [
            { f: "Tools, skills, MCP", b: "Tools: tvoje věci. Skills: tvoje procesy. MCP: věci všech ostatních, údržbu nese poskytovatel." },
            { f: "MCP v API", b: "mcp_servers deklaruje spojení, mcp_toolset v tools povoluje nástroje. Konektor je v betě, takže beta hlavička." }
          ],
          terms: [
            { t: "MCP konektor (API)", d: "Funkce Claude API (v betě), která se přes mcp_servers a mcp_toolset připojí ke vzdálenému MCP serveru. Claude si jeho nástroje zjistí sám." }
          ]
        },
        {
          id: "cp-10",
          title: "Správa kontextu",
          minutes: 5,
          lead: `Milion tokenů zní jako hodně, ale u skutečného agenta dojde rychleji, než čekáš. Správa kontextu je o tom, jak zůstat v okně a neztratit to důležité.`,
          blocks: [
            { t: "p", h: `Kontext je všechno, co Claude v daném kole vidí: <b>systémový prompt</b>, <b>historie zpráv</b>, <b>definice a výsledky nástrojů</b>, <b>připojené soubory a skills</b> a <b>thinking bloky</b>. Je to vstup každého volání API. Platíš za něj cestou dovnitř i ven, a když se okno zaplní, požadavek selže.` },
            { t: "key", h: `Cílem není dostat dovnitř všechno. Cílem je dostat dovnitř <b>to správné</b>.` },
            { t: "p", h: `Anthropic zveřejňuje <b>čtyři vzory</b> pro dlouho běžící agenty. Tři jsou funkce API, jeden je návrhový vzor.` },
            { t: "table", head: ["Vzor", "Jak funguje"], rows: [
              ["<b>1. Just-in-time kontext</b>", "Nenačítej všechno předem. Načti, co agent potřebuje teď, zbytek si dotáhne nástroji. Compliance agent nemá v promptu celou knihu předpisů, volá <code>lookup_building_code</code>. Jediný návrhový vzor, v API nic zvláštního."],
              ["<b>2. Serverová kompakce</b>", "Přidáš do požadavku klíč <code>context_management</code>. Když vstup překročí práh, API staré tahy samo shrne do jednoho bloku."],
              ["<b>3. Prompt caching</b>", "Označíš stabilní části požadavku (systémový prompt, definice nástrojů, dlouhý dokument) a znovu je použiješ napříč voláními za zlomek ceny."],
              ["<b>4. Memory tool</b>", "Claude čte a zapisuje do adresáře paměti přes volání nástrojů. Úložiště implementuješ ty na straně klienta (soubory, databáze, šifrované úložiště). Anthropic automaticky vloží instrukci, ať Claude před prací paměť zkontroluje."]
            ] },
            { t: "ex", title: "Ukázka: zapnutí serverové kompakce", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `response = client.beta.messages.create(
    betas=["compact-2026-01-12"],
    model="claude-opus-5",
    max_tokens=1024,
    context_management={"edits": [{"type": "compact_20260112"}]},
    messages=messages,
)` }
            ], note: `Délku konverzace nemusíš hlídat sám/sama. Jakmile vstup překročí práh, API shrne staré tahy. Memory tool je naopak pro kontext, který má <b>přežít mezi sezeními</b>: preference uživatele, průběžné poznámky agenta, co se rozhodlo minulý týden.` },
            { t: "info", title: "Proč na cachingu záleží", h: `Systémový prompt má 4 000 tokenů a voláš ho 100krát za hodinu. Caching je rozdíl mezi únosným účtem a telefonátem z financí.` },
            { t: "tip", h: `V produkci se vzory obvykle vrství. Compliance agent cachuje systémový prompt a definice nástrojů a oddíly předpisů si dotahuje just-in-time. Každý vzor řeší jiné selhání: cenu, velikost okna, bezstavovost. Vyber ty, které odpovídají tomu, co ti nefunguje. Managed agents mají caching a kompakci zapnuté ve výchozím stavu.` }
          ],
          quiz: [
            { q: "Co se stane, když se kontextové okno zaplní?", o: ["Claude zapomene systémový prompt", "Požadavek selže", "API přepne na větší model"], a: 1, why: "Kontext není nekonečný. Po zaplnění okna požadavek selže, proto se kontext spravuje." },
            { q: "Který ze čtyř vzorů je návrhový vzor, ne funkce API?", o: ["Just-in-time kontext", "Prompt caching", "Serverová kompakce"], a: 0, why: "Just-in-time je rozhodnutí, co a kdy načítáš. Ostatní tři jsou funkce API." },
            { q: "Kdo u memory tool implementuje úložiště?", o: ["Anthropic", "Nikdo, paměť je v modelu", "Ty, na straně klienta"], a: 2, why: "Claude jen volá nástroj. Kde a jak se paměť ukládá, je na tobě." }
          ],
          cards: [
            { f: "Čtyři vzory správy kontextu", b: "Just-in-time kontext, serverová kompakce, prompt caching, memory tool." },
            { f: "Co tvoří kontext", b: "Systémový prompt, historie zpráv, nástroje a jejich výsledky, soubory a skills, thinking bloky." }
          ],
          terms: [
            { t: "Prompt caching", d: "Označení stabilních částí požadavku (systémový prompt, nástroje, dlouhý dokument), které se pak znovu použijí napříč voláními za zlomek ceny." },
            { t: "Serverová kompakce (compaction)", d: "Funkce API, která po překročení prahu shrne staré tahy konverzace do jednoho bloku. Zapíná se klíčem context_management." }
          ]
        }
      ]
    },
    {
      title: "Managed Agents",
      lessons: [
        {
          id: "cp-11",
          title: "Co jsou managed agents?",
          minutes: 6,
          lead: `Claude Managed Agents je sada API pro stavění a nasazování agentů ve velkém. Agentní smyčku hostuje Anthropic, ty ji jen spouštíš ze své aplikace.`,
          blocks: [
            { t: "p", h: `Nadefinuješ agenty s konkrétními nástroji, personou a schopnostmi. Nakonfiguruješ sandboxová prostředí se správnými balíčky a síťovými pravidly. Pak ze své aplikace spouštíš sezení (sessions) a Claude pracuje v <b>izolovaném kontejneru</b> s plným přístupem k souborovému systému, spouštěním bash a vyhledáváním na webu. Uvnitř je známá smyčka: uvažuj, zavolej nástroj, přečti výsledek, opakuj. V Claude Console mají managed agents vlastní sekci.` },
            { t: "ex", title: "Ukázka 1: Kanban, který práci udělá", turns: [
              { who: "user", label: "Akce", text: `Přetáhnu tiket „Optimalizovat výkon webu“ do sloupce In progress.` },
              { who: "sys", label: "Back end", text: `Vytvořena session.
Prostředí: předinstalovaný Lighthouse a Puppeteer.
Repozitář z GitHubu připojen do kontejneru.
Rubrika: Lighthouse skóre nad 90, žádné zdroje blokující vykreslení, všechny obrázky lazy loaded.` },
              { who: "ai", text: `Spouštím audit. Komprimuji obrázky, inlinuji CSS, odkládám skripty.` },
              { who: "sys", label: "Grader (vlastní kontextové okno)", text: `Hodnotím výsledek podle rubriky a vracím zpětnou vazbu.` },
              { who: "ai", text: `Opravuji, co chybělo, a odevzdávám znovu. Lighthouse: 96.` }
            ], note: `Každé volání nástroje proudí na nástěnku živě přes <b>event stream</b>. Samostatný hodnotitel (grader) kontroluje výstup proti tvým kritériím a Claude podle něj opravuje. Druhý tiket můžeš přetáhnout, zatímco první běží: dvě sezení, dva kontejnery, paralelně.` },
            { t: "h", x: "Ukázka 2: Pravidelný průzkum s pamětí" },
            { t: "p", h: `Agent sleduje ceny a tarify všech SaaS nástrojů, za které firma platí, a report má hotový před stand-upem. Při každém běhu hledá na webu aktuální ceníky a změny tarifů a označí nové funkce, které by mohly ovlivnit smlouvy. V sandboxu spustí nákladovou analýzu v Pythonu, se skillem pro Excel připraví tabulku a napíše manažerské shrnutí. Přes MCP servery pošle odkaz do Slacku a založí úkol k revizi v Asaně. Díky <b>memory store</b> si před během přečte, co našel minulý týden, a po běhu uloží změny. Pondělní report pak může říct „náklady na compute jsou o 15 % nižší než minulý týden“.` },
            { t: "h", x: "Ukázka 3: Incident s více agenty" },
            { t: "p", h: `Z monitoringu přijde alert a back end ho pošle do nové session jako uživatelskou zprávu. Potřebuje-li agent víc dat, zavolá vlastní nástroj, který běží na tvém back endu. <b>Koordinátor</b> deleguje na tři specialisty, každý ve vlastním kontextovém okně nad sdíleným souborovým systémem, a jejich zjištění spojí do jednoho shrnutí. Než shrnutí odejde do Slacku, zasáhne <b>permission policy</b>: koncept vidíš, schválíš a teprve pak se pošle. Z paměti koordinátor pozná vzorec: „vypadá to jako problém s DNS před dvěma týdny, způsobený špatně nastaveným TTL“.` },
            { t: "table", head: ["Stavební kámen", "Co to je"], rows: [
              ["Agents", "Definice s konkrétními nástroji, personou a schopnostmi"],
              ["Sessions", "Jednotlivé běhy, které spouštíš ze své aplikace"],
              ["Environments", "Sandboxy se správnými balíčky a síťovými pravidly"],
              ["Tools", "Včetně vlastních nástrojů na tvém back endu"],
              ["MCP", "Připojení ke službám jako Slack a Asana"],
              ["Memory", "Úložiště, které agent čte před začátkem a zapisuje po skončení"],
              ["Outcomes", "Rubriky a gradery, které definují a kontrolují, co je hotovo"],
              ["Multi-agent coordination", "Koordinátoři delegující práci na specialisty"]
            ] },
            { t: "key", h: `Ty definuješ, jak vypadá hotovo. Claude pracuje, dokud se tam nedostane.` }
          ],
          quiz: [
            { q: "Kde běží agentní smyčka u Claude Managed Agents?", o: ["Na tvém serveru", "Na infrastruktuře Anthropic, v izolovaném kontejneru", "V prohlížeči uživatele"], a: 1, why: "Managed agents berou známou smyčku a hostují ji za tebe." },
            { q: "Co dělá grader v příkladu s Kanbanem?", o: ["Ve vlastním kontextovém okně hodnotí výstup podle rubriky a Claude podle zpětné vazby opravuje", "Spouští Lighthouse", "Schvaluje zprávy do Slacku"], a: 0, why: "Outcomes = rubrika (co je hotovo) a samostatný hodnotitel, který ji kontroluje." },
            { q: "K čemu slouží permission policy v příkladu s incidentem?", o: ["Zrychlí diagnózu", "Rozdělí práci mezi specialisty", "Citlivé akce, jako zpráva do Slacku, čekají na schválení člověkem"], a: 2, why: "Citlivé akce počkají, až je člověk schválí." }
          ],
          cards: [
            { f: "Claude Managed Agents", b: "Sada API pro agenty ve velkém: agentní smyčka hostovaná Anthropic v izolovaném kontejneru se soubory, bashem a web search." },
            { f: "Stavební kameny managed agents", b: "Agents, sessions, environments, tools, MCP, memory, outcomes (rubriky a gradery), multi-agent coordination." }
          ],
          terms: [
            { t: "Claude Managed Agents", d: "Sada API od Anthropic pro stavění a nasazování agentů ve velkém. Agentní smyčka běží na infrastruktuře Anthropic v izolovaném kontejneru." },
            { t: "Outcomes (rubrika a grader)", d: "U managed agents kritéria, co znamená hotovo, a samostatný hodnotitel, který výstup podle nich kontroluje a vrací zpětnou vazbu." }
          ]
        },
        {
          id: "cp-12",
          title: "První managed agent",
          minutes: 6,
          lead: `Když má smyčka běžet minuty i hodiny, přes mnoho nástrojů, se stavem a soubory a s obnovou po výpadku spojení, nechceš ji provozovat na svém serveru. Delegovat ji jde pomocí čtyř primitiv.`,
          blocks: [
            { t: "p", h: `Managed agent je agentní smyčka na infrastruktuře Anthropic místo tvé. Agenta popíšeš jednou, dáš mu prostředí a spustíš sezení. Anthropic smyčku provozuje, ty čteš události. Managed agents jsou ve výchozím stavu zapnuté pro každý účet API, bez zvláštního přístupu.` },
            { t: "table", head: ["Primitivum", "Co to je"], rows: [
              ["<b>Agent</b>", "Persona: model, systémový prompt a sada nástrojů. Opakovaně použitelný pro mnoho běhů."],
              ["<b>Environment</b>", "Kde agent běží: cloud nebo self-hosted, nastavení sítě a podobně."],
              ["<b>Session</b>", "Jeden běh agenta v určitém prostředí. Jednotka práce."],
              ["<b>Events</b>", "Zprávy tekoucí dovnitř a ven: akce agenta, volání nástrojů, výsledky, odpovědi."]
            ] },
            { t: "key", h: `Posun v myšlení: <b>nepíšeš smyčku while. Posíláš události a čteš události.</b>` },
            { t: "ex", title: "Ukázka: agent, prostředí a session", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `agent = client.beta.agents.create(
    name="Line Counter",
    model="claude-opus-5",
    system="You are a helpful agent that completes small file tasks.",
    tools=[{"type": "agent_toolset_20260401", "default_config": {"enabled": True}}],
)
environment = client.beta.environments.create(
    name="line-counter-env",
    config={"type": "cloud", "networking": {"type": "limited"}},
)
session = client.beta.sessions.create(
    agent=agent.id, environment_id=environment.id, title="Count lines demo",
)` }
            ], note: `Úkol: vytvořit soubor v dočasné složce, spočítat jeho řádky a ohlásit výsledek. <b>Agent toolset</b> je balík nástrojů Anthropic (soubory, bash, web), takže vlastní nástroje nepíšeš. Síť <code>limited</code> znamená, že sandbox i webové nástroje dosáhnou jen na hosty uvedené v <code>allowed_hosts</code>; tady žádné nejsou, úkol síť nepotřebuje. <code>unrestricted</code> použij, jen když agent musí na weby, které předem nevyjmenuješ. Každá session má vlastní sandbox.` },
            { t: "ex", title: "Ukázka: nejdřív stream, pak zadání", turns: [
              { who: "sys", label: "Kód (Python)", mono: true, text: `with client.beta.sessions.events.stream(session_id=session.id) as stream:
    client.beta.sessions.events.send(session_id=session.id, events=[{
        "type": "user.message",
        "content": [{"type": "text", "text": "Vytvoř soubor v dočasné složce, "
                     "spočítej jeho řádky a ohlas výsledek."}],
    }])
    for event in stream:
        if event.type == "agent.message": ...       # text od Claude
        elif event.type == "agent.tool_use": ...    # jaký nástroj vybral
        elif event.type == "session.status_idle":
            break                                   # agent stojí a čeká` }
            ], note: `Stream doručuje jen události, které nastanou po jeho otevření, proto ho <b>otevři před odesláním zadání</b>. Všimni si množného čísla <code>events</code>: v tomhle API teče všechno jako události. Po spuštění vidíš, jak agent nahlas uvažuje, jaké nástroje vybírá, a finální odpověď (soubor má 3 řádky). Všechno běží v kontejneru Anthropic.` },
            { t: "warn", h: `Ukázka končí u první události <code>session.status_idle</code>. Ve vlastní aplikaci se před tím, než práci prohlásíš za hotovou, podívej na <code>event.stop_reason.type</code>: <code>end_turn</code> znamená, že agent dokončil tah (nebo jsi ho přerušil/a), <code>requires_action</code>, že volání nástroje čeká na tvou odpověď.` },
            { t: "p", h: `Spolu se smyčkou delegovat i sandbox a obnovitelnost. Historie událostí je uložená na serveru: když spojení spadne, otevřeš nový stream, vypíšeš minulé události, abys viděl/a, co ti uteklo, a přeskočíš živé události, které už seznam vrátil. Typické použití jsou dlouhé úlohy se soubory typu „uklidni tohle“, třeba úklid sdíleného disku: agent podle specifikace struktury roztřídí tisíce souborů do projektových složek, archivuje duplikáty a prázdné soubory a označí, co nedokáže s jistotou zařadit.` },
            { t: "tip", h: `Po managed agentovi sáhni, když by smyčka běžela moc dlouho, dělala moc věcí nebo musela přežít výpadek. Ruční smyčku si nech, když chceš plnou kontrolu.` }
          ],
          quiz: [
            { q: "Proč otevřít event stream před odesláním zadání?", o: ["Kvůli rychlosti", "Stream doručuje jen události, které nastanou po jeho otevření", "Bez streamu nejde vytvořit session"], a: 1, why: "Kdybys zadání poslal/a dřív, první události by ti utekly." },
            { q: "Co je session?", o: ["Jeden běh agenta v daném prostředí, jednotka práce", "Definice modelu, promptu a nástrojů", "Nastavení sítě sandboxu"], a: 0, why: "Definice je agent, nastavení sítě je environment. Session je konkrétní běh." },
            { q: "Co znamená stop_reason.type requires_action?", o: ["Agent dokončil práci", "Spojení spadlo", "Volání nástroje čeká na odpověď od tebe"], a: 2, why: "end_turn znamená dokončený tah, requires_action čekání na tvou odpověď." }
          ],
          cards: [
            { f: "Čtyři primitiva managed agents", b: "Agent (model, prompt, nástroje; opakovaně použitelný), Environment (kde běží), Session (jeden běh), Events (vše, co teče dovnitř a ven)." },
            { f: "Tři důležité události", b: "agent.message (text), agent.tool_use (volba nástroje), session.status_idle (agent stojí a čeká; důvod je v stop_reason.type)." },
            { f: "Kdy managed agent, kdy ruční smyčka", b: "Managed: smyčka by běžela moc dlouho, dělala moc nebo musela přežít výpadek. Ruční: chceš plnou kontrolu." }
          ],
          terms: [
            { t: "Session (managed agents)", d: "Jeden běh agenta v daném prostředí, jednotka práce. Komunikuje se s ní posíláním a čtením událostí." },
            { t: "Event stream", d: "Proud událostí ze session (zprávy agenta, volání nástrojů, změny stavu), který tvoje aplikace čte, zatímco Anthropic provozuje smyčku." }
          ]
        }
      ]
    },
    {
      title: "Stavíme s Claude Code",
      lessons: [
        {
          id: "cp-13",
          title: "Stavíme s Claude Code",
          minutes: 4,
          lead: `Kód, který volá Claude API, nemusíš psát ručně. Rychlejší cesta: připravit kostru a nechat Claude Code, ať ji doplní ze stejných primitiv, která už znáš.`,
          blocks: [
            { t: "p", h: `Projekt: soubor v TypeScriptu, který zjišťuje počasí. Obsahuje dvě kostry (stuby): <code>getWeather</code> (přijme město, vrátí teplotu a podmínky) a <code>run</code> (má použít tool runner a Claude TypeScript SDK). Tool runner, jak už víš, za tebe obslouží volání nástrojů i agentní smyčku.` },
            { t: "info", title: "Skill Claude API", h: `Claude Code má vestavěný skill <b>Claude API</b>. Vyvoláš ho přímo příkazem <code>/claude-api</code>, nebo ho Claude Code použije sám, když pozná, že pracuješ s TypeScript SDK.` },
            { t: "h", x: "Jeden prompt, funkční kód" },
            { t: "p", h: `Ve složce projektu spustíš Claude Code. Stačí jeden prompt a dobrý prompt dělá tři věci:` },
            { t: "ul", items: [
              `Pojmenuje <b>soubor</b>, který se má změnit.`,
              `Pojmenuje <b>vzor</b>, který se má použít.`,
              `Pojmenuje <b>cílový stav</b>, který čekáš.`
            ] },
            { t: "ex", title: "Ukázka: prompt podle tří pravidel", turns: [
              { who: "user", text: `Doplň v weather.ts funkce getWeather a run. Použij tool runner z Claude TypeScript SDK. Na konci souboru zavolej run, skript spusť a ukaž mi výstup.` },
              { who: "ai", text: `Čtu weather.ts a soubory tool runneru. Vytvářím nástroj přes betaZodTool, který zpracuje vstup a vrátí výsledek podle města, dál tool runner a funkci run. Přidávám volání na konec souboru a spouštím skript. Výstup agentní smyčky: (finální odpověď)` }
            ], note: `Soubor (weather.ts), vzor (tool runner) a cílový stav (spustit a ukázat výstup). Claude Code doplnil kostry podle typů, skript spustil a ohlásil výsledek. Když něco spadne, přečte chybovou hlášku a kód opraví na místě.` },
            { t: "key", h: `Většina kódu nad Claude API má známý tvar: <b>definuj nástroj, předej ho runneru, vrať výsledek</b>. Nemusíš ho pokaždé psát zpaměti: připrav kostru, předej ji Claude Code a <b>zkontroluj diff</b>. Proto má smysl i zbytek kurzu: abys poznal/a dobrý kód, když ho za tebe píše agent.` }
          ],
          quiz: [
            { q: "Jak se v Claude Code dostaneš ke skillu Claude API?", o: ["Příkazem /claude-api, nebo se použije sám, když Claude Code pozná TypeScript SDK", "Jen přes Claude Console", "Musíš ho nejdřív nahrát přes client.skills.create"], a: 0, why: "Skill je v Claude Code vestavěný. Nahrávat ho nemusíš." },
            { q: "Co má podle lekce obsahovat dobrý prompt pro Claude Code?", o: ["Jen popis cíle", "Soubor, vzor a cílový stav", "Celý hotový kód"], a: 1, why: "Soubor, vzor a cílový stav dají Claude Code jasné zadání i měřítko hotového." },
            { q: "Co je tvoje práce poté, co Claude Code kód napíše?", o: ["Nic, kód je vždy správný", "Přepsat ho ručně", "Zkontrolovat diff"], a: 2, why: "Kostru deleguješ, ale výsledek kontroluješ. K tomu potřebuješ rozumět, jak má dobrý kód vypadat." }
          ],
          cards: [
            { f: "Dobrý prompt pro Claude Code", b: "Pojmenuj soubor, vzor a cílový stav." },
            { f: "Známý tvar kódu nad API", b: "Definuj nástroj → předej runneru → vrať výsledek. Připrav kostru, deleguj, zkontroluj diff." }
          ],
          terms: [
            { t: "/claude-api", d: "Příkaz Claude Code, který vyvolá vestavěný skill Claude API pro psaní kódu nad Claude API a jeho SDK." }
          ]
        }
      ]
    }
  ]
});
