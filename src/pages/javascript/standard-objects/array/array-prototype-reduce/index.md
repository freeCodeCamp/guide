---
title: Array.prototype.reduce
---
## Array.prototype.reduce

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/array/array-prototype-reduce/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
## Information
`Array.prototype.reduce()` is a JavaScript method that acts to consolidate an array's elements into a single returned value by executing a callback function once for each element in an array. This method can be used to perform mathematical operations on the elements of an array, count instances of elements contained in an array, and flatten sub-arrays into a single array, to name a few useful applications.

**Syntax**
```js
arr.reduce(callback(accumulator, currentValue, currentIndex, arr), initialValue)
```
**Parameters**
<br />
As you can see in the syntax outlined above, `arr.reduce()` takes in two parameters: 1) a callback function (required), and 2) an initialValue (optional).

The callback function determines how an array's elements are to be consolidated (or accumulated). And the initialValue determines where this consolidation will begin.

**Callback Function's Arguments**
<br />
The callback function takes in up to four arguments (total, currentValue, currentIndex, and arr), though only the first two (total and currentValue) are required.

**Return Value**
<br />
`arr.reduce()` returns a single value from an array.

## Examples

```js
let numbers = [1,2,3,4,5,6];

let sum = numbers.reduce(function(acc, curr){
  return acc + curr;
}, 0); 

sum;// returns 21
```

```js
let animals = ['dog', 'cat', 'bird', 'bird', 'dog', 'fish', 'dog'];

let countedAnimals = animals.reduce(function(animals, type) {
  if(type in animals){
    animals[type]++;
  } else {
    animals[type] = 1;
  }
  return animals;
}, {});

countedAnimals; // returns { dog: 3, cat: 1, bird: 2, fish: 1 }
```

```js
let manyArrs = [['a', 'b'], ['c', 'd'], ['e', 'f']];

let lettersArr = manyArrs.reduce(function(acc, curr) {
  return acc.concat(curr);
}, []);

lettersArr; // returns [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://medium.freecodecamp.org/reduce-f47a7da511a9">FCC on Medium</a><br />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a">MDN</a><br />
<a href="https://www.w3schools.com/jsref/jsref_reduce.asp">w3 Schools</a>


