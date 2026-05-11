
    /* ---- Particles (same logic as Home) ---- */
    (function createParticles() {
      const container = document.getElementById('particles');
      const colors = ['#c9a84c','#e8c97a','#f5c2cf','#c44f6a','#7a5c1e'];
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 5 + 2;
        p.style.cssText = `
          width:${size}px; height:${size}px;
          left:${Math.random()*100}%;
          background:${colors[Math.floor(Math.random()*colors.length)]};
          animation-duration:${Math.random()*15+8}s;
          animation-delay:${Math.random()*10}s;
        `;
        container.appendChild(p);
      }
    })();

    /* ---- Theme toggle ---- */
    function toggleTheme() {
      const body = document.body;
      const btn  = document.getElementById('themeToggle');
      body.classList.toggle('light-theme');
      btn.textContent = body.classList.contains('light-theme') ? '🌙 Dark' : '☀ Light';
    }

    /* ---- Author data for modal ---- */
    const authorData = {
      austen: {
  emoji: '../image/1.jpeg',
  name: 'Jane Austen',
  dates: '1775 — 1817',
  flag: '🇬🇧',
  genre: 'Romance',
  bio: 'English novelist known for her sharp social commentary and romantic fiction set in Regency-era society.',
  quote: '',
  books: [
    { title: 'Pride & Prejudice', year: '1813' },
    { title: 'Emma', year: '1815' },
    { title: 'Northanger Abbey', year: '1818' }
  ]
},

shakespeare: {
  emoji: '../image/2.jpeg',
  name: 'William Shakespeare',
  dates: '1564 — 1616',
  flag: '🇬🇧',
  genre: 'Classic',
  bio: 'English playwright and poet, widely regarded as the greatest writer in the English language.',
  quote: '',
  books: [
    { title: 'Romeo & Juliet', year: '1597' },
    { title: 'Hamlet', year: '1600' }
  ]
},

tolstoy: {
  emoji: '../image/5.jpeg',
  name: 'Leo Tolstoy',
  dates: '1828 — 1910',
  flag: '🇷🇺',
  genre: 'Classic',
  bio: 'Russian author known for epic novels that explore society, morality, and human psychology.',
  quote: '',
  books: [
    { title: 'War and Peace', year: '1869' },
    { title: 'Anna Karenina', year: '1878' }
  ]
},

homer: {
  emoji: '../image/7.jpeg',
  name: 'Homer',
  dates: 'Ancient Greece',
  flag: '🇬🇷',
  genre: 'Poetry',
  bio: 'Ancient Greek poet traditionally said to be the author of the Iliad and the Odyssey.',
  quote: '',
  books: [
    { title: 'The Iliad', year: '-750' },
    { title: 'The Odyssey', year: '-800' }
  ]
},

cervantes: {
  emoji: '../image/6.jpeg',
  name: 'Miguel de Cervantes',
  dates: '1547 — 1616',
  flag: '🇪🇸',
  genre: 'Adventure',
  bio: 'Spanish writer best known for creating Don Quixote, one of the first modern novels.',
  quote: '',
  books: [
    { title: 'Don Quixote', year: '1605' }
  ]
},

dumas: {
  emoji: '../image/9.jpeg',
  name: 'Alexandre Dumas',
  dates: '1802 — 1870',
  flag: '🇫🇷',
  genre: 'Adventure / Classic',
  bio: 'French writer famous for historical adventure novels filled with action and revenge.',
  quote: '',
  books: [
    { title: 'The Count of Monte Cristo', year: '1844' }
  ]
},

hugo: {
  emoji: '../image/10.jpeg',
  name: 'Victor Hugo',
  dates: '1802 — 1885',
  flag: '🇫🇷',
  genre: 'Classic',
  bio: 'French writer and poet, known for powerful social and historical novels.',
  quote: '',
  books: [
    { title: 'Les Misérables', year: '1862' }
  ]
},

dickens: {
  emoji: '../image/13.jpeg',
  name: 'Charles Dickens',
  dates: '1812 — 1870',
  flag: '🇬🇧',
  genre: 'Classic',
  bio: 'English novelist who highlighted social issues of Victorian England.',
  quote: '',
  books: [
    { title: 'Great Expectations', year: '1861' }
  ]
},

bronte_charlotte: {
  emoji: '../image/3.jpeg',
  name: 'Charlotte Brontë',
  dates: '1816 — 1855',
  flag: '🇬🇧',
  genre: 'Romance / Classic',
  bio: 'English novelist known for strong emotional storytelling and independent female characters.',
  quote: '',
  books: [
    { title: 'Jane Eyre', year: '1847' }
  ]
},

bronte_emily: {
  emoji: '../image/2.jpeg',
  name: 'Emily Brontë',
  dates: '1818 — 1848',
  flag: '🇬🇧',
  genre: 'Romance / Classic',
  bio: 'English novelist and poet known for her intense and dark romantic writing.',
  quote: '',
  books: [
    { title: 'Wuthering Heights', year: '1847' }
  ]
},

melville: {
  emoji: '../image/8.jpeg',
  name: 'Herman Melville',
  dates: '1819 — 1891',
  flag: '🇺🇸',
  genre: 'Adventure / Classic',
  bio: 'American novelist best known for exploring obsession and human struggle.',
  quote: '',
  books: [
    { title: 'Moby Dick', year: '1851' }
  ]
},

dante: {
  emoji: '../image/11.jpeg',
  name: 'Dante Alighieri',
  dates: '1265 — 1321',
  flag: '🇮🇹',
  genre: 'Poetry / Classic',
  bio: 'Italian poet known for his epic journey through the afterlife.',
  quote: '',
  books: [
    { title: 'The Divine Comedy', year: '1320' }
  ]
},

austen_emma: {
  emoji: '../image/1.jpeg',
  name: 'Jane Austen',
  dates: '1775 — 1817',
  flag: '🇬🇧',
  genre: 'Romance / Classic',
  bio: 'English novelist known for social satire and romance.',
  quote: '',
  books: [
    { title: 'Emma', year: '1815' }
  ]

},
shelley: {
  emoji: '../image/17.jpeg',
  name: 'Mary Shelley',
  dates: '1797 — 1851',
  flag: '🇬🇧',
  genre: 'Mystery / Science Books',
  bio: 'English novelist best known for Frankenstein, one of the earliest science fiction works.',
  quote: '',
  books: [
    { title: 'Frankenstein', year: '1818' }
  ]
},

doyle: {
  emoji: '../image/18.jpeg',
  name: 'Arthur Conan Doyle',
  dates: '1859 — 1930',
  flag: '🇬🇧',
  genre: 'Mystery',
  bio: 'British writer and creator of Sherlock Holmes.',
  quote: '',
  books: [
    { title: 'The Hound of the Baskervilles', year: '1902' }
  ]
},

christie: {
  emoji: '../image/19.jpeg',
  name: 'Agatha Christie',
  dates: '1890 — 1976',
  flag: '🇬🇧',
  genre: 'Mystery',
  bio: 'Famous crime novelist known as the Queen of Mystery.',
  quote: '',
  books: [
    { title: 'And Then There Were None', year: '1939' }
  ]
},

voltaire: {
  emoji: '../image/12.jpeg',
  name: 'Voltaire',
  dates: '1694 — 1778',
  flag: '🇫🇷',
  genre: 'Classic',
  bio: 'French Enlightenment writer and philosopher known for satire and criticism of society.',
  quote: '',
  books: [
    { title: 'Candide', year: '1759' }
  ]
},

virgil: {
  emoji: '../image/21.jpeg',
  name: 'Virgil',
  dates: '70 BC — 19 BC',
  flag: '🇮🇹',
  genre: 'Poetry',
  bio: 'Roman poet best known for The Aeneid.',
  quote: '',
  books: [
    { title: 'The Aeneid', year: '-19' }
  ]
},

goethe: {
  emoji: '../image/22.jpeg',
  name: 'Johann Wolfgang von Goethe',
  dates: '1749 — 1832',
  flag: '🇩🇪',
  genre: 'Poetry / Classic',
  bio: 'German writer and thinker, a major figure of European literature.',
  quote: '',
  books: [
    { title: 'Faust', year: '1808' }
  ]
},

milton: {
  emoji: '../image/20.jpeg',
  name: 'John Milton',
  dates: '1608 — 1674',
  flag: '🇬🇧',
  genre: 'Poetry',
  bio: 'English poet best known for Paradise Lost.',
  quote: '',
  books: [
    { title: 'Paradise Lost', year: '1667' }
  ]
},

cervantes_extra: {
  emoji: '../image/6.jpeg',
  name: 'Miguel de Cervantes',
  dates: '1547 — 1616',
  flag: '🇪🇸',
  genre: 'Adventure',
  bio: 'Spanish author of Don Quixote, considered the first modern novel.',
  quote: '',
  books: [
    { title: 'Don Quixote', year: '1605' }
  ]
},

hanan_lashin: {
  emoji: '../image/37.jpeg',
  name: 'Hanan Lashin',
  dates: 'Contemporary',
  flag: '🇪🇬',
  genre: 'Fantasy / Fiction Books',
  bio: 'Egyptian author known for the Kingdom of Eloquence series mixing fantasy and philosophy.',
  quote: '',
  books: [
    { title: 'Ikadoli', year: '2017' },
    { title: 'Opal', year: '2018' },
    { title: 'Amanos', year: '2019' },
    { title: 'Kuikoul', year: '2020' },
    { title: 'Socotra', year: '2021' }
  ]
},

amr_abdel_hamid: {
  emoji: '../image/39.jpeg',
  name: 'Amr Abdel Hamid',
  dates: 'Contemporary',
  flag: '🇪🇬',
  genre: 'Fiction Books',
  bio: 'Egyptian novelist known for emotional and social fiction stories.',
  quote: '',
  books: [
    { title: 'فتاة الياقة الزرقاء', year: '2018' }
  ]
},

dickens_extra: {
  emoji: '../image/13.jpeg',
  name: 'Charles Dickens',
  dates: '1812 — 1870',
  flag: '🇬🇧',
  genre: 'Classic',
  bio: 'English writer who portrayed Victorian society and social injustice.',
  quote: '',
  books: [
    { title: 'Great Expectations', year: '1861' }
  ]
}
      };

    function openModal(id) {
  console.log(id);
  const data = authorData[id];
  console.log(data);

  if (!data) return;

      /* Build modal HTML */
      const booksHTML = data.books.map(b =>
        `<li><span>${b.title}</span><span>${b.year}</span></li>`
      ).join('');

      document.getElementById('modalContent').innerHTML = `
        <div class="modal-author-header">
         <div class="modal-avatar">
  <img src="${data.emoji}" alt="${data.name}">
</div>
          <div class="modal-author-info">
            <h2>${data.name.split(' ').slice(0,-1).join(' ')} <em>${data.name.split(' ').pop()}</em></h2>
            <p class="modal-meta">${data.dates} &nbsp;·&nbsp; ${data.flag} &nbsp;·&nbsp; ${data.genre}</p>
          </div>
        </div>
        <p class="modal-section-title">Biography</p>
        <p class="modal-body-text">${data.bio}</p>
        <blockquote class="modal-quote">${data.quote}</blockquote>
        <p class="modal-section-title">Selected Works</p>
        <ul class="modal-books-list">${booksHTML}</ul>
      `;

      document.getElementById('modalOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    /* ---- Close modal ---- */
    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }
    function closeModalOnBg(e) {
      if (e.target === document.getElementById('modalOverlay')) closeModal();
    }
    /* ESC key closes modal */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });

    /* ---- Filter by genre ---- */
    function filterAuthors(genre, btn) {

  document.querySelectorAll('.filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.author-card');
  let shown = 0;

  cards.forEach(card => {

    const cardGenre = card.dataset.genre || "";

    const match =
      genre === 'All Genre' ||
      cardGenre.includes(genre.toLowerCase());

    if (match) {
      card.classList.remove('hidden');
      shown++;
    } else {
      card.classList.add('hidden');
    }
  });

  updateCount(shown);
}
    /* ---- Search by name ---- */
    function searchAuthors(query) {
      const q = query.toLowerCase().trim();
      const cards = document.querySelectorAll('.author-card');
      let shown = 0;

      /* Reset genre filter visually */
      if (q) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.filter-btn[data-genre="all"]').classList.add('active');
      }

      cards.forEach(card => {
        const name = card.dataset.name || '';
        const match = !q || name.includes(q);
        card.classList.toggle('hidden', !match);
        if (match) shown++;
      });

      updateCount(shown);
    }

    /* ---- Update count text ---- */
    function updateCount(n) {
      document.getElementById('resultsCount').textContent =
        n === 0 ? 'No authors found' : `Showing ${n} author${n !== 1 ? 's' : ''}`;
    }

    /* ---- Sort table ---- */
    let sortState = { col:-1, dir:1 };
    function sortTable(colIndex) {
      const tbody = document.getElementById('worksTableBody');
      const rows  = Array.from(tbody.querySelectorAll('tr'));
      const ths   = document.querySelectorAll('.works-table thead th[data-sort]');

      /* Toggle direction if same column */
      if (sortState.col === colIndex) {
        sortState.dir *= -1;
      } else {
        sortState.col = colIndex;
        sortState.dir = 1;
      }

      /* Update header indicators */
      ths.forEach((th, i) => {
        th.classList.remove('asc', 'desc');
        if (i === colIndex) th.classList.add(sortState.dir === 1 ? 'asc' : 'desc');
      });

      /* Sort rows */
      rows.sort((a, b) => {
        const aText = a.cells[colIndex].textContent.trim();
        const bText = b.cells[colIndex].textContent.trim();
        const aNum  = parseFloat(aText);
        const bNum  = parseFloat(bText);
        if (!isNaN(aNum) && !isNaN(bNum)) return (aNum - bNum) * sortState.dir;
        return aText.localeCompare(bText) * sortState.dir;
      });

      rows.forEach(r => tbody.appendChild(r));
    }
const grid = document.getElementById("authorsGrid");

Object.keys(authorData).forEach(key => {
  const author = authorData[key];

  
const card = document.createElement("div");
card.className = "author-card";

card.dataset.name = author.name.toLowerCase();
card.dataset.genre = author.genre.toLowerCase();
  
  card.innerHTML = `
    <div class="card-portrait">
      <div class="author-image">
        <img src="${author.emoji}" alt="${author.name}">
      </div>

      <span class="genre-badge">${author.genre}</span>
    </div>

    <div class="card-body">
      <h3 class="author-name">${author.name}</h3>
      <p class="author-dates">${author.dates}</p>

      <button class="card-btn" onclick="openModal('${key}')">
        View Profile
      </button>
    </div>
  `;

  grid.appendChild(card);
});

