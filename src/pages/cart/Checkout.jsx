import React, { useState } from 'react';
import { CreditCard, Paypal } from 'react-bootstrap-icons';
import './Checkout.css';

export const Checkout = ({ totalAmount }) => {
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('creditCard');

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className='checkout'>
        <din className='paymentMethod'>
          <p className='titles'>Payment Method: </p>
          <div className='methodContainer'>
            <label htmlFor='credit'>
              <input
                type='radio'
                value='creditCard'
                checked={selectedOption === 'creditCard'}
                onChange={handleOptionChange}
              />
            </label>
            <CreditCard /> <p> Credit Card</p>
          </div>
          <div className='methodContainer'>
            <label htmlFor='paypal'>
              <input
                type='radio'
                value='paypal'
                checked={selectedOption === 'paypal'}
                onChange={handleOptionChange}
              />
            </label>
            <Paypal /> <p> PayPal</p>
          </div>
        </din>
        <div className='nameOnCard'>
          <p className='titles'>Name On Card:</p>
          <input type='text' placeholder='Name' />
        </div>
        <div className='cardNumberContainer'>
          <p className='titles'>Card Number:</p>
          <div className='cardNumber'>
            <input type='password' maxLength={4} />
            <input type='password' maxLength={4} />
            <input type='password' maxLength={4} />
            <input type='text' maxLength={4} />
          </div>
        </div>
        <div className='exDate'>
          <div className='date'>
            <p className='titles'>Expiration Date: </p>
            <input
              type='date'
              id='dateInput'
              value={date.toISOString().slice(0, 10)}
              onChange={handleDateChange}
            />
            <input type='text' maxLength={3} placeholder='CVV2' />
          </div>
        </div>
        <div className='totalCheckout'>
          <p>Subtotal: ${totalAmount}</p>
          <button className='checkoutBtn'>Checkout</button>
        </div>
      </div>
    </>
  );
};
