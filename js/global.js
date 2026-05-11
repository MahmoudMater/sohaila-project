/* ============================================================
   GLOBAL.JS — Enchanted Library
   Shared across: index.html, contactus.html, newsletter.html,
                  login.html, registration.html, profile.html,
                  forgot.html, verification.html, reset.html
   Handles: Day/Night mode, Language (EN/AR), Scroll Reveal,
            Particles (for main pages)
============================================================ */

/* ---------- STATE ---------- */
let currentMode = localStorage.getItem('el-mode') || 'night';
let currentLang = localStorage.getItem('el-lang') || 'en';

/* ============================================================
   MODE (DAY / NIGHT)
============================================================ */
function setMode(mode) {
  currentMode = mode;
  localStorage.setItem('el-mode', mode);
  applyMode();
}

function applyMode() {
  // Compatibility with different naming conventions
  document.body.classList.toggle('day-mode', currentMode === 'day');
  document.body.classList.toggle('night-mode', currentMode !== 'day');
  document.body.classList.toggle('light-mode', currentMode === 'day'); // Added for global.css compatibility
  document.body.classList.toggle('light-theme', currentMode === 'day');
  document.body.classList.toggle('dark-theme', currentMode !== 'day');
  document.body.classList.toggle('theme-reader', currentMode === 'day');
  document.body.classList.toggle('theme-enchanted', currentMode !== 'day');
  
  // Update data-theme attribute for beauty-style pages (login, registration, etc.)
  document.body.setAttribute('data-theme', currentMode === 'day' ? 'reader' : 'enchanted');

  // Update any mode buttons
  document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('mode' + currentMode.charAt(0).toUpperCase() + currentMode.slice(1));
  if (activeBtn) activeBtn.classList.add('active');


  // Update beauty-style theme buttons
  document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
  const beautyBtn = document.getElementById('btn-' + (currentMode === 'day' ? 'reader' : 'enchanted'));
  if (beautyBtn) beautyBtn.classList.add('active');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  if (themeIcon) themeIcon.textContent = currentMode === 'day' ? '📖' : '🌙';
  if (themeLabel) {
    if (currentLang === 'ar') {
      themeLabel.textContent = currentMode === 'day' ? 'القارئ العصري' : 'مسحور';
    } else {
      themeLabel.textContent = currentMode === 'day' ? 'Modern Reader' : 'Enchanted';
    }
  }

  // Page-specific hook
  if (typeof onThemeChange === 'function') onThemeChange();
}

/* Beauty pages theme toggle (used in login, registration, profile etc.) */
function setTheme(theme) {
  setMode(theme === 'reader' ? 'day' : 'night');
}
function toggleTheme() {
  setMode(currentMode === 'day' ? 'night' : 'day');
}

/* ============================================================
   LANGUAGE (EN / AR)
============================================================ */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('el-lang', lang);
  applyLanguage();
}

function applyLanguage() {
  const isAr = currentLang === 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  // Update all data-en / data-ar elements
  document.querySelectorAll('[data-en],[data-ar]').forEach(el => {
    const val = el.getAttribute('data-' + currentLang);
    if (val !== null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    }
  });

  // Update placeholder-specific attributes
  document.querySelectorAll('[data-placeholder-en],[data-placeholder-ar]').forEach(el => {
    const ph = el.getAttribute('data-placeholder-' + currentLang);
    if (ph) el.placeholder = ph;
  });

  // Update lang buttons (main pages)
  document.querySelectorAll('#btn-en, #btn-ar').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-' + currentLang);
  if (activeBtn) activeBtn.classList.add('active');

  // Update beauty-style single toggle button
  const langBtn = document.getElementById('btn-lang') || document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = isAr ? 'English' : 'عربي';
    langBtn.classList.toggle('active', true);
  }
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = isAr ? 'English' : 'عربي';

  // Update theme labels in new language
  const themeLabel = document.getElementById('themeLabel');
  if (themeLabel) {
    themeLabel.textContent = currentMode === 'day'
      ? (isAr ? 'القارئ العصري' : 'Modern Reader')
      : (isAr ? 'مسحور' : 'Enchanted');
  }

  // Page-specific hooks
  if (typeof renderSlides === 'function') renderSlides();
  if (typeof onLanguageChange === 'function') onLanguageChange();
}

/* Beauty toggle (single button) */
function toggleLang() {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ============================================================
   PARTICLES (main pages only — skipped if canvas exists)
============================================================ */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container || container.tagName === 'CANVAS') return;
  const count = 25;
  const colors = ['#c9a84c','#e8c97a','#f5c2cf','#d4af37'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${9+Math.random()*12}s;
      animation-delay:${-Math.random()*15}s;
      box-shadow:0 0 ${size*3}px ${colors[0]};
    `;
    container.appendChild(p);
  }
}

/* ============================================================
   INIT — runs on every page
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyMode();
  applyLanguage();
  initScrollReveal();
  initParticles();
});

/* ============================================================
   REAL-TIME SYNC ACROSS TABS
   If user changes theme/lang in one tab, update all other tabs.
============================================================ */
window.addEventListener('storage', (e) => {
  if (e.key === 'el-mode') {
    currentMode = e.newValue || 'night';
    applyMode();
  }
  if (e.key === 'el-lang') {
    currentLang = e.newValue || 'en';
    applyLanguage();
  }
});
