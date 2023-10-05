import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    // Retrieve the user's country from local storage
    const country = localStorage.getItem('selectedCountry');

    // Check if the country exists in local storage
    if (country) {
      setSelectedCountry(country);
    }
  }, []);

  useEffect(() => {
    // Retrieve the user's profile photo from local storage
    const photo = localStorage.getItem('profilePhoto');

    // Check if the photo exists in local storage
    if (photo) {
      setProfilePhoto(photo);
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {selectedCountry || 'Guest'}!</h1>
      {selectedCountry ? (
        <p>Your country is: {selectedCountry}</p>
      ) : (
        <p>Please set your country in the settings.</p>
      )}

      {profilePhoto ? (
        <img src={profilePhoto} alt="Profile Preview" />
      ) : (
        <p>No profile photo available</p>
      )}
    </div>
  );
}

export default UserProfile;
