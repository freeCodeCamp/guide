---
title: Classes and Objects
---
# Classes and Objects

Classes are groups of variables and operations on them. A class can have variables, methods (or functions) and constructors (or methods which are used to initiate, more on that later!).

Think of a `Class` as a blueprint for creating something concrete. A `Class` tells you the 'what' and 'how' an `object` of that Class will look like once `instantiated`. In essence, it defines `properties` (say color, engine capacity) and `behavior` (stop, speed up, change gears, honk etc.) for a Car in this case.

Objects are _instances_ of a class. All objects are instances of a certain class. Imagine a class being a "template", which every Object copies to. When you create an Object, basically it creates a new object on the blueprint of a class. Now lets look at this from a little piece of code :

```java
// Car class
public class Car {
    // car name
    private String name;
    
    // car manufacturer name
    private String manufacturerName;
    
    // constructor 1
    public Car() {
    }
    
    // constructor 2
    public Car(String name, String man) {
        this.name = name;
        this.manufacturerName = man;
    }
    
    // getter name method
    public String getName() {
        return name;
    }
    
    // getter manufacture method
    public String getManufacturerName() {
        return manufacturerName;
    }

    //setter name method
    public void setName(String name){
        this.name = name;
    }

    //setter manufacture method 
    public void setManufacture(String man){
        this.manufacturerName = man;
    }
}

// sample code
    
Car modelS = new Car("Model S","Tesla");
// prints Tesla Model S
System.out.println("Full Car Model S= " + modelS.getManufacturerName() + " : " + modelS.getName());

Car modelX = new Car();
modelX.setName("Model X");
modelX.setManufacture("BMW");
// prints Tesla Model X
System.out.println("Full Car Model X= " + modelX.getManufacturerName() + " : " + modelX.getName());
```
:rocket: <a href='https://repl.it/CJZP/4' target='_blank' rel='nofollow'>Run Code</a>

So, `Car` is a class, which has the fields or properties name and manufacturerName. `modelS` is an object of `Car` class. So `modelS` also has the same properties and methods.
