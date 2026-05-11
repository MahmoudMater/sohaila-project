

  /* ===== LANGUAGE SYSTEM (Handled by global.js) ===== */
  // currentLang and setLanguage() are defined by global.js from localStorage

  /* ===== PARTICLES ===== */
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    const colors = ['#c9a84c','#e8c97a','#f5c2cf','#d4af37','rgba(201,168,76,0.3)'];
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${8+Math.random()*12}s;
      animation-delay:${-Math.random()*15}s;
      box-shadow: 0 0 ${size*3}px ${colors[0]};
    `;
    container.appendChild(p);
  }

  /* ===== CANDLE FLICKER ===== */
  document.querySelectorAll('.flame').forEach(f => {
    setInterval(() => {
      const intensity = 0.8 + Math.random() * 0.4;
      f.style.boxShadow = `0 0 ${8*intensity}px ${3*intensity}px rgba(201,168,76,${0.3*intensity}), 0 0 ${20*intensity}px rgba(255,150,0,${0.2*intensity})`;
    }, 100 + Math.random()*200);
  });

  /* ===== CUSTOM VALIDATION ===== */
  const messages = {
    firstName: { en: 'Please enter your first name', ar: 'الرجاء إدخال اسمك الأول' },
    lastName:  { en: 'Please enter your last name',  ar: 'الرجاء إدخال اسمك الأخير' },
    email:     { en: 'Please enter a valid email address', ar: 'الرجاء إدخال عنوان بريد إلكتروني صحيح' },
    country:   { en: 'Please select your country',   ar: 'الرجاء اختيار دولتك' },
    freq:      { en: 'Please choose a frequency',    ar: 'الرجاء اختيار تكرار' },
    agree:     { en: 'You must agree to subscribe',  ar: 'يجب الموافقة للاشتراك' },
  };

  function showError(id, show) {
    const el = document.getElementById('err-' + id);
    const input = document.getElementById(id) || document.getElementById('freq-group') || document.getElementById('agree');
    if (!el) return;
    if (show) {
      el.classList.add('show');
      el.textContent = messages[id][currentLang];
    } else {
      el.classList.remove('show');
    }
    // Mark input error
    const inp = document.getElementById(id);
    if (inp) inp.classList.toggle('error', show);
  }

  function validateForm() {
    let valid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName  = document.getElementById('lastName').value.trim();
    const email     = document.getElementById('email').value.trim();
    const country   = document.getElementById('country').value;
    const freqChosen = document.querySelector('input[name="frequency"]:checked');
    const agree     = document.getElementById('agree').checked;

    showError('firstName', !firstName);       if (!firstName) valid = false;
    showError('lastName',  !lastName);        if (!lastName)  valid = false;

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    showError('email', !emailOk);             if (!emailOk) valid = false;

    showError('country', !country);           if (!country) valid = false;
    showError('freq',    !freqChosen);        if (!freqChosen) valid = false;
    showError('agree',   !agree);             if (!agree) valid = false;

    return valid;
  }

  /* Live clear on input */
  ['firstName','lastName','email','country'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => showError(id, false));
  });
  document.querySelectorAll('input[name="frequency"]').forEach(r => {
    r.addEventListener('change', () => showError('freq', false));
  });
  document.getElementById('agree').addEventListener('change', () => showError('agree', false));

  /* ===== FORM SUBMIT ===== */
  document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
      document.getElementById('successModal').classList.add('show');
    }
  });

  document.getElementById('modalCloseBtn').addEventListener('click', () => {
    document.getElementById('successModal').classList.remove('show');
    document.getElementById('newsletter-form').reset();
    document.querySelectorAll('.error-msg').forEach(e => e.classList.remove('show'));
    document.querySelectorAll('.form-input').forEach(e => e.classList.remove('error'));
  });

  /* Close modal on overlay click */
  document.getElementById('successModal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('show');
  });
