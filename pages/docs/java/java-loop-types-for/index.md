---
title: "Java Loop Types: for"
parent: "java"
---

# The Java For Loop

The `for` loop give you a compact way to iterate over a range of values.

    for (initialization; expression; increment)
    {
        // Statements
    }

*   `initialization` - Initializes the loop and is executed just once, at the beginning.
*   `expression` - Evaluated at the beginning of each iteration. If the `expression` evaluates to `true`, `Statements` will get executed.
*   `increment` - Invoked after each iteration through the loop. You can increase/decrease the value of variables here.

    int iter_For;
    for (iter_For = 0; iter_For < 10; iter_For++)
    {
        System.out.print (iter_For + " ");
        // Iterated 10 times, iter_For 0,1,2...9
    }
    System.out.println("iter_For Value: " + fooFor);

Output:

    0 1 2 3 4 5 6 7 8 9
    iter_For Value: 10

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJYr/0)
