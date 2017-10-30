---
title: Tagging in Git
---
## Tagging in Git

Tags are a convenient way to highlight some milestone in you version history. Be it a new version, release or just a flag one could see where you made some decision. From the point of view of git, tag is just another branch name, for a branch that will never change.

In order to list existing tags, run
```
git tag -l
```
To add a tag you can simply run
```
git tag your_new_tag_name
```
This will create a so-called light-weight tag - juast store a name for a commit you've done recently. If you'd like to add more information to a tag, like who created it and when, add a longer description, use
```
git -tag -a you_new_tag_name -m 'your longer description'
```
If you omit the -m key and string, git will open up an editor - in the same way it does for other commits, so that you could enter your description.
#### More Information:
https://git-scm.com/book/en/v2/Git-Basics-Tagging


