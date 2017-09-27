---
title: Converting Strings to Numbers
---
## Converting Strings to Numbers

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/converting-strings-to-numbers/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Simplest way to convert string to number is to add `+` before the string:
```javascript
    var str = "123";
    str = +str // str now number
```
It will convert string into decimal number. For example
```javascript
    var s = "0XFF" // hexadecimal number
    var n = +s // equal to 255
```
Another way is to use built in function `parseInt()` that converting first number in string to the number
```javascript
    var a = parseInt("10") // a will be equal to 10
    var b = parseInt("20 30") // b will be equal to 20
```
If first character cannot be converted to a string result will be `NaN`.

Radix (base) can be passed as seocnd argument:
```javascript
    var a = "10"
    var n = parseInt(a, 2) // n is 2
    var m = parseInt(a, 8) // n is 8
    var p = parseInt(a, 5) // n is 5
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


