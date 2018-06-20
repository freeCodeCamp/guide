import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';

const propTypes = {
  categoryChildren: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
  dashedName: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string,
  toggleDisplaySideNav: PropTypes.func.isRequired
};

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
            '#freecodecamp-guide'
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

  renderHeader() {
    const { isExpanded, title } = this.props;
    return (
      <div className='title' onClick={ this.handleHeaderClick }>
        <span
          className={
            'caret ' +
            ( isExpanded ? 'caretStyle expanded' : 'caretStyle' )
          }
        />
        <span onClick={this.props.toggleDisplaySideNav}>
          { title }
        </span>
      </div>
    );
  }

  renderBody() {
    const { categoryChildren, children, isExpanded } = this.props;
    const childrenWithChildren = children.filter(child => child.props.children);
    const uniqueChildren = childrenWithChildren
      .concat(
        children
          .filter(
            child => !childrenWithChildren.some(x => x.key === child.key))
          );
    return (
        <div className={ isExpanded ? 'body' : '' }>
          <ul className='navPanelUl'>
            { categoryChildren.length ? uniqueChildren : <NoArticles /> }
          </ul>
        </div>
      );
  }

  render() {
    const { isExpanded, dashedName } = this.props;
    return (
      <Panel
        bsClass='panelStyle panel'
        collapsible={ true }
        expanded={ isExpanded }
        header={ this.renderHeader() }
        id={ `${dashedName}-panel` }
        role='listitem'
        >
        {
          ( isExpanded ? this.renderBody() : null )
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

export default NavPanel;
