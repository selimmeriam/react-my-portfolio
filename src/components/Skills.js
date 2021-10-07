import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-wrap">
      <div className="skills-card">
        <div className="skill-bar">
          <h4 className="bar-label">Javascript</h4>
          <div className="progress-js">
            <div className="progress-value-js"></div>
          </div>
        </div>
        <div className="skill-bar">
          <h4 className="bar-label">css3</h4>
          <div className="progress-css">
            <div className="progress-value-css"></div>
          </div>
        </div>
        <div className="skill-bar">
          <h4 className="bar-label">html 5</h4>
          <div className="progress-html">
            <div className="progress-value-html"></div>
          </div>
        </div>
      </div>
      <div className="skills-card">
        <div className="skill-bar">
          <h4 className="bar-label">React</h4>
          <div className="progress-rea">
            <div className="progress-value-rea"></div>
          </div>
        </div>
        <div className="skill-bar">
          <h4 className="bar-label">Node.js</h4>
          <div className="progress-nod">
            <div className="progress-value-nod"></div>
          </div>
        </div>
        <div className="skill-bar">
          <h4 className="bar-label">Figma</h4>
          <div className="progress-fig">
            <div className="progress-value-fig"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
