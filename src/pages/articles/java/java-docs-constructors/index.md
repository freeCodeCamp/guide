---
title: Java Docs Constructors
---
# Java Constructors

What's the point then? I should be able to store data in it right?

That's when we use either **getter** (e.g., getName()) / **setter** (e.g., setName()) methods or in this case constructors to initialize a class. Basically every Java Class has a constructor, which is the method which is called first when any object of the class is initialized. Think of it as a bit of starter code.

When you write a class without any constructor, then Java assumes it has a default constructor :

    public class Car {
        private String name;
    }

    Car modelS = new Car();

This initializing with no parameters is a way of calling the default constructor. You can also have a default constructor written yourself this way :

    public class Car {
        private String name;

        public Car() {
            name = "Tesla";
        }
    }

Then, when calling `new Car()`, the variable `name` will get auto-initialized to `"Tesla"`.

Clearly, constructors are exactly what they sound like: they are used to `construct` i.e., instantiate an object of a particular class.  
Constructors look similar to method declarations, but are slightly different in the sense that they:

1.  Are named exactly the same as the class.
2.  Don't have a return type.

Hence, the purpose of using `constructors` is to provide:

1.  A way to instantiate an object.
2.  Provide initial values to a object properties.
3.  Control how an object is created.

Let's look at another example. Say, Honda (the car manufacturer), wants all its cars to be named `Honda <something>`. In order to enforce this, we might represent this using a class as follows:

    public class Car {

        private String name;

        //Constructor.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CTJ4/1)

Notice that when we write a constructor in this way i.e., providing a parameter, we are `controlling` (point no. 3) the way an instance of `Car` is created. In short, we are saying in this example that `you MUST provide a model name in order to get an instance of Car class`.

Why is this important? There are times when you'd want `one and only one` instance of a class which you'd want to use in your entire application. One way of achieving this is by using a `private` constructor.

Assume you need a class to represent a Bank. You wouldn't want people to create instance of `Bank` ever. So, you design your class:

    public class Bank {

        private static Bank instance;

        private Bank(){

        }

        public static Bank getInstance(){
            if(null==instance){
                instance = new Bank();
            }
            return instance;
        }

    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CTJz/0)

Notice that the constructor is `private`. This enforces the fact that no one else is allowed to create an `instance` of the Bank.  
In fact, if in another class, you try:

    Bank account = new Bank(); //-> throws a compilation error: Bank() has private access in Bank.

So, the only way to gain access to the instance is by using `Bank.getInstance()`. Such instances are called `Singleton` since you get exactly one instance (per VM to be precise) throughout the life of your application.