---
title: 10 Simple and Useful Linux Commands
---
# 10 Simple and Useful Linux Commands
The commands listed here are basic, and will help you get started quickly. But they’re also powerful, and they’ll continue to be useful as your Linux expertise expands.
1. `echo` This takes the text you give it and sends it somewhere—to back to the screen, to a file, or to another command. Example: `echo "hello!"`
1. `cat` To display the contents of a text file, just type `cat myfile`.
1. `find` It does what it says, and it’s good at it. Use it to locate files by path, size, date, owner and a bunch of other useful filters. Example: `find . -type f -mtime -1h # List files in this directory modified in the past hour`.
1. `date` Just type date when you want to know what time it is. Example: `date "+It's %l:%m%p on %A"`. Use it in a script to name files according to the current date.
1. `ls` What's in this directory? Combine `ls` with some useful flags to display and sort directory contents by date and size. It also gives you lots of options for formatting the output.
1. `pwd` Where am I? Linux can be unforgiving, particularly when you delete something. Make sure you know are before you issue your commands.
1. `mail` Linux's mail program isn’t good looking, but it can be really helpful. You can create a message and add text, recipients, and attachments all in one command. Example: `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
1. `cut` When you have a string with separators in it, use `cut` to filter out certain fields. Example: `echo "this, that, and the other" | cut -d, -f2 # "that"`
1. `grep` To find lines of text that contain a certain string, use grep. Example: `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
1. `sed` Use sed to find and change a substring in a piece of text. Example: `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`

Use these commands in scripts and at the command line. They're all very powerful commands, and Linux's man page has a lot more information about each one.
