import SectionHeader from "./SectionHeader.jsx";

const projects = [
  {
    name: 'PartySystem',
    type: 'Java Plugin',
    icon: 'devicon-java-plain colored',
    description: 'Paper plugin for efficient and optimized party management.',
    links: [{ label: 'GitHub', href: 'https://github.com/Impopite/PartySystem' }],
    stack: ['Java', 'MySQL', 'Gradle'],
    status: 'Published',
  },
  {
    name: 'AuthSystem',
    type: 'Java Plugin',
    icon: 'devicon-java-plain colored',
    description: 'Secure authentication plugin with login, registration, sessions, and account protection.',
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
    icon: 'devicon-java-plain colored',
    description: 'Fast and reliable block logging and rollback plugin for Minecraft servers.',
    links: [{ label: 'GitHub', href: 'https://github.com/Impopite' }],
    stack: ['Java', 'MySQL', 'Gradle'],
    status: 'In progress',
  },
  {
    name: 'Portfolio',
    type: 'Website',
    icon: 'devicon-react-original colored',
    description: 'Personal portfolio built with React, Vite, and responsive CSS.',
    links: [{ label: 'GitHub', href: 'https://github.com/Impopite/impo.dev' }],
    stack: ['React', 'Vite', 'CSS'],
    status: 'Published',
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <SectionHeader eyebrow="03" title="Selected" accent="projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-header">
                <div className="project-icon" aria-hidden="true"><i className={project.icon} /></div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="project-meta">
                <span className="project-type">{project.type}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
