import SectionHeader from "./SectionHeader.jsx";

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

export default Projects;