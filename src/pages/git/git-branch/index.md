---
title: Git Branch
---

## Git Branch

Git's branching functionality lets you create new branches of a project to test ideas, isolate new features, or experiment without impacting the main project.

**Table of Contents**
- [View Branches](#view-branches)
- [Checkout a Branch](#checkout-a-branch)
- [Create a New Branch](#create-a-new-branch)
- [Rename a Branch](#rename-a-branch)
- [Delete a Branch](#delete-a-branch)
- [Compare Branches](#compare-branches)
- [Help with Git Branch](#help-with-git-branch)

### View Branches
To view the branches in a Git repository, run the command:
```shell
git branch
```

There will be an asterisk (\*) next to the branch that you're currently on.

There are a number of different options you can include with `git branch` to see different information. For more details about the branches, you can use the `-v` (or `-vv`, or `--verbose`) option. The list of branches will include the SHA-1 value and commit subject line for the `HEAD` of each branch next to its name.

You can use the `-a` (or `--all`) option to show the local branches as well as any remote branches for a repository. If you only want to see the remote branches, use the `-r` (or `--remotes`) option.

### Checkout a Branch
To checkout an existing branch, run the command:
```shell
git checkout <branchName>
```

Generally, Git won't let you checkout another branch unless your working directory is clean, because you would lose any working directory changes that aren't committed. You have three options to handle your changes: 1) trash them (see [Git checkout for details](../git-checkout/index.md)), 2) commit them (see [Git commit for details](../git-commit/index.md)), or 3) stash them (see [Git stash for details](../git-stash/index.md)).

### Create a New Branch
To create a new branch, run the command:
```shell
git branch <newBranchName>
```

Note that this command only creates the new branch. You'll need to run `git checkout <newBranchName>` to switch to it.

There's a shortcut to create and checkout a new branch at once. You can pass the `-b` option (for branch) with `git checkout`. The following commands do the same thing:
```shell
# Two-step method
git branch <newBranchName>
git checkout <newBranchName>

# Shortcut
git checkout -b <newBranchName>
```

New branches will include all commits from the parent branch, which is the branch you're on when you create the new branch.

### Rename a Branch
To rename a branch, run the command:
```shell
git branch -m <oldBranchName> <newBranchName>

# Alternative
git branch --move <oldBranchName> <newBranchName>
```

### Delete a Branch
Git won't let you delete a branch that you're currently on. You first need to checkout a different branch, then run the command:
```shell
git branch -d <branchToDelete>

# Alternative:
git branch --delete <branchToDelete>
```

The branch that you switch to makes a difference. Git will throw an error if the changes in the branch you're trying to delete are not fully merged into the current branch. You can override this and force Git to delete the branch with the `-D` option (note the capital letter) or using the `--force` option with `-d` or `--delete`:
```shell
git branch -D <branchToDelete>

# Alternatives
git branch -d --force <branchToDelete>
git branch --delete --force <branchToDelete>
```

### Compare Branches
You can compare branches with the `git diff` command:
```shell
git diff <firstBranch>..<secondBranch>
```

You'll see colored output for the changes between branches. For all lines that have changed, the `<secondBranch>` version will be a green line starting with a "+", and the `<firstBranch>` version will be a red line starting with a "-". If you don't want Git to display two lines for each change, you can use the `--color-words` option. Instead, Git will show one line with deleted text in red, and added text in green.

If you want to see a list of all the branches that are completely merged into your current branch (in other words, your current branch includes all the changes of the other branches that are listed), run the command `git branch --merged`.

### Help with Git Branch
If you forget how to use an option, or want to explore other functionality around the `git branch` command, you can run any of these commands:
```shell
git help branch
git branch --help
man git-branch
```

### Other Resources
- [Git merge](../git-merge/index.md)
- [Git checkout](../git-checkout/index.md)
- [Git commit](../git-commit/index.md)
- [Git stash](../git-stash/index.md)
