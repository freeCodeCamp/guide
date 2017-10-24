---
title: Vagrant
---
## Vagrant

### Install Vagrant

To install Vagrant, first find the <a href='https://www.vagrantup.com/downloads.html' target='_blank' rel='nofollow'>appropriate package</a> for your system and download it. Vagrant is packaged as an operating-specific package. Run the installer for your system. The installer will automatically add vagrant to your system path so that it is available in terminals. If it is not found, please try logging out and logging back in to your system (this is particularly necessary sometimes for Windows).

### Verify Installation
After installing Vagrant, verify the installation worked by opening a new command prompt or console, and checking that vagrant is available:
```
$ vagrant
Usage: vagrant [options] <command> [<args>]

    -v, --version                    Print the version and exit.
    -h, --help                       Print this help.

# ...
```

### Getting Started
```
$ vagrant init hashicorp/precise64
$ vagrant up
```

### Boxes
Boxes are added to Vagrant with vagrant box add. This stores the box under a specific name so that multiple Vagrant environments can re-use it. If you have not added a box yet, you can do so now:
```
$ vagrant box add hashicorp/precise64
```

### Finding more Boxes
The best place to find more boxes is <a href='https://vagrantcloud.com/boxes/search' target='_blank' rel='nofollow'>HashiCorp's Vagrant Cloud box catalog</a>.

### Commen
Youtube: <a href='https://www.youtube.com/watch?v=LyIyyFDgO4o' target='_blank' rel='nofollow'>Getting Started With Vagrant</a> by <a href='https://www.youtube.com/user/phpacademy' target='_blank' rel='nofollow'>Codecourse</a>

#### More Information:
The Vagrant website: <a href='https://www.vagrantup.com' target='_blank' rel='nofollow'>vagrantup.com</a>
