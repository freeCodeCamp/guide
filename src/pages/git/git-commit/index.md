---
title: Git Commit
---
## Git Commit
This command saves all the changes from the staging area to a "commit". Commits are at the heart of Git usage, you can think of a commit as a snapshot of the project, these are main features of commits you need to know:  
- you will always be able to revert the project state to a specific commit. [See more](https://guide.freecodecamp.org/git/git-checkout)  
- if multiple commits edit different parts of the project they will not overwrite each other even if the authors of the commit were unaware of each other. This is one of the benefits of using Git over Dropbox, Google Drive, ...

### Usage
The command `git commit` will open your default editor, you are expected to write a brief explanation of your changes, then you are done and the commit is saved.

If you don't want to open the editor you can use the `-m` flag like this `git commit -m "my commit message"`

### Don't forget
Before committing you need to stage your changes, you can do this with the command `git add`.  
After committing, if you want your changes to be visible to other contributors, you need to push your changes using the command [push](https://guide.freecodecamp.org/git/git-push)
