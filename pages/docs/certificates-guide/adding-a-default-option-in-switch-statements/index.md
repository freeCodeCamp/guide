---
title: "Adding a default option in Switch statements"
parent: "certificates-guide"
---

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.

A `default` statement should be the last case.

    switch (num) {
      case value1:
        statement1
        break;
      case value2:
        statement2;
        break;
    ...
      default:
        defaultStatement;
    }
