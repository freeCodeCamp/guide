---
title: Methods
---
# Methods

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use `void` return type.

```java
public class Car {
    private String name;

    public void changeName() {
        name = "Tesla";
    }
}
```

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.

Methods often serve many purposes such as updating information in an object or providing data back to the caller. Here are some examples.

```java
public class Car {
    private int numberOfWheels;
    
    public void setNumberOfWheels(int newNumberOfWheels) {
        numberOfWheels = newNumberOfWheels;
    }
    
    public int getNumberOfWheels() {
        return numberOfWheels;
    }
}
```

In the case of `getNumberOfWheels()` the return type is `int` which is a whole number. The keyword `return` tells java to pass back the value of the instance variable `numberOfWheels`. `setNumberOfWheels(int newNumberOfWheels)` however has no return type as it is a setter method as previously seen. In this case though it takes in an argument of type `int` and makes the instance varible `numberOfWheels` equal to `newNumberOfWheels`.

There is also a special method called a constructor that allows for data to be set or operations to be performed when the class is instantiated. This constructor has no return type.

```java
public class Car {
    private String model;
    private int numberOfWheels;
    
    public Car(String model, int numberOfWheels) {
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }
}
```

The `Car` class and the `Car(String model, int numberOfWheels)` method have to have the same name in order for java to know that it is the constructor. Now anytime you instantiate a new `Car` instance with the `new` keyword you will need to call this constructor and pass in the needed data.
