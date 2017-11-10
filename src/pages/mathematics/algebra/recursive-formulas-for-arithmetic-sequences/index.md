---
title: Recursive Formulas for Arithmetic Sequences
---
## Recursive Formulas for Arithmetic Sequences
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
A sequence is list of numbers where the same operation(s) is done to one number in order to get the next. Arithmetic sequences specifically
refer to sequences constructed by adding or subtracting a value to get the next term. In order to efficiently talk about a sequence, we
use a recursive formula that builds the sequence when a list of indices are put in. Typically, these formulas are given one-letter names, followed by a parameter in parentheses, and the expression that builds the sequence on the right hand side.
`a(n) = n + 1`
Above is an example of a recursive formula for an arithmetic sequence 
### Examples
Sequence | Formula
---------|---------
`1, 2, 3, 4, ... ` | `a(n) = n + 1`
`3, 8, 13, 18, ... ` | `b(n) = 5n - 2`

### Why is it recursive?
Notice that if you wanted the 17th term in a sequence, there are two ways to find your answer:
1. Plug in 17 for the parameter and simplify the equation.
    - This is the most straightforward approach, and likely your intuitive approach.
2. Use recursion.
    - Is the first term the zeroth index or the first?
      - Mathematicians start counting at 1, so by convention, `n=1` is the first term.
    - If you want the 17th term, find the 16th term. If you want the 16th term, find the... If you want the first term, plug in 1 for the 
  parameter and simplify the equation.

### Finding the Formula (given a sequence)
    1. Figure out what the distance between two terms is
        Pick a term in the sequence and subtract the term that comes before it. 
    2. Figure out the zeroth term
        Subtract the distance found in Step 1 from the first term.
    3. Construct the formula
        The formula has the form: `(distance) * (index variable) + (zeroth term)`

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information on this topic, visit
- [Wikipedia](https://en.wikipedia.org/wiki/Arithmetic_progression)
- [Khan Academy](https://www.khanacademy.org/math/algebra/sequences/introduction-to-arithmetic-squences/v/arithmetic-sequences)
- A related topic: Recursive Formulas for Geometric Sequences[]()
