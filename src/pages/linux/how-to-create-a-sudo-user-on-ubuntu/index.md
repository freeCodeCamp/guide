---
title: How to Create or Delete a User or Sudo User on Ubuntu
---

## How to Create a User

To create a new user, type the following command `sudo useradd exampleUser`, where `exampleUser` is the user you want to create. To add a password to this user, run the `sudo passwd exampleUser` command, where `exampleUser` is the user that you want to add a password to.

## How to Create a Sudo User

To create a `sudo` user, you need to create a regular user first using the command above. Then, add this user to the group called "sudoers" using the `sudo add exampleUser sudo` command, where `exampleUser` is the user that should be the new `sudo` user.

## How to Create a System service User
To create a system service user (user for running a specific service with no home-folder), type the following command `sudo useradd -r exampleUser`, where `exampleUser` is the name of the service you want to run with it. For added security you can also use `sudo useradd -r -s /sbin/nologin exampleUser`, this creates a service account without the ability to login.

## How to Delete a User

To delete a user, type in `sudo userdel exampleUser`, where `exampleUser` is the user you want to delete.
