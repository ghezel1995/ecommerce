import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
  const { id, name, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateAmount } = useContext(ShopContext);

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
        <div className='itemsBtn'>
          <button onClick={() => addToCart(id)}>+</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateAmount(Number(e.target.value), id)}
          />
          <button onClick={() => removeFromCart(id)}> - </button>
        </div>
      </div>
    </div>
  );
};
