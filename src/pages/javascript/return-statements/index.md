---
title: Return Statement
---
## Introduction

When a **return** statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, `undefined` is returned instead.

    return <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return' target='_blank' rel='nofollow'>[[expression]];

[MDN link</a> | <a href='https://msdn.microsoft.com/en-us/library/22a685h9.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Examples

The following function returns the square of its argument, **x**, where **x** is a number.

    function square(x) {
       return x * x;
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/C7VT/0' target='_blank' rel='nofollow'>Run Code</a>

The following function returns the product of its arguments, **arg1** and **arg2**.

    function myfunction(arg1, arg2){
       var r;
       r = arg1 * arg2;
       return(r);
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/C7VU/0' target='_blank' rel='nofollow'>Run Code</a>
