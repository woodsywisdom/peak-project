import React, { useState } from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemText } from '@material-ui/core';


const NavMenu = (props) => {

  const links = ['Route Guide', 'Climbing Gyms', "What's New", "Partners", "Forum", "Get the app"];

  const linkBuilder = (link) => {
    return (
      <ListItem button key={link}>
        <ListItemText primary={link} />
      </ListItem>
    )
  }
  return (
    <Drawer anchor='top' open={props.open}>
      <Toolbar >
        <div className='nav-menu-container'>
          <List>
            {links.map(linkBuilder)}
          </List>
        </div>
      </Toolbar>
    </Drawer>
  )
}

export default NavMenu;
