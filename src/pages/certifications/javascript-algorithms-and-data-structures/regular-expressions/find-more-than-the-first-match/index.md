---
title: Find More Than the First Match
---
## Find More Than the First Match
### Solution:
```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
```
### Explain:
In this challenge, You should use `g` flag and `i` flag then put them together behind the last backslash.  
`/Twinkle/gi` or `/Twinkle/ig` are functionally the same result.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
