/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import cheerio from 'cheerio';

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
  const $ = cheerio.load(html);
  const description = $('p').first().text();
  return description || '';
}

function getOgImage(html) {
  const $ = cheerio.load(html);
  const image = $('img').first().attr('src');
  return image ||
    'https://raw.githubusercontent.com/' +
    'freeCodeCamp/guides/master/assets/' +
    'FCC-banner.png';
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
