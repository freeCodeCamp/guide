---
title: Getters & Setters
---

# Getters & Setters
Getters and Setters are used to effectively protect your data, particularly when creating classes. For each variable, the get method returns its value, while the set method sets the method.

By convention, getters start with get, followed by the variable name, with the first letter of the variable name capitalized. Setters start with set, followed by the variable name, with the first letter of the variable name capitalized.

***Example:***
```java
public class Vehicle {
  private String color;
  
  // Getter
  public String getColor() {
  return color;
  }
  
  // Setter
  public void setColor(String c) {
  this.color = c;
  }
}
```
The getter method returns the value of the attribute.
The setter method takes a parameter and assigns it to the attribute.

Once the getter and setter have been defined, we use it in our main:
```java
public stativ void main(String[] args) {
  Vehicle v1 = new Vehicle();
  v1.setColor("Red");
  System.out.println(v1.getColor());
}

// Outputs "Red"
```
****************
Getters and setters allow control over the values.  You may validate the given value in the setter before actually setting the value.


## Why getter and setter?

By using getter and setter, the programmer can control how their important variables are accessed and updated in a correct manner, such as changing value of a variable within a specified range. Consider the following code of a setter method:
```java
public void setNumber(int num) {
    if (num < 10 || num > 100) {
        throw new IllegalArgumentException();
    }
    this.number = num;
}
```
That ensures the value of number is always set between 10 and 100.  Suppose the variable number can be updated directly, the caller can set any arbitrary value to it:
```java
obj.number = 3;
```

And that violates the constraint for values ranging from 10 to 100 for that variable. Of course we don’t expect that happens. Thus hiding the variable number as private and using a setter comes to rescue.
On the other hand, a getter method is the only way for the outside world reads the variable’s value:
```java
public int getNumber() {
    return this.number;
}
```
