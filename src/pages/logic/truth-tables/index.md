---
title: Truth Tables
---
## Truth Tables

A truth table is a mathematical tool used in Boolean Algebra. It consists of a column each for the function variables. A final column holds the functional value evaluated for the corresponding values of the variables. For a boolean function of n varibles, its truth table expansion will have 2^n rows. This is beacuse each varaible has two possible states – true & false.

Let us explore the truth table for the AND operator :

| x | y | x AND y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | F  |
| T  | F  | F  |
| T  | T  | T  |

AND is binary operator. It operates on two variables, say `x`, `y`. 

Thus we have 2^2 = 4 columns in our truth table !

The last column is the functional value – x AND y.

Truth tables are a powerful tool. They can be used to express & evaluate simple boolean functions and operations as well complex combinational circuits and sequential logic circuits !

Here is the truth table for the OR operator


| x | y | x OR y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | F  |

Just like above the OR operator operates on two variables, notice that the only time the OR operator evaluates to True is when `x` & `y` negate eachother.

Let's do one more, let's do the table for the Negation, this operates on one value instead of two


| x | NOT x  |
|---|---|
| T  | F  |
| F  | T  |

This rule is simpler and it simply negates the original value of `x`

#### More Information:

- <a href='http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/truth.html' target='_blank' rel='nofollow'>Hyperphysics - Georgia State University</a>
- <a href='https://en.wikipedia.org/wiki/Truth_table' target='_blank' rel='nofollow'>Wikipedia</a>

