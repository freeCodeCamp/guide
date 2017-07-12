---
title: "Java Docs: Inheritance"
parent: "java"
---

# Java Inheritance

Java inheritance refers to the ability of a Java Class to `inherit` the properties from some other Class. Think of it like a child inheriting properties from its parents, the concept is very similar to that. In Java lingo, it is also called _extend_-ing a class. Some simple things to remember :

*   The Class that extends or inherits is called **subclass**
*   The Class that is being extended or inherited is called **superclass**

Thus, inheritance gives Java the cool capability of _re-using_ code, or share code between classes!

Let's describe it with the classic example of a `Vehicle` class and a `Car` class :

    public class Vehicle {
        public void start() {
            // starting the engine
        }

        public void stop() {
            // stopping the engine
        }
    }

    public class Car extends Vehicle {
        int numberOfSeats = 4;

        public int getNumberOfSeats() {
            return numberOfSeats;
        }
    }

Here we can see the `Car` class inheriting the properties of the `Vehicle` class. So, we dont have to write the same code of `start()` and `stop()` for `Car` as well, as those properties come from its parent. Yes, objects created from the `Car` class _also_ have those properties!

    Car tesla = new Car();

    tesla.start();

    tesla.stop();

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJXz/0)

But, does the parent Class has the methods of the child? No, it doesn't.

Therefore, whenever you need to share some common bit of code to some more classes, it is always good to have a parent Class, and then extend that Class whenever needed! Saves a lot of lines of code, makes code modular and better testable.

## What can be inherited ?

*   All `protected` and `public` fields and methods from parent

## What cannot be inherited ?

*   `private` fields and methods
*   Constructors. Although, subclass constructor _has_ to call superclass constructor if its defined (More on that later!)
*   Multiple classes. Java supports only **single inheritance**, that is you can only inherit one class at a time.
*   Fields. Individual fields of a class cannot be overriden by the subclass.

## Type Casting & Reference

In Java, it is possible to reference a subclass as an _instance_ of its superclass. It is called _Polymorphism_ in Object Oriented Programming, the ability of an object to take on many forms. For example, `Car` class object can be referenced as a `Vehicle` class instance like this :

    Vehicle car = new Car();

Although, the opposite is not possible :

    Car car = new Vehicle(); // ERROR

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJYB/0)

Since you can reference a Java subclass as a superclass instance, you can cast a subclass object easily to a superclass instance. It may be possible to cast a superclass object into a subclass type, but _only if the object is really an instance of subclass_. So keep this in mind :

    Car car = new Car();
    Vehicle vehicle = car; // upcasting
    Car car2 = (Car)vechile; //downcasting

    Bike bike = new Bike(); // say Bike is also a subclass of Vehicle
    Vehicle v = bike; // upcasting, no problem here.
    Car car3 = (Car)bike; // Compilation Error : as bike is NOT a instance of Car

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJYM/0)

Now you know how to share code through parent-child relationship. But, what if, you do not like the implementation of a particular method in the child class and want to write a new one for it? What to do then?

## Override it!

Java lets you _override_ or redefine the methods defined in the superclass. For example, your `Car` class has a different implementation of `start()` than the parent `Vehicle`, so you do this :

    public class Vehicle {
        public void start() {
          System.out.println("Vehicle start code");
        }
    }

    public class Car extends Vehicle {
        public void start() {
          System.out.println("Car start code");
      }
    }

    Car car = new Car();
    car.start(); // "Car start code"

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJYZ/1)

So, it's pretty simple to override methods in the subclass. Although, there is a _catch_. Only that superclass method will be overriden which has the _exact same method signature_ as the subclass method. That means the subclass method definition must have the exact same name, same number and type of parameters, and in the exact same sequence. Thus, `public void start(String key)` would not override `public void start()`.

**Notes** :

*   You cannot override private methods of the superclass. (Quite obvious, isn't it?)
*   What if the method of superclass which you are overriding in the subclass suddenly gets obliterated or methods changed? It would fail in runtime! So Java provides you a nifty annotation `@Override` which you can place over the subclass method, which will warn the compiler of those incidents!

Annotations in Java is a good coding practice, but they are not a necessity. The compiler is smart enough to figure out overriding on its own though. Unlike other OOP languages, Annotations in Java it doesn't necessarily modify the method or add extra functionality.

## How to call super class methods?

Funny you ask about it! Just use the keyword `super` :

    public class Vehicle() {
        public void start() {
          System.out.println("Vehicle start code");
        }
    }

    public class Car extends Vehicle {
        public void run() {
          super.start();
      }
    }

    Car car = new Car();
    car.run(); // "Vehicle start code"

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJY4/0)

**N.B.** : Although you can call the parent method by `super` call, you cannot go up the inheritance with chained `super` calls.

## How to know the type of a class?

Using the `instanceof` keyword. Having lots of classes and subclasses it would be a little confusing to know which class is a subclass of which one in runtime. So, we can use `instanceof` to determine whether a class is actually a subclass of a superclass or not.

    Car car = new Car();

    boolean flag = car instanceof Vehicle; // true in this case!

## Constructors & Inheritance

As mentioned earlier, constructors cannot be directly inherited by a subclass. Although, a subclass is _required_ to call its parent's constructor as the [first thing](http://stackoverflow.com/questions/1168345/why-does-this-and-super-have-to-be-the-first-statement-in-a-constructor) in its own constructor. How? You guessed it, using `super` :

    public class Vehicle {
        public Vehicle() {
            // constructor
        }
        public void start() {
          System.out.println("Vehicle start code");
        }
    }

    public class Car extends Vehicle {
        public Car() {
          super();
        }
        public void run() {
          super.start();
      }
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJY8/0)

Remember, if the superclass does not have any constructors defined, you dont have to call it explicitely in the subclass. Java handles that internally for you! Invocation to `super` constructor is done in the case when the super class is to be called with any other constructor other than the _default constructor_.

If no other constructors are defined, then Java invokes the default super class constructor (_even if not defined explicitly_).

Congrats, now you know all about Inheritance! Read more about advanced ways to inherit things in Abstract Classes and [Interfaces](//forum.freecodecamp.com/t/java-docs-interfaces)!
