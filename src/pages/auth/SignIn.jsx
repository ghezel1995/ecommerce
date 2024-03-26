import React, { useEffect, useRef, useState } from 'react';
import { Person, Envelope, Key } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './Submit.css';

export const SignIn = ({ onAuth }) => {
  const userRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      setError(null);
      setName('');
      setEmail('');
      setPassword('');
      console.log('Authentication successful');

      onAuth(name);
    } else {
      setError('Please provide both email and password');
    }
    navigate('/');
  };
  return (
    <div className='signInContainer'>
      <form onSubmit={handleSubmit} className='signInForm'>
        <h3 className='form-header'>Signin form</h3>
        <div className='inputContainer'>
          <Person className='signInIcon' />
          <input
            ref={userRef}
            type='text'
            id='username'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='formInputs'
            placeholder='username'
            autoComplete='off'
          />
        </div>
        <div className='inputContainer'>
          <Envelope className='signInIcon' />
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='formInputs'
            placeholder='email'
          />
        </div>
        <div className='inputContainer'>
          <Key className='signInIcon' />
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='formInputs'
            placeholder='password'
          />
        </div>
        <div className='submitContainer'>
          <div className='submit'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type='submit' value='Signin' className='submitBtn' />
          </div>
        </div>
      </form>
    </div>
  );
};
