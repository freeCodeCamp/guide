---
title: Array.prototype.pop
---

# Array.prototype.pop

The `pop()` method removes the last element from and changes the length of an array. The return value of the method is the removed element, *not* the new array. 

**Syntax**
```js
    arr.pop()
```
## Description

The `pop` method removes the last element from an array and returns that value to the caller. 

## Examples

```js
var array = [1, 2, 3, 4]
array.pop() // 4
array // [1, 2, 3]
[].pop() // undefined
```
#### More Information:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
