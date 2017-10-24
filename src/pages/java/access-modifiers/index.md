---
title: Access Modifiers
---
# Access Modifiers

Have you ever wanted to define how people would access some of your properties? You would not want anyone using your underwear. However, your close friends and relatives can use your sweater and maybe your car.

Similarly to how you set a level of access to your posessions, Java controls access, too. You want to define the access level for variables, methods and classes depending on which other classes you want accessing them.

Java provides 4 levels of access modifiers. This means that you can modify access to a variable, method or a class in 4 ways. These 4 ways are private, public, protected and default.

Among these 4 modifiers, only public and default can be applied to a class. However, the 4 modifiers can be applied to variables and methods.

private Access Modifier
Allows a variable or method to only be accessed in the class in which it was created. No other class beyond the class that created the variable or method can access it. This is similar to your underwear. They are only accessible to the owner. To make a variable or method private, you simply append the private keyword before the variable or method type. For example;

`private String name;`
       
The above example creates a variable called name and ensures that it is only accessible within the class from which it was created.
 
Another example for a method is
 ```java
 private void setAge(){
 System.out.println("Set Age");
 }
 ```
The above example ensures that the method setAge is accessible only within the class from which it was created and nowhere else.
 
 public Access Modifier
 The public access modifier is the direct opposite of the private access modifier. A class, method or variable can be declared as public and it means that it is accessible from any class. Public access modifier can be likened to a public school where anyone can seek admission and be admitted.
 
 A public class, method, or variable can be accessed from any other class at any time.
 
 For example, to declare a class as public, all you need is:
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

The Default Access Modifier
The default access modifier is different from all the other access modifiers in that it has no keyword. To use the default access modifier, you simply use none of the other access modifiers and that simply means you are using a default access modifier.

For example, to use the default access modifier for a class, you use

```java
class Bird{
}
```
    
This basically means you are using the default access modifier. The default access modifier allows a variable, method, or class to be accessible by other classes within the same package. A package is a collection of related classes in a file directory. For more information about packages, check out the section on packages.

Any variable, method, or class declared to use the default access modifier cannot be accessed by any other class outside of the package from which it was declared.
```java
int age;
void setNewAge(){
}
```
    
Above are some ways of using the default access modifier for a variable or method.
Don't forget, the default access modifier does not have a key word. The absence of the 3 other access modifiers means you are using the default access modifier.

protected Access Modifier
The protected access modifier is closely related to the default access modifier. The protected access modifier has the properties of the default access modifier but with a little improvement.

A variable and method are the only ones to use the protected access modifier. The little improvement is that a class outside the class package from which the variable or method was declared can access the said variable or method. This is possible ONLY if it inherits from the Class, however.

The class from another package which can see protected variables or methods must have extended the Class that created the variables or methods.

Note without the advantage of Inheritance, a default access modifier has exactly the same access as a protected access modifier.

Examples of using the protected access modifier is shown below:
```java
protected int age;
protected String getName(){
  return "My Name is You";
}
```
    
