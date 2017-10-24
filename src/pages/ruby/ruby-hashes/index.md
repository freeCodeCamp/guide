---
title: Ruby Hashes
---
## Ruby Hashes
A hash is an object that contains a set of unique keys with their values.

### Creating a hash
Curly braces represent a Ruby hash
```ruby
inside_the_fridge = {
  "Apples" =>  5,
  "Oranges" => 3,
  "Pears" => 2,
}
```
In the example above, the fruits are the 'key' of the hash, and how many fruits are inside the fridge is the 'value' of the hash.

### Accessing a hash
To get values from a hash, use square selector brackets [ ] with the key 
```ruby
whats_inside_my_fridge["Apples"] #  => 5
```

### Adding and changing keys to an existing hash
To add a key to a hash use the square selector brackets [ ] along with the assignment operator = as follows
```ruby
my_hash = {}
my_hash["my_key"] = "my_value"
myhash # => { "mykey" => "my_value" }
```
The same method can be used to change the value of a specified key
```ruby
my_hash = {}
my_hash["my_key"] = "my_value"
myhash # => { "mykey" => "my_value" }

myhash["my_key"] = "my_new_value"
myhash # => { "mykey" => "my_new_value" }
```
A hash can never have two of the same key.
NOTE: A hash can have a symbol key and a string key of the same name
```ruby
myhash = {}
myhash["mykey"] = "stringkey"
myhash[:mykey] = "symbolkey"
myhash # { "mykey" => "stringkey", :mykey => "symbolkey" }
```


#### More Information:
<a href='https://ruby-doc.org/core-2.4.2/Hash.html' target='_blank' rel='nofollow'>Ruby hash documentation</a>
