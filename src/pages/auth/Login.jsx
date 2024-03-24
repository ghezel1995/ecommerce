import React from 'react'
import { Person, Key } from 'react-bootstrap-icons'

export const Login = () => {
  return (
    <div className='signInContainer'>
      <form className='signInForm'>
      <h3 className='form-header'>Login form</h3>
        <div className='inputContainer'>
          <Person />
          <input type='text' className='formInputs' placeholder='username' />
        </div>
        <div className='inputContainer'>
          <Key />
          <input type='password' className='formInputs' placeholder='password' />
        </div>
        <div className='submit'>
          <input type='submit' value='Signin' className='submitBtn' />
        </div>
      </form>
    </div>
  );
}
