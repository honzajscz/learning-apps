/* Kurz: AI zběhlost pro tvůrce produktů (podle academy.claude.com/courses/ai-fluency-for-builders)
   Cvičení z originálu jsou nahrazena komentovanými ukázkami. Závěrečný test a odznak nejsou samostatnou lekcí. */
AKADEMIE.add({
  id: "ai-fluency-builders",
  emoji: "🛠️",
  title: "AI zběhlost pro tvůrce produktů",
  category: "fluency",
  level: "Pro tvůrce produktů a vývojáře",
  desc: "Rámec 4D v praxi lidí, kteří vlastní cestu od problému k dodanému řešení: sada nástrojů tvůrce, akceptační testy, řetězec popisu, pět pohledů rozlišování a odpovědné vydání. Celým kurzem prochází projekt čekací doby na klinice.",
  source: "https://academy.claude.com/courses/ai-fluency-for-builders",
  added: "2026-11-01",
  modules: [
    {
      title: "Úvod a rámec AI zběhlosti",
      lessons: [
        {
          id: "fb-01",
          title: "Úvod: AI zběhlost pro tvůrce",
          minutes: 5,
          lead: `Tvůrce (builder) vlastní celou cestu od problému zákazníka k řešení, které se k zákazníkovi opravdu dostane. Psaní kódu je jen malá část. Tenhle kurz je o tom, jak do celé té cesty zapojit AI s rozmyslem.`,
          blocks: [
            { t: "p", h: `Kdo kdy dodal software, ví, že kód je menší díl práce. Musíš zjistit, který problém stojí za řešení, udělat stovky drobných rozhodnutí o tom, jak to má fungovat, dostat výsledek k lidem a poučit se z toho, co se stalo potom. Kurz vznikl ve spolupráci Anthropic a neziskové organizace <b>CodePath</b> a je určený produktovým lidem, inženýrům, designérům a všem, kdo něco staví.` },
            { t: "p", h: `Většina školení o AI řeší jen úzký výsek: lepší prompty pro lepší kód. To je užitečné, ale nestačí. Potřebuješ vědět, <b>co</b> stavět, a umět posoudit, jestli je výsledek opravdu správný. Nejen technicky funkční, ale jestli řeší skutečný problém, funguje se skutečnými uživateli a nevytváří nové problémy.` },
            { t: "h", x: "Čtyři D očima tvůrce" },
            { t: "ul", items: [
              `<b>Delegace</b>: rozložit problém na části a u každé fáze rozhodnout, jakou roli hraje AI.`,
              `<b>Popis</b>: zajistit, aby se každý vstup (hlas uživatele, produktové požadavky, technická specifikace) dostal až do implementace. Chybějící kontext se šíří dál a dál.`,
              `<b>Rozlišování</b>: nejen „běží to?“, ale „běží to dobře, řeší to správný problém, dobře se to používá a je to odpovědné?“`,
              `<b>Zodpovědnost</b>: plné vlastnictví výsledku pro uživatele, ne jen výstupu AI. Patří sem migrace, rate limiting, monitoring i otázka, co se stane, když se něco rozbije ve 2 ráno a ty jsi to postavil/a.`
            ] },
            { t: "key", h: `Delegovat implementaci je obvykle bezpečné. Delegovat úsudek (rozhodnutí, jestli je něco opravdu dobré a připravené) obvykle ne. A většina selhání AI má kořen v chybě popisu, rozlišování nebo zodpovědnosti, která vznikla už dřív.` },
            { t: "p", h: `Ber AI jako schopného, ale velmi doslovného spolupracovníka. Je rychlý, hodně ví a neunaví se, ale potřebuje jasné úkoly, skutečný kontext o tom, <b>proč</b> něco stavíš, a konkrétní zpětnou vazbu, když se splete.` },
            { t: "ex", title: "Ukázka: builder brief", turns: [
              { who: "user", text: `Jsem tvůrce a chci si připravit opakovaně použitelný kontextový dokument pro budoucí spolupráci s AI. Tady jsou mé odpovědi na čtyři otázky: co stavím a pro koho, jaká je moje role, kde AI už používám a kde ne, a dokončená věta „Kdyby AI zvládla…“. (odpovědi) Navrhni z nich stručný brief ve formátu, který snadno zkopíruju na začátek nového rozhovoru. Pak se mě zeptej, co v něm chybí.` },
              { who: "ai", text: `CO STAVÍM A PRO KOHO: webovou aplikaci na plánování směn pro síť šesti kaváren. Uživatelé: vedoucí provozoven (plánují) a baristé (vidí směny a mění si je).
MOJE ROLE: jediný vývojář a zároveň produktový člověk. Odpovídám za to, co se dodá, včetně provozu.
OMEZENÍ: tým dvou lidí, stack TypeScript a PostgreSQL, první verze do konce čtvrtletí. Nepřekročitelné: aplikace musí fungovat i na starších telefonech.
KDE CHCI AI: implementace, testy, první návrhy specifikací, třídění zpětné vazby od baristů.
KDE AI NECHCI: rozhodnutí, co patří do první verze; komunikace s vedoucími provozoven.

Co ještě chybí: Jak poznáš, že první verze uspěla? A platí nějaká pravidla pro práci s osobními údaji zaměstnanců?` }
            ], note: `Brief pokrývá čtyři oblasti: <b>co stavíš a pro koho</b>, <b>tvoje role a co vlastníš</b>, <b>omezení</b> (tým, stack, termíny, nepřekročitelné věci) a <b>kde AI chceš a kde ne</b>. Vložíš ho na začátek nového projektu, aby AI nezačínala od nuly. Než ho napíšeš, dokonči si větu: „Kdyby AI zvládla ___, mohl/a bych víc času věnovat ___, kde padají ta nejdůležitější rozhodnutí.“` }
          ],
          quiz: [
            { q: "Co podle kurzu obvykle není dobré delegovat AI?", o: ["Psaní kódu podle jasné specifikace", "Úsudek, jestli je výsledek opravdu dobrý a připravený k vydání", "První návrh technické specifikace"], a: 1, why: "Implementaci delegovat obvykle můžeš. Úsudek, tedy rozhodnutí, že je něco dost dobré, zůstává na tobě." },
            { q: "Uživatel si stěžuje, že nástroj pro něj nefunguje. Ukáže se, že kód je v pořádku. Kde nejspíš vznikla chyba?", o: ["V tom, jak jsi pochopil/a a popsal/a problém uživatele", "V rychlosti serveru", "V tom, že AI zvolila jiný programovací jazyk"], a: 0, why: "Chybějící vstup nebo kontext se šíří dál. Chyba často není v kódu, ale v Popisu." },
            { q: "Co znamená Zodpovědnost u tvůrce?", o: ["Napsat do kódu komentář, že ho psala AI", "Zkontrolovat jen to, že testy prošly", "Plné vlastnictví výsledku, včetně toho, co se děje po spuštění"], a: 2, why: "Jde o výsledek pro uživatele, ne jen o výstup AI. Patří sem i provoz, monitoring a ochota vlastní práci zastavit." }
          ],
          cards: [
            { f: "Tvůrce (builder)", b: "Vlastní celou cestu od problému zákazníka k dodanému řešení. Kód je jen část." },
            { f: "Co delegovat a co ne", b: "Implementaci obvykle ano. Úsudek (je to dobré a připravené?) obvykle ne." },
            { f: "Čtyři části builder briefu", b: "Co stavíš a pro koho; tvoje role; omezení; kde AI chceš a kde ne." }
          ],
          terms: [
            { t: "Tvůrce (builder)", d: "Člověk, který vlastní celou cestu od problému zákazníka po dodané řešení: produktoví lidé, inženýři, designéři a další, kdo něco staví." },
            { t: "Builder brief", d: "Opakovaně použitelný kontextový dokument pro AI: co stavíš a pro koho, tvoje role, omezení a kde AI chceš a kde ne." }
          ]
        },
        {
          id: "fb-02",
          title: "Rámec 4D: vnitřní a vnější smyčka",
          minutes: 4,
          lead: `Rámec 4D podrobně vysvětluje kurz „AI zběhlost: rámec 4D“. Tady je stručné opakování a jeden užitečný pohled navíc: čtyři D tvoří dvě smyčky, vnitřní a vnější.`,
          blocks: [
            { t: "info", h: `Podčásti jednotlivých D (třeba popis produktu, procesu a chování) najdeš v kurzu „AI zběhlost: rámec 4D“. Pro zbytek tohoto kurzu ti stačí tahle lekce.` },
            { t: "table", head: ["D", "Co znamená"], rows: [
              ["<b>Delegace</b>", "Rozhodnout, co zvládne AI a co zůstane tobě."],
              ["<b>Popis</b>", "Jasně sdělit, co potřebuješ a jak má AI postupovat."],
              ["<b>Rozlišování</b>", "Posoudit, co AI vrátila, než podle toho začneš jednat."],
              ["<b>Zodpovědnost</b>", "Plně vlastnit konečný výsledek, ať byla role AI jakákoli."]
            ] },
            { t: "h", x: "Vnitřní smyčka: Popis a Rozlišování" },
            { t: "p", h: `Každodenní práce s AI. Popíšeš, co chceš, posoudíš, jestli to odpovídá očekávání, a podle toho popis upřesníš (je to smyčka Popis a Rozlišování z kurzu o 4D). Výzkum Anthropic ukázal, že Popis lidem jde přirozeně: zadávají, co chtějí, dávají příklady, upřesňují. Rozlišování je mnohem vzácnější. Zpochybnit úvahu AI, ověřit fakta a všimnout si chybějícího kontextu patřilo k nejméně častému chování. Tam je největší prostor ke zlepšení.` },
            { t: "h", x: "Vnější smyčka: Delegace a Zodpovědnost" },
            { t: "p", h: `Všechno, co se děje kolem používání AI v práci a v týmu. Mám na tohle AI vůbec použít? Rozumím úkolu i nástroji (třeba tomu, jak nakládá s důvěrnými daty)? A když AI použiju, řeknu to otevřeně lidem, kterých se to týká, a ověřím a obhájím výsledek? Zkušenosti ze Zodpovědnosti pak zpětně zpřesňují, co příště delegovat.` },
            { t: "ex", title: "Ukázka: brief rozdělený podle 4D", turns: [
              { who: "user", label: "Body z briefu, označené", text: `„Nevím, jestli nechat AI navrhnout datový model.“ → Delegace
„AI mi vrací kód v jiném stylu, než v projektu používáme.“ → Popis
„Jak poznám, že knihovna, kterou AI doporučila, opravdu existuje?“ → Rozlišování
„Kdo ručí za kód, který napsal Claude, když projde do produkce?“ → Zodpovědnost
„Nechci, aby AI psala zprávy vedoucím provozoven.“ → Delegace` }
            ], note: `Které D se v briefu objevuje nejčastěji, tam už teď směřuje tvoje pozornost, a obvykle právě tam se nejrychleji zlepšíš. Pak si z briefu vyber jeden skutečný úkol a ještě před otevřením AI si zapiš, kterých D se týká (většinou víc než jednoho) a jak vypadá „dost dobrý“ výsledek. Teprve potom udělej s AI jedno kolo a sleduj, co ti šlo přirozeně a co tě zaskočilo.` },
            { t: "key", h: `Čtyři D ožívají dohromady: Delegací rozhodneš, co dělá AI, Popisem ji vedeš, Rozlišováním posuzuješ výsledek a Zodpovědnost praktikuješ celou dobu.` }
          ],
          quiz: [
            { q: "Které dvě dovednosti tvoří vnitřní smyčku?", o: ["Delegace a Zodpovědnost", "Popis a Rozlišování", "Delegace a Popis"], a: 1, why: "Vnitřní smyčka je každodenní práce: popíšeš, posoudíš, upřesníš." },
            { q: "Otázka „Mám na tenhle úkol vůbec použít AI?“ patří do…", o: ["vnější smyčky (Delegace a Zodpovědnost)", "vnitřní smyčky (Popis a Rozlišování)", "žádné smyčky"], a: 0, why: "Jestli a jak AI použít, je rozhodnutí vnější smyčky, ještě před samotnou interakcí." },
            { q: "Kterou dovednost lidé podle výzkumu Anthropic uplatňují nejméně?", o: ["Zadávání toho, co chtějí", "Dávání příkladů", "Rozlišování: zpochybnit úvahu AI, ověřit fakta, všimnout si chybějícího kontextu"], a: 2, why: "Popis jde lidem přirozeně, Rozlišování je vzácné. Proto je v něm největší prostor ke zlepšení." }
          ],
          cards: [
            { f: "Vnitřní smyčka", b: "Popis a Rozlišování: každodenní práce s AI. Popiš, posuď, upřesni." },
            { f: "Vnější smyčka", b: "Delegace a Zodpovědnost: jestli a jak AI použít, otevřenost o její roli, ověření a ručení za výsledek." }
          ],
          terms: [
            { t: "Vnější smyčka (4D)", d: "Delegace a Zodpovědnost: rozhodování, jestli a jak AI použít, a odpovědnost za to, jak ji používáš. Vnitřní smyčkou je smyčka Popis a Rozlišování." }
          ]
        }
      ]
    },
    {
      title: "Jak AI funguje",
      lessons: [
        {
          id: "fb-03",
          title: "Schopnosti a limity AI pro tvůrce",
          minutes: 5,
          lead: `Jak generativní AI vzniká, v čem je silná a kde předvídatelně selhává. Podrobně to probírá kurz „Schopnosti a limity AI“. Tady je stručné opakování a hlavně test na kódu, který znáš nazpaměť.`,
          blocks: [
            { t: "info", h: `Mentální modely (předpovídání tokenů, znalosti, pracovní paměť, řiditelnost) najdeš v kurzu „Schopnosti a limity AI“. Tahle lekce se soustředí na to, co z nich plyne, když s AI stavíš.` },
            { t: "h", x: "V kostce: jak vznikl dnešní LLM" },
            { t: "ul", items: [
              `<b>Generativní AI</b> vytváří nový obsah. Tradiční AI třídí e-maily na spam a ne-spam, generativní AI napíše nový e-mail.`,
              `Umožnily ji <b>tři vývojové skoky</b>: architektura transformer (2017), obrovské množství digitálních dat a masivní výpočetní výkon (GPU, TPU, výpočetní clustery). S růstem modelů se výkon zlepšoval předvídatelně (zákony škálování) a objevily se i schopnosti, které nikdo výslovně nenaprogramoval.`,
              `<b>Dvě fáze tréninku</b>: předtrénování (model se na miliardách příkladů učí předpovídat pokračování textu) a doladění (učí se plnit instrukce, být užitečný a vyhýbat se škodlivému obsahu, mimo jiné díky lidské zpětné vazbě).`
            ] },
            { t: "table", head: ["Vlastnost", "Co to znamená, když stavíš"], rows: [
              ["<b>Všestrannost</b> (silná stránka)", "Tentýž model vysvětlí tvůj kód produktovému manažerovi i seniornímu reviewerovi a přepíná mezi úlohami bez dalšího tréninku."],
              ["<b>Nástroje</b> (silná stránka)", "Umí hledat na webu, pracovat se soubory a používat další aplikace, pokud mu je zpřístupníš."],
              ["<b>Datum uzávěrky znalostí</b>", "Nemusí vědět o nové verzi frameworku, zastaralém postupu nebo bezpečnostní záplatě."],
              ["<b>Halucinace</b>", "Sebejistě doporučí knihovnu, funkci nebo parametr, který neexistuje."],
              ["<b>Kontextové okno</b>", "Co se do pracovní paměti nevejde, model nevidí. V dlouhém rozhovoru vypadává nejstarší obsah."],
              ["<b>Nedeterminismus</b>", "Stejný prompt může dát pokaždé trochu jiný kód."],
              ["<b>Složité uvažování</b>", "Vícekrokové logické úlohy byly historicky slabinou. Modely s rozšířeným uvažováním (extended thinking) se rychle zlepšují."],
              ["<b>Chybějící přístup</b>", "Bez přístupu k tvé interní databázi nebo nástroji ti s nimi nepomůže, ať je jakkoli chytrý."]
            ] },
            { t: "ex", title: "Ukázka: testování hran na vlastním kódu", turns: [
              { who: "user", label: "Test všestrannosti", text: `Vysvětli, jak u nás funguje omezování počtu požadavků (rate limiting), třikrát v jedné odpovědi: pro netechnického produktového manažera, pro středně zkušeného inženýra, který se právě přidal do týmu, a pro seniorního inženýra při code review.` },
              { who: "user", label: "Test halucinace", text: `Doporuč konkrétní knihovny a dokumentaci, které by mi s tímhle problémem pomohly.` },
              { who: "user", label: "Test uzávěrky a uvažování", text: `Co se v tomhle frameworku změnilo v poslední verzi? A pak: projdi se mnou krok za krokem tenhle záludný detail implementace.` }
            ], note: `Vyber si oblast, kde chybu poznáš okamžitě, a předem si zapiš, co by měl každý kompetentní inženýr trefit, jedno časté nedorozumění a jednu nedávnou změnu. Pak sleduj: Změnila se u tří vysvětlení opravdu hloubka, nebo jen slovník? Existuje aspoň jedna doporučená knihovna, sedí její API a je verze aktuální? Upozornila AI, že informace o novinkách mohou být zastaralé, nebo podala starý stav jako aktuální? Vyřešila záludný detail, nebo jen zopakovala správnou odpověď?` },
            { t: "key", h: `Klíčová otázka po testu: všiml/a by sis té chyby i v oblasti, kterou tak dobře neznáš? Podle toho vol, co AI svěříš a co budeš hlídat. Nejlepší výsledky přináší spojení tvého úsudku, kreativity a dohledu s rychlostí a rozsahem AI.` }
          ],
          quiz: [
            { q: "Které tři vývojové skoky umožnily dnešní velké jazykové modely?", o: ["Architektura transformer, obrovské množství dat a masivní výpočetní výkon", "Internet, chytré telefony a cloud", "Databáze faktů, vyhledávače a překladače"], a: 0, why: "Transformer (2017), data a výpočetní výkon se sešly ve správnou chvíli." },
            { q: "AI ti doporučí knihovnu i s ukázkou použití. Co uděláš?", o: ["Rovnou ji nainstaluješ, ukázka vypadá věrohodně", "Ověříš, že knihovna existuje, API sedí a verze je aktuální", "Požádáš o další tři knihovny"], a: 1, why: "Halucinace a datum uzávěrky se u kódu projevují právě neexistujícími nebo zastaralými knihovnami a API." },
            { q: "Proč test hran dělat na oblasti, kterou znáš nazpaměť?", o: ["Protože v ní AI odpovídá rychleji", "Protože jiné oblasti AI nezná", "Protože tam chybu poznáš okamžitě a získáš vlastní měřítko důvěry"], a: 2, why: "Jen tam, kde chybu spolehlivě poznáš, si uděláš poctivý obrázek o tom, co AI svěřit." }
          ],
          cards: [
            { f: "Tři vývojové skoky", b: "Transformer (2017), obrovské množství dat, masivní výpočetní výkon." },
            { f: "Limity, které tvůrce potká nejčastěji", b: "Uzávěrka znalostí (zastaralá API), halucinace (neexistující knihovny), nedeterminismus, chybějící přístup k tvým datům." }
          ],
          terms: [
            { t: "Transformer", d: "Architektura neuronové sítě z roku 2017, která dobře zpracovává sekvence textu a drží vztahy mezi slovy i v dlouhých pasážích. Je základem dnešních LLM." },
            { t: "Nedeterminismus", d: "Vlastnost LLM: na stejný vstup může dát pokaždé trochu jinou odpověď. Některá rozhraní míru náhodnosti nastavují parametrem temperature." }
          ]
        }
      ]
    },
    {
      title: "Rámec 4D pro tvůrce",
      lessons: [
        {
          id: "fb-04",
          title: "Delegace a sada nástrojů tvůrce",
          minutes: 6,
          lead: `Těžké není přimět AI napsat kód. Těžké je vědět, jaký kód chceš. Delegace u tvůrce proto začíná dlouho před první řádkou: rozložením problému zákazníka a rozhodnutím, jakou roli hraje AI v každé fázi.`,
          blocks: [
            { t: "p", h: `Představ si, že vedeš projekt a AI je tvůj tým. Dobrý vedoucí jen nerozdává úkoly. Zarámuje problém, aby všichni věděli, co řeší. Nastaví cíle, aby tým věděl, jak vypadá dobrý výsledek. Rozhodne, co přijde na řadu první. A hlavně ví, která rozhodnutí udělá sám a která předá dál.` },
            { t: "h", x: "Šest schopností v sadě nástrojů tvůrce" },
            { t: "table", head: ["Schopnost", "O co jde", "AI"], rows: [
              ["<b>Empatie</b>", "Co člověk opravdu potřebuje, ne co říká, že chce. AI pomůže uspořádat zjištění, ale nesedne si k recepční na klinice a nevšimne si, že 40krát denně bere telefon, protože pacienti volají kvůli čekací době.", "slabá"],
              ["<b>Design</b>", "Co stavět a proč: kompromisy a sázky. SMS, nebo webová stránka? Přesné časy, nebo rozpětí? AI vygeneruje varianty, výběr je tvůj.", "střední"],
              ["<b>Architektura</b>", "Jak věc rozdělit na části a jak do sebe zapadají. AI zná vzory, ale nezná tvá omezení, dovednosti týmu ani to, co budeš měnit za půl roku. Člověk + AI tu funguje skvěle.", "střední"],
              ["<b>Implementace</b>", "Psaní samotného kódu. Tady deleguj nejodvážněji. Pokud sem vstupuješ bez definovaných testů a kontrolních bodů, nejspíš jsi krok přeskočil/a.", "silná"],
              ["<b>Úsudek</b>", "Funguje to? Je to dobré? Dal/a bys pod to své jméno? AI řekne, že kód běží, ale ne jestli zážitek sedí a jestli řeší skutečný problém.", "slabá"],
              ["<b>Dodání</b> (shipping)", "Dostat to ke skutečným uživatelům a učit se: komunikace, měření, iterace. AI napíše release notes, ale nepozná, že uživatel před kliknutím zaváhal.", "střední"]
            ] },
            { t: "key", h: `AI je nejsilnější uprostřed sady nástrojů (implementace) a nejslabší na okrajích: u empatie, úsudku i dodání, kde sice zautomatizuje jednotlivé kroky, ale odpovědnost zůstává tobě. Na okrajích žije lidská práce. A tam je i hodnota.` },
            { t: "h", x: "Akceptační testy: definice hotového předem" },
            { t: "cmp",
              bad: { lbl: "Neověřitelné", h: `„Systém se snadno používá.“` },
              good: { lbl: "Akceptační test", h: `„Pacient se základním chytrým telefonem najde aktuální čekací dobu do 30 sekund bez zakládání účtu.“` } },
            { t: "ex", title: "Ukázka: projekt čekací doby na klinice, část 1", turns: [
              { who: "sys", label: "Zadání", text: `Komunitní zdravotní klinika potřebuje, aby si pacienti mohli zjistit čekací dobu dřív, než vyrazí. Víc ti nikdo neřekl.` },
              { who: "user", label: "Plán delegace", mono: true, text: `Empatie       Augmentace: rozhovory vedu já, AI třídí poznámky
Design        Augmentace: AI navrhne varianty, vybírám já
Architektura  Augmentace: doplním omezení kliniky
Implementace  Agentnost: AI píše kód v mezích specifikace a testů
Úsudek        Augmentace: AI vypíše rizika, rozhodnutí je moje
Dodání        Automatizace: AI připraví release notes, já kontroluji` },
              { who: "user", label: "Akceptační testy (výřez)", text: `1. Pacient se základním chytrým telefonem najde aktuální čekací dobu do 30 sekund bez zakládání účtu.
2. U čekací doby je vidět, kdy byla naposledy aktualizována.
3. Když je klinika zavřená, stránka to jasně řekne.` }
            ], note: `V této fázi nevznikne ani řádek kódu, a to záměrně. Výstupem jsou tři věci: <b>problémový brief</b> na nejvýš jednu stranu (kdo jsou uživatelé, co opravdu potřebují, jak má řešení působit, jaká jsou skutečná omezení), <b>plán delegace</b> (šest řádků, u každé schopnosti automatizace, augmentace, nebo agentnost) a <b>5 až 7 akceptačních testů</b>, u kterých by i cizí člověk poznal, jestli hotový produkt prošel.` },
            { t: "warn", h: `Když máš nástroj, který napíše kód okamžitě, láká to skočit rovnou ke stavění a brát empatii a design jako zdržení. Nedělej to. Čím rychlejší je implementace, tím víc se tvoje hodnota přesouvá ke všemu kolem ní.` }
          ],
          quiz: [
            { q: "Ve které schopnosti ze sady nástrojů tvůrce je AI nejsilnější?", o: ["Empatie", "Úsudek", "Implementace"], a: 2, why: "Implementace je uprostřed sady nástrojů. Tam deleguj nejodvážněji, okraje si nech." },
            { q: "Který výrok je dobrý akceptační test?", o: ["„Aplikace je rychlá a přehledná.“", "„Pacient najde aktuální čekací dobu do 30 sekund bez zakládání účtu.“", "„Uživatelům se bude líbit.“"], a: 1, why: "Akceptační test musí být tak konkrétní, aby i cizí člověk poznal, jestli produkt prošel, nebo ne." },
            { q: "Vstupuješ do implementace a nemáš žádné testy ani kontrolní body. Co to podle kurzu znamená?", o: ["Nejspíš jsi přeskočil/a krok: chybí definice hotového", "Nic, testy napíše AI až nakonec", "Že je projekt dost jednoduchý"], a: 0, why: "Testy a kontrolní body mají vzniknout před kódem. Dávají tobě i AI společnou definici hotového." }
          ],
          cards: [
            { f: "Sada nástrojů tvůrce", b: "Empatie, design, architektura, implementace, úsudek, dodání." },
            { f: "Kde je AI silná", b: "Uprostřed (implementace). Nejslabší je na okrajích: empatie, úsudek, dodání." },
            { f: "Akceptační test", b: "Konkrétní výrok o hotovém produktu, u kterého i cizí člověk pozná, zda prošel, nebo ne." }
          ],
          terms: [
            { t: "Sada nástrojů tvůrce (builder's toolkit)", d: "Šest schopností, po kterých tvůrce sahá během stavby: empatie, design, architektura, implementace, úsudek a dodání." },
            { t: "Akceptační test", d: "Předem napsaný konkrétní výrok, který definuje „hotovo“. Musí jít jednoznačně rozhodnout, zda ho produkt splňuje." }
          ]
        },
        {
          id: "fb-05",
          title: "Popis: od hlasu uživatele k instrukci",
          minutes: 6,
          lead: `Popis u tvůrce není jen prompt engineering, jehož triky se mění od modelu k modelu. Je to řetězec překladů od toho, co řekne skutečný člověk, až po instrukci, podle které AI postaví kód. Překladatelem jsi v každém kroku ty.`,
          blocks: [
            { t: "h", x: "Řetězec popisu" },
            { t: "steps", items: [
              `<b>Hlas uživatele.</b> „Chci vidět čekací dobu, než vyrazím na kliniku.“ Věta nese i to, co nezaznělo: čeká už dvě hodiny, v autě má dítě a rozhoduje se mezi klinikou a pohotovostí na druhém konci města. Tady pracuje tvoje empatie.`,
              `<b>Produktový požadavek.</b> „Pacienti vidí odhadovanou čekací dobu na webové stránce přizpůsobené mobilu, aktualizované každých 5 minut.“ Každé slovo je rozhodnutí: web, ne aplikace; odhad, ne přesný čas; každých 5 minut, ne v reálném čase.`,
              `<b>Technická specifikace.</b> „Webová aplikace načítá data o čekání z API kliniky a zobrazuje je v responzivním rozhraní, obnova každých 5 minut.“ Podle toho už jde stavět, ale zůstávají otázky: jaký stack, jak ošetřit chyby, co když API nefunguje?`,
              `<b>Instrukce pro AI.</b> Konkrétní, s kontextem, omezeními a okrajovými případy: stack, tvar dat, co dělat bez dat, testy, které musí projít. Věci, které si AI umí sama ověřit, jí pomáhají pracovat efektivněji a déle.`
            ] },
            { t: "ex", title: "Ukázka: poslední článek řetězce", turns: [
              { who: "user", mono: true, text: `Postav webovou stránku, kde pacienti uvidí odhadovanou čekací dobu na klinice.
Kontext: pacienti ji otevírají na telefonu, často cestou nebo na parkovišti, a mají málo času.
Stack: statická stránka (HTML, CSS, JavaScript), bez přihlašování.
Data: API kliniky vrací odhad čekací doby v minutách a čas poslední aktualizace. Obnovuj každých 5 minut.
Okrajové případy:
- klinika je zavřená: řekni to jasně
- API nevrátí data: nezobrazuj nulu ani starý údaj, napiš, že údaj není k dispozici
- čekací doba je 0: napiš „bez čekání“
Musí projít přiložené akceptační testy. Testy piš spolu s kódem.` }
            ], note: `AI neslyší, co uživatel neřekl. Neví, že „odhad“ je správně, protože přesné časy by na personál kliniky vytvářely tlak, aby je dodržel. Neví, že na odezvě záleží, protože pacienti se dívají cestou. To víš ty a tvým úkolem je přenést to do zadání neporušené.` },
            { t: "h", x: "Když se překlad pokazí" },
            { t: "p", h: `Typický příznak: kód funguje, produkt ne. Test projde, uživatel je pořád frustrovaný. To není bug, to je <b>selhání popisu</b> a obvykle leží výš než v promptu. Kus tvé práce je proto forenzní: dohledat článek, který praskl.` },
            { t: "table", head: ["Kde to prasklo", "Co se stalo"], rows: [
              ["Porozumění uživateli", "Nikdy jsi doopravdy neslyšel/a, co potřebuje."],
              ["Požadavek", "Slyšel/a jsi to, ale špatně jsi to vymezil/a."],
              ["Specifikace", "Požadavek byl správně, ale technický překlad něco ztratil."],
              ["Prompt", "Všechno výš bylo v pořádku, jen instrukce pro AI byla slabá."]
            ] },
            { t: "key", h: `Testy jsou nejpřesnější forma popisu: buď projdou, nebo ne. Když AI dáš testy spolu s promptem, neříkáš jí jen co postavit, ale i jak poznáš, že uspěla. A to mění, co dostaneš zpět.` },
            { t: "tip", h: `Hotovou verzi předveď někomu, kdo hraje pacienta: má nemocné dítě a deset minut času. Nic nevysvětluj a nepomáhej. Pak si polož dvě otázky: Prošly testy? Je pacient spokojený? Když je první odpověď ano a druhá ne, není to neúspěch, ale to nejužitečnější, co se ti může stát. Test popsal špatný záměr a ty víš, kde v řetězci hledat.` }
          ],
          quiz: [
            { q: "Jaké je správné pořadí článků řetězce popisu?", o: ["Instrukce pro AI → specifikace → požadavek → hlas uživatele", "Hlas uživatele → produktový požadavek → technická specifikace → instrukce pro AI", "Produktový požadavek → hlas uživatele → instrukce pro AI → specifikace"], a: 1, why: "Začíná se u skutečného člověka a končí instrukcí, podle které AI staví. Prompt je jen poslední článek." },
            { q: "Testy procházejí, ale uživatel je frustrovaný. O co jde?", o: ["O selhání popisu, které obvykle leží výš než v promptu", "O bug, který je třeba najít v kódu", "O chybu testovacího nástroje"], a: 0, why: "Kód dělá, co měl. Někde v řetězci (uživatel, požadavek, specifikace, prompt) se ztratil záměr." },
            { q: "Proč je „odhadovaná, ne přesná čekací doba“ součástí produktového požadavku?", o: ["Protože prompt nesmí obsahovat čísla", "Protože to AI pozná sama", "Protože je to rozhodnutí z tvé práce s uživateli, které AI udělat nemůže"], a: 2, why: "AI neví, že přesné časy by stresovaly personál. Taková rozhodnutí děláš ty a přenášíš je do zadání." }
          ],
          cards: [
            { f: "Řetězec popisu", b: "Hlas uživatele → produktový požadavek → technická specifikace → instrukce pro AI (a testy)." },
            { f: "Čtyři místa, kde řetězec praskne", b: "Porozumění uživateli, požadavek, specifikace, prompt." },
            { f: "Test prošel, uživatel nespokojený", b: "Test popsal špatný záměr. Vrať se v řetězci k článku, který praskl." }
          ],
          terms: [
            { t: "Řetězec popisu (Description Chain)", d: "Cesta od hlasu uživatele přes produktový požadavek a technickou specifikaci k instrukci pro AI. Prompt je jen jeden článek." }
          ]
        }
      ]
    },
    {
      title: "Rozlišování pro tvůrce",
      lessons: [
        {
          id: "fb-06",
          title: "Rozlišování u kódu: pět pohledů",
          minutes: 6,
          lead: `Když AI postaví funkční produkt za pár minut, „funguje to“ přestává být laťkou. Pět pohledů ti dá strukturu pro úsudek: pět otázek, které položíš čemukoli, co AI postaví.`,
          blocks: [
            { t: "p", h: `Vrať se ke klinice. Co se stane, když odhad čekací doby skočí z 10 na 90 minut? Počítá řešení s různými potřebami pacientů? Nepřevzalo historické předsudky z dat? Fungující produkt a dobrý produkt nejsou totéž.` },
            { t: "table", head: ["Pohled", "Co ověřit", "Typické selhání AI"], rows: [
              ["1. <b>Funkční integrita</b><br><i>Funguje to?</i>", "Správný výstup pro skutečné vstupy, ne jen pro testovací data", "Projde unit testy, ale rozbije se na skutečných datech, se kterými prompt nepočítal"],
              ["2. <b>Připravenost na provoz</b><br><i>Funguje to dobře?</i>", "Souběžní uživatelé bez souběhových chyb (race conditions)", "Ve vývoji hladké, pod zátěží nebo ve skutečné infrastruktuře rozbité"],
              ["3. <b>Soulad s problémem</b><br><i>Je to ta správná věc?</i>", "Řeší skutečnou potřebu uživatele, ne jen doslovnou specifikaci", "Technicky kompletní funkce, která splní prompt, ale mine podstatu"],
              ["4. <b>Kvalita zážitku</b><br><i>Je to dobré?</i>", "Uživatel zvládne hlavní úkol bez pomoci a návodu", "Obecné vzory rozhraní, které fungují, ale působí lhostejně; zmatení uživatelé"],
              ["5. <b>Odpovědný dopad</b><br><i>Je to odpovědné?</i>", "Otevřenost o roli AI, generovaný obsah se nevydává za ověřený fakt", "Generovaný obsah podaný jako autoritativní nebo skupina lidí, na kterou se ve výchozím stavu zapomnělo"]
            ] },
            { t: "h", x: "Pohledy 1 a 2: testy a provoz" },
            { t: "ul", items: [
              `Nech AI psát testy <b>ve stejném kroku</b> jako kód, ne až potom, a stav průběžné kontrolní body. Mysli na celou škálu: unit, integrační a regresní testy, okrajové případy, end-to-end.`,
              `Testy, které nikdo nespustil, nejsou záchranná síť, ale falešný pocit bezpečí.`,
              `AI má předvídatelná slepá místa: souběžnost, bezpečnost a cokoli, co se rozbije až ve velkém měřítku. Nech ji zátěžově otestovat vlastní výstup, vygenerovat provozní scénáře a zeptej se přímo na skryté předpoklady.`
            ] },
            { t: "ex", title: "Ukázka: otázka na skryté předpoklady", turns: [
              { who: "user", text: `Jaké předpoklady o provozu tenhle kód dělá?` },
              { who: "ai", text: `1. Předpokládám, že API kliniky odpoví rychle. Nemám nastavený časový limit, takže když odpověď trvá 5 sekund, stránka zůstane viset na načítání.
2. Každé otevření stránky volá API zvlášť. Když stránku obnovují stovky lidí najednou, API to nemusí unést.
3. Při chybě zobrazím poslední známou hodnotu bez upozornění, že je stará.
4. Neověřuji, jestli hodnota dává smysl: skok z 10 na 90 minut se zobrazí bez komentáře.` }
            ], note: `Tohle při prvním průchodu nikdo neřešil a stačila jedna otázka. Rozhodnutí, jak se má stránka zachovat (zamrznout, ukázat starý údaj, nebo selhat srozumitelně), je ale na tobě.` },
            { t: "h", x: "Pohledy 3 až 5: tady je úsudek tvůj" },
            { t: "p", h: `<b>Soulad s problémem:</b> pacient se ptal na čekací dobu, ale ve skutečnosti potřeboval vědět, jestli bude během 20 minut volný pediatr, aby posoudil, jak vážná je horečka jeho dítěte. AI vyřešila zadaný problém, jestli je to ten skutečný, musíš ověřit ty. <b>Kvalita zážitku:</b> AI nemá vkus, má vzorce. U nástroje pro kliniku to není estetika, ale bezpečnost pacientů. <b>Odpovědný dopad:</b> pokud historická data odrážejí systémové nerovnosti v čekání, model je zopakuje. Nic nenahlásí, jen ukáže číslo. Stav pojistky, nech AI pojmenovat možné předsudky už při stavbě a zpochybňuj všechny předpoklady.` },
            { t: "key", h: `Většina výuky inženýrství končí u prvních dvou pohledů. Tvůrce potřebuje všech pět. Největší problémy skoro nikdy nejsou v pohledu 1: kód, který běží, AI vyrobí dobře. Produkt, na kterém záleží, potřebuje tvůj dohled.` },
            { t: "tip", h: `Vyzkoušej to: dej svou stavbu někomu v roli pacienta nebo administrátora kliniky, nic nevysvětluj a nepomáhej. Zapiš tři věci, které bys změnil/a, a ke každé pohled, pod který patří. U každé si všimni svého reflexu: opravíš ji sám/sama, nebo lépe popíšeš, co potřebuješ? Ani jedno není špatně, ale vzorec ti napoví, jestli budováš Rozlišování, nebo jen stavíš.` }
          ],
          quiz: [
            { q: "„Řeší to skutečnou potřebu uživatele, ne jen doslovnou specifikaci?“ Který pohled to je?", o: ["Funkční integrita", "Připravenost na provoz", "Soulad s problémem"], a: 2, why: "Soulad s problémem se ptá, jestli je to ta správná věc. AI ráda vyřeší zadaný problém místo skutečného." },
            { q: "Kdy má AI psát testy?", o: ["Ve stejném kroku jako kód", "Až po dokončení celé aplikace", "Vůbec, testy jsou práce pro člověka"], a: 0, why: "Testy vznikají spolu s kódem a průběžně se spouští. Nespuštěné testy dávají jen falešný pocit bezpečí." },
            { q: "Kde podle kurzu bývají největší problémy produktů postavených s AI?", o: ["Skoro vždy v pohledu 1: kód nejde spustit", "Spíš v dalších pohledech: soulad s problémem, zážitek, odpovědný dopad", "Výhradně v bezpečnosti"], a: 1, why: "Kód, který běží, AI vyrobí dobře. Chyby, na kterých záleží, jsou v pohledech, kde rozhoduje lidský úsudek." }
          ],
          cards: [
            { f: "Pět pohledů rozlišování", b: "Funguje to? Funguje to dobře? Je to ta správná věc? Je to dobré? Je to odpovědné?" },
            { f: "Slepá místa AI v kódu", b: "Souběžnost, bezpečnost a všechno, co se rozbije až ve velkém měřítku." },
            { f: "Nespuštěné testy", b: "Nejsou záchranná síť, ale falešný pocit bezpečí." }
          ],
          terms: [
            { t: "Pět pohledů rozlišování", d: "Rámec pro posouzení výstupu AI: funkční integrita, připravenost na provoz, soulad s problémem, kvalita zážitku a odpovědný dopad." }
          ]
        },
        {
          id: "fb-07",
          title: "Rozlišování u uživatelského zážitku",
          minutes: 5,
          lead: `Když je implementace rychlá, rozdíl dělá zážitek. Nemusíš se stát designérem, ale musíš dobrý zážitek poznat, umět ho zadat a iterovat k němu.`,
          blocks: [
            { t: "h", x: "Čtyři principy" },
            { t: "ul", items: [
              `<b>Srozumitelnost.</b> Každý prvek musí okamžitě sdělit, k čemu je. Respektuj mentální modely: pacient čeká, že kontrola čekací doby bude fungovat jako jiné stavové stránky, které zná.`,
              `<b>Hierarchie a postupné odkrývání.</b> Vizuální váha má odpovídat důležitosti. Velikostí a tloušťkou písma vytvoř jasné nadpisy, nepotřebné prvky omez a další informace nabídni, až když jsou potřeba.`,
              `<b>Přístupnost.</b> Základ, ne bonus. Zhruba každý pátý člověk má nějaké postižení (zrakové, kognitivní, neurologické). AI generuje pro průměrného uživatele a malé písmo, signály jen barvou a žargon tiše vylučují ostatní.`,
              `<b>Zpětná vazba a odezva.</b> Rozhraní má potvrdit každou akci. Načítání, potvrzení a chybové hlášky prostým jazykem říkají, co se stalo, co dělat dál a kde hledat pomoc.`
            ] },
            { t: "table", head: ["Princip", "Co AI udělá ve výchozím stavu", "Jak to má být"], rows: [
              ["Srozumitelnost", "Nadpis „App“, tlačítko „Submit“, cena bez měny, ikona bez vysvětlení", "„Kontrola objednávky“, „← Zpět na menu“, tlačítko „Objednat za [cena]“"],
              ["Hierarchie", "Celková cena zapadne v plochém seznamu, čas doručení je stejně malý jako číslo objednávky", "Čas doručení a celková cena nahoře a velké, rozpis drobněji"],
              ["Přístupnost", "Stav jen barevnou tečkou, text 9 px, zkratky „qty“, „ETA“, „T&amp;C“", "„✓ Objednávka potvrzena“, čitelné písmo, „Množství“, „Doručíme přibližně za X minut“"],
              ["Zpětná vazba", "„Error 503“", "„Objednávku se nepodařilo odeslat. Košík je uložený, zkus to za chvíli znovu.“ Tlačítko Zkusit znovu a odkaz na podporu"]
            ] },
            { t: "cmp",
              bad: { lbl: "Přání", h: `„Ať to vypadá dobře.“` },
              good: { lbl: "Zadání", h: `„Čekací dobu dej největším písmem na stránce, stav označ jednou barvou a zobraz čas poslední aktualizace, aby pacient věděl, jak starý údaj je.“` } },
            { t: "ex", title: "Ukázka: z kritiky zadání pro AI", turns: [
              { who: "bad", label: "Kritika pro kolegu", text: `Působí to přeplácaně.` },
              { who: "user", label: "Zadání pro AI", text: `Na úvodní obrazovce nech jen tři věci: čekací dobu (největší písmo), čas poslední aktualizace a stav kliniky (otevřeno nebo zavřeno, slovem, ne jen barvou). Adresu, otevírací dobu a kontakty přesuň pod tlačítko „Další informace“. Zachovej dostatečný kontrast textu a ovládání klávesnicí.` }
            ], note: `„Působí to přeplácaně“ je férová kritika, ale jako instrukce pro AI k ničemu. Kritika pro kolegu a popis pro AI jsou dva různé dokumenty. Součástí designové gramotnosti je umět vlastní vkus přeložit do něčeho proveditelného.` },
            { t: "warn", h: `AI nedělá přístupnost správně sama od sebe. Pokaždé si výslovně řekni o kompatibilitu se čtečkou obrazovky, barevný kontrast a ovládání klávesnicí, nech na to napsat testy a výsledek zkontroluj.` },
            { t: "key", h: `Tohle je Popis a Rozlišování v praxi: přesně popíšeš zážitek, AI ho postaví, porovnáš výsledek se záměrem, popíšeš rozdíl a opakuješ. V cvičení z originálu si proto napíšeš designovou specifikaci (uživatelské toky, hierarchii informací, vzory interakce), necháš podle ní AI aplikaci přestavět a hledáš, kde je výsledek technicky správný, ale zážitkově plochý.` }
          ],
          quiz: [
            { q: "Proč „ať to vypadá dobře“ nefunguje jako zadání?", o: ["Je to přání, ne specifikace: neříká, co konkrétně udělat", "AI neumí pracovat s designem", "Je moc krátké"], a: 0, why: "Zážitek je potřeba popsat stejně přesně jako funkci: co je největší, co kde je, co se zobrazí kdy." },
            { q: "Aplikace při výpadku ukáže jen „Error 503“. Který princip porušuje?", o: ["Hierarchii", "Zpětnou vazbu", "Postupné odkrývání"], a: 1, why: "Chybová hláška má říct, co se stalo, co dělat dál a kde hledat pomoc. Kód serveru neříká nic z toho." },
            { q: "Jak zacházet s přístupností při práci s AI?", o: ["AI ji zvládne sama, není třeba ji zmiňovat", "Doplnit ji až na konci, pokud zbude čas", "Pokaždé ji výslovně zadat, otestovat a výsledek zkontrolovat"], a: 2, why: "AI ve výchozím stavu generuje pro průměrného uživatele. Přístupnost musíš zadat a ověřit." }
          ],
          cards: [
            { f: "Čtyři principy UX", b: "Srozumitelnost, hierarchie a postupné odkrývání, přístupnost, zpětná vazba a odezva." },
            { f: "Kritika vs. zadání", b: "„Působí to přeplácaně“ je kritika. Zadání říká, co konkrétně nechat, přesunout a zvýraznit." }
          ],
          terms: [
            { t: "Přístupnost (accessibility)", d: "Navrhování tak, aby produkt mohli používat i lidé se zrakovým, kognitivním nebo jiným postižením: kontrast, čtečky obrazovky, ovládání klávesnicí, srozumitelný jazyk." }
          ]
        }
      ]
    },
    {
      title: "Všechno dohromady",
      lessons: [
        {
          id: "fb-08",
          title: "Stůj si za tím, co stavíš",
          minutes: 6,
          lead: `Zodpovědnost u tvůrce je plné vlastnictví: od otázky, jestli má produkt vůbec existovat, po to, jestli po spuštění slouží uživatelům. „To napsala AI“ nic nevysvětluje a nic neomlouvá.`,
          blocks: [
            { t: "p", h: `V rámci 4D znamená Zodpovědnost být otevřený/á o použití AI, vlastnit výstupy, ověřit práci před vydáním, myslet na dopad na ostatní a dodržovat pravidla, ochranu soukromí a profesní standardy. S AI se ale snadno staneš vlastníkem kódu, který jsi nepsal/a. Zodpovědnost je způsob, jak svůj vlastní kód „dohnat“: pochopit ho, zatížit, otestovat a postavit systémy, které zachytí, co ti uteče.` },
            { t: "h", x: "Tři návyky inženýrky z Anthropic" },
            { t: "steps", items: [
              `<b>Vytáhni skrytá rozhodnutí na světlo.</b> Když píšeš kód sám/sama, okrajové případy se vynoří cestou. S AI se o nich často rozhodne, aniž by ses to dozvěděl/a. Proto se ptej: „Můžeš ověřit, že uživatelé nevidí soubory jiných uživatelů?“ A po větší práci: „Jaké předpoklady a kompromisy jsi udělal? Na jaká bezpečnostní rizika si mám dát pozor?“`,
              `<b>Řekni to v pull requestu.</b> Když většinu změny napsal Claude, uveď to v popisu PR. Ne jako výmluvu, ale jako informaci. AI dělá jiný druh chyb než lidé: sebejistě použitá zastaralá API, kód lokálně čistý, ale nekonzistentní se zbytkem projektu, vymyšlené chování pro případy, které nikdo nezadal. Reviewer se podle toho zaměří.`,
              `<b>Pochop, co dodáváš.</b> S AI můžeš mít fungující kód, kterému nerozumíš. Porozumění je teď samostatný krok a AI s ním pomůže: Claude ti kód trpělivě vysvětlí. Chce to čas, ale tím se vracíš do smyčky.`
            ] },
            { t: "ex", title: "Ukázka: popis pull requestu", turns: [
              { who: "user", label: "Popis PR", text: `Přidává zobrazení čekací doby s obnovou každých 5 minut.
Většinu kódu napsal Claude. Prošel jsem ho a nechal si vysvětlit logiku obnovy dat.
Při review se prosím zaměř na: ošetření výpadku API, použité verze knihoven a konzistenci se stávajícími komponentami.
Testy: akceptační testy procházejí, přidal jsem testy pro zavřenou kliniku a chybějící data.` }
            ], note: `Žádná omluva, jen informace, která reviewerovi řekne, kde hledat typické chyby AI.` },
            { t: "h", x: "Záchranné sítě" },
            { t: "ul", items: [
              `<b>Testy.</b> Pevně drží chování, na kterém ti záleží, takže můžeš dál měnit bez obav. Návyk psát testy předem je důvod, proč můžeš po spuštění sebejistě iterovat.`,
              `<b>Observabilita.</b> Logy, sledování chyb, dashboardy. O problému se dozvíš z vlastních dat, ne z e-mailu od uživatele.`,
              `<b>Feature flagy.</b> Pořád se hodí pro chvíle, kdy něco proklouzne.`,
              `<b>Slovník vydání.</b> Migrace, verzování, rate limity, feature flagy: AI je sama nezmíní, dokud se nezeptáš.`
            ] },
            { t: "p", h: `<b>Prototypuj volně, vydávej selektivně.</b> Levný kód má hodnotu, jen když ho doprovází poctivé hodnocení. Proto musíš umět rozhodnout: <i>ship it, fix it, or stop it</i> (vydat, opravit, nebo zastavit), a být ochotný/á zrušit i vlastní práci, když data říkají, že to není ono. Po kontrole níže aplikaci nasaď nebo zveřejni jako prototyp, dej ji třem skutečným uživatelům a podle toho, co zjistíš, udělej jednu iteraci s testy, které změnu ověří.` },
            { t: "table", head: ["Před vydáním", "Otázka"], rows: [
              ["Pochopení", "Umím vysvětlit, co kód dělá, ne jen co by dělat měl?"],
              ["Testy", "Procházejí akceptační testy? Otestoval/a jsem okrajové případy (zavřená klinika, chybějící data, nulová čekací doba)?"],
              ["Přístup", "Komu moje řešení neslouží dobře? Přístup je designové rozhodnutí."],
              ["Odpovědnost", "Dá se výstup špatně pochopit nebo zneužít? Řekl/a jsem otevřeně, jakou roli hrála AI?"],
              ["Zpětná vazba", "Jak po vydání poznám, že to funguje?"]
            ] }
          ],
          quiz: [
            { q: "Kolega řekne: „Tu chybu napsala AI, ne já.“ Co na to říká kurz?", o: ["Má pravdu, odpovědnost nese nástroj", "„AI to napsala“ nic nevysvětluje a nic neomlouvá: výsledek vlastníš ty", "Záleží, kolik procent kódu napsala AI"], a: 1, why: "Vlastníš výsledek, ne jen výstup. Za to, co vydáš, ručíš bez ohledu na roli AI." },
            { q: "Proč uvést v popisu pull requestu, že většinu kódu napsal Claude?", o: ["Aby reviewer věděl, že AI dělá jiný druh chyb, a podle toho zaměřil review", "Jako právní výhradu", "Aby review mohlo odpadnout"], a: 0, why: "Je to informace, ne výmluva: reviewer pak hledá zastaralá API, nekonzistence a vymyšlené chování." },
            { q: "Jak se po spuštění nejlépe dozvíš, že něco nefunguje?", o: ["Z e-mailů od uživatelů", "Zeptáš se AI, jestli kód funguje", "Z vlastních dat: logy, sledování chyb, dashboardy"], a: 2, why: "Observabilita ti problém ukáže dřív, než ti napíše uživatel." }
          ],
          cards: [
            { f: "Tři návyky Zodpovědnosti", b: "Vytáhni skrytá rozhodnutí (ptej se na předpoklady a rizika), uveď AI v PR, pochop, co dodáváš." },
            { f: "Záchranné sítě", b: "Testy na jedné straně, observabilita na druhé, feature flagy pro případ, že něco proklouzne." },
            { f: "Ship it, fix it, or stop it", b: "Prototypuj volně, vydávej selektivně a buď ochotný/á zastavit i vlastní práci." }
          ],
          terms: [
            { t: "Observabilita (observability)", d: "Schopnost vidět, co se v běžícím produktu děje, díky logům, sledování chyb a dashboardům." },
            { t: "Feature flag", d: "Přepínač, kterým lze funkci v produktu zapnout nebo vypnout. Hodí se jako pojistka, když po vydání něco proklouzne." }
          ]
        }
      ]
    },
    {
      title: "Závěr",
      lessons: [
        {
          id: "fb-09",
          title: "Závěr: tvoje další stavba",
          minutes: 4,
          lead: `Poslední lekce spojuje všechna čtyři D a dává ti úkol na tento týden: vyber jednu skutečnou práci, která na tebe čeká, a projdi ji s AI tak, jak ses tu naučil/a.`,
          blocks: [
            { t: "p", h: `Možná je to funkce, kterou uživatelé chtějí už tři měsíce. Prototyp, který chceš proměnit ve skutečný produkt. Nebo hromada zpětné vazby v tabulce, na kterou nebyl čas. Hlavně ať je to něco konkrétního, ne hypotetického.` },
            { t: "table", head: ["D", "Na co se zeptat"], rows: [
              ["<b>Delegace</b>", "Které fáze můžu bezpečně delegovat (implementace, kostra projektu, boilerplate, první návrhy specifikací) a které potřebují můj úsudek (kdo je uživatel, co ho trápí, je to ta správná věc)?"],
              ["<b>Popis</b>", "Mám celý řetězec: potřeba uživatele → požadavek → specifikace → instrukce pro AI → testy? Vím, jak vypadá hotovo?"],
              ["<b>Rozlišování</b>", "Prošel/prošla jsem výstup všemi pěti pohledy? Funguje to, funguje to dobře, je to ta správná věc, je to dobré, je to odpovědné?"],
              ["<b>Zodpovědnost</b>", "Rozumím tomu, co to dělá? Mám zpětnou vazbu po spuštění? Postavil/a bych se za to?"]
            ] },
            { t: "h", x: "Dobří kandidáti" },
            { t: "ul", items: [
              `Požadavek na funkci, který odkládáš.`,
              `Uživatelský výzkum nebo zpětná vazba, kterou nikdo nezpracoval.`,
              `Technická specifikace, bez které se nedá začít.`,
              `Část kódu bez testů, na kterou se bojíš sáhnout.`
            ] },
            { t: "key", h: `Čtyři D jsou dynamická, ne posloupnost. Přejdeš od Delegace k Popisu, zpátky k Rozlišování a zjistíš, že chceš delegovat jinak. Takhle vypadá zběhlost v praxi.` },
            { t: "warn", h: `Nejtěžší je opustit práci, do které jsi už vložil/a úsilí. Úkolem tvůrce ale není bránit software, nýbrž sloužit uživateli. Buď ochotný/á vetovat i to, co jsi postavil/a, když důkazy říkají, že to nefunguje.` },
            { t: "info", h: `Originální kurz končí přehledem materiálů k běžným úkolům tvůrce (například psaní technických specifikací nebo cyklus build, measure, learn s pomocí AI), krátkým testem a odznakem. Tady kurz dokončíš projitím lekcí. A zamysli se, kdo z tvého týmu by z rámce 4D měl užitek.` }
          ],
          quiz: [
            { q: "Co podle kurzu znamená, že čtyři D jsou „dynamická“?", o: ["Že se mění každý rok", "Že je musíš projít přesně v pořadí", "Že se mezi nimi při práci volně pohybuješ a vracíš"], a: 2, why: "Nejsou to kroky za sebou. Pohyb mezi nimi podle situace je to, jak zběhlost vypadá v praxi." },
            { q: "Který úkol je dobrý kandidát na tvou další stavbu s AI?", o: ["Část kódu bez testů, na kterou se bojíš sáhnout", "Hypotetický projekt, který možná jednou uděláš", "Úkol, který už je hotový"], a: 0, why: "Má to být skutečná práce, která už na tebe čeká, ne hypotetický příklad." },
            { q: "Výstup AI prošel otázkou „Funguje to?“. Kde podle kurzu nejčastěji zakopne?", o: ["U kompilace", "U otázky „Je to ta správná věc?“", "U pravopisu v komentářích"], a: 1, why: "AI často postaví, co jsi popsal/a, ale ne to, co řeší problém. Tam je tvůj úsudek nejcennější." }
          ],
          cards: [
            { f: "4D pro tvůrce jednou větou", b: "Deleguj implementaci, ne úsudek; popiš celý řetězec až k testům; posuď pěti pohledy; vlastni výsledek i po spuštění." },
            { f: "Prototypuj volně, vydávej selektivně", b: "Před vydáním: rozumím tomu? Mám zpětnou vazbu? Postavil/a bych se za to?" }
          ],
          terms: []
        }
      ]
    }
  ]
});
