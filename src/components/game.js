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

const Game = () => {
  const [cards, setCards] = React.useState(Array.from(Array(16),(e,i) => i + 1));

  return (
    <div className="game">
      <div className="info-row">
        <button className="new-game-button">New Game</button>
        <div className="score">Score: 100</div>
      </div>
      <div className="game-board">
        <Board cardsArray={cards} />
      </div>
    </div>
  )
}

export default Game
