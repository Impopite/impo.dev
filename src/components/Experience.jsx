import SectionHeader from "./SectionHeader.jsx";

const experiences = [
  {
    period: 'Mar 2026 — Present',
    role: 'Java Developer',
    company: 'AtlantisRP / CoralMC',
    description: 'Developing plugins for the AtlantisRP mode within the CoralMC network.',
    tech: ['Java', 'MySQL'],
  },
  {
    period: '2024',
    role: 'Junior Java Developer',
    company: 'MerakiNetwork',
    description: 'Developed plugins for the MerakiNetwork Minecraft server.',
    tech: ['Java', 'MySQL'],
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <SectionHeader eyebrow="04" title="Work" accent="experience" />
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-desc">{item.description}</p>
              <div className="timeline-tech">
                {item.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
