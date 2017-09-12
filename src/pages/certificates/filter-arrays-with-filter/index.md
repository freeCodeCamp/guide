---
title: Filter Arrays with Filter
---
Filter is a useful method that can filter out values that don't match a certain criteria.

    var array = [1,2,3,4,5,6,7,8,9,10];
      // Only change code below this line.
    array = array.filter(function(val) {
      return val <= 5;
    });