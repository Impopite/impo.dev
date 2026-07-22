import { useEffect, useMemo, useState } from "react";

function Hero() {
  const phrases = useMemo(() => ['Computer Engineering Student', 'Java Developer', 'Jr. Web Developer'], []);
  const typing = useTyping(phrases);

  return (
    <header className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">

        <h1>Impoo</h1>

        <p className="hero-subtitle">
          <span className="prefix" aria-hidden="true">$</span>
          {typing}
          <span className="cursor" aria-hidden="true" />
        </p>

        <p className="hero-desc">
          I build performant Java plugins, reliable backend systems, and clean web interfaces.
          Focused on simple architecture, fast delivery, and code that stays maintainable.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View projects</a>
          <a className="btn btn-outline" href="#contact">Get in touch</a>
        </div>

        <div className="hero-tech" aria-label="Main technologies">
          {['Java', 'React', 'JavaScript', 'Python', 'MySQL', 'C++'].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <aside className="hero-panel" aria-label="Profile summary">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-title">~/impoo</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt" aria-hidden="true">❯</span>
              <span><span className="key">role:</span> <span className="value">Java Developer</span></span>
            </p>
            <p className="terminal-line">
              <span className="prompt" aria-hidden="true">❯</span>
              <span><span className="key">focus:</span> <span className="value">plugins, backend, web</span></span>
            </p>
            <p className="terminal-line">
              <span className="prompt" aria-hidden="true">❯</span>
              <span><span className="key">status:</span> <span className="value">open to work</span></span>
            </p>
            <p className="terminal-line">
              <span className="prompt" aria-hidden="true">❯</span>
              <span><span className="key">stack:</span> <span className="value">Java, React, MySQL</span></span>
            </p>
            <p className="terminal-line">
              <span className="prompt" aria-hidden="true">❯</span>
              <span className="comment"># let's build something</span>
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6+</span>
            <span className="stat-label">Languages</span>
          </div>
        </div>
      </aside>
    </header>
  );
}

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
        timer = window.setTimeout(type, 80);
        return;
      }

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        timer = window.setTimeout(type, 2000);
        return;
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1;
        timer = window.setTimeout(type, 40);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timer = window.setTimeout(type, 300);
    };

    timer = window.setTimeout(type, 500);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return text;
}

export default Hero;
