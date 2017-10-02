---
title: Git Merge
---
## Git Merge
The `git merge` command will merge any changes that were made to the code base on a seperate branch to your current branch. 

The command syntax is as follows:
```shell
git merge <branch name>
```
For example, if you are currently working in a branch named `dev` and would like to merge any new changes that were made in a branch named `new-features` you would issue the following command:

```shell
git merge new-features
```
**Please Note:** If there are any uncommitted changes on your current branch, git will not allow you to merge until all changes in your current branch have been committed. 

For and in depth at the `git merge` command and all available option please refer to the <a href="https://git-scm.com/docs/git-merge" target="_blank">Git Documentation</a>.  
