---
title: Git Push
---
## Git Push

The `git push` is a command that allows you to send the commits from your local branch in your local Git repository to the remote repository.

To be able to push to your remote repository, you must ensure that **all your changes to the local repository are committed**.

This command's syntax is as follows:
```bash
git push OPTIONS
```
There are a number of different options you can pass with the command, you can learn more about them in the <a href='https://git-scm.com/docs/git-push#_options_a_id_options_a' target='_blank' rel='nofollow'>Git documentation</a>.

It is possible to use several options in the same command or choose to not use any and push your changes to the remote you have configured.

### Push to a Specific Remote Repository and Branch
If you want to push your commits to a specific remote repository and branch, use:
```bash
git push REMOTE-NAME BRANCH-NAME
```
in which:
- `REMOTE-NAME` is the name of the remote repository to which you want to push the changes to
- `BRANCH-NAME` is the name of the remote branch you want to push your changes to

### Push to a Specific Remote Repository and All Branches in it
If you want to push all your changes to the remote repository and all branches in it, you can use:
```bash
git push --all REMOTE-NAME
```
in which:
- `--all` is the flag that signals that you want to push all branches to the remote repository
- `REMOTE-NAME` is the name of the remote repository you want to push to
