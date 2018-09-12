---
title: Confirm the Ending
---
## Confirm the Ending

- slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction

## Solution
```javascript
let tarLen = target.length; 
let strLen = str.length; 

let end = str.slice(strLen - tarLen, strLen); 

if(end == target){ 
  return true; 
} 
else{ 
  return false; 
}
```
