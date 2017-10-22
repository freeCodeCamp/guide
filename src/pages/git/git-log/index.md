---
title: Git Log
---
## Git Log

The ```git log``` command displays all of the commits in a respository's history. 

By default, the command displays each commit's:

* Secure Hash Algorithm (SHA)
* author
* date
* commit message 

### Navigating Git Log

Git uses the Less terminal pager to page through the commit history. You can navigate it with the following commands:

* to scroll down by one line, use j or ↓
* to scroll up by one line, use k or ↑
* to scroll down by one page, use the spacebar or the Page Down button
* to scroll up by one page, use b or the Page Up button
* to quit the log, use q

### Git Log Flags

You can customize the information presented by ```git log``` using flags. 

#### --oneline

```git log --oneline```

The ```--oneline``` flag causes ```git log ``` to display

* one commit per line
* the first seven characters of the SHA
* the commit message

#### --stat

```git log --stat```

The ```--stat``` flag causes ```git log ``` to display 

* the files that were modified in each commit
* the number of lines added or removed
* a summary line with the total number of files and lines changed

#### --patch or -p

```git log --patch``` 

or, the shorter version

```git log -p```

The ```--patch``` flag causes ```git log ``` to display 

* the files that you modified
* the location of the lines that you added or removed
* the specific changes that you made

#### Start at a specific commit

To start ```git log``` at a specific commit, add the SHA:

```git log 7752b22```

This will display the commit with the SHA 7752b22 and all of the commits made before that commit. You can combine this with any of the other flags. 

#### More Information:

- [Git Basics - Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
- [Git Log](https://git-scm.com/docs/git-log)

##### Other Resources on Git in guide.freecodecamp.org

- [Git Merge](../git-merge/index.md)
- [Git Checkout](../git-checkout/index.md)
- [Git Commit](../git-commit/index.md)
- [Git Stash](../git-stash/index.md)
- [Git Branch](../git-branch/index.md)

