import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';

import {
  body,
  caret,
  expanded,
  navPanelUl,
  panel,
  title as titleStyle
} from './sideNav.module.css';

const propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string
};


class NavPanel extends PureComponent {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick() {
    const { push } = this.context.router.history;
    const { path } = this.props;
    this.props.handleClick(path);
    push(path);
  }

  renderHeader(isExpanded, title) {
    return (
      <div className={ titleStyle } onClick={ this.handleHeaderClick }>
        <span
          className={
            'caret ' +
            (
              isExpanded ?
              `${caret} ${expanded}` :
              caret
            )
          }
        />
        <span>
          { title }
        </span>
      </div>
    );
  }

  render() {
    const { children, isExpanded, title } = this.props;
    return (
      <Panel
        bsClass={ `${panel} panel` }
        collapsible={ true }
        expanded={ isExpanded }
        header={ this.renderHeader(isExpanded, title) }
        >
        <div className={ isExpanded ? body : '' }>
          <ul className={ navPanelUl }>
            { children }
          </ul>
        </div>
      </Panel>
    );
  }
}
NavPanel.contextTypes = {
  router: PropTypes.object
};
NavPanel.displayName = 'NavPanel';
NavPanel.propTypes = propTypes;

export default NavPanel;
