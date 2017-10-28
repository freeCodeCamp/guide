---
title: Strings
---
# Strings

Strings are sequences of characters. In Java, a `String` is an `Object`.

```java
String course = "FCC";
System.out.println(course instanceof Object); // <- This prints 'true'
```

You can create a String in the following ways:

1.  `String str = "I am a String";` //This is a String literal
2.  `String str = new String("I am a String")`; //This is a String Object

You might be thinking: What's the difference between the two?

Well, using the `new` keyword gurantees that a new `String` object will be created and a new memory location will be allocated in the `Heap` memory (Click here to learn more)<a href='https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html' target='_blank' rel='nofollow'>[https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html</a>]. You see, Java takes care of memory allocation and collecting unused memory in the background - among other things. However, in this case, it's good to be aware about the difference so that you can write code that can help the JVM make appropriate optimizations. To make things clear, consider the example below. 

In the this code snippet, how many String objects are created?

```java
String str = "This is a string";
String str2 = "This is a string";
String str3 = new String("This is a string");

System.out.println(str == str2); // This prints true
System.out.println(str == str3); // This prints false
```

The answer is: 2 String objects are created.

You see, the creators of the JVM are pretty smart. They figured that Strings differ mostly in terms of its `content`. When you create a String literal, the JVM internally checks, what is known as `the String pool`, to see if it can find a similar (content wise) String object. If it finds it, it returns the same reference. Otherwise, it just goes ahead and creates a new String object in the pool so that the same check can be performed in the future.

However, whenever you use the `new` keyword, it no longer performs this check. So, there could be a 1000s of String objects with the same content and yet, it'll go ahead and create a new String - using up additional memory. This is precisely why it's a good practice to use `String literals` instead of using the `new` keyword as much as possible.

Extras
1. String methods use zero-based indexes, except for the second argument of substring().
2. The String class is final- it's methods can't be overridden.
3. When the String literal is found by JVM, it is addes to string literal pool.
4. String class posses a method name length(),while arrays have an attribute naming length.

Quick core method usage on strings:

String string= "Hello world!";

SubString method:    subString(int start, int end)
                     subString(int start)
                     
substring method allows you to create another string based off the string that was called and usually is used to create truncated strings.

using the first, the integers represent the characters in the string and their position where you want to start from and where you wish to end and this will cut the string into another string based off that

KEY NOTE substring end position is not inclusive so the position at the end int will not be part of the new string. 

. Positions for strings and most things start at position 0 so string at position 0 is "H" and position 1 is "e" 

so string.subString(0,1);
will equal a string of "H" since 1 end is not included

but string.subString(0,2);
equals "He" because now 1 "e" is before position 2 and 2 isnt included.

USING just ONE START POS:

substring(0)
this usage means start at the position called and then create a string of characters from that position on.

so string.substring(1) equals  "ello World!" since we put it to start at position 1 which is "e"

KEY start IS INCLUSIVE


