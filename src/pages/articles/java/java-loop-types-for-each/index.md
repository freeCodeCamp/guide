---
title: Java Loop Types for Each
---
# The Java For Each Loop

Also called the enhanced for loop, it is an extremely useful and simple way to iterate over each item in a collection, arrays as well as objects that implement the Iterable interface.

    for (object : iterable)
    {
        // Statements
    }

The loop is read as - for each element in the `iterable` (could be an array, collectable etc.). The `object` type must match the element type of the `iterable`.

    int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

    for (int numbers : number_list)
    {
        System.out.print (numbers + " ");
        //Iterated 10 times, numbers 0,1,2...9
    }

Output:

    0 1 2 3 4 5 6 7 8 9

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CJYs/0)

In the above code snippet, `number_list` is an array. If you don't know what this is, don't worry about it. An array is a container object that holds a fixed number of values of a single type, but more on this later.