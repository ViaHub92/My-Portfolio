import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="title">Hi, I'm Dylan Via!</h1>
        <h2 className="subtitle">Full Stack Engineer</h2>
        <div className="about-me">
          <p>
            I’m a recent CS graduate eager to build and innovate!          
          </p>
        </div>
        {/* Skills Section */}
        <div className="skills">
          <h3 className="skills-title">Programming Skills</h3>
          <div className="skills-logos">
            <img src="Icons/c++.png" alt="C++" className="skill-logo" />
            <img src="Icons/java.png" alt="Java" className="skill-logo" />
            <img src="Icons/python.png" alt="Python" className="skill-logo" />
            <img src="Icons/react.png" alt="React" className="skill-logo" />
            <img src="Icons/mysql.png" alt="mySQL" className="skill-logo" />
            <img src="Icons/Github.png" alt="Git" className="skill-logo" />
          </div>
        </div>
      </div>
      {/* Right Compartment */}
      <div className="right-compartment">
        <h3>About Me</h3>
        <p>I’m a recent graduate from Old Dominion University, where I earned my Bachelor’s degree in Computer Science on December 15, 2025. Now, I’m eager to kick-start my career as a Software Engineer, bringing a strong work ethic, adaptability, and problem-solving skills to the tech industry.</p>
          <p>Before stepping into tech, I built a solid foundation in discipline and teamwork through a variety of jobs. I spent six years as a produce clerk at Kroger, two years as a cook at Serendipity, and a year handling inventory at Radial. Along the way, I also took on side projects in home improvement and landscaping, gaining hands-on experience in problem-solving and attention to detail.</p>
          <p>These diverse experiences have shaped me into a well-rounded, hardworking individual who’s ready to take on new challenges in software development. I’m excited to bring my passion for technology and my strong work ethic to a team where I can grow and contribute.</p>
          <h2>Projects</h2>

{/* Project 1 */}
<div className="projects-section">
  <div className="project-card">
    <img src="Icons/Phisecure.png" alt="Phisecure" className="project-image" />
    <div className="project-description">
      <p>A full-stack application designed to educate students about phishing scams by generating and sending personalized phishing emails. Students receive feedback on their ability to detect phishing attempts, along with insights into the red flags present in each email</p>
    </div>
    <a href="https://github.com/dylan/project1" target="_blank" rel="noopener noreferrer" className="project-link">
      View on GitHub
    </a>
  </div>

  {/* Project 2 */}
  <div className="project-card">
    <img src="project2.png" alt="Project 2" className="project-image" />
    <div className="project-description">
      <p>This is a description of my second project. It's a mobile app that helps with ABC.</p>
    </div>
    <a href="https://github.com/dylan/project2" target="_blank" rel="noopener noreferrer" className="project-link">
      View on GitHub
    </a>
  </div>

  {/* You can add more projects by following the same structure */}
  </div>
  </div>
  </div>

  );
};

export default App;
