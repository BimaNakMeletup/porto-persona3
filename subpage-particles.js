function initSubpageBgParticles() {
  // --- project-bg.html ---
  try { 
(() => {
  const NS = "http://www.w3.org/2000/svg";
  let seed = 104;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const colorClasses = ["shard-rose", "shard-cyan", "shard-white", "shard-violet"];

  // Serpihan Segitiga & Kelopak Melayang (Rose Petals & Shards)
  const shardsContainer = document.getElementById("p3rProjectShards");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 42; i++) {
    const cx = 120 + rnd() * 1080;
    const cy = 50 + rnd() * 620;
    const s = 4 + rnd() * 11;
    const a = rnd() * Math.PI * 2;
    const pt = [0, 2.2, 4.2].map(k => (cx + s * Math.cos(a + k)).toFixed(1) + "," + (cy + s * Math.sin(a + k)).toFixed(1));

    const colorClass = colorClasses[Math.floor(rnd() * colorClasses.length)];
    const poly = document.createElementNS(NS, "polygon");
    poly.setAttribute("points", pt.join(" "));
    poly.setAttribute("fill-opacity", (0.45 + rnd() * 0.45).toFixed(2));
    poly.setAttribute("class", `p3r-shard ${colorClass}`);

    poly.style.setProperty("--tx", `${(-14 + rnd() * 30).toFixed(1)}px`);
    poly.style.setProperty("--ty", `${(-22 - rnd() * 35).toFixed(1)}px`);
    poly.style.setProperty("--rot", `${(-45 + rnd() * 90).toFixed(1)}deg`);
    poly.style.animationDelay = `${(rnd() * 4.0).toFixed(2)}s`;
    poly.style.animationDuration = `${(3.2 + rnd() * 2.5).toFixed(2)}s`;

    fragment.appendChild(poly);
  }
  shardsContainer.appendChild(fragment);

  // Gelembung Cahaya Air Bawah Samudra (26 buah di dalam prisma biru)
  const bubblesContainer = document.getElementById("p3rOceanBubbles");
  if (bubblesContainer) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 26; i++) {
      const cx = 350 + rnd() * 650;
      const cy = 250 + rnd() * 420;
      const r = 1.5 + rnd() * 3.5;
      const dur = 4.5 + rnd() * 4.5;
      const delay = rnd() * 5.0;
      const op = 0.35 + rnd() * 0.45;
      const drift = -16 + rnd() * 32;

      const circle = document.createElementNS(NS, "circle");
      circle.setAttribute("cx", cx.toFixed(1));
      circle.setAttribute("cy", cy.toFixed(1));
      circle.setAttribute("r", r.toFixed(1));
      circle.setAttribute("fill", rnd() < 0.4 ? "#ffffff" : "#7fe8ff");
      circle.setAttribute("class", "p3r-ocean-bubble");

      circle.style.setProperty("--dur", `${dur.toFixed(2)}s`);
      circle.style.setProperty("--op", op.toFixed(2));
      circle.style.setProperty("--drift", `${drift.toFixed(1)}px`);
      circle.style.animationDelay = `${delay.toFixed(2)}s`;

      frag.appendChild(circle);
    }
    bubblesContainer.appendChild(frag);
  }
})();
 } catch (e) { console.warn(e); }
  // --- skills-bg.html ---
  try { 
(() => {
  const NS = "http://www.w3.org/2000/svg";
  let seed = 88;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const colorClasses = ["shard-green", "shard-purple", "shard-cyan", "shard-white"];

  // Helper untuk membuat serpihan segitiga
  const createShards = (container, count, minS, maxS, minOp, maxOp) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const cx = 50 + rnd() * 1180;
      const cy = 40 + rnd() * 640;
      const s = minS + rnd() * (maxS - minS);
      const a = rnd() * Math.PI * 2;
      const pt = [0, 2.2, 4.2].map(k => (cx + s * Math.cos(a + k)).toFixed(1) + "," + (cy + s * Math.sin(a + k)).toFixed(1));

      const colorClass = colorClasses[Math.floor(rnd() * colorClasses.length)];
      const poly = document.createElementNS(NS, "polygon");
      poly.setAttribute("points", pt.join(" "));
      poly.setAttribute("fill-opacity", (minOp + rnd() * (maxOp - minOp)).toFixed(2));
      poly.setAttribute("class", `p3r-shard ${colorClass}`);

      poly.style.setProperty("--tx", `${(-14 + rnd() * 32).toFixed(1)}px`);
      poly.style.setProperty("--ty", `${(-24 - rnd() * 38).toFixed(1)}px`);
      poly.style.setProperty("--rot", `${(-50 + rnd() * 100).toFixed(1)}deg`);
      poly.style.animationDelay = `${(rnd() * 4.2).toFixed(2)}s`;
      poly.style.animationDuration = `${(3.0 + rnd() * 2.8).toFixed(2)}s`;

      fragment.appendChild(poly);
    }
    container.appendChild(fragment);
  };

  // 1. Shards Belakang (35 buah) - lebih kecil & halus
  const backShards = document.getElementById("p3rBackShards");
  if (backShards) createShards(backShards, 35, 3, 7, 0.25, 0.55);

  // 2. Shards Depan (40 buah) - lebih besar, tajam & berkilau
  const frontShards = document.getElementById("p3rSkillsShards");
  if (frontShards) createShards(frontShards, 40, 5, 14, 0.45, 0.95);

  // 3. Gelembung Air / Partikel Cahaya Bawah Air (30 buah)
  const bubbleContainer = document.getElementById("p3rBubbles");
  if (bubbleContainer) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 30; i++) {
      const cx = 80 + rnd() * 1120;
      const cy = 350 + rnd() * 350;
      const r = 1.5 + rnd() * 3.5;
      const dur = 4.5 + rnd() * 5.0;
      const delay = rnd() * 6.0;
      const op = 0.4 + rnd() * 0.45;
      const drift = -20 + rnd() * 40;

      const circle = document.createElementNS(NS, "circle");
      circle.setAttribute("cx", cx.toFixed(1));
      circle.setAttribute("cy", cy.toFixed(1));
      circle.setAttribute("r", r.toFixed(1));
      circle.setAttribute("fill", rnd() < 0.3 ? "#ffffff" : "#a6f4ff");
      circle.setAttribute("class", "p3r-bubble");

      circle.style.setProperty("--dur", `${dur.toFixed(2)}s`);
      circle.style.setProperty("--op", op.toFixed(2));
      circle.style.setProperty("--drift", `${drift.toFixed(1)}px`);
      circle.style.animationDelay = `${delay.toFixed(2)}s`;

      frag.appendChild(circle);
    }
    bubbleContainer.appendChild(frag);
  }
})();
 } catch (e) { console.warn(e); }
  // --- about-bg.html ---
  try { 
(() => {
  const NS = "http://www.w3.org/2000/svg";
  let seed = 42;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

  // 1. Serpihan segitiga melayang & berputar (About Shards)
  // 1. Serpihan segitiga melayang & berputar (Batched with DocumentFragment for zero reflow)
  const shardsContainer = document.getElementById("p3rAboutShards");
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 30; i++) {
    const cx = 150 + rnd() * 1050;
    const cy = 60 + rnd() * 600;
    const s = 4 + rnd() * 12;
    const a = rnd() * Math.PI * 2;
    const pt = [0, 2.2, 4.2].map(k => (cx + s * Math.cos(a + k)).toFixed(1) + "," + (cy + s * Math.sin(a + k)).toFixed(1));

    const poly = document.createElementNS(NS, "polygon");
    poly.setAttribute("points", pt.join(" "));
    poly.setAttribute("fill-opacity", (0.35 + rnd() * 0.55).toFixed(2));
    poly.setAttribute("class", "p3r-shard");

    poly.style.setProperty("--tx", `${(-18 + rnd() * 36).toFixed(1)}px`);
    poly.style.setProperty("--ty", `${(-25 - rnd() * 35).toFixed(1)}px`);
    poly.style.setProperty("--rot", `${(-45 + rnd() * 90).toFixed(1)}deg`);
    poly.style.animationDelay = `${(rnd() * 3.5).toFixed(2)}s`;
    poly.style.animationDuration = `${(3.0 + rnd() * 2.5).toFixed(2)}s`;

    fragment.appendChild(poly);
  }
  shardsContainer.appendChild(fragment);

  // 2. Interaksi Klik / Tap: Muncul Gelombang Riak Lingkaran Cyan
  const clickLayer = document.getElementById("p3rClickLayer");
  window.addEventListener("pointerdown", (e) => {
    if (!clickLayer) return;
    const circle = document.createElement("div");
    circle.className = "p3r-click-circle";
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
    clickLayer.appendChild(circle);
    setTimeout(() => circle.remove(), 950);
  });
})();
 } catch (e) { console.warn(e); }
  // --- contact-bg.html ---
  try { 
(() => {
  const NS = "http://www.w3.org/2000/svg";
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const el = (tag, attrs, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent.appendChild(n);
    return n;
  };

  // 1. Honeycomb hexagon dengan animasi twinkle
  const hexG = document.getElementById("p3r-hex");
  const R = 15, A = R - 2.2, H = Math.sqrt(3) * R;
  for (let col = 0; col * 1.5 * R < 460; col++) {
    const cx = col * 1.5 * R;
    for (let row = -1; row * H < 600; row++) {
      const cy = row * H + (col % 2 ? H / 2 : 0);
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = Math.PI / 3 * i;
        pts.push((cx + A * Math.cos(a)).toFixed(1) + "," + (cy + A * Math.sin(a)).toFixed(1));
      }
      const isAnimated = rnd() < 0.28;
      const baseOp = (0.15 + rnd() * 0.25).toFixed(2);
      const peakOp = (0.6 + rnd() * 0.35).toFixed(2);
      const delay = (rnd() * 3.5).toFixed(2);
      const dur = (2.2 + rnd() * 2.0).toFixed(2);

      const poly = el("polygon", {
        points: pts.join(" "),
        fill: isAnimated ? "#1f6cd8" : "#123a78",
        "fill-opacity": baseOp,
        class: isAnimated ? "p3r-hex-node" : ""
      }, hexG);

      if (isAnimated) {
        poly.style.setProperty("--base-op", baseOp);
        poly.style.setProperty("--peak-op", peakOp);
        poly.style.animationDelay = `${delay}s`;
        poly.style.animationDuration = `${dur}s`;
      }
    }
  }

  // 2. Gelombang audio visualizer yang berdenyut dinamis
  const wave = document.getElementById("p3r-wave");
  const x0 = 204, y0 = 228, x1 = 446, y1 = 572;
  const len = Math.hypot(x1 - x0, y1 - y0), step = 10.5;
  const nx = (y1 - y0) / len, ny = -(x1 - x0) / len;
  let idx = 0;
  for (let d = 0; d <= len; d += step) {
    const t = d / len;
    const loud = t > 0.78 ? 0.6 : t > 0.45 ? 0.3 : 0.15;
    const isBar = rnd() < loud;
    const h = isBar ? 8 + rnd() * (t > 0.78 ? 24 : 12) : 6;
    const off = 6 + (rnd() - 0.5) * 3;
    const cx = x0 + (x1 - x0) * t + nx * off;
    const cy = y0 + (y1 - y0) * t + ny * off;

    const rect = el("rect", {
      x: (cx - 3).toFixed(1),
      y: (cy - h / 2).toFixed(1),
      width: 6,
      height: h.toFixed(1),
      rx: 3,
      class: isBar ? "p3r-wave-bar" : ""
    }, wave);

    if (isBar) {
      rect.style.setProperty("--scale", (1.5 + rnd() * 1.8).toFixed(2));
      rect.style.animationDelay = `${(idx * 0.08).toFixed(2)}s`;
      rect.style.animationDuration = `${(0.8 + rnd() * 0.8).toFixed(2)}s`;
    }

    if (t > 0.5 && rnd() < 0.28) {
      const dot = el("rect", {
        x: (cx + nx * 9 - 2.5).toFixed(1),
        y: (cy + ny * 9 - 2.5).toFixed(1),
        width: 5,
        height: 5,
        rx: 2.5,
        class: "p3r-wave-bar"
      }, wave);
      dot.style.setProperty("--scale", (1.4 + rnd() * 1.2).toFixed(2));
      dot.style.animationDelay = `${(idx * 0.1).toFixed(2)}s`;
    }
    idx++;
  }

  // 3. Serpihan segitiga melayang & berputar lembut
  const shards = document.getElementById("p3r-shards");
  for (let i = 0; i < 28; i++) {
    const cx = 680 + rnd() * 340, cy = 250 + rnd() * 326, s = 3 + rnd() * 10;
    const a = rnd() * Math.PI * 2;
    const pt = [0, 2.2, 4.2].map(k => (cx + s * Math.cos(a + k)).toFixed(1) + "," + (cy + s * Math.sin(a + k)).toFixed(1));
    const poly = el("polygon", {
      points: pt.join(" "),
      "fill-opacity": (0.4 + rnd() * 0.5).toFixed(2),
      class: "p3r-shard"
    }, shards);

    poly.style.setProperty("--tx", `${(-15 + rnd() * 30).toFixed(1)}px`);
    poly.style.setProperty("--ty", `${(-25 - rnd() * 30).toFixed(1)}px`);
    poly.style.setProperty("--rot", `${(-40 + rnd() * 80).toFixed(1)}deg`);
    poly.style.animationDelay = `${(rnd() * 3).toFixed(2)}s`;
    poly.style.animationDuration = `${(2.8 + rnd() * 2.2).toFixed(2)}s`;
  }
})();
 } catch (e) { console.warn(e); }
}
