---
title: Ansible
---
## Ansible

Ansible is an open source _configuration management_ tool, written in Python. Ansible is clientless which means it is need only a Python interpreter (installed on Linux and macOS by default) and SSH connection. Since 2014 Ansible can manage Windows machines through native Powershell.

### Why do you need Infrastructure as Code(IaC)?

If you are going to reproduce your development environment, or the build / runtime environment of your application, you have many choices. For example you can document every single step you done: change a configfile, install or upgrade some tools, then extract and rename some files, etc. Then shipping these docs with your source code.

A better choice is to turn these documentation into a _playbook_. This way Ansible can do the hard work for your mates or users next time when they would like to contribute to or use your app. Write a _playbook_ can be complex of course but the format is a human readable YAML and you could split your _tasks_ into separate files.

IaC is an important thing of course for system operators who manage thousands of servers in the cloud. Automation is a must in this case.

### A simple workflow

You got a nice playbook.yml from your friend and you have just installed Ansible on your notebook. The playbook contains commands to create a new Virtual Private Server (VPS) [in the cloud](https://www.ansible.com/cloud), and installs all the requirements and configures everything. You just type a command and perk a coffee...

Icing on the cake if you put the result of this so called _provisioning_ into a [docker image](https://guide.freecodecamp.org/devops/docker)

### Installation

The easiest and best way to install Ansible is using pip:

`pip install ansible`

Ansible can manage Windows through Powershell but the controller machine must be *nix (Linux, macOS, BSD, Solaris...)
If you are on Windows, you can install it in a Virtualbox VM (with Vagrant it takes 3 commands and 5 minutes)


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Official documentation: https://www.ansible.com/get-started
Anybody can share their modules (so called _roles_): https://galaxy.ansible.com/
