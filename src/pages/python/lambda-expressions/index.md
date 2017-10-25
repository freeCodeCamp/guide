---
title: Lambda Expressions
---
## Lambda Expressions

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Lambda expressions is a short and simple way to define small functions which you may not be using frequently in your program. They are also known as **anonymous functions** as they are not bound to a name.

The general syntax for lambda expressions is:

`lambda arg1,arg2,... : expression on arguements`

They take in a list of arguments, compute the expression on those arguements, and returns the result. The result can be optionally assigned to a variable.

Some simple demonstrations of lambda expressions:
```python
>>> myincrement = lambda x : x + 1
>>> myincrement(3)
4
>>> import math
>>> mydist = lambda x , y : math.sqrt ( x**2 + y**2 )
>>> mydist(3,4)
5.0
>>> myftoc = lambda f : ( 5 * (f - 32) ) / 9
>>> myftoc(212)
100.0
```
As you can see, Lambda expressions are a nice way to make your code look neat and clean. But their use do not end here. They are also used in realising functional programming operations. 

`map` and `filter` are functional programming operations on sequences (like lists). Both take a function and a sequence as their arguments. `map` applies the function on all the elements on the sequence and returns the computed sequence. `filter` applies a conditional function on all the elements and returns a sequence comprising of elements that satisfy the condition.  

```python
>>> clist = [ 0 , 37.6 , 65.12 , 100 ]
>>> flist = list( map( lambda c : ((9 * c) / 5) + 32 , clist))  #map returns a map object
>>> print(flist)
[32.0, 99.68, 149.216, 212.0]
>>> mylist = [ 16 , 89 , 52 , 4 , 131 , 73 , 90 ]
>>> print( list( filter( lambda x : x % 2 == 0 , mylist )))     #filter returns a filter object
[16, 52, 4, 90]
```

Lambda expressions come in handy while doing GUI programming. For example, let's say you're creating a group of buttons and you want to use a single paramaterized callback rather than unique callbacks for each button. Lambda lets you accomplish that with ease.

```python
for value in ["one","two","three"]:
    b = tk.Button(label=value, command=lambda arg=value: my_callback(arg))
    b.pack()
```

We can also nest a lambda expression inside a `def` expression or another lambda expression.

```python
>>> def myadd(n):
...     return lambda x : x + n
... 
>>> myadd2 = myadd(2)
>>> myadd2(5)
7
>>> myadd5 = myadd(5)
>>> myadd5(myadd2(4))
11
```

There has been extensive [debate](https://wiki.python.org/moin/AlternateLambdaSyntax) as to whether to keep lambda expressions in Python or not. This is because the syntax looks alien from that of Python and most of the functions can be realised through other means. But finally the developers had to [keep it](https://mail.python.org/pipermail/python-dev/2006-February/060415.html) for the lack of better alternatives.   

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
https://pythonconquerstheuniverse.wordpress.com/2011/08/29/lambda_tutorial/
