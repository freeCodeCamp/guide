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
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleClick() {
    const { path } = this.props;
    this.context.router.history.push(path);
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
        onClick={ this.handleClick }
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
