---
title: Array.prototype.sort
---
## Array.prototype.sort

Simple method that allow you to sort any array quickly.

This method had the following syntax
```sh
arr.sort()
arr.sort(compareFunction)
```

The default sort order is according to string Unicode code points.

```sh
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']
```

### `compareFunction`
Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

```sh
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

#### More Information:
[MSD Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


