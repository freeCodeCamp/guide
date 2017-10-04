---
title: C
---

# Hello World! - Your first C Program

## What is C?

C is a general purpose programming language which was invented by Dennis Ritchie between 1969 and 1973 at Bell Labs, and it has been used to develop the Linux Kernel. 

It was designed to provide low-level access to memory, to provide language constructs that map efficiently to machine instructions, and to require minimal run-time support. Along with C++ is widely used for micro controler programming and IOT such as <a href='https://www.arduino.cc/' target='_blank' rel='nofollow'>Arduino</a>.

## Hello world in C
```C
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
    return 0;
}
```

Let's break down the program step by step.

First we have:
```C
#include <stdio.h>
```
Which is the command for the compiler to include the stdio library that contain among other things the "I/O" funtions such as printf.

```C
int main(void)
{
}
```
 This is the declaration of the *main funtion* that is the first piece of code that is going to be executed when you run the program. The *int* before *main* indicate that the funtion is going to return an integral number (usually 0) when it has finished it's execution and the *void* inside the parenthesis mean that the funtion doesn't take any parameters.Finally the *{ }* symbols mark the beginning and the end of the funtion.
```C
printf("Hello World\n");
```
We arrive to the most important part of the program, the *printf( )* funtion which print the data passed as an argument into the screen.
In this case we have *"Hello World \n"* where we use the *" "* to indicate that *Hello World* is a string (text) and *\n* to display a new line.Finally we end the line wiht a semicolon *;*

Finally, we safely terminate the program with:

```C
return 0;
```

Be very carefull to add the *;* at the end of the statment because if you forget it the computer wouldn´t know where the command finish and the compiler would raise an error.

## Additional considerations

You may require some software to write and execute C/C++ code. I recommend using CodeBlocks for Windows and Linux, and XCode for Mac.

* For Windows: <a href='http://www.codeblocks.org/downloads/26' target='_blank' rel='nofollow'>Download Here</a>
 Use the link with the GNU/GCC compiler for windows.

* For Mac: <a href='https://developer.apple.com/xcode/' target='_blank' rel='nofollow'>Download for Mac Here</a>

* For Linux install the build-essentials and codeblocks packages with the package manager of your distribution. 
In Ubuntu, Debian and Linux Mint:
```bash
sudo apt-get install codeblocks build-essentials
```
