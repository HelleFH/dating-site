

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

  
    const validateForm = () => {
      const errors = {};
  
      if (!name) {
        errors.name = 'Name is required';
      }
  
      if (!email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!password) {
        errors.password = 'Password is required';
      }
  
      if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
  
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        // Form is valid, perform further actions
        // For now, you can log the data to the console
        console.log({ name, email, password });
        navigate("/blogs")
      } else {
        // There are validation errors, update the state with error messages
        setErrors(validationErrors);
      }
      
    };
  
    return (
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
  

function SignUp() {
  return (
    
    <div className="signup-page">
      <h1>Sign Up</h1>
      <div><img src='/images/couple-wedding.png' alt='Couple Wedding'></img>Fill out the form below to create an account.</div>
     <div> <ContactForm /> </div>{/* Render your ContactForm component here */}
      {/* Add other content or components as needed */}
    </div>
  );
}

export default SignUp;
