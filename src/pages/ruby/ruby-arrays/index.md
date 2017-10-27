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

Alternatively, You can use `count` method to get count of elements in an array:

```ruby
some_array = [1, 2, 3, 4, 5, 5, 1, 1, 7]
some_array = [1, 2, 3, 4, 5, 5, 1, 1, 7].count # 9
```

The `count` method accepts an object or block (similar to Lambda) function as an argument. When an object is passed as argument to `count` method, the method returns count of elements matching to given object.

```ruby
some_array.count(1) # 3
```

When a block is passed to the `count` method, the method returns the number of elements for which the block returns a true value.

```ruby
some_array.count { |elem| elem % 2 == 0 } # 2
```

#### A little about blocks:

Blocks are declared using braces `{ ... }` if they are of single line or they are defined with `do ... end` with code spans to multiple lines. Blocks returns value of last evaluated line.

Blocks may or may not accept argument. In above example block accepts one argument `elem`.

#### Ruby Lambda
A lambda is also commonly referred to as an anonymous function. To create a lambda in Ruby, you can use the following syntax:
```ruby
lambda = lambda {}
```

#### More Information:
<a href='https://ruby-doc.org/core-2.4.2/Array.html' target='_blank' rel='nofollow'>Ruby array documentation</a>
