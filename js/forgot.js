// ── Translations ──
const translations = {
    en: {
        dir: 'ltr',
        eyebrow: '✦ Find Your Lost Story ✦',
        title: 'Lost Your Key?',
        subtitle: '"Even the most elusive stories can be found again…"',
        intro: 'Provide your scroll address and we shall send a guiding light to restore your access to the library.',
        emailLabel: 'Where shall we send the guiding light?',
        emailPlaceholder: 'your.name@realm.com',
        submitBtn: '🕯️ Cast Recovery Spell',
        loginLink: 'Remembered your key? Return.',
        epigraph: '"Every lost key has a door waiting for its return."',
        emailErrEmpty: "We need a path to send your recovery spell…",
        emailErrInvalid: "This path is unknown to our library…",
        toastLoading: 'Casting spell…',
        toastSuccess: '✨ A guiding light has been sent to your scroll.',
        themeEnchanted: '🌙 Enchanted',
        themeReader: '☀️ Reader',
        langBtn: 'عربي',
    },
    ar: {
        dir: 'rtl',
        eyebrow: '✦ ابحث عن قصتك المفقودة ✦',
        title: 'فقدت مفتاحك؟',
        subtitle: '"حتى القصص الأكثر مراوغة يمكن العثور عليها مجدداً…"',
        intro: 'أدخل مسار بريدك وسنرسل لك نوراً يهديك لاستعادة وصولك إلى المكتبة.',
        emailLabel: 'إلى أين نرسل ضوء الهداية؟',
        emailPlaceholder: 'your.name@realm.com',
        submitBtn: '🕯️ ألقِ تعويذة الاسترجاع',
        loginLink: 'تذكرت مفتاحك؟ عُد.',
        epigraph: '"كل مفتاح مفقود لديه باب ينتظر عودته."',
        emailErrEmpty: 'نحتاج لمسار كي نرسل لك تعويذة الاسترجاع…',
        emailErrInvalid: 'هذا المسار غير معروف في مكتبتنا…',
        toastLoading: 'جاري إلقاء التعويذة…',
        toastSuccess: '✨ تم إرسال نور هداية إلى سجلك.',
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

    document.querySelector('.eyebrow').innerHTML = t.eyebrow;
    document.querySelector('.card-title').innerHTML = t.title;
    document.querySelector('.card-subtitle').textContent = t.subtitle;
    document.querySelector('.intro-text').innerHTML = t.intro;
    document.querySelector('label[for="email"]').textContent = t.emailLabel;
    document.getElementById('email').placeholder = t.emailPlaceholder;
    document.getElementById('submit-btn').textContent = t.submitBtn;
    document.getElementById('login-btn').textContent = t.loginLink;
    document.querySelector('.epigraph').textContent = t.epigraph;
    document.getElementById('btn-enchanted').textContent = t.themeEnchanted;
    document.getElementById('btn-reader').textContent = t.themeReader;
    document.getElementById('btn-lang').textContent = t.langBtn;

    // Clear errors on language switch
    showErr(emailErr, false);
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
const form = document.getElementById('forgot-form');
const emailInput = document.getElementById('email');
const emailErr = document.getElementById('email-error');
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

form.addEventListener('submit', e => {
    e.preventDefault();
    const tr = translations[currentLang];
    const email = emailInput.value.trim();
    let hasErr = false;

    if (!email) {
        emailErr.textContent = tr.emailErrEmpty;
        showErr(emailErr, true); hasErr = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailErr.textContent = tr.emailErrInvalid;
        showErr(emailErr, true); hasErr = true;
    } else showErr(emailErr, false);

    if (!hasErr) {
        submitBtn.classList.add('loading');
        submitBtn.textContent = tr.toastLoading;
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            submitBtn.textContent = translations[currentLang].submitBtn;
            showToast(tr.toastSuccess);
            setTimeout(() => window.location.href = 'verification.html', 1500);
        }, 2000);
    }
});

function handleLogin() {
    window.location.href = 'login.html';
}

// ── Init ──
onLanguageChange();
onThemeChange();
