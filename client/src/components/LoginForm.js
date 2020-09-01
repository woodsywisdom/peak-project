import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';


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
    dispatch(signup(signUpEmail, signUpUsername, signUpPassword));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, password));
  }

  if (currentUserId) return <Redirect to='/' />

  return (
    <div className='login-form'>
      <h2>Sign Up or Log In</h2>
      <Button variant='contained' color='primary'>Connect with Facebook</Button>
      <p>----------- OR ----------</p>
      <Button
        style={{
          background: 'black',
          color: 'white',
        }}
      >Sign In with Apple</Button>
      <p>----------- OR ----------</p>
      <form className='sign-up-fields'>
        <input type='text' placeholder='Username' value={signUpUsername} onChange={updateSignUpUsername} />
        <input type='text' placeholder='Email' value={signUpEmail} onChange={updateSignUpEmail} />
        <input type='password' placeholder='Password' value={signUpPassword} onChange={updateSignUpPassword} />
      </form>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        onClick={handleSignup}
      >Sign Up</Button>
      <p>----------- OR ----------</p>
      <form className='login-fields'>
        <input type='email' placeholder='Email' value={loginEmail} onChange={updateLoginEmail} />
        <input type='password' placeholder='Password' value={password} onChange={updatePassword} />
      </form >
      <Button
      variant='contained'
      color='primary'
      type='submit'
      onClick={handleLogin}
      >Log In</Button>
    </div >
  )
}

export default LoginForm;
