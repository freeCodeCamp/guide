import React from 'react';
import { renderToString } from 'react-dom/server';

import NavigationContextProvider from './src/contexts/NavigationContext';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {

  const ConnectedBody = () => (
    <NavigationContextProvider>{bodyComponent}</NavigationContextProvider>
  );
  return replaceBodyHTMLString(renderToString(<ConnectedBody />));
};

