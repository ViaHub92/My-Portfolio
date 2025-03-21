import React from 'react';
import { Link, Element } from 'react-scroll';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import './App.css'; // Global styles if needed

function App() {
  return (
    <div>

      {/* Landing Section */}
      <Element name="landing">
        <Landing />
      </Element>

      {/* About Me Section */}
      <Element name="about">
        <AboutMe />
      </Element>
    </div>
  );
}

export default App;