---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
---
## Use Destructuring Assignment to Assign Variables from Nested Objects

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
First, let's jump into the 'tomorrow' attribute of `LOCAL_FORECAST`. Then, jump into the 'max' attribute of 'tomorrow' and assign it to `maxOfTomorrow`. 

## Spoiler! 

Here is the code solution:

```javascript
const { tomorrow: { max: maxOfTomorrow } } = LOCAL_FORECAST;
```

