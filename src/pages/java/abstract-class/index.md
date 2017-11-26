---
title: Abstract Classes in Java
---

Lets discuss abstract classes. Before diving into this tutorial it is better that you have understood concepts of classes
and inheritance.
Let's suppose that you are building a java application and you have a parent class named Person and you have two child classes
Teacher and Student. The teacher and student class is inherited by the Person class. 
``` java
public class Person
{
}

public class Teacher extends Person
{
  ...
}

public class Student extends Person
{
  ...
}
```
In this application only Teacher and Student objects can be created and you don't want anyone to create an object of class
Person. In this situation you make the Person class as abstract class.
Its syntax is as follows
``` java
abstract public class Person
```
Now, you cannot create a person object anywhere in the program. Only childs of Person i.e Teacher and Student objects can be
created.

``` java
Person p = new Person();    // It will give error
Person p1 = new Student();  // valid
Person p2 = new Teacher();  // valid

Teacher t1 = new Teacher();  // valid
Student s1 = new Student();  // valid
```
There are also some more concepts related to abstract classes which will be discussed later.
