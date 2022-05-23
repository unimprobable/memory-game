import * as React from "react";

import Board from "./board";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="info-row">
          <button className="new-game-button">New Game</button>
          <div className="score">Score: 100</div>
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    )
  }
}

export default Game
