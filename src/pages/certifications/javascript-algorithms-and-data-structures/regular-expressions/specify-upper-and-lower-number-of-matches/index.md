---
title: Specify Upper and Lower Number of Matches
---
## Specify Upper and Lower Number of Matches

Remember `/a{2,4}/` will return `true` as long as there are between two to four a's together. It will return `true` for any string that as more than four a's together as well.

All these strings will return `true`:
```
let threeAs = "aaa";
let fourAs = "aaaa";
let sevenAs = "aaaaaaa";

let myRegex = /a{2,4}/;
myRegex.test(threeAs) ; // true
myRegex.test(fourAs) ; // true
myRegex.test(sevenAs) ; // true
```
