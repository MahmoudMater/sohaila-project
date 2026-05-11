// ── Translations ──
const translations = {
    en: {
        dir: 'ltr',
        eyebrow: '✦ Unlock Your Destiny ✦',
        title: 'Verify Your Scroll',
        subtitle: '"The library sent a whisper to your scroll…"',
        intro: 'Enter the 4-digit incantation we sent to your scroll to proceed.',
        codeLabel: 'Incantation Code',
        codePlaceholder: '----',
        submitBtn: '📜 Verify Code',
        loginLink: 'Return to the doors.',
        epigraph: '"A secret whispered securely opens the rarest of doors."',
        codeErrEmpty: "The incantation is incomplete or incorrect…",
        toastLoading: 'Verifying incantation…',
        toastSuccess: '✨ The spell is accepted. Proceed.',
        themeEnchanted: '🌙 Enchanted',
        themeReader: '☀️ Reader',
        langBtn: 'عربي',
    },
    ar: {
        dir: 'rtl',
        eyebrow: '✦ افتح أبواب قدرك ✦',
        title: 'تحقق من السجل الخاص بك',
        subtitle: '"أرسلت المكتبة همسة إلى سجلك…"',
        intro: 'أدخل التعويذة المكونة من 4 أرقام التي أرسلناها إلى سجلك للمتابعة.',
        codeLabel: 'رمز التعويذة',
        codePlaceholder: '----',
        submitBtn: '📜 تحقق من الرمز',
        loginLink: 'العودة إلى الأبواب.',
        epigraph: '"السر الموهوب بشكل آمن يفتح أندر الأبواب."',
        codeErrEmpty: 'التعويذة غير مكتملة أو غير صحيحة…',
        toastLoading: 'جاري التحقق من التعويذة…',
        toastSuccess: '✨ تم قبول التعويذة. تقدم.',
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
    document.getElementById('code-label').textContent = t.codeLabel;
    document.getElementById('code').placeholder = t.codePlaceholder;
    document.getElementById('submit-btn').textContent = t.submitBtn;
    document.getElementById('login-btn').textContent = t.loginLink;
    document.getElementById('epigraph').textContent = t.epigraph;
    document.getElementById('btn-enchanted').textContent = t.themeEnchanted;
    document.getElementById('btn-reader').textContent = t.themeReader;
    document.getElementById('btn-lang').textContent = t.langBtn;

    // Clear errors
    showErr(codeErr, false);
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
const form = document.getElementById('verification-form');
const codeInput = document.getElementById('code');
const codeErr = document.getElementById('code-error');
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

codeInput.addEventListener('input', () => {
    // Only allow digits
    codeInput.value = codeInput.value.replace(/\D/g, '');
    showErr(codeErr, false);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const tr = translations[currentLang];
    const code = codeInput.value.trim();
    let hasErr = false;

    if (code.length !== 4) {
        codeErr.textContent = tr.codeErrEmpty;
        showErr(codeErr, true); hasErr = true;
    } else showErr(codeErr, false);

    if (!hasErr) {
        submitBtn.classList.add('loading');
        submitBtn.textContent = tr.toastLoading;
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.textContent = translations[currentLang].submitBtn;
            showToast(tr.toastSuccess);
            setTimeout(() => window.location.href = 'reset.html', 1500);
        }, 2000);
    }
});

function handleLogin() {
    window.location.href = 'login.html';
}

// ── Init ──
onLanguageChange();
onThemeChange();
