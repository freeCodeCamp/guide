---
title: Use Capture Groups to Search and Replace
---
## Use Capture Groups to Search and Replace

## Solution:

```javascript
let huhText = "This sandwich is good.";
let fixRegex = /good/; 
let replaceText = "okey-dokey"; 
let result = huhText.replace(fixRegex, replaceText);
```
