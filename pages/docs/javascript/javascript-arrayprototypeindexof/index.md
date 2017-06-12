---
title: "JavaScript Array.prototype.indexOf()"
parent: "javascript"
---

The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present!!

    arr.indexOf(searchElement[, fromIndex = 0])

## Parameters

         | Parameter

-------- | -------------  
Required | Arr  
Required | searchElement  
Optional | fromIndex

**Return:** -1 if the element is not found in the array or an integer >=0, the position of the element in the array

[MDN link](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## Examples

**Use Case:** Check to see if there are any apples in the fruit basket (defined as an array)?

    var basket = ['apple','orange','banana','strawberry'];

**Without** indexOf()

    var found = false;
    for(var i= 0, l = basket.length; i< l; i++){
        if(basket[i] === 'apple'){
            found = true;
                    break;
        }
    }
    console.log(found);

**With** indexOf()

    console.log(basket.indexOf("apple") != -1);
