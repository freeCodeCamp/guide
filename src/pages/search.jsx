import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import NoResults from '../pageComponents/search/NoResults.jsx';
import Results from '../pageComponents/search/Results.jsx';
import ResultsSkeleton from '../pageComponents/search/ResultsSkeleton.jsx';

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

function mapDispatchToProps() {
  return {};
}

class SearchPage extends PureComponent {
  constructor(props) {
    super(props);
    this.shouldShowResults = this.shouldShowResults.bind(this);
  }

  shouldShowResults() {
    const { lastPage, results, searchTerm } = this.props;
    return results.length ?
      <Results /> :
      <NoResults page={ lastPage } searchTerm={ searchTerm } />;
  }

  render() {
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
