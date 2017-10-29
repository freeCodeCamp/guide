---
title: Methods
---
# Methods

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Generally, methods in Java consist of these parts - 

* Access Modifer (Optional) - `public`, `private`, or `protected`. Defaults to package private if omitted
* Return Type - This is required, it denotes what value the method returns, or `void` if nothing is returned
* Method Name - follows camelCase convention
* Parameter List - List of parameters with their name and type, empty if no parameters are accepted
* Method body surrounded by `{ }`

Methods can also optionally have the `static` keyword, meaning it is associated with the class itself, rather than an instance of the class, ex - `public static void main()`.

Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use `void` return type.

```java
public class Car {
    private String name;

    public void changeName() {
        name = "Tesla";
    }
}
```

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.
