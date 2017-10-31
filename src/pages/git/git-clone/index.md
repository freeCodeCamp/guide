---
title: Git Clone
---
## Git Clone

The `git clone` command allows you to copy a remote repository onto your local machine.

First, find the remote repository for the project you're working on or interested in - this can also be your fork of a project. Next, copy the url for it. For example, if you've forked the freeCodeCamp guides repository, the url looks like `https://github.com/YOUR-GITHUB-USERNAME/guides.git`.

In the command line on your local machine, navigate to where you want to save the project in your working directory. Finally, run the `git clone` command:

```shell
git clone URL-OF-REPOSITORY
```

The default name of the new directory on your computer is the name of the repository, but you can change this by including the last (optional) parameter:

```shell
git clone URL-OF-REPOSITORY NAME-OF-DIRECTORY-ON-COMPUTER
```

Git gives the remote the alias "origin". This is a useful way to refer to the remote when you want to push your changes to the remote server, or pull changes from it. See <a href='https://guide.freecodecamp.org/git/git-push/' target='_blank' rel='nofollow'>Git push</a> and <a href='https://guide.freecodecamp.org/git/git-pull/' target='_blank' rel='nofollow'>Git pull</a> for more details.

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

### Git Fetch

An easy way to see if changes have been made to the remote and bring the changes down to your local copy is with Git Fetch.
This command will not merge changes from the remote into your local repository. It brings those changes onto what's called a remote branch. 
Example output below: 
```shell
 git fetch

remote: Counting objects: 5, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 1), reused 0 (delta 0)
Unpacking objects: 100% (5/5), done.
From /home/ccuser/workspace/curriculum-a/science-quizzes
 * [new branch]      master     -> origin/master
```

### Git Clone Mirror

If you want to host mirror of a repository you can use mirror parameter. 

```shell
git clone URL-OF-REPOSITORY --mirror
```

After mirroring repository you can clone your local mirror from your server.

```shell
git clone NAME-OF-DIRECTORY-ON-COMPUTER
```
