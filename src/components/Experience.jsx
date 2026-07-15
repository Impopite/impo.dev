import SectionHeader from "./SectionHeader.jsx";

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

export default Experience;