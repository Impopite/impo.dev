import SectionHeader from "./SectionHeader.jsx";

const technologies = [
  ['devicon-java-plain colored', 'Java', 'Plugins & software'],
  ['devicon-javascript-plain colored', 'JavaScript', 'Frontend logic'],
  ['devicon-react-original colored', 'React', 'Modern UI'],
  ['devicon-python-plain colored', 'Python', 'Scripting & tools'],
  ['devicon-php-plain colored', 'PHP', 'Web backend'],
  ['devicon-cplusplus-plain colored', 'C++', 'Systems & software'],
  ['devicon-mysql-plain colored', 'MySQL', 'Data storage'],
  ['devicon-git-plain colored', 'Git', 'Version control'],
];

function Technologies() {
  return (
    <section id="technologies">
      <div className="section-inner">
        <SectionHeader eyebrow="02" title="Tech" accent="stack" />
        <p className="section-desc">
          The tools I use most often, from server-side plugins to modern frontend work.
        </p>
        <div className="tech-grid">
          {technologies.map(([icon, name, desc]) => (
            <div className="tech-card" key={name}>
              <div className="tech-card-icon">
                <i className={icon} aria-hidden="true" />
              </div>
              <div className="tech-card-text">
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
