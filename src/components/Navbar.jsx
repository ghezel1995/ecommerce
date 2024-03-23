import React from 'react';
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
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
