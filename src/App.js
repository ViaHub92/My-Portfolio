import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiMysql } from 'react-icons/si';
import { Link } from 'react-scroll';
import './App.css';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
    

    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'projects'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };
  
  const projects = [
    {
      title: 'Phisecure',
      description: 'A full-stack application designed to educate students about phishing scams by generating and sending personalized phishing emails. Students receive feedback on their ability to detect phishing attempts, along with insights into the red flags present in each email.',
      github: 'https://github.com/ViaHub92/F24-Orange',
      tags: ['Flask','React', 'Node.js', 'MySQL'],
      image: 'https://via92-portfolio.s3.us-east-2.amazonaws.com/Icons/Phisecure.png'
    },
    // more projects to come
  ];
  
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <label className="switch theme-toggle">
            <input 
              type="checkbox" 
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider">
              <div className="star star_1"></div>
              <div className="star star_2"></div>
              <div className="star star_3"></div>
              <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                <path transform="matrix(.77976 0 0 .78395-299.99-418.63)" fill="#fff" 
                      d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"></path>
              </svg>
            </span>
          </label>
          <div className="nav-links">
            {['home', 'skills', 'about', 'projects'].map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
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
            <p>I'm a recent graduate from Old Dominion University, where I earned my Bachelor's degree in Computer Science on December 15, 2024. Now, I'm eager to kick-start my career as a Software Engineer, bringing a strong work ethic, adaptability, and problem-solving skills to the tech industry.</p>
            <p>Before stepping into tech, I built a solid foundation in discipline and teamwork through a variety of jobs. I spent six years as a produce clerk at Kroger, two years as a cook at Serendipity, and a year handling inventory at Radial. Along the way, I also took on side projects in home improvement and landscaping. These jobs helped to get by, but my urge to start a career I will love has taken over.</p>
            <p>These diverse experiences have shaped me into a well-rounded, hardworking individual who's ready to take on new challenges in software development. I'm excited to bring my passion for technology and my strong work ethic to a team where I can grow and contribute.</p>
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
                <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
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