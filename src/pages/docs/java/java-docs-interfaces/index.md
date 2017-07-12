---
title: "Java Docs: Interfaces"
parent: "java"
---

# Java Interfaces

Interface in Java is a bit like the Class, but with a significant difference : an `interface` can _only_ have method signatures and fields. That means, an Interface cannot contain the implementation of any method, just its signature, i.e. the name, parameters and exceptions of the method. For example :

    public interface Vehicle {
    	public String licensePlate = "";
    	public void start();
    	public void stop();
    }

The interface above contains one field and two methods. Alone, it is not of much use, but they are usually used along with Classes. How? Simple, you have to make sure some class `implements` it.

    public class Car implements Vehicle {
    	public void start() {
    		System.out.println("starting engine...");
    	}
    	public void stop() {
    		System.out.println("stopping engine...");
    	}
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CItd/0)

Now, there is a **ground rule** : The Class must implement **all** of the methods in the Interface. The methods must have _the exact same_ signature (name, parameters and exceptions) as described in the interface. The class _does not_ need to declare the fields though, only the methods.

## Instances of an Interface

Once you create a Java Class which `implements` any Interface, the object instance can be referenced as an instance of the Interface. Similar concept as of Inheritance instantiation.

    // following our previous example

    Vehicle tesla = new Car();

    tesla.start(); // starting engine ...

But, you **cannot** create an instance of an Interface itself. You must create instance of some class implementing an Interface to reference it. Think of interfaces as a blank contract form, or a template.

What can you do with this feature? Polymorphism! You can use only interfaces to refer to object instances!

    class Truck implements Vehicle {
    	public void start() {
    		System.out.println("starting truck engine...");
    	}
    	public void stop() {
    		System.out.println("stopping truck engine...");
    	}
    }

    class Starter {
    	// static method, can be called without instantiating the class
    	public static void startEngine(Vehicle vehicle) {
    		vehicle.start();
    	}
    }

    Vehicle tesla = new Car();
    Vehicle tata = new Truck();

    Starter.startEngine(tesla); // starting engine ...
    Starter.startEngine(tata); // starting truck engine ...

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CItm/0)

## But how about multiple interfaces?

Yes, you can implement multiple Interfaces in a single class. While in [Inheritance](//forum.freecodecamp.com/t/java-docs-inheritance) within Classes you were restricted to inherit only one class, here you can extend any number of interfaces. But do not forget to implement _all_ of the methods of all the Interfaces, otherwise compilation will fail!

    public interface GPS {
    	public void getCoordinates();
    }

    public interface Radio {
    	public void startRadio();
    	public void stopRadio();
    }

    public class Smartphone implements GPS,Radio {
    	public void getCoordinates() {
    		// return some coordinates
    	}
    	public void startRadio() {
    	  // start Radio
    	}
    	public void stopRadio() {
    		// stop Radio
    	}
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CIto/0)

## Some features of Interfaces

*   You can place variables within an Interface, although it won't be a sensible decision as Classes are not bound to have the same variable. In short, avoid placing variables!
*   All variables and methods in an Interface are public, even if you leave out the `public` keyword.
*   An Interface cannot specify the implementation of a particular method. Its upto the Classes to do it. Although there has been a recent exception (see below).
*   If a Class implements multiple Interfaces, then there is a remote chance of method signature overlap. Since Java does not allow multiple methods of the exact same signature, this can lead to problems. See [this question](http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java) for more info.

## Interface Default Methods

Before Java 8, we had no way to direct an Interface to have a particular method implementation. This lead to lot of confusion and code breaks if an Interface definition is suddenly changed.

Suppose, you wrote an open source library, which contains an Interface. Say, your clients, i.e. practically all developers around the world, are using it heavily and are happy. Now you have had to upgrade the library by adding a new method definition to the Interface to support a new feature. But that would break _all_ builds since all Classes implementing that Interface has to change now. What a catastrophe!

Thankfully, Java 8 now provides us `default` methods of Interfaces. A `default` method _can_ contain its own implementation _directly_ within the Interface! So, if a Class does not implement a default method, the compiler will take the implementation mentioned within the Interface. Nice, isn't it? So in your library, you may add any number of default methods in interfaces without the fear of breaking anything!

    public interface GPS {
    	public void getCoordinates();
    	default public void getRoughCoordinates() {
    		// implementation to return coordinates from rough sources
    		// such as wifi & mobile
    		System.out.println("Fetching rough coordinates...");
    	}
    }

    public interface Radio {
    	public void startRadio();
    	public void stopRadio();
    }

    public class Smartphone implements GPS,Radio {
    	public void getCoordinates() {
    		// return some coordinates
    	}
    	public void startRadio() {
    	  // start Radio
    	}
    	public void stopRadio() {
    		// stop Radio
    	}

    	// no implementation of getRoughCoordinates()
    }

    Smartphone motoG = new Smartphone();
    motog.getRoughCoordinates(); // Fetching rough coordinates...

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CItp/0)

### But, what happens if two interfaces have the same method signature?

Awesome question. In that case, if you do not provide the implementation in the Class, poor compiler will get confused and simply fail! You have to provide a default method implemention within the Class also. There is also a nifty way using `super` to call which implementation you like :

    public interface Radio {
    	// public void startRadio();
    	// public void stopRadio();

    	default public void next() {
    		System.out.println("Next from Radio");
    	}
    }

    public interface MusicPlayer {
    	// public void start();
    	// public void pause();
    	// public void stop();

    	default public void next() {
    		System.out.println("Next from MusicPlayer");
    	}
    }

    public class Smartphone implements Radio, MusicPlayer {
    	public void next() {
    		// Suppose you want to call MusicPlayer next
    		MusicPlayer.super.next();
    	}
    }

    Smartphone motoG = new Smartphone();
    motoG.next(); // Next from MusicPlayer

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CIts/0)

## Inheriting an Interface

It is also possible in Java for an Interface to _inherit_ another Interface, by using, you guessed it, `extends` keyword :

    public interface Player {
    	public void start();
    	public void pause();
    	public void stop();
    }

    public interface MusicPlayer extends Player {
    	default public void next() {
    		System.out.println("Next from MusicPlayer");
    	}
    }

That means, the Class implementing `MusicPlayer` Interface has to implement _all_ methods of `MusicPlayer` as well as `Player` :

    public class SmartPhone implements MusicPlayer {
    	public void start() {
    		System.out.println("start");
    	}
    	public void stop() {
    		System.out.println("stop");
    	}
    	public void pause() {
    		System.out.println("pause");
    	}
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CIty/0)

Whoops, did I forget `next()` ? See, since it was a `default` method, I didn't had to provide an implementation at all. (Wont work for JDK < 8)

So, now you have a good grasp of Interfaces! Go learn about Abstract Classes to know how Java gives you yet another way to define contracts.
