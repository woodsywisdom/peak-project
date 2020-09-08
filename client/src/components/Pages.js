import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import LoginPage from './header/LoginPage';
import { AuthRoute } from './utils/Routes';
import RouteProfile from './routes/RouteProfile';
import Header from './header/Header';
import NewRoutePage from './routes/NewRoutePage';
import AreaProfile from './areas/AreaProfile';
import { Typography } from '@material-ui/core';


const NotFound = () => {
  return (
    <Typography variant='h1' >404: Oops...Page not Found</Typography>
  )
}

const Pages = () => {
  return (
    <>
      <Header />
      <Switch>
        <AuthRoute path='/login' exact component={LoginPage} />
        <Route path='/routes/:id' exact component={RouteProfile} />
        <Route path='/areas/:id' exact component={AreaProfile} />
        <Route path='/areas/:id/new-route' exact component={NewRoutePage} />
        <Route path='/' exact component={Home} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </>
  )
}

export default Pages;
