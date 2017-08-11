---
title: Git Clone
---
## Git Clone

The Git clone command allows you to copy a remote repository onto your local machine.

First, find the remote repository for the project you're working on or interested in - this can also be your fork of a project. Next, copy the url for it. For example, if you've forked the freeCodeCamp guides repository, the url looks like `https://github.com/<YOUR GITHUB USERNAME>/guides.git`.

In the command line on your local machine, navigate to where you want to save the project in your working directory. Finally, run the `git clone` command:

```shell
git clone <url of repository>
```

The default name of the new directory on your computer is the name of the repository, but you can change this by including the last (optional) parameter:

```shell
git clone <url of repository> <name of directory on computer>
```

Git gives the remote the alias "origin". This is a useful way to refer to the remote when you want to push your changes to the remote server, or pull changes from it. See [Git push](../git-push/index.md) and [Git pull](../git-pull/index.md) for more details.

Git only pulls the remote's main branch onto your computer. This branch is usually named "master" by convention, but may be defined differently depending on the project.

Also, Git automatically sets up your local main branch to track the remote branch. When you run `git status`, you'll see information about whether your local branch is up-to-date with the remote. Here's an example output:

```shell
myCommandPrompt (master) >> git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
myCommandPrompt (master) >>
```

If your local `master` branch has three commits that you haven't pushed up to the remote server yet, the status would say "Your branch is ahead of 'origin/master' by 3 commits."
