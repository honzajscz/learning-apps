# 📚 Learning Apps

Sbírka mých aplikací. Každá appka je **samostatná PWA ve vlastní složce** s vlastním
manifestem, service workerem a ikonou, takže se navzájem neovlivňují a každou jde přidat na plochu zvlášť.
Kořen repozitáře je jen rozcestník bez manifestu a bez service workeru; tak to musí zůstat, jinak by
kořenová appka „pohltila“ podsložky (Android by otevíral appky v podsložkách uvnitř té kořenové).

**Rozcestník:** https://honzajscz.github.io/learning-apps/

## Aplikace

| Složka | Aplikace | Adresa |
|---|---|---|
| `trenink/` | 🏋️ Trénink: tréninkový deník (plán A1/B/A2, řízený trénink, hormonální jóga, historie, statistiky) | https://honzajscz.github.io/learning-apps/trenink/ |
| `konjunktiv/` | 🇩🇪 Konjunktiv I a II: německá gramatika česky podle materiálů učitele (výklad, tabulky sloves, cvičení, kvíz) | https://honzajscz.github.io/learning-apps/konjunktiv/ |
| `claude-akademie/` | 🎓 Claude Akademie: jak naplno využít Claude Desktop a Claude pro Android (praktické kurzy, checklist nastavení, základy podle [Claude Academy](https://academy.claude.com/)) | https://honzajscz.github.io/learning-apps/claude-akademie/ |

## Pravidla pro přidání další appky

1. Vytvoř podsložku (např. `moje-appka/`) s `index.html`, `manifest.webmanifest` (`start_url` i `scope` `./`) a `sw.js`.
2. Názvy cache v service workeru dávej s vlastním prefixem (např. `moje-appka-v1`) a při aktivaci maž jen cache s tímto prefixem.
   Všechny appky sdílejí jednu doménu, takže i klíče v `localStorage` musí mít vlastní prefix.
3. Přidej odkaz do `index.html` v kořeni a řádek do tabulky výše.

## Trénink

Tréninkový deník podle [tabulky](https://docs.google.com/spreadsheets/d/1y8HHn25sJHpsbvg2Cuizpy0VugFoDhrHJK5yf5AcW7Y/edit) (A1, B, A2, 12 týdnů):
plán po dnech, odškrtávání sérií, řízený trénink s časovačem a hlasem, rozcvička, hormonální jóga, historie,
statistiky, export/import. Plán je v `trenink/data.js`, formát je popsaný v komentáři na začátku souboru.
Po změně souborů zvyš verzi cache v `trenink/sw.js` (`const CACHE = "trenink-v15"`).
Přesunuto z repozitáře `workouts`; stará adresa https://honzajscz.github.io/workouts/ jen přesměrovává.

## Claude Akademie

- zaměřená na co nejlepší používání aplikací **Claude Desktop** (Mac, Windows) a **Claude pro Android**
- 3 praktické kurzy (Desktop, Android, propojení obou: Dispatch, cloud, rutiny, bezpečnost) podle help centra Anthropic, stav listopad 2026
- checklist nastavení obou aplikací (22 kroků s odkazy na lekce), desktop psaný hlavně pro Windows
- dalších 8 kurzů podle Claude Academy (základy, AI zběhlost, Claude Code, Cowork, MCP, subagenti, skills); praktická cvičení nahrazena komentovanými ukázkami
- celkem 11 kurzů, 108 lekcí po 3 až 6 minutách
- kontrolní otázky s vysvětlením, kartičky s rozloženým opakováním, rychlý test, slovníček
- denní cíl, série dní, heatmapa, odznaky, poznámky, záložky, předčítání nahlas
- offline režim, export/import pokroku (data zůstávají v prohlížeči)

Obsah lekcí je v `claude-akademie/kurzy/*.js`, formát je popsaný v `kurzy/_index.js`.
Po změně souborů zvyš verzi cache v `claude-akademie/sw.js`.

## Konjunktiv I a II

- 7 lekcí výkladu v češtině s českým kontextem a rychlými kontrolními otázkami (podle učebnice DaF, kap. 10, s. 241 až 250)
- interaktivní tabulky 24 sloves (indikativ, K I, K II, co použít v nepřímé řeči) s režimem procvičování
- cvičení 63 až 66 z cvičebnice s řešením + 7 sad navíc, kvíz, opakování chyb, předčítání německých vět

Obsah je v `konjunktiv/data.js` (formát popsaný v komentáři na začátku). Po změně souborů zvyš verzi cache v `konjunktiv/sw.js`.

## Nasazení

Workflow `.github/workflows/pages.yml` nasadí celý repozitář na GitHub Pages při každém pushi do `main`.
Pokud se první běh nespustí, zapni v **Settings → Pages → Source** volbu **GitHub Actions**.

## Lokální spuštění

```bash
npx serve .
```
