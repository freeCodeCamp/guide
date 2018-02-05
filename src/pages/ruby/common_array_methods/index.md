---
title: Common Array Methods
---
## Common Array Methods

Ruby Arrays form a core foundation in programming in Ruby, and most languages in fact. It is used so much that it would be beneficial to know and even memorize some of the most commonly used methods for arrays. If you want to read more about Ruby Arrays [see here](https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md/).

For the purpose of this guide, our array will be as follows:

``` ruby
array = [0, 1, 2, 3, 4]
```

#### .length
The .length method tallies the number of elements in your array and returns the count:

``` ruby
array.length
=> 5
```

#### .first
The .first methods accesses the first element of the array, the element at index 0:

``` ruby
array.first
=> 0
```

#### .last
The .last methods accesses the last element of the array:

``` ruby
array.last
=> 4
```

#### array index
You can access a specific element in an array by accessing its index. If the index does not exist in the array, nil will be returned:

``` ruby
array[2]
=> 2

array[5]
=> nil
```

#### .pop
The .pop method will permantently remove the last element of an array:

``` ruby
array.pop
=> [0, 1, 2, 3]
```

#### .push
The .push method will allow you to add an element to the end of an array:

``` ruby
array.push(99)
=> [0, 1, 2, 3, 4, 99]
```

#### .delete
The .delete method removes a specified element from an array permanently:

``` ruby
array.delete(1)
=> [0, 2, 3, 4]
```

#### .delete_at
The .delete_at methods allows you to permanently remove an element of an array at a specified index:

``` ruby
array.delete_at(0)
=> [1, 2, 3, 4]
```

#### .reverse
The .reverse methods reverses the array but does not mutate it (the original array stays as is):

``` ruby
array.reverse
=> [4, 3, 2, 1, 0]
```
#### .select
The .select method iterates over an array and returns a new array that includes any items that return true to the expression provided.

``` ruby
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.select { |number| number > 4 }
=> [5, 6, 7, 8, 9, 10]
array
=> [5, 6, 7, 8, 9, 10]
```

## More Information/ Official Documentation:

There are plenty more array methods, you can read more about them [here](https://ruby-doc.org/core-2.4.2/Array.html/)
