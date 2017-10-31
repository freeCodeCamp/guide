---
title: Array.prototype.includes
---
## Array.prototype.includes

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/array/array-prototype-includes/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The <b>'includes'</b> array method tests if an array contains a specific element. Your response will be either `true` or `false`.

    ```javascript
        var candy = ["tootsie roll", "gummy bear", "lollipop", "chocolate"];
        candy.includes("gummy bear"); // true
        candy.includes("gumdrop"); // false
    ```
    
An optional parameter for the <b>'includes'</b> method is using the `fromIndex`. The `fromIndex` will search the array from whichever index value is specified.

<b>For example:</b>

    ```javascript
        var candy = ["tootsie roll", "gummy bear", "lollipop", "chocolate"];
        candy.includes("gummy bear", 1); // true
        candy.includes("gummy bear", 2); // false
    ```
If the `fromIndex` is larger than the length of the array, the result is `false`.

<b>See Below:</b>

    ```javascript
        var candy = ["tootsie roll", "gummy bear", "lollipop", "chocolate"];
        candy.includes("gummy bear", 4); // false
        candy.includes("gummy bear", 1000); // false
    ```
What happens if the `fromIndex` is negative? The computed index is calculated and the entire array is searched if the computed index value is less than 0.

    ```javascript  
        // array length is 3
        // computed index is array length + fromIndex
        
        var candy = ["tootsie roll", "gummy bear", "lollipop", "chocolate"];
        candy.includes("gummy bear", -20); // true
        candy.includes("gummy bear", -1); // false
    ```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes' target='_blank' rel='nofollow'>MDN Article on Array.prototype.includes()</a>

