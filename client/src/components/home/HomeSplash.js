import React from 'react';
import { Grid, Container, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TwentyClassics from './TwentyClassics';

const useStyles = makeStyles({
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
          <Container >
            <Typography variant='h2' className={classes.headerText} >Featured Route</Typography>
            <Typography> Here will be a link to a editor selected route for highlight with a small picture and some basic stats</Typography>
          </Container>
          <Container  >
          <Typography variant='h2' className={classes.headerText} >Leading News</Typography>
          <Typography >This area will replace some branded content from various climbing related publications.  Possibly linked blog articles or something similar</Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default HomeSplash;
