import React from 'react';
import { Accordion } from 'react-bootstrap';

import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

import navData from '../navData.json';

const pages = Object.keys(navData).map(key => navData[key]);

function renderChildren(children) {
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

function renderParent(parent, children) {
  const childrenForThis = children
    .filter(x => x.parent.toLowerCase() === parent.title.toLowerCase());

  return (
    <NavPanel
      key={ parent.path }
      path={ parent.path }
      title={ parent.title }
      >
      { renderChildren(childrenForThis) }
    </NavPanel>
  );
}

function renderPanels(tree) {
  if (!tree) {
    return null;
  }
  return pages
    .filter(x => x.parent === 'articles')
    .map(parent => renderParent(parent, pages));
}

function SideNav() {
  const panels = renderPanels(navData);
  return (
    <Accordion>
      { panels }
    </Accordion>
  );
}

SideNav.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default SideNav;
