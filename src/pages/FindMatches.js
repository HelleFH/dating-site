import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from '../components/react-tinder-card/index';
import profiles from '../data/profiles'; // Import the profiles data
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTimes, FaHeart, FaUndo, FaStar } from 'react-icons/fa'; // Import Font Awesome icons
function FindMatches() {
  const [favoritedProfiles, setFavoritedProfiles] = useState([]);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false); // Add state for showing the message
  const [showSwipedMessage, setShowSwipedMessage] = useState(false);


  const handleFavoriteClick = (profileToFavorite) => {
    // Check if the profile is not already in the list of favorited profiles
    if (!favoritedProfiles.some((profile) => profile.name === profileToFavorite.name)) {
      // Add the specific profile to the list of favorited profiles
      setFavoritedProfiles([...favoritedProfiles, profileToFavorite]);
      setShowFavoriteMessage(true);

      // Automatically hide the message after 2 seconds (adjust the time as needed)
      setTimeout(() => {
        setShowFavoriteMessage(false);
      }, 2000);
    }
  };
  
  useEffect(() => {
    // Store the list of favorited profiles in local storage whenever it changes
    localStorage.setItem('favoritedProfiles', JSON.stringify(favoritedProfiles));
  }, [favoritedProfiles]);

  const [currentIndex, setCurrentIndex] = useState(profiles.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(profiles.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < profiles.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, _nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    setShowSwipedMessage(true);

    setTimeout(() => {
      setShowSwipedMessage(false);
    }, 2000);
  };

  const outOfFrame = (_name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < profiles.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="find-matches-container">
      <h1>Swipe left or right or add to your favorites!</h1>
      {showFavoriteMessage && (
        <h2 className="infoText">Added to favorites</h2>
      )}
     
         {showSwipedMessage ? (
          <h2 className="infoText">You swiped {lastDirection}</h2>
        ) : (
          <h2 className="infoText"></h2>

          
    
      )}
      <div className="cardContainer">
        {profiles.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div className="card">
              <img src={character.image} draggable='false' alt={`${character.name}'s profile`} />
              <div className="card-i">
                <h3>
                  {character.name}, {character.age}
                </h3>
                <h3>
                  {character.occupation}, {character.location}
                </h3>
              </div>
              <div className="card-buttons">
                <a href="#" onClick={() => swipe('left')}>
                  <FaTimes />
                </a>
                <a href="#" onClick={() => goBack()}>
                  <FaUndo />
                </a>
             
                <a href="#" onClick={() => handleFavoriteClick(character)}>
                  <FaStar /> {/* Add a favorite star icon */}
                </a>
                <a href="#" onClick={() => swipe('right')}>
                  <FaHeart />
                </a>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
     
    </div>
  );
}

export default FindMatches;
