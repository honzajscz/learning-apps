/* Kurz: Claude pro Android naplno (vlastní kurz podle help centra Anthropic, stav listopad 2026) */
AKADEMIE.add({
  id: "android",
  emoji: "📱",
  title: "Claude pro Android naplno",
  category: "prakticky",
  level: "Prakticky",
  desc: "Telefon jako nejrychlejší vstup ke Claude: widget, sdílení, hlas, fotoaparát, propojení s aplikacemi Androidu, úkoly v cloudu a oprávnění.",
  source: "https://support.claude.com/en/articles/11869629-use-claude-with-android-apps",
  modules: [
    {
      title: "Rychlý přístup",
      lessons: [
        {
          id: "an-01",
          title: "Co telefon umí a co nechat na počítač",
          minutes: 3,
          lead: `Aplikace pro Android je plnohodnotný Claude se stejným účtem, konverzacemi a konektory. Nemá jen přístup k tvému počítači. Z toho plyne, co dělat kde.`,
          blocks: [
            { t: "table", head: ["Telefon zvládne", "Potřebuje počítač"], rows: [
              ["Chat, hlas, fotky, dokumenty, výzkum", "Práce s lokálními soubory v počítači"],
              ["Spustit úkol, který běží v cloudu", "Ovládání aplikací na počítači (computer use)"],
              ["Zkontrolovat průběh úkolu, odpovědět na dotaz, schválit akci", "Desktopová rozšíření (lokální MCP)"],
              ["Napsat zprávu, e-mail, událost v kalendáři, budík", "Záložka Code s lokálním repozitářem"],
              ["Zadat úkol pro počítač přes Dispatch", ""]
            ] },
            { t: "key", h: `Telefon je <b>vstup a dohled</b>: zachytit nápad, zadat, zkontrolovat, schválit. Počítač je <b>dílna</b>: soubory a aplikace.` },
            { t: "info", h: `Všechno, co děláš v telefonu, se počítá do stejného limitu jako na desktopu, včetně dotazů z widgetu.` }
          ],
          quiz: [
            { q: "Co z telefonu přímo neuděláš?", o: ["Spustit úkol v cloudu", "Upravit soubor uložený jen v počítači bez Dispatch", "Schválit akci úkolu"], a: 1, why: "Lokální soubory vidí jen Claude Desktop; z telefonu k nim vede cesta přes Dispatch." },
            { q: "Počítají se dotazy z widgetu do limitu?", o: ["Ne", "Ano, stejně jako ostatní", "Jen hlasové"], a: 1, why: "Každá interakce se počítá do limitu plánu." }
          ],
          cards: [
            { f: "Role telefonu a počítače", b: "Telefon = vstup a dohled (zachytit, zadat, schválit). Počítač = dílna (soubory, aplikace)." }
          ],
          terms: []
        },
        {
          id: "an-02",
          title: "Widget a sdílení: Claude na jeden dotek",
          minutes: 3,
          lead: `Nejlepší funkce je ta, ke které se dostaneš za sekundu. Na Androidu na to máš widget na ploše a nabídku Sdílet.`,
          blocks: [
            { t: "h", x: "Widget Claude (Android 8 a novější)" },
            { t: "steps", items: [
              `Podrž prst na prázdném místě plochy › <b>Widgety</b>.`,
              `Najdi <b>Claude</b>, přetáhni widget na plochu a případně roztáhni.`,
              `Widget má tři tlačítka: <b>✳️ nový chat</b>, <b>📷 fotoaparát</b> (fotka rovnou do nového chatu), <b>🎤 diktování</b>.`
            ] },
            { t: "h", x: "Sdílet do Claude" },
            { t: "p", h: `V téměř každé aplikaci (prohlížeč, galerie, soubory, e-mail) klepni na <b>Sdílet</b> a vyber Claude. Text, odkaz, fotka nebo PDF se vloží do nové konverzace. Připni si Claude v nabídce Sdílet nahoru (podrž ikonu › Připnout), ať ho nemusíš hledat.` },
            { t: "ex", title: "Ukázka: článek ze sdílení", turns: [
              { who: "user", text: `(sdílený odkaz na článek) Shrň ve 5 bodech a řekni, co z toho platí pro Česko.` }
            ], note: `Za 10 vteřin od článku k výtahu, bez kopírování.` },
            { t: "tip", h: `Widget dej na první plochu vedle fotoaparátu. Tlačítko 📷 je nejrychlejší cesta, jak se zeptat na cokoli, co vidíš: ceduli, štítek, schéma, účtenku.` }
          ],
          quiz: [
            { q: "Která tři tlačítka má widget Claude?", o: ["Nový chat, fotoaparát, diktování", "Nastavení, historie, odhlásit", "Kalendář, e-mail, mapa"], a: 0, why: "Widget nabízí nový chat, fotku do chatu a diktování." },
            { q: "Jak nejrychleji pošleš článek z prohlížeče do Claude?", o: ["Zkopírovat celý text", "Sdílet › Claude", "Udělat screenshot a přepsat"], a: 1, why: "Nabídka Sdílet pošle odkaz rovnou do nové konverzace." }
          ],
          cards: [
            { f: "Widget Claude na Androidu", b: "Tři tlačítka: nový chat, fotoaparát, diktování. Plocha › podržet › Widgety › Claude." },
            { f: "Sdílet do Claude", b: "V jakékoli aplikaci Sdílet › Claude. Připni si Claude v nabídce nahoru." }
          ],
          terms: [
            { t: "Widget Claude", d: "Prvek na ploše Androidu se třemi tlačítky: nový chat, fotka, diktování." }
          ]
        },
        {
          id: "an-03",
          title: "Hlasem: diktování a hlasový režim",
          minutes: 4,
          lead: `Telefon je ideální na mluvení: při chůzi, v autě, při vaření. Jsou dva různé způsoby a každý se hodí na něco jiného.`,
          blocks: [
            { t: "cmp",
              bad: { lbl: "Diktování 🎤", h: `Mluvíš, text se přepíše do pole zprávy, zkontroluješ a odešleš. Odpověď je <b>psaná</b>. Hodí se na delší a přesná zadání.` },
              good: { lbl: "Hlasový režim 🔊", h: `Rozhovor jako po telefonu: Claude <b>odpovídá nahlas</b>. Hodí se na přemýšlení nahlas, procvičení jazyka, rychlé dotazy bez dívání.` } },
            { t: "h", x: "Nastavení hlasového režimu" },
            { t: "ul", items: [
              `Najdeš ho v profilu › <b>Nastavení › Voice</b> (podle verze aplikace).`,
              `<b>Hands-free</b>: Claude poslouchá průběžně a pozná, kdy domluvíš.`,
              `<b>Push-to-talk</b>: držíš tlačítko, dokud mluvíš. Spolehlivější v hluku a když děláš pauzy na přemýšlení.`,
              `Novější verze rozšířily podporu dalších jazyků. Vyzkoušej češtinu ve svém telefonu; když rozpoznávání vázne, pomůže push-to-talk nebo diktování.`
            ] },
            { t: "tip", title: "Jak mluvit, aby to fungovalo", h: `Začni cílem („Potřebuju naplánovat…“), pak podrobnosti. Na konci řekni formát („shrň do tří bodů“). U delšího zadání raději diktuj, přečti si přepis a pak odešli.` },
            { t: "warn", h: `Při řízení používej jen hlasový režim bez dívání na displej a dodržuj pravidla silničního provozu.` }
          ],
          quiz: [
            { q: "Chceš nadiktovat přesné zadání úkolu a zkontrolovat ho. Co zvolíš?", o: ["Hlasový režim hands-free", "Diktování do pole zprávy", "Widget fotoaparát"], a: 1, why: "Diktování ti dá přepis, který před odesláním zkontroluješ." },
            { q: "Kdy pomůže push-to-talk?", o: ["V tichu", "V hluku a když děláš pauzy na přemýšlení", "Nikdy"], a: 1, why: "Claude tě nepřeruší, dokud držíš tlačítko." }
          ],
          cards: [
            { f: "Diktování vs hlasový režim", b: "Diktování: přepis do pole, psaná odpověď. Hlasový režim: rozhovor, odpověď nahlas." },
            { f: "Hands-free vs push-to-talk", b: "Hands-free poslouchá průběžně. Push-to-talk jen při drženém tlačítku (lepší v hluku)." }
          ],
          terms: [
            { t: "Push-to-talk", d: "Režim hlasu, kdy Claude poslouchá jen při drženém tlačítku." }
          ]
        },
        {
          id: "an-04",
          title: "Fotoaparát a soubory",
          minutes: 3,
          lead: `Fotoaparát je na telefonu nejsilnější vstup. Co vidíš, to můžeš Claude ukázat.`,
          blocks: [
            { t: "ul", items: [
              `<b>Dokument nebo dopis</b>: „vysvětli mi to lidsky a napiš, co mám udělat a do kdy“.`,
              `<b>Tabule nebo poznámky z porady</b>: „přepiš do úhledných bodů a vytáhni úkoly“.`,
              `<b>Účtenky</b>: „sečti a rozděl na jídlo a ostatní“.`,
              `<b>Štítek, návod, chybová hláška na zařízení</b>: „co to znamená a jak to opravit“.`,
              `<b>Screenshot</b> z jiné aplikace: přes Sdílet nebo tlačítko přílohy.`
            ] },
            { t: "p", h: `Claude v telefonu umí i <b>vytvořit soubory</b> (dokument, tabulku, prezentaci). Odkaz na výstup otevřeš kdekoli, třeba později na počítači.` },
            { t: "tip", h: `Fotografuj rovně a ostře, u více stránek pošli víc fotek do jedné zprávy a napiš jejich pořadí.` }
          ],
          quiz: [
            { q: "Jak nejlépe poslat třístránkový dopis?", o: ["Jednu rozmazanou fotku všech stran", "Tři ostré fotky v jedné zprávě s pořadím", "Přepsat ho ručně"], a: 1, why: "Ostré snímky ve správném pořadí Claude přečte nejspolehlivěji." }
          ],
          cards: [
            { f: "Fotoaparát v Claude", b: "Dokumenty, tabule, účtenky, štítky, chybové hlášky. Ostře, rovně, pořadí stran." }
          ],
          terms: []
        }
      ]
    },
    {
      title: "Claude a tvůj telefon",
      lessons: [
        {
          id: "an-05",
          title: "Zprávy, e-mail, kalendář, budíky, mapy",
          minutes: 4,
          lead: `Claude na Androidu umí předat výsledek přímo do aplikací telefonu. Ne jen poradit, ale připravit zprávu, událost nebo budík.`,
          blocks: [
            { t: "table", head: ["Umí", "Poznámka"], rows: [
              ["Napsat <b>zprávu</b> a otevřít ji v SMS, WhatsAppu, Slacku…", "Odeslání potvrzuješ ty; existující zprávy nečte"],
              ["Napsat <b>e-mail</b> a otevřít ho v poštovní aplikaci", "Předvyplněný koncept; doručenou poštu tímto způsobem nečte (na to je konektor)"],
              ["Číst a spravovat <b>kalendář</b>", "Úprava událostí závisí na tom, kdo je vlastník"],
              ["Nastavit <b>budík a časovač</b>", "Pokud nezvoní, zkontroluj režim Nerušit"],
              ["<b>Poloha a mapy</b>: tipy v okolí, otevření v Google Maps", "Ne pro účty Team a Enterprise"]
            ] },
            { t: "warn", h: `Co na Androidu nejde: <b>připomínky</b> (jen iPhone) a přímý přístup ke <b>kontaktům</b>. Zdravotní data přes Health Connect jsou zatím jen pro USA (Android 14 a novější, Pro, Max, Ultra).` },
            { t: "h", x: "Oprávnění" },
            { t: "p", h: `Telefon se zeptá při prvním použití (<i>Povolit jednou / Vždy / Nepovolit</i>). Později změníš v <b>Nastavení Androidu › Aplikace › Claude › Oprávnění</b>. Zprávy a e-mail žádné oprávnění nepotřebují, jdou přes systémové sdílení.` },
            { t: "ex", title: "Ukázka", turns: [
              { who: "user", text: `Ve čtvrtek mám v 18:00 tenis. Dej do kalendáře, nastav budík na 17:15 a napiš Petrovi na WhatsApp, že beru míče.` },
              { who: "ai", text: `Událost „Tenis“ čt 18:00 je připravená, budík 17:15 nastaven. Zpráva pro Petra: „Ahoj, ve čtvrtek beru míče, uvidíme se v 18:00.“ Otevírám WhatsApp, odeslání potvrď.` }
            ], note: `Jedno zadání, tři aplikace. Odeslání zprávy necháváš na sobě.` }
          ],
          quiz: [
            { q: "Co Claude na Androidu neumí?", o: ["Nastavit budík", "Spravovat připomínky", "Připravit e-mail"], a: 1, why: "Připomínky jsou podle help centra jen na iOS." },
            { q: "Kde změníš oprávnění Claude ke kalendáři?", o: ["Nastavení Androidu › Aplikace › Claude › Oprávnění", "Na webu claude.ai", "Nejde to změnit"], a: 0, why: "Oprávnění aplikací spravuje Android." }
          ],
          cards: [
            { f: "Claude a aplikace Androidu", b: "Zprávy, e-mail (koncepty), kalendář, budíky a časovače, poloha a mapy. Ne připomínky, ne kontakty." },
            { f: "Oprávnění Claude na Androidu", b: "Nastavení › Aplikace › Claude › Oprávnění. Zprávy a e-mail jdou přes sdílení bez oprávnění." }
          ],
          terms: []
        },
        {
          id: "an-06",
          title: "Úkoly z telefonu: cloud a schvalování",
          minutes: 4,
          lead: `Z telefonu už nejen chatuješ. Zadáš větší úkol, ten běží v cloudu, a ty jen odpovídáš na dotazy a schvaluješ.`,
          blocks: [
            { t: "steps", items: [
              `Popiš úkol stejně jako na počítači: výsledek, formát, vstupy (konektory, odkazy, přílohy).`,
              `Úkol běží v <b>cloudu</b>, takže můžeš zamknout telefon.`,
              `Když Claude potřebuje rozhodnutí nebo souhlas, přijde <b>notifikace</b>. Odpovíš přímo z ní nebo v konverzaci.`,
              `Hotový výstup otevřeš v telefonu nebo později na počítači (vše je v Recents).`
            ] },
            { t: "ex", title: "Ukázka: úkol cestou vlakem", turns: [
              { who: "user", text: `Najdi 5 nejlepších hotelů v Lisabonu pro 2 lidi 12. až 15. 3., do 150 € na noc, blízko centra. Udělej tabulku s cenou, hodnocením, vzdáleností od náměstí Rossio a odkazem. Nic nerezervuj.` }
            ], note: `Výzkum a tabulka nepotřebují tvůj počítač, takže běží v cloudu. <b>„Nic nerezervuj“</b> je jasná hranice.` },
            { t: "tip", h: `Povol Claude notifikace (Nastavení Androidu › Aplikace › Claude › Oznámení). Bez nich úkol může zbytečně čekat na tvou odpověď.` },
            { t: "info", h: `Interaktivní výstupy konektorů (živé grafy, diagramy) fungují i v mobilní aplikaci.` }
          ],
          quiz: [
            { q: "Proč povolit notifikace aplikace Claude?", o: ["Kvůli reklamám", "Úkol tě upozorní, když potřebuje rozhodnutí nebo je hotový", "Jinak aplikace nejde spustit"], a: 1, why: "Bez notifikací úkol čeká, až se sám podíváš." }
          ],
          cards: [
            { f: "Úkol z telefonu", b: "Zadej jako na počítači, běží v cloudu, schvaluješ z notifikace, výstup najdeš v Recents." }
          ],
          terms: []
        },
        {
          id: "an-07",
          title: "Nastavení a soukromí v telefonu",
          minutes: 3,
          lead: `Pět minut v nastavení, které se vrátí každý den.`,
          blocks: [
            { t: "ol", items: [
              `<b>Notifikace</b> zapnuté (úkoly, schvalování, Dispatch).`,
              `<b>Oprávnění</b> jen ta, která používáš: mikrofon, fotoaparát, kalendář; poloha raději „Jen při používání“.`,
              `<b>Hlas</b>: zvol hands-free nebo push-to-talk a vyzkoušej češtinu.`,
              `<b>Widget</b> na ploše a Claude připnutý v nabídce Sdílet.`,
              `<b>Paměť a instrukce</b> zkontroluj jednou (platí pro všechna zařízení).`
            ] },
            { t: "h", x: "Když něco nefunguje" },
            { t: "ul", items: [
              `Aktualizuj aplikaci v Obchodě Play.`,
              `Vymaž mezipaměť: Nastavení › Aplikace › Claude › Úložiště a mezipaměť › Vymazat mezipaměť.`,
              `Budík nezvoní: zkontroluj režim Nerušit.`,
              `Konektor nejde: odpoj a znovu připoj v Customize › Connectors (klidně na počítači).`
            ] },
            { t: "info", h: `Pro jednorázový citlivý dotaz použij anonymní chat: neukládá se do historie ani paměti.` }
          ],
          quiz: [
            { q: "Jaké nastavení polohy je rozumný kompromis?", o: ["Vždy povolit", "Jen při používání", "Poloha je povinná"], a: 1, why: "Claude polohu potřebuje jen při konkrétním dotazu." }
          ],
          cards: [
            { f: "Pětiminutové nastavení Androidu", b: "Notifikace, střídmá oprávnění, hlas, widget a Sdílet, paměť a instrukce." },
            { f: "Claude na Androidu zlobí", b: "Aktualizovat, vymazat mezipaměť, zkontrolovat Nerušit, znovu připojit konektor." }
          ],
          terms: []
        }
      ]
    }
  ]
});
