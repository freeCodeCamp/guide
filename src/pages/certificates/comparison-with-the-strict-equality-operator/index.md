---
title: Comparison with the Strict Equality Operator
---
Strict equality (`===`) is the counterpart to the equality operator (`==`). Unlike the equality operator, strict equality tests both the `type` and `value` of the compared elements.

## Examples

    3 === 3   // true
    3 === '3' // false

_In the second example, `3` is a `Number` type and `'3'` is a `String` type._