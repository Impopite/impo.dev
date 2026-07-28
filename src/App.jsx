import { useEffect } from 'react';
import Navbar from "./components/Nav.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('section, .profile-card, .timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <ErrorBoundary>
      <main id="main-content">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </main>
      </ErrorBoundary>
      <footer>
        <p>&copy; 2026 Impoo. Designed &amp; built with React.</p>
        <button type="button" className="footer-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ top
        </button>
      </footer>
    </>
  );
}

export default App;
