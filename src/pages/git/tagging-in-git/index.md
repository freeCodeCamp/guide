---
title: Tagging in Git
---
## Tagging in Git

The `tag` command in git is used to mark at point in history as important. Often developers use tags for releases. 
A tag can be thought of as a named commit. 

### Listing tags

`git tag`

This will list all tags in alphabetical order, the order of the tags has no importances. 

`git tag -l "tag"` 

This will search for all tags containing the word "tag" in it. 

`git show v1.1.1`

This command will show details of a tag. 

### Creating tags

Git has two types of tags:

* Lightweight - A pointer to a commit, storing just the commit checksum.  
* Annotated - a full git object, containing details such as: name, email, date, and message.

Best practice is to create an annotated tag so that the developer has the full information. Lightweight tags are best used for temporary tags. 

#### Annotated tags 
`git tag -a v1.1.1 -m "version 1.1.1"`

`-a` informs git that the tag will be an annotated tag. 

`-m` sets up the message of the tag.  If you do not provide a message, git will open up a text editor to allow you to enter a message. 

#### Lightweight tags
`git tag v1.1.1`

When creating a tag, if you do not provide the `-a`, `-m`, or `-s` flag git will create a lightweight tag. 


#### Tagging in the past
`git tag -a v1.1.1 9fceb02`

By providing the commit sha, git will add a tag pointing to that commit. 

#### Sharing tags 

By default `git push` will not push tags. 

`git push origin <tag>` 
Will push the individual tags.

`git push origin --tags` 
Will push all tags in the repository that are not in the upstream repository. 

#### Checking out tags
Developers are able to checkout a tag, however if you checkout a tag it will put the repository into a "detached HEAD" state. 

`git checkout v1.1.1`
This will checkout the individual commit that the tag points to. 

It is best to create a branch from a tag.

`git checkout -b version_1 v1.1.1`

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [Git Docs - Basic Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) 

