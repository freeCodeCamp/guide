---
title: Ternary Operator
---
# Ternary Operator

The Ternary operator replaces an if/then block in a very small compact way. 

## Description
```javascript
condition ? expr1 : expr2
```
If `condition` is true, the operator returns the value of `expr1`; otherwise, it returns the value of `expr2`. 

## Example
It's mostly used in one liners for simple tests and replacements, like this:

    var x = false;
    var s = x ? "yes" : "no";
    console.log(s);  //→ "no"


**Read more:** <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>MDN</a>
