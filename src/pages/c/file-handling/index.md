---
title: File Handling
---
## File Handling

### Introduction
If you've written the C `helloworld` program before, you've already done file IO in C!  Congratulations! :tada:

```c
/* A simple hello world in C. */
#include <stdlib.h>

// Import IO functions.
#include <stdio.h>

int main() {
    // This printf is where all the file IO magic happens!
    // How exciting!
    printf("Hello, world!\n");
    return EXIT_SUCCESS;
}
```

Now you might be thinking, "this justs prints text to my screen.  How is this file IO?"
The answer isn't obvious at first, and needs some understanding about the UNIX system.
Under a UNIX system, everything is treated as a file, meaning you can read and write from it.
This means that your printer can be abstracted as a file since all you do with a printer is write with it.
It is also useful to think of these files as streams, since as you'll see later, you can redirect them with the shell.

So how does this relate to `helloworld` and file IO?

When you call `printf`, you are really just writing to a special file called `stdout`, short for __standard output__.
`stdout` represents, well, the standard output as decided by your shell, which is usually the terminal.
This explains why it printed to your screen.

There are two other streams (i.e. files) that are available to you with effort, `stdin` and `stderr`.
`stdin` represents the __standard input__, which your shell usually attaches to the keyboard.
`stderr` represents the __standard error__ output, which your shell usually attaches to the terminal.

### Rudimentary File IO, or How I Learnt to Lay Pipes
Enough theory, let's get down to business by writing some code!
The easist way to write to a file is to redirect the output stream using the output redirect tool, `>`.
If you want to append, you can use `>>`. _N.b. these redirection operators are in_ `bash` _and similar shells._

```bash
# This will output to the screen...
./helloworld
# ...but this will write to a file!
./helloworld > hello.txt
```

The contents of `hello.txt` will, not surprisingly, be

```
Hello, world!
```

Say we have another program called `greet`, similar to `helloworld`, that greets you given your name.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Initialize an array to hold the name.
    char name[20];
    // Read a string and save it to name.
    scanf("%s", name);
    // Print the greeting.
    printf("Hello, %s!", name);
    return EXIT_SUCCESS;
}
```

Instead of reading from the keyboard, we can redirect `stdin` to read from a file using the `<` tool.

```bash
# Write a file containing a name.
echo Kamala > name.txt
# This will read the name from the file and print out the greeting to the screen.
./greet < name.txt
# ==> Hello, Kamala!
# If you wanted to also write the greeting to a file, you could do so using ">".
```

### The Real Deal
The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell.
To accomplish this, you will use a function called `fopen`.  This function takes two string parameters, the first being the file name and the second being the mode.
Mode is basically permissions, so `r` for read and `w` for write.  You can also combine them, so `rw` would mean you could read and write to the file.  There are more modes, but these are the most used.

After you have a `FILE` pointer, you can use basically the same IO commands you would've used, except that you have to prefix them with `f` and the first argument will be the file pointer.
For example, `printf`'s file version is `fprintf`.

Here's a program called `greetings` that reads a from a file containing a list of names and writes to another file the greetings.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Create file pointers.
    FILE *names = fopen("names.txt", "r");
    FILE *greet = fopen("greet.txt", "w");

    // Check that everything is OK.
    if (!names || !greet) {
        fprintf(stderr, "File opening failed!\n");
        return EXIT_FAILURE;
    }

    // Greetings time!
    char name[20];
    // Basically keep on reading untill there's nothing left.
    while (fscanf(names, "%s\n", name) > 0) {
        fprintf(greet, "Hello, %s!\n", name);
    }

    // When reached the end, print a message to the terminal to inform the user.
    if (feof(names)) {
        printf("Greetings are done!\n");
    }

    return EXIT_SUCCESS;
}
```

Suppose `names.txt` contains the following:

```
Kamala
Logan
Carol
```

Then after running `greetings` the file `greet.txt` will contain:

```
Hello, Kamala!
Hello, Logan!
Hello, Carol!
```

Super awesome, right! :smile:

### More Information:
- <a href='https://en.wikibooks.org/wiki/C_Programming/File_IO' target='_blank' rel='nofollow'>Wikibooks page on file IO</a>
