const T = {
  ar: {
    pageTitle:"البحث — مكتبة بيل السحرية",
    navLogo:"✦ المكتبة السحرية ✦",
    navHome:"الرئيسية", navBooks:"معرض الكتب", navSearch:"البحث",
    navLibrary:"مكتبتي", navMoments:"اللحظات",
    langBtn:"🌐 English",
    heroEyebrow:"✦ \u00a0 ابحث واكتشف \u00a0 ✦",
    heroTitle:"ابحث في ", heroTitleEm:"المكتبة السحرية",
    heroSub:"«ليس كلّ كتاب مناسباً لكل شخص، لكنّ الكتاب المناسب ينتظرك»",
    searchPlaceholder:"ابحث بالعنوان أو المؤلف أو التصنيف أو السنة...",
    searchBtnLabel:"بحث",
    labelGenre:"التصنيف", optAllGenres:"جميع التصنيفات",
    labelAuthor:"المؤلف", authorPlaceholder:"مثل: أوستن...",
    labelRating:"الحد الأدنى للتقييم", optAnyRating:"أي تقييم",
    labelYear:"نطاق السنة", fromPlaceholder:"من", toPlaceholder:"إلى",
    resetBtn:"✦ مسح الكل",
    sortRelevance:"ترتيب: الصلة", sortTitle:"ترتيب: العنوان",
    sortAuthor:"ترتيب: المؤلف", sortRating:"ترتيب: التقييم ↓", sortYear:"ترتيب: السنة",
    resCount:(n)=>`${n} كتاب وُجد`,
    resQueryPrefix:"لـ",
    emptyTitle:"لم يُعثر على كتب في المجموعة السحرية…",
    emptyDesc:"جرّب عنواناً أو مؤلفاً أو تصنيفاً مختلفاً — المكتبة تحوي أسراراً كثيرة.",
    retryBtn:"✦ مسح الفلاتر",
    initialTitle:"ابدأ رحلة البحث",
    initialDesc:"اكتب عنواناً أو اسم مؤلف، أو اختر فلتراً لاستكشاف المجموعة السحرية.",
    quickBrowseLabel:"تصفّح سريع:", popularLabel:"الأكثر بحثاً:",
    qpRomance:"❤ رومانسي", qpAdventure:"⚔ مغامرات", qpClassic:"📜 كلاسيكيات",
    qpMystery:"🔎 غموض", qpCartoon:"🎨 كاريكاتير", qpPoetry:"🖋 شعر",
    popTag1:"كبرياء وتحامل", popTag2:"شيرلوك هولمز", popTag3:"جين أوستن",
    popTag4:"أستريكس", popTag5:"سبايدر مان", popTag6:"حنان لاشين",
    readMore:"اقرأ المزيد",
    bookmarked:(t)=>`تمت إضافة "${t}" إلى الإشارات`,
    unbookmarked:(t)=>`تمت إزالة "${t}" من الإشارات`,
    footerLogo:"✦ مكتبة بيل السحرية ✦",
    footerQuote:"«ثمّة شيء هناك لم يكن موجوداً من قبل.»",
    ftHome:"الرئيسية", ftBooks:"تصفّح", ftSearch:"البحث", ftLibrary:"مكتبتي",
    chipQuery:(q)=>`"${q}"`,
    chipGenre:(g)=>`التصنيف: ${g}`, chipAuthor:(a)=>`المؤلف: ${a}`,
    chipRating:(r)=>`التقييم: ${r}+`, chipFrom:(y)=>`من: ${y}`, chipTo:(y)=>`إلى: ${y}`,
    bcYear:(y)=>`${Math.abs(y)} ق.م`,
  },
  en: {
    pageTitle:"Search — Belle's Enchanted Library",
    navLogo:"✦ The Enchanted Library ✦",
    navHome:"Home", navBooks:"Books Fair", navSearch:"Search",
    navLibrary:"My Library", navMoments:"Moments",
    langBtn:"🌐 العربية",
    heroEyebrow:"✦ \u00a0 Seek & Discover \u00a0 ✦",
    heroTitle:"Search the ", heroTitleEm:"Enchanted Library",
    heroSub:'"Not every book is right for every person, but the right book awaits you."',
    searchPlaceholder:"Search by title, author, genre, year…",
    searchBtnLabel:"Search",
    labelGenre:"Genre", optAllGenres:"All Genres",
    labelAuthor:"Author", authorPlaceholder:"e.g. Austen…",
    labelRating:"Min Rating", optAnyRating:"Any Rating",
    labelYear:"Year Range", fromPlaceholder:"From", toPlaceholder:"To",
    resetBtn:"✦ Clear All",
    sortRelevance:"Sort: Relevance", sortTitle:"Sort: Title A–Z",
    sortAuthor:"Sort: Author", sortRating:"Sort: Rating ↓", sortYear:"Sort: Year",
    resCount:(n)=>`${n} Volume${n!==1?'s':''} Found`,
    resQueryPrefix:"for",
    emptyTitle:"No volumes found in the enchanted collection…",
    emptyDesc:"Try a different title, author, or genre — the library holds many secrets.",
    retryBtn:"✦ Clear Filters",
    initialTitle:"Begin Your Search",
    initialDesc:"Type a title, author name, or choose filters above to explore the enchanted collection.",
    quickBrowseLabel:"Quick Browse:", popularLabel:"Popular:",
    qpRomance:"❤ Romance", qpAdventure:"⚔ Adventure", qpClassic:"📜 Classics",
    qpMystery:"🔎 Mystery", qpCartoon:"🎨 Cartoon", qpPoetry:"🖋 Poetry",
    popTag1:"Pride & Prejudice", popTag2:"Sherlock Holmes", popTag3:"Jane Austen",
    popTag4:"Asterix", popTag5:"Spider-Man", popTag6:"Hanan Lashin",
    readMore:"Read More",
    bookmarked:(t)=>`Added "${t}" to bookmarks`,
    unbookmarked:(t)=>`Removed "${t}" from bookmarks`,
    footerLogo:"✦ Belle's Enchanted Library ✦",
    footerQuote:'"There\'s something there that wasn\'t there before."',
    ftHome:"Home", ftBooks:"Browse", ftSearch:"Search", ftLibrary:"My Library",
    chipQuery:(q)=>`"${q}"`,
    chipGenre:(g)=>`Genre: ${g}`, chipAuthor:(a)=>`Author: ${a}`,
    chipRating:(r)=>`Rating: ${r}+`, chipFrom:(y)=>`From: ${y}`, chipTo:(y)=>`To: ${y}`,
    bcYear:(y)=>`${Math.abs(y)} BC`,
  }
};

// (currentLang handled by global.js)

function t(key, ...args) {
  const val = T[currentLang][key];
  if (typeof val === 'function') return val(...args);
  return val || key;
}

function onLanguageChange() {
  const lang = localStorage.getItem('el-lang') || 'en';
  currentLang = lang;
  const html = document.getElementById('htmlRoot') || document.documentElement;
  const body = document.body;
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  body.setAttribute('data-lang', lang);
  document.title = t('pageTitle');

  const ids = ['navLogo','navHome','navBooks','navSearch','navLibrary','navMoments',
    'langBtn','heroEyebrow','heroTitleEm','searchBtnLabel',
    'labelGenre','optAllGenres','labelAuthor','labelRating','optAnyRating',
    'labelYear','resetBtn','sortRelevance','sortTitle','sortAuthor','sortRating','sortYear',
    'emptyTitle','emptyDesc','retryBtn','initialTitle','initialDesc',
    'quickBrowseLabel','popularLabel',
    'qpRomance','qpAdventure','qpClassic','qpMystery','qpCartoon','qpPoetry',
    'popTag1','popTag2','popTag3','popTag4','popTag5','popTag6',
    'footerLogo','footerQuote','ftHome','ftBooks','ftSearch','ftLibrary'
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && T[lang][id] !== undefined) {
      const v = T[lang][id];
      if (typeof v === 'string') el.textContent = v;
    }
  });

  // heroTitle needs special handling (has em inside)
  const htEl = document.getElementById('heroTitle');
  if (htEl) htEl.innerHTML = t('heroTitle') + `<em id="heroTitleEm">${t('heroTitleEm')}</em>`;

  // Placeholders
  document.getElementById('mainSearch').placeholder = t('searchPlaceholder');
  document.getElementById('filterAuthor').placeholder = t('authorPlaceholder');
  document.getElementById('filterYearFrom').placeholder = t('fromPlaceholder');
  document.getElementById('filterYearTo').placeholder   = t('toPlaceholder');
  const heroSub = document.getElementById('heroSub');
  if (heroSub) heroSub.textContent = t('heroSub');

  if (state.searched) render();
}

function onThemeChange() {
  const isDay = localStorage.getItem('el-mode') === 'day';
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = isDay ? '🌙' : '☀️';
  }
}

/* ===================== BOOK DATA ===================== */
const booksData = [
  {id:101,title:"Pride & Prejudice",titleAr:"كبرياء وتحامل",author:"Jane Austen",authorAr:"جين أوستن",genre:"romance",genreAr:"رومانسي",year:1813,rating:4.8,image:"../image/Pride and Prejudice.jpg",color:["#1a5a7a","#0a3a5a"],badge:"popular",desc:"A brilliant exploration of love, class, and society in Regency England.",descAr:"استكشاف رائع للحب والطبقية والمجتمع في عصر ريجنسي الإنجليزي."},
  {id:102,title:"Romeo & Juliet",titleAr:"روميو وجولييت",author:"William Shakespeare",authorAr:"وليم شكسبير",genre:"romance",genreAr:"رومانسي",year:1597,rating:4.7,image:"../image/Romeo and Juliet.jpg",color:["#5a1a2a","#3a0a1a"],badge:null,desc:"The most famous love story ever written — tragic and timeless.",descAr:"أشهر قصة حب كُتبت على الإطلاق — مأساوية وخالدة عبر الزمن."},
  {id:103,title:"Jane Eyre",titleAr:"جين آير",author:"Charlotte Brontë",authorAr:"شارلوت برونتي",genre:"romance",genreAr:"رومانسي",year:1847,rating:4.9,image:"../image/Jane Eyre.jpg",color:["#3a1a3a","#1a0a2a"],badge:"popular",desc:"A passionate and unconventional woman finds love against all odds.",descAr:"امرأة شغوفة وغير تقليدية تجد الحب رغم كل العقبات والمعاناة."},
  {id:104,title:"Wuthering Heights",titleAr:"مرتفعات ويذرينج",author:"Emily Brontë",authorAr:"إيميلي برونتي",genre:"romance",genreAr:"رومانسي",year:1847,rating:4.7,image:"../image/Wuthering Heights.jpg",color:["#1a2a3a","#0a1a2a"],badge:null,desc:"A wild love in the Yorkshire moors — dark, fierce, and unforgettable.",descAr:"حب متوحش في مرتفعات يوركشاير — قاتم ومتوهج وخالد."},
  {id:105,title:"Anna Karenina",titleAr:"آنا كارينينا",author:"Leo Tolstoy",authorAr:"ليو تولستوي",genre:"romance",genreAr:"رومانسي",year:1878,rating:4.8,image:"../image/Anna Karenina.jpg",color:["#2a1a0a","#1a0a0a"],badge:"popular",desc:"Society, passion, and tragedy in imperial Russia.",descAr:"قصة المجتمع والشغف والمأساة في روسيا الإمبراطورية."},
  {id:106,title:"Emma",titleAr:"إيما",author:"Jane Austen",authorAr:"جين أوستن",genre:"romance",genreAr:"رومانسي",year:1815,rating:4.7,image:"../image/Emma.jpg",color:["#3a1a3a","#2a0a2a"],badge:null,desc:"A clever young woman learns humility through her well-meaning matchmaking.",descAr:"شابة ذكية تتعلم التواضع من خلال تدخلها في زيجات الآخرين."},
  {id:201,title:"Don Quixote",titleAr:"دون كيخوته",author:"Miguel de Cervantes",authorAr:"ميغيل دي ثيربانتيس",genre:"adventure",genreAr:"مغامرات",year:1605,rating:4.6,image:"../image/Don Quixote.jpg",color:["#5a3a1a","#3a1a0a"],badge:null,desc:"The world's first modern novel — chivalry and idealism.",descAr:"أول رواية حديثة في العالم — الفروسية والمثالية والواقع."},
  {id:202,title:"The Odyssey",titleAr:"الأوديسة",author:"Homer",authorAr:"هوميروس",genre:"adventure",genreAr:"مغامرات",year:-800,rating:4.7,image:"../image/The Odyssey.jpg",color:["#1a3a6a","#0a2a4a"],badge:"rare",desc:"Odysseus journeys home through dangerous seas and strange lands.",descAr:"رحلة أوديسيوس الملحمية عبر البحار الخطرة للعودة إلى وطنه."},
  {id:203,title:"Moby Dick",titleAr:"موبي ديك",author:"Herman Melville",authorAr:"هيرمان ملفيل",genre:"adventure",genreAr:"مغامرات",year:1851,rating:4.5,image:"../image/Moby-Dick.jpg",color:["#0a2a3a","#041a2a"],badge:null,desc:"Captain Ahab's obsessive hunt for the white whale.",descAr:"هوس الكابتن أحاب بمطاردة الحوت الأبيض العملاق."},
  {id:204,title:"The Count of Monte Cristo",titleAr:"الكونت دي مونتي كريستو",author:"Alexandre Dumas",authorAr:"ألكسندر دوما",genre:"adventure",genreAr:"مغامرات",year:1844,rating:4.9,image:"../image/The Count of Monte Cristo.jpg",color:["#1a2a4a","#0a1a3a"],badge:"popular",desc:"Betrayal, imprisonment, escape, and legendary revenge.",descAr:"ملحمة الخيانة والسجن والهروب والانتقام الأسطوري."},
  {id:205,title:"The Iliad",titleAr:"الإلياذة",author:"Homer",authorAr:"هوميروس",genre:"adventure",genreAr:"مغامرات",year:-750,rating:4.6,image:"../image/The Iliad.jpg",color:["#3a2a0a","#1a1a0a"],badge:null,desc:"The wrath of Achilles and the Trojan War in epic poetry.",descAr:"غضب أخيل وحرب طروادة في أعظم الأشعار الملحمية."},
  {id:301,title:"Les Misérables",titleAr:"البؤساء",author:"Victor Hugo",authorAr:"فيكتور هوغو",genre:"classic",genreAr:"كلاسيكيات",year:1862,rating:4.9,image:"../image/Les Misérables.jpg",color:["#2a2a4a","#1a1a2a"],badge:"popular",desc:"An emotional epic of justice, redemption, and the human spirit.",descAr:"ملحمة عاطفية عن العدالة والخلاص والنضال البشري."},
  {id:302,title:"Hamlet",titleAr:"هاملت",author:"William Shakespeare",authorAr:"وليم شكسبير",genre:"classic",genreAr:"كلاسيكيات",year:1600,rating:4.8,image:"../image/Hamlet.jpg",color:["#2a2a1a","#1a1a0a"],badge:null,desc:"To be or not to be — the ultimate question of existence.",descAr:"أن تكون أو لا تكون — السؤال الوجودي الأعمق في تاريخ الأدب."},
  {id:303,title:"The Divine Comedy",titleAr:"الكوميديا الإلهية",author:"Dante Alighieri",authorAr:"دانتي أليغييري",genre:"classic",genreAr:"كلاسيكيات",year:1320,rating:4.8,image:"../image/The Divine Comedy.jpg",color:["#4a1a0a","#2a0a0a"],badge:"rare",desc:"A journey through Hell, Purgatory, and Heaven.",descAr:"رحلة روحية عبر الجحيم والمطهر والجنة في شعر دانتي الخالد."},
  {id:304,title:"Candide",titleAr:"كانديد",author:"Voltaire",authorAr:"فولتير",genre:"classic",genreAr:"كلاسيكيات",year:1759,rating:4.6,image:"../image/Candide.jpg",color:["#2a3a1a","#1a2a0a"],badge:null,desc:"A satirical journey through optimism and reality.",descAr:"رحلة ساخرة تشكّك في التفاؤل الساذج وتواجه الواقع بجرأة."},
  {id:305,title:"Great Expectations",titleAr:"آمال عريضة",author:"Charles Dickens",authorAr:"تشارلز ديكنز",genre:"classic",genreAr:"كلاسيكيات",year:1861,rating:4.6,image:"../image/Great Expectations.jpg",color:["#3a2a1a","#2a1a0a"],badge:null,desc:"An orphan's rise through Victorian England — hope and disappointment.",descAr:"صعود يتيم في إنجلترا الفيكتورية بين الأمل والخيبة والحقيقة."},
  {id:306,title:"War and Peace",titleAr:"الحرب والسلام",author:"Leo Tolstoy",authorAr:"ليو تولستوي",genre:"classic",genreAr:"كلاسيكيات",year:1869,rating:4.8,image:"../image/War and Peace.jpg",color:["#2a0a0a","#1a0a0a"],badge:"popular",desc:"Napoleonic Russia — one of the most ambitious novels ever written.",descAr:"روسيا في زمن نابليون — واحدة من أطموح الروايات في الأدب العالمي."},
  {id:307,title:"Crime and Punishment",titleAr:"الجريمة والعقاب",author:"Fyodor Dostoevsky",authorAr:"فيودور دوستويفسكي",genre:"classic",genreAr:"كلاسيكيات",year:1866,rating:4.9,image:"../image/crime and punishment",color:["#3a1a1a","#1a0a0a"],badge:"popular",desc:"A psychological novel exploring guilt, morality, and redemption.",descAr:"رواية نفسية عميقة تستكشف الذنب والأخلاق والخلاص."},
  {id:401,title:"One Thousand Nights",titleAr:"ألف ليلة وليلة",author:"Anonymous",authorAr:"مجهول",genre:"fantasy",genreAr:"خيال",year:1001,rating:4.5,image:"../image/One Thousand and One Nights.jpg",color:["#3a1a5a","#1a0a3a"],badge:"rare",desc:"Scheherazade weaves tales of magic, kings, and jinn.",descAr:"شهرزاد تنسج حكايات السحر والملوك والجن في ليالٍ لا تنتهي."},
  {id:402,title:"Midnight's Children",titleAr:"أطفال منتصف الليل",author:"Salman Rushdie",authorAr:"سلمان رشدي",genre:"fantasy",genreAr:"خيال",year:1981,rating:4.7,image:"../image/Midnight's Children.jpg",color:["#3a0a2a","#1a0a1a"],badge:"new",desc:"Born at the moment of India's independence — magical and political.",descAr:"مواليد لحظة استقلال الهند — رواية سحرية وسياسية بامتياز."},
  {id:403,title:"Beauty and the Beast",titleAr:"الجميلة والوحش",author:"Villeneuve",authorAr:"دو فيلنوف",genre:"fantasy",genreAr:"خيال",year:1740,rating:4.8,image:"../image/Beauty and the Beast.jpg",color:["#2a0a1a","#4a1a3a"],badge:"popular",desc:"A love story that transforms a cursed prince.",descAr:"قصة حب تحول أميراً ملعوناً وتكشف الجمال الحقيقي في الروح."},
  {id:404,title:"Cinderella",titleAr:"سندريلا",author:"Charles Perrault",authorAr:"شارل بيرو",genre:"fantasy",genreAr:"خيال",year:1697,rating:4.7,image:"../image/Cinderella.jpg",color:["#3a1a4a","#1a0a2a"],badge:"popular",desc:"A kind girl finds her destiny through magic.",descAr:"الفتاة الطيبة تجد مصيرها بفضل الإيمان بالسحر والحلم."},
  {id:405,title:"Alice in Wonderland",titleAr:"أليس في بلاد العجائب",author:"Lewis Carroll",authorAr:"لويس كارول",genre:"fantasy",genreAr:"خيال",year:1865,rating:4.8,image:"../image/Alice's Adventures in Wonderland.jpg",color:["#3a0a2a","#1a0a1a"],badge:"rare",desc:"A girl enters a strange magical world.",descAr:"فتاة تسقط في عالم سحري مليء بالغرابة والدهشة."},
  {id:501,title:"Frankenstein",titleAr:"فرانكنشتاين",author:"Mary Shelley",authorAr:"ماري شيلي",genre:"mystery",genreAr:"غموض وإثارة",year:1818,rating:4.7,image:"../image/Frankenstein.jpg",color:["#1a2a1a","#0a1a0a"],badge:"new",desc:"The original science fiction story — creation and consequences.",descAr:"قصة الخيال العلمي الأولى — الخلق وعواقبه الأخلاقية."},
  {id:502,title:"Northanger Abbey",titleAr:"دير نورثانجر",author:"Jane Austen",authorAr:"جين أوستن",genre:"mystery",genreAr:"غموض وإثارة",year:1818,rating:4.5,image:"../image/Northanger Abbey.jpg",color:["#1a1a3a","#0a0a2a"],badge:"new",desc:"Gothic romance meets satire in this early Austen work.",descAr:"الرومانسية الغوثية تلتقي بالسخرية الذكية في عمل أوستن المبكر."},
  {id:503,title:"The Hound of the Baskervilles",titleAr:"كلب آل باسكرفيل",author:"Arthur Conan Doyle",authorAr:"آرثر كونان دويل",genre:"mystery",genreAr:"غموض وإثارة",year:1902,rating:4.8,image:"../image/The Hound of the Baskervilles.jpg",color:["#1a1a2a","#0a0a1a"],badge:"popular",desc:"Sherlock Holmes faces a legendary hound in the moors.",descAr:"شيرلوك هولمز يواجه الكلب الأسطوري في مستنقعات إنجلترا."},
  {id:504,title:"And Then There Were None",titleAr:"عشرة هنود صغار",author:"Agatha Christie",authorAr:"أجاثا كريستي",genre:"mystery",genreAr:"غموض وإثارة",year:1939,rating:4.9,image:"../image/And Then There Were None.jpg",color:["#2a1a1a","#1a0a0a"],badge:"popular",desc:"Ten strangers, one island, no one is innocent.",descAr:"عشرة غرباء على جزيرة معزولة — لا أحد بريء ولا مفرّ."},
  {id:601,title:"Paradise Lost",titleAr:"الفردوس المفقود",author:"John Milton",authorAr:"جون ميلتون",genre:"poetry",genreAr:"شعر",year:1667,rating:4.7,image:"../image/Paradise Lost.jpg",color:["#2a0a2a","#1a0a1a"],badge:"rare",desc:"The fall of Satan and mankind's loss of paradise in epic poetry.",descAr:"سقوط الشيطان وفقدان البشرية للجنة في قصيدة ملحمية خالدة."},
  {id:602,title:"The Aeneid",titleAr:"الأنيادة",author:"Virgil",authorAr:"فيرجيل",genre:"poetry",genreAr:"شعر",year:-19,rating:4.7,image:"../image/The Aeneid.jpg",color:["#3a2a1a","#2a1a0a"],badge:"rare",desc:"Aeneas escapes Troy to found Rome — destiny written in the stars.",descAr:"أينيوس يهرب من طروادة ليؤسس روما ويحقق مصيره المكتوب."},
  {id:603,title:"Faust",titleAr:"فاوست",author:"Goethe",authorAr:"غوته",genre:"poetry",genreAr:"شعر",year:1808,rating:4.6,image:"../image/Faust.jpg",color:["#1a0a2a","#0a0a1a"],badge:"rare",desc:"A scholar sells his soul to the devil — gaining love and ruin.",descAr:"عالم يبيع روحه للشيطان بحثاً عن المعرفة والحب المطلق."},
  {id:701,title:"Asterix & Obelix",titleAr:"أستريكس وأوبيليكس",author:"René Goscinny",authorAr:"رينيه غوسيني",genre:"cartoon",genreAr:"كاريكاتير",year:1959,rating:4.9,image:"../image/Asterix.jpg",color:["#4a2a0a","#2a1a0a"],badge:"popular",desc:"A small Gaulish village resists Rome with courage and magic potion!",descAr:"قرية غولية صغيرة تقاوم الإمبراطورية الرومانية بالشجاعة والجرعة السحرية!"},
  {id:702,title:"Tintin",titleAr:"تان تان",author:"Hergé",authorAr:"هيرجيه",genre:"cartoon",genreAr:"كاريكاتير",year:1929,rating:4.8,image:"../image/The Adventures of Tintin.jpg",color:["#0a3a5a","#0a1a3a"],badge:"popular",desc:"A young reporter travels the world with his dog Snowy.",descAr:"المراسل الشاب تان تان يجوب العالم مع كلبه سنووي في مغامرات لا تنتهي."},
  {id:703,title:"Lucky Luke",titleAr:"لوكي لوك",author:"Morris",authorAr:"موريس",genre:"cartoon",genreAr:"كاريكاتير",year:1946,rating:4.7,image:"../image/Lucky Luke.jpg",color:["#4a2a0a","#3a1a0a"],badge:null,desc:"The fastest gun in the West brings justice to the frontier.",descAr:"أسرع مسدس في الغرب يجلب العدالة لأراضي الحدود الأمريكية."},
  {id:704,title:"The Smurfs",titleAr:"السنافر",author:"Peyo",authorAr:"بيو",genre:"cartoon",genreAr:"كاريكاتير",year:1958,rating:4.6,image:"../image/The Smurfs.jpg",color:["#0a2a5a","#0a1a3a"],badge:"popular",desc:"A small blue village living in magical mushroom houses.",descAr:"القرية الزرقاء الصغيرة التي تسكن بيوت الفطر السحرية."},
  {id:705,title:"Donald Duck Comics",titleAr:"قصص دونالد داك",author:"Carl Barks",authorAr:"كارل باركس",genre:"cartoon",genreAr:"كاريكاتير",year:1942,rating:4.7,image:"../image/Donald Duck.jpg",color:["#0a3a6a","#041a3a"],badge:"popular",desc:"Donald and his nephews go on endless comic adventures.",descAr:"دونالد وأبناء أخيه في مغامرات كوميدية لا تنتهي أبداً."},
  {id:706,title:"Garfield",titleAr:"غارفيلد",author:"Jim Davis",authorAr:"جيم ديفيس",genre:"cartoon",genreAr:"كاريكاتير",year:1978,rating:4.8,image:"../image/Garfield.jpg",color:["#5a2a0a","#3a1a0a"],badge:"popular",desc:"The laziest, lasagna-loving cat in history.",descAr:"أكسل وأكثر قطة خاملة في التاريخ — تعشق اللازانيا وتكره الإثنين."},
  {id:707,title:"Calvin & Hobbes",titleAr:"كالفن وهوبز",author:"Bill Watterson",authorAr:"بيل واترسون",genre:"cartoon",genreAr:"كاريكاتير",year:1985,rating:4.9,image:"../image/Calvin and Hobbes.jpg",color:["#3a2a1a","#1a1a0a"],badge:"popular",desc:"A boy and his imaginary tiger in philosophical adventures.",descAr:"طفل ونمره الخيالي في مغامرات فلسفية لا حدود لها."},
  {id:708,title:"Peanuts",titleAr:"بينوتس",author:"Charles Schulz",authorAr:"تشارلز شولتز",genre:"cartoon",genreAr:"كاريكاتير",year:1950,rating:4.8,image:"../image/Peanuts.jpg",color:["#3a1a0a","#1a0a0a"],badge:"popular",desc:"Charlie Brown, Snoopy, and the world of childhood.",descAr:"تشارلي براون وسنوبي وعالم الطفولة البريء الجميل."},
  {id:709,title:"The Phantom",titleAr:"الفانتوم",author:"Lee Falk",authorAr:"لي فالك",genre:"cartoon",genreAr:"كاريكاتير",year:1936,rating:4.6,image:"../image/The Phantom.jpg",color:["#2a0a5a","#1a0a3a"],badge:"rare",desc:"An immortal hero fighting evil in jungles and cities.",descAr:"البطل الخالد الذي يحارب الشر في الغابات والمدن عبر الأجيال."},
  {id:710,title:"Tom & Jerry",titleAr:"توم وجيري",author:"Hanna-Barbera",authorAr:"هانا-باربيرا",genre:"cartoon",genreAr:"كاريكاتير",year:1942,rating:4.7,image:"../image/Tom and Jerry.jpg",color:["#4a1a1a","#2a0a0a"],badge:"popular",desc:"Endless comedic chase between cat and mouse.",descAr:"المطاردة الكوميدية الأبدية بين القط والفأر الذكي."},
  {id:711,title:"Scooby-Doo",titleAr:"سكوبي دو",author:"Hanna-Barbera",authorAr:"هانا-باربيرا",genre:"cartoon",genreAr:"كاريكاتير",year:1969,rating:4.6,image:"../image/Scooby-Doo.jpg",color:["#2a3a1a","#1a2a0a"],badge:null,desc:"Teenagers and their cowardly dog solve spooky mysteries.",descAr:"المراهقون وكلبهم الجبان يحلّون الألغاز المخيفة معاً."},
  {id:712,title:"Popeye the Sailor",titleAr:"البحار بوباي",author:"E.C. Segar",authorAr:"إي سي سيغار",genre:"cartoon",genreAr:"كاريكاتير",year:1929,rating:4.5,image:"../image/Popeye.jpg",color:["#0a3a4a","#0a1a2a"],badge:null,desc:"A sailor who gains strength from spinach to save Olive Oyl.",descAr:"البحار الشجاع الذي يستمد قوته من السبانخ لإنقاذ أوليف."},
  {id:713,title:"Archie Comics",titleAr:"أرشي كوميكس",author:"Bob Montana",authorAr:"بوب مونتانا",genre:"cartoon",genreAr:"كاريكاتير",year:1941,rating:4.6,image:"../image/Archie Comics.jpg",color:["#5a1a0a","#3a0a0a"],badge:"popular",desc:"Archie and friends in Riverdale high school adventures.",descAr:"أرشي وأصدقاؤه في مغامرات مدرسة ريفرديل الطريفة."},
  {id:714,title:"Wonder Woman",titleAr:"المرأة المعجزة",author:"William Moulton Marston",authorAr:"وليم مولتون مارستون",genre:"cartoon",genreAr:"كاريكاتير",year:1941,rating:4.8,image:"../image/Wonder Woman.jpg",color:["#4a0a1a","#2a0a0a"],badge:"popular",desc:"An Amazon princess fights evil and promotes peace.",descAr:"الأميرة الأمازونية التي تحارب الشر وتنشر السلام في العالم."},
  {id:715,title:"Spider-Man Comics",titleAr:"سبايدر مان",author:"Stan Lee",authorAr:"ستان لي",genre:"cartoon",genreAr:"كاريكاتير",year:1962,rating:4.9,image:"../image/Spider-Man.jpg",color:["#4a0a0a","#2a0a0a"],badge:"popular",desc:"Peter Parker becomes Spider-Man, protector of New York.",descAr:"بيتر باركر يصبح سبايدر مان حامياً لمدينة نيويورك."},
  {id:901,title:"Ikadoli",titleAr:"إيكادولي",author:"Hanan Lashin",authorAr:"حنان لاشين",genre:"Fiction Books",genreAr:"روايات خيالية",year:2017,rating:4.5,image:"../image/Ikadoli.jpg",color:["#4b2e83","#1f1a5a"],badge:"popular",desc:"A fantasy adventure set in the magical world of the Kingdom of Eloquence.",descAr:"مغامرة خيالية مذهلة في عالم مملكة الفصاحة السحرية."},
  {id:902,title:"Opal",titleAr:"أوبال",author:"Hanan Lashin",authorAr:"حنان لاشين",genre:"Fiction Books",genreAr:"روايات خيالية",year:2018,rating:4.6,image:"../image/Opal.jpg",color:["#2b6f6f","#0f3d3d"],badge:"popular",desc:"A continuation of the mystical journey in the Kingdom of Eloquence.",descAr:"استمرار الرحلة الغامضة والمثيرة في مملكة الفصاحة."},
  {id:903,title:"Amanos",titleAr:"أمانوس",author:"Hanan Lashin",authorAr:"حنان لاشين",genre:"Fiction Books",genreAr:"روايات خيالية",year:2019,rating:4.7,image:"../image/Amanos.jpg",color:["#3b3b98","#1b1b4f"],badge:"popular",desc:"A story of courage and challenges in a symbolic fantasy world.",descAr:"قصة الشجاعة والتحديات في العالم الخيالي الرمزي المذهل."},
  {id:904,title:"Kuikoul",titleAr:"كويكول",author:"Hanan Lashin",authorAr:"حنان لاشين",genre:"Fiction Books",genreAr:"روايات خيالية",year:2020,rating:4.6,image:"../image/Kuikoul.jpg",color:["#6a4c93","#2e1a47"],badge:"popular",desc:"Deeper secrets unfold in the Kingdom of Eloquence.",descAr:"أسرار أعمق وأكثر إثارة تتكشّف في مملكة الفصاحة."},
  {id:905,title:"Socotra",titleAr:"سقطرى",author:"Hanan Lashin",authorAr:"حنان لاشين",genre:"Fiction Books",genreAr:"روايات خيالية",year:2021,rating:4.7,image:"../image/Socotra.jpg",color:["#1e6091","#0b2e3d"],badge:"new",desc:"An adventurous journey in a mysterious symbolic land.",descAr:"رحلة مغامرات شيّقة في أرض غامضة ورمزية لا تُنسى."},
  {id:1001,title:"101 Essays That Will Change The Way You Think",titleAr:"101 مقال يغيّر طريقة تفكيرك",author:"Brianna Wiest",authorAr:"بريانا ويست",genre:"Self Help Books",genreAr:"تطوير الذات",year:2016,rating:4.7,image:"../image/101 Essays That Will Change The Way You Think.png",color:["#3a2a4a","#1a1a2a"],badge:"popular",desc:"A powerful collection of essays about self-awareness, mindset, and life transformation.",descAr:"مجموعة قوية من المقالات عن الوعي الذاتي وتغيير العقلية وتحويل الحياة."},
  {id:1002,title:"الإنسان مخلوق وحيد",titleAr:"الإنسان مخلوق وحيد",author:"Abdullah Al-Busais",authorAr:"عبد الله البصيص",genre:"Fiction Books",genreAr:"روايات خيالية",year:2000,rating:4.5,image:"../image/الإنسان مخلوق وحيد.jpg",color:["#2a3a2a","#1a2a1a"],badge:null,desc:"A reflective philosophical exploration of human nature and creation.",descAr:"استكشاف فلسفي تأملي عميق عن الطبيعة البشرية والوجود."},
  {id:1003,title:"فتاة الياقة الزرقاء",titleAr:"فتاة الياقة الزرقاء",author:"Amr Abdel Hamid",authorAr:"عمرو عبد الحميد",genre:"Fiction Books",genreAr:"روايات خيالية",year:2018,rating:4.6,image:"../image/فتاة الياقة الزرقاء.jpg",color:["#1a3a5a","#0a1a2a"],badge:"new",desc:"A story about a young girl struggling with life and identity in a harsh society.",descAr:"قصة فتاة تتصارع مع الحياة والهوية في مجتمع قاسٍ لا يرحم."},
  {id:1004,title:"الجلاد تحت جلدي",titleAr:"الجلاد تحت جلدي",author:"Emad Rashad Othman",authorAr:"عماد رشاد عثمان",genre:"Self Help Books",genreAr:"تطوير الذات",year:2019,rating:4.5,image:"../image/الجلاد تحت جلدي.jpg",color:["#3a0a0a","#1a0a0a"],badge:null,desc:"A dark psychological thriller about fear, trauma, and hidden darkness.",descAr:"إثارة نفسية عميقة عن الخوف والصدمة والظلام الكامن بداخلنا."},
  {id:1005,title:"The Idiot Brain",titleAr:"دماغ الأحمق",author:"Dean Burnett",authorAr:"دين بيرنيت",genre:"Self Help Books",genreAr:"تطوير الذات",year:2016,rating:4.7,image:"../image/The Idiot Brain",color:["#1a2a3a","#0a1a2a"],badge:"popular",desc:"A humorous scientific explanation of how the brain really works.",descAr:"شرح علمي فكاهي رائع يكشف كيف يعمل دماغك في الحقيقة."},
  {id:1006,title:"Introduction to Algorithms",titleAr:"مقدمة في الخوارزميات",author:"Cormen, Leiserson, Rivest, Stein",authorAr:"كورمن وآخرون",genre:"Science books",genreAr:"كتب علمية",year:2009,rating:4.9,image:"../image/Introduction to Algorithms.jpg",color:["#2a2a2a","#1a1a1a"],badge:"rare",desc:"The definitive textbook for algorithms in computer science.",descAr:"الكتاب المرجعي الأساسي للخوارزميات في علوم الحاسوب."},
  {id:1007,title:"Mathematics for Computer Science",titleAr:"الرياضيات لعلوم الحاسوب",author:"Eric Lehman",authorAr:"إريك ليمان",genre:"Science books",genreAr:"كتب علمية",year:2017,rating:4.8,image:"../image/Mathematics for Computer Science.jpg",color:["#2a1a3a","#1a0a2a"],badge:"popular",desc:"Core mathematical foundations for computer science students.",descAr:"الأسس الرياضية الجوهرية الضرورية لكل طالب في علوم الحاسوب."},
  {id:1008,title:"ذو النورين عثمان بن عفان",titleAr:"ذو النورين عثمان بن عفان",author:"Abbas Mahmoud Al-Aqqad",authorAr:"عباس محمود العقاد",genre:"Self Help Books",genreAr:"تطوير الذات",year:1925,rating:4.6,image:"../image/ذو النورين عثمان بن عفان",color:["#1a2a1a","#0a1a0a"],badge:null,desc:"A detailed biography of the third Caliph of Islam.",descAr:"سيرة تفصيلية وشاملة عن الخليفة الثالث عثمان بن عفان."},
  {id:1010,title:"Harry Potter and the Sorcerer's Stone",titleAr:"هاري بوتر وحجر الفيلسوف",author:"J.K. Rowling",authorAr:"ج. ك. رولينج",genre:"fantasy",genreAr:"خيال",year:1997,rating:4.9,image:"../image/Harry Potter.jpg",color:["#4b2e83","#1b1b3a"],badge:"popular",desc:"A young wizard discovers his magical destiny and begins his journey at Hogwarts.",descAr:"يكتشف فتى صغير أنه ساحر ويبدأ رحلته السحرية في مدرسة هوجورتس."}
];

const BADGE_CONFIG = {
  popular:   {label_ar:'✦ شائع',  label_en:'✦ Popular',  cls:'badge-popular'},
  new:       {label_ar:'✦ جديد',  label_en:'✦ New',      cls:'badge-new'},
  rare:      {label_ar:'✦ نادر',  label_en:'✦ Rare',     cls:'badge-rare'},
  trending:  {label_ar:'✦ رائج',  label_en:'✦ Trending', cls:'badge-trending'},
  bestseller:{label_ar:'الأكثر مبيعًا',label_en:'✦ Bestseller',cls:'badge-popular'},
};

/* ===================== STATE ===================== */
let state = {query:'',genre:'',author:'',rating:0,yearFrom:null,yearTo:null,sort:'relevance',view:'grid',page:1,results:[],searched:false};
const PER_PAGE = 12;
const bookmarks = new Set();

/* ===================== SEARCH ===================== */
function score(book, q) {
  if (!q) return 1;
  const lq = q.toLowerCase();
  let s = 0;
  if (book.title.toLowerCase().includes(lq))    s += 10;
  if ((book.titleAr||'').includes(q))           s += 10;
  if (book.author.toLowerCase().includes(lq))   s += 8;
  if ((book.authorAr||'').includes(q))          s += 8;
  if (book.genre.toLowerCase().includes(lq))    s += 5;
  if ((book.genreAr||'').includes(q))           s += 5;
  if ((book.desc||'').toLowerCase().includes(lq))  s += 2;
  if ((book.descAr||'').includes(q))            s += 2;
  if (String(book.year).includes(lq))          s += 3;
  return s;
}

function applyFilters() {
  const q  = state.query.trim().toLowerCase();
  const gf = state.genre;
  const af = state.author.trim().toLowerCase();
  const rf = parseFloat(state.rating)||0;
  const yf = state.yearFrom ? parseInt(state.yearFrom) : null;
  const yt = state.yearTo   ? parseInt(state.yearTo)   : null;
  return booksData.filter(b=>{
    if (gf && b.genre!==gf) return false;
    if (af && !b.author.toLowerCase().includes(af) && !(b.authorAr||'').toLowerCase().includes(af)) return false;
    if (b.rating < rf) return false;
    if (yf!==null && b.year<yf) return false;
    if (yt!==null && b.year>yt) return false;
    if (q && score(b,q)===0) return false;
    return true;
  }).sort((a,b)=>{
    if (state.sort==='relevance'&&q) return score(b,q)-score(a,q);
    if (state.sort==='title')  return (currentLang==='ar'?(a.titleAr||a.title).localeCompare(b.titleAr||b.title,'ar'):(a.title.localeCompare(b.title)));
    if (state.sort==='author') return (currentLang==='ar'?(a.authorAr||a.author).localeCompare(b.authorAr||b.author,'ar'):(a.author.localeCompare(b.author)));
    if (state.sort==='rating') return b.rating-a.rating;
    if (state.sort==='year')   return a.year-b.year;
    return 0;
  });
}

function executeSearch() {
  state.query  = document.getElementById('mainSearch').value;
  state.genre  = document.getElementById('filterGenre').value;
  state.author = document.getElementById('filterAuthor').value;
  state.rating = document.getElementById('filterRating').value;
  state.yearFrom = document.getElementById('filterYearFrom').value||null;
  state.yearTo   = document.getElementById('filterYearTo').value||null;
  state.page=1; state.searched=true;
  state.results = applyFilters();
  hideAutocomplete(); render();
}

function quickSearch(genre) {
  document.getElementById('filterGenre').value=genre;
  state.genre=genre; state.query=''; state.author=''; state.rating=0;
  state.yearFrom=null; state.yearTo=null;
  document.getElementById('mainSearch').value='';
  executeSearch();
}

function setAndSearch(q) { document.getElementById('mainSearch').value=q; executeSearch(); }

function resetFilters() {
  ['mainSearch','filterAuthor','filterYearFrom','filterYearTo'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('filterGenre').value='';
  document.getElementById('filterRating').value='0';
  state={...state,query:'',genre:'',author:'',rating:0,yearFrom:null,yearTo:null,page:1,searched:false,results:[]};
  updateClearBtn(); render();
}

function clearSearch() {
  document.getElementById('mainSearch').value=''; state.query='';
  updateClearBtn(); hideAutocomplete();
}

/* ===================== RENDER ===================== */
function render() {
  const container=document.getElementById('booksContainer');
  const empty=document.getElementById('emptyState');
  const initial=document.getElementById('initialState');
  const header=document.getElementById('resultsHeader');
  const pag=document.getElementById('pagination');

  if (!state.searched) {
    container.innerHTML=''; empty.style.display='none';
    initial.style.display='block'; header.style.display='none';
    pag.innerHTML=''; renderChips(); return;
  }
  initial.style.display='none'; header.style.display='flex';
  const total=state.results.length;
  document.getElementById('resCount').textContent = t('resCount',total);
  const qLabel=buildQueryLabel();
  document.getElementById('resQuery').textContent = qLabel ? `${t('resQueryPrefix')} "${qLabel}"` : '';

  if (total===0) {
    container.innerHTML=''; empty.style.display='block'; pag.innerHTML=''; renderChips(); return;
  }
  empty.style.display='none';
  const viewMap={grid:'books-grid',list:'books-list',details:'books-details'};
  container.className=viewMap[state.view]||'books-grid';
  const start=(state.page-1)*PER_PAGE;
  container.innerHTML=state.results.slice(start,start+PER_PAGE).map((b,i)=>buildCard(b,i)).join('');
  renderPagination(total); renderChips(); updateClearBtn();
}

function buildQueryLabel() {
  const parts=[];
  if (state.query) parts.push(state.query);
  if (state.author) parts.push((currentLang==='ar'?`بقلم `:`by `)+state.author);
  return parts.join(' ');
}

function buildCard(b,i) {
  const saved=bookmarks.has(b.id);
  const badgeCfg=b.badge?BADGE_CONFIG[b.badge]:null;
  const badgeLabel=badgeCfg?(currentLang==='ar'?badgeCfg.label_ar:badgeCfg.label_en):'';
  const badgeHtml=badgeCfg?`<span class="book-badge ${badgeCfg.cls}">${badgeLabel}</span>`:'';
  const yearLabel=b.year<0?t('bcYear',b.year):b.year;
  const savedCls=saved?' saved':'';
  const delay=`animation-delay:${i*40}ms`;
  const title  = currentLang==='ar'?(b.titleAr||b.title):b.title;
  const author = currentLang==='ar'?(b.authorAr||b.author):b.author;
  const genre  = currentLang==='ar'?(b.genreAr||b.genre):b.genre;
  const desc   = currentLang==='ar'?(b.descAr||b.desc):b.desc;
  return `<div class="book-card" style="${delay}" data-id="${b.id}">
    <div class="book-cover">
      <div class="book-cover-inner" style="background:linear-gradient(135deg,${b.color[0]},${b.color[1]});">
        <img src="${b.image}" alt="${title}" onerror="this.style.display='none'">
      </div>
      <div class="book-cover-overlay"></div>
      ${badgeHtml}
      <button class="book-bookmark-btn${savedCls}" onclick="toggleBookmark(event,${b.id})" title="Bookmark">🔖</button>
    </div>
    <div class="book-info">
      <span class="book-genre-tag">${genre}</span>
      <h3>${title}</h3>
      <p class="book-author">${author} · ${yearLabel}</p>
      <div class="book-rating">
        <span class="stars-filled">${'★'.repeat(Math.floor(b.rating))}</span>
        <span class="rating-num">${b.rating}</span>
      </div>
      <p class="book-description">${desc}</p>
      <div class="book-actions">
        <a href="BookPage.html?q=${encodeURIComponent(b.title)}" class="btn-read">${t('readMore')}</a>
        <button class="btn-bookmark${savedCls}" onclick="toggleBookmark(event,${b.id})">🔖</button>
      </div>
    </div>
  </div>`;
}

/* ===================== PAGINATION ===================== */
function renderPagination(total) {
  const el=document.getElementById('pagination');
  const pages=Math.max(1,Math.ceil(total/PER_PAGE));
  const cur=state.page;
  if (pages<=1){el.innerHTML='';return;}
  const prevDis=cur===1?'disabled':'';
  const nextDis=cur>=pages?'disabled':'';
  const btns=[];
  for (let n=1;n<=pages;n++){
    if (n===1||n===pages||Math.abs(n-cur)<=2) btns.push(`<button class="page-btn${n===cur?' active':''}" onclick="goToPage(${n})">${n}</button>`);
    else if (btns[btns.length-1]!=='…') btns.push('…');
  }
  const isAr=currentLang==='ar';
  el.innerHTML=
    `<button class="page-btn" onclick="goToPage(${isAr?cur+1:cur-1})" ${isAr?nextDis:prevDis}>${isAr?'‹':'‹'}</button>`+
    btns.map(b=>b==='…'?`<span style="color:rgba(247,237,216,0.3);padding:0 4px">…</span>`:b).join('')+
    `<button class="page-btn" onclick="goToPage(${isAr?cur-1:cur+1})" ${isAr?prevDis:nextDis}>${isAr?'›':'›'}</button>`;
}

function goToPage(n){
  const pages=Math.ceil(state.results.length/PER_PAGE);
  state.page=Math.max(1,Math.min(n,pages));
  render(); window.scrollTo({top:0,behavior:'smooth'});
}

/* ===================== VIEW / SORT ===================== */
function setView(view,btn){
  state.view=view;
  document.querySelectorAll('.view-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); render();
}
function sortResults(by){ state.sort=by; state.page=1; state.results=applyFilters(); render(); }

/* ===================== CHIPS ===================== */
function renderChips(){
  const el=document.getElementById('filterChips');
  const chips=[];
  if (state.query)    chips.push({label:t('chipQuery',state.query),key:'query'});
  if (state.genre)    chips.push({label:t('chipGenre',state.genre),key:'genre'});
  if (state.author)   chips.push({label:t('chipAuthor',state.author),key:'author'});
  if (state.rating>0) chips.push({label:t('chipRating',state.rating),key:'rating'});
  if (state.yearFrom) chips.push({label:t('chipFrom',state.yearFrom),key:'yearFrom'});
  if (state.yearTo)   chips.push({label:t('chipTo',state.yearTo),key:'yearTo'});
  el.innerHTML=chips.map(c=>`<div class="chip">✦ ${c.label}<button class="chip-x" onclick="removeChip('${c.key}')">✕</button></div>`).join('');
}

function removeChip(key){
  const map={query:['mainSearch',''],genre:['filterGenre',''],author:['filterAuthor',''],rating:['filterRating','0'],yearFrom:['filterYearFrom',''],yearTo:['filterYearTo','']};
  if (map[key]) document.getElementById(map[key][0]).value=map[key][1];
  if (key==='query') state.query='';
  else if (key==='genre') state.genre='';
  else if (key==='author') state.author='';
  else if (key==='rating') state.rating=0;
  else if (key==='yearFrom') state.yearFrom=null;
  else if (key==='yearTo') state.yearTo=null;
  state.page=1; state.results=applyFilters(); render();
}

/* ===================== BOOKMARKS ===================== */
function toggleBookmark(e,id){
  e.stopPropagation();
  const book=booksData.find(b=>b.id===id);
  if (!book) return;
  const title=currentLang==='ar'?(book.titleAr||book.title):book.title;
  if (bookmarks.has(id)){bookmarks.delete(id);showToast(t('unbookmarked',title));}
  else {bookmarks.add(id);showToast(t('bookmarked',title));}
  render();
}

/* ===================== AUTOCOMPLETE (PORTAL) ===================== */
function getPortal(){
  let el=document.getElementById('acPortal');
  if (!el){
    el=document.createElement('div'); el.id='acPortal';
    el.style.cssText=`position:fixed;z-index:99999;background:rgba(18,12,4,0.98);border:1px solid rgba(201,168,76,0.25);border-radius:3px;max-height:320px;overflow-y:auto;box-shadow:0 16px 40px rgba(0,0,0,0.7);display:none;scrollbar-width:thin;scrollbar-color:rgba(201,168,76,0.4) transparent;`;
    const st=document.createElement('style');
    st.textContent=`#acPortal::-webkit-scrollbar{width:5px}#acPortal::-webkit-scrollbar-thumb{background:rgba(201,168,76,0.4);border-radius:2px}#acPortal .ac-item{display:flex;align-items:center;gap:14px;padding:12px 20px;cursor:pointer;border-bottom:1px solid rgba(201,168,76,0.06);transition:background 0.2s}#acPortal .ac-item:last-child{border-bottom:none}#acPortal .ac-item:hover{background:rgba(201,168,76,0.1)}#acPortal .ac-text{flex:1}#acPortal .ac-title{font-size:15px;font-style:italic;color:#f7edd8}#acPortal .ac-author{font-size:12px;color:rgba(247,237,216,0.4);margin-top:2px}#acPortal .ac-tag{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#c9a84c;opacity:0.7;white-space:nowrap}#acPortal em{color:#c9a84c;font-style:normal}`;
    document.head.appendChild(st);
    document.body.appendChild(el);
  }
  return el;
}

function positionPortal(){
  const wrap=document.querySelector('.search-bar-wrap');
  if (!wrap) return;
  const rect=wrap.getBoundingClientRect();
  const portal=getPortal();
  portal.style.left=rect.left+'px'; portal.style.top=(rect.bottom+6)+'px'; portal.style.width=rect.width+'px';
  portal.style.direction=currentLang==='ar'?'rtl':'ltr';
}

function showAutocomplete(q){
  const portal=getPortal();
  if (!q||q.length<1){portal.style.display='none';return;}
  const lq=q.toLowerCase();
  const matches=booksData.filter(b=>
    b.title.toLowerCase().includes(lq)||(b.titleAr||'').includes(q)||
    b.author.toLowerCase().includes(lq)||(b.authorAr||'').includes(q)||
    b.genre.toLowerCase().includes(lq)||(b.genreAr||'').includes(q)
  ).slice(0,20);
  if (!matches.length){portal.style.display='none';return;}
  portal.innerHTML=matches.map(b=>{
    const title  = currentLang==='ar'?(b.titleAr||b.title):b.title;
    const author = currentLang==='ar'?(b.authorAr||b.author):b.author;
    const genre  = currentLang==='ar'?(b.genreAr||b.genre):b.genre;
    const hl=s=>s.replace(new RegExp(`(${escReg(q)})`,`gi`),'<em>$1</em>');
    const dir=currentLang==='ar'?'flex-direction:row-reverse;text-align:right':'';
    return `<div class="ac-item" style="${dir}" onclick="setAndSearch('${escAttr(b.title)}')">
      <div class="ac-text"><div class="ac-title">${hl(title)}</div><div class="ac-author">${hl(author)}</div></div>
      <span class="ac-tag">${genre}</span></div>`;
  }).join('');
  positionPortal(); portal.style.display='block';
}

function hideAutocomplete(){const p=document.getElementById('acPortal');if(p)p.style.display='none';}
function escReg(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
function escAttr(s){return s.replace(/'/g,"\\'");}
function updateClearBtn(){document.getElementById('clearBtn').style.display=document.getElementById('mainSearch').value?'block':'none';}

/* ===================== TOAST ===================== */
function showToast(msg){
  const el=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2800);
}

/* ===================== THEME ===================== */

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded',()=>{

  // Particles
  const pEl=document.getElementById('particles');
  if (pEl){
    const colors=['#c9a84c','#e8c97a','#f5c2cf','rgba(201,168,76,0.3)'];
    const frag=document.createDocumentFragment();
    for (let i=0;i<25;i++){
      const p=document.createElement('div'); const sz=Math.random()*3+1;
      p.className='particle';
      p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${8+Math.random()*12}s;animation-delay:${-Math.random()*15}s;`;
      frag.appendChild(p);
    }
    pEl.appendChild(frag);
  }

  // Petals
  const pcEl=document.getElementById('petalContainer');
  if (pcEl){
    const frag=document.createDocumentFragment();
    for (let i=0;i<12;i++){
      const p=document.createElement('div'); p.className='petal';
      p.style.cssText=`left:${Math.random()*100}%;animation-duration:${12+Math.random()*18}s;animation-delay:${-Math.random()*20}s;transform:rotate(${Math.random()*360}deg);`;
      frag.appendChild(p);
    }
    pcEl.appendChild(frag);
  }

  // Apply initial language state
  onLanguageChange();
  onThemeChange();

  // Search input
  const searchInput=document.getElementById('mainSearch');
  searchInput.addEventListener('input',()=>{updateClearBtn();showAutocomplete(searchInput.value);});
  searchInput.addEventListener('keydown',e=>{
    if (e.key==='Enter') executeSearch();
    if (e.key==='Escape') hideAutocomplete();
  });

  document.addEventListener('click',e=>{
    if (!e.target.closest('.search-bar-wrap')&&!e.target.closest('#acPortal')) hideAutocomplete();
  });
  window.addEventListener('scroll',()=>{if(document.getElementById('acPortal')?.style.display!=='none')positionPortal();},true);
  window.addEventListener('resize',()=>{if(document.getElementById('acPortal')?.style.display!=='none')positionPortal();});

  // URL param
  const params=new URLSearchParams(window.location.search);
  const urlQ=params.get('q');
  if (urlQ){searchInput.value=urlQ;executeSearch();}
  else render();
});
