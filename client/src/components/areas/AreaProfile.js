import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getArea } from '../../store/area';

import AreaLinks from '../AreaLinks';
import AreaArticle from './AreaArticle';

const useStyles = makeStyles({
  gridContainer: {
    padding: '14px',
  },
});

const AreaProfile = (props) => {
  const classes = useStyles();
  const areaId = props.match.params.id;
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArea(areaId));
    setLoading(false);
  }, [areaId, dispatch]);

  if (loading) return (<h1>Loading...</h1>);

  return (
    <Grid container
      className={classes.gridContainer}
      spacing={6}
    >
      <AreaLinks />
      <AreaArticle />
    </Grid >
  );
}

export default AreaProfile;
