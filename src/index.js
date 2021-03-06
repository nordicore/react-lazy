import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/index.scss';

import store from './store';
import Shell from './ui-parts/shell';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Shell />
    </Router>
  </Provider>,
  document.getElementById('root')
);
