---
title: Functions
---
## Functions

Functions are a convenient way to divide your code into useful blocks, allowing us to order our code, make it more readable, reuse it and save some time. Also functions are a key way to define interfaces so programmers can share their code.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
#### Defining a Function
You can define functions to provide the required functionality. Here are simple rules to define a function in Python.
 * Function blocks begin with the keyword def followed by the function name and parentheses ( ( ) ).
 * Any input parameters or arguments should be placed within these parentheses. You can also define parameters inside these parentheses.
 * The first statement of a function can be an optional statement - the documentation string of the function or docstring.
 * The code block within every function starts with a colon (:) and is indented.
 * The statement return [expression] exits a function, optionally passing back an expression to the caller. A return statement with no arguments is the same as return None.
 
#### Syntax
```python 
def functionname( parameters ):
  "function_docstring"
  function_suite
  return [expression]
```
#### Example
```python
def my_function(str):
    "My first function"
    print("Hello From My Function! ", str)
    return

my_function("Hello again")
Hello From My Function! Hello again
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information about functions can be found [here](https://docs.python.org/3/library/functions.html)

