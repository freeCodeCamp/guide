---
title: Final
---

## final
Final keyword is used in differnt contexts.Final is a non-access modifier applicable only to a variable, a method or a class.Below are different contexts where final is used.
***Contexts:***

Final Variable ----> To create constant variables;
Final method ------> Prevent method overriding;
Final class ------> prevent Inheritance.

## Final Variable
You use the final keyword to mark a variable constant, so that it can be assigned only once.

***Example:***
```java
class MyClass {
  public static final double PI = 3.14;
  public static void main(String[] args){
    System.out.println(PI);
  }
}
```
PI is now a constant. Any attempt to assign it a value will cause an error.

## Final Classes

When a class is declared with final keyword, it is called a final class. A final class cannot be extended(inherited). There are two uses of a final class :

1. To prevent inheritance, as final classes cannot be extended. For example, all wrapper classes like Integer,Float,etc are final classes.We cannot extend them.

 ```java
final class A
{
  //methods and fields
  
 }
class B extends class A
{
  // COMPILE-ERROR! Can't subclass A
 
 }
``` 
2. The other use of final class is to create immutable classes like the String class. You cannot make a class immutable without making it final 

## Final Methods

When a method is declared with final keyword, it is called a final method. A final method cannot be overridden. 

```java 
class A 
{
    final void m1() 
    {
        System.out.println("This is a final method.");
    }
}

class B extends A 
{
    void m1()
    { 
        // COMPILE-ERROR! Can't override.
        System.out.println("Illegal!");
    }
}
```




