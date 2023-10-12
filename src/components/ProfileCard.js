const uniqueSmokingHabits = ["All", ...new Set(swipedRight.map(profile => profile.smoking_habits))];
const uniqueAlcoholHabits = ["All", ...new Set(swipedRight.map(profile => profile.alcohol_habits))];
const uniqueZodiacSigns = ["All", ...new Set(swipedRight.map(profile => profile.zodiac_sign))];// ProfileCard.js




import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import TinderCard from '../react-tinder-card/index';

function ProfileCard({ character, onSwipe, onCardLeftScreen }) {
  return (
    <TinderCard
      className="swipe"
      key={character.name}
      onSwipe={onSwipe}
      onCardLeftScreen={onCardLeftScreen}
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
  );
}

export default ProfileCard;
