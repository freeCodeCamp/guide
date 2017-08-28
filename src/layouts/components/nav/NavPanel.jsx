import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleExpandedState } from './redux';

import {
  body,
  caret,
  expanded,
  navPanelUl,
  panel,
  title as titleStyle
} from '../../../css/SideNav.module.css';

const propTypes = {
  categoryChildren: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
  handleClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  const { path } = ownProps;
  const isExpanded = state.nav.expandedState[path];
  const category = state.nav.pages.filter(page => page.path === path)[0];
  const { title, children: categoryChildren } = category;

  return {
    categoryChildren,
    isExpanded,
    title
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    handleClick: bindActionCreators(toggleExpandedState, dispatch)
  };
  return dispatchers;
}

function NoArticles() {
  return (
    <li>
      <span>
        No articles yet.
        <br />
        Could you&nbsp;
        <a
          href={
            'https://github.com/freeCodeCamp/guides/blob/master/README.md' +
            '#freecodecamp-guides'
          }
          rel='nofollow'
          target='_blank'
          >
          write one?
        </a>
      </span>
    </li>
  );
}

class NavPanel extends PureComponent {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  handleHeaderClick() {
    const { push } = this.context.router.history;
    const { path, handleClick } = this.props;
    handleClick(path);
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

  renderBody() {
    const { categoryChildren, children, isExpanded } = this.props;
    return (
        <div className={ isExpanded ? body : '' }>
          <ul className={ navPanelUl }>
            { categoryChildren.length ? children : <NoArticles /> }
          </ul>
        </div>
      );
  }

  render() {
    const { isExpanded, title } = this.props;
    return (
      <Panel
        bsClass={ `${panel} panel` }
        collapsible={ true }
        expanded={ isExpanded }
        header={ this.renderHeader(isExpanded, title) }
        >
        {
          isExpanded ? this.renderBody() : null
        }
      </Panel>
    );
  }
}

NavPanel.contextTypes = {
  router: PropTypes.object
};
NavPanel.displayName = 'NavPanel';
NavPanel.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);
