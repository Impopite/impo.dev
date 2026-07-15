import SectionHeader from "./SectionHeader.jsx";

const technologies = [
    ['devicon-java-plain colored', 'Java', 'Plugin & software'],
    ['devicon-javascript-plain colored', 'JavaScript', 'Frontend logic'],
    ['devicon-react-original colored', 'React', 'Modern UI'],
    ['devicon-python-plain colored', 'Python', 'Software'],
    ['devicon-php-plain colored', 'PHP', 'Web backend'],
    ['devicon-cplusplus-plain colored', 'C++', 'Software'],
    ['devicon-mysql-plain colored', 'MySQL', 'Data storage'],
    ['devicon-git-plain colored', 'Git', 'Version control'],
];


function Technologies() {
    return (
        <section id="technologies">
            <div className="section-inner">
                <SectionHeader eyebrow="// 02. Tecnologie" title="Current" accent="Technologies" />
                <p className="section-intro">The tools I use most often, from server plugins to modern frontend work.</p>
                <div className="tech-grid">
                    {technologies.map(([icon, name, desc]) => (
                        <article className="tech-card glow-card" key={name}>
                            <i className={icon} aria-hidden="true" />
                            <div>
                                <h3>{name}</h3>
                                <p>{desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;