import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import './BasketList.css'

const BasketList = ({order = [], handleBasketShow, removeFromBasket, incQuantity, decQuantity }) => {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.priceReg * el.quantity;
  }, 0);

  return (
    <div className="basket-modal">
      <div className="basket-content">
        <div className="basket-header">Корзина</div>
        <ul className="basket-list">
          {order.length ? (
            order.map(item => (
              <BasketItem
                key={item.mainId}
                {...item}
                removeFromBasket={removeFromBasket}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
              />
            ))
          ) : (
            <li className="basket-null">Корзина пуста</li>
          )}
        </ul>
        <div className="totalPrice">
            Общая стоимость: {totalPrice} руб.
        </div>
        <div className="basket-close" onClick={handleBasketShow}>
          X
        </div>
      </div>
    </div>
  );
};

export default BasketList;