---
title: Count Backwards With a For Loop
---
## Count Backwards With a For Loop

#### HINT: 1
* create a new for loop for myArray

#### HINT: 2
* start from the first odd number just before 9

# SPOILER WARNING: SOLUTION AHEAD

```javascript
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i-=2){
  myArray.push(i)
}
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
