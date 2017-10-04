---
title: Git Pull
---
## Git Pull

The <a href='https://git-scm.com/docs/git-pull' target='_blank' rel='nofollow'>`git pull`</a> command allows you to get new commits from a remote repository. To do this, `git pull` fetches (`git fetch`) the new commits and merges <a href='https://guide.freecodecamp.org/git/git-merge' target='_blank' rel='nofollow'>(`git merge`)</a> these into your local branch.

This command's syntax is as follows:
```
git pull OPTIONS REPOSITORY REFSPEC
```
in which:
- **OPTIONS** are the command options, such as `--quiet` or `--verbose`. You can read more about the different options in the <a href='https://git-scm.com/docs/git-pull' target='_blank' rel='nofollow'>Git documentation</a>
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
