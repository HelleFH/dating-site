import React, { useEffect, useState } from 'react';

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
    <div>
      {profileData.firstName && (
        <h1>Welcome, {profileData.firstName}!</h1>
      )}

      <div>
        <h2>Your contact information</h2>
        {profileData.email && (
          <p>Email: {profileData.email}</p>
        )}
        {profileData.phone && (
          <p>Phone: {profileData.phone}</p>
        )}
        {profileData.postcode && (
          <p>Postcode: {profileData.postcode}</p>
        )}
        {profileData.city && (
          <p>City: {profileData.city}</p>
        )}
      </div>

      {profileData.selectedChildren && (
        <p>Your children are: {profileData.selectedChildren}</p>
      )}

      {profileData.selectedSmoking && (
        <p>Smoking habits: {profileData.selectedSmoking}</p>
      )}

      {profileData.selectedEducation && (
        <p>Education level: {profileData.selectedEducation}</p>
      )}

      {profileData.selectedAlcohol && (
        <p>Alcohol habits: {profileData.selectedAlcohol}</p>
      )}

      {profileData.selectedZodiac && (
        <p>Zodiac sign: {profileData.selectedZodiac}</p>
      )}

{profileData.selectedInterests && profileData.selectedInterests.length > 0 && (
  <div>
    <p>Your Interests:</p>
    <ul>
      {profileData.selectedInterests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  </div>
)}

      {profileData.profilePhoto && (
        <img src={profileData.profilePhoto} alt="Profile Preview" />
      )}
    </div>
  );
}

export default UserProfile;
