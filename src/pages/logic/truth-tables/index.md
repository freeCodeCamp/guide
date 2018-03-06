---
title: Truth Tables
---
## Truth Tables

A truth table is a mathematical tool used in Boolean Algebra. It consists of a column each for the function variables. A final column holds the functional value evaluated for the corresponding values of the variables. For a boolean function of n varibles, its truth table expansion will have 2^n rows. This is beacuse each varaible has two possible states – true & false.

### AND
Let us explore the truth table for the AND operator :

| x | y | x AND y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | F  |
| T  | F  | F  |
| T  | T  | T  |

AND is binary operator. It operates on two variables, say `x`, `y`. 

Thus we have 2^2 = 4 columns in our truth table !

The last column is the functional value – x AND y.The logic for AND operation is that if values of x and y are both True only then the output would have the value True else it would be False. 

Similarly truth tables for other logical operators -

### NOT

| x | NOT X |
|---|---|
| F  | T  |
| T  | F  |

### OR

| x | y | x OR y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | T  |

### XOR

| x | y | x XOR y  |
|---|---|---|
| F  | F  | F  |
| F  | T  | T  |
| T  | F  | T  |
| T  | T  | F  |

Truth tables are a powerful tool. They can be used to express & evaluate simple boolean functions and operations as well complex combinational circuits and sequential logic circuits !

#### More Information:

- <a href='http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/truth.html' target='_blank' rel='nofollow'>Hyperphysics - Georgia State University</a>
- <a href='https://en.wikipedia.org/wiki/Truth_table' target='_blank' rel='nofollow'>Wikipedia</a>

