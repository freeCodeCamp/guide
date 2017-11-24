---
title: Vagrant
---
## Vagrant

Vagrant is cross-platform virtual machine software. [Hashicorp](https://www.hashicorp.com/) created [Vagrant](https://www.vagrantup.com/) to prevent the "it works on my machine" development problem. Vagrant allows a development team to have a standard configuration across several different providers (Virtualbox, Hyper-V, Docker -- called "providers") to be able to quickly and easily reproduce a standard environment.

Vagrant uses the concept of "boxes" to understand the development VM. A "Vagrantfile" contains standard configuration that will explain to Vagrant how to build the VM. Hashicorp provides a [catalog of public boxes](https://app.vagrantup.com/boxes/search) that you can use to get started. 

You can select from many different provisioners, including shell scripts, Chef, Puppet, or Ansible. A provisioner will allow you to do additional configuration to a box as it is creating. In addition, this allows you to use the same configuration management tools that you are accustomed to at your place of business. 

#### Getting Started with Vagrant

First, you need to install Vagrant on your system [get it here](https://www.vagrantup.com/downloads.html). Vagrant supports Linux, Windows, and Mac OSX. You will also need a provider tool. You can choose [Virtualbox](https://www.virtualbox.org/) for an easy start.

Next, create a new directory with a name for your box. For instance, `mkdir my-vagrant-box` will work. Change directories into your new directory, and then make this an active Vagrant folder by running `vagrant init hashicorp/precise64`. This creates a Vagrant file and hidden .vagrant directory, into which it will download the hachicorp/precise64 box.

Once that is done, you will run `vagrant up` to power on and configure the VM based on your Vagrantfile. When that completes, run `vagrant ssh` to connect via SSH to your new development machine! You can run any commands that you would normally run on an Ubuntu machine, including exit to leave the session.

When you are done, use `vagrant destroy` to delete this environment. 

This whole process is explained in more depth on [Vagrant's website](https://www.vagrantup.com/intro/getting-started/index.html).

#### Vagrant Tips

By default, if you are using a Linux Vagrant box, there will be a directory '/vagrant' that is shared with the directory you created earlier. For instance, if you created the directory 'my-vagrant-box', you should be able to add files to it and see them in your '/vagrant' folder when you SSH into your Vagrant box. 