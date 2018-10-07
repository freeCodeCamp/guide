import React from 'react';
import { renderToString } from 'react-dom/server';

import NavigationContextProvider from './src/contexts/NavigationContext';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) =>
  replaceBodyHTMLString(
    renderToString(
      <NavigationContextProvider>{bodyComponent}</NavigationContextProvider>
    )
  );

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      async={true}
      src='https://www.googletagmanager.com/gtag/js?id=AW-795617839'
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-795617839');
        `
      }}
    />
  ]);
};
