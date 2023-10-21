import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmoking, faChild, faCoffee, faBeer, faCocktail, faStar, faBaby } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

function MatchProfile() {
  // Retrieve the selected profile from localStorage
  const selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));

  // Your rendering logic here to display the selectedProfile
  return (
    <div className='favorite-profile-container'>
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
          <div className='additional-info'>
          <h3>
            <FontAwesomeIcon icon={faBaby} />{selectedProfile.children}
          </h3>
          <h3>
            <FontAwesomeIcon icon={faSmoking} /> {selectedProfile.smoking_habits}
          </h3>
          <h3>
            <FontAwesomeIcon icon={faCocktail} /> {selectedProfile.alcohol_habits}
          </h3>
          <h3>
            <FontAwesomeIcon icon={faStar} />{selectedProfile.zodiac_sign}
          </h3>
          </div>
          {selectedProfile.profile_text && (
            <div>
              <h3>Description:</h3>
              <p>{selectedProfile.profile_text}</p>
            </div>
          )}
          {/* You can add more profile information and icons as needed */}
        </div>
      )}
    </div>
  );
}

export default MatchProfile;
