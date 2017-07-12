---
title: the javaScript Ifelse Statement
---
## Introduction

The `if` statement executes a statement if a specified condition is **true**. If the condition is **false**, another statement can be executed using the `else` statement..

> **Note:** The `else` statement is optional.

    if (condition)
       statement1
    else
       statement2

Multiple `if...else` statements can be nested to create an `else if` clause.

    if (condition1)
       statement1
    else if (condition2)
       statement2
    else if (condition3)
       statement3
    ...
    else
       statementN

_**Note:**_ If you want to execute more than one statement in the `if`, `else` or `else if` part, braces are required around the statements.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) | [MSDN link](https://msdn.microsoft.com/en-us/library/85yyde5c.aspx)

## Examples

**Using** `if...else`:

    if (x == 5) {
      z = 7;
      q = 42;
    }
    else
      z = 19;

**Using** `else if`:

    if (x < 10)
      return "Small number";
    else if (x < 50)
      return "Medium number";
    else if (x < 100)
      return "Large number";
    else {
      flag = 1;
      return "Invalid number";
    }