---
title: Ansible
---
## Ansible

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

#### More Information:
<a href='https://www.ansible.com/how-ansible-works' target='_blank' rel='nofollow'>Learn more about how Ansible works</a>.

<a href='http://docs.ansible.com/' target='_blank' rel='nofollow'>Ansible documentation</a>.
