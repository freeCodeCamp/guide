import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import typography from 'utils/typography';

const { rhythm } = typography;

const propTypes = {
  item: PropTypes.object,
  location: PropTypes.string
};

function DrillDownItem(props) {
  const { item, location } = props;
  const isActive = prefixLink(item.path) === location;

  return (
    <li
      key={ item.path }
      style={{
        marginBottom: rhythm(1 / 2),
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
      }}
      >
      <Link
        style={{
          textDecoration: 'none'
        }}
        to={ prefixLink(item.path) }
        >
        { isActive ? <strong>{item.title}</strong> : item.title }
      </Link>
    </li>
  );
}


DrillDownItem.propTypes = propTypes;
DrillDownItem.displayName = 'DrillDownItem';

export default DrillDownItem;
