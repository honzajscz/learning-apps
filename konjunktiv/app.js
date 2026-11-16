/* Konjunktiv I a II: logika aplikace (bez závislostí). Obsah je v data.js. */
(function () {
  "use strict";

  const { LESSONS, SETS, VERBS } = window.KONJ;
  const PERSONS = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];
  const KEY = "konjunktiv-v1"; // vlastní prefix, ostatní appky na doméně mají své klíče

  // položky dostanou stabilní id podle sady a pořadí
  SETS.forEach(s => s.items.forEach((it, i) => { it.id = s.id + "-" + i; it.set = s.id; }));
  LESSONS.forEach(l => (l.check || []).forEach((it, i) => { it.id = "L" + l.id + "-" + i; }));
  const ALL_ITEMS = SETS.flatMap(s => s.items);
  const byId = Object.fromEntries(ALL_ITEMS.map(it => [it.id, it]));

  /* ---------- stav ---------- */
  let S = { read: {}, sets: {}, quiz: [], wrong: {} };
  try { S = Object.assign(S, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const view = $("#view");

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1600);
  }

  /* ---------- kontrola odpovědí ---------- */
  function expand(p) {
    const m = p.match(/\{([^{}]*)\}/);
    if (!m) return [p];
    return m[1].split("|").flatMap(o => expand(p.slice(0, m.index) + o + p.slice(m.index + m[0].length)));
  }
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
      .replace(/[.,!?;:„“”"'()…\/]/g, " ").replace(/\s+/g, " ").trim();
  }
  const accepted = it => it._acc || (it._acc = new Set(it.a.flatMap(expand).map(norm)));
  function checkInput(it, value) {
    let v = norm(value);
    if (it.lead) {
      const l = norm(it.lead);
      if (v.startsWith(l + " ")) v = v.slice(l.length + 1);
    }
    // u tvarů typu „er komme“ uznáme i odpověď se zájmenem
    if (accepted(it).has(v)) return true;
    const parts = v.split(" ");
    if (parts.length === 2 && accepted(it).has(parts[1])) return true;
    return false;
  }

  /* ---------- předčítání ---------- */
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text.replace(/[„“]/g, ""));
    u.lang = "de-DE"; u.rate = 0.92;
    const de = speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith("de"));
    if (de) u.voice = de;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
  document.addEventListener("click", e => {
    const el = e.target.closest(".de");
    if (el && !e.target.closest("button, a, input")) speak(el.textContent);
  });

  /* ---------- evidence chyb ---------- */
  function mark(it, ok) {
    if (!it.id || it.id.startsWith("L")) return;
    if (ok) { if (S.wrong[it.id]) { S.wrong[it.id]--; if (S.wrong[it.id] <= 0) delete S.wrong[it.id]; } }
    else S.wrong[it.id] = (S.wrong[it.id] || 0) + 1;
    save();
  }

  /* ---------- vykreslení jedné otázky ---------- */
  // onDone(ok, odpověď) se zavolá po vyhodnocení; vrací element
  function renderQuestion(it, onDone) {
    const el = document.createElement("div");
    el.className = "q";
    let html = `<div class="qtext">${it.q}</div>`;
    if (it.t === "choice") {
      html += `<div class="opts">${it.o.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join("")}</div>`;
    } else {
      if (it.lead) html += `<div class="lead">${esc(it.lead)} …</div>`;
      html += `<div class="answer-row"><input type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="de" placeholder="Napiš odpověď"><button class="btn small chk">Zkontrolovat</button></div>
        <div class="uml">${["ä", "ö", "ü", "ß"].map(c => `<button type="button" data-c="${c}">${c}</button>`).join("")}<small>nebo piš ae, oe, ue, ss</small></div>`;
    }
    html += `<div class="fbwrap"></div>`;
    el.innerHTML = html;
    const fbwrap = $(".fbwrap", el);
    let answered = false;

    function feedback(ok, extra) {
      fbwrap.innerHTML = `<div class="fb ${ok ? "right" : "wrong"}"><b class="h">${ok ? "✓ Správně!" : "✗ Ještě ne."}</b>${extra || ""}${it.ex ? `<div>${it.ex}</div>` : ""}</div>`;
    }

    if (it.t === "choice") {
      el.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
        if (answered) return; answered = true;
        const i = +b.dataset.i, ok = i === it.a;
        el.querySelectorAll(".opt").forEach(x => { x.disabled = true; });
        el.querySelector(`.opt[data-i="${it.a}"]`).classList.add("right");
        if (!ok) b.classList.add("wrong");
        feedback(ok);
        onDone(ok, it.o[i]);
      }));
    } else {
      const inp = $("input", el), btn = $(".chk", el);
      el.querySelectorAll(".uml button").forEach(b => b.addEventListener("click", () => {
        const s = inp.selectionStart ?? inp.value.length, e2 = inp.selectionEnd ?? inp.value.length;
        inp.value = inp.value.slice(0, s) + b.dataset.c + inp.value.slice(e2);
        inp.focus(); inp.setSelectionRange(s + 1, s + 1);
      }));
      const go = () => {
        if (answered) return;
        if (!inp.value.trim()) { inp.focus(); return; }
        answered = true;
        const ok = checkInput(it, inp.value);
        inp.classList.add(ok ? "right" : "wrong"); inp.readOnly = true; btn.disabled = true;
        const model = `<div class="model de">${esc(it.show)}</div>`;
        feedback(ok, ok ? (norm(inp.value) !== norm(it.show) ? `<div class="mini">Vzorově: </div>${model}` : "") :
          `<div class="mini">Správná odpověď:</div>${model}`);
        if (!ok) {
          const ov = document.createElement("button");
          ov.className = "override"; ov.textContent = "Mám to jinak, ale taky správně";
          ov.addEventListener("click", () => {
            ov.remove();
            $(".fb", el).className = "fb right";
            $(".fb .h", el).textContent = "✓ Uznáno";
            inp.classList.replace("wrong", "right");
            onDone(true, inp.value, true);
          });
          $(".fb", el).appendChild(ov);
        }
        onDone(ok, inp.value);
      };
      btn.addEventListener("click", go);
      inp.addEventListener("keydown", e => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (!answered) go();
        else { const n = document.querySelector(".nav .next"); if (n) n.click(); } // druhý Enter = další otázka
      });
    }
    return el;
  }

  /* ---------- běh sady otázek ---------- */
  function runner({ title, intro, items, onFinish, backHref }) {
    let idx = 0;
    const res = items.map(() => ({ ok: null, ans: "" }));
    view.innerHTML = `${intro ? `<p class="intro">${intro}</p>` : ""}
      <div class="runner-top"><span class="pos"></span><span class="score"></span></div>
      <div class="progress"><div></div></div><div class="slot"></div><div class="row nav"></div>`;
    const slot = $(".slot"), nav = $(".nav");

    function upd() {
      $(".pos").textContent = `Otázka ${idx + 1} z ${items.length}`;
      const good = res.filter(r => r.ok).length;
      $(".score").textContent = `✓ ${good}`;
      $(".progress > div").style.width = (100 * idx / items.length) + "%";
    }
    function show() {
      upd();
      slot.innerHTML = ""; nav.innerHTML = "";
      const it = items[idx];
      const q = renderQuestion(it, (ok, ans, override) => {
        const first = res[idx].ok === null;
        mark(it, ok);
        res[idx] = { ok, ans };
        upd();
        if (first) {
          nav.innerHTML = `<button class="btn next">${idx + 1 < items.length ? "Další ›" : "Výsledek"}</button>`;
          $(".next", nav).addEventListener("click", () => { idx++; idx < items.length ? show() : finish(); });
          if (it.t === "choice") $(".next", nav).focus({ preventScroll: true });
        }
      });
      slot.appendChild(q);
      const inp = $("input", q); if (inp && matchMedia("(pointer:fine)").matches) inp.focus();
      window.scrollTo(0, 0);
    }
    function finish() {
      const good = res.filter(r => r.ok).length, pct = Math.round(100 * good / items.length);
      const bad = items.map((it, i) => ({ it, r: res[i] })).filter(x => !x.r.ok);
      onFinish && onFinish(good, items.length);
      const msg = pct === 100 ? "Výborně, bez chyby! 🎉" : pct >= 80 ? "Skvělé, skoro všechno! 💪" : pct >= 50 ? "Dobrý základ, chyby si zopakuj." : "Nevadí, projdi si výklad a zkus to znovu.";
      view.innerHTML = `<div class="card result"><div class="big">${good} / ${items.length}</div><p>${msg}</p>
        <div class="row" style="justify-content:center"><button class="btn again">Znovu</button><a class="btn ghost" href="${backHref}">Zpět</a></div></div>
        ${bad.length ? `<div class="card mistakes"><h3 style="margin-top:0">Chyby k zopakování</h3>${bad.map(({ it, r }) => `
          <div class="m"><div>${it.q}${it.lead ? `<br><span class="mini">${esc(it.lead)} …</span>` : ""}</div>
          <div class="yours">Tvoje: ${esc(r.ans || "")}</div>
          <div class="corr">Správně: ${it.t === "choice" ? it.o[it.a] : esc(it.show)}</div></div>`).join("")}</div>` : ""}`;
      $(".again").addEventListener("click", () => runner({ title, intro, items: shuffleIfQuiz(items), onFinish, backHref }));
      window.scrollTo(0, 0);
    }
    show();
  }
  let quizMode = false;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const shuffleIfQuiz = items => quizMode ? shuffle(items) : items;

  /* ---------- hlavička ---------- */
  function header(title, sub, back) {
    $("#h-title").textContent = title;
    $("#h-sub").textContent = sub || "";
    const b = $("#h-back");
    b.style.display = back ? "" : "none";
    if (back) b.setAttribute("href", back);
    document.title = title === "Konjunktiv I a II" ? title : title + " · Konjunktiv";
  }
  function tab(name) {
    document.querySelectorAll(".tabbar a").forEach(a => a.classList.toggle("on", a.dataset.tab === name));
  }

  /* ---------- obrazovky ---------- */
  function home() {
    header("Konjunktiv I a II", "Německá gramatika česky"); tab("domu");
    const read = LESSONS.filter(l => S.read[l.id]).length;
    const doneSets = SETS.filter(s => S.sets[s.id]).length;
    const wrongN = Object.keys(S.wrong).filter(id => byId[id]).length;
    const next = LESSONS.find(l => !S.read[l.id]);
    const lastQ = S.quiz.slice(-5).reverse();
    view.innerHTML = `
      <div class="card hero"><h2>Ahoj! 👋</h2>
        <p>Konjunktiv I a II podle materiálů od učitele: výklad v češtině, tabulky sloves, cvičení z učebnice i navíc a kvíz s okamžitou zpětnou vazbou.</p>
        <div class="stats">
          <div class="stat"><b>${read}/${LESSONS.length}</b><span>lekcí přečteno</span></div>
          <div class="stat"><b>${doneSets}/${SETS.length}</b><span>sad procvičeno</span></div>
          <div class="stat"><b>${wrongN}</b><span>chyb k opakování</span></div>
        </div>
        <div class="row">
          ${next ? `<a class="btn" href="#/vyklad/${next.id}">${read ? "Pokračovat ve výkladu" : "Začít výkladem"} ›</a>` : `<a class="btn" href="#/kviz">Spustit kvíz ›</a>`}
          ${wrongN ? `<a class="btn ghost" href="#/chyby">Opakovat chyby (${wrongN})</a>` : ""}
        </div>
      </div>
      <h3 class="sec">Doporučený postup</h3>
      <div class="list">
        <a class="item" href="#/vyklad"><span class="num">1</span><span class="txt"><b>Výklad</b><span>7 krátkých lekcí s českým kontextem a kontrolními otázkami</span></span></a>
        <a class="item" href="#/tabulky"><span class="num">2</span><span class="txt"><b>Tabulky sloves</b><span>24 sloves, kdy K I funguje a kdy je potřeba náhrada</span></span></a>
        <a class="item" href="#/cviceni"><span class="num">3</span><span class="txt"><b>Cvičení</b><span>Úlohy 63 až 66 z učebnice s řešením + 7 sad navíc</span></span></a>
        <a class="item" href="#/kviz"><span class="num">4</span><span class="txt"><b>Kvíz</b><span>15 náhodných otázek ze všeho</span></span></a>
      </div>
      ${lastQ.length ? `<h3 class="sec">Poslední kvízy</h3><div class="card">${lastQ.map(q => `<div>${new Date(q.d).toLocaleDateString("cs-CZ")}: <b>${q.s} / ${q.n}</b></div>`).join("")}</div>` : ""}
      <p class="mini" style="text-align:center;margin-top:20px">Tip: na německé věty můžeš kliknout a appka ti je přečte nahlas. 🔊</p>`;
  }

  function lessonList() {
    header("Výklad", "7 lekcí"); tab("vyklad");
    view.innerHTML = `<div class="list">${LESSONS.map((l, i) => `
      <a class="item" href="#/vyklad/${l.id}"><span class="num ${S.read[l.id] ? "done" : ""}">${S.read[l.id] ? "✓" : i + 1}</span>
      <span class="txt"><b>${l.title}</b><span>${l.sub}</span></span></a>`).join("")}</div>`;
  }

  function lesson(id) {
    const i = LESSONS.findIndex(l => l.id === id);
    if (i < 0) return lessonList();
    const l = LESSONS[i], next = LESSONS[i + 1], prev = LESSONS[i - 1];
    header(l.title, `Lekce ${i + 1} z ${LESSONS.length}`, "#/vyklad"); tab("vyklad");
    view.innerHTML = `<article class="lesson">${l.html}</article>
      ${l.check && l.check.length ? `<div class="check"><h3 class="sec">Rychlá kontrola</h3><div class="checks"></div></div>` : ""}
      <div class="row" style="justify-content:space-between">
        ${prev ? `<a class="btn ghost" href="#/vyklad/${prev.id}">‹ ${prev.title}</a>` : "<span></span>"}
        ${next ? `<a class="btn done-next" href="#/vyklad/${next.id}">Hotovo, další ›</a>` : `<a class="btn done-next" href="#/cviceni">Hotovo, jdu na cvičení ›</a>`}
      </div>`;
    const box = $(".checks");
    if (box) l.check.forEach(it => box.appendChild(renderQuestion(it, () => {})));
    $(".done-next").addEventListener("click", () => { S.read[l.id] = true; save(); });
    window.scrollTo(0, 0);
  }

  function setList() {
    header("Cvičení", `${SETS.length} sad, ${ALL_ITEMS.length} úloh`); tab("cviceni");
    const row = s => {
      const r = S.sets[s.id];
      const badge = r ? `<span class="badge ${r.best === s.items.length ? "good" : ""}">${r.best}/${s.items.length}</span>` : `<span class="badge">${s.items.length} úloh</span>`;
      return `<a class="item" href="#/cviceni/${s.id}"><span class="num ${r && r.best === s.items.length ? "done" : ""}">${r && r.best === s.items.length ? "✓" : s.items[0].t === "choice" ? "◉" : "✎"}</span>
        <span class="txt"><b>${s.title}</b><span>${s.source ? s.source + " · " : ""}${s.sub}</span></span>${badge}</a>`;
    };
    view.innerHTML = `<h3 class="sec">Z učebnice (s. 192 až 193)</h3><div class="list">${SETS.filter(s => s.source).map(row).join("")}</div>
      <h3 class="sec">Procvičování navíc</h3><div class="list">${SETS.filter(s => !s.source).map(row).join("")}</div>
      <p class="mini">U psaných odpovědí se nehledí na velká písmena ani interpunkci. Když máš jinou správnou variantu, než jakou appka zná, klikni na „Mám to jinak, ale taky správně“.</p>`;
  }

  function setRun(id) {
    const s = SETS.find(x => x.id === id);
    if (!s) return setList();
    header(s.title, s.sub, "#/cviceni"); tab("cviceni");
    quizMode = false;
    runner({
      title: s.title, intro: s.intro, items: s.items, backHref: "#/cviceni",
      onFinish: (good) => {
        const r = S.sets[s.id] || { best: 0, runs: 0 };
        r.best = Math.max(r.best, good); r.runs++; S.sets[s.id] = r; save();
      }
    });
  }

  function quizIntro() {
    header("Kvíz", "Náhodné otázky ze všech sad"); tab("kviz");
    const wrongN = Object.keys(S.wrong).filter(id => byId[id]).length;
    view.innerHTML = `<div class="card"><h2 style="margin-top:0">🎯 Kvíz</h2>
      <p>15 náhodných otázek ze všech cvičení: výběr i psaní. Hodí se jako závěrečné opakování nebo rychlý trénink před hodinou.</p>
      <div class="row"><button class="btn go15">Spustit (15 otázek)</button><button class="btn ghost go30">Delší (30)</button></div></div>
      <div class="card"><h3 style="margin-top:0">🔁 Opakování chyb</h3>
      <p>${wrongN ? `Máš <b>${wrongN}</b> otázek, které ti zatím nešly. Po správné odpovědi z opakování zmizí.` : "Zatím žádné chyby k opakování. 👍"}</p>
      <div class="row"><a class="btn ${wrongN ? "" : "ghost"}" href="#/chyby" ${wrongN ? "" : "aria-disabled=\"true\""}>Opakovat chyby</a></div></div>`;
    const start = n => {
      quizMode = true;
      // vyvážený výběr: z každé sady aspoň něco
      const pool = shuffle(ALL_ITEMS).slice(0, n);
      header("Kvíz", `${n} otázek`, "#/kviz");
      runner({
        title: "Kvíz", items: pool, backHref: "#/kviz",
        onFinish: (good, total) => { S.quiz.push({ d: Date.now(), s: good, n: total }); S.quiz = S.quiz.slice(-50); save(); }
      });
    };
    $(".go15").addEventListener("click", () => start(15));
    $(".go30").addEventListener("click", () => start(30));
  }

  function mistakes() {
    const items = shuffle(Object.keys(S.wrong).map(id => byId[id]).filter(Boolean));
    header("Opakování chyb", items.length ? `${items.length} otázek` : "", "#/kviz"); tab("kviz");
    if (!items.length) { view.innerHTML = `<div class="card result"><div class="big">👍</div><p>Žádné chyby k opakování.</p><a class="btn" href="#/kviz">Zpět na kvíz</a></div>`; return; }
    quizMode = true;
    runner({ title: "Opakování chyb", items: items.slice(0, 20), backHref: "#/" });
  }

  /* ---------- tabulky sloves ---------- */
  let verbSel = "haben", hide = false;
  function useFor(v, i) {
    if (v.k1[i] !== v.ind[i]) return { t: v.k1[i], c: "k1", why: "K I" };
    if (v.k2prat) return { t: (i === 1 ? "würdest" : i === 4 ? "würdet" : (i === 3 || i === 5) ? "würden" : "würde") + " " + v.inf, c: "", why: "würde" };
    return { t: v.k2[i], c: "k2", why: "K II" };
  }
  function tables() {
    header("Tabulky sloves", "Indikativ, Konjunktiv I a II"); tab("tabulky");
    const v = VERBS.find(x => x.inf === verbSel) || VERBS[0];
    view.innerHTML = `
      <div class="chips">${VERBS.map(x => `<button class="chip ${x.inf === v.inf ? "on" : ""}" data-v="${x.inf}">${x.inf}</button>`).join("")}</div>
      <div class="card">
        <h2 style="margin:0 0 2px"><span class="de">${v.inf}</span> <span class="cz" style="font-size:1rem">(${v.cz})</span></h2>
        <label class="toggle"><input type="checkbox" class="hide" ${hide ? "checked" : ""}> Procvičit: skrýt tvary Konjunktivu a doplnit je</label>
        <div class="scroll"><table class="verb">
          <thead><tr><th></th><th>Indikativ</th><th>Konj. I</th><th>Konj. II</th><th>Nepřímá řeč</th></tr></thead>
          <tbody>${PERSONS.map((p, i) => {
            const same = v.k1[i] === v.ind[i], u = useFor(v, i);
            const cell = (cls, val) => hide ? `<td class="${cls}"><input data-ans="${esc(val)}" autocomplete="off" autocapitalize="off" spellcheck="false"></td>` : `<td class="${cls} ${cls === "k1" && same ? "same" : ""}">${val}</td>`;
            return `<tr><td class="p">${p}</td><td>${v.ind[i]}</td>${cell("k1", v.k1[i])}${cell("k2", v.k2[i])}<td class="use ${u.c}">${hide ? "?" : u.t}</td></tr>`;
          }).join("")}</tbody></table></div>
        <div class="legend">Přeškrtnuté tvary Konjunktivu I se shodují s indikativem, proto se v nepřímé řeči nahrazují Konjunktivem II.
        ${v.k2prat ? "<br><b>Pravidelné sloveso:</b> Konjunktiv II je stejný jako Präteritum, proto se místo něj používá <b>würde + infinitiv</b>." : ""}
        ${v.k2rare ? "<br><b>Pozn.:</b> vlastní tvar Konjunktivu II zní knižně, v běžné řeči se používá spíš <b>würde + infinitiv</b> (např. <i>ich würde " + v.inf + "</i>)." : ""}
        ${v.k2note ? "<br><b>Pozn.:</b> " + v.k2note : ""}</div>
        ${hide ? `<div class="row"><button class="btn small chkall">Zkontrolovat vše</button></div>` : ""}
      </div>
      <p class="mini">Klikni na tvar slovesa v záhlaví a appka ho přečte. Tvary se dají psát i bez přehlásek (ae, oe, ue).</p>`;
    view.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => { verbSel = b.dataset.v; tables(); }));
    $(".hide").addEventListener("change", e => { hide = e.target.checked; tables(); });
    const chk = inp => {
      const ok = expand(inp.dataset.ans.replace(/\((\w+)\)/, "{$1|}")).map(norm).includes(norm(inp.value));
      inp.classList.toggle("right", ok); inp.classList.toggle("wrong", !ok && !!inp.value.trim());
      return ok;
    };
    view.querySelectorAll("table.verb input").forEach(inp => {
      inp.addEventListener("change", () => chk(inp));
      inp.addEventListener("keydown", e => { if (e.key === "Enter") { chk(inp); const all = [...view.querySelectorAll("table.verb input")]; const n = all[all.indexOf(inp) + 1]; n && n.focus(); } });
    });
    const ca = $(".chkall");
    if (ca) ca.addEventListener("click", () => {
      const all = [...view.querySelectorAll("table.verb input")];
      const good = all.filter(chk).length;
      toast(`${good} z ${all.length} správně`);
      if (good === all.length) toast("Všechno správně! 🎉");
    });
  }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, "").split("/");
    if (window.speechSynthesis) speechSynthesis.cancel();
    switch (h[0]) {
      case "vyklad": return h[1] ? lesson(h[1]) : lessonList();
      case "cviceni": return h[1] ? setRun(h[1]) : setList();
      case "tabulky": return tables();
      case "kviz": return quizIntro();
      case "chyby": return mistakes();
      default: return home();
    }
  }
  window.addEventListener("hashchange", route);
  route();
})();
