---
title: Git Remote
---
## Git Remote

The `git remote` command allows you to manage your git remote repositories.

Remote repositories are references to other Git repositories that operate on the same codebase.

You can 
<a href='https://guide.freecodecamp.org/git/git-pull/' target='_blank' rel='nofollow'>pull from</a>
and
<a href='https://guide.freecodecamp.org/git/git-push/' target='_blank' rel='nofollow'>push to</a>
remote repositories.

### List all configured remote repositories
```bash
git remote -v
```
This command lists all remote repositories alongside their location.

Remote repositories are referred to by name. The main repository for a project ist usually called *origin*.

When you you use 
<a href='https://guide.freecodecamp.org/git/git-clone/' target='_blank' rel='nofollow'>git clone</a>
to obtain a copy of a repository, git sets up the original location as the *origin* remote repository.

### Add a remote repository

To add a remote repository and call it *example*, use the following command:
```bash
git remote add example https://example.org/my-repo.git
```

### Update a remote url

If the URL of a remote repository changes, it can be changed by running
```bash
git remote set-url example https://example.org/my-new-repo.git
```
