---
title: Change the Url of A Remote Repository
---
The `git remote set-url` command changes an existing remote repository URL.

**This command takes two arguments:**

1.  An existing remote name. For example, origin or upstream are two common choices.

2.  A new URL for the remote. For example, `https://github.com/USERNAME/OTHERREPOSITORY.git`

**So to change the URL of a remote repository you would do something like this:**

1.  View the existing remote repository:

`git remote -v`

1.  Change the URL of the remote repository:

`git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git`

1.  And you may verify the new remote repository by doing:

`git remote -v`

_For more information check out [this github article.](https://help.github.com/articles/changing-a-remote-s-url/)_