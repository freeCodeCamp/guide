---
title: Ternary Operator
---
The Ternary operator replaces an if/else block in a very small compact way. It's mostly used in one liners for simple tests and replacements, like this:

    var x = false;
    var s = x ? "yes" : "no";
    console.log(s);  //→ "no"

A ternary is not completely equivalent with an if/else block, because it also is an expression. This means it can also be used inline (for example in a return statement):

    function testA (a) {
        return a === 'test' ? 'a is test' : 'a is not test';
    }

It is possible to spread a ternary out over multiple lines:

    var a = Math.random() > 0.5 
        ? 'This is a very long string to fill up a line so that we can demonstrate that ternaries can cover multiple lines'
        : 'Congratulations! The random number is below 0.5!';

It is also possible to nest ternaries, althought this can often become hard to read quickly:
    
    var a = 10;
    console.log( a > 10 ? 'a is bigger than 10' : a < 10 ? 'a is smaller than 10' : 'a is 10'); // 'a is 10'


## Description

    condition ? expr1 : expr2

If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2. For example, to display a different message based on the value of the isMember variable, you could use this statement:

**Read more:** <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' target='_blank' rel='nofollow'>MDN</a>
