---
title: javaScript Arrayprototypesplice
---
This method changes array's content by removing existing elements and/or adding new elements.

## Syntax

    array.splice(start, deleteCount[, item1[, item2[, ...]]])

## Parameters

| Parameter | Description | Necessity |  
|------------|-----------------------------------------------|---------------|  
| start | Index at which to start changing the array. | Required |  
| deleteCount | An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. | Required |  
| itemN | The element to add to the array. If you don't specify any elements, splice() will only remove elements from the array. | Optional |

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/wctc5k7s%28v=vs.94%29.aspx)

## Returns

An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

## Examples

    var arr = new Array("4", "11", "2", "10", "3", "1");
    arr.splice(2, 2, "21", "31");
    document.write(arr);

    // Output: 4,11,21,31,3,1

    var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

    // removes 0 elements from index 2, and inserts 'drum'
    var removed = myFish.splice(2, 0, 'drum');
    // myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
    // removed is [], no elements removed

    // removes 1 element from index 3
    removed = myFish.splice(3, 1);
    // myFish is ['angel', 'clown', 'drum', 'surgeon']
    // removed is ['mandarin']