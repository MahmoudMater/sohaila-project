const ALL_BOOKS = [
  { id:101, title:"Pride & Prejudice", titleAR:"كبرياء وتحيّز", author:"Jane Austen", authorAR:"جين أوستن", genre:"romance", genreAR:"رومانسي", year:1813, rating:4.8, image:"../image/Pride and Prejudice.jpg", color:["#1a5a7a","#0a3a5a"], badge:"popular", desc:"A brilliant exploration of love, class, and society in Regency England.", descAR:"استكشاف رائع للحب والطبقة والمجتمع في إنجلترا الريجنسية." },
  { id:102, title:"Romeo & Juliet", titleAR:"روميو وجولييت", author:"William Shakespeare", authorAR:"وليم شكسبير", genre:"romance", genreAR:"رومانسي", year:1597, rating:4.7, image:"../image/Romeo and Juliet.jpg", color:["#5a1a2a","#3a0a1a"], badge:null, desc:"The most famous love story ever written — tragic and timeless.", descAR:"أشهر قصة حب كُتبت على الإطلاق — مأساوية وخالدة." },
  { id:103, title:"Jane Eyre", titleAR:"جين إير", author:"Charlotte Brontë", authorAR:"شارلوت برونتي", genre:"romance", genreAR:"رومانسي", year:1847, rating:4.9, image:"../image/Jane Eyre.jpg", color:["#3a1a3a","#1a0a2a"], badge:"popular", desc:"A passionate woman finds love against all odds.", descAR:"امرأة شغوفة وغير تقليدية تجد الحب رغم كل العقبات." },
  { id:104, title:"Wuthering Heights", titleAR:"مرتفعات ويذرينج", author:"Emily Brontë", authorAR:"إميلي برونتي", genre:"romance", genreAR:"رومانسي", year:1847, rating:4.7, image:"../image/Wuthering Heights.jpg", color:["#1a2a3a","#0a1a2a"], badge:null, desc:"A wild love in the Yorkshire moors — dark, fierce, and unforgettable.", descAR:"حب متوحّش في مرتفعات يوركشر — قاتم وحارق لا يُنسى." },
  { id:105, title:"Anna Karenina", titleAR:"آنا كارنينا", author:"Leo Tolstoy", authorAR:"ليو تولستوي", genre:"romance", genreAR:"رومانسي", year:1878, rating:4.8, image:"../image/Anna Karenina.jpg", color:["#2a1a0a","#1a0a0a"], badge:"popular", desc:"Society, passion, and tragedy in imperial Russia.", descAR:"المجتمع والعاطفة والمأساة في روسيا الإمبراطورية." },
  { id:106, title:"Emma", titleAR:"إيما", author:"Jane Austen", authorAR:"جين أوستن", genre:"romance", genreAR:"رومانسي", year:1815, rating:4.7, image:"../image/Emma.jpg", color:["#3a1a3a","#2a0a2a"], badge:null, desc:"A clever young woman learns humility through matchmaking.", descAR:"شابة ذكية تتعلم التواضع من خلال محاولاتها التوفيق بين الآخرين." },
  { id:201, title:"Don Quixote", titleAR:"دون كيخوته", author:"Miguel de Cervantes", authorAR:"ميغيل دي ثيرفانتيس", genre:"adventure", genreAR:"مغامرات", year:1605, rating:4.6, image:"../image/Don Quixote.jpg", color:["#5a3a1a","#3a1a0a"], badge:null, desc:"The world's first modern novel — chivalry and idealism.", descAR:"أول رواية حديثة في العالم — الفروسية والمثالية." },
  { id:202, title:"The Odyssey", titleAR:"الأوديسة", author:"Homer", authorAR:"هوميروس", genre:"adventure", genreAR:"مغامرات", year:-800, rating:4.7, image:"../image/The Odyssey.jpg", color:["#1a3a6a","#0a2a4a"], badge:"rare", desc:"Odysseus journeys home through dangerous seas and strange lands.", descAR:"يبحر أوديسيوس نحو وطنه عبر بحار خطرة وأراضٍ غريبة." },
  { id:203, title:"Moby Dick", titleAR:"موبي ديك", author:"Herman Melville", authorAR:"هيرمان ميلفيل", genre:"adventure", genreAR:"مغامرات", year:1851, rating:4.5, image:"../image/Moby-Dick.jpg", color:["#0a2a3a","#041a2a"], badge:null, desc:"Captain Ahab's obsessive hunt for the white whale.", descAR:"صيد الكابتن آهاب الهوسي للحوت الأبيض." },
  { id:204, title:"The Count of Monte Cristo", titleAR:"كونت مونت كريستو", author:"Alexandre Dumas", authorAR:"ألكسندر دوما", genre:"adventure", genreAR:"مغامرات", year:1844, rating:4.9, image:"../image/The Count of Monte Cristo.jpg", color:["#1a2a4a","#0a1a3a"], badge:"popular", desc:"Betrayal, imprisonment, escape, and legendary revenge.", descAR:"الخيانة والسجن والهروب والانتقام الأسطوري." },
  { id:301, title:"Les Misérables", titleAR:"البؤساء", author:"Victor Hugo", authorAR:"فيكتور هوغو", genre:"classic", genreAR:"كلاسيكي", year:1862, rating:4.9, image:"../image/Les Misérables.jpg", color:["#2a2a4a","#1a1a2a"], badge:"popular", desc:"An emotional epic of justice, redemption, and the human spirit.", descAR:"ملحمة عاطفية عن العدالة والخلاص والروح الإنسانية." },
  { id:302, title:"Hamlet", titleAR:"هاملت", author:"William Shakespeare", authorAR:"وليم شكسبير", genre:"classic", genreAR:"كلاسيكي", year:1600, rating:4.8, image:"../image/Hamlet.jpg", color:["#2a2a1a","#1a1a0a"], badge:null, desc:"To be or not to be — the ultimate question of existence.", descAR:"أن تكون أو لا تكون — السؤال الأعمق في الوجود." },
  { id:303, title:"The Divine Comedy", titleAR:"الكوميديا الإلهية", author:"Dante Alighieri", authorAR:"دانتي أليغييري", genre:"classic", genreAR:"كلاسيكي", year:1320, rating:4.8, image:"../image/The Divine Comedy.jpg", color:["#4a1a0a","#2a0a0a"], badge:"rare", desc:"A journey through Hell, Purgatory, and Heaven.", descAR:"رحلة عبر الجحيم والمطهر والجنة." },
  { id:304, title:"Candide", titleAR:"كانديد", author:"Voltaire", authorAR:"فولتير", genre:"classic", genreAR:"كلاسيكي", year:1759, rating:4.6, image:"../image/Candide.jpg", color:["#2a3a1a","#1a2a0a"], badge:null, desc:"A satirical journey through optimism and reality.", descAR:"رحلة ساخرة بين التفاؤل والواقع." },
  { id:305, title:"Great Expectations", titleAR:"توقعات عظيمة", author:"Charles Dickens", authorAR:"تشارلز ديكنز", genre:"classic", genreAR:"كلاسيكي", year:1861, rating:4.6, image:"../image/Great Expectations.jpg", color:["#3a2a1a","#2a1a0a"], badge:null, desc:"An orphan's rise through Victorian England — hope and disappointment.", descAR:"صعود يتيم عبر إنجلترا الفيكتورية — الأمل وخيبة الأمل." },
  { id:306, title:"War and Peace", titleAR:"الحرب والسلام", author:"Leo Tolstoy", authorAR:"ليو تولستوي", genre:"classic", genreAR:"كلاسيكي", year:1869, rating:4.8, image:"../image/War and Peace.jpg", color:["#2a0a0a","#1a0a0a"], badge:"popular", desc:"Napoleonic Russia — one of the most ambitious novels ever written.", descAR:"روسيا النابليونية — من أكثر الروايات طموحاً في التاريخ." },
  { id:307, title:"Crime and Punishment", titleAR:"الجريمة والعقاب", author:"Fyodor Dostoevsky", authorAR:"فيودور دوستويفسكي", genre:"classic", genreAR:"كلاسيكي", year:1866, rating:4.9, image:"../image/crime and punishment", color:["#3a1a1a","#1a0a0a"], badge:"popular", desc:"A psychological novel exploring guilt, morality, and redemption.", descAR:"رواية نفسية تستكشف الذنب والأخلاق والخلاص." },
  { id:401, title:"One Thousand Nights", titleAR:"ألف ليلة وليلة", author:"Anonymous", authorAR:"مجهول", genre:"fantasy", genreAR:"خيال", year:1001, rating:4.5, image:"../image/One Thousand and One Nights.jpg", color:["#3a1a5a","#1a0a3a"], badge:"rare", desc:"Scheherazade weaves tales of magic, kings, and jinn.", descAR:"شهرزاد تنسج حكايا من السحر والملوك والجن." },
  { id:402, title:"Midnight's Children", titleAR:"أطفال منتصف الليل", author:"Salman Rushdie", authorAR:"سلمان رشدي", genre:"fantasy", genreAR:"خيال", year:1981, rating:4.7, image:"../image/Midnight's Children.jpg", color:["#3a0a2a","#1a0a1a"], badge:"new", desc:"Born at the moment of India's independence — magical and political.", descAR:"وُلد لحظة استقلال الهند — سحري وسياسي." },
  { id:403, title:"Beauty and the Beast", titleAR:"الجميلة والوحش", author:"Villeneuve", authorAR:"فيلنوف", genre:"fantasy", genreAR:"خيال", year:1740, rating:4.8, image:"../image/Beauty and the Beast.jpg", color:["#2a0a1a","#4a1a3a"], badge:"popular", desc:"A love story that transforms a cursed prince.", descAR:"قصة حب تحوّل أميرًا ملعونًا." },
  { id:404, title:"Cinderella", titleAR:"سندريلا", author:"Charles Perrault", authorAR:"شارل بيرو", genre:"fantasy", genreAR:"خيال", year:1697, rating:4.7, image:"../image/Cinderella.jpg", color:["#3a1a4a","#1a0a2a"], badge:"popular", desc:"A kind girl finds her destiny through magic.", descAR:"فتاة طيّبة تجد مصيرها بفضل السحر." },
  { id:405, title:"Alice in Wonderland", titleAR:"أليس في بلاد العجائب", author:"Lewis Carroll", authorAR:"لويس كارول", genre:"fantasy", genreAR:"خيال", year:1865, rating:4.8, image:"../image/Alice in Wonderland.jpg", color:["#3a0a2a","#1a0a1a"], badge:"rare", desc:"A girl enters a strange magical world.", descAR:"فتاة تدخل عالماً سحرياً غريباً." },
  { id:501, title:"Frankenstein", titleAR:"فرانكنشتاين", author:"Mary Shelley", authorAR:"ماري شيلي", genre:"mystery", genreAR:"غموض", year:1818, rating:4.7, image:"../image/Frankenstein.jpg", color:["#1a2a1a","#0a1a0a"], badge:"new", desc:"The original science fiction story — creation and consequences.", descAR:"قصة الخيال العلمي الأصلية — الخلق والعواقب." },
  { id:502, title:"Northanger Abbey", titleAR:"دير نورثانجر", author:"Jane Austen", authorAR:"جين أوستن", genre:"mystery", genreAR:"غموض", year:1818, rating:4.5, image:"../image/Northanger Abbey.jpg", color:["#1a1a3a","#0a0a2a"], badge:"new", desc:"Gothic romance meets satire in this early Austen work.", descAR:"رومانسية قوطية تلتقي بالسخرية في عمل أوستن المبكر." },
  { id:503, title:"The Hound of the Baskervilles", titleAR:"كلب آل باسكرفيل", author:"Arthur Conan Doyle", authorAR:"آرثر كونان دويل", genre:"mystery", genreAR:"غموض", year:1902, rating:4.8, image:"../image/The Hound of the Baskervilles.jpg", color:["#1a1a2a","#0a0a1a"], badge:"popular", desc:"Sherlock Holmes faces a legendary hound in the moors.", descAR:"شيرلوك هولمز يواجه كلبًا أسطورياً في المستنقعات." },
  { id:504, title:"And Then There Were None", titleAR:"لا أحد", author:"Agatha Christie", authorAR:"أجاثا كريستي", genre:"mystery", genreAR:"غموض", year:1939, rating:4.9, image:"../image/And Then There Were None.jpg", color:["#2a1a1a","#1a0a0a"], badge:"popular", desc:"Ten strangers, one island, no one is innocent.", descAR:"عشرة غرباء، جزيرة واحدة، لا أحد بريء." },
  { id:601, title:"Paradise Lost", titleAR:"الفردوس المفقود", author:"John Milton", authorAR:"جون ميلتون", genre:"poetry", genreAR:"شعر", year:1667, rating:4.7, image:"../image/Paradise Lost.jpg", color:["#2a0a2a","#1a0a1a"], badge:"rare", desc:"The fall of Satan and mankind's loss of paradise in epic poetry.", descAR:"سقوط الشيطان وفقدان الإنسانية للفردوس في ملحمة شعرية." },
  { id:602, title:"The Aeneid", titleAR:"الإنيادة", author:"Virgil", authorAR:"فيرجيل", genre:"poetry", genreAR:"شعر", year:-19, rating:4.7, image:"../image/The Aeneid.jpg", color:["#3a2a1a","#2a1a0a"], badge:"rare", desc:"Aeneas escapes Troy to found Rome — destiny written in the stars.", descAR:"إينياس يفرّ من طروادة ليؤسّس روما — مصير مكتوب بين النجوم." },
  { id:603, title:"Faust", titleAR:"فاوست", author:"Goethe", authorAR:"غوته", genre:"poetry", genreAR:"شعر", year:1808, rating:4.6, image:"../image/Faust.jpg", color:["#1a0a2a","#0a0a1a"], badge:"rare", desc:"A scholar sells his soul to the devil — gaining love and ruin.", descAR:"عالم يبيع روحه للشيطان — يكسب الحب ويخسر كل شيء." },
  { id:701, title:"Asterix & Obelix", titleAR:"أستريكس وأوبيليكس", author:"René Goscinny", authorAR:"رينيه غوسيني", genre:"cartoon", genreAR:"كوميكس", year:1959, rating:4.9, image:"../image/Asterix.jpg", color:["#4a2a0a","#2a1a0a"], badge:"popular", desc:"A small Gaulish village resists Rome with courage and magic potion!", descAR:"قرية غالية صغيرة تقاوم روما بالشجاعة والجرعة السحرية!" },
  { id:702, title:"Tintin", titleAR:"تان تان", author:"Hergé", authorAR:"هيرجيه", genre:"cartoon", genreAR:"كوميكس", year:1929, rating:4.8, image:"../image/The Adventures of Tintin.jpg", color:["#0a3a5a","#0a1a3a"], badge:"popular", desc:"A young reporter travels the world with his dog Snowy.", descAR:"مراسل شاب يجوب العالم مع كلبه ميلو." },
  { id:703, title:"Lucky Luke", titleAR:"لوكي لوك", author:"Morris", authorAR:"موريس", genre:"cartoon", genreAR:"كوميكس", year:1946, rating:4.7, image:"../image/Lucky Luke.jpg", color:["#4a2a0a","#3a1a0a"], badge:null, desc:"The fastest gun in the West brings justice to the frontier.", descAR:"أسرع رامٍ في الغرب يجلب العدالة إلى الحدود." },
  { id:704, title:"The Smurfs", titleAR:"السنافر", author:"Peyo", authorAR:"بيو", genre:"cartoon", genreAR:"كوميكس", year:1958, rating:4.6, image:"../image/The Smurfs.jpg", color:["#0a2a5a","#0a1a3a"], badge:"popular", desc:"A small blue village living in magical mushroom houses.", descAR:"قرية زرقاء صغيرة تعيش في بيوت الفطر السحرية." },
  { id:707, title:"Calvin & Hobbes", titleAR:"كالفن وهوبس", author:"Bill Watterson", authorAR:"بيل واترسون", genre:"cartoon", genreAR:"كوميكس", year:1985, rating:4.9, image:"../image/Calvin and Hobbes.jpg", color:["#3a2a1a","#1a1a0a"], badge:"popular", desc:"A boy and his imaginary tiger in philosophical adventures.", descAR:"صبي ونمره الخيالي في مغامرات فلسفية." },
  { id:715, title:"Spider-Man Comics", titleAR:"سبايدر مان", author:"Stan Lee", authorAR:"ستان لي", genre:"cartoon", genreAR:"كوميكس", year:1962, rating:4.9, image:"../image/Spider-Man.jpg", color:["#4a0a0a","#2a0a0a"], badge:"popular", desc:"Peter Parker becomes Spider-Man, protector of New York.", descAR:"بيتر باركر يصبح سبايدرمان حامي نيويورك." },
  { id:901, title:"Ikadoli", titleAR:"إيكادولي", author:"Hanan Lashin", authorAR:"حنان لاشين", genre:"Fiction Books", genreAR:"روايات", year:2017, rating:4.5, image:"../image/Ikadoli.jpg", color:["#4b2e83","#1f1a5a"], badge:"popular", desc:"A fantasy adventure in the magical Kingdom of Eloquence.", descAR:"مغامرة خيالية في عالم مملكة البلاغة الساحر." },
  { id:902, title:"Opal", titleAR:"أوبال", author:"Hanan Lashin", authorAR:"حنان لاشين", genre:"Fiction Books", genreAR:"روايات", year:2018, rating:4.6, image:"../image/Opal.jpg", color:["#2b6f6f","#0f3d3d"], badge:"popular", desc:"A continuation of the mystical journey in the Kingdom of Eloquence.", descAR:"استمرار الرحلة الغامضة في مملكة البلاغة." },
  { id:903, title:"Amanos", titleAR:"أمانوس", author:"Hanan Lashin", authorAR:"حنان لاشين", genre:"Fiction Books", genreAR:"روايات", year:2019, rating:4.7, image:"../image/Amanos.jpg", color:["#3b3b98","#1b1b4f"], badge:"popular", desc:"A story of courage and challenges in a symbolic fantasy world.", descAR:"قصة شجاعة وتحديات في عالم خيالي رمزي." },
  { id:904, title:"Kuikoul", titleAR:"كويكول", author:"Hanan Lashin", authorAR:"حنان لاشين", genre:"Fiction Books", genreAR:"روايات", year:2020, rating:4.6, image:"../image/Kuikoul.jpg", color:["#6a4c93","#2e1a47"], badge:"popular", desc:"Deeper secrets unfold in the Kingdom of Eloquence.", descAR:"أسرار أعمق تتكشّف في مملكة البلاغة." },
  { id:905, title:"Socotra", titleAR:"سقطرى", author:"Hanan Lashin", authorAR:"حنان لاشين", genre:"Fiction Books", genreAR:"روايات", year:2021, rating:4.7, image:"../image/Socotra.jpg", color:["#1e6091","#0b2e3d"], badge:"new", desc:"An adventurous journey in a mysterious symbolic land.", descAR:"رحلة مغامرة في أرض رمزية غامضة." },
  { id:1001, title:"101 Essays", titleAR:"١٠١ مقالة ستغيّر تفكيرك", author:"Brianna Wiest", authorAR:"بريانا ويست", genre:"Self Help Books", genreAR:"تطوير ذات", year:2016, rating:4.7, image:"../image/101 Essays That Will Change The Way You Think.png", color:["#3a2a4a","#1a1a2a"], badge:"popular", desc:"A powerful collection of essays about self-awareness and life transformation.", descAR:"مجموعة قوية من المقالات عن الوعي الذاتي وتحويل الحياة." },
  { id:1002, title:"الإنسان مخلوق وحيد", titleAR:"الإنسان مخلوق وحيد", author:"عبد الله البصيص", authorAR:"عبد الله البصيص", genre:"Fiction Books", genreAR:"روايات", year:2000, rating:4.5, image:"../image/الإنسان مخلوق وحيد.jpg", color:["#2a3a2a","#1a2a1a"], badge:null, desc:"A philosophical exploration of human nature and creation.", descAR:"استكشاف فلسفي عميق للطبيعة الإنسانية والوجود." },
  { id:1003, title:"فتاة الياقة الزرقاء", titleAR:"فتاة الياقة الزرقاء", author:"عمرو عبد الحميد", authorAR:"عمرو عبد الحميد", genre:"Fiction Books", genreAR:"روايات", year:2018, rating:4.6, image:"../image/فتاة الياقة الزرقاء.jpg", color:["#1a3a5a","#0a1a2a"], badge:"new", desc:"A story of a girl struggling with identity in a harsh society.", descAR:"قصة فتاة تصارع الحياة والهوية في مجتمع قاسٍ." },
  { id:1004, title:"الجلاد تحت جلدي", titleAR:"الجلاد تحت جلدي", author:"عماد رشاد عثمان", authorAR:"عماد رشاد عثمان", genre:"Self Help Books", genreAR:"تطوير ذات", year:2019, rating:4.5, image:"../image/الجلاد تحت جلدي.jpg", color:["#3a0a0a","#1a0a0a"], badge:null, desc:"A dark psychological thriller about fear, trauma, and hidden darkness.", descAR:"إثارة نفسية مظلمة عن الخوف والصدمة والظلام الداخلي." },
  { id:1005, title:"The Idiot Brain", titleAR:"الدماغ الأحمق", author:"Dean Burnett", authorAR:"دين بيرنيت", genre:"Self Help Books", genreAR:"تطوير ذات", year:2016, rating:4.7, image:"../image/The Idiot Brain", color:["#1a2a3a","#0a1a2a"], badge:"popular", desc:"A humorous scientific explanation of how the brain really works.", descAR:"شرح علمي فكاهي لطريقة عمل الدماغ البشري." },
  { id:1006, title:"Introduction to Algorithms", titleAR:"مقدمة في الخوارزميات", author:"Cormen et al.", authorAR:"كورمن وآخرون", genre:"Science books", genreAR:"علوم", year:2009, rating:4.9, image:"../image/Introduction to Algorithms.jpg", color:["#2a2a2a","#1a1a1a"], badge:"rare", desc:"The definitive textbook for algorithms in computer science.", descAR:"المرجع الأساسي للخوارزميات في علوم الحاسوب." },
  { id:1007, title:"Mathematics for Computer Science", titleAR:"رياضيات علوم الحاسوب", author:"Eric Lehman", authorAR:"إريك ليمان", genre:"Science books", genreAR:"علوم", year:2017, rating:4.8, image:"../image/Mathematics for Computer Science.jpg", color:["#2a1a3a","#1a0a2a"], badge:"popular", desc:"Core mathematical foundations for computer science students.", descAR:"الأسس الرياضية الجوهرية لطلاب علوم الحاسوب." },
  { id:1010, title:"Harry Potter and the Sorcerer's Stone", titleAR:"هاري بوتر وحجر الفيلسوف", author:"J.K. Rowling", authorAR:"ج. ك. رولينج", genre:"Fantasy", genreAR:"فانتازيا", year:1997, rating:4.9, image:"../image/Harry Potter.jpg", color:["#4b2e83","#1b1b3a"], badge:"popular", desc:"A young wizard discovers his magical destiny and begins his journey at Hogwarts.", descAR:"يكتشف فتى صغير أنه ساحر ويبدأ رحلته السحرية في مدرسة هوجورتس." }
];

/* ==================== LANGUAGE SYSTEM ==================== */
// (currentLang handled by global.js)

const UI_TEXT = {
  ar: {
    pageTitle: 'مكتبتي — المكتبة المسحورة',
    navLogo: '✦ المكتبة المسحورة ✦',
    navHome: 'الرئيسية', navBooks: 'معرض الكتب', navSearch: 'بحث',
    navLib: 'مكتبتي', navRose: 'الوردة', langBtn: 'English',
    eyebrow: '✦ \u00a0 مجموعتك الشخصية \u00a0 ✦',
    pageH1: 'مكتبتي', pageH1Em: 'المسحورة',
    pageQuote: '«القارئ يعيش ألف حياة قبل أن يموت»',
    labelFav: 'المفضّلة', labelBook: 'الإشارات المرجعية', labelGenres: 'التصنيفات',
    tabFav: 'المفضّلة', tabBook: 'الإشارات المرجعية', tabAll: 'جميع المحفوظات',
    sortAdded: 'ترتيب: تاريخ الإضافة', sortTitle: 'ترتيب: العنوان', sortAuthor: 'ترتيب: المؤلف',
    sortRating: 'ترتيب: التقييم ↓', sortYear: 'ترتيب: السنة',
    allGenres: 'جميع التصنيفات',
    emptyFavTitle: 'لا توجد مفضّلات بعد', emptyFavDesc: 'اعثر على كتاب يعجبك واضغط ❤ لإضافته هنا.',
    emptyBookTitle: 'لا توجد إشارات مرجعية بعد', emptyBookDesc: 'ضع إشارات على الكتب من المكتبة باستخدام أيقونة 🔖',
    emptyAllTitle: 'مجموعتك فارغة', emptyAllDesc: 'توجّه إلى المكتبة وأضف كتبك المفضّلة أو ضع إشارات مرجعية عليها.',
    emptyGenreTitle: 'لا توجد كتب {genre} هنا بعد', emptyGenreDesc: 'جرّب تصنيفاً آخر أو أضف المزيد من الكتب.',
    emptyBtn: '✦ تصفّح المكتبة',
    btnFav: '♡ مفضّل', btnFavActive: '❤ إزالة', btnRemove: '✕ حذف',
    btnView: 'عرض الكتاب', tagFav: '❤ مفضّل', tagBook: '🔖 محفوظ',
    demoText: 'هذه <strong>مجموعة تجريبية</strong> — في الإصدار النهائي، ستتصل بإشاراتك ومفضّلاتك الحقيقية.',
    footerLogo: '✦ المكتبة المسحورة لبيل ✦',
    footerQuote: '«ثمّة شيء هناك لم يكن موجودًا من قبل»',
    footerHome: 'الرئيسية', footerBrowse: 'تصفّح الكتب', footerSearch: 'بحث', footerLib: 'مكتبتي',
    footerCopy: '🌹 \u00a0 حكاية مسحورة \u00a0 🌹',
    toastFavAdd: '❤ تمت إضافة «{t}» إلى المفضّلة', toastFavRem: 'تمت إزالة «{t}» من المفضّلة',
    toastBookAdd: '🔖 تمت إضافة إشارة لـ «{t}»', toastBookRem: 'تمت إزالة الإشارة من «{t}»',
    toastRemove: 'تمت إزالة «{t}» من مكتبتك',
    bcAD: '', bcBC: ' ق.م',
    badgePopular: '✦ رائج', badgeNew: '✦ جديد', badgeRare: '✦ نادر', badgeTrending: '✦ صاعد',
  },
  en: {
    pageTitle: 'My Library — Belle\'s Enchanted Library',
    navLogo: '✦ The Enchanted Library ✦',
    navHome: 'Home', navBooks: 'Books Fair', navSearch: 'Search',
    navLib: 'My Library', navRose: 'The Rose', langBtn: 'عربي',
    eyebrow: '✦ \u00a0 Your Personal Collection \u00a0 ✦',
    pageH1: 'My', pageH1Em: 'Enchanted Library',
    pageQuote: '"A reader lives a thousand lives before he dies."',
    labelFav: 'Favourites', labelBook: 'Bookmarked', labelGenres: 'Genres',
    tabFav: 'Favourites', tabBook: 'Bookmarked', tabAll: 'All Saved',
    sortAdded: 'Sort: Recently Added', sortTitle: 'Sort: Title A–Z', sortAuthor: 'Sort: Author',
    sortRating: 'Sort: Rating ↓', sortYear: 'Sort: Year',
    allGenres: 'All Genres',
    emptyFavTitle: 'No favourites yet', emptyFavDesc: 'Find a book you love and tap the ❤ heart to add it here.',
    emptyBookTitle: 'No bookmarks yet', emptyBookDesc: 'Bookmark books from the library using the 🔖 icon.',
    emptyAllTitle: 'Your collection is empty', emptyAllDesc: 'Head to the library and add books to your favourites or bookmarks.',
    emptyGenreTitle: 'No {genre} books here yet', emptyGenreDesc: 'Try a different genre filter or add more books.',
    emptyBtn: '✦ Browse the Library',
    btnFav: '♡ Favourite', btnFavActive: '❤ Unfavourite', btnRemove: '✕ Remove',
    btnView: 'View Book', tagFav: '❤ Favourite', tagBook: '🔖 Bookmarked',
    demoText: 'This is a <strong>demo collection</strong> — in production, connect to your real bookmarks &amp; favourites.',
    footerLogo: '✦ Belle\'s Enchanted Library ✦',
    footerQuote: '"There\'s something there that wasn\'t there before."',
    footerHome: 'Home', footerBrowse: 'Browse', footerSearch: 'Search', footerLib: 'My Library',
    footerCopy: '🌹 \u00a0 An Enchanted Tale \u00a0 🌹',
    toastFavAdd: '❤ Added "{t}" to favourites', toastFavRem: 'Removed "{t}" from favourites',
    toastBookAdd: '🔖 Bookmarked "{t}"', toastBookRem: 'Removed bookmark from "{t}"',
    toastRemove: '"{t}" removed from your library',
    bcAD: '', bcBC: ' BC',
    badgePopular: '✦ Popular', badgeNew: '✦ New', badgeRare: '✦ Rare', badgeTrending: '✦ Trending',
  }
};

function t(key) { return UI_TEXT[currentLang][key] || key; }

function onLanguageChange() {
  const lang = localStorage.getItem('el-lang') || 'ar';
  currentLang = lang;
  const isAR = lang === 'ar';
  const html = document.getElementById('htmlRoot') || document.documentElement;
  const body = document.body;
  html.setAttribute('lang', isAR ? 'ar' : 'en');
  html.setAttribute('dir', isAR ? 'rtl' : 'ltr');
  body.classList.toggle('rtl', isAR);
  body.classList.toggle('ltr', !isAR);

  document.getElementById('pageTitle').textContent = t('pageTitle');
  document.getElementById('navLogo').textContent = t('navLogo');
  document.getElementById('navHome').textContent = t('navHome');
  document.getElementById('navBooks').textContent = t('navBooks');
  document.getElementById('navSearch').textContent = t('navSearch');
  document.getElementById('navLib').textContent = t('navLib');
  document.getElementById('navRose').textContent = t('navRose');
  document.getElementById('langBtnText').textContent = t('langBtn');
  document.getElementById('eyebrow').textContent = t('eyebrow');
  document.getElementById('pageH1').childNodes[0].textContent = t('pageH1') + ' ';
  document.getElementById('pageH1Em').textContent = t('pageH1Em');
  document.getElementById('pageQuote').textContent = t('pageQuote');
  document.getElementById('labelFav').textContent = t('labelFav');
  document.getElementById('labelBook').textContent = t('labelBook');
  document.getElementById('labelGenres').textContent = t('labelGenres');
  document.getElementById('tabFavLabel').textContent = t('tabFav');
  document.getElementById('tabBookLabel').textContent = t('tabBook');
  document.getElementById('tabAllLabel').textContent = t('tabAll');
  document.getElementById('sortAdded').textContent = t('sortAdded');
  document.getElementById('sortTitle').textContent = t('sortTitle');
  document.getElementById('sortAuthor').textContent = t('sortAuthor');
  document.getElementById('sortRating').textContent = t('sortRating');
  document.getElementById('sortYear').textContent = t('sortYear');
  document.getElementById('demoText').innerHTML = t('demoText');
  document.getElementById('footerLogo').textContent = t('footerLogo');
  document.getElementById('footerQuote').textContent = t('footerQuote');
  document.querySelector('.footer-copy').textContent = t('footerCopy');
  const fLinks = document.querySelectorAll('.footer-links a');
  if (fLinks[0]) fLinks[0].textContent = t('footerHome');
  if (fLinks[1]) fLinks[1].textContent = t('footerBrowse');
  if (fLinks[2]) fLinks[2].textContent = t('footerSearch');
  if (fLinks[3]) fLinks[3].textContent = t('footerLib');
  
  render();
}

function onThemeChange() {
  const isDay = localStorage.getItem('el-mode') === 'day';
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = isDay ? '🌙' : '☀️';
  }
}

/* ==================== THEME ==================== */

/* ==================== STORAGE ==================== */
function loadSets() {
  try {
    const fav  = JSON.parse(localStorage.getItem('enchanted_favourites') || '[]');
    const book = JSON.parse(localStorage.getItem('enchanted_bookmarks')  || '[]');
    return { favourites: new Set(fav), bookmarks: new Set(book) };
  } catch { return { favourites: new Set(), bookmarks: new Set() }; }
}
function saveSets() {
  localStorage.setItem('enchanted_favourites', JSON.stringify([...store.favourites]));
  localStorage.setItem('enchanted_bookmarks',  JSON.stringify([...store.bookmarks]));
}
function seedDemo() {
  if (localStorage.getItem('enchanted_seeded')) return;
  localStorage.setItem('enchanted_bookmarks',  JSON.stringify([101,103,204,302,403,503,701,707,715,901,1001,306]));
  localStorage.setItem('enchanted_favourites', JSON.stringify([101,103,403,701,715,1001,302,504]));
  localStorage.setItem('enchanted_seeded', '1');
}

seedDemo();
const store = loadSets();

let state = {
  tab: 'favourites', sort: 'added', view: 'grid', genreFilter: 'all',
  addedOrder: [...store.favourites, ...store.bookmarks],
};

const BADGE_CONFIG = {
  popular: { getLabel: () => t('badgePopular'), cls: 'badge-popular' },
  new:     { getLabel: () => t('badgeNew'),     cls: 'badge-new'     },
  rare:    { getLabel: () => t('badgeRare'),    cls: 'badge-rare'    },
  trending:{ getLabel: () => t('badgeTrending'),cls: 'badge-trending' },
};

/* ==================== DATA HELPERS ==================== */
function getBookTitle(b)  { return currentLang === 'ar' ? (b.titleAR  || b.title)  : b.title;  }
function getBookAuthor(b) { return currentLang === 'ar' ? (b.authorAR || b.author) : b.author; }
function getBookGenre(b)  { return currentLang === 'ar' ? (b.genreAR  || b.genre)  : b.genre;  }
function getBookDesc(b)   { return currentLang === 'ar' ? (b.descAR   || b.desc)   : b.desc;   }
function getYearLabel(b)  { return b.year < 0 ? Math.abs(b.year) + t('bcBC') : b.year + t('bcAD'); }

function getCurrentBooks() {
  let ids;
  if (state.tab === 'favourites') ids = [...store.favourites];
  else if (state.tab === 'bookmarks') ids = [...store.bookmarks];
  else ids = [...new Set([...store.favourites, ...store.bookmarks])];

  let books = ids.map(id => ALL_BOOKS.find(b => b.id === id)).filter(Boolean);
  if (state.genreFilter !== 'all') books = books.filter(b => b.genre === state.genreFilter);

  return books.slice().sort((a, b) => {
    if (state.sort === 'added')  return state.addedOrder.indexOf(b.id) - state.addedOrder.indexOf(a.id);
    if (state.sort === 'title')  return getBookTitle(a).localeCompare(getBookTitle(b), currentLang);
    if (state.sort === 'author') return getBookAuthor(a).localeCompare(getBookAuthor(b), currentLang);
    if (state.sort === 'rating') return b.rating - a.rating;
    if (state.sort === 'year')   return a.year - b.year;
    return 0;
  });
}

/* ==================== RENDER ==================== */
function render() {
  updateStats(); updateTabCounts(); renderGenrePills();
  const books = getCurrentBooks();
  const container = document.getElementById('booksContainer');
  const empty = document.getElementById('emptyState');
  if (books.length === 0) {
    container.innerHTML = ''; empty.style.display = 'block'; setEmptyMessage(); return;
  }
  empty.style.display = 'none';
  container.className = ({ grid:'books-grid', list:'books-list', details:'books-details' })[state.view] || 'books-grid';
  container.innerHTML = books.map((b, i) => buildCard(b, i)).join('');
}

function setEmptyMessage() {
  const title = document.getElementById('emptyTitle');
  const desc  = document.getElementById('emptyDesc');
  document.getElementById('emptyBtn').textContent = t('emptyBtn');
  if (state.genreFilter !== 'all') {
    const book = ALL_BOOKS.find(b => b.genre === state.genreFilter);
    title.textContent = t('emptyGenreTitle').replace('{genre}', getBookGenre(book || {genre:state.genreFilter}));
    desc.textContent  = t('emptyGenreDesc');
    return;
  }
  const map = { favourites: ['emptyFavTitle','emptyFavDesc'], bookmarks: ['emptyBookTitle','emptyBookDesc'], all: ['emptyAllTitle','emptyAllDesc'] };
  const [tk, dk] = map[state.tab] || map.all;
  title.textContent = t(tk); desc.textContent = t(dk);
}

function updateStats() {
  const genres = new Set([
    ...[...store.favourites].map(id => ALL_BOOKS.find(b=>b.id===id)?.genre),
    ...[...store.bookmarks ].map(id => ALL_BOOKS.find(b=>b.id===id)?.genre),
  ].filter(Boolean));
  animateNum('statFav', store.favourites.size);
  animateNum('statBook', store.bookmarks.size);
  animateNum('statGenres', genres.size);
}
function animateNum(id, target) {
  const el = document.getElementById(id);
  if (parseInt(el.textContent) === target) return;
  el.classList.add('pop'); setTimeout(() => el.classList.remove('pop'), 400);
  el.textContent = target;
}
function updateTabCounts() {
  const all = new Set([...store.favourites, ...store.bookmarks]);
  document.getElementById('tabCntFav').textContent  = store.favourites.size;
  document.getElementById('tabCntBook').textContent = store.bookmarks.size;
  document.getElementById('tabCntAll').textContent  = all.size;
}

function renderGenrePills() {
  const all = new Set([...store.favourites, ...store.bookmarks]);
  const seen = new Set(); const entries = [];
  [...all].forEach(id => {
    const b = ALL_BOOKS.find(x=>x.id===id);
    if (b && !seen.has(b.genre)) { seen.add(b.genre); entries.push(b); }
  });
  entries.sort((a,b) => getBookGenre(a).localeCompare(getBookGenre(b), currentLang));
  const el = document.getElementById('genrePills');
  if (!entries.length) { el.innerHTML = ''; return; }
  el.innerHTML =
    `<button class="genre-pill ${state.genreFilter==='all'?'active':''}" onclick="setGenreFilter('all')">${t('allGenres')}</button>` +
    entries.map(b =>
      `<button class="genre-pill ${state.genreFilter===b.genre?'active':''}" onclick="setGenreFilter('${b.genre}')">${getBookGenre(b)}</button>`
    ).join('');
}
function setGenreFilter(g) { state.genreFilter = g; render(); }

function buildCard(b, i) {
  const isFav  = store.favourites.has(b.id);
  const isBook = store.bookmarks.has(b.id);
  const badgeCfg  = b.badge ? BADGE_CONFIG[b.badge] : null;
  const badgeHtml = badgeCfg ? `<span class="book-badge ${badgeCfg.cls}">${badgeCfg.getLabel()}</span>` : '';
  const tags = [
    isFav  ? `<span class="book-tag tag-fav">${t('tagFav')}</span>` : '',
    isBook ? `<span class="book-tag tag-book">${t('tagBook')}</span>` : '',
  ].join('');
  return `
    <div class="book-card" style="animation-delay:${i*45}ms" data-id="${b.id}">
      ${isFav ? '<div class="fav-ribbon"></div>' : ''}
      <div class="book-cover">
        <div class="book-cover-inner" style="background:linear-gradient(135deg,${b.color[0]},${b.color[1]});">
          <img src="${b.image}" alt="${getBookTitle(b)}" onerror="this.style.display='none'">
        </div>
        <div class="book-cover-overlay"></div>
        ${badgeHtml}
        <div class="cover-actions">
          <button class="ca-btn ${isFav?'fav-active':''}" onclick="toggleFav(event,${b.id})">
            ${isFav ? t('btnFavActive') : t('btnFav')}
          </button>
          <button class="ca-btn danger" onclick="removeFromCollection(event,${b.id})">${t('btnRemove')}</button>
        </div>
      </div>
      <div class="book-info">
        <span class="book-genre-tag">${getBookGenre(b)}</span>
        <h3>${getBookTitle(b)}</h3>
        <p class="book-author">${getBookAuthor(b)} · ${getYearLabel(b)}</p>
        <div class="book-rating">
          <span class="stars-filled">${'★'.repeat(Math.floor(b.rating))}</span>
          <span class="rating-num">${b.rating}</span>
        </div>
        <p class="book-description">${getBookDesc(b)}</p>
        <div class="book-tags">${tags}</div>
        <div class="book-actions">
          <a href="BookPage.html?q=${encodeURIComponent(b.title)}" class="btn-read">${t('btnView')}</a>
          <button class="btn-icon ${isFav?'fav-on':''}" onclick="toggleFav(event,${b.id})" title="${isFav?t('btnFavActive'):t('btnFav')}">
            ${isFav ? '❤' : '♡'}
          </button>
          <button class="btn-icon" onclick="toggleBookmark(event,${b.id})" title="🔖">🔖</button>
        </div>
      </div>
    </div>`;
}

/* ==================== ACTIONS ==================== */
function toggleFav(e, id) {
  e.stopPropagation();
  const book = ALL_BOOKS.find(b=>b.id===id); if (!book) return;
  if (store.favourites.has(id)) {
    store.favourites.delete(id);
    showToast(t('toastFavRem').replace('{t}', getBookTitle(book)));
  } else {
    store.favourites.add(id);
    if (!state.addedOrder.includes(id)) state.addedOrder.unshift(id);
    showToast(t('toastFavAdd').replace('{t}', getBookTitle(book)));
  }
  saveSets(); render();
}
function toggleBookmark(e, id) {
  e.stopPropagation();
  const book = ALL_BOOKS.find(b=>b.id===id); if (!book) return;
  if (store.bookmarks.has(id)) {
    store.bookmarks.delete(id);
    showToast(t('toastBookRem').replace('{t}', getBookTitle(book)));
  } else {
    store.bookmarks.add(id);
    if (!state.addedOrder.includes(id)) state.addedOrder.unshift(id);
    showToast(t('toastBookAdd').replace('{t}', getBookTitle(book)));
  }
  saveSets(); render();
}
function removeFromCollection(e, id) {
  e.stopPropagation();
  const book = ALL_BOOKS.find(b=>b.id===id); if (!book) return;
  store.favourites.delete(id); store.bookmarks.delete(id);
  saveSets(); showToast(t('toastRemove').replace('{t}', getBookTitle(book))); render();
}
function switchTab(tab, btn) {
  state.tab = tab; state.genreFilter = 'all';
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active'); render();
}
function setView(view, btn) {
  state.view = view;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); render();
}
function sortCollection(by) { state.sort = by; render(); }

function showToast(msg) {
  const el = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2800);
}

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', () => {
  onLanguageChange();
  onThemeChange();

  const pEl = document.getElementById('particles');
  if (pEl) {
    const colors = ['#c9a84c','#e8c97a','#f5c2cf','rgba(201,168,76,0.3)','rgba(196,79,106,0.4)'];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      const sz = Math.random() * 3 + 1;
      p.className = 'particle';
      p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${8+Math.random()*12}s;animation-delay:${-Math.random()*15}s;`;
      frag.appendChild(p);
    }
    pEl.appendChild(frag);
  }
  render();
});
