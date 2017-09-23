---
title: How to Create/Delete a User or Sudo User on Ubuntu
---
The following instruction will help you to create/delete user in Ubuntu linux and control their rights. For all actions in this article use your favorite command line terminal.

## How to Create a User ?

To create a user, type the following command "sudo useradd exampleUser", instead of "exampleUser" use a user name you want to create, and that's it, you just created new user. Your newly baked user has no password, let's add it. Type in "sudo passwd exampleUser", instead of "exampleUser" use a user name you want to add password.

## How to Create a Sudo User ?

It's impossible to create sudo user, instead you have to firstly create a regular user using command above and then add this user to group called "sudoers", after that your user will have sudo rights, to acheve this, type in "sudo add exampleUser sudo", instead of "exampleUser" use a user name you want to create and can be called as "Sudo User".

## How to Delete User ?

To delete user, simply type in "sudo userdel exampleUser", instead of "exampleUser" use a user name you want to delete.
