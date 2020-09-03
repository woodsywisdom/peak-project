import React from 'react';
import { Grid, Container, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TwentyClassics from './TwentyClassics';

const useStyles = makeStyles({
  climbingResources: {
    background: 'lightyellow',
  },
  featuredRoute: {
    background: 'lightblue',
  },
  leadingNews: {
    background: 'lightpink',
  },
  headerText: {
    fontSize: '22px',
    fontWeight: '500',
    borderBottom: '7px solid rgb(51, 103, 153)'
  },
  splashContainer: {
    marginTop: '30px',
  },
  tinyTitle: {
    fontSize: '16px',
    fontWeight: '600px',
  },
});

const HomeSplash = () => {

  const classes = useStyles();



  return (
    <>
      <Grid container spacing={2}
        className={classes.splashContainer}
      >
        <Grid item xs={8} >
          <Container
            className={classes.climbingResources}
          >
            <Typography variant='h2' className={classes.headerText} >The Definitive Climbing Resource</Typography>
            <Grid container >
              <Grid item xs={4}>
                <Typography >Your Favorite Areas</Typography>
                <Typography variant='body2' >None.  Pick some favorite areas and we'll keep you up-to-date!</Typography>
              </Grid>
              <Grid item xs={8} >
                <Typography >New in All Locations</Typography>

              </Grid>
            </Grid>
          </Container>
          <TwentyClassics />
        </Grid>
        <Divider orientation='vertical' flexItem />
        <Grid item xs >
          <Container className={classes.featuredRoute}>
            <Typography variant='h2' className={classes.headerText} >Featured Route</Typography>
          </Container>
          <Container className={classes.leadingNews} >
          <Typography variant='h2' className={classes.headerText} >Leading News</Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default HomeSplash;
