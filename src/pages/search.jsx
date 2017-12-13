import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';

import NoResults from '../pageComponents/search/NoResults.jsx';
import NoSupport from '../pageComponents/search/NoSupport.jsx';
import Results from '../pageComponents/search/Results.jsx';
import ResultsSkeleton from '../pageComponents/search/ResultsSkeleton.jsx';

import {
  resetSearch
} from '../LayoutComponents/search/redux';

const propTypes = {
  isSearching: PropTypes.bool,
  lastPage: PropTypes.string,
  resetSearch: PropTypes.func.isRequired,
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

class SearchPage extends PureComponent {
  constructor() {
    super();
  }

  componentWillUnmount() {
    const { resetSearch } = this.props;
    resetSearch();
  }

  shouldShowResults() {
    const { lastPage, results, searchTerm } = this.props;
    return results.length ?
      <Results /> :
      <NoResults page={ lastPage } searchTerm={ searchTerm } />;
  }

  render() {
    if (
      typeof window !== 'undefined' &&
      !('Promise' in window)
    ) {
      return <NoSupport />;
    }
    const { isSearching, results } = this.props;
    return (
      <div>
        <Helmet>
          <title>Search | freeCodeCamp Guide</title>
        </Helmet>
        <h2 className='colourDarkGrey'>Search Results</h2>
        {
          (isSearching && !results.length) ?
            <ResultsSkeleton /> :
            this.shouldShowResults()
        }
      </div>
    );
  }
}

SearchPage.displayName = 'SearchPage';
SearchPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
