---
title: Strings
---
# Strings

Strings are sequences of characters. In Java, a `String` is an `Object`. Strings should not be confused with `char` as characters are literally 1 value rather than a sequence of characters. You can still use 1 value within a String, however it is preferred to use `char` when you are checking for 1 character.

```java
String course = "FCC";
System.out.println(course instanceof Object);
```

Output:
```
true
```

You can create a String either by creating a string literal, or by explicitly creating a String object using the `new` keyword:
```java
String str = "I am a String"; // This is a String literal
String str = new String("I am a String"); // This is a String Object
```

You might be thinking: What's the difference between the two?

Well, using the `new` keyword gurantees that a new `String` object will be created and a new memory location will be allocated in the `Heap` memory (<a href='https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html' target='_blank' rel='nofollow'>Click here to learn more</a>). You see, Java takes care of memory allocation and collecting unused memory in the background - among other things. However, in this case, it's good to be aware about the difference so that you can write code that can help the JVM make appropriate optimizations.

In the this code snippet, how many String objects are created?

```java
String str = "This is a string";
String str2 = "This is a string";
String str3 = new String("This is a string");

System.out.println(str == str2); // This prints true
System.out.println(str == str3); // This prints false
```

The answer is: 2 String objects are created.

You see, the creators of the JVM are pretty smart. They figured that Strings differ mostly in terms of its `content`. When you create a String literal, the JVM internally checks, what is known as the `String pool`, to see if it can find a similar (content wise) String object. If it finds it, it returns the same reference. Otherwise, it just goes ahead and creates a new String object in the pool so that the same check can be performed in the future.

However, whenever you use the `new` keyword, it no longer performs this check. So, there could be a 1000s of String objects with the same content and yet, it'll go ahead and create a new String - using up additional memory. This is precisely why it's a good practice to use `String literals` instead of using the `new` keyword as much as possible.

#### Comparing Strings 
If you want to compare the value of two String variables, you can't use ==. This is due to the fact that this will compare the references of the variables and not the values that are linked to them. To compare the stored values of the Strings you use the methode equals.

```java
boolean equals(Object obj)
```

It returns true if two objects are equal and false otherwise. 
```java
String str = "Hello world";
String str2 = "Hello world";

System.out.println(str == str2); // This prints false
System.out.println(str.equals(str2); // This prints true
```
The first comparison is false because "==" looks at the references and they aren't the same.
The seconde comparison is true because the variables store the same values. In this case "Hello world".

**Notes**

1. String methods use zero-based indexes, except for the second argument of substring().
2. The String class is final- it's methods can't be overridden.
3. When the String literal is found by JVM, it is added to string literal pool.
4. String class contains a method name length(),while arrays have an attribute naming length.
5. Strings are immutable and can not be changed. 
