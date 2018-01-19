---
title: Ansible
---
## Ansible
Ansible is an open source configuration management tool, written in Python. Ansible is clientless which means it is need only a Python interpreter (installed on Linux and macOS by default) and SSH connection. Since 2014 Ansible can manage Windows machines through native Powershell.

#### Introduction
There are usually a few steps involved in deploying your code into production (to the live site). The number of steps increases as your Site/App/Webapp becomes larger and more complex. 

The solution to this is automated deployment. Automation comes in the form of scripts that act as a set of instructions (just as all code does) outlining each of these steps. 

Ansible is an automation tool, often used for deployment as mentioned above, but increasingly used for other complex automations. 

It uses a language called <a href='https://en.wikipedia.org/wiki/YAML' target='_blank' rel='nofollow'>YAML</a> which allows you to describe the instuctions close to plain english, as you can see in this Ansible module example:

```YAML
---
- yum: name={{contact.item}} state=installed
with_items:
- app_server
- acme_software


- service: name=app_server state=running enabled=yes


- template: src=/opt/code/templates/foo.j2 dest=/etc/foo.conf
notify: 
- restart app server
```

Ansible modules, which are small task specific programs. Once they serve there intended purpose e.g. running your deploy script, these modules are removed by Ansible.  

A significant benefit of using Ansible is that it uses SSH (Secure SHell) by default, and the modules can reside on any machine (computer) not requiring servers, daemons or databases.

### Why do you need Infrastructure as Code(IaC)?

If you are going to reproduce your development environment, or the build / runtime environment of your application, you have many choices. For example you can document every single step you done: change a configfile, install or upgrade some tools, then extract and rename some files, etc. Then shipping these docs with your source code.

A better choice is to turn these documentation into a playbook. This way Ansible can do the hard work for your mates or users next time when they would like to contribute to or use your app. Write a playbook can be complex of course but the format is a human readable YAML and you could split your tasks into separate files.

IaC is an important thing of course for system operators who manage thousands of servers <a href='https://www.ansible.com/cloud' target='_blank' rel='nofollow'>in the cloud</a>. Automation is a must in this case.

### A simple workflow

You got a nice playbook.yml from your friend and you have just installed Ansible on your notebook. The playbook contains commands to create a new Virtual Private Server (VPS) in the cloud, and installs all the requirements and configures everything. You just type a command and perk a coffee...

Icing on the cake if you put the result of this so called provisioning into a <a href='https://guide.freecodecamp.org/devops/docker' target='_blank' rel='nofollow'>docker image</a>.

### Installation

The easiest and best way to install Ansible is using pip:

`pip install ansible`

Ansible can manage Windows through Powershell but the controller machine must be *nix (Linux, macOS, BSD, Solaris...) If you are on Windows, you can install it in a Virtualbox VM (with Vagrant it takes 3 commands and 5 minutes)

#### More Information:
<a href='https://www.ansible.com/how-ansible-works' target='_blank' rel='nofollow'>Learn more about how Ansible works</a>.

<a href='http://docs.ansible.com/' target='_blank' rel='nofollow'>Ansible documentation</a>.
