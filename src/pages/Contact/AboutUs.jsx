import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Pinterest, X } from 'react-bootstrap-icons';
import avatar from '../../asset/avatar.png';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <>
      <div className='container'>
        <div className='contact'>
          <div className='left'>
            <h1 className='header-about'>About Us</h1>
            <h4 className='welcome-header'>Welcome to Mahsa's Shop</h4>
            <p className='about-text'>
              We're dedicated to providing high-quality goods for good people.
              With a commitment to exceptional service and a wide selection, we
              aim to make your shopping experience enjoyable. Thank you for
              choosing us. Happy shopping!
            </p>

            <Link to='/shop' className='about-link'>
              Shop
            </Link>
            <div className='icons'>
              <Link
                to='https://instagram.com'
                className='icon-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram />
              </Link>
              <Link
                to='https://x.com'
                className='icon-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <X className='icon' />
              </Link>
              <Link
                to='https://pinterest.com'
                className='icon-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Pinterest className='icon' />
              </Link>
            </div>
          </div>
          <div className='right'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
      </div>
    </>
  );
}
