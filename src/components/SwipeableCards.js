import React from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeableCards = ({ cards, currentIndex, handleSwipeRight }) => {
  const handlers = useSwipeable({
    onfavoritedProfiles: () => handleSwipeRight(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="swipeable-cards-container">
      {cards.slice(currentIndex).map((card) => (
        <div key={card.id} className="swipeable-card" {...handlers}>
          <h2>{card.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default SwipeableCards;
