import React, { useEffect, useState } from 'react';
import { FaUser, FaBriefcase, FaBirthdayCake, FaUserPolice, FaPhone, FaMapMarker, FaEnvelope, FaChild, FaSmoking, FaGraduationCap, FaWineGlass, FaStar, FaListUl, FaBaby } from 'react-icons/fa'; // Import Font Awesome icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function UserProfile() {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    city: '',
    selectedChildren: '',
    selectedSmoking: '',
    selectedEducation: '',
    selectedAlcohol: '',
    selectedZodiac: '',
    selectedInterests: [],
    profilePhoto: '',
    birthday: '',
    description: '',
    profession:'',
  });

  useEffect(() => {
    // Retrieve user information from local storage
    const userInfo = JSON.parse(localStorage.getItem('UserInfo')) || {};

    // Check if user information exists in local storage
    if (userInfo) {
      setProfileData(userInfo);
    }
  }, []);

  return (
    <div className='view-profile'>
      {profileData.firstName && (
        <h1>Welcome, {profileData.firstName}!</h1>
      )}

      <div className='contact-info'>
        {profileData.profilePhoto && (
          <img src={profileData.profilePhoto} alt="Profile Preview" />
        )}
        <h2>Your contact information</h2>
        {profileData.email && (
          <p>
          <span>  <FaEnvelope /> Email: </span><span>{profileData.email}</span>
          </p>
        )}
        {profileData.phone && (
          <p>
           <span> <FaPhone /> Phone: </span><span>{profileData.phone}</span>
          </p>
        )}
        {profileData.postcode && (
          <p>
            <span><FaMapMarker /> Postcode:</span><span>{profileData.postcode}</span> 
          </p>
        )}
        {profileData.city && (
          <p>
       <span>    <FaMapMarker /> City:</span> <span>{profileData.city}</span> 
          </p>
        )}
      </div>

      <div class="user-info">
        <h2>Additional information</h2>
        {profileData.description && (
          <p><span>Profile text:</span><span>{profileData.description}</span></p>
        )}
        {profileData.selectedChildren && (
          <p>
        <span>    <FaBaby /> Children: </span><span>{profileData.selectedChildren}</span>
          </p>
        )}
          {profileData.profession && (
          <p>
            <span><FaBriefcase /> Job:</span> <span>{profileData.profession}</span>
          </p>
        )}

        {profileData.selectedSmoking && (
          <p>
          <span> <FaSmoking /> Smoking: </span> <span>{profileData.selectedSmoking}</span>
          </p>
        )}

        {profileData.selectedEducation && (
          <p>
            <span><FaGraduationCap /> Education:</span> <span>{profileData.selectedEducation}</span>
          </p>
        )}

        {profileData.selectedAlcohol && (
          <p>
           <span> <FaWineGlass /> Alcohol:</span> <span>{profileData.selectedAlcohol}</span>
          </p>
        )}

        {profileData.selectedZodiac && (
          <p>
           <span> <FaStar /> Zodiac:</span> <span>{profileData.selectedZodiac}</span>
          </p>
        )}

        {profileData.selectedInterests && profileData.selectedInterests.length > 0 && (
          <div>
            <p>
              <FaListUl />Interests:
            </p>
            <ul>
              {profileData.selectedInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="buttons">
        <Link to="/profile">
          <button>Edit</button>
        </Link>
        <Link to="/findMatches">
          <button>Find Matches!</button>
        </Link>
      </div>
    </div>
  );
}

export default UserProfile;
