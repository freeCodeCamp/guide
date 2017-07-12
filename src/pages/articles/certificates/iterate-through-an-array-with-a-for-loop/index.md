---
title: Iterate Through An Array with A for Loop
---
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a `for` loop. This code will output each element of the array `arr` to the console:

        var arr = [10,9,8,7,6];
        for (var i=0; i < arr.length; i++) {
           console.log(arr[i]);
        }

Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1\. Our `condition` for this loop is `i < arr.length`, which stops when i is at length - 1.