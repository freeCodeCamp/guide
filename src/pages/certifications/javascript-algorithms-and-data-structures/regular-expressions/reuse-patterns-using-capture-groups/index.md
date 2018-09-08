---
title: Reuse Patterns Using Capture Groups
---
## Reuse Patterns Using Capture Groups
- The regular expression - `(\w+)\s\1` - will have to be modified to allow for 2 white spaces seperating 3 numbers.
- Also the shorthand character for digits `\d` must be used as oposed to the shorthand `\w` used in the example.
## Solution:

```javascript
let repeatNum = "42 42 42";
let reRegex =  /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
