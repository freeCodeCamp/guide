---
title: Static
---

# Static
When you declare a variable or a method as static, it belongs to the class, rather than a specific instance.  This means that only one instance of a static member exists, even if you create multiple objects of the class, or if you don't create any. It will be shared by all objects.

***Example:***
```java
public class Counter {
  public static int COUNT = 0;
  Counter() {
    COUNT++;
  }
}
```
The `COUNT` variable will be shared by all objects of that class. When we create objects of our Counter class in main, and access the static variable.
```java
public class MyClass {
  public static void main(String[] args) {
    Counter c1 = new Counter();
    Counter c2 = new Counter();
    System.out.println(Counter.COUNT);
  }
}
// Outputs "2"
```

The output is 2, because the `COUNT` variable is static and gets incremented by one each time a new object of the Counter class is created.  You can also access the static variable using any object of that class, such as `c1.COUNT`.

###Static Methods

In Java we can have a *class method* that does not depend on an object, but applies to the class in which it was declared. Such a method does not require a calling object and is known as `**static method**`. Often, `static` methods are used to perform common tasks or simple numeric calculations.
You can define a static method as any other method, but you must add a `static` keyword in its heading.

###Example:

```public static int minimum(int number1, int number2){
	if (number1 < number2)
		return number1;
	else 
		return number2;
}```

You can call the `static` method by writing the name of the class where the method was declared, followed by a dot and the method name. If the method above was declared in the Counter class, and later called in the MyClass class, we would write:

```Counter.minimum(argument1, argument2);``` 

