import React from 'react';
import ArticleTitle from './ArticleTitle';
import RouteStats from './RouteStats';
import YouAndRoute from './YouAndRoute';
import Slideshow from './Slideshow';
import ArticleBody from './ArticleBody';

const RouteArticle = () => {

  return (
    <>
      <ArticleTitle />
      <RouteStats />
      <YouAndRoute />
      <Slideshow />
      <ArticleBody />
    </>
  );
}

export default RouteArticle;
