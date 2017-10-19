---
title: Hoisting
---
## Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

This allows a variable to be declared after it has been used, or to be used before it has been declared.

```javascript
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```

JavaScript only hoists declarations, not initializations.
To avoid bugs, always declare all variables at the beginning of every scope.
