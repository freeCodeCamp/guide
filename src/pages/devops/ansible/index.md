---
title: Ansible
---
## Ansible

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/256px-Ansible_logo.svg.png"> 

Ansible is a configuration management tool for Linux, Unix and Windows. Ansible was first released in 2012, supported commercially by AnsibleWorks Inc. and acquired by Red Hat in 2015. The platform was built by Micheal DeHaan in Python and PowerShell. 

As with most configuration management software, Ansible has two types of servers: controlling machines and nodes. First, there is a single controlling machine which is where orchestration begins. Nodes are managed by a controlling machine over SSH. The controlling machine describes the location of nodes through its inventory.

To orchestrate nodes, Ansible deploys modules to nodes over SSH. Modules are temporarily stored in the nodes and communicate with the controlling machine through a JSON protocol over the standard output. When Ansible is not managing nodes, it does not consume resources because no daemons or programs are executing for Ansible in the background.

In contrast with popular configuration management software — such as Chef, Puppet, and CFEngine — Ansible uses an agentless architecture. With an agent-based architecture, nodes must have a locally installed daemon that communicates with a controlling machine. With an agentless architecture, nodes are not required to install and run background daemons to connect with a controlling machine. This type of architecture reduces the overhead on the network by preventing the nodes from polling the controlling machine.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Read more on <a href="https://en.wikipedia.org/wiki/Ansible_(software)">Wikipedia</a>

