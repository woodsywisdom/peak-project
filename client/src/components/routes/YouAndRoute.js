import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles({
  headerText: {
    fontSize: '22px',
    fontWeight: '500',
    borderBottom: '7px solid rgb(51, 103, 153)'
  },
})

const YouAndRoute = () => {
  const classes = useStyles();
  const currentUser = useSelector(state => state.auth);
  const currentRoute = useSelector(state => state.routes);
  const [toDo, setToDo] = useState(false)

  const toDoToggle = (e) => {
    e.preventDefault();
    setToDo(!toDo);
  }

  return (
    <Box>
      <Typography variant='h2' className={classes.headerText} >{"You & This Route"}</Typography>
      <List dense>
        <ListItem>
          <ListItemText>Your To-Do List:</ListItemText>
          <Link onClick={toDoToggle} >{ !toDo ? 'Add To-Do - ' : 'On The List! - ' }</Link>
          <Link to={`users/${currentUser.id}`} >View List</Link>
        </ListItem>
        <ListItem>
          <ListItemText>Your Star Rating:</ListItemText>
          <Rating max={4} />
        </ListItem>
        <ListItem>
          <ListItemText>Your Difficulty Rating:</ListItemText>
          <Typography>-none-</Typography>
          <Link>{'  Change'}</Link>
        </ListItem>
        <ListItem>
          <ListItemText>Your Ticks:</ListItemText>
          <Link>Add New Tick</Link>

        </ListItem>
      </List>
    </Box>
  );
}

export default YouAndRoute;
