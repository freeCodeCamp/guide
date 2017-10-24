---
title: Access Modifiers
---
# Access Modifiers

Have you ever wanted to define how people would access some of your properties. You would not want anyone using your underwears but your close friends and family relatives can as well use your sweater and maybe your car.

This level of access to different properties that you own is also in Java. You to define the access level for variables, methods and classes depending on which other classes you want them to be available to.

Java provides 4 levels of access modifiers. This means that you can modify access to a variable, method or a class in 4 ways. These 4 ways are private, public, protected and default.

These access modifiers can be applied to fields, methods and classes (Classes are a special case, we will look at them at the end of this artice). Here is a quick overview<sup>1</sup> of what the `Access Levels` are for each `Access Modifier`:

Modifier | Inside Class | Inside package | Inside subclass | World
--- | --- | --- | --- | ---
public | Yes | Yes | Yes | Yes
protected | Yes | Yes | Yes | No
private | Yes | No | No | No
*no modifier* | Yes | Yes | No | No 

#### Private Access Modifier
Allows a variable or method to only be accessed in the class in which it was created. No other class beyond the class that created the variable or method can access it. This is closely similar to your underwear. They are only accessible to the owner. To make a variable or method private, you simply append the private keyword before the variable or method type. For example;

`private String name;`
       
 The above example creates a variable named name and only ensures that is accessible only within the class from where it was created.
 
 Another example for a method is
 ```java
 private void setAge(){
 System.out.println("Set Age");
 }
 ```
 The above example ensures that the method setAge is accessible only within the class from which it was created and nowhere else.
 
 #### Public Access Modifier
 Well, the public access modifier is the direct opposite of the private access modifier. A class, method or variable can be declared as public and it means that it can be accessible from any class. public access modifier can be likened to a public school where anyone can seek for admission and can be admitted.
 
 A public class, method or variable can be accessed from any other class at any time.
 
 For example, to declare a class as public, All you need is:
 ```java
 public class Animal{
 
 }
 ```
    
 As such, the Animal class can be accessed by any other class.
```java
public int age;
public int getAge(){
}
```
    
Above are ways of specifying a variable and a method as public.

#### The Default Access Modifier
The default access modifier is different from all the other access modifiers in that it has no keyword. To use the default access modifier, you simply use none of the other access modifiers and that simply means you are using a default access modifier.

For example, to use the default access modifier for a class, you use

```java
class Bird{
}
```
    
This basically means you are using the default access modifier. The default access modifier allows a variable, method or a class to be accessed by other classes within the same package. A package is a collection of related classes in a file directory. For more information about packages, check out the section on packages.

Any variable, method, or class declared to use the default access modifier cannot be accessed by any other class outside of the package from which it was declared.
```java
int age;
void setNewAge(){
}
```
    
Above are some ways of using the default access modifier for a variable or method.
Don't forget, the default access modifier does not have a key word, the absence of the 3 other access modifiers means you are using the default access modifier.

#### protected Access Modifier
The protected access modifier is closely related to the default access modifier. The protected access modifier has the properties of the default access modifier but with a little improvement.

A variable and method are the only ones to use the protected access modifier. The little improvement is that beyond classes in the same package, a class outside the class package from which the variable or method was declared can ONLY access the variable or method if it inherits from the Class.

The Class in another package that can see protected variables or methods must have extended the Class that created the variables or methods.

Note without the advantage of Inheritance, a default access modifier has exactly the same access as a protected access modifier.

Examples of using the protected access modifier is shown below:
```java
protected int age;
protected String getName(){
  return "My Name is You";
}
```

#### Access Modifiers on Classes
By default, classes can only have 2 modifiers: 
- public
- no modifier (default modifier)

So this means classes can never be set to `private` or `protected`?

This is logical, why would you want to make a private class? No other class would be able to use it. But sometimes, you can embed a class into another class. These special classes, `inner classes`, can be set to private or protected so that only its surrounding class can access it:
```java
public class Car {
    private String brand;
    private Engine engine;
    // ...
    
    private class Engine {
        // ...
    }
}
```

In the above example, only the `Car` class can use the `Engine`class. This can be useful in some cases.

Other classes can never be set to `protected` or `private`, because it makes no sense. The `protected`access modifier is used to make things `package-private` but with the option to be accessible to subclasses. There is no concept such as 'subpackages' or 'package-inheritance' in java.

### Sources
[1. Oracle docs on Access Modifiers](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html "Oracle Docs")
