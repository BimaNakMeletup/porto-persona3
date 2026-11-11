/**
 * ============================================================================
 * PERSONA 3 RELOAD — PAUSE MENU PORTFOLIO
 * Data disinkronkan dengan https://bimanakmeletup.vercel.app/
 * ============================================================================
 */

/* ============================================================================
   1. DATA KONFIGURASI (Informasi Bima dari bimanakmeletup.vercel.app)
   ============================================================================ */

const PROFILE = {
  name: "AdnanBima",
  role: "Backend Engineer // Laravel, FastAPI & Hono",
  email: "adnan.43323203@mhs.polines.ac.id",
  location: "Semarang, Indonesia",
  github: "https://github.com/BimaNakMeletup",
  instagram: "https://instagram.com/bima_sukaturu",
  linkedin: "https://linkedin.com/in/adnan-bima",
};

// 4 Opsi Menu Utama
const OPTIONS = [
  {
    name: "PROJECT",
    target: "page-project",
    rotation: -20,
    offsetX: -40,
    offsetY: 25,
    fontSize: "5.15rem",
    bannerScaleX: 1.07,
    bannerScaleY: 3.35,
    zIndex: 1,
  },
  {
    name: "SKILLS",
    target: "page-skills",
    rotation: -12,
    offsetX: -65,
    offsetY: 30,
    fontSize: "4.55rem",
    bannerScaleX: 0.96,
    bannerScaleY: 3.05,
    zIndex: 2,
  },
  {
    name: "ABOUT",
    target: "page-about",
    rotation: -4,
    offsetX: -80,
    offsetY: 35,
    fontSize: "4.85rem",
    bannerScaleX: 1.02,
    bannerScaleY: 3.25,
    zIndex: 3,
  },
  {
    name: "CONTACT",
    target: "page-contact",
    rotation: 5,
    offsetX: -85,
    offsetY: 40,
    fontSize: "4.65rem",
    bannerScaleX: 1.04,
    bannerScaleY: 3.2,
    zIndex: 4,
  },
];

// Daftar Project Bima (Social Link Style)
const PROJECTS = [
  {
    numeral: "I",
    title: "HANDTRACKING TIKTOK VIRAL",
    subtitle: "Python • OpenCV • AI Vision",
    url: "https://github.com/BimaNakMeletup/handtracking-tiktok-viral",
  },
  {
    numeral: "II",
    title: "WHATSAPP CLONE FASTAPI",
    subtitle: "Python • FastAPI • WebSockets ",
    url: "https://github.com/BimaNakMeletup/whatsapp-clone-fastapi",
  },
  {
    numeral: "III",
    title: "HONO & TYPESCRIPT EDGE API",
    subtitle: "TypeScript • Hono • Bun",
    url: "https://github.com/BimaNakMeletup/bun-hono-drizzle-api",
  },
  {
    numeral: "IV",
    title: "PERSONAL DRIVE DASHBOARD",
    subtitle: "TypeScript • Hono • Bun",
    url: "https://github.com/BimaNakMeletup/personal-drive-dashboard",
  },
  {
    numeral: "V",
    title: "FASTAPI URL SHORTENER",
    subtitle: "Python • FastAPI • REST API",
    url: "https://github.com/BimaNakMeletup/fastapi-url-shortener",
  },
  {
    numeral: "VI",
    title: "FASTAPI BOOK APP",
    subtitle: "Python • FastAPI • SQL",
    url: "https://github.com/BimaNakMeletup/fastapi_book_app",
  },
];

// Kategori & Statistik Skill Bima
const SKILL_TABS = [
  { id: "backend", code: "01", label: "BACKEND" },
  { id: "database", code: "02", label: "DATABASES" },
  { id: "ai", code: "03", label: "AI & VISION" },
  { id: "devops", code: "04", label: "DEVOPS & UI" },
];

const SKILL_GROUPS = {
  backend: {
    title: "BACKEND & API ARCHITECTURE",
    skills: [
      { name: "Python & FastAPI Ecosystem", level: 96 },
      { name: "PHP & Laravel Framework", level: 95 },
      { name: "TypeScript & Hono (Edge API)", level: 94 },
      { name: "Backend & Microservices Architecture", level: 94 },
      { name: "WebSockets & Async Streaming", level: 88 },
    ],
  },
  database: {
    title: "DATABASES & ORM SYSTEMS",
    skills: [
      { name: "MySQL & PostgreSQL", level: 92 },
      { name: "MongoDB & Document Stores", level: 85 },
      { name: "Redis Caching & In-Memory Feeds", level: 88 },
      { name: "Eloquent ORM & SQLAlchemy", level: 90 },
    ],
  },
  ai: {
    title: "AI & COMPUTER VISION WORKFLOWS",
    skills: [
      { name: "OpenCV Computer Vision", level: 86 },
      { name: "AI Vision Gesture Recognition", level: 70 },
      { name: "LLM APIs & Prompt Engineering", level: 70 },
    ],
  },
  devops: {
    title: "DEVOPS, CLOUD & FRONTEND",
    skills: [
      { name: "Git & GitHub Workflows", level: 92 },
      { name: "Docker Containerization", level: 30 },
      { name: "Linux Server & Cloudflare Edge", level: 50 },
      { name: "Frontend & UI Design", level: 70 },
    ],
  },
};

/* ============================================================================
   2. AUDIO ENGINE: BGM ("Color Your Night") & SFX (Bug-Free Pause/Play)
   ============================================================================ */
const bgmPlayer = document.getElementById("bgm-player");
const sfxMenuUtama = document.getElementById("sfx-menu-utama-el");
const sfxNav = document.getElementById("sfx-navigation-el");
const sfxClose = document.getElementById("sfx-close-menu-el");
const btnBgmToggle = document.getElementById("btn-bgm-toggle");
const bgmStatusText = document.getElementById("bgm-status-text");

let isBgmPlaying = false;
let userBgmDisabled = false; // Flag mutlak saat user mematikan musik
let isStarted = false;

function playSound(type) {
  try {
    if (type === "nav" && sfxNav) {
      sfxNav.currentTime = 0;
      sfxNav.volume = 0.6;
      sfxNav.play().catch(() => { });
    } else if (type === "close" && sfxClose) {
      sfxClose.currentTime = 0;
      sfxClose.volume = 0.75;
      sfxClose.play().catch(() => { });
    } else if (type === "menu-utama" && sfxMenuUtama) {
      sfxMenuUtama.currentTime = 0;
      sfxMenuUtama.volume = 0.85;
      sfxMenuUtama.play().catch(() => { });
    }
  } catch (_) { }
}

function startBgm() {
  if (!bgmPlayer || userBgmDisabled) return;
  bgmPlayer.volume = 0.45;
  const p = bgmPlayer.play();
  if (p !== undefined) {
    p.then(() => {
      isBgmPlaying = true;
      if (bgmStatusText) bgmStatusText.textContent = "BGM: ON";
      if (btnBgmToggle) btnBgmToggle.classList.add("active");
    }).catch(() => { });
  }
}

function stopBgm() {
  if (!bgmPlayer) return;
  bgmPlayer.pause();
  isBgmPlaying = false;
  if (bgmStatusText) bgmStatusText.textContent = "BGM: OFF";
  if (btnBgmToggle) btnBgmToggle.classList.remove("active");
}

function toggleBgm(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (!bgmPlayer) return;
  if (isBgmPlaying) {
    userBgmDisabled = true;
    stopBgm();
  } else {
    userBgmDisabled = false;
    startBgm();
  }
}

if (btnBgmToggle) {
  btnBgmToggle.addEventListener("click", toggleBgm);
}

// User first interaction unlocks audio once experience has started
function unlockOnFirstTouch() {
  if (!isStarted) return;
  if (!userBgmDisabled && !isBgmPlaying) {
    startBgm();
  }
  ["click", "keydown", "touchstart"].forEach((evt) => {
    window.removeEventListener(evt, unlockOnFirstTouch);
  });
}

["click", "keydown", "touchstart"].forEach((evt) => {
  window.addEventListener(evt, unlockOnFirstTouch, { passive: true });
});

/* Homepage: Bebas video — Sub-halaman (Project, Skills, About, Contact) tetap menggunakan video background */
/* ============================================================================
   4. WATER WORLD SIMULATION: Fluid Bubbles, Tumbling Shards & Mouse Parallax
   ============================================================================ */
function initWaterCanvas() {
  const canvas = document.getElementById("water-canvas");
  const waterWorld = document.getElementById("homepage-water-stage");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = canvas.offsetWidth || window.innerWidth);
  let h = (canvas.height = canvas.offsetHeight || window.innerHeight);

  window.addEventListener("resize", () => {
    w = canvas.width = canvas.offsetWidth || window.innerWidth;
    h = canvas.height = canvas.offsetHeight || window.innerHeight;
  });

  // Mouse parallax physics with smooth spring damping
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  window.addEventListener("mousemove", (e) => {
    const normX = (e.clientX / window.innerWidth) - 0.5;
    const normY = (e.clientY / window.innerHeight) - 0.5;
    targetMouseX = normX * 26; // up to 26px perspective shift
    targetMouseY = normY * 18;
  }, { passive: true });

  // 1. Gelembung Air dengan Fisika Sinusoidal (Wobble & Specular Highlight)
  const bubbles = Array.from({ length: 42 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: 1.8 + Math.random() * 6.5,
    speedY: 0.4 + Math.random() * 1.1,
    wobbleSpeed: 0.02 + Math.random() * 0.04,
    wobbleAmp: 0.8 + Math.random() * 2.2,
    wobbleAngle: Math.random() * Math.PI * 2,
    alpha: 0.25 + Math.random() * 0.45,
  }));

  // 2. Pecahan Kristal Kaca Khas Persona 3 yang Melayang & Berputar 3D
  const shards = Array.from({ length: 14 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    size: 4 + Math.random() * 9,
    speedY: 0.2 + Math.random() * 0.55,
    speedX: (Math.random() - 0.5) * 0.45,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.016,
    alpha: 0.2 + Math.random() * 0.35,
  }));

  function draw() {
    if (activePage) {
      requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, w, h);

    // Interpolasi gerakan mouse parallax
    currentMouseX += (targetMouseX - currentMouseX) * 0.055;
    currentMouseY += (targetMouseY - currentMouseY) * 0.055;
    if (waterWorld) {
      waterWorld.style.transform = `translate3d(${currentMouseX.toFixed(2)}px, ${currentMouseY.toFixed(2)}px, 0)`;
    }

    // Render gelembung air
    for (const b of bubbles) {
      b.y -= b.speedY;
      b.wobbleAngle += b.wobbleSpeed;
      const drawX = b.x + Math.sin(b.wobbleAngle) * b.wobbleAmp;

      if (b.y < -15) {
        b.y = h + 15;
        b.x = Math.random() * w;
      }

      // Cincin luar gelembung bercahaya
      ctx.beginPath();
      ctx.arc(drawX, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(180, 245, 255, ${b.alpha})`;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Kilau pantulan cahaya di pojok kiri atas gelembung
      ctx.beginPath();
      ctx.arc(drawX - b.r * 0.32, b.y - b.r * 0.32, Math.max(0.8, b.r * 0.28), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.9})`;
      ctx.fill();
    }

    // Render pecahan kristal Persona 3
    for (const s of shards) {
      s.y -= s.speedY;
      s.x += s.speedX;
      s.angle += s.spin;

      if (s.y < -20) {
        s.y = h + 20;
        s.x = Math.random() * w;
      }

      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.angle);
      ctx.beginPath();
      ctx.moveTo(0, -s.size * 1.4);
      ctx.lineTo(s.size * 0.9, s.size * 0.8);
      ctx.lineTo(-s.size * 0.8, s.size * 0.5);
      ctx.closePath();
      ctx.fillStyle = `rgba(0, 240, 255, ${s.alpha * 0.35})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255, 255, 255, ${s.alpha * 0.8})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================================
   5. MENU UTAMA SVG DENGAN FULL MOUSE-HOVER & HITBOX
   ============================================================================ */
const selectorPath = "M 24.853754, 93.31573 135.14625, 49.684266 114.14751, 97.331142 Z";
const selectorBackgroundPath = "M 12.7428765,95.50088 144.25712,47.499123 116.75625,95.465764 Z";
const colors = ["fill-button-1", "fill-button-2", "fill-button-3"];

const optionsList = document.getElementById("options-list");
const sideNumber = document.getElementById("side-number");

let selectedIndex = 0;
let cachedOptionItems = [];
let isTransitioning = false;
let activePage = null;

function renderOptions() {
  if (!optionsList) return;
  optionsList.innerHTML = "";
  cachedOptionItems = [];

  OPTIONS.forEach((opt, index) => {
    const colorClass = colors[(index + 2) % colors.length];
    const cleanName = opt.name.replace(/ /g, "");
    const bannerScaleFactorX = opt.bannerScaleX || 1.0;
    const bannerScaleY = opt.bannerScaleY || 3.2;
    const scaleX = (cleanName.length * 0.52 + 1.6) * bannerScaleFactorX;
    const selectorTransform = `translate(-60, -9) rotate(8, 0, 100) scale(${scaleX}, ${bannerScaleY})`;
    const maskId = `selector-mask-${index}`;

    const item = document.createElement("div");
    item.className = `option-item ${index === 0 ? "selected" : ""}`;
    item.id = `option-item-${index}`;
    item.style.zIndex = index === 0 ? 20 : opt.zIndex;

    item.innerHTML = `
      <!-- Dedicated Hitbox: tangkap hover mouse 100% tanpa terhalang SVG lain -->
      <button
        class="option-hitbox"
        data-index="${index}"
        aria-label="${opt.name}"
        type="button">
      </button>

      <svg
        width="950"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        class="option-svg"
        style="transform: translate(${opt.offsetX}px, ${opt.offsetY}px) rotate(${opt.rotation}deg);"
      >
        <defs>
          <mask
            id="${maskId}"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="950"
            height="200"
          >
            <rect width="100%" height="100%" fill="black" />
            <g transform="${selectorTransform}" transform-origin="left center">
              <path fill="white" d="${selectorPath}" />
              <path class="pulse-anim" transform-origin="52 100" fill="white" d="${selectorBackgroundPath}" />
            </g>
          </mask>
        </defs>

        <!-- Selektor putih + pink pulse saat opsi aktif -->
        <g class="selector-group" transform="${selectorTransform}" transform-origin="left center">
          <path class="fill-pink pulse-anim" transform-origin="52 100" d="${selectorBackgroundPath}" />
          <path class="fill-fg" d="${selectorPath}" />
        </g>

        <!-- Teks Cyan Dasar -->
        <text
          x="150"
          y="122"
          class="option-text base-text ${colorClass}"
          style="font-size: ${opt.fontSize || '4.8rem'};"
        >
          ${opt.name}
        </text>

        <!-- Teks Merah Menyala yang di-masking tepat di atas selektor putih -->
        <g class="masked-red-group" mask="url(#${maskId})">
          <text
            x="150"
            y="122"
            class="option-text fill-red"
            style="font-size: ${opt.fontSize || '4.8rem'};"
          >
            ${opt.name}
          </text>
        </g>
      </svg>
    `;

    // Pasang event listener hover & click langsung pada hitbox
    const hitbox = item.querySelector(".option-hitbox");

    hitbox.addEventListener("mouseenter", () => {
      if (selectedIndex !== index && !isTransitioning) {
        setMenuIndex(index);
      }
    });

    hitbox.addEventListener("mousemove", () => {
      if (selectedIndex !== index && !isTransitioning) {
        setMenuIndex(index);
      }
    });

    hitbox.addEventListener("click", (e) => {
      setMenuIndex(index);
      openPage(opt.target, e);
    });

    optionsList.appendChild(item);
    cachedOptionItems.push(item);
  });
}

function setMenuIndex(index) {
  if (index === selectedIndex && cachedOptionItems.length > 0 && cachedOptionItems[index].classList.contains("selected")) {
    return;
  }
  selectedIndex = index;
  playSound("nav");

  if (sideNumber) {
    sideNumber.classList.add("changing");
    setTimeout(() => {
      sideNumber.textContent = (selectedIndex + 1).toString().padStart(2, "0");
      sideNumber.classList.remove("changing");
    }, 70);
  }

  for (let idx = 0; idx < cachedOptionItems.length; idx++) {
    const item = cachedOptionItems[idx];
    if (idx === selectedIndex) {
      item.classList.add("selected");
      item.style.zIndex = "20";
    } else {
      item.classList.remove("selected");
      item.style.zIndex = OPTIONS[idx].zIndex || (idx + 1).toString();
    }
  }
}

/* ============================================================================
   6. WAVY CIRCLE TRANSITION ENGINE & HTML FRAME BACKGROUNDS
   ============================================================================ */
function initSubpageVideoCanvases() {
  // Sub-halaman (Project, Skills, About, Contact) menggunakan HTML background frame murni (100% SVG/CSS)
}

function generateWavyPolygon(cx, cy, r, numPoints = 72, phase = 0.0) {
  if (r <= 0.5) {
    const pt = `${cx.toFixed(1)}px ${cy.toFixed(1)}px`;
    return `polygon(${new Array(numPoints).fill(pt).join(", ")})`;
  }
  const points = [];
  const step = (2 * Math.PI) / numPoints;
  for (let i = 0; i < numPoints; i++) {
    const theta = i * step;
    const wave = 1.0 + 0.085 * Math.sin(7 * theta + phase) + 0.035 * Math.cos(14 * theta + phase * 1.6);
    const px = cx + r * wave * Math.cos(theta) * 1.25;
    const py = cy + r * wave * Math.sin(theta) * 1.05;
    points.push(`${px.toFixed(1)}px ${py.toFixed(1)}px`);
  }
  return `polygon(${points.join(", ")})`;
}

function calculateTargetRadius(origin) {
  const maxDist = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y)
  );
  return Math.ceil(maxDist * 1.85);
}

function openPage(pageId, clickEvent) {
  if (isTransitioning) return;
  const pageEl = document.getElementById(pageId);
  if (!pageEl) return;

  isTransitioning = true;
  activePage = pageEl;
  playSound("nav");

  let origin = { x: window.innerWidth * 0.58, y: window.innerHeight * 0.5 };
  if (clickEvent && clickEvent.clientX > 0) {
    origin = { x: clickEvent.clientX, y: clickEvent.clientY };
  }
  const targetRadius = calculateTargetRadius(origin);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");
  pageEl.setAttribute("aria-hidden", "false");
  const videoEl = pageEl.querySelector("video");
  if (videoEl) {
    videoEl.currentTime = 0;
    videoEl.play().catch(() => { });
  }
  const anim = pageEl.animate(
    [
      { clipPath: generateWavyPolygon(origin.x, origin.y, 0, 72, 0.0) },
      { clipPath: generateWavyPolygon(origin.x + 22, origin.y - 12, targetRadius * 0.45, 72, 1.2), offset: 0.38 },
      { clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius, 72, 3.4) },
    ],
    { duration: 520, easing: "cubic-bezier(0.2, 1, 0.35, 1)", fill: "forwards" }
  );

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning");
    pageEl.classList.add("active");
    pageEl.style.clipPath = "";
    anim.cancel();
    isTransitioning = false;
  };
}

function closeCurrentPage() {
  if (!activePage || isTransitioning) return;
  isTransitioning = true;
  const pageEl = activePage;
  playSound("close");

  const origin = { x: window.innerWidth - 120, y: window.innerHeight - 55 };
  const targetRadius = calculateTargetRadius(origin);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");

  const anim = pageEl.animate(
    [
      { clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius, 72, 0.0) },
      { clipPath: generateWavyPolygon(origin.x - 20, origin.y - 12, targetRadius * 0.42, 72, 2.0), offset: 0.65 },
      { clipPath: generateWavyPolygon(origin.x, origin.y, 0, 72, 3.0) },
    ],
    { duration: 460, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" }
  );

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning", "active");
    pageEl.style.clipPath = "";
    pageEl.setAttribute("aria-hidden", "true");
    const videoEl = pageEl.querySelector("video");
    if (videoEl) videoEl.pause();
    anim.cancel();
    isTransitioning = false;
    activePage = null;
  };
}

/* ============================================================================
   7. SUBPAGE PROJECT (BIMA FEATURED REPOSITORIES)
   ============================================================================ */
let selectedProjectIdx = 0;

function renderProjects() {
  const container = document.getElementById("slink-cards");
  if (!container) return;
  container.innerHTML = "";

  PROJECTS.forEach((proj, idx) => {
    const card = document.createElement("button");
    const isActive = idx === selectedProjectIdx;
    card.className = `slink-card ${isActive ? "active" : ""}`;
    card.style.setProperty("--card-idx", idx);
    card.setAttribute("role", "tab");
    card.setAttribute("aria-selected", isActive ? "true" : "false");

    card.innerHTML = `
      <div class="card-numeral"><span>${proj.numeral}</span></div>
      <div class="card-body">
        <div class="card-title">${proj.title}</div>
        <div class="card-subtitle">${proj.subtitle}</div>
        <div class="card-red-accent" aria-hidden="true"></div>
      </div>
    `;

    card.addEventListener("mouseenter", () => selectProject(idx));
    card.addEventListener("click", () => {
      selectProject(idx);
      if (proj.url && proj.url !== "#") {
        playSound("nav");
        setTimeout(() => window.open(proj.url, "_blank"), 180);
      }
    });

    container.appendChild(card);
  });
}

function selectProject(idx) {
  selectedProjectIdx = idx;
  playSound("nav");
  const cards = document.querySelectorAll(".slink-card");
  cards.forEach((c, i) => {
    const isAct = i === idx;
    c.classList.toggle("active", isAct);
    c.setAttribute("aria-selected", isAct ? "true" : "false");
  });
}

function confirmSelectedProject() {
  const p = PROJECTS[selectedProjectIdx];
  if (p && p.url && p.url !== "#") {
    playSound("nav");
    setTimeout(() => window.open(p.url, "_blank"), 180);
  }
}

/* ============================================================================
   8. SUBPAGE SKILLS (BIMA STATS & ABILITIES)
   ============================================================================ */
let currentSkillTab = "backend";

function renderSkillTabs() {
  const nav = document.getElementById("skill-tabs");
  if (!nav) return;
  nav.innerHTML = "";

  SKILL_TABS.forEach((tab) => {
    const btn = document.createElement("button");
    const isAct = tab.id === currentSkillTab;
    btn.className = `skill-tab ${isAct ? "active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", isAct ? "true" : "false");
    btn.innerHTML = `<span class="tab-code">${tab.code}</span><span class="tab-label">${tab.label}</span>`;
    btn.addEventListener("click", () => setSkillTab(tab.id));
    nav.appendChild(btn);
  });
}

function setSkillTab(tabId) {
  if (currentSkillTab === tabId) return;
  currentSkillTab = tabId;
  playSound("nav");
  renderSkillTabs();
  renderSkillList();
}

function renderSkillList() {
  const container = document.getElementById("skill-list");
  if (!container) return;
  const group = SKILL_GROUPS[currentSkillTab];
  if (!group) return;

  container.innerHTML = `
    <div class="skill-group-header">
      <h3 class="skill-group-title">${group.title}</h3>
      <div class="skill-group-line"></div>
    </div>
    <div class="skill-rows">
      ${group.skills
      .map(
        (s, i) => `
        <div class="stat-row" style="--i:${i}">
          <span class="stat-name">${s.name}</span>
          <div class="stat-track">
            <div class="stat-fill" data-level="${s.level}" style="width: 0%; transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s;"></div>
          </div>
        </div>
      `
      )
      .join("")}
    </div>
  `;

  // Animasi pengisian meter statistik dinamis
  requestAnimationFrame(() => {
    container.querySelectorAll(".stat-fill").forEach((fill) => {
      fill.style.width = `${fill.dataset.level}%`;
    });
  });
}

function cycleSkillTab(direction) {
  const idx = SKILL_TABS.findIndex((t) => t.id === currentSkillTab);
  const next = (idx + direction + SKILL_TABS.length) % SKILL_TABS.length;
  setSkillTab(SKILL_TABS[next].id);
}

/* ============================================================================
   9. NAMA PROFIL OTOMATIS
   ============================================================================ */
function applyProfileName() {
  document.querySelectorAll("[data-profile-name]").forEach((el) => {
    el.textContent = PROFILE.name;
  });
}

/* ============================================================================
   10. LOADING SCREEN SEQUENCE (REAL ASSET PRELOADER)
   ============================================================================ */
let isAssetsLoaded = false;

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}
function preloadIframe(el, timeoutMs = 4000) {
  return new Promise((resolve) => {
    if (!el) {
      resolve();
      return;
    }
    try {
      if (el.contentDocument && el.contentDocument.readyState === "complete") {
        resolve();
        return;
      }
    } catch (_) {}
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.removeEventListener("load", finish);
      el.removeEventListener("error", finish);
      resolve();
    };
    el.addEventListener("load", finish, { once: true });
    el.addEventListener("error", finish, { once: true });
    setTimeout(finish, timeoutMs);
  });
}

function preloadMediaElement(el, timeoutMs = 8000) {
  return new Promise((resolve) => {
    if (!el || el.readyState >= 3) {
      resolve();
      return;
    }
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.removeEventListener("canplaythrough", finish);
      el.removeEventListener("loadeddata", finish);
      el.removeEventListener("error", finish);
      resolve();
    };
    el.addEventListener("canplaythrough", finish, { once: true });
    el.addEventListener("loadeddata", finish, { once: true });
    el.addEventListener("error", finish, { once: true });
    try {
      el.load();
    } catch (_) {}
    setTimeout(finish, timeoutMs);
  });
}

function startLoading() {
  const bar = document.getElementById("loading-fill");
  const pct = document.getElementById("loading-percent");
  const screen = document.getElementById("loading-screen");
  const hint = document.querySelector(".loading-hint");

  const tasks = [
    // 1. Font resmi P3R
    document.fonts ? document.fonts.ready.catch(() => {}) : Promise.resolve(),
    // 2. Gambar utama Homepage & About
    preloadImage("assets/bg-makoto-frame.webp"),
    preloadImage("assets/profile.jpg"),
    // 3. Audio BGM & SFX
    preloadMediaElement(document.getElementById("bgm-player"), 6000),
    preloadMediaElement(document.getElementById("sfx-menu-utama-el"), 4000),
    preloadMediaElement(document.getElementById("sfx-navigation-el"), 4000),
    preloadMediaElement(document.getElementById("sfx-close-menu-el"), 4000),
    // 4. Background Frame & Karakter WebP Sub-Halaman
    preloadImage("project-char.webp"),
    preloadImage("skills-char.webp"),
    preloadImage("about-char.webp"),
    preloadImage("contact-char.webp"),
    preloadIframe(document.getElementById("project-bg-frame")),
    preloadIframe(document.getElementById("skills-bg-frame")),
    preloadIframe(document.getElementById("about-bg-frame")),
    preloadIframe(document.getElementById("contact-bg-frame")),
  ];
  const total = tasks.length;
  let loadedCount = 0;
  let displayedProgress = 0;
  let targetProgress = 0;

  if (hint) {
    hint.textContent = `MENGUNDUH ASET... (0/${total})`;
  }

  tasks.forEach((task) => {
    Promise.resolve(task).finally(() => {
      loadedCount++;
      targetProgress = Math.round((loadedCount / total) * 100);
      if (hint && loadedCount < total) {
        hint.textContent = `MENGUNDUH ASET... (${loadedCount}/${total})`;
      }
    });
  });

  // Animasi angka & bar mengejar progress unduhan asli secara mulus
  const interval = setInterval(() => {
    if (displayedProgress < targetProgress) {
      const step = Math.max(1, Math.ceil((targetProgress - displayedProgress) * 0.25));
      displayedProgress = Math.min(targetProgress, displayedProgress + step);
      if (bar) bar.style.width = `${displayedProgress}%`;
      if (pct) pct.textContent = `${displayedProgress}%`;
      if (screen) screen.setAttribute("aria-valuenow", displayedProgress.toString());
    }

    if (displayedProgress >= 100 && loadedCount >= total) {
      clearInterval(interval);
      isAssetsLoaded = true;
      if (hint) {
        hint.textContent = "KLIK DI MANA SAJA UNTUK MEMULAI (BGM READY)";
      }
      setTimeout(() => {
        enterExperience();
      }, 280);
    }
  }, 30);

  if (screen) {
    screen.addEventListener("click", () => {
      if (isAssetsLoaded) {
        enterExperience();
      }
    });
  }
}

function enterExperience() {
  if (isStarted || !isAssetsLoaded) return;
  isStarted = true;

  const screen = document.getElementById("loading-screen");
  const profile = document.getElementById("menu-profile");
  const col = document.getElementById("menu-column");

  if (screen) screen.classList.add("dismissed");
  if (profile) profile.classList.add("entered");
  if (col) col.classList.add("entered");

  playSound("menu-utama");
  if (!userBgmDisabled) {
    startBgm();
  }
}
/* ============================================================================
   11. KEYBOARD ROUTING
   ============================================================================ */
window.addEventListener("keydown", (e) => {
  if (!isStarted) {
    enterExperience();
    return;
  }

  // Toggle lagu dengan tombol "B"
  if (e.key.toLowerCase() === "b") {
    e.preventDefault();
    toggleBgm();
    return;
  }

  if (activePage) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeCurrentPage();
      return;
    }

    if (activePage.id === "page-project") {
      if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        e.preventDefault();
        selectProject((selectedProjectIdx + 1) % PROJECTS.length);
      } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        e.preventDefault();
        selectProject((selectedProjectIdx - 1 + PROJECTS.length) % PROJECTS.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        confirmSelectedProject();
      }
      return;
    }

    if (activePage.id === "page-skills") {
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "q") {
        e.preventDefault();
        cycleSkillTab(-1);
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "e") {
        e.preventDefault();
        cycleSkillTab(1);
      }
      return;
    }
    return;
  }

  // Main menu keyboard navigation
  if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
    e.preventDefault();
    setMenuIndex((selectedIndex + 1) % OPTIONS.length);
  } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
    e.preventDefault();
    setMenuIndex((selectedIndex - 1 + OPTIONS.length) % OPTIONS.length);
  } else if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openPage(OPTIONS[selectedIndex].target);
  }
});

// Tombol HUD di dalam sub-halaman
document.querySelectorAll("[data-action]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const action = btn.dataset.action;
    if (action === "close") closeCurrentPage();
    else if (action === "confirm-project") confirmSelectedProject();
    else if (action === "prev-tab") cycleSkillTab(-1);
    else if (action === "next-tab") cycleSkillTab(1);
  });
});
function initDossierTabs() {
  const tabs = document.querySelectorAll(".dossier-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.dossierTab;
      tabs.forEach((t) => {
        const isSelected = t === tab;
        t.classList.toggle("active", isSelected);
        t.setAttribute("aria-selected", isSelected ? "true" : "false");
      });
      document.querySelectorAll(".dossier-panel").forEach((panel) => {
        const isMatch = panel.id === `dossier-${target}`;
        if (isMatch) {
          panel.removeAttribute("hidden");
          panel.classList.add("active");
        } else {
          panel.setAttribute("hidden", "");
          panel.classList.remove("active");
        }
      });
      playSound("nav");
    });
  });
}


/* ============================================================================
   INIT
   ============================================================================ */
applyProfileName();
initWaterCanvas();
initSubpageVideoCanvases();
renderOptions();
renderProjects();
renderSkillTabs();
renderSkillList();
initDossierTabs();
startLoading();

/* ============================================================================
   12. P3R CUSTOM CURSOR, CLICK SHOCKWAVE & TOAST SYSTEM
   ============================================================================ */

/* Canvas Efek Glass-Shatter Shockwave Saat Klik */
function initClickCanvas() {
  const canvas = document.getElementById("click-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particles = [];

  let isClickLoopRunning = false;
  function startClickLoop() {
    if (!isClickLoopRunning) {
      isClickLoopRunning = true;
      requestAnimationFrame(drawClicks);
    }
  }

  window.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // Cincin gelombang shockwave
    particles.push({
      type: "ring",
      x,
      y,
      r: 2,
      maxR: 38,
      alpha: 0.85,
    });

    // Pecahan kristal segitiga menyembur keluar
    for (let i = 0; i < 7; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = 2.5 + Math.random() * 4.5;
      particles.push({
        type: "shard",
        x,
        y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        size: 3 + Math.random() * 6,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.25,
        alpha: 0.9,
      });
    }
    startClickLoop();
  });

  function drawClicks() {
    ctx.clearRect(0, 0, w, h);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.alpha -= 0.038;
      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      if (p.type === "ring") {
        p.r += 2.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(22, 207, 251, ${p.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (p.type === "shard") {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 1.3);
        ctx.lineTo(p.size, p.size * 0.8);
        ctx.lineTo(-p.size * 0.8, p.size * 0.6);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
        ctx.restore();
      }
    }
    if (particles.length > 0) {
      requestAnimationFrame(drawClicks);
    } else {
      isClickLoopRunning = false;
    }
  }
}

/* P3R Toast Notification System */
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("p3r-toast");
  const text = document.getElementById("toast-text");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// Fitur Salin Teks / Link ke Clipboard
document.querySelectorAll("[data-copy]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const val = el.dataset.copy;
    if (val) {
      navigator.clipboard.writeText(val).then(() => {
        showToast(`Disalin: ${val}`);
        playSound("nav");
      }).catch(() => { });
    }
  });
});

initClickCanvas();
