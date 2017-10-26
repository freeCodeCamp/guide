---
title: Tagging in Git
---
## Tagging in Git

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/git/tagging-in-git/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Git has the ability to tag specific points in history to mark as important. Developers use this functionality to mark release points 
### Listing Tags

Listing the available tags in Git is simple. Just type ```git tag```: 
```
$ git tag
v0.1
v1.3
```

 The above command will list the tags in alphabetical order. Their appearance will have no  importance

### Types of Tags

There are two types of tags: lightweight and annotated 

A lightweight tag is very much like a branch that doesn't change 

An annotated tag acts as full objects in Git database. They contain the tagger name, email and date; they also have a tagging message 

It is generally recommended to create annotated tag.

#### Annotated Tag

For creation of annotated tag you have to specify "-a" flag with the tag command and "-m" for message.
```
$ git tag -a v1.5 -m "my version 1.5"
$ git tag
v0.1
v1.3
v1.4
```

 
#### Lightweight Tag 

For creation of lightweight tag it is not required to supply flags like "-a" or "-m"
```
$ git tag v1.4-lw
$ git tag
v0.1
v1.3
v1.4
v1.4-lw
v1.5
```

