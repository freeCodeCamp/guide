const path = require('path');
const select = require('unist-util-select');
const { head } = require('lodash');

const { isAStubRE } = require('./utils').commonREs;

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    let slug;
    const fileNode = getNode(node.parent);
    const { dir, name } = path.parse(fileNode.relativePath);
    if (name !== 'index' && dir !== '') {
      slug = `/${dir}/${name}/`;
    } else if (dir === '') {
      slug = `/${name}/`;
    } else {
      slug = `/${dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const Article = path.resolve('src/templates/Article.js');
    // Query for all markdown 'nodes' and for the slug we previously created.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  htmlAst
                  id
                  excerpt
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create article pages.
        result.data.allMarkdownRemark.edges.forEach(
          ({
            node: {
              htmlAst,
              excerpt,
              fields: { slug },
              id
            }
          }) => {
            let meta = {};

            if (!isAStubRE.test(excerpt)) {
              const featureImage = head(
                select(htmlAst, 'element[tagName=img]')
              );
              meta.featureImage = featureImage
                ? featureImage.properties.src
                : 'https://s3.amazonaws.com/freecodecamp' +
                  '/reecodecamp-square-logo-large.jpg';

              const description = head(select(htmlAst, 'element[tagName=p]'));
              meta.description = description
                ? description.children[0].value
                : '';
            }

            createPage({
              path: slug,
              component: Article,
              context: {
                id,
                meta
              }
            });
          }
        );

        return;
      })
    );
  });
};
