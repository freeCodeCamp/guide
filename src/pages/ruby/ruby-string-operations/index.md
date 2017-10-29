---
title: Ruby String Operations
---
Both concatenation and multiplication can be performed on strings.

## Concatenation:

*   Strings can be joined together using any of the following methods:
    *   `+` operator
    *   `<<` operator
    *   `.concat` method
    ```ruby
    "Hello" + " World" + "!"  #=> Hello World!
    ```

    ```ruby
    "Hello" << " World!" #=> Hello World!
    ```

    ```ruby
    string1 = "Hello"
    string2 = " World!"
    string1.concat(string2) #=> Hello World!
    ```

## Multiplication:

*   Strings can be multiplied by an integer value using the `*` operator.
    ```ruby
    "Hello" * 3 #=> HelloHelloHello
    ```
