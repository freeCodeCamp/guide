---
title: Specify Only the Lower Number of Matches
---
## Specify Only the Lower Number of Matches

## Solution 

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // The Answer!
let result = haRegex.test(haStr);
