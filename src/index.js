import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import Info from './Info';
import configureStore from './redux/store/configureStore';
import * as serviceWorker from './serviceWorker';

import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={ App } />
      <Route exact path="/ifo/:id" component={ Info } />
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
