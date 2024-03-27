import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './CartBtn.css';
export default function CartBtn({ id }) {
  const { cartItems, addToCart, removeFromCart, updateAmount } =
    useContext(ShopContext);

  return (
    <div className='itemsBtn'>
      <button onClick={() => addToCart(id)}>+</button>
      <input
        value={cartItems[id]}
        onChange={(e) => updateAmount(Number(e.target.value), id)}
      />
      <button onClick={() => removeFromCart(id)}> - </button>
    </div>
  );
}
