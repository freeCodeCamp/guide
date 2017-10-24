---
title: C
---

# Hello World! - Your first C Program

## Getting the most out of this course
Make sure that you're comfortable with all of the concepts in this part of the guide before moving on. Getting your first program running is important because it will allow you to follow along with the examples, which is another good thing to do- practice makes perfect! Concepts that might be confusing will have an annotation that links to an appendix. If you don't understand a concept, make sure that you consult the appendix for more information.

## Course Goal
The goals of this course are to teach the C language to beginners. Ideally, someone who has never touched a computer language before will be able to know C by following these guides. However, they will still be useful to more experienced programmers by including a summary at the end of each article. Although the content taught here is transferable to microcontrollers like the Arduino, it is not the focus of this guide.

## What is C?

C is a general purpose programming language invented by Dennis Ritchie between 1969 and 1973 at Bell Labs. Since then, it has been used to create things like the Linux Kernel, which allows software to interact with hardware on Linux-based operating systems. It can do this, and other low-level operations, because it was designed to be very close to machine code while still being human-readable. Because of this, it provides direct access to computer memory and hardware. This makes it very useful in hardware and robotics applications where having access to those features quickly is important.

C, like other low-level languages, requires compilation. The compilation process takes the C code that can be read by a person and turns it into code that can be read and executed by a computer. Compilation requires a compiler, which can either be used from the command line or can be used in an IDE.

If you would prefer to use the command line, consider `gcc`. It can be found by default on GNU+Linux operating systems and on Mac, and is easy to get on Windows. For beginners, however, having an IDE may be more comfortable. Consider CodeBlocks or XCode if you're interested in being able to write and run code from a GUI.

Now that you have that background, let's start with our 'Hello, World' program. 'Hello, World' is a traditional way of getting started with a language: it shows that we can write code and make it run, so it's a good place to start!

## Hello world in C

```C
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
    return 0;
}
```

Let's break this program down step-by-step.

First is the `#include`:
```C
#include <stdio.h> // This is called preprocessor directives
```
This is an instruction to the compiler to find and include a set of header files. Header files contain additional code that we can use. In this case, the compiler has been instructed to include `<stdio.h>`, which contains all kinds of useful functions like `printf()`. We'll get into detail about what functions are later, but for now just remember that a function is a collection of code that we can use.

```C
int main(void)
{
}
```
This code declares the main function. The main function is special- it will always get called and is always the 'main' part of your program. If this isn't in your program, your program can't run and won't compile.

Starting the function declaration with `int` means that this function will give an `int` value when it's done running through its code- it's this function's output. `int` is the 'integer' data type, and integers are whole numbers like -3, 0, or 18. So we know that this code will run, and when it's done, it will give us back an integer. By convention, this integer is 0.

Next is `main`. `main` is the name of this function, and as you learned earlier, it's important to have a `main` function because your program won't work without it. `main` is followed by `(void)`. This tells the compiler that this function doesn't take any parameters, meaning that it has no input.

This might not make a lot of sense right now, but you'll be learning more about this when you start reading about functions in C later. For now, just remember that `main` is required for your C program, it isn't taking any input, and it's giving a number as its output.

Finally, there are the brackets: `{` and `}`. These mark the beginning and end of the function. The open curly bracket (`{`) marks the beginning, and the close curly bracket (`}`) marks the end. Everything between the two is within the function.

Now let's look at the meat of the program:

```C
    printf("Hello, World!\n");
```

`printf` is a function that takes text and prints it to the screen. The parenthesis indicates what information we want the `printf` function to take and print to the screen. We show that this is a string we want printed by surrounding it in quotes "like this".

Notice the \n found within the quotes- this tells the `printf` function to print a newline. A newline is what gets printed when you hit enter on your keyboard. Without explicitly telling C to print a newline, everything will be printed on the same line.

Finally, the printf() statement is concluded with a semicolon (`;`). This shows that this line of code is over. Without it, the compiler doesn't know where one line ends and another begins, so it's important to include.

The program ends with a return statement:
```C
return 0;
```
This shows that the function is over and that it should end by giving a value of 0 to whatever made it run. When you're running code on your computer, this is good to have because it allows other programs to interact with yours in a better way.

As before, this line ends with a semicolon to indicate that the line has completed.

## Compilation and Running
You can save your hello world file as whatever you want, but it needs to end with the .c file extension. In this example, the file has been named "helloworld.c", because that is a clear name with a .c file extension.

There are many ways to compile and get C code running on your computer. Here are a few:

#### Compilation and running from the command line with GCC
If you're running Mac or GNU+Linux, you've already got GCC installed.

In order to run your C program, it needs to be compiled. In order to compile from the command line using gcc, run the following command from your terminal:
```shell
gcc -o helloworld ./helloworld.c
```
`gcc` is the Gnu C Compiler, and it will compile the C file we give it into a program that can be run by your computer.

`-o helloworld` tells GCC that you want the compiled file (the output of gcc) to be a file called "helloworld". The final part of the command tells GCC where the C file to be compiled can be found. If you aren't comfortable with navigating from the command line, this step will be hard, but that's okay- it's easy to learn and come back, or you can try from an IDE.

Once you've got it compiled, run the following command:
```shell
./helloworld
```

If everything has gone well, you should see `Hello, World!` printed to the screen.

#### Compilation and running C with CodeBlocks
[Codeblocks can be downloaded from here.](http://www.codeblocks.org/downloads/26)
Make a new program with `file` -> `new` -> `file`, select C/C++ source, select C as your language, and then copy over the helloworld.c text that you read through earlier. Compile and run the code with `Build` -> `Build and Run`.

#### Compilation and running C with Dev-C++
[Dev-C++ can be downloaded from here.](https://sourceforge.net/projects/orwelldevcpp/)
Make a new program with `file` -> `new` -> `Source File`, then copy over the helloworld.c text that you read through earlier and then save the file with`file` -> `save As`  as hello.c , and Compile and run the code with `Execute` -> `Compile & Run`.

#### Compilation and running C with XCode
[XCode can be downloaded from here.](https://developer.apple.com/xcode/)
Make a new program with `File` -> `New` -> `Project` -> `OS X`. Then, select "New Command Line Tool". Name it whatever you want and select C as the language.

To run the code, click `Product` -> `Run`.

# Before you go on...

## A review
* C is useful because it's small, fast, and has access to low-level operations. Because of this, it gets used a lot in robotics, operating systems, and consumer electronics, but not in things like webpages.
* A C program has a few critical parts:
 * The include statement, which tells the C compiler where to find additional code that will be used in the program
 * The main function, which is where the code will first be executed and is required in order to compile
 * Stuff within that main function which will get executed, including a return statement that closes the program and gives a value to the program that called it
* C needs to be compiled in order to run.

## Important Points
In modern systems, size of all pointer types on a given platform is same i.e. whether it is ‘pointer to char’ or ‘pointer to int’ or ‘pointer to pointer to int’ etc., the size of all these pointers is same.
In C, an identifier (e.g. variable) can consists of letters, digits and underscores only. But it can’t start with a digit e.g. 9var is invalid.
Unlike ‘long long int’, there’s nothing like ‘long long double’ in C. Besides, real data types (i.e. float, double, long double) can’t be unsigned.
In C, ‘printf(“%d”,090);‘ is invalid because an octal constant consists of the prefix 0 optionally followed by a sequence of the digits 0 through 7 only.
Real constants (e.g. 1.414) has data type as double. To convert them to float, we need to suffix them with f or F (e.g. 1.414f or 1.414F).
 

Modulus operator (%d) isn’t defined for real types however library functions fmod(), fmodf(), fmodl() from math.h can be used for double, float and long double respectively.
In C, any of the 3 expressions of for loop i.e. for(exp1 ; exp2 ; exp3) can be empty. Even all of the three can be empty.
The controlling expression of a switch statement i.e. switch(exp) shall have integer type (i.e. int, char etc.) only.
When continue statement is hit in while or do-while loops, the next executed statement is controlling expression of while or do-while loops. But when continue statement is hit in for loop, the next executed statement is expression3 which is called increment expression as well.
As per C standard, continue can be used in loop body only. And break can be used in loop body and switch body only.
 

In C, goto statement can be used inside functions only and its label can point to anywhere in the same function only.
In switch body, two case can’t result in same value though having only one case or only default is okay. In fact, switch body can be empty also.
As per C standard, a jump statement causes an unconditional jump to another place and all goto, continue, break, return are jump statements.
In C, typedef is used to create alias of any other type. It can be used to create alias for ‘array’ and ‘function pointer’ as well.
Multiple aliases of different types can be created using one typedef only. For example, ‘typedef int INT, *INTPTR, ONEDARR[10];’ is completely valid.
 

The only storage-class specifier that shall occur in a parameter declaration is register. That’s why even ‘fun(auto int arg)’ is incorrect.
In C, signed, unsigned, short and long are Type specifiers and when they are used, int is implicitly assumed in all of these. So ‘signed i; unsigned j; short k; long l;’ is valid.
Though const and volatile look opposite to each other but a variable can be both const and volatile.
const is a Type qualifier and a variable qualified with const means that the value of variable isn’t modifiable by the program.
volatile is a Type qualifier and a variable qualified with volatile means that value of variable is subject to sudden change (possibly from outside the program)
 

A function can’t have an explicit array as return type i.e. ‘int [5] func(int arg1)’ is invalid. However, indirect methods can be used if array like info needs to be output from a function (e.g. using pointers).
Though sizeof() looks like a function, it’s actually an operator in C. Also, sizeof() is a compile time operator. That’s why the output of ‘printf(“%d”,sizeof(printf(“GQ”)));’ would be same as ‘printf(“%d”,sizeof(int));’. Basically, operand of sizeof() operator isn’t evaluated at run time. Variable length array (introduced in C99) is exception for this.
While assigning any function to a function pointer, & (address of) is optional. Same way, while calling a function via function pointer, * (value at address) is optional.
In C, for macros with arguments, there can’t be any space between macro name and open parenthesis.
C language doesn’t provide any true support for 2D array or multidimensional arrays. For example, a 2D array is simulated via 1D array of arrays.
 

Important point is that array size can be derived from its initialization but that’s applicable for first dimension only. For example, ‘int arr[][2] = {1,2,3,4}’ is valid but ‘int arr[2][] = {1,2,3,4}’ is not valid.
Dereferencing of void pointer isn’t allowed because void is an incomplete data type.
In C, initialization of array can be done for selected elements as well. Specific elements in array can be initialized using []. For example, ‘int arr[10] = {100, [5]=100,[9]=100};’ is legal in C. This initializes arr[0], arr[5] and arr[9] to 100. All the remaining elements would be 0.
As per C standard, if array size is defined using variable, the array can’t be initialized at definition itself. For example, ‘int size = 2, arr[size];’ is valid but ‘int size = 2, arr[size] = {1,2};’ is invalid. Also, an array whose size is specified using variable can’t be defined out any function i.e. this array can’t be global.
In C, struct members can be initialized even out of order using field name and using dot operator. For example, ‘struct {int i; char c;} myVar = {.c =’A’,.i = 100};’ is valid.
