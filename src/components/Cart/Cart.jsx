import React from 'react';
import './Cart.css'

const Cart = ({quantity = 0, handleBasketShow }) => {
    return (
        <div className='cart' onClick={handleBasketShow}>
            <img src="https://img.icons8.com/?size=30&id=G01ACMKXfdpJ&format=png&color=000000" alt="trash" />
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
};

export default Cart;