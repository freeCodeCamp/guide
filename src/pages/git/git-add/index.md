---
title: Git Add
---
## Git Add

The `git add` command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. It does this by updating the index using the current content found in the working tree, to prepare the content staged for the next commit. The "index" holds a snapshot of the content of the working tree, and it is this snapshot that is taken as the contents for the next commit. However, `git add` doesn't really affect the repository in any significant way—changes are not actually recorded until you run `git commit`.

In conjunction with these commands, you'll also need `git status` to view the state of the working directory and the staging area.

`git add` command can be performed multiple times before a commit. It only adds the content of the specified file(s) at the time the add command is run; if you want subsequent changes included in the next commit, then you must run `git add` again to add the new content to the index.

### Usage
```shell
git add <file>
```

Stage all changes in <file> for next commit.

```shell
git add <directory>
```

Stage all changes in <directory> for the next commit.

```shell
git add -p
```

Begin an interactive staging session that lets you choose portions of a file to add to the next commit. This will present you with a chunk of changes and prompt you for a command. Use `y` to stage the chunk, `n` to ignore the chunk, `s` to split it into smaller chunks, `e` to manually edit the chunk, and `q` to exit.

### Example
If you are working on the `index.md` file for `git add` and this file is modified, then running `git status` will show the following output:

```shell
myCommandPrompt (master) >> git status
master...origin/master
 M index.md
myCommandPrompt (master) >>
```

Once `git add` command is run for file `index.md`, the changes will be staged for commit. `git status` will show the following output:
```shell
myCommandPrompt (master) >> git add index.md
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   index.md

```

Next `git commit` command can be run to commit the above changes.
