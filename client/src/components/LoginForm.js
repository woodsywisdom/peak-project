import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../store/auth';
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formButton: {
    margin: '8px 0px',
  }
})


const LoginForm = () => {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login('Demo-lition', 'password'));
  }

  const classes = useStyles();

  return (
    <div className='login-form'>
      <h2>Sign Up or Log In</h2>
      <Button
        className={classes.formButton}
        fullWidth
        variant='contained'
        color='primary'>Connect with Facebook</Button>
      <p>----------- OR ----------</p>
      <Button
        className={classes.formButton}
        fullWidth
        style={{
          background: 'black',
          color: 'white',
        }}
      >Sign In with Apple</Button>
      <p>----------- OR ----------</p>
      <form className='sign-up-fields'>
        <TextField fullWidth size='small' variant='outlined' type='text' placeholder='Username' value={signUpUsername} onChange={updateSignUpUsername} />
        <TextField fullWidth size='small' variant='outlined' type='text' placeholder='Email' value={signUpEmail} onChange={updateSignUpEmail} />
        <TextField fullWidth size='small' variant='outlined' type='password' placeholder='Password' value={signUpPassword} onChange={updateSignUpPassword} />
      </form>
      <Button
        className={classes.formButton}
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        onClick={handleSignup}
      >Sign Up</Button>
      <p>----------- OR ----------</p>
      <form className='login-fields'>
        <TextField fullWidth size='small' variant='outlined' type='email' placeholder='Email' value={loginEmail} onChange={updateLoginEmail} />
        <TextField fullWidth size='small' variant='outlined' type='password' placeholder='Password' value={password} onChange={updatePassword} />
      </form >
      <Button
        className={classes.formButton}
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        onClick={handleLogin}
      >Log In</Button>
      <Button
        className={classes.formButton}
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        onClick={demoLogin}
      >Demo User</Button>
    </div >
  )
}

export default LoginForm;
