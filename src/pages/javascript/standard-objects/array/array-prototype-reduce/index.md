---
title: Array.prototype.reduce
---
## Array.prototype.reduce

The reduced array method iterate through each item, reducing an array to a single value. The return value of the function is stored in an accumulator and will be the provided for the next iteration callback as a variable.

The first param of reduce is a callback function. This function can receive 3 params (an accumulated variable, value and index). The second parameter of reduce is an initial state of accumulator.

```
var arr = [1, 2, 3, 4];
var sum = arr.reduce((keep, value) => keep + value, 0);

//sum = 10;
```

You can return another types, as arrays and objects. You just need to set initial state to an empty value of the type and use the accumulated variable as this type.

```
var arr = ["one", "two", "three"];
var obj = arr.reduce((keep, value, index) => ({
  ...keep,
  [value]: index + 1
}), {});

//obj = {one: 1, two: 2, three: 3}
```

You can return another array too

```
var arr = ["one", "two", "two", "three"];

//remove duplicated keys
var uniques = arr.reduce((keep, value) => {
  if(keep.indexOf(value) == -1)
    keep.push(value);

  return keep;
}, []);

//uniques = ["one", "two", "three"];

```

### More Information:

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[MSDN Link](https://docs.microsoft.com/en-us/scripting/javascript/reference/reduce-method-array-javascript)
