import React from 'react';
import SignUpForm from '../components/SignUpForm'; // Update the import path

function SignUp() {
  return (
    <div className="signup-page">
      <div class="signup-page-image"><div class="overlay"></div><img src='/images/couple-wedding.png' alt='Couple Wedding'></img>
      </div>
<div class="signup-page-content">
      <div>Fill out the form below to create an account.
      </div>
      <h1 class="signup-page-header">Sign Up</h1>

     <div class="signup-page-form"> <SignUpForm />
      </div>{/* Render your SignUpForm component here */}
      {/* Add other content or components as needed */}
    </div>
    </div>
  );
}

export default SignUp;