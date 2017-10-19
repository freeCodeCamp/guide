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

# Return something 

Often you want to return variables. In this case you specify the data type you want to return. You can retrun things like Int, Double, Arrays or Objects. To do this you have to write down the type in the methode header instead of the keyword `void`.

```java
public TYPE class Name(){
    TYPE t = VALUE;
    return t;
}

TYPE type = Name();
```

At the position of TYPE you set the data type which is given back. With `return` you give the value back. Every code which is placed after `return` won't be processed.
To assign the value you recive from a function you simly use `=`.

