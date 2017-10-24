---
title: Vagrant
---
## Vagrant

Vagrant is a tool for building and managing virtual machine (VM) environments. Virtual machines can be used for any cause but are particularly useful to developers and DevOps.

### Why Vagrant is Useful

As a developer, by using a VM, you can have a local environment for testing code, that is the same as the production environment, regardless of the environment you use for coding.

For DevOps, VMs are very usefull for having a highly configurable, disposable machine for testing infrastracture, configurations, scripts, or anything else.

With Vagrant, to use a VM you only need a single file, called a `VagrantFile`, which contains the VM as well as all the configuration needed. This way you can easily create a specific, isolated development environment which is very portable and can be shared and used by all members of a team.

Vagrant also has pre-defined `boxes` which are base VMs, which can easily be cloned and expanded upon.

Another very cool feature of Vagrant is the use of `synced folders`. It is possible to sync the folders of the VM, with folders in the guest machine. By doing that, you can use your favorite editor on local files and simultaneously have those files synced to the running VM.

#### More Information:
<a href="https://www.vagrantup.com/" target='blank' rel='nofollow'>Vagrant website</a>


