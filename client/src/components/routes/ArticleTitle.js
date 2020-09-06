import React from 'react';
import { Box, Breadcrumbs, Typography, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

const ArticleTitle = () => {
  const currentRoute = useSelector(state => state.routes);
  const locations = currentRoute.location.split('>');
  return (
    <>
      <Box>
        <Breadcrumbs separator=">" >
          {locations.map(location => <Link href='/'>{location}</Link>)}
        </Breadcrumbs>
        <Box display='flex' >
          <Typography variant='h4' >{currentRoute.name}</Typography>
          <IconButton  size='small'>
            <EditIcon fontSize='small' />
          </IconButton>
        </Box>
      </Box>

    </>
  );
}

export default ArticleTitle;
