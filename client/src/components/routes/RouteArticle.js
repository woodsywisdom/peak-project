import React from 'react';
import ArticleTitle from './ArticleTitle';
import RouteStats from './RouteStats';
import YouAndRoute from './YouAndRoute';
import Slideshow from './Slideshow';
import ArticleBody from './ArticleBody';
import { Grid } from '@material-ui/core';

const RouteArticle = () => {

  return (
    <Grid item xs={9} >
      <ArticleTitle />
      <RouteStats />
      <YouAndRoute />
      <Slideshow />
      <ArticleBody />
    </Grid>
  );
}

export default RouteArticle;
