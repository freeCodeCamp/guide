---
title: Puppet
---
## Puppet

Puppet is an open-source software configuration management tool. It runs on many Unix-like systems as well as on Windows, and includes its own language to describe system configurations.

The configuration hence created can be applied on the same system(The Master) or can be applied on a group of other systems (Knows as the agent) by using a client-server setup

Puppet can cut down on time spent repeating basic tasks, and help make sure that your configurations are consistent and accurate across a group of systems

Puppet Resource Syntax:

```
type { 'title':
  attribute => value
}
```



#### More Information:

(Installing Puppet in a Master-Agent setup)[https://www.digitalocean.com/community/tutorials/how-to-install-puppet-4-in-a-master-agent-setup-on-ubuntu-14-04]
