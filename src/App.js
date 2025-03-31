import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiMysql } from 'react-icons/si';
import { animateScroll as scroll } from 'react-scroll';
import './App.css';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection] = useState('home');

  const projects = [
    {
      title: 'Phisecure',
      description: 'A full-stack application designed to educate students about phishing scams...',
      github: 'https://github.com/ViaHub92/F24-Orange',
      tags: ['React', 'Node.js', 'MySQL']
    },
    // Add more projects as needed
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <button 
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '🌞' : '🌙'}
            </button>
          <h1 className="logo">DV</h1>
          <div className="nav-links">
            {['home', 'about', 'skills', 'projects'].map((item) => (
              <button
                key={item}
                onClick={() => scroll.scrollTo(item, { smooth: true })}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Dylan Via</h1>
          <div className="type-animation">
            <TypeAnimation
              sequence={[
                'Full Stack Engineer',
                2000,
                'Problem Solver',
                2000,
                'Continuous Learner',
                2000,
              ]}
              repeat={Infinity}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {[
              { icon: <SiCplusplus />, name: 'C++' },
              { icon: <FaJava />, name: 'Java' },
              { icon: <FaPython />, name: 'Python' },
              { icon: <FaReact />, name: 'React' },
              { icon: <SiMysql />, name: 'MySQL' },
              { icon: <FaGithub />, name: 'GitHub' },
            ].map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img 
              src="/CanvaDV.png"
              alt="Dylan Via"
              className="profile-pic"
            />
        <p>I’m a recent graduate from Old Dominion University, where I earned my Bachelor’s degree in Computer Science on December 15, 2024. Now, I’m eager to kick-start my career as a Software Engineer, bringing a strong work ethic, adaptability, and problem-solving skills to the tech industry.</p>
          <p>Before stepping into tech, I built a solid foundation in discipline and teamwork through a variety of jobs. I spent six years as a produce clerk at Kroger, two years as a cook at Serendipity, and a year handling inventory at Radial. Along the way, I also took on side projects in home improvement and landscaping. These jobs helped to get by, but my urge to start a career I will love has taken over.</p>
          <p>These diverse experiences have shaped me into a well-rounded, hardworking individual who’s ready to take on new challenges in software development. I’m excited to bring my passion for technology and my strong work ethic to a team where I can grow and contribute.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Dylan Via. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;