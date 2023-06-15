import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="image-container">
        <img src="https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg" alt="Image 1" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Image 2" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Image 3" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Image 4" />
      </div>
      <div>
        <h3>Software</h3>
        <ul>
          <li>Microsoft Office</li>
          <li>Word</li>
          <li>PowerPoint</li>
          <li>Excel</li>
          <li>GitHub</li>
          <li>Visual Paradigm</li>
          <li>Visio</li>
          <li>Latex</li>
        </ul>
      </div>
      <div>
        <h3>Mathematics</h3>
        <ul>
          <li>Linear Algebra</li>
          <li>Calculus</li>
          <li>Probability & Statistics</li>
          <li>Linear Programming</li>
        </ul>
      </div>
      <div>
        <h3>Programming Languages</h3>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Django</li>
          <li>React</li>
          <li>Vue JS</li>
          <li>SQL</li>
          <li>Solidity</li>
          <li>R</li>
          <li>Git</li>
          <li>Python</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
