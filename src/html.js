import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import preloads from './head/preloads';
import metaAndStyleSheets from './head';

const propTypes = {
  body: PropTypes.string,
  headComponents: PropTypes.array,
  postBodyComponents: PropTypes.array
};

let css;
if (process.env.NODE_ENV === 'production') {
  css = (
    <style
      dangerouslySetInnerHTML={{
        __html: require('!raw!../public/styles.css')
      }}
    />
  );
}

class HTML extends React.Component {
  render() {
    const head = Helmet.rewind();
    return (
      <html lang='en'>
        <head>
          {preloads}
          {this.props.headComponents}
          {metaAndStyleSheets}
          {css}
          <title>freeCodeCamp Guide</title>
        </head>
        <body>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id='___gatsby'
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = propTypes;

export default HTML;
