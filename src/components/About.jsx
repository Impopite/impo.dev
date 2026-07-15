import avatarUrl from '../../img/avatar.jpg';
import SectionHeader from "./SectionHeader.jsx";

function About() {
    return (
        <section id="about" className="band">
            <div className="section-inner about-grid">
                <div>
                    <SectionHeader eyebrow="// 01. Chi sono" title="About" accent="me" />
                    <div className="about-copy">
                        <p>
                            I am a developer with a strong foundation in Java and growing experience in modern web development.
                            I like building software that is functional, fast, and easy to maintain.
                        </p>
                        <p>
                            My work moves between object-oriented Java plugins, web interfaces in JavaScript and React, and scripting
                            with Python when automation makes a project sharper.
                        </p>
                        <p>
                            I keep learning constantly, and I enjoy turning complex problems into small, reliable systems.
                        </p>
                    </div>
                </div>

                <div className="profile-card">
                    <img src={avatarUrl} alt="Impoo - Developer" />
                    <div>
                        <p>Impoo</p>
                        <span>Java Developer / Jr. Web Developer</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;