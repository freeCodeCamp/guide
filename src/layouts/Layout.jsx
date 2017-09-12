import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './components/search/SearchBar.jsx';
import { Grid, Row, Col, Image, Navbar } from 'react-bootstrap';
import Link from 'gatsby-link';

import SideNav from './components/nav/SideNav.jsx';

import 'prismjs/themes/prism.css';
import '../css/main.css';

const propTypes = {
  'location.pathname': PropTypes.string,
  children: PropTypes.func,
  location: PropTypes.object
};

function Layout(props) {

  return (
    <div>
      <Grid fluid={ true }>
        <Row>
          <Navbar className='navBar'>
            <Col md={ 3 } xs={ 12 }>
              <Link
                className='link'
                to={ '/' }
                >
                <Image
                  alt='freeCodeCamp logo'
                  responsive={ true }
                  src={
                    'https://raw.githubusercontent.com/' +
                    'freeCodeCamp/assets/master/assets/' +
                    'logos/FCC-logo-white.png'
                    }
                />
              </Link>
            </Col>
            <Col md={ 9 } xs={ 12 }>
              <SearchBar />
            </Col>
          </Navbar>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Col md={ 4 }>
            <SideNav />
          </Col>
          <Col className='content' md={ 8 }>
            { props.children() }
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

Layout.contextTypes = {
    router: React.PropTypes.object.isRequired
};
Layout.displayName = 'Layout';
Layout.propTypes = propTypes;

export default Layout;
