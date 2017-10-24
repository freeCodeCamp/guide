---
title: Quoting in Bash
---

## What is Quoting?
Quoting your variables is very important in bash. The reason is that even a slight error in your command could cause bash to interpret a very different result. For example:

```
# Don't actually run this!!!
zach@marigold:~$ #rm -rf /home/zach/ project/
```

The above example would delete everything under your home directory, as well as the "projects" directory. This is obviously very bad! The better way to do that would be to use quotations:

```
# Don't actually run this!!!
zach@marigold:~$ #rm -rf  "/home/zach/ project/"
```

Now, if this were to fail, then nothing would happen; Bash would interpret the rm target as one long string, instead of two strings.


## What kind of quotations can we use?

There are three types of quotations:
* "Double quotes"
* 'Single quotes'
* \`Command quotes\`

Double quotes are used to surround a string, while still allowing the bash interpreter to interpret variables, like so:

```
zach@marigold:~$ echo "My shell is: $SHELL"
My shell is /bin/bash
```

Single quotes however, do not allow the bash interpreter to interpret variables:

```
zach@marigold:~$ echo 'My shell is: $SHELL'
My shell is $SHELL
```

Finally, we have command quotes. Commands that are inside of a command quote execute before bash interprets the rest of the line:

```
zach@marigold:~$x=`which bash`
zach@marigold:~$echo "$x"
/bin/bash
```
