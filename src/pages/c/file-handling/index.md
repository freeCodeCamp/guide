---
title: File Handling
---
## File Handling

### Introduction

Like most other languages, C supports a number of functions that have the ability to perform basic file operations, such as : 

  * Opening a file
  * reading data from a file
  * Writing data into a file
  * Closing a file

This section will help you through understanding these core functions which forms the base for the entire file operations in C.

---
### Defining & Opening A File

The data type of a file variable (or a file pointer) is defined as **FILE** in the library of standard I/O function defenitions.Plus, inorder to perform any file operations you must include the header file **<stdio.h>** and **<file.h>** . To open a file, we simply create a construct called **file pointer** of FILE data type and we call the fucntion fopen() by passng the necessary arguments.

```C
#include<stdio.h>
#include<file.h>

<some pieces of codes>
FILE *file_ptr;
file_ptr = fopen("filename","mode");
<remaining code>
```

The argument **filename** is simply the name of the file in the working directory, and the parameter **mode** can take the following values:

  | Mode        | What it does           |
  | ------------- |:-------------:|
  | r    | open the file for reading only |
  | w     | open the file for writing only      |
  | a | open the file for adding data       |
  | r+ | open the file for both reading and writing (file is opened at the begining)     |
  | w+ | open the file for both writing and reading    |
  | a+ | same as 'a', plus it does both writing and reading      |
  
  ---
  ### Performing Read And Writing
  
  When it comes to performing read and write file operations, **putc()** and **getc()** are the commonly used functions, they are   designed to handle one character at a time.
  The usage of getc() can be well understood from the following snippet
  ```c
  FILE *file_to_read;
  file_to_read = ("vowels.txt","r");
  char character;
  while((character = getc(file_to_read) != EOF)
    printf("%c",character);
  fclose(file_to_read);
  ```
  The above snippet would simply produce the output 'aeiou' (assuming that the contents of 'vowels.txt' is 'aeiou')

similarly, putc() function would stream out each character from the source to a destination file/stream.
 ```c
  FILE *file_to_read;
  FILE *file_to_write;
  file_to_read = ("vowels.txt","r");
  file_to_write = ("vowels_copy.txt","w");
  char character;
  while((character = getc(file_to_read) != EOF)
    putc(character,file_to_write);
  fclose(file_to_read);
  ```
As you've guessed, the above snippet would loop over each character and put it inside the file 'vowels_copy.txt' (this file would be created if it's no existant)

---

### Closing A File

As a best practice, any file which was opened to perform a task must be closed as soon as the task is completed. This ensures that the buffer is cleared and there wont be any data leakage or file corruption.
Inorder to close a file, we simply use the **fclose()** function.
```c
 FILE *input_file;
 input_file = fopen("potatoes.txt","r");
 <some file-operations>
 fclose(input_file);
 ```
