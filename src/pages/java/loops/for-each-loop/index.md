---
title: For Each Loop
---
# For Each Loop

Also called the enhanced for loop, it is an extremely useful and simple way to iterate over each item in a collection, arrays and objects that implement the Iterable interface.

```java
for (object : iterable)
{
    // Statements
}
```

The loop is read as - for each element in the `iterable` (could be an array, collectable etc.). The `object` type must match the element type of the `iterable`.

```java
int[] numberArray = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

for (int number : numberArray)
{
    System.out.print(number + " ");
    // Iterated 10 times, numbers 0,1,2...9
}
```

Output:
```
    0 1 2 3 4 5 6 7 8 9
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYs/0' target='_blank' rel='nofollow'>Run Code</a>

In the above code snippet, `numberArray` is an array. If you don't know what this is, don't worry about it. An array is a container object that holds a fixed number of values of a single type, but more on this later.
