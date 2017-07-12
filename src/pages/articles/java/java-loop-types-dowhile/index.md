---
title: Java Loop Types Dowhile
---
# The Java Do While loop

The `do while` is very similar to the `while` loop in the way it works, but is _exit controlled_ (unlike the `for` and `while` loops which are _entry controlled_), that is, the truth value of its `expression` is evaluated after the execution of `Statements`.

    do
    {
        // Statements
    }
    while (expression);

This kind of loop is particularly useful if you want your `Statements` to be executed at least once, irrespective of what `expression` evaluates to. You want to do this if you are initializing a variable inside your loop and plan on using its value later.

    int iter_DoWhile = 20;
    do
    {
        System.out.print (iter_DoWhile + " ");

        // Increment the counter
        iter_DoWhile++;
    }
    while(iter_DoWhile < 10);
    System.out.println ("iter_DoWhile Value: " + iter_DoWhile);

Output:

    20
    iter_DoWhile Value: 21

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJYl/0)