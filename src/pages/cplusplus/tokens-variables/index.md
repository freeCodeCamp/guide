---
title: Tokens Part 1
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

* Textbook definition : Variables are named memory locations whoose data can be altered.

* But I would like you to think of a variable to be something like a box, something like this : 
    ![Img](https://i.imgur.com/YdbgWHL.png)

So, for example :
   I'm shifting to a new place and I need to arrange my stuff in boxes . Thus there come 2 things to my mind  **What kind of stuff will be stored in the box, so that the size off the box is known (the data type)** and **How do I identify the box ?(Naming the variable)**  
   Hence , we know that a variable in C++ needs a *name* and a *data type* and that the value stored in them can be changed.
   
#### Data Types in C++ : 
When declaring variables in c++ they must have a name to which you will reffer later on, a value (constant or not) and a type.
The type will tell the compiler the values that the variable can use, the possible operations and will save a certain space in memmory.
In c++ there are two types of data:
* Simple type
* Struct type

#### Simple data types

* Boolean -- bool
Works like a switch, can be on or off.
* Character -- char
Stores a single character.
* Integer  -- int
Stores an [integer](https://en.wikipedia.org/wiki/Integer).
* Floating point  -- float
They can use decimals.
* Double floating point  -- double
Double precision of the float type.

Here you can see some examples:
```cpp
bool GameRunning = true;
char a;
int x = 2;
```
##### These types can also be modified with modifiers such as:
signed
unsigned
short
long

#### Struct data type

#### Identifiers.

- Identifiers are the names given to a variable or a class or a function or any user defined function.

## Rules for naming a variable : ##

- Start naming with a letter from A-Z or a-z .
- Numbers can follow thee first letter but we cannot start naming with numbers.
- NO use of spaces or special characters are allowed, instead, use an UNDERSCORE _ .  

#### Declaring a variabe :

The syntax is as follows 
<*data type*> <*variable name*>;
or
<*data type*> <*variable name*> = <*value*>; if we also want to initialize the variable.


For example :
 ```cpp
 int a ;    //declaring a variable named 'a' of type integer.
 a=4;        //initializing a variable
 int b = 5 ; //declaring and initializing a variable 'b' of type integer.
 ```

**Examples of declaring a variable:**
```cpp
int a9;
char A;
double area_circle;
long l;
```

**Wrong ways to declare variables**- 
```cpp
int 9a;
char -a;
double area of circle;
long l!!;
```

- Variable names cannot start with a number
- Special characters are not allowed
- Spaces are not allowed

 
You can imagine different boxes of different sizes and storing different things as different variables.

**NOTES :** 
1. **The C++ compiler ignores whitespaces and they are generally used for beautification of the code so that it is eassy for any programmer to debug or understand the code.**
2. **If a variable is not initialized , it contains a garbage value. Let me give an example:**

### Garbage Values in a Variable
If a variable is not initialized , it contains a garbage value. For example:

So in terms of boxes, you can imagine this as - 

![Img](https://i.imgur.com/YdbgWHL.png)

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

As you can see, there is already a value stored in 'a' before we give it a value(here , it is 0 ). This should remain in the mind of every programmer so that when the variables are used they do not create a logical error and print garbage values.

<a href='https://repl.it/Mg7j' target='_blank' rel='nofollow'>Try the code yourself ! :) </a>


#### Keywords : 

*Keywords are reserved words that convey a special meaning to the compiler. They **CANNOT** be used for naming in c++.* 
Examples of Keywords : 
inline , operator, private int, double ,void , char, template ,using , virtual , break , case , switch , friend, etc. 

**Each of these keywords is used for a special function in C++.**

_Tokens part 1 is over. See you campers at [Part 2](https://guide.freecodecamp.org/cplusplus/tokens-part-II) of Tokens :)_

 **Good Luck to all of you** 

 **Happy Coding ! :)**

 **Feel free to ask any queries on FreeCodeCamp's GitHub page or [FreeCodeCamp's Forum .](https://forum.freecodecamp.org/)**
