---
title: Constructors
---

# Constructors

A constructor is a block of code that is used to initialize an instance (i.e. an object) of a class. It can be thought of as starter code. A constructor is called when we create an object of a class using the **new** keyword.

When you write a class without any constructor, the Java compiler creates a default constructor :

```java
public class Car {
    private String name;
}

Car modelS = new Car();
```

This initializing with no parameters is a way of calling the default constructor. You can also have a default constructor written yourself this way :

```java
public class Car {
    private String name;

    // User Specified Default Constructor
    public Car() {
        name = "Tesla";
    }
}
```

Then, when calling `new Car()`, the variable `name` will get auto-initialized to "Tesla" for that instance of the Car object.

Clearly, constructors are exactly what they sound like: they are used to `construct` i.e., instantiate an object of a particular class.  
Constructors look similar to method declarations, but are slightly different in the sense that they:

1.  Are named exactly the same as the class.
2.  Don't have a return type.

Hence, the purpose of using `constructors` is to provide:

1.  A way to instantiate an object.
2.  Provide initial values to a object properties.
3.  Control how an object is created.

Let's look at another example. Say, Honda (the car manufacturer), wants all of its cars to be named `Honda <a name>`. In order to enforce this, we might represent this using a class as follows:

```java
public class Car {

    private String name;

    // Constructor.
    public Car(String model){
        this.name = "Honda " + model;
    }

    public String getName(){
        return this.name;
    }

    public static void main(String args[]){
        Car car = new Car("Civic");
        System.out.println( car.getName() );
    }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CTJ4/1' target='_blank' rel='nofollow'>Run Code</a>

Notice that when we write a constructor in this way i.e., providing a parameter, we are controlling (point no. 3) the way an instance of `Car` is created. In short, we are saying in this example that **you MUST provide a model name in order to get an instance of Car class**.

Why is this important? There are times when you'd want **one and only one** instance of a class which you'd want to use in your entire application. One way of achieving this is by using a `private` constructor.

Assume you need a class to represent a Bank. You wouldn't want people to create instance of `Bank` ever. So, you design your class:

```java
public class Bank {

    private static Bank instance;
    
    private Bank(){
    }

    public static Bank getInstance(){
        if(null == instance){
            instance = new Bank();
        }
        return instance;
    }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CTJz/0' target='_blank' rel='nofollow'>Run Code</a>

Notice that the constructor is `private`. This enforces the fact that no one else is allowed to create an instance of the Bank.  
In fact, if in another class, you try:

```java
Bank account = new Bank(); // Throws a compilation error: Bank() has private access in Bank.
```

So, the only way to gain access to the instance is by using `Bank.getInstance()`. Such instances are called `Singleton` since you get exactly one instance (per VM to be precise) throughout the life of your application.

There can be many number of constructors in a class. But they should differ in the method parameters. This is Constructor Overloading. To be precise, we say constructor overloading has occurred when there are two or more constructors with the same name, but different method parameters. As a result, the two functions have different method signatures and are treated by Java as different constructors entirely. For example:

```java
public class Car {

    private String name;
    private String carType;

    // Constructor.
    public Car(){
        this.name = "No Name";
        this.carType = "No Type";
    }
    public Car(String model){
        this.name = "Honda " + model;
    }
    
    public Car(String model, String carType){
        this.name = model;
        this.carType = carType;
    }
    
    public String getName(){
        return this.name;
    }
    
    public String getCarType(){
        return this.name;
    }

    public static void main(String args[]){
        Car car = new Car("Civic");
        System.out.println( car.getName() );
        
        // Other Way To Initialize
        Car car = new Car("Civic","Sedan");
        System.out.println( car.getName() + " "+ car.getCarType() );
        
    }
}

```

## Copy constructor
The copy constructor is a constructor which creates an object by initializing it with an object of the same class, which has been created previously. The copy constructor is used to-
1. Initialize an object from another of the same type.
2. Copy an object to pass it as an argument to a function.
3. Copy an object to return it from a function.
Here is a program that shows a simple use of copy constructor:
```Java
class Complex {
 
    private double re, im;
     
    // A normal parametrized constructor 
    public Complex(double re, double im) {
        this.re = re;
        this.im = im;
    }
     
    // Copy constructor
    Complex(Complex c) {
        System.out.println("Copy constructor called");
        re = c.re;
        im = c.im;
    }
      
    }
}
```
[run the full code](https://repl.it/MwnJ)


//## Constructor Chaining
