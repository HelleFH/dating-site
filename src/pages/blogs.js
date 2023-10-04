import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileCreationForm() {

 

  


  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');


  const [selectedInterests, setSelectedInterests] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const errors = {};

    if (!profilePhoto) {
      errors.name = 'Photo is required';
    }

    if (!selectedCountry) {
        errors.name = 'Country is required';
      }
  
      return errors;
    };
  



  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    // Add more form fields as needed
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload and display preview here
    setProfilePhoto(file);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleInterestClick = (interest) => {
    setSelectedInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((item) => item !== interest)
        : [...prevInterests, interest]
    );
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send the form data, including profilePhoto and selectedInterests, to your backend or perform further actions
    const formDataToSend = {
      formData,
      profilePhoto,
      selectedInterests,
      selectedCountry,
    };

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform further actions
      // For now, you can log the data to the console
      console.log({ selectedCountry, selectedInterests });
      navigate("/about")
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
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
                  {errors.name && <div className="error">{errors.name}</div>}

      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
                  {errors.email && <div className="error">{errors.email}</div>}

      </div>
      <div>
        <label htmlFor="country">Børn:</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">Vælg venligst</option>
          <option value="Ingen">Ingen</option>
          <option value="1">1</option>
          <option value="2">2</option>         
 	  <option value="3+">3 eller flere</option>
          {/* Add more country options */}
        </select>
      </div>
      <div>
        <label htmlFor="profilePhoto">Profile Photo:</label>
        <input type="file" id="profilePhoto" accept="image/*" onChange={handleFileUpload} />

        {profilePhoto && <img src={URL.createObjectURL(profilePhoto)} alt="Profile Preview" />}
        {errors.profilePhoto && <div className="error">{errors.profilePhoto}</div>}

      </div>


      <div>
        <label>Interests:</label>
        <div className="interest-buttons">
          {interestOptions.map((interest) => (
            <button
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
</div>
     
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