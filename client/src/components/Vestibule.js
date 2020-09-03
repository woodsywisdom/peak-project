import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import corner from '../assets/corner.jpg';
import RouteFinder from './RouteFinder';

const useStyles = makeStyles({
  vestibule: {
    background: 'black',
  }
});

const Vestibule = () => {

  const classes = useStyles();

  const pics = [{
    path: { corner },
    title: 'corner',
  }, {
    path: '../../public/assets/rappel.jpg',
    title: 'rappel',
  }, {
    path: '../../public/assets/spread-eagle.jpg',
    title: 'spread-eagle',
  }
  ];

  const carouselBuilder = (pic, idx) => {
    return (
      <Card key={pic.path}>
        <CardMedia
          image={pic.path}
          title={pic.title}
        />
        <CardContent>
          <Typography>pic #{idx}</Typography>
        </CardContent>
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
