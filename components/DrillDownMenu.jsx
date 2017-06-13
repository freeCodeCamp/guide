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
      <ul
        style={{
          listStyle: 'none',
          marginLeft: 0,
          marginTop: rhythm(1 / 2)
        }}
        >
        <li
          key={ parent.path }
          style={{
            marginBottom: rhythm(1 / 2),
            listStyle: 'none',
            border: '1px solid #006400',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          >
          <Link
            style={{
              textDecoration: 'none'
            }}
            to={ prefixLink(parent.path) }
            >
            { isActive ? <strong>{formattedTitle}</strong> : formattedTitle }
          </Link>
          <span
            onClick={ this.handleCaretClick }
            style={{
              height: '18px',
              width: '18px'
            }}
            >
            <Caret />
          </span>
        </li>
        { isOpen ? this.renderChildren(children) : null }
      </ul>
    );
  }
}

DrillDownMenu.displayName = 'DrillDownMenu';
DrillDownMenu.propTypes = propTypes;

export default DrillDownMenu;
