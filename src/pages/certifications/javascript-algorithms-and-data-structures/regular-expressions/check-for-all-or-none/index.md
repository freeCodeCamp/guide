---
title: Check for All or None
---
## Check for All or None

In this challenge we are instructed to check if 0 or 1 of a letter exists within a string.
Our use case for this exercise is checking the spelling of one word in two similiar languages.
This is handy since the word color or colour can be spelt multiple ways.
We do this by having the identical spelling of the word with the "different" character being the one we are looking for.

## Hint:
```javascript
let regex = /flavou?r/;

```
The above code would check the word flavor for a "u" and return true if it exists or doesnt exist as in "0 or 1" u's.


## Spoiler-Alert Solution Ahead:

## Solution
```javascript
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```

## References:
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>

