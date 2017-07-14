import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Link from 'gatsby-link';

const propTypes = {
  path: PropTypes.string,
  router: PropTypes.object,
  title: PropTypes.string
};

function NavItem(props) {
  const { path, title } = props;
  return (
    <li role='presentation'>
      <Link role='presentation' to={ path }>
        <span>{ title }</span>
      </Link>
    </li>
  );
}

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default withRouter(NavItem);
