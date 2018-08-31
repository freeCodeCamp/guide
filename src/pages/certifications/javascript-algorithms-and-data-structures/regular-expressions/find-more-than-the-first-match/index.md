---
title: Find More Than the First Match
---
## Find More Than the First Match
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
In this challenge, you should be using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.
## Hint 1:
Checkout the note in this challenge that will be helping you a lot.
## Hint 2:
You should use i flag and g flag on the right position.
## Solution
```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
```
## Addition
No matter what you use `/Twinkle/gi` or `/Twinkle/ig` that will return the same result.



