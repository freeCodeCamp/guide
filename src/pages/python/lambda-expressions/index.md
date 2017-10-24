---
title: Lambda Expressions
---
## Lambda Expressions

Lambda Expressions (also Lambda Functions or Lambda Forms) are *anonymous functions*. Anonymous functions are functions that are not bound to a name. You can think of them as *throw away **functions*** that you would use only once.

### The syntax

Lambda Expressions are functions that take an arbitrary number of arguments and return a single expressions. They can contain only one expression, so they are not best suited for functions with control-flow statements.


```python
# Regular python function
def add_two(x):
    return x + 2

add_two(2)             # Returns 4
   
# Lambda Expression
res = lambda x: x + 2 
res(2)                 # Returns 4
   
# Lambda Expression without binding
(lambda x: x + 2)(2)   # Returns 4 
```

### Are they useful? 

It turns out they realy are. Functions are *first class citizens* in Python, that means that you can pass functions as arguments to other functions. Many built-in functions, like `filter`, `map`, `reduce`(Python 2) or `functools.reduce`(Python 3) and `sorted` take functions as arguments.

Let's say you want to filter out odd numbers from a `list`. You could use a `for` loop:

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered = []

for num in my_list:
     if num % 2 != 0:
         filtered.append(num)

print(filtered)      # Python 2: print filtered
# [1, 3, 5, 7, 9]
```

You could write this as a one liner with list-comprehensions

```python
filtered = [x for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] if x % 2 != 0]
```

But you might be tempted to use the built-in `filter` function. Why? The first example is a bit to verbose, the one-liner is hard to understand, where as `filter` offers the best of both words. Plus: the built-in functions are usualy faster, because they are written in C [Python Speed](https://wiki.python.org/moin/PythonSpeed/PerformanceTips).

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

filtered = filter(lambda x: x % 2 != 0, my_list)

list(filtered)       
# [1, 3, 5, 7, 9]
```
NOTE: in Python 3 built in function return generator objects, so you have to call `list`, while in Python 2 they return a `list`, `tuple`or `string`.

What happened? You told `filter` to take each element in `my_list` and apply the lambda expressions. The values that return `False` are filtered out. 

Lambda Expressions come in handy when you are doing data explorations in a REPL like [iPython](https://ipython.org/) or [Jupyter](https://jupyter.org). What is more, lambda functions help you write in a style of programming called *functional programming*. 


#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
