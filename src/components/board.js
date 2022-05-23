import * as React from "react"

import Card from "./card"

const Board = ({ cardsArray }) => {

  return (
    <div className="board">
      {cardsArray.map((el,i) => <Card key={i} contents={el} />)}
    </div>
  )
}

export default Board
