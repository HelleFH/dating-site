import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileCreationForm() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(localStorage.getItem('selectedCountry') || '');
  const [selectedInterests, setSelectedInterests] = useState(JSON.parse(localStorage.getItem('selectedInterests')) || []);
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState(''); // Use fullName state directly
  const [email, setEmail] = useState(''); // Use fullName state directly
  const interestOptions = ['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4'];


  


  // Add more form fields as needed

  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    // Check if form data exists in local storage
    const storedCountry = localStorage.getItem('selectedCountry');
    const storedFullName = localStorage.getItem('fullName');
    const storedEmail = localStorage.getItem('email');
    const storedPhoto = localStorage.getItem('profilePhoto');

    if (storedCountry) {
      // Set the retrieved data to your state
      setSelectedCountry(storedCountry);
    }
  
    if (storedFullName) {
      // Set the retrieved data to your state
      setFullName(storedFullName);
    }
  
    if (storedEmail) {
      // Set the retrieved data to your state
      setEmail(storedEmail);
    }
    if (storedPhoto) {
      // Set the retrieved data to your state
      setProfilePhoto(storedPhoto);
    }
  }, []);
  


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result; // Get the Base64-encoded image data
      localStorage.setItem('profilePhoto', base64Image);
      setProfilePhoto(base64Image);
    };

    reader.readAsDataURL(file); // Read the image file as a data URL
  };

  const validateForm = () => {
    const errors = {};

    if (!profilePhoto) {
      errors.profilePhoto = 'Photo is required';
    }

    if (!selectedCountry) {
      errors.selectedCountry = 'Country is required';
    }

    return errors;
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
  
    // Store selected country as a string
    localStorage.setItem('selectedCountry', selectedCountry);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value); // Set fullName directly
    localStorage.setItem('fullName', event.target.value); // Store fullName in local storage
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Set fullName directly
    localStorage.setItem('email', event.target.value); // Store fullName in local storage
  };

  const handleInterestClick = (interest) => {
    // Check if the interest is already selected
    const isInterestSelected = selectedInterests.includes(interest);
  
    // Create a new array of selected interests
    const newInterests = isInterestSelected
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];
  
    setSelectedInterests(newInterests); // Update the selected interests state
  
    // Store the updated interests array in local storage
    localStorage.setItem('selectedInterests', JSON.stringify(newInterests));
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform further actions
      // Navigate to the "/about" page
      navigate('/about');
    } else {
      // There are validation errors, update the state with error messages
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={handleNameChange} // Use handleNameChange to update fullName
        />
        {errors.fullName && <div className="error">{errors.fullName}</div>}
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange} // Use handleNameChange to update fullName

      />
      {errors.email && <div className="error">{errors.email}</div>}
    </div>
    <div>
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        name="selectedCountry"
        value={selectedCountry}
        onChange={(e) => {
          handleCountryChange(e);

        }}
     
        
      >
          <option value="">Vælg venligst</option>
          <option value="Ingen">Ingen</option>
          <option value="1">1</option>
          <option value="2">2</option>         
 	  <option value="3+">3 eller flere</option>
      </select>
      {errors.selectedCountry && <div className="error">{errors.selectedCountry}</div>}
    </div>
      {/* Other form fields */}
      {/* Profile Photo */}
      <div>
        <label htmlFor="profilePhoto">Profile Photo:</label>
        <input type="file" id="profilePhoto" accept="image/*" onChange={handleFileUpload} />
        {profilePhoto && <img src={profilePhoto} alt="Profile Preview" />}
        {errors.profilePhoto && <div className="error">{errors.profilePhoto}</div>}
      </div>
      <div>
        <label>Interests:</label>
        <div className="interest-buttons">
          {interestOptions.map((interest) => (
            <button type="button"
              key={interest}
              className={`interest-button ${
                selectedInterests.includes(interest) ? 'selected' : ''
              }`}
              onClick={() => handleInterestClick(interest)}
            >

              {interest}
            </button>
          ))}
        </div>
</div>      {/* ... */}
      <button type="submit">Create Profile</button>
    </form>
  );
}

const interestOptions = ['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4'];

export default ProfileCreationForm;
const styles = `
.selected {
  background-color: #3498db; /* Change the background color to your preference */
  color: #fff; /* Change the text color to your preference */
  font-weight: bold; /* Add other styles as needed */
}
`;

export { styles }; 
