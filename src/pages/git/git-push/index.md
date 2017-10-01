---
title: Git Push
---
## Git Push

The ```git push``` is a command that allows you to send the commits from your local branch on your local git repository to the remote repository. 

To be able to **push to your remote repository**, you must ensure that **all your changes to the local repository are committed**.

This command's syntax is as follows:
```bash
git push [OPTIONS]
```
with **OPTIONS** as the command names, such as the ```branch name``` or the ```remote name```. You can learn more about the ```git push``` options in the [documentation](https://git-scm.com/docs/git-push#_options_a_id_options_a).

It is possible to use several options in the same command or choose to not use any and push your changes to the remote you have configured.

If you want to **push your commits to a specific remote repository and branch**, use:
```bash
git push [REMOTE_NAME] [BRANCH_NAME]
```
in which:
- **REMOTE_NAME** is the name of the remote repository to which you want to push the changes to.
- **BRANCH_NAME** is the name of the remote branch you want to push your changes to.

If you want to **push all your changes to the remote repository and all branches in it**, you can use:
```bash
git push --all [REMOTE_NAME]
```
with:
- ```--all``` as the flag that signals that you intend to push into your remote repository all the changes to all the branches.
- **REMOTE_NAME** as the name of the remote repository you want to push to.
