import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import Router from './router';
import {Provider} from 'react-redux';
import store from './store'

import './assets/css/reset.css';
import './assets/css/font.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
