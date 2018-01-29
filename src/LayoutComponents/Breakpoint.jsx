import React from 'react';
import PropTypes from 'prop-types';
import { layoutGenerator } from 'react-break';

const propTypes = {
  render: PropTypes.func.isRequired
};

const layout = layoutGenerator({
  tablet: 768,
  desktop: 992
});

const TabletAndBelow = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');

function Breakpoint(props) {
  return (
    <div>
      { props.render({ TabletAndBelow, OnDesktop }) }
    </div>
  );
}

Breakpoint.displayName = 'Breakpoint';
Breakpoint.propTypes = propTypes;

export default Breakpoint;
