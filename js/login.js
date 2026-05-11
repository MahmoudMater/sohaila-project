// ── Translations ──
const translations = {
  en: {
    dir: 'ltr',
    eyebrow: '✦ Return to the Enchanted Library ✦',
    title: 'Welcome Back,<br>Dear Reader',
    subtitle: '"Your story is waiting where you left it…"',
    intro: 'The pages remember you. Return to your journey<br>and continue exploring worlds beyond imagination.',
    emailLabel: 'Where shall we find your story?',
    emailPlaceholder: 'your.name@realm.com',
    passLabel: 'Enter your secret key',
    passPlaeholder: '············',
    submitBtn: '📖 Continue Your Story',
    forgotLink: 'Lost your key?',
    registerLink: 'New to this story? Begin here.',
    epigraph: '"Not all who wander are lost… some are just searching for the right book."',
    emailErrEmpty: "The door won't open without your details…",
    emailErrInvalid: "We couldn't find your story in our library…",
    passErrEmpty: "The door won't open without your details…",
    passErrShort: "That key doesn't unlock this door…",
    toastLoading: 'Opening the doors…',
    toastSuccess: '✨ The library awaits you, dear reader…',
    toastForgot: '🕯️ A new key shall be sent to your scroll…',
    toastRegister: '📜 Every great story begins with a first page…',
    themeEnchanted: '🌙 Enchanted',
    themeReader: '☀️ Reader',
    langBtn: 'عربي',
  },
  ar: {
    dir: 'rtl',
    eyebrow: '✦ العودة إلى المكتبة المسحورة ✦',
    title: 'مرحباً بعودتك،<br>أيها القارئ العزيز',
    subtitle: '"قصتك تنتظرك من حيث توقفت…"',
    intro: 'الصفحات تتذكرك. عُد إلى رحلتك<br>وواصل استكشاف عوالم تتجاوز الخيال.',
    emailLabel: 'أين نجد قصتك؟',
    emailPlaceholder: 'your.name@realm.com',
    passLabel: 'أدخل مفتاحك السري',
    passPlaeholder: '············',
    submitBtn: '📖 واصل قصتك',
    forgotLink: 'نسيت مفتاحك؟',
    registerLink: 'جديد هنا؟ ابدأ من هنا.',
    epigraph: '"ليس كل من يتجول ضائعاً… بعضهم يبحث عن الكتاب المناسب."',
    emailErrEmpty: 'لن تُفتح الأبواب بدون بياناتك…',
    emailErrInvalid: 'لم نجد قصتك في مكتبتنا…',
    passErrEmpty: 'لن تُفتح الأبواب بدون بياناتك…',
    passErrShort: 'هذا المفتاح لا يفتح هذا الباب…',
    toastLoading: 'تُفتح الأبواب…',
    toastSuccess: '✨ المكتبة تنتظرك أيها القارئ العزيز…',
    toastForgot: '🕯️ سيُرسل مفتاح جديد إلى سجلّك…',
    toastRegister: '📜 كل قصة عظيمة تبدأ بصفحة أولى…',
    themeEnchanted: '🌙 مسحور',
    themeReader: '☀️ قارئ',
    langBtn: 'English',
  }
};

// (currentLang is already defined in global.js)

// ── Language Switch ──
function onLanguageChange() {
  const lang = localStorage.getItem('el-lang') || 'en';
  currentLang = lang;
  const t = translations[lang];
  document.body.dir = t.dir;

  document.querySelector('.eyebrow').innerHTML = t.eyebrow;
  document.querySelector('.card-title').innerHTML = t.title;
  document.querySelector('.card-subtitle').textContent = t.subtitle;
  document.querySelector('.intro-text').innerHTML = t.intro;
  document.querySelector('label[for="email"]').textContent = t.emailLabel;
  const emailIn = document.getElementById('email');
  if (emailIn) emailIn.placeholder = t.emailPlaceholder;
  document.querySelector('label[for="password"]').textContent = t.passLabel;
  const passIn = document.getElementById('password');
  if (passIn) passIn.placeholder = t.passPlaeholder;
  document.getElementById('submit-btn').textContent = t.submitBtn;
  document.getElementById('forgot-btn').textContent = t.forgotLink;
  document.getElementById('register-btn').textContent = t.registerLink;
  document.querySelector('.epigraph').textContent = t.epigraph;
  document.getElementById('btn-enchanted').textContent = t.themeEnchanted;
  document.getElementById('btn-reader').textContent = t.themeReader;
  const btnLang = document.getElementById('btn-lang');
  if (btnLang) btnLang.textContent = t.langBtn;

  // Clear errors on language switch
  if (typeof showErr === 'function') {
    showErr(emailErr, false);
    showErr(passErr, false);
  }
}


// ── Theme ──
function onThemeChange() {
  const mode = localStorage.getItem('el-mode') || 'night';
  const t = mode === 'day' ? 'reader' : 'enchanted';
  document.body.dataset.theme = t;
  const btnEnch = document.getElementById('btn-enchanted');
  const btnRead = document.getElementById('btn-reader');
  if (btnEnch) btnEnch.classList.toggle('active', t === 'enchanted');
  if (btnRead) btnRead.classList.toggle('active', t === 'reader');
  initParticles();
}

// ── Particles ──
let particleRAF;
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cancelAnimationFrame(particleRAF);

  const theme = document.body.dataset.theme;
  const isEnchanted = theme === 'enchanted';
  const count = 55;

  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    vx: (Math.random() - 0.5) * 0.25,
    vy: -Math.random() * 0.5 - 0.1,
    alpha: Math.random() * 0.6 + 0.1,
    da: (Math.random() - 0.5) * 0.004,
    life: Math.random()
  }));

  const colorBase = isEnchanted
    ? 'rgba(220, 180, 80,'
    : 'rgba(140, 90, 30,';

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.da;
      if (p.alpha <= 0.05 || p.alpha >= 0.7) p.da *= -1;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10 || p.x > canvas.width + 10) p.x = Math.random() * canvas.width;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = colorBase + p.alpha + ')';
      ctx.fill();
    }
    particleRAF = requestAnimationFrame(draw);
  }
  draw();
}

window.addEventListener('resize', () => {
  const c = document.getElementById('particles');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
});

// ── Form Validation ──
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const emailErr = document.getElementById('email-error');
const passErr = document.getElementById('pass-error');
const submitBtn = document.getElementById('submit-btn');

function showErr(el, show) {
  el.classList.toggle('show', show);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

emailInput.addEventListener('input', () => showErr(emailErr, false));
passInput.addEventListener('input', () => showErr(passErr, false));

form.addEventListener('submit', e => {
  e.preventDefault();
  const tr = translations[currentLang];
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();
  let hasErr = false;

  if (!email) {
    emailErr.textContent = tr.emailErrEmpty;
    showErr(emailErr, true); hasErr = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailErr.textContent = tr.emailErrInvalid;
    showErr(emailErr, true); hasErr = true;
  } else showErr(emailErr, false);

  if (!pass) {
    passErr.textContent = tr.passErrEmpty;
    showErr(passErr, true); hasErr = true;
  } else if (pass.length < 6) {
    passErr.textContent = tr.passErrShort;
    showErr(passErr, true); hasErr = true;
  } else showErr(passErr, false);

  if (!hasErr) {
    submitBtn.classList.add('loading');
    submitBtn.textContent = tr.toastLoading;
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.textContent = translations[currentLang].submitBtn;
      showToast(tr.toastSuccess);
      window.location.href = 'pages/homepage.html';
    }, 2000);
  }
});

function handleForgot() {
  window.location.href = 'pages/forgot.html';
}

function handleRegister() {
  window.location.href = 'pages/registration.html';
}

// ── Init ──
onLanguageChange();
onThemeChange();