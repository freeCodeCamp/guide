---
title: Common Array Methods
---
## Common Array Methods

Ruby Arrays form a core foundation in programming in Ruby, and most languages in fact. It is used so much that it would be beneficial to know and even memorize some of the most commonly used methods for arrays. If you want to read more about Ruby Arrays <a href='https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md' target='_blank' rel='nofollow'>See Here</a>.

For the purpose of this guide, our array will be as follows:

```ruby
array = [0, 1, 2, 3, 4]
```

#### .length
The .length method tallies the number of elements in your array and returns the count:

```ruby
array.length
=> 5
```

#### .first
The .first methods accesses the first element of the array, the element at index 0:

```ruby
array.first
=> 0
```

#### .last
The .last methods accesses the last element of the array:

```ruby
array.last
=> 4
```

#### .take
The .take method returns the first n elements of the array:

```ruby
array.take(3)
=> [0, 1, 2]
```

#### .drop
The .drop method returns the elements after n elements of the array:

```ruby
array.drop(3)
=> [3, 4]
```

#### array index
You can access a specific element in an array by accessing its index. If the index does not exist in the array, nil will be returned:
ruby
```
array[2]
=> 2

array[5]
=> nil
```

#### .pop
The .pop method will permantently remove the last element of an array:

```ruby
array.pop
=> [0, 1, 2, 3]
```

#### .shift
The .shift method will permantently remove the first element of an array and return this element:

```ruby
array.shift
=> 0  
array
=> [1, 2, 3, 4]
```

#### .push
The .push method will allow you to add an element to the end of an array:

```ruby
array.push(99)
=> [0, 1, 2, 3, 4, 99]
```

#### .unshift
The .unshift method will prepend an element to the beginning of an array:

```ruby
array.unshift(-1)
=> [-1, 0, 1, 2, 3, 4]
```

#### .delete
The .delete method removes a specified element from an array permanently:

```ruby
array.delete(1)
=> [0, 2, 3, 4]
```

#### .delete_at
The .delete_at methods allows you to permanently remove an element of an array at a specified index:

```ruby
array.delete_at(0)
=> [1, 2, 3, 4]
```

#### .reverse
The .reverse methods reverses the array but does not mutate it (the original array stays as is):

```ruby
array.reverse
=> [4, 3, 2, 1, 0]
```

#### .join
The .join method returns a string of all the elements of the array separated by a separator parameter. If the separator parameter is nil, the method uses an empty string as a separator between strings.

```ruby
array.join
=> "1234"
array.join("*")
=> "1*2*3*4"
```

#### .each
The .each method iterates over each element of the array, allowing you to perform actions on them.

```ruby
array.each do |element|
  puts element
end
=> 
0
1
2
3
4
```

## More Information/ Official Documentation:

There are plenty more array methods, you can read more about them <a href='https://ruby-doc.org/core-2.4.2/Array.html' target='_blank' rel='nofollow'>here</a>
