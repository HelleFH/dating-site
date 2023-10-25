import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from '../components/react-tinder-card/index';
import profiles from '../data/profiles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTimes, FaHeart, FaUndo, FaStar } from 'react-icons/fa';

function FindMatches() {
  // State to store favorited profiles
  const [favoritedProfiles, setFavoritedProfiles] = useState([]);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);
  const [showSwipedMessage, setShowSwipedMessage] = useState(false);

  // Load favorited profiles from local storage when the component mounts
  useEffect(() => {
    const storedFavoritedProfiles = JSON.parse(localStorage.getItem('favoritedProfiles'));
    if (storedFavoritedProfiles) {
      setFavoritedProfiles(storedFavoritedProfiles);
    }
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  // Function to add a profile to favorites
  const handleFavoriteClick = (profileToFavorite) => {
    if (favoritedProfiles.some((profile) => profile.name === profileToFavorite.name)) {
      setShowFavoriteMessage(true);
  
      setTimeout(() => {
        setShowFavoriteMessage(false);
      }, 1000);
    } else {
      setFavoritedProfiles([...favoritedProfiles, profileToFavorite]);
      setShowFavoriteMessage(true);
  
      setTimeout(() => {
        setShowFavoriteMessage(false);
      }, 1000);
    }
  };

  // Store the list of favorited profiles in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('favoritedProfiles', JSON.stringify(favoritedProfiles));
  }, [favoritedProfiles]);

  // State for the current card index, swiped direction, and card refs
  const [currentIndex, setCurrentIndex] = useState(profiles.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  // Create an array of refs for TinderCard components
  const childRefs = useMemo(
    () =>
      Array(profiles.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  // Function to update the current index
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  // Function to check if the user can go back in profiles
  const canGoBack = currentIndex < profiles.length - 1;
  const canSwipe = currentIndex >= 0;

  // Function called when a card is swiped
  const swiped = (direction, _nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    setShowSwipedMessage(true);

    setTimeout(() => {
      setShowSwipedMessage(false);
    }, 1000);
  };

  // Function called when a card goes out of the card container
  const outOfFrame = (_name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  // Function to swipe a card
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < profiles.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  // Function to go back to the previous card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="find-matches-container">
      <h2>Swipe left or right or add to your favorites!</h2>
      {showFavoriteMessage && (
        <h3 className="infoText">Added to favorites</h3>
      )}

      {showSwipedMessage ? (
        <h3 className="infoText">You swiped {lastDirection}</h3>
      ) : (
        <h3 className="infoText"></h3>
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
              <img src={character.image} draggable="false" alt={`${character.name}'s profile`} />
              <div className="card-i">
                <h3>
                  {character.name}, {character.age}
                </h3>
                
                <h3>
                  {character.occupation}, {character.location}
                </h3>
              </div>
              <div className="card-buttons">
                <a onClick={(e) => { e.preventDefault(); swipe('left') }}>
                  <FaTimes />
                </a>
                <a onClick={() => goBack()}>
                  <FaUndo />
                </a>
                <a onClick={() => handleFavoriteClick(character)}>
                  <FaStar />
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); swipe('right') }}>
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
 