---
title: Tagging in Git
---
## Tagging in Git

Tags are a convenient way to highlight some milestone in you version history. Be it a new version, release or just a flag one could see where you made some decision. From the point of view of git, tag is just another branch name, for a branch that will never change. Typically this feature is used to mark release points.

### List Tags

`git tag` will list the tags in alphabetical order.

```shell
$ git tag
v0.0.1
v0.0.2
```

To list only the tags that match a certain pattern use `-l <pattern>`, like this:
```shell
$ git tag -l 'v2*'
v2.0.0
v2.0.1
```

### Creating Tags

There are two available methods to create tags

1. Annotated Tags
2. Lightweight Tags

### Annotated Tags

Annotated Tags is the full fledged version of creating a tag where it will contain a checksum, tagger name, email, date and tagging message etc.

```shell
$ git tag -a v0.0.3 -m "Release Version 0.0.3"
$ git tag
v0.0.1
v0.0.2
v0.0.3 //new tag
```

`-a` flag indicates that this is a annotated tag. `-m` flag lets you add in line massage. If you avoid `-m` you'd be provided with a window to enter the massage.

Other options available are `-s` and `-u`, which create a GPG-signed tag using the default e-mail address as key or a given key.
```shell
$ git tag -a v0.0.3 -u some-key
```

You can view the content of the tag by using `git show v0.0.3` command.

```shell
$ git show v0.0.3
Tagger: John Doe <johndoe@gmail.com>
Date:   Tue Jun 27 15:39:51 2017 +0530

Release Version 0.0.3

commit e3bbf5f990efd7ad54dccc8d9cb777daf65b70f9
Author: John Doe <johndoe@gmail.com>
Date:   Tue Jun 27 15:33:06 2017 +0530

    Implement an awesome feature

```


### Lightweight Tags

Lightweight Tags is just keeping a reference to checksum, no other information is kept.

```shell
$ git tag v0.0.4
$ git tag
v0.0.1
v0.0.2
v0.0.3
v0.0.4 //new tag
```

if you use `git show` on a lightweight tag, you'll see an output like this.


```shell
$ git show v0.0.3
commit 1a6875173bfb5a7ad005d02a2dde65b3b424d0fb
Author: John Doe <johndoe@gmail.com>
Date:   Tue Jul 25 15:09:02 2017 +0530

    Implement an awesome feature

```

As you can see only a reference of a checksum is kept here.


### Tagging Later

You can also tag old commits by especifying the commit number at the end of the command:
```shell
$ git tag v1.2 9fceb02
```


### Deleting a Tag

You may find a situation you want to delete a certain tag and you can find bellow command useful in such situations.


```shell
$ git tag --delete v0.0.2
$ git tag
v0.0.1
v0.0.3
v0.0.4
```

### Pushing Tags

To share a tag you can you bellow code as `git push` by default does not transfer tags.

```shell
$ git push origin v0.0.3
```

This will explicitly push a certain tag.

But if you want to push all the tags at once, you could adopt below method using `--tags` flag.

```shell
$ git push origin --tags
```

### Checking out Tags

You can checkout to a tag like you would normally do. But you need to keep in mind that this would result a “detached HEAD” state.

```shell
$ git checkout v0.0.3
Note: checking out 'v0.0.3'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

...
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- Git documentation: <a href='https://git-scm.com/book/en/v2/Git-Basics-Tagging' target='_blank' rel='nofollow'>tag</a>
