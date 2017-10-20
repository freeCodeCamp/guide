---
title: File Handling
---
# File Handling
File handling is all about reading from and writing to files. It's one of the ways we can get input in C. Stuff to handle this sort of thing is actually what makes up a lot of that `<stdio.h>` that we've been using.

## An example: Reading
Assume that there's a file to be read, and that the path to the file is `path_to_file`. Replace "path_to_file" with the file you want to read (make sure it's in quotes), or a string containing the path to the file you want to read (it should not be in quotes in this case).
```
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    char read_character;

    FILE *file_pointer;
    file_pointer = fopen("path_to_file", "r");

    if(file_pointer == NULL) {
        perror("That file doesn't exist!\n");
        exit(EXIT_FAILURE);
    }

    while( (read_character = fgetc(file_pointer)) != EOF){
        print("%c", read_character);
    }

    fclose(file_pointer);

    return 0;
}
```

So there's some new stuff to consider here! First is the inclusion of `stdlib.h`. This contains some functions that we use later: `perror()` and `exit()`. After the declaration of main, a character is declared. We'll be using this later when we want to print characters.

Also new is `FILE *file_pointer;`. `FILE` is a *typedef*, meaning that there's a chunk of code somewhere to give `FILE` certain properties. In this case, we make a pointer of the type `FILE`.

Later, we set that equal to `fopen("path_to_file", "r")`. `fopen` is a function that opens a file. The first parameter is the path to the file. The second is the file mode- in this case we've specified mode `r`, which is "read" mode. This will allow us to use `file_pointer` to read the file at `path_to_file`.

If `fopen` wasn't able to the open the file, it's probably because the file doesn't exist and it will return `NULL`. You won't be able to do anything with the file in this case, so that's why it's a good idea to check if it's null. If it is null, you can give an error and exit using `perror()` and `exit()`.

Next, we do the actual file reading. The content within the while loop is using `fgetc(file_pointer)`. `fgetc` gets a character from a file. It keeps track of the last time you got a character from a file, so every time you call it, it will get the next character. Whatever character gets returned is assigned to `read_character`, the character we declared earlier.

Assignments like that one return the value that was assigned. As a result, we can check if the character returned was the EOF character. EOF, or End Of File, indicated that the file has ended. As a result, this line is getting a character, and will run the code within the loop until there is no more file to read.

The code within the brackets is pretty simple: it prints the character that just got read. As a result, the while loop reads through and prints every character in the file.

After this is done, we don't need the file anymore. As a result, you should close it using `fclose()`. Then, return to indicate the code has completed, and you have successfully read a file!

## Another example: Writing
Here's a look at writing to a file. Like before, assume that "path_to_file" is a path to a file you'd like to write to on your computer, and make sure to change it to something valid if you try this code for yourself.
```
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    FILE *write_to_me;

    write_to_me = fopen("path_to_file", "w");

    fprintf(write_to_me, "This is a test of writing to a file! fprintf takes all the same arguments as printf. Check this out: %i \n", 10);

    printf("Printed to file!\n");

    return 0;
}
```

Just like before, there's the inclusion of `stdlib.h` and the declaration of `main` and `FILE`. Notice the subtle difference in fopen, however: while the previous example had a mode of "r", this has a mode of "w" for "write". This allows you to use fopen to write to the file. However, be aware that writing to a file means to set the contents of a file, meaning that the previous content will be totally overwritten.

We don't bother checking if the file exists because fopen in write mode will create it if it doesn't, so `fprintf` gets called right away instead. `fprintf` works just like `printf`, but it takes the additional parameter of a `FILE` at the beginning, and it will print to the file instead of the console.

## More modes
By now you've seen the read and write modes, but there are more.
### Appending
Append to a file using the `a` file mode. This means that printing won't overwrite the file like when `w` is used. Instead, they will be placed at the end.

### Read Extended
Read extended means that a file is opened for reading, but will also have the ability to be written to. This allows you to read and write to the same file.

### Write Extended
Like read extended, this allows you to write and read a file. However, because it is write extended, it keeps the properties of write by getting rid of the contents of the file. It will also create a file if it doesn't exist.

### Append Extended
Append extended, according to the standard, is to "Append; open or create file for update, writing at end-of-file.". It will write to the end of the file and will update its contents.

# Before you go on...
## A review
* `FILE` lets us make pointers to files
* `fopen()` allows us to open files
* There are several read modes for different purposes
* `fgetc()` and `fprintf` allow for reading and writing files, although there are other options for methods.
