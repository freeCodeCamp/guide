import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NoResults from './components/NoResults.jsx';
import Results from './components/Results.jsx';
import ResultsSkeleton from './components/ResultsSkeleton.jsx';

import {
  resetSearch
} from '../../layouts/components/search/redux';

const propTypes = {
  isSearching: PropTypes.bool,
  lastPage: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string
};

function mapStateToProps(state) {
  return {
    isSearching: state.search.isSearching,
    lastPage: state.search.lastPage,
    results: state.search.results,
    searchTerm: state.search.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetSearch
  }, dispatch);
}

function shouldShowResults(conditions) {
  const { lastPage, results, searchTerm } = conditions;
  return results.length ?
    <Results /> :
    <NoResults page={ lastPage } searchTerm={ searchTerm } />;
}

function SearchPage(props) {
  const { isSearching, lastPage, results, searchTerm } = props;
  return (
    <div>
      <h2 className='colourDarkGrey'>Search Results</h2>
      {
        isSearching ?
          <ResultsSkeleton /> :
          shouldShowResults({ results, lastPage, searchTerm })
      }
    </div>
  );
}

SearchPage.displayName = 'SearchPage';
SearchPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
