---
title: Strings
---
# Strings

Strings are sequences of characters. In Java, a `String` always is an `Object`.

```java
String course = "FCC";
System.out.println(course instanceof Object); // This prints 'true'
```

You can create a String Object in the following ways:

1. `String str = "I am a String"; //as a String literal`
1. `String str = "I am a " + "String"; //as a constant expression`
1. `String str = new String("I am a String"); //use the constructor`

You might be thinking: What's the difference between the three?

Well, using the constructor guarantees that a new `String` object will be created and a new memory location will be allocated in the `Heap` memory. String literals and constant String expressions are cached at compile time. The compiler puts them in the String Literal Pool to prevent duplicates and improve memory consumption. Object allocation is expensive and this trick increases performance while instantiating Strings. If you use the same literal again, the JVM uses the same object. Using the contructor like above is almost always wrong.

In the this code snippet, how many String objects are created?

```java
String str = "This is a string";
String str2 = "This is a string";
String str3 = new String("This is a string");
```

The answer is: 2 String objects are created.  
`str` and `str2` are the very same objects. `str3` has the same content but using new forced the creation of a new object. You can test this using the swallow, fast Object comparison `==` and the implemented `equals()`

```java
System.out.println(str == str2); // This prints 'true'
System.out.println(str == str3); // This prints 'false'
System.out.println(str.equals(str3)); // This prints 'true'
```

Extras
1. String methods use zero-based indexes
2. The String class is final, you can't inherit from it to override its methods.
3. The String class possesses a method name length(), while arrays have an attribute naming length.
