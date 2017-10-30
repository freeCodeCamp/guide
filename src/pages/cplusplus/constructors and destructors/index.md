---
title: Constructors and Destructors
---
## Constructors

### Introduction
Constructors are special class members which are called by the compiler every time an object of that class is instantiated. Constructors have the same name as the class and may be defined inside or outside the class definition.
There are 3 types of constructors:doesn't have Automatic Garbage Collector like in JAVA, in C++ Destructor performs this task.

**Default constructors**
**Parametrized constructors**
**Copy constructors**

```cpp
/* A simple code defining constructors in CPP. */
class class_name
{
 int g, h;
 public:
 class_name(void);  // Constructor Declared
 . . .
 };
class_name :: class_name()
{
 g=1; h=2;  // Constructor defined
}

```
A #Copy #Constructor creates a new object, which is exact copy of the existing copy. The compiler provides a default Copy Constructor to all the classes.
Syntax:
```cpp
class-name (class-name &){}
```

##Destructors
### Introduction
Destructor is another special member function that is called by the compiler when the scope of the object ends.
Syntax:
```cpp
~Cube()
{

}
```
The destructor neither takes a argument nor returns any value and the compiler implicitly invokes upon the exit from the program for cleaning up storage that is no longer accessible.
