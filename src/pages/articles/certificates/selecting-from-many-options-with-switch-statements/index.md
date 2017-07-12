---
title: Selecting From Many Options with Switch Statements
---
If you have many options to choose from, use a `switch` statement. A `switch` statement tests a value and can have many `case` statements which defines various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

Here is a `pseudocode` example:

    switch (num) {
      case value1:
        statement1;
        break;
      case value2:
        statement2;
        break;
    ...
      case valueN:
        statementN;
        break;
    }

`case` values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.