import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleExpandedState } from './redux';
import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

import { sideNav } from './sideNav.module.css';

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

function renderChildren(children, navProps) {
    return children
    .map(child => {
      if (child.hasChildren) {
        return renderParent(child, navProps);
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

function renderParent(parent, navProps) {
  const {
    expandedState,
    toggleExpandedState,
    pages
  } = navProps;

  const childrenForParent = pages
    .filter(page => page.parent === parent.dashedName);

    const children = renderChildren(childrenForParent, navProps);

  return (
    <NavPanel
      handleClick={ toggleExpandedState }
      isExpanded={ expandedState[parent.path] }
      key={ parent.path }
      path={ parent.path }
      title={ parent.title }
      >
      {
        children.length ?
        children :
        <span>
          No articles yet.
          <br />
          Could you&nbsp;
          <a
            href={
              'https://github.com/freeCodeCamp/guides/blob/master/README.md' +
              '#freecodecamp-guides'
            }
            rel='nofollow'
            target='_blank'
            >
            write one?
          </a>
        </span>
      }
    </NavPanel>
    );
}

function renderPanels(navProps) {
  const {
    parents
  } = navProps;
  if (!parents) {
    return 'No Parents Here';
  }
  return parents
    .map(parent => renderParent(parent, navProps));
}

class SideNav extends Component {
  constructor() {
    super();
  }

  render() {
    const { expandedState, pages, parents, toggleExpandedState } = this.props;
    const panels = renderPanels(
      {
        parents,
        pages,
        expandedState,
        toggleExpandedState
      }
    );
    return (
      <div className={ sideNav } id='side-nav'>
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
