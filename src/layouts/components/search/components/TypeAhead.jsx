import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchSearchResults,
  updateSearchTerm
} from '../redux';
import {
  colourGreen,
  pointer,
  searchResults
} from '../SearchBar.module.css';

const propTypes = {
  fetchSearchResults: PropTypes.func.isRequired,
  results: PropTypes.array,
  searchTerm: PropTypes.string,
  typeAheads: PropTypes.arrayOf(PropTypes.string),
  updateSearchTerm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    results: state.search.results,
    searchTerm: state.search.searchTerm,
    typeAheads: state.search.typeAheads
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSearchResults,
    updateSearchTerm
  }, dispatch);
}

class TypeAhead extends PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  handleClick(e) {
    e.persist();
    e.preventDefault();
    const { updateSearchTerm, fetchSearchResults } = this.props;
    const { innerText } = e.target;
    updateSearchTerm(innerText);
    fetchSearchResults();
  }

  renderListItems(suggestions) {
  return suggestions.map((typeAhead, i) => {
    return (
      <li key={ i }>
        <h4
          className={ `${colourGreen} ${pointer}` }
          onClick={ this.handleClick }
          >
        { typeAhead }
        </h4>
      </li>
    );
  });
}

  render() {
    const { results, searchTerm = '', typeAheads = [] } = this.props;
    if (
        !typeAheads.length ||
        searchTerm.length < 2 ||
        results.length !== 0
      ) {
      return null;
    }
    const wildCardSearch = searchTerm
      .slice(0)
      .replace(' ', '')
      .split('')
      .join('.*?');
    const wildCardRE = new RegExp(wildCardSearch, 'i');
    const suggestions = typeAheads
      .filter(title => wildCardRE.test(title))
      .sort()
      .slice(0, 10);
    if (!suggestions.length) {
      return null;
    }

    return (
      <ul className={ `${searchResults} dropdown-menu` }>
        { this.renderListItems(suggestions) }
      </ul>
    );
  }
}

TypeAhead.displayName = 'TypeAhead';
TypeAhead.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TypeAhead);
