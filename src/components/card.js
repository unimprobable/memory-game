import * as React from "react"

const Card = ({ contents, onClick, isFlipped, isInactive }) => {
  return (
    <button
      className="card visible"
      onClick={onClick}
    >
      {contents}
    </button>
  )
}

export default Card
