---
title: Classes and Objects
---
## Classes and Objects

### Introduction
The classes are the most important feature of C++ that leads to Object Oriented programming. #Class is a user defined data type, which holds its own data members and member functions, which can be accessed and used by creating instance of that class.

The variables inside class definition are called as data members and the functions are called member functions.

Class is mere a blueprint or a template. No storage is assigned when we define a class. #Objects are instances of class, which holds the data variables declared in class and the member functions work on these class objects.

Each object has different data variables. Objects are initialised using special class functions called #Constructors. We will study about constructors later.

And whenever the object is out of its scope, another special class member function called #Destructor is called, to release the memory reserved by the object. C++ doesn't have Automatic Garbage Collector like in JAVA, in C++ Destructor performs this task.

![db2](https://user-images.githubusercontent.com/30154012/32186388-f7aaa3aa-bdc7-11e7-9060-0562cb777722.png)

```cpp
/* A simple code invloving class and objects in CPP. */
class Abc
{
 int x;
 void display(){} //empty function
};

in main()
{
 Abc obj;   // Object of class Abc created
}

```

### More Information:
- <a href='https://en.wikipedia.org/wiki/C%2B%2B_classes' target='_blank' rel='nofollow'>Classes in CPP</a>
