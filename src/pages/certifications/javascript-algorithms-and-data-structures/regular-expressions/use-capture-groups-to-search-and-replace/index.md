---
title: Use Capture Groups to Search and Replace
---
## Use Capture Groups to Search and Replace

## Solution 1
You can also utilize capture groups by doing the following:
```
let huhText = "This sandwich is good.";
let fixRegex = /(\w+)\s(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, "$1 $2 $3 " + replaceText);
```

## Solution 2
This particular challenge could also utilize the exact match pattern by doing the following:

```
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```
