---
title: Creating and Managing Groups in RedHat Linux
---

# Creating and Managing Groups in RedHat Linux

Here's a quick guide to creating groups, and then how to add users to groups, all from the command line on the Linux platform.

Step 1: Create a New Group:<br>
```groupadd <Group-Name>```<br>
Step 2: Get Group Information<br>
```vim /etc/group```<br>
Step 3: Add User to Group<br>
```One Method``` ```To add user to group is type username after groupname in /etc/groupfile```<br>
```Second Method```
```usermod -aG <Group-Name> <User-Name>```
