---
title: javaScript Arrayprototypeslice
---
> The `slice()` method returns a shallow copy of a portion of an array into a new array object.

    arr.slice([begin[, end]])

**Return:** The slice method returns an _Array object_ containing the specified portion of arrayObj.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) | [MSDN link](https://msdn.microsoft.com/library/tkcsy6fe%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)

## Examples

    var origArray = [3, 5, 7, 9];
    var newArray = origArray. slice(0, -1);
    document.write(origArray);
    document.write("<br/>");
    newArray = origArray. slice(-2);
    document.write(newArray);

    // Output:
    // 3,5,7,9
    // 7,9

    // Our good friend the citrus from fruits example
    var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    var citrus = fruits.slice(1, 3);

    // citrus contains ['Orange','Lemon']