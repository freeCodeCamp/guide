---
title: Create Strings using Template Literals
---
## Create Strings using Template Literals

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Instead of using string concatenation, ES6 offers template literals to create strings. In this challenge, you have to use template literals to create an array of text warnings.

## Hint 1:

Set `resultDisplayArray` to equal an array with 3 elements. Those elements will be strings using the power of template literals! These strings will have the format: `<li class="text-warning">${}</li>`.

## Hint 2:

Inside the template literals, will be references to the elements of `arr`, the parameter of the function.

## Spoiler Alert - Solution Ahead!

## Solution:

```javascript
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`,
  `<li class="text-warning">${arr[1]}</li>`,
  `<li class="text-warning">${arr[2]}</li>`];
  // change code above this line

  return resultDisplayArray;
}
```
