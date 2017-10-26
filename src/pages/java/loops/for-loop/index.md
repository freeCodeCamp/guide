---
title: For Loop
---
# For Loop

The `for` loop give you a compact way to iterate over a range of values.
A basic for statement has three parts: declaration and/or initialization, boolean evaluation, and the iteration expression.

```java
for (initialize variable; condition; modify variable)
{  
    // perform action  
}
```

* `initialization` - Initializes the loop and is executed just once, at the beginning.
You can initialize more than one variable of the same type in the first part of the basic for loop declaration; each initialization must be separated by a comm
* `expression` - Evaluated at the beginning of each iteration. If the `expression` evaluates to `true`, `Statements` will get executed.
* `increment` - Invoked after each iteration through the loop. You can increase/decrease the value of variables here.

```java
int index;
for (index = 0; index < 10; index++)
{
    System.out.print(index + " ");
    // Iterated 10 times, index 0,1,2...9
}
System.out.println("index value after loop: " + index);
```

Output:
```
0 1 2 3 4 5 6 7 8 9
index Value: 10
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYr/0' target='_blank' rel='nofollow'>Run Code</a>
Extras
You cannot use a number (old C-style language construct) or anything that does not evaluate to a boolean value as a condition for an if statement or looping construct. You can't, for example, say if(x), unless x is a boolean variable.
