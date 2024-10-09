import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  const [resumeData] = useState({
    header: {
      name: 'Rajwinder S. Parmar',
      title: 'Computer Science Student',
      email: 'rparmar2003@outlook.com',
      web: 'github.com/RajParmar2003',
      mobile: '1 (732) 318-2790',
    },
    personalProfile: 'Dedicated computer science student with a minor in business, passionate about technology, innovation, and software development.',
    workExperience: [
      {
        position: 'National Science Foundation (NSF) – Entrepreneurial Lead',
        date: 'Feb 2024 – Apr 2024',
        details: 'Led research team for NJIT Propelus I-Corps, conducted 20+ interviews, and secured a $50k NSF grant.',
      },
      {
        position: 'RWJ Fitness & Wellness Center – Lifeguard',
        date: 'Jun 2019 – Present',
        details: 'American Red Cross Certified in First Aid and CPR, supervising annual summer camp programs for 75+ children.',
      },
    ],
    skills: ['JavaScript', 'Python', 'React.js', 'Node.js', 'Linux', 'MySQL', 'NoSQL', 'Swift'],
    education: {
      institution: 'New Jersey Institute of Technology',
      degree: 'BS in Computer Science | Minor in Business',
      duration: '2018 - 2022',
      gpa: '3.2',
    },
  });

  return (
    <div className="App">
      <div className="resume-container">
        <Header {...resumeData.header} />
        <PersonalProfile profile={resumeData.personalProfile} />
        <WorkExperience experiences={resumeData.workExperience} />
        <Skills skills={resumeData.skills} />
        <Education education={resumeData.education} />
      </div>
    </div>
  );
}

export default App;
