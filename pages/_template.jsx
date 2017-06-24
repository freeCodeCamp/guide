import React from 'react';
import { Link } from 'react-router';
import { Container, Grid, Span } from 'react-responsive-grid';
import { prefixLink } from 'gatsby-helpers';
import { colors } from 'utils/colors';
import find from 'lodash/find';

import typography from 'utils/typography';
import { config } from 'config';

import DrillDownMenu from '../components/DrillDownMenu.jsx';
import TopNavBar from '../components/TopNavBar.jsx';

// Import styles.
import 'bootstrap/dist/css/bootstrap.css';
import 'css/main.css';
import 'css/github.css';

const { rhythm, adjustFontSizeTo } = typography;

module.exports = React.createClass({
  getInitialState(){
    return { isOpened: false }
  },
  propTypes() {
    return {
      children: React.PropTypes.object
    };
  },
  handleClick() {
    this.setState({ isOpened: !this.state.isOpened })
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
  handleTopicChange(e) {
    return this.context.router.push(e.target.value);
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
        <TopNavBar handleClick={ this.handleClick }/>
        {/* <SideNavBar menuExpanded />*/}
        <div className="col-sm-3 col-md-3 col-lg-3 no-padding-left" id="navbar-side-container">
          <nav className={"navbar navbar-side" + (this.state.isOpened ? ' slide-in' : '') } id="navbar-side">
            <div className="container-fluid no-padding-left no-padding-right">
              <div id="navbar">
                {
                  this.renderDrillDown(
                    pagesForDrillDown,
                    this.props.location.pathname
                  )
                }
              </div>
            </div>
          </nav>
        </div>
        {/* <Content menuExpanded />*/}
        <div className="col-sm-9 col-md-9 col-lg-9" id="content-container">
          <div className={"content" + (this.state.isOpened ? ' slide-out' : '') } id="content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
});