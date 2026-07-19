import { useEffect, useState } from 'react';

const navItems = [
  ['about', 'About'],
  ['technologies', 'Technologies'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const current = navItems
        .map(([id]) => document.getElementById(id))
        .filter(Boolean)
        .findLast((section) => window.scrollY >= section.offsetTop - 100);

      if (current) setActive(current.id);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 56, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <button className="nav-logo" type="button" aria-label="Go to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="bracket" aria-hidden="true">&lt;</span>
        <span className="name">Impoo</span>
        <span className="bracket" aria-hidden="true">/&gt;</span>
      </button>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {navItems.map(([id, label], index) => (
          <button
            className={active === id ? 'active' : ''}
            data-index={`${String(index + 1).padStart(2, '0')}.`}
            key={id}
            onClick={() => scrollTo(id)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
