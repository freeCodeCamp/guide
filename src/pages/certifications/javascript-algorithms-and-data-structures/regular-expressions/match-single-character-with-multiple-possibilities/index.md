---
title: Match Single Character with Multiple Possibilities
---
## Match Single Character with Multiple Possibilities

Steps
1. Get all the vowels with [aeiou].  
2. Use g flag for global search, and i flag for case-insensitive serach.  

Solution   
```javascript
let vowelsRegex = /[aeiou]/gi;  
let result = quoteSample.match(vowelsRegex);  
```
