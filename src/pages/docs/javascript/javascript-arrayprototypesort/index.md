---
title: "JavaScript Array.prototype.sort()"
parent: "javascript"
---

The `sort()` method sorts the elements of an array _in place_ and returns the sorted array.

### Syntax

    arr.sort([compareFunction])

## Parameters

| Parameter | Description | Necessity |  
|------------|-----------------------------------------------|---------------|  
| compareFunction | Optional. The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, Unicode character order. | Optional |

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/4b4fbfhk%28v=vs.94%29.aspx)

## Returns

The sorted array.

## Remarks

The `sort` method sorts the `Array` object in place; no new `Array` object is created during execution.

If you supply a function in the `compareFunction` argument, it must return one of the following values:

*   A negative value if the first argument passed is less than the second argument.

*   Zero if the two arguments are equivalent.

*   A positive value if the first argument is greater than the second argument.

## Examples

    var fruit = ['cherries', 'apples', 'bananas'];
    fruit.sort(); // ['apples', 'bananas', 'cherries']

    var scores = [1, 10, 2, 21]; 
    scores.sort(); // [1, 10, 2, 21]
    // Watch out that 10 comes before 2,
    // because '10' comes before '2' in Unicode code point order.

    var things = ['word', 'Word', '1 Word', '2 Words'];
    things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
    // In Unicode, numbers come before upper case letters,
    // which come before lower case letters.

    var a = new Array(4, 11, 2, 10, 3, 1);

    var b = a.sort();
    document.write(b);
    document.write("<br/>");

    // This is ASCII character order.
    // Output: 1,10,11,2,3,4)

    // Sort the array elements with a function that compares array elements.
    b = a.sort(CompareForSort);
    document.write(b);
    document.write("<br/>");
    // Output: 1,2,3,4,10,11.

    // Sorts array elements in ascending order numerically.
    function CompareForSort(first, second)
    {
        if (first == second)
            return 0;
        if (first < second)
            return -1;
        else
            return 1; 
    }
