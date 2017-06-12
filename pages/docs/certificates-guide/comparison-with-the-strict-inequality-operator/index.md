---
title: "Comparison with the Strict Inequality Operator"
parent: "certificates-guide"
---

The strict inequality operator (`!==`) is the opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and vice versa. Strict inequality will not convert data types.

## Examples

    3 !== 3   // false
    3 !== '3' // true
    4 !== 3   // true
