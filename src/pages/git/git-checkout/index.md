---
title: Git Checkout
---
## Git Checkout

Git Checkout switches between branches or restore working tree files.  There are a lot of options to checkout that won't be covered here but you can take a look at all of them [here][checkout-options] 

### Checkout a Branch
To checkout an existing branch, run the command:
```shell
git checkout BRANCH-NAME
```

Generally, Git won't let you checkout another branch unless your working directory is clean, because you would lose any working directory changes that aren't committed. You have three options to handle your changes: 1) trash them, 2) commit them, or 3) stash them.

### Checkout New Branch
To checkout out and create a new branch, run the command:
```shell
git checkout -b NEW-BRANCH-NAME
```
This will automatically switch you to the new branch

### Check out New Branch or Reset to Start Point
Creates the branch NEW-BRANCH and start it at <start_point>; if it already exists, then reset it to <start_point>. This is equivalent to running "git branch" with "-f"
```shell
git checkout -B NEW-BRANCH-NAME
```

### Checkout force 
This is used to throw away local changes.  When switching branches, proceed even if the index or the working tree differs from HEAD. 

When checking out paths from the index unmerged entries are ignored.

```shell
git checkout -f BRANCH-NAME

git checkout --force BRANCH-NAME
```

[checkout-options]: https://git-scm.com/docs/git-checkout
