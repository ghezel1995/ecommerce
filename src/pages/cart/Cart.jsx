import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import './Cart.css';

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cartContainer'>
        <h1>Your Cart Items</h1>
        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ?
        <div className='checkout'>
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
         : <h1>The Cart is empty.</h1>}
      </div>
    </div>
  );
};
