import React from 'react';

function AdminHome({ handleLogout }) {
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      {/* Admin-specific content goes here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminHome;
