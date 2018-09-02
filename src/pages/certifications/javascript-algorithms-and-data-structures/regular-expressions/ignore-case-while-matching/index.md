---
title: Ignore Case While Matching
---
## Ignore Case While Matching
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
In this challenge, I will write a regex fccRegex to match "freeCodeCamp", no matter its case. 
Your regex should not match any abbreviations or variations with spaces.
## Hint 1:
The i flag is the key for this challenge, you should put it on the right position.
## Spoiler Alert - Solution Ahead!

## Solution
```javascript
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
```
