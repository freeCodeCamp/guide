---
title: Array.prototype.concat
---
## Array.prototype.concat

The `concat()` method is used to fusion two or more arrays.

### Syntax

```js
const newArray = array.concat(value1, value2, value3...);
```

### Examples

```js
const odd = [1, 3, 5, 7, 9];
const even = [0, 2, 4, 6, 8];

const oddAndEven = odd.concat(even);

// [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
```

#### Concatenating value to an array

```js
const odd = [1, 3, 5, 7, 9];
const even = [0, 2, 4, 6, 8];

const oddAndEvenAndTen = odd.concat(even, 10);

// [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10]
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)


