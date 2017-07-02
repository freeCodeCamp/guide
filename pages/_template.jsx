import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FCCSearchBar from 'react-freecodecamp-search';
import { Grid, Row, Col, Image, Navbar } from 'react-bootstrap';
// gatsby
import { prefixLink } from 'gatsby-helpers';
import { colors } from 'utils/colors';
import typography from 'utils/typography';
import { config } from 'config';

import SideNav from '../components/SideNav.jsx';

// Import styles.
import 'css/main.css';
import 'css/github.css';

const propTypes = {
      'location.pathname': PropTypes.string,
      children: PropTypes.object,
      location: PropTypes.object
    };

const { rhythm, adjustFontSizeTo } = typography;

class Layout extends React.PureComponent {
  constructor() {
    super();
  }

  componentWillMount() {
    if (this.props.location.pathname === '/') {
      this.context.router.push('/docs/');
    }
  }

  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Navbar style={{ background: colors.bg }}>
              <Col md={3} xs={12}>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link
                      style={{
                        textDecoration: 'none',
                        color: '#fff',
                        fontSize: adjustFontSizeTo('25.5px').fontSize
                      }}
                      to={prefixLink('/')}
                      >
                      <Image
                        alt={config.siteTitle}
                        responsive={ true }
                        src={
                          'https://raw.githubusercontent.com/' +
                          'freeCodeCamp/assets/master/assets/logos/FCC-logo-white.png'
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
            <Col md={ 3 }>
              <SideNav { ...this.props }/>
            </Col>
            <Col md={ 9 }>
              {this.props.children}
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

module.exports = Layout;
