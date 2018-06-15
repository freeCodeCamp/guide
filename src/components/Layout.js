/* global graphql */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
import FCCSearch from 'react-freecodecamp-search';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Row from 'react-bootstrap/lib/Row';

import SideNav from './LayoutComponents/nav/SideNav';

import logo from '../../assets/freeCodeCamp-logo.png';
import glyph from '../../assets/freeCodeCamp-logo-glyph.png';

import 'prismjs/themes/prism.css';
import '../css/main.scss';

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

function Layout({ children }) {
  return (
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
              </div>
            </nav>
            <Grid className='bodyContainer'>
              <Row>
                <Col md={4}>
                  <SideNav pages={pages} />
                </Col>
                <Col className='content' md={8}>
                  <main className='main' id='main' tabIndex='-1'>
                    {children}
                  </main>
                </Col>
              </Row>
            </Grid>
          </Fragment>
        );
      }}
    />
  );
}

Layout.displayName = 'Layout';
Layout.propTypes = propTypes;

export default Layout;
