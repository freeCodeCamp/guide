---
title: Classes and Objects
---
# Classes and Objects

Think of a `Class` as a blueprint for creating something concrete. A `Class` tells you the 'what' and 'how' an `object` of that Class will look like once `instantiated`. In essence, it defines `properties` (say color, engine capacity) and `behavior` (stop, speed up, change gears, honk etc.) for a Car in this case.

Objects are _instances_ of a class. All objects are instances of a certain class. Imagine a class being a "template", which every Object copies to. When you create an Object, it basically creates a new object on the blueprint of a class. Now let's look at this from a little piece of code :

```java
// Car class
public class Car {
    // car name
    private String name;
    
    // car manufacturer name
    private String manufacturerName;
    
    // constructor
    public Car(String name, String man) {
        this.name = name;
        this.manufacturerName = man;
    }
    
    // getter method
    public String getName() {
        return name;
    }
    
    // getter method
    public String getManufacturerName() {
        return manufacturerName;
    }

    //setter method
    public void setName(String name){
        this.name = name;
    }
}

Car modelS = new Car("Model S","Tesla");

System.out.println("Full Car Name = " + modelS.getManufacturerName() + " " + modelS.getName());
// prints Tesla Model S
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJZP/0' target='_blank' rel='nofollow'>Run Code</a>

So, `Car` is a class, which has the fields or properties `name` and `manufacturerName`. `modelS` is an object of `Car` class. So `modelS` also has the same properties and methods.
