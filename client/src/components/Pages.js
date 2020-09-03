import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import LoginPage from './header/LoginPage';
import { AuthRoute } from './utils/Routes';
import RouteProfile from './routes/RouteProfile';
import Header from './header/Header';

const Pages = () => {
  return (
    <>
      <Header />
      <Switch>
        <AuthRoute path='/login' exact component={LoginPage} />
        <Route path='/routes/*' exact component={RouteProfile} />
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  )
}

export default Pages;
