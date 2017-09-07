import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Navbar from 'react-bootstrap/lib/Navbar';
import Row from 'react-bootstrap/lib/Row';
import Link from 'gatsby-link';

import SearchBar from '../LayoutComponents/search/SearchBar.jsx';
import SideNav from '../LayoutComponents/nav/SideNav.jsx';

import 'prismjs/themes/prism.css';
import '../css/main.css';

import {
  updateOnlineStatus
} from '../LayoutComponents/redux';

const propTypes = {
  'location.pathname': PropTypes.string,
  children: PropTypes.func,
  location: PropTypes.object,
  updateOnlineStatus: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateOnlineStatus
  }, dispatch);
}

class Layout extends React.PureComponent {
  constructor() {
    super();

    this.handleOnlineStatus = this.handleOnlineStatus.bind(this);
  }

  componentDidMount() {
    window.addEventListener('online', this.handleOnlineStatus);
    window.addEventListener('offline', this.handleOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineStatus);
    window.removeEventListener('offline', this.handleOnlineStatus);
  }

  handleOnlineStatus() {
    this.props.updateOnlineStatus(navigator.onLine);
  }

  render() {
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
