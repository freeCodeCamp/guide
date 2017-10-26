---
title: Tagging in Git
---
## Tagging in Git

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/git/tagging-in-git/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Using Tags in Git

As we know by now, git is a version control system. 

It's handy because if you've been consistently pushing your updates to git/github, you'll have a record of changes that you can reference if you need it in the future.

This is where tags come in handy. 

If you've made a major update, or released a new version (2.0), you can tag it as such for future reference.

## How to Tag

There are two types of tags you can use, Annotated and Lightweight.

Annotated tags have more information in them and are slightly longer.

It might look something like this:

```GIT
git tag -a v2.0 -m "my updated v2.0"
```
If you were to run

```GIT
git show v2.0
```
It would give you all the info on the tag, inlcluding the message.

There's also the option to do a lightweight tag:

```GIT
git tag v2.0
```
This also adds the v2.0 tag, but without the comment, and there would less information shown at the 

```GIT
git show
```
command.

## Other Tag Related Commands

You can also list all your tags with a simple:

```GIT
git tag
```
If you have a large number of versions or tags in your project, you can get a little more granular by listing tags related to specific versions:

```GIT
git tag -l "v2.0*"
```

Hopefully this brief summary of Git Tags has been helpful!

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


