---
title: For Each Loop
---
# For Each Loop

Also called the enhanced `for` loop, it is an extremely useful and simple way to iterate over each item in a collection, array or any object that implements the `Iterable` interface.

```java
for (object : iterable)
{
    // Statements
}
```

The loop is read as, "for each element in the `iterable` (could be an array, collectable etc.)". The `object` type must match the element type of the `iterable`.

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

for (int numbers : number_list)
{
    System.out.print(numbers + " ");
    // Iterated 10 times, numbers 0,1,2...9
}
```

Output:
```
    0 1 2 3 4 5 6 7 8 9
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYs' target='_blank' rel='nofollow'>Run Code</a>

In the above code snippet, `number_list` is an array. If you don't know what this is, see <a href='https://guide.freecodecamp.org/java/arrays' target='_blank' rel='nofollow'>here</a>.
