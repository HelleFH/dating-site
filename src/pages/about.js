
import { useLocation } from 'react-router-dom';

// ...

function AnotherPage() {
  const location = useLocation();
  const formData = location.state.formData;
  const profilePhoto = location.state.profilePhoto;
  const selectedInterests = location.state.selectedInterests;
  const selectedCountry = location.state.selectedCountry;

  // Access and display the form data as needed
  console.log(formData, profilePhoto, selectedInterests, selectedCountry);

  // Render the data as needed
}

export default AnotherPage;
