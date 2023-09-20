import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import email from '../assets/envelope-solid.svg';
import '../css/Contact.css';

function Contact() {
  return (
    <section>
    <div>
      <h1>Contact</h1>
    </div>
    <div>
        <a href="https://github.com/drescamarian" target='bleank'><img src={github} alt="github" className='github' /><h2>My GitHub </h2></a>
        <a href="https://www.linkedin.com/in/marian-catalin-dresca" target='bleank'><img src={linkedin} alt="linkedin" className='linkedin' /><h2>My Linkin</h2></a>
        <a href="mailto:dresca.catalin@gmail.com"><img src={email} alt="email" className='email' /><h2>My Email</h2></a>
    </div>
    </section>
  );
}

export default Contact;