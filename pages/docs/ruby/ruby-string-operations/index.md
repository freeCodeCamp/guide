---
title: "Ruby String Operations"
parent: "ruby"
---

Both concatenation and multiplication can be performed on strings.

## Concatenation:

*   Strings can be joined together using any of the following methods:
    *   `+` operator

    *   `<<` operator
    *   `.concat` method

    "Hello" + " World" + "!"
    # returns:
    Hello World!

    "Hello" << " World!"
    # returns:
    Hello World!

    string1 = "Hello"
    string2 = " World!"
    string1.concat(string2)
    # returns:
    Hello World!

## Multiplication:

*   Strings can be multiplied by an integer value using the `*` operator.

    "Hello" * 3
    # returns:
    HelloHelloHello
