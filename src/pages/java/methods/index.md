---
title: Methods
---
# Methods

Declaring a method in subclass which already exists there in parent class is known as method overriding. When a class is inheriting a method from a super class of its own, then there is a option of overriding the method provided it is not declared as final. The advantage of using overriding is ability to classify a behavior that’s specific to the child class and the child class can implement a parent class method based on its necessity.

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use `void` return type.

Java Program to Demonstrate Method Overriding
----
Example:

```java
public class Car {
    private String name;

    public void changeName() {
        name = "Tesla";
    }
}
```

```java

class college {
 public void move() {
  System.out.println("College is open");
 }
}
class univ extends college {
 public void move() {
  System.out.println("University is open too");
 }
}
public class stud {
 public static void main(String args[]) {
  college a = new college();
  college b = new univ();
  a.move();
  b.move();
 }
}
```

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.
