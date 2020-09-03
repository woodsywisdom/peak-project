import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../../store/auth';
import { Button, TextField, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appleButton: {
    margin: '8px 0px',
    backgroundColor: 'rgba(0,0,0,1)'
  },
  blueButton: {
    backgroundColor: 'rgba(51, 103, 153, 1)',
    margin: '8px 0px',
  },
  titleText: {
    fontWeight: '600',
  },
})


const LoginForm = (props) => {
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
      <Typography className={classes.titleText} variant='h5' gutterBottom >Sign Up or Log In</Typography>
      <Button
        className={classes.blueButton}
        fullWidth
        variant='contained'
        color='primary'>Connect with Facebook</Button>
      <p>----------- OR ----------</p>
      <Button
        className={classes.appleButton}
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
        <Button
          className={classes.blueButton}
          fullWidth
          variant='contained'
          color='primary'
          type='submit'
          onClick={handleSignup}
        >Sign Up</Button>
      </form>
      <p>----------- OR ----------</p>
      <form className='login-fields'>
        <TextField fullWidth size='small' variant='outlined' type='email' placeholder='Email' value={loginEmail} onChange={updateLoginEmail} />
        <TextField fullWidth size='small' variant='outlined' type='password' placeholder='Password' value={password} onChange={updatePassword} />
      </form >
      <Button
        className={classes.blueButton}
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        onClick={handleLogin}
      >Log In</Button>
      <Button
        className={classes.blueButton}
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        onClick={demoLogin}
      >Demo User</Button>
      <Link to='/nowhere' >Password help</Link>
    </div >
  )
}

export default LoginForm;
