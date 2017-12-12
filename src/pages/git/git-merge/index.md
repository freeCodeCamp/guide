---
title: Git Merge
---
## Git Merge
The `git merge` command will merge any changes that were made to the code base on a seperate branch to your current branch. 

The command syntax is as follows:
```shell
git merge BRANCH-NAME
```
For example, if you are currently working in a branch named `dev` and would like to merge any new changes that were made in a branch named `new-features`, you would issue the following command:

```shell
git merge new-features
```
**Please Note:** if there are any uncommitted changes on your current branch, Git will not allow you to merge until all changes in your current branch have been committed.

For more information about the `git merge` command and all available options, please refer to the <a href="https://git-scm.com/docs/git-merge" target="_blank" rel="nofollow">Git documentation</a>.
