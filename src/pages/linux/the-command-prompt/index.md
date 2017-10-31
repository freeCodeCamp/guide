---
title: The Command Prompt / Shell / Terminal / Console / tty
---
# The Command Prompt
As one of the oldest User Interfaces (UI), command prompts have been implemented in many ways. This has led to there being a few words that are used interchangeably in modern conversation that have slightly different meanings.
## A Very, Very Short History

1. In the beginning (19th century) was the <a href='https://en.wikipedia.org/wiki/Electrical_telegraph' target='_blank' rel='nofollow'>telegraph</a>. This allowed two people to exchange encoded messages over long distances. Many different devices were invented, but the most recognizable today is the "Morse Key", used to transmit "Morse Code".
![Morse Key](https://upload.wikimedia.org/wikipedia/commons/4/4e/Morsetaste.jpg)

1. Technological advancements led to the <a href='https://en.wikipedia.org/wiki/Teleprinter' target='_blank' rel='nofollow'>teletype machine</a> (tty), where the person required to receive the message was replaced by some kind of printer.![US Army tty machine](https://upload.wikimedia.org/wikipedia/commons/8/89/WACsOperateTeletype.jpg)
 
1. Early computers, like ENIAC, were programmed with some kind of hardware, like switches, dials, or patch cables. As the computers advanced, better Input/Output (IO) was needed, and so the commonly available teletype machines were converted for use.![ENIAC](https://upload.wikimedia.org/wikipedia/commons/6/6c/ENIAC_Penn1.jpg)

    * The tty's were large pieces of furniture on their own, and earned the name **console** for their similarities to other floor-standing furniture such as console televisions. As an electronic end-point for a mainframe, these devices were also called **terminals**.
    * tty printers were eventually replaced by Cathode Ray Tube (CRT) screens, which were also used in televisions before LCD and plasma was available. Interestingly, modern Linux computers can still be controlled using a tty machine! Click the image to go to a short Youtube video.<a href='https://youtu.be/-Ul-f3hPJQM' target='_blank' rel='nofollow'><img src='https://i.ytimg.com/vi/-Ul-f3hPJQM/hqdefault.jpg' /></a>

Today, Linux and Unix users still use the same terms, but with slight differences. Real and virtual terminals connections are managed by a program called **getty**, and you can switch between virtual terminals using Alt + Ctrl + [F1-F12]. When start a tty connection, getty asks for your login name. It then hands control to the **login** program, which asks for your password. Once that is entered, **login** starts the **shell** listed for your username in the /etc/passwd file.
In Graphical User Environments (GUI), users can access the command prompt using a **terminal emulator**, which provides the features of a tty, but within a window. There are many terminal emulators available to Linux users, such as **xterm**, **kterm**, and **rxvt**. The ones available will depend on which Linux distribution (distro, for short) you are using, and its defaults. Check your package manager to install others. Windows users can use **PuTTY** or other utilities to connect to a Linux system.

## The Shell
"Shell"s are programs that interpret commands. There are a number of them, such as <a href='https://www.gnu.org/software/bash/' target='_blank' rel='nofollow'>**B**ourne **A**gain **SH**ell</a> (BASH), <a href='https://docs.freebsd.org/44doc/usd/04.csh/paper.html' target='_blank' rel='nofollow'>C Shell</a> (csh/tcsh), and <a href='http://zsh.sourceforge.net/' target='_blank' rel='nofollow'>Z SHell</a> (zsh). If the internet was a mainframe, you could think of a shell as a particular web browser, like Firefox, Chrome, or Internet Explorer. They all provide similar functionality, but with different features. The most common default shell in Linux is BASH, but each user can switch temporarily or permanently to any other available shell. The shell is fully scriptable, meaning that programming concepts can be combined with shell and system utilities in order to create more complicated functions.

## Getting Started in BASH
Commands entered at a command prompt can come from the shell itself, such as **cd**, **exit**, or **export**. They can also come from external utilities, and in the case of most Linux distributions, is provided by the <a href='https://www.gnu.org/software/coreutils/coreutils.html' target='_blank' rel='nofollow'>Gnu tools</a>. See below for the most common commands.

### Getting Help
Immediate help is available for commands in one or more places.
1. Add "--help" after the command. This gives dumps usage information for the command to the terminal, similar to the next method.
```shell
$ ls --help
```
1. Use the "man" command before the command you want help with. This will open the manual page for the command, and you can scroll up and down. "q" to quit.
```shell
$ man ls
```
1. Use the "info" command, which is used like "man", but gives different information.
```shell
$ info ls
```

### The Prompt
The prompt, which is the bit of text in the shell to the left of the cursor, can sometimes change to show your current status, such as which directory you are currently in, which user you are logged in as, your computer's name, and *what privileges you have*. That last one is important to recognize. Usually the last character in the prompt, you will usually see a "$", which indicates normal user privileges. If you have "root" privileges, which belong to the system administrator, you will usually see a "#" as the last character. When browsing forums and getting help online, the commands that you must type will often be shown with this character. **You don't have to type it!**. e.g. 
```shell
$ ls -l
```
means you type "ls -l" at a normal prompt. 
```shell
# apt-get install node
```
means that you type "apt-get install node" using administrator privileges. How you elevate your privileges depends on your Linux distribution.

### Getting Root
1. **login**
    * Logging in as root is a *very bad idea*. This is why some versions of Linux disable users' ability to log this way. Those users are encouraged to use the next method, "sudo" from within their own user account.
    * If you do have to use a root console, be aware of its power. You will not be warned or asked to confirm for most tasks, even if a simple typo means deleting something important.
1. **sudo**
    * Add "sudo" before a command in order to switch to **S**uper **U**ser and **DO** (SUDO). This is how Ubuntu and its derivatives are configured to allow administrator access, and is given on a per-command basis. You are not given a root shell, and the next command you type will not have elevated privileges, unless you use "sudo" again.
  ```shell
  $ sudo apt-get update
  ```
    * Except for the first user on certain distros, users have to be added to a special list (found in /etc/sudoers) in order to use sudo. This is done with the "visudo" command. You should never edit the sudoers file with a regular text editor! visudo will make sure that you don't lock yourself out of your own system.
  1. **su**
    * "su", like "sudo", allows you to change to another user, except that by default, you will get another prompt as the user you switched to. On it's own, "su" will switch you to a root prompt, but with the current user's environment variables, such as $HOME for your home folder, and $PATH for the system path. This can lead to unexpected results, and if you want to use 'su' to switch to another user, add a hyphen after the command:
```shell
$ su -
```
This will switch you fully to a root prompt.
    * A username can be added to switch to that user, but will require that user's password. "sudo" can be used in combination with su to allow an administrator to switch to any user.
```shell
myUser@linux $ su - otherUsername
Password: (typed my password)
su: Authentication failure
myUser@linux $ sudo su - otherUsername
Password: (typed my password)
otherUsername@Linux $
```

### Relative and Absolute Paths
When using a command on a file, such as copying or deleting, the file can be referred to in one of two ways.
1. Relative
    * File location in relation to the current directory. There are two relative path operators in the shell, "." and "..". The first, "." means the current directory, so ```cat file.txt``` and ```cat ./file.txt``` are the same thing if file.txt is in the current folder. The other is "..", and means one folder up in the folder tree. So if you are in /home/user/projects/project-a and issue the command ```cd ..``` you will change to /home/user/projects. If the projects folder has subfolders named project-a, project-b, project-c, and you were in the project-a folder, you could switch to another using ```cd ../project-b```. There is also an "environment variable" in the shell called $HOME which points to your home folder. You can use this in BASH using a tilde character "~". The shell replaces the tilde for you when you hit enter, so as an example, you can change to your desktop folder using ```cd ~/Desktop```.
1. Absolute
    * File locations are specified from the root of the filesystem, and always have a leading slash. ```cd /home/frank/Desktop``` will go to frank's desktop folder, regardless of current path or user.

### Composing Commands
Shell commands mostly follow the same syntax, which is "command options files".  
e.g.:
```shell
$ ls -l *.txt
```
where "ls" gives a list of files and folders, "-l" changes the output of "ls" to a long listing, and "*.txt" restricts the list to files ending with ".txt". The options that are available will change for each command. Check the man page!
    * Individual commands can be connected together in a chain, where the output of one command becomes the input to another command. This is done with the "|" character, often called "pipe" or "bar". This is not a capital "i" or lowercase "L", nor is it the number "1". On US keyboards, it's found on one of the keys near "Enter". 
  In the following example, I will use 2 commands. The first, "cat", is short for concatenate, and can be use to put the contents of one file at the end of another (concatenation!). When using it with one file only, it writes the contents to standard output. The second command, "grep" is a utility that searches input for text matching a regular expression or simple string, and outputs lines where it is found.
```shell
  $ cat index.html | grep img
```
There are more than a few ways to do the same thing, but this will output every line in index.html that contains "img" to the terminal. This example only uses one "|", but you are not limited to that.

#### Chaining Commands
While the single ampersand operator "&" is used in BASH for job control (next section), the double ampersand has another meaning entirely. It is logical AND, and is used in between two commands so that the second command only runs if the first exits successfully (without error). The following example is used in Debian & Ubuntu based distributions to first update the list of packages, and then run a system upgrade.
```shell
$ sudo apt-get update && sudo apt-get dist-upgrade
```
Another option is the double-pipe "||", which means logical OR. It can be used when you want to run a command only when the first exits with an error. The following will create an archive called "project.tar" on the user's desktop from the files in a project folder, and if that fails, echo a message.
```shell
$ tar -cvf /home/user/Desktop/project.tar /home/user/project/* || echo "archive failed"
```

### Background Jobs
When you run a command in a terminal, the terminal is busy until the command is finished, and no other commands can be run. There is a job control system in Linux that allows you to suspend running commands, resume suspended commands in the background, and resume suspended commands in the foreground. This is useful for long-running scripts, or when you need to push something in to the background so that the terminal can be used for other things.
<p>To suspend a program that is running in the terminal use the key combination `Ctrl + z`. You will get back to your normal prompt, and the command appears to have quit. It hasn't, but has only been suspended. It's still visible in the jobs list by using `jobs` command to list all currently tracked jobs. I did `man ls` to get a manual page, and then suspended it. When I type `jobs` I get the following output:</p>

```shell
  $ jobs
  [1]  + suspended  man ls
```
From here, I can let it resume in the background by typing `bg %1` where the "1" is the job number found in the square brackets. I can bring it back to the foreground by typing `fg %1`.

## Common Commands
Command | Common Options | Use
----|----|----
cd | folder name,.. | change current directory



