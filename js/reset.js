// ── Translations ──
const translations = {
    en: {
        dir: 'ltr',
        eyebrow: '✦ A New Beginning ✦',
        title: 'Forge a New Key',
        subtitle: '"Every key can be remade anew…"',
        intro: 'Whisper a new password to forge your new key.',
        passLabel: 'Your New Secret Key',
        passPlaceholder: '············',
        confirmLabel: 'Confirm Your Key',
        confirmPlaceholder: '············',
        submitBtn: '🗝️ Forge Key',
        loginLink: 'Return to the doors without forging.',
        epigraph: '"A forged key requires a determined hand."',
        passErrEmpty: "This key is too weak for the enchanted doors…",
        passErrShort: "Your key must be stronger…",
        confirmErrEmpty: "You must confirm your key to seal it…",
        confirmErrMismatch: "The keys do not match. Try again…",
        toastLoading: 'Forging key…',
        toastSuccess: '✨ The key has been forged! Returning to the library doors…',
        themeEnchanted: '🌙 Enchanted',
        themeReader: '☀️ Reader',
        langBtn: 'عربي',
    },
    ar: {
        dir: 'rtl',
        eyebrow: '✦ بداية جديدة ✦',
        title: 'أنشئ مفتاحاً جديداً',
        subtitle: '"كل مفتاح يمكن صياغته من جديد…"',
        intro: 'اهمس بكلمة مرور لتكوين مفتاحك الجديد.',
        passLabel: 'مفتاحك السري الجديد',
        passPlaceholder: '············',
        confirmLabel: 'تأكيد المفتاح',
        confirmPlaceholder: '············',
        submitBtn: '🗝️ تكوين المفتاح',
        loginLink: 'العودة إلى الأبواب بدون مفتاح.',
        epigraph: '"المفتاح الجديد يتطلب يدًا مصممة."',
        passErrEmpty: 'هذا المفتاح ضعيف جداً للأبواب المسحورة…',
        passErrShort: 'يجب أن يكون المفتاح أقوى…',
        confirmErrEmpty: 'يجب عليك تأكيد المفتاح لختمه…',
        confirmErrMismatch: 'المفاتيح لا تتطابق. حاول مرة أخرى…',
        toastLoading: 'جاري تشكيل المفتاح…',
        toastSuccess: '✨ تم تشكيل المفتاح! العودة لقاعة الأبواب…',
        themeEnchanted: '🌙 مسحور',
        themeReader: '☀️ قارئ',
        langBtn: 'English',
    }
};

// (currentLang handled by global.js)

// ── Language Switch ──
function onLanguageChange() {
    const lang = localStorage.getItem('el-lang') || 'en';
    currentLang = lang;
    const t = translations[lang];
    document.body.dir = t.dir;

    document.getElementById('eyebrow').innerHTML = t.eyebrow;
    document.getElementById('card-title').innerHTML = t.title;
    document.getElementById('card-subtitle').textContent = t.subtitle;
    document.getElementById('intro-text').innerHTML = t.intro;
    document.getElementById('pass-label').textContent = t.passLabel;
    document.getElementById('password').placeholder = t.passPlaceholder;
    document.getElementById('confirm-label').textContent = t.confirmLabel;
    document.getElementById('confirm-password').placeholder = t.confirmPlaceholder;
    document.getElementById('submit-btn').textContent = t.submitBtn;
    document.getElementById('login-btn').textContent = t.loginLink;
    document.getElementById('epigraph').textContent = t.epigraph;
    document.getElementById('btn-enchanted').textContent = t.themeEnchanted;
    document.getElementById('btn-reader').textContent = t.themeReader;
    document.getElementById('btn-lang').textContent = t.langBtn;

    // Clear errors
    showErr(passErr, false);
    showErr(confErr, false);
}


let currentTheme = (localStorage.getItem('el-mode') || 'night') === 'day' ? 'reader' : 'enchanted';

function onThemeChange() {
    const mode = localStorage.getItem('el-mode') || 'night';
    currentTheme = mode === 'day' ? 'reader' : 'enchanted';
    document.body.dataset.theme = currentTheme;
    document.getElementById('btn-enchanted').classList.toggle('active', currentTheme === 'enchanted');
    document.getElementById('btn-reader').classList.toggle('active', currentTheme === 'reader');
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
const form = document.getElementById('reset-form');
const passInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const passErr = document.getElementById('pass-error');
const confirmErr = document.getElementById('confirm-error');
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

passInput.addEventListener('input', () => showErr(passErr, false));
confirmInput.addEventListener('input', () => showErr(confirmErr, false));

form.addEventListener('submit', e => {
    e.preventDefault();
    const tr = translations[currentLang];
    const pass = passInput.value.trim();
    const confirm = confirmInput.value.trim();
    let hasErr = false;

    if (!pass) {
        passErr.textContent = tr.passErrEmpty;
        showErr(passErr, true); hasErr = true;
    } else if (pass.length < 6) {
        passErr.textContent = tr.passErrShort;
        showErr(passErr, true); hasErr = true;
    } else {
        showErr(passErr, false);
    }

    if (!confirm) {
        confirmErr.textContent = tr.confirmErrEmpty;
        showErr(confirmErr, true); hasErr = true;
    } else if (confirm !== pass) {
        confirmErr.textContent = tr.confirmErrMismatch;
        showErr(confirmErr, true); hasErr = true;
    } else {
        showErr(confirmErr, false);
    }

    if (!hasErr) {
        submitBtn.classList.add('loading');
        submitBtn.textContent = tr.toastLoading;
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.textContent = translations[currentLang].submitBtn;
            showToast(tr.toastSuccess);
            setTimeout(() => window.location.href = '../login.html', 2000);
        }, 2000);
    }
});

function handleLogin() {
    window.location.href = '../login.html';
}

// ── Init ──
onLanguageChange();
onThemeChange();
