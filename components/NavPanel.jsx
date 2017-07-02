import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const propTypes = {
  children: PropTypes.any,
  path: PropTypes.string,
  title: PropTypes.string
};

class NavPanel extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      expanded: false
    };

    this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { title } = this.props;
    const { expanded } = this.state;
    return (
      <Panel
        collapsible={ true }
        expanded={ expanded }
        header={ title }
        onSelect={ this.handleSelect }
        >
        { expanded ? this.props.children : null }
      </Panel>
    );
  }
}

NavPanel.contextTypes = {
    router: React.PropTypes.object.isRequired
};
NavPanel.displayName = 'NavPanel';
NavPanel.propTypes = propTypes;

export default NavPanel;
