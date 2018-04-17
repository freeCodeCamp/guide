import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';

import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

const propTypes = {
  expandedState: PropTypes.object,
  pages: PropTypes.arrayOf(PropTypes.object),
  parents: PropTypes.arrayOf(PropTypes.object)
};

function parentFilter(node) {
  return node.path.split('/').filter(Boolean).length === 1;
}

class SideNav extends Component {
  constructor() {
    super();

    this.state = {
      expandedState: {}
    };

    this.renderChildren = this.renderChildren.bind(this);
    this.renderPanels = this.renderPanels.bind(this);
    this.renderParent = this.renderParent.bind(this);
    this.toggleExpandedState = this.toggleExpandedState.bind(this);
  }

  componentDidMount() {
    const { pathname } = this.context.router.route.location;
    const pathMap = pathname
      .slice(1)
      .split('/')
      .slice(0, -1)
      .reduce((map, current, i, pathArray) => {
        const path = i !== 0 ?
          map[pathArray[i - 1]] + `/${current}` :
          `/${current}`;
        return {
          ...map,
          [current]: path
        };
      }, {});

    Object.keys(pathMap)
      .map(key => pathMap[key])
      .forEach(path => {
        this.toggleExpandedState(path);
      });
  }

  renderPanels(parents, pages) {
    if (!parents) {
      return 'No Parents Here';
    }
    return parents.map(parent => this.renderParent(parent, pages));
  }

  renderParent(parent, pages) {
    const childrenForParent = pages.filter(
      page => page.parentPath === parent.path
    );
    const { path } = parent;
    const isExpanded = !!this.state.expandedState[path];
    const [ category ] = pages.filter(page => page.path === path);
    const { title, categoryChildren, dashedName } = category;

    const children = this.renderChildren(childrenForParent, pages);

    return (
      <NavPanel
        categoryChildren={ categoryChildren }
        dashedName={ dashedName }
        handleClick={ this.toggleExpandedState }
        isExpanded={ isExpanded }
        key={ parent.path }
        path={ parent.path }
        title={ title }
        >
        { isExpanded ? children : null }
      </NavPanel>
    );
  }

  renderChildren(children, pages) {
    return children.map(child => {
      if (child.hasChildren) {
        return this.renderParent(child, pages);
      }
      return (
        <NavItem
          isStubbed={ child.isStubbed }
          key={ child.path }
          path={ child.path }
          title={ child.title }
        />
      );
    });
  }

  toggleExpandedState(path) {
    this.setState(
      state => ({
        ...state,
        expandedState: {
          ...state.expandedState,
          [path]: !state.expandedState[path]
        }
      })
    );
  }

  render() {
    const { pages } = this.props;
    const { expandedState } = this.state;
    const parents = pages.filter(parentFilter);
    const panels = this.renderPanels(parents, pages);
    return (
      <nav className='sideNav' id='side-nav'>
        <PanelGroup role='list'>
          {
            (!parents || !expandedState) ?
              <NavPanel title='No Parents Here' /> :
              panels
          }
        </PanelGroup>
      </nav>
    );
  }
}

SideNav.contextTypes = {
  router: PropTypes.object.isRequired
};
SideNav.displayName = 'SideNav';
SideNav.propTypes = propTypes;

export default SideNav;
