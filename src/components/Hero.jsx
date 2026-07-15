import {useEffect, useMemo, useState} from "react";

function Hero() {
    const phrases = useMemo(() => ['Computer Engineering Student', 'Java Developer', 'Jr. Web Developer'], []);
    const typing = useTyping(phrases);

    return (
        <header className="hero">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-orbit" aria-hidden="true" />

            <div className="hero-content">
                <div className="work-status">
                    <span className="work-status__signal" aria-hidden="true"><i /></span>
                    <div>
                        <p className="work-status__label">Current role</p>
                        <p className="work-status__value">Java Developer <span>at AtlantisRP / CoralMC</span></p>
                    </div>
                </div>
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


export default Hero;
