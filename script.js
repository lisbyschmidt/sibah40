const $ = (id) => document.getElementById(id);

const FLEE_DISTANCE = 50; // px fra cursoren før en forkert knap stikker af
const EDGE = 16;          // margin til skærmkanten

let roundIndex = 0;
let answering = false;

// ---------- Skærme ----------

function show(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
}

function updateProgress() {
  $("progress").hidden = false;
  document.querySelectorAll(".heart").forEach((h, i) => {
    h.classList.toggle("filled", i < roundIndex);
  });
}

// ---------- Flugt ----------

function rectsOverlap(a, b, pad = 12) {
  return !(a.right + pad < b.left || a.left - pad > b.right ||
           a.bottom + pad < b.top || a.top - pad > b.bottom);
}

function flee(btn, px, py) {
  // Første gang: efterlad en usynlig pladsholder, så layoutet ikke hopper
  if (!btn.classList.contains("fleeing")) {
    const r = btn.getBoundingClientRect();
    const holder = document.createElement("span");
    holder.className = "placeholder";
    holder.style.cssText = `display:inline-block;width:${r.width}px;height:${r.height}px`;
    btn.before(holder);
    btn.style.left = r.left + "px";
    btn.style.top = r.top + "px";
    btn.classList.add("fleeing");
    btn.offsetWidth; // tving reflow, så transition virker fra startpositionen
  }

  const w = btn.offsetWidth;
  const h = btn.offsetHeight;
  const maxX = Math.max(EDGE, window.innerWidth - w - EDGE);
  const maxY = Math.max(EDGE, window.innerHeight - h - EDGE);

  // Undgå de rigtige knapper og andre synlige elementer
  const avoid = [...document.querySelectorAll(".screen.active .btn.right, .screen.active h1, .screen.active h2, #progress")]
    .filter((el) => el.getClientRects().length > 0)
    .map((el) => el.getBoundingClientRect());

  const cur = btn.getBoundingClientRect();
  const valid = (c) =>
    c.left >= EDGE && c.left <= maxX && c.top >= EDGE && c.top <= maxY &&
    !avoid.some((a) => rectsOverlap(a, c));
  // Afstand fra markøren til nærmeste punkt på knappen
  const pointerGap = (c) => Math.hypot(
    Math.max(c.left - px, 0, px - c.right),
    Math.max(c.top - py, 0, py - c.bottom),
  );

  // Lille hop: find den korteste flytning, der lige akkurat slipper fri af markøren
  let best = null;
  for (const maxHop of [140, 260, Infinity]) {
    let bestHop = Infinity;
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const hop = 40 + Math.random() * (Math.min(maxHop, 600) - 40);
      const x = cur.left + Math.cos(angle) * hop;
      const y = cur.top + Math.sin(angle) * hop;
      const cand = { left: x, top: y, right: x + w, bottom: y + h };
      if (!valid(cand) || pointerGap(cand) < FLEE_DISTANCE + 10) continue;
      if (hop < bestHop) { bestHop = hop; best = cand; }
    }
    if (best) break;
  }
  if (!best) {
    // Nødløsning: modsat hjørne af markøren
    best = {
      left: px < window.innerWidth / 2 ? maxX : EDGE,
      top: py < window.innerHeight / 2 ? maxY : EDGE,
    };
  }

  btn.style.left = best.left + "px";
  btn.style.top = best.top + "px";
}

function makeWrong(btn) {
  btn.classList.add("wrong");
  // Flygter først for musen, når markøren har været væk fra knappen.
  // Ellers hopper den med det samme, hvis musen står ved den fra sidste spørgsmål.
  btn.dataset.armed = "false";

  // Telefon (og mus): flygt i det øjeblik knappen rammes
  btn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    flee(btn, e.clientX, e.clientY);
  });
  // Tastatur
  btn.addEventListener("focus", () => {
    btn.blur();
    const r = btn.getBoundingClientRect();
    flee(btn, r.left + r.width / 2, r.top + r.height / 2);
  });
  // Sikkerhedsnet: et klik på en forkert knap gør aldrig noget
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
}

// Computer: stik af når cursoren nærmer sig
document.addEventListener("pointermove", (e) => {
  if (e.pointerType !== "mouse") return;
  document.querySelectorAll(".screen.active .btn.wrong").forEach((btn) => {
    if (btn.getClientRects().length === 0) return; // skjult
    const r = btn.getBoundingClientRect();
    const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
    const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
    if (Math.hypot(dx, dy) >= FLEE_DISTANCE) btn.dataset.armed = "true";
    else if (btn.dataset.armed === "true") flee(btn, e.clientX, e.clientY);
  });
});

// Hold flygtede knapper inden for skærmen ved resize/rotation
window.addEventListener("resize", () => {
  document.querySelectorAll(".btn.wrong.fleeing").forEach((btn) => {
    const maxX = window.innerWidth - btn.offsetWidth - EDGE;
    const maxY = window.innerHeight - btn.offsetHeight - EDGE;
    btn.style.left = Math.max(EDGE, Math.min(parseFloat(btn.style.left), maxX)) + "px";
    btn.style.top = Math.max(EDGE, Math.min(parseFloat(btn.style.top), maxY)) + "px";
  });
});

function resetWrong(btn) {
  btn.dataset.armed = "false";
  btn.classList.remove("fleeing");
  btn.style.left = btn.style.top = "";
  const prev = btn.previousElementSibling;
  if (prev && prev.classList.contains("placeholder")) prev.remove();
}

// ---------- Konfetti ----------

function burst(opts = {}) {
  if (typeof confetti !== "function") return;
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, ...opts });
}

function celebrate() {
  if (typeof confetti !== "function") return;
  const colors = ["#ff5d73", "#f4b740", "#ffffff", "#ffb3c1"];
  const end = Date.now() + 3000;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0 }, colors });
    confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  setTimeout(() => burst({ particleCount: 200, spread: 120, colors }), 600);
}

// ---------- Runder ----------

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startRound() {
  const round = CONTENT.rounds[roundIndex];
  $("round-label").textContent = `Spørgsmål ${roundIndex + 1} af ${CONTENT.rounds.length}`;
  $("question").textContent = CONTENT.question;

  const box = $("round-choices");
  box.innerHTML = "";
  box.hidden = false;

  const img = $("round-image");
  img.hidden = !round.image;
  if (round.image) img.src = round.image;

  const options = shuffle([
    { text: round.right, right: true },
    ...round.wrong.map((text) => ({ text, right: false })),
  ]);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = opt.text;
    if (opt.right) {
      btn.classList.add("right");
      btn.addEventListener("click", answer);
    } else {
      makeWrong(btn);
    }
    box.appendChild(btn);
  });

  show("round");
  updateProgress();
}

function answer() {
  if (answering) return;
  answering = true;
  roundIndex++;
  updateProgress();
  burst({ particleCount: 60, spread: 60 });

  setTimeout(() => {
    answering = false;
    if (roundIndex < CONTENT.rounds.length) startRound();
    else showFinal();
  }, 700);
}

function showFinal() {
  const f = CONTENT.final;
  $("final-title").textContent = CONTENT.name ? `${f.title}, kære ${CONTENT.name} ❤️` : `${f.title} ❤️`;
  $("final-intro").textContent = f.intro;
  const list = $("final-sides");
  list.innerHTML = "";
  CONTENT.rounds.forEach((round) => {
    const li = document.createElement("li");
    li.textContent = round.right;
    list.appendChild(li);
  });
  $("final-outro").textContent = f.outro;
  $("final-signature").textContent = f.signature;
  $("again").textContent = f.again;
  $("progress").hidden = true;
  show("final");
  document.querySelector("main").scrollTop = 0;
  celebrate();
}

// ---------- Start ----------

function init() {
  $("intro-title").textContent = CONTENT.intro.title;
  $("intro-text").textContent = CONTENT.intro.text;
  $("intro-yes").textContent = CONTENT.intro.yes;
  $("intro-no").textContent = CONTENT.intro.no;
  makeWrong($("intro-no"));

  $("intro-yes").addEventListener("click", () => {
    resetWrong($("intro-no"));
    roundIndex = 0;
    startRound();
  });

  $("again").addEventListener("click", () => {
    roundIndex = 0;
    $("progress").hidden = true;
    show("intro");
  });
}

init();
