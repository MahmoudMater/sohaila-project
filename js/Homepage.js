/* ============================================================
   LANGUAGE SYSTEM (Handled by global.js)
============================================================ */

/* ============================================================
   DAY / NIGHT MODE (Handled by global.js)
============================================================ */

/* ============================================================
   AUTHORS DATA
============================================================ */
const allAuthors = [
  {
    photo: "images/authors/jane-austen.webp",
    initials: "JA",
    en: {
      name: "Jane Austen",
      meta: "1775–1817 · English Novelist",
      book: "Pride & Prejudice · Emma · Northanger Abbey",
      badge: "🇬🇧 English Author",
      quote: "A lady's imagination is very <span>rapid</span>; it jumps from admiration to love, from love to matrimony, in a moment."
    },
    ar: {
      name: "جين أوستن",
      meta: "١٧٧٥–١٨١٧ · روائية إنجليزية",
      book: "كبرياء وتحيز · إيما · دير نورثانجر",
      badge: "🇬🇧 كاتبة إنجليزية",
      quote: "خيال السيدة <span>سريع للغاية</span>؛ ينتقل من الإعجاب إلى الحب، ومن الحب إلى الزواج، في لحظة واحدة."
    }
  },
  {
    photo: "images/authors/Victor_Hugo_by_Étienne_Carjat_1876_-_full.jpg",
    initials: "VH",
    en: {
      name: "Victor Hugo",
      meta: "1802–1885 · French Author",
      book: "Les Misérables · The Hunchback of Notre-Dame",
      badge: "🇫🇷 French Author",
      quote: "To love another person is to see the <span>face of God</span>. A library is an act of civilisation."
    },
    ar: {
      name: "فيكتور هوغو",
      meta: "١٨٠٢–١٨٨٥ · كاتب فرنسي",
      book: "البؤساء · أحدب نوتردام",
      badge: "🇫🇷 كاتب فرنسي",
      quote: "أن تحبّ شخصاً آخر هو أن ترى <span>وجه الله</span>. والمكتبة فعل من أفعال الحضارة."
    }
  },
  {
    photo: "images/authors/licensed-image.webp",
    initials: "LT",
    en: {
      name: "Leo Tolstoy",
      meta: "1828–1910 · Russian Novelist",
      book: "War and Peace · Anna Karenina",
      badge: "🇷🇺 Russian Author",
      quote: "All great literature is one of two stories; a man goes on a <span>journey</span>, or a stranger comes to town."
    },
    ar: {
      name: "ليو تولستوي",
      meta: "١٨٢٨–١٩١٠ · روائي روسي",
      book: "الحرب والسلام · آنا كارنينا",
      badge: "🇷🇺 كاتب روسي",
      quote: "كل الأدب العظيم هو إحدى قصتين؛ رجل يخرج في <span>رحلة</span>، أو غريب يأتي إلى المدينة."
    }
  },
  {
    photo: "images/authors/images.webp",
    initials: "WS",
    en: {
      name: "William Shakespeare",
      meta: "1564–1616 · English Playwright",
      book: "Hamlet · Romeo & Juliet · Othello",
      badge: "🇬🇧 English Playwright",
      quote: "What a piece of work is a man! How noble in reason, how <span>infinite</span> in faculty."
    },
    ar: {
      name: "وليم شكسبير",
      meta: "١٥٦٤–١٦١٦ · كاتب مسرحي إنجليزي",
      book: "هاملت · روميو وجولييت · عطيل",
      badge: "🇬🇧 كاتب مسرحي إنجليزي",
      quote: "يا له من مخلوق رائع الإنسان! نبيل العقل، <span>لا نهاية</span> لقدراته."
    }
  },
  {
    photo: "images/authors/licensed-image (1).webp",
    initials: "AC",
    en: {
      name: "Agatha Christie",
      meta: "1890–1976 · Queen of Crime",
      book: "And Then There Were None · The Hound of the Baskervilles",
      badge: "🇬🇧 English Author",
      quote: "The impossible could not have happened, therefore the <span>impossible</span> must be possible in spite of appearances."
    },
    ar: {
      name: "أغاثا كريستي",
      meta: "١٨٩٠–١٩٧٦ · ملكة الغموض",
      book: "عشرة لا غير · كلب آل باسكرفيل",
      badge: "🇬🇧 كاتبة إنجليزية",
      quote: "المستحيل لا يمكن أن يقع، لذا يجب أن يكون <span>المستحيل</span> ممكناً على الرغم من المظاهر."
    }
  },
  {
    photo: "images/authors/licensed-image.jpg",
    initials: "MS",
    en: {
      name: "Mary Shelley",
      meta: "1797–1851 · English Author",
      book: "Frankenstein",
      badge: "🇬🇧 English Author",
      quote: "Beware; for I am <span>fearless</span>, and therefore powerful. Nothing is so painful as a great and sudden change."
    },
    ar: {
      name: "ماري شيلي",
      meta: "١٧٩٧–١٨٥١ · كاتبة إنجليزية",
      book: "فرانكشتاين",
      badge: "🇬🇧 كاتبة إنجليزية",
      quote: "احذر؛ فأنا <span>بلا خوف</span>، وبالتالي قوي. لا شيء أكثر إيلاماً من تغيير مفاجئ وعظيم."
    }
  },
  {
    photo: "images/authors/images (1).webp",
    initials: "H",
    en: {
      name: "Homer",
      meta: "~8th Century BC · Greek Poet",
      book: "The Iliad · The Odyssey",
      badge: "🇬🇷 Greek Poet",
      quote: "The journey is the <span>reward</span>. No man living is incapable of doing more than he thinks he can do."
    },
    ar: {
      name: "هوميروس",
      meta: "القرن الثامن ق.م · شاعر يوناني",
      book: "الإلياذة · الأوديسة",
      badge: "🇬🇷 شاعر يوناني",
      quote: "الرحلة هي <span>المكافأة</span>. لا يوجد إنسان حيّ غير قادر على فعل أكثر مما يظن أنه يستطيع."
    }
  },
  {
    photo: "images/authors/images (2).webp",
    initials: "AD",
    en: {
      name: "Alexandre Dumas",
      meta: "1802–1870 · French Author",
      book: "The Count of Monte Cristo · The Three Musketeers",
      badge: "🇫🇷 French Author",
      quote: "All human wisdom is contained in these two words — <span>Wait</span> and <span>Hope</span>."
    },
    ar: {
      name: "ألكسندر دوما",
      meta: "١٨٠٢–١٨٧٠ · كاتب فرنسي",
      book: "الكونت دي مونت كريستو · الفرسان الثلاثة",
      badge: "🇫🇷 كاتب فرنسي",
      quote: "كل حكمة الإنسانية تتلخص في كلمتين — <span>انتظر</span> و<span>أمّل</span>."
    }
  },
  {
    photo: "images/authors/images (3).webp",
    initials: "CD",
    en: {
      name: "Arthur Conan Doyle",
      meta: "1859–1930 · Scottish Author",
      book: "The Hound of the Baskervilles · Sherlock Holmes",
      badge: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scottish Author",
      quote: "When you have eliminated the impossible, whatever remains, however <span>improbable</span>, must be the truth."
    },
    ar: {
      name: "آرثر كونان دويل",
      meta: "١٨٥٩–١٩٣٠ · كاتب اسكتلندي",
      book: "كلب آل باسكرفيل · شيرلوك هولمز",
      badge: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 كاتب اسكتلندي",
      quote: "عندما تستبعد المستحيل، فإن ما يبقى، مهما بدا <span>غير محتمل</span>، لا بد أن يكون الحقيقة."
    }
  },
  {
    photo: "images/authors/Bargello_-_Kapelle_Fresko_2a.jpg",
    initials: "DA",
    en: {
      name: "Dante Alighieri",
      meta: "1265–1321 · Italian Poet",
      book: "The Divine Comedy",
      badge: "🇮🇹 Italian Poet",
      quote: "In the middle of the journey of our life I came to myself within a <span>dark wood</span> where the straight way was lost."
    },
    ar: {
      name: "دانتي أليغييري",
      meta: "١٢٦٥–١٣٢١ · شاعر إيطالي",
      book: "الكوميديا الإلهية",
      badge: "🇮🇹 شاعر إيطالي",
      quote: "في منتصف رحلة حياتنا وجدت نفسي في <span>غابة مظلمة</span> حيث ضاع الطريق القويم."
    }
  },
  {
    photo: "images/authors/04050a99-6e6a-4e8c-8950-7c0a7c4322d0_1241x2175.jpg",
    initials: "BW",
    en: {
      name: "Brianna Wiest",
      meta: "Contemporary · American Author",
      book: "101 Essays That Will Change The Way You Think",
      badge: "🇺🇸 American Author",
      quote: "You are not a drop in the ocean. You are the entire ocean in a drop. <span>Think deeper</span>, live truer."
    },
    ar: {
      name: "بريانا ويست",
      meta: "معاصرة · كاتبة أمريكية",
      book: "١٠١ مقالة ستغير طريقة تفكيرك",
      badge: "🇺🇸 كاتبة أمريكية",
      quote: "أنتِ لستِ قطرة في المحيط. أنتِ المحيط بأكمله في قطرة. <span>فكّر بعمق</span>، عِش بصدق."
    }
  },
  {
    photo: "images/authors/A1W10AvNRfL.jpg",
    initials: "DB",
    en: {
      name: "Dean Burnett",
      meta: "Contemporary · British Neuroscientist & Author",
      book: "The Idiot Brain",
      badge: "🇬🇧 British Author",
      quote: "The brain is a <span>bewildering</span> organ — it simultaneously controls everything and gets confused by almost anything."
    },
    ar: {
      name: "دين بيرنيت",
      meta: "معاصر · عالم أعصاب وكاتب بريطاني",
      book: "الدماغ الأحمق",
      badge: "🇬🇧 كاتب بريطاني",
      quote: "الدماغ عضو <span>مُربك</span> — يتحكم في كل شيء في آنٍ واحد ويرتبك من أبسط الأشياء."
    }
  },
  {
    photo: "images/authors/download.jpg",
    initials: "هـ",
    en: {
      name: "Hanan Lashin",
      meta: "Contemporary · Egyptian Author",
      book: "Ikadoli · Opal · Amanos · Kuikoul · Socotra",
      badge: "🇪🇬 Egyptian Author",
      quote: "Words are not merely letters — they are entire <span>worlds</span> waiting for someone to open their door."
    },
    ar: {
      name: "هنان لاشين",
      meta: "معاصرة · كاتبة مصرية",
      book: "إيكادولي · أوبال · أماروس · كويكول · سقطرى",
      badge: "🇪🇬 كاتبة مصرية",
      quote: "الكلمات ليست مجرد حروف — إنها <span>عوالم</span> كاملة تنتظر من يفتح بابها."
    }
  },
  {
    photo: "images/authors/images.jpg",
    initials: "ب",
    en: {
      name: "Abdullah Al-Bassees",
      meta: "Contemporary · Arab Author",
      book: "Man Is a Lonely Creature — الإنسان مخلوق وحيد",
      badge: "✍️ Arab Author",
      quote: "Man was not created to be understood by others — he was created to <span>understand himself</span>, and that alone is the greatest journey."
    },
    ar: {
      name: "عبد الله البصيص",
      meta: "معاصر · كاتب عربي",
      book: "الإنسان مخلوق وحيد",
      badge: "✍️ كاتب عربي",
      quote: "لم يُخلق الإنسان ليفهمه الآخرون — بل خُلق <span>ليفهم نفسه</span>، وتلك وحدها هي أعظم رحلة."
    }
  },
  {
    photo: "images/authors/1tLzmIkH_400x400.jpg",
    initials: "ع",
    en: {
      name: "Amr Abdelhamid",
      meta: "Contemporary · Egyptian Author",
      book: "The Blue-Collar Girl — فتاة الياقة الزرقاء",
      badge: "🇪🇬 Egyptian Author",
      quote: "Society builds walls around those it cannot understand, and calls it <span>order</span>. The brave ones climb those walls."
    },
    ar: {
      name: "عمرو عبد الحميد",
      meta: "معاصر · كاتب مصري",
      book: "فتاة الياقة الزرقاء",
      badge: "🇪🇬 كاتب مصري",
      quote: "المجتمع يبني جدراناً حول من لا يفهمهم ويسمّي ذلك <span>نظاماً</span>. والشجعان هم من يتسلقون تلك الجدران."
    }
  },
  {
    photo: "images/authors/images (1).jpg",
    initials: "إ",
    en: {
      name: "Emad Rashad Othman",
      meta: "Contemporary · Arab Author",
      book: "The Executioner Beneath My Skin — الجلاد تحت جلدي",
      badge: "✍️ Arab Author",
      quote: "The greatest enemy does not live outside you — it lives <span>beneath your skin</span>, wearing your own face."
    },
    ar: {
      name: "عماد رشاد عثمان",
      meta: "معاصر · كاتب عربي",
      book: "الجلاد تحت جلدي",
      badge: "✍️ كاتب عربي",
      quote: "العدو الأعظم لا يسكن خارجك — بل يسكن <span>تحت جلدك</span>، يرتدي وجهك أنت."
    }
  },
  {
    photo: "images/authors/4420898.jpeg",
    initials: "ع",
    en: {
      name: "Abbas Mahmoud Al-Aqqad",
      meta: "1889–1964 · Egyptian Intellectual & Author",
      book: "Dhu Al-Nurayn — Uthman ibn Affan",
      badge: "🇪🇬 Egyptian Author",
      quote: "Genius is not a gift — it is a <span>burning will</span> that refuses to be extinguished by the night of ignorance."
    },
    ar: {
      name: "عباس محمود العقاد",
      meta: "١٨٨٩–١٩٦٤ · أديب ومفكر مصري",
      book: "ذو النورين عثمان بن عفان",
      badge: "🇪🇬 كاتب مصري",
      quote: "العبقرية ليست هبة — بل هي <span>إرادة متقدة</span> ترفض أن يطفئها ليل الجهل."
    }
  }
];

/* ============================================================
   QUOTE SLIDER
============================================================ */
window.lang = 'en';
let idx = 0, paused = false, progressVal = 0, progTimer = null;
const INTERVAL = 7000;

function renderSlides() {
  const wrap   = document.getElementById('aqSlides');
  const dotsEl = document.getElementById('aqDots');
  const isRtl  = currentLang === 'ar';
  wrap.innerHTML = '';
  dotsEl.innerHTML = '';

  allAuthors.forEach((a, i) => {
    const d = a[currentLang];
    const slide = document.createElement('div');
    slide.className = 'aq-slide' + (i === idx ? ' active' : '');
    slide.id = 'sl_' + i;

    const avatarInner = a.photo
      ? `<img src="${a.photo}" alt="${d.name}" onerror="this.style.display='none';this.parentNode.innerHTML='<span style=\\'font-family:Cinzel,serif\\'>${a.initials}</span>'">`
      : `<span style="font-family:'Cinzel',serif">${a.initials}</span>`;

    slide.innerHTML = `
      <div class="aq-card ${isRtl ? 'rtl' : ''}" dir="${isRtl ? 'rtl' : 'ltr'}">
        <div class="aq-avatar">${avatarInner}</div>
        <div class="aq-sep"></div>
        <div class="aq-text" ${isRtl ? 'dir="rtl"' : ''}>
          <span class="aq-origin-badge">${d.badge}</span>
          <p class="aq-quote-text">${d.quote}</p>
          <div class="aq-author-name">${d.name}</div>
          <div class="aq-author-meta">${d.meta}</div>
          <div class="aq-book-title">✦ ${d.book} ✦</div>
        </div>
      </div>`;
    wrap.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = 'aq-dot' + (i === idx ? ' active' : '');
    dot.onclick = () => goTo(i);
    dotsEl.appendChild(dot);
  });

  updateCounter();
}

function updateCounter() {
  document.getElementById('aqCounter').textContent = (idx + 1) + ' / ' + allAuthors.length;
}

function goTo(n) {
  document.getElementById('sl_' + idx)?.classList.remove('active');
  document.querySelectorAll('.aq-dot')[idx]?.classList.remove('active');
  idx = (n + allAuthors.length) % allAuthors.length;
  document.getElementById('sl_' + idx)?.classList.add('active');
  document.querySelectorAll('.aq-dot')[idx]?.classList.add('active');
  updateCounter();
  resetProgress();
}

function nextSlide() { goTo(idx + 1); }
function prevSlide() { goTo(idx - 1); }

function resetProgress() {
  progressVal = 0;
  document.getElementById('aqBar').style.width = '0%';
  clearInterval(progTimer);
  if (!paused) startProgress();
}

function startProgress() {
  const step = 100 / (INTERVAL / 100);
  progTimer = setInterval(() => {
    progressVal += step;
    if (progressVal >= 100) { progressVal = 0; nextSlide(); }
    document.getElementById('aqBar').style.width = Math.min(progressVal, 100) + '%';
  }, 100);
}

function togglePause() {
  paused = !paused;
  document.getElementById('pauseBtn').innerHTML = paused
    ? '<i class="fas fa-play"></i>'
    : '<i class="fas fa-pause"></i>';
  paused ? clearInterval(progTimer) : startProgress();
}

renderSlides();
startProgress();

/* ============================================================
   NEWSLETTER VALIDATION
============================================================ */
function handleNewsletter() {
  const emailInput = document.getElementById('newsletter-email');
  const msg = document.getElementById('newsletter-msg');
  const val = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!val) {
    msg.style.color = '#c44f6a';
    msg.textContent = currentLang === 'ar'
      ? 'يرجى إدخال عنوان بريدك الإلكتروني.'
      : 'Please enter your email address.';
    return;
  }
  if (!emailRegex.test(val)) {
    msg.style.color = '#c44f6a';
    msg.textContent = currentLang === 'ar'
      ? 'عنوان البريد الإلكتروني غير صحيح. تحقق من الصيغة.'
      : "That doesn't look like a valid email. Please check and try again.";
    return;
  }
  msg.style.color = 'var(--gold)';
  msg.textContent = currentLang === 'ar'
    ? '✦ مرحباً بك في المكتبة المسحورة! تم تسجيل اشتراكك. ✦'
    : "✦ Welcome to the Enchanted Library! You're now subscribed. ✦";
  emailInput.value = '';
}

/* ============================================================
   PARTICLES & FALLING ROSE PETALS (Particles in global.js)
============================================================ */
const petalContainer = document.getElementById('petalContainer');
if (petalContainer) {
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = ['🌸','🌺','🌹','❀','✿'][Math.floor(Math.random()*5)];
    petal.style.cssText = `
      left:${Math.random()*100}%;
      animation-duration:${5+Math.random()*8}s;
      animation-delay:${-Math.random()*10}s;
      font-size:${14+Math.random()*12}px;
    `;
    petalContainer.appendChild(petal);
  }
}

/* ============================================================
   SCROLL REVEAL (Handled by global.js)
============================================================ */

/* ============================================================
   BOOK HOVER
============================================================ */
document.querySelectorAll('.shelf-book').forEach(b => {
  b.addEventListener('mouseenter', () => { b.style.filter = 'brightness(1.3)'; });
  b.addEventListener('mouseleave', () => { b.style.filter = ''; });
});

/* ============================================================
   PARALLAX HERO
============================================================ */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  const win_svg = document.querySelector('.stained-window');
  if (win_svg) win_svg.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.15}px))`;
});

/* ============================================================
   CANDLE FLICKER
============================================================ */
document.querySelectorAll('.flame').forEach(f => {
  setInterval(() => {
    const intensity = 0.8 + Math.random() * 0.4;
    f.style.boxShadow = `0 0 ${8*intensity}px ${3*intensity}px rgba(201,168,76,${0.3*intensity}), 0 0 ${20*intensity}px rgba(255,150,0,${0.2*intensity})`;
  }, 100 + Math.random()*200);
});