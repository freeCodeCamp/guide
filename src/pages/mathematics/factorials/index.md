---
title: Factorials
---
## Factorials

Factorials are the product of a positive integer and all the positive integers below it. They're denoted by an exclamation point, like this: `n!`. Factorials can be represented iteratively as:

`n! = n * n-1 * n-2 * ... * 2 * 1`

and recursively as:

`n! = n * (n-1)!`

###Examples
`6!` is `6 * 5 * 4 * 3 * 2 * 1`, which totals `720`.

`4!` is `4 * 3 * 2 * 1`, or `24`.

###Dividing Factorials
`4!/3!` is the same as writing `(4 * 3!)/3!`. You can simplify this fraction by canceling out the `3!`, leaving you with `4`.
By the same logic, `5!/3!` is the same as `(5 * 4 * 3!)/3!` which leaves you with `5 * 4`, or `20`.

In other words, `n!/(n-1)! = n`.

###0!
`0!` is equal to `1`.

We know that `1! = 1`. Using the formula for dividing factorials, it's also true that `1!/0! = 1`. This simplifies to `0! = 1`.


