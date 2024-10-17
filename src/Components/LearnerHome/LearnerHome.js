// In LearnerHome.js
import React from 'react';

function LearnerHome({ handleLogout }) {
  return (
    <div>
      <h1>Learner Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LearnerHome;
