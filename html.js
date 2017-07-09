import React from 'react';
import DocumentTitle from 'react-document-title';

import { prefixLink } from 'gatsby-helpers';
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from './utils/typography';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string
  },
  render() {
    const title = DocumentTitle.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
      <style
        dangerouslySetInnerHTML={
            { __html: require('!raw!./public/styles.css') }
          }
      />
      );
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta
            content='IE=edge'
            httpEquiv='X-UA-Compatible'
          />
          <meta
            content='width=device-width, initial-scale=1.0'
            name='viewport'
          />
          <link
            crossOrigin='anonymous'
            href={
              'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/' +
              'bootstrap.min.css'
            }
            integrity={
              'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+' +
              'PmSTsz/K68vbdEjh4u'
            }
            rel='stylesheet'
          />
          <title>{title}</title>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id='react-mount'
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
});
