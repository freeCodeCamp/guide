---
title: Ansible
---
## Ansible

Ansible is a simple to use automation tool.  Ansible can be used to automate deployments, updates, security, systems management, container provisioning and more.  The configuration files are easy to manage YAML files written in plain English.  Installation is simple and due its Master-Push format, there are no agents needed on remote machines.  Communications with remote machines is via SSH.

### Installation on Ubuntu Servers 14.04 or newer
Installation via the Ansible PPA on Ubuntu servers is recommended.

First make sure your system is up to date.
```
$ sudo apt-get update
$ sudo apt-get upgrade
```
Next you will want to add the following package to your system
```
$ sudo apt-get install software-properties-common
```
Add the ppa:ansible/ansible to your system
```
$ sudo apt-add-repository ppa:ansible/ansible
```

Update your repos again
```
$ sudo apt-get update
```

Finally, Install the package
```
$ sudo apt-get install ansible
```

#### More Information
The true power of Ansible is in using playbooks.  Read more about configuration and use of Ansible on [Ansible's official documentation](https://docs.ansible.com/ansible/latest/index.html). 
