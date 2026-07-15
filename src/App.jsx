import { useEffect } from 'react';
import Navbar from "./components/Nav.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";

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
