import SectionHeader from "./SectionHeader.jsx";

const contacts = [
    ['fa-brands fa-telegram', 'Telegram', '@tentava', 'https://t.me/tentava'],
    ['fa-brands fa-discord', 'Discord', '@Impopite', 'https://discord.com/users/Impopite'],
    ['fa-brands fa-github', 'GitHub', 'Impopite', 'https://github.com/Impopite'],
];


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

export default Contact;