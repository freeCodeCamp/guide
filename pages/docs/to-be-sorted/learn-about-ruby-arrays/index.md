---
title: "Learn About Ruby Arrays"
parent: "to-be-sorted"
---

### Basics:

*   Arrays are a list of indexed items stored inside `[]` brackets.
*   Ruby uses zero-based indexing. This means the first item in the array is stored in index number `0`, then the second is at index number `1`, and so on incrementing by values of 1 for each additional item stored in the array.
*   Arrays can be created using `[]` or `Array.new` syntax.
*   Ruby has many build in methods to perform operations on arrays such as reversing or finding an element stored in the array.

## Examples:

    arr = [1,2,3]
    # is equivalent to:
    arr = Array.new(3)
    arr[0] = 1
    arr[1] = 2
    arr[2] = 3
    # is also equivalent to:
    arr = Array(1..3)
    # All three of these examples return:
    [1,2,3]

## References:

*   [The official Ruby documentation for arrays](http://ruby-doc.org/core-2.2.0/Array.html).
