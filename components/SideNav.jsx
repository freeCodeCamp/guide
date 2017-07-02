import React from 'react';
import find from 'lodash/find';
import { Accordion } from 'react-bootstrap';

import { config } from 'config';

import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

function buildMenuTree(pages) {
  return pages
    .reduce((acc, current) => {
      const { path, parent } = current;

      const isAParent = path
        .replace(/^\//, '')
        .replace(/\/$/, '')
        .split('/')
        .length === 2;

      if (isAParent) {
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
            <NavItem key={ page.path } path={ page.path } title={ page.title }/>
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

export default function SideNav(props) {
  const { docPages } = config;
  const childPages = docPages
    .map((p) => {
      const page = find(props.route.pages, (_p) => _p.path === p);
      return {
        title: page.data.title,
        path: page.path
      };
    })
    .filter(page => !(/^\/docs\/$/).test(page.path));

  const tree = buildMenuTree(childPages);
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
