---
title: Tagging in Git
---
## Tagging in Git

Git supports the feature known as 'tagging', common among Version Control Systems (VCS). Tagging as it's name suggests refers to being able to pin tags to specific points of the version's history.

A familiar usage of tagging is to mark release notes, for example by pinning the version number (release 1.4.2), or to notify the update of dependencies (dependency-name 3.1.4). 

To see all tags, run a quick: 

```bash
git tag

```
Or to narrow the search to specific tags
```bash
 git tag -l "v2.8*"
 
 v2.8.1
 v2.8.2
 v2.8.3
 v2.8.4
 v2.8.5
 v2.8.6

```

Create a tag:
```bash
git tag -a v3.1.4
```

Create a tag with annotation (to provide more informatin):
```bash
git tag -a v3.1.4 -m "Release version 3.1.4 - implements support for Stripe API"
```

Show more info:
```bash
git show v3.1.4 

tag v3.1.4
Tagger: Nik O'Donnell <nik@gh.email.cc>
Date:   Mon Oct 23 20:19:12 2016 -0700

Release version 3.1.4 - implements support for Stripe API

commit ca82a6dff817ec66f44342007202690a93763949
Author: Nik O'Donnell <nik@gh.email.cc>
Date:   Mon Oct 23 20:19:12 2016 -0700

```

You can also checkout by tag name:

```bash
git checkout <tag>
```

However, you should read up on the <a href='https://git-scm.com/book/en/v2/Git-Basics-Tagging' target='_blank' rel='nofollow'>documentation
</a> beforehand as it has some potentially unintuitive side effects. 

#### More Information:

<a href='https://git-scm.com/book/en/v2/Git-Basics-Tagging' target='_blank' rel='nofollow'>Git Basics - Tagging
</a>

<a href='https://git-scm.com/docs/git-tag' target='_blank' rel='nofollow'>Git Docs - Tagging
</a>
