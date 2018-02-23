---
title: Cloning a Specific Branch in Git
---
To clone a branch, enter the following into the terminal:

```shell
git clone -b <branch> <remote_repo>
```
If you only want to fetch the specified branch:

```shell
git clone -b <branch> --single-branch <remote_repo>
```
Here is an example of fetching the `staging` branch from FreeCodeCamp:

```shell
git clone -b staging https://github.com/FreeCodeCamp/FreeCodeCamp.git
```
