---
title: Tokens - I
---

### What are tokens ?

Tokens are the smallest unit of a program which are importanat to the compiler. There are different kinds of tokens:
- Keywords
- Operators
- Punctuators
- Literals
- Identifiers

* **Combination of tokens form an expression**

### What are Variables ?

* Textbook defination : Variables are named memory locations whoose data can be altered.

* But I would like you to think of a variable to be something like a box, something like this : 
    ![Img](https://i.imgur.com/YdbgWHL.png)

So, for example :
   I'm shifting to a new place and I need to arrange my stuff in boxes . Thus there come 2 things to my mind  **What kind of stuff will be stored in the box, so that the size off the box is known (the data type)** and **How do I identify the box ?(Naming the variable)**  
   Hence , we know that a variable in C++ needs a *name* and a *data type* and that the value stored in them can be changed.
   
#### Data Types in C++ : 
Data Type       Size allocated in memory        Example

* char               1 byte                     char a; a='a';
(character)

* short             2 bytes                     short b; b = 1;
 (short integer)

* int               4 bytes                     int c; c=450;
  (holds integers)

* long              8 bytes                     long l; l= 99000;
 (Long integer)

* float             4 bytes                     float f; f=3.14159
 (floating integers, integers with decimals)

* double            8 bytes                     double d; d=3.141592653579
  (doubles or larger floats )

* bool              1 byte                      bool bb; bb=0;
 (boolean values: 0 or 1)

#### Identifiers.

- Identifiers are the names given to a variable or a class or a function or any user defined function.

## Rules for naming a variable : ##

- Start naming with a letter from A-Z or a-z .
- Numbers can follow thee first letter but we cannot start naming with numbers.
- NO use of spaces or special characters is allowed , instead use an UNDERSCORE _ .  

#### Declaring a variabe :
The syntax is as follows ~

<Data-type> <Variable-name> ; 

For example :
 ```cpp
 int a ; //declaring a variable named 'a' of type integer.
 a=4;    //initializing a variable
 ```

**Examples  of declaring a variable:**
   int a9; char A; double area_circle;      long l;

**Wrong ways to declare variables**- int 9;  char -a; double area of circle ; long l!!;
- There are use of numbers in the beginning of the name ; special characters are used ; spaces are not allowed; special characters are used.
 
- Similarly you can imagine different boxes of different sizes and storing different things as different variabls.


**NOTE : 1 The C++ compiler ignores whitespaces and they are generally used for beautification of the code so that it is eassy for any programmer to debug or understand the code.**
 **2 . If a variable is not initialized , it contains a garbage value. Let me give an example.**

 So in terms of boxes, you can imagine this as - 

 ![Img](https://i.imgur.com/YdbgWHL.png)

##### Garbage Values in a variable.

 ```cpp
 #include<iostream>
 using namespace std;
int main()
{
    int a ;
    cout<<"Garbage value in a : "<<a<<endl; //declaring the variable named 'a' of type integer 
    a=5; //initializing variable.
    cout<<"New value in a "<<a<<endl;

}
``` 

### The output is :

```
Garbage value in a : 0
New value in a :  5
```

As you can see,, there is already a value stored in 'a' before we give it a value(here , it is 0 ). This should remain in the mind of every programmer so that when the variables aree used they do not create a logical error and print garbage values.

<a href='https://repl.it/Mg7j' target='_blank' rel='nofollow'>Try the code yourself ! :) </a>


#### Keywords : 

*Keywords are reserved words that convey a special meaning to the compiler. They **CANNOT** be used for naming in c++.* 
Examples of Keywords : 
inline , operator, private int, double ,void , char, template ,using , virtual , break , case , switch , friend, etc. 

**They all are used for a special function in C++.**

_Tokens part 1 is over. See you campers at Part 2 of Tokens :)_

 **Good Luck to all of you** 

 **Happy Coding ! :)**

 **Feel free to ask any queries on FreeCodeCamp's GitHub page or <a href='https://forum.freecodecamp.org/' target='_blank' rel='nofollow'>FreeCodeCamp's Forum .</a>**