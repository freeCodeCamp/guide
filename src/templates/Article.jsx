/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Breadcrumbs from '../templateComponents/Breadcrumbs.jsx';

const propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
};

class Article extends React.Component {
  componentDidMount() {
    if (document.activeElement.hasAttribute('data-navitem')) {
      this.article.focus();
    }
  }

  render() {
    const article = this.props.data.markdownRemark;
    const { pathname } = this.props.location;
    const {
      html,
      fields: {
        slug
      },
      frontmatter: {
        title
      }
    } = article;
    return (
      <div>
        <Helmet>
          <title>{ `${title} | freeCodeCamp Guide` }</title>
          <link
            href={ `https://guide.freecodecamp.org${slug}` }
            rel='canonical'
          />
        </Helmet>
        <Breadcrumbs path={ pathname } />
        <article
          className='article'
          dangerouslySetInnerHTML={{ __html: html }}
          id='article'
          ref={(article) => { this.article = article; }}
          tabIndex='-1'
        />
      </div>
    );
  }
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export default Article;

export const pageQuery = graphql`
query ArticleBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
}
`;
