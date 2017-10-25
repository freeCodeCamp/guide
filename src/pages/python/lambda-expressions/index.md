---
title: Lambda Expressions
---

Lambda is anonymous function, that is function without name.
Consider example of sum function:

```python
def sum(a,b):
	return a+b
	
print(sum(3,4))
```

Lambda expression for adding two numbers doesn't use ```def``` keyword:

```python
print((lambda x,y: x+y)(3,4))
```

To create an anonymous function object, use 
```lambda arguments: expression```, 
where ```lambda``` is a keyword,
```arguments``` is your list of function parameters, and
```expression``` is evaluation code of your function.

You can use lambdas in such cases:
* to return function as result of function

```python
def transform(n):
     return lambda x: x + n
```
* to call python ```key``` functions like ```sorted```:
```python
sorted([1, 2, 3, 4, 5, 6, 7, 8, 9], key=lambda x: abs(5-x))
```

* to define function as variable inside other function and use it more than once:
```python
def hello(name, surname, formal):
	str_append = lambda x,y: x+y
	result = "Hello, "
	result = str_append(result, name)
	if formal:
		result = str_append(result, surname)
	result = str_append(result, '!')
	return result

print(hello('Guido', 'van Rossum', True))
print(hello('Guido', 'van Rossum', False))
```
#### Official documentation:
https://docs.python.org/3/reference/expressions.html#lambda
