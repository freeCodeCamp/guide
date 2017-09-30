---
title: Git Pull
---
## Git Pull

[**git pull**](https://git-scm.com/docs/git-pull) allows you to get new commits from a remote repository. To do this, *git pull* fetches ( *git fetch* ) the new commits and merges [(*git merge*)](https://guide.freecodecamp.org/git/git-merge) these into your local branch.

This command's syntax is as follows:
```bash
git pull [options] [<repository>]
```
in which:
- **repository** is the URL to your repo. Example:  https://github.com/freeCodeCamp/freeCodeCamp.git
- **options** are the command options, such as *--quiet* or *--verbose*. Learn more about the *options* in the [documentation](https://git-scm.com/docs/git-pull).
- **refspec** specifies which refs to fetch and which local refs to update.

If you already have cloned a repository and want to **pull the latest commits**, all you'll have to do is:

```bash
git pull
```
If you want to **pull a specific branch**, you can use:
```bash
git fetch <remote_name> <branch_name>
``` 
in which:
- **remote_name** is the name of your remote repository. For example: *origin*.
- **branch_name** is the name of your branch. For example: *develop*.

If you have uncommited changes, the merge part of the *git pull* command will fail and your local branch will be untouched. 

Thus, you should *always commit your changes in a branch before pulling* new commits from a remote repository.
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
