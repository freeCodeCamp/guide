---
title: Tagging in Git
---
## Tagging in Git

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/git/tagging-in-git/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Git has ability to tag specific points in history to be represented as important. Typically, this functionality can be used to mark release points of your application or a porject you are working on (such as v1.0.0). 

### Creating Git Tags
Creating a git tag is simple. The easiest way is to specificy a `-a` annotated tag when you run the command:

```shell
git tag -a v1.0.0
```

To view the tags:
```shell
git tag
v1.0.0
```

### Sharing Tags
By default, `git push` command does not transfer tags to remote servers. To explicitly push tags to a server such as Github when hosting a project initialized by Git:

```shell
git push origin master --tags
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Git Documentation: <a href='https://git-scm.com/docs/git-tag' target='_blank' rel='nofollow'>git-tag</a>


