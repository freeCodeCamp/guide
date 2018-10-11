---
title: Count Backwards With a For Loop
---
## Count Backwards With a For Loop

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Here’s the example:

```javascript
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
```

Here’s a solution:
 After string `// Only change code below this line.` we add `for` loop. You need to copy loop from the top:
 
 ```javascript
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
 ```
 And change `initialization` `var i = 10` to `var i = 9`, also change array name `ourArray` `myArray`:
 
  ```javascript
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
 ```
 
 Here’s a full solution:
```javascript
 // Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
