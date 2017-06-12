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
  handleTopicChange(e) {
    return this.context.router.push(e.target.value);
  },
  renderDrillDown(pages, location) {
    const { parents } = pages;
    return Object.keys(pages)
      .filter(key => key !== 'parents')
      .map(parent => {
        if (!parent) {
          return null;
        }
        const parentRE = new RegExp(parent, 'i');
        const parentObj = parents.find(el => parentRE.test(el.path));
        return (
          <DrillDownMenu
            children={ pages[parent] }
            key={ parent }
            location={ location }
            parent={ Object.assign({}, parentObj) }
          />
          );
      });
  },

  render() {
    const childPages = config.docPages.map((p) => {
      const page = find(this.props.route.pages, (_p) => _p.path === p);
      return {
        title: page.data.title,
        parent: page.data.parent,
        path: page.path
      };
    });
    const docOptions = childPages.map((child) => (
      <option
        key={prefixLink(child.path)}
        value={prefixLink(child.path)}
        >
        { child.title }
      </option>
      )
    );

    const pagesForDrillDown = childPages
      .reduce((acc, current) => {
        const { parent } = current;
        if (!parent) {
          const existingParents = acc.parents ? acc.parents.slice(0) : [];
          acc.parents = [ ...existingParents, current ];
          return acc;
        }
        const existingPages = acc[parent] ? acc[parent].slice(0) : [];
        acc[parent] = [ ...existingPages, current ];
        return acc;
      }, {});

    return (
      <div>
        <Breakpoint
          mobile={ true }
          >
          <div
            style={{
              overflowY: 'auto',
              paddingRight: `calc(${rhythm(1 / 2)} - 1px)`,
              position: 'absolute',
              width: `calc(${rhythm(8)} - 1px)`,
              borderRight: '1px solid lightgrey'
            }}
            >
            {
              this.renderDrillDown(
                pagesForDrillDown,
                this.props.location.pathname
                )
            }
          </div>
          <div
            style={{
              padding: `0 ${rhythm(1)}`,
              paddingLeft: `calc(${rhythm(8)} + ${rhythm(1)})`
            }}
            >
            { this.props.children }
          </div>
        </Breakpoint>
        <Breakpoint>
          <strong>Topics:</strong>
          {' '}
          <select
            defaultValue={this.props.location.pathname}
            onChange={this.handleTopicChange}
            >
            { docOptions }
          </select>
          <br />
          <br />
          { this.props.children }
        </Breakpoint>
      </div>
    );
  }
});
