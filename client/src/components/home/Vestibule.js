import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Card, CardMedia, CardContent, Typography, Grid, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import corner from '../../assets/corner.jpg';
import rappel from '../../assets/rappel.jpg';
import spread from '../../assets/spread-eagle.jpg';
import RouteFinder from './RouteFinder';

const useStyles = makeStyles({
  vestibule: {
    background: 'black',
  }
});

const Vestibule = () => {

  const classes = useStyles();

  const pics = [{
    path: corner,
    title: 'corner',
  }, {
    path: rappel,
    title: 'rappel',
  }, {
    path: spread,
    title: 'spread-eagle',
  }
  ];

  const carouselBuilder = (pic, idx) => {
    return (
      <Card key={pic.path}>
        <CardActionArea>
          <CardMedia
            component='img'
            image={pic.path}
            title={pic.title}
          />
        </CardActionArea>
      </Card>
    );
  }

  return (
    <>
      <Box className={classes.vestibule}>
        <Grid container spacing={2}>
          <Grid item xs='7' >
            <Carousel autoPlay='false'>
              {pics.map(carouselBuilder)}
            </Carousel>
          </Grid>
          <Grid item xs='5'>
            <RouteFinder />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Vestibule;
