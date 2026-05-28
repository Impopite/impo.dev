document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .timeline-item');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Typing Effect ── */
  const typingEl = document.querySelector('.hero-typing');
  if (typingEl) {
    const phrases = [
      'Java Developer',
      'Web Developer',
      'Computer Engineering Students',
    ];
    let phraseIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 80;

    const type = () => {
      const current = phrases[phraseIndex];
      if (isDeleting) {
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
      } else {
        typingEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 85;
      }
      if (!isDeleting && charIndex === current.length) {
        isDeleting = true; typingSpeed = 1400;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }
      setTimeout(type, typingSpeed);
    };
    setTimeout(type, 800);
  }

  /* ── Glow Card (mouse tracking) ── */
  document.querySelectorAll('.glow-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
      card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  });

  /* ── Counter Animato ── */
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const dur = 1200;
        const step = dur / target;
        let count = 0;
        const tick = () => {
          count++;
          el.textContent = count + suffix;
          if (count < target) setTimeout(tick, step);
        };
        tick();
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

});
