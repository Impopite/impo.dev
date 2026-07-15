import { useEffect, useState } from 'react';

const navItems = [
    ['about', 'About'],
    ['technologies', 'Technologies'],
    ['projects', 'Projects'],
    ['experience', 'Experiences'],
    ['contact', 'Contacts'],
];


function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('about');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);

            const current = navItems
                .map(([id]) => document.getElementById(id))
                .filter(Boolean)
                .findLast((section) => window.scrollY >= section.offsetTop - 120);

            if (current) setActive(current.id);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        const target = document.getElementById(id);
        if (!target) return;
        const offset = 72;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Menu principale">
            <button className="nav-logo" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span>&lt;</span>Impoo<span>/&gt;</span>
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
                aria-label="Apri menu"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
            >
                <span />
                <span />
                <span />
            </button>
        </nav>
    );
}

export default Navbar;