---
title: Functions
---
## Functions

Functions are self-contained pieces of code designed to perform a specific task. In other words, functions are like small programs used inside bigger ones. These blocks are helpful to break a program into smaller modules or chunks. Also, they improve readability and avoid code repetition. This makes code more organized and manageable.

### Syntax of Functions
The basic syntax of a function is provided below:
```python
def function_name(paramters):
  '''
  docstrings
  '''
  statement(s)
```
1. You use the ```def``` keyword to mark the start of your function definition.
2. Then you need to give this function a name.
3. Inside parenthesis you put the parameters (or arguments) of your function.
4. Inside the body of your function you can write its docstrings (function documentation)
5. Then you write a sequence of statemets to be executed when your function is called.
6. Optionally you can insert a ```return``` statement to return a value from your function.

#### Function Example
Take a look at the function defined next:
```python
def add_function(x, y):
  '''
  The function takes two numbers, adds them and return the result.
  x -> int
  y -> int
  return -> int
  '''
  number = x + y
  return number
```

The ```def``` keyword indicates that a function is about to be defined.

Then the function is given a name, ```add_function``` in this case.

The parameters or arguments of the function are declared inside parenthesis: ```x``` and ```y``` are the arguments of the ```add_function```.

You finish your function fisrt line with a collon```:```, indicating you are ready to write some statements.

The optional documentation string (docstrings) is given in the next line and used to clarify what action the function performs and the rules for your function. In this case it makes clear that ```add_function``` receive ```x``` and ```y``` as parameters and that both are numbers of type ```int```. The docstrings in this case also states return type, an ```int``` too.

The given statement is very simple. It just adds the numbers ```x``` and ```y``` and bind the result to the ```number``` variable.

The ```return``` statemet returns the variable ```number```.

A more pythonic way to express this function is to write the add statement directly after the ```return``` keyword, as below:

```python
def add_function(x, y):
  '''
  The function takes two numbers, adds them and return the result.
  x -> int
  y -> int
  return -> int
  '''
  return x + y
```

#### Calling a Function
After defining a function you probabily want to test it! In your Python prompt you get:

```shell
>>> add_function(2, 2)
4
```

#### More Functions Examples
The greetings function:
```python
def greetings(name):
  '''
  The function takes your name and greets you.
  name -> string
  return -> string
  '''
  return 'Greetings, ' + name + '! Have a nice day!'
```

```shell
>>> greetings('John Doe')
Greetings, John Doe! Have a nice day!
```

The mean function:
```python
def sequence_mean(sequence):
  '''
  The function takes a sequence of numbers and return these numbers mean.
  sequence -> list
  return -> float
  '''
  return round(sum(sequence) / len(sequence), 2)
```

```shell
>>> my_sequence = [2, 3, 6]

>>> my_sequence
[2, 3, 6]

>>> sequence_mean(my_sequence)
3.67

### Further Reading
For more on Python functions, refer to the official [Python documentation](https://docs.python.org/3/tutorial/controlflow.html).
