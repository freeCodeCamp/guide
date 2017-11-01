---
title: Git Hooks
---

## Git Hooks
Git Hooks are scripts located in the `.git/hooks/` directory of a git repository. These scripts run after being triggered by different stages in the version control process.

### Samples
In this directory are a handful of sample scripts, such as `pre-commit.sample`. This particular sample runs every time a user runs `git commit`. If the hook script exits with a status other than 0, then the commit stops.

### Documentation
 - (https://git-scm.com/docs/githooks)[Documentation for Git Hooks]
 - (https://www.atlassian.com/git/tutorials/git-hooks)[Atlassian Tutorial on Git Hooks]
 - (http://githooks.com/)[Git Hooks Guide]
