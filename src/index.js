import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter}  from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import RouteComponent from './routeComponent';

ReactDOM.render(
    <BrowserRouter>
        <RouteComponent />
    </BrowserRouter>,
     document.getElementById('root'));

serviceWorker.unregister();
