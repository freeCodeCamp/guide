---
title: Tagging in Git
---
## Tagging in Git

Git tagging allows you to create a friendly name for a pointer to a specific commit. While most will choose to use semantic versioning or a similar numbering scheme for their tags, you are not limited to that. 

To create a tag, make sure you have committed the changes you want in this instance first, then type the following:

```shell
git tag <YOUR_TAG_HERE>
```

where <YOUR_TAG_HERE> has been replaced with a name you like. To view all of your tags, type:

```shell
git tag
```

To add notes (i.e., create an annotated tag), type:

```shell
git tag -a <YOUR_TAG_HERE> -m "<YOUR_TAG_MESSAGE_HERE>"
```

This will create a tag with a note very much like a commit message. You can view the message by typing:

```shell
git show <YOUR_TAG_HERE>
```

To push your a single tag to a remote, type:
```shell
git push <YOUR_TAG_HERE>
```

If you have multiple tags you want to send, type:
```shell
git push --tags
```

To use tags, you can checkout an individual tag instead of using the sha ID, like so:
```shell
git checkout <YOUR_TAG_HERE>
```

#### More Information:
<a href='https://git-scm.com/book/en/v2/Git-Basics-Tagging' target='_blank'>Git-SCM's page on git tag</a>
