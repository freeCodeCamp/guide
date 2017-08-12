---
title: Git Stash
---
## Git Stash

Git has an area called the stash where you can temporarily store a snapshot of your changes without committing them to the repository. It's separate from the working directory, the staging area, or the repository.

This functionality is useful when you've made changes to a branch that you aren't ready to commit, but you need to switch to another branch.

### Stash Changes
To save your changes in the stash, run the command:

```shell
git stash save "optional message for yourself"
```

This saves your changes and reverts the working directory to what it looked like for the latest commit. Stashed changes are available from any branch in that repository.

Note that changes you want to stash need to be on tracked files. If you created a new file and try to stash your changes, you may get the error `No local changes to save`.

### View Stashed Changes
To see what is in your stash, run the command:

```shell
git stash list
```
This returns a list of your saved snapshots in the format `stash@{0}: <branch the stashed changes are for>: <message>`. The `stash@{0}` part is the name of the stash, and the number in the curly braces (`{ }`) is the index of that stash. If you have multiple change sets stashed, each one will have a different index.

If you forgot what changes were made in the stash, you can see a summary of them with `git stash show <name of stash>`. If you want to see the typical diff-style patch layout (with the +'s and -'s for line-by-line changes), you can include the `-p` (for patch) option. Here's an example:

```shell
git stash show -p stash@{0}

# Example result:
diff --git a/PathToFile/fileA b/PathToFile/fileA
index 2417dd9..b2c9092 100644
--- a/PathToFile/fileA
+++ b/PathToFile/fileA
@@ -1,4 +1,4 @@
-What this line looks like on branch
+What this line looks like with stashed changes
```

### Retrieve Stashed Changes
To retrieve changes out of the stash and apply them to the current branch you're on, you have two options:

1. `git stash apply <stash name>` applies the changes and leaves a copy in the stash
2. `git stash pop <stash name>` applies the changes and removes the files from the stash

There may be conflicts when you apply changes. You can resolve the conflicts similar to a merge ([see Git merge for details](../git-merge/index.md)).

### Delete Stashed Changes
If you want to remove stashed changes without applying them, run the command:
```shell
git stash drop <stash name>
```

To clear the entire stash, run the command:
```shell
git stash clear
```

### Other Resources
- [Git merge](../git-merge/index.md)
