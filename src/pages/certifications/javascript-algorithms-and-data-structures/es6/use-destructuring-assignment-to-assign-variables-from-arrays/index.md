---
title: Use Destructuring Assignment to Assign Variables from Arrays
---
## Use Destructuring Assignment to Assign Variables from Arrays


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

We have to take some precaution in this case
1. No need of const [b,a] as it will keep the effect of assignment local.
2. const [b,a] = [a,b] will result in the value of a,b as undefined(simple assignment rule left to right).
Hence the solution to this problem is 
[b,a] = [a,b]
That's it...
