import * as React from "react"

import Square from "./square"

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const uniqueElementsArray = Array.from(Array(16),(e,i) => i + 1)
  
    return (
      <div className="board">
        {uniqueElementsArray.map((el,i) => <Square key={i} contents={el} />)}
      </div>
    )
  }
}

export default Board
