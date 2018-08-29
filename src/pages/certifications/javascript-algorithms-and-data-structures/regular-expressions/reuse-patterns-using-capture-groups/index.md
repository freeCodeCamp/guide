---
title: Reuse Patterns Using Capture Groups
---
## Reuse Patterns Using Capture Groups

## Hint 1:
The code below:
```javascript
let testString = "test test test ";
let reRegex =/(test)\s\1/;
let result = reRegex.test(repeatNum);
```
will match only:
test test
because *\1* in this example stands for the same text as most recently matched by the 1st capturing group (test)

## Hint 2:
The code below:
```javascript
let testString = "test test test ";
let reRegex =/(test)(\s)\1\2\1/;
let result = reRegex.test(repeatNum);
```
will match whole:
test test test
bacause:
* *\1* repeats (test)
* *\2* repeats (\s)

## Hint 3:
The code below:
```javascript
let testString = "test test test test test test";
let reRegex =/(test)(\s)\1\2\1/g;
let result = reRegex.test(repeatNum);
```
because we used */g*, our Regex don't return after first full match (test test test) and matched all repetitions.

## Spoiler Alert - Solution Ahead!

## Solution:

```javascript
let repeatNum = "42 42 42";
let reRegex =/^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
```
