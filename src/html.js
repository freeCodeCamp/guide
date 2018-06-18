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

class HTML extends React.Component {
  render() {
    const head = Helmet.rewind();
    return (
      <html lang='en'>
        <head>
          {preloads}
          {this.props.headComponents}
          {metaAndStyleSheets}
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
