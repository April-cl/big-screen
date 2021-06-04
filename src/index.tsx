import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './shared/style.scss'
import background from './images/rootBackground.jpg'

ReactDOM.render(
  <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100%'}}>
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