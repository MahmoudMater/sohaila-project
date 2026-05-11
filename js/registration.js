const data = {
  enchanted: {
    ar: {
      btnIcon: '📖', btnLabel: 'القارئ العصري',
      cardTitle: 'انضم إلى<br>المكتبة المسحورة',
      cardSubtitle: '"كل حكاية عظيمة تبدأ باسم…"',
      inspiration: 'مستوحاة من الجمال والوحش — حيث يفتح الفضول كل باب.',
      cardIntro: 'ادخل عالماً مستوحىً من قصص السحر، حيث يصبح كل قارئ جزءاً من مكتبة حية. سجّل الآن وافتح بوابة الكتب والعوالم والحكايات.',
      nameLabel: 'اسمك', nameQ: 'بماذا نناديك، أيها المسافر؟', namePlaceholder: 'أدخل اسمك…',
      emailLabel: 'عنوان بريدك', emailQ: 'إلى أين نرسل فصلك القادم؟', emailPlaceholder: 'بريدك@مثال.com',
      passLabel: 'كلمة السر', passQ: 'أنشئ مفتاح باب مكتبتك', passPlaceholder: 'اكتب كلمة السر…',
      confirmLabel: 'تأكيد كلمة السر', confirmQ: 'كرر كلمة السر لتأكيد رحلتك', confirmPlaceholder: 'أعد كلمة السر…',
      submitBtn: '✨ ادخل المكتبة',
      footer: 'هل أنت قارئ بالفعل؟ ', loginLink: 'عُد إلى المكتبة ←',
      errors: {
        nameRequired: '✦ يجب أن يكون للمسافر اسم…',
        nameShort: '✦ اسمك يجب أن يكون حرفين على الأقل…',
        emailRequired: '✦ نحتاج مساراً لإرسال فصولك…',
        emailInvalid: '✦ هذا لا يبدو مساراً صحيحاً للمكتبة…',
        passRequired: '✦ كلمة السر لا يمكن أن تكون فارغة…',
        passShort: '✦ كلمة السر يجب أن تكون 8 أحرف على الأقل…',
        confirmRequired: '✦ كرر كلمة السر لفتح رحلتك…',
        confirmMismatch: '✦ كلمتا السر لا تتطابقان — حاول مجدداً…',
      },
      successTitle: 'أهلاً بك، أيها القارئ العزيز',
      successText: 'أبواب المكتبة تفتح لك.<br><em>حكايتك بدأت للتو…</em>',
      successIcon: '🍂',
      nameSuccess: '✓ ممتاز!',
      emailSuccess: '✓ المسار واضح…',
      passSuccess: '✓ كلمة السر قوية…',
      confirmSuccess: '✓ تم ختم كلمة السر…',
    },
    en: {
      btnIcon: '📖', btnLabel: 'Modern Reader',
      cardTitle: 'Become a Reader of<br>The Enchanted Library',
      cardSubtitle: '"Every great story begins with a name…"',
      inspiration: 'Inspired by Beauty and the Beast — where curiosity opens every door.',
      cardIntro: 'Step into a world inspired by enchanted stories, where every reader becomes part of a living library. Register now and unlock access to books, worlds, and tales beyond imagination.',
      nameLabel: 'Your Name', nameQ: 'What shall we call you, traveler?', namePlaceholder: 'Enter your name…',
      emailLabel: 'Your Scroll Address', emailQ: 'Where can we send your next chapter?', emailPlaceholder: 'name@example.com',
      passLabel: 'Your Secret Spell', passQ: 'Create the key to your library door', passPlaceholder: 'Type your spell…',
      confirmLabel: 'Confirm the Spell', confirmQ: 'Repeat the spell to unlock your journey', confirmPlaceholder: 'Repeat your spell…',
      submitBtn: '✨ Enter the Library',
      footer: 'Already a reader? ', loginLink: 'Return to the library →',
      errors: {
        nameRequired: '✦ The traveler must have a name…',
        nameShort: '✦ Your name must have at least 2 letters…',
        emailRequired: '✦ We need a path to send your chapters…',
        emailInvalid: '✦ This does not look like a valid path…',
        passRequired: '✦ The spell cannot be empty…',
        passShort: '✦ Your spell must be at least 8 characters…',
        confirmRequired: '✦ Repeat the spell to unlock your journey…',
        confirmMismatch: '✦ The spells do not match — try once more…',
      },
      successTitle: 'Welcome, Dear Reader',
      successText: 'The library doors open for you.<br><em>Your story has just begun…</em>',
      successIcon: '🍂',
      nameSuccess: '✓ Perfect!',
      emailSuccess: '✓ The path is clear…',
      passSuccess: '✓ The spell is strong…',
      confirmSuccess: '✓ The spell is sealed…',
    }
  },
  modern: {
    ar: {
      btnIcon: '🏰', btnLabel: 'المكتبة المسحورة',
      cardTitle: 'أنشئ<br>حسابك كقارئ',
      cardSubtitle: 'انضم إلى آلاف القراء حول العالم.',
      inspiration: 'القارئ العصري — بسيط وأنيق ودائماً في متناول يدك.',
      cardIntro: 'تصفح آلاف الكتب وتوصيات مخصصة ومجتمع من القراء المتحمسين. ابدأ رحلتك اليوم.',
      nameLabel: 'الاسم الكامل', nameQ: 'كيف يجب أن نناديك؟', namePlaceholder: 'الاسم الكامل…',
      emailLabel: 'البريد الإلكتروني', emailQ: 'سنستخدمه للتواصل معك.', emailPlaceholder: 'بريدك@مثال.com',
      passLabel: 'كلمة المرور', passQ: 'أنشئ كلمة مرور آمنة.', passPlaceholder: 'كلمة المرور…',
      confirmLabel: 'تأكيد كلمة المرور', confirmQ: 'أعد إدخال كلمة المرور للتأكيد.', confirmPlaceholder: 'تأكيد كلمة المرور…',
      submitBtn: '← إنشاء الحساب',
      footer: 'هل لديك حساب بالفعل؟ ', loginLink: 'تسجيل الدخول',
      errors: {
        nameRequired: 'الرجاء إدخال اسمك.',
        nameShort: 'يجب أن يتكون الاسم من حرفين على الأقل.',
        emailRequired: 'البريد الإلكتروني مطلوب.',
        emailInvalid: 'الرجاء إدخال بريد إلكتروني صحيح.',
        passRequired: 'كلمة المرور مطلوبة.',
        passShort: 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.',
        confirmRequired: 'الرجاء تأكيد كلمة المرور.',
        confirmMismatch: 'كلمتا المرور غير متطابقتين.',
      },
      successTitle: 'تم إنشاء الحساب!',
      successText: 'أهلاً بك. رحلة القراءة تبدأ الآن.',
      successIcon: '📚',
      nameSuccess: '✓ ممتاز',
      emailSuccess: '✓ بريد إلكتروني صحيح',
      passSuccess: '✓ كلمة المرور جيدة',
      confirmSuccess: '✓ كلمتا المرور متطابقتان',
    },
    en: {
      btnIcon: '🏰', btnLabel: 'Enchanted Library',
      cardTitle: 'Create Your<br>Reader Account',
      cardSubtitle: 'Join thousands of readers worldwide.',
      inspiration: 'Modern Reader — clean, simple, and always accessible.',
      cardIntro: 'Access thousands of books, personalized recommendations, and a community of passionate readers. Start your journey today.',
      nameLabel: 'Full Name', nameQ: 'How should we address you?', namePlaceholder: 'Full Name…',
      emailLabel: 'Email Address', emailQ: "We'll use this to keep you updated.", emailPlaceholder: 'name@example.com',
      passLabel: 'Password', passQ: 'Create a secure password.', passPlaceholder: 'Password…',
      confirmLabel: 'Confirm Password', confirmQ: 'Re-enter your password to confirm.', confirmPlaceholder: 'Confirm Password…',
      submitBtn: '→ Create Account',
      footer: 'Already have an account? ', loginLink: 'Sign in here',
      errors: {
        nameRequired: 'Please enter your name.',
        nameShort: 'Name must be at least 2 characters.',
        emailRequired: 'Email address is required.',
        emailInvalid: 'Please enter a valid email address.',
        passRequired: 'Password is required.',
        passShort: 'Password must be at least 8 characters.',
        confirmRequired: 'Please confirm your password.',
        confirmMismatch: 'Passwords do not match.',
      },
      successTitle: 'Account Created!',
      successText: 'Welcome aboard. Your reading journey starts now.',
      successIcon: '📚',
      nameSuccess: '✓ Looks good',
      emailSuccess: '✓ Valid email address',
      passSuccess: '✓ Password looks good',
      confirmSuccess: '✓ Passwords match',


    }

  }
};

// (currentMode and currentLang are handled by global.js)
let currentTheme = (localStorage.getItem('el-mode') || 'night') === 'day' ? 'modern' : 'enchanted';

function getCurrent() {
  return data[currentTheme][currentLang];
}

function onLanguageChange() {
  const lang = localStorage.getItem('el-lang') || 'en';
  currentLang = lang;
  const t = getCurrent();
  const body = document.body;
  body.classList.toggle('lang-ar', lang === 'ar');
  body.classList.toggle('lang-en', lang === 'en');
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Lang button
  const langIcon = document.getElementById('langIcon');
  const langLabel = document.getElementById('langLabel');
  if (langIcon) langIcon.textContent = '🌐';
  if (langLabel) langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';

  // Card content
  const cardTitle = document.getElementById('cardTitle');
  if (cardTitle) cardTitle.innerHTML = t.cardTitle;
  const cardSub = document.getElementById('cardSubtitle');
  if (cardSub) cardSub.textContent = t.cardSubtitle;
  const inspLine = document.getElementById('inspirationLine');
  if (inspLine) inspLine.textContent = t.inspiration;
  const cardInt = document.getElementById('cardIntro');
  if (cardInt) cardInt.textContent = t.cardIntro;
  const nameL = document.getElementById('nameLabel');
  if (nameL) nameL.textContent = t.nameLabel;
  const nameQ = document.getElementById('nameQ');
  if (nameQ) nameQ.textContent = t.nameQ;
  const nameI = document.getElementById('name');
  if (nameI) nameI.placeholder = t.namePlaceholder;
  const emailL = document.getElementById('emailLabel');
  if (emailL) emailL.textContent = t.emailLabel;
  const emailQ = document.getElementById('emailQ');
  if (emailQ) emailQ.textContent = t.emailQ;
  const emailI = document.getElementById('email');
  if (emailI) emailI.placeholder = t.emailPlaceholder;
  const passL = document.getElementById('passLabel');
  if (passL) passL.textContent = t.passLabel;
  const passQ = document.getElementById('passQ');
  if (passQ) passQ.textContent = t.passQ;
  const passI = document.getElementById('password');
  if (passI) passI.placeholder = t.passPlaceholder;
  const confL = document.getElementById('confirmLabel');
  if (confL) confL.textContent = t.confirmLabel;
  const confQ = document.getElementById('confirmQ');
  if (confQ) confQ.textContent = t.confirmQ;
  const confI = document.getElementById('confirm');
  if (confI) confI.placeholder = t.confirmPlaceholder;
  const subBtn = document.getElementById('submitBtn');
  if (subBtn) subBtn.textContent = t.submitBtn;
  const cardFoot = document.getElementById('cardFooter');
  if (cardFoot) cardFoot.innerHTML = t.footer + '<a href="../login.html" id="loginLink">' + t.loginLink + '</a>';

  clearValidation();
}

function onThemeChange() {
  const mode = localStorage.getItem('el-mode') || 'night';
  currentTheme = mode === 'day' ? 'modern' : 'enchanted';
  const t = getCurrent();
  document.body.className = 'theme-' + currentTheme + ' lang-' + currentLang;
  
  // Theme button
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  if (themeIcon) themeIcon.textContent = t.btnIcon;
  if (themeLabel) themeLabel.textContent = t.btnLabel;

  updateParticles();
}



// Particles
function createParticles() {
  const container = document.getElementById('particles');
  container.innerHTML = '';
  if (currentTheme === 'enchanted') {
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div');
      p.className = 'petal';
      p.textContent = '🍂';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.fontSize = (10 + Math.random() * 8) + 'px';
      container.appendChild(p);
    }
    for (let i = 0; i < 20; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.animationDuration = (2 + Math.random() * 3) + 's';
      s.style.animationDelay = (Math.random() * 5) + 's';
      container.appendChild(s);
    }
  }
}
function updateParticles() { createParticles(); }

// Validation helpers
function setMsg(id, msg, type) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = 'validation-msg ' + (msg ? type : '');
}
function clearValidation() {
  ['nameMsg', 'emailMsg', 'passMsg', 'confirmMsg'].forEach(id => {
    const el = document.getElementById(id);
    el.className = 'validation-msg';
    el.textContent = '';
  });
  updateStrength('');
}
function getErr(key) { return getCurrent().errors[key]; }

function validateName() {
  const val = document.getElementById('name').value.trim();
  if (!val) { setMsg('nameMsg', getErr('nameRequired'), 'error'); return false; }
  if (val.length < 2) { setMsg('nameMsg', getErr('nameShort'), 'error'); return false; }
  setMsg('nameMsg', getCurrent().nameSuccess, 'success'); return true;
}
function validateEmail() {
  const val = document.getElementById('email').value.trim();
  if (!val) { setMsg('emailMsg', getErr('emailRequired'), 'error'); return false; }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(val)) { setMsg('emailMsg', getErr('emailInvalid'), 'error'); return false; }
  setMsg('emailMsg', getCurrent().emailSuccess, 'success'); return true;
}
function validatePassword() {
  const val = document.getElementById('password').value;
  if (!val) { setMsg('passMsg', getErr('passRequired'), 'error'); return false; }
  if (val.length < 8) { setMsg('passMsg', getErr('passShort'), 'error'); return false; }
  setMsg('passMsg', getCurrent().passSuccess, 'success'); return true;
}
function validateConfirm() {
  const pass = document.getElementById('password').value;
  const conf = document.getElementById('confirm').value;
  if (!conf) { setMsg('confirmMsg', getErr('confirmRequired'), 'error'); return false; }
  if (pass !== conf) { setMsg('confirmMsg', getErr('confirmMismatch'), 'error'); return false; }
  setMsg('confirmMsg', getCurrent().confirmSuccess, 'success'); return true;
}
function updateStrength(val) {
  const segs = [s1, s2, s3, s4];
  let strength = 0;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;
  const colors = currentTheme === 'enchanted'
    ? ['#8b1a2a', '#c8601a', '#c8a020', '#2d8040']
    : ['#dc2626', '#ea580c', '#ca8a04', '#16a34a'];
  segs.forEach((seg, i) => {
    seg.style.background = i < strength ? colors[strength - 1] : 'rgba(128,128,128,0.2)';
  });
}

document.getElementById('password').addEventListener('input', function () { updateStrength(this.value); });
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('confirm').addEventListener('blur', validateConfirm);

document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const ok = [validateName(), validateEmail(), validatePassword(), validateConfirm()];
  if (ok.every(Boolean)) {
    const t = getCurrent();
    const overlay = document.getElementById('successOverlay');
    overlay.querySelector('.success-icon').textContent = t.successIcon;
    document.getElementById('successTitle').textContent = t.successTitle;
    document.getElementById('successText').innerHTML = t.successText;
    overlay.classList.add('active');
    setTimeout(() => {
      overlay.classList.remove('active');
      window.location.href = '../login.html';
    }, 4000);
  }
});

// Init
onLanguageChange();
onThemeChange();
