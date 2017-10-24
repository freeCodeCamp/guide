---
title: Python Map Function
---
`map()` is a built-in function that takes in two arguments, a function and an iterable sequence. In the form: map(function, sequence). map() applies the function to all the elements in the sequence and returns a new list with all the elements changed by the function.


## Note
1. In Python 3+, map(function, sequence) returns an map object iterator instead of a list, we can convert it into a list using `list()` method.
2. If additional iterable arguments(iterable sequence) are passed, function must take that many arguments and is applied to the items from all iterables in parallel. With multiple iterables, the iterator stops when the shortest iterable is exhausted.

## Arguments

This function takes in two or more arguments, a function and sequence iterable. In the form: map(function, sequence). The first argument is the name of a function and the second a sequence(e.g. a list)


## Code Sample

	```
	a = [4,5,6]
	
	# A function that squares a number
	def squared(num):
	    return num ** 2
	
	>>> map(squared, a)
	<map object at 0x7f60683a0518> # It's an iterable map object
	>>> list(map(squared, a))
	[16, 25, 36]
	```

Let's write a map() function that will add numbers in two lists.

	```
	>>> a = [1,2,3]
	>>> b = [4,5,6]
	>>> adder = map(lambda x,y: x+y, a, b)
	>>> list(adder)
	[5,7,9]
	```


<a href='https://docs.python.org/3/library/functions.html#map' target='_blank' rel='nofollow'>Python Docs - Map</a><br/>
<a href='https://docs.python.org/3/reference/expressions.html#lambda' target='_blank' rel='nofollow'>Python Docs - Map</a>

