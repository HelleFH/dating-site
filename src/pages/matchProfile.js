  import React, { useState, useEffect } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSmoking, faChild, faPen, faCoffee, faBeer, faCocktail, faStar, faBaby } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
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
        <h2>
  {addPossessiveS(selectedProfile.name)} {' '} {' '}   Profile
</h2>
        <div key={selectedProfile.id} className="profile">
        <div className="profile-personal-info">
          
        <img src={selectedProfile.image} alt={`${selectedProfile.name}'s profile`} />
          
          <h3>
            {selectedProfile.name}, {selectedProfile.age}
          </h3>
          
          <h4>
            {selectedProfile.occupation} - {selectedProfile.location}
          </h4>
          <div className="profile-interest-list-container">
          <h4>Interests:</h4>

          <ul className="profile-interest-list">
              {selectedProfile.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
            </div>

         
          </div>
          <div className='additional-info'>
            <div>
              <FontAwesomeIcon icon={faBaby} /><p>{selectedProfile.children}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faSmoking} /> <p>{selectedProfile.smoking_habits}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCocktail} /><p> {selectedProfile.alcohol_habits}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} /><p>{selectedProfile.zodiac_sign}</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faPen} /><p>{selectedProfile.profile_text}</p>
              </div>
            </div>

        
       
      </div>
      <button className="back-to-favorites-button"> <Link to="/favorites">
   Back to Favorites  </Link></button>
    
      </div>
    );
  }

  export default MatchProfile;
