import React from 'react';
import { ListSubheader, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  areaLinkLi: {
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  areaLinkText: {
    lineHeight: '1.3rem',
  },
  areaLinkHeader: {
    fontWeight: '600',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    fontSize: '16px',
  },
  listContainer: {
    backgroundColor: '#f2f2f2',
  },
});

const listBuilder = (routes, classes) => {

  return (routes.map((route) => {
    return (
      <ListItem
        // dense
        classes={{
          root: classes.areaLinkLi,
        }}
        disableGutters
        display='flex'
      >
        <Rating
          style={{ color: 'rgb(51, 103, 153)', fontSize: '13px', width: '55px', transform: 'scaleX(-1)' }}
          readOnly
          value={Number(route.rating)}
          max={Math.ceil(route.rating)}
          precision={0.5}
        />
        <ListItemText
          primaryTypographyProps={{
            classes: {
              body2: classes.areaLinkText,
            }
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
  const classes = useStyles();
  const currentArea = useSelector(state => state.routes.Area);
  const areaRoutes = useSelector(state => state.area.Routes);
  return (
    <>
      <Grid item
        xs={3}
        className={classes.listContainer}
      >
        <List dense >
          <ListItem >
            <ListItemText
              primaryTypographyProps={{
                classes: { body2: classes.areaLinkHeader },
                noWrap: 'true',
              }}
              >
              Routes in {currentArea.name}
            </ListItemText>
          </ListItem>
          {listBuilder(areaRoutes, classes)}
        </List>
      </Grid>
    </>
  );
}

export default AreaLinks;
