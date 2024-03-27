import React from 'react';
import CartBtn from './CartBtn';

export const CartItem = (props) => {
  const { id, name, price, productImage } = props.data;

  return (
    <div className='cartItem'>
      <img className='cartImage' src={productImage} alt={name} />
      <div className='CartItemDescription'>
        <div>
          <p className='ItemName'>
            <b>{name}</b>
          </p>
          <p className='ItemPrice'>${price}</p>
        </div>
        <CartBtn id={id} />
      </div>
    </div>
  );
};
