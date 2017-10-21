---
title: Tagging in Git
---
## Tagging in Git

Tags are a useful way to mark important sections in your commit history. They are in a way a pointer to a specific commit. The command to use this feature is `git tag`.

### List tags
To list the tags in your repository, simply type `git tag`. It will show your tags in alphabetical order. If you want to list tags with a specific pattern (e.g. all tags belonging to "v1.2") you can include the option `-l "v1.2*"`.

### Create tags
When you create a tag you have the options of creating a lightweight tag or an annotated tag which includes an annotation message aside from its tag name.

```bash
# Lightweight tag
git tag tag-name

# Annotated tag
git tag -a tag-name -m "annotation"
```

Git also gives you the opportunity to tag commits using commit hashes, so you can tag commits from your history. When you don't specify a commit hash you will tag the HEAD of your branch.

```bash
git tag tag-name 9fceb02
```

For a more specific documentation on how to create tags, visit the official git documentation for <a href='https://git-scm.com/book/en/v2/Git-Basics-Tagging' target='_blank' rel='nofollow'>tagging</a>.

### Show tags
To view the contents of a commit that has been tagged use the command `git show` followed by the tag name you want to see. An annotated tag will give you extra information about the person who tagged the commit aside from the commit information.

### Push tags
Tags do not transfer automatically to a remote server, you have to specifically push a tag by running the command `git push origin tag-name` or if you want to push every tag in your branch `git push origin --tags`.

### Other resources:
<a href='https://guide.freecodecamp.org/git/git-push/' target='_blank' rel='nofollow'>git push</a>

### More Information:
<a href='https://git-scm.com/book/en/v2/Git-Basics-Tagging' target='_blank' rel='nofollow'>Git Basics - Tagging</a>

<a href='https://git-scm.com/docs/git-tag' target='_blank' rel='nofollow'>Git Documentation: git-tag</a>
