import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';

function ProfileCreationForm() {
  const navigate = useNavigate();

  // State variables for form data
  const [selectedLookingFor, setSelectedLookingFor] = useState('');

  const [selectedChildren, setSelectedChildren] = useState('');
  const [selectedZodiac, setSelectedZodiac] = useState('');
  const [selectedAlcohol, setSelectedAlcohol] = useState('');
  const [selectedSmoking, setSelectedSmoking] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [birthdate, setBirthdate] = useState('');
  const [occupation, setOccupation] = useState('');
  const [description, setDescription] = useState('');




  // State variable for form errors
  const [errors, setErrors] = useState({});

  // Default form data from local storage
  const formData = JSON.parse(localStorage.getItem('UserInfo')) || {};

  useEffect(() => {
    // Check local storage for form data and update state variables
    setSelectedChildren(formData.selectedChildren || '');
    setSelectedLookingFor(formData.selectedLookingFor|| '');
    setSelectedZodiac(formData.selectedZodiac || '');
    setSelectedAlcohol(formData.selectedAlcohol || '');
    setSelectedSmoking(formData.selectedSmoking || '');
    setSelectedEducation(formData.selectedEducation || '');
    setFirstName(formData.firstName || '');
    setLastName(formData.lastName || '');
    setEmail(formData.email || '');
    setBirthdate(formData.birthdate || '');

    setDescription(formData.description || ''); 


    setPhone(formData.phone || '');
    setPostcode(formData.postcode || '');
    setCity(formData.city || '');
    setProfilePhoto(formData.profilePhoto || null);
    setSelectedInterests(formData.selectedInterests || []);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      localStorage.setItem('profilePhoto', base64Image);
      setProfilePhoto(base64Image);
    };

    reader.readAsDataURL(file);
  };

  const validateForm = () => {
    const errors = {};
  
    if (!profilePhoto) {
      errors.profilePhoto = 'Photo is required';
    }
  
    if (!firstName) {
      errors.firstName = 'First name is required';
    }
  
    if (!lastName) {
      errors.lastName = 'Last name is required';
    }
  
    if (!email) {
      errors.email = 'Email is required';
    }
  
    if (!birthdate) {
      errors.birthdate = 'Please enter your birthdate';
    }
  
    return errors;
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform further actions

      // Create an object with all the form data
      const formDataToStore = {
        selectedChildren,
        selectedZodiac,
        selectedAlcohol,
        selectedSmoking,
        selectedInterests,
        selectedEducation,
        selectedLookingFor,

        firstName,
        lastName,
        email,
        phone,
        postcode,
        city,
        profilePhoto,
        birthdate,
        occupation,
        description,

      };

      // Save the entire formData object to localStorage under "UserInfo"
      localStorage.setItem('UserInfo', JSON.stringify(formDataToStore));

      // Navigate to the "/about" page
      navigate('/about');
    } else {
      // There are validation errors, update the state with error messages
      setErrors(validationErrors);
    }
  };


  const interestOptions = [
    'Photography',
    'Traveling',
    'Fitness and training',
    'Yoga',
    'Music',
    'Arts and crafts',
    'Literature',
    'Cooking',
    'Painting',
    'Animals',
    'Fashion and design',
    'Volunteering and charity work',
    'Hiking and outdoor activities',
    'Astrology',
    'Technology',
    'Programming',
    'Psychology',
    'Marketing',
    'Data science',
    'Fashion design',
    'Environmental science',
  ];


  return (
    <div>
      <h2>Create Your Profile</h2>
      <ProfileForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        postcode={postcode}
        city={city}
        occupation={occupation}
        description={description}

        selectedChildren={selectedChildren}
        selectedInterests={selectedInterests}
        selectedZodiac={selectedZodiac}
        selectedAlcohol={selectedAlcohol}
        selectedSmoking={selectedSmoking}
        selectedEducation={selectedEducation}
        selectedLookingFor={selectedLookingFor}

        errors={errors}
        profilePhoto={profilePhoto}
        handleLastNameChange={(event) => setLastName(event.target.value)}
        handleFirstNameChange={(event) => setFirstName(event.target.value)}
        handlePhoneChange={(event) => setPhone(event.target.value)}
        handleEmailChange={(event) => setEmail(event.target.value)}
        handlePostcodeChange={(event) => setPostcode(event.target.value)}
        handleCityChange={(event) => setCity(event.target.value)}
        handleChildrenChange={(event) => setSelectedChildren(event.target.value)}
        handleZodiacChange={(event) => setSelectedZodiac(event.target.value)}
        handleSmokingChange={(event) => setSelectedSmoking(event.target.value)}
        handleAlcoholChange={(event) => setSelectedAlcohol(event.target.value)}
        handleEducationChange={(event) => setSelectedEducation(event.target.value)}
        handleBirthdateChange={(event) => setBirthdate(event.target.value)}
        handleLookingForChange={(event) => setSelectedLookingFor(event.target.value)}

        handleOccupationChange={(event) => setOccupation(event.target.value)}
        handleDescriptionChange={(event) => setDescription(event.target.value)}


        handleFileUpload={handleFileUpload}
        handleInterestClick={(interest) => {
          const isInterestSelected = selectedInterests.includes(interest);
          const newInterests = isInterestSelected
            ? selectedInterests.filter((item) => item !== interest)
            : [...selectedInterests, interest];
          setSelectedInterests(newInterests);
        }}
        handleFormSubmit={handleFormSubmit}
        interestOptions={interestOptions}
      />
    </div>
  );
}

export default ProfileCreationForm;
