
    /* ----------------------------------------------------------
       1. FLOATING PARTICLES
    ---------------------------------------------------------- */
    (function createParticles() {
      const container = document.getElementById('particles');
      const colors = ['#c9a84c','#e8c97a','#f5c2cf','#8b1a3a','#ffffff'];
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        p.style.cssText = `
          width:${size}px; height:${size}px;
          left:${Math.random()*100}%;
          background:${colors[Math.floor(Math.random()*colors.length)]};
          animation-duration:${Math.random()*15+10}s;
          animation-delay:${Math.random()*10}s;
        `;
        container.appendChild(p);
      }
    })();

    /* ----------------------------------------------------------
       2. SCROLL REVEAL
    ---------------------------------------------------------- */
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ----------------------------------------------------------
       3. MOBILE NAV
    ---------------------------------------------------------- */
    document.getElementById('hamburgerBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.add('open');
    });
    document.getElementById('mobileClose').addEventListener('click', closeMobile);
    function closeMobile() {
      document.getElementById('mobileMenu').classList.remove('open');
    }

    /* ----------------------------------------------------------
       4. THEME TOGGLE
    ---------------------------------------------------------- */
    function setTheme(mode) {
      if (mode === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeDark').classList.remove('dark-btn');
        document.getElementById('themeDark').classList.add('light-btn');
        document.getElementById('themeLight').classList.remove('light-btn');
        document.getElementById('themeLight').classList.add('dark-btn');
      } else {
        document.body.classList.remove('light-theme');
        document.getElementById('themeDark').classList.add('dark-btn');
        document.getElementById('themeDark').classList.remove('light-btn');
        document.getElementById('themeLight').classList.add('light-btn');
        document.getElementById('themeLight').classList.remove('dark-btn');
      }
    }

    /* ----------------------------------------------------------
       5. FILTER POSTS
    ---------------------------------------------------------- */
    function filterPosts(category, btn) {
      if (btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      const posts = document.querySelectorAll('#postsGrid .post-card, .featured-post');
      posts.forEach(post => {
        const cat = post.getAttribute('data-category');
        if (category === 'all' || cat === category) {
          post.style.display = '';
          post.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          post.style.display = 'none';
        }
      });
    }

    /* ----------------------------------------------------------
       6. LIVE SEARCH
    ---------------------------------------------------------- */
    const allPosts = [
      { id:'featured', title:'Why Austen Still Rules Every Reading List', cat:'Classics' },
      { id:'post1', title:'The Name of the Wind: A Symphony in Words', cat:'Fantasy' },
      { id:'post2', title:"And Then There Were None — Agatha's Greatest Trick", cat:'Mystery' },
      { id:'post3', title:'Sapiens: A Brief History We Never Expected', cat:'Non-Fiction' },
      { id:'post4', title:'Dune — The Desert Planet That Became a Universe', cat:'Sci-Fi' },
      { id:'post5', title:'One Hundred Years of Solitude: Magical & Real', cat:'Fiction' },
      { id:'post6', title:"Crime and Punishment: Dostoevsky's Dark Mirror", cat:'Classics' },
      { id:'post7', title:'A Song of Ice and Fire: Chaos is a Ladder', cat:'Fantasy' },
      { id:'post8', title:'The Kite Runner — A Story That Haunts You', cat:'Fiction' },
    ];

    function liveSearch(query) {
      const resultsBox = document.getElementById('searchResults');
      if (!query.trim()) {
        resultsBox.style.display = 'none';
        resultsBox.innerHTML = '';
        return;
      }
      const q = query.toLowerCase();
      const matches = allPosts.filter(p =>
        p.title.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
      );
      if (matches.length === 0) {
        resultsBox.innerHTML = '<p class="search-result-item" style="cursor:default;color:rgba(247,237,216,0.4);">No results found.</p>';
      } else {
        resultsBox.innerHTML = matches.map(p =>
          `<div class="search-result-item" onclick="openModal('${p.id}')">
            <strong style="color:var(--gold)">${p.cat}</strong> — ${p.title}
          </div>`
        ).join('');
      }
      resultsBox.style.display = 'block';
    }

    /* ----------------------------------------------------------
       7. LOAD MORE
    ---------------------------------------------------------- */
    let loaded = false;
    function loadMore() {
      if (!loaded) {
        const extra = document.getElementById('extraPosts');
        extra.style.display = 'block';
        extra.querySelectorAll('.reveal').forEach(el => {
          revealObserver.observe(el);
          setTimeout(() => el.classList.add('visible'), 100);
        });
        document.getElementById('loadMoreBtn').textContent = '✦ All Articles Loaded';
        document.getElementById('loadMoreBtn').disabled = true;
        document.getElementById('loadMoreBtn').style.opacity = '0.5';
        loaded = true;
      }
    }

    /* ----------------------------------------------------------
       8. NEWSLETTER FORM VALIDATION
    ---------------------------------------------------------- */
    function subscribeNewsletter() {
      const name  = document.getElementById('nlName').value.trim();
      const email = document.getElementById('nlEmail').value.trim();
      const msg   = document.getElementById('nlMsg');

      msg.style.display = 'none';
      msg.classList.remove('error');

      if (!name) { showNlMsg('Please enter your name.', true); return; }
      if (!email) { showNlMsg('Please enter your email address.', true); return; }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNlMsg('Please enter a valid email address.', true);
        return;
      }

      showNlMsg('✦ You\'re subscribed! Welcome to The Literary Corner.', false);
      document.getElementById('nlName').value  = '';
      document.getElementById('nlEmail').value = '';
    }

    function showNlMsg(text, isError) {
      const msg = document.getElementById('nlMsg');
      msg.textContent = text;
      msg.style.display = 'block';
      if (isError) { msg.classList.add('error'); }
    }

    /* ----------------------------------------------------------
       9. POST MODAL
    ---------------------------------------------------------- */
    const modalData = {
      featured: {
        tag: 'Classics · Editor\'s Pick',
        title: '"Pride & Prejudice" — Why Austen Still Rules Every Reading List',
        meta: ['May 2, 2026', 'Layla Hassan', '8 min read'],
        stars: '★★★★★',
        body: `<p>Jane Austen's <em class="highlight">Pride and Prejudice</em> was first published in 1813, yet it has never once felt dated. Two centuries of readers have fallen in love with Elizabeth Bennet — her sharpness, her humour, her stubborn refusal to marry without affection.</p>
               <p>What makes this novel endure? It is the architecture of wit. Every sentence balances irony against sincerity. Every scene peels back a layer of social performance to reveal something painfully human underneath.</p>
               <p>Darcy's famous first proposal is still one of the most dramatically satisfying moments in English literature — a man so blinkered by pride that he is astonished to be refused, and a woman brave enough to say no to security when it comes without respect.</p>
               <p>If you have never read it, start this weekend. If you have read it, it is time to read it again.</p>`
      },
      post1: {
        tag: 'Fantasy',
        title: 'The Name of the Wind: A Symphony in Words',
        meta: ['Apr 28, 2026', 'Sara Malik', '6 min read'],
        stars: '★★★★★',
        body: `<p>Patrick Rothfuss's debut is one of the rare fantasy novels that can be judged purely as prose — and it still wins. <em class="highlight">The Name of the Wind</em> is the story of Kvothe, the most legendary figure of his age, telling the truth of his life to a chronicler in a quiet inn.</p>
               <p>What follows is three days of storytelling: a childhood with a travelling troupe of performers, years of poverty and hunger, admission to the University where magic is taught as a science, and the relentless pursuit of knowledge about the mythical Chandrian.</p>
               <p>The magic system — Sympathy — is rigorous and internally logical. The world-building feels deep without being exhausting. And the prose is simply beautiful.</p>`
      },
      post2: {
        tag: 'Mystery',
        title: "And Then There Were None — Agatha's Greatest Trick",
        meta: ['Apr 22, 2026', 'Omar Fawzi', '5 min read'],
        stars: '★★★★★',
        body: `<p>Agatha Christie wrote over eighty novels, but <em class="highlight">And Then There Were None</em> remains her masterpiece. Ten strangers are lured to an isolated island, each accused of a past crime. One by one, they begin to die.</p>
               <p>The genius of the novel is structural: it eliminates its own suspects systematically until the solution is both inevitable and completely unexpected. Christie cheats fairly — all the clues are there, and you will miss every one of them.</p>
               <p>Re-read it immediately after your first reading. You will be stunned by how much you missed.</p>`
      },
      post3: {
        tag: 'Non-Fiction',
        title: 'Sapiens: A Brief History We Never Expected',
        meta: ['Apr 18, 2026', 'Nour El-Din', '7 min read'],
        stars: '★★★★☆',
        body: `<p>Yuval Noah Harari's <em class="highlight">Sapiens</em> asks one deceptively simple question: how did one unremarkable primate come to rule the world? The answer spans 70,000 years and overturns almost everything you thought you knew.</p>
               <p>Harari argues that our species' true superpower is the ability to believe in shared fictions — nations, money, religion, human rights. These are all stories we tell each other. But stories, it turns out, are the most powerful force in history.</p>
               <p>Not everyone agrees with every argument. But the book will change how you think, which is the only thing that matters.</p>`
      },
      post4: {
        tag: 'Sci-Fi',
        title: 'Dune — The Desert Planet That Became a Universe',
        meta: ['Apr 14, 2026', 'Amira Sayed', '7 min read'],
        stars: '★★★★★',
        body: `<p>Frank Herbert published <em class="highlight">Dune</em> in 1965. It was rejected by twenty publishers before finding a home. It won the Hugo and Nebula awards and went on to become the best-selling science fiction novel of all time.</p>
               <p>The story follows young Paul Atreides as his noble family takes control of Arrakis — the only source of the most valuable substance in the universe, the spice Melange. Betrayal, prophecy, and ecological catastrophe follow.</p>
               <p>Herbert built not just a world but a philosophy: of ecology, of power, of the danger of messiahs. Every page rewards a careful reader.</p>`
      },
      post5: {
        tag: 'Fiction',
        title: 'One Hundred Years of Solitude: Magical & Real',
        meta: ['Apr 9, 2026', 'Layla Hassan', '9 min read'],
        stars: '★★★★★',
        body: `<p>García Márquez once said that he wrote <em class="highlight">One Hundred Years of Solitude</em> the way his grandmother used to tell stories — with complete conviction, no matter how impossible the events. The result is the defining novel of magical realism.</p>
               <p>The Buendía family founders the town of Macondo. Over seven generations, the family and the town spiral through war, love, invention, madness, and eventually, oblivion. The ending remains one of the most audacious in all of literature.</p>
               <p>It is a novel about memory, about the way families repeat their mistakes, about the loneliness at the heart of all human ambition.</p>`
      },
      post6: {
        tag: 'Classics',
        title: "Crime and Punishment: Dostoevsky's Dark Mirror",
        meta: ['Apr 3, 2026', 'Youssef Karim', '8 min read'],
        stars: '★★★★★',
        body: `<p>Raskolnikov is a brilliant, destitute student who convinces himself that extraordinary men are above ordinary moral law. He kills a pawnbroker to prove his theory. What follows is one of the most devastating psychological portraits in literary history.</p>
               <p><em class="highlight">Crime and Punishment</em> is less about the crime than about the punishment — not legal punishment, but the unravelling of a mind that cannot outrun its own conscience.</p>
               <p>Dostoevsky wrote it while in serious debt, publishing it in monthly instalments. That urgency is on every page.</p>`
      },
      post7: {
        tag: 'Fantasy',
        title: 'A Song of Ice and Fire: Chaos is a Ladder',
        meta: ['Mar 28, 2026', 'Sara Malik', '6 min read'],
        stars: '★★★★☆',
        body: `<p>Before the TV series, before the memes, there were the books — and the books are extraordinary. George R.R. Martin set out to write a fantasy epic that felt genuinely historical, where the good do not always triumph and the wicked are not always punished.</p>
               <p><em class="highlight">A Game of Thrones</em> shocks readers who expect the genre's traditional conventions. Characters who feel like heroes are removed. Political scheming replaces sword-and-sorcery as the engine of plot.</p>
               <p>The series remains unfinished, which is its own kind of tragedy. But the first three books, at least, are among the finest fantasy ever written.</p>`
      },
      post8: {
        tag: 'Fiction',
        title: 'The Kite Runner — A Story That Haunts You',
        meta: ['Mar 22, 2026', 'Nour El-Din', '6 min read'],
        stars: '★★★★★',
        body: `<p>Khaled Hosseini's debut novel opens in Afghanistan in the 1970s, follows its narrator Amir through the Soviet invasion, exile in America, and finally a return to Taliban-controlled Kabul to seek redemption for a childhood betrayal.</p>
               <p><em class="highlight">The Kite Runner</em> is a novel about fathers and sons, about the weight of what we leave undone, about whether forgiveness — of others and of ourselves — is truly possible.</p>
               <p>It is a book that will stay with you for years. Some readers report they think about it every time they see a kite.</p>`
      },
    };

    function openModal(id) {
      const data = modalData[id];
      if (!data) return;
      document.getElementById('modalContent').innerHTML = `
        <p class="modal-tag">${data.tag}</p>
        <h2 class="modal-title">${data.title}</h2>
        <div class="modal-meta">
          <span>📅 ${data.meta[0]}</span>
          <span>👤 ${data.meta[1]}</span>
          <span>⏱ ${data.meta[2]}</span>
        </div>
        <div class="modal-body">${data.body}</div>
        <div class="modal-stars">${data.stars}</div>
      `;
      document.getElementById('modalOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    function closeModalOutside(e) {
      if (e.target === document.getElementById('modalOverlay')) closeModal();
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  
