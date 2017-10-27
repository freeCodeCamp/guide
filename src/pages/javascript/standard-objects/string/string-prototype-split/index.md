---
title: String.prototype.split
---
## String.prototype.split

`String.prototype.split()` is a method of strings that "splits" strings into arrays. `.split()` takes two arguments, the seperator and the optional argument limit.

The seperator is used to see where the string should be split. The seperator is not included in the final array. Here is an example:

```js

var str = "Hello, friends! Nice, job!";

//Seperates the string by its commas. The commas are not included in any of the seperated strings.
return str.split(","); // ["Hello", " friends! Nice", " job!"]
```

One of the most common applications for split is splitting a string into an array of its characters, this is how you do it:

```js
var str = "FooBar"

//Splits by an empty string, which splits it after every character
return str.split(""); // ["F", "o", "o", "B", "a", "r"]
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

