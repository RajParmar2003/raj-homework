import React from 'react';

function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Key Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
