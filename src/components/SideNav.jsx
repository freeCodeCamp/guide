import React from 'react';
import { Accordion } from 'react-bootstrap';

import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

import navData from '../navData.json';

function buildMenuTree(pages) {
  return Object.keys(pages)
    .map(key => pages[key])
    .reduce((acc, current) => {
      const { parent, hasChildren } = current;

      if (hasChildren) {
          const existingParents = acc.parents ? acc.parents : [];
          acc.parents = [ ...existingParents, current ];
          return acc;
        }

        const existingPages = acc[parent] ? acc[parent] : [];
        acc[parent] = [ ...existingPages, current ];
        return acc;
    }, {});
}

function renderPanels(tree) {
  if (!tree) {
    return null;
  }
  const { parents } = tree;
  return parents
    .map((parent, i)=> {
      const title = parent.title.replace(/^intro.*?:\s*?/i, '');
      const children = Object.keys(tree)
        .filter(key => key !== 'parents')
        .map(key => {
          return tree[key];
        })
        .reduce((acc, current) => acc.concat(current), [])
        .filter(page => new RegExp(parent.path).test(page.path))
        .map(page => {
          return (
            <NavItem
              key={ page.path }
              path={ page.path }
              title={ page.title }
            />
            );
        });
      return (
        <NavPanel key={i} path={ parent.path } title={ title }>
          <ul className='nav nav-pills nav-stacked' role='presentation'>
            { children }
          </ul>
        </NavPanel>
      );
  });
}

function SideNav() {
  const tree = buildMenuTree(navData);
  const panels = renderPanels(tree);
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
