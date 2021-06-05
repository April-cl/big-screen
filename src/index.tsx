import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './shared/style.scss'

ReactDOM.render(
  <div style={{background: 'radial-gradient(ellipse closest-side, rgb(11, 39, 69), rgb(8, 22, 49))', height: '100%'}}>
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path='/' render={routerProps => {
            return <App {...routerProps}/>
          }}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);