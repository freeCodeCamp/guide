const { createNavigationNode } = require('./create-navigation-node');

exports.onCreateNode = ({ boundActionCreators, node }) => {
  if (node.internal.type === 'MarkdownRemark') {
    if (node.fileAbsolutePath.includes('LICENSE.md')) {
      return null;
    }
  const { createNode } = boundActionCreators;
  return Promise.resolve(createNavigationNode(node)).then(createNode);
  }
  return null;
};
