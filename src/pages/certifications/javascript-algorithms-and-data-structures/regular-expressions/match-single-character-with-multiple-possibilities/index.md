---
title: Match Single Character with Multiple Possibilities
---
## Match Single Character with Multiple Possibilities

1. Get all the vowels with [aeiou].  
2. Use g flag for global search, and i flag for case-insensitive serach.  

<br />
<br />

3. Solution:   
let vowelRegex = /[aeiou]/gi;  
let result = quoteSample.match(vowelRegex);  
