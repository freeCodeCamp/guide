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


#### Modifying Arrays

Arrays in Ruby are mutable. The array itself can be modified, and the values at each index may also be modified.

You can push any type of variable or object to the end of an array with the `<<` operator:

```ruby
my_array = [1, 2, 3, 4, 5]
my_array << 6
my_array # [1, 2, 3, 4, 5, 6]
```

Pushing an object to the front of an array can be done with the `unshift` method:

```ruby
my_array = [1, 2, 3, 4, 5]
my_array.unshift('foo')
my_array # ['foo', 1, 2, 3, 4, 5]
```

Pushing an object to any other spot can be done with the `insert` method, which takes the index and the object as parameters.

```ruby
my_array = [1, 2, 3, 4, 5]
my_array.insert(2, :foo)
my_array # [1, 2, :foo, 3, 4, 5]
```

#### More Information:
<a href='https://ruby-doc.org/core-2.4.2/Array.html' target='_blank' rel='nofollow'>Ruby array documentation</a>
