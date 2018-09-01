---
title: Catch Mixed Usage of Single and Double Quotes
---
## Catch Mixed Usage of Single and Double Quotes

- Remember whether you choose to use single or double quotes, simply adding  a `\` befor the character will allow the character to fit in the string without closing either single or double quotes. 
- the following two solutions can be given:

## Solution:
```javascript
//Solution1:
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

//Solution2:
let innerHtml = '<p>Click here to <a href=\'#Home\'>return home</a></p>';
console.log(innerHtml);
```
