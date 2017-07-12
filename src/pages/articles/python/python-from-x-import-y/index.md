---
title: Python From X Import Y
---
If you have read the <a>`import statements`</a> wiki then you'd have seen me use this statement in one of the examples. Today, we'll try to understand what it does

So picking up the same example:

    >>> from math import ceil, sqrt
    >>> # here it would be
    >>> sqrt(36)
    <<< 6

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CS5t/1)

Or we could use this:

    >>> import math
    >>> # here it would be
    >>> math.sqrt(36)
    <<< 6

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CS5u)

Then our code would look like`math.sqrt(x)` instead of `sqrt(x)`. This happens because when we use `import x`, a namespace `x` is itself created to avoid name conflicts. You have to access every single object of the module as `x.<name>`. But when we use `from x import y` we agree to add `y` to the main global namespace. So while using this we have to make sure that we don't have an object with same name in our program.

> **Never use `from x import y` if an object named `y` already exists**

For example, in `os` module there's a method `open`. But we even have a built-in function called `open`. So, here we should avoid using `from os import open`.

We can even use `form x import *`, this would import all the methods, classes of that module to the global namespace of the program. This is a bad programming practice. Please avoid it.