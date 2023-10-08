import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import TinderCard from "../react-tinder-card/index";
import Profiles from "../data/profiles.json";

const alreadyRemoved = [];
let charactersState = Profiles;

function Contact() {
  const [characters, setCharacters] = useState(Profiles);
  const [lastDirection, setLastDirection] = useState();
  const [swipedRightProfiles, setSwipedRightProfiles] = useState(
    JSON.parse(localStorage.getItem('swipedRightProfiles')) || []
  );

  const childRefs = useMemo(
    () =>
      Array(Profiles.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);

    if (direction === 'right') {
      // Check if the profile has already been swiped in this swipe action
      if (!swipedRightProfiles.some((profile) => profile.name === nameToDelete)) {
        // Save the profile data to local storage with a unique key
        const swipedProfile = characters.find((character) => character.name === nameToDelete);
        if (swipedProfile) {
          // Use a unique key, e.g., 'swipedRightProfile_Name'
          const key = `swipedRightProfile_${swipedProfile.name}`;
          localStorage.setItem(key, JSON.stringify(swipedProfile));
          // Update the swipedRightProfiles array
          setSwipedRightProfiles([...swipedRightProfiles, swipedProfile]);
        }
      }
    }
  };


  

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name;
      const index = Profiles.map((person) => person.name).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>React Tinder Card</h1>
      <div className="cardContainer">
        {characters.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.name}
            onSwipe={(direction) => {
              if (direction === 'right') {
                // Save the profile data to localStorage
                localStorage.setItem('swipedRightProfile', JSON.stringify(character));
              }
              swiped(direction, character.name);
            }}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div className="card">
              <img src={character.image} alt={`${character.name}'s profile`} />
              <div>
                <h3>
                  {character.name}, {character.age}
                </h3>
              </div>
              <h3>
                {character.occupation} {character.location}
              </h3>
              <div>
                <button>
                  <FontAwesomeIcon icon={faX} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faStar} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => swipe("left")}>Swipe left!</button>
        <button onClick={() => swipe("right")}>Swipe right!</button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get started!
        </h2>
      )}
    </div>
  );
}

export default Contact;
