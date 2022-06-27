import React from "react";

const ShoeCard = ({ id, name, image }) => {
  const shoeId = null;
 
  return (
    <div data-cy={`shoe-card-wrapper-${id}`}>
      <img data-cy="shoe-card-image" alt="shoe" src={image}/>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    
    </div>
  );

};

export default ShoeCard;