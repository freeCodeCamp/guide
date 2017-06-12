---
title: "Nesting For Loops"
parent: "certificates-guide"
---

If you have a multi-dimensional array, you can use the same logic as the prior Challenge to loop through both the array and any sub-arrays. Here is an example:

        var arr = [
          [1,2], [3,4], [5,6]
        ];
        for (var i=0; i < arr.length; i++) {
          for (var j=0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
          }
        }

This outputs each sub-element in `arr` one at a time. Note that for the inner loop, we are checking the `.length` of `arr[i]`, since `arr[i]` is itself an array.
