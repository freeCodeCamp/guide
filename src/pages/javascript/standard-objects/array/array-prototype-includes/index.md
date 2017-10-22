---
title: Array.prototype.includes
---
## Array.prototype.includes
The prototype function `.includes(element)` checks whether the element is included in the array.

For example
```js
[1,2,3].includes(2) // true
[1,2,3].includes(4) // false
```

### Advanced usage
you can also specify from which index to start the search `.includes(elements, fromIndex)`

For example
```js
['a','b','c','d'].includes('b',2) // false
['a','b','c','d'].includes('b',1) // true
```

### Keep in mind
This is a relatively new feature, so if you want to support older browser you will need a [polyfill](https://en.wikipedia.org/wiki/Polyfill)
