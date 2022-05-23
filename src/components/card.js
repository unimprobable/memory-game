import * as React from "react"

const Card = ({ contents, onClick, isFlipped, isInactive, index }) => {
  const handleClick = () => {
    !isFlipped && onClick(index);
  }
  return (
    <button
      className="card visible"
      onClick={handleClick}
    >
      {contents}
    </button>
  )
}

export default Card
