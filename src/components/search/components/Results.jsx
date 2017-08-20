import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  colourGreen,
  resultIcon,
  searchResults
} from '../SearchBar.module.css';

import {
  updateSearchResults,
  updateSearchTerm
} from '../redux';

const httpRE = /^https?/i;

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  updateSearchResults: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateSearchResults,
    updateSearchTerm
  }, dispatch);
}

const faNames = {
  challenge: 'free-code-camp',
  guides: 'file-text',
  youtube: 'youtube-play'
};

function FAIcon({ name }) {
  return (
  <FontAwesome
    className={ resultIcon }
    name={ faNames[name] ? faNames[name] : 'free-code-camp' }
  />
  );
}

FAIcon.displayName = 'FontAwesomeIcon';
FAIcon.propTypes = {
  name: PropTypes.string.isRequired
};

class Results extends PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  handleClick() {
    const { updateSearchResults, updateSearchTerm } = this.props;
    updateSearchResults([]);
    updateSearchTerm('');
  }

  renderListItems() {
    const { results } = this.props;
    return results.map((result, i) => {
      const { _index, _source: { title, url } } = result;
      return (
        <li key={ i }>
          <h4 onClick={ this.handleClick }>
            <FAIcon name={ _index } />
            {
              httpRE.test(url) ?
              <a
                className={ colourGreen }
                href={ url }
                target='_blank'
                >
                { title }
              </a> :
              <Link className={ colourGreen } to={ url }>{ title }</Link>
            }
          </h4>
        </li>
      );
    });
  }
  render() {
    const { results = [] } = this.props;
    if (!results.length) {
      return null;
    }
    return (
      <ul className={ `${searchResults} dropdown-menu` }>
        { this.renderListItems() }
      </ul>
    );
  }
}

Results.displayName = 'Results';
Results.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Results);
