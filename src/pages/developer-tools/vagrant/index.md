---
title: Vagrant
---
## Vagrant

### Install Vagrant

To install Vagrant, first find the [appropriate package](https://www.vagrantup.com/downloads.html) for your system and download it. Vagrant is packaged as an operating-specific package. Run the installer for your system. The installer will automatically add vagrant to your system path so that it is available in terminals. If it is not found, please try logging out and logging back in to your system (this is particularly necessary sometimes for Windows).

### Verify Installation
After installing Vagrant, verify the installation worked by opening a new command prompt or console, and checking that vagrant is available:
```bash
$ vagrant
Usage: vagrant [options] <command> [<args>]

    -v, --version                    Print the version and exit.
    -h, --help                       Print this help.

# ...
```

### Getting Started
```bash
$ vagrant init hashicorp/precise64
$ vagrant up
```

### Boxes
Boxes are added to Vagrant with vagrant box add. This stores the box under a specific name so that multiple Vagrant environments can re-use it. If you have not added a box yet, you can do so now:
```bash
$ vagrant box add hashicorp/precise64
```

### Finding more Boxes
The best place to find more boxes is [HashiCorp's Vagrant Cloud box catalog](https://vagrantcloud.com/boxes/search).

### Common
Youtube: [Getting Started With Vagrant](https://www.youtube.com/watch?v=LyIyyFDgO4o) by [Codecourse](https://www.youtube.com/user/phpacademy)

#### More Information:
The Vagrant website: [vagrantup.com](https://www.vagrantup.com)
=======
Vagrant is a tool to **"Create and configure lightweight, reproducible, and portable development environments."**

This means Vagrant takes all the headache out of setting up a local development environment. Vagrant replaces it with almost a single configuration file. This file is where you can pick and choose what features you want your server to have. 

Developers have a huge selection of ways to build their web development environment. They can use "local" options, such as installing pre-built "all-in-one" server stacks. Install the components from the source. Or via package management systems like Homebrew, Apt, and Yum 

Some developers are happy with configuring their own environments, only to fnd it does not work in production. Leading to the well worn phrase  "Well it works on my computer". This is to common and it happens when environments differ by even the most trivial detail. 

Vagrant avoids that and allows easy management and control of many virtual machines. It is built on top of VirtualBox and VMWare, and it provides many exciting capabilities. 

Developers can create isolated development environments. They can experiment with new products and technologies. Or install new versions of existing packages by creating a private data center on their laptop. All this is available in an easy-to-manage and totally safe. Creating a silo that wont interfere with your main  system.

#### Getting Started with Vagrant

First, you need to install Vagrant on your system [get it here](https://www.vagrantup.com/downloads.html). Vagrant supports Linux, Windows, and Mac OSX. You will also need a provider tool. You can choose [Virtualbox](https://www.virtualbox.org/) for an easy start.

Next, create a new directory with a name for your box. For instance, `mkdir my-vagrant-box` will work. Change directories into your new directory, and then make this an active Vagrant folder by running `vagrant init hashicorp/precise64`. This creates a Vagrant file and hidden .vagrant directory, into which it will download the hachicorp/precise64 box.

Once that is done, you will run `vagrant up` to power on and configure the VM based on your Vagrantfile. When that completes, run `vagrant ssh` to connect via SSH to your new development machine! You can run any commands that you would normally run on an Ubuntu machine, including exit to leave the session.

When you are done, use `vagrant destroy` to delete this environment. 

This whole process is explained in more depth on [Vagrant's website](https://www.vagrantup.com/intro/getting-started/index.html).

#### Vagrant Tips

By default, if you are using a Linux Vagrant box, there will be a directory '/vagrant' that is shared with the directory you created earlier. For instance, if you created the directory 'my-vagrant-box', you should be able to add files to it and see them in your '/vagrant' folder when you SSH into your Vagrant box. 
