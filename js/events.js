

  /* ---- Hamburger nav ---- */
  document.getElementById('hamburger').addEventListener('click',function(){
    const links=document.querySelector('.nav-links');
    const open=links.style.display==='flex';
    links.style.cssText=open
      ?''
      :'display:flex;flex-direction:column;position:fixed;top:60px;right:0;background:rgba(13,10,6,.98);padding:24px 32px;gap:20px;border-left:1px solid rgba(201,168,76,.2);z-index:999;';
  });

  /* ---- Reveal on scroll ---- */
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:.12});
  document.querySelectorAll('.reveal,.timeline-item').forEach(el=>observer.observe(el));

  /* ---- Filter pills ---- */
  document.querySelectorAll('.pill').forEach(btn=>{
    btn.addEventListener('click',function(){
      document.querySelectorAll('.pill').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      applyFilters();
    });
  });

  document.getElementById('eventSearch').addEventListener('input',applyFilters);

  function applyFilters(){
    const active=document.querySelector('.pill.active').dataset.filter;
    const q=document.getElementById('eventSearch').value.toLowerCase().trim();

    /* Timeline events */
    document.querySelectorAll('.timeline-item').forEach(item=>{
      const matchFilter=active==='all'||item.dataset.filter===active;
      const text=item.textContent.toLowerCase();
      const matchSearch=q===''||text.includes(q);
      item.style.display=(matchFilter&&matchSearch)?'':'none';
    });

    /* Interview cards */
    document.querySelectorAll('.interview-card').forEach(card=>{
      const matchFilter=active==='all'||active==='interview'||card.dataset.filter===active;
      const text=card.textContent.toLowerCase();
      const matchSearch=q===''||text.includes(q);
      card.style.display=(matchFilter&&matchSearch)?'':'none';
    });
  }

  /* ---- View toggle ---- */
  document.getElementById('gridBtn').addEventListener('click',function(){
    document.getElementById('interviewsGrid').classList.remove('list-view');
    this.classList.add('active');
    document.getElementById('listBtn').classList.remove('active');
  });
  document.getElementById('listBtn').addEventListener('click',function(){
    document.getElementById('interviewsGrid').classList.add('list-view');
    this.classList.add('active');
    document.getElementById('gridBtn').classList.remove('active');
  });

  /* ---- Modal data ---- */
  const modalData={
    featured:{
      category:'Exclusive Interview · Fiction',
      title:'Every Story Begins With a <em>Door Left Open</em>',
      author:'Layla Al-Hassan — Award-winning Novelist',
      qa:[
        {
          q:'Your novel "The Amber Cartographer" was three years in the making. What were those years like?',
          a:'They were years of becoming someone else and then returning to myself. I wrote three complete drafts that I burned — metaphorically, of course, though there was one evening I nearly did it literally. The story kept demanding more truth from me than I knew how to give.'
        },
        {
          q:'You\'ve said you write by candlelight. Is that a ritual or a necessity?',
          a:'It began as ritual and became necessity. The candle removes the grid lines from the sky. There are no notifications, no blue light telling my brain it is noon when it is midnight. The flame flickers and my sentences do too — that impermanence feels honest.'
        },
        {
          q:'What advice would you give to a writer who is afraid their voice is not important enough?',
          a:'I would tell them that importance is the wrong measure entirely. A story does not need to matter to the world — it needs to matter to the person who wrote it, with total sincerity. The world recognises sincerity. It has no defences against it.'
        }
      ]
    },
    '1':{
      category:'Fantasy · World-building',
      title:'"Magic is just physics <em>we haven\'t named yet"</em>',
      author:'Nour Khalil — Fantasy Author',
      qa:[
        {
          q:'You always begin a new book with a map. Why?',
          a:'Because geography is character. The shape of a mountain range determines whether a civilisation is isolated or connected. A river decides trade, and trade decides power. If I know the land, I know who my people will become before I write a single word of dialogue.'
        },
        {
          q:'Where does magic fit into a system of believable physics?',
          a:'Magic, for me, is always a form of cost. Nothing appears from nothing. If a character can bend light, something else in her world is darker. I build the rules first, then I find the loopholes — because every reader will look for them anyway.'
        }
      ]
    },
    '2':{
      category:'Historical Fiction',
      title:'"History is the best <em>unreliable narrator"</em>',
      author:'Omar Fakhouri — Historical Novelist',
      qa:[
        {
          q:'Three years in Ottoman archives. What did you find that changed the book?',
          a:'A single merchant\'s ledger from 1703. It listed transactions that had no official record — goods that should not have moved between empires that were officially at war. That ledger became the spine of the novel. History is full of unofficial spines.'
        },
        {
          q:'How do you balance accuracy with narrative necessity?',
          a:'I am loyal to emotional truth first and factual truth second. If I know a journey took six weeks but the story needs four, I will compress time and put a footnote. The footnote is my conscience. The four weeks is my novel.'
        }
      ]
    },
    '3':{
      category:'Literary Fiction · Environment',
      title:'"The earth tells stories. <em>We just stopped listening."</em>',
      author:'Dina Mostafa — Eco-lit Author',
      qa:[
        {
          q:'How do you write about environmental grief without turning a novel into a lecture?',
          a:'I never write about "the environment." I write about this specific tree, this particular stretch of coastline, this woman who has watched the beach shrink for forty years. Specificity creates grief. Generality creates guilt. Readers close books that make them feel guilty. They carry the ones that make them grieve.'
        }
      ]
    },
    '4':{
      category:'Thriller · Crime',
      title:'"Every killer thinks they\'re the hero <em>of their own story"</em>',
      author:'Tariq Mansour — Crime Writer',
      qa:[
        {
          q:'You\'ve been criticised for writing sympathetic villains. Does that bother you?',
          a:'It tells me I succeeded. A villain who is simply evil is a children\'s story. A villain who is comprehensible — not justified, but comprehensible — that is a mirror. I want my readers uncomfortable, not reassured.'
        },
        {
          q:'Cairo as a character — how do you write a city?',
          a:'I walk it at 3 AM. Cairo at 3 AM is a different city than Cairo at noon. The same street reveals different things depending on who is still awake to witness it. I give my detective insomnia specifically so he can see both Cairos.'
        }
      ]
    },
    '5':{
      category:'Science Fiction',
      title:'"I write about tomorrow <em>to understand today"</em>',
      author:'Yasmine Saleh — Science Fiction Author',
      qa:[
        {
          q:'Arab science fiction has been called an emerging genre. Do you agree?',
          a:'It has always existed — in oral tradition, in philosophy, in the mathematical imagination of medieval scholars who were doing speculative thinking centuries before the term existed. What is emerging is the world\'s willingness to listen. Those are very different things.'
        }
      ]
    },
    '6':{
      category:'Poetry · Memoir',
      title:'"A poem is a place where <em>silence finally speaks"</em>',
      author:'Rania El-Baz — Poet &amp; Memoirist',
      qa:[
        {
          q:'You\'ve described translation as "a beautiful betrayal." Can you explain?',
          a:'Arabic carries weight in its roots that no English word can hold. The root ح-ز-ن gives you ḥuzn — sadness — but it also contains all the Arabic words for storing and hoarding. To be sad in Arabic is to have accumulated something. English sadness is flat by comparison. Every translation I make is a negotiation with that flatness.'
        },
        {
          q:'How do you decide when a memory becomes a poem rather than prose?',
          a:'When the memory has edges I cannot explain in sequence. Prose is a path through a room. Poetry is the room itself, with all its corners at once. When I cannot navigate the memory, I let it become a poem.'
        }
      ]
    }
  };

  function openModal(id){
    const data=modalData[id];
    if(!data) return;
    let html=`
      <div class="modal-category">${data.category}</div>
      <h2 class="modal-title">${data.title}</h2>
      <div class="modal-author">${data.author}</div>
      <div class="modal-divider"></div>
    `;
    data.qa.forEach(item=>{
      html+=`
        <div class="qa-block">
          <div class="qa-q">${item.q}</div>
          <div class="qa-a">${item.a}</div>
        </div>
      `;
    });
    document.getElementById('modalContent').innerHTML=html;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow='hidden';
  }

  function closeModal(){
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow='';
  }

  /* Close modal on overlay click */
  document.getElementById('modalOverlay').addEventListener('click',function(e){
    if(e.target===this) closeModal();
  });

  /* Close modal on Escape */
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape') closeModal();
  });

  /* ---- Newsletter ---- */
  function handleNewsletter(e){
    e.preventDefault();
    const email=document.getElementById('nlEmail').value.trim();
    const msg=document.getElementById('nlMsg');
    /* Custom validation */
    if(!email){
      msg.textContent='✦ Please enter your email address.';
      msg.style.color='var(--rose-light)';
      msg.style.opacity='1'; return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      msg.textContent='✦ Please enter a valid email address.';
      msg.style.color='var(--rose-light)';
      msg.style.opacity='1'; return;
    }
    msg.textContent='✦ You are now among the enchanted. Welcome.';
    msg.style.color='var(--gold)';
    msg.style.opacity='1';
    document.getElementById('nlEmail').value='';
  }
