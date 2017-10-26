---
title: Logical Operators
---
## Logical Operators

**AND (&&)** </br>
A&&B returns True if both A and B are True. If either A or B (or both) are False, then A&&B is False.

**OR (||)** </br>
A||B returns True if A or B (or both A and B) is True. Only returns False if both A and B is False.

**NOT (!)** </br>
Negates a truth value (true or false). Ex. if A is true, then !A is false.

**XOR ("eXclusive or")** </br>
Similar to OR, but returns False if both A and B are true. That is, XOR returns true if one and only one of A or B is True.

**Implication (A -> B)** </br>
Read as "if A, then B" or "A implies B". 
Only returns False when A is True and B is False. Otherwise the implication is True. </br>
<img src="http://sites.millersville.edu/bikenaga/math-proof/truth-tables/truth-tables13.png">

Note: Implications are often used for direct mathematical proofs. A represents the hypothesis, while B is the conclusion.

**Logical Equivalence (iff: if and only if)** </br>
"P if and only if Q" is the same as "P implies Q AND Q implies P". In other words, the truth tables for P and Q are identical for all truth values. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
