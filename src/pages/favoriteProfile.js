import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmoking, faCocktail, faStar, faBaby, faGraduationCap, faHome} from '@fortawesome/free-solid-svg-icons';

function FavoriteProfile() {
  const goBack = () => {
    window.history.back();
  };

  const selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));
  const addPossessiveS = (name) => {
    if (name.endsWith('s') || name.endsWith("'s")) {
      return `${name}'`;
    } else {
      return `${name}'s`;
    }
  };
  
    return (
      <div className='favorite-profile-container'>
        <h2>
  {addPossessiveS(selectedProfile.name)} {' '} {' '}   Profile
</h2>
        <div key={selectedProfile.id} className="profile">
        <div className="profile-personal-info">
          
        <img src={selectedProfile.image} alt={`${selectedProfile.name}'s profile`} />
          
          <h3>
            {selectedProfile.name} {selectedProfile.last_name}, {selectedProfile.age}
          </h3>
          
          <h4>
            {selectedProfile.occupation} - {selectedProfile.location}
          </h4>
          <h4>Interests:</h4>
          <div className="profile-interest-list-container">
   

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
  <FontAwesomeIcon icon={faGraduationCap} /><p>{selectedProfile.education_level}</p>
</div>
<div>
  <FontAwesomeIcon icon={faHome} /><p>{selectedProfile.hometown}</p>
</div>
            <div>
          <p>{selectedProfile.profile_text}</p>
              </div>
            </div>

        
       
      </div>
      <button onClick={goBack} className="back-button">
        Back
      </button>
    
      </div>
    );
  }

  export default FavoriteProfile;
