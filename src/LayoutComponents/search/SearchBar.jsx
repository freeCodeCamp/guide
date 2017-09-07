import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormControl from 'react-bootstrap/lib/FormControl';
import Navbar from 'react-bootstrap/lib/Navbar';

import {
  fetchSearchResults,
  updateLastPage,
  updateSearchResults,
  updateSearchTerm
} from './redux';

const propTypes = {
  fetchSearchResults: PropTypes.func.isRequired,
  isOnline: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
  updateLastPage: PropTypes.func.isRequired,
  updateSearchResults: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isOnline: state.app.isOnline,
    results: state.search.results,
    searchTerm: state.search.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSearchResults,
    updateLastPage,
    updateSearchResults,
    updateSearchTerm
  }, dispatch);
}

class SearchBar extends PureComponent {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSearchBar = this.renderSearchBar.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const {
      updateLastPage,
      updateSearchResults,
      updateSearchTerm
    } = this.props;
    const { push } = this.context.router.history;
    const { pathname } = this.context.router.history.location;
    const { value } = e.target;

    if (pathname !== '/search' && value.length > 2) {
      updateLastPage(pathname);
      push('/search');
    }
    if (value.length <= 2) {
      updateSearchResults([]);
    }
    updateSearchTerm(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fetchSearchResults } = this.props;
    fetchSearchResults();
  }

  renderSearchBar() {
    const { isOnline, searchTerm } = this.props;
    return isOnline ?
      <FormControl
        className='input'
        disabled={ false }
        onChange={ this.handleChange }
        placeholder='&#xf002; What would you like to know?'
        type='text'
        value={ searchTerm }
      /> :
      <FormControl
        className='input'
        disabled={ true }
        onChange={ this.handleChange }
        placeholder='&#xf002; It looks like you are currently offline'
        type='text'
        value={ searchTerm }
      />;
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <Navbar.Form className='formContainer'>
            { this.renderSearchBar() }
          </Navbar.Form>
        </form>
      </div>
    );
  }
}

SearchBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};
SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
