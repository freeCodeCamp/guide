/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Breadcrumbs from '../templateComponents/Breadcrumbs';

import titleify from '../../utils/titleify';
import Layout from '../components/Layout';

const propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
};

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.getOgDescription = this.getOgDescription.bind(this);
    this.getOgImage = this.getOgImage.bind(this);
    this.getOgTitle = this.getOgTitle.bind(this);
  }
  componentDidMount() {
    if (document.activeElement.hasAttribute('data-navitem')) {
      this.article.focus();
    }
  }
  getOgTitle(pathname) {
    const pathMap = pathname
      // remove leading and trailing slash
      .replace(/^\/([a-z0-9/-]+[^/])\/?$/i, '$1')
      .split('/');
    let metaTitle = '';
    pathMap.forEach((title, i) => {
      if (i === pathMap.length - 1) {
        metaTitle += titleify(title);
      } else {
        metaTitle += titleify(title + ' | ');
      }
    });
    return metaTitle;
  }

  getOgDescription(html) {
    let description = '';
    const rex = /<p>(.*?)<\/p>/g;
    description = rex.exec(html);
    if (description !== null) {
      return description[1].replace(/<[^>]*>/i, '');
    } else {
      return 'FreeCodeCamp Guide';
    }
  }

  getOgImage(html) {
    let image;
    const rex = /<img [^>]*src=["|']([^"|']+)/i;
    image = rex.exec(html);
    if (
      image !== null &&
      image[1].match('^//forum.freecodecamp.com/images/emoji') === null
    ) {
      return image[1];
    } else {
      return (
        'https://s3.amazonaws.com/freecodecamp/' +
        'freecodecamp-square-logo-large.jpg'
      );
    }
  }

  render() {
    const article = this.props.data.markdownRemark;
    const { pathname } = this.props.location;
    const {
      html,
      fields: { slug },
      frontmatter: { title }
    } = article;
    return (
      <Layout>
        <Helmet>
          <title>{`${title} | freeCodeCamp Guide`}</title>
          <link
            href={`https://guide.freecodecamp.org${slug}`}
            rel='canonical'
          />
          <meta
            content={`https://guide.freecodecamp.org${slug}`}
            property='og:url'
          />
          <meta content={`${this.getOgTitle(pathname)}`} property='og:title' />
          <meta
            content={`${this.getOgDescription(html)}`}
            property='og:description'
          />
          <meta content={`${this.getOgImage(html)}`} property='og:image' />
        </Helmet>
        <Breadcrumbs path={pathname} />
        <article
          className='article'
          dangerouslySetInnerHTML={{ __html: html }}
          id='article'
          ref={article => {
            this.article = article;
          }}
          tabIndex='-1'
        />
      </Layout>
    );
  }
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export default Article;

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
