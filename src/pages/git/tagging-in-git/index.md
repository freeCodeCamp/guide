---
title: Tagging in Git
---
## Tagging in Git

The `git tag` command allows you to mark a commit you consider important. Usually, tagging is used to mark release points (v1.0, v1.2-dev, among others). The next sections describe how to create, list, delete or share a tag.

### Creating Tags

There are two types of tags you can create: lightweight and annotated.

The only difference is that lightweight tags are just names for commits, and annotated tags are complete objects. Annotated tags contain a creation date, the tagger name an e-mail, a tagging message, and an optional GNU Privacy Guard (GPG) signature. Hence, use an annotated tag when you want to keep all this information. For instance, when you want to make a release of your project.

#### Lightweight Tags

To create lightweight tags simply use the command `git tag <tag-name>`:
```shell
git tag v2.3.1-dev
```

To see the tag data and the tagged commit use the command `git show <tag-name>`:
```shell
git show v2.3.1-dev
commit ca82a6dff817ec66f44342007202690a93763949
Author: Hallie Parker <hallie.parker@gee-mail.com>
Date:   Mon Oct 09 09:35:05 2017 -0700

    changed the version number
```

#### Annotated Tags

To create an annotated tag use the `-a` option:
```shell
git tag -a v2.0 -m "my version 2.0"
```

Other options available are `-s` and `-u`, which create a GPG-signed tag using the default e-mail address as key or a given key.
```shell
git tag -a v2.0 -u some-key
```

To see the tag data and the tagged commit use the command `git show <tag-name>`:
```shell
git show v2.0
tag v2.0
Tagger: Hallie Parker <hallie.parker@gee-mail.com>
Date:   Wed Oct 11 10:28:12 2017 -0700

my version 2.0

commit  9fceb02ff817ec66f44342007202690a93763949
Author: Hallie Parker <hallie.parker@gee-mail.com>
Date:   Mon Oct 09 14:35:11 2017 -0700

    changed the version number
 ```

### Tagging Later

You can also tag old commits by especifying the commit number at the end of the command:
```shell
git tag v1.2 9fceb02
```

### Listing Tags

To list all the available tags use the command `git tag`:
```shell
git tag
v1.0
v1.1
v2.0-beta
```

To list only the tags that match a certain pattern use `-l <pattern>`:
```shell
git tag -l 'v2*'
v2.0
v2.1
```

### Deleting Tags

To delete a tag use the option `-d <tag-name>`:
```shell
git tag -d v2.3.1-dev
```

### Sharing Tags

Your tags are not pushed by default to remote servers. Therefore, you need to do this manually after creating a tag. To do so, use the command `git push origin <tag-name>`:
```
git push origin v2.0
Counting objects: 14, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.
Total 14 (delta 3), reused 0 (delta 0)
To git@github.com:halliep/some-project.git
 * [new tag]         v2.0 -> v2.0
```

#### More Information:
- For downloads, documentation, and a browser-based tutorial: <a href='https://git-scm.com/' target='_blank' rel='nofollow'>Git official website</a>.


