import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Landing.css'; // We'll define the styles here

const Landing = () => {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    // After 3 seconds, show the navigation links
    const timer = setTimeout(() => {
      setShowLinks(true);
    }, 4000);

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="landing">
        <motion.h1
          className="landing-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1.75}}
        >
          Hi, My name is <span className="highlight">Dylan Via</span>
        </motion.h1>

        <motion.p
        className="landing-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        Welcome to my online portfolio!
      </motion.p>




      {/* Fade In the Navigation Links */}
      {showLinks && (
        <motion.nav
          className="smooth-scroll-nav"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: .5 } }, // Adds staggered effect
            hidden: { opacity: 0 },
          }}
        >
          <motion.a
            href="#about"
            variants={linkVariants}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.a>
          <motion.a
            href="#projects"
            variants={linkVariants}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            variants={linkVariants}
            transition={{ duration: 1 }}
          >
            Contact Me
          </motion.a>
        </motion.nav>
      )}
    </div>
  );
};

export default Landing;
