import React from 'react';

function ProfileForm({
  firstName,
  lastName,
  email,
  phone,
  postcode,
  city,
  birthdate,
  occupation,
  selectedChildren,
  selectedSmoking,
  selectedEducation,
  selectedAlcohol,
  selectedZodiac,
  selectedInterests,
  selectedLookingFor,
  errors,
  description,
  profilePhoto,
  handleFirstNameChange,
  handleLastNameChange,
  handlePostcodeChange,
  handleCityChange,
  handleEmailChange,
  handleChildrenChange,
  handlePhoneChange,
  handleFileUpload,
  handleInterestClick,
  handleFormSubmit,
  interestOptions,
  handleZodiacChange,
  handleAlcoholChange,
  handleSmokingChange,
  handleEducationChange,
  handleBirthdateChange,
  handleOccupationChange,
  handleDescriptionChange,
  handleLookingForChange,

}) {

  
  function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }

    return age;
  }

  return (
    <form className="profile-form" onSubmit={handleFormSubmit}>
      <div className="form-fields">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
        <div>
          <label htmlFor="postcode">Postcode:</label>
          <input
            type="text" // Use text type for postcode
            id="postcode"
            name="postcode"
            value={postcode}
            onChange={handlePostcodeChange}
          />
          {errors.postcode && <div className="error">{errors.postcode}</div>}
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text" // Use text type for city
            id="city"
            name="city"
            value={city}
            onChange={handleCityChange}
          />
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
          {errors.birthdate && <div className="error">{errors.birthdate}</div>}
        </div>
        {birthdate && (
          <div>
            <p>Age: {calculateAge(birthdate)} years</p>
          </div>
        )}

{birthdate && (
  <div>
    <p>Age: {calculateAge(birthdate)} years</p>
  </div>
)}

<div>
        <label htmlFor="lookingFor">Looking for:</label>
        <select
          id="LookingFor"
          name="selectedLookingFor"
          value={selectedLookingFor}
          onChange={handleLookingForChange}
        >
          <option value="">Choose</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="both">Both</option>
          <option value="others">Other</option>
        </select>
        {errors.selectedLookingFor && (
          <div className="error">{errors.selectedLookingFor}</div>
        )}
      </div>



<div>
          <label htmlFor="occupation">Job title:</label>
          <input
            type="text" // Use text type for city
            id="occupation"
            name="occupation"
            value={occupation}
            onChange={handleOccupationChange}
          />
          {errors.city && <div className="error">{errors.city}</div>}
        </div>


        <div>
  <label htmlFor="description">Description:</label>
  <textarea
    id="description"
    name="description"
    value={description}
    onChange={handleDescriptionChange}
  />
</div>




      <div>
        <label htmlFor="children">Children:</label>
        <select
          id="children"
          name="selectedChildren"
          value={selectedChildren}
          onChange={handleChildrenChange}
        >
          <option value="">Choose</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3 eller flere">3 eller flere</option>
        </select>
        {errors.selectedChildren && (
          <div className="error">{errors.selectedChildren}</div>
        )}
      </div>

      <div>
        <label htmlFor="education">Education level:</label>
        <select
          id="education"
          name="selectedEducation"
          value={selectedEducation}
          onChange={handleEducationChange}
        >
          <option value="">Choose</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3 eller flere">3 eller flere</option>
        </select>
        {errors.selectedEducation && (
          <div className="error">{errors.selectedEducation}</div>
        )}
      </div>


      <div>
        <label htmlFor="zodiac">Zodiac:</label>
        <select
          id="zodiac"
          name="selectedZodiac"
          value={selectedZodiac}
          onChange={handleZodiacChange}
          >
          <option value="">Choose</option>
          <option value="Vædderen">Vædderen</option>
          <option value="Tyren">Tyren</option>
          <option value="Tvillingerne">Tvillingerne</option>
          <option value="Krebsen">Krebsen</option>
          <option value="Løven">Løven</option>
          <option value="Jomfruen">Jomfruen</option>
          <option value="Vægten">Vægten</option>
          <option value="Skorpionen">Skorpionen</option>
          <option value="Skytten">Skytten</option>
          <option value="Stenbukken">Stenbukken</option>
          <option value="Vandbæreren">Vandbæreren</option>
          <option value="Fisken">Fisken</option>
        </select>
        {errors.selectedZodiac && (
          <div className="error">{errors.selectedZodiac}</div>
        )}
      </div>

      <div>
        <label htmlFor="alcohol">Alcohol Habits:</label>
        <select
          id="alcohol"
          name="selectedAlcohol"
          value={selectedAlcohol}
          onChange={handleAlcoholChange}
          >
          <option value="">Choose</option>
          <option value="Vædderen">Vædderen</option>
          <option value="Tyren">Tyren</option>
          <option value="Tvillingerne">Tvillingerne</option>
          <option value="Krebsen">Krebsen</option>
          <option value="Løven">Løven</option>
          <option value="Jomfruen">Jomfruen</option>
          <option value="Vægten">Vægten</option>
          <option value="Skorpionen">Skorpionen</option>
          <option value="Skytten">Skytten</option>
          <option value="Stenbukken">Stenbukken</option>
          <option value="Vandbæreren">Vandbæreren</option>
          <option value="Fisken">Fisken</option>
        </select>
        {errors.selectedAlcohol && (
          <div className="error">{errors.selectedAlcohol}</div>
        )}
      </div>

      <div>
        <label htmlFor="smoking">Smoking habits:</label>
        <select
          id="smoking"
          name="selectedSmoking"
          value={selectedSmoking}
          onChange={handleSmokingChange}
          >
          <option value="">Choose</option>
          <option value="Vædderen">Vædderen</option>
          <option value="Tyren">Tyren</option>
          <option value="Tvillingerne">Tvillingerne</option>
        
        </select>
        {errors.selectedSmoking && (
          <div className="error">{errors.selectedSmoking}</div>
        )}
      </div>
      </div>
      <div>
        <label htmlFor="profilePhoto">Profile Photo:</label>
        <input
          type="file"
          id="profilePhoto"
          accept="image/*"
          onChange={handleFileUpload}
        />
        {profilePhoto && <img src={profilePhoto} alt="Profile Preview" />}
        {errors.profilePhoto && (
          <div className="error">{errors.profilePhoto}</div>
        )}
      </div>
      <div>
        <label>Interests:</label>
        <div className="interest-buttons">
          {interestOptions.map((interest) => (
            <button
              type="button"
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

      


      <button type="submit">Save</button>
    </form>
  );
}

export default ProfileForm;
