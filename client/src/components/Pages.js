import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import LoginPage from './LoginPage';
import { AuthRoute } from './Routes';

const Pages = () => {
  return (
    <>
      <Switch>
        <AuthRoute path='/login' exact component={LoginPage} />
        <Route path='/' exact component={Home} />
      </Switch>
    </>
  )
}

export default Pages;
