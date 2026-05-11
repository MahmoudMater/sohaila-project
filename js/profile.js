
/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
// (currentMode and currentLang are handled by global.js)
let currentTheme = (localStorage.getItem('el-mode') || 'night') === 'day' ? 'modern' : 'enchanted';



/* ══════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════ */
const T = {
  en: {
    langIcon: '🌐', langLabel: 'العربية',
    themeIcon_ench: '📖', themeLabel_ench: 'Modern Reader',
    themeIcon_mod: '🏰', themeLabel_mod: 'Enchanted Library',
    quote_ench: 'A reader lives a thousand lives before he dies.',
    quote_mod: 'Some pages are meant to change us forever.',
    knownLabel_ench: 'Known Within the Library As',
    knownLabel_mod: 'Your Display Name',
    labelName_ench: 'Known As', labelName_mod: 'Full Name',
    labelEmail_ench: 'Messenger Owl Destination', labelEmail_mod: 'Email Address',
    labelGenre_ench: 'Favorite Realm', labelGenre_mod: 'Favorite Genre',
    labelRank_ench: 'Library Rank', labelRank_mod: 'Reader Level',
    labelAuthor: 'Favorite Author', labelChapter_ench: 'Last Visited Chapter', labelChapter_mod: 'Currently Reading',
    rankOptions: ['Curious Reader', 'Story Collector', 'Keeper of Tales', 'Master of Books'],
    genreOptions: ['Fantasy · Romance', 'Mystery · Thriller', 'Classics · Poetry', 'Science Fiction', 'Historical Fiction'],
    secAbout: '✦ Reader Profile', secProgress: '✦ Reading Adventure', secBooks: '✦ Treasured Stories',
    secStats: '✦ Your Reading Journey', secProgress2: '✦ Adventure Progress', secReviews: '✦ Whispers Between Pages', secSaved: '✦ Stories Awaiting You',
    tabAbout: '📖 About Me', tabBooks: '📚 Favorite Books', tabStats: '📊 Reading Journey',
    tabReviews: '✍️ Reviews', tabSaved: '🔖 Saved Stories',
    statBooks: 'Books Read', statHours: 'Hours Reading', statReviews: 'Reviews',
    sl_books: 'Books Completed', sl_hours: 'Hours Spent Reading', sl_reviews: 'Reviews Written',
    sl_rating: 'Average Rating', sl_since: 'Member Since', sl_rank: 'Library Rank',
    pl_yearly: 'Books This Year', pl_streak: 'Reading Streak', pl_reviews: 'Reviews Written',
    prog1: 'Monthly Goal', prog2: 'This Week',
    btnRewrite_ench: 'Rewrite Your Story', btnLeave_ench: 'Leave the Library',
    btnRewrite_mod: 'Edit Profile', btnLeave_mod: 'Sign Out',
    memberSince: 'Member Since · September 2023',
    modalTitle: 'Add a Treasured Story',
    modalPlTitle: 'Book Title…', modalPlAuthor: 'Author…', modalPlEmoji: 'Cover Emoji (e.g. 🐉)',
    modalOk: '✨ Add to Library', modalCancel: 'Cancel',
    bookBtn: '📖 Open Story', addStory: 'Add Story',
    toastAvatar: 'Portrait updated ✨',
    toastSave_ench: 'Your story has been rewritten ✨', toastSave_mod: 'Profile saved ✓',
    toastLeave_ench: 'Until we meet again, dear reader 🌙', toastLeave_mod: 'Signed out',
    toastRemove: 'Story removed from your collection',
    toastAdded: 'Story added to your treasures ✨',
    toastNoTitle: 'Please enter a title',
    emptyFav: 'No stories saved yet… every journey begins with a single page.',
  },
  ar: {
    langIcon: '🌐', langLabel: 'English',
    themeIcon_ench: '📖', themeLabel_ench: 'القارئ الحديث',
    themeIcon_mod: '🏰', themeLabel_mod: 'المكتبة المسحورة',
    quote_ench: 'القارئ يعيش ألف حياة قبل أن يموت.',
    quote_mod: 'بعض الصفحات كُتبت لتغيّرنا إلى الأبد.',
    knownLabel_ench: 'معروف في المكتبة بـ',
    knownLabel_mod: 'اسمك المعروض',
    labelName_ench: 'الاسم المعروف', labelName_mod: 'الاسم الكامل',
    labelEmail_ench: 'وجهة البومة الرسول', labelEmail_mod: 'البريد الإلكتروني',
    labelGenre_ench: 'العالَم المفضّل', labelGenre_mod: 'النوع المفضّل',
    labelRank_ench: 'رتبة المكتبة', labelRank_mod: 'مستوى القارئ',
    labelAuthor: 'الكاتب المفضّل', labelChapter_ench: 'آخر فصل زرته', labelChapter_mod: 'تقرأ حاليًا',
    rankOptions: ['قارئ فضولي', 'جامع القصص', 'حارس الحكايات', 'سيد الكتب'],
    genreOptions: ['خيال · رومانسي', 'غموض · إثارة', 'كلاسيكيات · شعر', 'خيال علمي', 'روايات تاريخية'],
    secAbout: '✦ ملف القارئ', secProgress: '✦ رحلة القراءة', secBooks: '✦ القصص المحبوبة',
    secStats: '✦ رحلتك في القراءة', secProgress2: '✦ تقدم المغامرة', secReviews: '✦ همسات بين الصفحات', secSaved: '✦ قصص تنتظرك',
    tabAbout: '📖 عني', tabBooks: '📚 الكتب المفضّلة', tabStats: '📊 رحلة القراءة',
    tabReviews: '✍️ المراجعات', tabSaved: '🔖 القصص المحفوظة',
    statBooks: 'كتب مقروءة', statHours: 'ساعات القراءة', statReviews: 'المراجعات',
    sl_books: 'كتب مكتملة', sl_hours: 'ساعات القراءة', sl_reviews: 'مراجعات مكتوبة',
    sl_rating: 'متوسط التقييم', sl_since: 'عضو منذ', sl_rank: 'رتبة المكتبة',
    pl_yearly: 'كتب هذا العام', pl_streak: 'سلسلة القراءة', pl_reviews: 'المراجعات',
    prog1: 'الهدف الشهري', prog2: 'هذا الأسبوع',
    btnRewrite_ench: 'أعد كتابة قصتك', btnLeave_ench: 'غادر المكتبة',
    btnRewrite_mod: 'تعديل الملف', btnLeave_mod: 'تسجيل الخروج',
    memberSince: 'عضو منذ · سبتمبر ٢٠٢٣',
    modalTitle: 'أضف قصة محبوبة',
    modalPlTitle: 'عنوان الكتاب…', modalPlAuthor: 'المؤلف…', modalPlEmoji: 'رمز الغلاف (مثل 🐉)',
    modalOk: '✨ أضف للمكتبة', modalCancel: 'إلغاء',
    bookBtn: '📖 افتح القصة', addStory: 'أضف قصة',
    toastAvatar: 'تم تحديث الصورة ✨',
    toastSave_ench: 'تمت إعادة كتابة قصتك ✨', toastSave_mod: 'تم حفظ الملف ✓',
    toastLeave_ench: 'إلى اللقاء أيها القارئ العزيز 🌙', toastLeave_mod: 'تم تسجيل الخروج',
    toastRemove: 'تمت إزالة القصة من مجموعتك',
    toastAdded: 'تمت إضافة القصة إلى كنوزك ✨',
    toastNoTitle: 'الرجاء إدخال العنوان',
    emptyFav: 'لا قصص محفوظة بعد… كل رحلة تبدأ بصفحة واحدة.',
  }
};

/* ══════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════ */
function onThemeChange() {
  const mode = localStorage.getItem('el-mode') || 'night';
  currentTheme = mode === 'day' ? 'modern' : 'enchanted';
  document.body.className = 'theme-' + currentTheme + ' lang-' + currentLang;
  applyTranslations();
  if (typeof updateParticles === 'function') updateParticles();
}

/* ══════════════════════════════════════
   LANGUAGE TOGGLE
══════════════════════════════════════ */
function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('el-lang', currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.className = 'theme-' + currentTheme + ' lang-' + currentLang;
  applyTranslations();
  // If global.js is present, sync it
  if (typeof applyLanguage === 'function') applyLanguage();
}

function applyTranslations() {
  const t = T[currentLang];
  const e = currentTheme === 'enchanted';

  // top bar
  document.getElementById('langIcon').textContent = t.langIcon;
  document.getElementById('langLabel').textContent = t.langLabel;
  document.getElementById('themeIcon').textContent = e ? t.themeIcon_ench : t.themeIcon_mod;
  document.getElementById('themeLabel').textContent = e ? t.themeLabel_ench : t.themeLabel_mod;

  // quote
  document.getElementById('topQuote').textContent = e ? t.quote_ench : t.quote_mod;

  // card labels
  document.getElementById('knownLabel').textContent = e ? t.knownLabel_ench : t.knownLabel_mod;
  document.getElementById('statLabelBooks').textContent = t.statBooks;
  document.getElementById('statLabelHours').textContent = t.statHours;
  document.getElementById('statLabelReviews').textContent = t.statReviews;
  document.getElementById('memberSince').textContent = t.memberSince;

  // section titles
  document.getElementById('sec-about').textContent = t.secAbout;
  document.getElementById('sec-progress').textContent = t.secProgress;

  // about labels
  document.getElementById('labelName').textContent = e ? t.labelName_ench : t.labelName_mod;
  document.getElementById('labelEmail').textContent = e ? t.labelEmail_ench : t.labelEmail_mod;
  document.getElementById('labelGenre').textContent = e ? t.labelGenre_ench : t.labelGenre_mod;
  document.getElementById('labelRank').textContent = e ? t.labelRank_ench : t.labelRank_mod;
  document.getElementById('labelAuthor').textContent = t.labelAuthor;
  document.getElementById('labelChapter').textContent = e ? t.labelChapter_ench : t.labelChapter_mod;

  // rank / genre selects
  const rankSel = document.getElementById('inputRank');
  const genreSel = document.getElementById('inputGenre');
  const curRankI = rankSel.selectedIndex;
  const curGenreI = genreSel.selectedIndex;
  rankSel.innerHTML = t.rankOptions.map((o, i) => `<option${i === curRankI ? ' selected' : ''}>${o}</option>`).join('');
  genreSel.innerHTML = t.genreOptions.map((o, i) => `<option${i === curGenreI ? ' selected' : ''}>${o}</option>`).join('');
  document.getElementById('rankText').textContent = t.rankOptions[curRankI];
  document.getElementById('displayGenre').textContent = t.genreOptions[curGenreI];

  // progress labels
  document.getElementById('prog1Label').textContent = t.prog1;
  document.getElementById('prog2Label').textContent = t.prog2;

  // buttons
  document.getElementById('btnRewrite').textContent = e ? t.btnRewrite_ench : t.btnRewrite_mod;
  document.getElementById('btnLeave').textContent = e ? t.btnLeave_ench : t.btnLeave_mod;
}

/* ══════════════════════════════════════
   PARTICLES
══════════════════════════════════════ */
function createParticles() {
  const c = document.getElementById('particles');
  c.innerHTML = '';
  if (currentTheme !== 'enchanted') return;
  ['🍂', '🌹', '✨'].forEach(e => {
    for (let j = 0; j < 6; j++) {
      const p = document.createElement('div');
      p.className = 'petal'; p.textContent = e;
      p.style.left = (Math.random() * 100) + '%';
      p.style.animationDuration = (10 + Math.random() * 12) + 's';
      p.style.animationDelay = (Math.random() * 15) + 's';
      p.style.fontSize = (10 + Math.random() * 7) + 'px';
      c.appendChild(p);
    }
  });
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = (Math.random() * 100) + '%';
    s.style.top = (Math.random() * 100) + '%';
    s.style.animationDuration = (2 + Math.random() * 3) + 's';
    s.style.animationDelay = (Math.random() * 5) + 's';
    c.appendChild(s);
  }
}
function updateParticles() { createParticles(); }



/* ══════════════════════════════════════
   PROFILE UPDATES
══════════════════════════════════════ */
function updateName(v) { document.getElementById('displayName').textContent = v || '—'; }
function updateEmail(v) { document.getElementById('displayEmail').textContent = v || '—'; }
function updateGenre(v) { document.getElementById('displayGenre').textContent = v; }
function updateRank(v) {
  document.getElementById('rankText').textContent = v;
}

/* ══════════════════════════════════════
   AVATAR
══════════════════════════════════════ */
document.getElementById('avatarInput').addEventListener('change', function () {
  const f = this.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = e => document.getElementById('avatarImg').src = e.target.result;
  r.readAsDataURL(f);
  showToast(T[currentLang].toastAvatar);
});



/* ══════════════════════════════════════
   ACTION BUTTONS
══════════════════════════════════════ */
function saveProfile() {
  const t = T[currentLang];
  showToast(currentTheme === 'enchanted' ? t.toastSave_ench : t.toastSave_mod);
}
function leaveLibrary() {
  const t = T[currentLang];
  showToast(currentTheme === 'enchanted' ? t.toastLeave_ench : t.toastLeave_mod);
  setTimeout(() => {
    window.location.href = '../login.html';
  }, 1000);
}

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
document.body.className = 'theme-' + currentTheme + ' lang-' + currentLang;
createParticles();
applyTranslations();
