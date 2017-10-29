---
title: Final
---

## final
final keyword can be used in different contexts:
i. Variables
ii. Methods
iii. Classes

i. Variables
- You use the final keyword to mark a variable constant, so that it can be assigned only once.
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

ii. Methods
- Final methods cannot be overridden.
***Example:***
```java
class Animal{

  void eat(){
  
  }
 // final method 
  final void fly(){
  
  }
}

class Dog extends Animal{
  // throws compile time error
  void fly(){
  
  }
}
```

iii. Classes
- final classes cannot be extended or inherited.
***Example:***
```java
final class Animal{ 
  void eat(){
  
  }
 // final method 
  final void fly(){
  
  }
}

// The following isn't allowed. Results in a compile time error
class Dog extends Animal{
 
}
```
