---
title: Tagging in Git
---
## Tagging in Git
A Git tag is just an annotated pointer to a commit. In other words, tagging in Git is a way to mark a git commit with a friendly name so that it could be easily referred to later.

Adding a tag(s) helps to represent a milestone or a specific stable release in a project. After adding tag(s) it is easy to navigate in the code history.

### Why tags?
Each commit in Git will have a commit hash which is usually a very lengthy string.
For example: `e522bbb6aebe3de12f931ad9cf1f8c81a5c238a8`.
When commit hashes are this long and random, it is hard to identify a specific commit easily and quickly in the repository. This is where tags comes into picture. When we add tag to a commit then we can start referring to that commit by that tag name instead of the commit hash.
An example tag is: `release_1.0`.

### How to create a tag
You can use the following command to create a tag for a specific commit,
`git tag <tag-name> <commit-hash>`

An example: `git tag feature_xyz e522bbb6aebe3de12f931ad9cf1f8c81a5c238a8`.

The above command will add the tag `feature_xyz` to the commit `e522bbb6aebe3de12f931ad9cf1f8c81a5c238a8`.

You can also add a tag to the last commit that you made. In this case you do not have to specify the commit hash. The tag is automatically applied to the last commit.
`git tag <tag-name>`

After adding the tag, you will have to push the tag to origin. The following command will push the tag that was created locally to origin,
`git push --tags`

### How to delete a tag
You can delete a tag using the following command:
`git tag -d <tag-name>`

Example: `git tag -d feature_xyz`

The above command will remove the tag from the commit locally. To remove the tag from origin, you will have to run the following command,
`git push -d origin <tag-name>`

Example: `git push -d origin feature_xyz`


#### More Information:
There are different options that you can specify in the tag command. You can find more information about it in the Git documentation: [Git Tag](https://git-scm.com/docs/git-tag "Git Tags")
