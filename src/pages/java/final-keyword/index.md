---
title: Final
---

## final
You use the <i>final</i> keyword to mark a variable constant, so that it can be assigned only once.

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

-----------------------------------------------------------------------------------------
If you make any method as final, you cannot override it.
```java
class Bike{  
  final void run(){System.out.println("running");}  
}  
     
class Honda extends Bike{  
   void run(){System.out.println("running safely with 100kmph");}  
     
   public static void main(String args[]){  
   Honda honda= new Honda();  
   honda.run();  
   }  
}  
```

Output wil be - 
  Output:Compile Time Error
  
---------------------------------------------------------------------------------------


If you make any class as final, you cannot extend it.
  
```java
final class Bike{}  
  
class Honda1 extends Bike{  
  void run(){System.out.println("running safely with 100kmph");}  
    
  public static void main(String args[]){  
  Honda1 honda= new Honda();  
  honda.run();  
  }  
}
```

Output will be-
 Output:Compile Time Error
