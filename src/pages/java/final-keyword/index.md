---
title: Final
---

## final
You use the final keyword to mark a variable constant, so that it can be assigned only once.

***Example:***
```java
class MyClass {
  public static final double PI = 3.14;
  public static void main(String[] args){
    System.out.println(PI);
  }
}
```
PI is now a constant. Any attempt to assign it a value will cause an error.
