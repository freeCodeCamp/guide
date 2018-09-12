---
title: Match Single Character with Multiple Possibilities
---
## Match Single Character with Multiple Possibilities

### Hint 1:
1. Get all the vowels with [aeiou].

### Hint 2:
2. Use g flag for global search, and i flag for case-insensitive serach.

### Solution:
```javascript
let vowelRegex = /[aeiou]/gi;  
let result = quoteSample.match(vowelRegex);  
```
