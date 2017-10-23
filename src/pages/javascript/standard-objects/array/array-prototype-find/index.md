---
title: Array.prototype.find
---
## Array.prototype.find

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
`Array.prototype.find` helps us find an item in an array. It takes in a callback as a parameter. The function will pass each item into the callback one by one. `find` will return the first item that causes the callback to return a truthy value.

```
const arr = [10, 20, 30, 40, 50];
arr.find(item => item > 25); //30
```

`find` also passes the index and the entire array in as arguments, so we can use them in our callback.

```
const arr = [10, 20, 30, 40, 50];
arr.find((item, index, array) => index > 2); //40
```

If no item satisfies the condition provided in the callback, the function will return `undefined`.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
