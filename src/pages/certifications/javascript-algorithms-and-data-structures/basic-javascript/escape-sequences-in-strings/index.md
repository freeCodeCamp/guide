---
title: Escape Sequences in Strings
---
## Escape Sequences in Strings


### Problem explanation:
_Use escape sequences or words to assign the following three lines of text into the single variable `myStr`._
```javascript
FirstLine
   \SecondLine
ThirdLine
```

#### Hint 1
The text is *FirstLine* followed by a **new line**, a **tab spacing**, then *\SecondLine*,another **new line** and finally *ThirdLine*

#### Hint 2
In order to use the `\` character in a string, another `\` must be used as an escape character

## Spoiler alert!

**Solution ahead!**

```javascript

var myStr ="FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
```
