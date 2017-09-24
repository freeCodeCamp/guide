---
title: Git Commit
---

## Git Commit

### Description
The `git commit` command will save all staged changes, along with a brief description from the user, to the local repository. 

In addition, a new version of the project will be created in the current repository. This will allow the user to recall those changes at a later date or, if needed, revert to that version. 

### Options
There are a number of options that can be included with `git commit`. However, this guide will only cover the two most common options. For an extensive list of options, please consult the <a href='https://git-scm.com/docs/git-commit' target='_blank' rel='nofollow'>Git documentation</a>. 

#### The -m Option
The most common option used with `git commit` is the `-m` option. The `-m` stands for message. When calling `git commit`, it is required to include a message. The message should be a short description of the changes being committed. The message should be at the end of the command and it must be wrapped in quotations `" "`. 

An example of how to use the `-m` option:
```shell
git commit -m "My message"
```
The output in your terminal should look something like this:
```shell
[master 13vc6b2] My message
 1 file changed, 1 insertion(+)
```
**NOTE:** If the `-m` is not included with the `git commit` command you will be prompted to add a message in your default text editor.

#### The -a Option
Another popular option is the `-a` option. The `-a` stands for all. This option automatically stages all modified files to be committed. If new files are added the `-a` option will not stage those new files. Only files that the git repository is aware of will be committed.

For example: 

Let’s say that you have a `README.md` file that has already been committed to your repository. If you make changes to this file, you can use the `-a` option in your commit command to stage and add the changes to your repository. However, what if you also added a new file called index.html? The `-a` option will not stage the index.html as it does not currently exist in the repository. When new files have been added, the `git add` command should be invoked in order to stage the files before they can be committed to the repository.

An example of how to use the `-a` option: 
```shell
git commit -am “My new changes”
```
The output in your terminal should look something like this:
```shell
[master 22gc8v1] My new message
 1 file changed, 1 insertion(+)
```
