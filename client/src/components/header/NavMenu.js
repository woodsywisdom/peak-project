import React from 'react';
import { List, ListItem, ListItemText, Button, Input, Divider, IconButton, ListItemIcon, Collapse } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



const linkBuilder = (link) => {
  return (
    <>
      <ListItem button key={link}>
        <ListItemText primary={link} />
        <ListItemIcon >
          <ChevronRightIcon size='small'/>
        </ListItemIcon>
      </ListItem>
      <Divider />
    </>
  );
}

const NavMenu = (props) => {

  const links = ['Route Guide', 'Climbing Gyms', "What's New", "Partners", "Forum", "Get the app"];

  return (
    <Collapse in={props.open}>
      <List fullWidth >
        <ListItem key='search-bar'>
          <Input
            placeholder='Search routes, forums, etc'
            type='search'
            fullWidth
            variant="outlined"
          />
          <Button variant='contained' color='primary'>
            <SearchIcon />
          </Button>
        </ListItem>
        {links.map(linkBuilder)}
      </List>
    </Collapse>
  )
}

export default NavMenu;
