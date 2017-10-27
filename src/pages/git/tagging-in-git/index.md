---
title: Tagging in Git
---
## Tagging in Git


### Tagging

Like most VCSs, Git has the ability to tag specific points in history as being important.Typically people use this functionality to mark release points (v1.0, and so on). 
In this section, you’ll learn how to list the available tags, how to create new tags, and what the different types of tags are.

### Listing Your Tags

Listing the available tags in Git is straightforward. Just type git tag:
```
$ git tag
v0.1
v1.3
```
This command lists the tags in alphabetical order; the order in which they appear has no real importance.

You can also search for tags with a particular pattern. The Git source repo, for instance, contains more than 500 tags. If you’re only interested in looking at the 1.8.5 series, you can run this:

```

$ git tag -l "v1.8.5*"
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

### Creating Tags

Git uses two main types of tags: lightweight and annotated.

A lightweight tag is very much like a branch that doesn’t change – it’s just a pointer to a specific commit.

Annotated tags, however, are stored as full objects in the Git database. They’re checksummed; contain the tagger name, email, and date; have a tagging message; and can be signed and verified with GNU Privacy Guard (GPG).

### Annotated Tags

Creating an annotated tag in Git is simple. The easiest way is to specify -a when you run the tag command:
```
$ git tag -a v1.4 -m "my version 1.4"
$ git tag
v0.1
v1.3
v1.4
```
The -m specifies a tagging message, which is stored with the tag. 

You can see the tag data along with the commit that was tagged by using the git show command:

``` 
git show v1.4
tag v1.4
Tagger: Ben Straub <ben@straub.cc>
Date:   Sat May 3 20:19:12 2014 -0700

my version 1.4

commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

changed the version number

```
That shows the tagger information, the date the commit was tagged, and the annotation message before showing the commit information.

### Lightweight Tags

Another way to tag commits is with a lightweight tag. This is basically the commit checksum stored in a file – no other information is kept. 
To create a lightweight tag, don’t supply the -a, -s, or -m option:

```
$ git tag v1.4-lw
$ git tag
v0.1
v1.3
v1.4
v1.4-lw
v1.5

```



This time, if you run git show on the tag, you don’t see the extra tag information. The command just shows the commit:

```
$ git show v1.4-lw
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700
changed the version number
```

