import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';

const Pages = () => {
  return (
    <>
      <Switch>
        <Route path='/login'>
          <LoginForm >

          </LoginForm>
        </Route>
      </Switch>
    </>
  )
}

export default Pages;
