---
title: Tagging in Git
---
## Tagging in Git

Git's Tag functionality lets you tag specific points in history which might be important. This is typically used to mark release points(V0.0.1)


**Table of Contents**
- [View Tags](#view-tags)
- [Create Tags](#create-tags)
- [Annotated Tags](#annotated-tags)
- [Lightweight Tags](#lightweight-tags)
- [View Tag Details](#view-tag-details)
- [Sharing Tags](#sharing-tags)


### View Tags <a name="view-tags"></a>
To list the available tags in a Git repository in alphabetical order, run the command:
```shell
git tag
```
To list the tags which contain a specific patter, run the command:
```shell
git tag -l "v1.2.3*"
```
### Create Tags <a name="create-tags"></a>

There are two main tags which can be created. Namely, Annotated tags and Lightweight tags.
Lightweight tags, as the name suggests are lightweight; it’s simply a pointer to a specific commit.
Annotated tags on the other hand contains the tagger's name, tagger's email, tagged date and tagging message. In addition they can be signed and verified with GNU Privacy Guard (GPG). Annotated tags are stored as full objects in the Git database. Genreally, annotated tags are much preferred than temporary tags since we can have all the additional information.

### Annotated Tags <a name="annotated-tags"></a>
Creating an annotated tag in Git is simple. The easiest way is to specify -a when you run the tag command:
```shell
git tag -a v1.5 -m "bug fix version 1.5"
```

### Lightweight Tags <a name="lightweight-tags"></a>
To create a lightweight tag, simply don't include the -a, -s or -m options in the command. This command will simply store the commit checksum in a file. For lightweight tagging, run the command:
```
git tag v1.5-lw
```

### View Tag Details <a name="view-tag-details"></a>
To view the tag details of an <a name="annotated-tags">Annotated Tag</a> or a <a name="lightweight-tags">Lightweight Tag</a>, run the command:
```
git show v1.5
```
For an annotated tag: This command shows the tagger information, the date the commit was tagged, and the annotation message before showing the commit information.

For an lightweight tag: This command will simply show the commit. No additional information is available.

### Sharing Tags <a name="sharing-tags"></a>
In order to share tag(s), they will have to be explicitly pushed after being created locally. Similar to sharing remote branches – we can run the following command to push a tag:
```
git push origin v1.5
```
TO push more than one tag at a time, run the command: 
```
git push origin --tags
```
This will transfer all of your tags to the remote server that are not already there. Now similar to a new branch, when someone else clones or pulls from your repository, they will get all your tags as well.

