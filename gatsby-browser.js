import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './src/store';

const propTypes = {
    children: PropTypes.node.isRequired
  };

exports.replaceRouterComponent = ({ history }) => {

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={ store }>
      <Router history={ history }>{ children }</Router>
    </Provider>
  );
  ConnectedRouterWrapper.displayName = 'ConnectRouterWrapper';
  ConnectedRouterWrapper.propTypes = propTypes;

  return ConnectedRouterWrapper;
};

