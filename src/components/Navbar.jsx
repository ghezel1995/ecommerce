import React from 'react';
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <h4 className='lego'>Mahsa's E-Commerce Shop</h4>
      <div className='links'>
        <Link to='signin' className='link'>
          SignIn
        </Link>
        <Link to='/' className='link'>
          Shop
        </Link>
        <Link to='cart' className='link'>
          <Cart3 />
        </Link>
      </div>
    </div>
  );
};
