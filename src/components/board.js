import * as React from "react"

import Card from "./card"

class Board extends React.Component {
  render() {
    const uniqueElementsArray = Array.from(Array(16),(e,i) => i + 1)
  
    return (
      <div className="board">
        {uniqueElementsArray.map((el,i) => <Card key={i} contents={el} />)}
      </div>
    )
  }
}

export default Board
