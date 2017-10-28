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

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.
in any programming language including java, methods are some statements grouped together to perform a specific function.
in java, there a specific syntax of creating a method ie:
<access modifier><return type><name of method><variable><(parameter)>
    eg-
    public int users (int a, int b){
    
  //body
  
  
  }
