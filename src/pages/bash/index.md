---
title: Bash
---

## What is Bash?

<a>Bash</a> (short for Bourne Again SHell) is a Unix shell, and a command language interpreter. A shell is simply a macro processor that executes commands. It's the most widely used shell packaged by default for most Linux distributions, and a successor for the Korn shell (ksh) and the C shell (csh).

Many things that can be done Linux operating system can be done via command line. Some examples are...
* Editing files
* Adjusting the volume of the operating system
* Fetching web pages from the internet
* Automating work you do every day

You can read more about bash <a href="https://www.gnu.org/software/bash/">here</a>, via the <a href="https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents">GNU Documentation</a>, and via the <a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10">tldp guide</a>.


## Using bash on the command line (Linux, OS X)

You can start using bash on most Linux and OS X operating systems by opening up a terminal.  Let's consider a simple hello world example. Open up your terminal, and write the following line (everything after the $ sign):

```
zach@marigold:~$ echo "Hello world!"
Hello world!
```

As you can see, we used the echo command to print the string "Hello world!" to the terminal.  


## Writing a bash script 

You can also put all of your bash commands into a .sh file, and run them from the command line. Say you had a bash script with the following contents:

```
#!/bin/bash
echo "Hello world!"
```

Then you could run the script like so:

```
zach@marigold:~$ ./myBashScript.sh
Hello world!
```

The script only has two lines. The first indicates what program to use to run the file (in this case, bash). The second line is the command we want to use, echo.

### More Information:

* Wikipedia: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
* tldp.org Guide to Bash: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc2
* gnu.org Bash manual: https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents
