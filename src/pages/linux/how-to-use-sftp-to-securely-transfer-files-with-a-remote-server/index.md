---
title: How to Use Sftp to Securely Transfer Files with a Remote Server
---
## How to Use Sftp to Securely Transfer Files with a Remote Server

SFTP (Secure File Transfer Protocol) is similar to FTP (File Transfer Protocol) in that is allows you to transfer files between your local machine and a remote system. 
The advantage that SFTP has over FTP is that SFTP includes <a href="https://www.ssh.com/ssh/" target="_blank">SSH</a>. This ensures that your connection between your local machine and the remote system will be encrypted. In most situations SFTP should be used over FTP due to it's added layer of security.

There are many GUI clients that you can download and use to transfer files over SFTP. However, in this tutorial I will demonstrate a basic use of SFTP on the command line.

## Using SFTP

**1. Connecting to a remote server over sftp**

In this example I will show you how to make the initial connection between your local machine and the remote system using SFTP. 

```shell
sftp user@<remote system>
```
**Note:** It is important to ensure that you run the above command from the directory you are going to be transferring files to and from on your local machine. Otherwise you will have to define the full path on your local server each time that you run the command to transfer or import files.  

When you are connected to the remote server you should see the following SFTP prompt in your thermal:

```shell
sftp>
```
The above prompt indicates that you are now connected to the remote server and are ready to begin transferring files.

At any time if you need help you can simply type `help` in your prompt and you will be presented with a list of available commands accompanied by a brief explanation of what each command does.

For Example:
```shell
sftp> help
Available commands:
bye                                Quit sftp
cd path                            Change remote directory to 'path'
chgrp grp path                     Change group of file 'path' to 'grp'
chmod mode path                    Change permissions of file 'path' to 'mode'
chown own path                     Change owner of file 'path' to 'own'
df [-hi] [path]                    Display statistics for current directory or
                                   filesystem containing 'path'
exit                               Quit sftp
get [-afPpRr] remote [local]       Download file
reget [-fPpRr] remote [local]      Resume download file
reput [-fPpRr] [local] remote      Resume upload file
help                               Display this help text
lcd path                           Change local directory to 'path'
lls [ls-options [path]]            Display local directory listing
lmkdir path                        Create local directory
ln [-s] oldpath newpath            Link remote file (-s for symlink)
lpwd                               Print local working directory
ls [-1afhlnrSt] [path]             Display remote directory listing
lumask umask                       Set local umask to 'umask'
mkdir path                         Create remote directory
progress                           Toggle display of progress meter
put [-afPpRr] local [remote]       Upload file
pwd                                Display remote working directory
quit                               Quit sftp
rename oldpath newpath             Rename remote file
rm path                            Delete remote file
rmdir path                         Remove remote directory
symlink oldpath newpath            Symlink remote file
version                            Show SFTP version
!command                           Execute 'command' in local shell
!                                  Escape to local shell
?                                  Synonym for help
```

**2. Transferring files from your local machine to the remote system**

In this example I will demonstrate how to transfer a file and a directory from your local machine to a remote system. 

Before you begin transferring files it is always a good idea to make sure that you are in the correct directory. We can accomplis this typing the command`pwd` into your terminal.

For Example:
```shell
sftp> pwd
```

Your output should be the present working directory in which you would like to transfer files to. If it is not you can use the `cd` command to change to the appropriate directory. 

For Example: 
```shell
sftp> cd <name or path to directory> 
```

When transferring files from your local machine to a remote system you will use the `put` command.

The following example demonstrates how to transfer a file from your local machine to a remote system:

```shell
sftp> put <local file>
```
The above command will transfer a file from your local machine and place it in the directory that you are currently connected to on the reomote system.

If you need to transfer an entire directory over to the remote system you will have to use the `-r` option then the name of the directory you would like to transfer:

For Example:
```shell
sftp> put -r <local directory>
```

**3. Importing files from a remote system to your local machine**

In this example I will demonstrate how to import a file or directory from a remote system to your local machine. 

When importing files/directories from a remote server to your local machine you will use the command `get`.

The following example demonstrates how to import a file from a remote system to your local machine:

```shell
sftp> get <remote file>
```

In addition you can use the `-r` opeion if you would like to import a directory and its contents from the remote server to your local machine:

For Example:
```shell
sftp> get -r <remote directory>
```

That's all there is to it! The commands I provided should be enough to get you going using SFTP. Again if you need help you can alway's type `help` in your terminal. Also if you would like a more in depth guide on the usage and available options included with this tool you can simply type `man sftp` in any Unix/Linux terminal to bring up the SFTP manual.
