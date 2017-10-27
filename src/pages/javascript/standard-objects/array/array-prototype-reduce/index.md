---
title: Array.prototype.reduce
---
## Array.prototype.reduce

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Supplementary articles to check out: 
- <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b' target='_blank' rel='nofollow'>MDN</a>.
- <a href='https://www.w3schools.com/jsref/jsref_reduce.asp' target='_blank' rel='nofollow'>W3</a>.
- <a href='https://medium.freecodecamp.org/reduce-f47a7da511a9' target='_blank' rel='nofollow'>FreeCodeCamp</a>.
- <a href='hhttps://vickylai.io/verbose/reduce-recursion-with-pie/' target='_blank' rel='nofollow'>Vickylai</a>.

### Intro
Array has a ton of very useful built-in methods like ```reduce()```. This method reduces an array to a single value based on a function applies to each element in the array and a given accumulator. 

#### Syntax
```javascript
myArr.reduce(callback[, initialValue])
```

#### Paramenters
- ```callback```
  - A function to apply to each element in the array. It takes four arguments: 
    - ```accumulator```: accumulates the callback function's return values
    - ```currentValue```: the current element
    - ```currentIndex```: the index of the current element (optional)
    - ```array```: the array the method was called on (optional)
- ```initialValue```
  - an optional parameter to use as the first argument in the callback. If no initial value given, the first element in the array is used. 
  
#### Examples

##### Sum of values in an array
```javascript
var myArr = [1, 2, 3, 4, 5];
var initialValue = 0;

return myArr.reduce(
function(accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue) // returns 15;
```
or split out
```javascript
myArr = [1, 2, 3, 4, 5];

function getSum(total, n) {
  return total + n;
}

myArr.reduce(getSum); // returns 15
```

##### Product of values in an array
```javascript
var myArr = [1, 2, 3, 4, 5];
var initialValue = 1;

return myArr.reduce(
function(accumulator, currentValue) {
  return accumulator * currentValue;
}, initialValue) // returns 120;
```
or in ES6
```javascript
var myArr = [1, 2, 3, 4, 5];
var initialValue = 1;

return myArr.reduce((acc, curr) => {
  return acc * curr;
}, initialValue) // returns 120;
```

##### Flatten an array of arrays
```javascript
var myArr = [[1, 2], [3, 4], [5]];
var initialValue = [];

return myArr.reduce(
function(acc, curr) {
  return acc.concat(curr);
}, initialValue) // returns [1, 2, 3, 4, 5];
```


















