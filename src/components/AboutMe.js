import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css'; // We'll define the styles here

const AboutMe = () => {
  return (
    <div className="about-me">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
                    I'm a recent Computer Science graduate with a strong passion for software engineering. I created this website to showcase my skills and projects.
                    While my experience so far has been focused on school and personal projects, one thing I've discovered is my love for coding. I'm confident that my skills and enthusiasm will make me a valuable asset to any team or organization.
      </motion.p>
    </div>
  );
};

export default AboutMe;
