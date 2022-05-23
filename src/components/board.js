import * as React from "react"

import Card from "./card"

const Board = ({ cardsArray, handleCardClick, checkIsFlipped, checkIsInactive }) => {

  return (
    <div className="board">
      {cardsArray.map((el,i) => {
        return (
          <Card
            key={i}
            contents={el}
            onClick={handleCardClick}
            isFlipped={checkIsFlipped}
            isInactive={checkIsInactive}
          />
        );
      })}
    </div>
  )
}

export default Board
