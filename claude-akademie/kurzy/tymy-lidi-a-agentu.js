/* Kurz: Týmy lidí a agentů (podle academy.claude.com/courses/building-effective-human-agent-teams)
   Interaktivní animace a cvičení z originálu jsou nahrazeny komentovanými ukázkami. */
AKADEMIE.add({
  id: "tymy-lidi-a-agentu",
  emoji: "🤝",
  title: "Týmy lidí a agentů",
  category: "fluency",
  level: "Pro vedoucí týmů, netechnicky",
  desc: "Proč přejít od AI „pro jednoho hráče“ k agentovi sdílenému celým týmem a jak na to tým připravit: jasné role, zapsaný cíl, postupně budovaná důvěra a kontrolní seznam na první dva týdny. Originál je zatím ve verzi beta.",
  source: "https://academy.claude.com/courses/building-effective-human-agent-teams",
  modules: [
    {
      title: "Přechod na AI pro více hráčů",
      lessons: [
        {
          id: "hat-01",
          title: "Proč AI pro více hráčů",
          minutes: 5,
          lead: `Většina z nás používá AI „pro jednoho hráče“ (single-player): zrychlí nás na vlastních úkolech, ale zbytek týmu o tom neví. Když lidé a agenti pracují ve sdíleném prostoru (multiplayer), celá dynamika se mění.`,
          blocks: [
            { t: "p", h: `Originál sleduje tým <b>Lantern</b>, který chystá spuštění aplikace pro sledování zdraví. Dosud každý používal AI sám za sebe a s růstem týmu se ukazuje, co to stojí.` },
            { t: "h", x: "Od superobleku ke sdílené místnosti" },
            { t: "cmp",
              bad: { lbl: "Single-player AI", h: `Jako <b>superoblek</b>: jsi rychlejší na vlastních úkolech, ale informace snadno zůstanou uzavřené u tebe.` },
              good: { lbl: "Multiplayer AI", h: `Lidé a agenti pracují ve <b>sdíleném prostoru</b>. Když někdo požádá AI o shrnutí rozhodnutí z porady nebo o úpravu kalendáře, vidí to celý tým, lidé i agenti.` } },
            { t: "p", h: `Z viditelné práce se časem stávají <b>znalosti, na kterých tým staví</b>. Naopak když každý používá AI zvlášť, ptá se jí každý zvlášť, často na totéž. A <b>čím rychleji tým roste</b>, tím víc takový rozdrobený kontext škodí i práci agentů.` },
            { t: "ex", title: "Ukázka: najdi otázky, které se v týmu opakují", turns: [
              { who: "user", text: `Vedu tým o šesti lidech, AI zatím používáme každý sám. Otázky, které u nás padají skoro každý týden: Jaký je termín spuštění? Kde je poslední specifikace? Co jsme rozhodli na poradě?
U každé se mě zeptej, kdo další se na ni nejspíš ptá, a popiš, co se pokazí, když se naše odpovědi liší. Nakonec řekni, co by se změnilo, kdyby ji jeden sdílený agent zodpověděl jednou tam, kde to všichni uvidí. Krátká tabulka.` },
              { who: "ai", text: `(Po krátkém doptání)
Termín | vývoj i marketing | každý plánuje podle jiného data | jedna platná odpověď pro všechny
Specifikace | všichni | práce podle staré verze | odkaz na aktuální verzi
Porada | kdo chyběl | každý si pamatuje něco jiného | zápis rozhodnutí hned po poradě` }
            ], note: `Cvičení z originálu. Odpověď si schovej: v poslední lekci se hodí při výběru první práce pro sdíleného agenta.` },
            { t: "key", h: `Single-player AI zrychlí jednotlivce, ale může od týmu oddělit informace. Multiplayer AI staví na sdíleném kontextu, a proto mohou být agenti proaktivnější a lépe přizpůsobení týmu.` },
            { t: "tip", title: "🤔 Na zamyšlení", h: `Kde tě AI zrychlila tak, že to zbytek týmu vůbec nevidí? A kdyby agent viděl do sdíleného prostoru tvého týmu, čeho by si měl všimnout jako prvního?` }
          ],
          quiz: [
            { q: "Proč se single-player AI přirovnává k superobleku?", o: ["Protože agent pracuje místo celého týmu", "Zrychlí tě na vlastních úkolech, ale informace snadno zůstanou uzavřené u tebe", "Protože vyžaduje speciální vybavení"], a: 1, why: "Superoblek tě udělá rychlejším, ale samotného. Zbytek týmu z tvé práce s AI nic nemá." },
            { q: "Co se změní, když tým používá AI ve sdíleném prostoru?", o: ["Každý vidí, o co kdo AI požádal (třeba shrnutí rozhodnutí z porady), a z toho vznikají znalosti pro celý tým", "Nic, jen je to dražší", "Každý člen týmu dostane vlastního soukromého agenta"], a: 0, why: "Viditelná práce se postupně mění ve znalosti, na kterých mohou stavět lidé i agenti." },
            { q: "Jak souvisí růst týmu se sdíleným kontextem?", o: ["Čím je tým větší, tím méně na kontextu záleží", "Růst týmu na agenty nemá vliv", "Čím rychleji tým roste, tím víc rozdrobený kontext škodí práci agentů"], a: 2, why: "S každým dalším člověkem přibývá opakovaných otázek a kontextu schovaného v soukromých konverzacích." }
          ],
          cards: [
            { f: "Single-player vs. multiplayer AI", b: "Single-player: AI zrychlí jednotlivce, informace zůstávají u něj. Multiplayer: lidé a agenti pracují ve sdíleném prostoru se sdíleným kontextem." },
            { f: "Superoblek vs. sdílená místnost", b: "Superoblek tě zrychlí, ale samotného. Ve sdílené místnosti vidí každý člověk i agent, co se děje, a vznikají z toho znalosti týmu." },
            { f: "Co sdílený kontext dá agentům", b: "Mohou být proaktivnější a lépe přizpůsobení týmu, protože vidí, na čem tým pracuje." }
          ],
          terms: [
            { t: "Single-player AI (AI pro jednoho hráče)", d: "Způsob používání AI, kdy každý pracuje s AI sám za sebe. Zrychlí jednotlivce, ale informace zůstávají v jeho soukromých konverzacích." },
            { t: "Multiplayer AI (AI pro více hráčů)", d: "Způsob používání AI, kdy lidé a agenti pracují ve sdíleném prostoru se sdíleným kontextem a míří ke společnému cíli." }
          ]
        }
      ]
    },
    {
      title: "Co dělá z agenta člena týmu",
      lessons: [
        {
          id: "hat-02",
          title: "Čím se multiplayer agent liší od běžných AI nástrojů",
          minutes: 5,
          lead: `Multiplayer agent má vlastní identitu, vlastní paměť a kontext, který může sdílet s celým týmem i s jinými agenty. Díky tomu s ním lidé mohou pracovat na společném cíli.`,
          blocks: [
            { t: "cmp",
              bad: { lbl: "Single-player agent", h: `<b>Tvoje prodloužená ruka.</b> Má tvoje přístupové údaje a ví to, co víš ty.` },
              good: { lbl: "Multiplayer agent", h: `<b>Jedná sám za sebe.</b> Jako tým rozhodnete, k čemu má přístup a jaké nástroje smí používat.` } },
            { t: "h", x: "Tři klíčové schopnosti" },
            { t: "table", head: ["Schopnost", "Co znamená"], rows: [
              ["Vlastní identita a přístupy", "Vlastní jméno a přihlášení. Přístupy a nástroje určuje tým."],
              ["Sdílená paměť", "Roste s každým, kdo s agentem pracuje. Nezačíná pokaždé od nuly."],
              ["Sdílený kontext", "Čte, co tým píše ve sdílených prostorech, a tak zůstává v obraze."]
            ] },
            { t: "p", h: `Zkus jednu schopnost v duchu vypnout. <b>Bez identity</b> agent jedná pod účtem někoho z týmu a smí jen to, co ten člověk. <b>Bez paměti</b> mu tým dokola vysvětluje cíle. <b>Bez kontextu</b> ví jen to, co mu někdo vloží do chatu.` },
            { t: "ex", title: "Ukázka: nástroj, nebo člen týmu?", turns: [
              { who: "user", text: `Používáme AI zapisovatele online porad. Chci zjistit, jestli je to osobní nástroj, nebo spíš člen týmu. Polož mi tři otázky, jednu po druhé: 1) Vystupuje pod vlastním jménem a přihlášením, nebo pod mým? 2) Pamatuje si naše cíle mezi konverzacemi? 3) Čte, co tým píše ve sdílených prostorech, nebo jen to, co mu vložím?
Pak řekni, čím je dnes, co kvůli tomu ztrácíme a jaká nejmenší změna ho posune o krok blíž ke členovi týmu.` },
              { who: "ai", text: `(Po třech odpovědích)
Dnes je to osobní nástroj: běží pod tvým účtem a každou poradu zpracuje zvlášť. Ztrácíte souvislosti mezi poradami.
Nejmenší změna: ukládat zápisy do sdíleného týmového prostoru, kde je uvidí všichni, včetně agenta.` }
            ], note: `Cvičení z originálu. Tři otázky odpovídají třem schopnostem. Všímej si hlavně <b>nejmenší změny</b>: posun k multiplayer AI může začít jedním krokem.` },
            { t: "key", h: `Multiplayer agent má tři klíčové schopnosti: vlastní identitu a přístupové údaje, sdílenou paměť a sdílený kontext.` },
            { t: "tip", title: "🤔 Na zamyšlení", h: `Které úkoly ve tvém týmu by získaly, kdyby pro ně platily společné instrukce a společný kontext? A které nedávné rozhodnutí padlo jen ústně a nikdo ho nezapsal?` }
          ],
          quiz: [
            { q: "Jaké tři klíčové schopnosti má multiplayer agent?", o: ["Rychlost, nízkou cenu a přesnost", "Přístup k internetu, generování obrázků a hlasový režim", "Vlastní identitu a přístupové údaje, sdílenou paměť a sdílený kontext"], a: 2, why: "Právě tyhle tři schopnosti umožňují lidem a agentovi pracovat na společném cíli." },
            { q: "Čím se liší identita single-player a multiplayer agenta?", o: ["Single-player agent jedná jako tvoje prodloužená ruka s tvými přístupy; multiplayer agent jedná sám za sebe a tým určuje jeho přístupy a nástroje", "Nijak, oba používají přihlášení uživatele", "Multiplayer agent nemá žádné přístupy"], a: 0, why: "Protože multiplayer agent vystupuje sám za sebe, může tým společně rozhodnout, k čemu má přístup." },
            { q: "Co se pravděpodobně děje, když agent nemá sdílenou paměť?", o: ["Pracuje rychleji a přesněji", "Tým mu opakovaně vysvětluje cíle a rozhodnutí, protože každá konverzace začíná od nuly", "Vidí všechno, co tým kdy napsal"], a: 1, why: "Bez paměti se nic nehromadí. Kontext, který tým jednou předal, musí předávat znovu." }
          ],
          cards: [
            { f: "Tři schopnosti multiplayer agenta", b: "Vlastní identita a přístupové údaje, sdílená paměť, sdílený kontext." },
            { f: "Prodloužená ruka vs. člen týmu", b: "Single-player agent má tvoje přístupy a ví, co víš ty. Multiplayer agent jedná sám za sebe; o jeho přístupech a nástrojích rozhoduje tým." },
            { f: "Test „nástroj, nebo člen týmu?“", b: "Vlastní jméno a přihlášení? Pamatuje si cíle mezi konverzacemi? Čte sdílené prostory týmu?" }
          ],
          terms: [
            { t: "Multiplayer agent", d: "AI agent sdílený týmem. Má vlastní identitu a přístupy, paměť, která roste z práce s celým týmem, a sdílený kontext z týmových prostorů." }
          ]
        },
        {
          id: "hat-03",
          title: "Jak vypadá silný tým lidí a agentů",
          minutes: 5,
          lead: `Nejlepší týmy lidí a agentů stojí na promyšlených pravidlech: jasné role, zapsaný north star, správný přístup k informacím a důvěra, která roste postupně.`,
          blocks: [
            { t: "p", h: `Tohle pomáhá i týmům bez agentů, s agenty je to ale <b>ještě důležitější</b>. Týmy lidí a agentů obvykle dokončují úkoly rychleji, takže je dražší i každý nesoulad nebo chyba.` },
            { t: "h", x: "Čtyři zásady" },
            { t: "ol", items: [
              `<b>Pracujte veřejně a dejte agentům široký kontext.</b> Co není zapsané a dostupné, pro agenta neexistuje.`,
              `<b>Každý člověk i agent má jasnou roli</b> a nástroje pro ni. Jedna soupiska, jedny pracovní dokumenty, jeden pracovní prostor. Nejdůležitější rozhodnutí dělá člověk.`,
              `<b>Zapsaný north star.</b> Stanovují ho vždy lidé. Agent, který cíl zná, může sám přinášet užitečnou práci směrem k němu.`,
              `<b>Důvěra roste postupně.</b> Samostatnost dávejte úměrně prokázané spolehlivosti a pak ji uváženě rozšiřujte.`
            ] },
            { t: "ex", title: "Ukázka: soupiska pro tým s jedním agentem", turns: [
              { who: "user", text: `Tým: Jana (produkt), Petr (vývoj), Eva (marketing). Projekt: nová verze aplikace do konce měsíce.
Navrhni soupisku týmu lidí a jednoho sdíleného AI agenta. U každé práce: kdo vede (člověk, nebo agent), kdo připravuje koncept, jak často a jak se kontroluje. Rozhodnutí s úsudkem nech lidem a vyjmenuj je. Na závěr navrhni jednou větou north star, ať ho můžu opravit.` },
              { who: "ai", text: `• Ranní přehled: vede agent · denně · první týden kontroluje Jana
• Poznámky k vydání: koncept agent, schvaluje Petr · u každého vydání
• Texty kampaně: koncept agent, vede Eva · týdně
• Termín a rozsah: rozhoduje Jana (úsudek), podklady agent
North star (návrh): Do konce měsíce vydat novou verzi a v prvním týdnu ji vyzkouší polovina uživatelů.` }
            ], note: `Cvičení z originálu. Úsudek zůstává lidem a north star agent jen <b>navrhuje k opravě</b>. Originál radí označit si i jednu práci, kterou bys agentovi zatím nesvěřil/a.` },
            { t: "key", h: `Čím rychleji tým s agenty pracuje, tím dražší je nesoulad. Jasné role, zapsaný cíl, otevřené informace a postupná důvěra jsou pojistka.` },
            { t: "tip", title: "🤔 Na zamyšlení", h: `Která opakovaná práce ve tvém týmu dnes nemá jasného vlastníka? A kdo by u vás řekl ano, nebo ne, když agent sám od sebe přijde s návrhem, o který ho nikdo nežádal?` }
          ],
          quiz: [
            { q: "Proč jsou jasná pravidla v týmu s agenty ještě důležitější než v týmu bez nich?", o: ["Protože agenti bez pravidel vůbec nefungují", "Týmy s agenty dokončují úkoly rychleji, takže nesoulad a chyby jsou dražší", "Protože to vyžadují licenční podmínky"], a: 1, why: "Vyšší tempo práce znásobuje dopad každého nedorozumění." },
            { q: "Kdo stanovuje north star týmu?", o: ["Agent, protože má nejvíc dat", "Ten, kdo s agentem pracuje nejčastěji", "Vždy lidé; agent, který cíl zná, pak může přinášet užitečnou práci směrem k němu"], a: 2, why: "Cíl je lidské rozhodnutí. Agent ho může navrhnout k opravě, ale stanovují ho lidé." },
            { q: "Jak rozšiřovat samostatnost agenta?", o: ["Úměrně jeho prokázané spolehlivosti, a pak uváženě dál", "Hned od začátku dát plnou samostatnost, ať se ukáže", "Nikdy ji nerozšiřovat"], a: 0, why: "Důvěra se buduje postupně: nejdřív agent ukáže, že je spolehlivý, pak dostane víc." }
          ],
          cards: [
            { f: "Čtyři zásady silného týmu lidí a agentů", b: "Pracovat veřejně a dát agentům široký kontext, jasné role se správnými nástroji, zapsaný north star, postupně budovaná důvěra." },
            { f: "Pravidlo zápisu", b: "Pro agenta platí: co není zapsané a dostupné, neexistuje." },
            { f: "Jak roste důvěra k agentovi", b: "Samostatnost úměrně prokázané spolehlivosti, pak uvážené rozšiřování." }
          ],
          terms: [
            { t: "North star (týmový cíl)", d: "Zapsaný ambiciózní a měřitelný cíl, podle kterého se orientují lidé i agenti v týmu. Stanovují ho vždy lidé." },
            { t: "Soupiska (roster)", d: "Zapsaný seznam opakovaných prací v týmu, kde má každá práce jednoho vlastníka. Patří do ní i agenti." }
          ]
        }
      ]
    },
    {
      title: "Příprava organizace",
      lessons: [
        {
          id: "hat-04",
          title: "Kontrolní seznam pro organizaci",
          minutes: 4,
          lead: `Než do týmu přivedeš multiplayer AI, upřímně se podívej, jak je na to tým připravený. Pomůže pět otázek.`,
          blocks: [
            { t: "h", x: "Pět otázek připravenosti" },
            { t: "ol", items: [
              `<b>Je to, co lidé a agenti potřebují, otevřené a dohledatelné?</b> Když většina práce žije v soukromých dokumentech a přímých zprávách, agenti těžko zůstávají v obraze.`,
              `<b>Je zapsané, kdo co vlastní, včetně agentů?</b> Bez jasných rolí se práce zdvojuje.`,
              `<b>Má každý nástroje pro svou práci, agenti také?</b> Agent bez přístupu odvede povrchní práci, hádá nebo dělá chyby.`,
              `<b>Jde klíčovou práci agenta zkontrolovat dřív, než ji uvidí člověk?</b> Hodnoticí kritéria (rubric), test nebo druhý agent zkracují čas, než je práce hotová.`,
              `<b>Existuje zapsaný north star, na který může každý ukázat?</b> Bez jasného cíle nemohou být proaktivní lidé ani agenti.`
            ] },
            { t: "p", h: `Odpovědi ukážou, kde tvůj tým právě je. To je nejlepší základ pro plán, jak multiplayer AI v organizaci úspěšně spustit.` },
            { t: "ex", title: "Ukázka: z hodnocení připravenosti plán", turns: [
              { who: "user", text: `Připravenost mého týmu na sdíleného agenta (1 až 5): otevřenost 2 (hodně se řeší v soukromých zprávách), zapsaní vlastníci 3, nástroje 4, kontrola práce agenta 1, zapsaný north star 2.
Udělej z mezer plán: co nejdřív, jak a kdo to má na starosti.` },
              { who: "ai", text: `1) Kontrola: k prvnímu úkolu agenta sepište kritéria, co znamená „splněno“ (ten, kdo úkol zadává).
2) Otevřenost: rozhodnutí z porad a soukromých zpráv zapisovat ještě ten den do týmového kanálu (vedoucí porady).
3) North star: vedoucí týmu navrhne měřitelnou větu, tým ji doladí a připne tam, kde ji agent přečte.
Vlastníci a nástroje počkají, tam je základ dobrý.` }
            ], note: `V originále tenhle prompt sestaví interaktivní cvičení z tvého hodnocení pěti tvrzení. Tohle je jedna možná podoba, stupnice je jen ilustrační. Podstatné je dát Claude <b>konkrétní mezery</b> a chtít <b>pořadí kroků s vlastníky</b>.` },
            { t: "tip", title: "🤔 Na zamyšlení", h: `Na které z pěti otázek by se tvůj tým nejvíc neshodl? A co je u vás soukromé jen ze zvyku, i když by to mohlo být otevřené záměrně?` }
          ],
          quiz: [
            { q: "Co se stane, když většina práce týmu žije v soukromých dokumentech a přímých zprávách?", o: ["Agenti budou rychlejší, protože mají méně čtení", "Agenti těžko zůstávají v obraze", "Nic, agent si chybějící informace domyslí"], a: 1, why: "Agent pracuje s tím, co je zapsané a dostupné. Co je schované v soukromí, pro něj neexistuje." },
            { q: "Která z možností NENÍ jednou z pěti otázek připravenosti?", o: ["Má každý člen týmu, i agent, nástroje pro svou práci?", "Existuje zapsaný north star?", "Používá tým nejnovější model AI?"], a: 2, why: "Pět otázek: otevřenost, jasní vlastníci, nástroje pro každého, kontrola před člověkem, zapsaný north star. Verze modelu mezi nimi není." },
            { q: "K čemu slouží kontrola práce agenta (hodnoticí kritéria, test, druhý agent) dřív, než ji uvidí člověk?", o: ["Zkracuje čas, než je práce agenta hotová", "Nahrazuje lidský úsudek u všech rozhodnutí", "Je to formalita bez praktického dopadu"], a: 0, why: "Člověk pak dostává práci, která už prošla základní kontrolou, a dokončení je rychlejší." }
          ],
          cards: [
            { f: "Pět otázek připravenosti", b: "Otevřené a dohledatelné? Zapsaní vlastníci, i agenti? Nástroje pro každého? Kontrola dřív, než to uvidí člověk? Zapsaný north star?" },
            { f: "Agent bez přístupu", b: "Odvede povrchní práci, hádá nebo dělá chyby." },
            { f: "Bez rolí a bez cíle", b: "Bez jasných rolí se práce zdvojuje. Bez jasného cíle nemohou být proaktivní lidé ani agenti." }
          ],
          terms: [
            { t: "Hodnoticí kritéria (rubric)", d: "Zapsaný popis toho, jak u konkrétního úkolu vypadá „splněno“. Podle něj může práci agenta zkontrolovat člověk, test nebo jiný agent." }
          ]
        },
        {
          id: "hat-05",
          title: "Jak začít: první dva týdny",
          minutes: 5,
          lead: `Krátký kontrolní seznam na první dva týdny. Začni brzy, ale začni v malém.`,
          blocks: [
            { t: "h", x: "Připrav prostor" },
            { t: "steps", items: [
              `<b>Jeden společný prostor, tři až pět lidí, jeden agent.</b> Malý tým se společným projektem, nejlépe takový, kde si lidé hodně důvěřují.`,
              `<b>Nastav multiplayer agenta.</b> Nejběžnější cesty jsou <b>Claude Tag</b> (Claude ve Slacku) a <b>Claude Managed Agents API</b>.`,
              `<b>Otevřenost jako výchozí stav.</b> Když padne rozhodnutí na poradě nebo v soukromé zprávě, někdo ho ještě ten den zveřejní.`,
              `<b>Sepiš soupisku, včetně agentů.</b> Každá opakovaná práce má jednoho vlastníka. Seznam ať navrhne agent z toho, co může číst; rozhodnou lidé.`,
              `<b>Zapiš north star a připni ho tam, kde ho agent přečte.</b> Ambiciózní a měřitelný cíl, který stanoví lidé.`
            ] },
            { t: "h", x: "Rozjeď spolupráci" },
            { t: "steps", items: [
              `<b>Na začátek jedna viditelná práce.</b> Třeba ranní přehled (briefing) pro celý tým. První dny ho kontroluje člověk a dává agentovi zpětnou vazbu.`,
              `<b>Kontroly pro agenty.</b> Ke každému úkolu hodnoticí kritéria, jak vypadá „splněno“. Tak důvěra mezi lidmi a agenty roste nejrychleji.`,
              `<b>Důvěru rozšiřuj po krocích, pro každý druh úkolu zvlášť.</b> Když agent jeden druh úkolu několikrát po sobě zvládne dobře, smí na něm víc.`,
              `<b>Nauč agenta váš způsob práce.</b> Co vysvětluješ podruhé, sepiš jako instrukci pro agenta.`,
              `<b>Týdenní retrospektiva.</b> Lidé i agenti řeknou, co funguje a co upravit. Agenti si závěry uloží, aby je později mohli použít i jiní agenti.`
            ] },
            { t: "ex", title: "Ukázka: první viditelná práce agenta", turns: [
              { who: "ai", label: "Agent v týmovém kanálu", text: `Ranní přehled, úterý
• Včera rozhodnuto: termín vydání zůstává konec měsíce (pondělní porada).
• Dnes: Petr dokončuje platby, Eva posílá texty ke kontrole.
• Riziko: specifikace notifikací zatím nemá vlastníka.` },
              { who: "user", label: "Jana, kontroluje přehled", text: `Dobré. Rizika dávej příště nahoru a u každého bodu uveď, odkud ho máš.` }
            ], note: `Přehled vidí celý tým, takže odpovídá na otázky, které by se jinak každý ptal zvlášť (vzpomeň na cvičení z první lekce). Až stejnou připomínku dáš podruhé, udělej z ní písemnou instrukci.` },
            { t: "info", h: `Originál stojí na článku <b>Building effective human-agent teams</b> a doporučuje i příběh, jak týmy ve firmě Slack začínaly v malém. V Akademii navazují kurzy <b>Schopnosti a limity AI</b>, <b>AI zběhlost: rámec 4D</b> (Delegace, Popis, Rozlišování, Zodpovědnost: návyky, které každý přinese do sdíleného prostoru) a pro technické týmy <b>Úvod do agent skills</b>.` },
            { t: "key", h: `Většina těchto postupů byla zdravým týmovým návykem dávno před agenty. Agenti jen zdražují jejich vynechání.` }
          ],
          quiz: [
            { q: "Jak má vypadat první pokus s multiplayer agentem?", o: ["Jeden společný prostor, tři až pět lidí s vysokou vzájemnou důvěrou a jeden agent", "Celá firma najednou, ať se to rychle rozšíří", "Každý člověk si nastaví vlastního agenta"], a: 0, why: "Začni brzy, ale v malém: malý tým se společným projektem a jeden sdílený agent." },
            { q: "Co originál doporučuje jako první viditelnou práci pro agenta?", o: ["Schvalování rozpočtu", "Výběr nových kolegů", "Ranní přehled sdílený s celým týmem, který první dny kontroluje člověk"], a: 2, why: "Ranní přehled vidí všichni a zpětná vazba od člověka ho rychle zlepšuje." },
            { q: "Kdy rozšířit, co agent smí u určitého druhu úkolu?", o: ["Po prvním úspěšném pokusu na jakémkoli úkolu", "Když ten druh úkolu několikrát po sobě zvládne dobře", "Nikdy, rozsah se nemá měnit"], a: 1, why: "Důvěra se rozšiřuje po krocích a zvlášť pro každý druh úkolu, podle prokázané spolehlivosti." }
          ],
          cards: [
            { f: "Start v malém", b: "Jeden společný prostor, tři až pět lidí, jeden agent, společný projekt a vysoká důvěra v týmu." },
            { f: "Kdy psát instrukce pro agenta", b: "Když stejnou věc vysvětluješ podruhé, udělej z ní písemnou instrukci." },
            { f: "Týdenní retrospektiva", b: "Lidé i agenti řeknou, co funguje a co upravit; agenti závěry uloží, aby je mohli použít i další agenti." }
          ],
          terms: []
        }
      ]
    }
  ]
});
