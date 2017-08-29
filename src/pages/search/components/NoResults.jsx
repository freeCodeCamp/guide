import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Link from 'gatsby-link';

function NoResults(props) {
  const { page = '/articles', searchTerm = '' } = props;
  const helperHeader = searchTerm.length ?
    'We couldn\'t find what you were looking for' :
    'It looks like you are not searching for anything';
  return (
    <div className='flexWrapper'>
      <div className='verticalAlign'>
        <h3>{ helperHeader }</h3>
        <p>Trying searching for something, or</p>
        <Link to={ page }>
          <Button
            bsSize='large'
            className='button'
            >
            Return to the previous page
          </Button>
        </Link>
      </div>
    </div>
  );
}

NoResults.displayName = 'NoResults';
NoResults.propTypes = {
  page: PropTypes.string,
  searchTerm: PropTypes.string
};

export default NoResults;
