---
title: Array.prototype.reduce()
---
## Array.prototype.reduce

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/array/array-prototype-reduce/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds
---
title: Array.Prototype.Reduce()
---
The Javascript array method `.reduce()` is useful when you need to reduce to values of an array to a single value. While is can be accomplished with a `for..loop`, the `.reduce()` allows for more concise syntax.

## Description
***Syntax***
arr.reduce(callback[, initialValue])

The callback function taking four arguments: 'function (accumulator, currentValue, currentIndex, array)'

*	accumulator
	* total accumulated value after each iteration
* currentValue
	* value of the current element of each iteration
* currentIndex
	* index of the current element of each iteration
* array
	* the array `.reduce()` was called on

The `initialValue` is optional. If none is passed, the first element is used.

## Simple Example
```javascript

const tacosPerWeek = [3, 5, 0, 4, 2];

// Sum of Tacos with .reduce()
tacosPerWeek.reduce((sum, tacos) => sum + tacos);

// Sum of Tacos with a for..loop
var totalTacos = 0;
for(var i = 0; i < tacosPerWeek.length; i++){
	totalTacos += tacosPerWeek[i];
}

```



For a more in depth explanation see <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce' target='_blank' rel='nofollow'>MDN</a>
-->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


