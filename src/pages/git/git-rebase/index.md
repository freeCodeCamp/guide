---
title: Git Rebase
---
## Git Rebase
Rebasing integrate changes from one branch to another but it does it in a different way than git merge.

To rebase the feature branch to master branch

'''shell
//select the feature branch
git checkout feature
//rebase feature branch with master branch
git rebase master
'''

This will move all the changes you made to the feature branch to the front of master branch with all the changes in the master branch.

Rebasing re-writes the project history by creating brand new commits for each commit in the original branch made after we created the feature branch.

The benefit of rebasing over merging are:-
1. You will get a cleaner project history.
2. It eliminates the unnecessary merge commit required by 'git merge'.
3. Rebasing also results in a perfectly linear project history—you can follow the tip of feature all the way to the beginning of the project without any forks. This makes it easier to navigate your project with commands like 'git log' and 'git bisect'.

#### More Information:
[Git documentation](https://git-scm.com/docs/git-rebase)

[Git Rebase vs Git Merge](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

[Git merge](../git-merge/index.md)


