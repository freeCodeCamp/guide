import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FCCSearchBar from 'react-freecodecamp-search';
import {
  updateIsSearching,
  updateLastPage,
  updateSearchResults,
  updateSearchTerm
} from './redux';

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
  updateLastPage: PropTypes.func.isRequired,
  updateSearchResults: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    results: state.search.results,
    searchTerm: state.search.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateIsSearching,
    updateLastPage,
    updateSearchResults,
    updateSearchTerm
  }, dispatch);
}

class SearchBar extends PureComponent {
  constructor() {
    super();
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(results) {
    const {
      searchTerm,
      updateLastPage,
      updateSearchResults
    } = this.props;
    const { push } = this.context.router.history;
    const { pathname } = this.context.router.history.location;

    if (pathname !== '/search' && searchTerm.length >= 2) {
      updateLastPage(pathname);
      push('/search');
    }
    updateSearchResults(results);
  }


  render() {
    const { updateSearchTerm } = this.props;
    return (
      <FCCSearchBar
        handleResults={this.handleResults}
        handleSearchingStatus={updateIsSearching}
        handleSearchTerm={updateSearchTerm}
      />
    );
  }
}

SearchBar.contextTypes = {
    router: PropTypes.object.isRequired
};
SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
