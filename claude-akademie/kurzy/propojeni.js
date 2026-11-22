/* Kurz: Desktop a Android jako jeden systém (vlastní kurz podle help centra Anthropic, stav listopad 2026) */
AKADEMIE.add({
  id: "propojeni",
  emoji: "🔄",
  title: "Desktop a Android jako jeden systém",
  category: "prakticky",
  level: "Prakticky",
  desc: "Jak spolu počítač a telefon spolupracují: co se synchronizuje, Dispatch krok za krokem, který nástroj kdy, denní rutina, limity, bezpečnost a řešení problémů.",
  source: "https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork",
  modules: [
    {
      title: "Propojení",
      lessons: [
        {
          id: "dw-01",
          title: "Co se synchronizuje a co ne",
          minutes: 3,
          lead: `Přihlásíš se stejným účtem a většina věcí je všude. Pár věcí ale zůstává na zařízení, kde vznikly.`,
          blocks: [
            { t: "table", head: ["Všude stejné (účet)", "Jen na zařízení"], rows: [
              ["Konverzace a úkoly (Recents)", "Lokální soubory a důvěryhodné složky (desktop)"],
              ["Projekty a artefakty", "Desktopová rozšíření (lokální MCP)"],
              ["Konektory, skills, pluginy", "Oprávnění Windows, připnutí na panel, spouštění po startu"],
              ["Paměť a Instructions for Claude", "Oprávnění Androidu, widget, nastavení hlasu"],
              ["Spotřeba limitu", "Úkoly běžící na počítači (běží jen, když je zapnutý)"]
            ] },
            { t: "key", h: `Nastav konektory, instrukce a paměť jednou (pohodlně na počítači) a máš je i v telefonu.` }
          ],
          quiz: [
            { q: "Které nastavení musíš udělat zvlášť na každém zařízení?", o: ["Konektor Gmail", "Oprávnění operačního systému (mikrofon, obrazovka)", "Instructions for Claude"], a: 1, why: "Oprávnění patří systému zařízení; konektory a instrukce patří účtu." }
          ],
          cards: [
            { f: "Synchronizuje se přes účet", b: "Konverzace, úkoly, projekty, artefakty, konektory, skills, paměť, instrukce." },
            { f: "Zůstává na zařízení", b: "Lokální soubory, desktopová rozšíření, oprávnění systému, zkratky, widget." }
          ],
          terms: []
        },
        {
          id: "dw-02",
          title: "Dispatch: úkol z telefonu pro tvůj počítač",
          minutes: 5,
          lead: `Dispatch je jedna trvalá konverzace, do které píšeš z telefonu, a práci odvede tvůj počítač: s lokálními soubory, aplikacemi a rozšířeními.`,
          blocks: [
            { t: "h", x: "Nastavení" },
            { t: "steps", items: [
              `Aktualizuj Claude Desktop (Windows x64, Mac nebo Linux) i aplikaci pro Android.`,
              `Na počítači otevři Claude a v levém panelu klikni na <b>Dispatch</b> › <b>Get started</b>.`,
              `Zapni <b>přístup k souborům</b> a <b>udržování počítače vzhůru</b> (keep awake), pak <b>Finish setup</b>.`,
              `V telefonu otevři sekci Dispatch a napiš první úkol.`
            ] },
            { t: "h", x: "Co vědět" },
            { t: "ul", items: [
              `Počítač musí být <b>vzhůru a s otevřenou aplikací</b>. Na Windows zkontroluj i <b>Nastavení › Systém › Napájení</b> (kdy se uspí, co udělá zaklapnutí víka) a spouštění Claude po startu. Na práci se zaklapnutým notebookem použij cloudový úkol.`,
              `Je to <b>jedno vlákno</b>, více paralelních Dispatch konverzací nejde.`,
              `Úkoly kolem kódu běží v Claude Code, ostatní jako běžný úkol; uvidíš je v postranních panelech na počítači.`,
              `Přijde <b>notifikace</b>, když je úkol hotový nebo potřebuje souhlas.`,
              `S ovládáním počítače umí Dispatch pracovat i v aplikacích bez konektoru (ne na Linuxu).`,
              `Plány Pro, Max, Ultra. Podle help centra je Dispatch v omezené betě a nemusí být dostupný všem novým uživatelům.`
            ] },
            { t: "ex", title: "Ukázka: z kavárny", turns: [
              { who: "user", text: `Na počítači ve složce Projekty/Nabídka-Novák najdi poslední verzi nabídky, uprav cenu u položky 3 na 48 000 Kč, ulož jako PDF vedle a pošli mi odkaz. Nic neodesílej klientovi.` },
              { who: "ai", text: `Hotovo: nabidka-novak-v4.pdf uložena. Změnil jsem jen položku 3, součet je nově 312 000 Kč. Chceš návrh průvodního e-mailu?` }
            ], note: `Soubor je jen na počítači, proto Dispatch. Hranice „nic neodesílej“ zůstává v tvých rukou.` },
            { t: "warn", h: `Telefon teď ovládá počítač. Zamykej telefon, nedávej Dispatch přístup k citlivým složkám a akce „ven“ (odesílání, platby, mazání) nech schvalovat.` }
          ],
          quiz: [
            { q: "Kdy Dispatch nefunguje?", o: ["Když je počítač uspaný nebo aplikace zavřená", "Když je telefon na Wi-Fi", "Večer"], a: 0, why: "Úkol se provádí na počítači; ten musí být vzhůru s otevřeným Claude Desktop." },
            { q: "Kolik Dispatch vláken můžeš mít?", o: ["Neomezeně", "Jedno", "Jedno na každou složku"], a: 1, why: "Dispatch je jedna trvalá konverzace." },
            { q: "Úkol nad e-mailem a kalendářem při zaklapnutém notebooku. Dispatch, nebo cloud?", o: ["Dispatch", "Cloudový úkol", "Nejde to"], a: 1, why: "Konektory fungují v cloudu bez zapnutého počítače." }
          ],
          cards: [
            { f: "Dispatch", b: "Jedna trvalá konverzace z telefonu; práci provede tvůj počítač (soubory, aplikace, rozšíření)." },
            { f: "Podmínky Dispatch", b: "Počítač vzhůru, otevřený Claude Desktop, aktuální aplikace, Pro/Max/Ultra, internet na obou." }
          ],
          terms: [
            { t: "Dispatch", d: "Trvalé vlákno, přes které z telefonu zadáváš úkoly prováděné na tvém počítači." },
            { t: "Keep awake", d: "Volba v nastavení Dispatch, která brání uspání počítače, aby mohl plnit úkoly." }
          ]
        },
        {
          id: "dw-03",
          title: "Který nástroj kdy",
          minutes: 4,
          lead: `Rozhodovací tabulka pro běžné situace. Po pár týdnech ji budeš mít v hlavě.`,
          blocks: [
            { t: "table", head: ["Situace", "Kde a jak"], rows: [
              ["Rychlá otázka u počítače", "Win + 1 (Claude připnutý na panelu)"],
              ["Chyba nebo graf na obrazovce", "Win + Shift + S, Win + 1, Ctrl + V"],
              ["Nápad při chůzi", "Android widget 🎤, diktování"],
              ["Přemýšlení nahlas, procvičení jazyka", "Android hlasový režim"],
              ["Něco vidím (dopis, štítek, tabule)", "Android widget 📷"],
              ["Článek nebo PDF v telefonu", "Sdílet › Claude"],
              ["Práce se soubory v počítači", "Desktop, úkol nad důvěryhodnou složkou"],
              ["Soubory v počítači, ale jsem pryč", "Dispatch z telefonu"],
              ["Výzkum, tabulka, dokument z webu a konektorů", "Kdekoli, běží v cloudu"],
              ["Pravidelný přehled", "Plánovaný úkol v cloudu"],
              ["Aplikace bez konektoru", "Desktop, ovládání počítače"],
              ["Kód a repozitář", "Desktop, záložka Code"]
            ] }
          ],
          quiz: [
            { q: "Na Windows vidíš nesrozumitelnou chybovou hlášku. Nejrychlejší cesta?", o: ["Opsat ji do telefonu", "Win + Shift + S, Win + 1, Ctrl + V", "Poslat si ji e-mailem"], a: 1, why: "Výřez jde do schránky a vložíš ho rovnou do zprávy." },
            { q: "Ve vlaku chceš z PDF v telefonu výtah. Jak?", o: ["Sdílet › Claude", "Dispatch", "Počkat na počítač"], a: 0, why: "PDF je v telefonu, stačí ho sdílet do Claude." }
          ],
          cards: [
            { f: "Vidím něco v reálném světě", b: "Android widget 📷." },
            { f: "Soubory v počítači, já pryč", b: "Dispatch z telefonu (počítač musí být vzhůru)." }
          ],
          terms: []
        },
        {
          id: "dw-04",
          title: "Denní rutina s Claude",
          minutes: 4,
          lead: `Jak může vypadat den, kdy telefon i počítač táhnou za jeden provaz. Vezmi si z toho, co ti sedí.`,
          blocks: [
            { t: "table", head: ["Kdy", "Co", "Kde"], rows: [
              ["7:00", "Plánovaný ranní přehled: schůzky, priority, e-maily", "Cloud, čteš v telefonu"],
              ["Cesta", "Hlasem promyslet den, nadiktovat úkoly", "Android hlas"],
              ["Dopoledne", "Hluboká práce: dokumenty, tabulky, analýzy nad soubory", "Desktop"],
              ["Průběžně", "Rychlé dotazy bez přepínání oken", "Quick entry"],
              ["Odpoledne mimo stůl", "Dokončit nabídku v počítači", "Dispatch"],
              ["Večer", "Schválit rozpracované úkoly, výstupy na zítra", "Telefon, notifikace"],
              ["Měsíčně", "Projít Reflect, upravit paměť a instrukce", "Desktop"]
            ] },
            { t: "ex", title: "Ukázka: ranní hlasová porada se sebou", turns: [
              { who: "user", text: `Dneska mám tři schůzky a musím dokončit rozpočet. Pomoz mi seřadit den tak, abych měl na rozpočet aspoň dvě hodiny v kuse, a na konci mi to shrň do pěti bodů.` }
            ], note: `Hlasem v telefonu cestou, výsledek si pak otevřeš na počítači v Recents.` },
            { t: "tip", h: `Začni jen dvěma zvyky: ranním plánovaným přehledem a Quick entry. Další přidávej, až se tyhle usadí.` }
          ],
          quiz: [
            { q: "Kterými dvěma zvyky je rozumné začít?", o: ["Ranní plánovaný přehled a Quick entry", "Dispatch a computer use", "Hlasový režim a Reflect"], a: 0, why: "Nejmenší úsilí, největší každodenní přínos." }
          ],
          cards: [
            { f: "Dva startovní zvyky", b: "Ranní plánovaný přehled (cloud) a rychlé zadání zkratkou (desktop)." }
          ],
          terms: []
        }
      ]
    },
    {
      title: "Limity, bezpečnost, problémy",
      lessons: [
        {
          id: "dw-05",
          title: "Limity a spotřeba",
          minutes: 3,
          lead: `Všechna zařízení čerpají z jednoho limitu plánu. Velké úkoly čerpají víc než krátké otázky.`,
          blocks: [
            { t: "ul", items: [
              `Aktuální spotřebu vidíš v <b>Nastavení › Usage</b> (na počítači i v telefonu).`,
              `Úkoly s mnoha kroky, výzkum, ovládání počítače a plánované úkoly spotřebují výrazně víc než chat.`,
              `Krátké věci (překlad, přeformulování) zvládne i menší model; výběr modelu je v okně zprávy.`,
              `Jedna dobře zadaná zpráva je levnější než pět oprav. Zadání s výsledkem, formátem a vstupy se vyplatí i tady.`
            ] },
            { t: "tip", h: `Plánované úkoly nastav tak často, jak je opravdu čteš. Denní přehled, který nečteš, jen ujídá limit.` }
          ],
          quiz: [
            { q: "Co spotřebuje nejvíc limitu?", o: ["Krátký překlad", "Vícekrokový úkol s výzkumem a ovládáním počítače", "Otevření aplikace"], a: 1, why: "Agentní úkoly dělají mnoho kroků a každý stojí." }
          ],
          cards: [
            { f: "Kde vidím spotřebu", b: "Nastavení › Usage. Jeden limit pro všechna zařízení." }
          ],
          terms: []
        },
        {
          id: "dw-06",
          title: "Bezpečně: pět pravidel",
          minutes: 3,
          lead: `Čím víc Claude smí, tím víc záleží na hranicích. Pět pravidel, která pokryjí většinu rizik.`,
          blocks: [
            { t: "ol", items: [
              `<b>Nejmenší přístup</b>: jen potřebné složky, konektory a oprávnění.`,
              `<b>Akce ven schvaluj</b>: odesílání, platby, mazání, sdílení (Manual nebo Always ask).`,
              `<b>Piš hranice do zadání</b>: „nic neodesílej“, „neměň originály“, „nerezervuj“.`,
              `<b>Hlídej web</b>: stránky mohou obsahovat skryté pokyny; u citlivých úkolů sleduj, co Claude dělá.`,
              `<b>Zamkni telefon</b>: přes Dispatch a konektory je klíčem k tvému počítači a účtům.`
            ] },
            { t: "info", h: `Paměť a instrukce pravidelně projdi. Co tam nepatří, smaž (Nastavení › Memory › Topics).` }
          ],
          quiz: [
            { q: "Které pravidlo chrání před nechtěně odeslaným e-mailem?", o: ["Nejmenší přístup", "Akce ven schvaluj", "Zamkni telefon"], a: 1, why: "Odeslání je akce ven, nech ji schvalovat." }
          ],
          cards: [
            { f: "Pět bezpečnostních pravidel", b: "Nejmenší přístup, akce ven schvaluj, hranice v zadání, hlídej web, zamkni telefon." }
          ],
          terms: []
        },
        {
          id: "dw-07",
          title: "Když něco nefunguje",
          minutes: 3,
          lead: `Nejčastější problémy a rychlá řešení.`,
          blocks: [
            { t: "table", head: ["Problém", "Řešení"], rows: [
              ["Dispatch neodpovídá", "Je počítač vzhůru a Claude Desktop otevřený? Zapnutý keep awake? Nespí Windows (Nastavení › Systém › Napájení)? Internet na obou?"],
              ["Win + 1 otevře jinou aplikaci", "Přetáhni ikonu Claude na hlavním panelu na první místo"],
              ["Win + H nepíše česky", "Nastavení Windows › Čas a jazyk › přidat češtinu, přepnout jazyk vstupu"],
              ["Konektor hlásí chybu", "Customize › Connectors: odpojit a znovu připojit"],
              ["Rozšíření nefunguje", "Stránka Extensions: logy, případně přeinstalovat .mcpb"],
              ["Nevidím novou funkci", "Aktualizovat aplikaci; funkce se zapínají postupně podle účtů"],
              ["Android: budík nezvoní", "Režim Nerušit"],
              ["Android: aplikace zlobí", "Aktualizovat, vymazat mezipaměť"]
            ] },
            { t: "info", h: `Názvy tlačítek a umístění funkcí se často mění. Když něco nenajdeš, zeptej se přímo Claude: „Kde v aplikaci najdu…?“ nebo se podívej do <a href="https://support.claude.com/" target="_blank" rel="noopener">help centra</a>.` }
          ],
          quiz: [
            { q: "Kolegyně má novou funkci a ty ne. Nejpravděpodobnější důvod?", o: ["Máš rozbitý účet", "Funkce se zapínají postupně", "Musíš změnit jazyk"], a: 1, why: "Anthropic novinky zapíná po vlnách; pomůže i aktualizace aplikace." }
          ],
          cards: [
            { f: "Dispatch neodpovídá", b: "Počítač vzhůru, aplikace otevřená, keep awake, internet na obou zařízeních." }
          ],
          terms: []
        }
      ]
    }
  ]
});
