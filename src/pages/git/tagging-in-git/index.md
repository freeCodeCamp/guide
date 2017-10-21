---
title: Tagging in Git
---
## Tagging in Git

## Tagging in Git

### Listing all tags
```git
$ git tag
v0.1
v1.3
```
### Searching a tag
Suppose you are only interested in tag at the 1.8.5 series
```git
git tag -l "v1.8.5*"
v1.8.5
v1.8.5-rc0
v1.8.5-rc1
v1.8.5-rc2
v1.8.5-rc3
v1.8.5.1
v1.8.5.2
v1.8.5.3
v1.8.5.4
v1.8.5.5
```
#### Creating tags
Git uses two main types of tags: lightweight and annotated.

1. A lightweight tag is like a branch. The lightweight tag does not change. It can be assumed like a pointer to a specific commit.
2. An annotated tags are stored as full objects in the Git database. The annotated tag contains the tagger name, email, and date,a tagging message and can be signed and verified with GNU Privacy Guard (GPG). 

### Creating annotated tag
```git
git tag -a v1.4 -m "my feature at v.14 version"
git tag
v0.1
v1.3
v1.4 
```
### Creating lightweight tag
For creating annotated tag, do not specify the -a, -s, or -m option.
```git
$ git tag v1.4-lw
$ git tag
v0.1
v1.3
v1.4
v1.4-lw
v1.5
``` 

### Show tag details
```git
git show v1.4
tag v1.4
Tagger: Ben Straub <sreeprasad.sp@linkedin.com>
Date:   Fri Oct 20 21:18:12 2017 -0700

my version 1.4

commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```


