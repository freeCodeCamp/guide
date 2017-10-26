---
title: C++
---
# Hello World! - Your first C++ Program

## What is C++  ?

* C++ is a general purpose programming language which has been used since the 1990's
* It was designed by Bjarne Stroustrup under with the name "C with classes".
* It is widely based on the programming language C and thus got it's name.
* It is actually an Object Oriented version of C and adds more stuff for programmers.


### Here is your 1st program in C++ -

```cpp
#include <iostream>
using namespace std ;
int main()
{
    cout<<"Hello World"<<endl;
    return 0;
}
```

### The Output of this program will simply be :

```
Hello World !
```

Now , let's break down the code :

#### Line 1 and 2

```cpp
# include<iostream>
using namespace std;
```

* The 1st line tells the computer to use the "iostream" header file for this specific program . There are many other header files which are requireed for a specific program to run properly. Some of them are : math , vector and string. Header files are generally represented by a ".h" extension
* `iostream` stands for input-output stream . The "iostream" file contains code for allowing the computer to take input and generate an output, using the C++ language.
* The second line tells the computer to use the standard namespace which includes features of standard C++ .

#### Line 3 and 4

```cpp
int main()
{
```

* C++ starts execution of a program from the -main function- `int main()` . During execution , the computer starts running the code from every line from `{`(opening bracket) till `}`(closing bracket)
  **NOTE : Every function starts with an opening curly brace "{" and ends with a closing curly brace "}"**
* Line 4 indicates the start of the main() function. 

#### Lines 4,5 & 6

```cpp
cout<<"Hello World"<<endl;
    return 0;
}
```

* The word `cout` in C++ is used for any output. 
* It always has to be followed by `<<` , the _insertion operator_ . 
* Whatever is in the double quotes `""` is printed . Certain special characters have a different syntax for print statements   
* Now to print any other kind of data , you have to  add `<<` .

***Q. Try to change Hello World to any other sentence or word(s). What will be the output ?***

* `endl` is a reserved word for the computer when using the C++ language to **end this line and go to the next line during output** .   - _cout stands for "console output"_
* And , you have to finish the command with a semicolon `;`.

**NOTE : Every command except the main funcction command and the include command needs to be ended by the semicolon. Without a ";" , you may encounter an error**

* `return 0;` safely terminates the current function i.e. 'main()' in this case and since no function follows after 'main()' the program is terminated. 
* Don't forget to tell the computer that this is the last line it needs to execute. To do this , you add the closing curly brace "}" . You may encounter an error before program execution if you do not finish your program with **}** .

### The code should look something like this (additional pointers given ):

![Img](https://i.imgur.com/d1liGwI.png)

Programmers use a Hello World program (like this one) as a ritual on using a new programming language. It is a symbol of good luck.  
_You have finished coding your first C++ program and have understood most of the code you have written/typed. CONGRATULATIONS!_
 
 **Good Luck to all of you** 
 
 **Happy Coding ! :)**
 
 **Feel free to ask any queries on FreeCodeCamp's GitHub page or <a href='https://forum.freecodecamp.org/' target='_blank' rel='nofollow'>FreeCodeCamp's Forum .</a>**

 <a href='https://repl.it/L4k3' target='_blank' rel='nofollow'>Try the code yourself ! :) </a>

**You may require some software to write and execute C++ code. I recommend using CodeBlocks. There's a download link below :**

Download Link : <a href='http://www.codeblocks.org/downloads/26' target='_blank' rel='nofollow'>Download Here</a>

* Click the link with the GNU/GCC compiler for windows. This will not require an additional installation

Link #2 for Mac : <a href='https://developer.apple.com/xcode/' target='_blank' rel='nofollow'>Download for Mac #2 here</a>

## IMP POINTS
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
