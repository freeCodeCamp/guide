/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function Article(props) {
  const article = props.data.markdownRemark;
  return (
    <div dangerouslySetInnerHTML={{ __html: article.html }} />
  );
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export default Article;

export const pageQuery = graphql`
query ArticleBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
      parent
    }
  }
}
`;
