import React, { useState, useEffect } from 'react';
import { Box, Breadcrumbs, Typography, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
// import LoginForm from '../header/LoginForm';
// import EditRouteForm from './EditRouteForm';

const useStyles = makeStyles({
  titleBox: {
    width: '100%',
  }

});

const ArticleTitle = () => {
  const classes = useStyles();
  const dispatch = useDispatch;

  const currentUserId = useSelector(state => state.auth.id);
  const currentArea = useSelector(state => state.area);

  const [editFormOpen, setEditFormOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);

  const showEditForm = () => setEditFormOpen(!editFormOpen);
  const showLogIn = () => setLogInOpen(!logInOpen);

  useEffect(() => {
    setEditFormOpen(false);
  }, [dispatch, currentArea]);

  const locations = currentArea.location.split('>');
  const locationIds = currentArea.locationIds.split(',');



  return (
    <Box>
      {/* <Dialog
          open={logInOpen}
          onClose={showLogIn}
        >
          <DialogContent >
            <LoginForm />
          </DialogContent>
        </Dialog>
        <Dialog
          open={editFormOpen}
          onClose={showEditForm}
        >
          <EditRouteForm />
        </Dialog> */}
      <Breadcrumbs separator=">" >
        {locations.map((location, idx) => ( idx === 0 ? <Link to='/'>{location}</Link> : <Link to={`/areas/${locationIds[idx]}`}>{location}</Link>))}
      </Breadcrumbs>
      <Box display='flex' classes={{ root: classes.titleBox}}>
        <Box display='flex' flexGrow={1}>
          <Typography variant='h4' >{currentArea.name}</Typography>
          <IconButton size='small' onClick={currentUserId ? showEditForm : showLogIn}>
            <EditIcon fontSize='small' />
          </IconButton>
        </Box>
        <Link to={`/areas/${currentArea.id}/new-route`} >Add to page</Link>
      </Box>
    </Box>
  );
}

export default ArticleTitle;
