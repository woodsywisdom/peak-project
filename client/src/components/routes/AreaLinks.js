import React from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({

// });

const listBuilder = (routes) => {
  return (routes.map((route) => {
    return (
      <ListItem dense display='flex' >
        <Rating
          style={{ color: 'rgb(51, 103, 153)', fontSize: '13px', width: '55px', transform: 'scaleX(-1)' }}
          readOnly
          value={Number(route.rating)}
          max={Math.ceil(route.rating)}
          precision={0.5}
        />
        <ListItemText
          primaryTypographyProps={{
            style: { fontsize:'12px' }
          }}

        >
          <NavLink to={`/routes/${route.id}`}>
            {route.name}
          </NavLink>
          {' '}{route.type[0]} {route.grade}
        </ListItemText>
      </ListItem>
    )
  }));
}

const AreaLinks = () => {


  const areaRoutes = useSelector(state => state.area.Routes);

  return (
    <>
      <Box >
        <List >
          { areaRoutes ? listBuilder(areaRoutes) : <p>Loading...</p>}
        </List>
      </Box>
    </>
  );
}

export default AreaLinks;
