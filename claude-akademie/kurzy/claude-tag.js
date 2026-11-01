/* Kurz: Úvod do Claude Tag (podle academy.claude.com/courses/introduction-to-claude-tag) */
AKADEMIE.add({
  id: "claude-tag",
  emoji: "🏷️",
  title: "Úvod do Claude Tag",
  category: "produkty",
  level: "Začátečník, pro týmy ve Slacku",
  desc: "Claude Tag (beta) přináší Claude do týmového Slacku: kde mu předat práci, jak ho řídit a opravovat a jaké návyky pomohou týmu dostat z něj víc.",
  source: "https://academy.claude.com/courses/introduction-to-claude-tag",
  modules: [
    {
      title: "Začínáme s Claude Tag",
      lessons: [
        {
          id: "tag-01",
          title: "Označ Claude a uvidíš, co umí",
          minutes: 5,
          lead: `Claude Tag je Claude ve slackovém workspace tvého týmu. V kanálu napíšeš @Claude a co potřebuješ, a Claude odpoví ve vlákně pod tvou zprávou. Pozadí mu vysvětlovat nemusíš, kanál si přečte sám.`,
          blocks: [
            { t: "p", h: `Claude si nejdřív přečte, co už v kanálu je. Pokud tým ke kanálu připojil nástroje (Google Drive, kalendář, ticketovací systém), umí v nich dohledávat i měnit. Vlákno vidí všichni v kanálu a kdokoli do něj může napsat, doplnit detail nebo změnit, co Claude dělá. Protože Claude v kanálu „bydlí“, umí pracovat i tehdy, když ho nikdo neoznačí:` },
            { t: "ul", items: [
              `<b>Odpovědi bez označení</b> (untagged replies): v kanálu s požadavky, třeba IT podpora nebo hlášení chyb, mu jednou řekneš, které zprávy má řešit. Pak na každou novou odpoví sám: zodpoví otázku, doptá se na chybějící detaily nebo označí správného vlastníka.`,
              `<b>Stálá odpovědnost</b>: Claude se dny až týdny stará o nějakou věc, třeba udržuje aktuální checklist spuštění a dá vědět, když něco sklouzne.`,
              `<b>Rutiny</b> (routines): úkol popíšeš jednou, třeba „každé pondělí v 9:00 pošli shrnutí kanálu“, a Claude ho podle rozvrhu opakuje.`
            ] },
            { t: "h", x: "Čím se liší od chatu s Claude" },
            { t: "ul", items: [
              `<b>Startuje s kontextem týmu.</b> Čte historii kanálu, soubory a připojené nástroje, takže ho nemusíš tolik zaučovat. Z kontextu a zpětné vazby se postupně zlepšuje.`,
              `<b>Pracuje s ním celý tým.</b> Kdokoli v kanálu může přidat kontext nebo práci přesměrovat, navázat tam, kde jsi skončil/a, a noví kolegové s ním můžou začít hned.`,
              `<b>Pracuje dál, i když zavřeš notebook.</b> Běží vzdáleně, ne na tvém zařízení. Průběh píše do vlákna a ptá se tam, když potřebuje rozhodnutí.`
            ] },
            { t: "ex", title: "Ukázka: jedna zpráva předá celou práci", turns: [
              { who: "user", label: "Dana", text: `Dodavatel posunul přechod na SSO na 18.` },
              { who: "user", label: "Sam", text: `Tím se QA dostane do týdne spuštění. Plán, tickety i stavová stránka se musí posunout.` },
              { who: "user", text: `@Claude přepracuj plán spuštění podle nového data SSO: posuň všechny milníky, které na něm závisí, aktualizuj QA tickety v trackeru a nový plán sem pošli i s tím, koho se to týká.` },
              { who: "ai", label: "Claude (plán, odškrtává průběžně)", text: `👀\n☑ Přečíst plán spuštění a vlákna kanálu\n☑ Posunout čtyři milníky závislé na SSO\n☑ Aktualizovat QA tickety v trackeru\n☑ Poslat nový plán sem` },
              { who: "ai", text: `Nový plán v příloze. Posouvají se čtyři milníky; spuštění 25. platí, pokud QA začne 19. Šest QA ticketů má nová data. Týká se to dokumentace a podpory: jejich revize se teď překrývají, v plánu je to označené.` },
              { who: "user", text: `Podpora potvrdila, že udrží původní termín. Nech jim ho.` },
              { who: "ai", text: `Hotovo. Podpora zůstává na 20.; plán i jejich ticket jsou aktualizované.` }
            ], note: `Reakce 👀 znamená, že Claude začal. Odpovídá ve vlákně, které vidí celý kanál. Na doplnění ve vlákně reaguje <b>bez nového označení</b>. Pod každou jeho odpovědí je odkaz <b>Configure</b>, který otevře nastavení kanálu.` },
            { t: "h", x: "Co umí i bez připojených nástrojů" },
            { t: "ul", items: [
              `<b>Čte, co má před sebou:</b> celý kanál, včetně zpráv z doby, než ho přidali, a soubory, obrázky a odkazy, které lidé sdílejí.`,
              `<b>Hledá i mimo kanál:</b> ve veřejných kanálech workspace, když ho na ně nasměruješ, a na webu.`,
              `<b>Tvoří víc než text:</b> grafy, dokumenty, stránky. Když se odpověď nevejde do zprávy, publikuje ji jako stránku (dashboard, report, prezentaci) a pošle odkaz. Otevře ho kdokoli v kanálu a Claude na požádání aktualizuje stránku na stejném odkazu.`
            ] },
            { t: "table", head: ["Kde", "Pro koho"], rows: [
              ["DM (přímá zpráva)", "Jen ty a Claude (lekce 2)"],
              ["Veřejný kanál", "Kdokoli z týmu (lekce 3)"],
              ["Soukromý kanál", "Určitá skupina (lekce 4)"]
            ] },
            { t: "key", title: "Tři návyky, které provází celý kurz", h: `<b>Pracuj s ním jako s kolegou:</b> ptej se tam, kde by ses ptal/a člověka, a dávej mu skutečnou práci. <b>Pracuj tam, kde pracuje tým:</b> práce zůstává v kanálu, kam patří. <b>Důvěru rozšiřuj postupně:</b> když jsou výsledky na jednom typu úkolů spolehlivé, nech ho dělat víc samostatně.` },
            { t: "tip", title: "Vyzkoušej", h: `V kanálu, kde pracuješ, napiš <code>/invite @Claude</code> a pak se ho zeptej na něco z nedávné práce kanálu. Když neodpoví nebo dostaneš hlášku o přístupu, požádej toho, kdo u vás Claude Tag spravuje (některé organizace ho omezují na určité role).` }
          ],
          quiz: [
            { q: "Kde Claude odpoví, když ho v kanálu označíš?", o: ["V soukromé zprávě tomu, kdo ho označil", "Ve vlákně pod tvou zprávou, které vidí celý kanál", "V novém kanálu, který si sám založí"], a: 1, why: "Odpověď jde do vlákna, takže ji vidí a můžou do ní vstoupit všichni v kanálu." },
            { q: "Jak změníš směr práce, kterou Claude ve vlákně dělá?", o: ["Odpovíš ve vlákně; nové označení není potřeba", "Smažeš jeho odpověď a zeptáš se znovu", "Musíš ho označit v novém vlákně"], a: 0, why: "Claude čte každou odpověď ve vlákně, takže doplnění nebo změnu stačí napsat tam." },
            { q: "Co Claude Tag umí bez jakýchkoli připojených nástrojů?", o: ["Nic, bez nástrojů jen pozdraví", "Jen odpovídat z obecných znalostí", "Číst kanál a sdílené soubory, hledat ve veřejných kanálech a na webu, tvořit grafy a stránky"], a: 2, why: "I bez nástrojů má kontext kanálu, hledání a umí publikovat výstupy jako stránky." }
          ],
          cards: [
            { f: "Claude Tag", b: "Claude ve Slacku týmu: @Claude v kanálu → odpověď ve vlákně, s kontextem kanálu a jeho připojenými nástroji." },
            { f: "Tři rozdíly proti chatu", b: "Startuje s kontextem týmu; pracuje s ním celý tým; pracuje dál, i když se odhlásíš." },
            { f: "Tři místa pro práci", b: "DM, veřejný kanál, soukromý kanál. Claude je všude stejný; liší se, kdo se zapojí, k čemu má přístup a kam ukládá, co se naučí." }
          ],
          terms: []
        },
        {
          id: "tag-02",
          title: "Claude v DM",
          minutes: 5,
          lead: `V DM pracuje Claude jako tvoje prodloužená ruka: pod tvým účtem, s tvými konektory a na věcech, které uvidíš jen ty. Je to i nejsnazší místo, kde si věci vyzkoušet.`,
          blocks: [
            { t: "p", h: `Když chceš, aby Claude jednal pod tvým účtem, ve tvých nástrojích a na práci jen pro tebe, začni v DM. V kanálu pracuje pod vlastním jménem (lekce 3).` },
            { t: "h", x: "Co v DM můžeš" },
            { t: "ul", items: [
              `<b>Nechat Claude pracovat za tebe:</b> běží na tvém účtu Claude s tvými konektory, takže čte tvůj kalendář, e-mail a soubory.`,
              `<b>Zkoušet věci v soukromí:</b> vypilovat koncept dřív, než ho kdokoli uvidí, nebo se zeptat na něco, co nechceš psát do kanálu.`,
              `<b>Dohnat veřejný kanál:</b> pojmenuješ ho a Claude ho prohledá, aniž bys tam cokoli psal/a.`,
              `<b>Nastavit si rutiny:</b> třeba ranní přehled, který chodí jen tobě.`
            ] },
            { t: "p", h: `Claude v DM čerpá z tvých denních nástrojů (přes <b>tvoje vlastní konektory</b>), z kteréhokoli veřejného kanálu workspace, když ho pojmenuješ, a z toho, co přineseš: přílohy, obrázky, vložený text. Typický požadavek: „Vytáhni, co #acme-renewal tento měsíc rozhodl, moje poslední e-maily s jejich týmem a můj kalendář na tento týden, a řekni mi, s jakými otevřenými otázkami mám na schůzku přijít.“ Na začátek se ho klidně zeptej přímo: „Co o mně víš a s čím mi v práci můžeš pomoct?“ nebo „K čemu máš odsud přístup?“` },
            { t: "h", x: "Soukromí: Claude jedná tvým jménem" },
            { t: "ul", items: [
              `<b>Co se tu naučí, zůstává v DM.</b> Nikdy se to nepřidá do poznámek, které Claude sdílí napříč workspace.`,
              `<b>Konektory používá jen na to, o co požádáš.</b> Kterýkoli můžeš odpojit v nastavení konektorů svého účtu Claude.`,
              `<b>Co udělá ve tvých nástrojích, je udělané tvým jménem.</b> Než ho necháš něco odeslat nebo změnit, zkontroluj to.`,
              `<b>DM nevidí žádný kanál.</b> Nic odsud se nedostane do kanálů týmu a propojení kanálu zůstávají v kanálu.`
            ] },
            { t: "warn", title: "Kdy raději kanál", h: `Práci v DM nikdo jiný nevidí: kolega nemůže doplnit, co ví, opravit odpověď ani úkol převzít. Když výsledek vložíš do kanálu později, oprava proběhne tam, kde se z ní Claude nepoučí. Nástroje připojené ke kanálu (CRM, tracker) tu nejsou, takže otázky na ně dostanou chudší odpovědi. A preference uložená v DM ovlivní jen tvoje DM. Když na čemkoli z toho záleží, ptej se v kanálu.` },
            { t: "ex", title: "Ukázka: ranní přehled jako rutina", turns: [
              { who: "user", text: `@Claude prohledej workspace a řekni mi, co najdeš o mně, mé práci a mých prioritách, a pak navrhni kanály, které bys pro mě měl sledovat.` },
              { who: "ai", text: `(Vrátí navržený seznam kanálů ke sledování.)` },
              { who: "user", text: `@Claude každý pracovní den v 8:00 mi sem pošli ranní přehled, neutrálním tónem. Sleduj #sales-requests a #launch-q4 a řekni mi, co z nich potřebuju vědět. U kanálů, kde jsem aktivní, vypiš, co čeká na mě, podle naléhavosti. Ke každé zprávě, na kterou dlužím odpověď, napiš návrh. Když nebude nic důležitého, přehled ten den vynech. Začni dvouřádkovým shrnutím, pak odrážky; na detaily odkazuj, neopakuj je.` }
            ], note: `Požadavek říká <b>kdy</b> přehled přijde, <b>co sledovat</b> a <b>co přinést zpět</b>. Až dorazí první, odpověz v jeho vlákně, co by ho zlepšilo: formát („přehledněji, vždy s odkazy“), co sledovat v čase, nebo co upřednostnit. Pak Claude požádej, ať rutinu upraví.` }
          ],
          quiz: [
            { q: "Pod čím Claude v DM pracuje?", o: ["Pod tvým účtem Claude, s tvými konektory", "Pod svým vlastním účtem s nástroji kanálu", "Anonymně, bez přístupu k nástrojům"], a: 0, why: "V DM je Claude tvoje prodloužená ruka: tvůj účet, tvoje konektory, tvoje jméno." },
            { q: "Kam se uloží, co se Claude naučí v DM?", o: ["Do poznámek workspace, aby to věděli všichni", "Jen do toho DM, nikdy do poznámek sdílených napříč workspace", "Do poznámek všech kanálů, kde jsi členem"], a: 1, why: "Paměť z DM je dostupná jen tobě." },
            { q: "Proč DM není dobré místo pro práci, kterou by využil celý tým?", o: ["Claude je v DM pomalejší", "Claude v DM neumí hledat", "Nikdo jiný ji neuvidí, neopraví ani nepřevezme a nástroje kanálu tu nejsou"], a: 2, why: "DM drží práci u tebe. To je jeho smysl i jeho limit." }
          ],
          cards: [
            { f: "Claude v DM", b: "Tvůj účet a tvoje konektory (kalendář, e-mail, soubory). Výsledek vidíš jen ty a co se Claude naučí, zůstává v DM." },
            { f: "Požadavek na ranní přehled", b: "Kdy (dny a čas), co sledovat, co přinést zpět. První přehled doladíš odpovědí v jeho vlákně." }
          ],
          terms: []
        },
        {
          id: "tag-03",
          title: "Claude ve veřejném kanálu",
          minutes: 6,
          lead: `Ve veřejném kanálu má Claude po ruce nástroje týmu a práci vidí, opravují a posouvají všichni. Co se tam naučí, pomáhá celému kanálu, takže když se hodí víc míst, vyber tohle.`,
          blocks: [
            { t: "p", h: `Navíc k tomu, co Claude umí kdekoli (lekce 1), vidí celou historii kanálu, včetně zpráv z doby před svým přidáním, a může používat nástroje připojené ke kanálu. Proti DM se mění tři věci:` },
            { t: "table", head: ["Oblast", "Ve veřejném kanálu"], rows: [
              ["Spolupráce", "Kolegové ho označí do probíhající diskuse, řídí ho společně nebo navážou na cizí práci. Víc lidí s ním může pracovat souběžně: každé nové vlákno je samostatná práce. Se zapnutými odpověďmi bez označení se zapojí i bez @-zmínky (lekce 7)."],
              ["Nástroje", "Čte a pracuje v nástrojích připojených ke kanálu, takže úkol skončí ve vlákně, kde vznikl. Na tvoje požadavky může použít i tvoje osobní konektory."],
              ["Paměť", "Pro každý kanál si vede <b>poznámky kanálu</b> (channel notes); rozhodnutí a opravy, které uloží, zlepšují jeho další práci tady. Z veřejného kanálu umí uložit i <b>poznámku workspace</b> (třeba firemní pravidlo pojmenování), kterou použije ve všech kanálech."]
            ] },
            { t: "h", x: "Propojení: nástroje týmu" },
            { t: "p", h: `Kanál může být propojený s nástroji, které tým už používá, třeba GitHub, Google Drive, CRM nebo týmový kalendář. Těmto propojením se říká <b>connections</b> a nastavuje je ten, kdo pro kanál spravuje Claude Tag. Fungují stejně pro každého, kdo se v kanálu ptá; ve výchozím stavu k označení Claude v kanálu nepotřebuješ vlastní účet Claude, práci hradí organizace. Příklady: <b>obchod</b> nechá před hovorem vytáhnout účet z CRM, <b>data</b> spustí dotaz do datového skladu, <b>podpora</b> nechá navrhnout odpověď na ticket, <b>vývoj</b> otevře pull request s opravou, na které se tým shodl. V těchto nástrojích jedná Claude sám za sebe, pod vlastním účtem a s přístupem, který kanál dostal.` },
            { t: "ex", title: "Ukázka: finance před rozpočtovou poradou (#finance, připojený datový sklad)", turns: [
              { who: "user", label: "Marcus", text: `Rozpočtová porada je ve čtvrtek. Potřebuju do té doby srpen.` },
              { who: "user", label: "Jordan", text: `Faktura za srpen dorazila. Compute je výrazně nad červencem.` },
              { who: "user", label: "Marcus", text: `@Claude proč minulý měsíc vyskočily náklady na cloud? Pošli graf a dva největší vlivy.` },
              { who: "ai", text: `Srpen je o 18 % nad červencem. Dva vlivy: compute datové pipeline a změna retence úložiště. [graf: náklady na cloud po měsících]` },
              { who: "user", label: "Jordan", text: `Změna retence byla plánovaná. Ukaž trend bez ní.` },
              { who: "ai", text: `Bez ní: nárůst 13 %, celý připadá na compute pipeline. Graf výše je aktualizovaný.` },
              { who: "user", label: "Marcus", text: `@Claude udělej z toho jednostránkovou poznámku na čtvrtek a tenhle graf sem posílej první pondělí každého měsíce.` },
              { who: "ai", text: `Poznámka v příloze. Naplánováno: graf nákladů, první pondělí v měsíci, v tomto kanálu.` }
            ], note: `Claude si dotaz do skladu spustil sám. Kolega práci upřesnil <b>bez označení</b> a z vlákna vznikl dokument i rutina (lekce 8).` },
            { t: "h", x: "Tvoje osobní konektory, pro tvoje požadavky" },
            { t: "p", h: `Když tvůj požadavek v kanálu potřebuje konektor z tvého vlastního účtu Claude (kalendář, schránka, issue tracker), Claude ho může použít, pokud to vaše organizace má k dispozici. Napíšeš třeba „@Claude přidej čtvrteční launch review do mého kalendáře“. V těch nástrojích pak pracuje <b>tvým jménem</b> a nejdřív ti ukáže výzvu, kterou vidíš jen ty:` },
            { t: "table", head: ["Volba", "Co se stane"], rows: [
              ["<b>Allow</b>", "Claude posílá odpovědi rovnou. Každou nejdřív zkontroluje a ty, které vypadají citlivě, podrží k tvé kontrole. Kontrola může něco přehlédnout."],
              ["<b>Allow with review</b>", "Každou odpověď ti ukáže ke schválení, než ji pošle."],
              ["<b>Don't allow</b>", "Na tento požadavek tvoje konektory nepoužije."]
            ] },
            { t: "warn", title: "Čí přístup Claude používá", h: `V týmovém propojení smí Claude jen to, co dovoluje jeho vlastní účet v nástroji (nastavuje ho admin), a jeho kroky jsou vidět pod účtem Claude, ne pod tvým jménem. Kdokoli v kanálu ho může použít se stejnou úrovní přístupu. Osobní konektory slouží jen tvým požadavkům a nikdo jiný ve vlákně tu práci neřídí; úkol s nimi zastavíš tlačítkem <b>Stop</b>. Do cizích soukromých kanálů a DM odsud Claude nevidí. Výsledek ale vidí celý kanál, takže citlivé věci patří do soukromého kanálu a práce jen pro tebe do DM. Na plánu Enterprise může Owner organizace jednu z voleb Allow odebrat.` },
            { t: "tip", title: "Vyzkoušej", h: `Zeptej se „@Claude what can you access from this channel?“ (k čemu máš z tohoto kanálu přístup), vyber jeden nástroj a nech Claude vytáhnout jeden skutečný záznam s odkazem na zdroj. Porovnej ho se zdrojem: je aktuální, nic nechybí, uvádí odkud co je? Když něco nesedí, napiš to do vlákna.` }
          ],
          quiz: [
            { q: "Kdo rozhoduje, které nástroje jsou připojené ke kanálu?", o: ["Kdokoli, kdo Claude v kanálu označí", "Claude sám podle potřeby", "Ten, kdo pro kanál spravuje Claude Tag"], a: 2, why: "Propojení (connections) nastavuje správce Claude Tag a fungují stejně pro každého v kanálu." },
            { q: "Pod čím Claude jedná v týmovém propojení?", o: ["Pod vlastním účtem, s přístupem, který kanál dostal", "Pod jménem toho, kdo ho označil", "Pod účtem admina"], a: 0, why: "V connections jedná Claude sám za sebe, takže tým vidí, kdo co udělal." },
            { q: "Co znamená volba Allow with review u osobních konektorů?", o: ["Claude tvoje konektory nepoužije", "Každou odpověď ti před odesláním ukáže ke schválení", "Claude posílá odpovědi rovnou a nic nekontroluje"], a: 1, why: "S volbou Allow with review se nic nepošle, dokud to neschválíš." }
          ],
          cards: [
            { f: "Veřejný kanál", b: "Práce týmu: ostatní ji řídí, nástroje kanálu jsou po ruce a co se Claude naučí, pomáhá všem v kanálu." },
            { f: "Connection vs. osobní konektor", b: "Connection: nástroj kanálu, Claude jedná pod svým účtem pro kohokoli v kanálu. Osobní konektor: tvůj účet, jedná tvým jménem jen pro tvé požadavky a po tvém svolení." },
            { f: "Allow / Allow with review / Don't allow", b: "Posílat rovnou (citlivé podrží) / každou odpověď schválit / konektory nepoužít." }
          ],
          terms: [
            { t: "Connection (Claude Tag)", d: "Nástroj připojený ke slackovému kanálu (CRM, Drive, tracker…). Claude v něm jedná pod vlastním účtem s přístupem, který kanál dostal, pro kohokoli v kanálu." }
          ]
        },
        {
          id: "tag-04",
          title: "Claude v soukromém kanálu",
          minutes: 4,
          lead: `Hranice soukromého kanálu platí pro Claude stejně jako pro lidi. Je to stejná týmová práce jako ve veřejném kanálu, jen pro členy.`,
          blocks: [
            { t: "p", h: `Část práce obsahuje informace jen pro určité lidi: personální věci, finance, právní agendu nebo eskalaci zákazníka s důvěrnými detaily. Tu už držíš v soukromém kanálu a Claude drží stejnou hranici.` },
            { t: "ul", items: [
              `<b>Stejná práce, jen pro členy:</b> vše z lekce 3 tu funguje pro členy kanálu: vlákna, která kdokoli ze skupiny opraví nebo převezme, historie a připojené nástroje, odpovědi bez označení i rutiny.`,
              `<b>Nástroje jen pro členy:</b> nástroj jde připojit jen k tomuto kanálu, třeba fakturační systém k soukromému finančnímu kanálu. Claude smí jen to, co dovolí účet vytvořený pro něj, a ten má mít nejmenší přístup, který práce potřebuje.`,
              `<b>Co už Claude naučil workspace:</b> kanál využívá poznámky workspace uložené ve veřejných kanálech, ale nic do nich nepřidává.`
            ] },
            { t: "h", x: "Hranice kanálu je hranice Claude" },
            { t: "ul", items: [
              `<b>Číst a jednat tu ho nechají jen členové.</b> Z jiného kanálu nebo DM se Claude chová, jako by tento kanál, jeho nástroje a paměť neexistovaly. Jeho odpovědi tady vidí jen členové.`,
              `<b>Co se tu naučí, ukládá jen sem.</b> Do poznámek tohoto kanálu, nikdy do poznámek workspace, takže důvěrný kontext nevyplave v cizím kanálu.`,
              `<b>Každá akce je dohledatelná.</b> V připojených nástrojích jedná Claude pod vlastním účtem, takže log nástroje ukáže, co a kdy udělal.`,
              `<b>Hosté a sdílené kanály řeší admin.</b> Jestli Claude odpovídá v kanálu s hosty nebo v kanálu sdíleném s jinou firmou, je nastavení admina. Kde odpovídá, drží se kanálu a zbytek workspace odsud neprohledává.`
            ] },
            { t: "warn", title: "Seznam členů je seznam přístupů", h: `Co smí číst účet nástroje připojeného k soukromému kanálu, je přes Claude dostupné <b>každému členovi</b>. Drž proto seznam členů úzký.` },
            { t: "ex", title: "Ukázka: citlivá práce v #people-ops (soukromý, 4 členové)", turns: [
              { who: "user", text: `@Claude napiš dopis o úpravě mzdy pro J. Rivera podle platového pásma, které jsme nastavili minulý týden.` },
              { who: "ai", text: `(Připraví návrh dopisu podle pásma z minulého týdne.)` },
              { who: "user", label: "Ana", text: `Použij upravené pásmo, v pátek jsme ho změnili.` },
              { who: "ai", text: `(Upraví dopis podle nového pásma.)` }
            ], note: `Mzdu jednoho člověka vidí jen členové people-ops, a přitom jsou tu lidé, kteří pásmo nastavili a dopis umí opravit. V DM by to zůstalo soukromé, ale Ana by nemohla říct, že se pásmo v pátek změnilo. Ve veřejném kanálu by mzdu četli všichni.` },
            { t: "tip", title: "Vyzkoušej", h: `Vyber opakovaný citlivý úkol, přidej Claude do jeho soukromého kanálu (<code>/invite @Claude</code>), zeptej se, k čemu má z kanálu přístup, a úkol spusť. Hotovo je, když odpověď vidí jen tento kanál a používá jen to, co kanál obsahuje.` }
          ],
          quiz: [
            { q: "Kam Claude uloží, co se naučí v soukromém kanálu?", o: ["Jen do poznámek tohoto kanálu", "Do poznámek workspace, aby to věděli všichni", "Do DM toho, kdo ho o to požádal"], a: 0, why: "Ze soukromého kanálu Claude nikdy neukládá do poznámek workspace, takže důvěrný kontext nevyplave jinde." },
            { q: "Co platí pro nástroj připojený k soukromému kanálu?", o: ["Přes Claude ho může použít kdokoli ve workspace", "Co smí jeho účet číst, je přes Claude dostupné každému členovi kanálu", "Claude ho používá jménem toho, kdo se ptá"], a: 1, why: "Proto je seznam členů zároveň seznamem přístupů a má být úzký." },
            { q: "Ptáš se Claude z jiného kanálu na obsah soukromého kanálu. Jak se zachová?", o: ["Shrne ho bez citlivých detailů", "Odpoví, protože jsi členem", "Chová se, jako by ten kanál, jeho nástroje a paměť neexistovaly"], a: 2, why: "Mimo soukromý kanál pro Claude jeho obsah neexistuje." }
          ],
          cards: [
            { f: "Soukromý kanál", b: "Stejná práce jako ve veřejném, jen pro členy. Hranice kanálu je hranice Claude; co se tu naučí, zůstává tu." },
            { f: "Seznam členů = seznam přístupů", b: "Co smí účet nástroje připojeného ke kanálu, je přes Claude dostupné každému členovi. Drž seznam úzký." }
          ],
          terms: [
            { t: "Poznámky workspace (workspace notes)", d: "Paměť Claude Tag platná ve všech kanálech workspace. Claude do ní ukládá jen z veřejných kanálů a jen věci, které mohou vědět všichni (např. firemní pravidlo pojmenování)." }
          ]
        },
        {
          id: "tag-05",
          title: "Vyber pro práci správné místo",
          minutes: 4,
          lead: `Ptej se Claude tam, kde by ses ptal/a kolegy. Když se hodí víc míst, vyber veřejný kanál.`,
          blocks: [
            { t: "p", h: `Claude sedí ve workspace jako kterýkoli kolega, takže místo vybíráš stejně. Co bys kolegovi napsal/a do DM, napiš Claude do DM. Co je pro určitou skupinu, patří do jejího soukromého kanálu. Co by mohl využít kdokoli z týmu, patří do veřejného kanálu, kde ta práce probíhá. Místo mění i to, kdo z odpovědi a z tvých oprav má užitek.` },
            { t: "steps", items: [
              `<b>Je práce jen pro tebe a nepotřebuje nástroje týmu?</b> Patří do <b>DM</b>.`,
              `<b>Jinak se zeptej: musí zůstat jen pro určité lidi?</b> Pokud ne, patří do <b>veřejného kanálu</b> (doporučeno).`,
              `<b>Pokud ano, pro skupinu:</b> patří do <b>soukromého kanálu</b>, případně do kanálu jen s tebou a Claude.`
            ] },
            { t: "table", head: ["Místo", "Kdo vidí", "Nástroje", "Co se Claude naučí"], rows: [
              ["DM", "Jen ty", "Vždy tvoje vlastní", "Platí jen v tomto DM"],
              ["Veřejný kanál", "Všichni v kanálu, můžou navázat", "Nástroje týmu a tvoje osobní konektory, kde jsou dostupné", "Pomáhá všem v kanálu"],
              ["Soukromý kanál", "Jen členové", "Nástroje kanálu a tvoje osobní konektory, kde jsou dostupné", "Platí jen v tomto kanálu"]
            ] },
            { t: "h", x: "Proč je výchozí volbou veřejný kanál" },
            { t: "ul", items: [
              `<b>Ostatní na práci navážou:</b> kolega doplní kontext, který jsi neměl/a, opraví detail nebo úkol převezme, když jsi pryč. Claude čte každou takovou odpověď.`,
              `<b>Co se Claude naučí, pomáhá celému kanálu:</b> oprava uložená ve veřejném kanálu jde do poznámek kanálu a Claude z nich čerpá pro všechny.`,
              `<b>Nastavení jednou slouží všem:</b> připojené nástroje, instrukce i rutiny kanálu fungují pro každého. Každé doplnění zkracuje další požadavek a zlepšuje výsledek.`
            ] },
            { t: "table", head: ["Požadavek", "Kam", "Proč"], rows: [
              ["„Které účty se obnovují v říjnu a kdo je vlastní?“", "#sales-team (veřejný)", "Lidé, kteří obnovy vlastní, seznam zkontrolují. Když kolega doplní účet, Claude to v dalších vláknech ví."],
              ["„Pomoz mi připravit zítřejší 1:1: co mám v kalendáři, moje otevřená vlákna a co jsem slíbil/a dokončit.“", "DM", "Jde o tvou vlastní práci, do kanálů nepatří."],
              ["„Napiš dopis o úpravě mzdy pro J. Rivera podle pásma z minulého týdne.“", "#people-ops (soukromý)", "Je to soukromé a jsou tu lidé, kteří pásmo nastavili."],
              ["„Shrň, co se tento týden změnilo v návrhu cen na Q3 a co je ještě otevřené.“", "#sales-team (veřejný)", "Autoři návrhu shrnutí opraví a tým ho využije."]
            ] },
            { t: "ex", title: "Ukázka: co se stane dál ve veřejném kanálu", turns: [
              { who: "user", text: `@Claude shrň, co se tento týden změnilo v návrhu cen na Q3 a co je ještě otevřené.` },
              { who: "ai", text: `(Shrnutí změn a seznam otevřených bodů.)` },
              { who: "user", label: "Priya", text: `Partnerská sleva je rozhodnutá, ne otevřená.` },
              { who: "ai", label: "Claude, o týden později v novém vlákně", text: `(Už ví, že partnerská sleva je rozhodnutá.)` }
            ], note: `V DM by shrnutí Priya nikdy neviděla a sleva by zůstala chybně jako otevřená. V #analytics by kolegyně poradila zeptat se v #sales-team, kde návrh vzniká.` },
            { t: "tip", h: `Co platí přesně tam, kde jsi, zjistíš otázkou: „What can you access from here?“ (k čemu máš odsud přístup?).` }
          ],
          quiz: [
            { q: "Kam patří požadavek „Pomoz mi připravit zítřejší 1:1: co mám v kalendáři a co jsem slíbil/a dokončit“?", o: ["Do veřejného kanálu týmu", "Do DM s Claude", "Do soukromého kanálu people-ops"], a: 1, why: "Jde o tvou vlastní práci; v kanálu by tvou přípravu četli ostatní." },
            { q: "Proč je veřejný kanál výchozí volba, když se hodí víc míst?", o: ["Ostatní můžou práci opravit a navázat a co se Claude naučí, pomáhá celému kanálu", "Claude je tam rychlejší", "V DM Claude neumí používat nástroje"], a: 0, why: "Víc lidí práci zkontroluje a učení Claude slouží všem." },
            { q: "„Napiš dopis o úpravě mzdy pro J. Rivera podle pásma z minulého týdne.“ Kam s tím?", o: ["Do DM, ať je to soukromé", "Do #sales-team, ať to vidí víc lidí", "Do soukromého kanálu people-ops, kde jsou lidé, kteří pásmo nastavili"], a: 2, why: "Soukromé, ale se správnými lidmi, kteří dopis opraví. V DM by chyběla Ana s informací o změně pásma." }
          ],
          cards: [
            { f: "Kde se ptát Claude", b: "Tam, kde by ses ptal/a kolegy. Jen pro tebe → DM; pro skupinu → soukromý kanál; pro tým → veřejný kanál." },
            { f: "Když se hodí víc míst", b: "Veřejný kanál: víc lidí práci opraví a co se Claude naučí, pomáhá všem v kanálu." }
          ],
          terms: []
        }
      ]
    },
    {
      title: "Jak formovat práci Claude v kanálech",
      lessons: [
        {
          id: "tag-06",
          title: "Lepší práce díky paměti a instrukcím",
          minutes: 6,
          lead: `Když Claude opravíš, chceš, aby to platilo i příště. K tomu slouží dvě místa: paměť (poznámky, které si Claude vede) a instrukce kanálu (pravidla, která napíše člověk).`,
          blocks: [
            { t: "table", head: ["", "Paměť", "Instrukce kanálu"], rows: [
              ["Co to je", "Poznámky, které si Claude vede o kanálu", "Pravidla, která pro kanál napíše člověk"],
              ["Jak ji změníš", "Řekneš to Claude ve zprávě", "Upravíš stránku nastavení kanálu (Configure pod kteroukoli odpovědí Claude)"],
              ["K čemu", "Co Claude pochytí při práci: opravy, preference, kdo co vlastní", "Pravidla pro každé vlákno: účel kanálu, tón, kdy odpovídat, co nikdy nedělat"],
              ["Při rozporu", "Ustupuje", "Má přednost"]
            ] },
            { t: "h", x: "Paměť" },
            { t: "p", h: `Když Claude řekneš něco, co má platit i příště, uloží si poznámku; poznámky si ukládá i sám při práci. V dalších vláknech je čte, než odpoví. Kdokoli v kanálu může požádat o přidání, změnu nebo smazání. Poznámku přidáš větou typu <code>@Claude remember for this channel: …</code> (zapamatuj si pro tento kanál). <b>Poznámky kanálu</b> platí jen v kanálu, každý kanál má vlastní sadu a v DM jsou poznámky jen tvoje. <b>Poznámky workspace</b> platí ve všech kanálech; Claude je ukládá jen z veřejného kanálu a jen pro věci, které mají vědět všichni.` },
            { t: "ex", title: "Ukázka: oprava, která vydrží (#analytics)", turns: [
              { who: "user", label: "Sam", text: `kolik jsme měli minulý týden aktivních zákazníků?` },
              { who: "ai", text: `412 aktivních zákazníků, počítám každý účet, který se minulý týden přihlásil.` },
              { who: "user", label: "Priya", text: `Aktivní znamená, že ten týden použil aspoň jedno placené místo, ne že se přihlásil. To dává 287.` },
              { who: "ai", text: `Opraveno: 287 aktivních zákazníků.` },
              { who: "user", label: "Priya", text: `@Claude zapamatuj si pro tento kanál: aktivní zákazník ten týden použil aspoň jedno placené místo.` },
              { who: "ai", text: `Uloženo do poznámek kanálu.` },
              { who: "user", label: "Dana, o dva týdny později v novém vlákně", text: `aktivní zákazníci tento měsíc podle regionů?` },
              { who: "ai", text: `Podle definice uložené pro #analytics (aspoň jedno použité placené místo): 301 tento měsíc. EMEA 118 · AMER 142 · APAC 41.` }
            ], note: `Oprava ve vlákně opraví <b>jen to vlákno</b>. Teprve „zapamatuj si pro tento kanál“ ji uloží do poznámek, které platí pro každé další vlákno kanálu.` },
            { t: "ul", items: [
              `<b>Co si pamatuje:</b> „@Claude what do you remember about this channel?“ (co si pamatuješ o tomto kanálu?)`,
              `<b>Oprava:</b> „@Claude zapamatuj si pro tento kanál: [opravená verze]“`,
              `<b>Zastaralé:</b> „@Claude to už neplatí, zapomeň záznam o [téma].“`,
              `Owners (vlastníci) vaší organizace v Claude můžou poznámky kanálů i workspace prohlížet, upravovat a mazat v admin nastavení Claude Tag na claude.ai.`
            ] },
            { t: "h", x: "Instrukce kanálu" },
            { t: "p", h: `Instrukce kanálu napíše někdo z týmu do nastavení kanálu (odkaz <b>Configure</b> pod kteroukoli odpovědí Claude). Claude je čte na začátku každého vlákna. Hodí se na účel kanálu, na co odpovídat bez označení, tón a délku, z jakých zdrojů odpovídat a kam co zakládat. Obvykle je může upravit kdokoli v kanálu s účtem Claude ve vaší organizaci; admin může stránku zamknout. Změny platí pro <b>nová vlákna</b>, takže je testuj v čerstvém. Instrukce jsou vodítko, kterého se Claude pečlivě drží, ne pevný zámek: co se nesmí stát nikdy, zajisti nastavením nebo řízením přístupu, ne větou.` },
            { t: "ex", title: "Ukázka: instrukce pro kanál na třídění chyb", turns: [
              { who: "sys", label: "Instrukce kanálu", mono: true, text: `Tento kanál třídí hlášení chyb od zákazníků pro fakturační službu.
Když nová zpráva obsahuje ID chyby, založ vlákno:
- dohledej chybu v monitorovacím nástroji
- odkaž na dashboard
- navrhni vlastníka
Jinak mlč, pokud tě někdo neoznačí.
Odpovědi drž pod šest řádků; na logy odkazuj, nevkládej je.
Potvrzené chyby zakládej v trackeru se štítkem from-chat.
Vyšetřování je jen pro čtení; na produkci nikdy nesahej.` }
            ], note: `Účel, kdy reagovat bez označení, délka, kam zakládat a co nikdy nedělat. Přesně tohle do instrukcí patří.` },
            { t: "tip", title: "Nejdřív paměť, pak instrukce", h: `Pravidlo vyzkoušej rychle v paměti, třeba „odpovědi drž pod šest řádků“. Až se osvědčí a má platit v každém vlákně, přesuň ho do instrukcí kanálu. Když k nim nemáš práva, požádej správce Claude Tag pro kanál.` },
            { t: "table", head: ["Když vidíš", "Pravděpodobná příčina", "Co udělat"], rows: [
              ["Tenké, obecné odpovědi", "Claude nemá přístup k nástrojům, ve kterých je vaše práce", "Požádej správce o propojení s kanálem; tvoje požadavky můžou pokrýt i osobní konektory"],
              ["Odpovídá na věci, které má nechat být", "Nemá jasno, jaká je jeho práce v kanálu", "Dej mu práci (job) v instrukcích kanálu"],
              ["Stejná oprava se pořád opakuje", "Zazněla jen ve vlákně, ne jako pravidlo pro kanál", "Řekni „zapamatuj si pro tento kanál“"],
              ["V kanálu vůbec neodpovídá", "Není pro kanál zapnutý", "Požádej správce Claude Tag, ať ho tu zapne"]
            ] }
          ],
          quiz: [
            { q: "Poznámka v paměti a instrukce kanálu si odporují. Čím se Claude řídí?", o: ["Novější z nich", "Instrukcí kanálu", "Zeptá se ve vlákně"], a: 1, why: "Instrukce mají před pamětí přednost." },
            { q: "Odkud Claude ukládá poznámky workspace?", o: ["Jen z veřejného kanálu, a jen věci, které mají vědět všichni", "Z jakéhokoli kanálu včetně soukromých", "Z DM"], a: 0, why: "Poznámky workspace platí všude, proto jen z veřejných kanálů a jen neškodné věci." },
            { q: "Claude dělá pořád stejnou chybu, i když ho opravujete. Proč nejspíš?", o: ["Je zapomnětlivý a nedá se s tím nic dělat", "Chybí připojený nástroj", "Oprava zazněla jen ve vlákně; je potřeba říct „zapamatuj si pro tento kanál“"], a: 2, why: "Oprava ve vlákně platí jen pro to vlákno, do paměti ji uloží až výslovná žádost." }
          ],
          cards: [
            { f: "Paměť vs. instrukce kanálu", b: "Paměť: poznámky, které si Claude vede a které změníš zprávou. Instrukce: pravidla v nastavení kanálu (Configure), platí v každém vlákně a mají přednost." },
            { f: "Údržba paměti", b: "„Co si pamatuješ o tomto kanálu?“ · „Zapamatuj si pro tento kanál: [oprava]“ · „To už neplatí, zapomeň záznam o [téma].“" },
            { f: "Ladění výsledků", b: "Tenké odpovědi → chybí nástroje. Mluví, kam nemá → chybí job v instrukcích. Opakovaná oprava → zapamatuj si pro kanál. Mlčí → není zapnutý." }
          ],
          terms: [
            { t: "Poznámky kanálu (channel notes)", d: "Paměť Claude Tag pro jeden kanál: opravy, preference a rozhodnutí, které Claude čte, než odpoví v každém dalším vlákně kanálu." },
            { t: "Instrukce kanálu (channel instructions)", d: "Pravidla, která člověk napíše do nastavení slackového kanálu (Configure). Claude je čte na začátku každého vlákna a mají přednost před pamětí." }
          ]
        },
        {
          id: "tag-07",
          title: "Proaktivita: odpovědi bez označení",
          minutes: 6,
          lead: `Kanál s jednou prací udělá z Claude specialistu. A specialista se umí zapojit, i když ho nikdo neoznačí.`,
          blocks: [
            { t: "p", h: `Co Claude v kanálu ví, pochází z kanálu: z historie, uložených instrukcí a paměti a z připojených nástrojů. Když v kanálu držíš jeden druh práce a nástroje, které k ní patří, Claude se tu práci dobře naučí.` },
            { t: "cmp",
              bad: { lbl: "#general (bez dat)", h: `Otázka: „Proč je hrubá marže EMEA tento měsíc 3 body pod plánem?“<br>Claude: „Datový sklad ani plán tu nejsou připojené. Zeptej se v #fpa-monthly, kde jsou, a tam ti rozdíl rozložím.“` },
              good: { lbl: "#fpa-monthly (sklad, minulá vlákna, připnutý plán, poznámka kanálu)", h: `Stejná otázka.<br>Claude: „EMEA je na 61,2 % proti plánu 64,1 %. Rozdíl dělá hlavně FX hedging účtovaný do COGS od července (-1,6 b.), doprava nad plán (-0,9) a mix (-0,4). Ne ceny. Zdroje v odkazech.“` } },
            { t: "h", x: "Odpovědi bez označení" },
            { t: "p", h: `Claude čte kanál průběžně, takže pozná zprávu, na kterou umí odpovědět, nebo práci, kterou může vzít. Když jsou pro kanál zapnuté automatické odpovědi (nastavení <b>Respond automatically</b>), Claude každou zprávu zváží a rozhodne, jestli se zapojí. Užitečné je to hlavně v soustředěném kanálu: když je kanál o jedné práci, Claude pozná, které zprávy jsou jeho a které nechat být. A můžeš mu to říct přímo:` },
            { t: "ex", title: "Ukázka: řádek o tom, na co odpovídat", turns: [
              { who: "user", text: `@Claude zapamatuj si pro tento kanál: když někdo napíše název účtu nebo se ptá na otevřený bod, odpověz, i když tě nikdo neoznačil. Do plánování schůzek a společenského povídání se nezapojuj.` },
              { who: "ai", text: `(Uloží řádek do poznámek kanálu a bere ho v úvahu, když rozhoduje, jestli odpovědět.)` }
            ], note: `Přepínač automatických odpovědí rozhoduje jen o tom, <b>jestli</b> Claude smí promluvit. Co řekne, co vynechá a co udělá, když si není jistý, plyne z toho, co mu tým o jeho práci řekne.` },
            { t: "ul", items: [
              `<b>Kanál podpory nebo zpětné vazby:</b> Claude odpovídá na otázky z knowledge base kanálu a tazatel má odpověď hned, bez čekání na označení.`,
              `<b>Kanál s pravidly a postupy:</b> na „jaký je postup onboardingu?“ odpoví z dokumentu s pravidly.`,
              `<b>Projektový kanál:</b> najde, co se rozhodlo o API, a na „jak to ovlivní mobilní práci?“ propojí souvislosti.`,
              `<b>Kanál incidentů:</b> čte přicházející hlášení, všimne si vzorce a upozorní na něj.`
            ] },
            { t: "h", x: "Stálá odpovědnost" },
            { t: "p", h: `Claude můžeš dát i práci, kterou v kanálu vlastní. Místo čekání na dotaz pracuje k většímu cíli: sám rozhoduje, co je potřeba, a dny až týdny jedná. Typicky jde o <b>koordinaci</b> (launch nebo akce s mnoha vlákny: aktualizuje trackery, připomíná termíny, hlásí skluzy), <b>vlastnictví výsledku</b> (fronta mladší než den, migrace hotová do konce kvartálu: hýbe tím, co může, a rozhodnutí ti nosí s doporučením) nebo <b>kontinuitu</b> (práce na měsíce, kdy se lidé střídají: pamatuje si, co a proč se rozhodlo, a upozorní, když nový návrh odporuje dřívějšímu). Začni tím, že sepíšeš svůj standardní postup.` },
            { t: "ex", title: "Ukázka: předání práce v kanálu", turns: [
              { who: "user", text: `@Claude zapamatuj si pro tento kanál: od teď máš na starosti třídění požadavků na zakázky, které sem přijdou. U každého ho porovnej se záznamem účtu v CRM, označ toho, kdo má tento týden službu, a zapiš ho do trackeru požadavků s odkazem na vlákno. Když něco není jasné nebo si nejsi jistý, polož ve vlákně jednu upřesňující otázku a pak označ vedoucího týmu.` }
            ], note: `Claude uloží práci do poznámek kanálu. Až funguje tak, jak chceš, přidej ji přes Configure do instrukcí kanálu, které mají před pamětí přednost (lekce 6).` },
            { t: "table", head: ["Chceš", "Napiš"], rows: [
              ["Vypnout odpovědi bez označení v kanálu", "„@Claude only respond when someone @-mentions you.“ (odpovídej, jen když tě někdo @-zmíní). Mění Respond automatically pro všechny."],
              ["Zúžit, na co reaguje", "„@Claude odpovídej na otázky k našim rozhodnutím a práci. Plánování vynech.“ Upřesní to přes poznámky kanálu."],
              ["Ztišit jedno vlákno", "Ve vlákně „@Claude odpovídej jen, když tě @-zmíním“, nebo <code>!mute</code> (vrátí <code>!unmute</code>)."]
            ] }
          ],
          quiz: [
            { q: "Co ovládá nastavení Respond automatically?", o: ["Jen to, jestli Claude smí odpovídat bez označení", "Tón a délku jeho odpovědí", "Které nástroje může používat"], a: 0, why: "Co a kdy říct, plyne z toho, co mu tým o jeho práci řekne." },
            { q: "Claude v kanálu reaguje na standupy, které odpověď nepotřebují. Nejlepší krok?", o: ["Vypnout automatické odpovědi", "Říct Claude, ať standupy nechává být", "Požádat kolegy, ať standupy píšou jinam"], a: 1, why: "Jedna věta odstraní tenhle druh odpovědí a ty užitečné zůstanou. Vypnutí by zrušilo i je." },
            { q: "Jak ztišíš Claude jen v jednom vlákně?", o: ["Smažeš jeho poslední odpověď", "Vypneš Respond automatically pro celý kanál", "Napíšeš ve vlákně !mute"], a: 2, why: "!mute ztiší jen to vlákno, !unmute to vrátí." }
          ],
          cards: [
            { f: "Specialista kanálu", b: "Jeden druh práce v kanálu a nástroje, které k ní patří → Claude se tu práci naučí a pozná, které zprávy jsou jeho." },
            { f: "Odpovědi bez označení", b: "Respond automatically říká, jestli smí. Řádek v paměti říká, na co odpovídat a do čeho se nemíchat." },
            { f: "Ztišení", b: "Vypnout: „odpovídej jen na @-zmínku“. Zúžit: „jen otázky k X“. Jedno vlákno: !mute / !unmute." }
          ],
          terms: [
            { t: "Respond automatically", d: "Nastavení kanálu v Claude Tag, které určuje, jestli Claude smí odpovídat i na zprávy, kde ho nikdo neoznačil (untagged replies)." },
            { t: "Stálá odpovědnost (Claude Tag)", d: "Práce, kterou Claude v kanálu vlastní dny až týdny: sám rozhoduje, co je potřeba, jedná a rozhodnutí nosí lidem, např. hlídá checklist spuštění." }
          ]
        },
        {
          id: "tag-08",
          title: "Opakovaná práce podle rozvrhu",
          minutes: 5,
          lead: `Rutinu řekneš Claude jednou i s časem. Pak běží sama, bez @-zmínky, a výsledky posílá do kanálu.`,
          blocks: [
            { t: "p", h: `Některá práce se má dít pravidelně a bez ptaní: týdenní report z nástrojů týmu nebo denní kontrola, která se ozve, jen když je něco potřeba. Claude ji umí spouštět jako <b>rutiny</b> (routines). Běží s nástroji připojenými ke kanálu, takže umí porovnat zdroje a poslat jen to, co potřebuje pozornost. Hlídá i kanály a nástroje, na které nikdo v týmu nemá čas.` },
            { t: "ul", items: [
              `<b>Týdenní nebo denní reporty:</b> přehled stavu, shrnutí rozhodnutí, seznam toho, co je zablokované nebo čeká.`,
              `<b>Průběžné sledování:</b> hlídá kanál nebo repozitář a při nálezu pošle upozornění či shrnutí.`,
              `<b>Pravidelné kontroly:</b> co čeká, co je po termínu nebo v ohrožení, jaké se objevují vzorce.`
            ] },
            { t: "ex", title: "Ukázka: rutina v jedné zprávě", turns: [
              { who: "user", text: `@Claude každý pracovní den v 9:00 porovnej tracker onboardingu s tím, co tu včera zaznělo, a pošli jen to, co potřebuje pozornost: cokoli po termínu a cokoli, o čem vlákno říká, že sklouzlo, ale tracker to pořád ukazuje jako včas. Uveď vlastníka, odkaž na zprávu a navrhni další krok. Když nic pozornost nepotřebuje, nepiš nic.` }
            ], note: `V klidný den rutina nepošle nic, takže <b>příspěvek od ní vždycky znamená, že je na co se podívat</b>.` },
            { t: "table", head: ["Co říct", "Příklad a proč"], rows: [
              ["Kdy spustit", "„Každý pracovní den v 8:00.“ Den a čas dají příspěvek tam, kde týmu začíná ráno."],
              ["Kde hledat", "Fronta ticketů a rozpis služeb. Claude by je našel, ale v kanálu s více nástroji to ušetří hádání."],
              ["Jak rozhodnout, co se počítá", "„Co je po termínu“ nechává práh na Claude. Řekni ten svůj: otevřené déle než dva dny, nebo urgentní z noci."],
              ["Co poslat", "Kdo má co převzít, s odkazy: tvar, podle kterého tým jedná bez otevírání čehokoli."],
              ["Co v hraničních případech", "Den bez nálezů, fronta, která se nenačte, čtyřicet položek místo čtyř. Bez pokynu Claude zvolí něco rozumného, co ale nemusí být to, co chcete."]
            ] },
            { t: "p", h: `První příspěvek ber jako koncept. Odpověz v jeho vlákně, co chceš jinak; Claude se z toho poučí a použije to v každém dalším běhu. Trocha ladění na začátku udrží rutinu užitečnou, místo aby byla další zprávou, kterou kanál přeroluje.` },
            { t: "ul", items: [
              `<b>Seznam:</b> „@Claude what routines do you have set up in this channel?“ (jaké rutiny tu máš?) nebo <code>@Claude !scheduled</code>.`,
              `<b>Změna nebo pauza:</b> popiš ji, třeba „pozastav pondělní přehled, dokud neřeknu, že jsem zpátky“.`,
              `<b>Zastavení:</b> pojmenuj rutinu, třeba „zastav páteční status“.`,
              `Rutiny patří kanálu: posílají tam pro všechny a kdokoli v kanálu je může vypsat nebo změnit. Rutina <b>běží dál, i když autor odejde</b> z kanálu nebo organizace, a pozastavit nebo zastavit ji může kdokoli, kdo v kanálu zůstal.`
            ] },
            { t: "cmp",
              bad: { lbl: "Druhá rutina s novým pravidlem", h: `Tým chce, aby ranní příspěvek vynechal položky čekající na někoho mimo tým. Založíš novou rutinu: teď chodí ráno dvě a ta stará ty položky pořád obsahuje.` },
              good: { lbl: "Odpověď ve vlákně rutiny", h: `„@Claude vynech všechno, co čeká na někoho mimo tým.“<br>Claude: „Upraveno. Od zítra je vynechám.“<br>Rutina si nechá rozvrh a změnu použije od dalšího běhu. Udělat to může kdokoli v kanálu.` } }
          ],
          quiz: [
            { q: "Co má rutina udělat, když není co hlásit?", o: ["Vždycky poslat zprávu „nic nového“", "Sama se zruší", "To, co jí řekneš, třeba nic nepsat, aby každý příspěvek znamenal, že je na co se podívat"], a: 2, why: "Hraniční případy patří do zadání; bez nich Claude zvolí něco rozumného, ale ne nutně vaše." },
            { q: "Ranní rutina má nově vynechat položky čekající na někoho mimo tým. Jak na to?", o: ["Odpovědět ve vlákně rutiny se změnou", "Založit druhou rutinu s novým pravidlem", "Rutinu vypnout a ptát se každé ráno ručně"], a: 0, why: "Rutina si nechá rozvrh a změnu použije od dalšího běhu." },
            { q: "Co se stane s rutinou, když její autor odejde z organizace?", o: ["Okamžitě se zastaví", "Běží dál a kdokoli v kanálu ji může pozastavit nebo zastavit", "Přesune se do jeho DM"], a: 1, why: "Rutiny patří kanálu, ne člověku, který je založil." }
          ],
          cards: [
            { f: "Zadání rutiny", b: "Kdy, kde hledat, jak rozhodnout, co se počítá, co poslat a co v hraničních případech (nic k hlášení, nedostupný zdroj, moc položek)." },
            { f: "Správa rutin", b: "!scheduled nebo „jaké rutiny tu máš?“; změnu a pauzu popíšeš větou; „zastav [název]“. Rutiny patří kanálu." }
          ],
          terms: [
            { t: "Rutina (Claude Tag)", d: "Úkol, který Claude v kanálu nebo DM řekneš jednou i s rozvrhem; pak běží sám s nástroji kanálu a výsledky posílá tam. Patří kanálu, ne autorovi." }
          ]
        }
      ]
    },
    {
      title: "Jeden úkol pořádně",
      lessons: [
        {
          id: "tag-09",
          title: "Požadavek, se kterým Claude umí pracovat",
          minutes: 6,
          lead: `Když Claude předáváš úkol, ne otázku, dej mu cíl, vstupy a způsob kontroly. Ve vlákně ho řiď a výsledek před použitím zkontroluj.`,
          blocks: [
            { t: "p", h: `U celého úkolu nebo odpovědnosti přemýšlej, co Claude potřebuje vědět, aby poznal, kdy zasáhnout, kdy je hotovo a jak se rozhodnout, když u toho nejsi. Postup má čtyři kroky.` },
            { t: "h", x: "1. Vyber práci" },
            { t: "ul", items: [
              `<b>Mysli na výsledek, ne na kroky:</b> představ si, že úkol dáváš někomu, kdo váš workspace zná dokonale. Co bys po něm chtěl/a dát dohromady nebo zjistit?`,
              `<b>Ověř vstupy:</b> má Claude přístup k nástrojům, souborům a vláknům, na kterých práce stojí? Zeptej se „@Claude what can you access from this channel?“ Když ne, přesuň úkol do kanálu, který je má, nebo požádej admina o propojení.`,
              `<b>Kdo práci uvidí:</b> citlivá práce patří do soukromého kanálu (lekce 4).`
            ] },
            { t: "h", x: "2. Napiš požadavek" },
            { t: "ul", items: [
              `<b>Cíl, pak postup:</b> co chceš a proč, jak vypadá dobrý výsledek a kam půjde. Přidej kroky a omezení, na kterých ti záleží; o zbytku rozhodne Claude podle záměru.`,
              `<b>Vstupy:</b> kde hledat (kanál, workspace, propojení, přílohy) a ideálně příklad dobrého výsledku.`,
              `<b>Způsob kontroly:</b> rubrika, odkazy na zdroje, oddělení ověřeného od odvozeného.`,
              `<b>Priority:</b> publikum, míra vyladění, čemu se vyhnout, která rozhodnutí ti má vrátit.`,
              `<b>Forma:</b> krátká odpověď patří do vlákna. Když se k výsledku budou lidé vracet, chtěj stránku: Claude ji publikuje na claude.ai, pošle odkaz a další požadavky ve vlákně aktualizují stejný odkaz.`
            ] },
            { t: "tip", h: `U velkého úkolu požádej nejdřív o návrh plánu, ať se shodnete na přístupu. U průzkumné práce to řekni a nech Claude navrhnout pár směrů. U proaktivní nebo naplánované práce řekni, co vlastní a kde rozhoduješ ty; pomůže „north star“: jeden ambiciózní měřitelný cíl, který člověk pošle do kanálu a připne, a Claude pak k němu sám navrhuje práci.` },
            { t: "table", head: ["Co v požadavku chybělo", "Co se stalo", "Co doplnit"], rows: [
              ["K čemu to je", "Srovnání tří dodavatelů je přesné a přehledné, ale nic nedoporučuje. Tým pořád neví, koho vybrat.", "„V pátek na poradě vybíráme jednoho a potřebuju doporučení, které obhájím před financemi.“"],
              ["Kde hledat a vzor", "Update pro řídící skupinu vynechal dvě věci z úterní diskuse a nemá formát, na který jsou zvyklí.", "„Vycházej z vláken kanálu od pondělí a z trackeru; jako šablonu použij minulý update (připnutý).“"],
              ["Způsob kontroly", "Ze 46 obnov z CRM chyběly tři velké (prázdné datum uzavření). Odpověď nic nehlásila, týden si toho nikdo nevšiml.", "„Uveď součty podle segmentu a vypiš účty, které jsi vynechal nebo nezařadil, i s důvodem.“"]
            ] },
            { t: "h", x: "3. Nech Claude pracovat, 4. zkontroluj výsledek" },
            { t: "ul", items: [
              `Claude na zprávu zareaguje a krátce napíše, že začal. U delšího úkolu vede <b>checklist, který průběžně upravuje</b>. Úpravy neposílají notifikace, takže hledej odškrtnuté body, nebo si v požadavku řekni o zprávu u větších rozhodnutí.`,
              `<b>Nová odpověď</b> přijde, když tě potřebuje (otázka, problém, který sám nevyřeší) nebo má výsledek. Na odpověď na otázku čeká. <b>Ticho obvykle znamená práci</b>; když se zasekne, většinou to napíše.`,
              `Každá zpráva na nejvyšší úrovni kanálu je nový úkol, takže oddělené úkoly drž v oddělených vláknech. Poznámky kanálu ale platí pro všechna vlákna.`,
              `<b>Výsledek zkontroluj, než ho použiješ</b>, a tím pečlivěji, čím víc je v sázce: projdi odkazy, soubory a dotazy, které uvedl, a jeho checklist. Hledal na špatném místě? Přesuň úkol nebo nech připojit nástroj. Neúplné? Zeptej se, které zdroje prohledal. Nejasné zadání? Přepiš ho. Přehlédl váš zvyk? Ulož ho do paměti (lekce 6).`
            ] },
            { t: "cmp",
              bad: { lbl: "Úprava původní zprávy nebo nová zpráva v kanálu", h: `Claude je v půlce přípravy na hovor a ty chceš výsledek jako dokument. Upravíš původní zprávu: běžící úkol pracuje dál podle verze, kterou přečetl. Napíšeš do kanálu „@Claude udělej z toho dokument“: nová zpráva jde zvlášť a příprava běží beze změny.` },
              good: { lbl: "Odpověď ve vlákně úkolu", h: `„Dej to radši do dokumentu a sem pošli odkaz.“<br>Claude odpověď přečte za běhu a přípravu přesune do dokumentu. Stejně funguje i odpověď kolegy.` } },
            { t: "info", h: `<code>@Claude !help</code> vypíše příkazy, které můžeš poslat ve vlákně. Při chybách pomůže stránka s řešením potíží nebo tvůj admin.` }
          ],
          quiz: [
            { q: "Claude je v půlce úkolu a ty chceš výsledek jako dokument. Co uděláš?", o: ["Upravíš původní zprávu", "Odpovíš ve vlákně úkolu", "Napíšeš do kanálu novou zprávu s @Claude"], a: 1, why: "Běžící úkol pracuje podle verze, kterou přečetl; spolehlivě ho změní jen odpověď v jeho vlákně." },
            { q: "Seznam obnov z CRM vynechal tři velké účty a nikdo si toho nevšiml. Co v požadavku chybělo?", o: ["Způsob kontroly úplnosti, třeba součty podle segmentu a seznam vynechaných záznamů s důvodem", "Účel úkolu", "Požadavek na hezčí formát"], a: 0, why: "Bez kontroly úplnosti nebylo poznat, že Claude záznamy s prázdným datem přeskočil." },
            { q: "Claude u delšího úkolu dlouho nic nenapsal. Co to obvykle znamená?", o: ["Úkol selhal", "Čeká, až ho znovu označíš", "Pracuje; když se zasekne, obvykle to napíše do vlákna"], a: 2, why: "Ticho obvykle znamená práci. Průběh najdeš v průběžně upravovaném checklistu." }
          ],
          cards: [
            { f: "Čtyři kroky úkolu", b: "Vyber práci → napiš požadavek → nech Claude pracovat (řiď ve vlákně) → zkontroluj výsledek." },
            { f: "Dobrý požadavek", b: "Cíl a proč, kde hledat (a vzor), jak to zkontrolovat, co upřednostnit, v jaké formě výsledek." },
            { f: "Změna běžícího úkolu", b: "Odpověď ve vlákně úkolu. Úprava původní zprávy ani nová zpráva v kanálu běžící úkol nezmění." }
          ],
          terms: []
        }
      ]
    },
    {
      title: "Claude vlastní větší a průběžnou práci",
      lessons: [
        {
          id: "tag-10",
          title: "Rozšiř, co Claude vlastní",
          minutes: 5,
          lead: `Propojení, opravy, odpovědi bez označení a rutiny dohromady dávají vlastnictví: Claude může týdny pracovat k cíli a tobě nosí jen rozhodnutí, na kterých záleží.`,
          blocks: [
            { t: "ul", items: [
              `<b>Propojení</b> ukázala Claude, jaké nástroje tým používá a jaké informace má po ruce (lekce 3).`,
              `<b>Opravy</b> přes paměť a instrukce kanálu ho naučily, jak tým přemýšlí (lekce 6).`,
              `<b>Odpovědi bez označení</b> ho naučily, kdy jednat z vlastní iniciativy (lekce 7).`,
              `<b>Rutiny</b> ho naučily, kdy začít práci, aniž by ho někdo požádal (lekce 8).`
            ] },
            { t: "h", x: "Stránka Configure" },
            { t: "p", h: `Všechno z toho vidíš a spravuješ na stránce <b>Configure</b> kanálu, která se otevře odkazem pod kteroukoli odpovědí Claude. Každý kanál má vlastní. Otevře ji každý plnohodnotný člen kanálu přihlášený k účtu Claude vaší organizace; co tam smíš měnit, záleží na nastavení organizace.` },
            { t: "table", head: ["Záložka", "Co tam je", "Kdo mění"], rows: [
              ["General", "<b>Respond automatically</b> (odpovědi bez označení, lekce 7) a <b>instrukce kanálu</b> (čtou se na začátku každého nového vlákna a mají přednost před pamětí, lekce 6)", "Obvykle členové; admin může zamknout"],
              ["Tools and access", "<b>Connections</b>, k čemu se Claude z kanálu dostane (seznam vidí všichni), a <b>Allowed domains</b>, weby, které smí otevřít (část zděděná z výchozího nastavení workspace nebo organizace)", "Admini, případně správci kanálů, kde to organizace dovolí"],
              ["Routines", "Naplánovaná práce kanálu s rozvrhem, stavem a posledním během (lekce 8)", "Změníš nebo zastavíš rozhovorem s Claude v kanálu"]
            ] },
            { t: "h", x: "Od úkolů k průběžné práci" },
            { t: "table", head: ["Jak dlouho běží jedna instrukce", "Co ji vyplní"], rows: [
              ["Minuty", "Odpověď z historie kanálu (lekce 1)"],
              ["Hodiny", "Úkol o mnoha krocích, který běží i po tvém odhlášení (lekce 9)"],
              ["Dny", "Rutina, která posílá podle rozvrhu a přizpůsobuje se zpětné vazbě (lekce 8)"],
              ["Týdny", "Práce, kterou Claude vlastní: sám se kontroluje, opravuje, co se rozbije, a podává zprávy (tato lekce)"]
            ] },
            { t: "p", h: `S Claude v několika kanálech a více úkoly najednou deleguješ a řídíš práci na úrovni týmu, ne po jednom úkolu. Jeden člověk může mít jednoho Claude se třemi různými pracemi: v #call-prep připravuje hovory, v #proj-atlas udržuje projektovou stránku a hlásí rizika spuštění, v #it-requests každý pátek sesbírá nepřevzaté požadavky a navrhne priority. Tvoje role se mění: standard nastavíš jednou, běžné případy řeší Claude a ty kontroluješ jen rozhodnutí, na kterých záleží. Limitem je tvoje pozornost, takže Claude požádej, ať otázky seskupuje a ke každému rozhodnutí přinese doporučení. Tak pracují i týmy v Anthropicu: delegují v jasných mezích, lidský úsudek nechávají na rozhodnutí, která ho potřebují, a systém zlepšují, jak se Claude učí, co funguje.` },
            { t: "ex", title: "Ukázka: zpráva, která předá průběžnou práci", turns: [
              { who: "user", text: `Cíl: spouštíme 14. října bez otevřených blokerů. Ty máš na starosti, abychom do té doby nebyli zablokovaní. Čti tracker a tyhle kanály. Když se něco zasekne, zjisti, jestli potřebujeme informaci, nebo rozhodnutí. Informaci si obstarej sám. Mně přines cokoli o rozsahu, termínech nebo skutečném kompromisu, sesbírané dvakrát týdně.` }
            ], note: `Cíl je <b>north star</b> kanálu: jeden měřitelný výsledek, který stanoví člověk. Díky němu Claude práci navrhuje, ne jen reaguje, když se něco zasekne. A je jasné, která rozhodnutí se vrací k tobě.` },
            { t: "steps", items: [
              `<b>Dej práci kanál:</b> založ nebo vyber kanál, kde bude žít; píšete tam ty i Claude.`,
              `<b>Připoj, co má Claude číst:</b> tracker, kanály s prací, dokumenty, kde se rozhoduje. Ověř otázkou „what can you access from here?“.`,
              `<b>Řekni cíl, co Claude vlastní a která rozhodnutí probírá s tebou</b> (zpráva výše).`,
              `<b>Opravuj průběžně:</b> když přinese něco užitečného nebo něco přehlédne, řekni to ve vlákně a vzorec ulož (lekce 6). Hotovo je, když Claude jednou jednal bez požádání a jedno rozhodnutí ti přinesl, místo aby ho udělal sám.`
            ] }
          ],
          quiz: [
            { q: "Odkud otevřeš stránku Configure kanálu?", o: ["Jen z admin konzole Slacku", "Z odkazu Configure pod kteroukoli odpovědí Claude", "Jen z nastavení organizace na claude.ai"], a: 1, why: "Každý kanál má vlastní stránku a otevře ji odkaz pod odpovědí Claude." },
            { q: "Kdo obvykle přidává connections ke kanálu?", o: ["Kdokoli v kanálu", "Claude sám, když něco potřebuje", "Admini, případně správci kanálů, kde to organizace dovolí"], a: 2, why: "Seznam propojení vidí všichni, ale mění ho admini (a správci kanálů, kde je to povolené)." },
            { q: "Co má obsahovat zpráva, kterou Claude předáváš průběžnou práci?", o: ["Cíl, co Claude vlastní a která rozhodnutí má nosit tobě", "Jen seznam úkolů na tento týden", "Co nejpodrobnější postup pro každý krok"], a: 0, why: "Cíl dovolí Claude navrhovat práci a jasné hranice určí, co se vrací k člověku." }
          ],
          cards: [
            { f: "Stavební kameny vlastnictví", b: "Propojení (nástroje), opravy (paměť a instrukce), odpovědi bez označení (iniciativa), rutiny (start bez požádání)." },
            { f: "Jak dlouho běží jedna instrukce", b: "Minuty (odpověď), hodiny (úkol), dny (rutina), týdny (práce, kterou Claude vlastní)." },
            { f: "Předání průběžné práce", b: "Kanál pro práci → připojit, co má číst → cíl, co vlastní, co nosí tobě → průběžně opravovat a ukládat vzorce." }
          ],
          terms: [
            { t: "Configure (Claude Tag)", d: "Stránka nastavení jednoho slackového kanálu, otevírá se odkazem pod odpovědí Claude: Respond automatically, instrukce kanálu, propojení, povolené domény a rutiny." }
          ]
        },
        {
          id: "tag-11",
          title: "Zkontrolujte návyky týmu",
          minutes: 4,
          lead: `Návyky patří týmu, ne jednomu člověku. Projděte je spolu pro jeden kanál a co chybí, zadejte Claude přímo tam.`,
          blocks: [
            { t: "p", h: `Vyber kanál, kde tým dává Claude nejvíc práce, a u každého návyku si odpověz ano, nebo ne. Nevadí, když nemáte všechno. Každé „ne“ ukazuje jednu věc k vyzkoušení a lekci, která ji vysvětluje.` },
            { t: "h", x: "Správné místo" },
            { t: "ul", items: [
              `<b>Žádáme bez opakování pozadí a odpovědi stojí na kanálu nebo našich nástrojích.</b> Když ne: polož otázku bez kontextu a zjisti, co Claude už ví (lekce 1).`,
              `<b>Claude má nástroje, ve kterých práce kanálu žije, a jeden výsledek jsme ověřili u zdroje.</b> Když ne: zeptej se, k čemu má přístup, a nech ho vytáhnout záznam, který ověříš (lekce 3).`,
              `<b>Práce, kterou by využil tým, se děje v kanálu, ne v něčím DM.</b> Když ne: jednu věc, kterou jsi řešil/a v DM, polož v kanálu (lekce 5).`
            ] },
            { t: "h", x: "Učení kanálu" },
            { t: "ul", items: [
              `<b>Opravy se ukládají a občas kontrolujeme, co si Claude pamatuje.</b> Když ne: zeptej se, co si tu pamatuje, a ulož jeden vzorec, podle kterého tým pracuje (lekce 6).`,
              `<b>Kanál je pro jeden druh práce a Claude ví, jaký.</b> Když ne: nech Claude navrhnout instrukce kanálu, uprav je a ulož v nastavení (lekce 6).`,
              `<b>Claude ví, které zprávy si vzít bez označení a které nechat být.</b> Když ne: rozhodněte zapnuto, nebo vypnuto, a řekněte mu, na co stojí za to odpovídat (lekce 7).`
            ] },
            { t: "h", x: "Úkoly a vlastnictví" },
            { t: "ul", items: [
              `<b>Úkol, který jsme dělali každý týden, teď Claude spouští sám.</b> Když ne: dej jeden malý týdenní požadavek do rozvrhu a první příspěvek ber jako koncept (lekce 8).`,
              `<b>Úkol zadáváme s cílem, místem, kde hledat, a způsobem kontroly a zpětnou vazbu dáváme ve vlákně.</b> Když ne: přepiš svůj poslední požadavek s cílem, vstupy, kontrolou a prioritami (lekce 9).`,
              `<b>Claude tu vlastní jednu průběžnou odpovědnost k cíli zapsanému v kanálu a je jasné, která rozhodnutí se vrací k člověku.</b> Když ne: předej jednu stálou odpovědnost a řekni, co se vrací k tobě (lekce 10).`
            ] },
            { t: "ex", title: "Ukázka: zpráva do kanálu z odpovědí „ne“", turns: [
              { who: "user", text: `@Claude právě jsme dokončili kurz Claude Tag o tom, jak s tebou pracovat v našem workspace, a kontrolujeme návyky v tomto kanálu. U každého bodu se podívej na kanál a odpověz:
1. Ukaž, co si pro tento kanál pamatuješ, označ, co vypadá zastarale nebo rozporně, a navrhni jednu opravu z našich nedávných vláken, kterou by stálo za to uložit.
2. Vypiš rutiny, které tu běží, a navrhni jeden opakovaný úkol z toho, na co se ptáme nejčastěji, se dnem, časem a formátem, ať ho můžeme potvrdit.
Odpovídej stručně a přehledně. Všechno ber jako návrh; než něco uložíš, naplánuješ nebo změníš, potvrdíme to.` }
            ], note: `Zprávu poskládáš z návyků, kde padlo „ne“. Když máte všude „ano“, pošlete do kanálu aspoň jeden řádek: který návyk budete dál hlídat a kdo ho hlídá. Výsledek zapište tam, kde ho Claude přečte.` },
            { t: "info", title: "Kam dál", h: `Pro každého: tipy na úkoly, osvědčené postupy a příklady použití podle typu kanálu v dokumentaci Claude Tag. Pro vedoucí týmu: kurz Týmy lidí a agentů (v originále Building Effective Human-Agent Teams). Pro toho, kdo Claude Tag nastavuje: přizpůsobení pro workspace a připojení nástrojů týmu.` }
          ],
          quiz: [
            { q: "Jak s checklistem návyků pracovat?", o: ["Vyplnit ho sám za celý workspace", "Projít ho s týmem pro jeden kanál, kde Claude dostává nejvíc práce", "Poslat ho adminovi k vyhodnocení"], a: 1, why: "Návyky patří týmu a nejvíc ukážou v kanálu, kde se s Claude nejvíc pracuje." },
            { q: "Co udělat s návyky, kde padlo „ne“?", o: ["Nic, stačí o nich vědět", "Projít celý kurz znovu", "Poslat Claude do kanálu zprávu, ať k nim navrhne první kroky, a návrhy potvrdit"], a: 2, why: "Zpráva z odpovědí „ne“ rozjede chybějící návyky a tým má poslední slovo." }
          ],
          cards: [
            { f: "Tři skupiny návyků", b: "Správné místo (kontext, nástroje, kanál místo DM); učení kanálu (paměť, job, co brát bez označení); úkoly a vlastnictví (rutiny, dobré zadání, průběžná odpovědnost)." },
            { f: "Výstup kontroly návyků", b: "Zpráva v kanálu, ať Claude navrhne kroky k chybějícím návykům; všechno jako návrh, který tým potvrdí." }
          ],
          terms: []
        }
      ]
    }
  ]
});
