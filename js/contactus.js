  /* ============================================================
     LANGUAGE SYSTEM (Handled by global.js)
  ============================================================ */
  // currentLang is defined by global.js from localStorage

  /* ============================================================
     STAR RATING
  ============================================================ */
  let selectedRating = 0;

  function setRating(val) {
    selectedRating = val;
    document.getElementById('rating').value = val;
    document.querySelectorAll('.star').forEach(s => {
      s.classList.toggle('lit', parseInt(s.dataset.val) <= val);
    });
  }

  // Hover preview
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseenter', () => {
      const hval = parseInt(star.dataset.val);
      document.querySelectorAll('.star').forEach(s => {
        s.style.color = parseInt(s.dataset.val) <= hval ? 'var(--gold)' : '';
      });
    });
    star.addEventListener('mouseleave', () => {
      document.querySelectorAll('.star').forEach(s => {
        s.style.color = parseInt(s.dataset.val) <= selectedRating ? 'var(--gold)' : '';
      });
    });
  });

  /* ============================================================
     CUSTOM FORM VALIDATION (no HTML5 built-in messages)
  ============================================================ */

  // Validation messages by language
  const MSGS = {
    en: {
      required:      'This field is required.',
      nameMin:       'Please enter at least 2 characters.',
      nameInvalid:   'Only letters, spaces, and hyphens are allowed.',
      emailInvalid:  'Please enter a valid email address (e.g. name@domain.com).',
      phoneInvalid:  'Please enter a valid phone number (digits, +, spaces only).',
      subjectReq:    'Please select a subject.',
      msgMin:        'Your message must be at least 20 characters long.',
      success:       '✦ Your message has been sent! We will reply within 24 hours. ✦',
      errGeneral:    'Please correct the highlighted fields before submitting.',
    },
    ar: {
      required:      'هذا الحقل مطلوب.',
      nameMin:       'يرجى إدخال حرفين على الأقل.',
      nameInvalid:   'يُسمح فقط بالحروف والمسافات والشرطات.',
      emailInvalid:  'يرجى إدخال عنوان بريد إلكتروني صحيح (مثال: name@domain.com).',
      phoneInvalid:  'يرجى إدخال رقم هاتف صحيح (أرقام و + و مسافات فقط).',
      subjectReq:    'يرجى اختيار موضوع.',
      msgMin:        'يجب أن تحتوي رسالتك على 20 حرفاً على الأقل.',
      success:       '✦ تم إرسال رسالتك! سنرد عليك خلال 24 ساعة. ✦',
      errGeneral:    'يرجى تصحيح الحقول المميزة قبل الإرسال.',
    }
  };

  function showMsg(id, msg, type) {
    const el = document.getElementById(id + '-msg');
    if (!el) return;
    el.textContent = msg;
    el.className = 'field-msg ' + (type || '');
  }

  function setFieldState(id, isError) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('field-error', isError);
  }

  function clearAll() {
    ['fname','lname','email','phone','subject','message'].forEach(id => {
      showMsg(id, '', '');
      setFieldState(id, false);
    });
    const gm = document.getElementById('form-global-msg');
    gm.style.display = 'none';
    gm.className = '';
    gm.textContent = '';
  }

  function submitForm() {
    clearAll();
    const lang = currentLang;
    const M = MSGS[lang];
    let valid = true;

    // — First name
    const fname = document.getElementById('fname').value.trim();
    if (!fname) {
      showMsg('fname', M.required, 'error'); setFieldState('fname', true); valid = false;
    } else if (fname.length < 2) {
      showMsg('fname', M.nameMin, 'error'); setFieldState('fname', true); valid = false;
    } else if (!/^[\p{L}\s\-']+$/u.test(fname)) {
      showMsg('fname', M.nameInvalid, 'error'); setFieldState('fname', true); valid = false;
    } else {
      showMsg('fname', '✓', 'ok'); setFieldState('fname', false);
    }

    // — Last name
    const lname = document.getElementById('lname').value.trim();
    if (!lname) {
      showMsg('lname', M.required, 'error'); setFieldState('lname', true); valid = false;
    } else if (lname.length < 2) {
      showMsg('lname', M.nameMin, 'error'); setFieldState('lname', true); valid = false;
    } else if (!/^[\p{L}\s\-']+$/u.test(lname)) {
      showMsg('lname', M.nameInvalid, 'error'); setFieldState('lname', true); valid = false;
    } else {
      showMsg('lname', '✓', 'ok'); setFieldState('lname', false);
    }

    // — Email
    const email = document.getElementById('email').value.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email) {
      showMsg('email', M.required, 'error'); setFieldState('email', true); valid = false;
    } else if (!emailRx.test(email)) {
      showMsg('email', M.emailInvalid, 'error'); setFieldState('email', true); valid = false;
    } else {
      showMsg('email', '✓', 'ok'); setFieldState('email', false);
    }

    // — Phone (optional but validated if filled)
    const phone = document.getElementById('phone').value.trim();
    if (phone) {
      const phoneRx = /^[\d\s\+\-\(\)]{7,20}$/;
      if (!phoneRx.test(phone)) {
        showMsg('phone', M.phoneInvalid, 'error'); setFieldState('phone', true); valid = false;
      } else {
        showMsg('phone', '✓', 'ok'); setFieldState('phone', false);
      }
    }

    // — Subject
    const subject = document.getElementById('subject').value;
    if (!subject) {
      showMsg('subject', M.subjectReq, 'error'); setFieldState('subject', true); valid = false;
    } else {
      showMsg('subject', '✓', 'ok'); setFieldState('subject', false);
    }

    // — Message
    const message = document.getElementById('message').value.trim();
    if (!message) {
      showMsg('message', M.required, 'error'); setFieldState('message', true); valid = false;
    } else if (message.length < 20) {
      showMsg('message', M.msgMin, 'error'); setFieldState('message', true); valid = false;
    } else {
      showMsg('message', '✓', 'ok'); setFieldState('message', false);
    }

    // — Show global result
    const gm = document.getElementById('form-global-msg');
    if (!valid) {
      gm.textContent = M.errGeneral;
      gm.className = 'error-general';
      gm.style.display = 'block';
    } else {
      gm.textContent = M.success;
      gm.className = 'success';
      gm.style.display = 'block';
      // Reset form
      ['fname','lname','email','phone','message'].forEach(id => {
        document.getElementById(id).value = '';
        showMsg(id, '', '');
        setFieldState(id, false);
      });
      document.getElementById('subject').value = '';
      setRating(0);
      showMsg('subject', '', '');
      setFieldState('subject', false);
      // Scroll to message
      gm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /* ============================================================
     FAQ ACCORDION
  ============================================================ */
  function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    // Open clicked if it was closed
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  }

  /* ============================================================
     PARTICLES
  ============================================================ */
  const pCont = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    const colors = ['#c9a84c','#e8c97a','#f5c2cf','#d4af37'];
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${9+Math.random()*12}s;
      animation-delay:${-Math.random()*15}s;
      box-shadow:0 0 ${size*3}px ${colors[0]};
    `;
    pCont.appendChild(p);
  }

  /* ============================================================
     SCROLL REVEAL
  ============================================================ */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
