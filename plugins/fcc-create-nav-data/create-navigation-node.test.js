const path = require('path');
const { expect } = require('chai');

const { createNavigationNode } = require('./create-navigation-node');

describe('fcc-create-nav-data', () => {
  describe('create-vanigation-node', () => {
    const mockNode = {
      internal: {
        content:
          '---\ntitle: File Writing\n---\n## File Writing\n\nThis is a stub.' +
          " <a href='https://github.com/freecodecamp/guides/tree/master/src/" +
          "pages/php/functions/files/writing/index.md' target='_blank' " +
          "rel='nofollow'>Help our community expand it</a>.\n\n<a href=" +
          "'https://github.com/freecodecamp/guides/blob/master/README.md' " +
          "target='_blank' rel='nofollow'>This quick style guide will help " +
          'ensure your pull request gets accepted</a>.\n\n<!-- The article ' +
          'goes here, in GitHub-flavored Markdown. Feel free to add YouTube ' +
          'videos, images, and CodePen/JSBin embeds  -->\n\n#### More ' +
          'Information:\n<!-- Please add any articles you think might be ' +
          'helpful to read before writing the article -->\n'
      },
      frontmatter: {
        title: 'File Writing'
      },
      fileAbsolutePath: path.resolve(
        __dirname,
        '../../src/pages/php/functions/files/file-writing/index.md'
      )
    };

    it('should return an object', () => {
      const result = createNavigationNode(mockNode);
      expect(result).to.be.an('object');
    });

    it('node.children should be an array', () => {
      const result = createNavigationNode(mockNode);
      expect(result.categoryChildren).to.be.an('array');
    });

    it('node.dashedName should equal the containing folder name', () => {
      const result = createNavigationNode(mockNode);
      expect(result.dashedName).equal('file-writing');
    });

    it('node.path should equal the file path from pagesDir', () => {
      const result = createNavigationNode(mockNode);
      expect(result.path).to.equal('/php/functions/files/file-writing');
    });

    it('node.parentPath should equal the path of the parent page', () => {
      const result = createNavigationNode(mockNode);
      expect(result.parentPath).to.equal('/php/functions/files');
    });

    it('node.title should equal srcNode.frontmatter.title', () => {
      const result = createNavigationNode(mockNode);
      expect(result.title).to.equal(mockNode.frontmatter.title);
    });

    it('node.isStubbed should be a boolean', () => {
      const result = createNavigationNode(mockNode);
      expect(result.isStubbed).to.be.a('boolean');
    });

    it('node.isStubbed should be true for a stubbed article', () => {
      const result = createNavigationNode(mockNode);
      expect(result.isStubbed).to.equal(true);
    });

    it('node.isStubbed should be false for a non-stubbed article', () => {
      const notAStub = {
        ...mockNode,
        internal: {
          content: 'this is not a stub article. Infact, it is very informative'
        }
      };
      const result = createNavigationNode(notAStub);
      expect(result.isStubbed).to.equal(false);
    });
  });
});
