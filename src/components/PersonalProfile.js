import React from 'react';

function PersonalProfile({ profile }) {
  return (
    <div className="personal-profile">
      <h2>Personal Profile</h2>
      <p>{profile}</p>
    </div>
  );
}

export default PersonalProfile;
