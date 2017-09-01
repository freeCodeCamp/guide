import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Row from 'react-bootstrap/lib/Row';
import Link from 'gatsby-link';

import SearchBar from '../LayoutComponents/search/SearchBar.jsx';
import SideNav from '../LayoutComponents/nav/SideNav.jsx';

import logo from '../../assets/freeCodeCamp-logo.png';
import glyph from '../../assets/freeCodeCamp-logo-glyph.png';

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
      <nav className='navbar navBar'>
        <div className='navContainer'>
          <div className='logoContainer'>
            <Link
              className='link'
              to={ '/' }
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
            </Link>
          </div>
          <SearchBar />
        </div>
      </nav>
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
