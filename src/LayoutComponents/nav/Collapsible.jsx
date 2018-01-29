import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';

import SideNav from './SideNav';

import { toggleMenuOpen } from './redux';
import './collapsible.scss';

const propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenuOpen: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isMenuOpen: state.nav.isMenuOpen
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    toggleMenuOpen: bindActionCreators(toggleMenuOpen, dispatch)
  };
  return dispatchers;
}

class CollapsibleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleMenuOpen();
  }

  render() {
    const { isMenuOpen } = this.props;
    return (
      <div>
        <div className='hidden-menu-bar'>
          <button className='collapse-button' onClick={ this.handleClick }>
            <FontAwesome name='bars' />
            <span className='sr-only'>toggle menu</span>
          </button>
        </div>
          <Transition in={ isMenuOpen } timeout={ 100 }>
            {
              state => (
              <div className={`collapse-menu ${state}`}>
                <SideNav />
              </div>
              )
            }
          </Transition>
      </div>
    );
  }
}

CollapsibleMenu.displayName = 'CollapsibleMenu';
CollapsibleMenu.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CollapsibleMenu);
