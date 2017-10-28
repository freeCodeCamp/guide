---
title: Git Rebase
---
## Git Rebase

Rebasing a branch in Git is a way to move the entirety of a branch to another point in the tree. The simplest example is moving a branch further up in the tree. Say we have a branch that diverged from the master branch at point A:

            /o-----o---o--o-----o--------- branch
    --o-o--A--o---o---o---o----o--o-o-o--- master

When you rebase you can move it like this: 

                                       /o-----o---o--o-----o------ branch
    --o-o--A--o---o---o---o----o--o-o-o master

To rebase, make sure you have all the commits you want in the rebase in your master branch. Check out the branch you want to rebase and type `git rebase master` (where master is the branch you want to rebase on). 

It is also possible to rebase on a different branch, so that for example a branch that was based on another branch (let's call it feature) is rebased on master: 

                                /---o-o branch
               /---o-o-o-o---o--o------ feature
    ----o--o-o-A----o---o--o-o-o--o--o- master

After `git rebase master branch` or `git rebase master` when you have checked out the branch, you'll get:

                                
               /---o-o-o-o---o--o------ feature
    ----o--o-o-A----o---o--o-o-o--o--o- master
                                      \---o-o branch

### More Information:
- Git documentation: <a href='https://git-scm.com/docs/git-rebase' target='_blank' rel='nofollow'>rebase</a>

