import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getRoute } from '../../store/routes';
import { getArea } from '../../store/area';

import AreaLinks from '../AreaLinks';
import RouteArticle from './RouteArticle';

const useStyles = makeStyles({
  gridContainer: {
    padding: '40px',
  },
});

const RouteProfile = (props) => {
  const classes = useStyles();
  const routeId = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const currentAreaId = useSelector(state => state.routes.areaId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoute(routeId));
  }, [routeId, dispatch]);

  useEffect(() => {
    if (currentAreaId) {
      dispatch(getArea(currentAreaId));
    }
    setLoading(false);
  }, [currentAreaId, dispatch]);

  if (loading) return (<h1>Loading...</h1>);

  return (
    <Grid container
      className={classes.gridContainer}
      spacing={6}
    >
      <AreaLinks />
      <RouteArticle />
    </Grid >
  );
}

export default RouteProfile;
