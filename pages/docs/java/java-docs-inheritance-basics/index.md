---
title: "Java Docs: Inheritance Basics"
parent: "java"
---

# Java Inheritance Basics

So great you have successfully created a Car class. But, wait, aren't Tesla cars supposed to be electric variants? I want an Electric car class, but it also should have the properties of the original `Car` class.

Solution : **Inheritance**. Java provides a neat way to "inherit" parent properties :

    public class Car {

        private String name;
        private String manufacturerName;

        public Car(String name, String man) {
            this.name = name;
            this.manufacturerName = man;
        }
        // Getter method
        public String getName() {
            return name;
        }
        // Getter method
        public String getManufacturerName() {
            return manufacturerName;
        }
    }

    public class ElectricCar extends Car {

        public ElectricCar(String name, String man) {
            super(name, man);
        }

        public void charge() {
         System.out.println("Charging ...");
        }
    }

    ElectricCar modelS = new ElectricCar("Model S","Tesla");
    // prints Tesla
    System.out.println(modelS.getManufacturerName());
    // prints Charging ...
    modelS.charge();

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJZY/0)

See here that the class `ElecticCar` inherits or `extends` the public methods from `Car` class, as well as has its own methods and properties. Cool way to pass on information!

Also notice the usage of [super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html) keyword here. Since our `Car` class had a constructor, so we have to initialize that constructor from the child class as well. We do that using the `super` keyword. Read more about <a>Inheritance here</a>.
