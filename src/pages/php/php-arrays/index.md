---
title: PHP Arrays
---
## PHP Arrays

In PHP an array represents a group of values.

For example, an array can be used to contain a simple list.  This is called an *indexed* array.  An indexed array can contain any combination of text, numbers, or other data types.


```php
$count = [1, 2, 3, 4, 5];
$colors = ["blue","red","green","yellow"];
$mixed = ["Hello World", 1000, false];
```

You can access the elements of an indexed array by specifying the index (or position in the list) of the item in square brackets.  Notice that the first position in the list is given an index of 0 rather than 1.

```php
echo $count[0];   // 1
echo $colors[1];  // red
echo $mixed[2];   // false
```


Instead of a numerical index, an *associative array* uses a key to identify each position in the list.   

```php
$family = [
  "Sister"  => "Mary",
  "Brother" => "Mike",
  "Father"  => "John",
  "Mother"  => "Kim"
];
```

Elements of an associative array can also be accessed by specifying the element's key in square brackets.

 ```php
 echo $family["Brother"];  // Mike
 echo $family["Mother"];   // Kim
 echo $family["Sister"];   // Mary
 ```
