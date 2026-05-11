
  /* ---- Publisher data for modal ---- */
  const publishers = [
    {
      emoji: "🐧",
      name: "Penguin Random House",
      location: "London, United Kingdom",
      founded: "1927",
      color: "rgba(42,90,122,0.4)",
      website: "penguinrandomhouse.com",
      desc: "The world's largest trade book publisher, formed in 2013 by the merger of Penguin Group and Random House. With over 300 imprints publishing more than 70,000 titles annually across 20+ languages, PRH is a true global literary powerhouse.",
      specialties: ["Literary Fiction", "Non-Fiction", "Children's Books", "Crime & Thriller", "Biography"],
      titles: 15000,
      notableBooks: ["In Cold Blood", "The Great Gatsby", "To Kill a Mockingbird", "Normal People", "Beloved", "East of Eden"]
    },
    {
      emoji: "🌙",
      name: "Dar Al-Shorouk",
      location: "Cairo, Egypt",
      founded: "1968",
      color: "rgba(139,58,42,0.4)",
      website: "shorouk.com",
      desc: "Founded in Cairo in 1968, Dar Al-Shorouk has grown into one of the Arab world's most influential cultural institutions. The house champions contemporary Arab writing and produces high-quality translations of global literature.",
      specialties: ["Arabic Literature", "Political Thought", "History", "Philosophy", "Translation"],
      titles: 4200,
      notableBooks: ["عمارة يعقوبيان", "واحة الغروب", "بيت من لحم", "عصر الحب", "شيكاغو"]
    },
    {
      emoji: "⚜️",
      name: "Gallimard",
      location: "Paris, France",
      founded: "1911",
      color: "rgba(90,42,106,0.4)",
      website: "gallimard.fr",
      desc: "Éditions Gallimard is the crown jewel of French publishing. Founded by Gaston Gallimard alongside André Gide and Jean Schlumberger, it has cultivated more Nobel Prize winners in Literature than any other publisher.",
      specialties: ["Literary Fiction", "Poetry", "Philosophy", "Theatre", "Crime (Série Noire)"],
      titles: 8500,
      notableBooks: ["À la recherche du temps perdu", "L'Étranger", "La Nausée", "Les Mandarins", "Moderato Cantabile"]
    },
    {
      emoji: "🦅",
      name: "S. Fischer Verlag",
      location: "Frankfurt, Germany",
      founded: "1886",
      color: "rgba(58,106,42,0.4)",
      website: "fischerverlage.de",
      desc: "One of Germany's oldest literary publishers, S. Fischer introduced Scandinavian, Russian, and American literature to German readers. It published Thomas Mann, Gerhart Hauptmann, and Stefan Zweig in their prime.",
      specialties: ["World Literature", "German Fiction", "Drama", "Essays", "Biography"],
      titles: 6000,
      notableBooks: ["Buddenbrooks", "Der Zauberberg", "Schachnovelle", "Effi Briest", "Das Parfum"]
    },
    {
      emoji: "🌿",
      name: "Dar Al-Adab",
      location: "Beirut, Lebanon",
      founded: "1956",
      color: "rgba(122,90,26,0.4)",
      website: "dar-eladab.com",
      desc: "Established in Beirut in 1956, Dar Al-Adab has been a beacon for Arab literary culture, specialising in translated world literature and providing a vital platform for women's writing in the Arab world.",
      specialties: ["Arabic Fiction", "World Literature Translations", "Women's Writing", "Poetry"],
      titles: 2800,
      notableBooks: ["أيام معه — كوليت خوري", "الوجه الآخر للمرآة", "بيروت بيروت", "تراب الغرباء"]
    },
    {
      emoji: "🦁",
      name: "HarperCollins",
      location: "New York, United States",
      founded: "1817",
      color: "rgba(106,42,58,0.4)",
      website: "harpercollins.com",
      desc: "One of the Big Five English-language publishers, HarperCollins traces its roots to J. & J. Harper in 1817. With 120 imprints worldwide, it is home to an extraordinary range of authors from C.S. Lewis to Neil Gaiman.",
      specialties: ["Fiction", "Children's Books", "Thriller", "Biography", "Self-Help"],
      titles: 10000,
      notableBooks: ["The Lion, the Witch and the Wardrobe", "To Kill a Mockingbird", "American Gods", "Catch-22", "Watership Down"]
    }
  ];

  /* ---- Modal open/close ---- */
  function openModal(index) {
    const p = publishers[index];
    const tagsHTML = p.specialties.map(t => `<span class="pub-tag" style="margin:3px;">${t}</span>`).join('');
    const booksHTML = p.notableBooks.map(b => `<span class="book-pill">${b}</span>`).join('');
    document.getElementById('modal-content').innerHTML = `
      <div style="display:flex;align-items:center;gap:20px;margin-bottom:28px;">
        <div style="width:70px;height:70px;border-radius:50%;background:${p.color};
          display:flex;align-items:center;justify-content:center;font-size:32px;
          border:2px solid rgba(201,168,76,.2);flex-shrink:0;">${p.emoji}</div>
        <div>
          <h2 style="font-family:'Playfair Display',serif;font-size:28px;font-weight:900;color:var(--cream);">${p.name}</h2>
          <p style="font-family:'IM Fell English',serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold-dim);margin-top:4px;">
            📍 ${p.location} &nbsp;·&nbsp; Est. ${p.founded}
          </p>
        </div>
      </div>
      <p style="font-size:16px;line-height:1.85;color:rgba(247,237,216,.75);margin-bottom:24px;">${p.desc}</p>
      <div style="margin-bottom:20px;">
        <p style="font-family:'IM Fell English',serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;">Specialties</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${tagsHTML}</div>
      </div>
      <div style="margin-bottom:24px;">
        <p style="font-family:'IM Fell English',serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;">Notable Titles</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">${booksHTML}</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;
        border-top:1px solid rgba(201,168,76,.15);padding-top:20px;flex-wrap:wrap;gap:12px;">
        <span style="font-family:'Playfair Display',serif;font-size:32px;font-weight:900;color:var(--gold);">
          ${p.titles.toLocaleString()}+
          <span style="font-family:'IM Fell English',serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold-dim);display:block;margin-top:-4px;">Published Titles</span>
        </span>
        <a href="#" class="btn-details" style="display:inline-block;">Visit Website ↗</a>
      </div>
    `;
    const overlay = document.getElementById('modal-overlay');
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      document.getElementById('modal-box').style.opacity = '0';
      document.getElementById('modal-box').style.transform = 'translateY(20px)';
      document.getElementById('modal-box').style.transition = 'opacity .4s, transform .4s';
      requestAnimationFrame(() => {
        document.getElementById('modal-box').style.opacity = '1';
        document.getElementById('modal-box').style.transform = 'translateY(0)';
      });
    });
  }

  function closeModal(event) {
    if (event === null || event.target === document.getElementById('modal-overlay')) {
      document.getElementById('modal-overlay').style.display = 'none';
    }
  }

  /* ---- View toggle (Grid / List / Details) ---- */
  function switchView(view, btn) {
    // Toggle active class on buttons
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide views
    document.getElementById('viewGrid').classList.add('hidden');
    document.getElementById('viewList').classList.add('hidden');
    document.getElementById('viewDetails').classList.add('hidden');
    document.getElementById('view' + view.charAt(0).toUpperCase() + view.slice(1)).classList.remove('hidden');
  }

  /* ---- Search / filter ---- */
  function applyFilters() {
    const name    = document.getElementById('searchName').value.toLowerCase();
    const country = document.getElementById('filterCountry').value.toLowerCase();
    const genre   = document.getElementById('filterGenre').value.toLowerCase();

    let count = 0;
    document.querySelectorAll('.pub-card').forEach(card => {
      const cardName    = (card.dataset.name    || '').toLowerCase();
      const cardCountry = (card.dataset.country || '').toLowerCase();
      const cardGenre   = (card.dataset.genre   || '').toLowerCase();

      const matchName    = !name    || cardName.includes(name);
      const matchCountry = !country || cardCountry.includes(country);
      const matchGenre   = !genre   || cardGenre.includes(genre);

      if (matchName && matchCountry && matchGenre) {
        card.style.display = '';
        count++;
      } else {
        card.style.display = 'none';
      }
    });

    document.getElementById('countTotal').textContent = count;
  }

  /* ---- Scroll reveal ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- Floating particles ---- */
  (function spawnParticles() {
    const container = document.getElementById('particles');
    const colors = ['#c9a84c', '#e8c97a', '#f5c2cf', '#8b3a2a', '#ffffff'];
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 5 + 2;
      p.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random()*100}%;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        animation-duration:${Math.random()*15+10}s;
        animation-delay:${Math.random()*15}s;
      `;
      container.appendChild(p);
    }
  })();

  /* ---- Keyboard: close modal on Escape ---- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal(null);
  });

