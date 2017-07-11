---
title: "Java Docs: Variables"
parent: "java"
---

# Java Variables

Variables store values.

In [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java), variables are [_strongly typed_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22), which means you have to define the type for each variable whenever you declare it. Otherwise, the compiler will throw error at [compile time](https://en.wikipedia.org/wiki/Compile_time). Therefore, each variable has an associate data type of either :

*   Primitive Type : `int`, `short`, `char`, `long`, `boolean`, `byte`, `float`, `double`
*   Wrapper Type : `Integer`, `Short`, `Char`, `Long`, `Boolean`, `Byte`, `Float`, `Double`
*   Object Type: `String`, `StringBuilder`, `Calendar`, `ArrayList` etc.

We made a distinction between **Wrapper Type** and general **Object Type** for a reason - wrapper types are closely linked with their primitive counterparts via [autoboxing and unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html); but more on that later.

Typically you can declare variables using the following syntax :

    //Primitive Data Type

    int i = 10;

    // Object Data Type
    //initiates an Float object with value 1.0
    // variable myFloat now points to the object
    Float myFloat = new Float(1.0);
