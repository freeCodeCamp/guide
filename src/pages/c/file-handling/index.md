---
title: File Handling
---

In C programming language the programmer can use the `fopen()` function to create a new file or open an existing one. This call will initialize an object of the type FILE, which contains all the information necessary to control de stream. The prototype of this function is as follows:
```C
FILE *fopen(const char * filename, const char * mode);
```

Here, **filename** is a string literal, which you will use to name your file, and access **mode** can have one of the following values:

| Mode        | Examples           | 
| ------------- |-------------|
| r     | Opens an existing text file for reading purpose. | 
| w      | Opens a text file for writing. If it doesn't exist, then a new file is created. Here your program will start writing content from the beginning of the file.      |  
| a | Opens a text file for writing in appending mode. If it doesn't exist, then a new file is created. Here your program will start appending content in the existing file content.       |
| r+ | Opens a text file for both reading and writing.      |
| w+ | Opens a text file for both reading and writing. It first truncates the file to zero length if it exists, otherwise creates a file if it doesn't exist.     |
| a+ | Opens a text file for both reading and writing. It creates the file if it doesn't exist. The reading will start from the beginning but writing can only be appended.      |


## Example
```C
void openFile() {
  FILE* f;
  
  f = fopen("fileName.txt", "r");
}
```



