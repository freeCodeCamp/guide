---
title: Puppet
---
## Puppet

Puppet is a open source configuration management tool. It runs on Unix-like systems as well as on Microsoft Windows, and includes its own [declarative language](https://en.wikipedia.org/wiki/Declarative_language) to describe configuration.

Puppet is produced by Puppet(company), which was founded by Luke Kanies in 2005. It is written in C++ and Clojure and released as free software under the GNU General Public License (GPL) until version 2.7.0 followed by Apache License 2.0 there after.

To know more about the company: [Puppet](https://puppet.com/)

### Features

User describes the system resources and their state, either using Puppet's declarative language or a Ruby DSL ([domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language)). The information is stored in files called "Puppet manifests". Puppet discovers the system information via a utility called Facter, and compiles the Puppet manifests into a system-specific catalog containing resources and resource dependency, which are applied against the target systems. 

Puppet is model-driven, requiring limited programming knowledge to use.<br />

Puppet comes in two versions namely, Puppet Enterprise and Open Source Puppet. Apart from providing functionalities of Open Source Puppet, Puppet Enterprise also provides [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface), [APIs](https://en.wikipedia.org/wiki/Graphical_user_interface) and command line tools for node management.

### Architecture

Puppet usually follows a client-server architecture. The client is known as an agent and the server is known as the master. For testing and simple configuration, it can also be used as a stand-alone application run from the CLI (command line interface).

Puppet architecture consists of:

* Configuration language:  The Puppet programming language is a declarative language that describes the state of a computer system in terms of "resources", which represent underlying network and operating system constructs.
 
Puppet resource syntax:

```
type { 'title':
  attribute => value
}
``` 
Example resources representing a Unix user:

```
user { 'harry':
  ensure => present,
  uid    => '1000',
  shell  => '/bin/bash',
  home   => '/var/tmp'
}
```
* Resource abstraction: Puppet allows users to configure systems in a platform-agnostic way by representing operating system concepts as structured data. Rather than specifying the exact commands to perform a system action, user creates a resource which Puppet then translates into system-specific instructions which are sent to the machine to be configured. 

* Transaction: A normal Puppet run has the following stages:
1. Agent send facts from Facter to the master.
2. Puppet builds a graph of the list of resources and their interdependencies, representing the order in which they need to be configured, for every client.
3. The actual state of the system is then configured according to the desired state described in manifest file.
4. Finally, the agent sends a report to the master, about the changes that were made and notifies about any errors that occurred.
