import React, { useState, useEffect } from "react";

function DisplayProfiles() {
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const swipedRightProfiles = JSON.parse(localStorage.getItem('swipedRightProfiles')) || [];
  const [interestFilter, setInterestFilter] = useState(""); // State for selected interest
  const [hasChildrenFilter, setHasChildrenFilter] = useState(""); // State for children filter
  const [locationFilter, setLocationFilter] = useState(""); // State for location filter

  useEffect(() => {
    // Apply filtering logic here based on selected criteria
    const filtered = swipedRightProfiles.filter((profile) => {
      // Check if the profile's interests match the selected interest (or if no interest is selected)
      const interestMatch = !interestFilter || profile.interests.includes(interestFilter);
  
      // Convert the children field to a number
      const childrenCount = parseInt(profile.children, 10);
  
      // Check if the profile has children (or if no filter is applied)
      const childrenMatch =
        (!hasChildrenFilter && isNaN(childrenCount)) || // Filter not selected and no children data
        (hasChildrenFilter === "Yes" && !isNaN(childrenCount) && childrenCount > 0) || // Filter for "Yes" and children count > 0
        (hasChildrenFilter === "1" && childrenCount === 1) || // Filter for "1" child
        (hasChildrenFilter === "2" && childrenCount === 2) || // Filter for "2" children
        (hasChildrenFilter === "3 eller flere" && childrenCount >= 3); // Filter for "3 eller flere" children
  
      // Check if the profile's location matches the selected location (or if no location is selected)
      const locationMatch = !locationFilter || profile.location === locationFilter;
  
      // Combine all filtering criteria
      return interestMatch && childrenMatch && locationMatch;
    });
  
    setFilteredProfiles(filtered);
  }, [swipedRightProfiles, interestFilter, hasChildrenFilter, locationFilter]);
  

  // Handle interest filter change
  const handleInterestFilterChange = (event) => {
    setInterestFilter(event.target.value);
  };

  // Handle children filter change
  const handleChildrenFilterChange = (event) => {
    setHasChildrenFilter(event.target.value);
  };

  // Handle location filter change
  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  return (
    <div>
      <h1>Favorited Profiles</h1>

      {/* Filter controls */}
      <div>
        <label htmlFor="interestFilter">Filter by Interest:</label>
        <select id="interestFilter" value={interestFilter} onChange={handleInterestFilterChange}>
          <option value="">All</option>
          <option value="Sports">Sports</option>
          <option value="Music">Music</option>
          {/* Add more interest options */}
        </select>
      </div>

      <div>
  <label htmlFor="childrenFilter">Filter by Children:</label>
  <select id="childrenFilter" value={hasChildrenFilter} onChange={handleChildrenFilterChange}>
    <option value="">Ingen eller ikke oplyst</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3 eller flere">3 eller flere</option>
  </select>
</div>


      <div>
        <label htmlFor="locationFilter">Filter by Location:</label>
        <select id="locationFilter" value={locationFilter} onChange={handleLocationFilterChange}>
          <option value="">All</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          {/* Add more location options */}
        </select>
      </div>

      <div className="profileContainer">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="profile">
            <img src={profile.image} alt={`${profile.name}'s profile`} />
            <h3>
              {profile.name}, {profile.age}
            </h3>
            <h3>
              {profile.occupation} {profile.location}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProfiles;