import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

import NavigationContextProvider from './src/contexts/NavigationContext';

export const replaceRouterComponent = ({ history }) => {
    const ConnectedRouterWrapper = ({ children }) => (
        <NavigationContextProvider>
            <Router history={history}>{children}</Router>
        </NavigationContextProvider>
    );
    ConnectedRouterWrapper.displayName = 'ConnectedRouterWrapper';
    ConnectedRouterWrapper.propTypes = { children: PropTypes.any };
    return ConnectedRouterWrapper;
};
