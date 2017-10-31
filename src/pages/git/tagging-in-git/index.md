---
title: Tagging in Git
---
## Tagging in Git
The command `git tag` create specific points in history as being important. It’s possible add annotated Tags and Lightweight Tags.

### Creating Tag
To create a tag on your current branch, run this:
```
git tag <tagname> //git tag v2.0
```

### Listing Tags
You can see the available tags using the git tag command.
```
git tag
v1.0
v1.1
v2.0
```

### Delete Tag
To delete a tag using git tag command.
```shell
git tag -d <tagname>
```

###Checking out by Tags
When you want to checkout a branch to a specific tag, you can to use tag command.
```shell
git checkout v1.0
```

 #### More Information:
  <!-- Please add any articles you think might be helpful to read before writing the article -->
  
 +[Git docs - git-tag](https://git-scm.com/docs/git-tag)
  
 +[GitHub - Working with Tags](https://help.github.com/articles/working-with-tags/)
