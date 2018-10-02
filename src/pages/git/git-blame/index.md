---
title: Git Blame
---
## Git Blame

With `git blame` you can see who changed what in a specific file, line by line. So it is useful if you work in a team, instead of alone. For example if a line of code makes you wonder why it is there, you throw on git blame and you know to whom to talk to.

### Usage

You use git blame like this: `git blame NAME_OF_THE_FILE`

so for example: `git blame triple_welcome.rb`

You will see an output like this:

```shell
0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 1) 3.times do
e483daf0 (John Doe      2018-06-18 23:50:40 -0500 2)   print 'Welcome '
0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 3) end
```

Each line annotated with the SHA, Name of the author and date of the last commit.

### Aliasing git blame

Some programmers don't like the word 'blame', because of the negative connotation 'blaming someone' brings with it. Also the tool is rarely (if ever) used for blaming someone, instead aksing for advice or understanding the history of a file. So you sometimes see people use an alias to change `git blame` to something sounding nicer. Like `git who`, `git history` or `git praise`. To do that you simply add an git alias like this:

`git config --global alias.history blame`

You can see more information about aliasing git commands [here](/git/git-alias).

### Text Editor-Plugins utilizing Git Blame

There are a few Plugins out there for various Text-Editors which utilize `git blame`. For example to create something like heat maps or add inline information for the current line you are inspecting. A famous examples is [GitLense](https://gitlens.amod.io/) for VSCode.

### Further reading

- [Git Blame documentation](https://git-scm.com/docs/git-blame)
- [further reading on usage of Git Blame](https://corgibytes.com/blog/2016/10/18/git-blame/)