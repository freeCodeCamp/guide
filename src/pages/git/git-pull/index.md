---
title: Git Pull
---
## Git Pull

The [`git pull`](https://git-scm.com/docs/git-pull) command allows you to get new commits from a remote repository. To do this, `git pull` fetches (`git fetch`) the new commits and merges [(`git merge`)](https://guide.freecodecamp.org/git/git-merge) these into your local branch.

This command's syntax is as follows:
```
git pull OPTIONS REPOSITORY REFSPEC
```
in which:
- **OPTIONS** are the command options, such as `--quiet` or `--verbose`. You can read more about the different options in the [Git documentation](https://git-scm.com/docs/git-pull)
- **REPOSITORY** is the URL to your repo. Example:  https://github.com/freeCodeCamp/freeCodeCamp.git
- **REFSPEC** specifies which refs to fetch and which local refs to update

If you already have cloned a repository and want to **pull the latest commits**, all you'll have to do is:
```
git pull
```
If you want to **pull a specific branch**, you can use:
```
git fetch REMOTE-NAME BRANCH-NAME
``` 
in which:
- **REMOTE-NAME** is the name of your remote repository. For example: *origin*.
- **BRANCH-NAME** is the name of your branch. For example: *develop*.

If you have uncommited changes, the merge part of the `git pull` command will fail and your local branch will be untouched. 

Thus, you should *always commit your changes in a branch before pulling* new commits from a remote repository.
