---
title: Lambda Expressions
---
## Lambda Expressions


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Python supports the creation of **anonymous functions** (i.e. functions that are not bound to a name) at runtime, using a construct called **"lambda"**. This is not exactly the same as lambda in functional programming languages, but it is a very powerful concept that's well integrated into Python and is often used in conjunction with typical functional concepts like filter(), map() and reduce().

This piece of code shows the difference between a normal function definition ("f") and a lambda function ("g"):
```
>>> def f (x): return x**2
... 
>>> print f(8)
64
>>> 
>>> g = lambda x: x**2
>>> 
>>> print g(8)
64
```
### Uses
* #### filter()

```
>>> foo = [2, 18, 9, 22, 17, 24, 8, 12, 27]
>>> 
>>> print filter(lambda x: x % 3 == 0, foo)
[18, 9, 24, 12, 27]
```

In this example, filter() calls our lambda function for each element of the list, and returns a new list that contains only those elements for which the function returned "True". We get a list of all elements that are multiples of 3. The expression x % 3 == 0 computes the remainder of x divided by 3 and compares the result with 0 (which is true if x is evenly divisible by 3).

If we need it only once and it's quite simple (i.e. it contains just one expression, like in the above examples), it's more convenient to use a lambda construct to generate a (temporary) anonymous function and pass it to filter() immediately. This creates very compact, yet readable code.

* #### map()

```
>>> print map(lambda x: x * 2 + 10, foo)
[14, 46, 28, 54, 44, 58, 26, 34, 64]
```

In this example, map() is used to convert our list. The given function is called for every element in the original list, and a new list is created which contains the return values from our lambda function. In this case, it computes 2 * x + 10 for every element.


* #### reduce()
```
>>> print reduce(lambda x, y: x + y, foo)
139
```
Finally, reduce() is somewhat special. The "worker function" for this one must accept two arguments (we've called them x and y here), not just one. The function is called with the first two elements from the list, then with the result of that call and the third element, and so on, until all of the list elements have been handled. This means that our function is called n-1 times if the list contains n elements. The return value of the last call is the result of the reduce() construct. In the above example, it simply adds the arguments, so we get the sum of all elements. (Note: since Python 2.3 there's a built-in function sum()that does the same thing more efficiently.)


#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
http://www.secnetix.de/olli/Python/lambda_functions.hawk
