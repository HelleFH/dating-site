// ProfileCardList.js
import React, { useMemo } from 'react';
import TinderCard from 'react-tinder-card'; // Make sure to import TinderCard
import ProfileCard from './ProfileCard';
import Profiles from '../data/profiles.json';

function ProfileCardList({ characters, swipedRightProfiles, onSwipe, onCardLeftScreen }) {
  const childRefs = useMemo(
    () =>
      Array(characters.length)
        .fill(0)
        .map(() => React.createRef()),
    [characters]
  );

  return (
    <div className="cardContainer">
      {characters.map((character, index) => (
        <TinderCard
          ref={childRefs[index]}
          className="swipe"
          key={character.name}
          onSwipe={(direction) => {
            if (direction === "right") {
              // Save the profile data to localStorage
              localStorage.setItem(
                "swipedRightProfiles",
                JSON.stringify(swipedRightProfiles.concat(character))
              );
            }
            onSwipe(direction, character.name);
          }}
          onCardLeftScreen={() => onCardLeftScreen(character.name)}
          // Pass the swipe function as a prop if needed
          // swipe={(dir) => swipe(dir, index)}
        >
          <ProfileCard character={character} /> {/* Render the ProfileCard component */}
        </TinderCard>
      ))}
    </div>
  );
}

export default ProfileCardList;
