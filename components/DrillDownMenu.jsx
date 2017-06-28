import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import typography from 'utils/typography';

import DrillDownItem from './DrillDownItem.jsx';
import Caret from './Caret.jsx';

const { rhythm } = typography;

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.string,
  parent: PropTypes.object
};

class DrillDownMenu extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };

    this.renderChildren = this.renderChildren.bind(this);
    this.handleCaretClick = this.handleCaretClick.bind(this);
  }
  renderChildren(children) {
    return children
      .map(child => (
      <DrillDownItem
        item={ child }
        key={ child.title }
        location={ this.props.location }
      />
      ));
  }

  handleCaretClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { parent, children } = this.props;
    const { isOpen } = this.state;
    if (!parent || !children) {
      return null;
    }
    const isActive = prefixLink(parent.path) === this.props.location;
    const formattedTitle = parent.title
      .slice(0)
      .replace(/^intro.*?:\s/i, '');
    return (
      <ul className="nav">
        <li key={ parent.path } className="dropdown">
          <a onClick={ this.handleCaretClick }>
            {formattedTitle} <span className="caret" />
          </a>
        </li>
        { isOpen ? this.renderChildren(children) : null }
      </ul>
    );
  }
}

DrillDownMenu.displayName = 'DrillDownMenu';
DrillDownMenu.propTypes = propTypes;

export default DrillDownMenu;
