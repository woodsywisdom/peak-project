import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Menu, MenuItem } from '@material-ui/core';


import { logout } from '../store/auth';

const ProfileAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const currentUser = useSelector(state => state.auth);
  let firstInitial = currentUser.username ?
    currentUser.username[0].toUpperCase() : null;

  const dispatch = useDispatch();

  const menuLogout = e => {
    menuClose();
    dispatch(logout());
  }
  const menuClick = e => setAnchorEl(e.currentTarget);
  const menuClose = e => setAnchorEl(null);

  return (
    <>
      <Avatar
        aria-controls='header-menu'
        aria-haspopup='true'
        onClick={menuClick}
      >
        {firstInitial}
      </Avatar>
      <Menu
        id='header-menu'
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={menuClose}
      >
        <MenuItem onClick={menuClose} >Your Page</MenuItem>
        <MenuItem onClick={menuClose} >Account Settings</MenuItem>
        <MenuItem onClick={menuLogout}>Log out</MenuItem>
      </Menu>
    </>
  )
}

export default ProfileAvatar;
