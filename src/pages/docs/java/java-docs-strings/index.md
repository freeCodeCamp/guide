---
title: "Java Docs: Strings"
parent: "java"
---

# Java Strings

Strings, as you might be already aware, are a sequence of characters. In Java, a `String` is an `Object`.

    String course = "FCC";
    System.out.println( course instanceof Object); //<- This prints 'true'

You can create a String in the following ways:

1.  `String str = "I am a String";` //This is a String literal
2.  `String str = new String("I am a String")`; //This is a String Object

You might be thinking: What's the difference between the two?

Well, using the `new` keyword gurantees that a new `String` object will be created and a new memory location will be allocated in the `Heap` memory (Click here to learn more)[[https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html)]. You see, Java takes care of memory allocation and collecting unused memory in the background - among other things. However, in this case, it's good to be aware about the difference so that you can write code that can help the JVM make appropriate optimizations.

The following snippet will make things more clearer. The objective is to understand: How many String objects are created?

     String str = "This is a string";
     String str2 = "This is a string";
     String str3 = new String("This is a string");

     System.out.println( str == str2 ); //This prints true
     System.out.println( str == str3 ); //This prints false

The answer is: 2 String objects are created.

You see, the creators of the JVM are pretty smart. They figured that Strings differ mostly in terms of its `content`. When you create a String literal, the JVM internally checks, what is known as `the String pool`, to see if it can find a similar (content wise) String object. If it finds it, it returns the same reference. Otherwise, it just goes ahead and creates a new String object in the pool so that the same check can be performed in the future.

However, whenever you use the `new` keyword, it no longer performs this check. So, there could be a 1000s of String objects with the same content and yet, it'll go ahead and create a new String - using up additional memory. This is precisely why it's a good practice to use `String literals` instead of using the `new` keyword as much as possible.
