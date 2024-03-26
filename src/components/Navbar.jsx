import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import './Navbar.css';

export const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirmation(false);
    handleLogout();
  };

  return (
    <div className='navbar'>
      <Link to='/' className='link'>
        Mahsa's E-Commerce Shop
      </Link>
      <div className='links'>
        {!isAuthenticated && (
          <Link to='signin' className='link'>
            SignUp
          </Link>
        )}
        {isAuthenticated && (
          <>
            <button className='logout' onClick={handleLogoutClick}>
              Logout
            </button>
            {showLogoutConfirmation && (
              <div className='overlay-logout'>
                <div className='logout-confirmation'>
                  <p>Are you sure you want to logout?</p>
                  <button onClick={confirmLogout}>Yes</button>
                  <button onClick={() => setShowLogoutConfirmation(false)}>
                    No
                  </button>
                </div>
              </div>
            )}
          </>
        )}
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
