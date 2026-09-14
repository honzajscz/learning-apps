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
| `claude-akademie/` | 🎓 Claude Akademie: česká učebnice práce s Claude podle [Claude Academy](https://academy.claude.com/) | https://honzajscz.github.io/learning-apps/claude-akademie/ |

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

- 8 kurzů, 83 lekcí po 3 až 6 minutách; praktická cvičení z originálu nahrazena komentovanými ukázkami
- kontrolní otázky s vysvětlením, kartičky s rozloženým opakováním, rychlý test, slovníček
- denní cíl, série dní, heatmapa, odznaky, poznámky, záložky, předčítání nahlas
- offline režim, export/import pokroku (data zůstávají v prohlížeči)

Obsah lekcí je v `claude-akademie/kurzy/*.js`, formát je popsaný v `kurzy/_index.js`.
Po změně souborů zvyš verzi cache v `claude-akademie/sw.js`.

## Nasazení

Workflow `.github/workflows/pages.yml` nasadí celý repozitář na GitHub Pages při každém pushi do `main`.
Pokud se první běh nespustí, zapni v **Settings → Pages → Source** volbu **GitHub Actions**.

## Lokální spuštění

```bash
npx serve .
```
