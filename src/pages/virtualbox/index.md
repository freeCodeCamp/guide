---
title: VirtualBox
---

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png" width="200" height="200"/>

VirtualBox is an open source Virtual Machine program from Oracle. It allows users to virtually install many operating systems on virtual drives, including Windows, BSD, Linux, Solaris, etc. 

# Installation
VirtualBox can be downloaded here: 
[VirtualBox Downloads](https://www.virtualbox.org/wiki/Downloads)

# Setup
- To set up your first Virtual Machine, download the .iso file from your desired Operating System site. 

- Next you will hit the "New" button in VirtualBox, and name your VM with any name you like. 

- The application will run you though several more configurations. Most importantly, note how much storage you select for 
  the drive. This is the maximum size the machine file can be, which will take up storage on your device. Also, not how
  much memory you provide the machine, because these resources will be unavailable to your host OS while running the VM. 
  
For more information visit the 
[VirtualBox Manual Chapter 1](https://www.virtualbox.org/manual/ch01.html)

# Run the Machine
- Select your new VM, click settings, and navigate to the Storage tab. 

- Next click the Disk shaped "Adds optical drive" Button on the "Controller IDE" line.

- Choose your .iso file

- Close settings and hit Start!

- Now your machine will run and install the operating system on the virtual drive. 

- After you're done with your machine for the first time, go back to the Storage tab in Settings. Make sure to remove
  the .iso file, or remove the empty drive slot. There should only be one. 
  
  Congratulations! You've run your first Virtual Machine in VirtualBox. 
  
  Visit the
  [VirtualBox Manual](https://www.virtualbox.org/manual/UserManual.html) for even more information about using and configuring machines.
