import React from 'react';
import { Typography, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  whiteText: {
    color: 'white',
  },
  divider: {
    backgroundColor: 'white',
    color: 'white',
  }
})

const RouteFinder = () => {

  const classes = useStyles();

  return (
    <>
      <List className={classes.whiteText}>
        <ListItem>
          <Typography
            variant='h4'
            align='center'
          >Beyond the Guidebook</Typography>
        </ListItem>
        <ListItem>
          <Typography
            variant='subtitle2'
            align='center'
          >227,392 Routes Shared by Climbers Like You</Typography>
        </ListItem>
        <Divider variant='inset' light component='li' />
        <ListItem>
          <ListItemText
            primary='Route Finder'
            secondary="Tell us what you like, we'll tell you what to climb!"
            primaryTypographyProps={{ style: { fontSize: '22px', fontWeight: '700' } }}
            secondaryTypographyProps={{ style: { color: 'white', fontSize: '12px' } }} />
        </ListItem>
      </List>
    </>
  );
}

export default RouteFinder;
