---
title: Methods
---
# Methods

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use `void` return type.

```java
public class Car {
    private String name;

    public void changeName() {
        name = "Tesla";
    }
}
```

To give your methods parameters to work with, you can specify them in the brackets after the name of the function.

```java
public class Car {
    private String name;
    
    public void changeNameTo(String newName) {
        name = newName;
    }
}
```

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.
