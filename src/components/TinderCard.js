// src/components/TinderCard.js
import React from 'react';
import TinderCard from 'react-tinder-card';

const TinderCardComponent = ({ profile }) => {
  return (
    <TinderCard className="swipe" key={profile.id}>
        <img src={profile.image}/>
      <div
        style={{
          backgroundImage: `${profile.image}`,
        }}
        className="card"
      >
        <h3>{profile.name}</h3>
      </div>
    </TinderCard>
  );
};

export default TinderCardComponent;
