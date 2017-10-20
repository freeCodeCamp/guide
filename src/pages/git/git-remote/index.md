---
title: Git Remote
---
# Git Remote
The `git remote` command is one that lets you manage where your code is "stored". For example, when pushing a file or code using Git, you need somewhere to push to.

This is where `git remote` comes in handy. You can push to either an HTTPS URL, such as `https://github.com/user/repo.git`, or an SSH URL, like `git@github.com:user/repo.git`.

Fear not though! Every time you push something, you don't need to type the entire URL. Git associates a remote URL with a name, and the name most people use is `origin`.

### Creating Remotes
Creating remotes is done like the following:
```bash
git remote add REMOTE-NAME <REMOTE_URL>
```

As stated before, the REMOTE_URL can be either HTTPS or SSH. You can find the URL on Github by clicking the "Clone or download" dropdown in your repository.

### Deleting Remotes
Deleting remotes is done like so:
```bash
git remote rm REMOTE-NAME
```

And to confirm it's gone, you can view the list of your existing remotes by typing:
```bash
git remote -v
```
