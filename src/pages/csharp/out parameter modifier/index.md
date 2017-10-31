---
title: Out (Parameter Modifier)
---

# Out (Parameter Modifier)

The `out` keyword signifies an argument that will be passed to a method by reference. Variables passed with the `out` keyword don't need to be initialized before being passed, but they do need to be assigned a value before the method returns.

To use an `out` parameter, both the calling method and the method definition must use the `out` keyword.

## Example
```
using System;

public class Example {
  
  static void Main() {
  
    // a is declared, but not initilaized
    int a;
    Method1(out a);
    
    Console.WriteLine("Value of a: " + a);
  }
  
  static void Method1 (out int a) {
     
     a = 40;
  }
  
}

```
## Output

```
Value of a: 40
```



Starting in C# 7, the previous example can be simplified and `out` variables can be declared when they are passed as an argument.

## C# 7 Example
```
using System;

public class Example
{
 
  static void Main() {
  
    // a is declared in the method call
    Method1(out int a);
    
    Console.WriteLine("Value of a: " + a);
  }
  
  static void Method1 (out int a) {
     a = 40;
  }
  
}

```
## Output

```
Value of a: 40
```
