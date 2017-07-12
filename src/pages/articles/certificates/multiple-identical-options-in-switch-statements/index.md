---
title: Multiple Identical Options In Switch Statements
---
If the `break` statement is omitted from a `switch` statement's `case`, the following `case` statement(s) are executed until a `break` is encountered. If you have multiple inputs with the same output, you can represent them in a `switch` statement like this:

    switch(val) {
      case 1:
      case 2:
      case 3:
        result = "1, 2, or 3";
        break;
      case 4:
        result = "4 alone";
    }

Cases for 1, 2, and 3 will all produce the same result.