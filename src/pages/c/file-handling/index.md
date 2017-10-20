---
title: File Handling
---
## File Handling
In C, file handling is predominantly done through several functions:
* `fopen` - Open a file handle.
* `fread` - Read from a file.
* `fwrite` - Write to a file.
* `fclose` - Close a file handle.

All of these functions use a FILE pointer to keep track of what file is being operated on.

## Opening
A file is first opened using `fopen` which takes a filename and mode, in the form of a character pointer or c-style string. The mode can be "r" for read-only, "w" for writing, or "a" for appending. "b" can be added to treat the file as bytes instead of characters ("rb", "wb"). A pointer to the file handle is returned.

```c
// Open the file 'some_cool_file.txt as a binary file that we want to write to.
FILE *file_handle = fopen("some_cool_file.txt", "wb");
```

## Reading and Writing
A file is then read from or written to using `fread` and `fwrite` respectively. Each takes a `void*` to a buffer to read/write, the size of the object in bytes, the number of objects to be written, and the file handle pointer. The number of objects read/written is the return value.

```c
// Write 10 characters into the buf array from the file.
char buf[10];
int num_read = fread(buf, 1, 10, file_handle);

// Write an array of structs to the file.
struct Data {
  int foo, bar;
} the_data[10];
struct Data the_data[10] = {{5, 10}, {20, 25}, /* ... more data ... */ };
int num_written = fwrite(the_data, sizeof(struct Data), 10, file_handle);
```

## Closing
An operating system can only have so many file handles open at a time, so after using a file we must close the file and let the operating system clean up any resources that it used. This is done with `fclose` which takes the file handle pointer and returns 0 on succes.

```c
int result = fclose(file_handle);
```

#### More Information:
There is actually more functions available in the file I/O library which are used for special cases. These can be found in the first link below along with details for the functions covered here.
* [Glossary of file IO functions](http://en.cppreference.com/w/c/io)
* [fopen](http://en.cppreference.com/w/c/io/fopen)
* [fread](http://en.cppreference.com/w/c/io/fread)
* [fwrite](http://en.cppreference.com/w/c/io/fwrite)
* [fclose](http://en.cppreference.com/w/c/io/fclose)
