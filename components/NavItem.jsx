import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const propTypes = {
  path: PropTypes.string,
  router: PropTypes.object,
  title: PropTypes.string
};

class NavItem extends React.PureComponent {
  constructor(...props) {
    super(...props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const { path } = this.props;
    this.props.router.push(path);
  }

  render() {
    const { title } = this.props;
    return (
      <li onClick={ this.handleClick }role='presentation'>
        <a role='presentation'>
          <span>{ title }</span>
        </a>
      </li>
    );
  }
}

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default withRouter(NavItem);
