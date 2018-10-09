---
title: Returning Boolean Values from Functions
---
## Returning Boolean Values from Functions

### Problem explanation

_Fix the function `isLess` to remove the `if...else` statements._
```js
// Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
```

#### Hint 1
As with the [previous exercise](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch) you are about to change how the function returns the correct value, meaning you don't have to reuse or modify that code but to substitute it.
> _try to solve the problem now_

#### Hint 2
In order to return `true` or `false` you don't need two statements nor use `if` ones. The correct [comparison operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) is all you need.
> _try to solve the problem now_

## Spoiler alert!

**Solution ahead!**

## Code Solution:
```javascript
function isLess(a, b) {
  // Fix this code
  return a <= b;
}
// Change these values to test
isLess(10, 15);
```

·  Run code at [repl.it](https://repl.it/@AdrianSkar/Basic-Js-Returning-boolean-from-function).

### Code explanation
The function just returns `true` or `false` after comparing `a` and `b` using the `<=` comparison operator rules. 

### Resources
- ["Less than or equal operator (<=)" - *MDN Javascript Reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator_(%3C))
