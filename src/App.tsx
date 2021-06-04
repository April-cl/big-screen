import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './pages';
import { Routers } from './routers';

function App() {
  return (
    <Switch>
      {
        Routers.map(router => (
          <Route
            exact={!router.notExect}
            key={router.path}
            path={router.path}
            component={router.component}
          >
          </Route>
        ))
      }
      <Redirect path='/' to='/home'></Redirect>
    </Switch>
  );
}

export default withRouter(App)