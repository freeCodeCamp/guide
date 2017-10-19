---
title: How to Create or Delete a User or Sudo User on Ubuntu
---

## How to Create a User

To create a new user, type the following command `sudo useradd exampleUser`, where `exampleUser` is the user you want to create. To add a password to this user, run the `sudo passwd exampleUser` command, where `exampleUser` is the user that you want to add a password to.

## How to Create a Sudo User

To create a `sudo` user, you need to create a regular user first using the command above. Then, add this user to the group called "sudoers" using the `sudo usermod -a -G exampleUser sudo` command, where `exampleUser` is the user that should be the new `sudo` user.

## How to Delete a User

To delete a user, type in `sudo userdel exampleUser`, where `exampleUser` is the user you want to delete.
