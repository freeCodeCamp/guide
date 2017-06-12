import React from 'react';
import { Link } from 'react-router';
import { Container, Grid, Span } from 'react-responsive-grid';
import { prefixLink } from 'gatsby-helpers';
import { colors } from 'utils/colors';

import typography from 'utils/typography';
import { config } from 'config';

// Import styles.
import 'css/main.css';
import 'css/github.css';

const { rhythm, adjustFontSizeTo } = typography;

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.object
    };
  },
  render() {
    return (
      <div>
        <div
          style={{
            background: colors.bg,
            color: colors.fg,
            marginBottom: rhythm(1.5)
          }}
          >
          <Container
            style={{
              maxWidth: 960,
              paddingLeft: rhythm(3 / 4)
            }}
            >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(3 / 4)} 0`
              }}
              >
              <Span
                columns={4}
                style={{
                  // Ugly hack. How better to constrain height of div?
                  height: 24
                }}
                >
                <Link
                  style={{
                    textDecoration: 'none',
                    color: colors.fg,
                    fontSize: adjustFontSizeTo('25.5px').fontSize
                  }}
                  to={prefixLink('/')}
                  >
                  {config.siteTitle}
                </Link>
              </Span>
              <Span columns={ 8 } last={ true } >
                <a
                  href='https://github.com/freeCodeCamp/guides'
                  style={{
                    float: 'right',
                    color: colors.fg,
                    textDecoration: 'none',
                    marginLeft: rhythm(1 / 2)
                  }}
                  >
                  Github
                </a>
                <p>In here is where the Search Bar will go</p>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0
          }}
          >
          {this.props.children}
        </Container>
      </div>
    );
  }
});
