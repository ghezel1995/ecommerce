import React, { useState } from 'react';
import { CreditCard, Paypal } from 'react-bootstrap-icons';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

export const Checkout = ({ totalAmount, onCheckout, isAuthenticated }) => {
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('creditCard');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
  });
  const [cvv, setCvv] = useState('');
  const nav = useNavigate()

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCardNum = () => {
    if (
      cardNumber.first.trim() !== '' &&
      cardNumber.second.trim() !== '' &&
      cardNumber.third.trim() !== '' &&
      cardNumber.forth.trim() !== ''
    ) {
      if (
        /^\d{4}$/.test(cardNumber.first) &&
        /^\d{4}$/.test(cardNumber.second) &&
        /^\d{4}$/.test(cardNumber.third) &&
        /^\d{4}$/.test(cardNumber.forth)
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const handleCheckout = () => {
    if(!isAuthenticated) {
      nav('/signin')
    }else{
      if (name.trim() !== '' && cvv.trim() !== '') {
        if (handleCardNum) {
          alert('Thank you for your shop ' + name);
          setName('');
          setCardNumber('');
          setCvv('');
          setCardNumber({ first: '', second: '', third: '', forth: '' });
          onCheckout();
        } else {
          alert('Please enter a valid card number');
        }
      } else {
        alert('Please enter all of fields');
      }
    }
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
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='cardNumberContainer'>
          <p className='titles'>Card Number:</p>
          <div className='cardNumber'>
            <input
              type='password'
              maxLength={4}
              value={cardNumber.first}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type='password'
              maxLength={4}
              value={cardNumber.second}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type='password'
              maxLength={4}
              value={cardNumber.third}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type='text'
              maxLength={4}
              value={cardNumber.forth}
              onChange={(e) => setCardNumber(e.target.value)}
            />
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
            <input
              type='text'
              maxLength={3}
              placeholder='CVV2'
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>
        <div className='totalCheckout'>
          <p>Subtotal: ${totalAmount}</p>
          <button className='checkoutBtn' onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
