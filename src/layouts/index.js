/* global graphql */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FCCSearch from 'react-freecodecamp-search';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Row from 'react-bootstrap/lib/Row';

import SideNav from '../LayoutComponents/nav/SideNav.jsx';

import logo from '../../assets/freeCodeCamp-logo.png';
import glyph from '../../assets/freeCodeCamp-logo-glyph.png';

import 'prismjs/themes/prism.css';
import '../css/main.scss';

const propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    allNavigationNode: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            dashedName: PropTypes.string,
            isStubbed: PropTypes.bool,
            path: PropTypes.string,
            title: PropTypes.string
          })
        })
      )
    })
  }),
  location: PropTypes.object
};
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      displaySideNav: false
    };
    this.toggleDisplaySideNav = this.toggleDisplaySideNav.bind(this);
  }
  toggleDisplaySideNav = () => {
    this.setState({displaySideNav: !this.state.displaySideNav});
  }
  render() {
    const { edges } = this.props.data.allNavigationNode;
    const pages = edges.map(edge => edge.node)
      .map(node => ({ ...node, hasChildren: !!node.categoryChildren.length }));

    return (
      <div>
        <nav className='navbar navBar navbar-fixed-top'>
          <div className='navContainer'>
            <div className='logoContainer'>
              <a
                className='skip-link sr-only sr-only-focusable'
                href='#main'
                >
                Skip to main content
              </a>
              <a
               className='link'
               href='https://www.freecodecamp.org'
               >
                <Image
                  alt='freeCodeCamp logo'
                  className='logo'
                  responsive={ true }
                  src={ logo }
                />
                <Image
                  alt='freeCodeCamp logo'
                  className='logo-glyph'
                  src={ glyph }
                />
              </a>
            </div>
            <FCCSearch />
            <button
              className = 'navbar-toggle'
              onClick = {this.toggleDisplaySideNav}
              type='button'
              >
              <span
                className='icon-bar'
              />
              <span
                className='icon-bar'
              />
              <span
                className='icon-bar'
              />
            </button>
          </div>
        </nav>
        <Grid className='bodyContainer'>
          <Row>
            <Col
              md={ 4 }
              smHidden = {!this.state.displaySideNav}
              xsHidden = {!this.state.displaySideNav}
              >
              <SideNav
                pages={pages}
                toggleDisplaySideNav={this.toggleDisplaySideNav}
              />
            </Col>
            <Col
              className='content'
              md={ 8 }
              smHidden = {this.state.displaySideNav}
              xsHidden = {this.state.displaySideNav}
              >
                <main
                  className='main'
                  id='main'
                  tabIndex='-1'
                  >
                  { this.props.children() }
                </main>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Layout.displayName = 'Layout';
Layout.propTypes = propTypes;

export default Layout;

export const query = graphql`
query LayoutQuery {
  allNavigationNode {
    edges {
      node {
        categoryChildren
        dashedName
        isStubbed
        parentPath
        path
        title
      }
    }
  }
}
`;
