import * as React from "react";

import Board from "./board";

const Game = () => {
  const cardsArray = Array.from(Array(16),(e,i) => i + 1)

  return (
    <div className="game">
      <div className="info-row">
        <button className="new-game-button">New Game</button>
        <div className="score">Score: 100</div>
      </div>
      <div className="game-board">
        <Board cardsArray={cardsArray} />
      </div>
    </div>
  )
}

export default Game
