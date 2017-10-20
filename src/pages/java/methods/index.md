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

Now we continue our peek into new Java 8 features by continuing with ```default methods```. Those are closely related to lambdas, which could be the main theme of Java 8.

### Why default methods?

Many programming languages integrate function expressions with their collections library. This often leads to shorter and easier code.
For example consider a loop.

```java
  for (int i = 0; i < list.size(); i++) {
      System.out.println(list.get(i));
  }
```
There is a better way since Java8. The library designers can supply a forEach method that applies a function to each element. Then you can simply call.

```java
 List<?> list = new ArrayList<>();
 list.forEach(System.out::println); 
```
The forEach method takes java.util.function.Consumer functional interface type as a parameter which enables us to pass in a lambda or a method reference as follows.

```java
/*
* ForEach method for collections, we can find its default implementation in java.lang.Iterable interface
*/
@FunctionalInterface
public interface Iterable<T> {
    Iterator<T> iterator();
    
    default void forEach(Consumer<? super T> action) {
    	Objects.requireNonNull(action);
    	for (T t : this) {
        	action.accept(t);
    	}
    }
}
```
That's fine if the collections library has been designed this way from the very beginning, but it has been designed many years ago. This means if the Collection interface gets new methods, such as forEach, then every program that defines its own class implementing Collections will break. That is why designers decided to solve this problem once and for all by allowing interface methods with ```concrete implementations (called default methods)```. Those methods can be safely added to existing interfaces.

Consider an interface:

```java
   interface Pet {
        String getName();

        default String getAddress() {
            return "2000 Carr 8177, Suite 26-258, Guaynabo, 00966, Puerto Rico";
        }
    }
```

The interface has two methods: getName which is an abstract method, and the default method getAddress. A concrete class that implements the Pet interface must provide an implementation of getName, but it can choose to keep the implementation of getAddress or to override it.

Default methods put an end to the classic pattern of providing an interface and an abstract class that implements most or all of its methods. 

*Now You can just implement methods in the interface.*

```Default methods``` are an interesting addition to the Java language – you can think of them as a bridge between lambdas and JDK libraries. The primary goal of default methods is to enable an evolution of standard JDK interfaces and provide a smooth experience when we finally start using lambdas in Java 8.
