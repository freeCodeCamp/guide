---
title: Algorithm Design Patterns
---
## Algorithm Design Patterns

![design pattern image](https://source.unsplash.com/aHhhdKUP77M/1600x600 "Design Patterns")
<small>Photo by : [Scott Webb](https://unsplash.com/@scottwebb) on [Unsplash](https://unsplash.com)</small>

### Introduction
As **best practice** in software engineering, at first a developer needs to think out any solution to outline problems that are going to be solved. To deal with the needs, developers could make use of **Design Patterns** to find the best solution. Design patterns work by **outlining** a reusable solution for a commonly occuring problem, that found on certain context. The term *"outlining"* means that design pattern is *not* a finished design that can be transformed directly into code.

In general, design patterns could be divided into 3 categories :
1. Creational Patterns (all about class instantiation)
2. Structural Patterns (all about class and object composition)
3. Behavioral Patterns (all about class' objects communication)

### Categories
#### 1. Creational Patterns
This pattern can be further divided into class-creation patterns and object-creational patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.
- **Abstract Factory**<br>Creates an instance of several families of classes
- **Builder**<br>Separates object construction from its representation
- **Factory Method**<br>Creates an instance of several derived classes
- **Object Pool**<br>Avoid expensive acquisition and release of resources by recycling objects that are no longer in use
- **Prototype**<br>A fully initialized instance to be copied or cloned
- **Singleton**<br>A class of which only a single instance can exist

#### 2. Structural Patterns
Structural class-creation patterns use inheritance to compose interfaces. Structural object-patterns define ways to compose objects to obtain new functionality.
- **Adapter**<br>Match interfaces of different classes
- **Bridge**<br>Separates an object’s interface from its implementation
- **Composite**<br>A tree structure of simple and composite objects
- **Decorator**<br>Add responsibilities to objects dynamically
- **Facade**<br>A single class that represents an entire subsystem
- **Flyweight**<br>A fine-grained instance used for efficient sharing
- **Private Class Data**<br>Restricts accessor/mutator access
- **Proxy**<br>An object representing another object
  
#### 3. Behavioral Patterns
Behavioral patterns are those patterns that are most specifically concerned with communication between objects.
- **Chain of Responsibility**<br>A way of passing a request between a chain of objects
- **Command**<br>Encapsulate a command request as an object
- **Interpreter**<br>A way to include language elements in a program
- **Iterator**<br>Sequentially access the elements of a collection
- **Mediator**<br>Defines simplified communication between classes
- **Memento**<br>Capture and restore an object's internal state
- **Null Object**<br>Designed to act as a default value of an object
- **Observer**<br>A way of notifying change to a number of classes
- **State**<br>Alter an object's behavior when its state changes
- **Strategy**<br>Encapsulates an algorithm inside a class
- **Template Method**<br>Defer the exact steps of an algorithm to a subclass
- **Visitor**<br>Defines a new operation to a class without change

### More Information
Interested to reveal more? [Source Making](https://sourcemaking.com/design_patterns) could be your best friend ever. Enjoy!
