import React from 'react';
import Breakpoint from 'components/Breakpoint';
import find from 'lodash/find';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import typography from 'utils/typography';

import DrillDownMenu from '../../components/DrillDownMenu.jsx';

const { rhythm } = typography;

module.exports = React.createClass({
  propTypes() {
    return {
      route: React.PropTypes.object
    };
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render() {
    return (
        this.props.children 
    );
  }
});
