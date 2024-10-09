import React from 'react';

function Education({ education }) {
  return (
    <div className="education">
      <h2>Education</h2>
      <h3>{education.institution}</h3>
      <p>{education.degree}</p>
      <p>{education.duration}</p>
      <p>GPA: {education.gpa}</p>
    </div>
  );
}

export default Education;
