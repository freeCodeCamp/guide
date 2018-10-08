---
title: Basic Linux Commands
---
## Basic Linux Commands

When starting out with linux, there are some basic commands everyone should know.

  1. **cd** - change directory 
  - cd followed by a directory or file path will take you inside that directory(folder).
  
  2. **ls** - list command
  - Type `ls` and the contents of the current directory will be displayed.
  
  3. **man** - manual command
  - Shows you the manual for the following command. This is very helpful when trying to figure out how an unfamiliar command works. For example, type `man ls` for everything you need to know about the ls command. Type `q` to exit.
  
  4. **pwd** - path
  - Type `pwd` to display the path to your current directory.
  
  5. **mkdir** - make directory
  - This command, followed by the name you wish to name your directory, creates a new directory. `mkdir folder1` will make a new directory called folder1.
  
  6. **rmdir** - remove directory
  - Removes the directory that follows the command. `rmdir folder1` will delete the directory named folder1 if it exists.
  
  7. **rm** - remove
  - This command removes files, not directories. `rm file.txt` will remove the file named file.txt as long as it exists and is in the current directory.
  8. **touch** — creates file
  - The touch command is used to create a file. It can be anything, from an empty txt file to an empty zip file. 'touch new.txt' will create a new file with name new.
  9. **mv** — move
  - Use the mv command to move files through the command line. We can also use the mv command to rename a file. For example, if we want to rename the file “text” to “new”, we can use 'mv text new'.

##Useful Applications in Linux:

 1. **Wine** - used to run .exe files in linux.

If you want to explicitly specify that you want to use your GPU for a program, use: DRI_PRIME=1 steam(or any other program), https://wiki.archlinux.org/index.php/PRIME

 2. **Proxyman** - to set system-wide proxy with the help of a script, https://github.com/himanshub16/ProxyMan

 3. **OpenVPN** -

- Goto https://tcpvpn.com , select a server, create an account, download the ovpn config file.

- https://askubuntu.com/questions/187511/how-can-i-use-a-ovpn-file-with-network-manager, install this if you cant import ovpn files.

- Goto NetworkManager , import the ovpn config file (port 443), enter your username and password, goto advanced settings and set your http proxy.

- Connect to the vpn and make sure that no proxy is set in your environment.


