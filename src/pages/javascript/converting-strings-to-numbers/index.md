---
title: Converting Strings to Numbers
---
## Converting Strings to Numbers

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/converting-strings-to-numbers/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
There are a number of ways to convert a string to a number. This is because JavaScript is a loosely typed language, meaning you don't declare the type of variables. The result is JavaScript tries to make the variable into whichever type it is most suited to. That means you can convert a string to a number by 'tricking' the JavaScript engine.
Say we have our string `var x = "100";`. We can make this string into a number by:
*Using unary plus `var x = +"100";`
*Multiplying by 1 `var x = "100" * 1; // JavaScript knows multiplication is a maths operation and so must involved numbers`
*Dividing by 1 `var x = "100" / 1; // As for multiplication`
*Adding 0 `var x = "100" + 0; // This is like the previous two, it treats the string as a number if it can`

There are also built-in functions that can be used:
*[parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) and [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) attempt to convert the string to a number if possible. `var x = parseInt("100"); // x = 100`
*[Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) will convert to a number the value can be represented by. This includes dates to milliseconds since midnight January 1, 1970 UTC, boolean values to 1 or 0, and values that can't be converted to a recognisable number it will become NaN. That stands for Not a Number and is also technically a number!


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

