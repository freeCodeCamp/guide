---
title: Tagging in Git
---
## Tagging in Git

Git tags are used to mark specific points in history as important. Therefore a tag refers to a specific commit.
In most cases tags are set to mark releases of a software.

To add a new tag to a Git repository, there are two main types you can use: Annotated or leightweight tags.
While leightweight tags are only pointing to a specific commit, annotated ones are full objects in the Git database with it's own checksum, information about tagger and so on. Therefore, it's better to use annoted tags.

#### Annotated tags
Annotated tags have their own checksum and contain information about the tagger like name and email and the date.

To create an annotated tag on the current revision run following command:
`git tag -a <tagname> -m "<your message>"`

- `-a` defines that the tag is an annotated one
- `-m` is the message stored with the tag - if you ommit this parameter the editor is launched to type in the message

#### Leightweight tags
Leightweight tags are only storing the commit hash they refer to and no other information.

To create a leightweight tag on the current revision run following command:
`git tag <tagname>`

The leightweight version does not support the the `-a`, `-s` or `-m` options.

#### Tagging older commits
To tag commits that are not the current revision, just add the commit hash in the following way:
`git tag -a v1.0 <commit-hash>`

#### Publishing tags
Git tags are not automatically pushed by `git push`.

You can either publish all created tags by running `git push --tags` or push only a specific tag with `git push origin <tagname>`.

#### More Information:
- <a href="https://git-scm.com/book/en/v2/Git-Basics-Tagging" target="_blank">git-scm</a>
- <a href="https://git-scm.com/docs/git-tag" target="_blank">git-scm docs</a>
- <a href="https://help.github.com/articles/working-with-tags/" target="_blank">GitHub Help Docs</a>


