---
title: Constructors
---

# Constructors

What's the point then? I should be able to store data in it right?

That's when we use either **getter** (e.g., `getName()`) / **setter** (e.g., `setName()`) methods or in this case constructors to initialize a class. Basically every Java Class has a constructor, which is the method which is called first when any object of the class is initialized. Think of it as a bit of starter code.

When you write a class without any constructor, then Java assumes it has a default constructor :

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

Then, when calling `new Car()`, the variable `name` will get auto-initialized to "Tesla".

Clearly, constructors are exactly what they sound like: they are used to `construct` i.e., instantiate an object of a particular class.  
Constructors look similar to method declarations, but are slightly different in the sense that they:

1.  Are named exactly the same as the class.
2.  Don't have a return type.

Hence, the purpose of using `constructors` is to provide:

1.  A way to instantiate an object.
2.  Provide initial values to a object properties.
3.  Control how an object is created.

Let's look at another example. Say, Honda (the car manufacturer), wants all its cars to be named `Honda <something>`. In order to enforce this, we might represent this using a class as follows:

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

There can be many number of constructors in a class. But they should differ in the method parameters. This is Constructor Overloading. For example

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
