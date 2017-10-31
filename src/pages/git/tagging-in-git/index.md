---
title: Tagging in Git
---
## Tagging in Git

Tagging lets developers mark important checkpoints in the course of their projects development. For instance, software release versions can be tagged. (Ex: v1.3.2) It essentially allows you to give a commit a special name(tag).

To view all the created tags in alphabetical order:
```bash
git tag
```
To get more information on a tag:
```bash
git show v1.4
```
   
There are two types of tags:
1. Annotated
```bash
git tag -a v1.2 -m "my version 1.4"
```
2. Lightweight
```bash
git tag v1.2
```
They differ in the way that they are stored.   
These create tags on your current commit.   
   
Incase, you'd like to tag a previous commit specify the commit ID you'd like to tag:
```bash
git tag -a v1.2 9fceb02
```
   
The tags names may be used instead of commit IDs while checking out and pushing commits to a remote repo.

#### More Information:
- Git documentation: <a href='https://git-scm.com/docs/git-tag' target='_blank' rel='nofollow'>Documentation</a>
- Git Tagging Chapter: <a href='https://git-scm.com/book/en/v2/Git-Basics-Tagging' target='_blank' rel='nofollow'>Book</a>


