import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from '../components/react-tinder-card/index';
import profiles from '../data/profiles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTimes, FaHeart, FaUndo, FaStar, FaInfoCircle } from 'react-icons/fa';
import Modal from '../components/modal';
import { Link } from 'react-router-dom';


import { faSmoking, faPen, faChild, faCoffee, faBeer, faCocktail, faStar, faBaby } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons



function FindMatches() {
  // Store favorited profiles
  const [favoritedProfiles, setFavoritedProfiles] = useState([]);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);
  const [showSwipedMessage, setShowSwipedMessage] = useState(false);

  // Load favorited profiles from local storage
  useEffect(() => {
    const storedFavoritedProfiles = JSON.parse(localStorage.getItem('favoritedProfiles'));
    if (storedFavoritedProfiles) {
      setFavoritedProfiles(storedFavoritedProfiles);
    }
  }, []);

  // Function to add a profile to favorites
  const handleFavoriteClick = (profileToFavorite) => {
    if (favoritedProfiles.some((profile) => profile.name === profileToFavorite.name)) {
      setShowFavoriteMessage('Already in favorites');
    } else {
      setFavoritedProfiles([...favoritedProfiles, profileToFavorite]);
      setShowFavoriteMessage('Added to favorites');
    }

    setTimeout(() => {
      setShowFavoriteMessage('');
    }, 1000);
  };


  useEffect(() => {
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
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };
  const handleViewProfileClick = (profile) => {
    // Store the selected profile in localStorage
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (


    <div className="find-matches-container">
      <h2>Swipe left or right or add to your favorites!</h2>
      {showFavoriteMessage && (
        <h3 className="infoText"></h3>
      )}
      {showFavoriteMessage && (
        <h3 className="infoText">{showFavoriteMessage}</h3>
      )}

      {showSwipedMessage ? (
        <h3 className="infoText">You swiped {lastDirection}</h3>
      ) : (
        <h3 className="infoText"></h3>
      )}

      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <div className='modal-content'>
            <div key={selectedProfile.id} className="profile">
              <div className="profile-personal-info">

                <img src={selectedProfile.image} alt={`${selectedProfile.name}'s selectedProfile`} />

                <h3>
                  {selectedProfile.name}, {selectedProfile.age}
                </h3>

                <h4>
                  {selectedProfile.occupation} - {selectedProfile.location}
                </h4>

          
              <div className='additional-info'>

                {selectedProfile.profile_text && (
                  <div>

                    <p>{selectedProfile.profile_text.substring(0, 200)}...</p>
                  </div>
                )}
              </div>
              <div className="profile-interest-list-container">
                  <h4>Interests:</h4>

                  <ul className="profile-interest-list">
                    {selectedProfile.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className='additional-info'>
                <div>
                  <FontAwesomeIcon icon={faBaby} /><p>{selectedProfile.children}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faSmoking} /> <p>{selectedProfile.smoking_habits}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCocktail} /><p> {selectedProfile.alcohol_habits}</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} /><p>{selectedProfile.zodiac_sign}</p>
                </div>
              </div>
              <div className='modal-buttons'>
              </div>
                <button className="back-button" onClick={closeModal}>
                  Back
                </button>
                
                <button className="view-profile-button" onClick={() => handleViewProfileClick(selectedProfile)}>

                  <Link to={`/matchProfiles/${selectedProfile.id}`}>
                    View Profile
                  </Link>
                </button>

              </div>
            </div>
        </Modal>
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
              <div className='card-image-container '> <img src={character.image} draggable="false" alt={`${character.name}'s profile`} />
                <div className="card-i">
                  <h3>
                    {character.name}, {character.age}
                  </h3>

                  <h3>
                    {character.occupation}, {character.location}
                  </h3>
                  <div className="info-button">

                    <a href="#" onClick={() => openModal(character)}>
                      <FaInfoCircle />
                    </a></div>
                </div>
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
