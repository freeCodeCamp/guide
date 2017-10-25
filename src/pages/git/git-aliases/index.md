---
title: Git Aliases
---
## Git Aliases

Git aliases allow you to use shorthand commands to perform common actions in git.

**Table of Contents**
- [Create Aliases](#create-aliases)
- [View and Delete Aliases](#view-delete-aliases)
- [Some Great Aliases](#great-aliases)

### Create Aliases <a name="create-aliases"></a>
Let's create an alias so that instead of having to type `git checkout` every time you want to checkout, you can just type `git co`. Much faster.

To create this alias, run the command:
```shell
git config --global alias.co checkout
```
This will create the alias globally on your machine.

### View and Delete Aliases <a name="view-delete-aliases"></a>
To view all of the aliases you have created on your machine, run the command:
```shell
cat ~/.gitconfig
```
In that file under `[alias]` are all of your aliases.

To delete them, nano into the `.gitconfig` file and remove them. You can also add aliases here instead of running the command above.

### Some Great Aliases <a name="great-aliases"></a>
Here are a few aliases that may be beneficial to you:

#### git st
```shell
git config --global alias.st status --short --branch
```
When you run the command `git st`, your git status will be displayed in a nice, streamlined way.

#### git grog
```
grog = log --graph --abbrev-commit --decorate --all --format=format:\"%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)\"
```
Running the command `git grog` will display your projects git log in a far prettier and easier to understand way.
