---
title: Puppet
---
## Puppet

Puppet is an open-source software configuration management tool. It runs on many Unix-like systems as well as on Microsoft Windows, and includes its own declarative language to describe system configuration.

Puppet is produced by Puppet, founded by Luke Kanies in 2005. It is written in Ruby and released as free software under the GNU General Public License (GPL) until version 2.7.0 and the Apache License 2.0 after that.

Puppet uses an client - server architecture, where the server is former called the puppet master and the clients as puppet agents.

The code is stored in so called puppet recieps. Some basic elements of puppet are described below. You also can read much more about that at the <a href='https://docs.puppet.com/' target='_blank' rel='nofollow'>puppet documentation</a>.

### Resources
Puppet ships with a number of pre-defined resources, which are the fundamental components of your infrastructure. The most commonly used resource types are files, users, packages and services. You can see a complete list of built-in resource types here.

Puppet revolves around the management of these resources. Let’s say, for example, we need to ensure that the ssh service is always up and running. The code below does this.

```puppet
service { 'ssh':
  ensure => running,
}
```
Here, the “service” is the resource type, and “ssh” is the resource we are going to manage. Each resource has attributes, and here, “ensure” is an attribute of the ssh service. We’re setting the “ensure” attribute to “running” to tell Puppet that ssh ought to be running. Each time we check, if it’s not running, Puppet will try to put it into a running state.

### Manifests
This resource declaration has to live somewhere, which leads us to the next Puppet building block: manifests. Manifests are the files that contain Puppet code. These files end with a .pp file extension. So if I wanted to save this ssh resource definition, I would save it in a manifest.

You can write manifests that contain stand-alone resource declarations. In the example above, we might save our ssh resource definition in a file called “ssh.pp.” You could also write a manifesto to group a number of resources together, and use a class to apply them to your nodes.

### Classes
When we create a class, it’s really a set of configurations wrapped together — resources, variables and more advanced attributes. Anytime we assign this class to a machine, it will get those configurations. Here’s what the class definition looks like:

```puppet
class openssh {

  package { 'openssh-server':
    ensure => installed,
  }

  file { '/etc/ssh/sshd_config':
    ensure => file,
    owner  => 'root',
    mode   => '0600',
  }

  service { 'ssh':
    ensure => running,
  }

}
```
This code wraps the resource declaration in a class, so that the puppet master can apply it to any node assigned that class. It doesn’t matter how many nodes are assigned to a class — it could be one, or one hundred.

Published on 23 July 2014 by
￼ Elizabeth Plumb
When you’re starting out learning Puppet, it can feel like you’re drinking from a fire hose. There are so many documents and resources available to read and learn from, it’s hard to know where to start.

I went through this experience as a new technical solutions engineer at Puppet Labs. A few of Puppet’s core concepts were not immediately clear to me, and since they are essential to learning and using Puppet, it’s important to nail them down so you can build on this foundational knowledge.

First things first: It’s important to understand what Puppet Enterprise does before learning how to use it. Puppet Enterprise is a configuration management tool, meaning that it defines which software and settings a server should have to do its job. It can set up your environment initially, and check periodically to ensure that servers are always in your desired state.

You use the declarative, readable Puppet DSL (Domain Specific Language) to define the desired end state of your environment, and Puppet Enterprise does the rest. So if you have a standard configuration that every new Linux server should receive, or need to deploy Tomcat across all of your servers in the development environment, Puppet Enterprise is the right tool for the job.

If you’ve never heard of Puppet Enterprise, here’s a short two-and-a-half minute video to help you understand what it does. If you find that video helpful, you should check out the short videos in the Puppet Workshop Course Library that explain core Puppet concepts. Most videos offer a short quiz at the end so you can test yourself on the concepts, which serve as the building blocks of your puppet code.

I'm about to dive into defining some terms we use in Puppet, and one term we use throughout Puppet documentation is "node." This can refer to any server or virtual machine (VM) that is managed by Puppet.

Resources
Puppet ships with a number of pre-defined resources, which are the fundamental components of your infrastructure. The most commonly used resource types are files, users, packages and services. You can see a complete list of built-in resource types here.

Puppet revolves around the management of these resources. Let’s say, for example, we need to ensure that the ssh service is always up and running. The code below does this.

service { 'ssh':
  ensure => running,
}
Here, the “service” is the resource type, and “ssh” is the resource we are going to manage. Each resource has attributes, and here, “ensure” is an attribute of the ssh service. We’re setting the “ensure” attribute to “running” to tell Puppet that ssh ought to be running. Each time we check, if it’s not running, Puppet will try to put it into a running state.

Manifests
This resource declaration has to live somewhere, which leads us to the next Puppet building block: manifests. Manifests are the files that contain Puppet code. These files end with a .pp file extension. So if I wanted to save this ssh resource definition, I would save it in a manifest.

You can write manifests that contain stand-alone resource declarations. In the example above, we might save our ssh resource definition in a file called “ssh.pp.” You could also write a manifesto to group a number of resources together, and use a class to apply them to your nodes.

Classes
When we create a class, it’s really a set of configurations wrapped together — resources, variables and more advanced attributes. Anytime we assign this class to a machine, it will get those configurations. Here’s what the class definition looks like:

```puppet
class openssh {

  package { 'openssh-server':
    ensure => installed,
  }

  file { '/etc/ssh/sshd_config':
    ensure => file,
    owner  => 'root',
    mode   => '0600',
  }

  service { 'ssh':
    ensure => running,
  }

}
```

This code wraps the resource declaration in a class, so that the puppet master can apply it to any node assigned that class. It doesn’t matter how many nodes are assigned to a class — it could be one, or one hundred.

### Modules
Puppet modules allow you to share the Puppet code that you or someone else has written to manage a piece of your infrastructure. If there is something that you want to manage with Puppet, there is probably a module for it on the Puppet Forge, which includes community-contributed modules, as well as those written by Puppet Labs employees. You’ll also find a list of Puppet Enterprise Supported Modules, which are written and tested by Puppet Labs employees. This list is constantly growing.

What is a Puppet module? It’s really just a collection of files and directories that can contain Puppet manifests, as well as other objects such as files and templates, all packaged and organized in a way that Puppet can understand and use. When you download a module from the Forge, you are downloading a top-level directory with several subdirectories that contain the components needed to specify the desired state. When you want to use that module to manage your nodes, you classify each node by assigning to it a class within the module.

Now let’s put all these pieces together:

* Resources can be contained within classes.
* Classes can live in a manifest.
* Manifests can live in a module.

### Catalog
In order for the nodes in your environment to interpret the classes that have been assigned to them, Puppet compiles a catalog. The catalog describes the resources that need to managed, specifying the states those resources should be in, so each node can configure itself based on those definitions. Once the catalog is applied, the Puppet agent produces a report showing which resources were managed, and any changes that were needed to move into your desired state.

Now that we’ve laid down some basic concepts, download the learning VM to put those to use. Once you’ve gone through the learning VM, try to puppetize something you’re already comfortable with (see this doc for basic module directory structure). Maybe you want to manage the motd, or install ntp on a node. Check out the Puppet Forge to see examples of Puppet code written by members of the Puppet community and Puppet Labs employees.
