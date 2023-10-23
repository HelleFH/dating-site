  import React, { useState, useEffect } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSmoking, faChild, faCoffee, faBeer, faCocktail, faStar, faBaby } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
  import { Link } from 'react-router-dom';

  function MatchProfile() {
    // Retrieve the selected profile from localStorage
    const selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));
    const addPossessiveS = (name) => {
      // Check if the name already ends with 's' or an apostrophe
      if (name.endsWith('s') || name.endsWith("'s")) {
        return `${name}'`;
      } else {
        return `${name}'s`;
      }
    };
    // Your rendering logic here to display the selectedProfile
    return (
      <div className='favorite-profile-container'>
        {selectedProfile && (
          <div className="profile">
                    <h1>  {addPossessiveS(selectedProfile.name)}  Profile</h1>

            <img src={selectedProfile.image} alt={selectedProfile.name} />
            <h3>
  {selectedProfile.name} {selectedProfile.lastName}, {selectedProfile.age}
</h3>
            <h3>
              {selectedProfile.occupation} - {selectedProfile.location}
            </h3>
            {selectedProfile.profile_text && (
              <div>
                <h3>Description:</h3>
                <p>{selectedProfile.profile_text}</p>
              </div>
            )}
            <div className='additional-info'>
            <p>
              <FontAwesomeIcon icon={faBaby} /><h3>{selectedProfile.children}</h3>
            </p>
            <p>
              <FontAwesomeIcon icon={faSmoking} /> <h3>{selectedProfile.smoking_habits}</h3>
            </p>
            <p>
              <FontAwesomeIcon icon={faCocktail} /><h3> {selectedProfile.alcohol_habits}</h3>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} /><h3>{selectedProfile.zodiac_sign}</h3>
            </p>
            </div>
           
          </div>
        )}
         <Link to="/favorites">
        <button className="back-to-favorites-button">Back to Favorites</button>
      </Link>
      </div>
    );
  }

  export default MatchProfile;
