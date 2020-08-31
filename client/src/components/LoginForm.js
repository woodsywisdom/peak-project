import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');

  const currentUserId = useSelector(state => state.auth.id);


  const dispatch = useDispatch();

  const updateSignUpEmail = (e) => {
    setSignUpEmail(e.target.value);
  }
  const updateSignUpUsername = (e) => {
    setSignUpUsername(e.target.value);
  }
  const updateSignUpPassword = (e) => {
    setSignUpPassword(e.target.value);
  }
  const updateLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  }
  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSignup = (e) => {
    e.preventDefault();
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, password));
  }

  if (currentUserId) return <Redirect to='/' />

  return (
    <div className='login-form'>
      <h2>Sign Up or Log In</h2>
      <p>Your FREE account works with all Adventure Projects sites </p>
      <button>Connect with Facebook</button>
      <p>----------- OR ----------</p>
      <button>Sign In with Apple</button>
      <p>----------- OR ----------</p>
      <form className='sign-up-starter'>
        <input type='text' placeholder='Username' value={signUpUsername} onChange={updateSignUpUsername} />
        <input type='text' placeholder='Email' value={signUpEmail} onChange={updateSignUpEmail} />
        <input type='password' placeholder='Password' value={signUpPassword} onChange={updateSignUpPassword} />
        <button type='submit' onClick={handleSignup} >Sign Up</button>
      </form>
      <p>----------- OR ----------</p>
      <form className='login-fields'>
        <input type='email' placehoder='Log In with email' value={loginEmail} onChange={updateLoginEmail} />
        <input type='password' placeholder='Password' value={password} onChange={updatePassword} />
        <button type='submit' onClick={handleLogin} >Log In</button>
      </form >
    </div >
  )
}

export default LoginForm;
