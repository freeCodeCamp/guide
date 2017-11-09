---
title: Getters & Setters
---

# Getters & Setters
Getters and Setters are used to effectively protect your data, particularly when creating classes. For each variable, the get method returns its value, while the set method sets the method.

Getters start with get, followed by the variable name, with the first letter of the variable name capitalized. Setters start with set, followed by the variable name, with the first letter of the variable name capitalized.

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
  System.out.pringln(v1.getColor());
}

// Outputs "Red"
```
****************
Getters and setters allow control over the values.  You may validate the given value in the setter before actually setting the value.
