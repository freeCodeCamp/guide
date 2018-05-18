---
title: Git Push
---
## Git Push

The `git push` command allows you to send (or *push*) the commits from your local branch in your local Git repository to the remote repository.

To be able to push to your remote repository, you must ensure that **all your changes to the local repository are committed**.

This command's syntax is as follows:
```bash
git push <repo name> <branch name>
```
There are a number of different options you can pass with the command, you can learn more about them in the <a href='https://git-scm.com/docs/git-push#_options_a_id_options_a' target='_blank' rel='nofollow'>Git documentation</a> or run `git push --help`.

### Push to a Specific Remote Repository and Branch
In order to push code, you must first clone a repository to your local machine. 
```bash
# Once a repo is cloned, you'll be working inside of a `master` branch
git clone https://github.com/<git-user>/<repo-name> && cd <repo-name>
# make some changes and commit code
git commit -m "added some changes to my repo!"
# push changes in MASTER branch to github
git push origin master
```

To learn more about branches check out the links below:
* [git checkout](https://github.com/renington/guides/blob/master/src/pages/git/git-checkout/index.md)
* [git branch](https://github.com/renington/guides/blob/master/src/pages/git/git-branch/index.md)


### Push to a Specific Remote Repository and All Branches in it
If you want to push all your changes to the remote repository and all branches in it, you can use:
```bash
git push --all <REMOTE-NAME>
```
in which:
- `--all` is the flag that signals that you want to push all branches to the remote repository
- `REMOTE-NAME` is the name of the remote repository you want to push to

### Push to a specific branch with force parameter
If you want to ignore the local changes made to Git repository at Github(Which most of developers do for a hot fix to development server) then you can use --force command to push by ignoring those changs.

```bash
git push --force <REMOTE-NAME> <BRANCH-NAME>
```
in which:
- `REMOTE-NAME` is the name of the remote repository to which you want to push the changes to
- `BRANCH-NAME` is the name of the remote branch you want to push your changes to

