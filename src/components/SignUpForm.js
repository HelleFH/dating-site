import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = 'First name is required';
    }

    if (!lastName) {
      validationErrors.lastName = 'Last name is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, save the data to "UserInfo" in local storage
      const userInfo = JSON.parse(localStorage.getItem('UserInfo')) || {};
      userInfo.firstName = firstName;
      userInfo.lastName = lastName;
      userInfo.email = email;
      localStorage.setItem('UserInfo', JSON.stringify(userInfo));

      // For now, you can log the data to the console
      console.log({ firstName, lastName, email, password });

      // Continue with your navigation logic
      navigate('/profile');
    } else {
      // There are validation errors, update the state with error messages
      setErrors(validationErrors);
    }
  };

  return (
      <form class="signup-form">



        <div className="signup-form-name"> 
          <label htmlFor="firstName"><h2>First Name:</h2></label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={errors.firstName}

          />
                  <label htmlFor="lastName"><h2>Last Name:</h2></label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)
            }
            placeholder={errors.lastName}

          />
        </div>

      



        <div>
          <label htmlFor="email"><h2>Email:</h2></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={errors.email}

          />
        
        </div>
        <div>
          <label htmlFor="password"><h2>Password:</h2></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={errors.password}

          />
        </div>
        <div>
          <label htmlFor="confirmPassword"><h2>Confirm Password:</h2></label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={errors.confirmPassword}

          />
    
        </div>
        <button className="signup-form-submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
  export default SignUpForm;
