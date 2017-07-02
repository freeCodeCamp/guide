import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  path: PropTypes.string,
  router: PropTypes.object,
  title: PropTypes.string
};

class NavItem extends React.PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    const { path } = this.props;
    this.context.router.push(path);
  }

  render() {
    const { path, title } = this.props;
    return (
      <li onClick={ this.handleClick }role='presentation'>
        <a href={ path }>
          <span>{ title }</span>
        </a>
      </li>
    );
  }
}

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;
NavItem.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NavItem;
