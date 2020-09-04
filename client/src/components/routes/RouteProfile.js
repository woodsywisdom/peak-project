import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getRoute } from '../../store/routes';
import { getArea } from '../../store/area';

import AreaLinks from './AreaLinks';
import RouteArticle from './RouteArticle';


const RouteProfile = (props) => {
  const routeId = props.match.params[0];
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
    <Box>
      <AreaLinks />
      <RouteArticle />
    </Box>
  );
}

export default RouteProfile;
