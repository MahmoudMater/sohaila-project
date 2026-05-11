/**
 * book-details-data.js
 * Extension على booksData بتاعة Sara — نفس الـ IDs بالظبط
 * بيضيف: publisher, reviewsCount, prices, previewPages, reviews, relatedBooks
 *
 * طريقة الاستخدام:
 *   <script src="BookPage.js"></script>          ← data سارة الأول
 *   <script src="book-details-data.js"></script> ← ثم الـ extension ده
 *
 * بعدين في book-details.js:
 *   const book    = booksData.find(b => b.id === id);
 *   const details = bookDetailsData[id];
 */
 
const bookDetailsData = {
 
  /* ══════════════════════════════════════════════
     ROMANCE  (101 – 106)
  ══════════════════════════════════════════════ */
 
  101: {
    publisher: "T. Egerton, Whitehall",
    reviewsCount: 520,
    prices: [
      { store: "Amazon",           price: 85,  delivery: "2–3 days",  available: true  },
      { store: "Barnes & Noble",   price: 95,  delivery: "3–5 days",  available: true  },
      { store: "Book Depository",  price: 78,  delivery: "5–7 days",  available: true  },
      { store: "Diwan",            price: 120, delivery: "1–2 days",  available: true  }
    ],
    previewPages: [
      { page: 1, text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife..." },
      { page: 2, text: "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families..." },
      { page: 3, text: "\"My dear Mr. Bennet,\" said his lady to him one day, \"have you heard that Netherfield Park is let at last?\"..." }
    ],
    reviews: [
      { user: "Sara_Reads",    avatar: "S", rating: 5, date: "2024-11-10", comment: "A timeless masterpiece. Darcy and Elizabeth's chemistry is unmatched across all of literature." },
      { user: "BookLover92",   avatar: "B", rating: 5, date: "2024-10-22", comment: "Read it for the fifth time and still noticed new things. Austen was a genius." },
      { user: "ClassicFan",    avatar: "C", rating: 4, date: "2024-09-15", comment: "Beautiful prose and sharp social commentary. Slightly slow in the middle." },
      { user: "Nour_M",        avatar: "N", rating: 5, date: "2024-08-30", comment: "بيقرأ بسهولة مش متوقعتها من كلاسيك قديم. أنصح بيه جداً." },
      { user: "LiteraryMind",  avatar: "L", rating: 4, date: "2024-07-14", comment: "The wit in every sentence is remarkable. A must-read for any book lover." }
    ],
    relatedBooks: [102, 103, 104, 105, 106],
    video: "https://www.youtube.com/embed/1dYv5u6v55Y"

  },
 
  102: {
    publisher: "Thomas Creede",
    reviewsCount: 410,
    prices: [
      { store: "Amazon",          price: 65,  delivery: "2–3 days", available: true  },
      { store: "Barnes & Noble",  price: 72,  delivery: "3–5 days", available: true  },
      { store: "Diwan",           price: 90,  delivery: "1–2 days", available: true  },
      { store: "Jarir",           price: 88,  delivery: "2–4 days", available: false }
    ],
    previewPages: [
      { page: 1, text: "Two households, both alike in dignity, in fair Verona, where we lay our scene..." },
      { page: 2, text: "From ancient grudge break to new mutiny, where civil blood makes civil hands unclean..." },
      { page: 3, text: "A pair of star-crossed lovers take their life; whose misadventured piteous overthrows do with their death bury their parents' strife..." }
    ],
    reviews: [
      { user: "ShakespeareFan", avatar: "S", rating: 5, date: "2024-12-01", comment: "Tragic perfection. Every line resonates with emotion." },
      { user: "DramaLover",     avatar: "D", rating: 4, date: "2024-11-18", comment: "The language is dense but incredibly rewarding once you settle in." },
      { user: "Yasmine_K",      avatar: "Y", rating: 5, date: "2024-10-05", comment: "مش بس قصة حب — ده تعليق على العنف والكراهية اللي بتدمر الناس." },
      { user: "TheaterKid",     avatar: "T", rating: 5, date: "2024-09-20", comment: "Better experienced on stage, but the text alone is magic." }
    ],
    relatedBooks: [101, 103, 302, 304, 601]
  },
 
  103: {
    publisher: "Smith, Elder & Co.",
    reviewsCount: 480,
    prices: [
      { store: "Amazon",          price: 79,  delivery: "2–3 days", available: true },
      { store: "Book Depository", price: 74,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 110, delivery: "1–2 days", available: true },
      { store: "Goodreads Store", price: 82,  delivery: "4–6 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning..." },
      { page: 2, text: "I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight..." },
      { page: 3, text: "\"What does Bessie say I have done?\" I asked. \"Jane, I don't like cavillers or questioners; besides, there is something truly forbidding in a child taking up her elders in that manner...\"" }
    ],
    reviews: [
      { user: "BronteAdmirer",  avatar: "B", rating: 5, date: "2024-11-25", comment: "Jane is one of the most compelling heroines in all of English literature." },
      { user: "GothicReader",   avatar: "G", rating: 5, date: "2024-10-30", comment: "The atmosphere is incredible. You feel the cold and the loneliness." },
      { user: "Malak_H",        avatar: "M", rating: 4, date: "2024-09-12", comment: "شخصية جين إيير قوية جداً وبتلهمك. بعض الأجزاء الدينية طويلة شوية." },
      { user: "RomanceReader",  avatar: "R", rating: 5, date: "2024-08-08", comment: "The love story between Jane and Rochester is complex, passionate, and real." }
    ],
    relatedBooks: [101, 104, 105, 302, 305]
  },
 
  104: {
    publisher: "Thomas Cautley Newby",
    reviewsCount: 360,
    prices: [
      { store: "Amazon",          price: 75,  delivery: "2–3 days",  available: true  },
      { store: "Barnes & Noble",  price: 85,  delivery: "3–5 days",  available: true  },
      { store: "Diwan",           price: 100, delivery: "1–2 days",  available: true  },
      { store: "AbeBooks",        price: 68,  delivery: "7–10 days", available: false }
    ],
    previewPages: [
      { page: 1, text: "I have just returned from a visit to my landlord — the solitary neighbour that I shall be troubled with..." },
      { page: 2, text: "This is certainly a beautiful country! In all England, I do not believe that I could have fixed on a situation so completely removed from the stir of society..." },
      { page: 3, text: "A capital fellow! He little imagined how my heart warmed towards him when I beheld his black eyes withdraw so suspiciously under their brows..." }
    ],
    reviews: [
      { user: "DarkRomance",    avatar: "D", rating: 5, date: "2024-12-10", comment: "Heathcliff is one of the most compelling and terrifying characters ever written." },
      { user: "MoorsWalker",    avatar: "M", rating: 4, date: "2024-11-02", comment: "The setting is as much a character as Heathcliff. Hauntingly beautiful." },
      { user: "Reem_S",         avatar: "R", rating: 4, date: "2024-10-18", comment: "قصة محبطة وبتألمك — بس ده بيخليها عظيمة." },
      { user: "ClassicsNerd",   avatar: "C", rating: 5, date: "2024-09-01", comment: "Brutally honest about love's destructive power. Nothing quite like it." }
    ],
    relatedBooks: [101, 103, 105, 301, 306]
  },
 
  105: {
    publisher: "The Russian Messenger",
    reviewsCount: 440,
    prices: [
      { store: "Amazon",          price: 89,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 99,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 83,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 115, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "All happy families are alike; each unhappy family is unhappy in its own way..." },
      { page: 2, text: "Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue with a French girl..." },
      { page: 3, text: "She had felt that there was no reconciliation possible between them from that moment, and her wrath with him and scorn for herself was terrible..." }
    ],
    reviews: [
      { user: "TolstoyFan",     avatar: "T", rating: 5, date: "2024-11-15", comment: "The most human novel ever written. Anna's tragedy feels utterly real." },
      { user: "RussianLit",     avatar: "R", rating: 5, date: "2024-10-28", comment: "Every character is flawed and fully alive. Tolstoy's genius is on full display." },
      { user: "Dina_A",         avatar: "D", rating: 4, date: "2024-09-22", comment: "الرواية ضخمة لكن كل كلمة فيها بتستحق. شخصية آنا مأساوية وإنسانية جداً." },
      { user: "EpicReader",     avatar: "E", rating: 5, date: "2024-08-15", comment: "One of the greatest novels in any language. Read it slowly." }
    ],
    relatedBooks: [101, 103, 104, 306, 307]
  },
 
  106: {
    publisher: "John Murray",
    reviewsCount: 310,
    prices: [
      { store: "Amazon",          price: 72,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 80,  delivery: "3–5 days", available: true },
      { store: "Diwan",           price: 95,  delivery: "1–2 days", available: true },
      { store: "Jarir",           price: 89,  delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence..." },
      { page: 2, text: "The real evils, indeed, of Emma's situation were the power of having rather too much her own way, and a disposition to think a little too well of herself..." },
      { page: 3, text: "\"I may have lost my heart, but not my self-control.\" Emma smiled and replied that it was very possible to lose both." }
    ],
    reviews: [
      { user: "AustenLover",    avatar: "A", rating: 5, date: "2024-12-05", comment: "Emma grows so much throughout the novel. A satisfying and witty read." },
      { user: "ComedyReader",   avatar: "C", rating: 4, date: "2024-11-20", comment: "Austen's most comedic work. Emma is infuriating but you love her anyway." },
      { user: "Hana_W",         avatar: "H", rating: 5, date: "2024-10-10", comment: "خفيفة ومضحكة وعميقة في نفس الوقت. أوستن عارفة كيف تكتب." },
      { user: "RegencyFan",     avatar: "R", rating: 4, date: "2024-09-05", comment: "Mr. Knightley is the most sensible romantic lead Austen ever created." }
    ],
    relatedBooks: [101, 102, 103, 105, 305]
  },
 
  /* ══════════════════════════════════════════════
     ADVENTURE  (201 – 205)
  ══════════════════════════════════════════════ */
 
  201: {
    publisher: "Francisco de Robles",
    reviewsCount: 390,
    prices: [
      { store: "Amazon",          price: 88,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 98,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 82,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 115, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack..." },
      { page: 2, text: "A gentleman belonging to one of those villages which boast an ancient lineage; his age was bordering on fifty..." },
      { page: 3, text: "He so buried himself in his books that he spent the nights reading from twilight till daybreak, and the days from dawn till dark..." }
    ],
    reviews: [
      { user: "SpanishLit",      avatar: "S", rating: 5, date: "2024-11-30", comment: "The first modern novel and still one of the greatest. Cervantes invented everything." },
      { user: "AdventureFan",    avatar: "A", rating: 4, date: "2024-10-15", comment: "Hilarious and heartbreaking in equal measure. Don Quixote is unforgettable." },
      { user: "Omar_F",          avatar: "O", rating: 4, date: "2024-09-08", comment: "طويل ومحتاج صبر لكن فيه حكمة كتير جداً." },
      { user: "WorldLiterature", avatar: "W", rating: 5, date: "2024-08-20", comment: "A landmark of human imagination. Don't be intimidated by its length." }
    ],
    relatedBooks: [202, 204, 205, 301, 306]
  },
 
  202: {
    publisher: "Ancient Greece (oral tradition)",
    reviewsCount: 450,
    prices: [
      { store: "Amazon",          price: 70,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 79,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 65,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 92,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Tell me, O Muse, of that ingenious hero who travelled far and wide after he had sacked the famous town of Troy..." },
      { page: 2, text: "Many cities did he visit, and many were the nations with whose manners and customs he was acquainted..." },
      { page: 3, text: "Moreover he suffered much by sea while trying to save his own life and bring his men safely home..." }
    ],
    reviews: [
      { user: "GreekMythFan",   avatar: "G", rating: 5, date: "2024-12-08", comment: "The original adventure story. Every hero since Odysseus owes him something." },
      { user: "EpicPoetry",     avatar: "E", rating: 5, date: "2024-11-10", comment: "Read the Fagles translation — it flows like music." },
      { user: "Laila_M",        avatar: "L", rating: 4, date: "2024-10-02", comment: "ملحمة خيالية. أوديسيوس شخصية مركبة جداً — ذكي ومحب للحياة في نفس الوقت." },
      { user: "ClassicsProf",   avatar: "C", rating: 5, date: "2024-09-14", comment: "As relevant today as it was 3000 years ago. The journey home is eternal." }
    ],
    relatedBooks: [205, 203, 601, 602, 303]
  },
 
  203: {
    publisher: "Harper & Brothers",
    reviewsCount: 320,
    prices: [
      { store: "Amazon",          price: 82,  delivery: "2–3 days",  available: true  },
      { store: "Barnes & Noble",  price: 90,  delivery: "3–5 days",  available: true  },
      { store: "AbeBooks",        price: 75,  delivery: "7–10 days", available: true  },
      { store: "Diwan",           price: 108, delivery: "1–2 days",  available: false }
    ],
    previewPages: [
      { page: 1, text: "Call me Ishmael. Some years ago — never mind how long precisely — having little money in my purse and nothing particular to interest me on shore..." },
      { page: 2, text: "I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation..." },
      { page: 3, text: "Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul... then I account it high time to get to sea as soon as I can." }
    ],
    reviews: [
      { user: "SeaReader",      avatar: "S", rating: 4, date: "2024-11-22", comment: "Dense and extraordinary. The chapters on whale biology are surprisingly fascinating." },
      { user: "MelvilleFan",    avatar: "M", rating: 5, date: "2024-10-10", comment: "\"Call me Ishmael\" — the greatest opening three words in literature." },
      { user: "Ahmed_R",        avatar: "A", rating: 3, date: "2024-09-25", comment: "صعب في البداية بس بيستحق. أهاب شخصية لا تُنسى." },
      { user: "OceanLover",     avatar: "O", rating: 4, date: "2024-08-12", comment: "More than a whale hunt — it's an obsession, a philosophy, and a poem." }
    ],
    relatedBooks: [202, 204, 205, 201, 601]
  },
 
  204: {
    publisher: "Pétion",
    reviewsCount: 580,
    prices: [
      { store: "Amazon",          price: 92,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 105, delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 88,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 130, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "On the 24th of February 1815, the look-out at Notre-Dame de la Garde signalled the three-master, the Pharaon from Smyrna, Trieste, and Naples..." },
      { page: 2, text: "As usual, a pilot put off immediately, and rounding the Château d'If, got on board the vessel between Cape Morgiou and Rion island..." },
      { page: 3, text: "Behind him, and clinging to his arm, was a young and beautiful girl, with hair as black as jet, eyes as velvety as the gazelle's..." }
    ],
    reviews: [
      { user: "RevengeFan",     avatar: "R", rating: 5, date: "2024-12-15", comment: "The greatest revenge story ever told. Dantès is the ultimate hero." },
      { user: "DumasFan",       avatar: "D", rating: 5, date: "2024-11-28", comment: "I could not put it down. 1200 pages felt like nothing." },
      { user: "Farah_T",        avatar: "F", rating: 5, date: "2024-10-20", comment: "الانتقام بيتحول لحاجة أعمق بكتير — درس في العدالة والأخلاق." },
      { user: "EpicAdventure",  avatar: "E", rating: 5, date: "2024-09-18", comment: "Perfect pacing, perfect characters, perfect plot. A masterpiece of plotting." }
    ],
    relatedBooks: [201, 202, 203, 301, 302]
  },
 
  205: {
    publisher: "Ancient Greece (oral tradition)",
    reviewsCount: 370,
    prices: [
      { store: "Amazon",          price: 68,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 76,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 63,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 88,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Sing, O goddess, the anger of Achilles son of Peleus, that brought countless ills upon the Achaeans..." },
      { page: 2, text: "Many a brave soul did it send hurrying down to Hades, and many a hero did it yield a prey to dogs and vultures..." },
      { page: 3, text: "For so the will of Zeus was accomplished, from the day on which the son of Atreus, king of men, and great Achilles first fell out with one another." }
    ],
    reviews: [
      { user: "TroyFan",        avatar: "T", rating: 5, date: "2024-11-05", comment: "The rage of Achilles is one of the most powerful forces in all of literature." },
      { user: "WarAndWords",    avatar: "W", rating: 4, date: "2024-10-22", comment: "Homer makes you feel the weight of every battle. Devastating and beautiful." },
      { user: "Karim_N",        avatar: "K", rating: 4, date: "2024-09-30", comment: "حرب طروادة بتتحول لتأمل في البطولة والخسارة. أكبر من مجرد قصة حرب." },
      { user: "EpicPoetry2",    avatar: "E", rating: 5, date: "2024-08-25", comment: "Read alongside the Odyssey for the full experience." }
    ],
    relatedBooks: [202, 203, 201, 601, 602]
  },
 
  /* ══════════════════════════════════════════════
     CLASSICS  (301 – 307)
  ══════════════════════════════════════════════ */
 
  301: {
    publisher: "A. Lacroix, Verboeckhoven & Cie.",
    reviewsCount: 620,
    prices: [
      { store: "Amazon",          price: 95,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 108, delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 90,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 140, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "An obscure man from Faverolles. His name was Jean Valjean. He was the son of a peasant of Brie..." },
      { page: 2, text: "He had a younger sister and seven children. He worked to support them. He had never thought of anything beyond this work..." },
      { page: 3, text: "One winter, he had no work; the family had no bread. He stole a loaf. He was arrested and sentenced to five years in the galleys." }
    ],
    reviews: [
      { user: "HugoFan",        avatar: "H", rating: 5, date: "2024-12-20", comment: "The most emotionally powerful novel I have ever read. Jean Valjean is unforgettable." },
      { user: "FrenchLit",      avatar: "F", rating: 5, date: "2024-11-14", comment: "Victor Hugo writes with the force of a thunderstorm. Every page is meaningful." },
      { user: "Amira_G",        avatar: "A", rating: 5, date: "2024-10-08", comment: "فانتين وجان فالجان — ما تقرأش رواية زيها. هتبكي وهتتأمل ساعات بعدها." },
      { user: "JusticeReader",  avatar: "J", rating: 5, date: "2024-09-03", comment: "A monument to human dignity and the fight for justice." }
    ],
    relatedBooks: [302, 304, 305, 306, 201]
  },
 
  302: {
    publisher: "Nicholas Ling & John Trundell",
    reviewsCount: 490,
    prices: [
      { store: "Amazon",          price: 70,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 78,  delivery: "3–5 days", available: true },
      { store: "Diwan",           price: 95,  delivery: "1–2 days", available: true },
      { store: "Jarir",           price: 92,  delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Who's there? Nay, answer me. Stand and unfold yourself. Long live the King! Barnardo? He. You come most carefully upon your hour..." },
      { page: 2, text: "For this relief much thanks. 'Tis bitter cold, and I am sick at heart..." },
      { page: 3, text: "To be, or not to be — that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune..." }
    ],
    reviews: [
      { user: "HamletFan",      avatar: "H", rating: 5, date: "2024-12-12", comment: "To be or not to be is still the most profound question ever put on a stage." },
      { user: "TheaterLover",   avatar: "T", rating: 5, date: "2024-11-08", comment: "Every actor dreams of playing Hamlet. The role of a lifetime." },
      { user: "Salma_K",        avatar: "S", rating: 4, date: "2024-10-14", comment: "الصراع الداخلي لهاملت بيتكلم عن كل إنسان في أي زمن." },
      { user: "PhilosophyFan",  avatar: "P", rating: 5, date: "2024-09-28", comment: "More philosophy packed into one play than most books manage in 500 pages." }
    ],
    relatedBooks: [102, 301, 304, 305, 601]
  },
 
  303: {
    publisher: "Petrocchi edition (1966 critical standard)",
    reviewsCount: 350,
    prices: [
      { store: "Amazon",          price: 85,  delivery: "2–3 days",  available: true  },
      { store: "Barnes & Noble",  price: 95,  delivery: "3–5 days",  available: true  },
      { store: "Book Depository", price: 80,  delivery: "5–7 days",  available: true  },
      { store: "AbeBooks",        price: 72,  delivery: "7–10 days", available: false }
    ],
    previewPages: [
      { page: 1, text: "Midway upon the journey of our life I found myself within a forest dark, for the straightforward pathway had been lost..." },
      { page: 2, text: "Ah me! how hard a thing it is to say what was this forest savage, rough, and stern, which in the very thought renews the fear..." },
      { page: 3, text: "So bitter is it, death is little more; but of the good to treat, which there I found, speak will I of the other things I saw there." }
    ],
    reviews: [
      { user: "DanteFan",       avatar: "D", rating: 5, date: "2024-11-18", comment: "The greatest poem ever written. Inferno alone is worth a lifetime of reading." },
      { user: "ItalianLit",     avatar: "I", rating: 5, date: "2024-10-25", comment: "Dante's imagination is simply boundless. Hell has never been so vivid." },
      { user: "Nadia_S",        avatar: "N", rating: 4, date: "2024-09-16", comment: "محتاج صبر ومعرفة بالتاريخ، لكن الجحيم بتاع دانتي مش هتنساه." },
      { user: "CosmologyFan",   avatar: "C", rating: 5, date: "2024-08-09", comment: "A vision of the afterlife that changed Western civilization." }
    ],
    relatedBooks: [602, 601, 304, 302, 205]
  },
 
  304: {
    publisher: "Gabriel Cramer, Geneva",
    reviewsCount: 280,
    prices: [
      { store: "Amazon",          price: 65,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 72,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 60,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 85,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "In the castle of Baron Thunder-ten-Tronckh in Westphalia, there once lived a youth endowed by nature with a most sweet disposition..." },
      { page: 2, text: "His face was the true index of his mind. His judgment was quite honest and his understanding simple; this is the reason, I apprehend, that he had the name of Candide..." },
      { page: 3, text: "One day Cunégonde, while walking near the castle in the little wood which they called a park, observed, between the bushes, the Doctor Pangloss giving a lesson in experimental physics..." }
    ],
    reviews: [
      { user: "VoltaireFan",    avatar: "V", rating: 5, date: "2024-12-03", comment: "Savage satire with a warm heart. Voltaire skewers optimism brilliantly." },
      { user: "PhilosoReader",  avatar: "P", rating: 4, date: "2024-11-12", comment: "Short, sharp, and funny. Perfect intro to Enlightenment thought." },
      { user: "Heba_F",         avatar: "H", rating: 4, date: "2024-10-05", comment: "سخرية لاذعة على التفاؤل الساذج — مازال ذو صلة اليوم." },
      { user: "SatireLover",    avatar: "S", rating: 5, date: "2024-09-19", comment: "\"Il faut cultiver notre jardin\" — advice that still holds today." }
    ],
    relatedBooks: [301, 302, 305, 306, 201]
  },
 
  305: {
    publisher: "Chapman & Hall",
    reviewsCount: 340,
    prices: [
      { store: "Amazon",          price: 78,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 87,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 73,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 105, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip..." },
      { page: 2, text: "So, I called myself Pip, and came to be called Pip. I give Pirrip as my father's family name, on the authority of his tombstone and my sister..." },
      { page: 3, text: "Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things..." }
    ],
    reviews: [
      { user: "DickensFan",     avatar: "D", rating: 5, date: "2024-11-30", comment: "Pip's growth from boy to man is one of Dickens' finest achievements." },
      { user: "VictorianLit",   avatar: "V", rating: 4, date: "2024-10-22", comment: "The social commentary is biting. Miss Havisham alone is worth the read." },
      { user: "Mona_E",         avatar: "M", rating: 4, date: "2024-09-10", comment: "قصة نضج جميلة — بيب بيتعلم الحياة بالطريقة الصعبة." },
      { user: "ClassicEnglish", avatar: "C", rating: 5, date: "2024-08-28", comment: "The ending is perfect in its ambiguity. Dickens at the height of his powers." }
    ],
    relatedBooks: [103, 106, 301, 304, 306]
  },
 
  306: {
    publisher: "The Russian Messenger",
    reviewsCount: 500,
    prices: [
      { store: "Amazon",          price: 98,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 112, delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 93,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 145, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn you, if you don't tell me that this means war..." },
      { page: 2, text: "If you don't tell me that we are going to fight I will start no acquaintance with you, I will leave off knowing you. Come, I see I am frightening you, sit down and tell me all the news." },
      { page: 3, text: "It was in July 1805, and the speaker was the well-known Anna Pavlovna Schérer, maid of honour and favourite of the Empress Marya Feodorovna." }
    ],
    reviews: [
      { user: "TolstoyFan2",    avatar: "T", rating: 5, date: "2024-12-18", comment: "The most ambitious novel ever written. Napoleon and the human spirit side by side." },
      { user: "RussianLit2",    avatar: "R", rating: 5, date: "2024-11-05", comment: "Pierre Bezukhov's spiritual journey is one of literature's greatest arcs." },
      { user: "Yasmin_H",       avatar: "Y", rating: 4, date: "2024-10-15", comment: "ضخمة جداً وفيها شخصيات كتيرة، لكن لو صبرت هتقرأ واحدة من أعظم الروايات." },
      { user: "EpicLiterature", avatar: "E", rating: 5, date: "2024-09-08", comment: "Tolstoy understood war, love, and death better than anyone." }
    ],
    relatedBooks: [105, 301, 304, 307, 201]
  },
 
  307: {
    publisher: "The Russian Messenger",
    reviewsCount: 420,
    prices: [
      { store: "Amazon",          price: 90,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 102, delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 85,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 130, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "All happy families are alike; each unhappy family is unhappy in its own way..." },
      { page: 2, text: "Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue..." },
      { page: 3, text: "Anna's beauty struck everyone who saw her. Even those who did not know her felt it." }
    ],
    reviews: [
      { user: "TolstoyFan3",    avatar: "T", rating: 5, date: "2024-11-22", comment: "Anna is one of the most fully realized characters in world literature." },
      { user: "SocietyReader",  avatar: "S", rating: 5, date: "2024-10-18", comment: "Society destroys Anna — and Tolstoy makes you feel every blow." },
      { user: "Dalia_M",        avatar: "D", rating: 4, date: "2024-09-12", comment: "شخصية آنا مأساوية جداً وبتأثر فيك حتى بعد ما تخلص الرواية." },
      { user: "FateReader",     avatar: "F", rating: 5, date: "2024-08-05", comment: "The train is one of the most powerful symbols in all of fiction." }
    ],
    relatedBooks: [105, 306, 103, 104, 301]
  },
 
  /* ══════════════════════════════════════════════
     MYSTERY  (501 – 504)
  ══════════════════════════════════════════════ */
 
  501: {
    publisher: "Lackington, Hughes, Harding, Mavor & Jones",
    reviewsCount: 400,
    prices: [
      { store: "Amazon",          price: 74,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 82,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 69,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 98,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings..." },
      { page: 2, text: "I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves..." },
      { page: 3, text: "I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight." }
    ],
    reviews: [
      { user: "ScienceFiction",  avatar: "S", rating: 5, date: "2024-12-05", comment: "The original sci-fi novel, and still one of the most morally complex." },
      { user: "ShelleyFan",      avatar: "S", rating: 5, date: "2024-11-19", comment: "Who is the real monster — the creature or its creator? Still no easy answer." },
      { user: "Rana_T",          avatar: "R", rating: 4, date: "2024-10-10", comment: "مخيف ومؤثر في نفس الوقت. سؤال المسؤولية الأخلاقي مازال ضروري." },
      { user: "GothicLit",       avatar: "G", rating: 5, date: "2024-09-22", comment: "Mary Shelley wrote this at 18. Truly astonishing." }
    ],
    relatedBooks: [502, 503, 504, 401, 403]
  },
 
  502: {
    publisher: "John Murray",
    reviewsCount: 260,
    prices: [
      { store: "Amazon",          price: 68,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 75,  delivery: "3–5 days", available: true },
      { store: "Diwan",           price: 90,  delivery: "1–2 days", available: true },
      { store: "Jarir",           price: 87,  delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "No one who had ever seen Catherine Morland in her infancy would have supposed her born to be an heroine..." },
      { page: 2, text: "Her father was a clergyman, without being neglected or poor, and a very respectable man, though his name was Richard — and he had never been handsome..." },
      { page: 3, text: "She had a thin awkward figure, a sallow skin without colour, dark lank hair, and strong features; so much for her person..." }
    ],
    reviews: [
      { user: "AustenFan2",     avatar: "A", rating: 4, date: "2024-11-28", comment: "Austen poking fun at Gothic fiction while writing it. Delightful." },
      { user: "GothicSatire",   avatar: "G", rating: 4, date: "2024-10-20", comment: "Catherine is endearingly naive. A charming and underrated Austen novel." },
      { user: "Eman_H",         avatar: "E", rating: 4, date: "2024-09-05", comment: "خفيفة ومضحكة — أوستن بتسخر من روايات الرعب وهي بتكتب واحدة." },
      { user: "EarlyAusten",    avatar: "E", rating: 3, date: "2024-08-18", comment: "Not her best but full of wit and early signs of her genius." }
    ],
    relatedBooks: [101, 106, 501, 503, 504]
  },
 
  503: {
    publisher: "George Newnes",
    reviewsCount: 460,
    prices: [
      { store: "Amazon",          price: 80,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 89,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 75,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 110, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Mr. Holmes, they were the footprints of a gigantic hound! That was the beginning of the strange case which I have called The Hound of the Baskervilles..." },
      { page: 2, text: "A long black shadow fell upon the moonlit moor, and in the distance a dark figure hurried silently away..." },
      { page: 3, text: "The great Grimpen Mire lay before us, black and mysterious under the silver light of the moon. A single false step..." }
    ],
    reviews: [
      { user: "SherlockFan",    avatar: "S", rating: 5, date: "2024-12-10", comment: "The best Sherlock Holmes novel. The moors are terrifyingly atmospheric." },
      { user: "MysteryLover",   avatar: "M", rating: 5, date: "2024-11-25", comment: "Conan Doyle at his absolute best. The tension never lets up." },
      { user: "Hana_R",         avatar: "H", rating: 5, date: "2024-10-18", comment: "شيرلوك هولمز في أفضل حالاته — غموض ورعب وذكاء خارق." },
      { user: "DetectiveFan",   avatar: "D", rating: 4, date: "2024-09-12", comment: "The atmosphere of Dartmoor is like a fifth character in the story." }
    ],
    relatedBooks: [501, 502, 504, 401, 403]
  },
 
  504: {
    publisher: "Collins Crime Club",
    reviewsCount: 520,
    prices: [
      { store: "Amazon",          price: 77,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 85,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 72,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 100, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Ten little Soldier boys went out to dine; one choked his little self and then there were nine..." },
      { page: 2, text: "Ten little Soldier boys sat up very late; one overslept himself and then there were eight..." },
      { page: 3, text: "They were cut off from the mainland. There was no boat. The killer was among them. And then there were seven." }
    ],
    reviews: [
      { user: "ChristieFan",    avatar: "C", rating: 5, date: "2024-12-18", comment: "The most perfect mystery novel ever written. The twist is still jaw-dropping." },
      { user: "ThrillerFan",    avatar: "T", rating: 5, date: "2024-11-10", comment: "I read it twice just to see how Christie planted the clues. Genius." },
      { user: "Sara_M",         avatar: "S", rating: 5, date: "2024-10-25", comment: "النهاية مذهلة — مش هتتوقعها حتى لو حاولت. كريستي عبقرية." },
      { user: "IslandMystery",  avatar: "I", rating: 5, date: "2024-09-20", comment: "Best-selling mystery novel of all time for good reason." }
    ],
    relatedBooks: [501, 502, 503, 401, 403]
  },
 
  /* ══════════════════════════════════════════════
     POETRY  (601 – 603)
  ══════════════════════════════════════════════ */
 
  601: {
    publisher: "Samuel Simmons",
    reviewsCount: 310,
    prices: [
      { store: "Amazon",          price: 72,  delivery: "2–3 days",  available: true  },
      { store: "Barnes & Noble",  price: 80,  delivery: "3–5 days",  available: true  },
      { store: "Book Depository", price: 67,  delivery: "5–7 days",  available: true  },
      { store: "AbeBooks",        price: 60,  delivery: "7–10 days", available: false }
    ],
    previewPages: [
      { page: 1, text: "Of Man's first disobedience, and the fruit of that forbidden tree whose mortal taste brought death into the world, and all our woe..." },
      { page: 2, text: "With loss of Eden, till one greater Man restore us, and regain the blissful seat, sing, Heavenly Muse..." },
      { page: 3, text: "Better to reign in Hell, than serve in Heaven. These words of Satan echoed across the vast darkness of the abyss." }
    ],
    reviews: [
      { user: "MiltonFan",      avatar: "M", rating: 5, date: "2024-11-20", comment: "Satan's speeches are among the most electrifying passages in English poetry." },
      { user: "EpicPoet",       avatar: "E", rating: 4, date: "2024-10-15", comment: "Dense but magnificent. The scope of Milton's imagination is staggering." },
      { user: "Noha_K",         avatar: "N", rating: 4, date: "2024-09-08", comment: "شيطان ميلتون أقوى شخصية في القصيدة — كاريزماتي ومخيف في نفس الوقت." },
      { user: "TheologicalLit", avatar: "T", rating: 5, date: "2024-08-12", comment: "A profound meditation on free will, obedience, and the nature of evil." }
    ],
    relatedBooks: [602, 603, 303, 202, 205]
  },
 
  602: {
    publisher: "Ancient Rome",
    reviewsCount: 280,
    prices: [
      { store: "Amazon",          price: 68,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 75,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 63,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 88,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "I sing of arms and the man, who first from the shores of Troy, exiled by fate, came to Italy and the Lavinian coast..." },
      { page: 2, text: "Much buffeted on sea and land by violence from above, through the enmity of fierce Juno, long suffering also in war..." },
      { page: 3, text: "Until he could found a city, and bring his gods to Latium; whence the Latin race, the Alban fathers, and the lofty walls of Rome." }
    ],
    reviews: [
      { user: "VirgilFan",      avatar: "V", rating: 5, date: "2024-11-15", comment: "Virgil answers Homer with equal grandeur. Aeneas carries the weight of destiny." },
      { user: "LatinLit",       avatar: "L", rating: 4, date: "2024-10-08", comment: "The Dido and Aeneas episode is heartbreaking. Duty vs. love perfectly rendered." },
      { user: "Rima_F",         avatar: "R", rating: 4, date: "2024-09-01", comment: "ملحمة رائعة عن تأسيس روما — مليانة تضحية وقدر لا مفر منه." },
      { user: "RomanLit",       avatar: "R", rating: 5, date: "2024-08-20", comment: "Read it in Latin if you can. The music of the verse is extraordinary." }
    ],
    relatedBooks: [202, 205, 601, 603, 303]
  },
 
  603: {
    publisher: "J.G. Cotta",
    reviewsCount: 290,
    prices: [
      { store: "Amazon",          price: 75,  delivery: "2–3 days",  available: true  },
      { store: "Barnes & Noble",  price: 84,  delivery: "3–5 days",  available: true  },
      { store: "Book Depository", price: 70,  delivery: "5–7 days",  available: true  },
      { store: "AbeBooks",        price: 65,  delivery: "7–10 days", available: false }
    ],
    previewPages: [
      { page: 1, text: "I have, alas! Philosophy, Medicine, Jurisprudence too, and to my cost Theology studied, through and through..." },
      { page: 2, text: "And here I am, for all my lore, the wretched fool I was before. A Doctor of Philosophy, of Medicine, and Law..." },
      { page: 3, text: "Mephistopheles appeared from the shadows. 'What will you offer,' he asked, 'for all the world's knowledge and all its pleasures?'" }
    ],
    reviews: [
      { user: "GoetheFan",      avatar: "G", rating: 5, date: "2024-12-02", comment: "The greatest German literary work. Faust's bargain feels universally human." },
      { user: "GermanLit",      avatar: "G", rating: 4, date: "2024-11-08", comment: "Part I is magnificent. The Walpurgis Night scene is hauntingly beautiful." },
      { user: "Lina_M",         avatar: "L", rating: 4, date: "2024-10-15", comment: "فاوست وميفيستوفيليس — تعاقد مع الشيطان بيكشف أعمق طموحات الإنسان." },
      { user: "PhilosoPoetry",  avatar: "P", rating: 5, date: "2024-09-09", comment: "Goethe spent 60 years on this. You can feel every year in every line." }
    ],
    relatedBooks: [601, 602, 303, 304, 302]
  },
 
  /* ══════════════════════════════════════════════
     CARTOON  (701 – 715)
  ══════════════════════════════════════════════ */
 
  701: {
    publisher: "Dargaud",
    reviewsCount: 540,
    prices: [
      { store: "Amazon",          price: 65,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 72,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 60,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 85,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "The year is 50 BC. Gaul is entirely occupied by the Romans. Well, not entirely..." },
      { page: 2, text: "One small village of indomitable Gauls still holds out against the invaders. And life is not easy for the Roman legionaries who garrison the fortified camps..." },
      { page: 3, text: "Asterix takes a sip of magic potion. His muscles swell. He cracks his knuckles. The Roman soldier backs away slowly..." }
    ],
    reviews: [
      { user: "ComicFan",       avatar: "C", rating: 5, date: "2024-12-15", comment: "Timeless humor with sharp political wit. Every album is a joy." },
      { user: "FrenchComic",    avatar: "F", rating: 5, date: "2024-11-22", comment: "The Latin puns alone are worth the price of admission." },
      { user: "Khaled_A",       avatar: "K", rating: 5, date: "2024-10-30", comment: "أستريكس وأوبيليكس من أجمل شخصيات الكوميكس في التاريخ. مش هتملها." },
      { user: "AllAges",        avatar: "A", rating: 5, date: "2024-09-15", comment: "Adults and children love it for completely different reasons. Genius." }
    ],
    relatedBooks: [702, 703, 704, 705, 715]
  },
 
  702: {
    publisher: "Casterman",
    reviewsCount: 490,
    prices: [
      { store: "Amazon",          price: 68,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 75,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 63,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 90,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Tintin and Snowy arrive in a foreign port, their eyes wide with curiosity and adventure. The city hums with danger and intrigue..." },
      { page: 2, text: "Great snakes! Someone has stolen the mysterious artifact from the museum. Tintin examines the clues with his trademark determination..." },
      { page: 3, text: "'Don't worry, Snowy,' Tintin said confidently. 'We'll get to the bottom of this!' Snowy wagged his tail skeptically." }
    ],
    reviews: [
      { user: "TintinFan",      avatar: "T", rating: 5, date: "2024-11-30", comment: "Hergé created the gold standard for adventure comics. Every album is a gem." },
      { user: "BelgianComic",   avatar: "B", rating: 5, date: "2024-10-25", comment: "Snowy is the real hero. Tintin just provides the backdrop." },
      { user: "Mariam_S",       avatar: "M", rating: 5, date: "2024-09-20", comment: "تان تان صحبة طفولتي — الرسومات والقصص لا تُنسى أبداً." },
      { user: "AdventureKid",   avatar: "A", rating: 4, date: "2024-08-15", comment: "Some albums aged better than others, but the classics are masterpieces." }
    ],
    relatedBooks: [701, 703, 704, 708, 709]
  },
 
  703: {
    publisher: "Dupuis",
    reviewsCount: 380,
    prices: [
      { store: "Amazon", price: 62, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 82, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Lucky Luke rides into town faster than his own shadow..." }
    ],
    reviews: [
      { user: "WesternFan", avatar: "W", rating: 5, date: "2024-11-10", comment: "The funniest western ever drawn." },
      { user: "Ahmed_L",    avatar: "A", rating: 4, date: "2024-10-05", comment: "لاكي لوك بطل لا يُقهر — ومضحك في نفس الوقت." }
    ],
    relatedBooks: [701, 702, 704, 705, 708]
  },
 
  704: {
    publisher: "Dupuis",
    reviewsCount: 420,
    prices: [
      { store: "Amazon", price: 60, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 80, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "La, la, la! The Smurfs dance in their mushroom village under the morning sun..." }
    ],
    reviews: [
      { user: "SmurfFan", avatar: "S", rating: 5, date: "2024-12-01", comment: "Pure joy for all ages. The Smurfs are timeless." },
      { user: "Nora_K",   avatar: "N", rating: 5, date: "2024-11-01", comment: "السنافر جزء من ذكريات كل طفولة." }
    ],
    relatedBooks: [701, 702, 703, 708, 711]
  },
 
  705: {
    publisher: "Dell Comics",
    reviewsCount: 400,
    prices: [
      { store: "Amazon", price: 58, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 78, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Donald Duck, fuming as always, chases his nephews around Duckburg..." }
    ],
    reviews: [
      { user: "DonaldFan", avatar: "D", rating: 5, date: "2024-11-20", comment: "Carl Barks was a genius. Donald is one of the greatest comic characters." },
      { user: "Tarek_M",   avatar: "T", rating: 4, date: "2024-10-15", comment: "دونالد داك مش بس شخصية أطفال — في عمق كوميدي حقيقي." }
    ],
    relatedBooks: [701, 702, 704, 708, 712]
  },
 
  706: {
    publisher: "United Feature Syndicate",
    reviewsCount: 460,
    prices: [
      { store: "Amazon", price: 55, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 75, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Monday. The alarm rings. Garfield opens one eye, stares at it, and goes back to sleep..." }
    ],
    reviews: [
      { user: "GarfieldFan", avatar: "G", rating: 5, date: "2024-12-08", comment: "Garfield hates Mondays so we don't have to." },
      { user: "Hend_A",      avatar: "H", rating: 5, date: "2024-11-05", comment: "جارفيلد بيعبر عننا كلنا في يوم الاثنين." }
    ],
    relatedBooks: [701, 705, 707, 708, 711]
  },
 
  707: {
    publisher: "Universal Press Syndicate",
    reviewsCount: 530,
    prices: [
      { store: "Amazon", price: 72, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 92, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Calvin looked at the blank page. Hobbes looked at Calvin. 'You know,' said Hobbes, 'some things are better left unimagined.'" }
    ],
    reviews: [
      { user: "CalvinFan", avatar: "C", rating: 5, date: "2024-12-20", comment: "The most philosophical comic strip ever created. I cry every time I read the last strip." },
      { user: "Rania_G",   avatar: "R", rating: 5, date: "2024-11-18", comment: "كالفن وهوبز ليس مجرد كارتون — فلسفة حياة كاملة." }
    ],
    relatedBooks: [706, 708, 703, 702, 715]
  },
 
  708: {
    publisher: "United Feature Syndicate",
    reviewsCount: 480,
    prices: [
      { store: "Amazon", price: 60, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 82, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Good grief! Charlie Brown missed the football again. Lucy laughed. The world kept turning..." }
    ],
    reviews: [
      { user: "SnoopyFan", avatar: "S", rating: 5, date: "2024-12-12", comment: "Snoopy and Charlie Brown are America's soul on paper." },
      { user: "Mona_L",    avatar: "M", rating: 5, date: "2024-11-08", comment: "بيناتس بيعلمك إزاي تقبل الحياة بكل تعقيداتها." }
    ],
    relatedBooks: [706, 707, 705, 702, 711]
  },
 
  709: {
    publisher: "King Features Syndicate",
    reviewsCount: 290,
    prices: [
      { store: "Amazon", price: 55, delivery: "2–3 days", available: true  },
      { store: "Diwan",  price: 75, delivery: "1–2 days", available: false }
    ],
    previewPages: [
      { page: 1, text: "The Ghost Who Walks emerges from the jungle. Evil trembles. The Phantom has arrived..." }
    ],
    reviews: [
      { user: "PhantomFan", avatar: "P", rating: 4, date: "2024-10-18", comment: "The original superhero before superheroes existed." },
      { user: "Sami_K",     avatar: "S", rating: 4, date: "2024-09-10", comment: "الفانتوم بطل كلاسيكي لا يُنسى." }
    ],
    relatedBooks: [714, 715, 702, 701, 703]
  },
 
  710: {
    publisher: "Hanna-Barbera",
    reviewsCount: 440,
    prices: [
      { store: "Amazon", price: 52, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 70, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Tom crept silently across the kitchen floor. Jerry sat at the table, eating cheese and reading the newspaper..." }
    ],
    reviews: [
      { user: "TomJerryFan", avatar: "T", rating: 5, date: "2024-11-28", comment: "The ultimate cat-and-mouse comedy. Never gets old." },
      { user: "Ali_M",       avatar: "A", rating: 5, date: "2024-10-22", comment: "توم وجيري ذكريات كل جيل." }
    ],
    relatedBooks: [706, 708, 704, 711, 712]
  },
 
  711: {
    publisher: "Hanna-Barbera",
    reviewsCount: 360,
    prices: [
      { store: "Amazon", price: 55, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 75, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Zoinks! Scooby-Doo hid behind Shaggy as they crept through the haunted mansion..." }
    ],
    reviews: [
      { user: "ScoobyFan", avatar: "S", rating: 4, date: "2024-11-12", comment: "The monster always turns out to be a human. But somehow it never gets old." },
      { user: "Dina_K",    avatar: "D", rating: 4, date: "2024-10-08", comment: "سكوبي دو جزء لا يُنسى من طفولتنا." }
    ],
    relatedBooks: [710, 704, 708, 709, 715]
  },
 
  712: {
    publisher: "King Features Syndicate",
    reviewsCount: 310,
    prices: [
      { store: "Amazon", price: 50, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 68, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "I yam what I yam and that's all that I yam! Popeye flexed, swallowed his spinach, and took flight..." }
    ],
    reviews: [
      { user: "PopeyeFan", avatar: "P", rating: 4, date: "2024-11-05", comment: "Popeye is genuinely funny and the Olive Oyl dynamic is comedy gold." },
      { user: "Sama_T",    avatar: "S", rating: 4, date: "2024-09-25", comment: "بوباي رمز الإرادة والشجاعة لأجيال كثيرة." }
    ],
    relatedBooks: [710, 709, 714, 705, 703]
  },
 
  713: {
    publisher: "MLJ Comics / Archie Comics",
    reviewsCount: 340,
    prices: [
      { store: "Amazon", price: 58, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 78, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Riverdale High — where the biggest crisis was choosing between Betty and Veronica, and the biggest threat was Principal Weatherbee..." }
    ],
    reviews: [
      { user: "ArchieFan", avatar: "A", rating: 4, date: "2024-11-22", comment: "The quintessential high school comic. Betty vs. Veronica is eternal." },
      { user: "Nour_A",    avatar: "N", rating: 4, date: "2024-10-15", comment: "ريفيرديل عالم ممتع لا يتقادم." }
    ],
    relatedBooks: [708, 706, 710, 714, 715]
  },
 
  714: {
    publisher: "All American Publications / DC Comics",
    reviewsCount: 430,
    prices: [
      { store: "Amazon", price: 72, delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 95, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Diana of Themyscira stepped off her invisible plane onto the streets of Man's World for the first time..." }
    ],
    reviews: [
      { user: "WonderWomanFan", avatar: "W", rating: 5, date: "2024-12-18", comment: "Wonder Woman is everything a hero should be — strong, compassionate, and wise." },
      { user: "Roaa_K",         avatar: "R", rating: 5, date: "2024-11-15", comment: "وندر وومان رمز قوة المرأة في عالم الكوميكس." }
    ],
    relatedBooks: [715, 709, 701, 702, 713]
  },
 
  715: {
    publisher: "Marvel Comics",
    reviewsCount: 590,
    prices: [
      { store: "Amazon",         price: 75,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble", price: 85,  delivery: "3–5 days", available: true },
      { store: "Diwan",          price: 100, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "With great power comes great responsibility. Peter Parker learned this the hardest way possible..." }
    ],
    reviews: [
      { user: "SpiderFan",  avatar: "S", rating: 5, date: "2024-12-22", comment: "The most relatable superhero ever created. Peter Parker is all of us." },
      { user: "Youssef_M",  avatar: "Y", rating: 5, date: "2024-11-20", comment: "سبايدرمان مش بس بطل — هو كل شاب بيحاول يتحمل مسؤولياته." },
      { user: "MarvelFan",  avatar: "M", rating: 5, date: "2024-10-18", comment: "Stan Lee's greatest creation. The character still feels fresh 60 years on." }
    ],
    relatedBooks: [714, 709, 701, 702, 707]
  },
 
  /* ══════════════════════════════════════════════
     FICTION BOOKS  (901 – 905 + 1002, 1003)
  ══════════════════════════════════════════════ */
 
  901: {
    publisher: "Dar Al-Adab",
    reviewsCount: 310,
    prices: [
      { store: "Amazon", price: 95,  delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 120, delivery: "1–2 days", available: true },
      { store: "Jarir",  price: 110, delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "في مملكة البلاغة، حيث الكلمات تبني الجدران وتحرك الجبال، وُلدت طفلة بقوة لم يشهد العالم مثلها..." }
    ],
    reviews: [
      { user: "HananFan",     avatar: "H", rating: 5, date: "2024-12-10", comment: "عالم فنتازيا عربي حقيقي — هنان لاشين أثبتت أننا نقدر نعمل أدب خيالي عالمي." },
      { user: "ArabicFantasy", avatar: "A", rating: 5, date: "2024-11-25", comment: "إيكادولي بداية سلسلة لا تُنسى. البناء العالمي مذهل." },
      { user: "Aya_S",         avatar: "A", rating: 4, date: "2024-10-20", comment: "بدأت ببطء بس بعدين مش قدرت أوقف. استمر!" }
    ],
    relatedBooks: [902, 903, 904, 905, 401]
  },
 
  902: {
    publisher: "Dar Al-Adab",
    reviewsCount: 290,
    prices: [
      { store: "Amazon", price: 92,  delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 115, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "عادت أوبال إلى مملكة البلاغة، لكن هذه المرة الأسرار أعمق والأعداء أخطر..." }
    ],
    reviews: [
      { user: "OpalFan",   avatar: "O", rating: 5, date: "2024-12-05", comment: "أحسن من الجزء الأول — هنان لاشين تطورت كثيراً." },
      { user: "Fantasy_E", avatar: "F", rating: 4, date: "2024-11-01", comment: "الشخصيات بقت أعمق والعالم أوسع." }
    ],
    relatedBooks: [901, 903, 904, 905, 401]
  },
 
  903: {
    publisher: "Dar Al-Adab",
    reviewsCount: 320,
    prices: [
      { store: "Amazon", price: 95,  delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 118, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "أمانوس — الأرض التي يختبر فيها القدر الشجاعة الحقيقية..." }
    ],
    reviews: [
      { user: "AmanosFan", avatar: "A", rating: 5, date: "2024-11-28", comment: "الجزء ده فيه أكشن حلو جداً وتطوير شخصيات ممتاز." },
      { user: "Sara_F",    avatar: "S", rating: 5, date: "2024-10-20", comment: "هنان لاشين بتبني عالم فريد من نوعه في الأدب العربي." }
    ],
    relatedBooks: [901, 902, 904, 905, 401]
  },
 
  904: {
    publisher: "Dar Al-Adab",
    reviewsCount: 280,
    prices: [
      { store: "Amazon", price: 90,  delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 112, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "كويكول — المكان الذي تُكشف فيه أعمق أسرار مملكة البلاغة..." }
    ],
    reviews: [
      { user: "KuikoulFan", avatar: "K", rating: 4, date: "2024-11-15", comment: "أكثر جزء تشويقاً في السلسلة. النهاية صدمتني." },
      { user: "Lara_K",     avatar: "L", rating: 5, date: "2024-10-10", comment: "مش هتقدري توقفي عن القراءة بعد الفصل الخامس." }
    ],
    relatedBooks: [901, 902, 903, 905, 401]
  },
 
  905: {
    publisher: "Dar Al-Adab",
    reviewsCount: 300,
    prices: [
      { store: "Amazon", price: 93,  delivery: "2–3 days", available: true },
      { store: "Diwan",  price: 116, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "جزيرة سقطرى — أرض الأسرار والعجائب، آخر محطة في الرحلة..." }
    ],
    reviews: [
      { user: "SocotraFan", avatar: "S", rating: 5, date: "2024-12-01", comment: "ختام رائع لسلسلة استثنائية. هنان لاشين تبني إرثاً حقيقياً." },
      { user: "Nada_M",     avatar: "N", rating: 5, date: "2024-11-12", comment: "سقطرى أجمل جزء — بكيت في النهاية فعلاً." }
    ],
    relatedBooks: [901, 902, 903, 904, 401]
  },
 
  1002: {
    publisher: "Dar Al-Maarif",
    reviewsCount: 220,
    prices: [
      { store: "Diwan", price: 85, delivery: "1–2 days", available: true },
      { store: "Jarir", price: 90, delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "يولد الإنسان وحيداً، ويعيش وحيداً، ويموت وحيداً. هذه الحقيقة البسيطة هي أصعب ما يواجهه..." }
    ],
    reviews: [
      { user: "PhilosoFan", avatar: "P", rating: 4, date: "2024-11-10", comment: "كتاب تأملي عميق يجعلك تفكر في طبيعة الوجود البشري." },
      { user: "Mai_R",      avatar: "M", rating: 5, date: "2024-10-05", comment: "قرأته في يوم واحد وظلت كلماته معي أسابيع." }
    ],
    relatedBooks: [1003, 901, 1004, 1007, 304]
  },
 
  1003: {
    publisher: "Dar Nahdet Misr",
    reviewsCount: 250,
    prices: [
      { store: "Diwan", price: 88, delivery: "1–2 days", available: true },
      { store: "Jarir", price: 95, delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "كانت ياقة قميصها زرقاء، مثل السماء في أيام الصيف الهادئة، لكن قلبها لم يكن هادئاً أبداً..." }
    ],
    reviews: [
      { user: "ArabicLit", avatar: "A", rating: 5, date: "2024-12-08", comment: "رواية شجاعة تتناول قضايا المرأة والمجتمع بصدق نادر." },
      { user: "Dina_T",    avatar: "D", rating: 4, date: "2024-11-02", comment: "الكاتب بيصف الواقع كما هو بدون تجميل." }
    ],
    relatedBooks: [1002, 901, 1004, 1007, 103]
  },
 
  /* ══════════════════════════════════════════════
     SELF HELP  (1001, 1004, 1005, 1008)
  ══════════════════════════════════════════════ */
 
  1001: {
    publisher: "Thought Catalog Books",
    reviewsCount: 460,
    prices: [
      { store: "Amazon",         price: 88,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble", price: 98,  delivery: "3–5 days", available: true },
      { store: "Diwan",          price: 115, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "You cannot think your way into a new life. You have to live your way into a new way of thinking..." },
      { page: 2, text: "The problem isn't that you don't know what to do. The problem is that you don't feel like doing it..." }
    ],
    reviews: [
      { user: "SelfHelp_Fan",  avatar: "S", rating: 5, date: "2024-12-15", comment: "Every essay reframes the way I see myself and the world. Genuinely life-changing." },
      { user: "Nour_H",        avatar: "N", rating: 5, date: "2024-11-20", comment: "كتاب غيّر طريقة تفكيري فعلاً. كل مقالة بتحرك حاجة جوا." },
      { user: "MindsetReader", avatar: "M", rating: 4, date: "2024-10-15", comment: "Not every essay lands equally, but the ones that do are extraordinary." }
    ],
    relatedBooks: [1004, 1005, 1008, 1007, 304]
  },
 
  1004: {
    publisher: "Dar Al-Shorouk",
    reviewsCount: 200,
    prices: [
      { store: "Diwan", price: 80, delivery: "1–2 days", available: true },
      { store: "Jarir", price: 85, delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "الجلاد الذي يسكن داخلك أشد قسوة من أي جلاد خارجي. إنه يعرف نقاط ضعفك جيداً..." }
    ],
    reviews: [
      { user: "PsychReader", avatar: "P", rating: 4, date: "2024-11-18", comment: "كتاب نفسي مخيف ومفيد في نفس الوقت — يكشف الأنماط الداخلية الضارة." },
      {
  user: "Rana_M",
  avatar: "R",
  rating: 4,
  date: "2024-10-12",
  comment: "صعب لكن ضروري. بيساعدك تفهم الصوت الداخلي."
}
],
relatedBooks: [1001, 1003, 1007, 304, 301],
video: "https://www.youtube.com/embed/wvwrpWN8qzE?si=mjwkJhBUzNo0eyVL"
},

1007: {
  publisher: "The Russian Messenger",
    reviewsCount: 470,
    prices: [
      { store: "Amazon",          price: 86,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 95,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 80,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 112, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "On an exceptionally hot evening early in July a young man came out of the garret in which he lodged..." },
      { page: 2, text: "He had successfully avoided meeting his landlady on the staircase. His garret was under the roof of a high five-storied house..." },
      { page: 3, text: "Raskolnikov felt a strange and terrible thought forming in his mind. Could there be a kind of person above ordinary morality?" }
    ],
    reviews: [
      { user: "DostoevskyFan",   avatar: "D", rating: 5, date: "2024-12-18", comment: "The most psychologically intense novel ever written. Raskolnikov is unforgettable." },
      { user: "RussianPsych",    avatar: "R", rating: 5, date: "2024-11-22", comment: "Dostoevsky understands guilt better than any psychologist." },
      { user: "Farid_H",         avatar: "F", rating: 5, date: "2024-10-18", comment: "راسكولنيكوف شخصية تسكن دماغك بعد ما تخلص الرواية." },
      { user: "MoralPhilosophy", avatar: "M", rating: 5, date: "2024-09-15", comment: "A masterclass in moral psychology. The ending is perfect." }
    ],
    relatedBooks: [306, 301, 304, 302, 501]
  },

  /* ══════════════════════════════════════════════
     FANTASY  (401 – 405)
  ══════════════════════════════════════════════ */

  401: {
    publisher: "Various (oral tradition)",
    reviewsCount: 380,
    prices: [
      { store: "Amazon",          price: 72,  delivery: "2–3 days", available: true  },
      { store: "Barnes & Noble",  price: 80,  delivery: "3–5 days", available: true  },
      { store: "Book Depository", price: 68,  delivery: "5–7 days", available: true  },
      { store: "Diwan",           price: 95,  delivery: "1–2 days", available: true  }
    ],
    previewPages: [
      { page: 1, text: "In the name of God, the Compassionate, the Merciful. There was once a King of the Kings of Persia, who had two sons..." },
      { page: 2, text: "Scheherazade said: 'It has reached me, O auspicious King, that there was a merchant among the merchants who had much wealth and business in every land...'" },
      { page: 3, text: "And so Scheherazade began another tale, knowing that each story must be more captivating than the last, for her life depended on the King's curiosity..." }
    ],
    reviews: [
      { user: "ArabicTales",   avatar: "A", rating: 5, date: "2024-12-05", comment: "The foundation of storytelling itself. Every tale within a tale is a masterpiece." },
      { user: "DesertReader",  avatar: "D", rating: 5, date: "2024-11-18", comment: "Scheherazade is the greatest storyteller in all of literature." },
      { user: "Layla_S",       avatar: "L", rating: 4, date: "2024-10-10", comment: "ألف ليلة وليلة — تراث عربي عظيم. كل قصة فيها حكمة وسحر." },
      { user: "MythologyFan",  avatar: "M", rating: 5, date: "2024-09-15", comment: "Magical realism before the term existed. Timeless and enchanting." }
    ],
    relatedBooks: [402, 403, 404, 405, 202]
  },

  402: {
    publisher: "Jonathan Cape",
    reviewsCount: 340,
    prices: [
      { store: "Amazon",          price: 88,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 98,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 82,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 115, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "I was born in the city of Bombay... once upon a time. No, that won't do, there's no getting away from the date..." },
      { page: 2, text: "I was born in Doctor Narlikar's Nursing Home on August 15th, 1947. And the time? The time matters, too..." },
      { page: 3, text: "At the precise instant of India's arrival at independence, I tumbled forth into the world. There were gasps. And, outside the window, fireworks and crowds." }
    ],
    reviews: [
      { user: "RushdieFan",     avatar: "R", rating: 5, date: "2024-12-12", comment: "A masterpiece of magical realism. Rushdie reinvented the novel." },
      { user: "PostcolonialLit", avatar: "P", rating: 5, date: "2024-11-05", comment: "India's independence through one extraordinary child's eyes." },
      { user: "Ahmed_K",        avatar: "A", rating: 4, date: "2024-10-20", comment: "رواية معقدة ومذهلة — رشدي يمزج السحر بالتاريخ بطريقة فريدة." },
      { user: "BookerFan",      avatar: "B", rating: 5, date: "2024-09-08", comment: "Winner of the Booker of Bookers for good reason. Extraordinary." }
    ],
    relatedBooks: [401, 403, 404, 405, 301]
  },

  403: {
    publisher: "Various editions",
    reviewsCount: 420,
    prices: [
      { store: "Amazon",          price: 65,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 72,  delivery: "3–5 days", available: true },
      { store: "Diwan",           price: 88,  delivery: "1–2 days", available: true },
      { store: "Jarir",           price: 85,  delivery: "2–4 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Once upon a time, in a far-off country, there lived a merchant who was enormously rich..." },
      { page: 2, text: "The youngest daughter was so lovely that she was called Beauty, which made her sisters very jealous..." },
      { page: 3, text: "'Do not judge by appearances,' said Beauty. 'This Beast has a kind heart, and that is worth more than all the wit in the world.'" }
    ],
    reviews: [
      { user: "FairyTaleFan",  avatar: "F", rating: 5, date: "2024-12-10", comment: "The most beautiful fairy tale ever told. Love truly transforms." },
      { user: "DisneyStar",    avatar: "D", rating: 5, date: "2024-11-22", comment: "The original story is darker and more profound than any adaptation." },
      { user: "Sara_H",       avatar: "S", rating: 5, date: "2024-10-15", comment: "قصة جمال حقيقي — الحب الحقيقي بيشوف ما وراء المظاهر." },
      { user: "RomanceFan2",  avatar: "R", rating: 4, date: "2024-09-20", comment: "A timeless tale about seeing beyond the surface. Still resonates." }
    ],
    relatedBooks: [404, 405, 401, 402, 101]
  },

  404: {
    publisher: "Barbin, Paris",
    reviewsCount: 390,
    prices: [
      { store: "Amazon",          price: 60,  delivery: "2–3 days", available: true  },
      { store: "Barnes & Noble",  price: 68,  delivery: "3–5 days", available: true  },
      { store: "Diwan",           price: 82,  delivery: "1–2 days", available: true  },
      { store: "Book Depository", price: 55,  delivery: "5–7 days", available: false }
    ],
    previewPages: [
      { page: 1, text: "Once there was a gentleman who married, for his second wife, the proudest and most haughty woman that was ever seen..." },
      { page: 2, text: "The poor girl bore it all patiently and dared not tell her father. She sat among the cinders near the fireplace..." },
      { page: 3, text: "The Fairy Godmother touched her with her wand, and at the same instant her clothes were turned into cloth of gold and silver, all beset with jewels..." }
    ],
    reviews: [
      { user: "ClassicFairy",   avatar: "C", rating: 5, date: "2024-12-08", comment: "The ultimate rags-to-riches story. Perrault's version is the definitive one." },
      { user: "MagicReader",    avatar: "M", rating: 4, date: "2024-11-15", comment: "Simple, elegant, and emotionally satisfying. The glass slipper is iconic." },
      { user: "Hana_M",         avatar: "H", rating: 5, date: "2024-10-05", comment: "سندريلا قصة كل فتاة حلمت بالعدالة. أحبها من صغري وللآن." },
      { user: "FairyTaleLover", avatar: "F", rating: 4, date: "2024-09-18", comment: "A story about kindness triumphing over cruelty. Timeless." }
    ],
    relatedBooks: [403, 405, 401, 402, 106]
  },

  405: {
    publisher: "Macmillan",
    reviewsCount: 450,
    prices: [
      { store: "Amazon",          price: 70,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 78,  delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 65,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 92,  delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do..." },
      { page: 2, text: "So she was considering in her own mind whether the pleasure of making a daisy-chain would be worth the trouble of getting up..." },
      { page: 3, text: "'Curiouser and curiouser!' cried Alice. 'Now I'm opening out like the largest telescope that ever was! Good-bye, feet!'" }
    ],
    reviews: [
      { user: "WonderlandFan",  avatar: "W", rating: 5, date: "2024-12-15", comment: "The most imaginative book ever written. Carroll's logic puzzles still delight." },
      { user: "SurrealReader",   avatar: "S", rating: 5, date: "2024-11-08", comment: "A children's book that is actually a philosophical masterpiece." },
      { user: "Maha_N",          avatar: "M", rating: 5, date: "2024-10-22", comment: "أليس في بلاد العجائب — خيال بلا حدود. كل مرة بتكتشف حاجة جديدة." },
      { user: "ChildhoodBooks",  avatar: "C", rating: 4, date: "2024-09-12", comment: "Read it as a child, loved it. Read it as an adult, understood it. Genius." }
    ],
    relatedBooks: [401, 402, 403, 404, 501]
  },

  /* ══════════════════════════════════════════════
     HARRY POTTER  (1010)
  ══════════════════════════════════════════════ */

  1010: {
    publisher: "Bloomsbury (UK) / Scholastic (US)",
    reviewsCount: 980,
    prices: [
      { store: "Amazon",          price: 95,  delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 108, delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 90,  delivery: "5–7 days", available: true },
      { store: "Diwan",           price: 135, delivery: "1–2 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much..." },
      { page: 2, text: "They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense..." },
      { page: 3, text: "'You're a wizard, Harry,' said Hagrid. And in that moment, everything changed — not just for Harry, but for the entire world of literature." }
    ],
    reviews: [
      { user: "PotterHead",       avatar: "P", rating: 5, date: "2024-12-25", comment: "The book that made an entire generation fall in love with reading. Magical in every sense." },
      { user: "HogwartsStudent",  avatar: "H", rating: 5, date: "2024-11-30", comment: "I've read it twelve times and I still feel the magic every single time." },
      { user: "Youssef_R",        avatar: "Y", rating: 5, date: "2024-10-28", comment: "هاري بوتر غيّر حياتي — أول كتاب حبيته وأنا صغير وبحبه للآن." },
      { user: "FantasyKing",      avatar: "F", rating: 5, date: "2024-09-15", comment: "Rowling created one of the richest fictional worlds ever. A masterpiece of imagination." },
      { user: "MuggleBorn",       avatar: "M", rating: 4, date: "2024-08-22", comment: "The first book is charming and sets up an incredible journey. Perfect for all ages." }
    ],
    relatedBooks: [401, 403, 405, 501, 701]
  },


 
  /* ══════════════════════════════════════════════
     SCIENCE  (1006, 1009)
  ══════════════════════════════════════════════ */
 
  1006: {
    publisher: "MIT Press",
    reviewsCount: 420,
    prices: [
      { store: "Amazon",          price: 210, delivery: "2–3 days", available: true },
      { store: "Barnes & Noble",  price: 235, delivery: "3–5 days", available: true },
      { store: "Book Depository", price: 198, delivery: "5–7 days", available: true }
    ],
    previewPages: [
      { page: 1, text: "Before there were computers, there were algorithms. An algorithm is any well-defined computational procedure..." },
      { page: 2, text: "Sorting a sequence of numbers. Computing a greatest common divisor. Finding a shortest path. These are all problems that have efficient algorithmic solutions..." }
    ],
    reviews: [
      { user: "CSStudent",    avatar: "C", rating: 5, date: "2024-12-20", comment: "The bible of algorithms. Every CS student needs this on their shelf." },
      { user: "Omar_CS",      avatar: "O", rating: 5, date: "2024-11-15", comment: "كورمن وزملاؤه كتبوا المرجع الأساسي لكل مبرمج جاد." },
      { user: "AlgorithmFan", avatar: "A", rating: 4, date: "2024-10-10", comment: "Dense but comprehensive. Work through the exercises — they're worth it." }
    ],
    relatedBooks: [1009, 1001, 1007, 1008]
  },
 
  1009: {
    publisher: "MIT Press (open source)",
    reviewsCount: 280,
    prices: [
      { store: "Amazon",          price: 145, delivery: "2–3 days", available: true },
      { store: "Book Depository", price: 138, delivery: "5–7 days", available: true },
      { store: "Free PDF",        price: 0,   delivery: "Instant",  available: true }
    ],
    previewPages: [
      { page: 1, text: "Mathematics is the language of computer science. Without it, we can describe but not analyze..." },
      { page: 2, text: "A proof is a sequence of logical deductions, starting from axioms and established facts, that leads to a conclusion..." }
    ],
    reviews: [
      { user: "MathCS",    avatar: "M", rating: 5, date: "2024-12-15", comment: "The best intro to discrete math for CS students. Clear and well-written." },
      { user: "Ahmed_CS",  avatar: "A", rating: 5, date: "2024-11-10", comment: "رياضيات علوم الحاسب بطريقة واضحة ومنطقية. مرجع لا غنى عنه." },
      { user: "ProofReader", avatar: "P", rating: 4, date: "2024-10-05", comment: "The proofs are beautiful once you learn to read them." }
    ],
    relatedBooks: [1006, 1005, 1001, 1008, 304]
  },
 
  
  
 
};