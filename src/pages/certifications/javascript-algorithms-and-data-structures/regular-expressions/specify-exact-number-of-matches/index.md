---
title: Specify Exact Number of Matches
---
## Specify Exact Number of Matches

In this challenge we are instructed to specify an exact number of consecutive matches of a letter or "expression" inside a string.
We do this by using curly brackets inside the Regex after the expression or letter we want to match with only 1 number inside the brackets.

## Hint:
```javascript
let regex = /zx{2}y/;
```
This would return strings that contain 2 "x's" after a "z" and before a "y"


## Spoiler-Alert Solution Ahead!

## Solution

```javascript
let timStr = "Timmmmber";
let timRegex = /im{4}b/; // Change this line 
let result = timRegex.test(timStr);

```

## Resources:
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
