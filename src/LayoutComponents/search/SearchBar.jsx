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
  updateIsSearching: PropTypes.func.isRequired,
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
  constructor(props) {
    super(props);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  handleSearchTerm(searchTerm) {
    const {
      updateLastPage,
      updateSearchTerm
    } = this.props;
    updateSearchTerm(searchTerm);
    const { push } = this.context.router.history;
    const { pathname } = this.context.router.history.location;
    if (pathname !== '/search' && searchTerm.length > 2) {
      updateLastPage(pathname);
      push('/search');
    }
  }

  render() {
    const { updateIsSearching, updateSearchResults } = this.props;
    return (
      <FCCSearchBar
        handleResults={updateSearchResults}
        handleSearchingStatus={updateIsSearching}
        handleSearchTerm={this.handleSearchTerm}
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
