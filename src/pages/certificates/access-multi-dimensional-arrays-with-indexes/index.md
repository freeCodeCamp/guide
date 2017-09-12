---
title: Access Multi Dimensional Arrays with Indexes
---
One way to think of a `multi-dimensional` array, is as an array of arrays. When you use brackets to access your array, the first set of bracket refers to the entries in the outer-most array, and each subsequent level of brackets refers to the next level of entries inside.

## Example

    var arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [[10,11,12], 13, 14]
    ];
    arr[0]; // equals [1,2,3]
    arr[1][2]; // equals 6
    arr[3][0][1]; // equals 11