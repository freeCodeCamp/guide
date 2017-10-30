---
title: Tautologies
---
## Tautologies

A tautology is a formula which is "always true" --- that is, it is true for every assignment of truth values to its simple components. You can think of a tautology as a rule of logic.
The problem of determining whether a formula is a tautology is fundamental in propositional logic. If there are n variables occurring in a formula then there are 2n distinct valuations for the formula. Therefore, the task of determining whether or not the formula is a tautology is a finite, mechanical one: one need only evaluate the truth value of the formula under each of its possible valuations. One algorithmic method for verifying that every valuation causes this sentence to be true is to make a truth table that includes every possible valuation.
For example, consider the formula
{\displaystyle ((A\land B)\to C)\Leftrightarrow (A\to (B\to C)).} ((A\land B)\to C)\Leftrightarrow (A\to (B\to C)).
There are 8 possible valuations for the propositional variables A, B, C, represented by the first three columns of the following table. The remaining columns show the truth of subformulas of the formula above, culminating in a column showing the truth value of the original formula under each valuation.

The opposite of a tautology is a contradiction, a formula which is "always false". In other words, a contradiction is false for every assignment of truth values to its simple components.

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Wikipedia Tautology (Logic)](https://en.wikipedia.org/wiki/Tautology_(logic))

