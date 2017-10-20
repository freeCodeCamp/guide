---
title: Functions
---

## Key features of a Python function

- Functions in Python are defined using the `def` keyword
- Conventional parameters and keyword arguments are supplied to the function in parentheses following the function name
- Function content must be indented
- A `return` statement is used to determine what the function returns
- Python functions return `None` if no return statement is given

## Basic syntax

```
def function_name(arg_1, arg_2):
    return (arg_1, arg_2)
```

## A simple example

To write a function that returns a greeting, we could use:

```
>>> def greeting(greeting):
>>>     return greeting
>>> greeting("Hello there!")
'Hello there!'
```

But we might want our greeting to be personalised:

```
>>> def greeting(name):
>>>     return "Hi {0}!".format(name)
>>> greeting("Wendy")
'Hi Wendy!'
```

Finally, we can use a keyword argument that provide a default to use when no other argument value is provided:

```
>>> def greeting(name=None):
>>>     if name:
>>>         return "Hi {0}!".format(name)
>>>     return "Hi there!"
>>> greeting()
'Hi there!'
>>> greeting('John')
'Hi John!'
```

## *args and **Kwargs

The special `*` and `**` syntax can be used to provide a variable number of arguments and keyword arguments to a function.
They are passed to the function as a `tuple` or `dict` respectively, and can be handled accordingly.

```
>>> def print_args(*argv):
>>>     for arg in argv:
>>>         print(arg)
>>> print_args('lots', 'of', 'arguments', 'here')
lots
of
arguments
here
>>> def print_kwargs(**kwargs):
>>>    for k,v in kwargs.items():
>>>        print("Key: {0}, value: {1}".format(k, v))
>>> print_kwargs(foo='bar', hello='world')
Key: foo, value: bar
Key: hello, value: world
```

## Docstrings

The first line below the function definition line can be a string that describes the function. This can be used to build documentation, and is used by the builtin `help()` function.

```
>>> def combine_strings(a, b):
>>>     """ Returns strings a and b combined as a string separated by a space."""
>>>     return a + " " + b
>>> help(combine_strings)
Help on function combine_strings:

combine_strings(a, b)
    Returns strings a and b combined as a string separated by a space.
```

#### More Information:

Python docs: [defining functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)


