import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import './Cart.css';
import { Checkout } from './Checkout';

export const Cart = ({ isAuthenticated }) => {
  const { cartItems, getTotalAmount, resetCart } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    resetCart();
  };

  return (
    <div className='cart'>
      <div className='cartContainer'>
        <div className='cartItems'>
          <h1>Your Cart Items</h1>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
          {totalAmount > 0 ? (
            <Checkout
              totalAmount={totalAmount}
              onCheckout={handleCheckout}
              isAuthenticated={isAuthenticated}
            />
          ) : (
            <h1>The Cart is empty.</h1>
          )}
          <button onClick={() => navigate('/shop')} className='continueBtn'>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
