import React, { useState, useEffect } from 'react';

function MatchProfile() {
  // Retrieve the selected profile from localStorage
  const selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));

  // Your rendering logic here to display the selectedProfile
  return (
    <div>
      <h1>Match Profile</h1>
      {selectedProfile && (
        <div className="profile">
          <img src={selectedProfile.image} alt={`${selectedProfile.name}'s profile`} />
          <h3>
            {selectedProfile.name}, {selectedProfile.age}
          </h3>
          <h3>
            {selectedProfile.occupation} - {selectedProfile.location}
          </h3>
          {/* Display other profile information here */}
        </div>
      )}
    </div>
  );
}

export default MatchProfile;
