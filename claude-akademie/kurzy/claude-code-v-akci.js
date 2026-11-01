/* Kurz: Claude Code v akci (podle academy.claude.com/courses/claude-code-in-action) */
AKADEMIE.add({
  id: "claude-code-v-akci",
  emoji: "🚀",
  title: "Claude Code v akci",
  category: "produkty",
  level: "Pokročilý, navazuje na Claude Code 101",
  desc: "Dlouhá a méně hlídaná práce s Claude Code, které můžeš věřit: řízení dlouhých sezení, CLAUDE.md, ověřovací skills, režimy oprávnění a hooks, routines a headless režim, GitHub Actions, ověřování běhů bez dohledu a pluginy pro celý tým.",
  source: "https://academy.claude.com/courses/claude-code-in-action",
  modules: [
    {
      title: "Řízení práce",
      lessons: [
        {
          id: "cca-01",
          title: "Řízení dlouhých sezení",
          minutes: 6,
          lead: `Krátký úkol zadáš a zkontroluješ. Refaktor přes tucet souborů ale může trvat hodiny a každé ruční postrčení ho prodlužuje. Pomůžou dva zvyky: vymezit práci, než Claude začne, a řídit ji, zatímco běží.`,
          blocks: [
            { t: "h", x: "Nejdřív vymez práci v Plan mode" },
            { t: "p", h: `Plan mode znáš z Claude Code 101: Claude zkoumá kód, ale needituje zdrojové soubory. Přečte, co potřebuje, zjistí, co se musí změnit, a předloží plán. U dlouhé úlohy na tom stojí všechno, proto plán <b>opravdu přečti</b>, ne jen proleť. Čím důkladnější plán, tím méně překvapení během provádění. Co chybí nebo nesedí, nech doplnit. Iterovat nad plánem je mnohem rychlejší než nechat Claude běžet a pak uklízet.` },
            { t: "h", x: "Za běhu: řízená kompakce a rewind" },
            { t: "cmp",
              bad: { lbl: "Holá kompakce", h: `<code>/compact</code><br>Shrnutí nahradí staré zprávy. Když se v něm ztratí něco důležitého, Claude začne odbočovat.` },
              good: { lbl: "Řízená kompakce", h: `<code>/compact Soustřeď se na implementaci přepínače --version</code><br>Co napíšeš za příkaz, určí, co shrnutí zachová. Ladění skončilo dávno a teď tě zajímá jen tahle funkce? Řekni to. Je to tvůj volant pro kontext.` } },
            { t: "p", h: `Když Claude zamíří špatně, nemusíš se z toho vyprošťovat dalšími prompty. Každý tvůj prompt vytvoří <b>checkpoint</b>, ke kterému se dá vrátit. Menu Rewind otevřeš <b>dvojím stiskem Esc</b> na prázdném promptu.` },
            { t: "table", head: ["Volba v menu Rewind", "Co udělá"], rows: [
              ["Restore code and conversation", "Vrátí kód i rozhovor najednou."],
              ["Restore conversation", "Vrátí jen rozhovor."],
              ["Restore code", "Vrátí jen soubory."],
              ["Summarize from here", "Shrne vše <b>po</b> checkpointu. Hodí se po vedlejší odbočce, když chceš uvolnit místo."],
              ["Summarize up to here", "Shrne vše <b>před</b> checkpointem. Hodí se po dlouhé přípravě, kterou chceš zhustit, zatímco implementace zůstane celá."]
            ] },
            { t: "h", x: "Když má Claude běžet sám: /goal a /loop" },
            { t: "table", head: ["Příkaz", "Co dělá", "Jak ho zastavit"], rows: [
              ["<code>/goal</code>", "Nastaví podmínku dokončení. Claude pracuje přes více tahů, dokud rychlý hodnotitel (evaluator) nepotvrdí, že je splněná. Nezastaví se hned, jak si poprvé myslí, že je hotovo.<br>Příklad: <code>/goal všechny testy v src/billing projdou a typová kontrola hlásí nula chyb</code>", "<code>/goal clear</code>"],
              ["<code>/loop</code>", "Spouští prompt v intervalu mezi tahy, pevném, nebo takovém, jaký si určí Claude (self-paced). Hodí se k hlídání něčeho venku, třeba běhu CI nebo nasazení, a k reakci, když se změní stav.", "Self-paced smyčku zastavíš klávesou Esc, když čeká na další běh. Smyčka s pevným intervalem běží, dokud Claude nepožádáš o zrušení, nebo 7 dní."]
            ] },
            { t: "warn", h: `Hodnotitel u <code>/goal</code> čte <b>jen přepis rozhovoru</b>. Podmínka proto musí jít ověřit z výstupu, který Claude skutečně vyprodukuje, například z výsledku běhu testů. Cíl si nastav, když umíš popsat „hotovo“ líp než jednotlivé kroky.` },
            { t: "h", x: "Paralelní práce ve worktrees" },
            { t: "p", h: `Dvě sezení Claude nad stejnými soubory si šlapou po změnách a vznikají konflikty. Ve <b>worktree</b> dostane každé sezení vlastní nezávislý strom souborů, takže si práci nepřepisují. Když sezení skončí, čistý worktree se automaticky odstraní. Soubor <code>.worktreeinclude</code> v kořeni repozitáře vyjmenuje soubory ignorované gitem, které se mají zkopírovat do každého worktree, třeba soubor s proměnnými prostředí nebo lokální konfiguraci, kterou necommituješ.` }
          ],
          quiz: [
            { q: "Claude ti v Plan mode připravil plán dlouhé úlohy. Co s ním?", o: ["Proletíš ho a pustíš Claude do práce, chyby se opraví za běhu", "Pečlivě ho přečteš a necháš doplnit, co chybí, než Claude začne", "Přeskočíš ho, Plan mode je jen pro malé úlohy"], a: 1, why: "Iterovat nad plánem je mnohem rychlejší než uklízet po běhu, který šel špatným směrem." },
            { q: "Jak otevřeš menu Rewind?", o: ["Dvojím stiskem Esc na prázdném promptu", "Příkazem /compact", "Klávesami Shift+Tab"], a: 0, why: "Dvojí Esc na prázdném promptu otevře menu s checkpointy. Každý tvůj prompt jeden checkpoint vytvoří." },
            { q: "Proč musí jít podmínka pro /goal ověřit z výstupu, třeba z výsledku testů?", o: ["Protože /goal funguje jen s testy", "Protože jinak /goal po 7 dnech skončí", "Protože hodnotitel čte jen přepis rozhovoru, splnění tedy musí být vidět v tom, co Claude vypíše"], a: 2, why: "Hodnotitel nevidí nic mimo přepis. Podmínku jako „kód je přehledný“ z něj nepozná." }
          ],
          cards: [
            { f: "Řízená kompakce", b: "Za /compact napiš, na co se má shrnutí soustředit. Jinak se v něm může ztratit to důležité." },
            { f: "Summarize from here vs. up to here", b: "From here shrne vše po checkpointu (vedlejší odbočka). Up to here shrne vše před ním (dlouhá příprava), implementace zůstane celá." },
            { f: "/goal vs. /loop", b: "/goal: pracuj, dokud hodnotitel nepotvrdí podmínku hotovo. /loop: spouštěj prompt v intervalu a hlídej něco venku (CI, nasazení)." }
          ],
          terms: [
            { t: "/goal", d: "Příkaz Claude Code, který nastaví podmínku dokončení. Claude pracuje přes více tahů, dokud ji hodnotitel podle přepisu rozhovoru nepotvrdí. Zruší se příkazem /goal clear." },
            { t: "Worktree", d: "Samostatný pracovní strom souborů téhož repozitáře. Paralelní sezení Claude Code v něm pracují každé zvlášť, takže si nepřepisují změny." }
          ]
        }
      ]
    },
    {
      title: "Nastavení Claude",
      lessons: [
        {
          id: "cca-02",
          title: "CLAUDE.md, který Claude dodržuje",
          minutes: 6,
          lead: `CLAUDE.md není vynucovaná konfigurace, ale vodítko. Každý řádek soupeří o pozornost se všemi ostatními. Čím štíhlejší soubor, tím víc z něj Claude opravdu dodrží.`,
          blocks: [
            { t: "p", h: `Past, do které spadne skoro každý: narazíš na problém, přidáš pravidlo. Narazíš na další, přidáš další. Za chvíli máš obří soubor a Claude začne jeho části ignorovat. To není chyba Claude, tak ten soubor funguje. Cílem proto není zapsat všechno, ale udržet soubor sevřený.` },
            { t: "h", x: "Patří to vůbec do CLAUDE.md?" },
            { t: "cmp",
              bad: { lbl: "Tvrdé pravidlo v CLAUDE.md", h: `„Nikdy nepushuj do main.“ Claude to většinou dodrží. U něčeho tak nebezpečného ale „většinou“ nestačí.` },
              good: { lbl: "Tvrdé pravidlo v hooku", h: `PreToolUse hook je kód, který běží před akcí a umí ji zablokovat. I když se Claude o push do main pokusí, hook ho zastaví. Tvrdá pravidla patří do hooků, CLAUDE.md nech měkčím konvencím.` } },
            { t: "h", x: "Čtyři umístění, která se sčítají" },
            { t: "p", h: `CLAUDE.md může ležet na čtyřech místech a Claude při spuštění načte všechna najednou. Nic se nezahazuje, vrstvy se skládají.` },
            { t: "table", head: ["Umístění", "K čemu"], rows: [
              ["<b>Managed policy</b>", "Soubor na úrovni organizace, který spravuje platformní tým. Nejde vyloučit, firemní pravidla tedy platí vždy."],
              ["<b>User</b>", "Tvoje osobní preference, které tě provázejí ve všech projektech na tvém počítači."],
              ["<b>Project</b>", "Sdílený s týmem, uložený v repozitáři."],
              ["<b>Local</b>", "Ignorovaný gitem, tvoje poznámky jen pro tohle jedno repo. Třeba architektonická rozhodnutí pro refaktor ve vlastní větvi, která nemají ovlivnit celý tým."]
            ] },
            { t: "ex", title: "Ukázka: dlouhý soubor rozdělený importy", turns: [
              { who: "sys", mono: true, text: `@.claude/conventions/code-style.md
@.claude/conventions/testing.md
@.claude/conventions/workflow.md` }
            ], note: `Syntaxe <code>@cesta/k/souboru</code> pomůže s pořádkem. Pozor ale na to, co přináší: při spuštění se importované soubory vloží <b>přímo na místo odkazu</b>, takže se pořád načte všechno hned na začátku. Importy organizují, kontext nezmenší.` },
            { t: "h", x: "Formulace rozhoduje" },
            { t: "table", head: ["Slabě", "Silně", "Proč"], rows: [
              ["„Dodržuj osvědčené postupy pro API routy.“", "„Nové API routy dávej do <code>src/api/handlers</code>, jednu na soubor.“", "Konkrétní a ověřitelné. Když neumíš zkontrolovat, jestli se pravidlo dodrželo, nedokáže to ani Claude."],
              ["„Nepoužívej default exporty.“", "„Používej pojmenované exporty (named exports), ne default exporty.“", "Holý zákaz nechává dveře otevřené. Pojmenovaná náhrada nedává prostor jinému výkladu."],
              ["IMPORTANT u každého druhého pravidla", "IMPORTANT jen u dvou až tří pravidel, jejichž porušení opravdu bolí", "Důraz zvedá prioritu jen vůči tiššímu okolí. Když křičí všechno, nevynikne nic. Důraz je rozpočet."]
            ] },
            { t: "tip", title: "💡 Soubor není nikdy hotový", h: `Když Claude udělá něco špatně, neopravuj to jen ručně. Ber to jako hlášení chyby v CLAUDE.md a klidně řekni přímo: „přidej to do CLAUDE.md“, Claude pravidlo napíše sám. A obráceně: řádek, který neumíš obhájit, smaž. Starej se o CLAUDE.md jako o produkční kód.` }
          ],
          quiz: [
            { q: "Kam patří pravidlo „nikdy nepushuj do main“?", o: ["Do CLAUDE.md, ideálně s IMPORTANT", "Do PreToolUse hooku, který push umí zablokovat", "Do lokálního CLAUDE.md"], a: 1, why: "CLAUDE.md je vodítko, které Claude většinou dodrží. Hook je kód, který akci opravdu zastaví." },
            { q: "Co udělají importy (@soubor) s množstvím kontextu?", o: ["Zmenší ho, soubory se načítají až podle potřeby", "Zdvojnásobí ho", "Nezmenší ho: importované soubory se při spuštění vloží celé na místo odkazu"], a: 2, why: "Importy slouží k pořádku. Všechno se pořád načte hned na začátku." },
            { q: "Která formulace pravidla je nejlepší?", o: ["Používej pojmenované exporty, ne default exporty.", "Nepoužívej default exporty.", "VŽDY DODRŽUJ OSVĚDČENÉ POSTUPY."], a: 0, why: "Je konkrétní, ověřitelná a pojmenuje náhradu. Křik ani vágní „osvědčené postupy“ nepomůžou." }
          ],
          cards: [
            { f: "Proč štíhlý CLAUDE.md", b: "Je to vodítko, ne vynucovaná konfigurace. Řádky soupeří o pozornost, takže čím kratší soubor, tím víc z něj Claude dodrží." },
            { f: "Čtyři umístění CLAUDE.md", b: "Managed policy (organizace), User (ty, všechny projekty), Project (tým, repo), Local (ty, jen toto repo, mimo git). Načtou se všechna." },
            { f: "Dobré pravidlo", b: "Konkrétní a ověřitelné, pojmenuje náhradu místo holého zákazu. Důraz jen u dvou až tří nejdůležitějších pravidel." }
          ],
          terms: [
            { t: "Import v CLAUDE.md", d: "Odkaz ve tvaru @cesta/k/souboru, který při spuštění vloží obsah jiného souboru na místo odkazu. Pomáhá s pořádkem, množství kontextu nezmenší." },
            { t: "Managed policy (CLAUDE.md)", d: "CLAUDE.md na úrovni organizace, který spravuje platformní tým. Načte se vždy a nejde vyloučit." }
          ]
        },
        {
          id: "cca-03",
          title: "Ověřovací skill",
          minutes: 5,
          lead: `Kontrola, která závisí na tom, jestli si o ni vzpomeneš, jednou vypadne. Ověřovací skill se spustí sám a projde pokaždé stejné kroky. Jestli máš postavit jeden skill jako první, je to tenhle.`,
          blocks: [
            { t: "p", h: `Že se skills hodí na opakovanou práci, víš z Claude Code 101. Obvykle to ale chodí takhle: Claude práci dokončí a ty si musíš vzpomenout na kontrolu, nechat spustit testy, přečíst diff. Jednou na to zapomeneš a špatný kód proklouzne. Ověřovací skill tuhle závislost na tvé paměti odstraní.` },
            { t: "h", x: "Jak to probíhá" },
            { t: "steps", items: [
              `Požádáš Claude o refaktor.`,
              `Když skončí, změna odpovídá <b>popisu skillu</b>, takže se skill spustí sám. Nikdo o něj nemusí žádat.`,
              `Skill spustí testy a přečte diff.`,
              `Zkontroluje, že žádný test nebyl <b>oslaben</b> jen proto, aby prošel.`,
              `Nahlásí prošlo, nebo neprošlo, a přiloží důkazy.`
            ] },
            { t: "key", h: `Zelené testy nestačí, test jde potichu uvolnit tak, aby prošel vždy. „Hotovo“ proto není „kód v diffu vypadá dobře“. Hotovo znamená, že brány (gates) byly spuštěné a pozorované a výsledky jsou výslovně uvedené.` },
            { t: "ex", title: "Ukázka: složka ověřovacího skillu", turns: [
              { who: "sys", mono: true, text: `.claude/skills/overeni/
  SKILL.md       krátký postup
  reference.md   podrobnosti, čte se jen podle potřeby
  check.sh       spustí všechny brány

SKILL.md:
---
name: overeni
description: Ověří dokončenou změnu kódu (refaktor, opravu, novou funkci). Použij po dokončení úprav, než ohlásíš hotovo.
---
1. Spusť ./check.sh a zaznamenej výstup.
2. Přečti git diff.
3. Zkontroluj, že žádný test nebyl oslaben (viz reference.md).
4. Nahlas PROŠLO nebo NEPROŠLO, přilož výstup bran a nálezy z diffu.` },
              { who: "ai", text: `Skill overeni: check.sh doběhl, testy 48/48, lint bez chyb. Diff: 5 souborů, žádný test neoslaben, žádná asserce neubyla. PROŠLO.` }
            ], note: `Popis skill spouští, postup je pokaždé stejný. SKILL.md zůstává krátký, podrobnosti nese <code>reference.md</code> a nástroje <code>check.sh</code>.` },
            { t: "h", x: "Složka skillu unese víc než instrukce" },
            { t: "ul", items: [
              `<b>reference.md</b> vedle SKILL.md pro podrobný materiál, odkázaný ze SKILL.md. Claude ho čte, jen když tu hloubku potřebuje.`,
              `<b>Skripty</b> ve složce Claude spouští, místo aby jejich obsah načítal do kontextu. Skill tak může nést vlastní nástroje, třeba <code>check.sh</code>, který spustí všechny brány.`,
              `<b>SKILL.md drž štíhlý.</b> Popisuje, co dělat. Hloubka a nástroje patří do vedlejších souborů.`
            ] },
            { t: "table", head: ["Druh pravidla", "Kam", "Proč"], rows: [
              ["Konvence platné pořád (pojmenování, kam patří soubory)", "CLAUDE.md", "Platí v každém sezení."],
              ["Postup nebo referenční materiál pro určitý druh úkolu", "Skill", "Až do použití je v kontextu jen popis, takže zabalit každý opakovaný postup skoro nic nestojí."],
              ["Pravidlo, které nesmí jít přeskočit", "Hook", "CLAUDE.md i skill jsou instrukce, které Claude dodržuje. Hook je kód, který opravdu běží."]
            ] },
            { t: "tip", h: `Pravidlo palce: když jsi stejnou vícekrokovou instrukci napsal/a dvakrát, je to skill. Checklist vydání, recept na migraci, kontrola před PR. Ověřovací skill ulož do <code>.claude/skills</code> v projektu a celý tým zdědí stejnou kontrolu, aniž by si na ni kdokoli musel vzpomenout.` }
          ],
          quiz: [
            { q: "Co spustí ověřovací skill, aniž bys o něj žádal/a?", o: ["Časovač každých deset minut", "Shoda dokončené změny s popisem (description) skillu", "Příkaz git commit"], a: 1, why: "Popis skillu je spouštěč. Když dokončená práce odpovídá popisu, skill se načte sám." },
            { q: "Proč skill kontroluje diff, i když testy prošly?", o: ["Test mohl být potichu oslaben tak, aby prošel vždy", "Diff je rychlejší než testy", "Testy samy diff číst neumějí"], a: 0, why: "Zelené testy nic neznamenají, pokud někdo uvolnil jejich podmínky. Proto skill čte i diff." },
            { q: "Co se stane se skriptem check.sh ve složce skillu?", o: ["Načte se celý do kontextu", "Smaže se po prvním použití", "Claude ho spustí, jeho obsah do kontextu nenačítá"], a: 2, why: "Skripty ve skillu se spouštějí, ne čtou. Skill tak nese nástroje a kontext zůstane volný." }
          ],
          cards: [
            { f: "Ověřovací skill", b: "Spustí se sám po dokončení změny: testy, diff, kontrola oslabených testů, verdikt s důkazy." },
            { f: "Kdy z postupu udělat skill", b: "Když jsi stejnou vícekrokovou instrukci napsal/a dvakrát." },
            { f: "CLAUDE.md, skill, nebo hook", b: "Konvence platná pořád: CLAUDE.md. Postup pro určitý druh úkolu: skill. Nesmí jít přeskočit: hook." }
          ],
          terms: [
            { t: "Ověřovací skill", d: "Skill, který se po dokončení změny spustí sám: spustí testy a další kontroly, přečte diff, ověří, že testy nebyly oslabeny, a nahlásí výsledek s důkazy." },
            { t: "Brána (gate)", d: "Kontrola, která musí projít, než se práce považuje za hotovou, například testy, lint nebo typová kontrola." }
          ]
        },
        {
          id: "cca-04",
          title: "Režimy oprávnění",
          minutes: 5,
          lead: `Režim oprávnění jednou rozhodne, co smí Claude spouštět bez ptaní. Místo schvalování akce po akci vybereš režim podle práce. Pro práci bez dohledu je klíčový režim Auto.`,
          blocks: [
            { t: "p", h: `Z Claude Code 101 znáš tři režimy pro každodenní práci s rukou na volantu: Manual (tam „výchozí“), Accept edits a Plan. Celkem je jich ale šest a každý vede hranici mezi „běží volně“ a „potřebuje tvůj souhlas“ jinde.` },
            { t: "table", head: ["Režim", "Co běží bez ptaní", "Kdy"], rows: [
              ["<b>Manual</b>", "Jen čtení. Vše ostatní se nejdřív zeptá.", "Ruční, hlídaná práce"],
              ["<b>Accept edits</b>", "Čtení, úpravy souborů a běžné bash příkazy pro práci se soubory", "Iterace nad kódem, který zrevidujes až potom"],
              ["<b>Plan</b>", "Zkoumá a navrhuje, nic needituje. Čtení běží volně. Když je dostupný Auto, průzkumné příkazy posoudí jeho klasifikátor a schválené pustí bez ptaní.", "Vymezení práce před startem"],
              ["<b>Auto</b>", "Všechno, ale většinu akcí před spuštěním posoudí samostatný model, klasifikátor", "Práce bez dohledu"],
              ["<b>Don't ask</b>", "Čtení souborů v pracovních složkách a předem schválené nástroje. Co by se ptalo, se automaticky zamítne.", "CI, plánované úlohy, noční dávky"],
              ["<b>Bypass permissions</b>", "Přeskočí všechny kontroly, obdoba přepínače <code>--dangerously-skip-permissions</code>", "Jen v izolovaném kontejneru nebo virtuálním stroji"]
            ] },
            { t: "p", h: `Klávesy <b>Shift+Tab</b> cyklují mezi každodenními režimy: Manual, Accept edits, Plan a Auto. Stavový řádek dole vždy ukazuje, ve kterém právě jsi.` },
            { t: "h", x: "Jak funguje Auto" },
            { t: "cmp",
              bad: { lbl: "Klasifikátor typicky zastaví", h: `Nasazení do produkce a migrace<br>Force push nebo stažený kód poslaný rovnou do shellu<br>Odeslání citlivých dat na externí adresy<br>Nevratné zničení souborů, které existovaly před sezením` },
              good: { lbl: "Klasifikátor typicky pustí", h: `Lokální úpravy v projektu<br>Instalaci závislostí podle lock souboru<br>Požadavky jen na čtení<br>Push do tvé vlastní větve` } },
            { t: "p", h: `Klasifikátor hlídá <b>záměr</b>: sleduje kroky, které eskalují nad rámec toho, oč jsi skutečně žádal/a. Pravidla Auto se ještě vyvíjejí, aktuální seznam toho, co blokuje a co pouští, najdeš v dokumentaci.` },
            { t: "warn", title: "⚠️ Záměr, ne správnost", h: `Klasifikátor nepozná, jestli kód funguje. Když Claude při refaktoru přihlašování napíše rozbité přihlašování, projde to, protože rozbité není nebezpečné. Proto Auto spáruj se <b>stop hookem, který spustí testy</b>. Auto hlídá záměr před většinou akcí, stop hook ověří správnost, když Claude skončí.` },
            { t: "h", x: "Don't ask pro běhy bez lidí" },
            { t: "p", h: `Když u běhu není nikdo, kdo by schvaloval (CI pipeline, plánované úlohy, noční dávky), sáhni po Don't ask. Claude dál spustí, co ani v Manual nepotřebuje schválení, tedy čtení souborů v pracovních složkách, plus nástroje, které jsi předem schválil/a. Všechno, co by se jinak ptalo, se automaticky zamítne. V tom je smysl: pipeline jede dál, místo aby visela na schválení, které nemá kdo dát.` }
          ],
          quiz: [
            { q: "Co klasifikátor v režimu Auto nezachytí?", o: ["Force push", "Rozbitý, ale neškodný kód", "Odeslání citlivých dat ven"], a: 1, why: "Klasifikátor hlídá záměr, ne správnost. Na správnost je stop hook s testy." },
            { q: "Který režim se hodí pro noční dávku v CI, kde nikdo neschvaluje?", o: ["Manual", "Accept edits", "Don't ask"], a: 2, why: "Don't ask všechno, co by se ptalo, automaticky zamítne, takže pipeline nevisí na schválení." },
            { q: "Kde je v pořádku režim Bypass permissions?", o: ["Jen v izolovaném kontejneru nebo virtuálním stroji", "Na vlastním notebooku při refaktoru", "Kdekoli, kde máš dobré testy"], a: 0, why: "Bypass přeskočí všechny kontroly, proto patří jen do izolovaného prostředí." }
          ],
          cards: [
            { f: "Šest režimů oprávnění", b: "Manual, Accept edits, Plan, Auto, Don't ask, Bypass permissions." },
            { f: "Auto + stop hook", b: "Klasifikátor hlídá záměr před většinou akcí, stop hook s testy ověří správnost po skončení." },
            { f: "Don't ask", b: "Co by se ptalo, se automaticky zamítne. Pro běhy bez lidí: CI, plánované úlohy, noční dávky." }
          ],
          terms: [
            { t: "Auto mode", d: "Režim oprávnění Claude Code, ve kterém Claude běží bez ptaní a většinu akcí před spuštěním posoudí samostatný model (klasifikátor), jestli nepřekračují zadání. Správnost kódu neposuzuje." },
            { t: "Don't ask", d: "Režim oprávnění Claude Code pro běhy bez lidí: povolí čtení v pracovních složkách a předem schválené nástroje, všechno ostatní automaticky zamítne." }
          ]
        },
        {
          id: "cca-05",
          title: "Hooks: pravidla, která nejde přeskočit",
          minutes: 7,
          lead: `Pokyn v CLAUDE.md je prosba, ne záruka. Hook je deterministický kód v pevném bodě smyčky, takže mění „Claude většinou poslechne“ na „Claude to nemůže přeskočit“. Základ znáš z Claude Code 101, tady jdeme dál než k formátování.`,
          blocks: [
            { t: "p", h: `Claude Code během sezení vyvolá kolem 30 hook událostí. Znát je všechny nemusíš. Pár z nich budeš používat pořád dokola a odpovídají místům agentní smyčky, kde dává smysl zasáhnout: sezení začne, přijde prompt, volají se nástroje, tah skončí.` },
            { t: "table", head: ["Událost", "Kdy se spustí", "K čemu"], rows: [
              ["<b>PreToolUse</b>", "Před voláním nástroje", "Vynucování. Umí akci zastavit dřív, než proběhne."],
              ["<b>PostToolUse</b>", "Po úspěšném volání nástroje", "Automatické formátování nebo lint"],
              ["<b>Stop</b> (a SubagentStop)", "Když chce Claude ukončit tah (když skončí subagent)", "Odmítnout konec: ještě nejsi hotový, podmínka není splněná"],
              ["<b>PreCompact</b> / <b>PostCompact</b>", "Před kompakcí a po ní", "Zásah kolem kompakce"],
              ["<b>InstructionsLoaded</b>", "Když se načte CLAUDE.md nebo soubor s pravidly", "Audit toho, co se opravdu dostalo do kontextu"],
              ["<b>SessionStart</b>", "Na začátku sezení", "Příprava prostředí. Se zdrojem <code>startup</code> jen při čerstvém startu."]
            ] },
            { t: "warn", title: "⚠️ Častá past", h: `Chceš po kompakci vrátit Claude přehled práce? Nepoužívej PostCompact, ale <b>SessionStart s matcherem <code>compact</code></b>. Běží hned po kompakci a jen jeho výstup se dostane zpátky do rozhovoru. Nech ho vypsat krátký přehled souborů, na kterých pracuješ, a Claude naváže, místo aby začínal od nuly.` },
            { t: "h", x: "PreToolUse: rozhodnutí v JSONu" },
            { t: "p", h: `PreToolUse má největší sílu, protože umí volání nástroje zablokovat. Claude odpovíš tak, že vypíšeš JSON a skončíš s kódem 0. Klíčové pole je <code>permissionDecision</code>: <code>allow</code> (pustit), <code>deny</code> (zastavit), nebo <code>ask</code> (rozhodne uživatel). Existuje i čtvrtá hodnota <code>defer</code>, ta ale platí jen pro neinteraktivní běhy s <code>-p</code>, kdy volající proces nástroj pozastaví a později obnoví. Potřebovat ji budeš zřídka.` },
            { t: "ex", title: "Ukázka: tvar odpovědi PreToolUse hooku", turns: [
              { who: "sys", mono: true, text: `{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "...",
    "updatedInput": {
      "command": "..."
    }
  }
}` }
            ], note: `Všimni si <code>updatedInput</code>. Volání nemusíš zablokovat, můžeš ho <b>přepsat</b>, třeba vymazat tajný klíč z bash příkazu a nechat ho proběhnout. Pozor: <code>updatedInput</code> nahradí celý vstupní objekt, takže pole, která neměníš, musíš poslat zpátky, jinak se ztratí.` },
            { t: "h", x: "Exit kódy pro hooky bez JSONu" },
            { t: "table", head: ["Kód", "Význam"], rows: [
              ["<b>0</b>", "Úspěch. Pokud je na standardním výstupu JSON, Claude ho zpracuje. Prostý text se u většiny událostí ignoruje, ale u SessionStart, UserPromptSubmit a UserPromptExpansion se přidá do kontextu. Na tom stojí hook, který uchová stav přes kompakci."],
              ["<b>2</b>", "Blokující chyba. Chybový výstup (stderr) dostane Claude jako kontext. Téměř všude je to ten blokující kód."],
              ["<b>Cokoli jiného</b>", "Neblokující. Stderr se zaloguje a Claude pokračuje."]
            ] },
            { t: "warn", title: "⚠️ Exit 1 neblokuje", h: `Kód 1 vypadá jako chyba, ale nic nezastaví: Claude příkaz stejně spustí. Chceš-li blokovat, ukonči hook kódem 2. Exit 2 umí zablokovat i Stop, tím Claude řekneš, že ještě není hotový. PostToolUse běží až po nástroji, takže blokovat je tam pozdě, text ale Claude předat může. A některé události blokování ignorují úplně: Notification a SessionStart pokračují vždy.` },
            { t: "ex", title: "Ukázka: redigovat místo blokovat", turns: [
              { who: "ai", label: "Claude chce spustit (Bash)", mono: true, text: `curl -H "Authorization: Bearer sk_live_51Hx...9aQ" https://api.example.com/v1/balance` },
              { who: "sys", label: "PreToolUse hook (matcher Bash)", text: `Nalezen vzor sk_live_. Hook vrací updatedInput s příkazem, ve kterém je klíč nahrazený zástupným textem.` },
              { who: "ai", label: "Skutečně spuštěno", mono: true, text: `curl -H "Authorization: Bearer [REDACTED]" https://api.example.com/v1/balance` }
            ], note: `Příkaz proběhl, práce se udělala, ale tajný klíč neprošel. <b>Matcher</b> vybírá nástroj, který hook hlídá, a volitelná klauzule <code>if</code> ho může zúžit na konkrétní příkaz. Vrátit <code>deny</code> je dobré, přepsat volání je často lepší. A hook to vynutí pokaždé, i v běhu, který nikdo nesleduje.` }
          ],
          quiz: [
            { q: "Hook má zastavit nebezpečný příkaz. S jakým exit kódem má skončit?", o: ["0 s prostým textem", "1", "2"], a: 2, why: "Blokuje exit 2. Exit 1 je neblokující chyba, Claude příkaz stejně spustí." },
            { q: "Co udělá updatedInput v odpovědi PreToolUse hooku?", o: ["Přepíše vstup volání, třeba odstraní tajný klíč, a příkaz pak proběhne", "Zablokuje volání", "Přidá pravidlo do CLAUDE.md"], a: 0, why: "updatedInput volání přepíše. Nahrazuje ale celý vstupní objekt, takže nezměněná pole musíš poslat zpátky." },
            { q: "Jak po kompakci vrátit Claude důležitý kontext?", o: ["Hookem PostCompact", "Hookem SessionStart s matcherem compact", "Hookem Notification"], a: 1, why: "Do rozhovoru se vrátí výstup SessionStart s matcherem compact, ne výstup PostCompact." }
          ],
          cards: [
            { f: "permissionDecision", b: "allow (pustit), deny (zastavit), ask (rozhodne uživatel). defer jen pro neinteraktivní běhy s -p." },
            { f: "Exit kódy hooku", b: "0 úspěch, 2 blokuje (stderr jde ke Claude), cokoli jiného neblokuje. Exit 1 nic nezastaví." },
            { f: "Kontext po kompakci", b: "SessionStart s matcherem compact, ne PostCompact. Ať vypíše přehled souborů, na kterých pracuješ." }
          ],
          terms: [
            { t: "PreToolUse", d: "Hook událost před voláním nástroje. Umí volání povolit, zamítnout, předat uživateli, nebo přepsat jeho vstup (updatedInput)." },
            { t: "Matcher (hook)", d: "Část nastavení hooku, která určuje, na co hook reaguje, například na nástroj Bash, nebo u SessionStart na zdroj compact či startup." }
          ]
        }
      ]
    },
    {
      title: "Automatizace opakované práce",
      lessons: [
        {
          id: "cca-06",
          title: "Routines a headless režim",
          minutes: 7,
          lead: `Úkol, kterému důvěřuješ, už nemusíš spouštět ručně. Představ si spektrum: na jednom konci routines na infrastruktuře Anthropicu, kde nic nestavíš, na druhém headless režim a Agent SDK, kde Claude Code řídíš z vlastního kódu.`,
          blocks: [
            { t: "h", x: "Routine: uložený prompt, který běží v cloudu" },
            { t: "p", h: `Routine je nejpřímější cesta k automatizaci. Žádný skript, žádný server. Spojí tři věci: <b>prompt</b>, <b>repozitář</b>, nad kterým pracuje, a potřebné <b>konektory</b>. Tenhle balík pak spustí v cloudu pokaždé, když přijde spouštěč. Infrastruktura je Anthropicu: žádný tvůj počítač nemusí běžet přes noc a neudržuješ žádný workflow soubor. Hodí se na cokoli, co je stejný prompt s opakovaným spouštěčem.` },
            { t: "table", head: ["Spouštěč", "Příklad"], rows: [
              ["Rozvrh (cron)", "Každé ráno v 9:00 audit závislostí, nebo průchod tiketů v Sentry podle naléhavosti"],
              ["HTTP POST na API endpoint routine", "Spustí ji tvůj vlastní kód, kdy potřebuje"],
              ["Událost na GitHubu", "Přijde nový pull request a routine ho roztřídí"]
            ] },
            { t: "ex", title: "Ukázka: routine z terminálu", turns: [
              { who: "user", mono: true, text: `/schedule každý den v 9:00 audit závislostí` }
            ], note: `Příkazu <code>/schedule</code> v Claude Code stačí popsat úlohu běžnou řečí. Stejně dobře jde routine založit na webu <b>claude.ai/code/routines</b>: název, instrukce pro každé sezení, repozitář a spouštěč.` },
            { t: "warn", title: "⚠️ Než se na routines spolehneš", h: `<b>Research preview</b>: chování a limity se budou měnit.<br><b>Nejvýš jednou za hodinu</b>: častější opakování routines neumí.<br><b>Čerstvý klon</b>: běh začíná z čerstvého klonu výchozí větve a pushuje do větve <code>claude/</code>, pokud prompt neurčí jinou. Když běh spustí událost pull requestu, repozitář PR začne z head commitu toho PR (pokud je v routine první). Kam smí běh pushovat, ohlídej pravidly ochrany větví (branch protection) nebo rulesets na GitHubu. Platí pro GitHub přístup, který jsi připojil/a, takže pravidlo, které tvůj přístup smí obejít, push nezastaví.` },
            { t: "h", x: "Headless: když práce potřebuje tvé prostředí" },
            { t: "p", h: `Někdy úloha potřebuje tvé prostředí nebo logiku kolem běhu. Pak přichází na řadu headless režim, v dokumentaci nově „non-interactive mode“. Jádrem je přepínač <code>-p</code> (zkratka <code>--print</code>): Claude Code proběhne jako jednorázový příkaz bez rozhraní, čte standardní vstup a píše na standardní výstup, takže se dá řetězit jako jakýkoli shellový nástroj, třeba <code>claude -p "shrň změny v tomto diffu"</code>. Samotné <code>-p</code> načte stejný kontext jako interaktivní sezení: hooks, skills, pluginy, MCP servery i CLAUDE.md.` },
            { t: "ex", title: "Ukázka: strukturovaný výstup a navázání sezení", turns: [
              { who: "sys", mono: true, text: `claude -p "Vypiš názvy exportovaných funkcí ze src/core/style.js" \\
  --output-format json \\
  --json-schema '{"type":"object","properties":{"functions":{"type":"array","items":{"type":"string"}}},"required":["functions"]}' \\
  | jq '.structured_output.functions'

# později, z jiného skriptu:
claude --resume "$(jq -r .session_id /tmp/plan.json)"` }
            ], note: `JSON schéma spolu s výstupním formátem JSON omezí odpověď na tvé schéma. Odpovídající objekt najdeš v poli <code>structured_output</code>, takže ho jq vytáhne a pošle dál, do databáze nebo dalšího skriptu. U vícekrokové práce si z JSON výstupu ulož <code>session_id</code>: jeden skript třeba připraví plán, druhý ho později s plným kontextem provede přes <code>--resume</code>.` },
            { t: "p", h: `<b>Pro CI: <code>--bare</code>.</b> Přeskočí automatické hledání hooks, skills, pluginů, MCP serverů a CLAUDE.md. Dostaneš Claude s nástroji Bash, čtení a úprav souborů, plus to, co předáš přepínačem jako <code>--settings</code> nebo <code>--mcp-config</code>. Každý stroj tak startuje ze stejného nastavení, a rychleji. Bare režim nepoužívá přihlášení předplatným, nastav proto nejdřív <code>ANTHROPIC_API_KEY</code>.<br><br><b>Agent SDK</b> je poslední krok spektra: knihovna, která vloží Claude Code do tvé aplikace v TypeScriptu nebo Pythonu. Oba jazyky nabízejí funkci <code>query</code> a stejná primitiva jako CLI. Předáš prompt a volby jako <code>allowedTools</code>, systémový prompt a režim oprávnění, a pak procházíš zprávy, které Claude streamuje zpátky.` },
            { t: "table", head: ["Situace", "Sáhni po"], rows: [
              ["Opakovaná práce, nic nechceš hostovat", "<b>Routine</b> (výchozí volba)"],
              ["Úloha potřebuje tvou pipeline, data tečou přes skript", "<b>Headless</b> s <code>-p</code>"],
              ["CI potřebuje stejné nastavení na každém stroji", "<code>--bare</code>"],
              ["Práce patří dovnitř tvého produktu", "<b>Agent SDK</b>"]
            ] }
          ],
          quiz: [
            { q: "Co routine spojuje?", o: ["Prompt, repozitář a konektory, spouštěné v cloudu Anthropicu", "Workflow soubor a tvůj server", "Jen cron výraz"], a: 0, why: "Routine je uložený balík prompt, repo a konektory. Nic nehostuješ ani neudržuješ." },
            { q: "Jak často nejvýš může běžet opakovaná routine?", o: ["Každou minutu", "Jednou za hodinu", "Jednou týdně"], a: 1, why: "Opakovaný rozvrh běží nejvýš jednou za hodinu. Na častější běh routines nejsou." },
            { q: "Proč v CI použít --bare?", o: ["Aby Claude načetl víc kontextu", "Aby použil přihlášení předplatným", "Aby přeskočil automatické hledání hooks, skills, pluginů, MCP a CLAUDE.md a každý stroj startoval stejně"], a: 2, why: "--bare dá na každém stroji stejné výchozí nastavení. Předplatné nepoužívá, potřebuje ANTHROPIC_API_KEY." }
          ],
          cards: [
            { f: "Spektrum automatizace", b: "Routines (nic nehostuješ), headless -p (tvá pipeline), --bare (stejné CI), Agent SDK (uvnitř produktu). Začni routines." },
            { f: "Strukturovaný výstup z -p", b: "--output-format json a --json-schema. Výsledek je v poli structured_output, session_id poslouží pro --resume." },
            { f: "Limity routines", b: "Research preview, nejvýš jednou za hodinu, start z čerstvého klonu výchozí větve, push do claude/." }
          ],
          terms: [
            { t: "Routine (Claude Code)", d: "Uložený prompt s repozitářem a konektory, který běží v cloudu Anthropicu podle rozvrhu, po HTTP POST nebo po události na GitHubu." },
            { t: "Headless režim", d: "Neinteraktivní běh Claude Code přepínačem -p (--print): jednorázový příkaz bez rozhraní, který čte standardní vstup a píše na výstup, takže jde zapojit do skriptů." }
          ]
        },
        {
          id: "cca-07",
          title: "GitHub Actions a Code Review",
          minutes: 6,
          lead: `Nejlepší místo pro předání opakované práce je pull request: tam probíhá revize, tam se změny dostávají do kódu. Claude tam zapojíš dvěma způsoby. Code Review je spravovaná služba, kterou zapneš. GitHub Action si zapojíš sám.`,
          blocks: [
            { t: "h", x: "Spravovaná cesta: Code Review" },
            { t: "p", h: `Code Review je služba hostovaná Anthropicem, která reviduje tvé pull requesty přes Claude GitHub app. Nic nestavíš ani nehostuješ. Zapne ji <b>Owner</b> organizace Claude v administraci Claude Code: v sekci Code review přepínačem <b>Allow code review</b>. Pak nainstaluje Claude GitHub app, vybere repozitáře a určí, kdy se revize spouští. Pokud Owner není zároveň vlastníkem organizace na GitHubu, musí aplikaci nejdřív nainstalovat a propojit někdo, kdo jím je.` },
            { t: "ul", items: [
              `Jednou, když se PR otevře`,
              `Při každém pushi do PR`,
              `Jen když někdo napíše komentář <code>@claude review</code>`
            ] },
            { t: "p", h: `Vše pak běží na infrastruktuře Anthropicu. Sada revizních agentů porovná diff s <b>celým kódem</b>, ne jen se změněnými řádky. Nálezy přidá jako komentáře přímo k řádkům, označené podle závažnosti, se souhrnnou tabulkou v check runu. Nálezy deduplikuje a seřadí, takže místo stěny drobností čteš pár skutečných problémů.` },
            { t: "info", title: "ℹ️ Co Code Review dělá a co ne", h: `Nikdy PR neschválí ani nezablokuje, rozhodnutí zůstává člověku. Nepushuje opravy, jen přidává nálezy. Je dostupná v plánech Team a Enterprise. Na nález reaguješ ty: opravíš kód a pushneš. Opravu si můžeš předem ověřit příkazem <code>/code-review</code> ve vlastním terminálu. Udělá vlastní revizi tvého diffu a s přepínačem <code>--fix</code> její nálezy rovnou aplikuje do pracovního stromu.` },
            { t: "h", x: "Vlastní cesta: GitHub Action" },
            { t: "p", h: `Když jde o víc než revizi (vlastní CI, implementace změn z komentáře, plánované reporty), sáhni po GitHub Action. Spouští agenta na komentáře v PR, podle rozvrhu i na jakoukoli událost GitHubu. Nastavení začni v Claude Code příkazem <code>/install-github-app</code> (potřebuješ admin práva k repozitáři). Provede tě instalací GitHub app a nastaví do repozitáře secret s API klíčem Anthropicu. Samotná akce je <code>anthropics/claude-code-action@v1</code>.` },
            { t: "table", head: ["Vstup", "K čemu"], rows: [
              ["<code>anthropic_api_key</code>", "Nutný, když běh volá Claude API, pokud se neověřuješ přes <code>claude_code_oauth_token</code> (z předplatného Claude) nebo přes workload identity federation (service account v Claude Console, bez uloženého secretu). U cloudových poskytovatelů se nepoužívá."],
              ["<code>github_token</code>", "Volitelný. Bez něj se akce ověří jako nainstalovaná Claude GitHub app. Token předej, jen když to chceš přebít."],
              ["<code>trigger_phrase</code>", "Na co akce v komentářích reaguje. Výchozí je <code>@claude</code>."],
              ["<code>use_bedrock</code>, <code>use_vertex</code>, <code>use_foundry</code>", "Běh přes Amazon Bedrock, Agent Platform od Google Cloud nebo Microsoft Foundry místo Claude API, s přihlášením cloudovým účtem."],
              ["<code>prompt</code>", "Instrukce pro automatický běh. Když ji nastavíš, Claude běží na událost bez čekání na zmínku. Bez ní akce čeká na trigger phrase."],
              ["<code>claude_args</code>", "Řetězec argumentů CLI, který se předá rovnou Claude Code."]
            ] },
            { t: "ex", title: "Ukázka: workflow, které reaguje na @claude", turns: [
              { who: "sys", mono: true, text: `# .github/workflows/claude.yaml (hlavní krok)
- uses: anthropics/claude-code-action@v1
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
    trigger_phrase: "@claude"
    claude_args: "--max-turns 5 --model claude-sonnet-5"` },
              { who: "user", label: "Komentář v pull requestu", text: `@claude implementuj specifikaci z navázaného Linear issue` }
            ], note: `Workflow naslouchá <code>@claude</code> v komentářích PR i issues. V oprávněních jobu nastav <code>id-token: write</code>, aby se akce mohla přihlásit jako Claude GitHub app. Claude pak pushne commity a do komentářů popíše, co udělal. <code>--max-turns 5</code> pevně omezí agentní smyčku, aby neběžela donekonečna.` },
            { t: "p", h: `Stejná akce zvládne i <b>denní souhrn</b>: cron spustí workflow třeba v 9:00 UTC, akce provede tvůj prompt a souhrn si přečteš v logu běhu. Plánovaný běh sám komentář nepřidá. Přidej i spouštěč <code>workflow_dispatch</code>, ať jde běh pustit ručně ze záložky Actions, kde ho taky sleduješ krok po kroku. V <code>claude_args</code> pak dolaď <code>--max-turns</code> jako strop, režim oprávnění, který se nezastaví na otázce (nikdo neodpoví), a povolené nástroje přesně podle potřeby, u reportu jen čtení.` },
            { t: "key", h: `Na revize PR začni spravovanou službou Code Review. Na akci přejdi ve chvíli, kdy má Claude v CI něco opravdu udělat, ne jen komentovat.` }
          ],
          quiz: [
            { q: "Co Code Review udělá s pull requestem?", o: ["Schválí ho, když nenajde chyby", "Pushne opravy nálezů", "Přidá nálezy jako komentáře k řádkům, rozhodnutí nechá na člověku"], a: 2, why: "Code Review nikdy neschvaluje, neblokuje ani neopravuje. Jen přidává seřazené nálezy." },
            { q: "Čím začneš nastavení GitHub Action?", o: ["Příkazem /install-github-app v Claude Code", "Příkazem /schedule", "Přepínačem Allow code review"], a: 0, why: "/install-github-app nainstaluje GitHub app a nastaví secret s API klíčem. Potřebuješ admin práva k repozitáři." },
            { q: "Co se stane, když v akci nastavíš vstup prompt?", o: ["Akce dál čeká na @claude", "Claude běží na událost bez čekání na zmínku", "Akce půjde spustit jen ručně"], a: 1, why: "S promptem jde o automatický běh. Bez něj akce čeká na trigger phrase." }
          ],
          cards: [
            { f: "Code Review vs. GitHub Action", b: "Code Review: spravovaná revize PR, jen nálezy. Action: vlastní CI, ve kterém Claude i jedná (commity, reporty)." },
            { f: "Kdy se spouští Code Review", b: "Při otevření PR, při každém pushi, nebo jen na komentář @claude review. Vybírá Owner." },
            { f: "claude_args pro běh bez lidí", b: "--max-turns jako strop, režim oprávnění bez ptaní, jen nutné nástroje (u reportu jen čtení)." }
          ],
          terms: [
            { t: "Code Review (Claude)", d: "Spravovaná služba Anthropicu, která přes Claude GitHub app reviduje pull requesty a přidává nálezy jako komentáře k řádkům. PR neschvaluje, neblokuje ani neopravuje." },
            { t: "claude-code-action", d: "GitHub Action (anthropics/claude-code-action@v1), která spouští Claude Code v GitHub workflow na komentáře, podle rozvrhu nebo na jiné události." }
          ]
        }
      ]
    },
    {
      title: "Ověření a sdílení",
      lessons: [
        {
          id: "cca-08",
          title: "Ověření běhů bez dohledu",
          minutes: 5,
          lead: `Claude ohlásil hotovo a ty jsi u toho nebyl/a. Zásada je jednoduchá: ověřuj úměrně tomu, kolik volnosti jsi běhu dal/a. Čím méně jsi sledoval/a, tím víc kontroluj.`,
          blocks: [
            { t: "p", h: `Když jsi v krátkém sezení sledoval/a, jak zprávy běží, stačí rychlý pohled. Běh bez dozoru nebo úloha, která proběhla v CI bez člověka ve smyčce, potřebuje skutečnou kontrolu. Nikdo neviděl, co se dělo, takže to musíš zpětně zrekonstruovat.` },
            { t: "h", x: "Bez dohledu v Auto, ne v Bypass" },
            { t: "p", h: `Běh bez dozoru v práci nech v režimu <b>Auto</b>, ne v Bypass permissions. Klasifikátor v Auto dál posuzuje většinu akcí, jestli nejsou nebezpečné, a tahle záchranná síť stojí za to. Správnost kódu ale nikdy neposuzuje. Tvoje laťka pro ověření proto zůstává stejná a řídí se tím, jak moc byl běh bez dohledu.` },
            { t: "h", x: "Začni diffem, ne shrnutím" },
            { t: "steps", items: [
              `Spusť <code>/code-review</code>, ať projde změny a označí problémy.`,
              `Pak se na <code>git diff</code> podívej sám/sama.`,
              `Nejdřív čti soubory, které byly v plánu, potom hledej cokoli mimo něj.`
            ] },
            { t: "cmp",
              bad: { lbl: "Úhledné shrnutí", h: `„Refaktor dokončen, logika plateb je přehlednější, testy prochází.“ Čte se skvěle.` },
              good: { lbl: "Diff", h: `Mezi změněnými soubory je i konfigurace, se kterou plán vůbec nepočítal. Shrnutí to neřekne, diff ano. Úhledný popis není důkaz čistého kódu.` } },
            { t: "h", x: "Testy jako brána, ne slib" },
            { t: "p", h: `Skutečná brána u běhu bez dohledu je, jestli testy prošly a jestli je Claude opravdu spustil, nebo to jen tvrdí. Nenechávej to na důvěře a zapoj to jako hooky, které Claude nemůže přeskočit:` },
            { t: "ul", items: [
              `<b>Stop hook</b>, který spustí testy a při selhání odmítne ukončit tah.`,
              `<b>PostToolUse hook</b>, který po každé úpravě spustí lint a typovou kontrolu.`,
              `Klíčový je <b>exit 2</b>: selhání jde rovnou zpět ke Claude, ten ho přečte a opraví bez tvého zásahu. A kontrola proběhne v každém běhu, ať si na ni vzpomeneš, nebo ne.`
            ] },
            { t: "p", h: `<b>Studený druhý názor.</b> Revize subagentem, kterou bys udělal/a před pull requestem, funguje i tady. Otevři nové sezení nebo subagenta a nech ho zrevidovat změněný kód bez paměti na to, jak vznikal. V postupu nemá žádný vklad, takže najde, co si původní běh sám před sebou omluvil.` },
            { t: "key", h: `Kontrola tak vážná, jak moc byl běh bez dohledu: diff přečti sám/sama, testy udělej hookem, který hlídá konec tahu, headless běhy ověřuj podle JSON výsledku a exit kódu a na všechno důležité si vezmi studený druhý názor.` }
          ],
          quiz: [
            { q: "Proč nechat běh bez dozoru v Auto místo Bypass permissions?", o: ["Auto ověří, že je kód správně", "Klasifikátor dál zachytí většinu nebezpečných akcí", "Bypass je pomalejší"], a: 1, why: "Auto drží záchrannou síť proti nebezpečným akcím. Správnost ale neověřuje, tu musíš zkontrolovat sám/sama." },
            { q: "Čím začít kontrolu běhu bez dohledu?", o: ["Diffem, protože shrnutí nemusí zmínit nečekaně změněný soubor", "Shrnutím od Claude, je nejrychlejší", "Novým během stejného promptu"], a: 0, why: "Shrnutí se může číst skvěle, i když diff sáhl na soubor mimo plán." },
            { q: "Proč si vzít druhý názor od nového sezení nebo subagenta?", o: ["Je levnější", "Má víc kontextu o tom, jak kód vznikal", "Nemá paměť na postup, takže najde, co si původní běh omluvil"], a: 2, why: "Recenzent bez vkladu do postupu vidí věci, které autor racionalizoval." }
          ],
          cards: [
            { f: "Úměrné ověření", b: "Čím méně jsi běh sledoval/a, tím víc ověřuj." },
            { f: "Testy jako brána", b: "Stop hook s testy odmítne konec tahu při selhání, PostToolUse hook po každé úpravě lintuje a kontroluje typy. Exit 2 vrátí chybu Claude." },
            { f: "Studený druhý názor", b: "Nové sezení nebo subagent zreviduje změny bez paměti na to, jak vznikly." }
          ],
          terms: [
            { t: "Stop hook", d: "Hook na událost Stop, která nastane, když chce Claude ukončit tah. Exit kódem 2 může konec odmítnout, třeba když neprošly testy." }
          ]
        },
        {
          id: "cca-09",
          title: "Pluginy pro celý tým",
          minutes: 7,
          lead: `Nastavení, kterému věříš, má větší cenu, když ho používá celý tým. Kopírovat soubory z .claude mezi počítači a doufat, že zůstanou v souladu, nefunguje. Plugin zabalí nastavení do jedné instalovatelné jednotky.`,
          blocks: [
            { t: "p", h: `Plugin spojí všechno, co bys jinak sdílel/a ručně: <b>skills, subagenty, hooks a konfigurace MCP serverů</b>, k tomu i méně častou výbavu jako servery pro language server protocol (LSP), monitory na pozadí, motivy a výřez ze <code>settings.json</code>. Jedna verze, jedna instalace.` },
            { t: "ex", title: "Ukázka: instalace pluginu", turns: [
              { who: "user", mono: true, text: `/plugin install github@claude-plugins-official` }
            ], note: `Příkaz nejdřív otevře podrobnosti pluginu, abys ho prohlédl/a a vybral/a rozsah (scope). Pak ho Claude Code nainstaluje a vypíše krátké shrnutí: buď je plugin v sezení už aktivní, nebo zmíní <code>/reload-plugins</code> a reload provede sám. Zasáhneš, jen když reload varuje, že by další zpráva znovu načetla celý rozhovor. Pak plugin aktivuj příkazem <code>/reload-plugins --force</code>.` },
            { t: "p", h: `Pro tým je lepší jednou přidat soukromý <b>marketplace</b>, sdílený zdroj, přes který se pluginy hledají: <code>/plugin marketplace add your-org/claude-plugins</code>. Každá další instalace jde přes něj, takže objevování, sledování verzí a aktualizace máš na jednom místě. Co marketplace nabízejí, prohlédneš v záložce Discover.` },
            { t: "h", x: "Než nainstaluješ, čti" },
            { t: "warn", h: `Plugin spouští kód na tvém počítači s tvými oprávněními a jeho hooks se spustí při každém odpovídajícím volání nástroje. Instaluješ ho kvůli skills? Dostaneš i jeho PreToolUse a Stop hooky, ať jsi je četl/a, nebo ne. Komunitní plugin může mít Stop hook, který pokaždé volá nějakou adresu na síti, a nic v tvé konfiguraci tě nevaruje.` },
            { t: "p", h: `Podrobnosti pluginu ukážou, co se nainstaluje, odhad, kolik kontextu zabere, a jasné upozornění, že Anthropic nekontroluje obsah pluginů třetích stran. Na komunitní marketplace se plugin dostane tak, že ho autor pošle Anthropicu. Oficiální marketplace se kurátoruje samostatně. Být v seznamu ale neznamená být důvěryhodný: pluginy instaluj a marketplace přidávej jen ze zdrojů, kterým opravdu věříš.` },
            { t: "h", x: "Komponenty běží vedle tvých" },
            { t: "ul", items: [
              `<b>Hooks se sčítají.</b> PreToolUse hook pluginu i tvůj vlastní se spustí při každém volání nástroje, žádný nenahradí druhý.`,
              `<b>Skills, agenti a příkazy</b> mají jmenný prostor podle názvu pluginu, takže se s tvými nikdy nepotkají.`,
              `<b>settings.json pluginu</b> je úzký: Claude Code z něj respektuje jen dva klíče, <code>agent</code> a klíč stavového řádku subagentů. Klíč <code>agent</code> ale povýší jednoho ze subagentů pluginu do hlavního vlákna, i s jeho systémovým promptem, omezením nástrojů a modelem. Zapnutí pluginu tak může změnit výchozí chování Claude Code.`,
              `Vše, co plugin přidal, uvidíš, spravuješ a odinstaluješ v panelu pluginů.`
            ] },
            { t: "h", x: "Zabal vlastní plugin" },
            { t: "p", h: `Funguje ti adresář .claude? Zabal ho, nic nepřestavuj. Plugin používá stejný tvar: jedna složka na každý skill, jeden markdown soubor na každého subagenta ve složce <code>agents</code>, <code>hooks/hooks.json</code> a <code>.mcp.json</code> v kořeni pluginu. Claude Code komponenty najde podle konvence.` },
            { t: "ex", title: "Ukázka: manifest pluginu", turns: [
              { who: "sys", mono: true, text: `// .claude-plugin/plugin.json
{
  "name": "svg-splitter-review",
  "version": "0.1.0",
  "description": "Revize repozitáře SVG Splitter",
  "author": { "name": "Tým platformy" }
}` }
            ], note: `Manifest je volitelný, bez něj Claude Code najde komponenty podle struktury složek. Jediné povinné pole je <code>name</code>: tvoří jmenný prostor, takže skill z tohoto pluginu se spouští jako <code>/svg-splitter-review:&lt;název-skillu&gt;</code>. Verzuj plugin jako každou jinou závislost, na tom stojí aktualizace a sledování verzí v týmu.` },
            { t: "key", h: `Plugin používáš? Než ho nainstaluješ, prohlédni si jeho hooks, agenty a MCP servery. Plugin stavíš? Zabal .claude, jakmile funguje: jeden manifest, jedna instalace.` }
          ],
          quiz: [
            { q: "Co dostaneš, když nainstaluješ plugin kvůli jeho skills?", o: ["Jen skills", "Skills i všechny jeho hooks, agenty a MCP servery", "Skills a kopii repozitáře autora"], a: 1, why: "Plugin je jedna jednotka. Jeho hooks běží s tvými oprávněními, i když jsi je nečetl/a." },
            { q: "Plugin i ty máte PreToolUse hook. Co se stane?", o: ["Hook pluginu nahradí tvůj", "Tvůj hook vypne hook pluginu", "Spustí se oba"], a: 2, why: "Hooks se sčítají, žádný nenahradí druhý. Proto se vyplatí číst podrobnosti před instalací." },
            { q: "Které pole manifestu plugin.json je povinné?", o: ["name", "version", "author"], a: 0, why: "Povinný je jen název. Tvoří jmenný prostor skills, například /svg-splitter-review:nazev-skillu." }
          ],
          cards: [
            { f: "Plugin v Claude Code", b: "Jedna instalovatelná jednotka s jednou verzí: skills, subagenti, hooks, MCP konfigurace a další." },
            { f: "Čti před instalací", b: "Plugin běží s tvými oprávněními a jeho hooks se spustí při každém odpovídajícím volání. Zkontroluj hooks, agenty a MCP servery." },
            { f: "Klíč agent v settings.json pluginu", b: "Povýší subagenta pluginu do hlavního vlákna (prompt, nástroje, model), takže změní výchozí chování Claude Code." }
          ],
          terms: [
            { t: "Marketplace (pluginy)", d: "Sdílený zdroj pluginů, přes který se instalace hledají. Tým si přidá soukromý příkazem /plugin marketplace add a má objevování, verze i aktualizace na jednom místě." },
            { t: "Manifest pluginu", d: "Volitelný soubor .claude-plugin/plugin.json s názvem, verzí, popisem a autorem pluginu. Povinný je jen název, který tvoří jmenný prostor skills." }
          ]
        }
      ]
    }
  ]
});
