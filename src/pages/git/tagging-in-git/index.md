---
title: Tagging in Git
---
## Tagging in Git

Similar to most of the Version Control Systems(VCS's), Git has the ability to tag specific points in history which are important.
It is ussed to mark release points like (v1.0, and so on).

The `git tag` command allows you to lists the tags in alphabetical order; the order in which they appear has no real importance.

## Creating Tags
Git uses mainly two main types of tags: lightweight and annotated.

### Lightweight Tags
A lightweight tag is very much like a branch that doesn’t change – it’s just a pointer to a specific commit.This is basically the commit checksum stored in a file – no other information is kept. Here's an example output:

```shell
 git tag v1.4-lw
 git tag
 v0.1
 v1.3
 v1.4
 v1.4-lw
 v1.5
 ```
 
 ### Annotated Tags
 It is easier to create annotated tags. The easiest way is to specify `-a` when you run tag commmand:
 
 ```shell
 git tag -a v1.4 -m "my version 1.4"
 git tag
 v0.1
 v1.3
 v1.4
 ```
 
 ### Tagging Later
 You can also tag commits after you’ve moved past them. Now, suppose you forgot to tag the project at v1.2, which was at the “updated rakefile” commit. You can add it after the fact. To tag that commit, you specify the commit checksum (or part of it) at the end of the command:
 ```shell
git tag -a v1.2 9fceb02
```

 
