import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';

export const Intro = ({ isAuthenticated, userName }) => {
  return (
    <div className='container'>
      <div className='main'>
        <div className='overlay'></div>
        <div className='content'>
          {isAuthenticated ? (
            <>
              <div className='welcome-message'>
                <h1>Welcome, {userName}!</h1>
                <p>Hope you enjoy shopping.</p>
              </div>
            </>
          ) : (
            <>
              <h1>Welcome to Mahsa's E-Commerce Shop!</h1>
              <p>Before starting to shop, please sign up.</p>
            </>
          )}
          <div className='link-container'>
            <Link to='/shop' className='home-link'>
              Go to shop
            </Link>
            {!isAuthenticated && (
              <Link to='signin' className='home-link'>
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
