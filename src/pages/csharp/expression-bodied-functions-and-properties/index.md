---
title: Expression Bodied Functions and Properties
---

# Expression Bodied Functions and Properties

You can declare functions and properties as a lambda expression, without the need for a statement block. Intended for simple implementations, this syntax is more concise than declaring a regular method or property in that it eliminates the need for some of the curly braces and the use of an explicit return statement.

Here is an example of a regular method declaration:
##
```
public Point CreatePoint(int x, int y)
{
    return new Point(x, y);
}
```
The following gives the same result, but is written as an expression bodied function:
##
```
public Point CreatePoint(int x, int y) => new Point(x, y);
```
