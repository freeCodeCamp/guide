---
title: Methods
---
# Methods

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you want a method to return something, its return type, which is stated right before the method name, needs to be declared based on its data type. For example, for the method `changeName()` in our example, you could type `public int changeName()` if you wanted to return an integer. The same goes for other data types, such as doubles, String, boolean, char, etc. If you do not want a method to return anything, use `void` return type.

```java
public class Car {
    private String name;

    public void changeName() {
        name = "Tesla";
    }
}
```

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability..
