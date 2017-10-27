---
title: Array.prototype.concat
---
## Array.prototype.concat

The ```concat()``` method merges two or more arrays and returns a new array. It doesn't mutate (change) the original arrays.

## Example

```js
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let result = arr1.concat(arr2);

console.log(arr1); // prints [1, 2, 3, 4], doesn't change
console.log(arr2); // prints [5, 6, 7, 8], doesn't change
console.log(result); // prints [1, 2, 3, 4, 5, 6, 7, 8]

```

## Different ways of using ```concat()```

### Method 1

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let result = arr1.concat(arr2);

console.log(result); // prints [1, 2, 3, 4, 5, 6, 7, 8]
```

### Method 2

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let result = [].concat(arr1, arr2);

console.log(result); // prints [1, 2, 3, 4, 5, 6, 7, 8]
```

### Method 3

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let result = Array.prototype.concat(arr1, arr2);

console.log(result); // prints [1, 2, 3, 4, 5, 6, 7, 8]
```


#### More Information:

Check out the official MDN page on [```Array.prototype.concat()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) for more information.
