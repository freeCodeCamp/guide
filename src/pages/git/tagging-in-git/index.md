---
title: Tagging in Git
---

## Tagging in Git

Use tagging to mark any particular point in history. Coders use this function to mark releases or versions (e.g., `0.1.0-alpha`, `0.1.0-beta`, `0.1.0`, and so on).

**Table of Contents**

-   [View Tags](#view-tags)
-   [Fetch Tags](#fetch-tags)
-   [Checkout a Tag](#checkout-a-tag)
-   [Create a New Tag](#create-a-new-tag)
-   [Push Tags](#push-tags)
-   [Delete a Tag](#delete-a-tag)
-   [Delete a Remote Tag](#delete-a-remote-tag)
-   [Compare Tags](#compare-tags)
-   [Help with Git Tag](#help-with-git-tag)

### View Tags

To view the tags in a Git repository, run the command:

    git tag

The output will show tags listed in alphabetical order.

Sample output:

    0.1.0
    0.1.0-alpha0
    0.1.0-alpha1
    0.1.0-alpha2
    0.1.0-alpha3
    0.1.0-alpha4
    0.1.0-alpha5
    0.1.1
    0.1.2

#### Viewing a Specific Tag

However, some repositories have multiple releases. The list of tags could be  lengthy. When this happens, you could use a pattern to help narrow down the results closer to what you are looking for.

    git tag -l "0.1.*"

Use the asterisk or wildcard (\*) in order to get results that share a similar pattern.

### Fetch Tags

To fetch tags, run the command:

    git fetch --tags

### Checkout a Tag

To checkout an existing tag, run the command:

    git checkout TAG-NAME

Doing a `git checkout` on a tag is similar to checking out branches.

Sample output:

    Note: checking out '0.1.0'.

    You are in 'detached HEAD' state. You can look around, make experimental
    changes and commit them, and you can discard any commits you make in this
    state without impacting any branches by performing another checkout.

    If you want to create a new branch to retain commits you create, you may
    do so (now or later) by using -b with the checkout command again. Example:

      git checkout -b <new-branch-name>

    HEAD is now at 4390478... [New] Update to v0.1.0

### Create a New Tag

To create a new tag, run the command:

    git tag NEW-TAG-NAME

### Push Tags

To push a tag to a remote repository, run the command:

    git push origin TAG-NAME

<sub>Note: You have to use the right `REMOTE-NAME`. The default `REMOTE-NAME` in most cases is `origin`.</sub>

### Delete a Tag

To delete a tag, run the command:

    git tag -d TAG-TO-DELETE

    # Alternative:
    git tag --delete TAG-TO-DELETE

Running this command will **only** delete the tag in your local repository.

### Delete a Remote Tag

Deleting a tag from a remote location requires an extra step. To delete a remote tag, run the command:

    git push :TAG-TO-DELETE

### Compare Tags

You compare tags with the `git diff` command:

    git diff TAG-NAME1 TAG-NAME2

You will get a colored output showing the changes between tags. Insertions will be in green marked with a plus (+) sign. Deletions will be in red marked with a minus (-) sign.

Sample output:

![screenshot from 2017-10-18 20-57-59](https://user-images.githubusercontent.com/30511216/31753700-1cb3bf0e-b447-11e7-8d69-861e93af1774.png)

### Help with Git Tag

If you forget how to use an option, or want to explore other functionality around the `git tag` command, you can run any of these commands:

    git help tag
    git tag --help
    man git-tag

#### More Information

-   [Git checkout](../git-checkout/index.md)
-   [Git push](../git-push/index.md)
