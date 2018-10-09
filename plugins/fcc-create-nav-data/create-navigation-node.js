const crypto = require('crypto');
const { commonREs, readDir, pagesDir } = require('../../utils/');

const { isAStubRE } = commonREs;

exports.createNavigationNode = node => {
  const {
    fileAbsolutePath,
    frontmatter: { title },
    internal: { content },
    parent
  } = node;

  const nodeDir = fileAbsolutePath.replace(/\/index\.md$/, '');
  const dashedName = nodeDir.split('/').slice(-1)[0];
  const [, path] = nodeDir.split(pagesDir);
  const parentPath = path
    .split('/')
    .slice(0, -1)
    .join('/');

  const categoryChildren = readDir(nodeDir);
  const navNode = {
    categoryChildren,
    hasChildren: !!categoryChildren.length,
    dashedName,
    isStubbed: isAStubRE.test(content),
    path,
    parentPath,
    title
  };

  const gatsbyRequired = {
    id: fileAbsolutePath + ' >>> NavigationNode',
    parent,
    children: [],
    internal: {
      type: 'NavigationNode',
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(navNode))
        .digest('hex')
    }
  };

  return { ...navNode, ...gatsbyRequired };
};
