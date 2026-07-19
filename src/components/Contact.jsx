import SectionHeader from "./SectionHeader.jsx";

const contacts = [
  ['fa-brands fa-telegram', 'Telegram', '@tentava', 'https://t.me/tentava'],
  ['fa-brands fa-discord', 'Discord', '@Impopite', 'https://discord.com/users/Impopite'],
  ['fa-brands fa-github', 'GitHub', 'Impopite', 'https://github.com/Impopite'],
];

function Contact() {
  return (
    <section id="contact">
      <div className="section-inner contact-layout">
        <div>
          <SectionHeader eyebrow="05" title="Get in" accent="touch" />
          <p className="section-desc">
            Open to collaborations, opportunities, and interesting projects.
            Pick the platform you prefer.
          </p>
        </div>
        <div className="contact-links">
          {contacts.map(([icon, platform, handle, href]) => (
            <a className="contact-link" href={href} target="_blank" rel="noopener noreferrer" key={platform}>
              <div className="contact-icon">
                <i className={icon} aria-hidden="true" />
              </div>
              <div className="contact-info">
                <span className="contact-platform">{platform}</span>
                <span className="contact-handle">{handle}</span>
              </div>
              <span className="contact-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
