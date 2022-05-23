import * as React from "react"

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Card = ({ contents, onClick, isFlipped, isInactive, index }) => {
  
  const handleClick = () => {
    !isFlipped && onClick(index);
  }

  return (
    <button
      className={classNames(
        "card",
        isInactive && "matched"
      )}
      onClick={handleClick}
    >
      {(isFlipped || isInactive ) && contents}
    </button>
  )
}

export default Card
