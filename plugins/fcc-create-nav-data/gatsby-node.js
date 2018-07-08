const { createNavigationNode } = require('./create-navigation-node');

exports.onCreateNode = ({ actions, node }) => {
  if (node.internal.type === 'MarkdownRemark') {
    if (node.fileAbsolutePath.includes('LICENSE.md')) {
      return null;
    }
    const { createNode } = actions;
    return Promise.resolve(createNavigationNode(node)).then(createNode);
  }
  return null;
};
