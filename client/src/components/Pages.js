import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import LoginPage from './header/LoginPage';
import { AuthRoute } from './utils/Routes';
import RouteProfile from './routes/RouteProfile';
import Header from './header/Header';
import NewRoutePage from './routes/NewRoutePage';

const Pages = () => {
  return (
    <>
      <Header />
      <Switch>
        <AuthRoute path='/login' exact component={LoginPage} />
        <Route path='/routes/:id' exact component={RouteProfile} />
        <Route path='/areas/:id/new' exact component={NewRoutePage} />
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  )
}

export default Pages;
