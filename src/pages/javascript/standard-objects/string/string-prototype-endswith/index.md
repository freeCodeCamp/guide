---
title: String.prototype.endsWith
---
## String.prototype.endsWith

The string function `endsWith` determines if a substring exists at the end of a string. It is equal to ending a regex matching pattern with a `$`

`endsWith` accepts two arguments and returns a boolean value. The first of two arguments is a required substring that you want to match. The second, and optional argument, indicates where to stop searching in the string. The second argument defaults to the end of the string.

```javascript
str.endsWith(substring, [endPosition]);
```

### Examples
```javascript
let str = 'Hella small batch thundercats listicle craft beer woke.';

str.endsWith('beer woke.') // true
str.endsWith('small') // false
str.endsWith('small', 11) // true
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


