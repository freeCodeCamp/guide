---
title: C++
---
## Hello World! - Your first C++ Program 

### What is C++ ?
* C++ is a general-purpose programming language which has been used since the 1990's.
* It is widely based on the programming language C and thus got it's name.

### Here is your 1st program in C++:

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
![Image of output](https://github.com/MrAsrani1312/Images/blob/master/snip1out.PNG)

Now , let's break down the code :
#### Line 1 and 2

```cpp
#include<iostream>
using namespace std;
```

* The 1st line tells the compiler to use the "iostream" header file for this specific program. There are many other header files which are required for a specific program to run properly. Some of them are math, vector and string. Header files are generally represented by a ".h" extension. You don't need to ".h" with the standard header files.     
  - "iostream" stands for input-output stream . The "iostream" file contains code for allowing the computer to take input and generate an output, using the C++ language.     
* The second line tells the computer to use the standard namespace which includes features of standard C++ . 

#### Line 3 and 4
```cpp
int main()
{
```
* C++ starts execution of a program from the -main function- "int main()" . During execution , the computer starts running the code from every line from "{"(opening bracket) till "}"(closing bracket)
  **NOTE : Every function starts with an opening curly brace "{" and ends with a closing curly brace "}"**
* Line 4 indicates the start of the main() function. 

#### Lines 4,5 & 6
```cpp
cout<<"Hello World"<<endl;
    return 0;
}
```
* The word "cout" in C++ is used for any output. 
* It always has to be followed by "<<" , the - insertion operator - . 
* Whatever is in the double quotes "" is printed . Certain special characters have a different syntax for print statements.   
* Now to print any other kind of data , you have to  add "<<" .
***Q. Try to change Hello World to any other sentence or word(s). What will be the output ?***
* **"endl"** is a reserved word for the computer when using the C++ language to **end this line and go to the next line during output** .   - cout stands for "console output"
* And , you have to finish the command with a semicolon";".
**NOTE : Every command except the main funcction command and the include command needs to be ended by the semicolon. Without a ";" , you may encounter an error**
* "return 0;" safely terminates the program. 
* Dont forget to tell the computer that this is the last line it needs to execute. To do this , you add the closing curly brace "}" . You may encounter an error before program execution if you do not finish your program with **}** .

### The code should look something like this (with some descreption):

![Image of snippet ](https://github.com/MrAsrani1312/Images/blob/master/snip1.PNG)


Programmers use a Hello World program (like this one) as a ritual on using a new programming language. It is a symbol of good luck.  
_You have finished coding your first C++ program and have mostly understood the code you have written/typed. CONGRATULATIONS!_
 **Good Luck to all of you** 
 
 **Happy Coding ! :)**
 
 **Feel free to ask any queries on FreeCodeCamp's GitHub page or <a href='https://forum.freecodecamp.org/' target='_blank' rel='nofollow'>FreeCodeCamp's Forum .</a>**

By : Jaithra Bhatia and Hitarth Asrani

**You may require some software to write and execute C++ code. One software to make coding easier is using an IDE called CodeBlocks. There's a download link below:**

Download Link : <a href='http://www.codeblocks.org/downloads/26' target='_blank' rel='nofollow'>Download Here</a>
* Click the link with the GNU/GCC compiler for windows. This will not require an additional installation.

Link #2 for Mac : <a href='https://developer.apple.com/xcode/' target='_blank' rel='nofollow'>Download for Mac #2 here</a>
