---
title: Methods
---
# Methods
The most recognizable method in Java is probably `public static void main(String[]args)` where `public` means that users have access to the method, `static` means that the method is based on a "class" rather than an "instance," `void` means that nothing will be returned from the method to another (higher level) method, and `main` which is the name of this particular method.

Each method has a signature, which is the combination of the data type, the name, and the number of arguments the method takes. In `public static void main` the method does not have a specified data type and instead uses `void` to declare that no data is returned. In a method named `public static double ave(double val, double val)` the data type is "double" (0.0), the name is "ave" (average) and the method takes 2 arguments. Each method **must** have a unique signature.

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use `void` return type.

```java
public class Car {
    private String name;
    private String manufacturersName;

    public void changeName() {
        name = "Tesla";
    }
    
    public String getName(){
        return name;
    }
    
    public String getManufacurername(){
        return manufacturersName;
    }
    
}
```
Parameters can be passed into methods. Parameters are declared just after the name of the method, inside brackets.
Syntax for parameter declaration is [Data Type] [Name].
```java
public class Car {
    private String name;

    public void changeName(String newName) {
        name = newName;
    }
}
```

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.
