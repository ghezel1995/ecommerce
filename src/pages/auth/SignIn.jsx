import React from 'react';
import { Person, Envelope, Key } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Submit.css';

export const SignIn = () => {
  return (
    <div className='signInContainer'>
      <form className='signInForm'>
        <h3 className='form-header'>Signin form</h3>
        <div className='inputContainer'>
          <Person className='signInIcon' />
          <input
            type='text'
            id='username'
            className='formInputs'
            placeholder='username'
          />
        </div>
        <div className='inputContainer'>
          <Envelope className='signInIcon' />
          <input
            type='email'
            id='email'
            className='formInputs'
            placeholder='email'
          />
        </div>
        <div className='inputContainer'>
          <Key className='signInIcon' />
          <input
            type='password'
            id='password'
            className='formInputs'
            placeholder='password'
          />
        </div>
        <div className='submitContainer'>
          <div className='submit'>
            <input type='submit' value='Signin' className='submitBtn' />
          </div>
        </div>
      </form>
      <div className='linkToLogin'>
        <p>You already have an account?</p>
        <Link to='/login' className='toLogin'>
          Login
        </Link>
      </div>
    </div>
  );
};
