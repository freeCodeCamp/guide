---
title: File Handling
---

## File Handling

Working with files is important for many programs. C has many functions for handling and manipulating files. C has a lot of functions to work with files, but here are some basic ones.

### The Basics

#### Opening a file

The `fopen()` function opens a file.

Prototype:
```C
FILE* fopen(const char* filename,
      const char* mode);
```

`filename` is the name of the file to open, `mode` is any of the following:

- `r`: Read - opens a file for reading. The file must exist.
- `w`: Write - creates a new file to write to. If the file already exists, it will be completely overwritten.
- `a`: Append - opens a file for writing. Will not overwrite a pre-existing file, and ignores all re-positioning functions (`fsetpos`, `fseek`, `rewind`).
- `r+`: Read/update - The same as `r`, but allows writing to the file as well. The file must exist.
- `w+`: Write/update - The same as `w`, but allows reading from the file as well. If the file already exists, it will be completely overwritten.
- `a+`: Append/update - The same as `a`, but allows reading from the file as well. Re-positioning functions (fsetpos, fseek, rewind) only affect the next read operation, but don't affect write operations.



Appending `b` to any mode opens the file in binary mode i.e. `rb`, `w+b`, `a+b`, etc.

Returns a file pointer representing the opened file, returns `NULL` if the file wasn't opened.

#### Closing a file

The `fclose()` function closes a file.

Prototype:
```C
fclose(FILE* fp);
```

- `fp`: The file to close.

Returns 0 when successfully closed, returns `EOF` (end of file, usually -1) on failure.

Example:

```C
#include <stdio.h>

int main() {
    FILE *fp;  // Create new file pointer
    fp = fopen("File.txt", "r"); // Open File.txt in reading mode

    // Make sure the file opened correctly
    // fp will be NULL if there was an error
    if(fp != NULL) {
        fclose(fp); // Close the file
    }
    return 0;
}
```

### Writing to a File

The `fputs()` function writes to a file.

Prototype:
```C
int fputs(const char* str,
          FILE* fp);
```

- `str`: The string to write.
- `fp`: The file to write to.

Returns a positive integer when the write is successful, otherwise returns `EOF`.

Example:

```C
#include <stdio.h>

int main() {
    FILE *fp;  // Create new file pointer
    fp = fopen("File.txt", "w"); // Open File.txt in writing mode

    // Make sure the file opened correctly
    // fp will be NULL if there was an error
    if(fp != NULL) {
        fputs("Hello, World!", fp); // Writes "Hello, World!" to the file fp
        fclose(fp); // Close the file
    }
    return 0;
}
```

### Reading From a File

The `fgets()` function reads a line from a file.

Prototype:
```C
char* fgets(char* dest,
            int num,
            FILE* fp);
```

- `dest`: The character array that will hold the read characters.
- `num`: The number of characters to read.
- `fp`: The file to read from.

Returns `dest` on success, otherwise returns a `NULL` pointer

Note: `fgets()` will at most read one less than `num` (`num`-1) characters to reserve space for a null terminator character (`\0`). `fgets()` stops reading when it encounters a newline character (`\n`), which is also copied to `dest`.

Example:

```C
int main() {
    FILE *fp;  // Create new file pointer
    char dest[100];
    fp = fopen("File.txt", "r"); // Open File.txt in reading mode

    // Make sure the file opened correctly
    // fp will be NULL if there was an error
    if(fp != NULL) {
        // Read from fp, and check that dest is not NULL
        if (fgets(dest, 100, fp) != NULL) {
            printf("%s\n", dest);
        }
        fclose(fp); // Close the file
    }
    return 0;
}
```

#### More Information:

- [`fopen` on cplusplus.com](http://www.cplusplus.com/reference/cstdio/fopen/)
- [`fclose` on cplusplus.com](http://www.cplusplus.com/reference/cstdio/fclose/)
- [`fputs` on cplusplus.com](http://www.cplusplus.com/reference/cstdio/fputs/)
- [`fgets` on cplusplus.com](http://www.cplusplus.com/reference/cstdio/fgets/)
