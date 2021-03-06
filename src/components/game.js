import * as React from "react";

import Board from "./board";

// Fisher Yates Shuffle
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

// Create array of numbers 1 - 8
const numberArray = Array.from(Array(8),(e,i) => i + 1)

const Game = () => {
  const [cards, setCards] = React.useState(shuffleCards(numberArray.concat(numberArray)));
  const [openCards, setOpenCards] = React.useState([]);
  const [clearedCards, setClearedCards] = React.useState({});
  const [score, setScore] = React.useState(100);
  const timeout = React.useRef(null);

  const handleRestart = () => {
    setCards(shuffleCards(numberArray.concat(numberArray)));
    setScore(100);
  };

  // Check if both cards have the same number. If they do, mark them inactive.
  const evaluate = () => {
    const [first, second] = openCards;
    if (cards[first] === cards[second]) {
      setClearedCards((prev) => ({ ...prev, [cards[first]]: true }));
      setOpenCards([]);
      // Add 10 points if there's a match
      setScore((prev) => prev + 10);
      return;
    }
    // Flip cards after 1 sec
    timeout.current = setTimeout(() => {
      setOpenCards([]);
      // Subtract 10 points if no match
      setScore((prev) => prev - 1);
    }, 1000);
  };

  const handleCardClick = (index) => {
    // Have a maximum of 2 cards in array at once.
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
    } else {
      // If none or two cards are already open
      // cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      // update openCards array with clicked card
      setOpenCards([index]);
    }
  };

  React.useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 1000);
    }
    // eslint-disable-next-line
  }, [openCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card]);
  };

  return (
    <div className="game">
      <div className="info-row">
        <button onClick={handleRestart} className="new-game-button">New Game</button>
        <div className="score">{`Score: ${score}`}</div>
      </div>
      <div className="game-board">
        <Board
          cardsArray={cards}
          handleCardClick={handleCardClick}
          checkIsFlipped={checkIsFlipped}
          checkIsInactive={checkIsInactive}
        />
      </div>
    </div>
  )
}

export default Game
