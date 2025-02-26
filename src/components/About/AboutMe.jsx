// import React from 'react';
// import { Link } from 'react-router-dom';
// import about from '../../assets/about.jpg';

// const AboutMe = () => {
//   return (
//     <section id="about-me">
//       <h2>About Me</h2>
//       <p>A brief introduction about me...</p>
//       <Link to="/about" className="explore-btn">Explore More</Link>
//     </section>
//   );
// }
// export default AboutMe;


import { Link } from 'react-router-dom';
import './AboutMe.css';
import about from '../../assets/about.jpg';
const AboutMe = () => {

  return (
    <div className="about" id="about-me">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      
      <div className="about-section">
        <div className="about-left">
          <img src={about} alt="About Me" className="fade-in-image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p className="fade-in">I am a passionate web developer with a focus on building user-friendly websites and applications. My goal is to create seamless, visually appealing, and efficient user interfaces that work across devices.</p>
            <p className="fade-in">I collaborate with backend developers, UX/UI designers, and project managers to turn ideas into functional and interactive designs that provide a great user experience.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML, CSS</p><hr style={{width:"50%"}} className="slide-in" />
            </div>
            <div className="about-skill">
              <p>React JS</p><hr style={{width:"60%"}} className="slide-in" />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style={{width:"70%"}} className="slide-in" />
            </div>
            <div className="about-skill">
              <p>Python</p><hr style={{width:"60%"}} className="slide-in" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement fade-in">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement fade-in">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement fade-in">
          <h1>6+</h1>
          <p>Happy Customers</p>
        </div>
      </div>

      <div className="explore-section fade-in">
        <a href="/about" className="explore-btn">Explore More</a>
      </div>
    </div>
  );
};

export default AboutMe;


