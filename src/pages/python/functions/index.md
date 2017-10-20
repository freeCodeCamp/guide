---
title: Functions
---
## Functions
<a href='https://docs.python.org/2/tutorial/controlflow.html#defining-functions'> Python Docs - Functions</a>

<b>Functions</b> as we know help increase the readability and reusability of the code.

In python, a function can be defined as:
```python
def function_name([arguments]): #def is a keyword
    line 1
    line 2
    ...
    line 3
    return return_val #this is optional
```
Example:
```python
def sample_function():
    print("Hello...this is a sample function!")
```

A function also excepts arguments:
```python
def func_with_args(arg1, arg2, arg3):
   print "This function has 3 arguments"
   print arg1
   print arg2
   print arg3
```
Above function can be called simply by:
```python
func_with_args(1, 2, 3)
```
which produces
```python
This function has 3 arguments
1
2
3
```
A function can also return some value to the calling code:
```python
def func_which_returns(value, mul):
    print "this function returns "+str(mul)+" times "+str(value)
    return value*mul

val = func_which_returns(3, 5)
print "returned value is :"+str(val)
```
The output for above code is:
```python
this function returns 5 times 3
returned value is :15
```

The functions can also be defined to take in default values if not passed while calling the function.
```python
def func_with_defaults(val1=2, val2=4):
    print "Value of val1: "+str(val1)
    print "Value of val2: "+str(val2)
    print "Result: "+str(val1*val2)

func_with_defaults(val1=3, val2=6) #both arguments are passed
print "*********************"
func_with_defaults(val1=3) #only val1 is passed, val2 would be default
print "*********************"
func_with_defaults(val2=6) #only val2 is passed, val1 would be default
print "*********************"
func_with_defaults() #None passed, both would be defaut
```
The output for above code is:
```python
Value of val1: 3
Value of val2: 6
Result: 18
*********************
Value of val1: 3
Value of val2: 4
Result: 12
*********************
Value of val1: 2
Value of val2: 6
Result: 12
*********************
Value of val1: 2
Value of val2: 4
Result: 8
```
Functions can also have variable number of parameters. The passed parameters in this case can either be a tuple of arguments or a dictionary of key value pairs. 
`*args` can be used to pass variable number of parameters which are sent as a tuple:
```python
def myfunc(*args):
   print "the passed params are ",args
# myfunc(abc=123, efh=456)
myfunc(1,)
myfunc(1,2,3)
myfunc(1,2,3,4,"abcd")
```
Above code outputs
```python
the passed params are  (1,)
the passed params are  (1, 2, 3)
the passed params are  (1, 2, 3, 4, 'abcd')
```

`**kwargs` is used to pass arguments as key-value pairs:
```python
def myfunc(**kwargs):
    # kwargs is a dictionary.
    for k,v in kwargs.iteritems():
         print "%s = %s" % (k, v)

myfunc(val1=123, val2=456)
```
Above code gives:
```
val2 = 456
val1 = 123
```
