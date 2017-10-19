---
title: File Handling
---
## File Handling

File Handling is most important part of a programmer . In C language we use a structure pointer of a file type to declare a file

```c
FILE *fp;
```
C provides a number of build-in function to perform basic file operation

**fopen()**   **-**   **create a new file or open a existing file**
**fclose()**   **-**   **close a file**
**getc()**   **-**   **reads a character from a file**
**putc()**   **-**   **writes a character to a file**
**fscanf()**   **-**   **reads a set of data from a file**
**fprintf()**   **-**   **writes a set of data to a file**
**getw()**   **-**   **reads a integer from a file**
**putw()**   **-**   **writes a integer to a file**
**fseek()**   **-**   **set the position to desire point**
**ftell()**   **-**   **gives current position in the file**
**rewind()**   **-**   **set the position to the begining point**

### Opening a file
  The **fopen()** function is used to create a file or open a existing file
  
  ```c
  fp = fopen(const char filename,const char mode);
  ```
  
  In C there are many mode for opening a file 
  **r**  **-**   **open a file in reading mode**
  **w**  **-**   **opens or create a text file in writing mode**
  **a**  **-**   **opens a file in append mode**
  **r+**  **-**   **opens a file in both reading and writing mode**
  **a+**  **-**   **opens a file in both reading and writing mode**
  **w+**  **-**   **opens a file in both reading and writing mode**
  
  Here's an  example of reading and writing data to a file
  
  ```c
  #include<stdio.h>
#include<conio.h>
main()
{
 FILE *fp;
 char ch;
 fp = fopen("hello.txt", "w");
 printf("Enter data");
 while( (ch = getchar()) != EOF) {
    putc(ch,fp);
 }
 fclose(fp);
 fp = fopen("hello.txt", "r");
 
 while( (ch = getc(fp)! = EOF)
    printf("%c",ch);
    
 fclose(fp);
}
```



