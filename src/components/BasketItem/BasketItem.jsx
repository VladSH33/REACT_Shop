import React from 'react';
import './BasketItem.css'

const BasketItem = ({mainId, displayName, priceReg, quantity, removeFromBasket, incQuantity, decQuantity }) => {
  return (
    <div className="basket-item">
      <div className="good-item">
        {displayName + ' '} <div className="incQuantity quantity" onClick={() => decQuantity(mainId)}> - </div> x{quantity} <div className="decQuantity quantity" onClick={() => incQuantity(mainId)}> + </div> = {priceReg * quantity} руб.
      </div>
      <div className="delete-item" onClick={() => removeFromBasket(mainId)}>
        X
      </div>
    </div>
  );
};

export default BasketItem;