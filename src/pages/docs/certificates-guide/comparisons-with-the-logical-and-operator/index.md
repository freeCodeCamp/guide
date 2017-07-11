---
title: "Comparisons with the Logical And Operator"
parent: "certificates-guide"
---

Sometimes you will need to test more than one thing at a time. The `logical and` operator (`&&`) returns `true` if and only if the `operands` to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

    if (num > 5) {
      if (num < 10) {
        return "Yes";
      }
    }
    return "No";

will only return "Yes" if `num` is between `6` and `9` (6 and 9 included). The same logic can be written as:

    if (num > 5 && num < 10) {
      return "Yes";
    }
    return "No";
