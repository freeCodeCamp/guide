---
title: Variables
---
# Variables

Variables store values.

In <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java' target='_blank' rel='nofollow'>Java</a>, variables are <a href='https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22' target='_blank' rel='nofollow'>_strongly typed_</a>, which means you have to define the type for each variable whenever you declare it. Otherwise, the compiler will throw error at <a href='https://en.wikipedia.org/wiki/Compile_time' target='_blank' rel='nofollow'>compile time</a>. Therefore, each variable has an associate data type of either :

Variables are the identifier of the memory location, which used to save data temporary for later use in the program.

*   Primitive Type : `int`, `short`, `char`, `long`, `boolean`, `byte`, `float`, `double`
*   Wrapper Type : `Integer`, `Short`, `Char`, `Long`, `Boolean`, `Byte`, `Float`, `Double`
*   Object Type: `String`, `StringBuilder`, `Calendar`, `ArrayList` etc.

We made a distinction between **Wrapper Type** and general **Object Type** for a reason - wrapper types are closely linked with their primitive counterparts via <a href='https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html' target='_blank' rel='nofollow'>autoboxing and unboxing</a>; but more on that later.

Rules of Declaring variables in Java
----
*   Variable name can consist of Capital letters A-Z, lowercase letters a-z, digits 0-9, and two special characters such as underscore and dollar Sign.
*   The first character must be a letter.
*   Blank spaces cannot be used in variable names.
*   Java keywords can not be used as variable names.
*   Variable names are case-sensitive.


Typically you can declare variables using the following syntax :

```java
//Primitive Data Type
int i = 10;
double amount = 10.0;
boolean isOpen = false;

// Object Data Type
String greeting = "Hello World";

// initiates an Float object with value 1.0
// variable myFloat now points to the object
Float myFloat = new Float(1.0);
```
