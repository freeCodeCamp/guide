---
title: Tagging in Git
---
## Tagging in Git

The `git tag TAG-NAME` command will create a tag at the current commit.  A tag is a simple way to bookmark a commit and is often used to mark releases.

The command syntax is as follows:
```shell
git tag TAG-NAME
```
For example, if you have just released a new version of your project and would like to tag the release commit so that you can easily find it later, you would issue the following command:

```shell
git tag release
```

To see what tags you have in your repository, you would issue the following command (not that there are no arguments to it):

```shell
git tag
```

For more information about the `git tag` command and all available options, please refer to the <a href="https://git-scm.com/docs/git-tag" target="_blank" rel="nofollow">Git documentation</a>.
