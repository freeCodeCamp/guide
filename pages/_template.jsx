import React from 'react';
import { Link } from 'react-router';
import { Container, Grid, Span } from 'react-responsive-grid';
import { prefixLink } from 'gatsby-helpers';
import { colors } from 'utils/colors';

import typography from 'utils/typography';
import { config } from 'config';

import TopNavBar from '../components/TopNavBar.jsx';

// Import styles.
import 'bootstrap/dist/css/bootstrap.css';
import 'css/main.css';
import 'css/github.css';

const { rhythm, adjustFontSizeTo } = typography;

module.exports = React.createClass({
  getInitialState(){
    return { isOpened: false }
  },
  propTypes() {
    return {
      children: React.PropTypes.object
    };
  },
  handleClick() {
    this.setState({ isOpened: !this.state.isOpened })
  },
  render() {
    return (
      <div>
        <TopNavBar handleClick={ this.handleClick }/>
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
