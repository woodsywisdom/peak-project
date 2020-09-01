import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
// import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';
import ProfileAvatar from './ProfileAvatar';
import { Redirect } from 'react-router-dom';
import SignInButton from './SignInButton';

const Header = () => {
  const currentUser = useSelector(state => state.auth);

  const homeClick = (e) => <Redirect to='/' />

  return (
    <Box >
      <div className='header-container'>
        <div className='logo'>
          <IconButton onClick={homeClick} >
            <FilterHdrIcon color='primary' fontSize='large' />
          </IconButton>
          <div className='logo-title' >
            <span className='logo-title-peak'>PEAK</span>
            <span className='logo-title-project'>PROJECT</span>
          </div>
        </div>
        <div className='nav-buttons'>
          {!currentUser.id ?
            <SignInButton />
            : <ProfileAvatar />
          }
          <IconButton >
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
      </div>
    </Box>
  )
}

export default Header;
