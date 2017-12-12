/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Breadcrumbs from '../templateComponents/Breadcrumbs.jsx';

import titleify from '../../utils/titleify';

const propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
};

function getOgTitle(pathname) {
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

function getOgDescription(html) {
  let description = '';
  const rex = /<p>(.*?)<\/p>/g;
  description = rex.exec( html );
  if (description !== null) {
    return description[1].replace(/<[^>]*>/i, '');
  } else {
    return 'FreeCodeCamp Guide';
  }
}

function getOgImage(html) {
  let image;
  const rex = /<img [^>]*src=["|\']([^"|\']+)/i;
  image = rex.exec( html );
  if (image !== null &&
    (image[1].match('^//forum.freecodecamp.com/images/emoji') === null)) {
    return image[1];
  } else {
    return 'https://s3.amazonaws.com/freecodecamp/' +
    'freecodecamp-square-logo-large.jpg';
  }
}

function Article(props) {
  const article = props.data.markdownRemark;
  const { pathname } = props.location;
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
        <meta
          content={ `https://guide.freecodecamp.org${slug}` }
          property='og:url'
        />
        <meta
          content={ `${getOgTitle(pathname)}` }
          property='og:title'
        />
        <meta
          content={ `${getOgDescription(html)}` }
          property='og:description'
        />
        <meta
          content={ `${getOgImage(html)}` }
          property='og:image'
        />
      </Helmet>
      <Breadcrumbs path={ pathname } />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
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
