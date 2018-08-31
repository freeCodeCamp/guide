---
title: Match a Literal String with Different Possibilities
---
## Match a Literal String with Different Possibilities

### Solution:
```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
### Explain:
You should be using the alternation or `OR` operator: `|` to find the strings that you interested in. 
The `OR` operator will return true if **any** is true.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
