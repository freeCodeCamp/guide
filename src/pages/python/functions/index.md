---
title: Functions
---

### Introduction
Functions are ways to create a block of organised code. They provide better modularity for your application and a high degree of code reusability.


### Syntax
* Function blocks begin with the ```def``` keyword followed by the function name and parenthesis ().

* All parameters are placed within these parenthesis. You can also  define parameters inside them.

* The first statement of a function can be an optional statement - the documentation string of the function or docstring.

* The code block within every function starts with a colon (:) and is indented.

* The statement return [expression] exits a function, optionally passing back an expression to the caller. A return statement with no arguments is the same as return None.

**Syntax**
```python
def function_name(parameter_list):
    """ Document String """
    # code comes here
```

**Code Sample**
```python
def add_two_numbers(a, b):
    return a + b

add(1, 2)
```


### Calling a Function
To call a function, simply write the function name followed by the actual parameters (passed either as values or variables) in parenthesis.

**Syntax**
```python
# Eg: calling a function having 2 parameters param1 and param2
function_name(param1, param2)
```


### Parameter List
There are different types of arguments that can be passed to functions. They are:

* Required arguments:
They are passed to a function in correct positional order. Here, the number of arguments in the function call should match exactly with the function definition.

**Code Sample**
```python
# Eg: to call the function multiply(), 2 arguments need to be passed
def multiply(x, y):
    return x * y

# gives error - TypeError: multiply() takes exactly 2 argument (0 given)
multiply()      

multiply(2, 4)  # returns 8
```

* Keyword arguments:
Keyword arguments are related to the function calls. When you use keyword arguments in a function call, the caller identifies the arguments by the parameter name.

**Code Sample**
```python
def print_value(str):
    print(str)

print_value(str="hello world!")
```

* Default arguments:
A default argument is an argument that assumes a default value if a value is not provided in the function call for that argument.

**Code Sample**
```python
def person(name, age=0):
    print("Name: ", name)
    print("Age: ", age)

person(name="abc", age=20)
```

* Variable-length arguments:
You may need to process a function for more arguments than you specified while defining the function. These arguments are called variable-length arguments and are not named in the function definition, unlike required and default arguments.

An asterisk (*) is placed before the variable name that holds the values of all nonkeyword variable arguments. This tuple remains empty if no additional arguments are specified during the function call. 

**Code Sample**
```python
def printinfo( arg1, *vartuple ):
    print(arg1)
    for var in vartuple:
        print(var)

printinfo( 10 )
printinfo( 70, 60, 50 )
```


### Return Value

The statement return [expression] exits a function, optionally passing back an expression to the caller. A return statement with no arguments is the same as return None.

**Code Sample**
```python
def sum( arg1, arg2 ):
   total = arg1 + arg2
   return total

total = sum( 10, 20 )
print("Total: ", total) 
```


### Run Code
[Run Code] (https://repl.it/Mwcs/1)


### Other Resources
* [Function Naming Conventions] (https://www.python.org/dev/peps/pep-0008/#function-names)

* [Function Docstring Conventions] (https://www.python.org/dev/peps/pep-0257/)

* [Variable Length and Keyword Arguments] (http://book.pythontips.com/en/latest/args_and_kwargs.html)
