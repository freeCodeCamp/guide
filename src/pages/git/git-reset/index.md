---
title: Git Reset
---
## Git Reset

Git-reset is a command that allows you to RESET your current head to a specified state.

Git reset (--patch | -p) [<tree-ish>] [--] [<paths>…​]
Selectively chose chunks in the difference between the index and the tree. The chosen chunks are applied in reverse to the index.

Git reset [<mode>] [<commit>]
This command resets current branch head to selected commit and updates the index. Defaults to "--mixed" if <mode> is omitted.

The <mode> must be:

 --soft
 does not reset the index file or working tree, but resets head to commit.Changes all files to "Changes to be commited"

 --mixed
  reset index but not the working tree and reports what has not been updated.

 --hard
   Resets the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.

 --merge
    Resets the index and updates the files in the working tree that are different between <commit> and HEAD, but keeps those which are different between the index and working tree 

 --keep
    Resets index entries and updates files in the working tree that are different between <commit> and HEAD. If a file that is different between <commit> and HEAD has local changes, reset is aborted.



### More Information:
- Git documentation: [reset](https://git-scm.com/docs/git-reset)
