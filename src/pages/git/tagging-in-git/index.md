---
title: Tagging in Git
---
## Tagging in Git
The `git tag` command allows you to tag a specific point in the commit history. You can use this function to tag releases like v1.0, v1.1 and so on.
This command's syntax is as follows:
```bash
git tag OPTIONS
```
There are different options you can use with the command, you can learn more about them in the <a href='https://git-scm.com/docs/git-tag#_options' target='_blank' rel='nofollow'>official Git documentation</a>.

### Listing available tags
To see tags that are available already or created by you, run:
`git tag`
This will list all your tags in a chronological order.

### Information about a specific tag
To see information about a specific tag like **Tagger name**, **Alias**, **Date of tagging**, **Commit SHA**, **Commit author**:
`git show <tag-name>`

### Creating a Tag
There are 2 types of tags in Git:
- **Lightweight** tags are just pointers to specific commits. No further information is saved.
- **Annotated** tags are regular objects, which have an author and a date and can be referred because they have their own <a href='https://help.github.com/articles/github-glossary/#ssh-keys' target='_blank' rel='nofollow'>SHA key</a>
#### Lightweight tag
You can create a lightweight tag using:
`git tag <tag-name>`
Git will create a tag without a message at the current revision but will not prompt you for an annotation.
#### Annotated tag
You can create an annotated tag using:
`git tag -a <tag-name>`
Git will prompt you for an annotation unless you have also used the `-m` flag to provide a message.
`git tag -a -m <message> <tag-name>`
Git will tag the commit and annotate it with the provided message.
`git tag -m <msg> <tag-name>`
Git will behave as if you passed the -a flag for annotation and use the provided message.

### Checking out tags
You can either checkout a tag to your current branch by:
`git checkout <tag-name>`
Or you can checkout a tag to new branch by:
`git checkout -b <branch-name> <tag-name>'
