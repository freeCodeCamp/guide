---
title: Logical Operators
---
## Logical Operators

In computer science, logical operators are symbol used to create a predicate which can assume only a value between _true_ and _false_.

Every operator has a truth table, which describe the state of resulting predicate based on the state of the predicates it is applied.
Assuming that A and B are the two predicates joined with the operator, let's call C the value of the resulting predicate.
* **And**

| A | B | C |
| - | - | - |
| T | F | F |
| T | T | T |
| F | F | F |
| F | T | F |

* **Or**

| A | B | C |
| - | - | - |
| T | F | T |
| T | T | T |
| F | F | F |
| F | T | F |

* **Not** 
It's a unary operator and this means it's applied to only one predicate.
| A | C | 
| - | - | 
| T | F | 
| F | T | 

* **Xor** ("eXclusive or")

| A | B | C |
| - | - | - |
| T | F | T |
| T | T | F |
| F | F | F |
| F | T | T |

There are a lot more logical operators but there are the most used.
