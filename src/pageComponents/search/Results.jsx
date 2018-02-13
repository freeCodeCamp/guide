import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import Media from 'react-bootstrap/lib/Media';
import FontAwesome from 'react-fontawesome';
import Breadcrumbs from '../../templateComponents/Breadcrumbs.jsx';

const isGuidesUrl = /^https?:\/\/guide\.freecodecamp\.org/i;

const faNames = {
  challenge: 'free-code-camp',
  guides: 'file-text',
  youtube: 'youtube-play'
};

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}

function mapDispatchToProps() {
  return {};
}

function truncate(str) {
  return str.replace('\n', '').slice(0, 150) + '...';
}

function MediaWrapper(props) {
  const { url } = props;
  return isGuidesUrl.test(url) ?
  <Link className='colourDarkGrey' to={ url.replace(isGuidesUrl, '') }>
    { props.children }
  </Link> :
    <a
      className='colourDarkGrey'
      href={ url }
      target='_blank'
      >
      { props.children }
    </a>;
}

MediaWrapper.displayName = 'MediaWrapper';
MediaWrapper.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string.isRequired
};

class Results extends PureComponent {
  constructor() {
    super();
    this.renderResultItems = this.renderResultItems.bind(this);
  }

  renderResultItems() {
    const { results } = this.props;
    return results.map((result, i) => {
      const {
        _index,
        _source: {
          title,
          url,
          friendlySearchString = ''
        }
      } = result;
      const description = truncate(friendlySearchString);
      return (
        <MediaWrapper key={i} url={url}>
          <Media>
            <Media.Left align='middle'>
              <FontAwesome
                className='resultIcon'
                name={faNames[_index] ? faNames[_index] : ''}
                size='3x'
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{title}</Media.Heading>
              {_index === 'guides' && <Breadcrumbs path={url} />}
              <p>{description}</p>
            </Media.Body>
          </Media>
        </MediaWrapper>
      );
    });
  }

  render() {
    const { results = [] } = this.props;
    return (
      <div>
        {results.length &&
          <div className='searchResults'>
            { this.renderResultItems() }
          </div>
        }
        <div
          aria-atomic='true'
          aria-live='polite'
          className='sr-only'
          role='status'
          >
            {`${results.length} result${results.length === 1 ? '' : 's'} found`}
        </div>
      </div>
    );
  }
}

Results.displayName = 'Results';
Results.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Results);
