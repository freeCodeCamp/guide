---
title: Ternary Operator
---

## Construction
var x = _condition_ ? expression1 : expression2;

## Description

The Ternary operator replaces an if/else block in a very small compact way. It's mostly used in one liners for simple tests and replacements, like this:

    var x = false;
    var s = x ? "yes" : "no";
    console.log(s);  //→ "no"
        
Ternary operators replace:
```
var value;
if (condition) {
    value = "Y";
} else {
    value = "N";
}
```
with a shorthand version:
```
var value = condition ? "Y" : "N";
```
Let's break this down: We're declaring a variable of name 'value'. The condition is then evaluated. If the condition is truthy, it sets the value variable to the first expression (in this case "Y"), if the condition is falsy, it sets the value variable to the second expression (in this case "N").

**Read more:** <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>MDN - Ternary Operator</a>
