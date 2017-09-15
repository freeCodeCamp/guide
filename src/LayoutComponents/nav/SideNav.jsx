import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleExpandedState } from './redux';
import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

const propTypes = {
  expandedState: PropTypes.object,
  pages: PropTypes.arrayOf(PropTypes.object),
  parents: PropTypes.arrayOf(PropTypes.object),
  toggleExpandedState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { expandedState, parents, pages } = state.nav;
  return {
    expandedState,
    parents,
    pages
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    toggleExpandedState: bindActionCreators(toggleExpandedState, dispatch)
  };
  return dispatchers;
}

function renderChildren(children, pages) {
    return children
    .map(child => {
      if (child.hasChildren) {
        return renderParent(child, pages);
      }
      return (
        <NavItem
          key={ child.path }
          path={ child.path }
          title={ child.title }
        />
      );
  });
}

function renderParent(parent, pages) {
  const childrenForParent = pages
    .filter(page => page.parent === parent.dashedName);

    const children = renderChildren(childrenForParent, pages);

  return (
    <NavPanel
      key={ parent.path }
      path={ parent.path }
      >
      { children }
    </NavPanel>
    );
}

function renderPanels(parents, pages) {
  if (!parents) {
    return 'No Parents Here';
  }
  return parents
    .map(parent => renderParent(parent, pages));
}

class SideNav extends Component {
  constructor() {
    super();
  }

  render() {
    const { expandedState, pages, parents } = this.props;
    const panels = renderPanels(parents, pages);
    return (
      <div className='sideNav' id='side-nav'>
        <PanelGroup>
          {
            (!parents || !expandedState) ?
            <NavPanel title={'No Parents Here'}/> :
            panels
          }
        </PanelGroup>
      </div>
    );
  }
}

SideNav.displayName = 'SideNav';
SideNav.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
