import "../css/About.css";
import loading from "../assets/1485.gif";

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
            Front-end Development: Proficient in HTML, CSS, SCSS, JavaScript, and
            modern front-end frameworks like React.
          </li>
          <li>
            Back-end Development: Experienced in server-side programming with
            Node.js and Bun. Familiar with databases such as MySQL and MongoDB.
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
        <h2>Experience</h2>
        <ul>
          <li>DCI Digital Careere Institute</li>
          <li>Namastec </li>
        </ul>
        <h3>Education</h3>
        <p>DCI Digital Careere Institute GmbH </p>
        <h3>Projects</h3>
        <ul>
          <li>Kultur Ausstellungsplattform mit NAMASTEC </li>
          <li>Quiz Game</li>
          <li>Weather App</li>
          <li>Todo App</li>
          <li>Calculator</li>
        </ul>
        <h3>
          Contact: <a href="/contact">Shea my contact details</a>
        </h3>
        <p>
          I'm excited about collaborating on new projects and leveraging my
          skills to create innovative web solutions. Let's connect and discuss
          how we can work together!
        </p>
        <h2>Resume</h2>
        <p>
          View my resume: <a href="/resume">Heare !!!</a>
        </p>

        <p>Or read it below</p>
        <ul>
        <li>
            <a href="https://kulturinblick.onrender.com/" target="_blank">View my front and backend skills</a>
          </li>
          <li>
            <a href="/home">View my front end skills</a>
          </li>
          <li>
            <a
              href="https://replit.com/@drescamarian/SimpleQuiz?s=app"
              target="_blank"
            >
              Try my console game
            </a>
          </li>
          <li>
            <a href="https://github.com/drescamarian" target="_blank">
              For future projects ...
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
