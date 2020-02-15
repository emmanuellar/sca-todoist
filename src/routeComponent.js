import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css'
import formApp from './formApp';
import App from './App';

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={formApp} />
        <Route path='/todo' component={App} />
      </Switch>
    </div>
  );
}

export default Router;
