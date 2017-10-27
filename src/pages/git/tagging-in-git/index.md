---
title: Tagging in Git
---

## Tagging in Git

Tagging in Git has the ability to tag specific points in history as being important. Typically people use this functionality to mark release points (v1.0, and so on).

#### Listing Your Tags
Listing the available tags in Git is straightforward. Just type git tag:

    $ git tag
    v0.1
    v1.3
This command lists the tags in alphabetical order; the order in which they appear has no real importance.

#### Branch Vs Tags
What's the difference between tags and branches? The workspace is (almost always) associated with a branch, called master by default. When it is, a commit will automatically update the master reference to point to that new commit; in other words, branches are mutable references.

A tag, on the other hand, is created to point to a specific commit and thereafter does not change, even if the branch moves on. In other words, tags are immutable references.

#### Annotated Tags

Git has two flavours of tags; annotated and non-annotated. When using them, there is little difference between the two; both will allow you to refer to a specific commit in a repository.

An annotated tag creates an additional tag object in the Git repository, which allows you to store information associated with the tag itself. This may include release notes, the meta-information about the release, and optionally a signature to verify the authenticity of the commit to which it points.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
 <!-- Please add any articles you think might be helpful to read before writing the article -->
[Git Basics-Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

[Git tip: Tags](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html)

[Creating a tag](https://www.drupal.org/node/1066342)
