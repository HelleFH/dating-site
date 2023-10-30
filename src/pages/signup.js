import React from 'react';
import SignUpForm from '../components/SignUpForm'; // Update the import path

function SignUp() {
  return (
    <div>
    <div className='overlay'></div>

    <div className="signup-page">


    
<div class="signup-page-content">
<img className='signup-page-logo' src="../images/logo.png"/>

<div className='signup-form-header-container'>
      <h3> Fill out the form below to create your free account!
      </h3>
</div>
  

     <div class="signup-form-container"> <SignUpForm />
     
     
      </div>{/* Render your SignUpForm component here */}
      {/* Add other content or components as needed */}
    </div>
    </div>
    </div>
  );
}

export default SignUp;