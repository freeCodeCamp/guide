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

The outout is 2, because the `COUNT` variable is static and gets incremented by one each time a new object of the Counter class is created.  You can also access the static variable using any object of that class, such as `c1.COUNT`.
