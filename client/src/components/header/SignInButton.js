import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   backDrop: {
//     background: 'rgba(0,0,0,.5)',
//   }
// });


const SignInButton = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const currentUser = useSelector(state => state.auth);
  const currentUserId = currentUser.id;

  const showForm = () => setToggleForm(!toggleForm);

  const header = document.querySelector('.header-container');

  useEffect(() => {
    setToggleForm(false);
  }, [currentUserId]);

  // const classes = useStyles();

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
      <Dialog
        open={toggleForm}
        onClose={showForm}
        anchorEl={header}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      // BackdropProps={{
      //   classes: {
      //     root: classes.backDrop
      //   }
      // }}
      >
        <DialogContent >
          <LoginForm />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SignInButton;
