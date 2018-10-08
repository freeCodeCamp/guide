import React from 'react';

import NavigationContextProvider from './src/contexts/NavigationContext';

/* eslint-disable react/prop-types */
export const wrapRootElement = ({ element }) => (
  <NavigationContextProvider>{element}</NavigationContextProvider>
);
