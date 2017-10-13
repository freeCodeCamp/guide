---
title: How to Create or Delete a User or Sudo User on Ubuntu
---

## How to Create a User

To create a new user, type the following command `sudo adduser exampleUser`, where `exampleUser` is the user you want to create. Follow the short interactive dialog to provide a password and additional information for the user.

## How to Create a Sudo User

To create a `sudo` user, you need to create a regular user first using the command above. Then, add this user to the group called "sudo" using the `sudo usermod -aG sudo exampleUser` command, where `exampleUser` is the user that should be the new `sudo` user.

## How to Delete a User

To delete a user, type in `sudo userdel exampleUser`, where `exampleUser` is the user you want to delete.
