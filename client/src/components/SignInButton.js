import React, { useState, useEffect } from 'react';
import { Popover, Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';

const SignInButton = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const currentUser = useSelector(state => state.auth);

  const showForm = () => setToggleForm(!toggleForm);

  const header = document.querySelector('.header-container');

  useEffect(() => {
    setToggleForm(false);
  }, [currentUser]);

  return (
    <>
      <Button
        onClick={showForm}
        size='small'
        style={{
          background: '#336799',
          color: 'white',
        }}
      >
        Sign In
      </Button>
      <Popover
        style={{ marginTop: '54px' }}
        open={toggleForm}
        onClose={showForm}
        anchorEl={header}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <LoginForm />
      </Popover>
    </>
  )
}

export default SignInButton;
