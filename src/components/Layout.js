import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import FCCSearch from 'react-freecodecamp-search';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Row from 'react-bootstrap/lib/Row';

import { NavigationContext } from '../contexts/NavigationContext';
import SideNav from './LayoutComponents/nav/SideNav';

import logo from '../../assets/freeCodeCamp-logo.png';
import glyph from '../../assets/freeCodeCamp-logo-glyph.png';

import 'prismjs/themes/prism.css';
import '../css/main.css';

const propTypes = {
  children: PropTypes.any,
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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        allNavigationNode {
          edges {
            node {
              dashedName
              hasChildren
              isStubbed
              parentPath
              path
              title
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allNavigationNode;
      const pages = edges.map(edge => edge.node);
      return (
        <NavigationContext>
          {({
            toggleDisplaySideNav,
            displaySideNav,
            expandedState,
            toggleExpandedState
          }) => (
            <Fragment>
              <nav className='navbar navBar navbar-fixed-top'>
                <div className='navContainer'>
                  <div className='logoContainer'>
                    <a
                      className='skip-link sr-only sr-only-focusable'
                      href='#main'
                      >
                      Skip to main content
                    </a>
                    <a className='link' href='https://www.freecodecamp.org'>
                      <Image
                        alt='freeCodeCamp logo'
                        className='logo'
                        responsive={true}
                        src={logo}
                      />
                      <Image
                        alt='freeCodeCamp logo'
                        className='logo-glyph'
                        src={glyph}
                      />
                    </a>
                  </div>
                  <FCCSearch />
                  <button
                    aria-label='toggle navbar'
                    className='navbar-toggle'
                    onClick={toggleDisplaySideNav}
                    type='button'
                    >
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                  </button>
                </div>
              </nav>
              <Grid className='bodyContainer'>
                <Row>
                  <Col
                    md={4}
                    smHidden={!displaySideNav}
                    xsHidden={!displaySideNav}
                    >
                    <SideNav
                      expandedState={expandedState}
                      pages={pages}
                      toggleDisplaySideNav={toggleDisplaySideNav}
                      toggleExpandedState={toggleExpandedState}
                    />
                  </Col>
                  <Col
                    className='content'
                    md={8}
                    smHidden={displaySideNav}
                    xsHidden={displaySideNav}
                    >
                    <main className='main' id='main' tabIndex='-1'>
                      {children}
                    </main>
                  </Col>
                </Row>
              </Grid>
            </Fragment>
          )}
        </NavigationContext>
      );
    }}
  />
);

Layout.displayName = 'Layout';
Layout.propTypes = propTypes;

export default Layout;
