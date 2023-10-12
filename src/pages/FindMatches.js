import React, { useState, useEffect } from 'react';
import data from '../data/profiles.json';

const FindMatches = () => {
  const [swipedRight, setSwipedRight] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load right swipes from local storage on component mount
  useEffect(() => {
    const savedSwipedRight = JSON.parse(localStorage.getItem('swipedRight'));
    if (savedSwipedRight) {
      setSwipedRight(savedSwipedRight);
      // Set the currentIndex to the last swiped index
      setCurrentIndex(savedSwipedRight.length);
    }
  }, []);

const handleSwipeRight = () => {
  if (currentIndex < data.length) {
    // Handle a right swipe, e.g., add the entire profile to the right-swiped list
    const updatedSwipedRight = [...swipedRight, data[currentIndex]];
    setSwipedRight(updatedSwipedRight);
    setCurrentIndex(currentIndex + 1);

    // Save right swipes in local storage
    localStorage.setItem('swipedRight', JSON.stringify(updatedSwipedRight));
  }
};

  // Filter the data to exclude swiped cards
  const remainingData = data.filter((profile) => !swipedRight.includes(profile.name));

  return (
    <div className="card-swipe-container">
      {remainingData.slice(currentIndex).map((profile, index) => (
        <div
          key={profile.name}
          className="swipeable-card"
          onTouchStart={(e) => handleSwipeRight()}
          onMouseDown={(e) => handleSwipeRight()}
        >
          <img src={profile.image} alt={profile.name} />
          <h3>{profile.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FindMatches;
