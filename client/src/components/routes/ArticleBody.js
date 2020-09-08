import React from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  bodyHeader: {
    fontSize: '22px',
    fontWeight: '600',
  }
})

const ArticleBody = () => {
  const classes = useStyles();

  const currentRoute = useSelector(state => state.routes);

  return (
    <>
      <Box display='flex' >
        <Typography className={classes.bodyHeader}>Description</Typography>
        <IconButton size='small'>
          <EditIcon fontSize='small' />
        </IconButton>
      </Box>
      <Typography >{currentRoute.description}</Typography>
    </>
  );
}

export default ArticleBody;
