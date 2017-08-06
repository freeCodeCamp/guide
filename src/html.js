import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { TypographyStyle } from 'react-typography';
import typography from './utils/typography';

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
    headComponents: PropTypes.array,
    postBodyComponents: PropTypes.array
  }

  render() {
    const head = Helmet.rewind();

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

    return (
      <html lang='en'>
        <head>
          { this.props.headComponents }
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
          <script
            crossOrigin='anonymous'
            integrity={
              'sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cM' +
              'vDHcMakNTNrHIW2I5f'
            }
            src={
              'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/' +
              'jquery.min.js'
            }
          />
          <script
            crossOrigin='anonymous'
            integrity={
              'sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIp' +
              'G9mGCD8wGNIcPD7Txa'
            }
            src={
              'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/' +
              'bootstrap.min.js'
            }
          />
          <title>freeCodeCamp Guide</title>
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id='___gatsby'
          />
          { this.props.postBodyComponents }
        </body>
      </html>
    );
  }
}
