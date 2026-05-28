document.addEventListener('DOMContentLoaded', () => {
  const navbar   = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  const toggle   = document.querySelector('.nav-toggle');
  const navMenu  = document.querySelector('.nav-links');
  const sections = document.querySelectorAll('section[id]');

  /* ── Scroll: aggiunge classe .scrolled alla navbar ── */
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    highlightActiveLink();
  };

  /* ── Evidenzia il link della sezione visibile ── */
  const highlightActiveLink = () => {
    let current = '';

    sections.forEach(section => {
      const top    = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === current) {
        link.classList.add('active');
      }
    });
  };

  /* ── Click sui link: smooth scroll + chiudi menu mobile ── */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.dataset.section;
      const target   = document.getElementById(targetId);

      if (target) {
        const offset = navbar.offsetHeight;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // Chiudi menu mobile se aperto
      navMenu.classList.remove('open');
      toggle.classList.remove('open');
    });
  });

  /* ── Logo click: torna in cima ── */
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    logo.style.cursor = 'pointer';
  }

  /* ── Mobile toggle ── */
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
  }

  /* ── Back to top (footer) ── */
  const backTop = document.querySelector('.footer-back-top');
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
