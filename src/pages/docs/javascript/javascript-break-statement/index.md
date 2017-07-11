---
title: "JavaScript Break Statement"
parent: "javascript"
---

## Introduction

The **break** statement terminates the current loop, `switch`, or `label` statement and transfers program control to the statement following the terminated statement.

    break;

If the **break** statement is used in a labeled statement, the syntax is as follows:

    break labelName;

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) | [MSDN link](https://msdn.microsoft.com/en-us/library/3fhdxafb.aspx)

## Examples

The following function has a **break** statement that terminates the `while` loop when **i** is 3, and then returns the value **3 * x**.

    function testBreak(x) {
      var i = 0;

      while (i < 6) {
        if (i == 3) {
          break;
        }
        i += 1;
      }

      return i * x;
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/C7VM/0)

In the following example, the counter is set up to count from 1 to 99; however, the **break** statement terminates the loop after 14 counts.

    for (var i = 1; i < 100; i++) {
      if (i == 15) {
        break;
      }
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/C7VO/0)
