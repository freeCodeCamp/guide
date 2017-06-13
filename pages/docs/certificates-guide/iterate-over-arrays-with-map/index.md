---
title: "Iterate over Arrays with map"
parent: "certificates-guide"
---

Using _map_ is the best way to iterate through an array or object. Map uses a function to pretty much do whatever you want it to do. It will pass each value to the callback function.

    //Use map to add three to each value in the array
    var array = [1,2,3,4,5];

    array = array.map(function(val){
      return val + 3;
    });
