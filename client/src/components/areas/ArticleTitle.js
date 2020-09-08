import React, { useState, useEffect } from 'react';
import { Box, Breadcrumbs, Typography, IconButton, Dialog, DialogContent } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
// import LoginForm from '../header/LoginForm';
// import EditRouteForm from './EditRouteForm';

const ArticleTitle = () => {
  const dispatch = useDispatch;

  const currentUserId = useSelector(state => state.auth.id);
  const currentArea = useSelector(state => state.area);

  const [editFormOpen, setEditFormOpen] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);

  const showEditForm = () => setEditFormOpen(!editFormOpen);
  const showLogIn = () => setLogInOpen(!logInOpen);

  useEffect(() => {
    setEditFormOpen(false);
  },[dispatch, currentArea]);

  const locations = currentArea.location.split('>');



  return (
    <>
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
          {locations.map(location => <Link href='/'>{location}</Link>)}
        </Breadcrumbs>
        <Box display='flex' >
          <Typography variant='h4' >{currentArea.name}</Typography>
          <IconButton size='small' onClick={currentUserId ? showEditForm : showLogIn}>
            <EditIcon fontSize='small' />
          </IconButton>
        </Box>
      </Box>

    </>
  );
}

export default ArticleTitle;
