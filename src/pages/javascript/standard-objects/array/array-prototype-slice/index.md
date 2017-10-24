---
title: Array.prototype.slice
---
## Array.prototype.slice

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/array/array-from/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<!--The MDN has sections on pass by reference, converting array-likes, and browser behaviors.-->

The `.slice()` method creates a copy of a portion of an array. The new array object returned by this method contains the original array's contents from `begin` to `end` (non-inclusive of `end`). The original array is not modified in any way. 

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
**Syntax**

arr.slice()

arr.slice(_begin_)

arr.slice(_begin_, _end_)

##Parameters

**begin** (_optional_)

Index at which to begin extraction. Remember, the first element in array is index 0. 

A negative index indicates an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

If begin is undefined, slice begins from index 0.

**end** (_optional_)

Index before which to end extraction

A negative index can be used, indicating an offset from the end of the sequence.  

If end is omitted or the value of the end parameter is greater than the array's length, slice extracts through the end of the sequence (arr.length).


##Example

```
var array = [1, 2, 3, 4, 5] 

array.slice() // [1, 2, 3, 4, 5]

array.slice(1) // [2, 3, 4, 5]

array.slice(1, 3) // [2, 3] 

array.slice(-2) // [4, 5]

array.slice(2, -1) // [2, 3]

```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

