import React from 'react';

function WorkExperience({ experiences }) {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="work-item">
          <h3><b>{experience.position}</b> ({experience.date})</h3>
          <p>{experience.details}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
