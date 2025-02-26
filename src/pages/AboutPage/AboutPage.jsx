import React from 'react';
import './AboutPage.css';
import about from '../../assets/about.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
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
              <p>HTML, CSS</p><hr style={{ width: "50%" }} className="slide-in" />
            </div>
            <div className="about-skill">
              <p>React JS</p><hr style={{ width: "60%" }} className="slide-in" />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style={{ width: "70%" }} className="slide-in" />
            </div>
            <div className="about-skill">
              <p>Python</p><hr style={{ width: "60%" }} className="slide-in" />
            </div>
          </div>
        </div>
      </div>

      {/* Educational Background and Experience Cards */}
      <div className="about-cards-section">
        {/* Education Card */}
        <div className="about-card">
          <h2>Educational Background</h2>
          <div className="sub-cards">
            <div className="sub-card fade-in-card">
              <h1>Tribhuvan University</h1>
              <h2>Bachelor's of science in computer science and information Technology</h2>
              <p>Graduated in 2023</p>
            </div>
            <div className="sub-card fade-in-card">
              <h1>Course</h1>
              <h2>Web Development</h2>
              <p>Specialized in Frontend Development</p>
            </div>
            <div className="sub-card fade-in-card">
              <h1>+2 Lavel</h1>
              <h2>Tillottama Campus</h2>
              <p>Completed 2018</p>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="about-card">
          <h2>Experience</h2>
          <div className="sub-cards">
            <div className="sub-card fade-in-card">
              <h1>Intern</h1>
              <h2>Frontend Developer</h2>
              <p>Xdezo Techologies (2022-2023)</p>
            </div>
            <div className="sub-card fade-in-card">
              <h1>Job Position</h1>
              <h2>Web Developer</h2>
              <p>XYZ Company (2024)</p>
            </div>
            <div className="sub-card fade-in-card">
              <h1>Freelancing</h1>
              <h2>Full Stack Developer</h2>
              <p>2024 - Ongoing</p>
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
        <a href="/AoutMe" className="explore-btn">Go Back to Home</a>
      </div>
    </div>
  );
};

export default AboutPage;
