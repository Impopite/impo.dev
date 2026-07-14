import { useEffect, useMemo, useState } from 'react';
import avatarUrl from '../img/avatar.jpg';

const navItems = [
  ['about', 'About'],
  ['technologies', 'Technologies'],
  ['projects', 'Projects'],
  ['experience', 'Experiences'],
  ['contact', 'Contacts'],
];

const technologies = [
  ['devicon-java-plain colored', 'Java', 'Plugin & software'],
  ['devicon-javascript-plain colored', 'JavaScript', 'Frontend logic'],
  ['devicon-react-original colored', 'React', 'Modern UI'],
  ['devicon-python-plain colored', 'Python', 'Software'],
  ['devicon-php-plain colored', 'PHP', 'Web backend'],
  ['devicon-cplusplus-plain colored', 'C++', 'Software'],
  ['devicon-mysql-plain colored', 'MySQL', 'Data storage'],
  ['devicon-git-plain colored', 'Git', 'Version control'],
];

const projects = [
  {
    name: 'PartySystem',
    type: 'Java Plugin',
    description: 'Paper plugin for efficient and optimized party management.',
    links: [{ label: 'GitHub', href: 'https://github.com/Impopite/PartySystem' }],
    stack: ['Java', 'MySQL', 'Gradle'],
    status: 'Optimized',
  },
  {
    name: 'AuthSystem',
    type: 'Java Plugin',
    description:
      'Secure authentication plugin for Minecraft servers with login, registration, sessions, and account protection.',
    links: [
      { label: 'GitHub', href: 'https://github.com/Impopite/AuthSystem' },
      { label: 'Modrinth', href: 'https://modrinth.com/plugin/authenticationsystem' },
    ],
    stack: ['Java', 'MySQL', 'Gradle'],
    status: 'Published',
  },
  {
    name: 'Protect',
    type: 'Java Plugin',
    description: 'A fast and reliable block logging and rollback plugin for Minecraft servers.',
    links: [{ label: 'GitHub', href: 'https://github.com/Impopite' }],
    stack: ['Java', 'MySQL', 'Gradle'],
    status: 'In progress',
  },
  {
    name: 'Portfolio website',
    type: 'Website',
    description: 'Personal portfolio rebuilt with React, Vite, and responsive CSS.',
    links: [{ label: 'GitHub', href: 'https://github.com/Impopite/impo.dev' }],
    stack: ['React', 'CSS', 'Vite'],
    status: 'React rebuild',
  },
];

const experiences = [
  {
    period: '7 March 2026 - Now',
    role: 'Java Developer',
    company: 'AtlantisRP - CoralMC',
    description: 'Plugins developed for the AtlantisRP mode within the CoralMC network.',
    tech: ['Java', 'MySQL'],
  },
  {
    period: '2024',
    role: 'Junior Java Developer',
    company: 'MerakiNetwork',
    description: 'Plugins developed for the MerakiNetwork server.',
    tech: ['Java', 'MySQL'],
  },
];

const contacts = [
  ['fa-brands fa-telegram', 'Telegram', '@tentava', 'https://t.me/tentava'],
  ['fa-brands fa-discord', 'Discord', '@Impopite', 'https://discord.com/users/Impopite'],
  ['fa-brands fa-github', 'GitHub', 'Impopite', 'https://github.com/Impopite'],
];

function useTyping(phrases) {
  const [text, setText] = useState('');

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const type = () => {
      const phrase = phrases[phraseIndex];
      setText(phrase.slice(0, charIndex));

      if (!deleting && charIndex < phrase.length) {
        charIndex += 1;
        timer = window.setTimeout(type, 85);
        return;
      }

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        timer = window.setTimeout(type, 1300);
        return;
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1;
        timer = window.setTimeout(type, 38);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timer = window.setTimeout(type, 360);
    };

    timer = window.setTimeout(type, 500);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return text;
}

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

function Hero() {
  const phrases = useMemo(() => ['Computer Engineering Student', 'Java Developer', 'Jr. Web Developer'], []);
  const typing = useTyping(phrases);

  return (
    <header className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-badge"><span /> Currently working on @AtlantisRP - @CoralMC</p>
        <h1>Impoo</h1>
        <p className="hero-role"><span>$_</span>{typing}<i aria-hidden="true" /></p>
        <p className="hero-desc">
          I build performant Java plugins, reliable backend logic, and clean web interfaces.
          My focus is simple architecture, fast systems, and projects that stay maintainable.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn ghost" href="#contact">Contact me</a>
        </div>
        <div className="hero-tech" aria-label="Main technologies">
          {['Java', 'React', 'JavaScript', 'Python', 'MySQL', 'C++'].map((tech) => <span key={tech}>{tech}</span>)}
        </div>
      </div>

      <aside className="hero-panel" aria-label="Developer profile summary">
        <div className="terminal">
          <div className="terminal-bar"><span /><span /><span /></div>
          <p><b>profile</b>: Java Developer</p>
          <p><b>focus</b>: plugins, backend, web</p>
          <p><b>status</b>: available for projects</p>
          <p><b>stack</b>: Java, React, MySQL</p>
        </div>
        <div className="signal-card">
          <span>3+ years</span>
          <span>5+ projects</span>
          <span>6+ languages</span>
        </div>
      </aside>
    </header>
  );
}

function SectionHeader({ eyebrow, title, accent }) {
  return (
    <>
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title">{title} <span>{accent}</span></h2>
    </>
  );
}

function About() {
  return (
    <section id="about" className="band">
      <div className="section-inner about-grid">
        <div>
          <SectionHeader eyebrow="// 01. Chi sono" title="About" accent="me" />
          <div className="about-copy">
            <p>
              I am a developer with a strong foundation in Java and growing experience in modern web development.
              I like building software that is functional, fast, and easy to maintain.
            </p>
            <p>
              My work moves between object-oriented Java plugins, web interfaces in JavaScript and React, and scripting
              with Python when automation makes a project sharper.
            </p>
            <p>
              I keep learning constantly, and I enjoy turning complex problems into small, reliable systems.
            </p>
          </div>
        </div>

        <div className="profile-card">
          <img src={avatarUrl} alt="Impoo - Developer" />
          <div>
            <p>Impoo</p>
            <span>Java Developer / Jr. Web Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section id="technologies">
      <div className="section-inner">
        <SectionHeader eyebrow="// 02. Tecnologie" title="Current" accent="Technologies" />
        <p className="section-intro">The tools I use most often, from server plugins to modern frontend work.</p>
        <div className="tech-grid">
          {technologies.map(([icon, name, desc]) => (
            <article className="tech-card glow-card" key={name}>
              <i className={icon} aria-hidden="true" />
              <div>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="band">
      <div className="section-inner">
        <SectionHeader eyebrow="// 03. Lavori" title="My" accent="Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card glow-card" key={project.name}>
              <div className="project-top">
                <span className="project-mark" aria-hidden="true">{"{}"}</span>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}</a>
                  ))}
                </div>
              </div>
              <p className="project-type">{project.type}</p>
              <span className="project-status">{project.status}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <SectionHeader eyebrow="// 04. Carriera" title="My" accent="Experiences" />
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">@{item.company}</p>
              <p className="timeline-desc">{item.description}</p>
              <div className="timeline-tech">
                {item.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="band">
      <div className="section-inner contact-layout">
        <div>
          <SectionHeader eyebrow="// 05. Contatti" title="Let's" accent="talk" />
          <p className="section-intro">
            I am open to collaborations, opportunities, and interesting projects. Pick the platform you prefer.
          </p>
        </div>
        <div className="contact-links">
          {contacts.map(([icon, platform, handle, href]) => (
            <a className="contact-link" href={href} target="_blank" rel="noreferrer" key={platform}>
              <i className={icon} aria-hidden="true" />
              <span>
                <small>{platform}</small>
                {handle}
              </span>
              <b aria-hidden="true">-&gt;</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('section, .glow-card, .timeline-item, .profile-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => observer.observe(el));

    const onPointerMove = (event) => {
      document.querySelectorAll('.glow-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
      });
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer>
        <p>Impoo Projects (c) 2026. Designed and developed by <span>Impoo</span>.</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>top</button>
      </footer>
    </>
  );
}

export default App;
