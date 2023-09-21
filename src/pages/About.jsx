import "../css/About.css"
import loading from "../assets/1485.gif"

function About() {
  return (
    <section className="about">
      <div className="About">
        <h1>About Me</h1>
      </div>
      <div>
        <h3>Full Stack Web Developer</h3>
        <p>
          I'm a passionate and "experienced" Full Stack Web Developer with
          expertise in both front-end and back-end development. I specialize in
          creating dynamic and responsive web applications that deliver
          exceptional user experiences.
        </p>
        <ul>
          <h3>Skills</h3>
          <li>
            Front-end Development: Proficient in HTML, CSS, JavaScript, and
            modern front-end frameworks like React.
          </li>
          <li>
            Back-end Development: Experienced in server-side programming with
            Node.js Bun. Familiar with databases such as MySQL and MongoDB.
          </li>
          <li>
            Full Stack Development: Skilled in developing end-to-end web
            solutions, from designing user interfaces to building robust APIs.
          </li>
          <li>
            Problem Solving: Strong analytical skills and the ability to
            identify and resolve complex technical issues efficiently.
          </li>
          <li>
            Collaboration: Excellent teamwork and communication skills, with a
            proven track record of working effectively in cross-functional
            teams.
          </li>
        </ul>
        <h3>Experience</h3>
        <p>In progress... <img src={loading} alt="loading" /> </p>
        <h3>Education</h3>
        <p>In progress...<img src={loading} alt="loading" /> expected end of october 2023</p>
        <h3>Projects</h3>
        <p>In progress... <img src={loading} alt="loading" /></p>
        <h3>Contact</h3>
        <a href="/contact">Shea my contact details</a>
        <p>
          I'm excited about collaborating on new projects and leveraging my
          skills to create innovative web solutions. Let's connect and discuss
          how we can work together!
        </p>
        <h3>Resume</h3>
        <p>Download my resume</p>
        <a href="/assets/Lebenslauf_von_Dresca.pdf">Download my resume</a>
        <p>Or read it below</p>
        <a href="/">Try my front end skills</a>
        <a
          href="https://replit.com/@drescamarian/SimpleQuiz?s=app"
          target="blank"
        >
          Try my console game
        </a>
        <a href="https://github.com/drescamarian" target="blank">
          For future projects ...
        </a>
      </div>
    </section>
  );
}

export default About;
