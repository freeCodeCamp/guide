---
title: String.prototype.startsWith
---
## String.prototype.startsWith

`startsWith` is a string function that tells you if a substring matches with the start of a string.

`startsWith` accepts two arguments and returns a boolean value. The first of two arguments is a required substring that you want to match. The second, and optional argument, indicates where to start searching in the string. The second argument defaults to the start of the string.

```javascript
str.startsWith(substring, [startPosition]);
```

### Examples
```javascript
let str = 'Hella small batch thundercats listicle craft beer woke.';

str.startsWith('Hella small') // true
str.startsWith('batch') // false
str.startsWith('batch', 12) // true
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


