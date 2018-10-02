---
title: Class
---
## Class
	
A class in C# is defined as a reference type. In order to instatiate a variable of with a reference type you must specify the `new` keyword, else the variable will have the default value of `null`. See below for an example.

```csharp
// The value of variableOne is null at this point.
NewClass variableOne;

// Now the value of variableOne will be an instance of the class NewClass
variableOne = new NewClass();
```
At runtime when the class is created enough memory is allocated onto the heap for that specific instance of the class that the variable holds. 

#### Creating Classes
To create a class in C# we need to use the `class` keyword followed by a unique identifier.

```csharp
public class NewClass
{
    // Fields, properties, and methods can go here.
}
```

Like other languages, C# creates a default constructor that accepts no parameters. We can also specify our own constructor if we need to take in special parameters or have custom initlization steps in our constructor.

```csharp
public class NewClass
{
    NewClass(string name)
    {
        // Initialization steps...
    }
}
```

