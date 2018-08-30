---
title: Ignore Case While Matching
---
## Ignore Case While Matching
### Solution:
```javascript
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
```
### Explain:
The ignore case follows this pattern `/ignorecase/i` that it put `i` behind the last backslash.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
