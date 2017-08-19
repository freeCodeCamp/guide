import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import {
  fetchSearchResults,
  fetchTypeAheads,
  updateSearchResults,
  updateSearchTerm
} from './redux';

import Results from './components/Results.jsx';
import TypeAhead from './components/TypeAhead.jsx';

import {
  form,
  formGroup,
  input,
  searchButton
} from './SearchBar.module.css';

const propTypes = {
  fetchSearchResults: PropTypes.func.isRequired,
  fetchTypeAheads: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
  typeAheads: PropTypes.arrayOf(PropTypes.string),
  updateSearchResults: PropTypes.func.isRequired,
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
    fetchTypeAheads,
    updateSearchResults,
    updateSearchTerm
  }, dispatch);
}

class FCCSearchBar extends PureComponent {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      fetchTypeAheads,
      typeAheads
    } = this.props;
    if (!typeAheads.length) {
      fetchTypeAheads();
    }
  }

  handleChange(e) {
    e.preventDefault();
    const {
      results,
      updateSearchResults,
      updateSearchTerm
    } = this.props;
    const { value } = e.target;
    if (results.length) {
      updateSearchResults([]);
    }
    updateSearchTerm(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fetchSearchResults } = this.props;
    fetchSearchResults();
  }

  render() {
    const {
      searchTerm
    } = this.props;
    return (
      <div>
        <form className={ form } onSubmit={ this.handleSubmit }>
          <Navbar.Form>
            <FormGroup className={ formGroup }>
              <FormControl
                className={ input }
                onChange={ this.handleChange }
                placeholder='What would you like to know?'
                type='text'
                value={ searchTerm }
              />
              <Button className={ searchButton } type='submit'>Search</Button>
            </FormGroup>
          </Navbar.Form>
        </form>
        <Results />
        <TypeAhead />
      </div>
    );
  }
}

FCCSearchBar.displayName = 'FCCSearchBar';
FCCSearchBar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(FCCSearchBar);
