---
title: File Handling
---
## File Handling

## Introduction

A file is a sequence of bytes stored on the disk along with the group of related data. File is a ready made structure. Structure contains some data which tells the computer what kind of file(e.g. .bmp, .jpg, .txt) it is and some other data to tell the computer what that file contains.

## EOF
It is a sybolic value to indicate that the end of file condition has occurred.
[End-of-file - Wiki](https://en.wikipedia.org/wiki/End-of-file)

C language provides a number of built-in functions to perform basic operations on files. 

- [fopen();](#fopen)
- [fclose();](#fclose)
- [fgetc();](#fgetc)
- [fputc();](#fputc)
- [fscanf();](#fscanf)
- [fprintf();](#fprintf)
- [fseek();](#fseek)
- [ftell();](#ftell)

## fopen();
In C language we use a FILE pointer to declare a file. 
``` C
FILE *fp = fopen(const char *filename, const char *mode);  // declares a pointer to file with filename
```
In the above line of code filename is the name of the file to be opened and the [mode] (#mode) specifies the purpose of opening the file.
```*fp```is the file pointer which will hold reference to the operand file.
## fclose();
```fclose()``` is a counter part of ```fopen()```. ```fclose()``` is used to close the already opened file.

General syntax for ```fclose()``` is given below
```C
int fclose(FILE *fp);
```
Here ```*fp``` is the pointer to the already opened file. ```fclose()``` returns zero if the operation is successful else it returns EOF.

## mode
There are a number of modes available in File Handling.
- ```"r"```   Open in reading mode ( if exist otherwise ```fopen()``` returns ```NULL```)
- ```"w"```   Open in writing mode ( if file already exist then overwrite the content otherwise creates a new file )
- ```"a"```   Open for append i.e. Data is added at the End of File ( if file does not exist then creates a new file )
- ```"r+"```  Open for reading and writing ( if exist otherwise ```fopen()``` returns ```NULL```)
- ```"w+"```  Open for writing and reading ( if file already exist then overwrite the content otherwise creates a new file )
- ```"a+"```  Open for reading and appending

## fgetc();
It is used to read a file character by character. 
General Syntax for ```getc()``` is given below
```C
  while (ch = getc(fp); != EOF)
  {
    printf("%c", ch);
  }
```
Here again ```*fp``` is a pointer to the file that we want to read. ```while``` loop will run untill the [end-of-file](#EOF) has reached.

## fputc();
It is used to write to a file character by character. 
General Syntax for ```putc()``` is given below
```C
  while (ch = getc(fp1); != EOF)
  {
    putc(ch, fp2);
  }
```
Here we are using 2 file pointers ```*fp1``` (to read) and ```*fp2``` (to write). Above code snippet copy the content of ```*fp1``` to ```*fp2```.

## fscanf();
It is used to read  from the text file ```*fp```. General syntax is given below
```C
int fscanf(FILE *stream, const char *format, ...)
```
e.g.
```C
   int integer;
   float real_number;
   char str1[10];
   fscanf(fp, "%s %d %f", str1, integer, real_number);  
```
## fprintf();
It is a counter part of ```fscanf()```. General syntax is given below
```C
int fprintf(FILE *stream, const char *format, ...)
```

## fseek();
This function helps us to move in the file between any 2 distinct points in the file. It takes as input number of bytes you want to move, the starting position from where you want to start and the pointer to the file.
```C
int fseek(FILE *fp, long int offset, int whence);
```
```offset``` means the number of bytes to offset from whence. ```whence``` indicate the position from where the offset is added. It is specified by one of the following constants. 

- ```SEEK_SET```  Beginning of the file.
- ```SEEK_CUR```  Current position of the file pointer. 
- ```SEEK_END```  End of the file. 

## ftell();
This function is used to tell the position of cursor in the file in measure of no. of characters. 
```C
long int ftell(FILE *fp);
```
E.g. if the the cursor is at 10th character of ```*fp```, where ```*fp``` points to the text file "file.txt". And file content is "FreeCodeCamp". Then 10th character of the file is FreeCodeC```a```mp. Now if you use ```fgetc(fp)``` and then use ```printf()``` to print the current character the ```a``` will be the answer.
```C
char ch;
ch = fgetc(fp);
printf("%c", ch);
```
Answer will be
```a```

## Note 
- You can use only one mode on one file at a time. That is if you've opened a file in read (r) mode then you can not write into the same file, if you want to write as well just open it using "r+" mode or "a+".

## Other resources
[File Handling - CS50](https://youtu.be/QOD2hHiHpn0)
