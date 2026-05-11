
/* ===================== BOOKS DATA (Bilingual) ===================== */
const booksData = [
  {id:101,title:{en:"Pride & Prejudice",ar:"كبرياء وتحيز"},author:{en:"Jane Austen",ar:"جين أوستن"},genre:"romance",year:1813,rating:4.8,image:"../image/Pride and Prejudice.jpg",color:["#1a5a7a","#0a3a5a"],badge:"popular",desc:{en:"A brilliant exploration of love, class, and society in Regency England.",ar:"استكشاف رائع للحب والطبقة والمجتمع في إنجلترا الريجنسية."}},
  {id:102,title:{en:"Romeo & Juliet",ar:"روميو وجولييت"},author:{en:"William Shakespeare",ar:"وليام شكسبير"},genre:"romance",year:1597,rating:4.7,image:"../image/Romeo and Juliet.jpg",color:["#5a1a2a","#3a0a1a"],badge:null,desc:{en:"The most famous love story ever written — tragic and timeless.",ar:"أشهر قصة حب كُتبت على الإطلاق — مأساوية وخالدة."}},
  {id:103,title:{en:"Jane Eyre",ar:"جين آير"},author:{en:"Charlotte Brontë",ar:"شارلوت برونتي"},genre:"romance",year:1847,rating:4.9,image:"../image/Jane Eyre.jpg",color:["#3a1a3a","#1a0a2a"],badge:"popular",desc:{en:"A passionate and unconventional woman finds love against all odds.",ar:"امرأة شغوفة وغير تقليدية تجد الحب رغم كل العقبات."}},
  {id:104,title:{en:"Wuthering Heights",ar:"مرتفعات ويذرينج"},author:{en:"Emily Brontë",ar:"إيميلي برونتي"},genre:"romance",year:1847,rating:4.7,image:"../image/Wuthering Heights.jpg",color:["#1a2a3a","#0a1a2a"],badge:null,desc:{en:"A wild love in the Yorkshire moors — dark, fierce, and unforgettable.",ar:"حب وحشي في مرتفعات يوركشير — داكن ومتوهج ولا يُنسى."}},
  {id:105,title:{en:"Anna Karenina",ar:"آنا كارينينا"},author:{en:"Leo Tolstoy",ar:"ليو تولستوي"},genre:"romance",year:1878,rating:4.8,image:"../image/Anna Karenina.jpg",color:["#2a1a0a","#1a0a0a"],badge:"popular",desc:{en:"Society, passion, and tragedy in imperial Russia.",ar:"المجتمع والعاطفة والمأساة في روسيا الإمبراطورية."}},
  {id:106,title:{en:"Emma",ar:"إيما"},author:{en:"Jane Austen",ar:"جين أوستن"},genre:"romance",year:1815,rating:4.7,image:"../image/Emma.jpg",color:["#3a1a3a","#2a0a2a"],badge:null,desc:{en:"A clever young woman learns humility through her well-meaning matchmaking.",ar:"شابة ذكية تتعلم التواضع من خلال مساعي التوفيق بين القلوب."}},
  {id:201,title:{en:"Don Quixote",ar:"دون كيخوته"},author:{en:"Miguel de Cervantes",ar:"ميغيل دي ثيرفانتس"},genre:"adventure",year:1605,rating:4.6,image:"../image/Don Quixote.jpg",color:["#5a3a1a","#3a1a0a"],badge:null,desc:{en:"The world's first modern novel — chivalry and idealism.",ar:"أول رواية حديثة في العالم — الفروسية والمثالية."}},
  {id:202,title:{en:"The Odyssey",ar:"الأوديسة"},author:{en:"Homer",ar:"هوميروس"},genre:"adventure",year:-800,rating:4.7,image:"../image/The Odyssey.jpg",color:["#1a3a6a","#0a2a4a"],badge:"rare",desc:{en:"Odysseus journeys home through dangerous seas and strange lands.",ar:"أوديسيوس يعود إلى وطنه عبر بحار خطيرة وأراضٍ غريبة."}},
  {id:203,title:{en:"Moby Dick",ar:"موبي ديك"},author:{en:"Herman Melville",ar:"هيرمان ملفيل"},genre:"adventure",year:1851,rating:4.5,image:"../image/Moby-Dick.jpg",color:["#0a2a3a","#041a2a"],badge:null,desc:{en:"Captain Ahab's obsessive hunt for the white whale.",ar:"صيد الكابتن أهاب المهووس للحوت الأبيض."}},
  {id:204,title:{en:"The Count of Monte Cristo",ar:"الكونت دي مونت كريستو"},author:{en:"Alexandre Dumas",ar:"ألكسندر دوماس"},genre:"adventure",year:1844,rating:4.9,image:"../image/The Count of Monte Cristo.jpg",color:["#1a2a4a","#0a1a3a"],badge:"popular",desc:{en:"Betrayal, imprisonment, escape, and legendary revenge.",ar:"خيانة وسجن وهروب وانتقام أسطوري."}},
  {id:205,title:{en:"The Iliad",ar:"الإلياذة"},author:{en:"Homer",ar:"هوميروس"},genre:"adventure",year:-750,rating:4.6,image:"../image/The Iliad.jpg",color:["#3a2a0a","#1a1a0a"],badge:null,desc:{en:"The wrath of Achilles and the Trojan War in epic poetry.",ar:"غضب أخيل وحرب طروادة في الشعر الملحمي."}},
  {id:301,title:{en:"Les Misérables",ar:"البؤساء"},author:{en:"Victor Hugo",ar:"فيكتور هوغو"},genre:"classic",year:1862,rating:4.9,image:"../image/Les Misérables.jpg",color:["#2a2a4a","#1a1a2a"],badge:"popular",desc:{en:"An emotional epic of justice, redemption, and the human spirit.",ar:"ملحمة عاطفية عن العدالة والفداء والروح الإنسانية."}},
  {id:302,title:{en:"Hamlet",ar:"هاملت"},author:{en:"William Shakespeare",ar:"وليام شكسبير"},genre:"classic",year:1600,rating:4.8,image:"../image/Hamlet.jpg",color:["#2a2a1a","#1a1a0a"],badge:null,desc:{en:"To be or not to be — the ultimate question of existence.",ar:"أن تكون أو لا تكون — السؤال المطلق للوجود."}},
  {id:303,title:{en:"The Divine Comedy",ar:"الكوميديا الإلهية"},author:{en:"Dante Alighieri",ar:"دانتي أليغيري"},genre:"classic",year:1320,rating:4.8,image:"../image/The Divine Comedy.jpg",color:["#4a1a0a","#2a0a0a"],badge:"rare",desc:{en:"A journey through Hell, Purgatory, and Heaven.",ar:"رحلة عبر الجحيم والمطهر والجنة."}},
  {id:304,title:{en:"Candide",ar:"كانديد"},author:{en:"Voltaire",ar:"فولتير"},genre:"classic",year:1759,rating:4.6,image:"../image/Candide.jpg",color:["#2a3a1a","#1a2a0a"],badge:null,desc:{en:"A satirical journey through optimism and reality.",ar:"رحلة ساخرة بين التفاؤل والواقع."}},
  {id:305,title:{en:"Great Expectations",ar:"آمال عظيمة"},author:{en:"Charles Dickens",ar:"تشارلز ديكنز"},genre:"classic",year:1861,rating:4.6,image:"../image/Great Expectations.jpg",color:["#3a2a1a","#2a1a0a"],badge:null,desc:{en:"An orphan's rise through Victorian England — hope and disappointment.",ar:"صعود يتيم عبر إنجلترا الفيكتورية — الأمل والخيبة."}},
  {id:306,title:{en:"War and Peace",ar:"الحرب والسلام"},author:{en:"Leo Tolstoy",ar:"ليو تولستوي"},genre:"classic",year:1869,rating:4.8,image:"../image/War and Peace.jpg",color:["#2a0a0a","#1a0a0a"],badge:"popular",desc:{en:"Napoleonic Russia — one of the most ambitious novels ever written.",ar:"روسيا النابليونية — من أكثر الروايات طموحاً."}},
  {id:307,title:{en:"Crime and Punishment",ar:"الجريمة والعقاب"},author:{en:"Fyodor Dostoevsky",ar:"فيودور دوستويفسكي"},genre:"classic",year:1866,rating:4.9,image:"../image/crime and punishment",color:["#3a1a1a","#1a0a0a"],badge:"popular",desc:{en:"A psychological novel exploring guilt, morality, and redemption.",ar:"رواية نفسية تستكشف الذنب والأخلاق والفداء."}},
  {id:401,title:{en:"One Thousand Nights",ar:"ألف ليلة وليلة"},author:{en:"Anonymous",ar:"مجهول"},genre:"Fantasy",year:1001,rating:4.5,image:"../image/One Thousand and One Nights.jpg",color:["#3a1a5a","#1a0a3a"],badge:"rare",desc:{en:"Scheherazade weaves tales of magic, kings, and jinn.",ar:"شهرزاد تنسج حكايات السحر والملوك والجن."}},
  {id:402,title:{en:"Midnight's Children",ar:"أطفال منتصف الليل"},author:{en:"Salman Rushdie",ar:"سلمان رشدي"},genre:"Fantasy",year:1981,rating:4.7,image:"../image/Midnight's Children.jpg",color:["#3a0a2a","#1a0a1a"],badge:"new",desc:{en:"Born at the moment of India's independence — magical and political.",ar:"وُلد في لحظة استقلال الهند — سحري وسياسي."}},
  {id:403,title:{en:"Beauty and the Beast",ar:"الجميلة والوحش"},author:{en:"Villeneuve",ar:"فيلنوف"},genre:"Fantasy",year:1740,rating:4.8,image:"../image/Beauty and the Beast.jpg",color:["#2a0a1a","#4a1a3a"],badge:"popular",desc:{en:"A love story that transforms a cursed prince.",ar:"قصة حب تحوّل أميراً ملعوناً."}},
  {id:404,title:{en:"Cinderella",ar:"سندريلا"},author:{en:"Charles Perrault",ar:"شارل بيرو"},genre:"Fantasy",year:1697,rating:4.7,image:"../image/Cinderella.jpg",color:["#3a1a4a","#1a0a2a"],badge:"popular",desc:{en:"A kind girl finds her destiny through magic.",ar:"فتاة طيبة تجد مصيرها بالسحر."}},
  {id:405,title:{en:"Alice in Wonderland",ar:"أليس في بلاد العجائب"},author:{en:"Lewis Carroll",ar:"لويس كارول"},genre:"Fantasy",year:1865,rating:4.8,image:"../image/Alice's Adventures in Wonderland.jpg",color:["#3a0a2a","#1a0a1a"],badge:"rare",desc:{en:"A girl enters a strange magical world.",ar:"فتاة تدخل عالماً سحرياً غريباً."}},
  {id:1010,title:{en:"Harry Potter and the Sorcerer's Stone",ar:"هاري بوتر وحجر الفيلسوف"},author:{en:"J.K. Rowling",ar:"ج. ك. رولينج"},genre:"Fantasy",year:1997,rating:4.9,image:"../image/Harry Potter.jpg",color:["#4b2e83","#1b1b3a"],badge:"bestseller",desc:{en:"A young wizard discovers his magical destiny and begins his journey at Hogwarts.",ar:"يكتشف فتى صغير أنه ساحر ويبدأ رحلته السحرية في مدرسة هوجورتس."}},
  {id:501,title:{en:"Frankenstein",ar:"فرانكنشتاين"},author:{en:"Mary Shelley",ar:"ماري شيلي"},genre:"mystery",year:1818,rating:4.7,image:"../image/Frankenstein.jpg",color:["#1a2a1a","#0a1a0a"],badge:"new",desc:{en:"The original science fiction story — creation and consequences.",ar:"أصل الخيال العلمي — الخلق وعواقبه."}},
  {id:502,title:{en:"Northanger Abbey",ar:"دير نورثانجر"},author:{en:"Jane Austen",ar:"جين أوستن"},genre:"mystery",year:1818,rating:4.5,image:"../image/Northanger Abbey.jpg",color:["#1a1a3a","#0a0a2a"],badge:"new",desc:{en:"Gothic romance meets satire in this early Austen work.",ar:"رومانسية قوطية تلتقي بالسخرية في عمل أوستن المبكر."}},
  {id:503,title:{en:"The Hound of the Baskervilles",ar:"كلب آل باسكرفيل"},author:{en:"Arthur Conan Doyle",ar:"آرثر كونان دويل"},genre:"mystery",year:1902,rating:4.8,image:"../image/The Hound of the Baskervilles.jpg",color:["#1a1a2a","#0a0a1a"],badge:"popular",desc:{en:"Sherlock Holmes faces a legendary hound in the moors.",ar:"شيرلوك هولمز يواجه كلباً أسطورياً في المستنقعات."}},
  {id:504,title:{en:"And Then There Were None",ar:"عشرة لا شيء يجمعهم"},author:{en:"Agatha Christie",ar:"أجاثا كريستي"},genre:"mystery",year:1939,rating:4.9,image:"../image/And Then There Were None.jpg",color:["#2a1a1a","#1a0a0a"],badge:"popular",desc:{en:"Ten strangers, one island, no one is innocent.",ar:"عشرة غرباء وجزيرة واحدة ولا أحد بريء."}},
  {id:601,title:{en:"Paradise Lost",ar:"الفردوس المفقود"},author:{en:"John Milton",ar:"جون ملتون"},genre:"poetry",year:1667,rating:4.7,image:"../image/Paradise Lost.jpg",color:["#2a0a2a","#1a0a1a"],badge:"rare",desc:{en:"The fall of Satan and mankind's loss of paradise in epic poetry.",ar:"سقوط الشيطان وفقدان الإنسان للجنة في شعر ملحمي."}},
  {id:602,title:{en:"The Aeneid",ar:"الإنيادة"},author:{en:"Virgil",ar:"فيرجيل"},genre:"poetry",year:-19,rating:4.7,image:"../image/The Aeneid.jpg",color:["#3a2a1a","#2a1a0a"],badge:"rare",desc:{en:"Aeneas escapes Troy to found Rome — destiny written in the stars.",ar:"إينياس يفر من طروادة ليؤسس روما — مصير مكتوب في النجوم."}},
  {id:603,title:{en:"Faust",ar:"فاوست"},author:{en:"Goethe",ar:"غوته"},genre:"poetry",year:1808,rating:4.6,image:"../image/Faust.jpg",color:["#1a0a2a","#0a0a1a"],badge:"rare",desc:{en:"A scholar sells his soul to the devil — gaining love and ruin.",ar:"عالم يبيع روحه للشيطان — يكسب الحب والهلاك."}},
  {id:701,title:{en:"Asterix & Obelix",ar:"أستريكس وأوبيليكس"},author:{en:"René Goscinny",ar:"رينيه غوسيني"},genre:"cartoon",year:1959,rating:4.9,image:"../image/Asterix.jpg",color:["#4a2a0a","#2a1a0a"],badge:"popular",desc:{en:"A small Gaulish village resists Rome with courage and magic potion!",ar:"قرية غالية صغيرة تقاوم روما بالشجاعة والجرعة السحرية!"}},
  {id:702,title:{en:"Tintin",ar:"تان تان"},author:{en:"Hergé",ar:"هيرجيه"},genre:"cartoon",year:1929,rating:4.8,image:"../image/The Adventures of Tintin.jpg",color:["#0a3a5a","#0a1a3a"],badge:"popular",desc:{en:"A young reporter travels the world with his dog Snowy.",ar:"صحفي شاب يجوب العالم مع كلبه ميلو."}},
  {id:703,title:{en:"Lucky Luke",ar:"لوكي لوك"},author:{en:"Morris",ar:"موريس"},genre:"cartoon",year:1946,rating:4.7,image:"../image/Lucky Luke.jpg",color:["#4a2a0a","#3a1a0a"],badge:null,desc:{en:"The fastest gun in the West brings justice to the frontier.",ar:"أسرع مسدس في الغرب يجلب العدالة للحدود."}},
  {id:704,title:{en:"The Smurfs",ar:"السنافر"},author:{en:"Peyo",ar:"بيو"},genre:"cartoon",year:1958,rating:4.6,image:"../image/The Smurfs.jpg",color:["#0a2a5a","#0a1a3a"],badge:"popular",desc:{en:"A small blue village living in magical mushroom houses.",ar:"قرية زرقاء صغيرة تعيش في منازل من الفطر السحري."}},
  {id:705,title:{en:"Donald Duck Comics",ar:"قصص دونالد داك"},author:{en:"Carl Barks",ar:"كارل باركس"},genre:"cartoon",year:1942,rating:4.7,image:"../image/Donald Duck.jpg",color:["#0a3a6a","#041a3a"],badge:"popular",desc:{en:"Donald and his nephews go on endless comic adventures.",ar:"دونالد وأبناء أخيه في مغامرات كوميدية لا تنتهي."}},
  {id:706,title:{en:"Garfield",ar:"غارفيلد"},author:{en:"Jim Davis",ar:"جيم ديفيس"},genre:"cartoon",year:1978,rating:4.8,image:"../image/Garfield.jpg",color:["#5a2a0a","#3a1a0a"],badge:"popular",desc:{en:"The laziest, lasagna-loving cat in history.",ar:"أكسل قطة في التاريخ وأكثرها حباً للمعكرونة."}},
  {id:707,title:{en:"Calvin & Hobbes",ar:"كالفن وهوبس"},author:{en:"Bill Watterson",ar:"بيل واترسون"},genre:"cartoon",year:1985,rating:4.9,image:"../image/Calvin and Hobbes.jpg",color:["#3a2a1a","#1a1a0a"],badge:"popular",desc:{en:"A boy and his imaginary tiger in philosophical adventures.",ar:"صبي ونمره الخيالي في مغامرات فلسفية."}},
  {id:708,title:{en:"Peanuts",ar:"بينتس"},author:{en:"Charles Schulz",ar:"تشارلز شولز"},genre:"cartoon",year:1950,rating:4.8,image:"../image/Peanuts.jpg",color:["#3a1a0a","#1a0a0a"],badge:"popular",desc:{en:"Charlie Brown, Snoopy, and the world of childhood.",ar:"تشارلي براون وسنوبي وعالم الطفولة."}},
  {id:709,title:{en:"The Phantom",ar:"الفانتوم"},author:{en:"Lee Falk",ar:"لي فالك"},genre:"cartoon",year:1936,rating:4.6,image:"../image/The Phantom.jpg",color:["#2a0a5a","#1a0a3a"],badge:"rare",desc:{en:"An immortal hero fighting evil in jungles and cities.",ar:"بطل خالد يقاوم الشر في الغابات والمدن."}},
  {id:710,title:{en:"Tom & Jerry",ar:"توم وجيري"},author:{en:"Hanna-Barbera",ar:"هانا-باربيرا"},genre:"cartoon",year:1942,rating:4.7,image:"../image/Tom and Jerry.jpg",color:["#4a1a1a","#2a0a0a"],badge:"popular",desc:{en:"Endless comedic chase between cat and mouse.",ar:"مطاردة هزلية لا تنتهي بين القطة والفأر."}},
  {id:711,title:{en:"Scooby-Doo",ar:"سكوبي دو"},author:{en:"Hanna-Barbera",ar:"هانا-باربيرا"},genre:"cartoon",year:1969,rating:4.6,image:"../image/Scooby-Doo.jpg",color:["#2a3a1a","#1a2a0a"],badge:null,desc:{en:"Teenagers and their cowardly dog solve spooky mysteries.",ar:"مراهقون وكلبهم الجبان يحلون الألغاز المخيفة."}},
  {id:712,title:{en:"Popeye the Sailor",ar:"بوباي البحار"},author:{en:"E.C. Segar",ar:"إي.سي. سيغار"},genre:"cartoon",year:1929,rating:4.5,image:"../image/Popeye.jpg",color:["#0a3a4a","#0a1a2a"],badge:null,desc:{en:"A sailor who gains strength from spinach to save Olive Oyl.",ar:"بحار يكتسب القوة من السبانخ لإنقاذ أوليف أويل."}},
  {id:713,title:{en:"Archie Comics",ar:"آرتشي كوميكس"},author:{en:"Bob Montana",ar:"بوب مونتانا"},genre:"cartoon",year:1941,rating:4.6,image:"../image/Archie Comics.jpg",color:["#5a1a0a","#3a0a0a"],badge:"popular",desc:{en:"Archie and friends in Riverdale high school adventures.",ar:"آرتشي وأصدقاؤه في مغامرات ريفرديل المدرسية."}},
  {id:714,title:{en:"Wonder Woman",ar:"المرأة الخارقة"},author:{en:"William Moulton Marston",ar:"وليام مولتون مارستون"},genre:"cartoon",year:1941,rating:4.8,image:"../image/Wonder Woman.jpg",color:["#4a0a1a","#2a0a0a"],badge:"popular",desc:{en:"An Amazon princess fights evil and promotes peace.",ar:"أميرة أمازونية تحارب الشر وتنشر السلام."}},
  {id:715,title:{en:"Spider-Man Comics",ar:"سبايدر مان"},author:{en:"Stan Lee",ar:"ستان لي"},genre:"cartoon",year:1962,rating:4.9,image:"../image/Spider-Man.jpg",color:["#4a0a0a","#2a0a0a"],badge:"popular",desc:{en:"Peter Parker becomes Spider-Man, protector of New York.",ar:"بيتر باركر يصبح سبايدر مان حامي نيويورك."}},
  {id:901,title:{en:"Ikadoli",ar:"إيكادولي"},author:{en:"Hanan Lashin",ar:"حنان لاشين"},genre:"Fiction Books",year:2017,rating:4.5,image:"../image/Ikadoli.jpg",color:["#4b2e83","#1f1a5a"],badge:"popular",desc:{en:"A fantasy adventure set in the magical world of the Kingdom of Eloquence.",ar:"مغامرة خيالية في عالم مملكة الفصاحة السحري."}},
  {id:902,title:{en:"Opal",ar:"أوبال"},author:{en:"Hanan Lashin",ar:"حنان لاشين"},genre:"Fiction Books",year:2018,rating:4.6,image:"../image/Opal.jpg",color:["#2b6f6f","#0f3d3d"],badge:"trending",desc:{en:"A continuation of the mystical journey in the Kingdom of Eloquence.",ar:"استمرار الرحلة الغامضة في مملكة الفصاحة."}},
  {id:903,title:{en:"Amanos",ar:"أمانوس"},author:{en:"Hanan Lashin",ar:"حنان لاشين"},genre:"Fiction Books",year:2019,rating:4.7,image:"../image/Amanos.jpg",color:["#3b3b98","#1b1b4f"],badge:"popular",desc:{en:"A story of courage and challenges in a symbolic fantasy world.",ar:"قصة شجاعة وتحديات في عالم خيالي رمزي."}},
  {id:904,title:{en:"Kuikoul",ar:"كويكول"},author:{en:"Hanan Lashin",ar:"حنان لاشين"},genre:"Fiction Books",year:2020,rating:4.6,image:"../image/Kuikoul.jpg",color:["#6a4c93","#2e1a47"],badge:"popular",desc:{en:"Deeper secrets unfold in the Kingdom of Eloquence.",ar:"أسرار أعمق تتكشف في مملكة الفصاحة."}},
  {id:905,title:{en:"Socotra",ar:"سقطرى"},author:{en:"Hanan Lashin",ar:"حنان لاشين"},genre:"Fiction Books",year:2021,rating:4.7,image:"../image/Socotra.jpg",color:["#1e6091","#0b2e3d"],badge:"new",desc:{en:"An adventurous journey in a mysterious symbolic land.",ar:"رحلة مغامرة في أرض غامضة ورمزية."}},
  {id:1001,title:{en:"101 Essays That Will Change The Way You Think",ar:"١٠١ مقالة ستغير طريقة تفكيرك"},author:{en:"Brianna Wiest",ar:"بريانا ويست"},genre:"Self Help Books",year:2016,rating:4.7,image:"../image/101 Essays That Will Change The Way You Think.png",color:["#3a2a4a","#1a1a2a"],badge:"popular",desc:{en:"A powerful collection of essays about self-awareness, mindset, and life transformation.",ar:"مجموعة قوية من المقالات عن الوعي الذاتي والعقلية وتحول الحياة."}},
  {id:1002,title:{en:"الإنسان مخلوق وحيد",ar:"الإنسان مخلوق وحيد"},author:{en:"Abdullah Al-Busayyis",ar:"عبد الله البصيص"},genre:"Fiction Books",year:2000,rating:4.5,image:"../image/الإنسان مخلوق وحيد.jpg",color:["#2a3a2a","#1a2a1a"],badge:null,desc:{en:"A reflective philosophical exploration of human nature and creation.",ar:"استكشاف فلسفي تأملي للطبيعة الإنسانية والخلق."}},
  {id:1003,title:{en:"فتاة الياقة الزرقاء",ar:"فتاة الياقة الزرقاء"},author:{en:"Amr Abdel Hamid",ar:"عمرو عبد الحميد"},genre:"Fiction Books",year:2018,rating:4.6,image:"../image/فتاة الياقة الزرقاء.jpg",color:["#1a3a5a","#0a1a2a"],badge:"new",desc:{en:"A story about a young girl struggling with life and identity in a harsh society.",ar:"قصة فتاة تصارع الحياة والهوية في مجتمع قاسٍ."}},
  {id:1004,title:{en:"الجلاد تحت جلدي",ar:"الجلاد تحت جلدي"},author:{en:"Emad Rashad Othman",ar:"عماد رشاد عثمان"},genre:"Self Help Books",year:2019,rating:4.5,image:"../image/الجلاد تحت جلدي.jpg",color:["#3a0a0a","#1a0a0a"],badge:null,desc:{en:"A dark psychological thriller about fear, trauma, and hidden darkness.",ar:"رواية نفسية داكنة عن الخوف والصدمة والظلام المخفي."}},
  {id:1005,title:{en:"The Idiot Brain",ar:"الدماغ الأحمق"},author:{en:"Dean Burnett",ar:"دين بيرنيت"},genre:"Self Help Books",year:2016,rating:4.7,image:"../image/The Idiot Brain",color:["#1a2a3a","#0a1a2a"],badge:"popular",desc:{en:"A humorous scientific explanation of how the brain really works.",ar:"شرح علمي مرح لكيفية عمل الدماغ حقاً."}},
  {id:1006,title:{en:"Introduction to Algorithms",ar:"مقدمة في الخوارزميات"},author:{en:"Cormen, Leiserson, Rivest, Stein",ar:"كورمن وليسرسون ورايفست وشتاين"},genre:"Science books",year:2009,rating:4.9,image:"../image/Introduction to Algorithms.jpg",color:["#2a2a2a","#1a1a1a"],badge:"rare",desc:{en:"The definitive textbook for algorithms in computer science.",ar:"الكتاب المرجعي الأساسي للخوارزميات في علوم الحاسوب."}},
  {id:1007,title:{en:"ذو النورين عثمان بن عفان",ar:"ذو النورين عثمان بن عفان"},author:{en:"Abbas Mahmoud Al-Aqqad",ar:"عباس محمود العقاد"},genre:"Self Help Books",year:1925,rating:4.6,image:"../image/ذو النورين عثمان بن عفان",color:["#1a2a1a","#0a1a0a"],badge:null,desc:{en:"A biography of Uthman ibn Affan, the third Caliph of Islam.",ar:"سيرة ذاتية لعثمان بن عفان، ثالث خلفاء الإسلام."}},
  {id:1008,title:{en:"Mathematics for Computer Science",ar:"رياضيات لعلوم الحاسوب"},author:{en:"Eric Lehman",ar:"إريك ليمان"},genre:"Science books",year:2017,rating:4.8,image:"../image/Mathematics for Computer Science.jpg",color:["#2a1a3a","#1a0a2a"],badge:"popular",desc:{en:"Core mathematical foundations for computer science students.",ar:"الأسس الرياضية الجوهرية لطلاب علوم الحاسوب."}}
];

/* ===================== LANGUAGE & THEME STATE ===================== */
// (currentLang handled by global.js)
let currentGenre = 'all';
let currentView  = 'grid';
let currentPage  = 1;
let sortedBooks  = [...booksData];
const PER_PAGE   = 12;

const GENRE_LABELS = {
  en: { all:'All Genres', romance:'Romance', adventure:'Adventure', classic:'Classics',
        'Fiction Books':'Fiction Books', mystery:'Mystery', poetry:'Poetry', cartoon:'Cartoon',
        Fantasy:'Fantasy', 'Science books':'Science Books', 'Self Help Books':'Self Help Books' },
  ar: { all:'جميع التصنيفات', romance:'رومانسي', adventure:'مغامرات', classic:'كلاسيكي',
        'Fiction Books':'روايات', mystery:'غموض', poetry:'شعر', cartoon:'كرتون',
        Fantasy:'خيال', 'Science books':'علوم', 'Self Help Books':'تطوير الذات' }
};

const BADGE_CONFIG = {
  popular:    { en:'✦ Popular',    ar:'✦ مشهور',   cls:'badge-popular' },
  new:        { en:'✦ New',        ar:'✦ جديد',    cls:'badge-new' },
  rare:       { en:'✦ Rare',       ar:'✦ نادر',    cls:'badge-rare' },
  trending:   { en:'✦ Trending',   ar:'✦ رائج',    cls:'badge-trending' },
  bestseller: { en:'✦ Bestseller', ar:'✦ الأكثر مبيعاً', cls:'badge-bestseller' }
};

/* ===================== localStorage ===================== */
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
const store = loadSets();

/* ===================== LANGUAGE HELPERS ===================== */
function t(obj) { return typeof obj === 'object' ? (obj[currentLang] || obj.en) : obj; }
function toArabicNums(n) { return n.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]); }
function numStr(n) { return currentLang === 'ar' ? toArabicNums(n) : n; }

function onLanguageChange() {
  const lang = localStorage.getItem('el-lang') || 'en';
  currentLang = lang;
  const isAr = lang === 'ar';
  const html = document.getElementById('htmlRoot') || document.documentElement;
  html.setAttribute('lang', isAr ? 'ar' : 'en');
  html.setAttribute('dir',  isAr ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-ar', isAr);
  
  const langBtnText = document.getElementById('langBtnText');
  if (langBtnText) langBtnText.textContent = isAr ? 'English' : 'Arabic';

  // Show/hide txt-en / txt-ar spans
  document.querySelectorAll('.txt-en').forEach(el => el.style.display = isAr ? 'none' : '');
  document.querySelectorAll('.txt-ar').forEach(el => el.style.display = isAr ? ''     : 'none');

  // Update sort select options
  const sortSel = document.getElementById('sortSelect');
  if (sortSel) {
    const opts = isAr
      ? ['ترتيب: العنوان','ترتيب: المؤلف','ترتيب: التقييم','ترتيب: السنة']
      : ['Sort: Title','Sort: Author','Sort: Rating','Sort: Year'];
    Array.from(sortSel.options).forEach((o,i) => { if (opts[i]) o.text = opts[i]; });
  }

  renderBooks();
  updateSidebarCounts();
}

function onThemeChange() {
  const isDay = localStorage.getItem('el-mode') === 'day';
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = isDay ? '🌙' : '☀️';
  }
}

/* ===================== THEME ===================== */

/* ===================== SIDEBAR COUNTS ===================== */
function updateSidebarCounts() {
  const genres = ['all','romance','adventure','classic','Fiction Books','mystery','poetry','cartoon','Fantasy','Science books','Self Help Books'];
  genres.forEach(g => {
    const el = document.getElementById('cnt-' + g);
    if (!el) return;
    const count = g === 'all' ? booksData.length : booksData.filter(b => b.genre === g).length;
    el.textContent = numStr(count);
  });
  const countEl = document.getElementById('resultsCount');
  if (countEl) {
    const filtered = getFilteredBooks();
    if (currentLang === 'ar') countEl.textContent = numStr(filtered.length) + ' كتاب';
    else countEl.textContent = filtered.length + (filtered.length !== 1 ? ' Volumes' : ' Volume');
  }
}

/* ===================== FILTER / SORT / VIEW ===================== */
function getFilteredBooks() {
  const minRating = parseInt(document.querySelector('input[name="rating"]:checked')?.value || 0);
  const minYear = parseInt(document.getElementById('yearSlider')?.value || 1600);
  const isAvailableOnly = document.getElementById('toggleAvailable')?.classList.contains('on');
  const isRareOnly = document.getElementById('toggleRare')?.classList.contains('on');

  return sortedBooks.filter(b => {
    // Genre filter
    if (currentGenre !== 'all' && b.genre !== currentGenre) return false;
    
    // Rating filter
    if (b.rating < minRating) return false;
    
    // Year filter (from selected year to current)
    if (b.year < minYear) return false;
    
    // Availability (Simulated: 'popular' and 'new' are available, 'rare' is rare)
    if (isAvailableOnly && b.badge === 'rare') return false; 
    if (isRareOnly && b.badge !== 'rare') return false;

    return true;
  });
}

function toggleFilter(el, id) {
  const sw = document.getElementById(id);
  if (sw) {
    sw.classList.toggle('on');
    renderBooks();
  }
}
function getTotalPages() { return Math.max(1, Math.ceil(getFilteredBooks().length / PER_PAGE)); }
function clampPage() { currentPage = Math.max(1, Math.min(currentPage, getTotalPages())); }

function filterGenre(genre, pillEl, sidebarEl) {
  currentGenre = genre; currentPage = 1;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  pillEl?.classList.add('active');
  document.querySelectorAll('.genre-item').forEach(el => el.classList.remove('selected'));
  sidebarEl?.classList.add('selected');
  renderBooks();
}

function setView(view, btn) {
  currentView = view;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderBooks();
}

function sortBooks(by) {
  const comparators = {
    title:  (a, b) => t(a.title).localeCompare(t(b.title)),
    author: (a, b) => t(a.author).localeCompare(t(b.author)),
    rating: (a, b) => b.rating - a.rating,
    year:   (a, b) => a.year - b.year,
  };
  const fn = comparators[by];
  if (!fn) return;
  sortedBooks = [...booksData].sort(fn);
  currentPage = 1; renderBooks();
}

/* ===================== BUILD CARD ===================== */
function buildCard(b) {
  const isFav  = store.favourites.has(b.id);
  const isBook = store.bookmarks.has(b.id);
  const badgeCfg = b.badge ? BADGE_CONFIG[b.badge] : null;
  const badgeHtml = badgeCfg
    ? `<span class="book-badge ${badgeCfg.cls}">${badgeCfg[currentLang] || badgeCfg.en}</span>` : '';
  const yr = t(b.year !== undefined ? b.year : 0);
  const yearLabel = b.year < 0
    ? (currentLang === 'ar' ? `${numStr(Math.abs(b.year))} ق.م` : `${Math.abs(b.year)} BC`)
    : numStr(b.year);
  const genreLabel = GENRE_LABELS[currentLang][b.genre] || b.genre;
  const bookmarkTip = currentLang === 'ar'
    ? (isBook ? 'إزالة الحفظ' : 'حفظ الكتاب') : (isBook ? 'Remove bookmark' : 'Add bookmark');
  const favTip = currentLang === 'ar'
    ? (isFav ? 'إزالة من المفضلة' : 'إضافة للمفضلة') : (isFav ? 'Remove from favourites' : 'Add to favourites');
  const readLabel = currentLang === 'ar' ? 'اقرأ المزيد' : 'Read More';

  return `
    <div class="book-card${isFav ? ' is-favourite' : ''}" data-id="${b.id}" data-genre="${b.genre}">
      <div class="book-cover">
        <div class="book-cover-inner" style="background:linear-gradient(135deg,${b.color[0]},${b.color[1]});">
          <img src="${b.image}" alt="${t(b.title)}" onerror="this.style.display='none'">
        </div>
        <div class="book-cover-overlay"></div>
        ${badgeHtml}
        <button class="book-bookmark-btn${isBook ? ' saved' : ''}"
                onclick="toggleBookmark(event,${b.id})" title="${bookmarkTip}">🔖</button>
      </div>
      <div class="book-info">
        <span class="book-genre-tag">${genreLabel}</span>
        <h3>${t(b.title)}</h3>
        <p class="book-author">${t(b.author)} · ${yearLabel}</p>
        <div class="book-rating">
          <span class="stars-filled">${'★'.repeat(Math.floor(b.rating))}</span>
          <span class="rating-num">${b.rating}</span>
        </div>
        <p class="book-description">${t(b.desc)}</p>
        <div class="book-actions">
          <a href="${b.id === 1004 ? 'book-details.html?id=' + b.id : 'search-books.html?q=' + encodeURIComponent(t(b.title))}" class="btn-read">${readLabel}</a>          <button class="btn-bookmark${isBook ? ' saved' : ''}"
                  onclick="toggleBookmark(event,${b.id})" title="${bookmarkTip}">🔖</button>
          <button class="btn-favorite${isFav ? ' saved' : ''}"
                  onclick="toggleFavourite(event,${b.id})" title="${favTip}">${isFav ? '❤' : '♡'}</button>
        </div>
      </div>
    </div>`;
}

/* ===================== RENDER ===================== */
function renderBooks() {
  const books     = getFilteredBooks();
  const container = document.getElementById('booksContainer');
  const empty     = document.getElementById('emptyState');
  const countEl   = document.getElementById('resultsCount');
  clampPage();

  if (countEl) {
    countEl.textContent = currentLang === 'ar'
      ? numStr(books.length) + ' كتاب'
      : books.length + (books.length !== 1 ? ' Volumes' : ' Volume');
  }

  if (books.length === 0) {
    container.innerHTML = '';
    empty.classList.add('show');
    renderPagination(); return;
  }
  empty.classList.remove('show');

  const viewMap = { grid:'books-grid', list:'books-list', details:'books-details' };
  container.className = viewMap[currentView] ?? 'books-grid';

  const start = (currentPage - 1) * PER_PAGE;
  container.innerHTML = books.slice(start, start + PER_PAGE).map(buildCard).join('');

  container.querySelectorAll('.book-card').forEach((card, i) => {
    card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.3s, border-color 0.3s';
      card.style.opacity = '1'; card.style.transform = 'translateY(0)';
    }, i * 45);
  });
  renderPagination();
}

function renderPagination() {
  const el = document.getElementById('pagination'); if (!el) return;
  const total = getTotalPages();
  const prevDis = currentPage === 1 ? 'disabled' : '';
  const nextDis = currentPage >= total ? 'disabled' : '';
  const isAr = currentLang === 'ar';
  const pageButtons = Array.from({ length: total }, (_, i) => {
    const n = i + 1;
    return `<button class="page-btn${n === currentPage ? ' active' : ''}" onclick="goToPage(${n})">${numStr(n)}</button>`;
  }).join('');
  const prevArrow = isAr ? '›' : '‹';
  const nextArrow = isAr ? '‹' : '›';
  el.innerHTML =
    `<button class="page-btn arrow" onclick="changePage(-1)" ${prevDis}>${prevArrow}</button>` +
    pageButtons +
    `<button class="page-btn arrow" onclick="changePage(1)" ${nextDis}>${nextArrow}</button>`;
}

function goToPage(num) { currentPage = num; clampPage(); renderBooks(); window.scrollTo({top:0,behavior:'smooth'}); }
function changePage(dir) { goToPage(currentPage + dir); }

/* ===================== BOOKMARKS & FAVOURITES ===================== */
function toggleBookmark(e, id) {
  e.stopPropagation();
  const book = booksData.find(b => b.id === id); if (!book) return;
  const name = t(book.title);
  if (store.bookmarks.has(id)) { store.bookmarks.delete(id); showToast(currentLang === 'ar' ? `تمت إزالة "${name}" من الحفوظات` : `"${name}" removed from bookmarks`); }
  else { store.bookmarks.add(id); showToast(currentLang === 'ar' ? `🔖 تم حفظ "${name}"` : `🔖 "${name}" bookmarked`); }
  saveSets(); renderBooks();
}

function toggleFavourite(e, id) {
  e.stopPropagation();
  const book = booksData.find(b => b.id === id); if (!book) return;
  const name = t(book.title);
  if (store.favourites.has(id)) { store.favourites.delete(id); showToast(currentLang === 'ar' ? `تمت إزالة "${name}" من المفضلة` : `"${name}" removed from favourites`); }
  else { store.favourites.add(id); showToast(currentLang === 'ar' ? `❤ تمت إضافة "${name}" إلى المفضلة` : `❤ "${name}" added to favourites`); }
  saveSets(); renderBooks();
}

/* ===================== TOAST ===================== */
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastEl = document.getElementById('toastMsg');
  if (!toast || !toastEl) return;
  toastEl.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  onLanguageChange();
  onThemeChange();
  const particlesEl = document.getElementById('particles');
  if (particlesEl) {
    const colors = ['#c9a84c','#e8c97a','#f5c2cf','rgba(201,168,76,0.3)','rgba(196,79,106,0.4)'];
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 3 + 1;
      p.className = 'particle';
      p.style.cssText =
        `width:${size}px;height:${size}px;left:${Math.random()*100}%;` +
        `background:${colors[Math.floor(Math.random()*colors.length)]};` +
        `animation-duration:${8+Math.random()*12}s;animation-delay:${-Math.random()*15}s;`;
      fragment.appendChild(p);
    }
    particlesEl.appendChild(fragment);
  }

  // Scroll reveal
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(r => revealObs.observe(r));

  // Apply saved language FIRST (this also calls renderBooks & updateSidebarCounts)
  applyLanguage(currentLang);

  // Advanced Filters Event Listeners
  document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.addEventListener('change', () => renderBooks());
  });

  const yearSlider = document.getElementById('yearSlider');
  if (yearSlider) {
    yearSlider.addEventListener('change', () => renderBooks());
  }
});
