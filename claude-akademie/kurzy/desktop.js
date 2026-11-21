/* Kurz: Claude Desktop naplno (vlastní kurz podle help centra Anthropic, stav listopad 2026) */
AKADEMIE.add({
  id: "desktop",
  emoji: "🖥️",
  title: "Claude Desktop naplno",
  category: "prakticky",
  level: "Prakticky",
  desc: "Aplikace pro Mac a Windows do detailu: jedna konverzace pro otázky i velké úkoly, rychlé zadání zkratkou, práce se soubory a počítačem, oprávnění, rozšíření, paměť a plánované úkoly.",
  source: "https://support.claude.com/en/articles/16761823",
  modules: [
    {
      title: "Základ: aplikace a nové rozhraní",
      lessons: [
        {
          id: "dk-01",
          title: "Proč desktopová aplikace, a ne jen web",
          minutes: 4,
          lead: `Účet, konverzace i projekty jsou stejné jako na webu a v telefonu. Desktop navíc dostane přístup k tvému počítači: složkám, aplikacím a obrazovce. To je jeho hlavní smysl.`,
          blocks: [
            { t: "h", x: "Co umí jen (nebo hlavně) desktop" },
            { t: "ul", items: [
              `<b>Práce s lokálními soubory</b>: Claude otevírá, vytváří a ukládá soubory ve složkách, které mu povolíš.`,
              `<b>Rychlé zadání zkratkou</b> odkudkoli (na Macu dvojí stisk Option), včetně snímku obrazovky a diktování.`,
              `<b>Ovládání počítače</b> (computer use): Claude umí klikat, psát a přepínat okna v aplikacích, ke kterým nemá konektor.`,
              `<b>Desktopová rozšíření</b>: lokální MCP servery instalované jedním klikem (přístup k aplikacím a datům v počítači).`,
              `<b>Cíl pro Dispatch</b>: z telefonu zadáš úkol a ten se provede na tvém počítači.`,
              `<b>Záložka Code</b> s Claude Code přímo v aplikaci, bez instalace do terminálu.`
            ] },
            { t: "h", x: "Instalace" },
            { t: "steps", items: [
              `Stáhni aplikaci z <b>claude.com/download</b> (Mac, Windows; Dispatch podporuje i Linux) a přihlas se stejným účtem jako na webu a v telefonu.`,
              `Při prvním spuštění Mac nabídne zapnutí zkratek pro rychlé zadání. Zapni hlavní zkratku hned, hlasovou podle chuti (lekce 3).`,
              `V <b>Nastavení</b> najdeš <b>kanál vydání</b>: <i>Stable</i> (výchozí, méně častých a otestovanějších aktualizací) nebo <i>Latest</i> (nová verze zhruba denně). Pro běžnou práci nech Stable.`
            ] },
            { t: "info", h: `Zdarma běží v aplikaci běžný chat. Práce se soubory, úkoly v pozadí, ovládání počítače a Dispatch potřebují placený plán (Pro, Max, Ultra, firemní plány podle nastavení správce).` },
            { t: "warn", h: `Na Windows potřebuje práce s úkoly virtualizaci (Hyper-V). Pokud máš edici Windows Home, chat a Code poběží, ale úkoly v izolovaném prostředí podle návodů třetích stran ne. Ověř v aplikaci, co ti nabídne.` }
          ],
          quiz: [
            { q: "Co je hlavní přidaná hodnota desktopové aplikace proti webu?", o: ["Hezčí vzhled", "Přístup k počítači: soubory, aplikace, obrazovka, lokální rozšíření", "Jiný model Claude"], a: 1, why: "Účet a konverzace jsou stejné; desktop přidává přístup k tvému počítači." },
            { q: "Jaký kanál vydání zvolit pro každodenní práci?", o: ["Latest", "Stable", "Beta"], a: 1, why: "Stable je výchozí a dostává otestovanější verze. Latest jen když chceš novinky hned." }
          ],
          cards: [
            { f: "Proč Claude Desktop", b: "Lokální soubory, rychlé zadání zkratkou, ovládání počítače, desktopová rozšíření, cíl pro Dispatch, záložka Code." },
            { f: "Kanál vydání Claude Desktop", b: "Stable (výchozí, otestované) nebo Latest (nová verze zhruba denně). Nastavení aplikace." }
          ],
          terms: [
            { t: "Claude Desktop", d: "Aplikace Claude pro Mac a Windows. Stejný účet jako web a mobil, navíc přístup k souborům, aplikacím a obrazovce počítače." },
            { t: "Kanál vydání", d: "Volba, jak často se Claude Desktop aktualizuje: Stable (výchozí) nebo Latest (zhruba denně)." }
          ]
        },
        {
          id: "dk-02",
          title: "Jedna konverzace pro otázky i velké úkoly",
          minutes: 4,
          lead: `Od září 2026 už nevybíráš mezi Chatem a Cowork. Napíšeš, co potřebuješ, a Claude sám pozná, jestli stačí odpověď, nebo jde o úkol se soubory, výzkumem a hotovým dokumentem.`,
          blocks: [
            { t: "cmp",
              bad: { lbl: "Dřív", h: `Přepínač <b>Chat / Cowork</b> v okně zprávy. Úkoly a chaty v oddělených seznamech. Globální instrukce zvlášť pro Cowork.` },
              good: { lbl: "Teď", h: `Jedno okno, jeden seznam <b>Recents</b>. Claude volí postup sám. Instrukce jsou v <b>Nastavení › Instructions for Claude</b>. Záložka <b>Code</b> a výběr modelu zůstaly na svém místě.` } },
            { t: "h", x: "Kde co najdeš" },
            { t: "table", head: ["Co", "Kde"], rows: [
              ["Všechny konverzace i úkoly", "<b>Recents</b> v postranním panelu"],
              ["Výzkum (Research)", "Tlačítko <b>+</b> pod polem zprávy, nebo napiš <code>/deep-research</code>"],
              ["Konektory, skills, pluginy", "<b>Customize</b> (např. Customize › Connectors)"],
              ["Oprávnění pro akce", "Přepínač přímo v okně zprávy (Auto / Manual)"],
              ["Spotřeba limitu", "<b>Nastavení › Usage</b>"],
              ["Instrukce, které platí vždy", "<b>Nastavení › Instructions for Claude</b>"]
            ] },
            { t: "ex", title: "Ukázka: zadání jako kolegovi", turns: [
              { who: "bad", text: `udělej prezentaci o prodejích` },
              { who: "user", text: `Ze souboru prodeje-q3.xlsx ve složce Reporty udělej prezentaci na pondělní poradu: 6 až 8 slidů, nahoře shrnutí ve třech bodech, pak vývoj po měsících s grafem a na konci tři doporučení. Výstup jako PowerPoint do stejné složky.` },
              { who: "ai", text: `Plán: načtu tabulku, spočítám měsíční vývoj, připravím grafy a 7 slidů. Hotovo zhruba za pár minut, uložím jako prodeje-q3-porada.pptx.` }
            ], note: `Dobré zadání má <b>výsledek, formát a vstupy</b>. Na tom, jestli tomu dřív říkal „chat“ nebo „Cowork“, už nezáleží.` },
            { t: "info", h: `Novinka se zapíná postupně. Pokud v okně zprávy ještě vidíš volbu Chat a Cowork, máš starší rozhraní; principy z této lekce platí stejně, jen úkol se soubory spustíš přes Cowork. Zpět ke staršímu rozhraní se po přechodu přepnout nedá.` }
          ],
          quiz: [
            { q: "Kde po sjednocení najdeš dřívější úkoly Cowork?", o: ["V samostatné záložce Cowork", "V seznamu Recents spolu s chaty", "Už nejsou dostupné"], a: 1, why: "Chaty i úkoly jsou v jednom seznamu Recents." },
            { q: "Jak spustíš hloubkový výzkum?", o: ["Přepínačem Web search", "Tlačítkem + pod polem zprávy (Research) nebo /deep-research", "Jen v aplikaci pro Android"], a: 1, why: "Samostatný přepínač vyhledávání zmizel; Claude hledá sám, když to dává smysl." },
            { q: "Co má obsahovat dobré zadání úkolu?", o: ["Hlavně zdvořilost", "Výsledek, formát a vstupy", "Název modelu"], a: 1, why: "Stejně jako když úkol předáváš kolegovi." }
          ],
          cards: [
            { f: "Sjednocený Claude (září 2026)", b: "Chat a Cowork jsou jedno. Claude sám pozná, jestli stačí odpověď, nebo jde o úkol. Vše v Recents." },
            { f: "Tři části dobrého zadání", b: "Výsledek (co chci), formát (Word, slidy, zpráva do Slacku), vstupy (soubory, odkazy, aplikace)." }
          ],
          terms: [
            { t: "Recents", d: "Jediný seznam konverzací a úkolů v postranním panelu Claude." },
            { t: "Customize", d: "Sekce aplikace Claude, kde spravuješ konektory, skills a pluginy." }
          ]
        },
        {
          id: "dk-03",
          title: "Rychlé zadání a klávesové zkratky",
          minutes: 4,
          lead: `Nejrychlejší cesta ke Claude je nepřepínat okna. Na Macu otevřeš okénko pro dotaz z jakékoli aplikace, přidáš snímek obrazovky nebo nadiktuješ.`,
          blocks: [
            { t: "h", x: "Mac: Quick entry" },
            { t: "table", head: ["Akce", "Jak"], rows: [
              ["Otevřít okénko pro dotaz", "Dvakrát rychle <b>Option</b> (lze změnit na Option + Mezerník nebo vlastní)"],
              ["Přiložit snímek části obrazovky", "Otevři okénko a táhni přes plochu <i>Drag to take a screenshot</i>"],
              ["Přiložit celé okno", "Otevři okénko a klikni na okno aplikace"],
              ["Diktovat", "<b>Caps Lock</b> začne, další stisk ukončí (nejdřív zapnout, výchozí je vypnuto)"],
              ["Odeslat", "Enter nebo šipka"]
            ] },
            { t: "steps", items: [
              `Zkratky změníš v <b>Nastavení › Desktop app</b> (starší rozložení: Nastavení › System, část „This computer“).`,
              `Mac si vyžádá oprávnění v <b>Nastavení systému › Soukromí a zabezpečení</b>: <i>Zpřístupnění</i> (pro okénko), <i>Nahrávání obrazovky</i> (snímky a okna), <i>Rozpoznávání řeči</i> (diktování, macOS 14 a novější).`,
              `Rychlé zadání potřebuje macOS 12 a novější a běžící aplikaci (stačí na pozadí). Je dostupné na všech plánech včetně Free.`
            ] },
            { t: "h", x: "Windows" },
            { t: "p", h: `Quick entry na Windows zatím není. Nejbližší náhrada: připni Claude na <b>hlavní panel</b> a otevírej ho zkratkou <b>Win + číslo pozice</b> (např. Win + 1). Snímek obrazovky uděláš <b>Win + Shift + S</b> a vložíš do zprávy přes <b>Ctrl + V</b>.` },
            { t: "tip", title: "Kdy se zkratka vyplatí", h: `Chybová hláška v jiné aplikaci, graf v prohlížeči, e-mail, na který nevíš jak odpovědět: Option Option, klik na okno, napiš „co s tím?“. Za tři vteřiny máš odpověď bez kopírování.` },
            { t: "warn", h: `Diktování přes Caps Lock převezme klávesu Caps Lock. Pokud ji používáš na psaní velkých písmen, nastav si raději vlastní zkratku.` }
          ],
          quiz: [
            { q: "Jak na Macu výchozím způsobem otevřeš rychlé zadání?", o: ["Cmd + Q", "Dvakrát rychle Option", "Ctrl + Alt + C"], a: 1, why: "Výchozí je dvojí stisk Option; lze změnit v Nastavení › Desktop app." },
            { q: "Které oprávnění macOS potřebuje snímek obrazovky v rychlém zadání?", o: ["Kalendář", "Nahrávání obrazovky", "Poloha"], a: 1, why: "Snímky a sdílení oken potřebují Nahrávání obrazovky." },
            { q: "Je Quick entry dostupné na Windows?", o: ["Ano, stejně jako na Macu", "Ne, zatím jen macOS", "Jen ve Windows 11 Pro"], a: 1, why: "Help center uvádí jen macOS; na Windows pomůže připnutí na panel a Win + číslo." }
          ],
          cards: [
            { f: "Quick entry na Macu", b: "Option Option = okénko pro dotaz; táhni = snímek; klik na okno = celé okno; Caps Lock = diktování (zapnout v nastavení)." },
            { f: "Oprávnění macOS pro Claude", b: "Zpřístupnění (okénko), Nahrávání obrazovky (snímky), Rozpoznávání řeči (diktování)." },
            { f: "Rychlý Claude na Windows", b: "Připnout na hlavní panel → Win + číslo. Snímek Win + Shift + S, vložit Ctrl + V." }
          ],
          terms: [
            { t: "Quick entry", d: "Okénko pro rychlý dotaz na Claude odkudkoli v macOS, se snímkem obrazovky a diktováním." }
          ]
        }
      ]
    },
    {
      title: "Soubory, počítač a oprávnění",
      lessons: [
        {
          id: "dk-04",
          title: "Složky a soubory: jak dát Claude práci",
          minutes: 4,
          lead: `Claude na desktopu pracuje se soubory přímo. Vyplatí se mít jasně, kam smí sahat a kam ukládá výsledky.`,
          blocks: [
            { t: "h", x: "Dvě nastavení, která stojí za to projít" },
            { t: "table", head: ["Nastavení", "K čemu"], rows: [
              ["<b>Trusted folders</b> (důvěryhodné složky)", "Složky, se kterými smí Claude pracovat. Přidávej konkrétní pracovní složky, ne celý domovský adresář."],
              ["<b>Storage folder</b> (úložná složka)", "Kam Claude ukládá výstupy, když neřekneš jinak."]
            ] },
            { t: "h", x: "Co umí s dokumenty" },
            { t: "ul", items: [
              `Číst PDF, Word, Excel, PowerPoint, obrázky, CSV, text.`,
              `Vytvářet dokumenty, tabulky, prezentace (stáhnout jako PowerPoint nebo PDF) a grafy.`,
              `<b>Upravovat koncept na místě</b>: koncept se otevře vedle konverzace, označíš část, napíšeš změnu a Claude přepíše jen ji.`,
              `Hromadné operace: přejmenovat, roztřídit, sloučit desítky souborů.`
            ] },
            { t: "ex", title: "Ukázka: bezpečné zadání se soubory", turns: [
              { who: "user", text: `Ve složce Dokumenty/Faktury-2026 je asi 40 PDF. Neměň originály. Vytvoř podsložku vystup a v ní tabulku faktury.xlsx (dodavatel, datum, částka, splatnost) a seznam faktur po splatnosti. Co nepůjde přečíst, vypiš zvlášť.` }
            ], note: `Tři pojistky: <b>originály nechat</b>, <b>výstup do podsložky</b>, <b>pravidlo pro nejistotu</b>.` },
            { t: "tip", h: `Pro jednorázovou práci si udělej pracovní kopii složky. Když se něco pokazí, originál zůstane netknutý.` }
          ],
          quiz: [
            { q: "Kam patří citlivé složky (hesla, cizí osobní údaje)?", o: ["Do Trusted folders, ať je Claude zná", "Mimo Trusted folders", "Do Storage folder"], a: 1, why: "Claude smí pracovat jen s tím, co mu povolíš; citlivé věci tam nepatří." },
            { q: "Jak upravíš jen jeden odstavec konceptu?", o: ["Zkopíruješ celý text znovu do zprávy", "Označíš ho v konceptu vedle konverzace a napíšeš změnu", "Nejde to"], a: 1, why: "Úprava na místě mění jen označené místo." }
          ],
          cards: [
            { f: "Trusted folders vs Storage folder", b: "Trusted = kam Claude smí sahat. Storage = kam ukládá výstupy." },
            { f: "Tři pojistky při práci se soubory", b: "Originály neměnit, výstup do podsložky, pravidlo pro nejistotu." }
          ],
          terms: [
            { t: "Trusted folders", d: "Složky v počítači, se kterými smí Claude Desktop pracovat." },
            { t: "Úprava na místě", d: "Koncept se otevře vedle konverzace; označíš část a Claude změní jen ji." }
          ]
        },
        {
          id: "dk-05",
          title: "Oprávnění: Auto, nebo Manual",
          minutes: 3,
          lead: `Claude může u úkolu buď pracovat sám, nebo se ptát před každou akcí. Vybrat správnou míru dohledu je půlka bezpečné práce.`,
          blocks: [
            { t: "cmp",
              bad: { lbl: "Manual", h: `Claude se zeptá <b>před každou akcí</b>. Pomalejší, ale máš vše pod kontrolou. Výchozí na Enterprise.` },
              good: { lbl: "Auto", h: `Claude <b>pracuje sám</b> a před akcemi spouští automatické bezpečnostní kontroly. Výchozí na Pro, Max, Ultra a Team.` } },
            { t: "ul", items: [
              `Přepínač je přímo v okně zprávy a platí pro celou konverzaci. Změníš ho kdykoli, i uprostřed úkolu.`,
              `Úkol můžeš kdykoli <b>zastavit</b>.`,
              `Jednotlivé nástroje konektorů lze nastavit na <b>Always ask</b> (vždy se zeptat), třeba odeslání e-mailu.`,
              `Před trvalým smazáním souborů se Claude ve výchozím stavu ptá. Pozor: to neplatí pro ovládání počítače.`
            ] },
            { t: "tip", title: "Praktické pravidlo", h: `Čtení, třídění a tvorba nových souborů: Auto. Odesílání zpráv, platby, mazání, cokoli „ven“: Manual nebo Always ask.` }
          ],
          quiz: [
            { q: "Kde přepneš mezi Auto a Manual?", o: ["Jen v nastavení účtu na webu", "Přímo v okně zprávy", "Nedá se to změnit"], a: 1, why: "Přepínač je v okně zprávy a platí pro konverzaci." },
            { q: "Co nastavit pro nástroj „odeslat e-mail“?", o: ["Always ask", "Nic, Auto to vyřeší", "Vypnout celý účet"], a: 0, why: "Akce, které jdou ven a nejdou vrátit, je dobré nechat schvalovat." }
          ],
          cards: [
            { f: "Auto vs Manual", b: "Auto: Claude pracuje sám s bezpečnostními kontrolami. Manual: ptá se před každou akcí. Přepínač v okně zprávy." },
            { f: "Always ask", b: "Nastavení jednotlivého nástroje konektoru: Claude se vždy zeptá, než ho použije." }
          ],
          terms: [
            { t: "Režim oprávnění", d: "Auto nebo Manual: jestli Claude u úkolu pracuje sám, nebo schvaluješ každou akci." }
          ]
        },
        {
          id: "dk-06",
          title: "Ovládání počítače a prohlížeče",
          minutes: 4,
          lead: `Když pro aplikaci neexistuje konektor, Claude ji umí ovládat jako člověk: vidí obrazovku, kliká a píše. Je to pomalejší, ale otevírá to cokoli.`,
          blocks: [
            { t: "h", x: "V jakém pořadí Claude volí nástroj" },
            { t: "ol", items: [
              `<b>Konektor</b> (nejrychlejší a nejpřesnější, např. Gmail, Drive, Slack).`,
              `<b>Prohlížeč</b> (vestavěný prohlížeč aplikace nebo rozšíření Claude v Chrome).`,
              `<b>Obrazovka, myš a klávesnice</b> (computer use) pro vše ostatní.`
            ] },
            { t: "ul", items: [
              `Než poprvé sáhne do nové aplikace, <b>požádá o povolení</b>. Některé aplikace (podle návodů např. investiční a kryptoměnové) jsou ve výchozím stavu zakázané.`,
              `Funguje na Macu a Windows, jen když je aplikace Claude Desktop <b>otevřená</b>. Na Linuxu ovládání počítače není.`,
              `Pro Pro, Max a Ultra je ovládání počítače dostupné přímo, pro Team a Enterprise jako postupně zapínaná beta, kterou musí povolit správce (volba Computer access).`
            ] },
            { t: "ex", title: "Ukázka: aplikace bez konektoru", turns: [
              { who: "user", text: `V aplikaci Fakturoid vystav fakturu pro firmu Novák s.r.o. podle posledního e-mailu od Petra. Před uložením mi ukaž náhled.` },
              { who: "ai", text: `Konektor pro Fakturoid nemám, použiju tedy prohlížeč. Smím otevřít fakturoid.cz? … Náhled faktury je připravený: 3 položky, celkem 24 200 Kč. Uložit?` }
            ], note: `Dobře: Claude řekl, jaký nástroj volí, požádal o přístup a <b>zastavil před akcí, která jde ven</b>.` },
            { t: "warn", h: `Na webových stránkách může být text, který se snaží Claude „přeprogramovat“ (prompt injection). U citlivých úkolů sleduj, co dělá, a nech schvalovat odeslání a platby.` }
          ],
          quiz: [
            { q: "Co Claude zkusí jako první, když má něco udělat v aplikaci?", o: ["Klikat po obrazovce", "Konektor", "Požádat tě, ať to uděláš sám"], a: 1, why: "Konektor je nejrychlejší a nejspolehlivější; obrazovka je poslední možnost." },
            { q: "Kdy ovládání počítače funguje?", o: ["I při zavřené aplikaci", "Jen když je Claude Desktop otevřený", "Jen v noci"], a: 1, why: "Lokální soubory, prohlížeč i ovládání počítače běží jen při otevřené aplikaci." }
          ],
          cards: [
            { f: "Pořadí nástrojů Claude", b: "1. konektor, 2. prohlížeč, 3. obrazovka, myš a klávesnice." },
            { f: "Computer use: podmínky", b: "Mac nebo Windows, otevřený Claude Desktop, povolení pro každou novou aplikaci." }
          ],
          terms: [
            { t: "Computer use", d: "Ovládání počítače: Claude vidí obrazovku, kliká a píše v aplikacích bez konektoru." },
            { t: "Prompt injection", d: "Text na webu nebo v dokumentu, který se snaží Claude navést k nechtěné akci." }
          ]
        },
        {
          id: "dk-07",
          title: "Na počítači, nebo v cloudu?",
          minutes: 3,
          lead: `Úkol může běžet na tvém počítači, nebo v cloudu. Rozdíl rozhoduje, jestli můžeš zaklapnout notebook.`,
          blocks: [
            { t: "table", head: ["", "Na počítači", "V cloudu"], rows: [
              ["Přístup", "Lokální soubory, aplikace, obrazovka, vestavěný prohlížeč", "Konektory, web, soubory nahrané k úkolu"],
              ["Musí běžet počítač?", "Ano, probuzený a s otevřenou aplikací", "Ne, běží i po zaklapnutí"],
              ["Spustíš z telefonu?", "Přes Dispatch", "Ano, přímo"],
              ["Plánované úkoly", "Jen když je počítač vzhůru", "Běží bez zařízení online"]
            ] },
            { t: "tip", h: `Úkoly nad lokálními soubory spouštěj, když máš počítač zapnutý. Pravidelné přehledy z e-mailu, kalendáře a webu dej do cloudu, ať nezávisí na tom, jestli notebook spí.` },
            { t: "info", h: `Dlouhé úkoly v cloudu běží dál, i když zavřeš okno. Stav pak zkontroluješ z telefonu.` }
          ],
          quiz: [
            { q: "Chceš týdenní přehled z kalendáře a e-mailu, i když je notebook zavřený. Kde má běžet?", o: ["Na počítači", "V cloudu", "Nejde to"], a: 1, why: "Cloud nepotřebuje zapnuté zařízení; e-mail a kalendář jsou dostupné přes konektory." },
            { q: "Co potřebuje úkol nad lokální složkou?", o: ["Nic zvláštního", "Probuzený počítač s otevřenou aplikací Claude", "Telefon v nabíječce"], a: 1, why: "Lokální přístup jde jen přes běžící Claude Desktop." }
          ],
          cards: [
            { f: "Lokální běh úkolu", b: "Soubory, aplikace a obrazovka počítače. Počítač musí být vzhůru a aplikace otevřená." },
            { f: "Cloudový běh úkolu", b: "Konektory a web. Běží i po zaklapnutí notebooku; spustíš i z telefonu." }
          ],
          terms: [
            { t: "Cloudová relace", d: "Úkol Claude běžící na serverech Anthropic, nezávisle na tvém zařízení." }
          ]
        }
      ]
    },
    {
      title: "Přizpůsobení a rutiny",
      lessons: [
        {
          id: "dk-08",
          title: "Konektory, rozšíření, skills a pluginy",
          minutes: 4,
          lead: `Claude je tak užitečný, kolik toho vidí. Čtyři způsoby, jak mu dát přístup a know-how, a kde je v desktopu najdeš.`,
          blocks: [
            { t: "table", head: ["Co", "K čemu", "Kde"], rows: [
              ["<b>Konektor</b>", "Online služba: Gmail, Kalendář, Drive, Slack, Notion, Microsoft 365…", "Customize › Connectors (platí i na webu a v mobilu)"],
              ["<b>Desktopové rozšíření</b>", "Lokální MCP server: přístup k aplikacím a datům v počítači", "Nastavení › Desktop app › Extensions › Manage › Browse extensions"],
              ["<b>Skill</b>", "Návod, jak dělat určitou práci (formát reportu, firemní styl)", "Customize"],
              ["<b>Plugin</b>", "Balíček skills, konektorů a příkazů pro obor", "Customize"]
            ] },
            { t: "h", x: "Desktopová rozšíření prakticky" },
            { t: "ul", items: [
              `Instalují se <b>jedním klikem</b> (soubory .mcpb), bez úprav konfiguračního JSON. Node.js je v aplikaci přibalený.`,
              `Hesla a API klíče z rozšíření se ukládají do systémové klíčenky.`,
              `Rozšíření z adresáře se aktualizují sama; ručně přidaný .mcpb musíš při nové verzi nainstalovat znovu.`,
              `Zda běží: tlačítko <b>+</b> v okně zprávy › Connectors, nebo sekce Local MCP servers na stránce Extensions.`
            ] },
            { t: "tip", title: "Začni těmito", h: `Kalendář a e-mail (ranní přehledy, návrhy odpovědí), úložiště souborů (Drive, OneDrive, Dropbox) a jeden nástroj, ve kterém trávíš nejvíc času. Konektor nastavený jednou na desktopu funguje i v telefonu.` }
          ],
          quiz: [
            { q: "Co je desktopové rozšíření?", o: ["Téma vzhledu", "Lokální MCP server instalovaný jedním klikem", "Plugin do Chrome"], a: 1, why: "Rozšíření (.mcpb) zpřístupní aplikace a data ve tvém počítači." },
            { q: "Nastavíš konektor Gmail v desktopu. Bude fungovat v Androidu?", o: ["Ano, konektory patří k účtu", "Ne, musíš ho nastavit znovu", "Jen přes Dispatch"], a: 0, why: "Konektory jsou vázané na účet a platí na všech zařízeních." }
          ],
          cards: [
            { f: "Konektor vs rozšíření", b: "Konektor = online služba, platí všude. Rozšíření = lokální MCP server, jen v Claude Desktop." },
            { f: "Skill vs plugin", b: "Skill = návod na určitou práci. Plugin = balíček skills, konektorů a příkazů." }
          ],
          terms: [
            { t: "Desktopové rozšíření (.mcpb)", d: "Lokální MCP server zabalený pro instalaci jedním klikem v Claude Desktop." }
          ]
        },
        {
          id: "dk-09",
          title: "Paměť, instrukce a projekty",
          minutes: 4,
          lead: `Aby Claude nemusel pokaždé začínat od nuly: co si pamatuje sám, co mu řekneš natrvalo a co patří do projektu.`,
          blocks: [
            { t: "table", head: ["Nástroj", "Kdy použít", "Kde"], rows: [
              ["<b>Instructions for Claude</b>", "Co má platit vždy: jazyk, tón, kdo jsi, formát odpovědí", "Nastavení"],
              ["<b>Paměť</b>", "Claude si sám ukládá, jak pracuješ a na čem; funguje přes chat i úkoly", "Nastavení › Memory › Topics"],
              ["<b>Projekt</b>", "Delší téma se svými podklady a instrukcemi", "Postranní panel"]
            ] },
            { t: "ul", items: [
              `Paměť je rozdělená na <b>témata</b>, každé jde upravit nebo smazat.`,
              `Citlivá témata (zdraví, přesvědčení) se neukládají, dokud nezapneš <i>Include sensitive topics in memory</i>.`,
              `<b>Reflect</b> (Nastavení › Reflect, beta) ukáže měsíční shrnutí, jak Claude používáš. <b>Time and focus</b> nabízí připomínky přestávek a tiché hodiny.`,
              `Pro jednorázový citlivý dotaz použij <b>anonymní chat</b> (incognito): neukládá se do historie ani paměti, ale neumí vytvářet soubory a spouštět kód.`
            ] },
            { t: "ex", title: "Ukázka: instrukce, které se vyplatí", turns: [
              { who: "user", text: `Odpovídej česky, stručně, bez úvodních frází. Jsem vývojář (C#, .NET), mám rád konkrétní příklady. Nepoužívej pomlčky. Když něco nevíš jistě, řekni to.` }
            ], note: `Pár vět v instrukcích ušetří opravování v každé konverzaci.` }
          ],
          quiz: [
            { q: "Kam napíšeš, že má Claude vždy odpovídat česky a stručně?", o: ["Do každé zprávy", "Do Instructions for Claude", "Do názvu konverzace"], a: 1, why: "Trvalé instrukce platí pro všechny konverzace." },
            { q: "Co anonymní chat neumí?", o: ["Odpovídat", "Vytvářet soubory a spouštět kód", "Psát česky"], a: 1, why: "Incognito konverzace jsou omezené na čistý chat." }
          ],
          cards: [
            { f: "Paměť Claude", b: "Témata v Nastavení › Memory › Topics. Lze upravit a mazat. Citlivá témata jen po zapnutí." },
            { f: "Instructions for Claude", b: "Trvalé pokyny pro všechny konverzace: jazyk, tón, kdo jsi, formát." }
          ],
          terms: [
            { t: "Paměť (Memory)", d: "Co si Claude sám pamatuje mezi konverzacemi; uloženo po tématech, upravitelné." },
            { t: "Reflect", d: "Měsíční shrnutí používání Claude v Nastavení (beta, vyžaduje paměť)." }
          ]
        },
        {
          id: "dk-10",
          title: "Plánované úkoly a hotové výstupy",
          minutes: 3,
          lead: `Co děláš každý týden stejně, může Claude dělat za tebe. A výsledkem nemusí být text v chatu, ale hotový dokument.`,
          blocks: [
            { t: "h", x: "Nápady na plánované úkoly" },
            { t: "ul", items: [
              `Každé pondělí v 7:00: přehled týdne z kalendáře a nevyřízených e-mailů.`,
              `Každý pátek: shrnutí změn ve sdílené složce a seznam otevřených úkolů.`,
              `Každé ráno: novinky z oboru (3 odkazy, 3 věty ke každému).`
            ] },
            { t: "ex", title: "Ukázka: plánovaný úkol", turns: [
              { who: "user", text: `Každé pondělí v 7:00 projdi můj kalendář na tento týden a e-maily z posledních 3 dnů, na které jsem neodpověděl. Pošli mi stručný přehled: schůzky, co k nim připravit, a 5 e-mailů, které mají přednost.` }
            ], note: `Protože pracuje s kalendářem a e-mailem přes konektory, může běžet v cloudu i se zavřeným notebookem.` },
            { t: "h", x: "Výstupy, které nemusíš kopírovat" },
            { t: "p", h: `Dokumenty (Claude Docs), prezentace (Claude Slides, stáhneš jako PowerPoint nebo PDF), návrhy (Claude Design), tabulky a grafy. Každý výstup má <b>jeden odkaz ke sdílení</b>, který se otevře i v telefonu.` }
          ],
          quiz: [
            { q: "Proč může pondělní přehled z kalendáře běžet v cloudu?", o: ["Protože je krátký", "Data bere přes konektory, nepotřebuje lokální soubory", "Cloud je vždy rychlejší"], a: 1, why: "Konektory jsou dostupné i bez zapnutého počítače." }
          ],
          cards: [
            { f: "Plánovaný úkol", b: "Opakovaný úkol (denně, týdně). S konektory může běžet v cloudu bez zapnutého počítače." }
          ],
          terms: [
            { t: "Plánovaný úkol", d: "Úkol, který Claude spouští opakovaně v nastavený čas." }
          ]
        },
        {
          id: "dk-11",
          title: "Záložka Code: kdy po ní sáhnout",
          minutes: 3,
          lead: `V Claude Desktop je i Claude Code. Hodí se nejen na programování, ale na cokoli kolem Git repozitáře.`,
          blocks: [
            { t: "ul", items: [
              `Prohlížení změn (diff), vestavěný terminál, živý náhled webu a paralelní relace v samostatných větvích.`,
              `Režimy oprávnění: <b>ptát se</b> (výchozí), <b>automaticky přijímat úpravy</b>, <b>plánovací režim</b> (nejdřív plán, pak práce).`,
              `Sdílí nastavení s Claude Code v terminálu: CLAUDE.md, MCP servery, skills.`,
              `Relace můžeš spustit i v cloudu a sledovat z telefonu.`
            ] },
            { t: "tip", h: `Úkoly přes Dispatch, které se týkají kódu, Claude sám spustí v Claude Code; ostatní jako běžný úkol. Uvidíš je v příslušném postranním panelu.` }
          ],
          quiz: [
            { q: "Který režim Code nejdřív připraví plán a teprve pak mění soubory?", o: ["Auto accept edits", "Plan mode", "Ask permissions"], a: 1, why: "Plánovací režim je vhodný na větší změny." }
          ],
          cards: [
            { f: "Režimy v záložce Code", b: "Ask permissions (výchozí), Auto accept edits, Plan mode." }
          ],
          terms: []
        }
      ]
    }
  ]
});
