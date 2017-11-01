---
title: Classes and objects
---

# Classes and objects

C++ was created to augment the capabilities of the C language by adding, among other constructs, classes and objects, in the object-oriented paradigm.

Classes are programmer-defined structures that can contain both data and functions specific to that structure. Classes may also inherit from, or extend, other classes. Classes are often used to represent abstractions of objects in the real world. An "automobile" class may for example have data structures with information about its make, model, model year, etc. It may also have functions such as accelerate(), brake(), start(), and stop(). Functions that belong to classes are called *member functions* of that class.

Objects are simply instances of classes. You declare a class using the `class` keyword, and declare objects - instances of that class - using the class name as the data type in your declaration:

```cpp
// Declare a class:

class Automobile
{
	char make[100];
	char model[100];
	uint year;
	void start();
	void stop();
	void accelerate();
	void brake();
}

// Declare instances of the Automobile class:

Automobile myRedCar;
Automobile myBlueCar;
```
To define the operation of the member functions, you use the scope resolution operator, `::`:

```cpp
void Automobile::start() {
	// Code that represents what an Automobile does when it starts
}
```

Elsewhere in your program, assuming you had declared an `Automobile` object named `myBlueCar`, you would "start" your blue car by calling the `start()` function of the `myBlueCar` instance of the `Automobile` class using the member access operator, `.`:

```cpp
myBlueCar.start();
```
