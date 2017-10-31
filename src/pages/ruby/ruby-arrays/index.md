---
title: Ruby Arrays
---
## Ruby Arrays

An array represents a list of values. The individual values are often called "elements" of the array. To make an array in Ruby, use square brackets and separate values with commas:

```ruby
my_array = [1, 2, 3, 4, 5]
```

That first example is an array of numbers, but a Ruby array can contain values of different types:

```ruby
mixed_array = [5, "Hello World", true]
```

You can access the elements of an array with square brackets and numerical indexes. Notice that the first element is at index 0, not 1:

```ruby
mixed_array[0] # 5
mixed_array[1] # "Hello World"
mixed_array[2] # true
```

You can check how many elements an array has with the `length` method:

```ruby
mixed_array.length # 3
[].length # 0
```

#### Ruby Lambda
A lambda is also commonly referred to as an anonymous function. To create a lambda in Ruby, you can use the following syntax:
```ruby
lambda = lambda {}
```

#### More Information:
<a href='https://ruby-doc.org/core-2.4.2/Array.html' target='_blank' rel='nofollow'>Ruby array documentation</a>

Accessing Elements: In Ruby, one can access elements from a given array using the #[] method. When an element is out of bounds, Ruby will return "#=> nil". Also, negative indices start from the last element of the array. One can also access an element from the array by perforing the following function: arr.at(0). This retrieves the element at the position/index 0.

A link/reference that I found helpful can be found here: https://ruby-doc.org/core-2.2.0/Array.html 
