import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './components/search/SearchBar.jsx';
import { Grid, Row, Col, Image, Navbar } from 'react-bootstrap';

import Link from 'gatsby-link';

import SideNav from './components/nav/SideNav.jsx';

import {
  navBar,
  link
} from './Layout.module.css';

const propTypes = {
      'location.pathname': PropTypes.string,
      children: PropTypes.func,
      location: PropTypes.object
    };
    const style = {
       Navbar: {
         background: '#006400',
         height: '40px'
       },
       Link: {
         textDecoration: 'none',
         color: '#fff'
       },
       Image: {
           margin: 'auto',
           position: 'absolute',
           top: '0',
           right: '0',
           bottom: '0',
            left: '0'
        //  position: 'relative',
        // top: '50%',
        // transform: 'translateY(-50%)'
      },
      FCCSearchBar: {
        margin: 'auto',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
         left: '0'
       }
     };
class Layout extends React.PureComponent {
  constructor() {
    super();
  }

  componentWillMount() {
    if (this.props.location.pathname === '/') {
      this.context.router.history.replace('/articles');
    }
  }

  render() {

    return (
      <div>
        <Grid fluid={ true }>
          <Row>
            <Navbar style={style.Navbar}>
              <Col md={ 3 } xs={ 6 }>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link
                      style={style.Link}
                      to={ '/' }
            <Navbar className={ navBar }>
              <Col md={ 3 } xs={ 12 }>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link
                      className={ link }
                      to={ '/articles' }
                      >
                      <Image
                        alt='freeCodeCamp logo'
                        responsive={ true }
                        src={
                          'https://raw.githubusercontent.com/' +
                          'freeCodeCamp/assets/master/assets/' +
                          'logos/FCC-logo-white.png'
                          }
                          style={style.Image}
                      />
                    </Link>
                  </Navbar.Brand>
                </Navbar.Header>
              </Col>
              <Col md={ 9 } xs={ 6 }>
                <FCCSearchBar
                style={style.FCCSearchBar}
                />
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
            <Col md={ 8 }>
              { this.props.children() }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
Layout.contextTypes = {
    router: React.PropTypes.object.isRequired
};
Layout.displayName = 'Layout';
Layout.propTypes = propTypes;

export default Layout;
