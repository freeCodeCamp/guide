import React from 'react';
import PropTypes from 'prop-types';
import FCCSearchBar from 'react-freecodecamp-search';
import { Grid, Row, Col, Image, Navbar } from 'react-bootstrap';
// gatsby
import Link from 'gatsby-link';

import SideNav from '../components/nav/SideNav.jsx';

// Import styles

const propTypes = {
      'location.pathname': PropTypes.string,
      children: PropTypes.func,
      location: PropTypes.object
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
            <Navbar style={{ background: '#006400' }}>
              <Col md={ 3 } xs={ 12 }>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: '#fff'
                      }}
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
                  </Navbar.Brand>
                </Navbar.Header>
              </Col>
              <Col md={ 9 } xs={ 12 }>
                <FCCSearchBar />
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
