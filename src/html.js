import React from 'react';
import PropTypes from 'prop-types';

import preloads from './head/preloads';
import metaAndStyleSheets from './head';

const propTypes = {
  body: PropTypes.string,
  headComponents: PropTypes.array,
  postBodyComponents: PropTypes.array
};

class HTML extends React.Component {
  render() {
    return (
      <html lang='en'>
        <head>
          {preloads}
          {metaAndStyleSheets}
          {this.props.headComponents}
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
