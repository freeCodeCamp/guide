---
title: Git Pull
---
## Git Pull

`git pull` is a Git command used to update the local version of a repository from a remote. 

`git pull` one of the four commands that prompts network interaction by Git. By default, it updates the local working branch which `HEAD` is currently pointed to (the branch you are checked out to) and updates the remote tracking branches for all other branches.

**Table of Contents**

- [Using `git pull`](#using-git-pull)
- [Distributed Version Control](#distributed-version-control)
- [`git fetch` + `git merge`](#git-fetch-plus-git-merge)
- [`git pull` in IDEs](#git-pull-in-IDEs)

### Using git pull
`git pull` is used to update a local repository from the corresponding remote repository. Generally, if you are working locally on a branch called `master`, executing `git pull` will update the local copy of `master` and update the other remote tracking branches. (More information on remote tracking branches in the next section.) 

However, there are a few things to keep in mind for that example to be true: 
- The local repository is linked with a remote repository
  - Check this by executing `git remote -v`
  - If there are multiple remotes (more than two lines returned with `git remote -v`), `git pull` might not be enough information. You might need to enter `git pull origin` or `git pull upstream`. 
- The branch you are currently checked out to has a corresponding remote tracking branch
  - Check this by executing `git status`. If you don't see anything about a remote tracking branch, Git doesn't know where to pull information _from_. 
  
  
### Distributed Version Control
To understand `git pull`, it's important to understand that Git is a **Distributed Version Control System** (DVCS). With DVCS, developers can be working on the same file at the same time in separate environments. Then, after _pushing_ their code up to the shared remote repository, other developers can _pull_ the changes down. 

#### Network interactions in Git 
There are only four commands that prompt network interactions in Git. This means that a local repository will have no awareness of changes made on the remote repository (and the other way around) until a developer or a program specifically requests or sends that information. 

The four network commands are:
- `git clone`
- `git fetch`
- `git pull`
- `git push`

#### Branches in DVCS 
When working with Git, it can feel like there are lots of copies of the same code floating all over the place. There are different copies of the same file on each branch, and different copies of the same branches on every developers computer and on the remote. To keep track of this, Git uses something called **remote tracking branches**. 

If you execute `git branch --all` within a Git repository, remote tracking branches are the branches that appear in red. These are read only copies of the code as it appears on the remote. (Remember, this is based on the last network interaction that would have brought information locally, like `git clone`, `git fetch`, or `git pull`.) 

With **remote tracking branches**, you can work in Git on several lines of history without having network interaction. These **remote tracking branches** are updated every time the `git pull` or `git fetch` command is run. 

### git fetch plus git merge

`git pull` is a combination command, equal to `git fetch` + `git merge`. 

#### git fetch
On its own, `git fetch` updates all of the remote tracking branches in local repository. No changes would actually be reflected on any of the local working branches. 

#### git merge
Without any arguments, `git merge` will merge the corresponding remote tracking branch to the local working branch. 

#### git pull
Since `git fetch` updates remote tracking branches and `git merge` updates the current branch with the corresponding remote tracking branch, using `git pull`, you get both parts of these updates. However, this means that if you are checked out to `feature` branch and you execute `git pull`, when you checkout to `master`, any new updates will not be included. Whenever you checkout to another branch that may have new changes, it's always a good idea to execute `git pull`. 

### git pull in IDEs
Common language in other IDES may not include the word `pull`. If you look out for the words `git pull` but don't see them, look for the word `sync` instead. 

### Other Resources on git pull
- [git-scm](https://git-scm.com/docs/git-pull)
- [GitHub Help Docs](https://help.github.com/articles/fetching-a-remote/#pull)

### Other Resources on git in guide.freecodecamp.org
### Other Resources
- [Git merge](../git-merge/index.md)
- [Git checkout](../git-checkout/index.md)
- [Git commit](../git-commit/index.md)
- [Git stash](../git-stash/index.md)
- [Git branch](../git-branch/index.md)
