/* =====================================================================
   ALL YOUR CONTENT LIVES HERE. Change text, photos and links in CONTENT.
   Empty values ("") are hidden or shown as a placeholder until you fill them.
   ===================================================================== */
const CONTENT = {
  name: "Anup Singh",
  roles: "Video Editor · Graphic Designer · Motion Designer · After Effects",
  cardRole: "Video Editor & Motion",                      // short job title on the ID card
  cardCode: "ID · 2026 · AS-01",
  tagline: "I shape attention through pacing, motion and composition.",
  strapText: "VIDEO EDITOR • MOTION DESIGNER • ANUP SINGH • ",

  // software badges: ae, pr, ps, ai, davinci (shown as coloured app logos)
  tools: ["ae", "pr", "ps", "ai", "davinci"],
  skills: ["Sound design", "Motion graphics", "Typography", "VFX", "Pacing", "Color"],

  aboutTitle: "Edits with a pulse.",
  about: "I'm Anup, a video editor and motion designer. I cut long-form videos and Shorts, design the graphics that go in them, and build motion in After Effects so every frame earns its place.",
  strengths: ["Visual direction", "Storytelling", "Pacing"],

  photos: {
    card: "assets/me-front.webp",   // ID card photo
    normal: "assets/me-front.webp", // About photo, normal version
    hero: "assets/me-mask.webp",    // About photo, Venom version (same size and framing as normal)
  },

  // Work, newest first. Paste a YouTube link in "url".
  longForm: [
    { title: "Launch Video for SaaSWAVE", meta: "Client · Arsacre", url: "https://youtu.be/x-Pq1SRFTkU" },
    { title: "How to Create AI Motion Graphics in Minutes", meta: "Client · ReachMora", url: "https://youtu.be/n50KkoucMpU" },
    { title: "Editing Motion Graphics Reels in Premiere Pro", meta: "Client · Usman Explains", url: "https://youtu.be/Aa_T1uI4UXY" },
    { title: "How to Become a Graphic Designer", meta: "Client · Devesh Sharma", url: "https://youtu.be/CY25svrgxC0" },
  ],
  shorts: [
    { title: "Motion Graphics Product Ads", meta: "Client · Akshay Barate", url: "https://www.youtube.com/shorts/fLonJKaTQqM" },
    { title: "Motion Design Reel 2023", meta: "Client · sanephix", url: "https://youtube.com/shorts/Ym_hRAgy97k" },
    { title: "Shoe Ad Animation in After Effects", meta: "Client · Sekhsadi Academy", url: "https://youtube.com/shorts/xWbqUWQe4PU" },
  ],

  steps: [
    { title: "Hook", text: "Find the first three seconds that make people stay." },
    { title: "Story & pacing", text: "Shape the cut so every beat pulls into the next." },
    { title: "Motion & sound", text: "Titles, graphics and After Effects motion, locked to the sound design." },
    { title: "Polish & deliver", text: "Colour, mix and exports for every platform, on time." },
  ],

  contactLine: "Tell me about your video. I usually reply within a day.",
  email: "antimsinghanup@gmail.com",
  whatsapp: "8801613883578",   // with country code, digits only
  whatsappDisplay: "+880 1613-883578",
  socials: [        // e.g. { label: "Instagram", url: "https://instagram.com/you" }
  ],

  collabLabel: "let’s collab",
  collabLink: "#contact",   // on the contact section, a click opens WhatsApp instead
};

/* ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const ICON = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  out: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>',
};
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Fill the page ---------- */
document.querySelectorAll("[data-c]").forEach((n) => { const v = CONTENT[n.dataset.c]; if (v) n.textContent = v; });
$("#year").textContent = new Date().getFullYear();
const TOOL_LOGOS = {
  ae: { name: "Adobe After Effects", tile: ["#00005b", "#d291ff"], txt: "Ae" },
  pr: { name: "Adobe Premiere Pro", tile: ["#00005b", "#9999ff"], txt: "Pr" },
  ps: { name: "Adobe Photoshop", tile: ["#001e36", "#31a8ff"], txt: "Ps" },
  ai: { name: "Adobe Illustrator", tile: ["#330000", "#ff9a00"], txt: "Ai" },
  davinci: { name: "DaVinci Resolve", svg: '<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#14171c"/><circle cx="20" cy="14.5" r="7" fill="#e64b3b" opacity=".92"/><circle cx="14" cy="24.5" r="7" fill="#3cb878" opacity=".92"/><circle cx="26" cy="24.5" r="7" fill="#2f8fe0" opacity=".92"/></svg>' },
};
CONTENT.tools.forEach((k) => {
  const t = TOOL_LOGOS[k];
  if (!t) return;
  const li = el("li", "tool", t.svg || `<svg viewBox="0 0 40 40" aria-hidden="true"><rect x=".75" y=".75" width="38.5" height="38.5" rx="9" fill="${t.tile[0]}" stroke="${t.tile[1]}" stroke-width="1.5"/><text x="20" y="26.5" text-anchor="middle" font-family="Geist, system-ui, sans-serif" font-weight="700" font-size="17" fill="${t.tile[1]}">${t.txt}</text></svg>`);
  li.title = t.name; li.setAttribute("aria-label", t.name);
  $("#tools").append(li);
});
CONTENT.strengths.forEach((t) => $("#strengths").append(el("li", null, esc(t))));
CONTENT.steps.forEach((s) => $("#steps").append(el("li", null, `<h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>`)));
{ // skills strip: words alternate two styles, a spinning star between them; 4 copies so the loop is seamless
  const strip = $("#strip");
  const star = '<svg class="strip__star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z"/></svg>';
  const group = CONTENT.skills.map((s, i) => `<span class="strip__word${i % 2 ? " strip__word--alt" : ""}">${esc(s)}</span>${star}`).join("");
  strip.innerHTML = [0, 1, 2, 3].map((n) => `<div class="strip__group"${n ? ' aria-hidden="true"' : ""}>${group}</div>`).join("");
}

/* ---------- Work rails ---------- */
function ytId(url) {
  if (!url) return "";
  const m = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : "";
}
function buildRail(list, railEl, isShort) {
  list.forEach((v, i) => {
    const id = ytId(v.url);
    const fig = el("figure", "vid");
    const media = el("button", "vid__media");
    media.type = "button";
    if (id) {
      media.setAttribute("aria-label", `Play ${v.title}`);
      media.dataset.cursor = "";
      const thumb = isShort ? `https://i.ytimg.com/vi/${id}/oardefault.jpg` : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      media.innerHTML = `<img src="${thumb}" alt="" loading="lazy" decoding="async" width="480" height="${isShort ? 854 : 270}" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'"><span class="vid__play">${ICON.play}</span>`;
      media.addEventListener("click", () => {
        const f = document.createElement("iframe");
        f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
        f.title = v.title; f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"; f.allowFullscreen = true;
        const box = el("div", "vid__media");
        box.append(f);
        media.replaceWith(box);
        f.focus();
      }, { once: true });
    } else {
      media.disabled = true;
      media.setAttribute("aria-label", `${v.title}: video coming soon`);
      media.innerHTML = `<span class="vid__ph"><span>${isShort ? "9:16" : "16:9"}</span><span>Video ${i + 1} · add link</span></span>`;
    }
    fig.append(media);
    fig.append(el("figcaption", null, `${esc(v.title)}<small>${esc(v.meta || "")}</small>`));
    railEl.append(fig);
  });
}
buildRail(CONTENT.longForm, $("#rail-long"), false);
buildRail(CONTENT.shorts, $("#rail-short"), true);
document.querySelectorAll(".arrow").forEach((b) => {
  const rail = $(`#rail-${b.dataset.rail}`);
  const update = () => {
    const btns = document.querySelectorAll(`.arrow[data-rail="${b.dataset.rail}"]`);
    btns[0].disabled = rail.scrollLeft < 4;
    btns[1].disabled = rail.scrollLeft + rail.clientWidth > rail.scrollWidth - 4;
  };
  b.addEventListener("click", () => rail.scrollBy({ left: Number(b.dataset.dir) * rail.clientWidth * 0.8, behavior: reduceMotion ? "auto" : "smooth" }));
  rail.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
});

/* ---------- Contact ---------- */
const toast = (msg) => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1800); };
{
  const rows = $("#contactRows");
  const row = (k, html) => rows.append(el("div", "crow", `<span class="crow__k">${k}</span>${html}`));
  if (CONTENT.email) {
    row("Email", `<a class="crow__v" href="mailto:${esc(CONTENT.email)}">${esc(CONTENT.email)}</a><button class="copy" type="button" data-cursor>${ICON.copy}Copy</button>`);
    rows.lastChild.querySelector(".copy").addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(CONTENT.email); toast("Email copied"); } catch { toast(CONTENT.email); }
    });
  } else row("Email", `<span class="crow__v is-empty">Email coming soon</span>`);
  if (CONTENT.whatsapp) {
    const n = CONTENT.whatsapp.replace(/\D/g, "");
    row("WhatsApp", `<a class="crow__v" href="https://wa.me/${n}" target="_blank" rel="noopener">${esc(CONTENT.whatsappDisplay || "+" + n)}</a>`);
  } else row("WhatsApp", `<span class="crow__v is-empty">WhatsApp coming soon</span>`);
  CONTENT.socials.forEach((s) => $("#socials").append(el("li", null, `<a href="${esc(s.url)}" target="_blank" rel="noopener" data-cursor>${esc(s.label)}${ICON.out}</a>`)));
}

/* ---------- Loader + nav + progress ---------- */
let afterLoad = [];
{
  const loader = $("#loader"), tc = $("#loaderTc"), start = performance.now(), DUR = reduceMotion ? 0 : 750;
  const pad = (n) => String(n).padStart(2, "0");
  const tick = (now) => {
    const t = Math.min(1, (now - start) / Math.max(1, DUR)), frames = Math.floor(t * 96);
    tc.textContent = `00:00:${pad(Math.floor(frames / 24))}:${pad(frames % 24)}`;
    if (t < 1) requestAnimationFrame(tick);
    else { loader.classList.add("done"); afterLoad.forEach((f) => f()); afterLoad = null; }
  };
  requestAnimationFrame(tick);
}
const onLoaded = (f) => (afterLoad ? afterLoad.push(f) : f());
{
  const nav = $("#nav"), bar = $("#progress");
  let lastY = scrollY, queued = false;
  const update = () => {
    queued = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("hide", y > lastY && y > 160);
    lastY = y;
    processUpdate();
  };
  addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
  nav.addEventListener("focusin", () => nav.classList.remove("hide"));
}

/* ---------- Process timeline: tilts flat and steps light up on scroll ---------- */
const tlEl = $("#timeline"), stepEls = [...document.querySelectorAll("#steps li")];
function processUpdate() {
  const r = tlEl.getBoundingClientRect(), vh = innerHeight;
  if (r.bottom < -200 || r.top > vh + 200) return;
  const p = clamp((vh - r.top) / (vh * 0.9), 0, 1);       // 0 when it enters, 1 near the middle
  if (!reduceMotion) { tlEl.style.setProperty("--tilt", `${(1 - p) * 38}deg`); tlEl.style.setProperty("--tscale", (0.92 + p * 0.08).toFixed(3)); }
  const ph = clamp((vh * 0.75 - r.top) / (vh * 0.9), 0, 1); // playhead runs across as you scroll
  tlEl.style.setProperty("--ph", ph.toFixed(3));
  stepEls.forEach((s, i) => s.classList.toggle("on", ph >= i / stepEls.length + 0.02 || (reduceMotion && p > 0)));
}
processUpdate();

/* ---------- EFFECT 1: Hanging, stretchy ID card (Verlet rope) ---------- */
{
  $("#cardName").textContent = CONTENT.name;
  $("#cardRole").textContent = CONTENT.cardRole;
  $("#cardCode").textContent = CONTENT.cardCode;
  $("#cardPhoto").src = CONTENT.photos.card;
  $("#strapText").textContent = CONTENT.strapText.repeat(8);

  const SEGMENTS = 12, GRAVITY = 0.55, DAMPING = 0.982, MAX_SPEED = 16, CLIP_GAP = 16;
  const stage = $("#stage"), card = $("#card"), inner = $(".card__inner"), holo = $(".card__holo"), strap = $("#strapPath"), hint = $("#hint");
  let W, H, anchor, segLen, pts = [], cons = [], drag = null, hasDragged = false, settled = 0, running = false, visible = true, still = 0;

  const anchorX = () => (innerWidth > 960 ? 0.5 : 0.5);
  function build() {
    W = card.offsetWidth; H = card.offsetHeight;
    const sh = stage.clientHeight;
    const restTop = innerWidth > 960 ? Math.max(130, (sh - H) / 2 - 10) : Math.max(70, sh - H - 70);
    const ropeLen = Math.max(50, restTop - CLIP_GAP + 20);
    anchor = { x: stage.clientWidth * anchorX(), y: -20 };
    segLen = ropeLen / SEGMENTS; pts = []; cons = [];
    const lift = reduceMotion ? 0 : ropeLen + H + 60, sway = reduceMotion ? 0 : 90;
    for (let i = 0; i <= SEGMENTS; i++) {
      const t = i / SEGMENTS, x = anchor.x + sway * t, y = anchor.y + i * segLen - lift * t;
      pts.push({ x, y, px: x, py: y, w: i === 0 ? 0 : 1 });
    }
    const clip = pts[SEGMENTS], top = clip.y + CLIP_GAP, cx = clip.x + (reduceMotion ? 0 : 30);
    [[cx - W / 2, top], [cx + W / 2, top], [cx + W / 2, top + H], [cx - W / 2, top + H]].forEach(([x, y]) => pts.push({ x, y, px: x, py: y, w: 0.35 }));
    const [TL, TR, BR, BL] = [SEGMENTS + 1, SEGMENTS + 2, SEGMENTS + 3, SEGMENTS + 4];
    for (let i = 0; i < SEGMENTS; i++) cons.push({ a: i, b: i + 1, len: segLen, stretchOnly: true });
    const d = Math.hypot(W / 2, CLIP_GAP), diag = Math.hypot(W, H);
    cons.push({ a: SEGMENTS, b: TL, len: d }, { a: SEGMENTS, b: TR, len: d },
      { a: TL, b: TR, len: W }, { a: TR, b: BR, len: H }, { a: BR, b: BL, len: W }, { a: BL, b: TL, len: H },
      { a: TL, b: BR, len: diag }, { a: TR, b: BL, len: diag });
    if (reduceMotion) for (let i = 0; i < 400; i++) step(); // settle: show it hanging still
    card.classList.add("ready");
  }
  const corners = () => pts.slice(SEGMENTS + 1, SEGMENTS + 5);
  function solve() {
    for (const c of cons) {
      const A = pts[c.a], B = pts[c.b], dx = B.x - A.x, dy = B.y - A.y, dist = Math.hypot(dx, dy) || 0.0001;
      if (c.stretchOnly && dist <= c.len) continue;
      const diff = (dist - c.len) / dist, wsum = A.w + B.w;
      if (!wsum) continue;
      A.x += dx * diff * (A.w / wsum); A.y += dy * diff * (A.w / wsum);
      B.x -= dx * diff * (B.w / wsum); B.y -= dy * diff * (B.w / wsum);
    }
  }
  function bilinear(u, v) {
    const [a, b, c, d] = corners();
    return { x: (1-u)*(1-v)*a.x + u*(1-v)*b.x + u*v*c.x + (1-u)*v*d.x, y: (1-u)*(1-v)*a.y + u*(1-v)*b.y + u*v*c.y + (1-u)*v*d.y, w: [(1-u)*(1-v), u*(1-v), u*v, (1-u)*v] };
  }
  function step() {
    for (const p of pts) {
      if (!p.w) continue;
      const vx = clamp((p.x - p.px) * DAMPING, -MAX_SPEED, MAX_SPEED), vy = clamp((p.y - p.py) * DAMPING, -MAX_SPEED, MAX_SPEED);
      p.px = p.x; p.py = p.y; p.x += vx; p.y += vy + GRAVITY;
    }
    if (drag) {
      const g = bilinear(drag.u, drag.v), dx = drag.x - g.x, dy = drag.y - g.y;
      corners().forEach((p, i) => { const k = g.w[i] * 1.6; p.x += dx * k; p.y += dy * k; p.px = lerp(p.px, p.x, 0.25); p.py = lerp(p.py, p.y, 0.25); });
    }
    for (let i = 0; i < 14; i++) solve();
  }
  function render() {
    const [TL, TR, , BL] = corners();
    const ax = (TR.x - TL.x) / W, ay = (TR.y - TL.y) / W, bx = (BL.x - TL.x) / H, by = (BL.y - TL.y) / H;
    card.style.transform = `matrix(${ax},${ay},${bx},${by},${TL.x},${TL.y})`;
    const cxv = (TL.x - TL.px + TR.x - TR.px) / 2, cyv = (TL.y - TL.py + BL.y - BL.py) / 2;
    const ry = clamp(cxv * 2.2, -40, 40), rx = clamp(-cyv * 1.2, -25, 25);
    inner.style.transform = `perspective(900px) rotateY(${ry}deg) rotateX(${rx}deg)`;
    holo.style.setProperty("--gx", `${50 + ry * 1.5 + Math.atan2(ay, ax) * 60}%`);
    holo.style.setProperty("--gy", `${50 + rx * 1.5}%`);
    let d = `M ${pts[0].x} ${pts[0].y - 40} L ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < SEGMENTS; i++) d += ` Q ${pts[i].x} ${pts[i].y} ${(pts[i].x + pts[i + 1].x) / 2} ${(pts[i].y + pts[i + 1].y) / 2}`;
    d += ` L ${pts[SEGMENTS].x} ${pts[SEGMENTS].y + 6}`;
    strap.setAttribute("d", d);
    const motion = Math.abs(cxv) + Math.abs(cyv);
    if (!hasDragged) {
      const [, , BR, BL2] = corners();
      hint.style.left = `${(BR.x + BL2.x) / 2}px`; hint.style.top = `${Math.max(BR.y, BL2.y) + 22}px`;
      settled = motion < 0.6 ? settled + 1 : 0;
      hint.classList.toggle("show", settled > 30);
    }
    still = !drag && motion < 0.02 ? still + 1 : 0;
  }
  // run the loop only while something moves and the card is on screen
  const loop = () => {
    if (!visible && !drag) { running = false; return; }
    step(); render();
    if (still > 90) { running = false; return; }
    requestAnimationFrame(loop);
  };
  const wake = () => { still = 0; if (!running) { running = true; requestAnimationFrame(loop); } };

  const local = (e) => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  card.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const p = local(e), [TL, TR, , BL] = corners();
    const ux = TR.x - TL.x, uy = TR.y - TL.y, vx = BL.x - TL.x, vy = BL.y - TL.y, rx = p.x - TL.x, ry = p.y - TL.y;
    drag = { u: clamp((rx * ux + ry * uy) / (W * W), 0, 1), v: clamp((rx * vx + ry * vy) / (H * H), 0, 1), ...p };
    card.classList.add("dragging"); card.setPointerCapture(e.pointerId);
    if (!hasDragged) { hasDragged = true; hint.classList.remove("show"); }
    wake();
  });
  card.addEventListener("pointermove", (e) => { if (drag) Object.assign(drag, local(e)); });
  // on release, scale the throw speed down so it can't leave the screen
  const release = () => { drag = null; card.classList.remove("dragging"); pts.forEach((p) => { p.px = lerp(p.px, p.x, 0.6); p.py = lerp(p.py, p.y, 0.6); }); wake(); };
  card.addEventListener("pointerup", release);
  card.addEventListener("pointercancel", release);

  let lastW = innerWidth;
  addEventListener("resize", () => {
    if (!anchor) return;
    if ((innerWidth > 960) !== (lastW > 960)) { lastW = innerWidth; build(); render(); wake(); return; }
    lastW = innerWidth;
    const nx = stage.clientWidth * anchorX(), dx = nx - anchor.x;
    pts.forEach((p) => { p.x += dx; p.px += dx; }); anchor.x = nx; pts[0].x = pts[0].px = nx;
    render(); wake();
  });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) wake(); }).observe(stage);

  build(); render();
  onLoaded(() => wake()); // drop after the loader
}

/* ---------- EFFECT 2: Venom mask reveal ---------- */
{
  const CFG = { size: 0.2, pressSize: 0.32, smooth: 0.18 };
  const normal = $("#normal"), hero = $("#hero");
  normal.src = CONTENT.photos.normal; normal.alt = `Portrait of ${CONTENT.name}`;
  hero.src = CONTENT.photos.hero;
  normal.loading = hero.loading = "lazy";
  const wrap = $("#reveal"), frame = $("#frame"), layer = $("#heroLayer"), ring = $("#ring");
  let tx = 0.5, ty = 0.5, x = 0.5, y = 0.5, r = 0, tr = 0, raf = null;
  const tick = () => {
    const k = reduceMotion ? 1 : CFG.smooth;
    x = lerp(x, tx, k); y = lerp(y, ty, k); r = lerp(r, tr, reduceMotion ? 1 : 0.12);
    const w = frame.clientWidth, h = frame.clientHeight;
    layer.style.setProperty("--mx", `${x * w}px`); layer.style.setProperty("--my", `${y * h}px`); layer.style.setProperty("--r", `${r}px`);
    ring.style.left = `${x * w}px`; ring.style.top = `${y * h}px`; ring.style.width = ring.style.height = `${r * 2}px`;
    raf = Math.abs(r - tr) > 0.3 || Math.abs(x - tx) > 0.001 || Math.abs(y - ty) > 0.001 ? requestAnimationFrame(tick) : null;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
  const setPos = (e) => { const b = frame.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width; ty = (e.clientY - b.top) / b.height; };
  frame.addEventListener("pointerenter", (e) => { setPos(e); if (r < 1) { x = tx; y = ty; } tr = frame.clientWidth * CFG.size; wrap.classList.add("active"); kick(); });
  frame.addEventListener("pointermove", (e) => { setPos(e); if (tr < frame.clientWidth * CFG.size) tr = frame.clientWidth * CFG.size; kick(); });
  frame.addEventListener("pointerleave", () => { tr = 0; wrap.classList.remove("active"); kick(); });
  frame.addEventListener("pointerdown", (e) => { setPos(e); if (r < 1) { x = tx; y = ty; } tr = frame.clientWidth * CFG.pressSize; wrap.classList.add("active"); frame.setPointerCapture(e.pointerId); kick(); });
  frame.addEventListener("pointerup", (e) => { tr = e.pointerType === "mouse" ? frame.clientWidth * CFG.size : 0; if (tr === 0) wrap.classList.remove("active"); kick(); });
  frame.addEventListener("pointercancel", () => { tr = 0; wrap.classList.remove("active"); kick(); });
}

/* ---------- EFFECT 3: 3D "let's collab" goo button (Venom Button by exteestudio, MIT) ---------- */
{
  const frame = $("#venomFrame"), hit = $("#venomHit");
  hit.textContent = CONTENT.collabLabel; hit.href = CONTENT.collabLink;
  if (/^https?:/.test(CONTENT.collabLink)) { hit.target = "_blank"; hit.rel = "noopener"; }
  // click: go to contact; if you're already there, open WhatsApp
  hit.addEventListener("click", (e) => {
    const c = $("#contact").getBoundingClientRect();
    if (CONTENT.whatsapp && c.top < innerHeight * 0.5 && c.bottom > 0) { e.preventDefault(); open(`https://wa.me/${CONTENT.whatsapp.replace(/\D/g, "")}`, "_blank", "noopener"); }
  });
  let geo = null, ready = false, rect = null;
  const SLOW_KEY = "goo-slow";
  // a "too slow" result is remembered for 7 days, then the test runs again
  // FORCE_GOO = true always shows the 3D goo on computers (like the reference site), skipping the speed test.
  // Set it to false to bring back the speed test and the light pill fallback on slow graphics chips.
  const FORCE_GOO = true;
  let slow = false; try { slow = !FORCE_GOO && Date.now() - Number(localStorage.getItem(SLOW_KEY) || 0) < 7 * 864e5; } catch {}

  // time 5 real goo frames; if the median is over 10 ms, use the light CSS pill instead
  function gpuFastEnough() {
    try {
      const w = frame.contentWindow, v = w.VenomButton, cv = w.document.getElementById("stage");
      const probe = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
      const sync = () => { probe.drawImage(cv, 0, 0, 1, 1); probe.getImageData(0, 0, 1, 1); };
      v._debug.paused = true; sync();
      const t = [];
      for (let i = 0; i < 5; i++) { const s = performance.now(); v._debug.advance(1 / 240); sync(); t.push(performance.now() - s); }
      v._debug.paused = false;
      t.sort((a, b) => a - b);
      return t[2] < 10;
    } catch { return false; }
  }
  const measure = () => { rect = frame.getBoundingClientRect(); };
  const place = () => {
    if (!geo || !ready) return;
    measure();
    Object.assign(hit.style, { left: `${rect.left + geo.cx - geo.hw}px`, top: `${rect.top + geo.cy - geo.hh}px`, width: `${geo.hw * 2}px`, height: `${geo.hh * 2}px` });
  };
  const send = (t, e) => {
    if (!ready || !rect || !frame.contentWindow) return;
    frame.contentWindow.postMessage({ venom: "ptr", t, x: e ? e.clientX - rect.left : 0, y: e ? e.clientY - rect.top : 0, pt: e ? e.pointerType : "mouse" }, "*");
  };
  addEventListener("pointermove", (e) => send("move", e), { passive: true });
  addEventListener("pointerdown", (e) => send("down", e), { passive: true });
  addEventListener("pointerup", (e) => send("up", e), { passive: true });
  document.documentElement.addEventListener("pointerleave", () => send("leave"));
  addEventListener("blur", () => send("leave"));
  addEventListener("resize", () => { measure(); send("layout"); place(); });
  addEventListener("message", (m) => {
    if (m.source !== frame.contentWindow || !m.data) return;
    const d = m.data;
    if (d.venom === "layout") { geo = d; place(); }
    if (d.venom === "ready") {
      const test = () => setTimeout(() => {
        if (!FORCE_GOO && !gpuFastEnough()) { try { localStorage.setItem(SLOW_KEY, String(Date.now())); } catch {} frame.remove(); return; }
        ready = true; measure(); document.documentElement.classList.add("goo-ready"); place();
      }, 400);
      // only time it while the tab is on screen, or a background tab would always look slow
      if (document.hidden) document.addEventListener("visibilitychange", function once() { if (!document.hidden) { document.removeEventListener("visibilitychange", once); test(); } });
      else test();
    }
    if (d.venom === "engaged") document.documentElement.classList.toggle("venom-engaged", !!d.on);
  });
  // pause the goo when the tab is hidden (unload it), bring it back when visible
  if (finePointer && !reduceMotion && !slow) {
    const go = () => { if (frame.isConnected && !frame.src) frame.src = `collab/venom.html?label=${encodeURIComponent(CONTENT.collabLabel)}`; };
    if (FORCE_GOO) onLoaded(() => setTimeout(go, 600));
    else setTimeout(() => ("requestIdleCallback" in window ? requestIdleCallback(go, { timeout: 3000 }) : go()), 3500);
  } else {
    frame.remove();
  }
}

/* ---------- EFFECT 4: Cursor follower ring ---------- */
if (finePointer && !reduceMotion) {
  document.documentElement.classList.add("has-cursor");
  const root = $("#cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring"), halo = $(".cursor__halo");
  let mx = -100, my = -100, rx = mx, ry = my, hx = mx, hy = my, raf = null;
  const HOT = "a, button, iframe, [data-cursor], .vid__media";
  const loop = () => {
    rx = lerp(rx, mx, 0.2); ry = lerp(ry, my, 0.2); hx = lerp(hx, mx, 0.12); hy = lerp(hy, my, 0.12);
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    halo.style.transform = `translate3d(${hx}px, ${hy}px, 0)`;
    raf = Math.abs(hx - mx) + Math.abs(hy - my) > 0.1 ? requestAnimationFrame(loop) : null;
  };
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    mx = e.clientX; my = e.clientY;
    const t = e.target;
    root.classList.toggle("hot", !!(t.closest && t.closest(HOT)));
    root.classList.toggle("off", !!(t.closest && t.closest("#frame")));
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => root.classList.add("off"));
  document.documentElement.addEventListener("pointerenter", () => root.classList.remove("off"));
}
