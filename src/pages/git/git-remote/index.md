---
title: Git Remote
---
## Git Remote

The `git remote` command manage the set of repositories (remotes) whose branches you track.

### Set remote url

To set the remore url of the current repository, run the command:

```shell
git remote set-url origin https://linktoyourgit.com/repo.git
```

If you're using https, you can easily change to SSH, by just changing the remote url from `https://linktoyourgit.com/repo.git` to `git@linktoyourgit.com/repo.git`

### See info about your current remote url

To see the current remot url information, run the command:

```shell
git remote -v
```
