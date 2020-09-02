import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Box } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import CloseIcon from '@material-ui/icons/Close';
// import { Redirect } from 'react-router-dom';

import ProfileAvatar from './ProfileAvatar';
import SignInButton from './SignInButton';
import NavMenu from './NavMenu';



const Header = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(state => state.auth);

  const openNav = (e) => setOpen(!open);

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
          <IconButton onClick={openNav}>
            {!open ?
            <MenuIcon style={{ color: 'white' }} />
            : <CloseIcon style={{ color: 'white'}} />
            }
          </IconButton>
        </div>
      </div>
      <NavMenu open={open}/>
    </Box>
  )
}

export default Header;
