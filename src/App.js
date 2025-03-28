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
        {/* Profile Picture */}
        <div className="profile-picture-container">
          <img 
            src="CanvaDV.png" 
            alt="Dylan Via" 
            className="profile-picture" 
          />
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
        <p>I’m a recent graduate from Old Dominion University, where I earned my Bachelor’s degree in Computer Science on December 15, 2024. Now, I’m eager to kick-start my career as a Software Engineer, bringing a strong work ethic, adaptability, and problem-solving skills to the tech industry.</p>
          <p>Before stepping into tech, I built a solid foundation in discipline and teamwork through a variety of jobs. I spent six years as a produce clerk at Kroger, two years as a cook at Serendipity, and a year handling inventory at Radial. Along the way, I also took on side projects in home improvement and landscaping. These jobs helped to get by, but my urge to start a career I will love has taken over.</p>
          <p>These diverse experiences have shaped me into a well-rounded, hardworking individual who’s ready to take on new challenges in software development. I’m excited to bring my passion for technology and my strong work ethic to a team where I can grow and contribute.</p>

{/* Project 1 */}
<div className="projects-section">
  <h2>Projects</h2>
  <div className="project-card">
    <img src="Icons/Phisecure.png" alt="Phisecure" className="project-image" />
    <div className="project-description">
      <p>A full-stack application designed to educate students about phishing scams by generating and sending personalized phishing emails. Students receive feedback on their ability to detect phishing attempts, along with insights into the red flags present in each email</p>
    </div>
    <a href="https://github.com/ViaHub92/F24-Orange" target="_blank" rel="noopener noreferrer" className="project-link">
      View on GitHub
    </a>
  </div>

  {/* Project 2 */}
  <div className="project-card">
    <img src="project2.png" alt="Website Portfolio" className="project-image" />
    <div className="project-description">
      <p>This is my portfolio website, built with React and deployed on AWS. I’ve also set up GitHub Actions for continuous deployment.</p>
    </div>
    <a href="https://github.com/dylan/project2" target="_blank" rel="noopener noreferrer" className="project-link">
      View on GitHub
    </a>
  </div>

  {/* Project 3 */}
  <div className="project-card">
    <img src="project3.png" alt="Project 3" className="project-image" />
    <div className="project-description">
      <p>This is a description placeholder for a project.</p>
    </div>
    <a href="https://github.com/dylan/project2" target="_blank" rel="noopener noreferrer" className="project-link">
      View on GitHub
    </a>
  </div>

  {/* Project 4 */}
  <div className="project-card">
    <img src="project4.png" alt="Project 4" className="project-image" />
    <div className="project-description">
      <p>This is a description placeholder for a project.</p>
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
